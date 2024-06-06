// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTrustStoreRequest, UpdateTrustStoreResponse } from "../models/models_0";
import { de_UpdateTrustStoreCommand, se_UpdateTrustStoreCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTrustStoreCommand}.
 */
export interface UpdateTrustStoreCommandInput extends UpdateTrustStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrustStoreCommand}.
 */
export interface UpdateTrustStoreCommandOutput extends UpdateTrustStoreResponse, __MetadataBearer {}

/**
 * <p>Updates the trust store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdateTrustStoreCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdateTrustStoreCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdateTrustStoreRequest
 *   trustStoreArn: "STRING_VALUE", // required
 *   certificatesToAdd: [ // CertificateList
 *     new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   ],
 *   certificatesToDelete: [ // CertificateThumbprintList
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateTrustStoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTrustStoreResponse
 * //   trustStoreArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateTrustStoreCommandInput - {@link UpdateTrustStoreCommandInput}
 * @returns {@link UpdateTrustStoreCommandOutput}
 * @see {@link UpdateTrustStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateTrustStoreCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateTrustStoreCommand extends $Command
  .classBuilder<
    UpdateTrustStoreCommandInput,
    UpdateTrustStoreCommandOutput,
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
  .s("AWSErmineControlPlaneService", "UpdateTrustStore", {})
  .n("WorkSpacesWebClient", "UpdateTrustStoreCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTrustStoreCommand)
  .de(de_UpdateTrustStoreCommand)
  .build() {}
