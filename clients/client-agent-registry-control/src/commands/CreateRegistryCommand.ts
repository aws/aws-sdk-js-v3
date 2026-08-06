// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRegistryRequest, CreateRegistryResponse } from "../models/models_0";
import { CreateRegistry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRegistryCommand}.
 */
export interface CreateRegistryCommandInput extends CreateRegistryRequest {}
/**
 * @public
 *
 * The output of {@link CreateRegistryCommand}.
 */
export interface CreateRegistryCommandOutput extends CreateRegistryResponse, __MetadataBearer {}

/**
 * <p>Creates a new registry, a catalog that organizes registry records and defines their discovery authorization and record approval behavior. Creation is asynchronous: the registry begins in the CREATING status and becomes usable once it reaches READY.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, CreateRegistryCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, CreateRegistryCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // CreateRegistryRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   discoveryConfiguration: { // DiscoveryConfiguration
 *     authorizerConfiguration: { // AuthorizerConfiguration Union: only one key present
 *       customJWTAuthorizer: { // CustomJWTAuthorizerConfiguration
 *         discoveryUrl: "STRING_VALUE", // required
 *         allowedAudience: [ // AllowedAudienceList
 *           "STRING_VALUE",
 *         ],
 *         allowedClients: [ // AllowedClientsList
 *           "STRING_VALUE",
 *         ],
 *         allowedScopes: [ // AllowedScopesType
 *           "STRING_VALUE",
 *         ],
 *         customClaims: [ // CustomClaimValidationsType
 *           { // CustomClaimValidationType
 *             inboundTokenClaimName: "STRING_VALUE", // required
 *             inboundTokenClaimValueType: "STRING" || "STRING_ARRAY", // required
 *             authorizingClaimMatchValue: { // AuthorizingClaimMatchValueType
 *               claimMatchValue: { // ClaimMatchValueType Union: only one key present
 *                 matchValueString: "STRING_VALUE",
 *                 matchValueStringList: [ // MatchValueStringList
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               claimMatchOperator: "EQUALS" || "CONTAINS" || "CONTAINS_ANY", // required
 *             },
 *           },
 *         ],
 *         privateEndpoint: { // PrivateEndpoint Union: only one key present
 *           selfManagedLatticeResource: { // SelfManagedLatticeResource Union: only one key present
 *             resourceConfigurationIdentifier: "STRING_VALUE",
 *           },
 *           managedVpcResource: { // ManagedVpcResource
 *             vpcIdentifier: "STRING_VALUE", // required
 *             subnetIds: [ // SubnetIds // required
 *               "STRING_VALUE",
 *             ],
 *             endpointIpAddressType: "IPV4" || "IPV6", // required
 *             securityGroupIds: [ // SecurityGroupIds
 *               "STRING_VALUE",
 *             ],
 *             tags: { // TagsMap
 *               "<keys>": "STRING_VALUE",
 *             },
 *             routingDomain: "STRING_VALUE",
 *           },
 *         },
 *         privateEndpointOverrides: [ // PrivateEndpointOverrides
 *           { // PrivateEndpointOverride
 *             domain: "STRING_VALUE", // required
 *             privateEndpoint: {//  Union: only one key present
 *               selfManagedLatticeResource: {//  Union: only one key present
 *                 resourceConfigurationIdentifier: "STRING_VALUE",
 *               },
 *               managedVpcResource: {
 *                 vpcIdentifier: "STRING_VALUE", // required
 *                 subnetIds: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *                 endpointIpAddressType: "IPV4" || "IPV6", // required
 *                 securityGroupIds: [
 *                   "STRING_VALUE",
 *                 ],
 *                 tags: {
 *                   "<keys>": "STRING_VALUE",
 *                 },
 *                 routingDomain: "STRING_VALUE",
 *               },
 *             },
 *           },
 *         ],
 *       },
 *     },
 *     authorizerType: "CUSTOM_JWT" || "AWS_IAM",
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: "<TagsMap>",
 *   approvalConfiguration: { // ApprovalConfiguration
 *     autoApprovalRules: [ // AutoApprovalRuleList
 *       "APPROVE_ALL",
 *     ],
 *   },
 * };
 * const command = new CreateRegistryCommand(input);
 * const response = await client.send(command);
 * // { // CreateRegistryResponse
 * //   registryArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRegistryCommandInput - {@link CreateRegistryCommandInput}
 * @returns {@link CreateRegistryCommandOutput}
 * @see {@link CreateRegistryCommandInput} for command's `input` shape.
 * @see {@link CreateRegistryCommandOutput} for command's `response` shape.
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
export class CreateRegistryCommand extends command<CreateRegistryCommandInput, CreateRegistryCommandOutput>(
  _ep0,
  _mw0,
  "CreateRegistry",
  CreateRegistry$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRegistryRequest;
      output: CreateRegistryResponse;
    };
    sdk: {
      input: CreateRegistryCommandInput;
      output: CreateRegistryCommandOutput;
    };
  };
}
