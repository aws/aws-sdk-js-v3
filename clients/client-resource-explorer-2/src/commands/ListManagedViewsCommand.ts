// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListManagedViewsInput, ListManagedViewsOutput } from "../models/models_0";
import { ListManagedViews$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListManagedViewsCommand}.
 */
export interface ListManagedViewsCommandInput extends ListManagedViewsInput {}
/**
 * @public
 *
 * The output of {@link ListManagedViewsCommand}.
 */
export interface ListManagedViewsCommandOutput extends ListManagedViewsOutput, __MetadataBearer {}

/**
 * Lists the Amazon resource names (ARNs) of the [Amazon Web Services-managed views](https://docs.aws.amazon.com/resource-explorer/latest/userguide/aws-managed-views.html) available in the Amazon Web Services Region in which you call this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, ListManagedViewsCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, ListManagedViewsCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // ListManagedViewsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ServicePrincipal: "STRING_VALUE",
 * };
 * const command = new ListManagedViewsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedViewsOutput
 * //   NextToken: "STRING_VALUE",
 * //   ManagedViews: [ // ManagedViewArnList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListManagedViewsCommandInput - {@link ListManagedViewsCommandInput}
 * @returns {@link ListManagedViewsCommandOutput}
 * @see {@link ListManagedViewsCommandInput} for command's `input` shape.
 * @see {@link ListManagedViewsCommandOutput} for command's `response` shape.
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
export class ListManagedViewsCommand extends command<ListManagedViewsCommandInput, ListManagedViewsCommandOutput>(
  _ep0,
  _mw0,
  "ListManagedViews",
  ListManagedViews$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedViewsInput;
      output: ListManagedViewsOutput;
    };
    sdk: {
      input: ListManagedViewsCommandInput;
      output: ListManagedViewsCommandOutput;
    };
  };
}
