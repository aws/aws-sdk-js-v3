// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePlatformApplicationInput } from "../models/models_0";
import { de_DeletePlatformApplicationCommand, se_DeletePlatformApplicationCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePlatformApplicationCommand}.
 */
export interface DeletePlatformApplicationCommandInput extends DeletePlatformApplicationInput {}
/**
 * @public
 *
 * The output of {@link DeletePlatformApplicationCommand}.
 */
export interface DeletePlatformApplicationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a platform application object for one of the supported push notification
 *             services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see
 *                 <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS
 *                 Mobile Push Notifications</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, DeletePlatformApplicationCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, DeletePlatformApplicationCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // DeletePlatformApplicationInput
 *   PlatformApplicationArn: "STRING_VALUE", // required
 * };
 * const command = new DeletePlatformApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePlatformApplicationCommandInput - {@link DeletePlatformApplicationCommandInput}
 * @returns {@link DeletePlatformApplicationCommandOutput}
 * @see {@link DeletePlatformApplicationCommandInput} for command's `input` shape.
 * @see {@link DeletePlatformApplicationCommandOutput} for command's `response` shape.
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
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 * @public
 */
export class DeletePlatformApplicationCommand extends $Command
  .classBuilder<
    DeletePlatformApplicationCommandInput,
    DeletePlatformApplicationCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSimpleNotificationService", "DeletePlatformApplication", {})
  .n("SNSClient", "DeletePlatformApplicationCommand")
  .f(void 0, void 0)
  .ser(se_DeletePlatformApplicationCommand)
  .de(de_DeletePlatformApplicationCommand)
  .build() {}
