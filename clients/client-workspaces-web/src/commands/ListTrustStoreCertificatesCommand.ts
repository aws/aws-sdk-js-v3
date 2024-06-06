// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTrustStoreCertificatesRequest, ListTrustStoreCertificatesResponse } from "../models/models_0";
import { de_ListTrustStoreCertificatesCommand, se_ListTrustStoreCertificatesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrustStoreCertificatesCommand}.
 */
export interface ListTrustStoreCertificatesCommandInput extends ListTrustStoreCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListTrustStoreCertificatesCommand}.
 */
export interface ListTrustStoreCertificatesCommandOutput extends ListTrustStoreCertificatesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of trust store certificates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListTrustStoreCertificatesCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListTrustStoreCertificatesCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListTrustStoreCertificatesRequest
 *   trustStoreArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTrustStoreCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListTrustStoreCertificatesResponse
 * //   certificateList: [ // CertificateSummaryList
 * //     { // CertificateSummary
 * //       thumbprint: "STRING_VALUE",
 * //       subject: "STRING_VALUE",
 * //       issuer: "STRING_VALUE",
 * //       notValidBefore: new Date("TIMESTAMP"),
 * //       notValidAfter: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   trustStoreArn: "STRING_VALUE", // required
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrustStoreCertificatesCommandInput - {@link ListTrustStoreCertificatesCommandInput}
 * @returns {@link ListTrustStoreCertificatesCommandOutput}
 * @see {@link ListTrustStoreCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListTrustStoreCertificatesCommandOutput} for command's `response` shape.
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
export class ListTrustStoreCertificatesCommand extends $Command
  .classBuilder<
    ListTrustStoreCertificatesCommandInput,
    ListTrustStoreCertificatesCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSErmineControlPlaneService", "ListTrustStoreCertificates", {})
  .n("WorkSpacesWebClient", "ListTrustStoreCertificatesCommand")
  .f(void 0, void 0)
  .ser(se_ListTrustStoreCertificatesCommand)
  .de(de_ListTrustStoreCertificatesCommand)
  .build() {}
