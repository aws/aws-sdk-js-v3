// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateQAppWithUserInput } from "../models/models_0";
import { AssociateQAppWithUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateQAppWithUserCommand}.
 */
export interface AssociateQAppWithUserCommandInput extends AssociateQAppWithUserInput {}
/**
 * @public
 *
 * The output of {@link AssociateQAppWithUserCommand}.
 */
export interface AssociateQAppWithUserCommandOutput extends __MetadataBearer {}

/**
 * This operation creates a link between the user's identity calling the operation and a specific Q App. This is useful to mark the Q App as a *favorite* for the user if the user doesn't own the Amazon Q App so they can still run it and see it in their inventory of Q Apps.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, AssociateQAppWithUserCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, AssociateQAppWithUserCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // AssociateQAppWithUserInput
 *   instanceId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 * };
 * const command = new AssociateQAppWithUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateQAppWithUserCommandInput - {@link AssociateQAppWithUserCommandInput}
 * @returns {@link AssociateQAppWithUserCommandOutput}
 * @see {@link AssociateQAppWithUserCommandInput} for command's `input` shape.
 * @see {@link AssociateQAppWithUserCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The client is not authorized to perform the requested operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The requested operation could not be completed because it would exceed the service's quota or limit.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client is not authenticated or authorized to perform the requested operation.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to satisfy the constraints specified by the service.
 *
 * @throws {@link QAppsServiceException}
 *
 * Base exception class for all service exceptions from QApps service.
 *
 * @example Links an Amazon Q App to the invoker's list of apps
 * ```javascript
 * //
 * const input = {
 *   appId: "393e77fb-0a30-4f47-ad30-75d71aeaed8a",
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f"
 * };
 * const command = new AssociateQAppWithUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AssociateQAppWithUserCommand extends command<AssociateQAppWithUserCommandInput, AssociateQAppWithUserCommandOutput>(
  _ep0,
  _mw0,
  "AssociateQAppWithUser",
  AssociateQAppWithUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateQAppWithUserInput;
      output: {};
    };
    sdk: {
      input: AssociateQAppWithUserCommandInput;
      output: AssociateQAppWithUserCommandOutput;
    };
  };
}
