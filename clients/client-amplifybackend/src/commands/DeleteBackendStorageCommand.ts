// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBackendStorageRequest, DeleteBackendStorageResponse } from "../models/models_0";
import { DeleteBackendStorage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBackendStorageCommand}.
 */
export interface DeleteBackendStorageCommandInput extends DeleteBackendStorageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBackendStorageCommand}.
 */
export interface DeleteBackendStorageCommandOutput extends DeleteBackendStorageResponse, __MetadataBearer {}

/**
 * <p>Removes the specified backend storage resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, DeleteBackendStorageCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, DeleteBackendStorageCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // DeleteBackendStorageRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   ResourceName: "STRING_VALUE", // required
 *   ServiceName: "S3", // required
 * };
 * const command = new DeleteBackendStorageCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBackendStorageResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteBackendStorageCommandInput - {@link DeleteBackendStorageCommandInput}
 * @returns {@link DeleteBackendStorageCommandOutput}
 * @see {@link DeleteBackendStorageCommandInput} for command's `input` shape.
 * @see {@link DeleteBackendStorageCommandOutput} for command's `response` shape.
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
export class DeleteBackendStorageCommand extends $Command
  .classBuilder<
    DeleteBackendStorageCommandInput,
    DeleteBackendStorageCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyBackend", "DeleteBackendStorage", {})
  .n("AmplifyBackendClient", "DeleteBackendStorageCommand")
  .sc(DeleteBackendStorage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBackendStorageRequest;
      output: DeleteBackendStorageResponse;
    };
    sdk: {
      input: DeleteBackendStorageCommandInput;
      output: DeleteBackendStorageCommandOutput;
    };
  };
}
