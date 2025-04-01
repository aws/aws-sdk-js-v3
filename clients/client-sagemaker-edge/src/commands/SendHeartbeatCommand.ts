// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendHeartbeatRequest } from "../models/models_0";
import { de_SendHeartbeatCommand, se_SendHeartbeatCommand } from "../protocols/Aws_restJson1";
import { SagemakerEdgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SagemakerEdgeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *         DesiredState: "DEPLOY" || "UNDEPLOY",
 *         State: "DEPLOY" || "UNDEPLOY",
 *         Status: "SUCCESS" || "FAIL",
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
 *
 * @public
 */
export class SendHeartbeatCommand extends $Command
  .classBuilder<
    SendHeartbeatCommandInput,
    SendHeartbeatCommandOutput,
    SagemakerEdgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SagemakerEdgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSageMakerEdge", "SendHeartbeat", {})
  .n("SagemakerEdgeClient", "SendHeartbeatCommand")
  .f(void 0, void 0)
  .ser(se_SendHeartbeatCommand)
  .de(de_SendHeartbeatCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendHeartbeatRequest;
      output: {};
    };
    sdk: {
      input: SendHeartbeatCommandInput;
      output: SendHeartbeatCommandOutput;
    };
  };
}
