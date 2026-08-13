// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListCertificateDomainValidationsRequest,
  ListCertificateDomainValidationsResponse,
} from "../models/models_0";
import { ListCertificateDomainValidations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCertificateDomainValidationsCommand}.
 */
export interface ListCertificateDomainValidationsCommandInput extends ListCertificateDomainValidationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCertificateDomainValidationsCommand}.
 */
export interface ListCertificateDomainValidationsCommandOutput extends ListCertificateDomainValidationsResponse, __MetadataBearer {}

/**
 * <p>Returns per-domain validation summaries for an ACM certificate. Each summary includes the domain name, the active validation configuration, and the requested validation configuration when a validation method migration is in progress. You can use the results to monitor the progress of an email-to-DNS validation migration and to retrieve the CNAME records required for DNS validation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ListCertificateDomainValidationsCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ListCertificateDomainValidationsCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // ListCertificateDomainValidationsRequest
 *   CertificateArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListCertificateDomainValidationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCertificateDomainValidationsResponse
 * //   DomainValidationSummaryList: [ // DomainValidationSummaryList
 * //     { // DomainValidationSummary
 * //       DomainName: "STRING_VALUE", // required
 * //       ActiveValidationConfiguration: { // ValidationConfiguration
 * //         ValidationMethod: "EMAIL" || "DNS" || "HTTP",
 * //         ValidationChallenge: { // ValidationChallenge Union: only one key present
 * //           EmailValidationChallenge: { // EmailValidationChallenge
 * //             ValidationEmails: [ // ValidationEmailList
 * //               "STRING_VALUE",
 * //             ],
 * //             ValidationDomain: "STRING_VALUE",
 * //           },
 * //           DnsValidationChallenge: { // DnsValidationChallenge
 * //             ResourceRecord: { // ResourceRecord
 * //               Name: "STRING_VALUE", // required
 * //               Type: "CNAME", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //         ValidationStatus: "PENDING_VALIDATION" || "SUCCESS" || "FAILED",
 * //       },
 * //       RequestedValidationConfiguration: {
 * //         ValidationMethod: "EMAIL" || "DNS" || "HTTP",
 * //         ValidationChallenge: {//  Union: only one key present
 * //           EmailValidationChallenge: {
 * //             ValidationEmails: [
 * //               "STRING_VALUE",
 * //             ],
 * //             ValidationDomain: "STRING_VALUE",
 * //           },
 * //           DnsValidationChallenge: {
 * //             ResourceRecord: {
 * //               Name: "STRING_VALUE", // required
 * //               Type: "CNAME", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //         ValidationStatus: "PENDING_VALIDATION" || "SUCCESS" || "FAILED",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCertificateDomainValidationsCommandInput - {@link ListCertificateDomainValidationsCommandInput}
 * @returns {@link ListCertificateDomainValidationsCommandOutput}
 * @see {@link ListCertificateDomainValidationsCommandInput} for command's `input` shape.
 * @see {@link ListCertificateDomainValidationsCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link InvalidArgsException} (client fault)
 *  <p>One or more of request parameters specified is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class ListCertificateDomainValidationsCommand extends command<ListCertificateDomainValidationsCommandInput, ListCertificateDomainValidationsCommandOutput>(
  _ep0,
  _mw0,
  "ListCertificateDomainValidations",
  ListCertificateDomainValidations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCertificateDomainValidationsRequest;
      output: ListCertificateDomainValidationsResponse;
    };
    sdk: {
      input: ListCertificateDomainValidationsCommandInput;
      output: ListCertificateDomainValidationsCommandOutput;
    };
  };
}
