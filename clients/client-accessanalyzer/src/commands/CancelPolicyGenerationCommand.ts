// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelPolicyGenerationRequest, CancelPolicyGenerationResponse } from "../models/models_0";
import { CancelPolicyGeneration } from "../schemas/schemas_6_Policy";

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
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "CancelPolicyGeneration", {})
  .n("AccessAnalyzerClient", "CancelPolicyGenerationCommand")
  .sc(CancelPolicyGeneration)
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
