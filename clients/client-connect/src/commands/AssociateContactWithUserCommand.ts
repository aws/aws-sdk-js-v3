// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateContactWithUserRequest, AssociateContactWithUserResponse } from "../models/models_0";
import { de_AssociateContactWithUserCommand, se_AssociateContactWithUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Associates a queued contact with an agent.</p>
 *          <p>
 *             <b>Use cases</b>
 *          </p>
 *          <p>Following are common uses cases for this API:</p>
 *          <ul>
 *             <li>
 *                <p>Custom contact routing. You can build custom contact routing mechanisms beyond the default
 *      system routing in Amazon Connect. You can create tailored contact distribution logic that
 *      offers queued contacts directly to specific agents.</p>
 *             </li>
 *             <li>
 *                <p>Manual contact assignment. You can programmatically assign queued contacts to available users. This
 *      provides flexibility to contact centers that require manual oversight or specialized routing
 *      workflows outside of standard queue management.</p>
 *                <p>For information about how manual contact assignment works in the agent workspace, see the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/worklist-app.html">Access the Worklist app in the Amazon Connect agent workspace</a> in the <i>Amazon Connect Administrator
 *         Guide</i>. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Important things to know</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Use this API chat/SMS, email, and task contacts. It does not support voice
 *      contacts.</p>
 *             </li>
 *             <li>
 *                <p>Use it to associate contacts with users regardless of their current state, including
 *      custom states. Ensure your application logic accounts for user availability before making
 *      associations.</p>
 *             </li>
 *             <li>
 *                <p>It honors the IAM context key <code>connect:PreferredUserArn</code> to prevent
 *      unauthorized contact associations.</p>
 *             </li>
 *             <li>
 *                <p>It respects the IAM context key <code>connect:PreferredUserArn</code> to enforce
 *      authorization controls and prevent unauthorized contact associations. Verify that your IAM
 *      policies are properly configured to support your intended use cases.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Endpoints</b>: See <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect endpoints and
 *    quotas</a>.</p>
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
export class AssociateContactWithUserCommand extends $Command
  .classBuilder<
    AssociateContactWithUserCommandInput,
    AssociateContactWithUserCommandOutput,
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
  .s("AmazonConnectService", "AssociateContactWithUser", {})
  .n("ConnectClient", "AssociateContactWithUserCommand")
  .f(void 0, void 0)
  .ser(se_AssociateContactWithUserCommand)
  .de(de_AssociateContactWithUserCommand)
  .build() {
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
