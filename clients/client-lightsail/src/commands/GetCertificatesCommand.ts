// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetCertificatesRequest, GetCertificatesResult } from "../models/models_0";
import { de_GetCertificatesCommand, se_GetCertificatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns information about one or more Amazon Lightsail SSL/TLS certificates.</p>
 *          <note>
 *             <p>To get a summary of a certificate, omit <code>includeCertificateDetails</code> from your
 *         request. The response will include only the certificate Amazon Resource Name (ARN),
 *         certificate name, domain name, and tags.</p>
 *          </note>
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
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class GetCertificatesCommand extends $Command
  .classBuilder<
    GetCertificatesCommandInput,
    GetCertificatesCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetCertificates", {})
  .n("LightsailClient", "GetCertificatesCommand")
  .f(void 0, void 0)
  .ser(se_GetCertificatesCommand)
  .de(de_GetCertificatesCommand)
  .build() {
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
