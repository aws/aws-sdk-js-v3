// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBackendConfigRequest, UpdateBackendConfigResponse } from "../models/models_0";
import { de_UpdateBackendConfigCommand, se_UpdateBackendConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBackendConfigCommand}.
 */
export interface UpdateBackendConfigCommandInput extends UpdateBackendConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBackendConfigCommand}.
 */
export interface UpdateBackendConfigCommandOutput extends UpdateBackendConfigResponse, __MetadataBearer {}

/**
 * <p>Updates the AWS resources required to access the Amplify Admin UI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendConfigCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, UpdateBackendConfigCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const input = { // UpdateBackendConfigRequest
 *   AppId: "STRING_VALUE", // required
 *   LoginAuthConfig: { // LoginAuthConfigReqObj
 *     AwsCognitoIdentityPoolId: "STRING_VALUE",
 *     AwsCognitoRegion: "STRING_VALUE",
 *     AwsUserPoolsId: "STRING_VALUE",
 *     AwsUserPoolsWebClientId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateBackendConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBackendConfigResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendManagerAppId: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * //   LoginAuthConfig: { // LoginAuthConfigReqObj
 * //     AwsCognitoIdentityPoolId: "STRING_VALUE",
 * //     AwsCognitoRegion: "STRING_VALUE",
 * //     AwsUserPoolsId: "STRING_VALUE",
 * //     AwsUserPoolsWebClientId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateBackendConfigCommandInput - {@link UpdateBackendConfigCommandInput}
 * @returns {@link UpdateBackendConfigCommandOutput}
 * @see {@link UpdateBackendConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateBackendConfigCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for AmplifyBackendClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>An error returned if a request is not formed properly.</p>
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  <p>An error returned if there's a temporary issue with the service.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An error returned when a specific resource type is not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 *
 * @throws {@link AmplifyBackendServiceException}
 * <p>Base exception class for all service exceptions from AmplifyBackend service.</p>
 *
 *
 * @public
 */
export class UpdateBackendConfigCommand extends $Command
  .classBuilder<
    UpdateBackendConfigCommandInput,
    UpdateBackendConfigCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyBackend", "UpdateBackendConfig", {})
  .n("AmplifyBackendClient", "UpdateBackendConfigCommand")
  .f(void 0, void 0)
  .ser(se_UpdateBackendConfigCommand)
  .de(de_UpdateBackendConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBackendConfigRequest;
      output: UpdateBackendConfigResponse;
    };
    sdk: {
      input: UpdateBackendConfigCommandInput;
      output: UpdateBackendConfigCommandOutput;
    };
  };
}
