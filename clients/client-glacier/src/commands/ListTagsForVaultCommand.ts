// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTagsForVaultInput, ListTagsForVaultOutput } from "../models/models_0";
import { ListTagsForVault$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTagsForVaultCommand}.
 */
export interface ListTagsForVaultCommandInput extends ListTagsForVaultInput {}
/**
 * @public
 *
 * The output of {@link ListTagsForVaultCommand}.
 */
export interface ListTagsForVaultCommandOutput extends ListTagsForVaultOutput, __MetadataBearer {}

/**
 * This operation lists all the tags attached to a vault. The operation returns an empty map if there are no tags. For more information about tags, see [Tagging Amazon Glacier Resources](https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListTagsForVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListTagsForVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // ListTagsForVaultInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForVaultCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForVaultOutput
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsForVaultCommandInput - {@link ListTagsForVaultCommandInput}
 * @returns {@link ListTagsForVaultCommandOutput}
 * @see {@link ListTagsForVaultCommandInput} for command's `input` shape.
 * @see {@link ListTagsForVaultCommandOutput} for command's `response` shape.
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
 * @example To list the tags for a vault
 * ```javascript
 * // The example lists all the tags attached to the vault examplevault.
 * const input = {
 *   accountId: "-",
 *   vaultName: "examplevault"
 * };
 * const command = new ListTagsForVaultCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Tags: {
 *     date: "july2015",
 *     id: "1234"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListTagsForVaultCommand extends command<ListTagsForVaultCommandInput, ListTagsForVaultCommandOutput>(
  _ep0,
  _mw0,
  "ListTagsForVault",
  ListTagsForVault$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForVaultInput;
      output: ListTagsForVaultOutput;
    };
    sdk: {
      input: ListTagsForVaultCommandInput;
      output: ListTagsForVaultCommandOutput;
    };
  };
}
