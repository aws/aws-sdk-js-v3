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
import type { GetRegistryRequest, GetRegistryResponse } from "../models/models_2";
import { GetRegistry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRegistryCommand}.
 */
export interface GetRegistryCommandInput extends GetRegistryRequest {}
/**
 * @public
 *
 * The output of {@link GetRegistryCommand}.
 */
export interface GetRegistryCommandOutput extends GetRegistryResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetRegistryCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetRegistryCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetRegistryRequest
 *   registryId: "STRING_VALUE", // required
 * };
 * const command = new GetRegistryCommand(input);
 * const response = await client.send(command);
 * // { // GetRegistryResponse
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   registryId: "STRING_VALUE", // required
 * //   registryArn: "STRING_VALUE", // required
 * //   authorizerType: "CUSTOM_JWT" || "AWS_IAM",
 * //   authorizerConfiguration: { // AuthorizerConfiguration Union: only one key present
 * //     customJWTAuthorizer: { // CustomJWTAuthorizerConfiguration
 * //       discoveryUrl: "STRING_VALUE", // required
 * //       allowedAudience: [ // AllowedAudienceList
 * //         "STRING_VALUE",
 * //       ],
 * //       allowedClients: [ // AllowedClientsList
 * //         "STRING_VALUE",
 * //       ],
 * //       allowedScopes: [ // AllowedScopesType
 * //         "STRING_VALUE",
 * //       ],
 * //       customClaims: [ // CustomClaimValidationsType
 * //         { // CustomClaimValidationType
 * //           inboundTokenClaimName: "STRING_VALUE", // required
 * //           inboundTokenClaimValueType: "STRING" || "STRING_ARRAY", // required
 * //           authorizingClaimMatchValue: { // AuthorizingClaimMatchValueType
 * //             claimMatchValue: { // ClaimMatchValueType Union: only one key present
 * //               matchValueString: "STRING_VALUE",
 * //               matchValueStringList: [ // MatchValueStringList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             claimMatchOperator: "EQUALS" || "CONTAINS" || "CONTAINS_ANY", // required
 * //           },
 * //         },
 * //       ],
 * //       privateEndpoint: { // PrivateEndpoint Union: only one key present
 * //         selfManagedLatticeResource: { // SelfManagedLatticeResource Union: only one key present
 * //           resourceConfigurationIdentifier: "STRING_VALUE",
 * //         },
 * //         managedVpcResource: { // ManagedVpcResource
 * //           vpcIdentifier: "STRING_VALUE", // required
 * //           subnetIds: [ // SubnetIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //           endpointIpAddressType: "IPV4" || "IPV6", // required
 * //           securityGroupIds: [ // SecurityGroupIds
 * //             "STRING_VALUE",
 * //           ],
 * //           tags: { // TagsMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           routingDomain: "STRING_VALUE",
 * //         },
 * //       },
 * //       privateEndpointOverrides: [ // PrivateEndpointOverrides
 * //         { // PrivateEndpointOverride
 * //           domain: "STRING_VALUE", // required
 * //           privateEndpoint: {//  Union: only one key present
 * //             selfManagedLatticeResource: {//  Union: only one key present
 * //               resourceConfigurationIdentifier: "STRING_VALUE",
 * //             },
 * //             managedVpcResource: {
 * //               vpcIdentifier: "STRING_VALUE", // required
 * //               subnetIds: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               endpointIpAddressType: "IPV4" || "IPV6", // required
 * //               securityGroupIds: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               tags: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               routingDomain: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       allowedWorkloadConfiguration: { // AllowedWorkloadConfiguration
 * //         hostingEnvironments: [ // HostingEnvironmentListType
 * //           { // HostingEnvironment
 * //             arn: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         workloadIdentities: [ // WorkloadIdentityNameListType
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   approvalConfiguration: { // ApprovalConfiguration
 * //     autoApproval: true || false,
 * //   },
 * //   status: "CREATING" || "READY" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED", // required
 * //   statusReason: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetRegistryCommandInput - {@link GetRegistryCommandInput}
 * @returns {@link GetRegistryCommandOutput}
 * @see {@link GetRegistryCommandInput} for command's `input` shape.
 * @see {@link GetRegistryCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
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
export class GetRegistryCommand extends $Command
  .classBuilder<
    GetRegistryCommandInput,
    GetRegistryCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetRegistry", {})
  .n("BedrockAgentCoreControlClient", "GetRegistryCommand")
  .sc(GetRegistry$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRegistryRequest;
      output: GetRegistryResponse;
    };
    sdk: {
      input: GetRegistryCommandInput;
      output: GetRegistryCommandOutput;
    };
  };
}
