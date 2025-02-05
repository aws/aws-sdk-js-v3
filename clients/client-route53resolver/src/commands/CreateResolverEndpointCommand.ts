// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateResolverEndpointRequest, CreateResolverEndpointResponse } from "../models/models_0";
import { de_CreateResolverEndpointCommand, se_CreateResolverEndpointCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p>
 *          <ul>
 *             <li>
 *                <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC
 * 				from your network.</p>
 *             </li>
 *             <li>
 *                <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC
 * 				to your network.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateResolverEndpointCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateResolverEndpointCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53ResolverClient(config);
 * const input = { // CreateResolverEndpointRequest
 *   CreatorRequestId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIds // required
 *     "STRING_VALUE",
 *   ],
 *   Direction: "INBOUND" || "OUTBOUND", // required
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
 * //     Direction: "INBOUND" || "OUTBOUND",
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
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *          <p>This error can also be thrown when a customer has reached the 5120 character limit for a
 * 			resource policy for CloudWatch Logs.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request caused one or more limits to be exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource that you tried to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 * @public
 */
export class CreateResolverEndpointCommand extends $Command
  .classBuilder<
    CreateResolverEndpointCommandInput,
    CreateResolverEndpointCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Resolver", "CreateResolverEndpoint", {})
  .n("Route53ResolverClient", "CreateResolverEndpointCommand")
  .f(void 0, void 0)
  .ser(se_CreateResolverEndpointCommand)
  .de(de_CreateResolverEndpointCommand)
  .build() {
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
