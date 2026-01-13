// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AmplifyBackendClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ImportBackendAuthRequest, ImportBackendAuthResponse } from "../models/models_0";
import { ImportBackendAuth$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportBackendAuthCommand}.
 */
export interface ImportBackendAuthCommandInput extends ImportBackendAuthRequest {}
/**
 * @public
 *
 * The output of {@link ImportBackendAuthCommand}.
 */
export interface ImportBackendAuthCommandOutput extends ImportBackendAuthResponse, __MetadataBearer {}

/**
 * <p>Imports an existing backend authentication resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, ImportBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, ImportBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // ImportBackendAuthRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   IdentityPoolId: "STRING_VALUE",
 *   NativeClientId: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 *   WebClientId: "STRING_VALUE", // required
 * };
 * const command = new ImportBackendAuthCommand(input);
 * const response = await client.send(command);
 * // { // ImportBackendAuthResponse
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
 * @param ImportBackendAuthCommandInput - {@link ImportBackendAuthCommandInput}
 * @returns {@link ImportBackendAuthCommandOutput}
 * @see {@link ImportBackendAuthCommandInput} for command's `input` shape.
 * @see {@link ImportBackendAuthCommandOutput} for command's `response` shape.
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
export class ImportBackendAuthCommand extends $Command
  .classBuilder<
    ImportBackendAuthCommandInput,
    ImportBackendAuthCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyBackend", "ImportBackendAuth", {})
  .n("AmplifyBackendClient", "ImportBackendAuthCommand")
  .sc(ImportBackendAuth$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportBackendAuthRequest;
      output: ImportBackendAuthResponse;
    };
    sdk: {
      input: ImportBackendAuthCommandInput;
      output: ImportBackendAuthCommandOutput;
    };
  };
}
