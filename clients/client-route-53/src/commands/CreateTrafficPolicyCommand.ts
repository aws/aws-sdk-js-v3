// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import type { CreateTrafficPolicyRequest, CreateTrafficPolicyResponse } from "../models/models_0";
import { CreateTrafficPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTrafficPolicyCommand}.
 */
export interface CreateTrafficPolicyCommandInput extends CreateTrafficPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrafficPolicyCommand}.
 */
export interface CreateTrafficPolicyCommandOutput extends CreateTrafficPolicyResponse, __MetadataBearer {}

/**
 * Creates a traffic policy, which you use to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateTrafficPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateTrafficPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // CreateTrafficPolicyRequest
 *   Name: "STRING_VALUE", // required
 *   Document: "STRING_VALUE", // required
 *   Comment: "STRING_VALUE",
 * };
 * const command = new CreateTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrafficPolicyResponse
 * //   TrafficPolicy: { // TrafficPolicy
 * //     Id: "STRING_VALUE", // required
 * //     Version: Number("int"), // required
 * //     Name: "STRING_VALUE", // required
 * //     Type: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 * //     Document: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrafficPolicyCommandInput - {@link CreateTrafficPolicyCommandInput}
 * @returns {@link CreateTrafficPolicyCommandOutput}
 * @see {@link CreateTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link InvalidTrafficPolicyDocument} (client fault)
 *
 * The format of the traffic policy document that you specified in the `Document` element is not valid.
 *
 * @throws {@link TooManyTrafficPolicies} (client fault)
 *
 * This traffic policy can't be created because the current account has reached the limit on the number of traffic policies.
 *
 * For information about default limits, see [Limits](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html) in the *Amazon Route 53 Developer Guide*.
 *
 * To get the current limit for an account, see [GetAccountLimit](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html).
 *
 * To request a higher limit, [create a case](http://aws.amazon.com/route53-request) with the Amazon Web Services Support Center.
 *
 * @throws {@link TrafficPolicyAlreadyExists} (client fault)
 *
 * A traffic policy that has the same value for `Name` already exists.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class CreateTrafficPolicyCommand extends command<CreateTrafficPolicyCommandInput, CreateTrafficPolicyCommandOutput>(
  _ep0,
  _mw2,
  "CreateTrafficPolicy",
  CreateTrafficPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrafficPolicyRequest;
      output: CreateTrafficPolicyResponse;
    };
    sdk: {
      input: CreateTrafficPolicyCommandInput;
      output: CreateTrafficPolicyCommandOutput;
    };
  };
}
