// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetNotificationChannelRequest, GetNotificationChannelResponse } from "../models/models_0";
import { de_GetNotificationChannelCommand, se_GetNotificationChannelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNotificationChannelCommand}.
 */
export interface GetNotificationChannelCommandInput extends GetNotificationChannelRequest {}
/**
 * @public
 *
 * The output of {@link GetNotificationChannelCommand}.
 */
export interface GetNotificationChannelCommandOutput extends GetNotificationChannelResponse, __MetadataBearer {}

/**
 * <p>Information
 *       about the Amazon Simple Notification Service (SNS) topic that is used to
 *       record Firewall Manager SNS logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetNotificationChannelCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetNotificationChannelCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = {};
 * const command = new GetNotificationChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetNotificationChannelResponse
 * //   SnsTopicArn: "STRING_VALUE",
 * //   SnsRoleName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetNotificationChannelCommandInput - {@link GetNotificationChannelCommandInput}
 * @returns {@link GetNotificationChannelCommandOutput}
 * @see {@link GetNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link GetNotificationChannelCommandOutput} for command's `response` shape.
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
export class GetNotificationChannelCommand extends $Command
  .classBuilder<
    GetNotificationChannelCommandInput,
    GetNotificationChannelCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSFMS_20180101", "GetNotificationChannel", {})
  .n("FMSClient", "GetNotificationChannelCommand")
  .f(void 0, void 0)
  .ser(se_GetNotificationChannelCommand)
  .de(de_GetNotificationChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetNotificationChannelResponse;
    };
    sdk: {
      input: GetNotificationChannelCommandInput;
      output: GetNotificationChannelCommandOutput;
    };
  };
}
