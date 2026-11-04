// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRecoveryPointIndexDetailsInput, GetRecoveryPointIndexDetailsOutput } from "../models/models_0";
import { GetRecoveryPointIndexDetails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRecoveryPointIndexDetailsCommand}.
 */
export interface GetRecoveryPointIndexDetailsCommandInput extends GetRecoveryPointIndexDetailsInput {}
/**
 * @public
 *
 * The output of {@link GetRecoveryPointIndexDetailsCommand}.
 */
export interface GetRecoveryPointIndexDetailsCommandOutput extends GetRecoveryPointIndexDetailsOutput, __MetadataBearer {}

/**
 * This operation returns the metadata and details specific to the backup index associated with the specified recovery point.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetRecoveryPointIndexDetailsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetRecoveryPointIndexDetailsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // GetRecoveryPointIndexDetailsInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 * };
 * const command = new GetRecoveryPointIndexDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecoveryPointIndexDetailsOutput
 * //   RecoveryPointArn: "STRING_VALUE",
 * //   BackupVaultArn: "STRING_VALUE",
 * //   SourceResourceArn: "STRING_VALUE",
 * //   IndexCreationDate: new Date("TIMESTAMP"),
 * //   IndexDeletionDate: new Date("TIMESTAMP"),
 * //   IndexCompletionDate: new Date("TIMESTAMP"),
 * //   IndexStatus: "PENDING" || "ACTIVE" || "FAILED" || "DELETING",
 * //   IndexStatusMessage: "STRING_VALUE",
 * //   TotalItemsIndexed: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetRecoveryPointIndexDetailsCommandInput - {@link GetRecoveryPointIndexDetailsCommandInput}
 * @returns {@link GetRecoveryPointIndexDetailsCommandOutput}
 * @see {@link GetRecoveryPointIndexDetailsCommandInput} for command's `input` shape.
 * @see {@link GetRecoveryPointIndexDetailsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
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
export class GetRecoveryPointIndexDetailsCommand extends command<GetRecoveryPointIndexDetailsCommandInput, GetRecoveryPointIndexDetailsCommandOutput>(
  _ep0,
  _mw0,
  "GetRecoveryPointIndexDetails",
  GetRecoveryPointIndexDetails$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecoveryPointIndexDetailsInput;
      output: GetRecoveryPointIndexDetailsOutput;
    };
    sdk: {
      input: GetRecoveryPointIndexDetailsCommandInput;
      output: GetRecoveryPointIndexDetailsCommandOutput;
    };
  };
}
