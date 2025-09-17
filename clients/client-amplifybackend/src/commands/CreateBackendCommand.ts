// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBackendRequest, CreateBackendResponse } from "../models/models_0";
import { de_CreateBackendCommand, se_CreateBackendCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBackendCommand}.
 */
export interface CreateBackendCommandInput extends CreateBackendRequest {}
/**
 * @public
 *
 * The output of {@link CreateBackendCommand}.
 */
export interface CreateBackendCommandOutput extends CreateBackendResponse, __MetadataBearer {}

/**
 * <p>This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, CreateBackendCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, CreateBackendCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // CreateBackendRequest
 *   AppId: "STRING_VALUE", // required
 *   AppName: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   ResourceConfig: {},
 *   ResourceName: "STRING_VALUE",
 * };
 * const command = new CreateBackendCommand(input);
 * const response = await client.send(command);
 * // { // CreateBackendResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Operation: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBackendCommandInput - {@link CreateBackendCommandInput}
 * @returns {@link CreateBackendCommandOutput}
 * @see {@link CreateBackendCommandInput} for command's `input` shape.
 * @see {@link CreateBackendCommandOutput} for command's `response` shape.
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
export class CreateBackendCommand extends $Command
  .classBuilder<
    CreateBackendCommandInput,
    CreateBackendCommandOutput,
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
  .s("AmplifyBackend", "CreateBackend", {})
  .n("AmplifyBackendClient", "CreateBackendCommand")
  .f(void 0, void 0)
  .ser(se_CreateBackendCommand)
  .de(de_CreateBackendCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBackendRequest;
      output: CreateBackendResponse;
    };
    sdk: {
      input: CreateBackendCommandInput;
      output: CreateBackendCommandOutput;
    };
  };
}
