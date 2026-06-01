// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchSpacesRequest, SearchSpacesResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { SearchSpaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchSpacesCommand}.
 */
export interface SearchSpacesCommandInput extends SearchSpacesRequest {}
/**
 * @public
 *
 * The output of {@link SearchSpacesCommand}.
 */
export interface SearchSpacesCommandOutput extends SearchSpacesResponse, __MetadataBearer {}

/**
 * <p>Searches for Amazon QuickSight spaces that match the specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchSpacesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchSpacesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // SearchSpacesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // SpaceQuicksightSearchFilters // required
 *     { // SpaceQuicksightSearchFilter
 *       name: "SPACE_ID" || "SPACE_NAME" || "DIRECT_QUICKSIGHT_OWNER" || "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER" || "DIRECT_QUICKSIGHT_SOLE_OWNER" || "CONTRIBUTED_BY" || "CONSUMED_SOURCE_SIZE" || "CREATED_BY", // required
 *       operator: "STRING_EQUALS" || "STRING_LIKE" || "NUMBER_RANGE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SearchSpacesCommand(input);
 * const response = await client.send(command);
 * // { // SearchSpacesResponse
 * //   spaceId: "STRING_VALUE", // required
 * //   spaceArn: "STRING_VALUE",
 * //   SpaceSummaries: [ // SpaceSummaries // required
 * //     { // SpaceSummary
 * //       spaceId: "STRING_VALUE", // required
 * //       spaceArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       consumedSourceSize: Number("long"),
 * //       consumedSourceDocCount: Number("int"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //       createdByArn: "STRING_VALUE",
 * //       resourcesCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchSpacesCommandInput - {@link SearchSpacesCommandInput}
 * @returns {@link SearchSpacesCommandOutput}
 * @see {@link SearchSpacesCommandInput} for command's `input` shape.
 * @see {@link SearchSpacesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class SearchSpacesCommand extends $Command
  .classBuilder<
    SearchSpacesCommandInput,
    SearchSpacesCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "SearchSpaces", {})
  .n("QuickSightClient", "SearchSpacesCommand")
  .sc(SearchSpaces$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchSpacesRequest;
      output: SearchSpacesResponse;
    };
    sdk: {
      input: SearchSpacesCommandInput;
      output: SearchSpacesCommandOutput;
    };
  };
}
