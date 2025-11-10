// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveBackendConfigRequest, RemoveBackendConfigResponse } from "../models/models_0";
import { RemoveBackendConfig } from "../schemas/schemas_0";

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
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyBackend", "RemoveBackendConfig", {})
  .n("AmplifyBackendClient", "RemoveBackendConfigCommand")
  .sc(RemoveBackendConfig)
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
