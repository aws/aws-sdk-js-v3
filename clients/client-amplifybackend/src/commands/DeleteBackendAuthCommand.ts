// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBackendAuthRequest, DeleteBackendAuthResponse } from "../models/models_0";
import { de_DeleteBackendAuthCommand, se_DeleteBackendAuthCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBackendAuthCommand}.
 */
export interface DeleteBackendAuthCommandInput extends DeleteBackendAuthRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBackendAuthCommand}.
 */
export interface DeleteBackendAuthCommandOutput extends DeleteBackendAuthResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing backend authentication resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, DeleteBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, DeleteBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // DeleteBackendAuthRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteBackendAuthCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBackendAuthResponse
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
 * @param DeleteBackendAuthCommandInput - {@link DeleteBackendAuthCommandInput}
 * @returns {@link DeleteBackendAuthCommandOutput}
 * @see {@link DeleteBackendAuthCommandInput} for command's `input` shape.
 * @see {@link DeleteBackendAuthCommandOutput} for command's `response` shape.
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
export class DeleteBackendAuthCommand extends $Command
  .classBuilder<
    DeleteBackendAuthCommandInput,
    DeleteBackendAuthCommandOutput,
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
  .s("AmplifyBackend", "DeleteBackendAuth", {})
  .n("AmplifyBackendClient", "DeleteBackendAuthCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBackendAuthCommand)
  .de(de_DeleteBackendAuthCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBackendAuthRequest;
      output: DeleteBackendAuthResponse;
    };
    sdk: {
      input: DeleteBackendAuthCommandInput;
      output: DeleteBackendAuthCommandOutput;
    };
  };
}
