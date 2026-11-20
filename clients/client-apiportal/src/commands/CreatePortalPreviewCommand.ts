// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePortalPreviewRequest } from "../models/models_0";
import { CreatePortalPreview$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePortalPreviewCommand}.
 */
export interface CreatePortalPreviewCommandInput extends CreatePortalPreviewRequest {}
/**
 * @public
 *
 * The output of {@link CreatePortalPreviewCommand}.
 */
export interface CreatePortalPreviewCommandOutput extends __MetadataBearer {}

/**
 * Starts building a preview of the portal's current content. Use GetPortal to check the preview status and get the preview URL.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, CreatePortalPreviewCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, CreatePortalPreviewCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // CreatePortalPreviewRequest
 *   portalId: "STRING_VALUE", // required
 * };
 * const command = new CreatePortalPreviewCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreatePortalPreviewCommandInput - {@link CreatePortalPreviewCommandInput}
 * @returns {@link CreatePortalPreviewCommandOutput}
 * @see {@link CreatePortalPreviewCommandInput} for command's `input` shape.
 * @see {@link CreatePortalPreviewCommandOutput} for command's `response` shape.
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
export class CreatePortalPreviewCommand extends command<CreatePortalPreviewCommandInput, CreatePortalPreviewCommandOutput>(
  _ep0,
  _mw0,
  "CreatePortalPreview",
  CreatePortalPreview$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePortalPreviewRequest;
      output: {};
    };
    sdk: {
      input: CreatePortalPreviewCommandInput;
      output: CreatePortalPreviewCommandOutput;
    };
  };
}
