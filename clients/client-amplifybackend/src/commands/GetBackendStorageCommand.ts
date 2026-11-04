// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBackendStorageRequest, GetBackendStorageResponse } from "../models/models_0";
import { GetBackendStorage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets details for a backend storage resource.
 *
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
 *
 * An error returned if a request is not formed properly.
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *
 * An error returned if there's a temporary issue with the service.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * An error returned when a specific resource type is not found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * An error that is returned when a limit of a specific type has been exceeded.
 *
 * @throws {@link AmplifyBackendServiceException}
 *
 * Base exception class for all service exceptions from AmplifyBackend service.
 *
 * @public
 */
export class GetBackendStorageCommand extends command<GetBackendStorageCommandInput, GetBackendStorageCommandOutput>(
  _ep0,
  _mw0,
  "GetBackendStorage",
  GetBackendStorage$
) {
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
