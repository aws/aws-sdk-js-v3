// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListServiceViewsInput, ListServiceViewsOutput } from "../models/models_0";
import type {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";
import { ListServiceViews$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceViewsCommand}.
 */
export interface ListServiceViewsCommandInput extends ListServiceViewsInput {}
/**
 * @public
 *
 * The output of {@link ListServiceViewsCommand}.
 */
export interface ListServiceViewsCommandOutput extends ListServiceViewsOutput, __MetadataBearer {}

/**
 * <p>Lists all Resource Explorer service views available in the current Amazon Web Services account. This operation returns the ARNs of available service views.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, ListServiceViewsCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, ListServiceViewsCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // ListServiceViewsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceViewsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceViewsOutput
 * //   NextToken: "STRING_VALUE",
 * //   ServiceViews: [ // ServiceViewArnList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServiceViewsCommandInput - {@link ListServiceViewsCommandInput}
 * @returns {@link ListServiceViewsCommandOutput}
 * @see {@link ListServiceViewsCommandInput} for command's `input` shape.
 * @see {@link ListServiceViewsCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html">Quotas for Resource Explorer</a>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You provided an invalid value for one of the operation's parameters. Check the syntax for the operation, and try again.</p>
 *
 * @throws {@link ResourceExplorer2ServiceException}
 * <p>Base exception class for all service exceptions from ResourceExplorer2 service.</p>
 *
 *
 * @public
 */
export class ListServiceViewsCommand extends $Command
  .classBuilder<
    ListServiceViewsCommandInput,
    ListServiceViewsCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceExplorer", "ListServiceViews", {})
  .n("ResourceExplorer2Client", "ListServiceViewsCommand")
  .sc(ListServiceViews$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceViewsInput;
      output: ListServiceViewsOutput;
    };
    sdk: {
      input: ListServiceViewsCommandInput;
      output: ListServiceViewsCommandOutput;
    };
  };
}
