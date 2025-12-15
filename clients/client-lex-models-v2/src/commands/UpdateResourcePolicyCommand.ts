// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { UpdateResourcePolicyRequest, UpdateResourcePolicyResponse } from "../models/models_1";
import { UpdateResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResourcePolicyCommand}.
 */
export interface UpdateResourcePolicyCommandInput extends UpdateResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourcePolicyCommand}.
 */
export interface UpdateResourcePolicyCommandOutput extends UpdateResourcePolicyResponse, __MetadataBearer {}

/**
 * <p>Replaces the existing resource policy for a bot or bot alias with a
 *          new one. If the policy doesn't exist, Amazon Lex returns an
 *          exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateResourcePolicyCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateResourcePolicyCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // UpdateResourcePolicyRequest
 *   resourceArn: "STRING_VALUE", // required
 *   policy: "STRING_VALUE", // required
 *   expectedRevisionId: "STRING_VALUE",
 * };
 * const command = new UpdateResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResourcePolicyResponse
 * //   resourceArn: "STRING_VALUE",
 * //   revisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateResourcePolicyCommandInput - {@link UpdateResourcePolicyCommandInput}
 * @returns {@link UpdateResourcePolicyCommandOutput}
 * @see {@link UpdateResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class UpdateResourcePolicyCommand extends $Command
  .classBuilder<
    UpdateResourcePolicyCommandInput,
    UpdateResourcePolicyCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "UpdateResourcePolicy", {})
  .n("LexModelsV2Client", "UpdateResourcePolicyCommand")
  .sc(UpdateResourcePolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourcePolicyRequest;
      output: UpdateResourcePolicyResponse;
    };
    sdk: {
      input: UpdateResourcePolicyCommandInput;
      output: UpdateResourcePolicyCommandOutput;
    };
  };
}
