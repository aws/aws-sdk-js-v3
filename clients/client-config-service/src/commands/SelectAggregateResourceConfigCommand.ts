// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SelectAggregateResourceConfigRequest, SelectAggregateResourceConfigResponse } from "../models/models_1";
import {
  de_SelectAggregateResourceConfigCommand,
  se_SelectAggregateResourceConfigCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SelectAggregateResourceConfigCommand}.
 */
export interface SelectAggregateResourceConfigCommandInput extends SelectAggregateResourceConfigRequest {}
/**
 * @public
 *
 * The output of {@link SelectAggregateResourceConfigCommand}.
 */
export interface SelectAggregateResourceConfigCommandOutput
  extends SelectAggregateResourceConfigResponse,
    __MetadataBearer {}

/**
 * <p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions,
 * 			performs the corresponding search, and returns resource configurations matching the properties.</p>
 *          <p>For more information about query components, see the
 * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html">
 *                <b>Query Components</b>
 *             </a> section in the <i>Config Developer Guide</i>.</p>
 *          <note>
 *             <p>If you run an aggregation query (i.e., using <code>GROUP BY</code> or using aggregate functions such as <code>COUNT</code>; e.g., <code>SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId</code>)
 * 				and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 500.</p>
 *             <p>If you run a non-aggregation query (i.e., not using <code>GROUP BY</code> or aggregate function; e.g., <code>SELECT * WHERE resourceType = 'AWS::IAM::Role'</code>)
 * 				and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 25.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, SelectAggregateResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, SelectAggregateResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConfigServiceClient(config);
 * const input = { // SelectAggregateResourceConfigRequest
 *   Expression: "STRING_VALUE", // required
 *   ConfigurationAggregatorName: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SelectAggregateResourceConfigCommand(input);
 * const response = await client.send(command);
 * // { // SelectAggregateResourceConfigResponse
 * //   Results: [ // Results
 * //     "STRING_VALUE",
 * //   ],
 * //   QueryInfo: { // QueryInfo
 * //     SelectFields: [ // FieldInfoList
 * //       { // FieldInfo
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SelectAggregateResourceConfigCommandInput - {@link SelectAggregateResourceConfigCommandInput}
 * @returns {@link SelectAggregateResourceConfigCommandOutput}
 * @see {@link SelectAggregateResourceConfigCommandInput} for command's `input` shape.
 * @see {@link SelectAggregateResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidExpressionException} (client fault)
 *  <p>The syntax of the query is incorrect.</p>
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link NoSuchConfigurationAggregatorException} (client fault)
 *  <p>You have specified a configuration aggregator that does not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class SelectAggregateResourceConfigCommand extends $Command
  .classBuilder<
    SelectAggregateResourceConfigCommandInput,
    SelectAggregateResourceConfigCommandOutput,
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
  .s("StarlingDoveService", "SelectAggregateResourceConfig", {})
  .n("ConfigServiceClient", "SelectAggregateResourceConfigCommand")
  .f(void 0, void 0)
  .ser(se_SelectAggregateResourceConfigCommand)
  .de(de_SelectAggregateResourceConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SelectAggregateResourceConfigRequest;
      output: SelectAggregateResourceConfigResponse;
    };
    sdk: {
      input: SelectAggregateResourceConfigCommandInput;
      output: SelectAggregateResourceConfigCommandOutput;
    };
  };
}
