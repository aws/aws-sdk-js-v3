// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPersonalAccessTokensRequest, ListPersonalAccessTokensResponse } from "../models/models_0";
import { ListPersonalAccessTokens$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPersonalAccessTokensCommand}.
 */
export interface ListPersonalAccessTokensCommandInput extends ListPersonalAccessTokensRequest {}
/**
 * @public
 *
 * The output of {@link ListPersonalAccessTokensCommand}.
 */
export interface ListPersonalAccessTokensCommandOutput extends ListPersonalAccessTokensResponse, __MetadataBearer {}

/**
 * Returns a summary of your Personal Access Tokens.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListPersonalAccessTokensCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListPersonalAccessTokensCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // ListPersonalAccessTokensRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPersonalAccessTokensCommand(input);
 * const response = await client.send(command);
 * // { // ListPersonalAccessTokensResponse
 * //   NextToken: "STRING_VALUE",
 * //   PersonalAccessTokenSummaries: [ // PersonalAccessTokenSummaryList
 * //     { // PersonalAccessTokenSummary
 * //       PersonalAccessTokenId: "STRING_VALUE",
 * //       UserId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateLastUsed: new Date("TIMESTAMP"),
 * //       ExpiresTime: new Date("TIMESTAMP"),
 * //       Scopes: [ // PersonalAccessTokenScopeList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPersonalAccessTokensCommandInput - {@link ListPersonalAccessTokensCommandInput}
 * @returns {@link ListPersonalAccessTokensCommandOutput}
 * @see {@link ListPersonalAccessTokensCommandInput} for command's `input` shape.
 * @see {@link ListPersonalAccessTokensCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * The identifier supplied for the user, group, or resource does not exist in your organization.
 *
 * @throws {@link EntityStateException} (client fault)
 *
 * You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class ListPersonalAccessTokensCommand extends command<ListPersonalAccessTokensCommandInput, ListPersonalAccessTokensCommandOutput>(
  _ep0,
  _mw0,
  "ListPersonalAccessTokens",
  ListPersonalAccessTokens$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPersonalAccessTokensRequest;
      output: ListPersonalAccessTokensResponse;
    };
    sdk: {
      input: ListPersonalAccessTokensCommandInput;
      output: ListPersonalAccessTokensCommandOutput;
    };
  };
}
