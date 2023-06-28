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

import { SendHeartbeatRequest } from "../models/models_0";
import { de_SendHeartbeatCommand, se_SendHeartbeatCommand } from "../protocols/Aws_restJson1";
import { SagemakerEdgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SagemakerEdgeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendHeartbeatCommand}.
 */
export interface SendHeartbeatCommandInput extends SendHeartbeatRequest {}
/**
 * @public
 *
 * The output of {@link SendHeartbeatCommand}.
 */
export interface SendHeartbeatCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Use to get the current status of devices registered on SageMaker Edge Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerEdgeClient, SendHeartbeatCommand } from "@aws-sdk/client-sagemaker-edge"; // ES Modules import
 * // const { SagemakerEdgeClient, SendHeartbeatCommand } = require("@aws-sdk/client-sagemaker-edge"); // CommonJS import
 * const client = new SagemakerEdgeClient(config);
 * const input = { // SendHeartbeatRequest
 *   AgentMetrics: [ // EdgeMetrics
 *     { // EdgeMetric
 *       Dimension: "STRING_VALUE",
 *       MetricName: "STRING_VALUE",
 *       Value: Number("double"),
 *       Timestamp: new Date("TIMESTAMP"),
 *     },
 *   ],
 *   Models: [ // Models
 *     { // Model
 *       ModelName: "STRING_VALUE",
 *       ModelVersion: "STRING_VALUE",
 *       LatestSampleTime: new Date("TIMESTAMP"),
 *       LatestInference: new Date("TIMESTAMP"),
 *       ModelMetrics: [
 *         {
 *           Dimension: "STRING_VALUE",
 *           MetricName: "STRING_VALUE",
 *           Value: Number("double"),
 *           Timestamp: new Date("TIMESTAMP"),
 *         },
 *       ],
 *     },
 *   ],
 *   AgentVersion: "STRING_VALUE", // required
 *   DeviceName: "STRING_VALUE", // required
 *   DeviceFleetName: "STRING_VALUE", // required
 *   DeploymentResult: { // DeploymentResult
 *     DeploymentName: "STRING_VALUE",
 *     DeploymentStatus: "STRING_VALUE",
 *     DeploymentStatusMessage: "STRING_VALUE",
 *     DeploymentStartTime: new Date("TIMESTAMP"),
 *     DeploymentEndTime: new Date("TIMESTAMP"),
 *     DeploymentModels: [ // DeploymentModels
 *       { // DeploymentModel
 *         ModelHandle: "STRING_VALUE",
 *         ModelName: "STRING_VALUE",
 *         ModelVersion: "STRING_VALUE",
 *         DesiredState: "STRING_VALUE",
 *         State: "STRING_VALUE",
 *         Status: "STRING_VALUE",
 *         StatusReason: "STRING_VALUE",
 *         RollbackFailureReason: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new SendHeartbeatCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendHeartbeatCommandInput - {@link SendHeartbeatCommandInput}
 * @returns {@link SendHeartbeatCommandOutput}
 * @see {@link SendHeartbeatCommandInput} for command's `input` shape.
 * @see {@link SendHeartbeatCommandOutput} for command's `response` shape.
 * @see {@link SagemakerEdgeClientResolvedConfig | config} for SagemakerEdgeClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (client fault)
 *  <p>An internal failure occurred. Try your request again. If the problem
 *       persists, contact Amazon Web Services customer support.</p>
 *
 * @throws {@link SagemakerEdgeServiceException}
 * <p>Base exception class for all service exceptions from SagemakerEdge service.</p>
 *
 */
export class SendHeartbeatCommand extends $Command<
  SendHeartbeatCommandInput,
  SendHeartbeatCommandOutput,
  SagemakerEdgeClientResolvedConfig
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
  constructor(readonly input: SendHeartbeatCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SagemakerEdgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendHeartbeatCommandInput, SendHeartbeatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SendHeartbeatCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SagemakerEdgeClient";
    const commandName = "SendHeartbeatCommand";
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
  private serialize(input: SendHeartbeatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendHeartbeatCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendHeartbeatCommandOutput> {
    return de_SendHeartbeatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
