// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTransformerRequest, GetTransformerResponse } from "../models/models_0";
import { de_GetTransformerCommand, se_GetTransformerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTransformerCommand}.
 */
export interface GetTransformerCommandInput extends GetTransformerRequest {}
/**
 * @public
 *
 * The output of {@link GetTransformerCommand}.
 */
export interface GetTransformerCommandOutput extends GetTransformerResponse, __MetadataBearer {}

/**
 * <p>Returns the information about the log transformer associated with this log group.</p>
 *          <p>This operation returns data only for transformers created at the log group level. To get
 *       information for an account-level transformer, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeAccountPolicies.html">DescribeAccountPolicies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetTransformerCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetTransformerCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetTransformerRequest
 *   logGroupIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetTransformerCommand(input);
 * const response = await client.send(command);
 * // { // GetTransformerResponse
 * //   logGroupIdentifier: "STRING_VALUE",
 * //   creationTime: Number("long"),
 * //   lastModifiedTime: Number("long"),
 * //   transformerConfig: [ // Processors
 * //     { // Processor
 * //       addKeys: { // AddKeys
 * //         entries: [ // AddKeyEntries // required
 * //           { // AddKeyEntry
 * //             key: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //             overwriteIfExists: true || false,
 * //           },
 * //         ],
 * //       },
 * //       copyValue: { // CopyValue
 * //         entries: [ // CopyValueEntries // required
 * //           { // CopyValueEntry
 * //             source: "STRING_VALUE", // required
 * //             target: "STRING_VALUE", // required
 * //             overwriteIfExists: true || false,
 * //           },
 * //         ],
 * //       },
 * //       csv: { // CSV
 * //         quoteCharacter: "STRING_VALUE",
 * //         delimiter: "STRING_VALUE",
 * //         columns: [ // Columns
 * //           "STRING_VALUE",
 * //         ],
 * //         source: "STRING_VALUE",
 * //       },
 * //       dateTimeConverter: { // DateTimeConverter
 * //         source: "STRING_VALUE", // required
 * //         target: "STRING_VALUE", // required
 * //         targetFormat: "STRING_VALUE",
 * //         matchPatterns: [ // MatchPatterns // required
 * //           "STRING_VALUE",
 * //         ],
 * //         sourceTimezone: "STRING_VALUE",
 * //         targetTimezone: "STRING_VALUE",
 * //         locale: "STRING_VALUE",
 * //       },
 * //       deleteKeys: { // DeleteKeys
 * //         withKeys: [ // DeleteWithKeys // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       grok: { // Grok
 * //         source: "STRING_VALUE",
 * //         match: "STRING_VALUE", // required
 * //       },
 * //       listToMap: { // ListToMap
 * //         source: "STRING_VALUE", // required
 * //         key: "STRING_VALUE", // required
 * //         valueKey: "STRING_VALUE",
 * //         target: "STRING_VALUE",
 * //         flatten: true || false,
 * //         flattenedElement: "first" || "last",
 * //       },
 * //       lowerCaseString: { // LowerCaseString
 * //         withKeys: [ // LowerCaseStringWithKeys // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       moveKeys: { // MoveKeys
 * //         entries: [ // MoveKeyEntries // required
 * //           { // MoveKeyEntry
 * //             source: "STRING_VALUE", // required
 * //             target: "STRING_VALUE", // required
 * //             overwriteIfExists: true || false,
 * //           },
 * //         ],
 * //       },
 * //       parseCloudfront: { // ParseCloudfront
 * //         source: "STRING_VALUE",
 * //       },
 * //       parseJSON: { // ParseJSON
 * //         source: "STRING_VALUE",
 * //         destination: "STRING_VALUE",
 * //       },
 * //       parseKeyValue: { // ParseKeyValue
 * //         source: "STRING_VALUE",
 * //         destination: "STRING_VALUE",
 * //         fieldDelimiter: "STRING_VALUE",
 * //         keyValueDelimiter: "STRING_VALUE",
 * //         keyPrefix: "STRING_VALUE",
 * //         nonMatchValue: "STRING_VALUE",
 * //         overwriteIfExists: true || false,
 * //       },
 * //       parseRoute53: { // ParseRoute53
 * //         source: "STRING_VALUE",
 * //       },
 * //       parseToOCSF: { // ParseToOCSF
 * //         source: "STRING_VALUE",
 * //         eventSource: "CloudTrail" || "Route53Resolver" || "VPCFlow" || "EKSAudit" || "AWSWAF", // required
 * //         ocsfVersion: "V1.1", // required
 * //       },
 * //       parsePostgres: { // ParsePostgres
 * //         source: "STRING_VALUE",
 * //       },
 * //       parseVPC: { // ParseVPC
 * //         source: "STRING_VALUE",
 * //       },
 * //       parseWAF: { // ParseWAF
 * //         source: "STRING_VALUE",
 * //       },
 * //       renameKeys: { // RenameKeys
 * //         entries: [ // RenameKeyEntries // required
 * //           { // RenameKeyEntry
 * //             key: "STRING_VALUE", // required
 * //             renameTo: "STRING_VALUE", // required
 * //             overwriteIfExists: true || false,
 * //           },
 * //         ],
 * //       },
 * //       splitString: { // SplitString
 * //         entries: [ // SplitStringEntries // required
 * //           { // SplitStringEntry
 * //             source: "STRING_VALUE", // required
 * //             delimiter: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       substituteString: { // SubstituteString
 * //         entries: [ // SubstituteStringEntries // required
 * //           { // SubstituteStringEntry
 * //             source: "STRING_VALUE", // required
 * //             from: "STRING_VALUE", // required
 * //             to: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       trimString: { // TrimString
 * //         withKeys: [ // TrimStringWithKeys // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       typeConverter: { // TypeConverter
 * //         entries: [ // TypeConverterEntries // required
 * //           { // TypeConverterEntry
 * //             key: "STRING_VALUE", // required
 * //             type: "boolean" || "integer" || "double" || "string", // required
 * //           },
 * //         ],
 * //       },
 * //       upperCaseString: { // UpperCaseString
 * //         withKeys: [ // UpperCaseStringWithKeys // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTransformerCommandInput - {@link GetTransformerCommandInput}
 * @returns {@link GetTransformerCommandOutput}
 * @see {@link GetTransformerCommandInput} for command's `input` shape.
 * @see {@link GetTransformerCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation is not valid on the specified resource.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
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
export class GetTransformerCommand extends $Command
  .classBuilder<
    GetTransformerCommandInput,
    GetTransformerCommandOutput,
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
  .s("Logs_20140328", "GetTransformer", {})
  .n("CloudWatchLogsClient", "GetTransformerCommand")
  .f(void 0, void 0)
  .ser(se_GetTransformerCommand)
  .de(de_GetTransformerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTransformerRequest;
      output: GetTransformerResponse;
    };
    sdk: {
      input: GetTransformerCommandInput;
      output: GetTransformerCommandOutput;
    };
  };
}
