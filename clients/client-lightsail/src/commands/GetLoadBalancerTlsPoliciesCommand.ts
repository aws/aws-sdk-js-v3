// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLoadBalancerTlsPoliciesRequest, GetLoadBalancerTlsPoliciesResult } from "../models/models_1";
import { GetLoadBalancerTlsPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLoadBalancerTlsPoliciesCommand}.
 */
export interface GetLoadBalancerTlsPoliciesCommandInput extends GetLoadBalancerTlsPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link GetLoadBalancerTlsPoliciesCommand}.
 */
export interface GetLoadBalancerTlsPoliciesCommandOutput extends GetLoadBalancerTlsPoliciesResult, __MetadataBearer {}

/**
 * Returns a list of TLS security policies that you can apply to Lightsail load balancers.
 *
 * For more information about load balancer TLS security policies, see [Configuring TLS security policies on your Amazon Lightsail load balancers](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-configure-load-balancer-tls-security-policy) in the *Amazon Lightsail Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetLoadBalancerTlsPoliciesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetLoadBalancerTlsPoliciesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetLoadBalancerTlsPoliciesRequest
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetLoadBalancerTlsPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // GetLoadBalancerTlsPoliciesResult
 * //   tlsPolicies: [ // LoadBalancerTlsPolicyList
 * //     { // LoadBalancerTlsPolicy
 * //       name: "STRING_VALUE",
 * //       isDefault: true || false,
 * //       description: "STRING_VALUE",
 * //       protocols: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       ciphers: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLoadBalancerTlsPoliciesCommandInput - {@link GetLoadBalancerTlsPoliciesCommandInput}
 * @returns {@link GetLoadBalancerTlsPoliciesCommandOutput}
 * @see {@link GetLoadBalancerTlsPoliciesCommandInput} for command's `input` shape.
 * @see {@link GetLoadBalancerTlsPoliciesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *
 * Lightsail throws this exception when an account is still in the setup in progress state.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Lightsail throws this exception when user input does not conform to the validation rules of an input field.
 *
 * > **Note:** Domain and distribution APIs are only available in the N. Virginia (`us-east-1`) Amazon Web Services Region. Please set your Amazon Web Services Region configuration to `us-east-1` to create, view, or edit these resources.
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *
 * Lightsail throws this exception when an operation is performed on resources in an opt-in Region that is currently being set up.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * A general service exception.
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *
 * Lightsail throws this exception when the user has not been authenticated.
 *
 * @throws {@link LightsailServiceException}
 *
 * Base exception class for all service exceptions from Lightsail service.
 *
 * @public
 */
export class GetLoadBalancerTlsPoliciesCommand extends command<GetLoadBalancerTlsPoliciesCommandInput, GetLoadBalancerTlsPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "GetLoadBalancerTlsPolicies",
  GetLoadBalancerTlsPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLoadBalancerTlsPoliciesRequest;
      output: GetLoadBalancerTlsPoliciesResult;
    };
    sdk: {
      input: GetLoadBalancerTlsPoliciesCommandInput;
      output: GetLoadBalancerTlsPoliciesCommandOutput;
    };
  };
}
