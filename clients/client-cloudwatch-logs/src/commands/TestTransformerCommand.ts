// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { TestTransformerRequest, TestTransformerResponse } from "../models/models_0";
import { TestTransformer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestTransformerCommand}.
 */
export interface TestTransformerCommandInput extends TestTransformerRequest {}
/**
 * @public
 *
 * The output of {@link TestTransformerCommand}.
 */
export interface TestTransformerCommandOutput extends TestTransformerResponse, __MetadataBearer {}

/**
 * <p>Use this operation to test a log transformer. You enter the transformer configuration and
 *       a set of log events to test with. The operation responds with an array that includes the
 *       original log events and the transformed versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, TestTransformerCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, TestTransformerCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // TestTransformerRequest
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
 *         ocsfVersion: "V1.1" || "V1.5", // required
 *         mappingVersion: "STRING_VALUE",
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
 *   logEventMessages: [ // TestEventMessages // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new TestTransformerCommand(input);
 * const response = await client.send(command);
 * // { // TestTransformerResponse
 * //   transformedLogs: [ // TransformedLogs
 * //     { // TransformedLogRecord
 * //       eventNumber: Number("long"),
 * //       eventMessage: "STRING_VALUE",
 * //       transformedEventMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param TestTransformerCommandInput - {@link TestTransformerCommandInput}
 * @returns {@link TestTransformerCommandOutput}
 * @see {@link TestTransformerCommandInput} for command's `input` shape.
 * @see {@link TestTransformerCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation is not valid on the specified resource.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
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
export class TestTransformerCommand extends $Command
  .classBuilder<
    TestTransformerCommandInput,
    TestTransformerCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "TestTransformer", {})
  .n("CloudWatchLogsClient", "TestTransformerCommand")
  .sc(TestTransformer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestTransformerRequest;
      output: TestTransformerResponse;
    };
    sdk: {
      input: TestTransformerCommandInput;
      output: TestTransformerCommandOutput;
    };
  };
}
