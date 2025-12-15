// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociatePhoneNumberContactFlowRequest } from "../models/models_0";
import { AssociatePhoneNumberContactFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociatePhoneNumberContactFlowCommand}.
 */
export interface AssociatePhoneNumberContactFlowCommandInput extends AssociatePhoneNumberContactFlowRequest {}
/**
 * @public
 *
 * The output of {@link AssociatePhoneNumberContactFlowCommand}.
 */
export interface AssociatePhoneNumberContactFlowCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates a flow with a phone number claimed to your Amazon Connect instance.</p>
 *          <important>
 *             <p>If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the
 *      <code>PhoneNumberId</code> URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling
 *     this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a
 *     full phone number ARN. If a UUID is provided
 *     in
 *     this scenario, you will receive a <code>ResourceNotFoundException</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociatePhoneNumberContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociatePhoneNumberContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociatePhoneNumberContactFlowRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 * };
 * const command = new AssociatePhoneNumberContactFlowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociatePhoneNumberContactFlowCommandInput - {@link AssociatePhoneNumberContactFlowCommandInput}
 * @returns {@link AssociatePhoneNumberContactFlowCommandOutput}
 * @see {@link AssociatePhoneNumberContactFlowCommandInput} for command's `input` shape.
 * @see {@link AssociatePhoneNumberContactFlowCommandOutput} for command's `response` shape.
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
export class AssociatePhoneNumberContactFlowCommand extends $Command
  .classBuilder<
    AssociatePhoneNumberContactFlowCommandInput,
    AssociatePhoneNumberContactFlowCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "AssociatePhoneNumberContactFlow", {})
  .n("ConnectClient", "AssociatePhoneNumberContactFlowCommand")
  .sc(AssociatePhoneNumberContactFlow$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociatePhoneNumberContactFlowRequest;
      output: {};
    };
    sdk: {
      input: AssociatePhoneNumberContactFlowCommandInput;
      output: AssociatePhoneNumberContactFlowCommandOutput;
    };
  };
}
