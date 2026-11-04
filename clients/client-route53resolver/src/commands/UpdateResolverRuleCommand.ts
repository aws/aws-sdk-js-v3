// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateResolverRuleRequest, UpdateResolverRuleResponse } from "../models/models_0";
import { UpdateResolverRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates settings for a specified Resolver rule. `ResolverRuleId` is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.
 *
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *
 * The specified resource isn't available.
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
export class UpdateResolverRuleCommand extends command<UpdateResolverRuleCommandInput, UpdateResolverRuleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateResolverRule",
  UpdateResolverRule$
) {
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
