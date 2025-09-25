// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeResourcePolicyRequest, DescribeResourcePolicyResponse } from "../models/models_1";
import { DescribeResourcePolicy } from "../schemas/schemas_4_Resource";

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
 * <p>Gets the resource policy and policy revision for a bot or bot
 *          alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeResourcePolicyCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeResourcePolicyCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeResourcePolicyRequest
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourcePolicyResponse
 * //   resourceArn: "STRING_VALUE",
 * //   policy: "STRING_VALUE",
 * //   revisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeResourcePolicyCommandInput - {@link DescribeResourcePolicyCommandInput}
 * @returns {@link DescribeResourcePolicyCommandOutput}
 * @see {@link DescribeResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class DescribeResourcePolicyCommand extends $Command
  .classBuilder<
    DescribeResourcePolicyCommandInput,
    DescribeResourcePolicyCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "DescribeResourcePolicy", {})
  .n("LexModelsV2Client", "DescribeResourcePolicyCommand")
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
