// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePaymentManagerRequest, CreatePaymentManagerResponse } from "../models/models_1";
import { CreatePaymentManager$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePaymentManagerCommand}.
 */
export interface CreatePaymentManagerCommandInput extends CreatePaymentManagerRequest {}
/**
 * @public
 *
 * The output of {@link CreatePaymentManagerCommand}.
 */
export interface CreatePaymentManagerCommandOutput extends CreatePaymentManagerResponse, __MetadataBearer {}

/**
 * <p>Creates a new payment manager in your Amazon Web Services account. A payment manager serves as the top-level resource for managing payment processing capabilities, including payment connectors that integrate with supported payment providers.</p> <p>If you specify <code>CUSTOM_JWT</code> as the <code>authorizerType</code>, you must provide an <code>authorizerConfiguration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreatePaymentManagerCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreatePaymentManagerCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreatePaymentManagerRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   authorizerType: "CUSTOM_JWT" || "AWS_IAM", // required
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
 *       allowedWorkloadConfiguration: { // AllowedWorkloadConfiguration
 *         hostingEnvironments: [ // HostingEnvironmentListType
 *           { // HostingEnvironment
 *             arn: "STRING_VALUE", // required
 *           },
 *         ],
 *         workloadIdentities: [ // WorkloadIdentityNameListType
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   roleArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: "<TagsMap>",
 * };
 * const command = new CreatePaymentManagerCommand(input);
 * const response = await client.send(command);
 * // { // CreatePaymentManagerResponse
 * //   paymentManagerArn: "STRING_VALUE", // required
 * //   paymentManagerId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   authorizerType: "CUSTOM_JWT" || "AWS_IAM", // required
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
 * //   roleArn: "STRING_VALUE", // required
 * //   workloadIdentityDetails: { // WorkloadIdentityDetails
 * //     workloadIdentityArn: "STRING_VALUE", // required
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "UPDATING" || "DELETING" || "READY" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //   tags: "<TagsMap>",
 * // };
 *
 * ```
 *
 * @param CreatePaymentManagerCommandInput - {@link CreatePaymentManagerCommandInput}
 * @returns {@link CreatePaymentManagerCommandOutput}
 * @see {@link CreatePaymentManagerCommandInput} for command's `input` shape.
 * @see {@link CreatePaymentManagerCommandOutput} for command's `response` shape.
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
export class CreatePaymentManagerCommand extends command<CreatePaymentManagerCommandInput, CreatePaymentManagerCommandOutput>(
  _ep0,
  _mw0,
  "CreatePaymentManager",
  CreatePaymentManager$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePaymentManagerRequest;
      output: CreatePaymentManagerResponse;
    };
    sdk: {
      input: CreatePaymentManagerCommandInput;
      output: CreatePaymentManagerCommandOutput;
    };
  };
}
