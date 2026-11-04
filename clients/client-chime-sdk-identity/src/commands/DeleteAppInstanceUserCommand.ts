// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAppInstanceUserRequest } from "../models/models_0";
import { DeleteAppInstanceUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAppInstanceUserCommand}.
 */
export interface DeleteAppInstanceUserCommandInput extends DeleteAppInstanceUserRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppInstanceUserCommand}.
 */
export interface DeleteAppInstanceUserCommandOutput extends __MetadataBearer {}

/**
 * Deletes an `AppInstanceUser`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DeleteAppInstanceUserCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DeleteAppInstanceUserCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DeleteAppInstanceUserRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppInstanceUserCommandInput - {@link DeleteAppInstanceUserCommandInput}
 * @returns {@link DeleteAppInstanceUserCommandOutput}
 * @see {@link DeleteAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link DeleteAppInstanceUserCommandOutput} for command's `response` shape.
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
export class DeleteAppInstanceUserCommand extends command<DeleteAppInstanceUserCommandInput, DeleteAppInstanceUserCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAppInstanceUser",
  DeleteAppInstanceUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppInstanceUserRequest;
      output: {};
    };
    sdk: {
      input: DeleteAppInstanceUserCommandInput;
      output: DeleteAppInstanceUserCommandOutput;
    };
  };
}
