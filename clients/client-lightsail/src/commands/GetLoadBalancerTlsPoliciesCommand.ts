// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetLoadBalancerTlsPoliciesRequest, GetLoadBalancerTlsPoliciesResult } from "../models/models_1";
import { de_GetLoadBalancerTlsPoliciesCommand, se_GetLoadBalancerTlsPoliciesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of TLS security policies that you can apply to Lightsail load
 *       balancers.</p>
 *          <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load
 *         balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetLoadBalancerTlsPoliciesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetLoadBalancerTlsPoliciesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 * @public
 */
export class GetLoadBalancerTlsPoliciesCommand extends $Command
  .classBuilder<
    GetLoadBalancerTlsPoliciesCommandInput,
    GetLoadBalancerTlsPoliciesCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetLoadBalancerTlsPolicies", {})
  .n("LightsailClient", "GetLoadBalancerTlsPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_GetLoadBalancerTlsPoliciesCommand)
  .de(de_GetLoadBalancerTlsPoliciesCommand)
  .build() {
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
