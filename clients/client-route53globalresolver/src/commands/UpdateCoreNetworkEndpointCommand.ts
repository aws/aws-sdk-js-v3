// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCoreNetworkEndpointInput, UpdateCoreNetworkEndpointOutput } from "../models/models_0";
import { UpdateCoreNetworkEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCoreNetworkEndpointCommand}.
 */
export interface UpdateCoreNetworkEndpointCommandInput extends UpdateCoreNetworkEndpointInput {}
/**
 * @public
 *
 * The output of {@link UpdateCoreNetworkEndpointCommand}.
 */
export interface UpdateCoreNetworkEndpointCommandOutput extends UpdateCoreNetworkEndpointOutput, __MetadataBearer {}

/**
 * <p>Updates the configuration of a core network endpoint. You can change the name and modify the IP addresses that the endpoint uses for DNS resolution.</p> <important> <p>Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions, but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify <code>--region us-east-2</code> on Amazon Web Services CLI commands.</p> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, UpdateCoreNetworkEndpointCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, UpdateCoreNetworkEndpointCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // UpdateCoreNetworkEndpointInput
 *   coreNetworkEndpointId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   updateIpAddresses: [ // UpdateIpAddressList
 *     { // UpdateIpAddressEntry
 *       operation: "ADD" || "REMOVE" || "UPDATE", // required
 *       ipv4Address: "STRING_VALUE",
 *       ipv6Address: "STRING_VALUE",
 *       dnsLabel: "STRING_VALUE",
 *       regionScope: "ALL" || "REGIONAL",
 *       regions: [ // Regions
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateCoreNetworkEndpointCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCoreNetworkEndpointOutput
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
 * @param UpdateCoreNetworkEndpointCommandInput - {@link UpdateCoreNetworkEndpointCommandInput}
 * @returns {@link UpdateCoreNetworkEndpointCommandOutput}
 * @see {@link UpdateCoreNetworkEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateCoreNetworkEndpointCommandOutput} for command's `response` shape.
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
export class UpdateCoreNetworkEndpointCommand extends command<UpdateCoreNetworkEndpointCommandInput, UpdateCoreNetworkEndpointCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCoreNetworkEndpoint",
  UpdateCoreNetworkEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCoreNetworkEndpointInput;
      output: UpdateCoreNetworkEndpointOutput;
    };
    sdk: {
      input: UpdateCoreNetworkEndpointCommandInput;
      output: UpdateCoreNetworkEndpointCommandOutput;
    };
  };
}
