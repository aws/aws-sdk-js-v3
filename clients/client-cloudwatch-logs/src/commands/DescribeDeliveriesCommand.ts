// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDeliveriesRequest, DescribeDeliveriesResponse } from "../models/models_0";
import { de_DescribeDeliveriesCommand, se_DescribeDeliveriesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeliveriesCommand}.
 */
export interface DescribeDeliveriesCommandInput extends DescribeDeliveriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeliveriesCommand}.
 */
export interface DescribeDeliveriesCommandOutput extends DescribeDeliveriesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of the deliveries that have been created in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeDeliveriesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeDeliveriesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeDeliveriesRequest
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new DescribeDeliveriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeliveriesResponse
 * //   deliveries: [ // Deliveries
 * //     { // Delivery
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       deliverySourceName: "STRING_VALUE",
 * //       deliveryDestinationArn: "STRING_VALUE",
 * //       deliveryDestinationType: "S3" || "CWL" || "FH",
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
 * @param DescribeDeliveriesCommandInput - {@link DescribeDeliveriesCommandInput}
 * @returns {@link DescribeDeliveriesCommandOutput}
 * @see {@link DescribeDeliveriesCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveriesCommandOutput} for command's `response` shape.
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
 */
export class DescribeDeliveriesCommand extends $Command
  .classBuilder<
    DescribeDeliveriesCommandInput,
    DescribeDeliveriesCommandOutput,
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
  .s("Logs_20140328", "DescribeDeliveries", {})
  .n("CloudWatchLogsClient", "DescribeDeliveriesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDeliveriesCommand)
  .de(de_DescribeDeliveriesCommand)
  .build() {}
