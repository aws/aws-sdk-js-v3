// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetOciOnboardingStatusInput, GetOciOnboardingStatusOutput } from "../models/models_0";
import type { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { GetOciOnboardingStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOciOnboardingStatusCommand}.
 */
export interface GetOciOnboardingStatusCommandInput extends GetOciOnboardingStatusInput {}
/**
 * @public
 *
 * The output of {@link GetOciOnboardingStatusCommand}.
 */
export interface GetOciOnboardingStatusCommandOutput extends GetOciOnboardingStatusOutput, __MetadataBearer {}

/**
 * <p>Returns the tenancy activation link and onboarding status for your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, GetOciOnboardingStatusCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, GetOciOnboardingStatusCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = {};
 * const command = new GetOciOnboardingStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetOciOnboardingStatusOutput
 * //   status: "NOT_STARTED" || "PENDING_LINK_GENERATION" || "PENDING_CUSTOMER_ACTION" || "PENDING_INITIALIZATION" || "ACTIVATING" || "ACTIVE_IN_HOME_REGION" || "ACTIVE" || "ACTIVE_LIMITED" || "FAILED" || "PUBLIC_OFFER_UNSUPPORTED" || "SUSPENDED" || "CANCELED",
 * //   existingTenancyActivationLink: "STRING_VALUE",
 * //   newTenancyActivationLink: "STRING_VALUE",
 * //   ociIdentityDomain: { // OciIdentityDomain
 * //     ociIdentityDomainId: "STRING_VALUE",
 * //     ociIdentityDomainResourceUrl: "STRING_VALUE",
 * //     ociIdentityDomainUrl: "STRING_VALUE",
 * //     status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //     statusReason: "STRING_VALUE",
 * //     accountSetupCloudFormationUrl: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOciOnboardingStatusCommandInput - {@link GetOciOnboardingStatusCommandInput}
 * @returns {@link GetOciOnboardingStatusCommandOutput}
 * @see {@link GetOciOnboardingStatusCommandInput} for command's `input` shape.
 * @see {@link GetOciOnboardingStatusCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class GetOciOnboardingStatusCommand extends $Command
  .classBuilder<
    GetOciOnboardingStatusCommandInput,
    GetOciOnboardingStatusCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "GetOciOnboardingStatus", {})
  .n("OdbClient", "GetOciOnboardingStatusCommand")
  .sc(GetOciOnboardingStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetOciOnboardingStatusOutput;
    };
    sdk: {
      input: GetOciOnboardingStatusCommandInput;
      output: GetOciOnboardingStatusCommandOutput;
    };
  };
}
