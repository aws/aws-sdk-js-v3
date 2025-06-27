// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelPolicyGenerationRequest, CancelPolicyGenerationResponse } from "../models/models_0";
import { de_CancelPolicyGenerationCommand, se_CancelPolicyGenerationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelPolicyGenerationCommand}.
 */
export interface CancelPolicyGenerationCommandInput extends CancelPolicyGenerationRequest {}
/**
 * @public
 *
 * The output of {@link CancelPolicyGenerationCommand}.
 */
export interface CancelPolicyGenerationCommandOutput extends CancelPolicyGenerationResponse, __MetadataBearer {}

/**
 * <p>Cancels the requested policy generation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CancelPolicyGenerationCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CancelPolicyGenerationCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // CancelPolicyGenerationRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new CancelPolicyGenerationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelPolicyGenerationCommandInput - {@link CancelPolicyGenerationCommandInput}
 * @returns {@link CancelPolicyGenerationCommandOutput}
 * @see {@link CancelPolicyGenerationCommandInput} for command's `input` shape.
 * @see {@link CancelPolicyGenerationCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 *
 * @public
 */
export class CancelPolicyGenerationCommand extends $Command
  .classBuilder<
    CancelPolicyGenerationCommandInput,
    CancelPolicyGenerationCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "CancelPolicyGeneration", {})
  .n("AccessAnalyzerClient", "CancelPolicyGenerationCommand")
  .f(void 0, void 0)
  .ser(se_CancelPolicyGenerationCommand)
  .de(de_CancelPolicyGenerationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelPolicyGenerationRequest;
      output: {};
    };
    sdk: {
      input: CancelPolicyGenerationCommandInput;
      output: CancelPolicyGenerationCommandOutput;
    };
  };
}
