// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutResolverQueryLogConfigPolicyRequest, PutResolverQueryLogConfigPolicyResponse } from "../models/models_0";
import {
  de_PutResolverQueryLogConfigPolicyCommand,
  se_PutResolverQueryLogConfigPolicyCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutResolverQueryLogConfigPolicyCommand}.
 */
export interface PutResolverQueryLogConfigPolicyCommandInput extends PutResolverQueryLogConfigPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutResolverQueryLogConfigPolicyCommand}.
 */
export interface PutResolverQueryLogConfigPolicyCommandOutput
  extends PutResolverQueryLogConfigPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share,
 * 			and the operations that you want the account to be able to perform on the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, PutResolverQueryLogConfigPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, PutResolverQueryLogConfigPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // PutResolverQueryLogConfigPolicyRequest
 *   Arn: "STRING_VALUE", // required
 *   ResolverQueryLogConfigPolicy: "STRING_VALUE", // required
 * };
 * const command = new PutResolverQueryLogConfigPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutResolverQueryLogConfigPolicyResponse
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param PutResolverQueryLogConfigPolicyCommandInput - {@link PutResolverQueryLogConfigPolicyCommandInput}
 * @returns {@link PutResolverQueryLogConfigPolicyCommandOutput}
 * @see {@link PutResolverQueryLogConfigPolicyCommandInput} for command's `input` shape.
 * @see {@link PutResolverQueryLogConfigPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidPolicyDocument} (client fault)
 *  <p>The specified Resolver rule policy is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class PutResolverQueryLogConfigPolicyCommand extends $Command
  .classBuilder<
    PutResolverQueryLogConfigPolicyCommandInput,
    PutResolverQueryLogConfigPolicyCommandOutput,
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
  .s("Route53Resolver", "PutResolverQueryLogConfigPolicy", {})
  .n("Route53ResolverClient", "PutResolverQueryLogConfigPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutResolverQueryLogConfigPolicyCommand)
  .de(de_PutResolverQueryLogConfigPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResolverQueryLogConfigPolicyRequest;
      output: PutResolverQueryLogConfigPolicyResponse;
    };
    sdk: {
      input: PutResolverQueryLogConfigPolicyCommandInput;
      output: PutResolverQueryLogConfigPolicyCommandOutput;
    };
  };
}
