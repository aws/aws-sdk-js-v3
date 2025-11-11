// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSMSAttributesInput, GetSMSAttributesResponse } from "../models/models_0";
import { GetSMSAttributes } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSMSAttributesCommand}.
 */
export interface GetSMSAttributesCommandInput extends GetSMSAttributesInput {}
/**
 * @public
 *
 * The output of {@link GetSMSAttributesCommand}.
 */
export interface GetSMSAttributesCommandOutput extends GetSMSAttributesResponse, __MetadataBearer {}

/**
 * <p>Returns the settings for sending SMS messages from your Amazon Web Services account.</p>
 *          <p>These settings are set with the <code>SetSMSAttributes</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetSMSAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetSMSAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // GetSMSAttributesInput
 *   attributes: [ // ListString
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetSMSAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetSMSAttributesResponse
 * //   attributes: { // MapStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSMSAttributesCommandInput - {@link GetSMSAttributesCommandInput}
 * @returns {@link GetSMSAttributesCommandOutput}
 * @see {@link GetSMSAttributesCommandInput} for command's `input` shape.
 * @see {@link GetSMSAttributesCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottledException} (client fault)
 *  <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class GetSMSAttributesCommand extends $Command
  .classBuilder<
    GetSMSAttributesCommandInput,
    GetSMSAttributesCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSimpleNotificationService", "GetSMSAttributes", {})
  .n("SNSClient", "GetSMSAttributesCommand")
  .sc(GetSMSAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSMSAttributesInput;
      output: GetSMSAttributesResponse;
    };
    sdk: {
      input: GetSMSAttributesCommandInput;
      output: GetSMSAttributesCommandOutput;
    };
  };
}
