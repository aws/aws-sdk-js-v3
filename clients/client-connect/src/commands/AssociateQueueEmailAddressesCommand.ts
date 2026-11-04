// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateQueueEmailAddressesRequest } from "../models/models_0";
import { AssociateQueueEmailAddresses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateQueueEmailAddressesCommand}.
 */
export interface AssociateQueueEmailAddressesCommandInput extends AssociateQueueEmailAddressesRequest {}
/**
 * @public
 *
 * The output of {@link AssociateQueueEmailAddressesCommand}.
 */
export interface AssociateQueueEmailAddressesCommandOutput extends __MetadataBearer {}

/**
 * Associates a set of email addresses with a queue to enable agents to select different "From" (system) email addresses when replying to inbound email contacts or initiating outbound email contacts. This allows agents to handle email contacts across different brands and business units within the same queue.
 *
 * **Important things to know**
 *
 * - You can associate up to 49 additional email addresses with a single queue, plus 1 default outbound email address, for a total of 50.
 * - The email addresses must already exist in the Connect Customer instance before they can be associated with a queue.
 * - Agents will be able to select from these associated email addresses when handling email contacts in the queue.
 * - For inbound email contacts, agents can select from email addresses associated with the queue where the contact was accepted.
 * - For outbound email contacts, agents can select from email addresses associated with their default outbound queue configured in their routing profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateQueueEmailAddressesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateQueueEmailAddressesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateQueueEmailAddressesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE", // required
 *   EmailAddressesConfig: [ // EmailAddressConfigList // required
 *     { // EmailAddressConfig
 *       EmailAddressId: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new AssociateQueueEmailAddressesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateQueueEmailAddressesCommandInput - {@link AssociateQueueEmailAddressesCommandInput}
 * @returns {@link AssociateQueueEmailAddressesCommandOutput}
 * @see {@link AssociateQueueEmailAddressesCommandInput} for command's `input` shape.
 * @see {@link AssociateQueueEmailAddressesCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
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
export class AssociateQueueEmailAddressesCommand extends command<AssociateQueueEmailAddressesCommandInput, AssociateQueueEmailAddressesCommandOutput>(
  _ep0,
  _mw0,
  "AssociateQueueEmailAddresses",
  AssociateQueueEmailAddresses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateQueueEmailAddressesRequest;
      output: {};
    };
    sdk: {
      input: AssociateQueueEmailAddressesCommandInput;
      output: AssociateQueueEmailAddressesCommandOutput;
    };
  };
}
