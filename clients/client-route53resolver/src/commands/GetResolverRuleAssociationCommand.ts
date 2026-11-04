// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResolverRuleAssociationRequest, GetResolverRuleAssociationResponse } from "../models/models_0";
import { GetResolverRuleAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResolverRuleAssociationCommand}.
 */
export interface GetResolverRuleAssociationCommandInput extends GetResolverRuleAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetResolverRuleAssociationCommand}.
 */
export interface GetResolverRuleAssociationCommandOutput extends GetResolverRuleAssociationResponse, __MetadataBearer {}

/**
 * Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using [AssociateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverRuleAssociationCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverRuleAssociationCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // GetResolverRuleAssociationRequest
 *   ResolverRuleAssociationId: "STRING_VALUE", // required
 * };
 * const command = new GetResolverRuleAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetResolverRuleAssociationResponse
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
 * @param GetResolverRuleAssociationCommandInput - {@link GetResolverRuleAssociationCommandInput}
 * @returns {@link GetResolverRuleAssociationCommandOutput}
 * @see {@link GetResolverRuleAssociationCommandInput} for command's `input` shape.
 * @see {@link GetResolverRuleAssociationCommandOutput} for command's `response` shape.
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
export class GetResolverRuleAssociationCommand extends command<GetResolverRuleAssociationCommandInput, GetResolverRuleAssociationCommandOutput>(
  _ep0,
  _mw0,
  "GetResolverRuleAssociation",
  GetResolverRuleAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResolverRuleAssociationRequest;
      output: GetResolverRuleAssociationResponse;
    };
    sdk: {
      input: GetResolverRuleAssociationCommandInput;
      output: GetResolverRuleAssociationCommandOutput;
    };
  };
}
