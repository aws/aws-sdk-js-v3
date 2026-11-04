// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddUserToGroupRequest } from "../models/models_0";
import { AddUserToGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddUserToGroupCommand}.
 */
export interface AddUserToGroupCommandInput extends AddUserToGroupRequest {}
/**
 * @public
 *
 * The output of {@link AddUserToGroupCommand}.
 */
export interface AddUserToGroupCommandOutput extends __MetadataBearer {}

/**
 * Adds the specified user to the specified group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AddUserToGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AddUserToGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // AddUserToGroupRequest
 *   GroupName: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE", // required
 * };
 * const command = new AddUserToGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddUserToGroupCommandInput - {@link AddUserToGroupCommandInput}
 * @returns {@link AddUserToGroupCommandOutput}
 * @see {@link AddUserToGroupCommandInput} for command's `input` shape.
 * @see {@link AddUserToGroupCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @example To add a user to an IAM group
 * ```javascript
 * // The following command adds an IAM user named Bob to the IAM group named Admins:
 * const input = {
 *   GroupName: "Admins",
 *   UserName: "Bob"
 * };
 * const command = new AddUserToGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AddUserToGroupCommand extends command<AddUserToGroupCommandInput, AddUserToGroupCommandOutput>(
  _ep0,
  _mw0,
  "AddUserToGroup",
  AddUserToGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddUserToGroupRequest;
      output: {};
    };
    sdk: {
      input: AddUserToGroupCommandInput;
      output: AddUserToGroupCommandOutput;
    };
  };
}
