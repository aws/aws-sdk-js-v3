// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateResolverRuleRequest, UpdateResolverRuleResponse } from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { UpdateResolverRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResolverRuleCommand}.
 */
export interface UpdateResolverRuleCommandInput extends UpdateResolverRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResolverRuleCommand}.
 */
export interface UpdateResolverRuleCommandOutput extends UpdateResolverRuleResponse, __MetadataBearer {}

/**
 * <p>Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional.
 * 			If you don't specify a parameter, it retains its current value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // UpdateResolverRuleRequest
 *   ResolverRuleId: "STRING_VALUE", // required
 *   Config: { // ResolverRuleConfig
 *     Name: "STRING_VALUE",
 *     TargetIps: [ // TargetList
 *       { // TargetAddress
 *         Ip: "STRING_VALUE",
 *         Port: Number("int"),
 *         Ipv6: "STRING_VALUE",
 *         Protocol: "DoH" || "Do53" || "DoH-FIPS",
 *         ServerNameIndication: "STRING_VALUE",
 *       },
 *     ],
 *     ResolverEndpointId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateResolverRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResolverRuleResponse
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
 * @param UpdateResolverRuleCommandInput - {@link UpdateResolverRuleCommandInput}
 * @returns {@link UpdateResolverRuleCommandOutput}
 * @see {@link UpdateResolverRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateResolverRuleCommandOutput} for command's `response` shape.
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
export class UpdateResolverRuleCommand extends $Command
  .classBuilder<
    UpdateResolverRuleCommandInput,
    UpdateResolverRuleCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "UpdateResolverRule", {})
  .n("Route53ResolverClient", "UpdateResolverRuleCommand")
  .sc(UpdateResolverRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResolverRuleRequest;
      output: UpdateResolverRuleResponse;
    };
    sdk: {
      input: UpdateResolverRuleCommandInput;
      output: UpdateResolverRuleCommandOutput;
    };
  };
}
