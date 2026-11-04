// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { UpdateContinuousBackupsInput, UpdateContinuousBackupsOutput } from "../models/models_0";
import { UpdateContinuousBackups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * `UpdateContinuousBackups` enables or disables point in time recovery for the specified table. A successful `UpdateContinuousBackups` call returns the current `ContinuousBackupsDescription`. Continuous backups are `ENABLED` on all tables at table creation. If point in time recovery is enabled, `PointInTimeRecoveryStatus` will be set to ENABLED.
 *
 * Once continuous backups and point in time recovery are enabled, you can restore to any point in time within `EarliestRestorableDateTime` and `LatestRestorableDateTime`.
 *
 * `LatestRestorableDateTime` is typically 5 minutes before the current time. You can restore your table to any point in time in the last 35 days. You can set the `RecoveryPeriodInDays` to any value between 1 and 35 days.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateContinuousBackupsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateContinuousBackupsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // UpdateContinuousBackupsInput
 *   TableName: "STRING_VALUE", // required
 *   PointInTimeRecoverySpecification: { // PointInTimeRecoverySpecification
 *     PointInTimeRecoveryEnabled: true || false, // required
 *     RecoveryPeriodInDays: Number("int"),
 *   },
 * };
 * const command = new UpdateContinuousBackupsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContinuousBackupsOutput
 * //   ContinuousBackupsDescription: { // ContinuousBackupsDescription
 * //     ContinuousBackupsStatus: "ENABLED" || "DISABLED", // required
 * //     PointInTimeRecoveryDescription: { // PointInTimeRecoveryDescription
 * //       PointInTimeRecoveryStatus: "ENABLED" || "DISABLED",
 * //       RecoveryPeriodInDays: Number("int"),
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
 *
 * Backups have not yet been enabled for this table.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link TableNotFoundException} (client fault)
 *
 * A source table with the name `TableName` does not currently exist within the subscriber's account or the subscriber is operating in the wrong Amazon Web Services Region.
 *
 * @throws {@link DynamoDBServiceException}
 *
 * Base exception class for all service exceptions from DynamoDB service.
 *
 * @public
 */
export class UpdateContinuousBackupsCommand extends command<UpdateContinuousBackupsCommandInput, UpdateContinuousBackupsCommandOutput>(
  _ep2,
  _mw0,
  "UpdateContinuousBackups",
  UpdateContinuousBackups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContinuousBackupsInput;
      output: UpdateContinuousBackupsOutput;
    };
    sdk: {
      input: UpdateContinuousBackupsCommandInput;
      output: UpdateContinuousBackupsCommandOutput;
    };
  };
}
