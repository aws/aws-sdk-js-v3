// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVaultInput, CreateVaultOutput } from "../models/models_0";
import { CreateVault$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This operation creates a new vault with the specified name. The name of the vault must be unique within a region for an AWS account. You can create up to 1,000 vaults per account. If you need to create more vaults, contact Amazon Glacier.
 *
 * You must use the following guidelines when naming a vault.
 *
 * - Names can be between 1 and 255 characters long.
 * - Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.' (period).
 *
 * This operation is idempotent.
 *
 * An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).
 *
 * For conceptual information and underlying REST API, see [Creating a Vault in Amazon Glacier](https://docs.aws.amazon.com/amazonglacier/latest/dev/creating-vaults.html) and [Create Vault](https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html) in the *Amazon Glacier Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, CreateVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, CreateVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
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
 *
 * Returned if a parameter of the request is incorrectly specified.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Returned if the request results in a vault or account limit being exceeded.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Returned if a required header or parameter is missing from the request.
 *
 * @throws {@link NoLongerSupportedException} (client fault)
 *
 * Returned if the request was made by a customer with no Amazon Glacier storage. The request is denied as the API is no longer supported for new customers. Please use Amazon S3 Glacier storage classes instead.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Returned if the service cannot complete the request.
 *
 * @throws {@link GlacierServiceException}
 *
 * Base exception class for all service exceptions from Glacier service.
 *
 * @example To create a new vault
 * ```javascript
 * // The following example creates a new vault named my-vault.
 * const input = {
 *   accountId: "-",
 *   vaultName: "my-vault"
 * };
 * const command = new CreateVaultCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   location: "/111122223333/vaults/my-vault"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateVaultCommand extends command<CreateVaultCommandInput, CreateVaultCommandOutput>(
  _ep0,
  _mw0,
  "CreateVault",
  CreateVault$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVaultInput;
      output: CreateVaultOutput;
    };
    sdk: {
      input: CreateVaultCommandInput;
      output: CreateVaultCommandOutput;
    };
  };
}
