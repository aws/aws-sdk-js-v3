// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResolverRuleAssociationRequest, GetResolverRuleAssociationResponse } from "../models/models_0";
import { de_GetResolverRuleAssociationCommand, se_GetResolverRuleAssociationCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverRuleAssociationCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverRuleAssociationCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
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
export class GetResolverRuleAssociationCommand extends $Command
  .classBuilder<
    GetResolverRuleAssociationCommandInput,
    GetResolverRuleAssociationCommandOutput,
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
  .s("Route53Resolver", "GetResolverRuleAssociation", {})
  .n("Route53ResolverClient", "GetResolverRuleAssociationCommand")
  .f(void 0, void 0)
  .ser(se_GetResolverRuleAssociationCommand)
  .de(de_GetResolverRuleAssociationCommand)
  .build() {
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
