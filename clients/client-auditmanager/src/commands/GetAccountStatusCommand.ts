// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccountStatusRequest, GetAccountStatusResponse } from "../models/models_0";
import { GetAccountStatus } from "../schemas/schemas_22_Account";

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
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "GetAccountStatus", {})
  .n("AuditManagerClient", "GetAccountStatusCommand")
  .sc(GetAccountStatus)
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
