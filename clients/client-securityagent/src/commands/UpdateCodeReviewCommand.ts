// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCodeReviewInput, UpdateCodeReviewOutput } from "../models/models_0";
import { UpdateCodeReview$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCodeReviewCommand}.
 */
export interface UpdateCodeReviewCommandInput extends UpdateCodeReviewInput {}
/**
 * @public
 *
 * The output of {@link UpdateCodeReviewCommand}.
 */
export interface UpdateCodeReviewCommandOutput extends UpdateCodeReviewOutput, __MetadataBearer {}

/**
 * <p>Updates an existing code review configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, UpdateCodeReviewCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, UpdateCodeReviewCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // UpdateCodeReviewInput
 *   codeReviewId: "STRING_VALUE", // required
 *   agentSpaceId: "STRING_VALUE", // required
 *   title: "STRING_VALUE",
 *   assets: { // Assets
 *     endpoints: [ // EndpointList
 *       { // Endpoint
 *         uri: "STRING_VALUE",
 *       },
 *     ],
 *     actors: [ // ActorList
 *       { // Actor
 *         identifier: "STRING_VALUE",
 *         uris: [ // UriList
 *           "STRING_VALUE",
 *         ],
 *         authentication: { // Authentication
 *           providerType: "SECRETS_MANAGER" || "AWS_LAMBDA" || "AWS_IAM_ROLE" || "AWS_INTERNAL",
 *           value: "STRING_VALUE",
 *         },
 *         description: "STRING_VALUE",
 *       },
 *     ],
 *     documents: [ // DocumentList
 *       { // DocumentInfo
 *         s3Location: "STRING_VALUE",
 *         artifactId: "STRING_VALUE",
 *         integratedDocument: { // IntegratedDocument
 *           integrationId: "STRING_VALUE", // required
 *           resourceId: "STRING_VALUE", // required
 *         },
 *       },
 *     ],
 *     sourceCode: [ // SourceCodeRepositoryList
 *       { // SourceCodeRepository
 *         s3Location: "STRING_VALUE",
 *       },
 *     ],
 *     integratedRepositories: [ // IntegratedRepositoryList
 *       { // IntegratedRepository
 *         integrationId: "STRING_VALUE", // required
 *         providerResourceId: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   serviceRole: "STRING_VALUE",
 *   logConfig: { // CloudWatchLog
 *     logGroup: "STRING_VALUE",
 *     logStream: "STRING_VALUE",
 *   },
 *   codeRemediationStrategy: "AUTOMATIC" || "DISABLED",
 *   validationMode: "DISABLED" || "SIMULATED",
 * };
 * const command = new UpdateCodeReviewCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCodeReviewOutput
 * //   codeReviewId: "STRING_VALUE", // required
 * //   title: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   assets: { // Assets
 * //     endpoints: [ // EndpointList
 * //       { // Endpoint
 * //         uri: "STRING_VALUE",
 * //       },
 * //     ],
 * //     actors: [ // ActorList
 * //       { // Actor
 * //         identifier: "STRING_VALUE",
 * //         uris: [ // UriList
 * //           "STRING_VALUE",
 * //         ],
 * //         authentication: { // Authentication
 * //           providerType: "SECRETS_MANAGER" || "AWS_LAMBDA" || "AWS_IAM_ROLE" || "AWS_INTERNAL",
 * //           value: "STRING_VALUE",
 * //         },
 * //         description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     documents: [ // DocumentList
 * //       { // DocumentInfo
 * //         s3Location: "STRING_VALUE",
 * //         artifactId: "STRING_VALUE",
 * //         integratedDocument: { // IntegratedDocument
 * //           integrationId: "STRING_VALUE", // required
 * //           resourceId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     ],
 * //     sourceCode: [ // SourceCodeRepositoryList
 * //       { // SourceCodeRepository
 * //         s3Location: "STRING_VALUE",
 * //       },
 * //     ],
 * //     integratedRepositories: [ // IntegratedRepositoryList
 * //       { // IntegratedRepository
 * //         integrationId: "STRING_VALUE", // required
 * //         providerResourceId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   serviceRole: "STRING_VALUE",
 * //   logConfig: { // CloudWatchLog
 * //     logGroup: "STRING_VALUE",
 * //     logStream: "STRING_VALUE",
 * //   },
 * //   agentSpaceId: "STRING_VALUE",
 * //   codeRemediationStrategy: "AUTOMATIC" || "DISABLED",
 * //   validationMode: "DISABLED" || "SIMULATED",
 * // };
 *
 * ```
 *
 * @param UpdateCodeReviewCommandInput - {@link UpdateCodeReviewCommandInput}
 * @returns {@link UpdateCodeReviewCommandOutput}
 * @see {@link UpdateCodeReviewCommandInput} for command's `input` shape.
 * @see {@link UpdateCodeReviewCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class UpdateCodeReviewCommand extends command<UpdateCodeReviewCommandInput, UpdateCodeReviewCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCodeReview",
  UpdateCodeReview$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCodeReviewInput;
      output: UpdateCodeReviewOutput;
    };
    sdk: {
      input: UpdateCodeReviewCommandInput;
      output: UpdateCodeReviewCommandOutput;
    };
  };
}
