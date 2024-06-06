// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateContinuousBackupsInput, UpdateContinuousBackupsOutput } from "../models/models_0";
import { de_UpdateContinuousBackupsCommand, se_UpdateContinuousBackupsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContinuousBackupsCommand}.
 */
export interface UpdateContinuousBackupsCommandInput extends UpdateContinuousBackupsInput {}
/**
 * @public
 *
 * The output of {@link UpdateContinuousBackupsCommand}.
 */
export interface UpdateContinuousBackupsCommandOutput extends UpdateContinuousBackupsOutput, __MetadataBearer {}

/**
 * <p>
 *             <code>UpdateContinuousBackups</code> enables or disables point in time recovery for
 *             the specified table. A successful <code>UpdateContinuousBackups</code> call returns the
 *             current <code>ContinuousBackupsDescription</code>. Continuous backups are
 *                 <code>ENABLED</code> on all tables at table creation. If point in time recovery is
 *             enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p>
 *          <p> Once continuous backups and point in time recovery are enabled, you can restore to
 *             any point in time within <code>EarliestRestorableDateTime</code> and
 *                 <code>LatestRestorableDateTime</code>. </p>
 *          <p>
 *             <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time.
 *             You can restore your table to any point in time during the last 35 days. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateContinuousBackupsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateContinuousBackupsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // UpdateContinuousBackupsInput
 *   TableName: "STRING_VALUE", // required
 *   PointInTimeRecoverySpecification: { // PointInTimeRecoverySpecification
 *     PointInTimeRecoveryEnabled: true || false, // required
 *   },
 * };
 * const command = new UpdateContinuousBackupsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContinuousBackupsOutput
 * //   ContinuousBackupsDescription: { // ContinuousBackupsDescription
 * //     ContinuousBackupsStatus: "ENABLED" || "DISABLED", // required
 * //     PointInTimeRecoveryDescription: { // PointInTimeRecoveryDescription
 * //       PointInTimeRecoveryStatus: "ENABLED" || "DISABLED",
 * //       EarliestRestorableDateTime: new Date("TIMESTAMP"),
 * //       LatestRestorableDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateContinuousBackupsCommandInput - {@link UpdateContinuousBackupsCommandInput}
 * @returns {@link UpdateContinuousBackupsCommandOutput}
 * @see {@link UpdateContinuousBackupsCommandInput} for command's `input` shape.
 * @see {@link UpdateContinuousBackupsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link ContinuousBackupsUnavailableException} (client fault)
 *  <p>Backups have not yet been enabled for this table.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link TableNotFoundException} (client fault)
 *  <p>A source table with the name <code>TableName</code> does not currently exist within
 *             the subscriber's account or the subscriber is operating in the wrong Amazon Web Services Region.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 * @public
 */
export class UpdateContinuousBackupsCommand extends $Command
  .classBuilder<
    UpdateContinuousBackupsCommandInput,
    UpdateContinuousBackupsCommandOutput,
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
  .s("DynamoDB_20120810", "UpdateContinuousBackups", {})
  .n("DynamoDBClient", "UpdateContinuousBackupsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateContinuousBackupsCommand)
  .de(de_UpdateContinuousBackupsCommand)
  .build() {}
