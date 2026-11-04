// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateDefaultViewInput, AssociateDefaultViewOutput } from "../models/models_0";
import { AssociateDefaultView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Sets the specified view as the default for the Amazon Web Services Region in which you call this operation. When a user performs a Search that doesn't explicitly specify which view to use, then Amazon Web Services Resource Explorer automatically chooses this default view for searches performed in this Amazon Web Services Region.
 *
 * If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every `Search` operation performed in that Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, AssociateDefaultViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, AssociateDefaultViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
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
export class AssociateDefaultViewCommand extends command<AssociateDefaultViewCommandInput, AssociateDefaultViewCommandOutput>(
  _ep0,
  _mw0,
  "AssociateDefaultView",
  AssociateDefaultView$
) {
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
