// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateTrustStoreRequest, CreateTrustStoreResponse } from "../models/models_0";
import { CreateTrustStore } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrustStoreCommand}.
 */
export interface CreateTrustStoreCommandInput extends CreateTrustStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrustStoreCommand}.
 */
export interface CreateTrustStoreCommandOutput extends CreateTrustStoreResponse, __MetadataBearer {}

/**
 * <p>Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, CreateTrustStoreCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, CreateTrustStoreCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // CreateTrustStoreRequest
 *   certificateList: [ // CertificateList // required
 *     new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateTrustStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrustStoreResponse
 * //   trustStoreArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrustStoreCommandInput - {@link CreateTrustStoreCommandInput}
 * @returns {@link CreateTrustStoreCommandOutput}
 * @see {@link CreateTrustStoreCommandInput} for command's `input` shape.
 * @see {@link CreateTrustStoreCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
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
 *
 * @public
 */
export class CreateTrustStoreCommand extends $Command
  .classBuilder<
    CreateTrustStoreCommandInput,
    CreateTrustStoreCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "CreateTrustStore", {})
  .n("WorkSpacesWebClient", "CreateTrustStoreCommand")
  .sc(CreateTrustStore)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrustStoreRequest;
      output: CreateTrustStoreResponse;
    };
    sdk: {
      input: CreateTrustStoreCommandInput;
      output: CreateTrustStoreCommandOutput;
    };
  };
}
