// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBackupsInput, ListBackupsOutput } from "../models/models_0";
import { de_ListBackupsCommand, se_ListBackupsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBackupsCommand}.
 */
export interface ListBackupsCommandInput extends ListBackupsInput {}
/**
 * @public
 *
 * The output of {@link ListBackupsCommand}.
 */
export interface ListBackupsCommandOutput extends ListBackupsOutput, __MetadataBearer {}

/**
 * <p>List DynamoDB backups that are associated with an Amazon Web Services account and weren't made with Amazon Web Services Backup.
 *             To list these backups for a given table, specify <code>TableName</code>. <code>ListBackups</code> returns a
 *             paginated list of results with at most 1 MB worth of items in a page. You can also
 *             specify a maximum number of entries to be returned in a page.</p>
 *          <p>In the request, start time is inclusive, but end time is exclusive. Note that these
 *             boundaries are for the time at which the original backup was requested.</p>
 *          <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>
 *          <p>If you want to retrieve the complete list of backups made with Amazon Web Services Backup, use the
 *             <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupJobs.html">Amazon Web Services Backup list API.</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListBackupsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListBackupsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // ListBackupsInput
 *   TableName: "STRING_VALUE",
 *   Limit: Number("int"),
 *   TimeRangeLowerBound: new Date("TIMESTAMP"),
 *   TimeRangeUpperBound: new Date("TIMESTAMP"),
 *   ExclusiveStartBackupArn: "STRING_VALUE",
 *   BackupType: "USER" || "SYSTEM" || "AWS_BACKUP" || "ALL",
 * };
 * const command = new ListBackupsCommand(input);
 * const response = await client.send(command);
 * // { // ListBackupsOutput
 * //   BackupSummaries: [ // BackupSummaries
 * //     { // BackupSummary
 * //       TableName: "STRING_VALUE",
 * //       TableId: "STRING_VALUE",
 * //       TableArn: "STRING_VALUE",
 * //       BackupArn: "STRING_VALUE",
 * //       BackupName: "STRING_VALUE",
 * //       BackupCreationDateTime: new Date("TIMESTAMP"),
 * //       BackupExpiryDateTime: new Date("TIMESTAMP"),
 * //       BackupStatus: "CREATING" || "DELETED" || "AVAILABLE",
 * //       BackupType: "USER" || "SYSTEM" || "AWS_BACKUP",
 * //       BackupSizeBytes: Number("long"),
 * //     },
 * //   ],
 * //   LastEvaluatedBackupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBackupsCommandInput - {@link ListBackupsCommandInput}
 * @returns {@link ListBackupsCommandOutput}
 * @see {@link ListBackupsCommandInput} for command's `input` shape.
 * @see {@link ListBackupsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 * @public
 */
export class ListBackupsCommand extends $Command
  .classBuilder<
    ListBackupsCommandInput,
    ListBackupsCommandOutput,
    DynamoDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DynamoDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DynamoDB_20120810", "ListBackups", {})
  .n("DynamoDBClient", "ListBackupsCommand")
  .f(void 0, void 0)
  .ser(se_ListBackupsCommand)
  .de(de_ListBackupsCommand)
  .build() {}
