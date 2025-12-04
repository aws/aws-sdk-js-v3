// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetIdentityNotificationAttributesRequest,
  GetIdentityNotificationAttributesResponse,
} from "../models/models_0";
import { GetIdentityNotificationAttributes } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityNotificationAttributesCommand}.
 */
export interface GetIdentityNotificationAttributesCommandInput extends GetIdentityNotificationAttributesRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityNotificationAttributesCommand}.
 */
export interface GetIdentityNotificationAttributesCommandOutput
  extends GetIdentityNotificationAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Given a list of verified identities (email addresses and/or domains), returns a
 *             structure describing identity notification attributes.</p>
 *          <p>This operation is throttled at one request per second and can only get notification
 *             attributes for up to 100 identities at a time.</p>
 *          <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html">Amazon SES
 *                 Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetIdentityNotificationAttributesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetIdentityNotificationAttributesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = { // GetIdentityNotificationAttributesRequest
 *   Identities: [ // IdentityList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetIdentityNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityNotificationAttributesResponse
 * //   NotificationAttributes: { // NotificationAttributes // required
 * //     "<keys>": { // IdentityNotificationAttributes
 * //       BounceTopic: "STRING_VALUE", // required
 * //       ComplaintTopic: "STRING_VALUE", // required
 * //       DeliveryTopic: "STRING_VALUE", // required
 * //       ForwardingEnabled: true || false, // required
 * //       HeadersInBounceNotificationsEnabled: true || false,
 * //       HeadersInComplaintNotificationsEnabled: true || false,
 * //       HeadersInDeliveryNotificationsEnabled: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdentityNotificationAttributesCommandInput - {@link GetIdentityNotificationAttributesCommandInput}
 * @returns {@link GetIdentityNotificationAttributesCommandOutput}
 * @see {@link GetIdentityNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link GetIdentityNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 *
 * @example GetIdentityNotificationAttributes
 * ```javascript
 * // The following example returns the notification attributes for an identity:
 * const input = {
 *   Identities: [
 *     "example.com"
 *   ]
 * };
 * const command = new GetIdentityNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NotificationAttributes: {
 *     example.com: {
 *       BounceTopic: "arn:aws:sns:us-east-1:EXAMPLE65304:ExampleTopic",
 *       ComplaintTopic: "arn:aws:sns:us-east-1:EXAMPLE65304:ExampleTopic",
 *       DeliveryTopic: "arn:aws:sns:us-east-1:EXAMPLE65304:ExampleTopic",
 *       ForwardingEnabled: true,
 *       HeadersInBounceNotificationsEnabled: false,
 *       HeadersInComplaintNotificationsEnabled: false,
 *       HeadersInDeliveryNotificationsEnabled: false
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetIdentityNotificationAttributesCommand extends $Command
  .classBuilder<
    GetIdentityNotificationAttributesCommandInput,
    GetIdentityNotificationAttributesCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService", "GetIdentityNotificationAttributes", {})
  .n("SESClient", "GetIdentityNotificationAttributesCommand")
  .sc(GetIdentityNotificationAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdentityNotificationAttributesRequest;
      output: GetIdentityNotificationAttributesResponse;
    };
    sdk: {
      input: GetIdentityNotificationAttributesCommandInput;
      output: GetIdentityNotificationAttributesCommandOutput;
    };
  };
}
