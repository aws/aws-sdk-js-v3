// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConfigurationAggregatorsRequest, DescribeConfigurationAggregatorsResponse } from "../models/models_0";
import {
  de_DescribeConfigurationAggregatorsCommand,
  se_DescribeConfigurationAggregatorsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationAggregatorsCommand}.
 */
export interface DescribeConfigurationAggregatorsCommandInput extends DescribeConfigurationAggregatorsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationAggregatorsCommand}.
 */
export interface DescribeConfigurationAggregatorsCommandOutput
  extends DescribeConfigurationAggregatorsResponse,
    __MetadataBearer {}

/**
 * <p>Returns the details of one or more configuration aggregators.
 * 			If the configuration aggregator is not specified, this operation
 * 			returns the details for all the configuration aggregators associated
 * 			with the account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigurationAggregatorsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigurationAggregatorsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConfigurationAggregatorsRequest
 *   ConfigurationAggregatorNames: [ // ConfigurationAggregatorNameList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeConfigurationAggregatorsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationAggregatorsResponse
 * //   ConfigurationAggregators: [ // ConfigurationAggregatorList
 * //     { // ConfigurationAggregator
 * //       ConfigurationAggregatorName: "STRING_VALUE",
 * //       ConfigurationAggregatorArn: "STRING_VALUE",
 * //       AccountAggregationSources: [ // AccountAggregationSourceList
 * //         { // AccountAggregationSource
 * //           AccountIds: [ // AccountAggregationSourceAccountList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           AllAwsRegions: true || false,
 * //           AwsRegions: [ // AggregatorRegionList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       OrganizationAggregationSource: { // OrganizationAggregationSource
 * //         RoleArn: "STRING_VALUE", // required
 * //         AwsRegions: [
 * //           "STRING_VALUE",
 * //         ],
 * //         AllAwsRegions: true || false,
 * //       },
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       CreatedBy: "STRING_VALUE",
 * //       AggregatorFilters: { // AggregatorFilters
 * //         ResourceType: { // AggregatorFilterResourceType
 * //           Type: "INCLUDE",
 * //           Value: [ // ResourceTypeValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         ServicePrincipal: { // AggregatorFilterServicePrincipal
 * //           Type: "INCLUDE",
 * //           Value: [ // ServicePrincipalValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationAggregatorsCommandInput - {@link DescribeConfigurationAggregatorsCommandInput}
 * @returns {@link DescribeConfigurationAggregatorsCommandOutput}
 * @see {@link DescribeConfigurationAggregatorsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationAggregatorsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link NoSuchConfigurationAggregatorException} (client fault)
 *  <p>You have specified a configuration aggregator that does not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class DescribeConfigurationAggregatorsCommand extends $Command
  .classBuilder<
    DescribeConfigurationAggregatorsCommandInput,
    DescribeConfigurationAggregatorsCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "DescribeConfigurationAggregators", {})
  .n("ConfigServiceClient", "DescribeConfigurationAggregatorsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConfigurationAggregatorsCommand)
  .de(de_DescribeConfigurationAggregatorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigurationAggregatorsRequest;
      output: DescribeConfigurationAggregatorsResponse;
    };
    sdk: {
      input: DescribeConfigurationAggregatorsCommandInput;
      output: DescribeConfigurationAggregatorsCommandOutput;
    };
  };
}
