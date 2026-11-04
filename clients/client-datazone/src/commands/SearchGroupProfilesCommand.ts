// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchGroupProfilesInput, SearchGroupProfilesOutput } from "../models/models_2";
import { SearchGroupProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchGroupProfilesCommand}.
 */
export interface SearchGroupProfilesCommandInput extends SearchGroupProfilesInput {}
/**
 * @public
 *
 * The output of {@link SearchGroupProfilesCommand}.
 */
export interface SearchGroupProfilesCommandOutput extends SearchGroupProfilesOutput, __MetadataBearer {}

/**
 * Searches group profiles in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, SearchGroupProfilesCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, SearchGroupProfilesCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // SearchGroupProfilesInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   groupType: "SSO_GROUP" || "DATAZONE_SSO_GROUP" || "IAM_ROLE_SESSION_GROUP", // required
 *   searchText: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchGroupProfilesCommand(input);
 * const response = await client.send(command);
 * // { // SearchGroupProfilesOutput
 * //   items: [ // GroupProfileSummaries
 * //     { // GroupProfileSummary
 * //       domainId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       status: "ASSIGNED" || "NOT_ASSIGNED",
 * //       groupName: "STRING_VALUE",
 * //       rolePrincipalArn: "STRING_VALUE",
 * //       rolePrincipalId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchGroupProfilesCommandInput - {@link SearchGroupProfilesCommandInput}
 * @returns {@link SearchGroupProfilesCommandOutput}
 * @see {@link SearchGroupProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchGroupProfilesCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class SearchGroupProfilesCommand extends command<SearchGroupProfilesCommandInput, SearchGroupProfilesCommandOutput>(
  _ep0,
  _mw0,
  "SearchGroupProfiles",
  SearchGroupProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchGroupProfilesInput;
      output: SearchGroupProfilesOutput;
    };
    sdk: {
      input: SearchGroupProfilesCommandInput;
      output: SearchGroupProfilesCommandOutput;
    };
  };
}
