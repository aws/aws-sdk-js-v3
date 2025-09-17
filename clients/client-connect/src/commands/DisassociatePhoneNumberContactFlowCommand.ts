// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociatePhoneNumberContactFlowRequest } from "../models/models_1";
import {
  de_DisassociatePhoneNumberContactFlowCommand,
  se_DisassociatePhoneNumberContactFlowCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociatePhoneNumberContactFlowCommand}.
 */
export interface DisassociatePhoneNumberContactFlowCommandInput extends DisassociatePhoneNumberContactFlowRequest {}
/**
 * @public
 *
 * The output of {@link DisassociatePhoneNumberContactFlowCommand}.
 */
export interface DisassociatePhoneNumberContactFlowCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the flow association from a phone number claimed to your Amazon Connect
 *    instance.</p>
 *          <important>
 *             <p>If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the
 *      Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number
 *     ARN or UUID value for the <code>PhoneNumberId</code> URI request parameter. However, if the
 *     number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate
 *      Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN.
 *     If a UUID is provided in this scenario, you will receive a
 *      <code>ResourceNotFoundException</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociatePhoneNumberContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociatePhoneNumberContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DisassociatePhoneNumberContactFlowRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new DisassociatePhoneNumberContactFlowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociatePhoneNumberContactFlowCommandInput - {@link DisassociatePhoneNumberContactFlowCommandInput}
 * @returns {@link DisassociatePhoneNumberContactFlowCommandOutput}
 * @see {@link DisassociatePhoneNumberContactFlowCommandInput} for command's `input` shape.
 * @see {@link DisassociatePhoneNumberContactFlowCommandOutput} for command's `response` shape.
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
export class DisassociatePhoneNumberContactFlowCommand extends $Command
  .classBuilder<
    DisassociatePhoneNumberContactFlowCommandInput,
    DisassociatePhoneNumberContactFlowCommandOutput,
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
  .s("AmazonConnectService", "DisassociatePhoneNumberContactFlow", {})
  .n("ConnectClient", "DisassociatePhoneNumberContactFlowCommand")
  .f(void 0, void 0)
  .ser(se_DisassociatePhoneNumberContactFlowCommand)
  .de(de_DisassociatePhoneNumberContactFlowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociatePhoneNumberContactFlowRequest;
      output: {};
    };
    sdk: {
      input: DisassociatePhoneNumberContactFlowCommandInput;
      output: DisassociatePhoneNumberContactFlowCommandOutput;
    };
  };
}
