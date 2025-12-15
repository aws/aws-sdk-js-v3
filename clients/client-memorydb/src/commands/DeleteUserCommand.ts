// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import type { DeleteUserRequest, DeleteUserResponse } from "../models/models_0";
import { DeleteUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserCommand}.
 */
export interface DeleteUserCommandInput extends DeleteUserRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserCommand}.
 */
export interface DeleteUserCommandOutput extends DeleteUserResponse, __MetadataBearer {}

/**
 * <p>Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DeleteUserCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DeleteUserCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // DeleteUserRequest
 *   UserName: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserCommand(input);
 * const response = await client.send(command);
 * // { // DeleteUserResponse
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
 * @param DeleteUserCommandInput - {@link DeleteUserCommandInput}
 * @returns {@link DeleteUserCommandOutput}
 * @see {@link DeleteUserCommandInput} for command's `input` shape.
 * @see {@link DeleteUserCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
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
export class DeleteUserCommand extends $Command
  .classBuilder<
    DeleteUserCommandInput,
    DeleteUserCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "DeleteUser", {})
  .n("MemoryDBClient", "DeleteUserCommand")
  .sc(DeleteUser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserRequest;
      output: DeleteUserResponse;
    };
    sdk: {
      input: DeleteUserCommandInput;
      output: DeleteUserCommandOutput;
    };
  };
}
