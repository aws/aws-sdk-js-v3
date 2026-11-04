// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateContactWithUserRequest, AssociateContactWithUserResponse } from "../models/models_0";
import { AssociateContactWithUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateContactWithUserCommand}.
 */
export interface AssociateContactWithUserCommandInput extends AssociateContactWithUserRequest {}
/**
 * @public
 *
 * The output of {@link AssociateContactWithUserCommand}.
 */
export interface AssociateContactWithUserCommandOutput extends AssociateContactWithUserResponse, __MetadataBearer {}

/**
 * Associates a queued contact with an agent.
 *
 * **Use cases**
 *
 * Following are common uses cases for this API:
 *
 * - Programmatically assign queued contacts to available users.
 * - Leverage the IAM context key `connect:PreferredUserArn` to restrict contact association to specific preferred user.
 *
 * **Important things to know**
 *
 * - Use this API with chat, email, task, and voice contacts. For voice callbacks, this API does not support customer-first mode.
 * - This API can be used to offer a contact to an agent even if the agent is currently at maximum concurrency for the channel.
 * - Use it to associate contacts with users regardless of their current state, including custom states. Ensure your application logic accounts for user availability before making associations.
 * - It honors the IAM context key `connect:PreferredUserArn` to prevent unauthorized contact associations.
 * - It respects the IAM context key `connect:PreferredUserArn` to enforce authorization controls and prevent unauthorized contact associations. Verify that your IAM policies are properly configured to support your intended use cases.
 * - The service quota *Queues per routing profile per instance* applies to manually assigned queues, too. For more information about this quota, see [Connect Customer quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#connect-quotas) in the *Connect Customer Administrator Guide*.
 *
 * **Endpoints**: See [Connect Customer endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/connect_region.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateContactWithUserCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateContactWithUserCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateContactWithUserRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 * };
 * const command = new AssociateContactWithUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateContactWithUserCommandInput - {@link AssociateContactWithUserCommandInput}
 * @returns {@link AssociateContactWithUserCommandOutput}
 * @see {@link AssociateContactWithUserCommandInput} for command's `input` shape.
 * @see {@link AssociateContactWithUserCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
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
export class AssociateContactWithUserCommand extends command<AssociateContactWithUserCommandInput, AssociateContactWithUserCommandOutput>(
  _ep0,
  _mw0,
  "AssociateContactWithUser",
  AssociateContactWithUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateContactWithUserRequest;
      output: {};
    };
    sdk: {
      input: AssociateContactWithUserCommandInput;
      output: AssociateContactWithUserCommandOutput;
    };
  };
}
