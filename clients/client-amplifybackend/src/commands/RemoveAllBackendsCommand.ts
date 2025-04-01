// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveAllBackendsRequest, RemoveAllBackendsResponse } from "../models/models_0";
import { de_RemoveAllBackendsCommand, se_RemoveAllBackendsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveAllBackendsCommand}.
 */
export interface RemoveAllBackendsCommandInput extends RemoveAllBackendsRequest {}
/**
 * @public
 *
 * The output of {@link RemoveAllBackendsCommand}.
 */
export interface RemoveAllBackendsCommandOutput extends RemoveAllBackendsResponse, __MetadataBearer {}

/**
 * <p>Removes all backend environments from your Amplify project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, RemoveAllBackendsCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, RemoveAllBackendsCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const input = { // RemoveAllBackendsRequest
 *   AppId: "STRING_VALUE", // required
 *   CleanAmplifyApp: true || false,
 * };
 * const command = new RemoveAllBackendsCommand(input);
 * const response = await client.send(command);
 * // { // RemoveAllBackendsResponse
 * //   AppId: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Operation: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveAllBackendsCommandInput - {@link RemoveAllBackendsCommandInput}
 * @returns {@link RemoveAllBackendsCommandOutput}
 * @see {@link RemoveAllBackendsCommandInput} for command's `input` shape.
 * @see {@link RemoveAllBackendsCommandOutput} for command's `response` shape.
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
export class RemoveAllBackendsCommand extends $Command
  .classBuilder<
    RemoveAllBackendsCommandInput,
    RemoveAllBackendsCommandOutput,
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
  .s("AmplifyBackend", "RemoveAllBackends", {})
  .n("AmplifyBackendClient", "RemoveAllBackendsCommand")
  .f(void 0, void 0)
  .ser(se_RemoveAllBackendsCommand)
  .de(de_RemoveAllBackendsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveAllBackendsRequest;
      output: RemoveAllBackendsResponse;
    };
    sdk: {
      input: RemoveAllBackendsCommandInput;
      output: RemoveAllBackendsCommandOutput;
    };
  };
}
