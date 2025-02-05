// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConfigurationsRequest, DescribeConfigurationsResponse } from "../models/models_0";
import { de_DescribeConfigurationsCommand, se_DescribeConfigurationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationsCommand}.
 */
export interface DescribeConfigurationsCommandInput extends DescribeConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationsCommand}.
 */
export interface DescribeConfigurationsCommandOutput extends DescribeConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves attributes for a list of configuration item IDs.</p>
 *          <note>
 *             <p>All of the supplied IDs must be for the same asset type from one of the
 *         following:</p>
 *             <ul>
 *                <li>
 *                   <p>server</p>
 *                </li>
 *                <li>
 *                   <p>application</p>
 *                </li>
 *                <li>
 *                   <p>process</p>
 *                </li>
 *                <li>
 *                   <p>connection</p>
 *                </li>
 *             </ul>
 *             <p>Output fields are specific to the asset type specified. For example, the output for a
 *           <i>server</i> configuration item includes a list of attributes about the
 *         server, such as host name, operating system, number of network cards, etc.</p>
 *             <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>Amazon Web Services Application
 *           Discovery Service User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeConfigurationsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeConfigurationsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // DescribeConfigurationsRequest
 *   configurationIds: [ // ConfigurationIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationsResponse
 * //   configurations: [ // DescribeConfigurationsAttributes
 * //     { // DescribeConfigurationsAttribute
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationsCommandInput - {@link DescribeConfigurationsCommandInput}
 * @returns {@link DescribeConfigurationsCommandOutput}
 * @see {@link DescribeConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 * @public
 */
export class DescribeConfigurationsCommand extends $Command
  .classBuilder<
    DescribeConfigurationsCommandInput,
    DescribeConfigurationsCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPoseidonService_V2015_11_01", "DescribeConfigurations", {})
  .n("ApplicationDiscoveryServiceClient", "DescribeConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConfigurationsCommand)
  .de(de_DescribeConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigurationsRequest;
      output: DescribeConfigurationsResponse;
    };
    sdk: {
      input: DescribeConfigurationsCommandInput;
      output: DescribeConfigurationsCommandOutput;
    };
  };
}
