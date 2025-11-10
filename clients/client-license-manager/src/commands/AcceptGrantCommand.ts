// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { AcceptGrantRequest, AcceptGrantResponse } from "../models/models_0";
import { AcceptGrant } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptGrantCommand}.
 */
export interface AcceptGrantCommandInput extends AcceptGrantRequest {}
/**
 * @public
 *
 * The output of {@link AcceptGrantCommand}.
 */
export interface AcceptGrantCommandOutput extends AcceptGrantResponse, __MetadataBearer {}

/**
 * <p>Accepts the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, AcceptGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, AcceptGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // AcceptGrantRequest
 *   GrantArn: "STRING_VALUE", // required
 * };
 * const command = new AcceptGrantCommand(input);
 * const response = await client.send(command);
 * // { // AcceptGrantResponse
 * //   GrantArn: "STRING_VALUE",
 * //   Status: "PENDING_WORKFLOW" || "PENDING_ACCEPT" || "REJECTED" || "ACTIVE" || "FAILED_WORKFLOW" || "DELETED" || "PENDING_DELETE" || "DISABLED" || "WORKFLOW_COMPLETED",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AcceptGrantCommandInput - {@link AcceptGrantCommandInput}
 * @returns {@link AcceptGrantCommandOutput}
 * @see {@link AcceptGrantCommandInput} for command's `input` shape.
 * @see {@link AcceptGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 *
 * @public
 */
export class AcceptGrantCommand extends $Command
  .classBuilder<
    AcceptGrantCommandInput,
    AcceptGrantCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "AcceptGrant", {})
  .n("LicenseManagerClient", "AcceptGrantCommand")
  .sc(AcceptGrant)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptGrantRequest;
      output: AcceptGrantResponse;
    };
    sdk: {
      input: AcceptGrantCommandInput;
      output: AcceptGrantCommandOutput;
    };
  };
}
