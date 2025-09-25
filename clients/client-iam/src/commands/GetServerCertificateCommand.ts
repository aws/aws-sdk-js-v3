// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetServerCertificateRequest, GetServerCertificateResponse } from "../models/models_0";
import { GetServerCertificate } from "../schemas/schemas_20_Server";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServerCertificateCommand}.
 */
export interface GetServerCertificateCommandInput extends GetServerCertificateRequest {}
/**
 * @public
 *
 * The output of {@link GetServerCertificateCommand}.
 */
export interface GetServerCertificateCommandOutput extends GetServerCertificateResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified server certificate stored in IAM.</p>
 *          <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
 *                 with server certificates</a> in the <i>IAM User Guide</i>. This
 *             topic includes a list of Amazon Web Services services that can use the server certificates that you
 *             manage with IAM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServerCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServerCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GetServerCertificateRequest
 *   ServerCertificateName: "STRING_VALUE", // required
 * };
 * const command = new GetServerCertificateCommand(input);
 * const response = await client.send(command);
 * // { // GetServerCertificateResponse
 * //   ServerCertificate: { // ServerCertificate
 * //     ServerCertificateMetadata: { // ServerCertificateMetadata
 * //       Path: "STRING_VALUE", // required
 * //       ServerCertificateName: "STRING_VALUE", // required
 * //       ServerCertificateId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       UploadDate: new Date("TIMESTAMP"),
 * //       Expiration: new Date("TIMESTAMP"),
 * //     },
 * //     CertificateBody: "STRING_VALUE", // required
 * //     CertificateChain: "STRING_VALUE",
 * //     Tags: [ // tagListType
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServerCertificateCommandInput - {@link GetServerCertificateCommandInput}
 * @returns {@link GetServerCertificateCommandOutput}
 * @see {@link GetServerCertificateCommandInput} for command's `input` shape.
 * @see {@link GetServerCertificateCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetServerCertificateCommand extends $Command
  .classBuilder<
    GetServerCertificateCommandInput,
    GetServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "GetServerCertificate", {})
  .n("IAMClient", "GetServerCertificateCommand")
  .sc(GetServerCertificate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServerCertificateRequest;
      output: GetServerCertificateResponse;
    };
    sdk: {
      input: GetServerCertificateCommandInput;
      output: GetServerCertificateCommandOutput;
    };
  };
}
