// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAcmeDomainValidationsRequest, ListAcmeDomainValidationsResponse } from "../models/models_0";
import { ListAcmeDomainValidations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAcmeDomainValidationsCommand}.
 */
export interface ListAcmeDomainValidationsCommandInput extends ListAcmeDomainValidationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAcmeDomainValidationsCommand}.
 */
export interface ListAcmeDomainValidationsCommandOutput extends ListAcmeDomainValidationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of domain validations for the specified ACME endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ListAcmeDomainValidationsCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ListAcmeDomainValidationsCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // ListAcmeDomainValidationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   AcmeEndpointArn: "STRING_VALUE", // required
 * };
 * const command = new ListAcmeDomainValidationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAcmeDomainValidationsResponse
 * //   AcmeDomainValidations: [ // AcmeDomainValidationList
 * //     { // AcmeDomainValidationSummary
 * //       AcmeDomainValidationArn: "STRING_VALUE",
 * //       AcmeEndpointArn: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE",
 * //       PrevalidationType: "DNS_PREVALIDATION",
 * //       PrevalidationDetails: { // PrevalidationDetails Union: only one key present
 * //         DnsPrevalidation: { // DnsPrevalidationDetails
 * //           DomainScope: { // DomainScope
 * //             ExactDomain: "ENABLED" || "DISABLED",
 * //             Subdomains: "ENABLED" || "DISABLED",
 * //             Wildcards: "ENABLED" || "DISABLED",
 * //           },
 * //           HostedZoneId: "STRING_VALUE",
 * //           ResourceRecord: { // ResourceRecord
 * //             Name: "STRING_VALUE", // required
 * //             Type: "CNAME", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //       Status: "VALIDATING" || "VALID" || "INVALID" || "DELETING",
 * //       FailureDetails: { // FailureDetails
 * //         Reason: "ACCESS_DENIED" || "DOMAIN_MISMATCH" || "DOMAIN_NOT_ALLOWED" || "ENDPOINT_NOT_ACTIVE" || "HOSTED_ZONE_NOT_FOUND" || "INTERNAL_FAILURE" || "INVALID_CHANGE_BATCH" || "INVALID_PUBLIC_DOMAIN" || "TIMED_OUT",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAcmeDomainValidationsCommandInput - {@link ListAcmeDomainValidationsCommandInput}
 * @returns {@link ListAcmeDomainValidationsCommandOutput}
 * @see {@link ListAcmeDomainValidationsCommandInput} for command's `input` shape.
 * @see {@link ListAcmeDomainValidationsCommandOutput} for command's `response` shape.
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
export class ListAcmeDomainValidationsCommand extends $Command
  .classBuilder<
    ListAcmeDomainValidationsCommandInput,
    ListAcmeDomainValidationsCommandOutput,
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
  .s("CertificateManager", "ListAcmeDomainValidations", {})
  .n("ACMClient", "ListAcmeDomainValidationsCommand")
  .sc(ListAcmeDomainValidations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAcmeDomainValidationsRequest;
      output: ListAcmeDomainValidationsResponse;
    };
    sdk: {
      input: ListAcmeDomainValidationsCommandInput;
      output: ListAcmeDomainValidationsCommandOutput;
    };
  };
}
