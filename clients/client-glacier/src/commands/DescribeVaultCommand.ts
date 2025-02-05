// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { DescribeVaultInput, DescribeVaultOutput } from "../models/models_0";
import { de_DescribeVaultCommand, se_DescribeVaultCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This operation returns information about a vault, including the vault's Amazon
 *          Resource Name (ARN), the date the vault was created, the number of archives it contains,
 *          and the total size of all the archives in the vault. The number of archives and their total
 *          size are as of the last inventory generation. This means that if you add or remove an
 *          archive from a vault, and then immediately use Describe Vault, the change in contents will
 *          not be immediately reflected. If you want to retrieve the latest inventory of the vault,
 *          use <a>InitiateJob</a>. Amazon S3 Glacier generates vault inventories approximately
 *          daily. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a Vault Inventory in
 *             Amazon S3 Glacier</a>. </p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in
 *             Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get.html">Describe Vault </a> in the
 *             <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, DescribeVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, DescribeVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
 *          exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @public
 * @example To retrieve information about a vault
 * ```javascript
 * // The example retrieves data about a vault named my-vault.
 * const input = {
 *   "accountId": "-",
 *   "vaultName": "my-vault"
 * };
 * const command = new DescribeVaultCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CreationDate": "2016-09-23T19:27:18.665Z",
 *   "NumberOfArchives": 0,
 *   "SizeInBytes": 0,
 *   "VaultARN": "arn:aws:glacier:us-west-2:111122223333:vaults/my-vault",
 *   "VaultName": "my-vault"
 * }
 * *\/
 * // example id: 3c1c6e9d-f5a2-427a-aa6a-f439eacfc05f
 * ```
 *
 */
export class DescribeVaultCommand extends $Command
  .classBuilder<
    DescribeVaultCommandInput,
    DescribeVaultCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Glacier", "DescribeVault", {})
  .n("GlacierClient", "DescribeVaultCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVaultCommand)
  .de(de_DescribeVaultCommand)
  .build() {
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
