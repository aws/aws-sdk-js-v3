// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchDeleteCodeReviewsInput, BatchDeleteCodeReviewsOutput } from "../models/models_0";
import { BatchDeleteCodeReviews$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteCodeReviewsCommand}.
 */
export interface BatchDeleteCodeReviewsCommandInput extends BatchDeleteCodeReviewsInput {}
/**
 * @public
 *
 * The output of {@link BatchDeleteCodeReviewsCommand}.
 */
export interface BatchDeleteCodeReviewsCommandOutput extends BatchDeleteCodeReviewsOutput, __MetadataBearer {}

/**
 * <p>Deletes one or more code reviews from an agent space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchDeleteCodeReviewsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchDeleteCodeReviewsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchDeleteCodeReviewsInput
 *   codeReviewIds: [ // CodeReviewIdList // required
 *     "STRING_VALUE",
 *   ],
 *   agentSpaceId: "STRING_VALUE", // required
 * };
 * const command = new BatchDeleteCodeReviewsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteCodeReviewsOutput
 * //   deleted: [ // CodeReviewIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   failed: [ // DeleteCodeReviewFailureList
 * //     { // DeleteCodeReviewFailure
 * //       codeReviewId: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteCodeReviewsCommandInput - {@link BatchDeleteCodeReviewsCommandInput}
 * @returns {@link BatchDeleteCodeReviewsCommandOutput}
 * @see {@link BatchDeleteCodeReviewsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteCodeReviewsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class BatchDeleteCodeReviewsCommand extends $Command
  .classBuilder<
    BatchDeleteCodeReviewsCommandInput,
    BatchDeleteCodeReviewsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "BatchDeleteCodeReviews", {})
  .n("SecurityAgentClient", "BatchDeleteCodeReviewsCommand")
  .sc(BatchDeleteCodeReviews$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteCodeReviewsInput;
      output: BatchDeleteCodeReviewsOutput;
    };
    sdk: {
      input: BatchDeleteCodeReviewsCommandInput;
      output: BatchDeleteCodeReviewsCommandOutput;
    };
  };
}
