// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateResolverEndpointRequest, CreateResolverEndpointResponse } from "../models/models_0";
import { CreateResolverEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateResolverEndpointCommand}.
 */
export interface CreateResolverEndpointCommandInput extends CreateResolverEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateResolverEndpointCommand}.
 */
export interface CreateResolverEndpointCommandOutput extends CreateResolverEndpointResponse, __MetadataBearer {}

/**
 * Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:
 *
 * - An *inbound Resolver endpoint* forwards DNS queries to the DNS service for a VPC from your network.
 * - An *outbound Resolver endpoint* forwards DNS queries from the DNS service for a VPC to your network.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateResolverEndpointCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateResolverEndpointCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // CreateResolverEndpointRequest
 *   CreatorRequestId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIds // required
 *     "STRING_VALUE",
 *   ],
 *   Direction: "INBOUND" || "OUTBOUND" || "INBOUND_DELEGATION", // required
 *   IpAddresses: [ // IpAddressesRequest // required
 *     { // IpAddressRequest
 *       SubnetId: "STRING_VALUE", // required
 *       Ip: "STRING_VALUE",
 *       Ipv6: "STRING_VALUE",
 *     },
 *   ],
 *   OutpostArn: "STRING_VALUE",
 *   PreferredInstanceType: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ResolverEndpointType: "IPV6" || "IPV4" || "DUALSTACK",
 *   Protocols: [ // ProtocolList
 *     "DoH" || "Do53" || "DoH-FIPS",
 *   ],
 *   RniEnhancedMetricsEnabled: true || false,
 *   TargetNameServerMetricsEnabled: true || false,
 *   Dns64Enabled: true || false,
 *   Ipv6InternetAccessEnabled: true || false,
 * };
 * const command = new CreateResolverEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateResolverEndpointResponse
 * //   ResolverEndpoint: { // ResolverEndpoint
 * //     Id: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     SecurityGroupIds: [ // SecurityGroupIds
 * //       "STRING_VALUE",
 * //     ],
 * //     Direction: "INBOUND" || "OUTBOUND" || "INBOUND_DELEGATION",
 * //     IpAddressCount: Number("int"),
 * //     HostVPCId: "STRING_VALUE",
 * //     Status: "CREATING" || "OPERATIONAL" || "UPDATING" || "AUTO_RECOVERING" || "ACTION_NEEDED" || "DELETING",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //     PreferredInstanceType: "STRING_VALUE",
 * //     ResolverEndpointType: "IPV6" || "IPV4" || "DUALSTACK",
 * //     Protocols: [ // ProtocolList
 * //       "DoH" || "Do53" || "DoH-FIPS",
 * //     ],
 * //     RniEnhancedMetricsEnabled: true || false,
 * //     TargetNameServerMetricsEnabled: true || false,
 * //     Dns64Enabled: true || false,
 * //     Ipv6InternetAccessEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateResolverEndpointCommandInput - {@link CreateResolverEndpointCommandInput}
 * @returns {@link CreateResolverEndpointCommandOutput}
 * @see {@link CreateResolverEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateResolverEndpointCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The current account doesn't have the IAM permissions required to perform the specified Resolver operation.
 *
 * This error can also be thrown when a customer has reached the 5120 character limit for a resource policy for CloudWatch Logs.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *
 * We encountered an unknown error. Try again in a few minutes.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters in this request are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request caused one or more limits to be exceeded.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource that you tried to create already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled. Try again in a few minutes.
 *
 * @throws {@link Route53ResolverServiceException}
 *
 * Base exception class for all service exceptions from Route53Resolver service.
 *
 * @public
 */
export class CreateResolverEndpointCommand extends command<CreateResolverEndpointCommandInput, CreateResolverEndpointCommandOutput>(
  _ep0,
  _mw0,
  "CreateResolverEndpoint",
  CreateResolverEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResolverEndpointRequest;
      output: CreateResolverEndpointResponse;
    };
    sdk: {
      input: CreateResolverEndpointCommandInput;
      output: CreateResolverEndpointCommandOutput;
    };
  };
}
