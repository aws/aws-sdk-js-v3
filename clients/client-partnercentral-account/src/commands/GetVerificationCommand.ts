// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetVerificationRequest, GetVerificationResponse } from "../models/models_0";
import type {
  PartnerCentralAccountClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralAccountClient";
import { GetVerification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVerificationCommand}.
 */
export interface GetVerificationCommandInput extends GetVerificationRequest {}
/**
 * @public
 *
 * The output of {@link GetVerificationCommand}.
 */
export interface GetVerificationCommandOutput extends GetVerificationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current status and details of a verification process for a partner account. This operation allows partners to check the progress and results of business or registrant verification processes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, GetVerificationCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, GetVerificationCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // GetVerificationRequest
 *   VerificationType: "BUSINESS_VERIFICATION" || "REGISTRANT_VERIFICATION", // required
 * };
 * const command = new GetVerificationCommand(input);
 * const response = await client.send(command);
 * // { // GetVerificationResponse
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
 * @param GetVerificationCommandInput - {@link GetVerificationCommandInput}
 * @returns {@link GetVerificationCommandOutput}
 * @see {@link GetVerificationCommandInput} for command's `input` shape.
 * @see {@link GetVerificationCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This is typically a temporary condition and the request may be retried.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. This may occur when referencing a resource that does not exist or has been deleted.</p>
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
export class GetVerificationCommand extends $Command
  .classBuilder<
    GetVerificationCommandInput,
    GetVerificationCommandOutput,
    PartnerCentralAccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralAccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralAccount", "GetVerification", {})
  .n("PartnerCentralAccountClient", "GetVerificationCommand")
  .sc(GetVerification$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVerificationRequest;
      output: GetVerificationResponse;
    };
    sdk: {
      input: GetVerificationCommandInput;
      output: GetVerificationCommandOutput;
    };
  };
}
