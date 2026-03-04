// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateQueueEmailAddressesRequest } from "../models/models_0";
import { AssociateQueueEmailAddresses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Associates a set of email addresses with a queue to enable agents to select different "From" (system) email addresses when replying to inbound email contacts or initiating outbound email contacts. This allows agents to handle email contacts across different brands and business units within the same queue.</p>
 *          <p>
 *             <b>Important things to know</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You can associate up to 49 additional email addresses with a single queue, plus 1 default outbound email address, for a total of 50.</p>
 *             </li>
 *             <li>
 *                <p>The email addresses must already exist in the Amazon Connect instance before they can be associated with a queue.</p>
 *             </li>
 *             <li>
 *                <p>Agents will be able to select from these associated email addresses when handling email contacts in the queue.</p>
 *             </li>
 *             <li>
 *                <p>For inbound email contacts, agents can select from email addresses associated with the queue where the contact was accepted.</p>
 *             </li>
 *             <li>
 *                <p>For outbound email contacts, agents can select from email addresses associated with their default outbound queue configured in their routing profile.</p>
 *             </li>
 *          </ul>
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
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class AssociateQueueEmailAddressesCommand extends $Command
  .classBuilder<
    AssociateQueueEmailAddressesCommandInput,
    AssociateQueueEmailAddressesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "AssociateQueueEmailAddresses", {})
  .n("ConnectClient", "AssociateQueueEmailAddressesCommand")
  .sc(AssociateQueueEmailAddresses$)
  .build() {
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
