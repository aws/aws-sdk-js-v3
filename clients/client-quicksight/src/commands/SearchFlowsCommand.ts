// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchFlowsInput, SearchFlowsOutput } from "../models/models_5";
import { SearchFlows$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchFlowsCommand}.
 */
export interface SearchFlowsCommandInput extends SearchFlowsInput {}
/**
 * @public
 *
 * The output of {@link SearchFlowsCommand}.
 */
export interface SearchFlowsCommandOutput extends SearchFlowsOutput, __MetadataBearer {}

/**
 * Search for the flows in an Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchFlowsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchFlowsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // SearchFlowsInput
 *   AwsAccountId: "STRING_VALUE", // required
 *   Filters: [ // SearchFlowsFilterList // required
 *     { // SearchFlowsFilter
 *       Name: "assetName" || "assetDescription" || "DIRECT_QUICKSIGHT_OWNER" || "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER" || "DIRECT_QUICKSIGHT_SOLE_OWNER", // required
 *       Operator: "StringEquals" || "StringLike", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new SearchFlowsCommand(input);
 * const response = await client.send(command);
 * // { // SearchFlowsOutput
 * //   FlowSummaryList: [ // FlowSummaryList // required
 * //     { // FlowSummary
 * //       Arn: "STRING_VALUE", // required
 * //       FlowId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       CreatedBy: "STRING_VALUE",
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedBy: "STRING_VALUE",
 * //       PublishState: "PUBLISHED" || "DRAFT" || "PENDING_APPROVAL",
 * //       RunCount: Number("int"),
 * //       UserCount: Number("int"),
 * //       LastPublishedBy: "STRING_VALUE",
 * //       LastPublishedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchFlowsCommandInput - {@link SearchFlowsCommandInput}
 * @returns {@link SearchFlowsCommandOutput}
 * @see {@link SearchFlowsCommandInput} for command's `input` shape.
 * @see {@link SearchFlowsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class SearchFlowsCommand extends command<SearchFlowsCommandInput, SearchFlowsCommandOutput>(
  _ep0,
  _mw0,
  "SearchFlows",
  SearchFlows$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchFlowsInput;
      output: SearchFlowsOutput;
    };
    sdk: {
      input: SearchFlowsCommandInput;
      output: SearchFlowsCommandOutput;
    };
  };
}
