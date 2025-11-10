// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBackendStorageRequest, GetBackendStorageResponse } from "../models/models_0";
import { GetBackendStorage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBackendStorageCommand}.
 */
export interface GetBackendStorageCommandInput extends GetBackendStorageRequest {}
/**
 * @public
 *
 * The output of {@link GetBackendStorageCommand}.
 */
export interface GetBackendStorageCommandOutput extends GetBackendStorageResponse, __MetadataBearer {}

/**
 * <p>Gets details for a backend storage resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetBackendStorageCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetBackendStorageCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // GetBackendStorageRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new GetBackendStorageCommand(input);
 * const response = await client.send(command);
 * // { // GetBackendStorageResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   ResourceConfig: { // GetBackendStorageResourceConfig
 * //     BucketName: "STRING_VALUE",
 * //     Imported: true || false, // required
 * //     Permissions: { // BackendStoragePermissions
 * //       Authenticated: [ // ListOfAuthenticatedElement // required
 * //         "READ" || "CREATE_AND_UPDATE" || "DELETE",
 * //       ],
 * //       UnAuthenticated: [ // ListOfUnAuthenticatedElement
 * //         "READ" || "CREATE_AND_UPDATE" || "DELETE",
 * //       ],
 * //     },
 * //     ServiceName: "S3", // required
 * //   },
 * //   ResourceName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBackendStorageCommandInput - {@link GetBackendStorageCommandInput}
 * @returns {@link GetBackendStorageCommandOutput}
 * @see {@link GetBackendStorageCommandInput} for command's `input` shape.
 * @see {@link GetBackendStorageCommandOutput} for command's `response` shape.
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
export class GetBackendStorageCommand extends $Command
  .classBuilder<
    GetBackendStorageCommandInput,
    GetBackendStorageCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyBackend", "GetBackendStorage", {})
  .n("AmplifyBackendClient", "GetBackendStorageCommand")
  .sc(GetBackendStorage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBackendStorageRequest;
      output: GetBackendStorageResponse;
    };
    sdk: {
      input: GetBackendStorageCommandInput;
      output: GetBackendStorageCommandOutput;
    };
  };
}
