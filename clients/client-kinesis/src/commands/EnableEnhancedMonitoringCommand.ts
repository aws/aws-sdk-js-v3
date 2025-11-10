// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { EnableEnhancedMonitoringInput, EnhancedMonitoringOutput } from "../models/models_0";
import { EnableEnhancedMonitoring } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableEnhancedMonitoringCommand}.
 */
export interface EnableEnhancedMonitoringCommandInput extends EnableEnhancedMonitoringInput {}
/**
 * @public
 *
 * The output of {@link EnableEnhancedMonitoringCommand}.
 */
export interface EnableEnhancedMonitoringCommandOutput extends EnhancedMonitoringOutput, __MetadataBearer {}

/**
 * <p>Enables enhanced Kinesis data stream monitoring for shard-level metrics.</p>
 *          <note>
 *             <p>When invoking this API, you must use either the <code>StreamARN</code> or the
 *                     <code>StreamName</code> parameter, or both. It is recommended that you use the
 *                     <code>StreamARN</code> input parameter when you invoke this API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, EnableEnhancedMonitoringCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, EnableEnhancedMonitoringCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // EnableEnhancedMonitoringInput
 *   StreamName: "STRING_VALUE",
 *   ShardLevelMetrics: [ // MetricsNameList // required
 *     "IncomingBytes" || "IncomingRecords" || "OutgoingBytes" || "OutgoingRecords" || "WriteProvisionedThroughputExceeded" || "ReadProvisionedThroughputExceeded" || "IteratorAgeMilliseconds" || "ALL",
 *   ],
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new EnableEnhancedMonitoringCommand(input);
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
 * @param EnableEnhancedMonitoringCommandInput - {@link EnableEnhancedMonitoringCommandInput}
 * @returns {@link EnableEnhancedMonitoringCommandOutput}
 * @see {@link EnableEnhancedMonitoringCommandInput} for command's `input` shape.
 * @see {@link EnableEnhancedMonitoringCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class EnableEnhancedMonitoringCommand extends $Command
  .classBuilder<
    EnableEnhancedMonitoringCommandInput,
    EnableEnhancedMonitoringCommandOutput,
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kinesis_20131202", "EnableEnhancedMonitoring", {})
  .n("KinesisClient", "EnableEnhancedMonitoringCommand")
  .sc(EnableEnhancedMonitoring)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableEnhancedMonitoringInput;
      output: EnhancedMonitoringOutput;
    };
    sdk: {
      input: EnableEnhancedMonitoringCommandInput;
      output: EnableEnhancedMonitoringCommandOutput;
    };
  };
}
