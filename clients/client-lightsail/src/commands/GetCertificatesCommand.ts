// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCertificatesRequest, GetCertificatesResult } from "../models/models_0";
import { GetCertificates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCertificatesCommand}.
 */
export interface GetCertificatesCommandInput extends GetCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link GetCertificatesCommand}.
 */
export interface GetCertificatesCommandOutput extends GetCertificatesResult, __MetadataBearer {}

/**
 * Returns information about one or more Amazon Lightsail SSL/TLS certificates.
 *
 * > **Note:** To get a summary of a certificate, omit `includeCertificateDetails` from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetCertificatesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetCertificatesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetCertificatesRequest
 *   certificateStatuses: [ // CertificateStatusList
 *     "PENDING_VALIDATION" || "ISSUED" || "INACTIVE" || "EXPIRED" || "VALIDATION_TIMED_OUT" || "REVOKED" || "FAILED",
 *   ],
 *   includeCertificateDetails: true || false,
 *   certificateName: "STRING_VALUE",
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // GetCertificatesResult
 * //   certificates: [ // CertificateSummaryList
 * //     { // CertificateSummary
 * //       certificateArn: "STRING_VALUE",
 * //       certificateName: "STRING_VALUE",
 * //       domainName: "STRING_VALUE",
 * //       certificateDetail: { // Certificate
 * //         arn: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         domainName: "STRING_VALUE",
 * //         status: "PENDING_VALIDATION" || "ISSUED" || "INACTIVE" || "EXPIRED" || "VALIDATION_TIMED_OUT" || "REVOKED" || "FAILED",
 * //         serialNumber: "STRING_VALUE",
 * //         subjectAlternativeNames: [ // SubjectAlternativeNameList
 * //           "STRING_VALUE",
 * //         ],
 * //         domainValidationRecords: [ // DomainValidationRecordList
 * //           { // DomainValidationRecord
 * //             domainName: "STRING_VALUE",
 * //             resourceRecord: { // ResourceRecord
 * //               name: "STRING_VALUE",
 * //               type: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //             dnsRecordCreationState: { // DnsRecordCreationState
 * //               code: "SUCCEEDED" || "STARTED" || "FAILED",
 * //               message: "STRING_VALUE",
 * //             },
 * //             validationStatus: "PENDING_VALIDATION" || "FAILED" || "SUCCESS",
 * //           },
 * //         ],
 * //         requestFailureReason: "STRING_VALUE",
 * //         inUseResourceCount: Number("int"),
 * //         keyAlgorithm: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         issuedAt: new Date("TIMESTAMP"),
 * //         issuerCA: "STRING_VALUE",
 * //         notBefore: new Date("TIMESTAMP"),
 * //         notAfter: new Date("TIMESTAMP"),
 * //         eligibleToRenew: "STRING_VALUE",
 * //         renewalSummary: { // RenewalSummary
 * //           domainValidationRecords: [
 * //             {
 * //               domainName: "STRING_VALUE",
 * //               resourceRecord: {
 * //                 name: "STRING_VALUE",
 * //                 type: "STRING_VALUE",
 * //                 value: "STRING_VALUE",
 * //               },
 * //               dnsRecordCreationState: {
 * //                 code: "SUCCEEDED" || "STARTED" || "FAILED",
 * //                 message: "STRING_VALUE",
 * //               },
 * //               validationStatus: "PENDING_VALIDATION" || "FAILED" || "SUCCESS",
 * //             },
 * //           ],
 * //           renewalStatus: "PendingAutoRenewal" || "PendingValidation" || "Success" || "Failed",
 * //           renewalStatusReason: "STRING_VALUE",
 * //           updatedAt: new Date("TIMESTAMP"),
 * //         },
 * //         revokedAt: new Date("TIMESTAMP"),
 * //         revocationReason: "STRING_VALUE",
 * //         tags: [ // TagList
 * //           { // Tag
 * //             key: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         supportCode: "STRING_VALUE",
 * //       },
 * //       tags: [
 * //         {
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCertificatesCommandInput - {@link GetCertificatesCommandInput}
 * @returns {@link GetCertificatesCommandOutput}
 * @see {@link GetCertificatesCommandInput} for command's `input` shape.
 * @see {@link GetCertificatesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Lightsail throws this exception when user input does not conform to the validation rules of an input field.
 *
 * > **Note:** Domain and distribution APIs are only available in the N. Virginia (`us-east-1`) Amazon Web Services Region. Please set your Amazon Web Services Region configuration to `us-east-1` to create, view, or edit these resources.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Lightsail throws this exception when it cannot find a resource.
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *
 * Lightsail throws this exception when an operation is performed on resources in an opt-in Region that is currently being set up.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * A general service exception.
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *
 * Lightsail throws this exception when the user has not been authenticated.
 *
 * @throws {@link LightsailServiceException}
 *
 * Base exception class for all service exceptions from Lightsail service.
 *
 * @public
 */
export class GetCertificatesCommand extends command<GetCertificatesCommandInput, GetCertificatesCommandOutput>(
  _ep0,
  _mw0,
  "GetCertificates",
  GetCertificates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCertificatesRequest;
      output: GetCertificatesResult;
    };
    sdk: {
      input: GetCertificatesCommandInput;
      output: GetCertificatesCommandOutput;
    };
  };
}
