// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { CreateVaultInput, CreateVaultOutput } from "../models/models_0";
import { de_CreateVaultCommand, se_CreateVaultCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVaultCommand}.
 */
export interface CreateVaultCommandInput extends CreateVaultInput {}
/**
 * @public
 *
 * The output of {@link CreateVaultCommand}.
 */
export interface CreateVaultCommandOutput extends CreateVaultOutput, __MetadataBearer {}

/**
 * <p>This operation creates a new vault with the specified name. The name of the vault
 *          must be unique within a region for an AWS account. You can create up to 1,000 vaults per
 *          account. If you need to create more vaults, contact Amazon S3 Glacier.</p>
 *          <p>You must use the following guidelines when naming a vault.</p>
 *          <ul>
 *             <li>
 *                <p>Names can be between 1 and 255 characters long.</p>
 *             </li>
 *             <li>
 *                <p>Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.'
 *                (period).</p>
 *             </li>
 *          </ul>
 *
 *          <p>This operation is idempotent.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/creating-vaults.html">Creating a Vault in Amazon
 *             Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html">Create Vault </a> in the
 *             <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, CreateVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, CreateVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // CreateVaultInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 * };
 * const command = new CreateVaultCommand(input);
 * const response = await client.send(command);
 * // { // CreateVaultOutput
 * //   location: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateVaultCommandInput - {@link CreateVaultCommandInput}
 * @returns {@link CreateVaultCommandOutput}
 * @see {@link CreateVaultCommandInput} for command's `input` shape.
 * @see {@link CreateVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Returned if the request results in a vault or account limit being exceeded.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @public
 * @example To create a new vault
 * ```javascript
 * // The following example creates a new vault named my-vault.
 * const input = {
 *   "accountId": "-",
 *   "vaultName": "my-vault"
 * };
 * const command = new CreateVaultCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "location": "/111122223333/vaults/my-vault"
 * }
 * *\/
 * // example id: 1dc0313d-ace1-4e6c-9d13-1ec7813b14b7
 * ```
 *
 */
export class CreateVaultCommand extends $Command
  .classBuilder<
    CreateVaultCommandInput,
    CreateVaultCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Glacier", "CreateVault", {})
  .n("GlacierClient", "CreateVaultCommand")
  .f(void 0, void 0)
  .ser(se_CreateVaultCommand)
  .de(de_CreateVaultCommand)
  .build() {}
