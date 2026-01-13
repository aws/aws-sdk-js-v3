// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchResourceTagsRequest, SearchResourceTagsResponse } from "../models/models_2";
import { SearchResourceTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchResourceTagsCommand}.
 */
export interface SearchResourceTagsCommandInput extends SearchResourceTagsRequest {}
/**
 * @public
 *
 * The output of {@link SearchResourceTagsCommand}.
 */
export interface SearchResourceTagsCommandOutput extends SearchResourceTagsResponse, __MetadataBearer {}

/**
 * <p>Searches tags used in an Amazon Connect instance using optional search criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchResourceTagsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchResourceTagsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchResourceTagsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ResourceTypes: [ // ResourceTypeList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchCriteria: { // ResourceTagsSearchCriteria
 *     TagSearchCondition: { // TagSearchCondition
 *       tagKey: "STRING_VALUE",
 *       tagValue: "STRING_VALUE",
 *       tagKeyComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *       tagValueComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 * };
 * const command = new SearchResourceTagsCommand(input);
 * const response = await client.send(command);
 * // { // SearchResourceTagsResponse
 * //   Tags: [ // TagsList
 * //     { // TagSet
 * //       key: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchResourceTagsCommandInput - {@link SearchResourceTagsCommandInput}
 * @returns {@link SearchResourceTagsCommandOutput}
 * @see {@link SearchResourceTagsCommandInput} for command's `input` shape.
 * @see {@link SearchResourceTagsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link MaximumResultReturnedException} (client fault)
 *  <p>Maximum number (1000) of tags have been returned with current request. Consider changing request parameters to
 *    get more tags.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class SearchResourceTagsCommand extends $Command
  .classBuilder<
    SearchResourceTagsCommandInput,
    SearchResourceTagsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "SearchResourceTags", {})
  .n("ConnectClient", "SearchResourceTagsCommand")
  .sc(SearchResourceTags$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchResourceTagsRequest;
      output: SearchResourceTagsResponse;
    };
    sdk: {
      input: SearchResourceTagsCommandInput;
      output: SearchResourceTagsCommandOutput;
    };
  };
}
