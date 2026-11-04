// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeVaultInput, DescribeVaultOutput } from "../models/models_0";
import { DescribeVault$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeVaultCommand}.
 */
export interface DescribeVaultCommandInput extends DescribeVaultInput {}
/**
 * @public
 *
 * The output of {@link DescribeVaultCommand}.
 */
export interface DescribeVaultCommandOutput extends DescribeVaultOutput, __MetadataBearer {}

/**
 * This operation returns information about a vault, including the vault's Amazon Resource Name (ARN), the date the vault was created, the number of archives it contains, and the total size of all the archives in the vault. The number of archives and their total size are as of the last inventory generation. This means that if you add or remove an archive from a vault, and then immediately use Describe Vault, the change in contents will not be immediately reflected. If you want to retrieve the latest inventory of the vault, use InitiateJob. Amazon Glacier generates vault inventories approximately daily. For more information, see [Downloading a Vault Inventory in Amazon Glacier](https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html).
 *
 * An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).
 *
 * For conceptual information and underlying REST API, see [Retrieving Vault Metadata in Amazon Glacier](https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html) and [Describe Vault](https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get.html) in the *Amazon Glacier Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, DescribeVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, DescribeVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // DescribeVaultInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 * };
 * const command = new DescribeVaultCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVaultOutput
 * //   VaultARN: "STRING_VALUE",
 * //   VaultName: "STRING_VALUE",
 * //   CreationDate: "STRING_VALUE",
 * //   LastInventoryDate: "STRING_VALUE",
 * //   NumberOfArchives: Number("long"),
 * //   SizeInBytes: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeVaultCommandInput - {@link DescribeVaultCommandInput}
 * @returns {@link DescribeVaultCommandOutput}
 * @see {@link DescribeVaultCommandInput} for command's `input` shape.
 * @see {@link DescribeVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Returned if a parameter of the request is incorrectly specified.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Returned if a required header or parameter is missing from the request.
 *
 * @throws {@link NoLongerSupportedException} (client fault)
 *
 * Returned if the request was made by a customer with no Amazon Glacier storage. The request is denied as the API is no longer supported for new customers. Please use Amazon S3 Glacier storage classes instead.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Returned if the service cannot complete the request.
 *
 * @throws {@link GlacierServiceException}
 *
 * Base exception class for all service exceptions from Glacier service.
 *
 * @example To retrieve information about a vault
 * ```javascript
 * // The example retrieves data about a vault named my-vault.
 * const input = {
 *   accountId: "-",
 *   vaultName: "my-vault"
 * };
 * const command = new DescribeVaultCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CreationDate: "2016-09-23T19:27:18.665Z",
 *   NumberOfArchives: 0,
 *   SizeInBytes: 0,
 *   VaultARN: "arn:aws:glacier:us-west-2:111122223333:vaults/my-vault",
 *   VaultName: "my-vault"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeVaultCommand extends command<DescribeVaultCommandInput, DescribeVaultCommandOutput>(
  _ep0,
  _mw0,
  "DescribeVault",
  DescribeVault$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVaultInput;
      output: DescribeVaultOutput;
    };
    sdk: {
      input: DescribeVaultCommandInput;
      output: DescribeVaultCommandOutput;
    };
  };
}
