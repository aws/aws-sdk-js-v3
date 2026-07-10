// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchKnowledgeBasesRequest, SearchKnowledgeBasesResponse } from "../models/models_4";
import { SearchKnowledgeBases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchKnowledgeBasesCommand}.
 */
export interface SearchKnowledgeBasesCommandInput extends SearchKnowledgeBasesRequest {}
/**
 * @public
 *
 * The output of {@link SearchKnowledgeBasesCommand}.
 */
export interface SearchKnowledgeBasesCommandOutput extends SearchKnowledgeBasesResponse, __MetadataBearer {}

/**
 * <p>Searches for a subset of knowledge bases based on specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchKnowledgeBasesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchKnowledgeBasesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // SearchKnowledgeBasesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // KnowledgeBaseSearchFilters
 *     { // KnowledgeBaseSearchFilter
 *       name: "KNOWLEDGE_BASE_ID" || "KNOWLEDGE_BASE_NAME" || "DIRECT_QUICKSIGHT_OWNER" || "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER" || "DIRECT_QUICKSIGHT_SOLE_OWNER" || "KNOWLEDGE_BASE_SIZE_BYTES" || "PRIMARY_OWNER" || "DATASOURCE_ARN", // required
 *       operator: "STRING_EQUALS" || "STRING_LIKE" || "GREATER_THAN_OR_EQUALS" || "LESS_THAN_OR_EQUALS", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   SortBy: { // KnowledgeBaseSortBy
 *     sortByField: "KNOWLEDGE_BASE_SIZE_BYTES" || "CREATED_AT", // required
 *     sortOrder: "ASC" || "DESC", // required
 *   },
 * };
 * const command = new SearchKnowledgeBasesCommand(input);
 * const response = await client.send(command);
 * // { // SearchKnowledgeBasesResponse
 * //   KnowledgeBaseSummaries: [ // KnowledgeBaseSummaries // required
 * //     { // KnowledgeBaseSummary
 * //       KnowledgeBaseArn: "STRING_VALUE", // required
 * //       KnowledgeBaseId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Status: "CREATING" || "UPDATING" || "ACTIVE" || "FAILED" || "DELETING", // required
 * //       DataSourceArn: "STRING_VALUE", // required
 * //       Type: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       KnowledgeBaseSizeBytes: Number("long"),
 * //       DocumentCount: Number("long"),
 * //       PrimaryOwnerArn: "STRING_VALUE",
 * //       PrimaryOwnerUsername: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchKnowledgeBasesCommandInput - {@link SearchKnowledgeBasesCommandInput}
 * @returns {@link SearchKnowledgeBasesCommandOutput}
 * @see {@link SearchKnowledgeBasesCommandInput} for command's `input` shape.
 * @see {@link SearchKnowledgeBasesCommandOutput} for command's `response` shape.
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
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
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
export class SearchKnowledgeBasesCommand extends command<SearchKnowledgeBasesCommandInput, SearchKnowledgeBasesCommandOutput>(
  _ep0,
  _mw0,
  "SearchKnowledgeBases",
  SearchKnowledgeBases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchKnowledgeBasesRequest;
      output: SearchKnowledgeBasesResponse;
    };
    sdk: {
      input: SearchKnowledgeBasesCommandInput;
      output: SearchKnowledgeBasesCommandOutput;
    };
  };
}
