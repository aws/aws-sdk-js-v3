// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCertificateAuthoritiesRequest, ListCertificateAuthoritiesResponse } from "../models/models_0";
import { ListCertificateAuthorities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCertificateAuthoritiesCommand}.
 */
export interface ListCertificateAuthoritiesCommandInput extends ListCertificateAuthoritiesRequest {}
/**
 * @public
 *
 * The output of {@link ListCertificateAuthoritiesCommand}.
 */
export interface ListCertificateAuthoritiesCommandOutput extends ListCertificateAuthoritiesResponse, __MetadataBearer {}

/**
 * <p>Lists the certificate authorities (CAs) for your cluster. A cluster has at most two
 *             certificate authorities: the outgoing CA that's currently signing and, during a rotation,
 *             one successor CA.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListCertificateAuthoritiesCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListCertificateAuthoritiesCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // ListCertificateAuthoritiesRequest
 *   clusterName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCertificateAuthoritiesCommand(input);
 * const response = await client.send(command);
 * // { // ListCertificateAuthoritiesResponse
 * //   certificateAuthorities: [ // CertificateAuthoritySummaryList
 * //     { // CertificateAuthoritySummary
 * //       id: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "EKS" || "CUSTOMER",
 * //       activatedAt: new Date("TIMESTAMP"),
 * //       activatedBy: "EKS" || "CUSTOMER",
 * //       signingStatus: "NOT_USED" || "ACTIVATING" || "IN_USE",
 * //       distributionStatus: "IN_PROGRESS" || "COMPLETE" || "FAILED" || "DELETING",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCertificateAuthoritiesCommandInput - {@link ListCertificateAuthoritiesCommandInput}
 * @returns {@link ListCertificateAuthoritiesCommandOutput}
 * @see {@link ListCertificateAuthoritiesCommandInput} for command's `input` shape.
 * @see {@link ListCertificateAuthoritiesCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
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
export class ListCertificateAuthoritiesCommand extends command<ListCertificateAuthoritiesCommandInput, ListCertificateAuthoritiesCommandOutput>(
  _ep0,
  _mw0,
  "ListCertificateAuthorities",
  ListCertificateAuthorities$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCertificateAuthoritiesRequest;
      output: ListCertificateAuthoritiesResponse;
    };
    sdk: {
      input: ListCertificateAuthoritiesCommandInput;
      output: ListCertificateAuthoritiesCommandOutput;
    };
  };
}
