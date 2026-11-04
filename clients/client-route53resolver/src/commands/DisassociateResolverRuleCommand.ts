// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateResolverRuleRequest, DisassociateResolverRuleResponse } from "../models/models_0";
import { DisassociateResolverRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateResolverRuleCommand}.
 */
export interface DisassociateResolverRuleCommandInput extends DisassociateResolverRuleRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateResolverRuleCommand}.
 */
export interface DisassociateResolverRuleCommandOutput extends DisassociateResolverRuleResponse, __MetadataBearer {}

/**
 * Removes the association between a specified Resolver rule and a specified VPC.
 *
 * > **Important:** If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DisassociateResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // DisassociateResolverRuleRequest
 *   VPCId: "STRING_VALUE", // required
 *   ResolverRuleId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateResolverRuleCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateResolverRuleResponse
 * //   ResolverRuleAssociation: { // ResolverRuleAssociation
 * //     Id: "STRING_VALUE",
 * //     ResolverRuleId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     VPCId: "STRING_VALUE",
 * //     Status: "CREATING" || "COMPLETE" || "DELETING" || "FAILED" || "OVERRIDDEN",
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateResolverRuleCommandInput - {@link DisassociateResolverRuleCommandInput}
 * @returns {@link DisassociateResolverRuleCommandOutput}
 * @see {@link DisassociateResolverRuleCommandInput} for command's `input` shape.
 * @see {@link DisassociateResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
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
export class DisassociateResolverRuleCommand extends command<DisassociateResolverRuleCommandInput, DisassociateResolverRuleCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateResolverRule",
  DisassociateResolverRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateResolverRuleRequest;
      output: DisassociateResolverRuleResponse;
    };
    sdk: {
      input: DisassociateResolverRuleCommandInput;
      output: DisassociateResolverRuleCommandOutput;
    };
  };
}
