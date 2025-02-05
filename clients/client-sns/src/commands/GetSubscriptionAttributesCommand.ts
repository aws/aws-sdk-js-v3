// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSubscriptionAttributesInput, GetSubscriptionAttributesResponse } from "../models/models_0";
import { de_GetSubscriptionAttributesCommand, se_GetSubscriptionAttributesCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSubscriptionAttributesCommand}.
 */
export interface GetSubscriptionAttributesCommandInput extends GetSubscriptionAttributesInput {}
/**
 * @public
 *
 * The output of {@link GetSubscriptionAttributesCommand}.
 */
export interface GetSubscriptionAttributesCommandOutput extends GetSubscriptionAttributesResponse, __MetadataBearer {}

/**
 * <p>Returns all of the properties of a subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetSubscriptionAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetSubscriptionAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SNSClient(config);
 * const input = { // GetSubscriptionAttributesInput
 *   SubscriptionArn: "STRING_VALUE", // required
 * };
 * const command = new GetSubscriptionAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriptionAttributesResponse
 * //   Attributes: { // SubscriptionAttributesMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSubscriptionAttributesCommandInput - {@link GetSubscriptionAttributesCommandInput}
 * @returns {@link GetSubscriptionAttributesCommandOutput}
 * @see {@link GetSubscriptionAttributesCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionAttributesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetSubscriptionAttributesCommand extends $Command
  .classBuilder<
    GetSubscriptionAttributesCommandInput,
    GetSubscriptionAttributesCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSimpleNotificationService", "GetSubscriptionAttributes", {})
  .n("SNSClient", "GetSubscriptionAttributesCommand")
  .f(void 0, void 0)
  .ser(se_GetSubscriptionAttributesCommand)
  .de(de_GetSubscriptionAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSubscriptionAttributesInput;
      output: GetSubscriptionAttributesResponse;
    };
    sdk: {
      input: GetSubscriptionAttributesCommandInput;
      output: GetSubscriptionAttributesCommandOutput;
    };
  };
}
