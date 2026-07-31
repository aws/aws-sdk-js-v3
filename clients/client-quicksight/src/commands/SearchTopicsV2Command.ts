// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchTopicsV2Request, SearchTopicsV2Response } from "../models/models_5";
import { SearchTopicsV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchTopicsV2Command}.
 */
export interface SearchTopicsV2CommandInput extends SearchTopicsV2Request {}
/**
 * @public
 *
 * The output of {@link SearchTopicsV2Command}.
 */
export interface SearchTopicsV2CommandOutput extends SearchTopicsV2Response, __MetadataBearer {}

/**
 * <p>Searches for any Q topic that exists in an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchTopicsV2Command } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchTopicsV2Command } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // SearchTopicsV2Request
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
 * const command = new SearchTopicsV2Command(input);
 * const response = await client.send(command);
 * // { // SearchTopicsV2Response
 * //   TopicSummaryList: [ // TopicV2Summaries
 * //     { // TopicV2Summary
 * //       Arn: "STRING_VALUE",
 * //       TopicId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchTopicsV2CommandInput - {@link SearchTopicsV2CommandInput}
 * @returns {@link SearchTopicsV2CommandOutput}
 * @see {@link SearchTopicsV2CommandInput} for command's `input` shape.
 * @see {@link SearchTopicsV2CommandOutput} for command's `response` shape.
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
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class SearchTopicsV2Command extends command<SearchTopicsV2CommandInput, SearchTopicsV2CommandOutput>(
  _ep0,
  _mw0,
  "SearchTopicsV2",
  SearchTopicsV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchTopicsV2Request;
      output: SearchTopicsV2Response;
    };
    sdk: {
      input: SearchTopicsV2CommandInput;
      output: SearchTopicsV2CommandOutput;
    };
  };
}
