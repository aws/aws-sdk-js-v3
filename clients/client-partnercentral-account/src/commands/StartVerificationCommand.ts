// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartVerificationRequest, StartVerificationResponse } from "../models/models_0";
import type {
  PartnerCentralAccountClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralAccountClient";
import { StartVerification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartVerificationCommand}.
 */
export interface StartVerificationCommandInput extends StartVerificationRequest {}
/**
 * @public
 *
 * The output of {@link StartVerificationCommand}.
 */
export interface StartVerificationCommandOutput extends StartVerificationResponse, __MetadataBearer {}

/**
 * <p>Initiates a new verification process for a partner account. This operation begins the verification workflow for either business registration or individual registrant identity verification as required by AWS Partner Central.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, StartVerificationCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, StartVerificationCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // StartVerificationRequest
 *   ClientToken: "STRING_VALUE",
 *   VerificationDetails: { // VerificationDetails Union: only one key present
 *     BusinessVerificationDetails: { // BusinessVerificationDetails
 *       LegalName: "STRING_VALUE", // required
 *       RegistrationId: "STRING_VALUE", // required
 *       CountryCode: "STRING_VALUE", // required
 *       JurisdictionOfIncorporation: "STRING_VALUE",
 *     },
 *     RegistrantVerificationDetails: {},
 *   },
 * };
 * const command = new StartVerificationCommand(input);
 * const response = await client.send(command);
 * // { // StartVerificationResponse
 * //   VerificationType: "BUSINESS_VERIFICATION" || "REGISTRANT_VERIFICATION", // required
 * //   VerificationStatus: "PENDING_CUSTOMER_ACTION" || "IN_PROGRESS" || "FAILED" || "SUCCEEDED" || "REJECTED", // required
 * //   VerificationStatusReason: "STRING_VALUE",
 * //   VerificationResponseDetails: { // VerificationResponseDetails Union: only one key present
 * //     BusinessVerificationResponse: { // BusinessVerificationResponse
 * //       BusinessVerificationDetails: { // BusinessVerificationDetails
 * //         LegalName: "STRING_VALUE", // required
 * //         RegistrationId: "STRING_VALUE", // required
 * //         CountryCode: "STRING_VALUE", // required
 * //         JurisdictionOfIncorporation: "STRING_VALUE",
 * //       },
 * //     },
 * //     RegistrantVerificationResponse: { // RegistrantVerificationResponse
 * //       CompletionUrl: "STRING_VALUE", // required
 * //       CompletionUrlExpiresAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   },
 * //   StartedAt: new Date("TIMESTAMP"), // required
 * //   CompletedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartVerificationCommandInput - {@link StartVerificationCommandInput}
 * @returns {@link StartVerificationCommandOutput}
 * @see {@link StartVerificationCommandInput} for command's `input` shape.
 * @see {@link StartVerificationCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource. This typically occurs when trying to create a resource that already exists or modify a resource that has been changed by another process.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This is typically a temporary condition and the request may be retried.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was rejected because it would exceed a service quota or limit. This may occur when trying to create more resources than allowed by the service limits.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period of time. The client should implement exponential backoff and retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. One or more input parameters are invalid, missing, or do not meet the required format or constraints.</p>
 *
 * @throws {@link PartnerCentralAccountServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralAccount service.</p>
 *
 *
 * @public
 */
export class StartVerificationCommand extends $Command
  .classBuilder<
    StartVerificationCommandInput,
    StartVerificationCommandOutput,
    PartnerCentralAccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralAccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralAccount", "StartVerification", {})
  .n("PartnerCentralAccountClient", "StartVerificationCommand")
  .sc(StartVerification$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartVerificationRequest;
      output: StartVerificationResponse;
    };
    sdk: {
      input: StartVerificationCommandInput;
      output: StartVerificationCommandOutput;
    };
  };
}
