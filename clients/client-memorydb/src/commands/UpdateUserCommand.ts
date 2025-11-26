// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import type { UpdateUserRequest, UpdateUserResponse } from "../models/models_0";
import { UpdateUser } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Changes user password(s) and/or access string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, UpdateUserCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, UpdateUserCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // UpdateUserRequest
 *   UserName: "STRING_VALUE", // required
 *   AuthenticationMode: { // AuthenticationMode
 *     Type: "password" || "iam",
 *     Passwords: [ // PasswordListInput
 *       "STRING_VALUE",
 *     ],
 *   },
 *   AccessString: "STRING_VALUE",
 * };
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserResponse
 * //   User: { // User
 * //     Name: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     AccessString: "STRING_VALUE",
 * //     ACLNames: [ // ACLNameList
 * //       "STRING_VALUE",
 * //     ],
 * //     MinimumEngineVersion: "STRING_VALUE",
 * //     Authentication: { // Authentication
 * //       Type: "password" || "no-password" || "iam",
 * //       PasswordCount: Number("int"),
 * //     },
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateUserCommandInput - {@link UpdateUserCommandInput}
 * @returns {@link UpdateUserCommandOutput}
 * @see {@link UpdateUserCommandInput} for command's `input` shape.
 * @see {@link UpdateUserCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
 *
 * @throws {@link InvalidUserStateFault} (client fault)
 *  <p>The user is not in a valid state for the requested operation.</p>
 *
 * @throws {@link UserNotFoundFault} (client fault)
 *  <p>The specified user does not exist.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class UpdateUserCommand extends $Command
  .classBuilder<
    UpdateUserCommandInput,
    UpdateUserCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "UpdateUser", {})
  .n("MemoryDBClient", "UpdateUserCommand")
  .sc(UpdateUser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserRequest;
      output: UpdateUserResponse;
    };
    sdk: {
      input: UpdateUserCommandInput;
      output: UpdateUserCommandOutput;
    };
  };
}
