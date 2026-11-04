// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUserIdentityInfoRequest } from "../models/models_4";
import { UpdateUserIdentityInfo$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateUserIdentityInfoCommand}.
 */
export interface UpdateUserIdentityInfoCommandInput extends UpdateUserIdentityInfoRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserIdentityInfoCommand}.
 */
export interface UpdateUserIdentityInfoCommandOutput extends __MetadataBearer {}

/**
 * Updates the identity information for the specified user.
 *
 * > **Important:** We strongly recommend limiting who has the ability to invoke `UpdateUserIdentityInfo`. Someone with that ability can change the login credentials of other users by changing their email address. This poses a security risk to your organization. They can change the email address of a user to the attacker's email address, and then reset the password through email. For more information, see [Best Practices for Security Profiles](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html) in the *Connect Customer Administrator Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserIdentityInfoCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserIdentityInfoCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserIdentityInfoRequest
 *   IdentityInfo: { // UserIdentityInfo
 *     FirstName: "STRING_VALUE",
 *     LastName: "STRING_VALUE",
 *     Email: "STRING_VALUE",
 *     SecondaryEmail: "STRING_VALUE",
 *     Mobile: "STRING_VALUE",
 *   },
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new UpdateUserIdentityInfoCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserIdentityInfoCommandInput - {@link UpdateUserIdentityInfoCommandInput}
 * @returns {@link UpdateUserIdentityInfoCommandOutput}
 * @see {@link UpdateUserIdentityInfoCommandInput} for command's `input` shape.
 * @see {@link UpdateUserIdentityInfoCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateUserIdentityInfoCommand extends command<UpdateUserIdentityInfoCommandInput, UpdateUserIdentityInfoCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUserIdentityInfo",
  UpdateUserIdentityInfo$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserIdentityInfoRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserIdentityInfoCommandInput;
      output: UpdateUserIdentityInfoCommandOutput;
    };
  };
}
