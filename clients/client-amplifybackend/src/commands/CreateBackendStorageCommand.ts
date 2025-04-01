// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBackendStorageRequest, CreateBackendStorageResponse } from "../models/models_0";
import { de_CreateBackendStorageCommand, se_CreateBackendStorageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBackendStorageCommand}.
 */
export interface CreateBackendStorageCommandInput extends CreateBackendStorageRequest {}
/**
 * @public
 *
 * The output of {@link CreateBackendStorageCommand}.
 */
export interface CreateBackendStorageCommandOutput extends CreateBackendStorageResponse, __MetadataBearer {}

/**
 * <p>Creates a backend storage resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, CreateBackendStorageCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, CreateBackendStorageCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const input = { // CreateBackendStorageRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   ResourceConfig: { // CreateBackendStorageResourceConfig
 *     BucketName: "STRING_VALUE",
 *     Permissions: { // BackendStoragePermissions
 *       Authenticated: [ // ListOfAuthenticatedElement // required
 *         "READ" || "CREATE_AND_UPDATE" || "DELETE",
 *       ],
 *       UnAuthenticated: [ // ListOfUnAuthenticatedElement
 *         "READ" || "CREATE_AND_UPDATE" || "DELETE",
 *       ],
 *     },
 *     ServiceName: "S3", // required
 *   },
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new CreateBackendStorageCommand(input);
 * const response = await client.send(command);
 * // { // CreateBackendStorageResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBackendStorageCommandInput - {@link CreateBackendStorageCommandInput}
 * @returns {@link CreateBackendStorageCommandOutput}
 * @see {@link CreateBackendStorageCommandInput} for command's `input` shape.
 * @see {@link CreateBackendStorageCommandOutput} for command's `response` shape.
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
export class CreateBackendStorageCommand extends $Command
  .classBuilder<
    CreateBackendStorageCommandInput,
    CreateBackendStorageCommandOutput,
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
  .s("AmplifyBackend", "CreateBackendStorage", {})
  .n("AmplifyBackendClient", "CreateBackendStorageCommand")
  .f(void 0, void 0)
  .ser(se_CreateBackendStorageCommand)
  .de(de_CreateBackendStorageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBackendStorageRequest;
      output: CreateBackendStorageResponse;
    };
    sdk: {
      input: CreateBackendStorageCommandInput;
      output: CreateBackendStorageCommandOutput;
    };
  };
}
