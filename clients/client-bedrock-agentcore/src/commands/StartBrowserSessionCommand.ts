// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartBrowserSessionRequest, StartBrowserSessionResponse } from "../models/models_0";
import { StartBrowserSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartBrowserSessionCommand}.
 */
export interface StartBrowserSessionCommandInput extends StartBrowserSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartBrowserSessionCommand}.
 */
export interface StartBrowserSessionCommandOutput extends StartBrowserSessionResponse, __MetadataBearer {}

/**
 * Creates and initializes a browser session in Amazon Bedrock AgentCore. The session enables agents to navigate and interact with web content, extract information from websites, and perform web-based tasks as part of their response generation.
 *
 * To create a session, you must specify a browser identifier and a name. You can also configure the viewport dimensions to control the visible area of web content. The session remains active until it times out or you explicitly stop it using the `StopBrowserSession` operation.
 *
 * The following operations are related to `StartBrowserSession`:
 *
 * - [GetBrowserSession](https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_GetBrowserSession.html)
 * - [UpdateBrowserStream](https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_UpdateBrowserStream.html)
 * - [SaveBrowserSessionProfile](https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_SaveBrowserSessionProfile.html)
 * - [StopBrowserSession](https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_StopBrowserSession.html)
 * - [InvokeBrowser](https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_InvokeBrowser.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, StartBrowserSessionCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, StartBrowserSessionCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // StartBrowserSessionRequest
 *   traceId: "STRING_VALUE",
 *   traceParent: "STRING_VALUE",
 *   browserIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   sessionTimeoutSeconds: Number("int"),
 *   viewPort: { // ViewPort
 *     width: Number("int"), // required
 *     height: Number("int"), // required
 *   },
 *   extensions: [ // BrowserExtensions
 *     { // BrowserExtension
 *       location: { // ResourceLocation Union: only one key present
 *         s3: { // S3Location
 *           bucket: "STRING_VALUE", // required
 *           prefix: "STRING_VALUE", // required
 *           versionId: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   profileConfiguration: { // BrowserProfileConfiguration
 *     profileIdentifier: "STRING_VALUE", // required
 *   },
 *   proxyConfiguration: { // ProxyConfiguration
 *     proxies: [ // Proxies // required
 *       { // Proxy Union: only one key present
 *         externalProxy: { // ExternalProxy
 *           server: "STRING_VALUE", // required
 *           port: Number("int"), // required
 *           domainPatterns: [ // DomainPatterns
 *             "STRING_VALUE",
 *           ],
 *           credentials: { // ProxyCredentials Union: only one key present
 *             basicAuth: { // BasicAuth
 *               secretArn: "STRING_VALUE", // required
 *             },
 *           },
 *         },
 *       },
 *     ],
 *     bypass: { // ProxyBypass
 *       domainPatterns: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   enterprisePolicies: [ // BrowserEnterprisePolicies
 *     { // BrowserEnterprisePolicy
 *       location: {//  Union: only one key present
 *         s3: {
 *           bucket: "STRING_VALUE", // required
 *           prefix: "STRING_VALUE", // required
 *           versionId: "STRING_VALUE",
 *         },
 *       },
 *       type: "MANAGED" || "RECOMMENDED",
 *     },
 *   ],
 *   certificates: [ // Certificates
 *     { // Certificate
 *       location: { // CertificateLocation Union: only one key present
 *         secretsManager: { // SecretsManagerLocation
 *           secretArn: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   ],
 *   filesystemConfigurations: [ // ToolsFileSystemConfigurations
 *     { // ToolsFileSystemConfiguration Union: only one key present
 *       s3FilesConfiguration: { // S3FilesConfiguration
 *         accessPointArn: "STRING_VALUE", // required
 *         mountPath: "STRING_VALUE", // required
 *         fileSystemArn: "STRING_VALUE", // required
 *       },
 *       efsConfiguration: { // EfsConfiguration
 *         accessPointArn: "STRING_VALUE", // required
 *         mountPath: "STRING_VALUE", // required
 *         fileSystemArn: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartBrowserSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartBrowserSessionResponse
 * //   browserIdentifier: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   streams: { // BrowserSessionStream
 * //     automationStream: { // AutomationStream
 * //       streamEndpoint: "STRING_VALUE", // required
 * //       streamStatus: "ENABLED" || "DISABLED", // required
 * //     },
 * //     liveViewStream: { // LiveViewStream
 * //       streamEndpoint: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartBrowserSessionCommandInput - {@link StartBrowserSessionCommandInput}
 * @returns {@link StartBrowserSessionCommandOutput}
 * @see {@link StartBrowserSessionCommandInput} for command's `input` shape.
 * @see {@link StartBrowserSessionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The exception that occurs when the request conflicts with the current state of the resource. This can happen when trying to modify a resource that is currently being modified by another request, or when trying to create a resource that already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.
 *
 * @throws {@link BedrockAgentCoreServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgentCore service.
 *
 * @public
 */
export class StartBrowserSessionCommand extends command<StartBrowserSessionCommandInput, StartBrowserSessionCommandOutput>(
  _ep0,
  _mw0,
  "StartBrowserSession",
  StartBrowserSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBrowserSessionRequest;
      output: StartBrowserSessionResponse;
    };
    sdk: {
      input: StartBrowserSessionCommandInput;
      output: StartBrowserSessionCommandOutput;
    };
  };
}
