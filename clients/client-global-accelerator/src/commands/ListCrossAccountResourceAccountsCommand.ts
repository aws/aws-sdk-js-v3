// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListCrossAccountResourceAccountsRequest,
  ListCrossAccountResourceAccountsResponse,
} from "../models/models_0";
import { ListCrossAccountResourceAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCrossAccountResourceAccountsCommand}.
 */
export interface ListCrossAccountResourceAccountsCommandInput extends ListCrossAccountResourceAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListCrossAccountResourceAccountsCommand}.
 */
export interface ListCrossAccountResourceAccountsCommandOutput extends ListCrossAccountResourceAccountsResponse, __MetadataBearer {}

/**
 * List the accounts that have cross-account resources.
 *
 * For more information, see [Working with cross-account attachments and resources in Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/cross-account-resources.html) in the *Global Accelerator Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCrossAccountResourceAccountsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCrossAccountResourceAccountsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = {};
 * const command = new ListCrossAccountResourceAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListCrossAccountResourceAccountsResponse
 * //   ResourceOwnerAwsAccountIds: [ // AwsAccountIds
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCrossAccountResourceAccountsCommandInput - {@link ListCrossAccountResourceAccountsCommandInput}
 * @returns {@link ListCrossAccountResourceAccountsCommandOutput}
 * @see {@link ListCrossAccountResourceAccountsCommandInput} for command's `input` shape.
 * @see {@link ListCrossAccountResourceAccountsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access permission.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * There was an internal error for Global Accelerator.
 *
 * @throws {@link GlobalAcceleratorServiceException}
 *
 * Base exception class for all service exceptions from GlobalAccelerator service.
 *
 * @public
 */
export class ListCrossAccountResourceAccountsCommand extends command<ListCrossAccountResourceAccountsCommandInput, ListCrossAccountResourceAccountsCommandOutput>(
  _ep0,
  _mw0,
  "ListCrossAccountResourceAccounts",
  ListCrossAccountResourceAccounts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListCrossAccountResourceAccountsResponse;
    };
    sdk: {
      input: ListCrossAccountResourceAccountsCommandInput;
      output: ListCrossAccountResourceAccountsCommandOutput;
    };
  };
}
