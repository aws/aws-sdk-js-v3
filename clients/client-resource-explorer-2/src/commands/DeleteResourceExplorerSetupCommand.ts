// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteResourceExplorerSetupInput, DeleteResourceExplorerSetupOutput } from "../models/models_0";
import type {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";
import { DeleteResourceExplorerSetup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourceExplorerSetupCommand}.
 */
export interface DeleteResourceExplorerSetupCommandInput extends DeleteResourceExplorerSetupInput {}
/**
 * @public
 *
 * The output of {@link DeleteResourceExplorerSetupCommand}.
 */
export interface DeleteResourceExplorerSetupCommandOutput extends DeleteResourceExplorerSetupOutput, __MetadataBearer {}

/**
 * <p>Deletes a Resource Explorer setup configuration. This operation removes indexes and views from the specified Regions or all Regions where Resource Explorer is configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, DeleteResourceExplorerSetupCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, DeleteResourceExplorerSetupCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // DeleteResourceExplorerSetupInput
 *   RegionList: [ // RegionList
 *     "STRING_VALUE",
 *   ],
 *   DeleteInAllRegions: true || false,
 * };
 * const command = new DeleteResourceExplorerSetupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteResourceExplorerSetupOutput
 * //   TaskId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteResourceExplorerSetupCommandInput - {@link DeleteResourceExplorerSetupCommandInput}
 * @returns {@link DeleteResourceExplorerSetupCommandOutput}
 * @see {@link DeleteResourceExplorerSetupCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceExplorerSetupCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>If you attempted to create a view, then the request failed because either you specified parameters that didn’t match the original request, or you attempted to create a view with a name that already exists in this Amazon Web Services Region.</p> <p>If you attempted to create an index, then the request failed because either you specified parameters that didn't match the original request, or an index already exists in the current Amazon Web Services Region.</p> <p>If you attempted to update an index type to <code>AGGREGATOR</code>, then the request failed because you already have an <code>AGGREGATOR</code> index in a different Amazon Web Services Region.</p>
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
export class DeleteResourceExplorerSetupCommand extends $Command
  .classBuilder<
    DeleteResourceExplorerSetupCommandInput,
    DeleteResourceExplorerSetupCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceExplorer", "DeleteResourceExplorerSetup", {})
  .n("ResourceExplorer2Client", "DeleteResourceExplorerSetupCommand")
  .sc(DeleteResourceExplorerSetup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourceExplorerSetupInput;
      output: DeleteResourceExplorerSetupOutput;
    };
    sdk: {
      input: DeleteResourceExplorerSetupCommandInput;
      output: DeleteResourceExplorerSetupCommandOutput;
    };
  };
}
