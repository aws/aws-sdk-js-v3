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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CreateEdgeDeploymentPlanRequest, CreateEdgeDeploymentPlanResponse } from "../models/models_1";
import { de_CreateEdgeDeploymentPlanCommand, se_CreateEdgeDeploymentPlanCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateEdgeDeploymentPlanCommand}.
 */
export interface CreateEdgeDeploymentPlanCommandInput extends CreateEdgeDeploymentPlanRequest {}
/**
 * @public
 *
 * The output of {@link CreateEdgeDeploymentPlanCommand}.
 */
export interface CreateEdgeDeploymentPlanCommandOutput extends CreateEdgeDeploymentPlanResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an edge deployment plan, consisting of multiple stages. Each stage may have a
 *             different deployment configuration and devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateEdgeDeploymentPlanCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateEdgeDeploymentPlanCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateEdgeDeploymentPlanRequest
 *   EdgeDeploymentPlanName: "STRING_VALUE", // required
 *   ModelConfigs: [ // EdgeDeploymentModelConfigs // required
 *     { // EdgeDeploymentModelConfig
 *       ModelHandle: "STRING_VALUE", // required
 *       EdgePackagingJobName: "STRING_VALUE", // required
 *     },
 *   ],
 *   DeviceFleetName: "STRING_VALUE", // required
 *   Stages: [ // DeploymentStages
 *     { // DeploymentStage
 *       StageName: "STRING_VALUE", // required
 *       DeviceSelectionConfig: { // DeviceSelectionConfig
 *         DeviceSubsetType: "PERCENTAGE" || "SELECTION" || "NAMECONTAINS", // required
 *         Percentage: Number("int"),
 *         DeviceNames: [ // DeviceNames
 *           "STRING_VALUE",
 *         ],
 *         DeviceNameContains: "STRING_VALUE",
 *       },
 *       DeploymentConfig: { // EdgeDeploymentConfig
 *         FailureHandlingPolicy: "ROLLBACK_ON_FAILURE" || "DO_NOTHING", // required
 *       },
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateEdgeDeploymentPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateEdgeDeploymentPlanResponse
 * //   EdgeDeploymentPlanArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateEdgeDeploymentPlanCommandInput - {@link CreateEdgeDeploymentPlanCommandInput}
 * @returns {@link CreateEdgeDeploymentPlanCommandOutput}
 * @see {@link CreateEdgeDeploymentPlanCommandInput} for command's `input` shape.
 * @see {@link CreateEdgeDeploymentPlanCommandOutput} for command's `response` shape.
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
export class CreateEdgeDeploymentPlanCommand extends $Command<
  CreateEdgeDeploymentPlanCommandInput,
  CreateEdgeDeploymentPlanCommandOutput,
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
  constructor(readonly input: CreateEdgeDeploymentPlanCommandInput) {
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
  ): Handler<CreateEdgeDeploymentPlanCommandInput, CreateEdgeDeploymentPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEdgeDeploymentPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateEdgeDeploymentPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateEdgeDeploymentPlan",
      },
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
  private serialize(input: CreateEdgeDeploymentPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateEdgeDeploymentPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEdgeDeploymentPlanCommandOutput> {
    return de_CreateEdgeDeploymentPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
