// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSubscriptionAttributesInput, GetSubscriptionAttributesResponse } from "../models/models_0";
import { GetSubscriptionAttributes$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

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
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSimpleNotificationService", "GetSubscriptionAttributes", {})
  .n("SNSClient", "GetSubscriptionAttributesCommand")
  .sc(GetSubscriptionAttributes$)
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
