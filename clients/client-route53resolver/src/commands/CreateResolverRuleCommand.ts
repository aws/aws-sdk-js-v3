// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateResolverRuleRequest, CreateResolverRuleResponse } from "../models/models_0";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { CreateResolverRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateResolverRuleCommand}.
 */
export interface CreateResolverRuleCommandInput extends CreateResolverRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateResolverRuleCommand}.
 */
export interface CreateResolverRuleCommandOutput extends CreateResolverRuleResponse, __MetadataBearer {}

/**
 * <p>For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through,
 * 			one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // CreateResolverRuleRequest
 *   CreatorRequestId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   RuleType: "FORWARD" || "SYSTEM" || "RECURSIVE" || "DELEGATE", // required
 *   DomainName: "STRING_VALUE",
 *   TargetIps: [ // TargetList
 *     { // TargetAddress
 *       Ip: "STRING_VALUE",
 *       Port: Number("int"),
 *       Ipv6: "STRING_VALUE",
 *       Protocol: "DoH" || "Do53" || "DoH-FIPS",
 *       ServerNameIndication: "STRING_VALUE",
 *     },
 *   ],
 *   ResolverEndpointId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DelegationRecord: "STRING_VALUE",
 * };
 * const command = new CreateResolverRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateResolverRuleResponse
 * //   ResolverRule: { // ResolverRule
 * //     Id: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     DomainName: "STRING_VALUE",
 * //     Status: "COMPLETE" || "DELETING" || "UPDATING" || "FAILED",
 * //     StatusMessage: "STRING_VALUE",
 * //     RuleType: "FORWARD" || "SYSTEM" || "RECURSIVE" || "DELEGATE",
 * //     Name: "STRING_VALUE",
 * //     TargetIps: [ // TargetList
 * //       { // TargetAddress
 * //         Ip: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         Ipv6: "STRING_VALUE",
 * //         Protocol: "DoH" || "Do53" || "DoH-FIPS",
 * //         ServerNameIndication: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ResolverEndpointId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     ShareStatus: "NOT_SHARED" || "SHARED_WITH_ME" || "SHARED_BY_ME",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //     DelegationRecord: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateResolverRuleCommandInput - {@link CreateResolverRuleCommandInput}
 * @returns {@link CreateResolverRuleCommandOutput}
 * @see {@link CreateResolverRuleCommandInput} for command's `input` shape.
 * @see {@link CreateResolverRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource isn't available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class CreateResolverRuleCommand extends $Command
  .classBuilder<
    CreateResolverRuleCommandInput,
    CreateResolverRuleCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "CreateResolverRule", {})
  .n("Route53ResolverClient", "CreateResolverRuleCommand")
  .sc(CreateResolverRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResolverRuleRequest;
      output: CreateResolverRuleResponse;
    };
    sdk: {
      input: CreateResolverRuleCommandInput;
      output: CreateResolverRuleCommandOutput;
    };
  };
}
