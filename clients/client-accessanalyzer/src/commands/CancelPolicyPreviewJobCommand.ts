// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AccessAnalyzerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelPolicyPreviewJobRequest, CancelPolicyPreviewJobResponse } from "../models/models_0";
import { CancelPolicyPreviewJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelPolicyPreviewJobCommand}.
 */
export interface CancelPolicyPreviewJobCommandInput extends CancelPolicyPreviewJobRequest {}
/**
 * @public
 *
 * The output of {@link CancelPolicyPreviewJobCommand}.
 */
export interface CancelPolicyPreviewJobCommandOutput extends CancelPolicyPreviewJobResponse, __MetadataBearer {}

/**
 * <p>Cancels an in-progress policy preview job. Jobs that are already completed, failed, or canceled cannot be canceled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CancelPolicyPreviewJobCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CancelPolicyPreviewJobCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // CancelPolicyPreviewJobRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new CancelPolicyPreviewJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelPolicyPreviewJobCommandInput - {@link CancelPolicyPreviewJobCommandInput}
 * @returns {@link CancelPolicyPreviewJobCommandOutput}
 * @see {@link CancelPolicyPreviewJobCommandInput} for command's `input` shape.
 * @see {@link CancelPolicyPreviewJobCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
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
 * @example Successfully canceled policy preview job
 * ```javascript
 * //
 * const input = {
 *   jobId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
 * };
 * const command = new CancelPolicyPreviewJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CancelPolicyPreviewJobCommand extends $Command
  .classBuilder<
    CancelPolicyPreviewJobCommandInput,
    CancelPolicyPreviewJobCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "CancelPolicyPreviewJob", {})
  .n("AccessAnalyzerClient", "CancelPolicyPreviewJobCommand")
  .sc(CancelPolicyPreviewJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelPolicyPreviewJobRequest;
      output: {};
    };
    sdk: {
      input: CancelPolicyPreviewJobCommandInput;
      output: CancelPolicyPreviewJobCommandOutput;
    };
  };
}
