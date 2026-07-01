// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBackendStorageRequest, UpdateBackendStorageResponse } from "../models/models_0";
import { UpdateBackendStorage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBackendStorageCommand}.
 */
export interface UpdateBackendStorageCommandInput extends UpdateBackendStorageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBackendStorageCommand}.
 */
export interface UpdateBackendStorageCommandOutput extends UpdateBackendStorageResponse, __MetadataBearer {}

/**
 * <p>Updates an existing backend storage resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendStorageCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, UpdateBackendStorageCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // UpdateBackendStorageRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   ResourceConfig: { // UpdateBackendStorageResourceConfig
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
 * const command = new UpdateBackendStorageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBackendStorageResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBackendStorageCommandInput - {@link UpdateBackendStorageCommandInput}
 * @returns {@link UpdateBackendStorageCommandOutput}
 * @see {@link UpdateBackendStorageCommandInput} for command's `input` shape.
 * @see {@link UpdateBackendStorageCommandOutput} for command's `response` shape.
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
export class UpdateBackendStorageCommand extends command<UpdateBackendStorageCommandInput, UpdateBackendStorageCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBackendStorage",
  UpdateBackendStorage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBackendStorageRequest;
      output: UpdateBackendStorageResponse;
    };
    sdk: {
      input: UpdateBackendStorageCommandInput;
      output: UpdateBackendStorageCommandOutput;
    };
  };
}
