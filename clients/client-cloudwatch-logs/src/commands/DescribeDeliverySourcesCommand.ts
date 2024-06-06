// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDeliverySourcesRequest, DescribeDeliverySourcesResponse } from "../models/models_0";
import { de_DescribeDeliverySourcesCommand, se_DescribeDeliverySourcesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeliverySourcesCommand}.
 */
export interface DescribeDeliverySourcesCommandInput extends DescribeDeliverySourcesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeliverySourcesCommand}.
 */
export interface DescribeDeliverySourcesCommandOutput extends DescribeDeliverySourcesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of the delivery sources that have been created in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeDeliverySourcesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeDeliverySourcesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeDeliverySourcesRequest
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new DescribeDeliverySourcesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeliverySourcesResponse
 * //   deliverySources: [ // DeliverySources
 * //     { // DeliverySource
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       resourceArns: [ // ResourceArns
 * //         "STRING_VALUE",
 * //       ],
 * //       service: "STRING_VALUE",
 * //       logType: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDeliverySourcesCommandInput - {@link DescribeDeliverySourcesCommandInput}
 * @returns {@link DescribeDeliverySourcesCommandOutput}
 * @see {@link DescribeDeliverySourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliverySourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 * @public
 */
export class DescribeDeliverySourcesCommand extends $Command
  .classBuilder<
    DescribeDeliverySourcesCommandInput,
    DescribeDeliverySourcesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "DescribeDeliverySources", {})
  .n("CloudWatchLogsClient", "DescribeDeliverySourcesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDeliverySourcesCommand)
  .de(de_DescribeDeliverySourcesCommand)
  .build() {}
