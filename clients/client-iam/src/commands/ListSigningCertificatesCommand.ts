// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListSigningCertificatesRequest, ListSigningCertificatesResponse } from "../models/models_0";
import { de_ListSigningCertificatesCommand, se_ListSigningCertificatesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSigningCertificatesCommand}.
 */
export interface ListSigningCertificatesCommandInput extends ListSigningCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListSigningCertificatesCommand}.
 */
export interface ListSigningCertificatesCommandOutput extends ListSigningCertificatesResponse, __MetadataBearer {}

/**
 * <p>Returns information about the signing certificates associated with the specified IAM
 *             user. If none exists, the operation returns an empty list.</p>
 *          <p>Although each user is limited to a small number of signing certificates, you can still
 *             paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 *          <p>If the <code>UserName</code> field is not specified, the user name is determined
 *             implicitly based on the Amazon Web Services access key ID used to sign the request for this operation.
 *             This operation works for access keys under the Amazon Web Services account. Consequently, you can use
 *             this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no
 *             associated users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListSigningCertificatesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListSigningCertificatesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListSigningCertificatesRequest
 *   UserName: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListSigningCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListSigningCertificatesResponse
 * //   Certificates: [ // certificateListType // required
 * //     { // SigningCertificate
 * //       UserName: "STRING_VALUE", // required
 * //       CertificateId: "STRING_VALUE", // required
 * //       CertificateBody: "STRING_VALUE", // required
 * //       Status: "Active" || "Inactive" || "Expired", // required
 * //       UploadDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSigningCertificatesCommandInput - {@link ListSigningCertificatesCommandInput}
 * @returns {@link ListSigningCertificatesCommandOutput}
 * @see {@link ListSigningCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListSigningCertificatesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To list the signing certificates for an IAM user
 * ```javascript
 * // The following command lists the signing certificates for the IAM user named Bob.
 * const input = {
 *   UserName: "Bob"
 * };
 * const command = new ListSigningCertificatesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Certificates: [
 *     {
 *       CertificateBody: "-----BEGIN CERTIFICATE-----<certificate-body>-----END CERTIFICATE-----",
 *       CertificateId: "TA7SMP42TDN5Z26OBPJE7EXAMPLE",
 *       Status: "Active",
 *       UploadDate: "2013-06-06T21:40:08Z",
 *       UserName: "Bob"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSigningCertificatesCommand extends $Command
  .classBuilder<
    ListSigningCertificatesCommandInput,
    ListSigningCertificatesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "ListSigningCertificates", {})
  .n("IAMClient", "ListSigningCertificatesCommand")
  .f(void 0, void 0)
  .ser(se_ListSigningCertificatesCommand)
  .de(de_ListSigningCertificatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSigningCertificatesRequest;
      output: ListSigningCertificatesResponse;
    };
    sdk: {
      input: ListSigningCertificatesCommandInput;
      output: ListSigningCertificatesCommandOutput;
    };
  };
}
