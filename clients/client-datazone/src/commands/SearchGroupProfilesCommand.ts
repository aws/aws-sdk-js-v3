// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchGroupProfilesInput, SearchGroupProfilesOutput } from "../models/models_1";
import { SearchGroupProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Searches group profiles in Amazon DataZone.</p>
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
 *   groupType: "SSO_GROUP" || "DATAZONE_SSO_GROUP", // required
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class SearchGroupProfilesCommand extends $Command
  .classBuilder<
    SearchGroupProfilesCommandInput,
    SearchGroupProfilesCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "SearchGroupProfiles", {})
  .n("DataZoneClient", "SearchGroupProfilesCommand")
  .sc(SearchGroupProfiles$)
  .build() {
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
