// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTrafficPolicyInstanceRequest, CreateTrafficPolicyInstanceResponse } from "../models/models_0";
import { CreateTrafficPolicyInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTrafficPolicyInstanceCommand}.
 */
export interface CreateTrafficPolicyInstanceCommandInput extends CreateTrafficPolicyInstanceRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrafficPolicyInstanceCommand}.
 */
export interface CreateTrafficPolicyInstanceCommandOutput extends CreateTrafficPolicyInstanceResponse, __MetadataBearer {}

/**
 * Creates resource record sets in a specified hosted zone based on the settings in a specified traffic policy version. In addition, `CreateTrafficPolicyInstance` associates the resource record sets with a specified domain name (such as example.com) or subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for the domain or subdomain name by using the resource record sets that `CreateTrafficPolicyInstance` created.
 *
 * > **Note:** After you submit an `CreateTrafficPolicyInstance` request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. Use `GetTrafficPolicyInstance` with the `id` of new traffic policy instance to confirm that the `CreateTrafficPolicyInstance` request completed successfully. For more information, see the `State` response element.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // CreateTrafficPolicyInstanceRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   TTL: Number("long"), // required
 *   TrafficPolicyId: "STRING_VALUE", // required
 *   TrafficPolicyVersion: Number("int"), // required
 * };
 * const command = new CreateTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrafficPolicyInstanceResponse
 * //   TrafficPolicyInstance: { // TrafficPolicyInstance
 * //     Id: "STRING_VALUE", // required
 * //     HostedZoneId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     TTL: Number("long"), // required
 * //     State: "STRING_VALUE", // required
 * //     Message: "STRING_VALUE", // required
 * //     TrafficPolicyId: "STRING_VALUE", // required
 * //     TrafficPolicyVersion: Number("int"), // required
 * //     TrafficPolicyType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 * //   },
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrafficPolicyInstanceCommandInput - {@link CreateTrafficPolicyInstanceCommandInput}
 * @returns {@link CreateTrafficPolicyInstanceCommandOutput}
 * @see {@link CreateTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *
 * No hosted zone exists with the ID that you specified.
 *
 * @throws {@link NoSuchTrafficPolicy} (client fault)
 *
 * No traffic policy exists with the specified ID.
 *
 * @throws {@link TooManyTrafficPolicyInstances} (client fault)
 *
 * This traffic policy instance can't be created because the current account has reached the limit on the number of traffic policy instances.
 *
 * For information about default limits, see [Limits](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html) in the *Amazon Route 53 Developer Guide*.
 *
 * For information about how to get the current limit for an account, see [GetAccountLimit](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html).
 *
 * To request a higher limit, [create a case](http://aws.amazon.com/route53-request) with the Amazon Web Services Support Center.
 *
 * @throws {@link TrafficPolicyInstanceAlreadyExists} (client fault)
 *
 * There is already a traffic policy instance with the specified ID.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class CreateTrafficPolicyInstanceCommand extends command<CreateTrafficPolicyInstanceCommandInput, CreateTrafficPolicyInstanceCommandOutput>(
  _ep0,
  _mw0,
  "CreateTrafficPolicyInstance",
  CreateTrafficPolicyInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrafficPolicyInstanceRequest;
      output: CreateTrafficPolicyInstanceResponse;
    };
    sdk: {
      input: CreateTrafficPolicyInstanceCommandInput;
      output: CreateTrafficPolicyInstanceCommandOutput;
    };
  };
}
