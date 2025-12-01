// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutFeedbackRequest, PutFeedbackResponse } from "../models/models_0";
import { PutFeedback } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutFeedbackCommand}.
 */
export interface PutFeedbackCommandInput extends PutFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link PutFeedbackCommand}.
 */
export interface PutFeedbackCommandOutput extends PutFeedbackResponse, __MetadataBearer {}

/**
 * <p> Collects customer feedback about the specified insight. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, PutFeedbackCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, PutFeedbackCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // PutFeedbackRequest
 *   InsightFeedback: { // InsightFeedback
 *     Id: "STRING_VALUE",
 *     Feedback: "VALID_COLLECTION" || "RECOMMENDATION_USEFUL" || "ALERT_TOO_SENSITIVE" || "DATA_NOISY_ANOMALY" || "DATA_INCORRECT",
 *   },
 * };
 * const command = new PutFeedbackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutFeedbackCommandInput - {@link PutFeedbackCommandInput}
 * @returns {@link PutFeedbackCommandOutput}
 * @see {@link PutFeedbackCommandInput} for command's `input` shape.
 * @see {@link PutFeedbackCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> An exception that is thrown when a conflict occurs. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource could not be found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 *
 * @public
 */
export class PutFeedbackCommand extends $Command
  .classBuilder<
    PutFeedbackCommandInput,
    PutFeedbackCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CapstoneControlPlaneService", "PutFeedback", {})
  .n("DevOpsGuruClient", "PutFeedbackCommand")
  .sc(PutFeedback)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFeedbackRequest;
      output: {};
    };
    sdk: {
      input: PutFeedbackCommandInput;
      output: PutFeedbackCommandOutput;
    };
  };
}
