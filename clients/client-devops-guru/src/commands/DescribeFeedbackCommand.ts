// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFeedbackRequest, DescribeFeedbackResponse } from "../models/models_0";
import { DescribeFeedback } from "../schemas/schemas_5_Feedback";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFeedbackCommand}.
 */
export interface DescribeFeedbackCommandInput extends DescribeFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFeedbackCommand}.
 */
export interface DescribeFeedbackCommandOutput extends DescribeFeedbackResponse, __MetadataBearer {}

/**
 * <p> Returns the most recent feedback submitted in the current Amazon Web Services account and Region.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeFeedbackCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeFeedbackCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // DescribeFeedbackRequest
 *   InsightId: "STRING_VALUE",
 * };
 * const command = new DescribeFeedbackCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFeedbackResponse
 * //   InsightFeedback: { // InsightFeedback
 * //     Id: "STRING_VALUE",
 * //     Feedback: "VALID_COLLECTION" || "RECOMMENDATION_USEFUL" || "ALERT_TOO_SENSITIVE" || "DATA_NOISY_ANOMALY" || "DATA_INCORRECT",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFeedbackCommandInput - {@link DescribeFeedbackCommandInput}
 * @returns {@link DescribeFeedbackCommandOutput}
 * @see {@link DescribeFeedbackCommandInput} for command's `input` shape.
 * @see {@link DescribeFeedbackCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
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
export class DescribeFeedbackCommand extends $Command
  .classBuilder<
    DescribeFeedbackCommandInput,
    DescribeFeedbackCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CapstoneControlPlaneService", "DescribeFeedback", {})
  .n("DevOpsGuruClient", "DescribeFeedbackCommand")
  .sc(DescribeFeedback)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFeedbackRequest;
      output: DescribeFeedbackResponse;
    };
    sdk: {
      input: DescribeFeedbackCommandInput;
      output: DescribeFeedbackCommandOutput;
    };
  };
}
