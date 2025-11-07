// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDeliveryDestinationsRequest, DescribeDeliveryDestinationsResponse } from "../models/models_0";
import { DescribeDeliveryDestinations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeliveryDestinationsCommand}.
 */
export interface DescribeDeliveryDestinationsCommandInput extends DescribeDeliveryDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeliveryDestinationsCommand}.
 */
export interface DescribeDeliveryDestinationsCommandOutput
  extends DescribeDeliveryDestinationsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of the delivery destinations that have been created in the
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeDeliveryDestinationsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeDeliveryDestinationsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeDeliveryDestinationsRequest
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new DescribeDeliveryDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeliveryDestinationsResponse
 * //   deliveryDestinations: [ // DeliveryDestinations
 * //     { // DeliveryDestination
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       deliveryDestinationType: "S3" || "CWL" || "FH" || "XRAY",
 * //       outputFormat: "json" || "plain" || "w3c" || "raw" || "parquet",
 * //       deliveryDestinationConfiguration: { // DeliveryDestinationConfiguration
 * //         destinationResourceArn: "STRING_VALUE", // required
 * //       },
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
 * @param DescribeDeliveryDestinationsCommandInput - {@link DescribeDeliveryDestinationsCommandInput}
 * @returns {@link DescribeDeliveryDestinationsCommandOutput}
 * @see {@link DescribeDeliveryDestinationsCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveryDestinationsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeDeliveryDestinationsCommand extends $Command
  .classBuilder<
    DescribeDeliveryDestinationsCommandInput,
    DescribeDeliveryDestinationsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DescribeDeliveryDestinations", {})
  .n("CloudWatchLogsClient", "DescribeDeliveryDestinationsCommand")
  .sc(DescribeDeliveryDestinations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDeliveryDestinationsRequest;
      output: DescribeDeliveryDestinationsResponse;
    };
    sdk: {
      input: DescribeDeliveryDestinationsCommandInput;
      output: DescribeDeliveryDestinationsCommandOutput;
    };
  };
}
