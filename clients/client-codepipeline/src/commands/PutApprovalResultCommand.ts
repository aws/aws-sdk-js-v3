// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutApprovalResultInput, PutApprovalResultOutput } from "../models/models_0";
import { PutApprovalResult$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutApprovalResultCommand}.
 */
export interface PutApprovalResultCommandInput extends PutApprovalResultInput {}
/**
 * @public
 *
 * The output of {@link PutApprovalResultCommand}.
 */
export interface PutApprovalResultCommandOutput extends PutApprovalResultOutput, __MetadataBearer {}

/**
 * Provides the response to a manual approval request to CodePipeline. Valid responses include Approved and Rejected.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutApprovalResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutApprovalResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // PutApprovalResultInput
 *   pipelineName: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 *   actionName: "STRING_VALUE", // required
 *   result: { // ApprovalResult
 *     summary: "STRING_VALUE", // required
 *     status: "Approved" || "Rejected", // required
 *   },
 *   token: "STRING_VALUE", // required
 * };
 * const command = new PutApprovalResultCommand(input);
 * const response = await client.send(command);
 * // { // PutApprovalResultOutput
 * //   approvedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param PutApprovalResultCommandInput - {@link PutApprovalResultCommandInput}
 * @returns {@link PutApprovalResultCommandOutput}
 * @see {@link PutApprovalResultCommandInput} for command's `input` shape.
 * @see {@link PutApprovalResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ActionNotFoundException} (client fault)
 *
 * The specified action cannot be found.
 *
 * @throws {@link ApprovalAlreadyCompletedException} (client fault)
 *
 * The approval action has already been approved or rejected.
 *
 * @throws {@link InvalidApprovalTokenException} (client fault)
 *
 * The approval request already received a response or has expired.
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *
 * The pipeline was specified in an invalid format or cannot be found.
 *
 * @throws {@link StageNotFoundException} (client fault)
 *
 * The stage was specified in an invalid format or cannot be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The validation was specified in an invalid format.
 *
 * @throws {@link CodePipelineServiceException}
 *
 * Base exception class for all service exceptions from CodePipeline service.
 *
 * @public
 */
export class PutApprovalResultCommand extends command<PutApprovalResultCommandInput, PutApprovalResultCommandOutput>(
  _ep0,
  _mw0,
  "PutApprovalResult",
  PutApprovalResult$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutApprovalResultInput;
      output: PutApprovalResultOutput;
    };
    sdk: {
      input: PutApprovalResultCommandInput;
      output: PutApprovalResultCommandOutput;
    };
  };
}
