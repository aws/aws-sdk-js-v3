// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutTransformerRequest } from "../models/models_0";
import { de_PutTransformerCommand, se_PutTransformerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutTransformerCommand}.
 */
export interface PutTransformerCommandInput extends PutTransformerRequest {}
/**
 * @public
 *
 * The output of {@link PutTransformerCommand}.
 */
export interface PutTransformerCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or updates a <i>log transformer</i> for a single log group. You use log transformers to transform log events into
 *        a different format, making them easier for you to process and analyze. You can also transform logs from different sources into standardized formats that
 *        contains
 *        relevant, source-specific information.</p>
 *          <p>After you have created a transformer,
 *        CloudWatch Logs performs the transformations at the time of log ingestion. You can then refer to the transformed versions of the logs during
 *      operations such as querying with CloudWatch Logs Insights or creating metric filters or subscription filers.</p>
 *          <p>You can also use a transformer to copy metadata from metadata keys into the log events themselves. This metadata can include log group name,
 *      log stream name, account ID and Region.</p>
 *          <p>A transformer for a log group is a series of processors, where each processor applies one type of transformation to the log events
 *        ingested into this log group. The processors work one after another, in the order that you list them, like a pipeline. For more information about the available processors to use in a transformer, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-Processors">
 *        Processors that you can use</a>.</p>
 *          <p>Having log events in standardized format enables visibility across your applications for your log analysis, reporting, and alarming needs.
 *        CloudWatch Logs provides transformation for common log types with out-of-the-box transformation templates for major Amazon Web Services log sources such
 *        as VPC flow logs, Lambda, and Amazon RDS. You can use pre-built transformation templates or create custom transformation policies.</p>
 *          <p>You can create transformers only for the log groups in the Standard log class.</p>
 *          <p>You can also set up a transformer at the account level. For more information, see
 *        <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutAccountPolicy.html">PutAccountPolicy</a>. If there is both a
 *      log-group level transformer created with <code>PutTransformer</code> and an account-level transformer that could apply to the same log
 *      group, the log group uses only the log-group level transformer. It ignores the account-level transformer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutTransformerCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutTransformerCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutTransformerRequest
 *   logGroupIdentifier: "STRING_VALUE", // required
 *   transformerConfig: [ // Processors // required
 *     { // Processor
 *       addKeys: { // AddKeys
 *         entries: [ // AddKeyEntries // required
 *           { // AddKeyEntry
 *             key: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *             overwriteIfExists: true || false,
 *           },
 *         ],
 *       },
 *       copyValue: { // CopyValue
 *         entries: [ // CopyValueEntries // required
 *           { // CopyValueEntry
 *             source: "STRING_VALUE", // required
 *             target: "STRING_VALUE", // required
 *             overwriteIfExists: true || false,
 *           },
 *         ],
 *       },
 *       csv: { // CSV
 *         quoteCharacter: "STRING_VALUE",
 *         delimiter: "STRING_VALUE",
 *         columns: [ // Columns
 *           "STRING_VALUE",
 *         ],
 *         source: "STRING_VALUE",
 *       },
 *       dateTimeConverter: { // DateTimeConverter
 *         source: "STRING_VALUE", // required
 *         target: "STRING_VALUE", // required
 *         targetFormat: "STRING_VALUE",
 *         matchPatterns: [ // MatchPatterns // required
 *           "STRING_VALUE",
 *         ],
 *         sourceTimezone: "STRING_VALUE",
 *         targetTimezone: "STRING_VALUE",
 *         locale: "STRING_VALUE",
 *       },
 *       deleteKeys: { // DeleteKeys
 *         withKeys: [ // DeleteWithKeys // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       grok: { // Grok
 *         source: "STRING_VALUE",
 *         match: "STRING_VALUE", // required
 *       },
 *       listToMap: { // ListToMap
 *         source: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *         valueKey: "STRING_VALUE",
 *         target: "STRING_VALUE",
 *         flatten: true || false,
 *         flattenedElement: "first" || "last",
 *       },
 *       lowerCaseString: { // LowerCaseString
 *         withKeys: [ // LowerCaseStringWithKeys // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       moveKeys: { // MoveKeys
 *         entries: [ // MoveKeyEntries // required
 *           { // MoveKeyEntry
 *             source: "STRING_VALUE", // required
 *             target: "STRING_VALUE", // required
 *             overwriteIfExists: true || false,
 *           },
 *         ],
 *       },
 *       parseCloudfront: { // ParseCloudfront
 *         source: "STRING_VALUE",
 *       },
 *       parseJSON: { // ParseJSON
 *         source: "STRING_VALUE",
 *         destination: "STRING_VALUE",
 *       },
 *       parseKeyValue: { // ParseKeyValue
 *         source: "STRING_VALUE",
 *         destination: "STRING_VALUE",
 *         fieldDelimiter: "STRING_VALUE",
 *         keyValueDelimiter: "STRING_VALUE",
 *         keyPrefix: "STRING_VALUE",
 *         nonMatchValue: "STRING_VALUE",
 *         overwriteIfExists: true || false,
 *       },
 *       parseRoute53: { // ParseRoute53
 *         source: "STRING_VALUE",
 *       },
 *       parseToOCSF: { // ParseToOCSF
 *         source: "STRING_VALUE",
 *         eventSource: "CloudTrail" || "Route53Resolver" || "VPCFlow" || "EKSAudit" || "AWSWAF", // required
 *         ocsfVersion: "V1.1", // required
 *       },
 *       parsePostgres: { // ParsePostgres
 *         source: "STRING_VALUE",
 *       },
 *       parseVPC: { // ParseVPC
 *         source: "STRING_VALUE",
 *       },
 *       parseWAF: { // ParseWAF
 *         source: "STRING_VALUE",
 *       },
 *       renameKeys: { // RenameKeys
 *         entries: [ // RenameKeyEntries // required
 *           { // RenameKeyEntry
 *             key: "STRING_VALUE", // required
 *             renameTo: "STRING_VALUE", // required
 *             overwriteIfExists: true || false,
 *           },
 *         ],
 *       },
 *       splitString: { // SplitString
 *         entries: [ // SplitStringEntries // required
 *           { // SplitStringEntry
 *             source: "STRING_VALUE", // required
 *             delimiter: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       substituteString: { // SubstituteString
 *         entries: [ // SubstituteStringEntries // required
 *           { // SubstituteStringEntry
 *             source: "STRING_VALUE", // required
 *             from: "STRING_VALUE", // required
 *             to: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       trimString: { // TrimString
 *         withKeys: [ // TrimStringWithKeys // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       typeConverter: { // TypeConverter
 *         entries: [ // TypeConverterEntries // required
 *           { // TypeConverterEntry
 *             key: "STRING_VALUE", // required
 *             type: "boolean" || "integer" || "double" || "string", // required
 *           },
 *         ],
 *       },
 *       upperCaseString: { // UpperCaseString
 *         withKeys: [ // UpperCaseStringWithKeys // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new PutTransformerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTransformerCommandInput - {@link PutTransformerCommandInput}
 * @returns {@link PutTransformerCommandOutput}
 * @see {@link PutTransformerCommandInput} for command's `input` shape.
 * @see {@link PutTransformerCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation is not valid on the specified resource.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class PutTransformerCommand extends $Command
  .classBuilder<
    PutTransformerCommandInput,
    PutTransformerCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "PutTransformer", {})
  .n("CloudWatchLogsClient", "PutTransformerCommand")
  .f(void 0, void 0)
  .ser(se_PutTransformerCommand)
  .de(de_PutTransformerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTransformerRequest;
      output: {};
    };
    sdk: {
      input: PutTransformerCommandInput;
      output: PutTransformerCommandOutput;
    };
  };
}
