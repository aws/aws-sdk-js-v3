// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAcmeDomainValidationRequest, CreateAcmeDomainValidationResponse } from "../models/models_0";
import { CreateAcmeDomainValidation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAcmeDomainValidationCommand}.
 */
export interface CreateAcmeDomainValidationCommandInput extends CreateAcmeDomainValidationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAcmeDomainValidationCommand}.
 */
export interface CreateAcmeDomainValidationCommandOutput extends CreateAcmeDomainValidationResponse, __MetadataBearer {}

/**
 * <p>Creates a domain validation for an ACME endpoint. Domain validations authorize the endpoint to issue certificates for specified domain names. You configure prevalidation to prove domain ownership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, CreateAcmeDomainValidationCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, CreateAcmeDomainValidationCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // CreateAcmeDomainValidationRequest
 *   IdempotencyToken: "STRING_VALUE",
 *   AcmeEndpointArn: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 *   PrevalidationOptions: { // PrevalidationOptions Union: only one key present
 *     DnsPrevalidation: { // DnsPrevalidationOptions
 *       DomainScope: { // DomainScope
 *         ExactDomain: "ENABLED" || "DISABLED",
 *         Subdomains: "ENABLED" || "DISABLED",
 *         Wildcards: "ENABLED" || "DISABLED",
 *       },
 *       HostedZoneId: "STRING_VALUE",
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateAcmeDomainValidationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAcmeDomainValidationResponse
 * //   AcmeDomainValidationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAcmeDomainValidationCommandInput - {@link CreateAcmeDomainValidationCommandInput}
 * @returns {@link CreateAcmeDomainValidationCommandOutput}
 * @see {@link CreateAcmeDomainValidationCommandInput} for command's `input` shape.
 * @see {@link CreateAcmeDomainValidationCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota has been exceeded.</p>
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
export class CreateAcmeDomainValidationCommand extends $Command
  .classBuilder<
    CreateAcmeDomainValidationCommandInput,
    CreateAcmeDomainValidationCommandOutput,
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
  .s("CertificateManager", "CreateAcmeDomainValidation", {})
  .n("ACMClient", "CreateAcmeDomainValidationCommand")
  .sc(CreateAcmeDomainValidation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAcmeDomainValidationRequest;
      output: CreateAcmeDomainValidationResponse;
    };
    sdk: {
      input: CreateAcmeDomainValidationCommandInput;
      output: CreateAcmeDomainValidationCommandOutput;
    };
  };
}
