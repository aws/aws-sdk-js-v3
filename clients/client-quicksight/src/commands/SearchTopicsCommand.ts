// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchTopicsRequest } from "../models/models_4";
import { SearchTopicsResponse } from "../models/models_5";
import { de_SearchTopicsCommand, se_SearchTopicsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchTopicsCommand}.
 */
export interface SearchTopicsCommandInput extends SearchTopicsRequest {}
/**
 * @public
 *
 * The output of {@link SearchTopicsCommand}.
 */
export interface SearchTopicsCommandOutput extends SearchTopicsResponse, __MetadataBearer {}

/**
 * <p>Searches for any Q topic that exists in an Amazon QuickSight account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchTopicsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchTopicsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // SearchTopicsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Filters: [ // TopicSearchFilterList // required
 *     { // TopicSearchFilter
 *       Operator: "StringEquals" || "StringLike", // required
 *       Name: "QUICKSIGHT_USER" || "QUICKSIGHT_VIEWER_OR_OWNER" || "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER" || "QUICKSIGHT_OWNER" || "DIRECT_QUICKSIGHT_OWNER" || "DIRECT_QUICKSIGHT_SOLE_OWNER" || "TOPIC_NAME", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new SearchTopicsCommand(input);
 * const response = await client.send(command);
 * // { // SearchTopicsResponse
 * //   TopicSummaryList: [ // TopicSummaries
 * //     { // TopicSummary
 * //       Arn: "STRING_VALUE",
 * //       TopicId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       UserExperienceVersion: "LEGACY" || "NEW_READER_EXPERIENCE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchTopicsCommandInput - {@link SearchTopicsCommandInput}
 * @returns {@link SearchTopicsCommandOutput}
 * @see {@link SearchTopicsCommandInput} for command's `input` shape.
 * @see {@link SearchTopicsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
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
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class SearchTopicsCommand extends $Command
  .classBuilder<
    SearchTopicsCommandInput,
    SearchTopicsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "SearchTopics", {})
  .n("QuickSightClient", "SearchTopicsCommand")
  .f(void 0, void 0)
  .ser(se_SearchTopicsCommand)
  .de(de_SearchTopicsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchTopicsRequest;
      output: SearchTopicsResponse;
    };
    sdk: {
      input: SearchTopicsCommandInput;
      output: SearchTopicsCommandOutput;
    };
  };
}
