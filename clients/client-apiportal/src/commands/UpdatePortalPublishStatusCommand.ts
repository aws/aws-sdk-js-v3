// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePortalPublishStatusRequest } from "../models/models_0";
import { UpdatePortalPublishStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePortalPublishStatusCommand}.
 */
export interface UpdatePortalPublishStatusCommandInput extends UpdatePortalPublishStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePortalPublishStatusCommand}.
 */
export interface UpdatePortalPublishStatusCommandOutput extends __MetadataBearer {}

/**
 * Publishes or disables a portal. The change runs asynchronously. Use GetPortal to track `publishStatus`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, UpdatePortalPublishStatusCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, UpdatePortalPublishStatusCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // UpdatePortalPublishStatusRequest
 *   portalId: "STRING_VALUE", // required
 *   status: "PUBLISHED" || "DISABLED", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdatePortalPublishStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePortalPublishStatusCommandInput - {@link UpdatePortalPublishStatusCommandInput}
 * @returns {@link UpdatePortalPublishStatusCommandOutput}
 * @see {@link UpdatePortalPublishStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePortalPublishStatusCommandOutput} for command's `response` shape.
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
export class UpdatePortalPublishStatusCommand extends command<UpdatePortalPublishStatusCommandInput, UpdatePortalPublishStatusCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePortalPublishStatus",
  UpdatePortalPublishStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePortalPublishStatusRequest;
      output: {};
    };
    sdk: {
      input: UpdatePortalPublishStatusCommandInput;
      output: UpdatePortalPublishStatusCommandOutput;
    };
  };
}
