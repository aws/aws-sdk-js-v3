// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetThreatModelsInput, BatchGetThreatModelsOutput } from "../models/models_0";
import { BatchGetThreatModels$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetThreatModelsCommand}.
 */
export interface BatchGetThreatModelsCommandInput extends BatchGetThreatModelsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetThreatModelsCommand}.
 */
export interface BatchGetThreatModelsCommandOutput extends BatchGetThreatModelsOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about one or more threat models in an agent space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchGetThreatModelsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchGetThreatModelsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchGetThreatModelsInput
 *   threatModelIds: [ // ThreatModelIdList // required
 *     "STRING_VALUE",
 *   ],
 *   agentSpaceId: "STRING_VALUE", // required
 * };
 * const command = new BatchGetThreatModelsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetThreatModelsOutput
 * //   threatModels: [ // ThreatModelList
 * //     { // ThreatModel
 * //       threatModelId: "STRING_VALUE", // required
 * //       agentSpaceId: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
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
 * //             integratedDocument: { // IntegratedDocument
 * //               integrationId: "STRING_VALUE", // required
 * //               resourceId: "STRING_VALUE", // required
 * //             },
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
 * //       scopeDocs: [
 * //         {
 * //           s3Location: "STRING_VALUE",
 * //           artifactId: "STRING_VALUE",
 * //           integratedDocument: {
 * //             integrationId: "STRING_VALUE", // required
 * //             resourceId: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //       serviceRole: "STRING_VALUE",
 * //       logConfig: { // CloudWatchLog
 * //         logGroup: "STRING_VALUE",
 * //         logStream: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   notFound: [ // ThreatModelIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetThreatModelsCommandInput - {@link BatchGetThreatModelsCommandInput}
 * @returns {@link BatchGetThreatModelsCommandOutput}
 * @see {@link BatchGetThreatModelsCommandInput} for command's `input` shape.
 * @see {@link BatchGetThreatModelsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class BatchGetThreatModelsCommand extends $Command
  .classBuilder<
    BatchGetThreatModelsCommandInput,
    BatchGetThreatModelsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "BatchGetThreatModels", {})
  .n("SecurityAgentClient", "BatchGetThreatModelsCommand")
  .sc(BatchGetThreatModels$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetThreatModelsInput;
      output: BatchGetThreatModelsOutput;
    };
    sdk: {
      input: BatchGetThreatModelsCommandInput;
      output: BatchGetThreatModelsCommandOutput;
    };
  };
}
