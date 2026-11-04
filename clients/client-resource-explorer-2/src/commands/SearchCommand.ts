// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchInput, SearchOutput } from "../models/models_0";
import { Search$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Searches for resources and displays details about all resources that match the specified criteria. You must specify a query string.
 *
 * All search queries must use a view. If you don't explicitly specify a view, then Amazon Web Services Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation. The results are the logical intersection of the results that match both the `QueryString` parameter supplied to this operation and the `SearchFilter` parameter attached to the view.
 *
 * For the complete syntax supported by the `QueryString` parameter, see [Search query syntax reference for Resource Explorer](https://docs.aws.amazon.com/resource-explorer/latest/APIReference/about-query-syntax.html).
 *
 * If your search results are empty, or are missing results that you think should be there, see [Troubleshooting Resource Explorer search](https://docs.aws.amazon.com/resource-explorer/latest/userguide/troubleshooting_search.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, SearchCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, SearchCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
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
 * //       CfnResourceType: "STRING_VALUE",
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
 *
 * The credentials that you used to call this operation don't have the minimum required permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed because of internal service error. Try your request again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * You specified a resource that doesn't exist. Check the ID or ARN that you used to identity the resource, and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request failed because you exceeded a rate limit for this operation. For more information, see [Quotas for Resource Explorer](https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html).
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The principal making the request isn't permitted to perform the operation.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You provided an invalid value for one of the operation's parameters. Check the syntax for the operation, and try again.
 *
 * @throws {@link ResourceExplorer2ServiceException}
 *
 * Base exception class for all service exceptions from ResourceExplorer2 service.
 *
 * @public
 */
export class SearchCommand extends command<SearchCommandInput, SearchCommandOutput>(
  _ep0,
  _mw0,
  "Search",
  Search$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchInput;
      output: SearchOutput;
    };
    sdk: {
      input: SearchCommandInput;
      output: SearchCommandOutput;
    };
  };
}
