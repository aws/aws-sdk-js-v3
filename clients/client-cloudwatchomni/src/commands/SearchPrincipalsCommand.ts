// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchPrincipalsInput, SearchPrincipalsOutput } from "../models/models_0";
import { SearchPrincipals$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchPrincipalsCommand}.
 */
export interface SearchPrincipalsCommandInput extends SearchPrincipalsInput {}
/**
 * @public
 *
 * The output of {@link SearchPrincipalsCommand}.
 */
export interface SearchPrincipalsCommandOutput extends SearchPrincipalsOutput, __MetadataBearer {}

/**
 * Searches Identity Center for users and groups in a domain. The domain must be
 * configured with Identity Center.
 *
 * To grant access to a result, pass its principalId to CreateAccessGrant with a
 * principalType of IDC_USER for a user or IDC_GROUP for a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, SearchPrincipalsCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, SearchPrincipalsCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // SearchPrincipalsInput
 *   domainId: "STRING_VALUE", // required
 *   searchQuery: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchPrincipalsCommand(input);
 * const response = await client.send(command);
 * // { // SearchPrincipalsOutput
 * //   results: [ // PrincipalSearchResultList // required
 * //     { // PrincipalSearchResult
 * //       principalId: "STRING_VALUE", // required
 * //       principalType: "USER" || "GROUP", // required
 * //       displayName: "STRING_VALUE", // required
 * //       userName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchPrincipalsCommandInput - {@link SearchPrincipalsCommandInput}
 * @returns {@link SearchPrincipalsCommandOutput}
 * @see {@link SearchPrincipalsCommandInput} for command's `input` shape.
 * @see {@link SearchPrincipalsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Search principals by name
 * ```javascript
 * // The following example searches a domain for principals whose name matches a text query. A text search (any searchQuery other than *) returns at most 10 results and does not paginate, so maxResults and nextToken are not supplied and no nextToken is returned. To grant access to a result, pass its principalId to CreateAccessGrant with a principalType of IDC_USER for a user or IDC_GROUP for a group. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   domainId: "d-1a2b3c4d5e",
 *   searchQuery: "jane"
 * };
 * const command = new SearchPrincipalsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   results: [
 *     {
 *       displayName: "Jane Doe",
 *       principalId: "94b6c7d8-1a2b-4c3d-9e4f-5a6b7c8d9e0f",
 *       principalType: "USER",
 *       userName: "jane.doe"
 *     },
 *     {
 *       displayName: "Jane's Analysts",
 *       principalId: "2f5a8c1b-6d3e-4f7a-8b9c-0d1e2f3a4b5c",
 *       principalType: "GROUP"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SearchPrincipalsCommand extends command<SearchPrincipalsCommandInput, SearchPrincipalsCommandOutput>(
  _ep0,
  _mw0,
  "SearchPrincipals",
  SearchPrincipals$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchPrincipalsInput;
      output: SearchPrincipalsOutput;
    };
    sdk: {
      input: SearchPrincipalsCommandInput;
      output: SearchPrincipalsCommandOutput;
    };
  };
}
