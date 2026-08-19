// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCertificateAuthorityRequest, DescribeCertificateAuthorityResponse } from "../models/models_0";
import { DescribeCertificateAuthority$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeCertificateAuthorityCommand}.
 */
export interface DescribeCertificateAuthorityCommandInput extends DescribeCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCertificateAuthorityCommand}.
 */
export interface DescribeCertificateAuthorityCommandOutput extends DescribeCertificateAuthorityResponse, __MetadataBearer {}

/**
 * <p>Returns detailed information about a certificate authority (CA) in your cluster,
 *             including its validity period, signing and distribution status, provenance, scheduled
 *             auto-activation events, and public certificate data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeCertificateAuthorityCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeCertificateAuthorityCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // DescribeCertificateAuthorityRequest
 *   clusterName: "STRING_VALUE", // required
 *   certificateAuthorityId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCertificateAuthorityResponse
 * //   certificateAuthority: { // CertificateAuthority
 * //     id: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     createdBy: "EKS" || "CUSTOMER",
 * //     activatedAt: new Date("TIMESTAMP"),
 * //     activatedBy: "EKS" || "CUSTOMER",
 * //     signingStatus: "NOT_USED" || "ACTIVATING" || "IN_USE",
 * //     distributionStatus: "IN_PROGRESS" || "COMPLETE" || "FAILED" || "DELETING",
 * //     validity: { // CertificateAuthorityValidity
 * //       notBefore: new Date("TIMESTAMP"),
 * //       notAfter: new Date("TIMESTAMP"),
 * //     },
 * //     scheduledEvents: { // CertificateAuthorityScheduledEvents
 * //       firstAutoActivation: new Date("TIMESTAMP"),
 * //       finalAutoActivation: new Date("TIMESTAMP"),
 * //     },
 * //     rollbackAvailable: true || false,
 * //     data: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCertificateAuthorityCommandInput - {@link DescribeCertificateAuthorityCommandInput}
 * @returns {@link DescribeCertificateAuthorityCommandOutput}
 * @see {@link DescribeCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region
 *             specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 *
 * @public
 */
export class DescribeCertificateAuthorityCommand extends command<DescribeCertificateAuthorityCommandInput, DescribeCertificateAuthorityCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCertificateAuthority",
  DescribeCertificateAuthority$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCertificateAuthorityRequest;
      output: DescribeCertificateAuthorityResponse;
    };
    sdk: {
      input: DescribeCertificateAuthorityCommandInput;
      output: DescribeCertificateAuthorityCommandOutput;
    };
  };
}
