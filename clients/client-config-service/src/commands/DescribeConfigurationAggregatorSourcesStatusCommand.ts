// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeConfigurationAggregatorSourcesStatusRequest,
  DescribeConfigurationAggregatorSourcesStatusResponse,
} from "../models/models_0";
import { DescribeConfigurationAggregatorSourcesStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationAggregatorSourcesStatusCommand}.
 */
export interface DescribeConfigurationAggregatorSourcesStatusCommandInput
  extends DescribeConfigurationAggregatorSourcesStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationAggregatorSourcesStatusCommand}.
 */
export interface DescribeConfigurationAggregatorSourcesStatusCommandOutput
  extends DescribeConfigurationAggregatorSourcesStatusResponse,
    __MetadataBearer {}

/**
 * <p>Returns status information for sources within an aggregator.
 * 			The status includes information about the last time Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigurationAggregatorSourcesStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigurationAggregatorSourcesStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConfigurationAggregatorSourcesStatusRequest
 *   ConfigurationAggregatorName: "STRING_VALUE", // required
 *   UpdateStatus: [ // AggregatedSourceStatusTypeList
 *     "FAILED" || "SUCCEEDED" || "OUTDATED",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeConfigurationAggregatorSourcesStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationAggregatorSourcesStatusResponse
 * //   AggregatedSourceStatusList: [ // AggregatedSourceStatusList
 * //     { // AggregatedSourceStatus
 * //       SourceId: "STRING_VALUE",
 * //       SourceType: "ACCOUNT" || "ORGANIZATION",
 * //       AwsRegion: "STRING_VALUE",
 * //       LastUpdateStatus: "FAILED" || "SUCCEEDED" || "OUTDATED",
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //       LastErrorCode: "STRING_VALUE",
 * //       LastErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationAggregatorSourcesStatusCommandInput - {@link DescribeConfigurationAggregatorSourcesStatusCommandInput}
 * @returns {@link DescribeConfigurationAggregatorSourcesStatusCommandOutput}
 * @see {@link DescribeConfigurationAggregatorSourcesStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationAggregatorSourcesStatusCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeConfigurationAggregatorSourcesStatusCommand extends $Command
  .classBuilder<
    DescribeConfigurationAggregatorSourcesStatusCommandInput,
    DescribeConfigurationAggregatorSourcesStatusCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DescribeConfigurationAggregatorSourcesStatus", {})
  .n("ConfigServiceClient", "DescribeConfigurationAggregatorSourcesStatusCommand")
  .sc(DescribeConfigurationAggregatorSourcesStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigurationAggregatorSourcesStatusRequest;
      output: DescribeConfigurationAggregatorSourcesStatusResponse;
    };
    sdk: {
      input: DescribeConfigurationAggregatorSourcesStatusCommandInput;
      output: DescribeConfigurationAggregatorSourcesStatusCommandOutput;
    };
  };
}
