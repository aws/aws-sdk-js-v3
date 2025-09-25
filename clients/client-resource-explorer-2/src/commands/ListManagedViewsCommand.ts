// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListManagedViewsInput, ListManagedViewsOutput } from "../models/models_0";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";
import { ListManagedViews } from "../schemas/schemas_6_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the Amazon resource names (ARNs) of the
 *             <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/aws-managed-views.html">Amazon Web Services-managed views</a> available
 *             in the Amazon Web Services Region in which you call this operation. </p>
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
 *  <p>The credentials that you used to call this operation don't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again
 *             later.</p>
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
 *
 * @public
 */
export class ListManagedViewsCommand extends $Command
  .classBuilder<
    ListManagedViewsCommandInput,
    ListManagedViewsCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceExplorer", "ListManagedViews", {})
  .n("ResourceExplorer2Client", "ListManagedViewsCommand")
  .sc(ListManagedViews)
  .build() {
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
