// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { UpdateEndpointWeightsAndCapacitiesInput, UpdateEndpointWeightsAndCapacitiesOutput } from "../models/models_4";
import {
  de_UpdateEndpointWeightsAndCapacitiesCommand,
  se_UpdateEndpointWeightsAndCapacitiesCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateEndpointWeightsAndCapacitiesCommand}.
 */
export interface UpdateEndpointWeightsAndCapacitiesCommandInput extends UpdateEndpointWeightsAndCapacitiesInput {}
/**
 * @public
 *
 * The output of {@link UpdateEndpointWeightsAndCapacitiesCommand}.
 */
export interface UpdateEndpointWeightsAndCapacitiesCommandOutput
  extends UpdateEndpointWeightsAndCapacitiesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates variant weight of one or more variants associated with an existing
 *             endpoint, or capacity of one variant associated with an existing endpoint. When it
 *             receives the request, SageMaker sets the endpoint status to <code>Updating</code>. After
 *             updating the endpoint, it sets the status to <code>InService</code>. To check the status
 *             of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateEndpointWeightsAndCapacitiesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateEndpointWeightsAndCapacitiesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateEndpointWeightsAndCapacitiesInput
 *   EndpointName: "STRING_VALUE", // required
 *   DesiredWeightsAndCapacities: [ // DesiredWeightAndCapacityList // required
 *     { // DesiredWeightAndCapacity
 *       VariantName: "STRING_VALUE", // required
 *       DesiredWeight: Number("float"),
 *       DesiredInstanceCount: Number("int"),
 *       ServerlessUpdateConfig: { // ProductionVariantServerlessUpdateConfig
 *         MaxConcurrency: Number("int"),
 *         ProvisionedConcurrency: Number("int"),
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateEndpointWeightsAndCapacitiesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEndpointWeightsAndCapacitiesOutput
 * //   EndpointArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateEndpointWeightsAndCapacitiesCommandInput - {@link UpdateEndpointWeightsAndCapacitiesCommandInput}
 * @returns {@link UpdateEndpointWeightsAndCapacitiesCommandOutput}
 * @see {@link UpdateEndpointWeightsAndCapacitiesCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointWeightsAndCapacitiesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class UpdateEndpointWeightsAndCapacitiesCommand extends $Command<
  UpdateEndpointWeightsAndCapacitiesCommandInput,
  UpdateEndpointWeightsAndCapacitiesCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateEndpointWeightsAndCapacitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEndpointWeightsAndCapacitiesCommandInput, UpdateEndpointWeightsAndCapacitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEndpointWeightsAndCapacitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateEndpointWeightsAndCapacitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: UpdateEndpointWeightsAndCapacitiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateEndpointWeightsAndCapacitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateEndpointWeightsAndCapacitiesCommandOutput> {
    return de_UpdateEndpointWeightsAndCapacitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
