// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartSearchJobInput, StartSearchJobOutput } from "../models/models_0";
import { de_StartSearchJobCommand, se_StartSearchJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSearchJobCommand}.
 */
export interface StartSearchJobCommandInput extends StartSearchJobInput {}
/**
 * @public
 *
 * The output of {@link StartSearchJobCommand}.
 */
export interface StartSearchJobCommandOutput extends StartSearchJobOutput, __MetadataBearer {}

/**
 * <p>This operation creates a search job which returns
 *       recovery points filtered by SearchScope and items
 *       filtered by ItemFilters.</p>
 *          <p>You can optionally include ClientToken,
 *       EncryptionKeyArn, Name, and/or Tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupSearchClient, StartSearchJobCommand } from "@aws-sdk/client-backupsearch"; // ES Modules import
 * // const { BackupSearchClient, StartSearchJobCommand } = require("@aws-sdk/client-backupsearch"); // CommonJS import
 * const client = new BackupSearchClient(config);
 * const input = { // StartSearchJobInput
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Name: "STRING_VALUE",
 *   EncryptionKeyArn: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   SearchScope: { // SearchScope
 *     BackupResourceTypes: [ // ResourceTypeList // required
 *       "S3" || "EBS",
 *     ],
 *     BackupResourceCreationTime: { // BackupCreationTimeFilter
 *       CreatedAfter: new Date("TIMESTAMP"),
 *       CreatedBefore: new Date("TIMESTAMP"),
 *     },
 *     SourceResourceArns: [ // ResourceArnList
 *       "STRING_VALUE",
 *     ],
 *     BackupResourceArns: [ // RecoveryPointArnList
 *       "STRING_VALUE",
 *     ],
 *     BackupResourceTags: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   ItemFilters: { // ItemFilters
 *     S3ItemFilters: [ // S3ItemFilters
 *       { // S3ItemFilter
 *         ObjectKeys: [ // StringConditionList
 *           { // StringCondition
 *             Value: "STRING_VALUE", // required
 *             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "CONTAINS" || "DOES_NOT_CONTAIN" || "BEGINS_WITH" || "ENDS_WITH" || "DOES_NOT_BEGIN_WITH" || "DOES_NOT_END_WITH",
 *           },
 *         ],
 *         Sizes: [ // LongConditionList
 *           { // LongCondition
 *             Value: Number("long"), // required
 *             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "LESS_THAN_EQUAL_TO" || "GREATER_THAN_EQUAL_TO",
 *           },
 *         ],
 *         CreationTimes: [ // TimeConditionList
 *           { // TimeCondition
 *             Value: new Date("TIMESTAMP"), // required
 *             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "LESS_THAN_EQUAL_TO" || "GREATER_THAN_EQUAL_TO",
 *           },
 *         ],
 *         VersionIds: [
 *           {
 *             Value: "STRING_VALUE", // required
 *             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "CONTAINS" || "DOES_NOT_CONTAIN" || "BEGINS_WITH" || "ENDS_WITH" || "DOES_NOT_BEGIN_WITH" || "DOES_NOT_END_WITH",
 *           },
 *         ],
 *         ETags: [
 *           {
 *             Value: "STRING_VALUE", // required
 *             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "CONTAINS" || "DOES_NOT_CONTAIN" || "BEGINS_WITH" || "ENDS_WITH" || "DOES_NOT_BEGIN_WITH" || "DOES_NOT_END_WITH",
 *           },
 *         ],
 *       },
 *     ],
 *     EBSItemFilters: [ // EBSItemFilters
 *       { // EBSItemFilter
 *         FilePaths: [
 *           {
 *             Value: "STRING_VALUE", // required
 *             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "CONTAINS" || "DOES_NOT_CONTAIN" || "BEGINS_WITH" || "ENDS_WITH" || "DOES_NOT_BEGIN_WITH" || "DOES_NOT_END_WITH",
 *           },
 *         ],
 *         Sizes: [
 *           {
 *             Value: Number("long"), // required
 *             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "LESS_THAN_EQUAL_TO" || "GREATER_THAN_EQUAL_TO",
 *           },
 *         ],
 *         CreationTimes: [
 *           {
 *             Value: new Date("TIMESTAMP"), // required
 *             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "LESS_THAN_EQUAL_TO" || "GREATER_THAN_EQUAL_TO",
 *           },
 *         ],
 *         LastModificationTimes: [
 *           {
 *             Value: new Date("TIMESTAMP"), // required
 *             Operator: "EQUALS_TO" || "NOT_EQUALS_TO" || "LESS_THAN_EQUAL_TO" || "GREATER_THAN_EQUAL_TO",
 *           },
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new StartSearchJobCommand(input);
 * const response = await client.send(command);
 * // { // StartSearchJobOutput
 * //   SearchJobArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   SearchJobIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSearchJobCommandInput - {@link StartSearchJobCommandInput}
 * @returns {@link StartSearchJobCommandOutput}
 * @see {@link StartSearchJobCommandInput} for command's `input` shape.
 * @see {@link StartSearchJobCommandOutput} for command's `response` shape.
 * @see {@link BackupSearchClientResolvedConfig | config} for BackupSearchClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful
 *             operation is detected. This generally occurs when the previous
 *             operation did not have time to propagate to the host serving the
 *             current request.</p>
 *          <p>A retry (with appropriate backoff logic) is the recommended
 *             response to this exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request denied due to exceeding the quota limits permitted.</p>
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
export class StartSearchJobCommand extends $Command
  .classBuilder<
    StartSearchJobCommandInput,
    StartSearchJobCommandOutput,
    BackupSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoBackupSearchService", "StartSearchJob", {})
  .n("BackupSearchClient", "StartSearchJobCommand")
  .f(void 0, void 0)
  .ser(se_StartSearchJobCommand)
  .de(de_StartSearchJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSearchJobInput;
      output: StartSearchJobOutput;
    };
    sdk: {
      input: StartSearchJobCommandInput;
      output: StartSearchJobCommandOutput;
    };
  };
}
