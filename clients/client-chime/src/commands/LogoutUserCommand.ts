// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { LogoutUserRequest, LogoutUserResponse } from "../models/models_0";
import { LogoutUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link LogoutUserCommand}.
 */
export interface LogoutUserCommandInput extends LogoutUserRequest {}
/**
 * @public
 *
 * The output of {@link LogoutUserCommand}.
 */
export interface LogoutUserCommandOutput extends LogoutUserResponse, __MetadataBearer {}

/**
 * Logs out the specified user from all of the devices they are currently logged into.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, LogoutUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, LogoutUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // LogoutUserRequest
 *   AccountId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 * };
 * const command = new LogoutUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param LogoutUserCommandInput - {@link LogoutUserCommandInput}
 * @returns {@link LogoutUserCommandOutput}
 * @see {@link LogoutUserCommandInput} for command's `input` shape.
 * @see {@link LogoutUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
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
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
 *
 * @public
 */
export class LogoutUserCommand extends command<LogoutUserCommandInput, LogoutUserCommandOutput>(
  _ep0,
  _mw0,
  "LogoutUser",
  LogoutUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: LogoutUserRequest;
      output: {};
    };
    sdk: {
      input: LogoutUserCommandInput;
      output: LogoutUserCommandOutput;
    };
  };
}
