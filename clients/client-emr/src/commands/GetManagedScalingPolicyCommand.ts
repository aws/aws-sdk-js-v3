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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { GetManagedScalingPolicyInput, GetManagedScalingPolicyOutput } from "../models/models_0";
import { de_GetManagedScalingPolicyCommand, se_GetManagedScalingPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetManagedScalingPolicyCommand}.
 */
export interface GetManagedScalingPolicyCommandInput extends GetManagedScalingPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetManagedScalingPolicyCommand}.
 */
export interface GetManagedScalingPolicyCommandOutput extends GetManagedScalingPolicyOutput, __MetadataBearer {}

/**
 * @public
 * <p>Fetches the attached managed scaling policy for an Amazon EMR cluster. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetManagedScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetManagedScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // GetManagedScalingPolicyInput
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new GetManagedScalingPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedScalingPolicyOutput
 * //   ManagedScalingPolicy: { // ManagedScalingPolicy
 * //     ComputeLimits: { // ComputeLimits
 * //       UnitType: "InstanceFleetUnits" || "Instances" || "VCPU", // required
 * //       MinimumCapacityUnits: Number("int"), // required
 * //       MaximumCapacityUnits: Number("int"), // required
 * //       MaximumOnDemandCapacityUnits: Number("int"),
 * //       MaximumCoreCapacityUnits: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetManagedScalingPolicyCommandInput - {@link GetManagedScalingPolicyCommandInput}
 * @returns {@link GetManagedScalingPolicyCommandOutput}
 * @see {@link GetManagedScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link GetManagedScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class GetManagedScalingPolicyCommand extends $Command<
  GetManagedScalingPolicyCommandInput,
  GetManagedScalingPolicyCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: GetManagedScalingPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetManagedScalingPolicyCommandInput, GetManagedScalingPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetManagedScalingPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "GetManagedScalingPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "GetManagedScalingPolicy",
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
  private serialize(input: GetManagedScalingPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetManagedScalingPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetManagedScalingPolicyCommandOutput> {
    return de_GetManagedScalingPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
