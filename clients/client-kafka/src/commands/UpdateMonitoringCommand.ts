// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateMonitoringRequest, UpdateMonitoringResponse } from "../models/models_0";
import { de_UpdateMonitoringCommand, se_UpdateMonitoringCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMonitoringCommand}.
 */
export interface UpdateMonitoringCommandInput extends UpdateMonitoringRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMonitoringCommand}.
 */
export interface UpdateMonitoringCommandOutput extends UpdateMonitoringResponse, __MetadataBearer {}

/**
 * <p>Updates the monitoring settings for the cluster. You can use this operation to specify which Apache Kafka metrics you want Amazon MSK to send to Amazon CloudWatch. You can also specify settings for open monitoring with Prometheus.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateMonitoringCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateMonitoringCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KafkaClient(config);
 * const input = { // UpdateMonitoringRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   CurrentVersion: "STRING_VALUE", // required
 *   EnhancedMonitoring: "DEFAULT" || "PER_BROKER" || "PER_TOPIC_PER_BROKER" || "PER_TOPIC_PER_PARTITION",
 *   OpenMonitoring: { // OpenMonitoringInfo
 *     Prometheus: { // PrometheusInfo
 *       JmxExporter: { // JmxExporterInfo
 *         EnabledInBroker: true || false, // required
 *       },
 *       NodeExporter: { // NodeExporterInfo
 *         EnabledInBroker: true || false, // required
 *       },
 *     },
 *   },
 *   LoggingInfo: { // LoggingInfo
 *     BrokerLogs: { // BrokerLogs
 *       CloudWatchLogs: { // CloudWatchLogs
 *         Enabled: true || false, // required
 *         LogGroup: "STRING_VALUE",
 *       },
 *       Firehose: { // Firehose
 *         DeliveryStream: "STRING_VALUE",
 *         Enabled: true || false, // required
 *       },
 *       S3: { // S3
 *         Bucket: "STRING_VALUE",
 *         Enabled: true || false, // required
 *         Prefix: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateMonitoringCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMonitoringResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMonitoringCommandInput - {@link UpdateMonitoringCommandInput}
 * @returns {@link UpdateMonitoringCommandOutput}
 * @see {@link UpdateMonitoringCommandInput} for command's `input` shape.
 * @see {@link UpdateMonitoringCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 * @public
 */
export class UpdateMonitoringCommand extends $Command
  .classBuilder<
    UpdateMonitoringCommandInput,
    UpdateMonitoringCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kafka", "UpdateMonitoring", {})
  .n("KafkaClient", "UpdateMonitoringCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMonitoringCommand)
  .de(de_UpdateMonitoringCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMonitoringRequest;
      output: UpdateMonitoringResponse;
    };
    sdk: {
      input: UpdateMonitoringCommandInput;
      output: UpdateMonitoringCommandOutput;
    };
  };
}
