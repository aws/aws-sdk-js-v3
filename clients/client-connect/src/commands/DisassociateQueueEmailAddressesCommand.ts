// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateQueueEmailAddressesRequest } from "../models/models_1";
import { DisassociateQueueEmailAddresses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateQueueEmailAddressesCommand}.
 */
export interface DisassociateQueueEmailAddressesCommandInput extends DisassociateQueueEmailAddressesRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateQueueEmailAddressesCommand}.
 */
export interface DisassociateQueueEmailAddressesCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the association between a set of email addresses and a queue. After disassociation, agents will no longer be able to select these email addresses as "From" addresses when replying to inbound email contacts or initiating outbound email contacts in this queue.</p>
 *          <p>
 *             <b>Important things to know</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Agents will no longer see these email addresses in their "From" address selection options for this queue.</p>
 *             </li>
 *             <li>
 *                <p>The email addresses themselves are not deleted from the instance, only their availability for agent selection in this queue is removed.</p>
 *             </li>
 *             <li>
 *                <p>Changes take effect immediately and will affect the agent experience in the Contact Control Panel (CCP).</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateQueueEmailAddressesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateQueueEmailAddressesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DisassociateQueueEmailAddressesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE", // required
 *   EmailAddressesId: [ // EmailAddressIdList // required
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateQueueEmailAddressesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateQueueEmailAddressesCommandInput - {@link DisassociateQueueEmailAddressesCommandInput}
 * @returns {@link DisassociateQueueEmailAddressesCommandOutput}
 * @see {@link DisassociateQueueEmailAddressesCommandInput} for command's `input` shape.
 * @see {@link DisassociateQueueEmailAddressesCommandOutput} for command's `response` shape.
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
export class DisassociateQueueEmailAddressesCommand extends $Command
  .classBuilder<
    DisassociateQueueEmailAddressesCommandInput,
    DisassociateQueueEmailAddressesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DisassociateQueueEmailAddresses", {})
  .n("ConnectClient", "DisassociateQueueEmailAddressesCommand")
  .sc(DisassociateQueueEmailAddresses$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateQueueEmailAddressesRequest;
      output: {};
    };
    sdk: {
      input: DisassociateQueueEmailAddressesCommandInput;
      output: DisassociateQueueEmailAddressesCommandOutput;
    };
  };
}
