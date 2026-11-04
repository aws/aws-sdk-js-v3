// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTrafficPolicyInstanceRequest, GetTrafficPolicyInstanceResponse } from "../models/models_0";
import { GetTrafficPolicyInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTrafficPolicyInstanceCommand}.
 */
export interface GetTrafficPolicyInstanceCommandInput extends GetTrafficPolicyInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetTrafficPolicyInstanceCommand}.
 */
export interface GetTrafficPolicyInstanceCommandOutput extends GetTrafficPolicyInstanceResponse, __MetadataBearer {}

/**
 * Gets information about a specified traffic policy instance.
 *
 * > **Note:** Use `GetTrafficPolicyInstance` with the `id` of new traffic policy instance to confirm that the `CreateTrafficPolicyInstance` or an `UpdateTrafficPolicyInstance` request completed successfully. For more information, see the `State` response element.
 *
 * > **Note:** In the Route 53 console, traffic policy instances are known as policy records.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // GetTrafficPolicyInstanceRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetTrafficPolicyInstanceResponse
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
 * // };
 *
 * ```
 *
 * @param GetTrafficPolicyInstanceCommandInput - {@link GetTrafficPolicyInstanceCommandInput}
 * @returns {@link GetTrafficPolicyInstanceCommandOutput}
 * @see {@link GetTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link NoSuchTrafficPolicyInstance} (client fault)
 *
 * No traffic policy instance exists with the specified ID.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class GetTrafficPolicyInstanceCommand extends command<GetTrafficPolicyInstanceCommandInput, GetTrafficPolicyInstanceCommandOutput>(
  _ep0,
  _mw0,
  "GetTrafficPolicyInstance",
  GetTrafficPolicyInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrafficPolicyInstanceRequest;
      output: GetTrafficPolicyInstanceResponse;
    };
    sdk: {
      input: GetTrafficPolicyInstanceCommandInput;
      output: GetTrafficPolicyInstanceCommandOutput;
    };
  };
}
