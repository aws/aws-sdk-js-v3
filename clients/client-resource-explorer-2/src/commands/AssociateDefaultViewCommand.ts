// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateDefaultViewInput, AssociateDefaultViewOutput } from "../models/models_0";
import { de_AssociateDefaultViewCommand, se_AssociateDefaultViewCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link AssociateDefaultViewCommand}.
 */
export interface AssociateDefaultViewCommandInput extends AssociateDefaultViewInput {}
/**
 * @public
 *
 * The output of {@link AssociateDefaultViewCommand}.
 */
export interface AssociateDefaultViewCommandOutput extends AssociateDefaultViewOutput, __MetadataBearer {}

/**
 * <p>Sets the specified view as the default for the Amazon Web Services Region in which you call this
 *             operation. When a user performs a <a>Search</a> that doesn't explicitly
 *             specify which view to use, then Amazon Web Services Resource Explorer automatically chooses this default view for
 *             searches performed in this Amazon Web Services Region.</p>
 *          <p>If an Amazon Web Services Region doesn't have a default view
 *     configured, then users must explicitly specify a view with every <code>Search</code>
 *     operation performed in that Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, AssociateDefaultViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, AssociateDefaultViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * const client = new ResourceExplorer2Client(config);
 * const input = { // AssociateDefaultViewInput
 *   ViewArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateDefaultViewCommand(input);
 * const response = await client.send(command);
 * // { // AssociateDefaultViewOutput
 * //   ViewArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateDefaultViewCommandInput - {@link AssociateDefaultViewCommandInput}
 * @returns {@link AssociateDefaultViewCommandOutput}
 * @see {@link AssociateDefaultViewCommandInput} for command's `input` shape.
 * @see {@link AssociateDefaultViewCommandOutput} for command's `response` shape.
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
export class AssociateDefaultViewCommand extends $Command
  .classBuilder<
    AssociateDefaultViewCommandInput,
    AssociateDefaultViewCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ResourceExplorer", "AssociateDefaultView", {})
  .n("ResourceExplorer2Client", "AssociateDefaultViewCommand")
  .f(void 0, void 0)
  .ser(se_AssociateDefaultViewCommand)
  .de(de_AssociateDefaultViewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDefaultViewInput;
      output: AssociateDefaultViewOutput;
    };
    sdk: {
      input: AssociateDefaultViewCommandInput;
      output: AssociateDefaultViewCommandOutput;
    };
  };
}
