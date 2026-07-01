// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMailDomainsRequest, ListMailDomainsResponse } from "../models/models_0";
import { ListMailDomains$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMailDomainsCommand}.
 */
export interface ListMailDomainsCommandInput extends ListMailDomainsRequest {}
/**
 * @public
 *
 * The output of {@link ListMailDomainsCommand}.
 */
export interface ListMailDomainsCommandOutput extends ListMailDomainsResponse, __MetadataBearer {}

/**
 * <p>Lists the mail domains in a given WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMailDomainsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMailDomainsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // ListMailDomainsRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListMailDomainsCommand(input);
 * const response = await client.send(command);
 * // { // ListMailDomainsResponse
 * //   MailDomains: [ // MailDomains
 * //     { // MailDomainSummary
 * //       DomainName: "STRING_VALUE",
 * //       DefaultDomain: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMailDomainsCommandInput - {@link ListMailDomainsCommandInput}
 * @returns {@link ListMailDomainsCommandOutput}
 * @see {@link ListMailDomainsCommandInput} for command's `input` shape.
 * @see {@link ListMailDomainsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class ListMailDomainsCommand extends command<ListMailDomainsCommandInput, ListMailDomainsCommandOutput>(
  _ep0,
  _mw0,
  "ListMailDomains",
  ListMailDomains$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMailDomainsRequest;
      output: ListMailDomainsResponse;
    };
    sdk: {
      input: ListMailDomainsCommandInput;
      output: ListMailDomainsCommandOutput;
    };
  };
}
