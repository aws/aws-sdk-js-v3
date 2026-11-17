// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCoreNetworkEndpointInput, GetCoreNetworkEndpointOutput } from "../models/models_0";
import { GetCoreNetworkEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCoreNetworkEndpointCommand}.
 */
export interface GetCoreNetworkEndpointCommandInput extends GetCoreNetworkEndpointInput {}
/**
 * @public
 *
 * The output of {@link GetCoreNetworkEndpointCommand}.
 */
export interface GetCoreNetworkEndpointCommandOutput extends GetCoreNetworkEndpointOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a core network endpoint.</p> <important> <p>Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions, but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify <code>--region us-east-2</code> on Amazon Web Services CLI commands.</p> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, GetCoreNetworkEndpointCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, GetCoreNetworkEndpointCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // GetCoreNetworkEndpointInput
 *   coreNetworkEndpointId: "STRING_VALUE", // required
 * };
 * const command = new GetCoreNetworkEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetCoreNetworkEndpointOutput
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
 * @param GetCoreNetworkEndpointCommandInput - {@link GetCoreNetworkEndpointCommandInput}
 * @returns {@link GetCoreNetworkEndpointCommandOutput}
 * @see {@link GetCoreNetworkEndpointCommandInput} for command's `input` shape.
 * @see {@link GetCoreNetworkEndpointCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check your IAM permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify the resource ID and try again.</p>
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
export class GetCoreNetworkEndpointCommand extends command<GetCoreNetworkEndpointCommandInput, GetCoreNetworkEndpointCommandOutput>(
  _ep0,
  _mw0,
  "GetCoreNetworkEndpoint",
  GetCoreNetworkEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCoreNetworkEndpointInput;
      output: GetCoreNetworkEndpointOutput;
    };
    sdk: {
      input: GetCoreNetworkEndpointCommandInput;
      output: GetCoreNetworkEndpointCommandOutput;
    };
  };
}
