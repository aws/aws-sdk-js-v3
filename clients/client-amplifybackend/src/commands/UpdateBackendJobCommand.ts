// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBackendJobRequest, UpdateBackendJobResponse } from "../models/models_0";
import { UpdateBackendJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBackendJobCommand}.
 */
export interface UpdateBackendJobCommandInput extends UpdateBackendJobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBackendJobCommand}.
 */
export interface UpdateBackendJobCommandOutput extends UpdateBackendJobResponse, __MetadataBearer {}

/**
 * Updates a specific job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendJobCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, UpdateBackendJobCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // UpdateBackendJobRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 *   Operation: "STRING_VALUE",
 *   Status: "STRING_VALUE",
 * };
 * const command = new UpdateBackendJobCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBackendJobResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   CreateTime: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Operation: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   UpdateTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBackendJobCommandInput - {@link UpdateBackendJobCommandInput}
 * @returns {@link UpdateBackendJobCommandOutput}
 * @see {@link UpdateBackendJobCommandInput} for command's `input` shape.
 * @see {@link UpdateBackendJobCommandOutput} for command's `response` shape.
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
export class UpdateBackendJobCommand extends command<UpdateBackendJobCommandInput, UpdateBackendJobCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBackendJob",
  UpdateBackendJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBackendJobRequest;
      output: UpdateBackendJobResponse;
    };
    sdk: {
      input: UpdateBackendJobCommandInput;
      output: UpdateBackendJobCommandOutput;
    };
  };
}
