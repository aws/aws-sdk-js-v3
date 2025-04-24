// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { TransferContactRequest, TransferContactResponse } from "../models/models_2";
import { de_TransferContactCommand, se_TransferContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TransferContactCommand}.
 */
export interface TransferContactCommandInput extends TransferContactRequest {}
/**
 * @public
 *
 * The output of {@link TransferContactCommand}.
 */
export interface TransferContactCommandOutput extends TransferContactResponse, __MetadataBearer {}

/**
 * <p>Transfers <code>TASK</code> or <code>EMAIL</code>
 *     contacts from one agent or queue to another agent or queue at any point
 *    after a contact is created. You can transfer a contact to another queue by providing the flow
 *    which orchestrates the contact to the destination queue. This gives you more control over contact
 *    handling and helps you adhere to the service level agreement (SLA) guaranteed to your
 *    customers.</p>
 *          <p>Note the following requirements:</p>
 *          <ul>
 *             <li>
 *                <p>Transfer is only supported for <code>TASK</code> and <code>EMAIL</code> contacts.</p>
 *             </li>
 *             <li>
 *                <p>Do not use both <code>QueueId</code> and <code>UserId</code> in the same call.</p>
 *             </li>
 *             <li>
 *                <p>The following flow types are supported: Inbound flow, Transfer to agent flow, and Transfer
 *      to queue flow.</p>
 *             </li>
 *             <li>
 *                <p>The <code>TransferContact</code> API can be called only on active contacts.</p>
 *             </li>
 *             <li>
 *                <p>A contact cannot be transferred more than 11 times.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, TransferContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, TransferContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // TransferContactRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE",
 *   UserId: "STRING_VALUE",
 *   ContactFlowId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new TransferContactCommand(input);
 * const response = await client.send(command);
 * // { // TransferContactResponse
 * //   ContactId: "STRING_VALUE",
 * //   ContactArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TransferContactCommandInput - {@link TransferContactCommandInput}
 * @returns {@link TransferContactCommandOutput}
 * @see {@link TransferContactCommandInput} for command's `input` shape.
 * @see {@link TransferContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link IdempotencyException} (client fault)
 *  <p>An entity with the same name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
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
export class TransferContactCommand extends $Command
  .classBuilder<
    TransferContactCommandInput,
    TransferContactCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "TransferContact", {})
  .n("ConnectClient", "TransferContactCommand")
  .f(void 0, void 0)
  .ser(se_TransferContactCommand)
  .de(de_TransferContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TransferContactRequest;
      output: TransferContactResponse;
    };
    sdk: {
      input: TransferContactCommandInput;
      output: TransferContactCommandOutput;
    };
  };
}
