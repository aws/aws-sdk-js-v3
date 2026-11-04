// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { ListAcmeDomainValidationsRequest, ListAcmeDomainValidationsResponse } from "../models/models_0";
import { ListAcmeDomainValidations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a list of domain validations for the specified ACME endpoint.
 *
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
 *
 * You do not have access required to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified certificate cannot be found in the caller's account or the caller's account cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded a quota.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The supplied input failed to satisfy constraints of an Amazon Web Services service.
 *
 * @throws {@link ACMServiceException}
 *
 * Base exception class for all service exceptions from ACM service.
 *
 * @public
 */
export class ListAcmeDomainValidationsCommand extends command<ListAcmeDomainValidationsCommandInput, ListAcmeDomainValidationsCommandOutput>(
  _ep1,
  _mw0,
  "ListAcmeDomainValidations",
  ListAcmeDomainValidations$
) {
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
