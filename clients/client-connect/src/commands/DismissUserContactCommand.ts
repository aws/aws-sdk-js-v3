// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DismissUserContactRequest, DismissUserContactResponse } from "../models/models_1";
import { de_DismissUserContactCommand, se_DismissUserContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DismissUserContactCommand}.
 */
export interface DismissUserContactCommandInput extends DismissUserContactRequest {}
/**
 * @public
 *
 * The output of {@link DismissUserContactCommand}.
 */
export interface DismissUserContactCommandOutput extends DismissUserContactResponse, __MetadataBearer {}

/**
 * <p>Dismisses contacts from an agent’s CCP and returns the agent to an available state, which
 *    allows the agent to receive a new routed contact. Contacts can only be dismissed if they are in a
 *     <code>MISSED</code>, <code>ERROR</code>, <code>ENDED</code>, or <code>REJECTED</code> state in
 *    the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">Agent
 *     Event Stream</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DismissUserContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DismissUserContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DismissUserContactRequest
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 * };
 * const command = new DismissUserContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DismissUserContactCommandInput - {@link DismissUserContactCommandInput}
 * @returns {@link DismissUserContactCommandOutput}
 * @see {@link DismissUserContactCommandInput} for command's `input` shape.
 * @see {@link DismissUserContactCommandOutput} for command's `response` shape.
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
export class DismissUserContactCommand extends $Command
  .classBuilder<
    DismissUserContactCommandInput,
    DismissUserContactCommandOutput,
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
  .s("AmazonConnectService", "DismissUserContact", {})
  .n("ConnectClient", "DismissUserContactCommand")
  .f(void 0, void 0)
  .ser(se_DismissUserContactCommand)
  .de(de_DismissUserContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DismissUserContactRequest;
      output: {};
    };
    sdk: {
      input: DismissUserContactCommandInput;
      output: DismissUserContactCommandOutput;
    };
  };
}
