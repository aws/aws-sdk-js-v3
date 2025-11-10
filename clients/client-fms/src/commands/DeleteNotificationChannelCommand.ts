// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { DeleteNotificationChannelRequest } from "../models/models_0";
import { DeleteNotificationChannel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNotificationChannelCommand}.
 */
export interface DeleteNotificationChannelCommandInput extends DeleteNotificationChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNotificationChannelCommand}.
 */
export interface DeleteNotificationChannelCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Firewall Manager association with the IAM role and the Amazon Simple
 *       Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DeleteNotificationChannelCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DeleteNotificationChannelCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = {};
 * const command = new DeleteNotificationChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNotificationChannelCommandInput - {@link DeleteNotificationChannelCommandInput}
 * @returns {@link DeleteNotificationChannelCommandOutput}
 * @see {@link DeleteNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 *
 * @public
 */
export class DeleteNotificationChannelCommand extends $Command
  .classBuilder<
    DeleteNotificationChannelCommandInput,
    DeleteNotificationChannelCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "DeleteNotificationChannel", {})
  .n("FMSClient", "DeleteNotificationChannelCommand")
  .sc(DeleteNotificationChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeleteNotificationChannelCommandInput;
      output: DeleteNotificationChannelCommandOutput;
    };
  };
}
