// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDomainsInput, ListDomainsOutput } from "../models/models_0";
import { ListDomains$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDomainsCommand}.
 */
export interface ListDomainsCommandInput extends ListDomainsInput {}
/**
 * @public
 *
 * The output of {@link ListDomainsCommand}.
 */
export interface ListDomainsCommandOutput extends ListDomainsOutput, __MetadataBearer {}

/**
 * <p>Lists Domains for a given account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectHealthClient, ListDomainsCommand } from "@aws-sdk/client-connecthealth"; // ES Modules import
 * // const { ConnectHealthClient, ListDomainsCommand } = require("@aws-sdk/client-connecthealth"); // CommonJS import
 * // import type { ConnectHealthClientConfig } from "@aws-sdk/client-connecthealth";
 * const config = {}; // type is ConnectHealthClientConfig
 * const client = new ConnectHealthClient(config);
 * const input = { // ListDomainsInput
 *   status: "ACTIVE" || "DELETING" || "DELETED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDomainsCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainsOutput
 * //   domains: [ // DomainSummaryList // required
 * //     { // DomainSummary
 * //       domainId: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: "ACTIVE" || "DELETING" || "DELETED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainsCommandInput - {@link ListDomainsCommandInput}
 * @returns {@link ListDomainsCommandOutput}
 * @see {@link ListDomainsCommandInput} for command's `input` shape.
 * @see {@link ListDomainsCommandOutput} for command's `response` shape.
 * @see {@link ConnectHealthClientResolvedConfig | config} for ConnectHealthClient's `config` shape.
 *
 * @throws {@link ConnectHealthServiceException}
 * <p>Base exception class for all service exceptions from ConnectHealth service.</p>
 *
 *
 * @public
 */
export class ListDomainsCommand extends command<ListDomainsCommandInput, ListDomainsCommandOutput>(
  _ep0,
  _mw0,
  "ListDomains",
  ListDomains$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainsInput;
      output: ListDomainsOutput;
    };
    sdk: {
      input: ListDomainsCommandInput;
      output: ListDomainsCommandOutput;
    };
  };
}
