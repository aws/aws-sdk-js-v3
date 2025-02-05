// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTrustStoreCertificateRequest, GetTrustStoreCertificateResponse } from "../models/models_0";
import { de_GetTrustStoreCertificateCommand, se_GetTrustStoreCertificateCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTrustStoreCertificateCommand}.
 */
export interface GetTrustStoreCertificateCommandInput extends GetTrustStoreCertificateRequest {}
/**
 * @public
 *
 * The output of {@link GetTrustStoreCertificateCommand}.
 */
export interface GetTrustStoreCertificateCommandOutput extends GetTrustStoreCertificateResponse, __MetadataBearer {}

/**
 * <p>Gets the trust store certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetTrustStoreCertificateCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetTrustStoreCertificateCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetTrustStoreCertificateRequest
 *   trustStoreArn: "STRING_VALUE", // required
 *   thumbprint: "STRING_VALUE", // required
 * };
 * const command = new GetTrustStoreCertificateCommand(input);
 * const response = await client.send(command);
 * // { // GetTrustStoreCertificateResponse
 * //   trustStoreArn: "STRING_VALUE", // required
 * //   certificate: { // Certificate
 * //     thumbprint: "STRING_VALUE",
 * //     subject: "STRING_VALUE",
 * //     issuer: "STRING_VALUE",
 * //     notValidBefore: new Date("TIMESTAMP"),
 * //     notValidAfter: new Date("TIMESTAMP"),
 * //     body: new Uint8Array(),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrustStoreCertificateCommandInput - {@link GetTrustStoreCertificateCommandInput}
 * @returns {@link GetTrustStoreCertificateCommandOutput}
 * @see {@link GetTrustStoreCertificateCommandInput} for command's `input` shape.
 * @see {@link GetTrustStoreCertificateCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 * @public
 */
export class GetTrustStoreCertificateCommand extends $Command
  .classBuilder<
    GetTrustStoreCertificateCommandInput,
    GetTrustStoreCertificateCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSErmineControlPlaneService", "GetTrustStoreCertificate", {})
  .n("WorkSpacesWebClient", "GetTrustStoreCertificateCommand")
  .f(void 0, void 0)
  .ser(se_GetTrustStoreCertificateCommand)
  .de(de_GetTrustStoreCertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrustStoreCertificateRequest;
      output: GetTrustStoreCertificateResponse;
    };
    sdk: {
      input: GetTrustStoreCertificateCommandInput;
      output: GetTrustStoreCertificateCommandOutput;
    };
  };
}
