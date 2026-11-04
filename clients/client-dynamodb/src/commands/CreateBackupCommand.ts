// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { CreateBackupInput, CreateBackupOutput } from "../models/models_0";
import { CreateBackup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBackupCommand}.
 */
export interface CreateBackupCommandInput extends CreateBackupInput {}
/**
 * @public
 *
 * The output of {@link CreateBackupCommand}.
 */
export interface CreateBackupCommandOutput extends CreateBackupOutput, __MetadataBearer {}

/**
 * Creates a backup for an existing table.
 *
 * Each time you create an on-demand backup, the entire table data is backed up. There is no limit to the number of on-demand backups that can be taken.
 *
 * When you create an on-demand backup, a time marker of the request is cataloged, and the backup is created asynchronously, by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes.
 *
 * You can call `CreateBackup` at a maximum rate of 50 times per second.
 *
 * All backups in DynamoDB work without consuming any provisioned throughput on the table.
 *
 * If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed to contain all data committed to the table up to 14:24:00, and data committed after 14:26:00 will not be. The backup might contain data modifications made between 14:24:00 and 14:26:00. On-demand backup does not support causal consistency.
 *
 * Along with data, the following are also included on the backups:
 *
 * - Global secondary indexes (GSIs)
 * - Local secondary indexes (LSIs)
 * - Streams
 * - Provisioned read and write capacity
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, CreateBackupCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, CreateBackupCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // CreateBackupInput
 *   TableName: "STRING_VALUE", // required
 *   BackupName: "STRING_VALUE", // required
 * };
 * const command = new CreateBackupCommand(input);
 * const response = await client.send(command);
 * // { // CreateBackupOutput
 * //   BackupDetails: { // BackupDetails
 * //     BackupArn: "STRING_VALUE", // required
 * //     BackupName: "STRING_VALUE", // required
 * //     BackupSizeBytes: Number("long"),
 * //     BackupStatus: "CREATING" || "DELETED" || "AVAILABLE", // required
 * //     BackupType: "USER" || "SYSTEM" || "AWS_BACKUP", // required
 * //     BackupCreationDateTime: new Date("TIMESTAMP"), // required
 * //     BackupExpiryDateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateBackupCommandInput - {@link CreateBackupCommandInput}
 * @returns {@link CreateBackupCommandOutput}
 * @see {@link CreateBackupCommandInput} for command's `input` shape.
 * @see {@link CreateBackupCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link BackupInUseException} (client fault)
 *
 * There is another ongoing conflicting backup control plane operation on the table. The backup is either being created, deleted or restored to a table.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * There is no limit to the number of daily on-demand backups that can be taken.
 *
 * For most purposes, up to 500 simultaneous table operations are allowed per account. These operations include `CreateTable`, `UpdateTable`, `DeleteTable`,`UpdateTimeToLive`, `RestoreTableFromBackup`, and `RestoreTableToPointInTime`.
 *
 * When you are creating a table with one or more secondary indexes, you can have up to 250 such requests running at a time. However, if the table or index specifications are complex, then DynamoDB might temporarily reduce the number of concurrent operations.
 *
 * When importing into DynamoDB, up to 50 simultaneous import table operations are allowed per account.
 *
 * There is a soft account quota of 2,500 tables.
 *
 * GetRecords was called with a value of more than 1000 for the limit request parameter.
 *
 * More than 2 processes are reading from the same streams shard at the same time. Exceeding this limit may result in request throttling.
 *
 * @throws {@link TableInUseException} (client fault)
 *
 * A target table with the specified name is either being created or deleted.
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
export class CreateBackupCommand extends command<CreateBackupCommandInput, CreateBackupCommandOutput>(
  _ep2,
  _mw0,
  "CreateBackup",
  CreateBackup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBackupInput;
      output: CreateBackupOutput;
    };
    sdk: {
      input: CreateBackupCommandInput;
      output: CreateBackupCommandOutput;
    };
  };
}
