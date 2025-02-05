// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteControlRequest, DeleteControlResponse } from "../models/models_0";
import { de_DeleteControlCommand, se_DeleteControlCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteControlCommand}.
 */
export interface DeleteControlCommandInput extends DeleteControlRequest {}
/**
 * @public
 *
 * The output of {@link DeleteControlCommand}.
 */
export interface DeleteControlCommandOutput extends DeleteControlResponse, __MetadataBearer {}

/**
 * <p> Deletes a custom control in Audit Manager. </p>
 *          <important>
 *             <p>When you invoke this operation, the custom control is deleted from any frameworks or
 *             assessments that it’s currently part of. As a result, Audit Manager will stop
 *             collecting evidence for that custom control in all of your assessments. This includes
 *             assessments that you previously created before you deleted the custom control.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AuditManagerClient(config);
 * const input = { // DeleteControlRequest
 *   controlId: "STRING_VALUE", // required
 * };
 * const command = new DeleteControlCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteControlCommandInput - {@link DeleteControlCommandInput}
 * @returns {@link DeleteControlCommandOutput}
 * @see {@link DeleteControlCommandInput} for command's `input` shape.
 * @see {@link DeleteControlCommandOutput} for command's `response` shape.
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
export class DeleteControlCommand extends $Command
  .classBuilder<
    DeleteControlCommandInput,
    DeleteControlCommandOutput,
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
  .s("BedrockAssessmentManagerLambda", "DeleteControl", {})
  .n("AuditManagerClient", "DeleteControlCommand")
  .f(void 0, void 0)
  .ser(se_DeleteControlCommand)
  .de(de_DeleteControlCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteControlRequest;
      output: {};
    };
    sdk: {
      input: DeleteControlCommandInput;
      output: DeleteControlCommandOutput;
    };
  };
}
