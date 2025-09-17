// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAssessmentRequest, DeleteAssessmentResponse } from "../models/models_0";
import { de_DeleteAssessmentCommand, se_DeleteAssessmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAssessmentCommand}.
 */
export interface DeleteAssessmentCommandInput extends DeleteAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssessmentCommand}.
 */
export interface DeleteAssessmentCommandOutput extends DeleteAssessmentResponse, __MetadataBearer {}

/**
 * <p> Deletes an assessment in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // DeleteAssessmentRequest
 *   assessmentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssessmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssessmentCommandInput - {@link DeleteAssessmentCommandInput}
 * @returns {@link DeleteAssessmentCommandOutput}
 * @see {@link DeleteAssessmentCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteAssessmentCommand extends $Command
  .classBuilder<
    DeleteAssessmentCommandInput,
    DeleteAssessmentCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BedrockAssessmentManagerLambda", "DeleteAssessment", {})
  .n("AuditManagerClient", "DeleteAssessmentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAssessmentCommand)
  .de(de_DeleteAssessmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssessmentRequest;
      output: {};
    };
    sdk: {
      input: DeleteAssessmentCommandInput;
      output: DeleteAssessmentCommandOutput;
    };
  };
}
