// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePortalRequest } from "../models/models_0";
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
export interface DeletePortalCommandOutput extends __MetadataBearer {}

/**
 * Deletes a portal.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, DeletePortalCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, DeletePortalCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // DeletePortalRequest
 *   portalId: "STRING_VALUE", // required
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
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The request is not valid. The message identifies the field or value that failed validation.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource, for example because another operation on it is still in progress.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  The request rate or a service quota was exceeded. Reduce the request rate or the number of resources and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist, or you do not have access to it.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
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
