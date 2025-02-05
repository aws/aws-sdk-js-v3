// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAssessmentFrameworkRequest, DeleteAssessmentFrameworkResponse } from "../models/models_0";
import { de_DeleteAssessmentFrameworkCommand, se_DeleteAssessmentFrameworkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAssessmentFrameworkCommand}.
 */
export interface DeleteAssessmentFrameworkCommandInput extends DeleteAssessmentFrameworkRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssessmentFrameworkCommand}.
 */
export interface DeleteAssessmentFrameworkCommandOutput extends DeleteAssessmentFrameworkResponse, __MetadataBearer {}

/**
 * <p> Deletes a custom framework in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteAssessmentFrameworkCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteAssessmentFrameworkCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AuditManagerClient(config);
 * const input = { // DeleteAssessmentFrameworkRequest
 *   frameworkId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssessmentFrameworkCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssessmentFrameworkCommandInput - {@link DeleteAssessmentFrameworkCommandInput}
 * @returns {@link DeleteAssessmentFrameworkCommandOutput}
 * @see {@link DeleteAssessmentFrameworkCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentFrameworkCommandOutput} for command's `response` shape.
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
export class DeleteAssessmentFrameworkCommand extends $Command
  .classBuilder<
    DeleteAssessmentFrameworkCommandInput,
    DeleteAssessmentFrameworkCommandOutput,
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
  .s("BedrockAssessmentManagerLambda", "DeleteAssessmentFramework", {})
  .n("AuditManagerClient", "DeleteAssessmentFrameworkCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAssessmentFrameworkCommand)
  .de(de_DeleteAssessmentFrameworkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssessmentFrameworkRequest;
      output: {};
    };
    sdk: {
      input: DeleteAssessmentFrameworkCommandInput;
      output: DeleteAssessmentFrameworkCommandOutput;
    };
  };
}
