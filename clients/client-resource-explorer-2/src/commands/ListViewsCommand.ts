// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListViewsInput, ListViewsOutput } from "../models/models_0";
import { ListViews$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListViewsCommand}.
 */
export interface ListViewsCommandInput extends ListViewsInput {}
/**
 * @public
 *
 * The output of {@link ListViewsCommand}.
 */
export interface ListViewsCommandOutput extends ListViewsOutput, __MetadataBearer {}

/**
 * Lists the [Amazon resource names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the views available in the Amazon Web Services Region in which you call this operation.
 *
 * > **Note:** Always check the `NextToken` response parameter for a `null` value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The `NextToken` response parameter value is `null` *only* when there are no more results to display.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, ListViewsCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, ListViewsCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // ListViewsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListViewsCommand(input);
 * const response = await client.send(command);
 * // { // ListViewsOutput
 * //   Views: [ // ViewArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListViewsCommandInput - {@link ListViewsCommandInput}
 * @returns {@link ListViewsCommandOutput}
 * @see {@link ListViewsCommandInput} for command's `input` shape.
 * @see {@link ListViewsCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request failed because you exceeded a rate limit for this operation. For more information, see [Quotas for Resource Explorer](https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html).
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
export class ListViewsCommand extends command<ListViewsCommandInput, ListViewsCommandOutput>(
  _ep0,
  _mw0,
  "ListViews",
  ListViews$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListViewsInput;
      output: ListViewsOutput;
    };
    sdk: {
      input: ListViewsCommandInput;
      output: ListViewsCommandOutput;
    };
  };
}
