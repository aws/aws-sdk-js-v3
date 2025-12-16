// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { DeleteResourcePolicyStatementRequest, DeleteResourcePolicyStatementResponse } from "../models/models_0";
import { DeleteResourcePolicyStatement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourcePolicyStatementCommand}.
 */
export interface DeleteResourcePolicyStatementCommandInput extends DeleteResourcePolicyStatementRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourcePolicyStatementCommand}.
 */
export interface DeleteResourcePolicyStatementCommandOutput
  extends DeleteResourcePolicyStatementResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a policy statement from a resource policy. If you delete the
 *          last statement from a policy, the policy is deleted. If you specify a
 *          statement ID that doesn't exist in the policy, or if the bot or bot
 *          alias doesn't have a policy attached, Amazon Lex returns an
 *          exception.</p>
 *          <p>You need to add the <code>DeleteResourcePolicy</code> or <code>UpdateResourcePolicy</code>
 *          action to the bot role in order to call the API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteResourcePolicyStatementCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteResourcePolicyStatementCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DeleteResourcePolicyStatementRequest
 *   resourceArn: "STRING_VALUE", // required
 *   statementId: "STRING_VALUE", // required
 *   expectedRevisionId: "STRING_VALUE",
 * };
 * const command = new DeleteResourcePolicyStatementCommand(input);
 * const response = await client.send(command);
 * // { // DeleteResourcePolicyStatementResponse
 * //   resourceArn: "STRING_VALUE",
 * //   revisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteResourcePolicyStatementCommandInput - {@link DeleteResourcePolicyStatementCommandInput}
 * @returns {@link DeleteResourcePolicyStatementCommandOutput}
 * @see {@link DeleteResourcePolicyStatementCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyStatementCommandOutput} for command's `response` shape.
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
export class DeleteResourcePolicyStatementCommand extends $Command
  .classBuilder<
    DeleteResourcePolicyStatementCommandInput,
    DeleteResourcePolicyStatementCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "DeleteResourcePolicyStatement", {})
  .n("LexModelsV2Client", "DeleteResourcePolicyStatementCommand")
  .sc(DeleteResourcePolicyStatement$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourcePolicyStatementRequest;
      output: DeleteResourcePolicyStatementResponse;
    };
    sdk: {
      input: DeleteResourcePolicyStatementCommandInput;
      output: DeleteResourcePolicyStatementCommandOutput;
    };
  };
}
