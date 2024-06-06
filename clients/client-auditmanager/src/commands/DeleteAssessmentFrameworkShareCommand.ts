// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAssessmentFrameworkShareRequest, DeleteAssessmentFrameworkShareResponse } from "../models/models_0";
import {
  de_DeleteAssessmentFrameworkShareCommand,
  se_DeleteAssessmentFrameworkShareCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DeleteAssessmentFrameworkShareCommandOutput
  extends DeleteAssessmentFrameworkShareResponse,
    __MetadataBearer {}

/**
 * <p> Deletes a share request for a custom framework in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteAssessmentFrameworkShareCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteAssessmentFrameworkShareCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
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
 *  <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource that's specified in the request can't be found. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 * @public
 */
export class DeleteAssessmentFrameworkShareCommand extends $Command
  .classBuilder<
    DeleteAssessmentFrameworkShareCommandInput,
    DeleteAssessmentFrameworkShareCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BedrockAssessmentManagerLambda", "DeleteAssessmentFrameworkShare", {})
  .n("AuditManagerClient", "DeleteAssessmentFrameworkShareCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAssessmentFrameworkShareCommand)
  .de(de_DeleteAssessmentFrameworkShareCommand)
  .build() {}
