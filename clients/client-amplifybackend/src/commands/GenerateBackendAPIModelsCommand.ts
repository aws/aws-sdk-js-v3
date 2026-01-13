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
import type { GenerateBackendAPIModelsRequest, GenerateBackendAPIModelsResponse } from "../models/models_0";
import { GenerateBackendAPIModels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateBackendAPIModelsCommand}.
 */
export interface GenerateBackendAPIModelsCommandInput extends GenerateBackendAPIModelsRequest {}
/**
 * @public
 *
 * The output of {@link GenerateBackendAPIModelsCommand}.
 */
export interface GenerateBackendAPIModelsCommandOutput extends GenerateBackendAPIModelsResponse, __MetadataBearer {}

/**
 * <p>Generates a model schema for an existing backend API resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GenerateBackendAPIModelsCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GenerateBackendAPIModelsCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // GenerateBackendAPIModelsRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new GenerateBackendAPIModelsCommand(input);
 * const response = await client.send(command);
 * // { // GenerateBackendAPIModelsResponse
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
 * @param GenerateBackendAPIModelsCommandInput - {@link GenerateBackendAPIModelsCommandInput}
 * @returns {@link GenerateBackendAPIModelsCommandOutput}
 * @see {@link GenerateBackendAPIModelsCommandInput} for command's `input` shape.
 * @see {@link GenerateBackendAPIModelsCommandOutput} for command's `response` shape.
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
export class GenerateBackendAPIModelsCommand extends $Command
  .classBuilder<
    GenerateBackendAPIModelsCommandInput,
    GenerateBackendAPIModelsCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyBackend", "GenerateBackendAPIModels", {})
  .n("AmplifyBackendClient", "GenerateBackendAPIModelsCommand")
  .sc(GenerateBackendAPIModels$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateBackendAPIModelsRequest;
      output: GenerateBackendAPIModelsResponse;
    };
    sdk: {
      input: GenerateBackendAPIModelsCommandInput;
      output: GenerateBackendAPIModelsCommandOutput;
    };
  };
}
