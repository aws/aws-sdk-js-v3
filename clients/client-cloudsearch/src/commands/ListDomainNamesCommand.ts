// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDomainNamesResponse } from "../models/models_0";
import { ListDomainNames$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDomainNamesCommand}.
 */
export interface ListDomainNamesCommandInput {}
/**
 * @public
 *
 * The output of {@link ListDomainNamesCommand}.
 */
export interface ListDomainNamesCommandOutput extends ListDomainNamesResponse, __MetadataBearer {}

/**
 * <p>Lists all search domains owned by an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, ListDomainNamesCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, ListDomainNamesCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = {};
 * const command = new ListDomainNamesCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainNamesResponse
 * //   DomainNames: { // DomainNameMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListDomainNamesCommandInput - {@link ListDomainNamesCommandInput}
 * @returns {@link ListDomainNamesCommandOutput}
 * @see {@link ListDomainNamesCommandInput} for command's `input` shape.
 * @see {@link ListDomainNamesCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 *
 * @public
 */
export class ListDomainNamesCommand extends command<ListDomainNamesCommandInput, ListDomainNamesCommandOutput>(
  _ep0,
  _mw0,
  "ListDomainNames",
  ListDomainNames$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListDomainNamesResponse;
    };
    sdk: {
      input: ListDomainNamesCommandInput;
      output: ListDomainNamesCommandOutput;
    };
  };
}
