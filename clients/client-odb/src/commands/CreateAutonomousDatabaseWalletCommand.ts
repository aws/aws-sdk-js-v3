// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAutonomousDatabaseWalletInput, CreateAutonomousDatabaseWalletOutput } from "../models/models_0";
import { CreateAutonomousDatabaseWallet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAutonomousDatabaseWalletCommand}.
 */
export interface CreateAutonomousDatabaseWalletCommandInput extends CreateAutonomousDatabaseWalletInput {}
/**
 * @public
 *
 * The output of {@link CreateAutonomousDatabaseWalletCommand}.
 */
export interface CreateAutonomousDatabaseWalletCommandOutput extends CreateAutonomousDatabaseWalletOutput, __MetadataBearer {}

/**
 * Creates a new wallet for the specified Autonomous Database.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, CreateAutonomousDatabaseWalletCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, CreateAutonomousDatabaseWalletCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // CreateAutonomousDatabaseWalletInput
 *   autonomousDatabaseId: "STRING_VALUE", // required
 *   walletType: "REGIONAL" || "INSTANCE",
 *   password: "STRING_VALUE",
 *   passwordSource: "CUSTOMER_MANAGED_AWS_SECRET" || "API_REQUEST_PARAMETER",
 *   passwordSourceConfiguration: { // WalletPasswordSourceConfigurationInput Union: only one key present
 *     customerManagedAwsSecret: { // CustomerManagedAwsSecretConfigurationInput
 *       secretId: "STRING_VALUE",
 *       iamRoleArn: "STRING_VALUE",
 *       externalIdType: "database_ocid" || "compartment_ocid" || "tenant_ocid",
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAutonomousDatabaseWalletCommand(input);
 * const response = await client.send(command);
 * // { // CreateAutonomousDatabaseWalletOutput
 * //   autonomousDatabaseWalletFile: new Uint8Array(), // required
 * // };
 *
 * ```
 *
 * @param CreateAutonomousDatabaseWalletCommandInput - {@link CreateAutonomousDatabaseWalletCommandInput}
 * @returns {@link CreateAutonomousDatabaseWalletCommandOutput}
 * @see {@link CreateAutonomousDatabaseWalletCommandInput} for command's `input` shape.
 * @see {@link CreateAutonomousDatabaseWalletCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it is missing required fields or has invalid inputs.
 *
 * @throws {@link OdbServiceException}
 *
 * Base exception class for all service exceptions from Odb service.
 *
 * @public
 */
export class CreateAutonomousDatabaseWalletCommand extends command<CreateAutonomousDatabaseWalletCommandInput, CreateAutonomousDatabaseWalletCommandOutput>(
  _ep0,
  _mw0,
  "CreateAutonomousDatabaseWallet",
  CreateAutonomousDatabaseWallet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAutonomousDatabaseWalletInput;
      output: CreateAutonomousDatabaseWalletOutput;
    };
    sdk: {
      input: CreateAutonomousDatabaseWalletCommandInput;
      output: CreateAutonomousDatabaseWalletCommandOutput;
    };
  };
}
