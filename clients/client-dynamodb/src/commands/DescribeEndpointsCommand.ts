// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEndpointsRequest, DescribeEndpointsResponse } from "../models/models_0";
import { de_DescribeEndpointsCommand, se_DescribeEndpointsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEndpointsCommand}.
 */
export interface DescribeEndpointsCommandInput extends DescribeEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEndpointsCommand}.
 */
export interface DescribeEndpointsCommandOutput extends DescribeEndpointsResponse, __MetadataBearer {}

/**
 * <p>Returns the regional endpoint information. For more information
 *             on policy permissions, please see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/inter-network-traffic-privacy.html#inter-network-traffic-DescribeEndpoints">Internetwork traffic privacy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeEndpointsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeEndpointsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = {};
 * const command = new DescribeEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEndpointsResponse
 * //   Endpoints: [ // Endpoints // required
 * //     { // Endpoint
 * //       Address: "STRING_VALUE", // required
 * //       CachePeriodInMinutes: Number("long"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEndpointsCommandInput - {@link DescribeEndpointsCommandInput}
 * @returns {@link DescribeEndpointsCommandOutput}
 * @see {@link DescribeEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 * @public
 */
export class DescribeEndpointsCommand extends $Command
  .classBuilder<
    DescribeEndpointsCommandInput,
    DescribeEndpointsCommandOutput,
    DynamoDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DynamoDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DynamoDB_20120810", "DescribeEndpoints", {})
  .n("DynamoDBClient", "DescribeEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEndpointsCommand)
  .de(de_DescribeEndpointsCommand)
  .build() {}
