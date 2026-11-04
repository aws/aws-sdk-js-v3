// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetRestoreTestingInferredMetadataInput,
  GetRestoreTestingInferredMetadataOutput,
} from "../models/models_0";
import { GetRestoreTestingInferredMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRestoreTestingInferredMetadataCommand}.
 */
export interface GetRestoreTestingInferredMetadataCommandInput extends GetRestoreTestingInferredMetadataInput {}
/**
 * @public
 *
 * The output of {@link GetRestoreTestingInferredMetadataCommand}.
 */
export interface GetRestoreTestingInferredMetadataCommandOutput extends GetRestoreTestingInferredMetadataOutput, __MetadataBearer {}

/**
 * This request returns the minimal required set of metadata needed to start a restore job with secure default settings. `BackupVaultName` and `RecoveryPointArn` are required parameters. `BackupVaultAccountId` is an optional parameter.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetRestoreTestingInferredMetadataCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetRestoreTestingInferredMetadataCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // GetRestoreTestingInferredMetadataInput
 *   BackupVaultAccountId: "STRING_VALUE",
 *   BackupVaultName: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 * };
 * const command = new GetRestoreTestingInferredMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetRestoreTestingInferredMetadataOutput
 * //   InferredMetadata: { // stringMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRestoreTestingInferredMetadataCommandInput - {@link GetRestoreTestingInferredMetadataCommandInput}
 * @returns {@link GetRestoreTestingInferredMetadataCommandOutput}
 * @see {@link GetRestoreTestingInferredMetadataCommandInput} for command's `input` shape.
 * @see {@link GetRestoreTestingInferredMetadataCommandOutput} for command's `response` shape.
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
export class GetRestoreTestingInferredMetadataCommand extends command<GetRestoreTestingInferredMetadataCommandInput, GetRestoreTestingInferredMetadataCommandOutput>(
  _ep0,
  _mw0,
  "GetRestoreTestingInferredMetadata",
  GetRestoreTestingInferredMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRestoreTestingInferredMetadataInput;
      output: GetRestoreTestingInferredMetadataOutput;
    };
    sdk: {
      input: GetRestoreTestingInferredMetadataCommandInput;
      output: GetRestoreTestingInferredMetadataCommandOutput;
    };
  };
}
