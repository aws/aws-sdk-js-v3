// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchInput, SearchInputFilterSensitiveLog, SearchOutput } from "../models/models_0";
import { de_SearchCommand, se_SearchCommand } from "../protocols/Aws_restJson1";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchCommand}.
 */
export interface SearchCommandInput extends SearchInput {}
/**
 * @public
 *
 * The output of {@link SearchCommand}.
 */
export interface SearchCommandOutput extends SearchOutput, __MetadataBearer {}

/**
 * <p>Searches for resources and displays details about all resources that match the
 *             specified criteria. You must specify a query string.</p>
 *          <p>All search queries must use a view. If you don't explicitly specify a view, then
 *             Amazon Web Services Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation.
 *             The results are the logical intersection of the results that match both the
 *                 <code>QueryString</code> parameter supplied to this operation and the
 *                 <code>SearchFilter</code> parameter attached to the view.</p>
 *          <p>For the complete syntax supported by the <code>QueryString</code> parameter, see
 *                 <a href="https://docs.aws.amazon.com/resource-explorer/latest/APIReference/about-query-syntax.html">Search
 *                 query syntax reference for Resource Explorer</a>.</p>
 *          <p>If your search results are empty, or are missing results that you think should be
 *             there, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/troubleshooting_search.html">Troubleshooting Resource Explorer
 *                 search</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, SearchCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, SearchCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * const client = new ResourceExplorer2Client(config);
 * const input = { // SearchInput
 *   QueryString: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   ViewArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchCommand(input);
 * const response = await client.send(command);
 * // { // SearchOutput
 * //   Resources: [ // ResourceList
 * //     { // Resource
 * //       Arn: "STRING_VALUE",
 * //       OwningAccountId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       Service: "STRING_VALUE",
 * //       LastReportedAt: new Date("TIMESTAMP"),
 * //       Properties: [ // ResourcePropertyList
 * //         { // ResourceProperty
 * //           Name: "STRING_VALUE",
 * //           LastReportedAt: new Date("TIMESTAMP"),
 * //           Data: "DOCUMENT_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ViewArn: "STRING_VALUE",
 * //   Count: { // ResourceCount
 * //     TotalResources: Number("long"),
 * //     Complete: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param SearchCommandInput - {@link SearchCommandInput}
 * @returns {@link SearchCommandOutput}
 * @see {@link SearchCommandInput} for command's `input` shape.
 * @see {@link SearchCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again
 *             later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You specified a resource that doesn't exist. Check the ID or ARN that you used to
 *             identity the resource, and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more
 *             information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html">Quotas for
 *             Resource Explorer</a>.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The principal making the request isn't permitted to perform the operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You provided an invalid value for one of the operation's parameters. Check the syntax
 *             for the operation, and try again.</p>
 *
 * @throws {@link ResourceExplorer2ServiceException}
 * <p>Base exception class for all service exceptions from ResourceExplorer2 service.</p>
 *
 * @public
 */
export class SearchCommand extends $Command
  .classBuilder<
    SearchCommandInput,
    SearchCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ResourceExplorer", "Search", {})
  .n("ResourceExplorer2Client", "SearchCommand")
  .f(SearchInputFilterSensitiveLog, void 0)
  .ser(se_SearchCommand)
  .de(de_SearchCommand)
  .build() {}
