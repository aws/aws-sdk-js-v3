// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAppInstanceUserRequest, UpdateAppInstanceUserResponse } from "../models/models_0";
import { UpdateAppInstanceUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAppInstanceUserCommand}.
 */
export interface UpdateAppInstanceUserCommandInput extends UpdateAppInstanceUserRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppInstanceUserCommand}.
 */
export interface UpdateAppInstanceUserCommandOutput extends UpdateAppInstanceUserResponse, __MetadataBearer {}

/**
 * Updates the details of an `AppInstanceUser`. You can update names and metadata.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, UpdateAppInstanceUserCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, UpdateAppInstanceUserCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // UpdateAppInstanceUserRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Metadata: "STRING_VALUE", // required
 * };
 * const command = new UpdateAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppInstanceUserResponse
 * //   AppInstanceUserArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAppInstanceUserCommandInput - {@link UpdateAppInstanceUserCommandInput}
 * @returns {@link UpdateAppInstanceUserCommandOutput}
 * @see {@link UpdateAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link UpdateAppInstanceUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKIdentityServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKIdentity service.
 *
 * @public
 */
export class UpdateAppInstanceUserCommand extends command<UpdateAppInstanceUserCommandInput, UpdateAppInstanceUserCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAppInstanceUser",
  UpdateAppInstanceUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAppInstanceUserRequest;
      output: UpdateAppInstanceUserResponse;
    };
    sdk: {
      input: UpdateAppInstanceUserCommandInput;
      output: UpdateAppInstanceUserCommandOutput;
    };
  };
}
