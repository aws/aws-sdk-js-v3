// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeBackupAccessPointInput, DescribeBackupAccessPointResponse } from "../models/models_0";
import { DescribeBackupAccessPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeBackupAccessPointCommand}.
 */
export interface DescribeBackupAccessPointCommandInput extends DescribeBackupAccessPointInput {}
/**
 * @public
 *
 * The output of {@link DescribeBackupAccessPointCommand}.
 */
export interface DescribeBackupAccessPointCommandOutput extends DescribeBackupAccessPointResponse, __MetadataBearer {}

/**
 * Returns metadata about a backup access point, including its status and the details of the underlying Amazon S3 access point.
 *
 * After a backup access point reaches the `AVAILABLE` status, use this operation to retrieve the Amazon S3 access point ARN and alias that you need to read the backup data.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeBackupAccessPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeBackupAccessPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DescribeBackupAccessPointInput
 *   AccessPointArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeBackupAccessPointCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBackupAccessPointResponse
 * //   AccessPointArn: "STRING_VALUE", // required
 * //   AccessPointMetadata: { // AccessPointMetadataMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   BackupVaultArn: "STRING_VALUE",
 * //   BackupVaultName: "STRING_VALUE", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   Name: "STRING_VALUE", // required
 * //   RecoveryPointArn: "STRING_VALUE", // required
 * //   ResourceArn: "STRING_VALUE", // required
 * //   ResourceType: "STRING_VALUE", // required
 * //   Status: "AVAILABLE" || "CREATING" || "DELETING" || "DISASSOCIATED" || "DISASSOCIATING" || "EXPIRED" || "FAILED", // required
 * //   StatusMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBackupAccessPointCommandInput - {@link DescribeBackupAccessPointCommandInput}
 * @returns {@link DescribeBackupAccessPointCommandOutput}
 * @see {@link DescribeBackupAccessPointCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupAccessPointCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Indicates that a required parameter is missing.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource that is required for the action doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request failed due to a temporary failure of the server.
 *
 * @throws {@link BackupServiceException}
 *
 * Base exception class for all service exceptions from Backup service.
 *
 * @public
 */
export class DescribeBackupAccessPointCommand extends command<DescribeBackupAccessPointCommandInput, DescribeBackupAccessPointCommandOutput>(
  _ep0,
  _mw0,
  "DescribeBackupAccessPoint",
  DescribeBackupAccessPoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBackupAccessPointInput;
      output: DescribeBackupAccessPointResponse;
    };
    sdk: {
      input: DescribeBackupAccessPointCommandInput;
      output: DescribeBackupAccessPointCommandOutput;
    };
  };
}
