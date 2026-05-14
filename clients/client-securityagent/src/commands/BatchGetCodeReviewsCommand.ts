// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetCodeReviewsInput, BatchGetCodeReviewsOutput } from "../models/models_0";
import { BatchGetCodeReviews$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetCodeReviewsCommand}.
 */
export interface BatchGetCodeReviewsCommandInput extends BatchGetCodeReviewsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetCodeReviewsCommand}.
 */
export interface BatchGetCodeReviewsCommandOutput extends BatchGetCodeReviewsOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about one or more code reviews in an agent space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchGetCodeReviewsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchGetCodeReviewsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchGetCodeReviewsInput
 *   codeReviewIds: [ // CodeReviewIdList // required
 *     "STRING_VALUE",
 *   ],
 *   agentSpaceId: "STRING_VALUE", // required
 * };
 * const command = new BatchGetCodeReviewsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCodeReviewsOutput
 * //   codeReviews: [ // CodeReviewList
 * //     { // CodeReview
 * //       codeReviewId: "STRING_VALUE", // required
 * //       agentSpaceId: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       assets: { // Assets
 * //         endpoints: [ // EndpointList
 * //           { // Endpoint
 * //             uri: "STRING_VALUE",
 * //           },
 * //         ],
 * //         actors: [ // ActorList
 * //           { // Actor
 * //             identifier: "STRING_VALUE",
 * //             uris: [ // UriList
 * //               "STRING_VALUE",
 * //             ],
 * //             authentication: { // Authentication
 * //               providerType: "SECRETS_MANAGER" || "AWS_LAMBDA" || "AWS_IAM_ROLE" || "AWS_INTERNAL",
 * //               value: "STRING_VALUE",
 * //             },
 * //             description: "STRING_VALUE",
 * //           },
 * //         ],
 * //         documents: [ // DocumentList
 * //           { // DocumentInfo
 * //             s3Location: "STRING_VALUE",
 * //             artifactId: "STRING_VALUE",
 * //           },
 * //         ],
 * //         sourceCode: [ // SourceCodeRepositoryList
 * //           { // SourceCodeRepository
 * //             s3Location: "STRING_VALUE",
 * //           },
 * //         ],
 * //         integratedRepositories: [ // IntegratedRepositoryList
 * //           { // IntegratedRepository
 * //             integrationId: "STRING_VALUE", // required
 * //             providerResourceId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       serviceRole: "STRING_VALUE",
 * //       logConfig: { // CloudWatchLog
 * //         logGroup: "STRING_VALUE",
 * //         logStream: "STRING_VALUE",
 * //       },
 * //       codeRemediationStrategy: "AUTOMATIC" || "DISABLED",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   notFound: [ // CodeReviewIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetCodeReviewsCommandInput - {@link BatchGetCodeReviewsCommandInput}
 * @returns {@link BatchGetCodeReviewsCommandOutput}
 * @see {@link BatchGetCodeReviewsCommandInput} for command's `input` shape.
 * @see {@link BatchGetCodeReviewsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class BatchGetCodeReviewsCommand extends $Command
  .classBuilder<
    BatchGetCodeReviewsCommandInput,
    BatchGetCodeReviewsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "BatchGetCodeReviews", {})
  .n("SecurityAgentClient", "BatchGetCodeReviewsCommand")
  .sc(BatchGetCodeReviews$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetCodeReviewsInput;
      output: BatchGetCodeReviewsOutput;
    };
    sdk: {
      input: BatchGetCodeReviewsCommandInput;
      output: BatchGetCodeReviewsCommandOutput;
    };
  };
}
