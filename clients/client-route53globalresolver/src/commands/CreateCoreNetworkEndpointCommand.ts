// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCoreNetworkEndpointInput, CreateCoreNetworkEndpointOutput } from "../models/models_0";
import { CreateCoreNetworkEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCoreNetworkEndpointCommand}.
 */
export interface CreateCoreNetworkEndpointCommandInput extends CreateCoreNetworkEndpointInput {}
/**
 * @public
 *
 * The output of {@link CreateCoreNetworkEndpointCommand}.
 */
export interface CreateCoreNetworkEndpointCommandOutput extends CreateCoreNetworkEndpointOutput, __MetadataBearer {}

/**
 * <p>Creates a core network endpoint, which enables DNS resolution for Amazon Web Services Cloud WAN core network segments. The endpoint connects a Route 53 Global Resolver to an Amazon Web Services Cloud WAN core network so that resources attached to the core network can send DNS queries to the resolver.</p> <important> <p>Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions, but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify <code>--region us-east-2</code> on Amazon Web Services CLI commands.</p> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, CreateCoreNetworkEndpointCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, CreateCoreNetworkEndpointCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // CreateCoreNetworkEndpointInput
 *   clientToken: "STRING_VALUE",
 *   coreNetworkArn: "STRING_VALUE", // required
 *   globalResolverId: "STRING_VALUE", // required
 *   ipAddresses: [ // CoreNetworkEndpointDnsIpInputItems // required
 *     { // CoreNetworkEndpointDnsIpInputItem
 *       ipv4Address: "STRING_VALUE",
 *       ipv6Address: "STRING_VALUE",
 *       dnsLabel: "STRING_VALUE", // required
 *       regionScope: "ALL" || "REGIONAL", // required
 *       regions: [ // Regions
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCoreNetworkEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateCoreNetworkEndpointOutput
 * //   arn: "STRING_VALUE", // required
 * //   availableRegions: [ // Regions // required
 * //     "STRING_VALUE",
 * //   ],
 * //   coreNetworkArn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   globalResolverId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   ipAddresses: [ // CoreNetworkEndpointDnsIpItems // required
 * //     { // CoreNetworkEndpointDnsIpItem
 * //       ipv4Address: "STRING_VALUE",
 * //       ipv6Address: "STRING_VALUE",
 * //       dnsLabel: "STRING_VALUE", // required
 * //       dnsName: "STRING_VALUE",
 * //       regionScope: "ALL" || "REGIONAL", // required
 * //       regions: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   name: "STRING_VALUE",
 * //   status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateCoreNetworkEndpointCommandInput - {@link CreateCoreNetworkEndpointCommandInput}
 * @returns {@link CreateCoreNetworkEndpointCommandOutput}
 * @see {@link CreateCoreNetworkEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateCoreNetworkEndpointCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check your IAM permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. This can occur when trying to modify a resource that is not in a valid state for the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify the resource ID and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed one or more service quotas. Check your current usage and quotas, then try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Wait a moment and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are invalid. Check the parameter values and try again.</p>
 *
 * @throws {@link Route53GlobalResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53GlobalResolver service.</p>
 *
 *
 * @public
 */
export class CreateCoreNetworkEndpointCommand extends command<CreateCoreNetworkEndpointCommandInput, CreateCoreNetworkEndpointCommandOutput>(
  _ep0,
  _mw0,
  "CreateCoreNetworkEndpoint",
  CreateCoreNetworkEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCoreNetworkEndpointInput;
      output: CreateCoreNetworkEndpointOutput;
    };
    sdk: {
      input: CreateCoreNetworkEndpointCommandInput;
      output: CreateCoreNetworkEndpointCommandOutput;
    };
  };
}
