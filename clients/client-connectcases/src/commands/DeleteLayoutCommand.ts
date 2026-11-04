// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLayoutRequest, DeleteLayoutResponse } from "../models/models_0";
import { DeleteLayout$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLayoutCommand}.
 */
export interface DeleteLayoutCommandInput extends DeleteLayoutRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLayoutCommand}.
 */
export interface DeleteLayoutCommandOutput extends DeleteLayoutResponse, __MetadataBearer {}

/**
 * Deletes a layout from a cases template. You can delete up to 100 layouts per domain.
 *
 * After a layout is deleted:
 *
 * - You can still retrieve the layout by calling `GetLayout`.
 * - You cannot update a deleted layout by calling `UpdateLayout`; it throws a `ValidationException`.
 * - Deleted layouts are not included in the `ListLayouts` response.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, DeleteLayoutCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, DeleteLayoutCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // DeleteLayoutRequest
 *   domainId: "STRING_VALUE", // required
 *   layoutId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLayoutCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLayoutCommandInput - {@link DeleteLayoutCommandInput}
 * @returns {@link DeleteLayoutCommandOutput}
 * @see {@link DeleteLayoutCommandInput} for command's `input` shape.
 * @see {@link DeleteLayoutCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * We couldn't process your request because of an issue with the server. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate has been exceeded for this API. Please try again after a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. Check the syntax and try again.
 *
 * @throws {@link ConnectCasesServiceException}
 *
 * Base exception class for all service exceptions from ConnectCases service.
 *
 * @public
 */
export class DeleteLayoutCommand extends command<DeleteLayoutCommandInput, DeleteLayoutCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLayout",
  DeleteLayout$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLayoutRequest;
      output: {};
    };
    sdk: {
      input: DeleteLayoutCommandInput;
      output: DeleteLayoutCommandOutput;
    };
  };
}
