// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAgentRuntimeRequest, CreateAgentRuntimeResponse } from "../models/models_0";
import { CreateAgentRuntime$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAgentRuntimeCommand}.
 */
export interface CreateAgentRuntimeCommandInput extends CreateAgentRuntimeRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentRuntimeCommand}.
 */
export interface CreateAgentRuntimeCommandOutput extends CreateAgentRuntimeResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Bedrock AgentCore Runtime.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateAgentRuntimeCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateAgentRuntimeCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateAgentRuntimeRequest
 *   agentRuntimeName: "STRING_VALUE", // required
 *   agentRuntimeArtifact: { // AgentRuntimeArtifact Union: only one key present
 *     containerConfiguration: { // ContainerConfiguration
 *       containerUri: "STRING_VALUE", // required
 *     },
 *     codeConfiguration: { // CodeConfiguration
 *       code: { // Code Union: only one key present
 *         s3: { // S3Location
 *           bucket: "STRING_VALUE", // required
 *           prefix: "STRING_VALUE", // required
 *           versionId: "STRING_VALUE",
 *         },
 *       },
 *       runtime: "PYTHON_3_10" || "PYTHON_3_11" || "PYTHON_3_12" || "PYTHON_3_13" || "PYTHON_3_14" || "NODE_22", // required
 *       entryPoint: [ // EntryPoints // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   roleArn: "STRING_VALUE", // required
 *   networkConfiguration: { // NetworkConfiguration
 *     networkMode: "PUBLIC" || "VPC", // required
 *     networkModeConfig: { // VpcConfig
 *       securityGroups: [ // SecurityGroups // required
 *         "STRING_VALUE",
 *       ],
 *       subnets: [ // Subnets // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   authorizerConfiguration: { // AuthorizerConfiguration Union: only one key present
 *     customJWTAuthorizer: { // CustomJWTAuthorizerConfiguration
 *       discoveryUrl: "STRING_VALUE", // required
 *       allowedAudience: [ // AllowedAudienceList
 *         "STRING_VALUE",
 *       ],
 *       allowedClients: [ // AllowedClientsList
 *         "STRING_VALUE",
 *       ],
 *       allowedScopes: [ // AllowedScopesType
 *         "STRING_VALUE",
 *       ],
 *       customClaims: [ // CustomClaimValidationsType
 *         { // CustomClaimValidationType
 *           inboundTokenClaimName: "STRING_VALUE", // required
 *           inboundTokenClaimValueType: "STRING" || "STRING_ARRAY", // required
 *           authorizingClaimMatchValue: { // AuthorizingClaimMatchValueType
 *             claimMatchValue: { // ClaimMatchValueType Union: only one key present
 *               matchValueString: "STRING_VALUE",
 *               matchValueStringList: [ // MatchValueStringList
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             claimMatchOperator: "EQUALS" || "CONTAINS" || "CONTAINS_ANY", // required
 *           },
 *         },
 *       ],
 *       privateEndpoint: { // PrivateEndpoint Union: only one key present
 *         selfManagedLatticeResource: { // SelfManagedLatticeResource Union: only one key present
 *           resourceConfigurationIdentifier: "STRING_VALUE",
 *         },
 *         managedVpcResource: { // ManagedVpcResource
 *           vpcIdentifier: "STRING_VALUE", // required
 *           subnetIds: [ // SubnetIds // required
 *             "STRING_VALUE",
 *           ],
 *           endpointIpAddressType: "IPV4" || "IPV6", // required
 *           securityGroupIds: [ // SecurityGroupIds
 *             "STRING_VALUE",
 *           ],
 *           tags: { // TagsMap
 *             "<keys>": "STRING_VALUE",
 *           },
 *           routingDomain: "STRING_VALUE",
 *         },
 *       },
 *       privateEndpointOverrides: [ // PrivateEndpointOverrides
 *         { // PrivateEndpointOverride
 *           domain: "STRING_VALUE", // required
 *           privateEndpoint: {//  Union: only one key present
 *             selfManagedLatticeResource: {//  Union: only one key present
 *               resourceConfigurationIdentifier: "STRING_VALUE",
 *             },
 *             managedVpcResource: {
 *               vpcIdentifier: "STRING_VALUE", // required
 *               subnetIds: [ // required
 *                 "STRING_VALUE",
 *               ],
 *               endpointIpAddressType: "IPV4" || "IPV6", // required
 *               securityGroupIds: [
 *                 "STRING_VALUE",
 *               ],
 *               tags: {
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               routingDomain: "STRING_VALUE",
 *             },
 *           },
 *         },
 *       ],
 *     },
 *   },
 *   requestHeaderConfiguration: { // RequestHeaderConfiguration Union: only one key present
 *     requestHeaderAllowlist: [ // RequestHeaderAllowlist
 *       "STRING_VALUE",
 *     ],
 *   },
 *   protocolConfiguration: { // ProtocolConfiguration
 *     serverProtocol: "MCP" || "HTTP" || "A2A" || "AGUI", // required
 *   },
 *   lifecycleConfiguration: { // LifecycleConfiguration
 *     idleRuntimeSessionTimeout: Number("int"),
 *     maxLifetime: Number("int"),
 *   },
 *   environmentVariables: { // EnvironmentVariablesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   filesystemConfigurations: [ // FilesystemConfigurations
 *     { // FilesystemConfiguration Union: only one key present
 *       sessionStorage: { // SessionStorageConfiguration
 *         mountPath: "STRING_VALUE", // required
 *       },
 *       s3FilesAccessPoint: { // S3FilesAccessPointConfiguration
 *         accessPointArn: "STRING_VALUE", // required
 *         mountPath: "STRING_VALUE", // required
 *       },
 *       efsAccessPoint: { // EfsAccessPointConfiguration
 *         accessPointArn: "STRING_VALUE", // required
 *         mountPath: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   tags: "<TagsMap>",
 * };
 * const command = new CreateAgentRuntimeCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentRuntimeResponse
 * //   agentRuntimeArn: "STRING_VALUE", // required
 * //   workloadIdentityDetails: { // WorkloadIdentityDetails
 * //     workloadIdentityArn: "STRING_VALUE", // required
 * //   },
 * //   agentRuntimeId: "STRING_VALUE", // required
 * //   agentRuntimeVersion: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param CreateAgentRuntimeCommandInput - {@link CreateAgentRuntimeCommandInput}
 * @returns {@link CreateAgentRuntimeCommandOutput}
 * @see {@link CreateAgentRuntimeCommandInput} for command's `input` shape.
 * @see {@link CreateAgentRuntimeCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class CreateAgentRuntimeCommand extends $Command
  .classBuilder<
    CreateAgentRuntimeCommandInput,
    CreateAgentRuntimeCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreateAgentRuntime", {})
  .n("BedrockAgentCoreControlClient", "CreateAgentRuntimeCommand")
  .sc(CreateAgentRuntime$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentRuntimeRequest;
      output: CreateAgentRuntimeResponse;
    };
    sdk: {
      input: CreateAgentRuntimeCommandInput;
      output: CreateAgentRuntimeCommandOutput;
    };
  };
}
