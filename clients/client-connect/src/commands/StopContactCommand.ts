// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopContactRequest, StopContactResponse } from "../models/models_2";
import { de_StopContactCommand, se_StopContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopContactCommand}.
 */
export interface StopContactCommandInput extends StopContactRequest {}
/**
 * @public
 *
 * The output of {@link StopContactCommand}.
 */
export interface StopContactCommandOutput extends StopContactResponse, __MetadataBearer {}

/**
 * <p>Ends the specified contact. Use this API to stop queued callbacks. It does not work for
 *    voice contacts that use the following initiation methods:</p>
 *          <ul>
 *             <li>
 *                <p>DISCONNECT</p>
 *             </li>
 *             <li>
 *                <p>TRANSFER</p>
 *             </li>
 *             <li>
 *                <p>QUEUE_TRANSFER</p>
 *             </li>
 *             <li>
 *                <p>EXTERNAL_OUTBOUND</p>
 *             </li>
 *             <li>
 *                <p>MONITOR</p>
 *             </li>
 *          </ul>
 *          <p>Chat and task contacts can be terminated in any state, regardless of initiation
 *    method.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StopContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StopContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // StopContactRequest
 *   ContactId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   DisconnectReason: { // DisconnectReason
 *     Code: "STRING_VALUE",
 *   },
 * };
 * const command = new StopContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopContactCommandInput - {@link StopContactCommandInput}
 * @returns {@link StopContactCommandOutput}
 * @see {@link StopContactCommandInput} for command's `input` shape.
 * @see {@link StopContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link ContactNotFoundException} (client fault)
 *  <p>The contact with the specified ID is not active or does not exist. Applies to Voice calls
 *    only, not to Chat or Task contacts.</p>
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
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class StopContactCommand extends $Command
  .classBuilder<
    StopContactCommandInput,
    StopContactCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "StopContact", {})
  .n("ConnectClient", "StopContactCommand")
  .f(void 0, void 0)
  .ser(se_StopContactCommand)
  .de(de_StopContactCommand)
  .build() {}
