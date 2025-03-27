// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTrustStoreRequest, GetTrustStoreResponse } from "../models/models_0";
import { de_GetTrustStoreCommand, se_GetTrustStoreCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTrustStoreCommand}.
 */
export interface GetTrustStoreCommandInput extends GetTrustStoreRequest {}
/**
 * @public
 *
 * The output of {@link GetTrustStoreCommand}.
 */
export interface GetTrustStoreCommandOutput extends GetTrustStoreResponse, __MetadataBearer {}

/**
 * <p>Gets the trust store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetTrustStoreCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetTrustStoreCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetTrustStoreRequest
 *   trustStoreArn: "STRING_VALUE", // required
 * };
 * const command = new GetTrustStoreCommand(input);
 * const response = await client.send(command);
 * // { // GetTrustStoreResponse
 * //   trustStore: { // TrustStore
 * //     associatedPortalArns: [ // ArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     trustStoreArn: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrustStoreCommandInput - {@link GetTrustStoreCommandInput}
 * @returns {@link GetTrustStoreCommandOutput}
 * @see {@link GetTrustStoreCommandInput} for command's `input` shape.
 * @see {@link GetTrustStoreCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetTrustStoreCommand extends $Command
  .classBuilder<
    GetTrustStoreCommandInput,
    GetTrustStoreCommandOutput,
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
  .s("AWSErmineControlPlaneService", "GetTrustStore", {})
  .n("WorkSpacesWebClient", "GetTrustStoreCommand")
  .f(void 0, void 0)
  .ser(se_GetTrustStoreCommand)
  .de(de_GetTrustStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrustStoreRequest;
      output: GetTrustStoreResponse;
    };
    sdk: {
      input: GetTrustStoreCommandInput;
      output: GetTrustStoreCommandOutput;
    };
  };
}
