// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveBackendConfigRequest, RemoveBackendConfigResponse } from "../models/models_0";
import { de_RemoveBackendConfigCommand, se_RemoveBackendConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveBackendConfigCommand}.
 */
export interface RemoveBackendConfigCommandInput extends RemoveBackendConfigRequest {}
/**
 * @public
 *
 * The output of {@link RemoveBackendConfigCommand}.
 */
export interface RemoveBackendConfigCommandOutput extends RemoveBackendConfigResponse, __MetadataBearer {}

/**
 * <p>Removes the AWS resources required to access the Amplify Admin UI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, RemoveBackendConfigCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, RemoveBackendConfigCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AmplifyBackendClient(config);
 * const input = { // RemoveBackendConfigRequest
 *   AppId: "STRING_VALUE", // required
 * };
 * const command = new RemoveBackendConfigCommand(input);
 * const response = await client.send(command);
 * // { // RemoveBackendConfigResponse
 * //   Error: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveBackendConfigCommandInput - {@link RemoveBackendConfigCommandInput}
 * @returns {@link RemoveBackendConfigCommandOutput}
 * @see {@link RemoveBackendConfigCommandInput} for command's `input` shape.
 * @see {@link RemoveBackendConfigCommandOutput} for command's `response` shape.
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
 * @public
 */
export class RemoveBackendConfigCommand extends $Command
  .classBuilder<
    RemoveBackendConfigCommandInput,
    RemoveBackendConfigCommandOutput,
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
  .s("AmplifyBackend", "RemoveBackendConfig", {})
  .n("AmplifyBackendClient", "RemoveBackendConfigCommand")
  .f(void 0, void 0)
  .ser(se_RemoveBackendConfigCommand)
  .de(de_RemoveBackendConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveBackendConfigRequest;
      output: RemoveBackendConfigResponse;
    };
    sdk: {
      input: RemoveBackendConfigCommandInput;
      output: RemoveBackendConfigCommandOutput;
    };
  };
}
