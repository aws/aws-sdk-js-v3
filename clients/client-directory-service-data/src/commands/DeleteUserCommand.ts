// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DirectoryServiceDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceDataClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteUserRequest, DeleteUserResult } from "../models/models_0";
import { de_DeleteUserCommand, se_DeleteUserCommand } from "../protocols/Aws_restJson1";

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
export interface DeleteUserCommandOutput extends DeleteUserResult, __MetadataBearer {}

/**
 * <p>Deletes a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceDataClient, DeleteUserCommand } from "@aws-sdk/client-directory-service-data"; // ES Modules import
 * // const { DirectoryServiceDataClient, DeleteUserCommand } = require("@aws-sdk/client-directory-service-data"); // CommonJS import
 * const client = new DirectoryServiceDataClient(config);
 * const input = { // DeleteUserRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   SAMAccountName: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserCommandInput - {@link DeleteUserCommandInput}
 * @returns {@link DeleteUserCommandOutput}
 * @see {@link DeleteUserCommandInput} for command's `input` shape.
 * @see {@link DeleteUserCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceDataClientResolvedConfig | config} for DirectoryServiceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permission to perform the request or access the directory. It can also
 *       occur when the <code>DirectoryId</code> doesn't exist or the user, member, or group might be
 *       outside of your organizational unit (OU). </p>
 *          <p> Make sure that you have the authentication and authorization to perform the action.
 *       Review the directory information in the request, and make sure that the object isn't outside
 *       of your OU. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> This error will occur when you try to create a resource that conflicts with an existing
 *       object. It can also occur when adding a member to a group that the member is already
 *       in.</p>
 *          <p> This error can be caused by a request sent within the 8-hour idempotency window with the
 *       same client token but different input parameters. Client tokens should not be re-used across
 *       different requests. After 8 hours, any request with the same client token is treated as a new
 *       request. </p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p> The request could not be completed due to a problem in the configuration or current state
 *       of the specified directory. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation didn't succeed because an internal error occurred. Try again later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource couldn't be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The limit on the number of requests per second has been exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request isn't valid. Review the details in the error message to update the invalid
 *       parameters or values in your request. </p>
 *
 * @throws {@link DirectoryServiceDataServiceException}
 * <p>Base exception class for all service exceptions from DirectoryServiceData service.</p>
 *
 *
 * @public
 */
export class DeleteUserCommand extends $Command
  .classBuilder<
    DeleteUserCommandInput,
    DeleteUserCommandOutput,
    DirectoryServiceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryServiceData", "DeleteUser", {})
  .n("DirectoryServiceDataClient", "DeleteUserCommand")
  .f(void 0, void 0)
  .ser(se_DeleteUserCommand)
  .de(de_DeleteUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserCommandInput;
      output: DeleteUserCommandOutput;
    };
  };
}
