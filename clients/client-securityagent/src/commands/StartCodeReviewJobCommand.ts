// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartCodeReviewJobInput, StartCodeReviewJobOutput } from "../models/models_0";
import { StartCodeReviewJob$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCodeReviewJobCommand}.
 */
export interface StartCodeReviewJobCommandInput extends StartCodeReviewJobInput {}
/**
 * @public
 *
 * The output of {@link StartCodeReviewJobCommand}.
 */
export interface StartCodeReviewJobCommandOutput extends StartCodeReviewJobOutput, __MetadataBearer {}

/**
 * <p>Starts a new code review job for a code review configuration. The job executes the security-focused code analysis defined in the code review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, StartCodeReviewJobCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, StartCodeReviewJobCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // StartCodeReviewJobInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   codeReviewId: "STRING_VALUE", // required
 *   diffSource: { // DiffSource Union: only one key present
 *     s3Uri: "STRING_VALUE",
 *   },
 * };
 * const command = new StartCodeReviewJobCommand(input);
 * const response = await client.send(command);
 * // { // StartCodeReviewJobOutput
 * //   title: "STRING_VALUE",
 * //   status: "IN_PROGRESS" || "STOPPING" || "STOPPED" || "FAILED" || "COMPLETED",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   codeReviewId: "STRING_VALUE", // required
 * //   codeReviewJobId: "STRING_VALUE", // required
 * //   agentSpaceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartCodeReviewJobCommandInput - {@link StartCodeReviewJobCommandInput}
 * @returns {@link StartCodeReviewJobCommandOutput}
 * @see {@link StartCodeReviewJobCommandInput} for command's `input` shape.
 * @see {@link StartCodeReviewJobCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class StartCodeReviewJobCommand extends $Command
  .classBuilder<
    StartCodeReviewJobCommandInput,
    StartCodeReviewJobCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "StartCodeReviewJob", {})
  .n("SecurityAgentClient", "StartCodeReviewJobCommand")
  .sc(StartCodeReviewJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCodeReviewJobInput;
      output: StartCodeReviewJobOutput;
    };
    sdk: {
      input: StartCodeReviewJobCommandInput;
      output: StartCodeReviewJobCommandOutput;
    };
  };
}
