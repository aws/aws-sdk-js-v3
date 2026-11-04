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
 * Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the `UserName` and `ServerId` you specify.
 *
 * The response returns the `ServerId` and the `UserName` for the updated user.
 *
 * In the console, you can select *Restricted* when you create or update a user. This ensures that the user can't access anything outside of their home directory. The programmatic way to configure this behavior is to update the user. Set their `HomeDirectoryType` to `LOGICAL`, and specify `HomeDirectoryMappings` with `Entry` as root (`/`) and `Target` as their home directory.
 *
 * For example, if the user's home directory is `/test/admin-user`, the following command updates the user so that their configuration in the console shows the *Restricted* flag as selected.
 *
 * `aws transfer update-user --server-id <server-id> --user-name admin-user --home-directory-type LOGICAL --home-directory-mappings "[\{\"Entry\":\"/\", \"Target\":\"/test/admin-user\"\}]"`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateUserCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateUserCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // UpdateUserRequest
 *   HomeDirectory: "STRING_VALUE",
 *   HomeDirectoryType: "PATH" || "LOGICAL",
 *   HomeDirectoryMappings: [ // HomeDirectoryMappings
 *     { // HomeDirectoryMapEntry
 *       Entry: "STRING_VALUE", // required
 *       Target: "STRING_VALUE", // required
 *       Type: "FILE" || "DIRECTORY",
 *     },
 *   ],
 *   Policy: "STRING_VALUE",
 *   PosixProfile: { // PosixProfile
 *     Uid: Number("long"), // required
 *     Gid: Number("long"), // required
 *     SecondaryGids: [ // SecondaryGids
 *       Number("long"),
 *     ],
 *   },
 *   Role: "STRING_VALUE",
 *   ServerId: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE", // required
 * };
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserResponse
 * //   ServerId: "STRING_VALUE", // required
 * //   UserName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateUserCommandInput - {@link UpdateUserCommandInput}
 * @returns {@link UpdateUserCommandOutput}
 * @see {@link UpdateUserCommandInput} for command's `input` shape.
 * @see {@link UpdateUserCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * This exception is thrown when an error occurs in the Transfer Family service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed because the Amazon Web ServicesTransfer Family service is not available.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link TransferServiceException}
 *
 * Base exception class for all service exceptions from Transfer service.
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
      output: UpdateUserResponse;
    };
    sdk: {
      input: UpdateUserCommandInput;
      output: UpdateUserCommandOutput;
    };
  };
}
