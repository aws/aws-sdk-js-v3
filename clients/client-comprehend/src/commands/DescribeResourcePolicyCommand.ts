// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeResourcePolicyRequest, DescribeResourcePolicyResponse } from "../models/models_0";
import { DescribeResourcePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeResourcePolicyCommand}.
 */
export interface DescribeResourcePolicyCommandInput extends DescribeResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourcePolicyCommand}.
 */
export interface DescribeResourcePolicyCommandOutput extends DescribeResourcePolicyResponse, __MetadataBearer {}

/**
 * <p>Gets the details of a resource-based policy that is attached to a custom model, including
 *       the JSON body of the policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeResourcePolicyCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeResourcePolicyCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // DescribeResourcePolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourcePolicyResponse
 * //   ResourcePolicy: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   PolicyRevisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeResourcePolicyCommandInput - {@link DescribeResourcePolicyCommandInput}
 * @returns {@link DescribeResourcePolicyCommandOutput}
 * @see {@link DescribeResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class DescribeResourcePolicyCommand extends $Command
  .classBuilder<
    DescribeResourcePolicyCommandInput,
    DescribeResourcePolicyCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "DescribeResourcePolicy", {})
  .n("ComprehendClient", "DescribeResourcePolicyCommand")
  .sc(DescribeResourcePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourcePolicyRequest;
      output: DescribeResourcePolicyResponse;
    };
    sdk: {
      input: DescribeResourcePolicyCommandInput;
      output: DescribeResourcePolicyCommandOutput;
    };
  };
}
