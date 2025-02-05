// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccountStatusRequest, GetAccountStatusResponse } from "../models/models_0";
import { de_GetAccountStatusCommand, se_GetAccountStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountStatusCommand}.
 */
export interface GetAccountStatusCommandInput extends GetAccountStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountStatusCommand}.
 */
export interface GetAccountStatusCommandOutput extends GetAccountStatusResponse, __MetadataBearer {}

/**
 * <p> Gets the registration status of an account in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetAccountStatusCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetAccountStatusCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AuditManagerClient(config);
 * const input = {};
 * const command = new GetAccountStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountStatusResponse
 * //   status: "ACTIVE" || "INACTIVE" || "PENDING_ACTIVATION",
 * // };
 *
 * ```
 *
 * @param GetAccountStatusCommandInput - {@link GetAccountStatusCommandInput}
 * @returns {@link GetAccountStatusCommandOutput}
 * @see {@link GetAccountStatusCommandInput} for command's `input` shape.
 * @see {@link GetAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 * @public
 */
export class GetAccountStatusCommand extends $Command
  .classBuilder<
    GetAccountStatusCommandInput,
    GetAccountStatusCommandOutput,
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
  .s("BedrockAssessmentManagerLambda", "GetAccountStatus", {})
  .n("AuditManagerClient", "GetAccountStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountStatusCommand)
  .de(de_GetAccountStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountStatusResponse;
    };
    sdk: {
      input: GetAccountStatusCommandInput;
      output: GetAccountStatusCommandOutput;
    };
  };
}
