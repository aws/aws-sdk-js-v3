// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRegistryRequest, UpdateRegistryResponse } from "../models/models_0";
import { UpdateRegistry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRegistryCommand}.
 */
export interface UpdateRegistryCommandInput extends UpdateRegistryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRegistryCommand}.
 */
export interface UpdateRegistryCommandOutput extends UpdateRegistryResponse, __MetadataBearer {}

/**
 * <p>Updates an existing registry. This operation uses PATCH semantics: specify only the fields you want to change, and omit the rest to leave them unchanged. Updates are applied asynchronously and the registry transitions to the UPDATING status while they are processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, UpdateRegistryCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, UpdateRegistryCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // UpdateRegistryRequest
 *   registryId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: { // UpdatedDescription
 *     optionalValue: "STRING_VALUE",
 *   },
 *   discoveryConfiguration: { // UpdatedDiscoveryConfiguration
 *     authorizerConfiguration: { // UpdatedAuthorizerConfiguration
 *       optionalValue: { // AuthorizerConfiguration Union: only one key present
 *         customJWTAuthorizer: { // CustomJWTAuthorizerConfiguration
 *           discoveryUrl: "STRING_VALUE", // required
 *           allowedAudience: [ // AllowedAudienceList
 *             "STRING_VALUE",
 *           ],
 *           allowedClients: [ // AllowedClientsList
 *             "STRING_VALUE",
 *           ],
 *           allowedScopes: [ // AllowedScopesType
 *             "STRING_VALUE",
 *           ],
 *           customClaims: [ // CustomClaimValidationsType
 *             { // CustomClaimValidationType
 *               inboundTokenClaimName: "STRING_VALUE", // required
 *               inboundTokenClaimValueType: "STRING" || "STRING_ARRAY", // required
 *               authorizingClaimMatchValue: { // AuthorizingClaimMatchValueType
 *                 claimMatchValue: { // ClaimMatchValueType Union: only one key present
 *                   matchValueString: "STRING_VALUE",
 *                   matchValueStringList: [ // MatchValueStringList
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *                 claimMatchOperator: "EQUALS" || "CONTAINS" || "CONTAINS_ANY", // required
 *               },
 *             },
 *           ],
 *           privateEndpoint: { // PrivateEndpoint Union: only one key present
 *             selfManagedLatticeResource: { // SelfManagedLatticeResource Union: only one key present
 *               resourceConfigurationIdentifier: "STRING_VALUE",
 *             },
 *             managedVpcResource: { // ManagedVpcResource
 *               vpcIdentifier: "STRING_VALUE", // required
 *               subnetIds: [ // SubnetIds // required
 *                 "STRING_VALUE",
 *               ],
 *               endpointIpAddressType: "IPV4" || "IPV6", // required
 *               securityGroupIds: [ // SecurityGroupIds
 *                 "STRING_VALUE",
 *               ],
 *               tags: { // TagsMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               routingDomain: "STRING_VALUE",
 *             },
 *           },
 *           privateEndpointOverrides: [ // PrivateEndpointOverrides
 *             { // PrivateEndpointOverride
 *               domain: "STRING_VALUE", // required
 *               privateEndpoint: {//  Union: only one key present
 *                 selfManagedLatticeResource: {//  Union: only one key present
 *                   resourceConfigurationIdentifier: "STRING_VALUE",
 *                 },
 *                 managedVpcResource: {
 *                   vpcIdentifier: "STRING_VALUE", // required
 *                   subnetIds: [ // required
 *                     "STRING_VALUE",
 *                   ],
 *                   endpointIpAddressType: "IPV4" || "IPV6", // required
 *                   securityGroupIds: [
 *                     "STRING_VALUE",
 *                   ],
 *                   tags: {
 *                     "<keys>": "STRING_VALUE",
 *                   },
 *                   routingDomain: "STRING_VALUE",
 *                 },
 *               },
 *             },
 *           ],
 *         },
 *       },
 *     },
 *   },
 *   approvalConfiguration: { // UpdatedApprovalConfiguration
 *     optionalValue: { // ApprovalConfiguration
 *       autoApprovalRules: [ // AutoApprovalRuleList
 *         "APPROVE_ALL",
 *       ],
 *     },
 *   },
 *   autoDetectionConfiguration: { // UpdatedAutoDetectionConfiguration
 *     optionalValue: { // AutoDetectionConfiguration
 *       scope: "ORGANIZATION", // required
 *       enabled: true || false, // required
 *     },
 *   },
 * };
 * const command = new UpdateRegistryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRegistryResponse
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   registryId: "STRING_VALUE", // required
 * //   registryArn: "STRING_VALUE", // required
 * //   discoveryConfiguration: { // DiscoveryConfiguration
 * //     authorizerConfiguration: { // AuthorizerConfiguration Union: only one key present
 * //       customJWTAuthorizer: { // CustomJWTAuthorizerConfiguration
 * //         discoveryUrl: "STRING_VALUE", // required
 * //         allowedAudience: [ // AllowedAudienceList
 * //           "STRING_VALUE",
 * //         ],
 * //         allowedClients: [ // AllowedClientsList
 * //           "STRING_VALUE",
 * //         ],
 * //         allowedScopes: [ // AllowedScopesType
 * //           "STRING_VALUE",
 * //         ],
 * //         customClaims: [ // CustomClaimValidationsType
 * //           { // CustomClaimValidationType
 * //             inboundTokenClaimName: "STRING_VALUE", // required
 * //             inboundTokenClaimValueType: "STRING" || "STRING_ARRAY", // required
 * //             authorizingClaimMatchValue: { // AuthorizingClaimMatchValueType
 * //               claimMatchValue: { // ClaimMatchValueType Union: only one key present
 * //                 matchValueString: "STRING_VALUE",
 * //                 matchValueStringList: [ // MatchValueStringList
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               claimMatchOperator: "EQUALS" || "CONTAINS" || "CONTAINS_ANY", // required
 * //             },
 * //           },
 * //         ],
 * //         privateEndpoint: { // PrivateEndpoint Union: only one key present
 * //           selfManagedLatticeResource: { // SelfManagedLatticeResource Union: only one key present
 * //             resourceConfigurationIdentifier: "STRING_VALUE",
 * //           },
 * //           managedVpcResource: { // ManagedVpcResource
 * //             vpcIdentifier: "STRING_VALUE", // required
 * //             subnetIds: [ // SubnetIds // required
 * //               "STRING_VALUE",
 * //             ],
 * //             endpointIpAddressType: "IPV4" || "IPV6", // required
 * //             securityGroupIds: [ // SecurityGroupIds
 * //               "STRING_VALUE",
 * //             ],
 * //             tags: { // TagsMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             routingDomain: "STRING_VALUE",
 * //           },
 * //         },
 * //         privateEndpointOverrides: [ // PrivateEndpointOverrides
 * //           { // PrivateEndpointOverride
 * //             domain: "STRING_VALUE", // required
 * //             privateEndpoint: {//  Union: only one key present
 * //               selfManagedLatticeResource: {//  Union: only one key present
 * //                 resourceConfigurationIdentifier: "STRING_VALUE",
 * //               },
 * //               managedVpcResource: {
 * //                 vpcIdentifier: "STRING_VALUE", // required
 * //                 subnetIds: [ // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 endpointIpAddressType: "IPV4" || "IPV6", // required
 * //                 securityGroupIds: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 tags: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 routingDomain: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     authorizerType: "CUSTOM_JWT" || "AWS_IAM",
 * //   },
 * //   encryptionConfiguration: { // EncryptionConfiguration
 * //     kmsKeyArn: "STRING_VALUE", // required
 * //   },
 * //   approvalConfiguration: { // ApprovalConfiguration
 * //     autoApprovalRules: [ // AutoApprovalRuleList
 * //       "APPROVE_ALL",
 * //     ],
 * //   },
 * //   status: "CREATING" || "READY" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED", // required
 * //   statusReason: "STRING_VALUE",
 * //   autoDetection: { // AutoDetection
 * //     configuration: { // AutoDetectionConfiguration
 * //       scope: "ORGANIZATION", // required
 * //       enabled: true || false, // required
 * //     },
 * //     status: "ACTIVE" || "INACTIVE", // required
 * //     statusReason: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateRegistryCommandInput - {@link UpdateRegistryCommandInput}
 * @returns {@link UpdateRegistryCommandOutput}
 * @see {@link UpdateRegistryCommandInput} for command's `input` shape.
 * @see {@link UpdateRegistryCommandOutput} for command's `response` shape.
 * @see {@link AgentRegistryControlClientResolvedConfig | config} for AgentRegistryControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller is not authorized to perform the requested action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unexpected internal error; the caller may retry.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling; the caller may retry after a delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation of one or more input fields.</p>
 *
 * @throws {@link AgentRegistryControlServiceException}
 * <p>Base exception class for all service exceptions from AgentRegistryControl service.</p>
 *
 *
 * @public
 */
export class UpdateRegistryCommand extends command<UpdateRegistryCommandInput, UpdateRegistryCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRegistry",
  UpdateRegistry$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRegistryRequest;
      output: UpdateRegistryResponse;
    };
    sdk: {
      input: UpdateRegistryCommandInput;
      output: UpdateRegistryCommandOutput;
    };
  };
}
