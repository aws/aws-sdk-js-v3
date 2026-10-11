// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIdentityStoresRequest, ListIdentityStoresResponse } from "../models/models_0";
import { ListIdentityStores$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIdentityStoresCommand}.
 */
export interface ListIdentityStoresCommandInput extends ListIdentityStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListIdentityStoresCommand}.
 */
export interface ListIdentityStoresCommandOutput extends ListIdentityStoresResponse, __MetadataBearer {}

/**
 * <p>Lists the identity stores that you have access to. This operation returns only the identity store ID and Amazon Resource Name (ARN) of each identity store. To obtain additional information about an identity store, call <code>DescribeIdentityStore</code>.</p> <p>This operation returns results in paginated form. Use the <code>NextToken</code> parameter to retrieve additional pages of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, ListIdentityStoresCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, ListIdentityStoresCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * // import type { IdentitystoreClientConfig } from "@aws-sdk/client-identitystore";
 * const config = {}; // type is IdentitystoreClientConfig
 * const client = new IdentitystoreClient(config);
 * const input = { // ListIdentityStoresRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListIdentityStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentityStoresResponse
 * //   IdentityStores: [ // IdentityStores // required
 * //     { // IdentityStore
 * //       IdentityStoreId: "STRING_VALUE", // required
 * //       IdentityStoreArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdentityStoresCommandInput - {@link ListIdentityStoresCommandInput}
 * @returns {@link ListIdentityStoresCommandOutput}
 * @see {@link ListIdentityStoresCommandInput} for command's `input` shape.
 * @see {@link ListIdentityStoresCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link IdentitystoreServiceException}
 * <p>Base exception class for all service exceptions from Identitystore service.</p>
 *
 *
 * @public
 */
export class ListIdentityStoresCommand extends command<ListIdentityStoresCommandInput, ListIdentityStoresCommandOutput>(
  _ep0,
  _mw0,
  "ListIdentityStores",
  ListIdentityStores$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIdentityStoresRequest;
      output: ListIdentityStoresResponse;
    };
    sdk: {
      input: ListIdentityStoresCommandInput;
      output: ListIdentityStoresCommandOutput;
    };
  };
}
