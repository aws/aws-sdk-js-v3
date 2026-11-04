// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { DescribeContinuousBackupsInput, DescribeContinuousBackupsOutput } from "../models/models_0";
import { DescribeContinuousBackups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeContinuousBackupsCommand}.
 */
export interface DescribeContinuousBackupsCommandInput extends DescribeContinuousBackupsInput {}
/**
 * @public
 *
 * The output of {@link DescribeContinuousBackupsCommand}.
 */
export interface DescribeContinuousBackupsCommandOutput extends DescribeContinuousBackupsOutput, __MetadataBearer {}

/**
 * Checks the status of continuous backups and point in time recovery on the specified table. Continuous backups are `ENABLED` on all tables at table creation. If point in time recovery is enabled, `PointInTimeRecoveryStatus` will be set to ENABLED.
 *
 * After continuous backups and point in time recovery are enabled, you can restore to any point in time within `EarliestRestorableDateTime` and `LatestRestorableDateTime`.
 *
 * `LatestRestorableDateTime` is typically 5 minutes before the current time. You can restore your table to any point in time in the last 35 days. You can set the recovery period to any value between 1 and 35 days.
 *
 * You can call `DescribeContinuousBackups` at a maximum rate of 10 times per second.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeContinuousBackupsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeContinuousBackupsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // DescribeContinuousBackupsInput
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new DescribeContinuousBackupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContinuousBackupsOutput
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
 * @param DescribeContinuousBackupsCommandInput - {@link DescribeContinuousBackupsCommandInput}
 * @returns {@link DescribeContinuousBackupsCommandOutput}
 * @see {@link DescribeContinuousBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeContinuousBackupsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
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
export class DescribeContinuousBackupsCommand extends command<DescribeContinuousBackupsCommandInput, DescribeContinuousBackupsCommandOutput>(
  _ep2,
  _mw0,
  "DescribeContinuousBackups",
  DescribeContinuousBackups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContinuousBackupsInput;
      output: DescribeContinuousBackupsOutput;
    };
    sdk: {
      input: DescribeContinuousBackupsCommandInput;
      output: DescribeContinuousBackupsCommandOutput;
    };
  };
}
