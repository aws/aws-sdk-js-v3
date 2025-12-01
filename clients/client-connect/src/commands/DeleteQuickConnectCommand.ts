// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteQuickConnectRequest } from "../models/models_1";
import { DeleteQuickConnect } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteQuickConnectCommand}.
 */
export interface DeleteQuickConnectCommandInput extends DeleteQuickConnectRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQuickConnectCommand}.
 */
export interface DeleteQuickConnectCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a quick connect. </p>
 *          <important>
 *             <p>After calling <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteUser.html">DeleteUser</a>, it's important to call <code>DeleteQuickConnect</code> to delete any records related to the
 *     deleted users. This will help you:</p>
 *             <ul>
 *                <li>
 *                   <p>Avoid dangling resources that impact your service quotas.</p>
 *                </li>
 *                <li>
 *                   <p>Remove deleted users so they don't appear to agents as transfer options.</p>
 *                </li>
 *                <li>
 *                   <p>Avoid the disruption of other Amazon Connect processes, such as instance replication and syncing if
 *       you're using <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-connect-global-resiliency.html">Amazon Connect Global Resiliency</a>. </p>
 *                </li>
 *             </ul>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteQuickConnectCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteQuickConnectCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteQuickConnectRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QuickConnectId: "STRING_VALUE", // required
 * };
 * const command = new DeleteQuickConnectCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQuickConnectCommandInput - {@link DeleteQuickConnectCommandInput}
 * @returns {@link DeleteQuickConnectCommandOutput}
 * @see {@link DeleteQuickConnectCommandInput} for command's `input` shape.
 * @see {@link DeleteQuickConnectCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
export class DeleteQuickConnectCommand extends $Command
  .classBuilder<
    DeleteQuickConnectCommandInput,
    DeleteQuickConnectCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DeleteQuickConnect", {})
  .n("ConnectClient", "DeleteQuickConnectCommand")
  .sc(DeleteQuickConnect)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQuickConnectRequest;
      output: {};
    };
    sdk: {
      input: DeleteQuickConnectCommandInput;
      output: DeleteQuickConnectCommandOutput;
    };
  };
}
