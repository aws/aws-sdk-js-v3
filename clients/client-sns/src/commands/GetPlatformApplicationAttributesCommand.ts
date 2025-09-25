// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetPlatformApplicationAttributesInput, GetPlatformApplicationAttributesResponse } from "../models/models_0";
import { GetPlatformApplicationAttributes } from "../schemas/schemas_3_Platform";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPlatformApplicationAttributesCommand}.
 */
export interface GetPlatformApplicationAttributesCommandInput extends GetPlatformApplicationAttributesInput {}
/**
 * @public
 *
 * The output of {@link GetPlatformApplicationAttributesCommand}.
 */
export interface GetPlatformApplicationAttributesCommandOutput
  extends GetPlatformApplicationAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the attributes of the platform application object for the supported push
 *             notification services, such as APNS and GCM (Firebase Cloud Messaging). For more
 *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetPlatformApplicationAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetPlatformApplicationAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // GetPlatformApplicationAttributesInput
 *   PlatformApplicationArn: "STRING_VALUE", // required
 * };
 * const command = new GetPlatformApplicationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetPlatformApplicationAttributesResponse
 * //   Attributes: { // MapStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPlatformApplicationAttributesCommandInput - {@link GetPlatformApplicationAttributesCommandInput}
 * @returns {@link GetPlatformApplicationAttributesCommandOutput}
 * @see {@link GetPlatformApplicationAttributesCommandInput} for command's `input` shape.
 * @see {@link GetPlatformApplicationAttributesCommandOutput} for command's `response` shape.
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
export class GetPlatformApplicationAttributesCommand extends $Command
  .classBuilder<
    GetPlatformApplicationAttributesCommandInput,
    GetPlatformApplicationAttributesCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSimpleNotificationService", "GetPlatformApplicationAttributes", {})
  .n("SNSClient", "GetPlatformApplicationAttributesCommand")
  .sc(GetPlatformApplicationAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPlatformApplicationAttributesInput;
      output: GetPlatformApplicationAttributesResponse;
    };
    sdk: {
      input: GetPlatformApplicationAttributesCommandInput;
      output: GetPlatformApplicationAttributesCommandOutput;
    };
  };
}
