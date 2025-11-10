// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSearchJobInput, GetSearchJobOutput } from "../models/models_0";
import { GetSearchJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSearchJobCommand}.
 */
export interface GetSearchJobCommandInput extends GetSearchJobInput {}
/**
 * @public
 *
 * The output of {@link GetSearchJobCommand}.
 */
export interface GetSearchJobCommandOutput extends GetSearchJobOutput, __MetadataBearer {}

/**
 * <p>This operation retrieves metadata of a search job, including its progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupSearchClient, GetSearchJobCommand } from "@aws-sdk/client-backupsearch"; // ES Modules import
 * // const { BackupSearchClient, GetSearchJobCommand } = require("@aws-sdk/client-backupsearch"); // CommonJS import
 * // import type { BackupSearchClientConfig } from "@aws-sdk/client-backupsearch";
 * const config = {}; // type is BackupSearchClientConfig
 * const client = new BackupSearchClient(config);
 * const input = { // GetSearchJobInput
 *   SearchJobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetSearchJobCommand(input);
 * const response = await client.send(command);
 * // { // GetSearchJobOutput
 * //   Name: "STRING_VALUE",
 * //   SearchScopeSummary: { // SearchScopeSummary
 * //     TotalRecoveryPointsToScanCount: Number("int"),
 * //     TotalItemsToScanCount: Number("long"),
 * //   },
 * //   CurrentSearchProgress: { // CurrentSearchProgress
 * //     RecoveryPointsScannedCount: Number("int"),
 * //     ItemsScannedCount: Number("long"),
 * //     ItemsMatchedCount: Number("long"),
 * //   },
 * //   StatusMessage: "STRING_VALUE",
 * //   EncryptionKeyArn: "STRING_VALUE",
 * //   CompletionTime: new Date("TIMESTAMP"),
 * //   Status: "RUNNING" || "COMPLETED" || "STOPPING" || "STOPPED" || "FAILED", // required
 * //   SearchScope: { // SearchScope
 * //     BackupResourceTypes: [ // ResourceTypeList // required
 * //       "S3" || "EBS",
 * //     ],
 * //     BackupResourceCreationTime: { // BackupCreationTimeFilter
 * //       CreatedAfter: new Date("TIMESTAMP"),
 * //       CreatedBefore: new Date("TIMESTAMP"),
 * //     },
 * //     SourceResourceArns: [ // ResourceArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     BackupResourceArns: [ // RecoveryPointArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     BackupResourceTags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   ItemFilters: { // ItemFilters
 * //     S3ItemFilters: [ // S3ItemFilters
 * //       { // S3ItemFilter
 * //         ObjectKeys: [ // StringConditionList
 * //           { // StringCondition
 * //             Value: "STRING_VALUE", // required
 * //             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "CONTAINS" || "DOES_NOT_CONTAIN" || "BEGINS_WITH" || "ENDS_WITH" || "DOES_NOT_BEGIN_WITH" || "DOES_NOT_END_WITH",
 * //           },
 * //         ],
 * //         Sizes: [ // LongConditionList
 * //           { // LongCondition
 * //             Value: Number("long"), // required
 * //             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "LESS_THAN_EQUAL_TO" || "GREATER_THAN_EQUAL_TO",
 * //           },
 * //         ],
 * //         CreationTimes: [ // TimeConditionList
 * //           { // TimeCondition
 * //             Value: new Date("TIMESTAMP"), // required
 * //             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "LESS_THAN_EQUAL_TO" || "GREATER_THAN_EQUAL_TO",
 * //           },
 * //         ],
 * //         VersionIds: [
 * //           {
 * //             Value: "STRING_VALUE", // required
 * //             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "CONTAINS" || "DOES_NOT_CONTAIN" || "BEGINS_WITH" || "ENDS_WITH" || "DOES_NOT_BEGIN_WITH" || "DOES_NOT_END_WITH",
 * //           },
 * //         ],
 * //         ETags: [
 * //           {
 * //             Value: "STRING_VALUE", // required
 * //             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "CONTAINS" || "DOES_NOT_CONTAIN" || "BEGINS_WITH" || "ENDS_WITH" || "DOES_NOT_BEGIN_WITH" || "DOES_NOT_END_WITH",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     EBSItemFilters: [ // EBSItemFilters
 * //       { // EBSItemFilter
 * //         FilePaths: [
 * //           {
 * //             Value: "STRING_VALUE", // required
 * //             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "CONTAINS" || "DOES_NOT_CONTAIN" || "BEGINS_WITH" || "ENDS_WITH" || "DOES_NOT_BEGIN_WITH" || "DOES_NOT_END_WITH",
 * //           },
 * //         ],
 * //         Sizes: [
 * //           {
 * //             Value: Number("long"), // required
 * //             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "LESS_THAN_EQUAL_TO" || "GREATER_THAN_EQUAL_TO",
 * //           },
 * //         ],
 * //         CreationTimes: [
 * //           {
 * //             Value: new Date("TIMESTAMP"), // required
 * //             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "LESS_THAN_EQUAL_TO" || "GREATER_THAN_EQUAL_TO",
 * //           },
 * //         ],
 * //         LastModificationTimes: [
 * //           {
 * //             Value: new Date("TIMESTAMP"), // required
 * //             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "LESS_THAN_EQUAL_TO" || "GREATER_THAN_EQUAL_TO",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   SearchJobIdentifier: "STRING_VALUE", // required
 * //   SearchJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetSearchJobCommandInput - {@link GetSearchJobCommandInput}
 * @returns {@link GetSearchJobCommandOutput}
 * @see {@link GetSearchJobCommandInput} for command's `input` shape.
 * @see {@link GetSearchJobCommandOutput} for command's `response` shape.
 * @see {@link BackupSearchClientResolvedConfig | config} for BackupSearchClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found for this request.</p> <p>Confirm the resource information, such as the ARN or type is correct and exists, then retry the request.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link BackupSearchServiceException}
 * <p>Base exception class for all service exceptions from BackupSearch service.</p>
 *
 *
 * @public
 */
export class GetSearchJobCommand extends $Command
  .classBuilder<
    GetSearchJobCommandInput,
    GetSearchJobCommandOutput,
    BackupSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoBackupSearchService", "GetSearchJob", {})
  .n("BackupSearchClient", "GetSearchJobCommand")
  .sc(GetSearchJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSearchJobInput;
      output: GetSearchJobOutput;
    };
    sdk: {
      input: GetSearchJobCommandInput;
      output: GetSearchJobCommandOutput;
    };
  };
}
