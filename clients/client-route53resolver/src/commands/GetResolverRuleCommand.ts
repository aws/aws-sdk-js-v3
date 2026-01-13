// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetResolverRuleRequest, GetResolverRuleResponse } from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { GetResolverRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResolverRuleCommand}.
 */
export interface GetResolverRuleCommandInput extends GetResolverRuleRequest {}
/**
 * @public
 *
 * The output of {@link GetResolverRuleCommand}.
 */
export interface GetResolverRuleCommandOutput extends GetResolverRuleResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the
 * 			outbound Resolver endpoint that the rule is associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // GetResolverRuleRequest
 *   ResolverRuleId: "STRING_VALUE", // required
 * };
 * const command = new GetResolverRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetResolverRuleResponse
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
 * @param GetResolverRuleCommandInput - {@link GetResolverRuleCommandInput}
 * @returns {@link GetResolverRuleCommandOutput}
 * @see {@link GetResolverRuleCommandInput} for command's `input` shape.
 * @see {@link GetResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
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
 *
 * @public
 */
export class GetResolverRuleCommand extends $Command
  .classBuilder<
    GetResolverRuleCommandInput,
    GetResolverRuleCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "GetResolverRule", {})
  .n("Route53ResolverClient", "GetResolverRuleCommand")
  .sc(GetResolverRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResolverRuleRequest;
      output: GetResolverRuleResponse;
    };
    sdk: {
      input: GetResolverRuleCommandInput;
      output: GetResolverRuleCommandOutput;
    };
  };
}
