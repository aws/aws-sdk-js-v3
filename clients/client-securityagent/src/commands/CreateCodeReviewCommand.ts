// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCodeReviewInput, CreateCodeReviewOutput } from "../models/models_0";
import { CreateCodeReview$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCodeReviewCommand}.
 */
export interface CreateCodeReviewCommandInput extends CreateCodeReviewInput {}
/**
 * @public
 *
 * The output of {@link CreateCodeReviewCommand}.
 */
export interface CreateCodeReviewCommandOutput extends CreateCodeReviewOutput, __MetadataBearer {}

/**
 * <p>Creates a new code review configuration in an agent space. A code review defines the parameters for automated security-focused code analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, CreateCodeReviewCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, CreateCodeReviewCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // CreateCodeReviewInput
 *   title: "STRING_VALUE", // required
 *   agentSpaceId: "STRING_VALUE", // required
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
 *         enableEmailMfa: true || false,
 *         mfaForwardingAddress: "STRING_VALUE",
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
 *         branch: "STRING_VALUE",
 *       },
 *     ],
 *     trustedCaCertificates: [ // TrustedCaCertificateList
 *       { // TrustedCaCertificate
 *         source: { // CaCertificateSource Union: only one key present
 *           inlinePem: "STRING_VALUE",
 *           artifactId: "STRING_VALUE",
 *           s3Location: "STRING_VALUE",
 *         },
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
 *   maxTaskHours: Number("double"),
 *   reportDestination: { // ReportDestination
 *     integrationId: "STRING_VALUE", // required
 *     containerId: "STRING_VALUE", // required
 *     parentId: "STRING_VALUE",
 *     documentId: "STRING_VALUE",
 *   },
 *   reportFilters: { // ReportFilters
 *     riskLevels: [ // RiskLevelFilterList
 *       "UNKNOWN" || "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 *     ],
 *     confidenceLevels: [ // ConfidenceLevelFilterList
 *       "FALSE_POSITIVE" || "UNCONFIRMED" || "LOW" || "MEDIUM" || "HIGH",
 *     ],
 *     statuses: [ // FindingStatusFilterList
 *       "ACTIVE" || "RESOLVED" || "ACCEPTED" || "FALSE_POSITIVE",
 *     ],
 *     riskTypes: [ // RiskTypeFilterList
 *       "CROSS_SITE_SCRIPTING" || "DEFAULT_CREDENTIALS" || "INSECURE_DIRECT_OBJECT_REFERENCE" || "PRIVILEGE_ESCALATION" || "SERVER_SIDE_TEMPLATE_INJECTION" || "COMMAND_INJECTION" || "CODE_INJECTION" || "SQL_INJECTION" || "ARBITRARY_FILE_UPLOAD" || "INSECURE_DESERIALIZATION" || "LOCAL_FILE_INCLUSION" || "INFORMATION_DISCLOSURE" || "PATH_TRAVERSAL" || "SERVER_SIDE_REQUEST_FORGERY" || "JSON_WEB_TOKEN_VULNERABILITIES" || "XML_EXTERNAL_ENTITY" || "FILE_DELETION" || "OTHER" || "GRAPHQL_VULNERABILITIES" || "BUSINESS_LOGIC_VULNERABILITIES" || "CRYPTOGRAPHIC_VULNERABILITIES" || "DENIAL_OF_SERVICE" || "FILE_ACCESS" || "FILE_CREATION" || "DATABASE_MODIFICATION" || "DATABASE_ACCESS" || "OUTBOUND_SERVICE_REQUEST" || "UNKNOWN",
 *     ],
 *     findingTypes: [ // ReportFilterList
 *       "STRING_VALUE",
 *     ],
 *     taskStatuses: [ // TaskExecutionStatusFilterList
 *       "IN_PROGRESS" || "ABORTED" || "COMPLETED" || "INTERNAL_ERROR" || "FAILED",
 *     ],
 *     annotationNotes: true || false,
 *     complianceReport: true || false,
 *   },
 * };
 * const command = new CreateCodeReviewCommand(input);
 * const response = await client.send(command);
 * // { // CreateCodeReviewOutput
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
 * //         enableEmailMfa: true || false,
 * //         mfaForwardingAddress: "STRING_VALUE",
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
 * //         branch: "STRING_VALUE",
 * //       },
 * //     ],
 * //     trustedCaCertificates: [ // TrustedCaCertificateList
 * //       { // TrustedCaCertificate
 * //         source: { // CaCertificateSource Union: only one key present
 * //           inlinePem: "STRING_VALUE",
 * //           artifactId: "STRING_VALUE",
 * //           s3Location: "STRING_VALUE",
 * //         },
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
 * //   maxTaskHours: Number("double"),
 * //   reportDestination: { // ReportDestination
 * //     integrationId: "STRING_VALUE", // required
 * //     containerId: "STRING_VALUE", // required
 * //     parentId: "STRING_VALUE",
 * //     documentId: "STRING_VALUE",
 * //   },
 * //   reportFilters: { // ReportFilters
 * //     riskLevels: [ // RiskLevelFilterList
 * //       "UNKNOWN" || "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //     ],
 * //     confidenceLevels: [ // ConfidenceLevelFilterList
 * //       "FALSE_POSITIVE" || "UNCONFIRMED" || "LOW" || "MEDIUM" || "HIGH",
 * //     ],
 * //     statuses: [ // FindingStatusFilterList
 * //       "ACTIVE" || "RESOLVED" || "ACCEPTED" || "FALSE_POSITIVE",
 * //     ],
 * //     riskTypes: [ // RiskTypeFilterList
 * //       "CROSS_SITE_SCRIPTING" || "DEFAULT_CREDENTIALS" || "INSECURE_DIRECT_OBJECT_REFERENCE" || "PRIVILEGE_ESCALATION" || "SERVER_SIDE_TEMPLATE_INJECTION" || "COMMAND_INJECTION" || "CODE_INJECTION" || "SQL_INJECTION" || "ARBITRARY_FILE_UPLOAD" || "INSECURE_DESERIALIZATION" || "LOCAL_FILE_INCLUSION" || "INFORMATION_DISCLOSURE" || "PATH_TRAVERSAL" || "SERVER_SIDE_REQUEST_FORGERY" || "JSON_WEB_TOKEN_VULNERABILITIES" || "XML_EXTERNAL_ENTITY" || "FILE_DELETION" || "OTHER" || "GRAPHQL_VULNERABILITIES" || "BUSINESS_LOGIC_VULNERABILITIES" || "CRYPTOGRAPHIC_VULNERABILITIES" || "DENIAL_OF_SERVICE" || "FILE_ACCESS" || "FILE_CREATION" || "DATABASE_MODIFICATION" || "DATABASE_ACCESS" || "OUTBOUND_SERVICE_REQUEST" || "UNKNOWN",
 * //     ],
 * //     findingTypes: [ // ReportFilterList
 * //       "STRING_VALUE",
 * //     ],
 * //     taskStatuses: [ // TaskExecutionStatusFilterList
 * //       "IN_PROGRESS" || "ABORTED" || "COMPLETED" || "INTERNAL_ERROR" || "FAILED",
 * //     ],
 * //     annotationNotes: true || false,
 * //     complianceReport: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCodeReviewCommandInput - {@link CreateCodeReviewCommandInput}
 * @returns {@link CreateCodeReviewCommandOutput}
 * @see {@link CreateCodeReviewCommandInput} for command's `input` shape.
 * @see {@link CreateCodeReviewCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class CreateCodeReviewCommand extends command<CreateCodeReviewCommandInput, CreateCodeReviewCommandOutput>(
  _ep0,
  _mw0,
  "CreateCodeReview",
  CreateCodeReview$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCodeReviewInput;
      output: CreateCodeReviewOutput;
    };
    sdk: {
      input: CreateCodeReviewCommandInput;
      output: CreateCodeReviewCommandOutput;
    };
  };
}
