// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteViewInput, DeleteViewOutput } from "../models/models_0";
import { DeleteView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteViewCommand}.
 */
export interface DeleteViewCommandInput extends DeleteViewInput {}
/**
 * @public
 *
 * The output of {@link DeleteViewCommand}.
 */
export interface DeleteViewCommandOutput extends DeleteViewOutput, __MetadataBearer {}

/**
 * Deletes the specified view.
 *
 * If the specified view is the default view for its Amazon Web Services Region, then all Search operations in that Region must explicitly specify the view to use until you configure a new default by calling the AssociateDefaultView operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, DeleteViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, DeleteViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // DeleteViewInput
 *   ViewArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteViewCommand(input);
 * const response = await client.send(command);
 * // { // DeleteViewOutput
 * //   ViewArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteViewCommandInput - {@link DeleteViewCommandInput}
 * @returns {@link DeleteViewCommandOutput}
 * @see {@link DeleteViewCommandInput} for command's `input` shape.
 * @see {@link DeleteViewCommandOutput} for command's `response` shape.
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
export class DeleteViewCommand extends command<DeleteViewCommandInput, DeleteViewCommandOutput>(
  _ep0,
  _mw0,
  "DeleteView",
  DeleteView$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteViewInput;
      output: DeleteViewOutput;
    };
    sdk: {
      input: DeleteViewCommandInput;
      output: DeleteViewCommandOutput;
    };
  };
}
