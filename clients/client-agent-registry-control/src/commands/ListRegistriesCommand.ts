// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRegistriesRequest, ListRegistriesResponse } from "../models/models_0";
import { ListRegistries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRegistriesCommand}.
 */
export interface ListRegistriesCommandInput extends ListRegistriesRequest {}
/**
 * @public
 *
 * The output of {@link ListRegistriesCommand}.
 */
export interface ListRegistriesCommandOutput extends ListRegistriesResponse, __MetadataBearer {}

/**
 * <p>Lists the registries in the caller's account and Region, with optional filtering by status and discovery authorizer type</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, ListRegistriesCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, ListRegistriesCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // ListRegistriesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filters: [ // RegistryFilterList
 *     { // RegistryFilter
 *       name: "status" || "discoveryConfiguration.authorizerType", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListRegistriesCommand(input);
 * const response = await client.send(command);
 * // { // ListRegistriesResponse
 * //   registries: [ // RegistrySummaryList // required
 * //     { // RegistrySummary
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       registryId: "STRING_VALUE", // required
 * //       registryArn: "STRING_VALUE", // required
 * //       discoveryConfiguration: { // DiscoveryConfiguration
 * //         authorizerConfiguration: { // AuthorizerConfiguration Union: only one key present
 * //           customJWTAuthorizer: { // CustomJWTAuthorizerConfiguration
 * //             discoveryUrl: "STRING_VALUE", // required
 * //             allowedAudience: [ // AllowedAudienceList
 * //               "STRING_VALUE",
 * //             ],
 * //             allowedClients: [ // AllowedClientsList
 * //               "STRING_VALUE",
 * //             ],
 * //             allowedScopes: [ // AllowedScopesType
 * //               "STRING_VALUE",
 * //             ],
 * //             customClaims: [ // CustomClaimValidationsType
 * //               { // CustomClaimValidationType
 * //                 inboundTokenClaimName: "STRING_VALUE", // required
 * //                 inboundTokenClaimValueType: "STRING" || "STRING_ARRAY", // required
 * //                 authorizingClaimMatchValue: { // AuthorizingClaimMatchValueType
 * //                   claimMatchValue: { // ClaimMatchValueType Union: only one key present
 * //                     matchValueString: "STRING_VALUE",
 * //                     matchValueStringList: [ // MatchValueStringList
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                   claimMatchOperator: "EQUALS" || "CONTAINS" || "CONTAINS_ANY", // required
 * //                 },
 * //               },
 * //             ],
 * //             privateEndpoint: { // PrivateEndpoint Union: only one key present
 * //               selfManagedLatticeResource: { // SelfManagedLatticeResource Union: only one key present
 * //                 resourceConfigurationIdentifier: "STRING_VALUE",
 * //               },
 * //               managedVpcResource: { // ManagedVpcResource
 * //                 vpcIdentifier: "STRING_VALUE", // required
 * //                 subnetIds: [ // SubnetIds // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 endpointIpAddressType: "IPV4" || "IPV6", // required
 * //                 securityGroupIds: [ // SecurityGroupIds
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 tags: { // TagsMap
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 routingDomain: "STRING_VALUE",
 * //               },
 * //             },
 * //             privateEndpointOverrides: [ // PrivateEndpointOverrides
 * //               { // PrivateEndpointOverride
 * //                 domain: "STRING_VALUE", // required
 * //                 privateEndpoint: {//  Union: only one key present
 * //                   selfManagedLatticeResource: {//  Union: only one key present
 * //                     resourceConfigurationIdentifier: "STRING_VALUE",
 * //                   },
 * //                   managedVpcResource: {
 * //                     vpcIdentifier: "STRING_VALUE", // required
 * //                     subnetIds: [ // required
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     endpointIpAddressType: "IPV4" || "IPV6", // required
 * //                     securityGroupIds: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     tags: {
 * //                       "<keys>": "STRING_VALUE",
 * //                     },
 * //                     routingDomain: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         authorizerType: "CUSTOM_JWT" || "AWS_IAM",
 * //       },
 * //       status: "CREATING" || "READY" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED", // required
 * //       statusReason: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRegistriesCommandInput - {@link ListRegistriesCommandInput}
 * @returns {@link ListRegistriesCommandOutput}
 * @see {@link ListRegistriesCommandInput} for command's `input` shape.
 * @see {@link ListRegistriesCommandOutput} for command's `response` shape.
 * @see {@link AgentRegistryControlClientResolvedConfig | config} for AgentRegistryControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller is not authorized to perform the requested action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unexpected internal error; the caller may retry.</p>
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
export class ListRegistriesCommand extends command<ListRegistriesCommandInput, ListRegistriesCommandOutput>(
  _ep0,
  _mw0,
  "ListRegistries",
  ListRegistries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRegistriesRequest;
      output: ListRegistriesResponse;
    };
    sdk: {
      input: ListRegistriesCommandInput;
      output: ListRegistriesCommandOutput;
    };
  };
}
