// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetAutonomousDatabaseWalletDetailsInput,
  GetAutonomousDatabaseWalletDetailsOutput,
} from "../models/models_0";
import { GetAutonomousDatabaseWalletDetails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAutonomousDatabaseWalletDetailsCommand}.
 */
export interface GetAutonomousDatabaseWalletDetailsCommandInput extends GetAutonomousDatabaseWalletDetailsInput {}
/**
 * @public
 *
 * The output of {@link GetAutonomousDatabaseWalletDetailsCommand}.
 */
export interface GetAutonomousDatabaseWalletDetailsCommandOutput extends GetAutonomousDatabaseWalletDetailsOutput, __MetadataBearer {}

/**
 * <p>Gets the wallet details for the specified Autonomous Database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, GetAutonomousDatabaseWalletDetailsCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, GetAutonomousDatabaseWalletDetailsCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // GetAutonomousDatabaseWalletDetailsInput
 *   autonomousDatabaseId: "STRING_VALUE", // required
 * };
 * const command = new GetAutonomousDatabaseWalletDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetAutonomousDatabaseWalletDetailsOutput
 * //   autonomousDatabaseWalletDetails: { // AutonomousDatabaseWalletDetails
 * //     status: "ACTIVE" || "UPDATING",
 * //     timeRotated: new Date("TIMESTAMP"),
 * //     passwordSourceSummary: { // WalletPasswordSourceSummary
 * //       passwordSource: "CUSTOMER_MANAGED_AWS_SECRET" || "API_REQUEST_PARAMETER",
 * //       passwordSourceConfiguration: { // WalletPasswordSourceConfiguration Union: only one key present
 * //         customerManagedAwsSecret: { // CustomerManagedAwsSecretConfiguration
 * //           iamRoleArn: "STRING_VALUE",
 * //           secretId: "STRING_VALUE",
 * //           externalIdType: "database_ocid" || "compartment_ocid" || "tenant_ocid",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAutonomousDatabaseWalletDetailsCommandInput - {@link GetAutonomousDatabaseWalletDetailsCommandInput}
 * @returns {@link GetAutonomousDatabaseWalletDetailsCommandOutput}
 * @see {@link GetAutonomousDatabaseWalletDetailsCommandInput} for command's `input` shape.
 * @see {@link GetAutonomousDatabaseWalletDetailsCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class GetAutonomousDatabaseWalletDetailsCommand extends command<GetAutonomousDatabaseWalletDetailsCommandInput, GetAutonomousDatabaseWalletDetailsCommandOutput>(
  _ep0,
  _mw0,
  "GetAutonomousDatabaseWalletDetails",
  GetAutonomousDatabaseWalletDetails$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAutonomousDatabaseWalletDetailsInput;
      output: GetAutonomousDatabaseWalletDetailsOutput;
    };
    sdk: {
      input: GetAutonomousDatabaseWalletDetailsCommandInput;
      output: GetAutonomousDatabaseWalletDetailsCommandOutput;
    };
  };
}
