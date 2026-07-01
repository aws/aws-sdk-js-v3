// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateThreatModelInput, CreateThreatModelOutput } from "../models/models_0";
import { CreateThreatModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateThreatModelCommand}.
 */
export interface CreateThreatModelCommandInput extends CreateThreatModelInput {}
/**
 * @public
 *
 * The output of {@link CreateThreatModelCommand}.
 */
export interface CreateThreatModelCommandOutput extends CreateThreatModelOutput, __MetadataBearer {}

/**
 * <p>Creates a new threat model configuration in an agent space. A threat model defines the parameters for automated threat analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, CreateThreatModelCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, CreateThreatModelCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // CreateThreatModelInput
 *   title: "STRING_VALUE", // required
 *   agentSpaceId: "STRING_VALUE", // required
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
 *   serviceRole: "STRING_VALUE", // required
 *   logConfig: { // CloudWatchLog
 *     logGroup: "STRING_VALUE",
 *     logStream: "STRING_VALUE",
 *   },
 *   reportDestination: { // ReportDestination
 *     integrationId: "STRING_VALUE", // required
 *     containerId: "STRING_VALUE", // required
 *     parentId: "STRING_VALUE",
 *     documentId: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateThreatModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateThreatModelOutput
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
 * @param CreateThreatModelCommandInput - {@link CreateThreatModelCommandInput}
 * @returns {@link CreateThreatModelCommandOutput}
 * @see {@link CreateThreatModelCommandInput} for command's `input` shape.
 * @see {@link CreateThreatModelCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class CreateThreatModelCommand extends command<CreateThreatModelCommandInput, CreateThreatModelCommandOutput>(
  _ep0,
  _mw0,
  "CreateThreatModel",
  CreateThreatModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateThreatModelInput;
      output: CreateThreatModelOutput;
    };
    sdk: {
      input: CreateThreatModelCommandInput;
      output: CreateThreatModelCommandOutput;
    };
  };
}
