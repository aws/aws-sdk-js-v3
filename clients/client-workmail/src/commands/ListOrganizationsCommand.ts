// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOrganizationsRequest, ListOrganizationsResponse } from "../models/models_0";
import { ListOrganizations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListOrganizationsCommand}.
 */
export interface ListOrganizationsCommandInput extends ListOrganizationsRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationsCommand}.
 */
export interface ListOrganizationsCommandOutput extends ListOrganizationsResponse, __MetadataBearer {}

/**
 * <p>Returns summaries of the customer's organizations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListOrganizationsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListOrganizationsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // ListOrganizationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListOrganizationsCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationsResponse
 * //   OrganizationSummaries: [ // OrganizationSummaries
 * //     { // OrganizationSummary
 * //       OrganizationId: "STRING_VALUE",
 * //       Alias: "STRING_VALUE",
 * //       DefaultMailDomain: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOrganizationsCommandInput - {@link ListOrganizationsCommandInput}
 * @returns {@link ListOrganizationsCommandOutput}
 * @see {@link ListOrganizationsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class ListOrganizationsCommand extends command<ListOrganizationsCommandInput, ListOrganizationsCommandOutput>(
  _ep0,
  _mw0,
  "ListOrganizations",
  ListOrganizations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOrganizationsRequest;
      output: ListOrganizationsResponse;
    };
    sdk: {
      input: ListOrganizationsCommandInput;
      output: ListOrganizationsCommandOutput;
    };
  };
}
