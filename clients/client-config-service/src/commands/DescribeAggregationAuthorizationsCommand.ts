// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeAggregationAuthorizationsRequest,
  DescribeAggregationAuthorizationsResponse,
} from "../models/models_0";
import { DescribeAggregationAuthorizations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAggregationAuthorizationsCommand}.
 */
export interface DescribeAggregationAuthorizationsCommandInput extends DescribeAggregationAuthorizationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAggregationAuthorizationsCommand}.
 */
export interface DescribeAggregationAuthorizationsCommandOutput extends DescribeAggregationAuthorizationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of authorizations granted to various aggregator
 * 			accounts and regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeAggregationAuthorizationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeAggregationAuthorizationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeAggregationAuthorizationsRequest
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAggregationAuthorizationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAggregationAuthorizationsResponse
 * //   AggregationAuthorizations: [ // AggregationAuthorizationList
 * //     { // AggregationAuthorization
 * //       AggregationAuthorizationArn: "STRING_VALUE",
 * //       AuthorizedAccountId: "STRING_VALUE",
 * //       AuthorizedAwsRegion: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAggregationAuthorizationsCommandInput - {@link DescribeAggregationAuthorizationsCommandInput}
 * @returns {@link DescribeAggregationAuthorizationsCommandOutput}
 * @see {@link DescribeAggregationAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link DescribeAggregationAuthorizationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class DescribeAggregationAuthorizationsCommand extends $Command
  .classBuilder<
    DescribeAggregationAuthorizationsCommandInput,
    DescribeAggregationAuthorizationsCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DescribeAggregationAuthorizations", {})
  .n("ConfigServiceClient", "DescribeAggregationAuthorizationsCommand")
  .sc(DescribeAggregationAuthorizations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAggregationAuthorizationsRequest;
      output: DescribeAggregationAuthorizationsResponse;
    };
    sdk: {
      input: DescribeAggregationAuthorizationsCommandInput;
      output: DescribeAggregationAuthorizationsCommandOutput;
    };
  };
}
