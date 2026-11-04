// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTemplateRequest, DeleteTemplateResponse } from "../models/models_0";
import { DeleteTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTemplateCommand}.
 */
export interface DeleteTemplateCommandInput extends DeleteTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTemplateCommand}.
 */
export interface DeleteTemplateCommandOutput extends DeleteTemplateResponse, __MetadataBearer {}

/**
 * Deletes a cases template. You can delete up to 100 templates per domain.
 *
 * After a cases template is deleted:
 *
 * - You can still retrieve the template by calling `GetTemplate`.
 * - You cannot update the template.
 * - You cannot create a case by using the deleted template.
 * - Deleted templates are not included in the `ListTemplates` response.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, DeleteTemplateCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, DeleteTemplateCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // DeleteTemplateRequest
 *   domainId: "STRING_VALUE", // required
 *   templateId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTemplateCommandInput - {@link DeleteTemplateCommandInput}
 * @returns {@link DeleteTemplateCommandOutput}
 * @see {@link DeleteTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteTemplateCommandOutput} for command's `response` shape.
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
export class DeleteTemplateCommand extends command<DeleteTemplateCommandInput, DeleteTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTemplate",
  DeleteTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeleteTemplateCommandInput;
      output: DeleteTemplateCommandOutput;
    };
  };
}
