// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DisableEnhancedMonitoringInput, EnhancedMonitoringOutput } from "../models/models_0";
import { de_DisableEnhancedMonitoringCommand, se_DisableEnhancedMonitoringCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableEnhancedMonitoringCommand}.
 */
export interface DisableEnhancedMonitoringCommandInput extends DisableEnhancedMonitoringInput {}
/**
 * @public
 *
 * The output of {@link DisableEnhancedMonitoringCommand}.
 */
export interface DisableEnhancedMonitoringCommandOutput extends EnhancedMonitoringOutput, __MetadataBearer {}

/**
 * <p>Disables enhanced monitoring.</p>
 *          <note>
 *             <p>When invoking this API, you must use either the <code>StreamARN</code> or the
 *                     <code>StreamName</code> parameter, or both. It is recommended that you use the
 *                     <code>StreamARN</code> input parameter when you invoke this API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DisableEnhancedMonitoringCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DisableEnhancedMonitoringCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // DisableEnhancedMonitoringInput
 *   StreamName: "STRING_VALUE",
 *   ShardLevelMetrics: [ // MetricsNameList // required
 *     "IncomingBytes" || "IncomingRecords" || "OutgoingBytes" || "OutgoingRecords" || "WriteProvisionedThroughputExceeded" || "ReadProvisionedThroughputExceeded" || "IteratorAgeMilliseconds" || "ALL",
 *   ],
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DisableEnhancedMonitoringCommand(input);
 * const response = await client.send(command);
 * // { // EnhancedMonitoringOutput
 * //   StreamName: "STRING_VALUE",
 * //   CurrentShardLevelMetrics: [ // MetricsNameList
 * //     "IncomingBytes" || "IncomingRecords" || "OutgoingBytes" || "OutgoingRecords" || "WriteProvisionedThroughputExceeded" || "ReadProvisionedThroughputExceeded" || "IteratorAgeMilliseconds" || "ALL",
 * //   ],
 * //   DesiredShardLevelMetrics: [
 * //     "IncomingBytes" || "IncomingRecords" || "OutgoingBytes" || "OutgoingRecords" || "WriteProvisionedThroughputExceeded" || "ReadProvisionedThroughputExceeded" || "IteratorAgeMilliseconds" || "ALL",
 * //   ],
 * //   StreamARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisableEnhancedMonitoringCommandInput - {@link DisableEnhancedMonitoringCommandInput}
 * @returns {@link DisableEnhancedMonitoringCommandOutput}
 * @see {@link DisableEnhancedMonitoringCommandInput} for command's `input` shape.
 * @see {@link DisableEnhancedMonitoringCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is not available for this operation. For successful operation, the
 *             resource must be in the <code>ACTIVE</code> state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 * @public
 */
export class DisableEnhancedMonitoringCommand extends $Command
  .classBuilder<
    DisableEnhancedMonitoringCommandInput,
    DisableEnhancedMonitoringCommandOutput,
    KinesisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    OperationType: { type: "staticContextParams", value: `control` },
    StreamARN: { type: "contextParams", name: "StreamARN" },
  })
  .m(function (this: any, Command: any, cs: any, config: KinesisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kinesis_20131202", "DisableEnhancedMonitoring", {})
  .n("KinesisClient", "DisableEnhancedMonitoringCommand")
  .f(void 0, void 0)
  .ser(se_DisableEnhancedMonitoringCommand)
  .de(de_DisableEnhancedMonitoringCommand)
  .build() {}
