// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBackendAPIModelsRequest, GetBackendAPIModelsResponse } from "../models/models_0";
import { GetBackendAPIModels } from "../schemas/schemas_18_GetBackendAPIModels";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBackendAPIModelsCommand}.
 */
export interface GetBackendAPIModelsCommandInput extends GetBackendAPIModelsRequest {}
/**
 * @public
 *
 * The output of {@link GetBackendAPIModelsCommand}.
 */
export interface GetBackendAPIModelsCommandOutput extends GetBackendAPIModelsResponse, __MetadataBearer {}

/**
 * <p>Gets a model introspection schema for an existing backend API resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetBackendAPIModelsCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetBackendAPIModelsCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // GetBackendAPIModelsRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new GetBackendAPIModelsCommand(input);
 * const response = await client.send(command);
 * // { // GetBackendAPIModelsResponse
 * //   Models: "STRING_VALUE",
 * //   Status: "LATEST" || "STALE",
 * //   ModelIntrospectionSchema: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBackendAPIModelsCommandInput - {@link GetBackendAPIModelsCommandInput}
 * @returns {@link GetBackendAPIModelsCommandOutput}
 * @see {@link GetBackendAPIModelsCommandInput} for command's `input` shape.
 * @see {@link GetBackendAPIModelsCommandOutput} for command's `response` shape.
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
export class GetBackendAPIModelsCommand extends $Command
  .classBuilder<
    GetBackendAPIModelsCommandInput,
    GetBackendAPIModelsCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyBackend", "GetBackendAPIModels", {})
  .n("AmplifyBackendClient", "GetBackendAPIModelsCommand")
  .sc(GetBackendAPIModels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBackendAPIModelsRequest;
      output: GetBackendAPIModelsResponse;
    };
    sdk: {
      input: GetBackendAPIModelsCommandInput;
      output: GetBackendAPIModelsCommandOutput;
    };
  };
}
