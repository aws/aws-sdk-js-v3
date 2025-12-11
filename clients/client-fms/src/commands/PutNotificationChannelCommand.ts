// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import type { PutNotificationChannelRequest } from "../models/models_0";
import { PutNotificationChannel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutNotificationChannelCommand}.
 */
export interface PutNotificationChannelCommandInput extends PutNotificationChannelRequest {}
/**
 * @public
 *
 * The output of {@link PutNotificationChannelCommand}.
 */
export interface PutNotificationChannelCommandOutput extends __MetadataBearer {}

/**
 * <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that
 *       Firewall Manager uses to record SNS logs.</p>
 *          <p>To perform this action outside of the console, you must first configure the SNS topic's access policy to allow the <code>SnsRoleName</code> to publish SNS logs. If the <code>SnsRoleName</code> provided is a role other than the <code>AWSServiceRoleForFMS</code> service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal <code>fms.amazonaws.com</code> to assume this role. For information about configuring an SNS access policy, see
 *       <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a> in the <i>Firewall Manager Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutNotificationChannelCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutNotificationChannelCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // PutNotificationChannelRequest
 *   SnsTopicArn: "STRING_VALUE", // required
 *   SnsRoleName: "STRING_VALUE", // required
 * };
 * const command = new PutNotificationChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutNotificationChannelCommandInput - {@link PutNotificationChannelCommandInput}
 * @returns {@link PutNotificationChannelCommandOutput}
 * @see {@link PutNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link PutNotificationChannelCommandOutput} for command's `response` shape.
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
export class PutNotificationChannelCommand extends $Command
  .classBuilder<
    PutNotificationChannelCommandInput,
    PutNotificationChannelCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "PutNotificationChannel", {})
  .n("FMSClient", "PutNotificationChannelCommand")
  .sc(PutNotificationChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutNotificationChannelRequest;
      output: {};
    };
    sdk: {
      input: PutNotificationChannelCommandInput;
      output: PutNotificationChannelCommandOutput;
    };
  };
}
