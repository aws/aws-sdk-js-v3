// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchResourceTagsRequest, SearchResourceTagsResponse } from "../models/models_2";
import { de_SearchResourceTagsCommand, se_SearchResourceTagsCommand } from "../protocols/Aws_restJson1";

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
 *  <p>Maximum number (1000) of tags have been returned with current request. Consider changing
 *    request parameters to get more tags.</p>
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "SearchResourceTags", {})
  .n("ConnectClient", "SearchResourceTagsCommand")
  .f(void 0, void 0)
  .ser(se_SearchResourceTagsCommand)
  .de(de_SearchResourceTagsCommand)
  .build() {}
