// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateContactWithUserRequest, AssociateContactWithUserResponse } from "../models/models_0";
import { AssociateContactWithUser } from "../schemas/schemas_0";

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
 *                <p>Programmatically assign queued contacts to available users.</p>
 *             </li>
 *             <li>
 *                <p>Leverage the IAM context key <code>connect:PreferredUserArn</code> to restrict contact association to specific
 *      preferred user.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Important things to know</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Use this API with chat, email, and task contacts. It does not support voice contacts.</p>
 *             </li>
 *             <li>
 *                <p>Use it to associate contacts with users regardless of their current state, including custom states. Ensure
 *      your application logic accounts for user availability before making associations.</p>
 *             </li>
 *             <li>
 *                <p>It honors the IAM context key <code>connect:PreferredUserArn</code> to prevent unauthorized contact
 *      associations.</p>
 *             </li>
 *             <li>
 *                <p>It respects the IAM context key <code>connect:PreferredUserArn</code> to enforce authorization controls and
 *      prevent unauthorized contact associations. Verify that your IAM policies are properly configured to support your
 *      intended use cases.</p>
 *             </li>
 *             <li>
 *                <p>The service quota <i>Queues per routing profile per instance</i> applies to manually assigned
 *      queues, too. For more information about this quota, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#connect-quotas">Amazon Connect
 *       quotas</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Endpoints</b>: See <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect endpoints and quotas</a>.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "AssociateContactWithUser", {})
  .n("ConnectClient", "AssociateContactWithUserCommand")
  .sc(AssociateContactWithUser)
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
