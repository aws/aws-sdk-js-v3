// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTopicAttributesInput, GetTopicAttributesResponse } from "../models/models_0";
import { GetTopicAttributes } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTopicAttributesCommand}.
 */
export interface GetTopicAttributesCommandInput extends GetTopicAttributesInput {}
/**
 * @public
 *
 * The output of {@link GetTopicAttributesCommand}.
 */
export interface GetTopicAttributesCommandOutput extends GetTopicAttributesResponse, __MetadataBearer {}

/**
 * <p>Returns all of the properties of a topic. Topic properties returned might differ based
 *             on the authorization of the user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetTopicAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetTopicAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // GetTopicAttributesInput
 *   TopicArn: "STRING_VALUE", // required
 * };
 * const command = new GetTopicAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetTopicAttributesResponse
 * //   Attributes: { // TopicAttributesMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTopicAttributesCommandInput - {@link GetTopicAttributesCommandInput}
 * @returns {@link GetTopicAttributesCommandOutput}
 * @see {@link GetTopicAttributesCommandInput} for command's `input` shape.
 * @see {@link GetTopicAttributesCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidSecurityException} (client fault)
 *  <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your
 *             request using Signature Version 4.</p>
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
export class GetTopicAttributesCommand extends $Command
  .classBuilder<
    GetTopicAttributesCommandInput,
    GetTopicAttributesCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSimpleNotificationService", "GetTopicAttributes", {})
  .n("SNSClient", "GetTopicAttributesCommand")
  .sc(GetTopicAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTopicAttributesInput;
      output: GetTopicAttributesResponse;
    };
    sdk: {
      input: GetTopicAttributesCommandInput;
      output: GetTopicAttributesCommandOutput;
    };
  };
}
