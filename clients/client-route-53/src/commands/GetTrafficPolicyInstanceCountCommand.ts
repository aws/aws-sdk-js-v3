// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import type { GetTrafficPolicyInstanceCountRequest, GetTrafficPolicyInstanceCountResponse } from "../models/models_0";
import { GetTrafficPolicyInstanceCount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTrafficPolicyInstanceCountCommand}.
 */
export interface GetTrafficPolicyInstanceCountCommandInput extends GetTrafficPolicyInstanceCountRequest {}
/**
 * @public
 *
 * The output of {@link GetTrafficPolicyInstanceCountCommand}.
 */
export interface GetTrafficPolicyInstanceCountCommandOutput extends GetTrafficPolicyInstanceCountResponse, __MetadataBearer {}

/**
 * <p>Gets the number of traffic policy instances that are associated with the current
 * 				Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetTrafficPolicyInstanceCountCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetTrafficPolicyInstanceCountCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = {};
 * const command = new GetTrafficPolicyInstanceCountCommand(input);
 * const response = await client.send(command);
 * // { // GetTrafficPolicyInstanceCountResponse
 * //   TrafficPolicyInstanceCount: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param GetTrafficPolicyInstanceCountCommandInput - {@link GetTrafficPolicyInstanceCountCommandInput}
 * @returns {@link GetTrafficPolicyInstanceCountCommandOutput}
 * @see {@link GetTrafficPolicyInstanceCountCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyInstanceCountCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class GetTrafficPolicyInstanceCountCommand extends command<GetTrafficPolicyInstanceCountCommandInput, GetTrafficPolicyInstanceCountCommandOutput>(
  _ep0,
  _mw2,
  "GetTrafficPolicyInstanceCount",
  GetTrafficPolicyInstanceCount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetTrafficPolicyInstanceCountResponse;
    };
    sdk: {
      input: GetTrafficPolicyInstanceCountCommandInput;
      output: GetTrafficPolicyInstanceCountCommandOutput;
    };
  };
}
