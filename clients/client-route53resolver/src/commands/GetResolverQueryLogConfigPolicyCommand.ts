// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetResolverQueryLogConfigPolicyRequest,
  GetResolverQueryLogConfigPolicyResponse,
} from "../models/models_0";
import { GetResolverQueryLogConfigPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResolverQueryLogConfigPolicyCommand}.
 */
export interface GetResolverQueryLogConfigPolicyCommandInput extends GetResolverQueryLogConfigPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetResolverQueryLogConfigPolicyCommand}.
 */
export interface GetResolverQueryLogConfigPolicyCommandOutput extends GetResolverQueryLogConfigPolicyResponse, __MetadataBearer {}

/**
 * Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another Amazon Web Services account to be able to use.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverQueryLogConfigPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverQueryLogConfigPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // GetResolverQueryLogConfigPolicyRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetResolverQueryLogConfigPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetResolverQueryLogConfigPolicyResponse
 * //   ResolverQueryLogConfigPolicy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResolverQueryLogConfigPolicyCommandInput - {@link GetResolverQueryLogConfigPolicyCommandInput}
 * @returns {@link GetResolverQueryLogConfigPolicyCommandOutput}
 * @see {@link GetResolverQueryLogConfigPolicyCommandInput} for command's `input` shape.
 * @see {@link GetResolverQueryLogConfigPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link UnknownResourceException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link Route53ResolverServiceException}
 *
 * Base exception class for all service exceptions from Route53Resolver service.
 *
 * @public
 */
export class GetResolverQueryLogConfigPolicyCommand extends command<GetResolverQueryLogConfigPolicyCommandInput, GetResolverQueryLogConfigPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetResolverQueryLogConfigPolicy",
  GetResolverQueryLogConfigPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResolverQueryLogConfigPolicyRequest;
      output: GetResolverQueryLogConfigPolicyResponse;
    };
    sdk: {
      input: GetResolverQueryLogConfigPolicyCommandInput;
      output: GetResolverQueryLogConfigPolicyCommandOutput;
    };
  };
}
