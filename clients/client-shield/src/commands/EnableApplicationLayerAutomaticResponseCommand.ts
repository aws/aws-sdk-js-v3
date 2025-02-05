// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  EnableApplicationLayerAutomaticResponseRequest,
  EnableApplicationLayerAutomaticResponseResponse,
} from "../models/models_0";
import {
  de_EnableApplicationLayerAutomaticResponseCommand,
  se_EnableApplicationLayerAutomaticResponseCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableApplicationLayerAutomaticResponseCommand}.
 */
export interface EnableApplicationLayerAutomaticResponseCommandInput
  extends EnableApplicationLayerAutomaticResponseRequest {}
/**
 * @public
 *
 * The output of {@link EnableApplicationLayerAutomaticResponseCommand}.
 */
export interface EnableApplicationLayerAutomaticResponseCommandOutput
  extends EnableApplicationLayerAutomaticResponseResponse,
    __MetadataBearer {}

/**
 * <p>Enable the Shield Advanced automatic application layer DDoS mitigation for the protected resource. </p>
 *          <note>
 *             <p>This feature is available for Amazon CloudFront distributions and Application Load Balancers only.</p>
 *          </note>
 *          <p>This causes Shield Advanced to create, verify, and apply WAF rules for DDoS attacks that it detects for the
 *        resource. Shield Advanced applies the rules in a Shield rule group inside the web ACL that you've associated
 *            with the resource. For information about how automatic mitigation works and the requirements for using it, see
 *    <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-automatic-app-layer-response.html">Shield Advanced automatic application layer DDoS mitigation</a>.</p>
 *          <note>
 *             <p>Don't use this action to make changes to automatic mitigation settings when it's already enabled for a resource. Instead, use <a>UpdateApplicationLayerAutomaticResponse</a>.</p>
 *          </note>
 *          <p>To use this feature, you must associate a web ACL with the protected resource. The web ACL must be created using the latest version of WAF (v2). You can associate the web ACL through the Shield Advanced console
 *            at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information,
 *                see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a>. You can also associate the web ACL to the resource through the WAF console or the WAF API, but you must manage Shield Advanced automatic mitigation through Shield Advanced. For information about WAF, see
 *        <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, EnableApplicationLayerAutomaticResponseCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, EnableApplicationLayerAutomaticResponseCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ShieldClient(config);
 * const input = { // EnableApplicationLayerAutomaticResponseRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Action: { // ResponseAction
 *     Block: {},
 *     Count: {},
 *   },
 * };
 * const command = new EnableApplicationLayerAutomaticResponseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableApplicationLayerAutomaticResponseCommandInput - {@link EnableApplicationLayerAutomaticResponseCommandInput}
 * @returns {@link EnableApplicationLayerAutomaticResponseCommandOutput}
 * @see {@link EnableApplicationLayerAutomaticResponseCommandInput} for command's `input` shape.
 * @see {@link EnableApplicationLayerAutomaticResponseCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>Exception that indicates that the operation would not cause any change to occur.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link LimitsExceededException} (client fault)
 *  <p>Exception that indicates that the operation would exceed a limit.</p>
 *
 * @throws {@link OptimisticLockException} (client fault)
 *  <p>Exception that indicates that the resource state has been modified by another
 *          client. Retrieve the resource and then retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 * @public
 */
export class EnableApplicationLayerAutomaticResponseCommand extends $Command
  .classBuilder<
    EnableApplicationLayerAutomaticResponseCommandInput,
    EnableApplicationLayerAutomaticResponseCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShield_20160616", "EnableApplicationLayerAutomaticResponse", {})
  .n("ShieldClient", "EnableApplicationLayerAutomaticResponseCommand")
  .f(void 0, void 0)
  .ser(se_EnableApplicationLayerAutomaticResponseCommand)
  .de(de_EnableApplicationLayerAutomaticResponseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableApplicationLayerAutomaticResponseRequest;
      output: {};
    };
    sdk: {
      input: EnableApplicationLayerAutomaticResponseCommandInput;
      output: EnableApplicationLayerAutomaticResponseCommandOutput;
    };
  };
}
