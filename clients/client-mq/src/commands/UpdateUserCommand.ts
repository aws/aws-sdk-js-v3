// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUserRequest, UpdateUserResponse } from "../models/models_0";
import { UpdateUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateUserCommand}.
 */
export interface UpdateUserCommandInput extends UpdateUserRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserCommand}.
 */
export interface UpdateUserCommandOutput extends UpdateUserResponse, __MetadataBearer {}

/**
 * <p>Updates the information for an ActiveMQ user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, UpdateUserCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, UpdateUserCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * // import type { MqClientConfig } from "@aws-sdk/client-mq";
 * const config = {}; // type is MqClientConfig
 * const client = new MqClient(config);
 * const input = { // UpdateUserRequest
 *   BrokerId: "STRING_VALUE", // required
 *   ConsoleAccess: true || false,
 *   Groups: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   Password: "STRING_VALUE",
 *   Username: "STRING_VALUE", // required
 *   ReplicationUser: true || false,
 * };
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserCommandInput - {@link UpdateUserCommandInput}
 * @returns {@link UpdateUserCommandOutput}
 * @see {@link UpdateUserCommandInput} for command's `input` shape.
 * @see {@link UpdateUserCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 *
 * @public
 */
export class UpdateUserCommand extends command<UpdateUserCommandInput, UpdateUserCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUser",
  UpdateUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserCommandInput;
      output: UpdateUserCommandOutput;
    };
  };
}
