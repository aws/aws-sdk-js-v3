// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCertificatesRequest, ListCertificatesResult } from "../models/models_0";
import { ListCertificates } from "../schemas/schemas_4_Certificate";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCertificatesCommand}.
 */
export interface ListCertificatesCommandInput extends ListCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListCertificatesCommand}.
 */
export interface ListCertificatesCommandOutput extends ListCertificatesResult, __MetadataBearer {}

/**
 * <p>For the specified directory, lists all the certificates registered for a secure LDAP or
 *       client certificate authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListCertificatesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListCertificatesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // ListCertificatesRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListCertificatesResult
 * //   NextToken: "STRING_VALUE",
 * //   CertificatesInfo: [ // CertificatesInfo
 * //     { // CertificateInfo
 * //       CertificateId: "STRING_VALUE",
 * //       CommonName: "STRING_VALUE",
 * //       State: "Registering" || "Registered" || "RegisterFailed" || "Deregistering" || "Deregistered" || "DeregisterFailed",
 * //       ExpiryDateTime: new Date("TIMESTAMP"),
 * //       Type: "ClientCertAuth" || "ClientLDAPS",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCertificatesCommandInput - {@link ListCertificatesCommandInput}
 * @returns {@link ListCertificatesCommandOutput}
 * @see {@link ListCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListCertificatesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class ListCertificatesCommand extends $Command
  .classBuilder<
    ListCertificatesCommandInput,
    ListCertificatesCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "ListCertificates", {})
  .n("DirectoryServiceClient", "ListCertificatesCommand")
  .sc(ListCertificates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCertificatesRequest;
      output: ListCertificatesResult;
    };
    sdk: {
      input: ListCertificatesCommandInput;
      output: ListCertificatesCommandOutput;
    };
  };
}
