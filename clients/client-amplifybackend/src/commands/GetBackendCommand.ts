// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBackendRequest, GetBackendResponse } from "../models/models_0";
import { GetBackend$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBackendCommand}.
 */
export interface GetBackendCommandInput extends GetBackendRequest {}
/**
 * @public
 *
 * The output of {@link GetBackendCommand}.
 */
export interface GetBackendCommandOutput extends GetBackendResponse, __MetadataBearer {}

/**
 * Provides project-level details for your Amplify UI project.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetBackendCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetBackendCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // GetBackendRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE",
 * };
 * const command = new GetBackendCommand(input);
 * const response = await client.send(command);
 * // { // GetBackendResponse
 * //   AmplifyFeatureFlags: "STRING_VALUE",
 * //   AmplifyMetaConfig: "STRING_VALUE",
 * //   AppId: "STRING_VALUE",
 * //   AppName: "STRING_VALUE",
 * //   BackendEnvironmentList: [ // ListOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBackendCommandInput - {@link GetBackendCommandInput}
 * @returns {@link GetBackendCommandOutput}
 * @see {@link GetBackendCommandInput} for command's `input` shape.
 * @see {@link GetBackendCommandOutput} for command's `response` shape.
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
export class GetBackendCommand extends command<GetBackendCommandInput, GetBackendCommandOutput>(
  _ep0,
  _mw0,
  "GetBackend",
  GetBackend$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBackendRequest;
      output: GetBackendResponse;
    };
    sdk: {
      input: GetBackendCommandInput;
      output: GetBackendCommandOutput;
    };
  };
}
