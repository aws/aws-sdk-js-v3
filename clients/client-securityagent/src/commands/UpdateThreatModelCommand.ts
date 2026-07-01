// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateThreatModelInput, UpdateThreatModelOutput } from "../models/models_0";
import { UpdateThreatModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateThreatModelCommand}.
 */
export interface UpdateThreatModelCommandInput extends UpdateThreatModelInput {}
/**
 * @public
 *
 * The output of {@link UpdateThreatModelCommand}.
 */
export interface UpdateThreatModelCommandOutput extends UpdateThreatModelOutput, __MetadataBearer {}

/**
 * <p>Updates an existing threat model configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, UpdateThreatModelCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, UpdateThreatModelCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // UpdateThreatModelInput
 *   threatModelId: "STRING_VALUE", // required
 *   agentSpaceId: "STRING_VALUE", // required
 *   title: "STRING_VALUE",
 *   description: "STRING_VALUE",
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
 *   scopeDocs: [
 *     {
 *       s3Location: "STRING_VALUE",
 *       artifactId: "STRING_VALUE",
 *       integratedDocument: {
 *         integrationId: "STRING_VALUE", // required
 *         resourceId: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   serviceRole: "STRING_VALUE",
 *   logConfig: { // CloudWatchLog
 *     logGroup: "STRING_VALUE",
 *     logStream: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateThreatModelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateThreatModelOutput
 * //   threatModelId: "STRING_VALUE", // required
 * //   title: "STRING_VALUE",
 * //   agentSpaceId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
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
 * //   scopeDocs: [
 * //     {
 * //       s3Location: "STRING_VALUE",
 * //       artifactId: "STRING_VALUE",
 * //       integratedDocument: {
 * //         integrationId: "STRING_VALUE", // required
 * //         resourceId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   serviceRole: "STRING_VALUE",
 * //   logConfig: { // CloudWatchLog
 * //     logGroup: "STRING_VALUE",
 * //     logStream: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateThreatModelCommandInput - {@link UpdateThreatModelCommandInput}
 * @returns {@link UpdateThreatModelCommandOutput}
 * @see {@link UpdateThreatModelCommandInput} for command's `input` shape.
 * @see {@link UpdateThreatModelCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class UpdateThreatModelCommand extends command<UpdateThreatModelCommandInput, UpdateThreatModelCommandOutput>(
  _ep0,
  _mw0,
  "UpdateThreatModel",
  UpdateThreatModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateThreatModelInput;
      output: UpdateThreatModelOutput;
    };
    sdk: {
      input: UpdateThreatModelCommandInput;
      output: UpdateThreatModelCommandOutput;
    };
  };
}
