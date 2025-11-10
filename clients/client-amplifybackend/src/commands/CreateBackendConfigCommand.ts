// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBackendConfigRequest, CreateBackendConfigResponse } from "../models/models_0";
import { CreateBackendConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBackendConfigCommand}.
 */
export interface CreateBackendConfigCommandInput extends CreateBackendConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateBackendConfigCommand}.
 */
export interface CreateBackendConfigCommandOutput extends CreateBackendConfigResponse, __MetadataBearer {}

/**
 * <p>Creates a config object for a backend.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, CreateBackendConfigCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, CreateBackendConfigCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // CreateBackendConfigRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendManagerAppId: "STRING_VALUE",
 * };
 * const command = new CreateBackendConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateBackendConfigResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBackendConfigCommandInput - {@link CreateBackendConfigCommandInput}
 * @returns {@link CreateBackendConfigCommandOutput}
 * @see {@link CreateBackendConfigCommandInput} for command's `input` shape.
 * @see {@link CreateBackendConfigCommandOutput} for command's `response` shape.
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
export class CreateBackendConfigCommand extends $Command
  .classBuilder<
    CreateBackendConfigCommandInput,
    CreateBackendConfigCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyBackend", "CreateBackendConfig", {})
  .n("AmplifyBackendClient", "CreateBackendConfigCommand")
  .sc(CreateBackendConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBackendConfigRequest;
      output: CreateBackendConfigResponse;
    };
    sdk: {
      input: CreateBackendConfigCommandInput;
      output: CreateBackendConfigCommandOutput;
    };
  };
}
