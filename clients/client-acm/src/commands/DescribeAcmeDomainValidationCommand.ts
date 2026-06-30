// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAcmeDomainValidationRequest, DescribeAcmeDomainValidationResponse } from "../models/models_0";
import { DescribeAcmeDomainValidation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAcmeDomainValidationCommand}.
 */
export interface DescribeAcmeDomainValidationCommandInput extends DescribeAcmeDomainValidationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAcmeDomainValidationCommand}.
 */
export interface DescribeAcmeDomainValidationCommandOutput extends DescribeAcmeDomainValidationResponse, __MetadataBearer {}

/**
 * <p>Returns detailed metadata about the specified domain validation, including its status, domain scope, and DNS resource records required for validation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, DescribeAcmeDomainValidationCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, DescribeAcmeDomainValidationCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // DescribeAcmeDomainValidationRequest
 *   AcmeDomainValidationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAcmeDomainValidationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAcmeDomainValidationResponse
 * //   AcmeDomainValidation: { // AcmeDomainValidation
 * //     AcmeDomainValidationArn: "STRING_VALUE",
 * //     AcmeEndpointArn: "STRING_VALUE",
 * //     DomainName: "STRING_VALUE",
 * //     PrevalidationType: "DNS_PREVALIDATION",
 * //     PrevalidationDetails: { // PrevalidationDetails Union: only one key present
 * //       DnsPrevalidation: { // DnsPrevalidationDetails
 * //         DomainScope: { // DomainScope
 * //           ExactDomain: "ENABLED" || "DISABLED",
 * //           Subdomains: "ENABLED" || "DISABLED",
 * //           Wildcards: "ENABLED" || "DISABLED",
 * //         },
 * //         HostedZoneId: "STRING_VALUE",
 * //         ResourceRecord: { // ResourceRecord
 * //           Name: "STRING_VALUE", // required
 * //           Type: "CNAME", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //     Status: "VALIDATING" || "VALID" || "INVALID" || "DELETING",
 * //     FailureDetails: { // FailureDetails
 * //       Reason: "ACCESS_DENIED" || "DOMAIN_MISMATCH" || "DOMAIN_NOT_ALLOWED" || "ENDPOINT_NOT_ACTIVE" || "HOSTED_ZONE_NOT_FOUND" || "INTERNAL_FAILURE" || "INVALID_CHANGE_BATCH" || "INVALID_PUBLIC_DOMAIN" || "TIMED_OUT",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAcmeDomainValidationCommandInput - {@link DescribeAcmeDomainValidationCommandInput}
 * @returns {@link DescribeAcmeDomainValidationCommandOutput}
 * @see {@link DescribeAcmeDomainValidationCommandInput} for command's `input` shape.
 * @see {@link DescribeAcmeDomainValidationCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class DescribeAcmeDomainValidationCommand extends $Command
  .classBuilder<
    DescribeAcmeDomainValidationCommandInput,
    DescribeAcmeDomainValidationCommandOutput,
    ACMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ServiceType: { type: "staticContextParams", value: `ACM-ACME` },
  })
  .m(function (this: any, Command: any, cs: any, config: ACMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CertificateManager", "DescribeAcmeDomainValidation", {})
  .n("ACMClient", "DescribeAcmeDomainValidationCommand")
  .sc(DescribeAcmeDomainValidation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAcmeDomainValidationRequest;
      output: DescribeAcmeDomainValidationResponse;
    };
    sdk: {
      input: DescribeAcmeDomainValidationCommandInput;
      output: DescribeAcmeDomainValidationCommandOutput;
    };
  };
}
