// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAssessmentFrameworkShareRequest, DeleteAssessmentFrameworkShareResponse } from "../models/models_0";
import { DeleteAssessmentFrameworkShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAssessmentFrameworkShareCommand}.
 */
export interface DeleteAssessmentFrameworkShareCommandInput extends DeleteAssessmentFrameworkShareRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssessmentFrameworkShareCommand}.
 */
export interface DeleteAssessmentFrameworkShareCommandOutput extends DeleteAssessmentFrameworkShareResponse, __MetadataBearer {}

/**
 * Deletes a share request for a custom framework in Audit Manager.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteAssessmentFrameworkShareCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteAssessmentFrameworkShareCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // DeleteAssessmentFrameworkShareRequest
 *   requestId: "STRING_VALUE", // required
 *   requestType: "SENT" || "RECEIVED", // required
 * };
 * const command = new DeleteAssessmentFrameworkShareCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssessmentFrameworkShareCommandInput - {@link DeleteAssessmentFrameworkShareCommandInput}
 * @returns {@link DeleteAssessmentFrameworkShareCommandOutput}
 * @see {@link DeleteAssessmentFrameworkShareCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentFrameworkShareCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Your account isn't registered with Audit Manager. Check the delegated administrator setup on the Audit Manager settings page, and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred during the processing of your request. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that's specified in the request can't be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AuditManagerServiceException}
 *
 * Base exception class for all service exceptions from AuditManager service.
 *
 * @public
 */
export class DeleteAssessmentFrameworkShareCommand extends command<DeleteAssessmentFrameworkShareCommandInput, DeleteAssessmentFrameworkShareCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAssessmentFrameworkShare",
  DeleteAssessmentFrameworkShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssessmentFrameworkShareRequest;
      output: {};
    };
    sdk: {
      input: DeleteAssessmentFrameworkShareCommandInput;
      output: DeleteAssessmentFrameworkShareCommandOutput;
    };
  };
}
