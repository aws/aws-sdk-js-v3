// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEndpointResponse, CreatePlatformEndpointInput } from "../models/models_0";
import { CreatePlatformEndpoint } from "../schemas/schemas_3_Platform";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePlatformEndpointCommand}.
 */
export interface CreatePlatformEndpointCommandInput extends CreatePlatformEndpointInput {}
/**
 * @public
 *
 * The output of {@link CreatePlatformEndpointCommand}.
 */
export interface CreatePlatformEndpointCommandOutput extends CreateEndpointResponse, __MetadataBearer {}

/**
 * <p>Creates an endpoint for a device and mobile app on one of the supported push
 *             notification services, such as GCM (Firebase Cloud Messaging) and APNS.
 *                 <code>CreatePlatformEndpoint</code> requires the <code>PlatformApplicationArn</code>
 *             that is returned from <code>CreatePlatformApplication</code>. You can use the returned
 *                 <code>EndpointArn</code> to send a message to a mobile app or by the
 *                 <code>Subscribe</code> action for subscription to a topic. The
 *                 <code>CreatePlatformEndpoint</code> action is idempotent, so if the requester
 *             already owns an endpoint with the same device token and attributes, that endpoint's ARN
 *             is returned without creating a new endpoint. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *                 Notifications</a>. </p>
 *          <p>When using <code>CreatePlatformEndpoint</code> with Baidu, two attributes must be
 *             provided: ChannelId and UserId. The token field must also contain the ChannelId. For
 *             more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushBaiduEndpoint.html">Creating an Amazon SNS Endpoint for
 *                 Baidu</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CreatePlatformEndpointCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreatePlatformEndpointCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // CreatePlatformEndpointInput
 *   PlatformApplicationArn: "STRING_VALUE", // required
 *   Token: "STRING_VALUE", // required
 *   CustomUserData: "STRING_VALUE",
 *   Attributes: { // MapStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePlatformEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateEndpointResponse
 * //   EndpointArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePlatformEndpointCommandInput - {@link CreatePlatformEndpointCommandInput}
 * @returns {@link CreatePlatformEndpointCommandOutput}
 * @see {@link CreatePlatformEndpointCommandInput} for command's `input` shape.
 * @see {@link CreatePlatformEndpointCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class CreatePlatformEndpointCommand extends $Command
  .classBuilder<
    CreatePlatformEndpointCommandInput,
    CreatePlatformEndpointCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSimpleNotificationService", "CreatePlatformEndpoint", {})
  .n("SNSClient", "CreatePlatformEndpointCommand")
  .sc(CreatePlatformEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePlatformEndpointInput;
      output: CreateEndpointResponse;
    };
    sdk: {
      input: CreatePlatformEndpointCommandInput;
      output: CreatePlatformEndpointCommandOutput;
    };
  };
}
