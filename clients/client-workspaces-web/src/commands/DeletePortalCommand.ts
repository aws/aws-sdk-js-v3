// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePortalRequest, DeletePortalResponse } from "../models/models_0";
import { DeletePortal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePortalCommand}.
 */
export interface DeletePortalCommandInput extends DeletePortalRequest {}
/**
 * @public
 *
 * The output of {@link DeletePortalCommand}.
 */
export interface DeletePortalCommandOutput extends DeletePortalResponse, __MetadataBearer {}

/**
 * Deletes a web portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeletePortalCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeletePortalCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeletePortalRequest
 *   portalArn: "STRING_VALUE", // required
 * };
 * const command = new DeletePortalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePortalCommandInput - {@link DeletePortalCommandInput}
 * @returns {@link DeletePortalCommandOutput}
 * @see {@link DeletePortalCommandInput} for command's `input` shape.
 * @see {@link DeletePortalCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * There is a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There is a validation error.
 *
 * @throws {@link WorkSpacesWebServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesWeb service.
 *
 * @public
 */
export class DeletePortalCommand extends command<DeletePortalCommandInput, DeletePortalCommandOutput>(
  _ep0,
  _mw0,
  "DeletePortal",
  DeletePortal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePortalRequest;
      output: {};
    };
    sdk: {
      input: DeletePortalCommandInput;
      output: DeletePortalCommandOutput;
    };
  };
}
