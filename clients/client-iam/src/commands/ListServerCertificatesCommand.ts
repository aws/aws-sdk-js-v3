// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListServerCertificatesRequest, ListServerCertificatesResponse } from "../models/models_0";
import { de_ListServerCertificatesCommand, se_ListServerCertificatesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServerCertificatesCommand}.
 */
export interface ListServerCertificatesCommandInput extends ListServerCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListServerCertificatesCommand}.
 */
export interface ListServerCertificatesCommandOutput extends ListServerCertificatesResponse, __MetadataBearer {}

/**
 * <p>Lists the server certificates stored in IAM that have the specified path prefix. If
 *             none exist, the operation returns an empty list.</p>
 *          <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 *          <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
 *                 with server certificates</a> in the <i>IAM User Guide</i>. This
 *             topic also includes a list of Amazon Web Services services that can use the server certificates that
 *             you manage with IAM.</p>
 *          <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see <a>GetServerCertificate</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListServerCertificatesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListServerCertificatesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListServerCertificatesRequest
 *   PathPrefix: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListServerCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListServerCertificatesResponse
 * //   ServerCertificateMetadataList: [ // serverCertificateMetadataListType // required
 * //     { // ServerCertificateMetadata
 * //       Path: "STRING_VALUE", // required
 * //       ServerCertificateName: "STRING_VALUE", // required
 * //       ServerCertificateId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       UploadDate: new Date("TIMESTAMP"),
 * //       Expiration: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServerCertificatesCommandInput - {@link ListServerCertificatesCommandInput}
 * @returns {@link ListServerCertificatesCommandOutput}
 * @see {@link ListServerCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListServerCertificatesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 */
export class ListServerCertificatesCommand extends $Command
  .classBuilder<
    ListServerCertificatesCommandInput,
    ListServerCertificatesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "ListServerCertificates", {})
  .n("IAMClient", "ListServerCertificatesCommand")
  .f(void 0, void 0)
  .ser(se_ListServerCertificatesCommand)
  .de(de_ListServerCertificatesCommand)
  .build() {}
