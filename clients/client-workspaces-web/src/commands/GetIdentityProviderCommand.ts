// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetIdentityProviderRequest,
  GetIdentityProviderResponse,
  GetIdentityProviderResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetIdentityProviderCommand, se_GetIdentityProviderCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityProviderCommand}.
 */
export interface GetIdentityProviderCommandInput extends GetIdentityProviderRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityProviderCommand}.
 */
export interface GetIdentityProviderCommandOutput extends GetIdentityProviderResponse, __MetadataBearer {}

/**
 * <p>Gets the identity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetIdentityProviderCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetIdentityProviderCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetIdentityProviderRequest
 *   identityProviderArn: "STRING_VALUE", // required
 * };
 * const command = new GetIdentityProviderCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityProviderResponse
 * //   identityProvider: { // IdentityProvider
 * //     identityProviderArn: "STRING_VALUE", // required
 * //     identityProviderName: "STRING_VALUE",
 * //     identityProviderType: "STRING_VALUE",
 * //     identityProviderDetails: { // IdentityProviderDetails
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdentityProviderCommandInput - {@link GetIdentityProviderCommandInput}
 * @returns {@link GetIdentityProviderCommandOutput}
 * @see {@link GetIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link GetIdentityProviderCommandOutput} for command's `response` shape.
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
export class GetIdentityProviderCommand extends $Command
  .classBuilder<
    GetIdentityProviderCommandInput,
    GetIdentityProviderCommandOutput,
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
  .s("AWSErmineControlPlaneService", "GetIdentityProvider", {})
  .n("WorkSpacesWebClient", "GetIdentityProviderCommand")
  .f(void 0, GetIdentityProviderResponseFilterSensitiveLog)
  .ser(se_GetIdentityProviderCommand)
  .de(de_GetIdentityProviderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdentityProviderRequest;
      output: GetIdentityProviderResponse;
    };
    sdk: {
      input: GetIdentityProviderCommandInput;
      output: GetIdentityProviderCommandOutput;
    };
  };
}
