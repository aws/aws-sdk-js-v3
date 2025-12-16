// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDataProtectionPolicyInput, GetDataProtectionPolicyResponse } from "../models/models_0";
import { GetDataProtectionPolicy$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataProtectionPolicyCommand}.
 */
export interface GetDataProtectionPolicyCommandInput extends GetDataProtectionPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetDataProtectionPolicyCommand}.
 */
export interface GetDataProtectionPolicyCommandOutput extends GetDataProtectionPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified inline <code>DataProtectionPolicy</code> document that is
 *             stored in the specified Amazon SNS topic. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetDataProtectionPolicyCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetDataProtectionPolicyCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // GetDataProtectionPolicyInput
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetDataProtectionPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetDataProtectionPolicyResponse
 * //   DataProtectionPolicy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDataProtectionPolicyCommandInput - {@link GetDataProtectionPolicyCommandInput}
 * @returns {@link GetDataProtectionPolicyCommandOutput}
 * @see {@link GetDataProtectionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDataProtectionPolicyCommandOutput} for command's `response` shape.
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
export class GetDataProtectionPolicyCommand extends $Command
  .classBuilder<
    GetDataProtectionPolicyCommandInput,
    GetDataProtectionPolicyCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSimpleNotificationService", "GetDataProtectionPolicy", {})
  .n("SNSClient", "GetDataProtectionPolicyCommand")
  .sc(GetDataProtectionPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataProtectionPolicyInput;
      output: GetDataProtectionPolicyResponse;
    };
    sdk: {
      input: GetDataProtectionPolicyCommandInput;
      output: GetDataProtectionPolicyCommandOutput;
    };
  };
}
