// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateBackupAccessPointRequest, CreateBackupAccessPointResponse } from "../models/models_0";
import { CreateBackupAccessPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBackupAccessPointCommand}.
 */
export interface CreateBackupAccessPointCommandInput extends CreateBackupAccessPointRequest {}
/**
 * @public
 *
 * The output of {@link CreateBackupAccessPointCommand}.
 */
export interface CreateBackupAccessPointCommandOutput extends CreateBackupAccessPointResponse, __MetadataBearer {}

/**
 * <p>Creates a backup access point for an Amazon S3 recovery point. A backup access point provides
 *          on-demand, read-only access to the backup data in a recovery point through an Amazon S3 access point,
 *          without initiating a restore.</p>
 *          <p>While a backup access point is active for a recovery point, Backup pauses lifecycle transitions
 *          and blocks deletion of that recovery point.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateBackupAccessPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateBackupAccessPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // CreateBackupAccessPointRequest
 *   AccessPointMetadata: { // AccessPointMetadataMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AccessPointPolicy: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateBackupAccessPointCommand(input);
 * const response = await client.send(command);
 * // { // CreateBackupAccessPointResponse
 * //   AccessPointArn: "STRING_VALUE", // required
 * //   Status: "AVAILABLE" || "CREATING" || "DELETING" || "DISASSOCIATED" || "DISASSOCIATING" || "EXPIRED" || "FAILED", // required
 * // };
 *
 * ```
 *
 * @param CreateBackupAccessPointCommandInput - {@link CreateBackupAccessPointCommandInput}
 * @returns {@link CreateBackupAccessPointCommandOutput}
 * @see {@link CreateBackupAccessPointCommandInput} for command's `input` shape.
 * @see {@link CreateBackupAccessPointCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class CreateBackupAccessPointCommand extends command<CreateBackupAccessPointCommandInput, CreateBackupAccessPointCommandOutput>(
  _ep0,
  _mw0,
  "CreateBackupAccessPoint",
  CreateBackupAccessPoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBackupAccessPointRequest;
      output: CreateBackupAccessPointResponse;
    };
    sdk: {
      input: CreateBackupAccessPointCommandInput;
      output: CreateBackupAccessPointCommandOutput;
    };
  };
}
