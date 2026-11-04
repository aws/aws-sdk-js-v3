// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAutomatedDiscoveryAccountsRequest, ListAutomatedDiscoveryAccountsResponse } from "../models/models_0";
import { ListAutomatedDiscoveryAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAutomatedDiscoveryAccountsCommand}.
 */
export interface ListAutomatedDiscoveryAccountsCommandInput extends ListAutomatedDiscoveryAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListAutomatedDiscoveryAccountsCommand}.
 */
export interface ListAutomatedDiscoveryAccountsCommandOutput extends ListAutomatedDiscoveryAccountsResponse, __MetadataBearer {}

/**
 * Retrieves the status of automated sensitive data discovery for one or more accounts.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListAutomatedDiscoveryAccountsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListAutomatedDiscoveryAccountsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // ListAutomatedDiscoveryAccountsRequest
 *   accountIds: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAutomatedDiscoveryAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListAutomatedDiscoveryAccountsResponse
 * //   items: [ // __listOfAutomatedDiscoveryAccount
 * //     { // AutomatedDiscoveryAccount
 * //       accountId: "STRING_VALUE",
 * //       status: "ENABLED" || "DISABLED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutomatedDiscoveryAccountsCommandInput - {@link ListAutomatedDiscoveryAccountsCommandInput}
 * @returns {@link ListAutomatedDiscoveryAccountsCommandOutput}
 * @see {@link ListAutomatedDiscoveryAccountsCommandInput} for command's `input` shape.
 * @see {@link ListAutomatedDiscoveryAccountsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Provides information about an error that occurred due to insufficient access to a specified resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Provides information about an error that occurred due to an unknown internal server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Provides information about an error that occurred because a specified resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Provides information about an error that occurred because too many requests were sent during a certain amount of time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Provides information about an error that occurred due to a syntax error in a request.
 *
 * @throws {@link Macie2ServiceException}
 *
 * Base exception class for all service exceptions from Macie2 service.
 *
 * @public
 */
export class ListAutomatedDiscoveryAccountsCommand extends command<ListAutomatedDiscoveryAccountsCommandInput, ListAutomatedDiscoveryAccountsCommandOutput>(
  _ep0,
  _mw0,
  "ListAutomatedDiscoveryAccounts",
  ListAutomatedDiscoveryAccounts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutomatedDiscoveryAccountsRequest;
      output: ListAutomatedDiscoveryAccountsResponse;
    };
    sdk: {
      input: ListAutomatedDiscoveryAccountsCommandInput;
      output: ListAutomatedDiscoveryAccountsCommandOutput;
    };
  };
}
