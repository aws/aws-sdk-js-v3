// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeConfigurationTemplatesRequest, DescribeConfigurationTemplatesResponse } from "../models/models_0";
import { DescribeConfigurationTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationTemplatesCommand}.
 */
export interface DescribeConfigurationTemplatesCommandInput extends DescribeConfigurationTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationTemplatesCommand}.
 */
export interface DescribeConfigurationTemplatesCommandOutput extends DescribeConfigurationTemplatesResponse, __MetadataBearer {}

/**
 * <p>Use this operation to return the valid and default values that are used when creating
 *       delivery sources, delivery destinations, and deliveries. For more information about
 *       deliveries, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeConfigurationTemplatesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeConfigurationTemplatesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeConfigurationTemplatesRequest
 *   service: "STRING_VALUE",
 *   logTypes: [ // LogTypes
 *     "STRING_VALUE",
 *   ],
 *   resourceTypes: [ // ResourceTypes
 *     "STRING_VALUE",
 *   ],
 *   deliveryDestinationTypes: [ // DeliveryDestinationTypes
 *     "S3" || "CWL" || "FH" || "XRAY",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new DescribeConfigurationTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationTemplatesResponse
 * //   configurationTemplates: [ // ConfigurationTemplates
 * //     { // ConfigurationTemplate
 * //       service: "STRING_VALUE",
 * //       logType: "STRING_VALUE",
 * //       resourceType: "STRING_VALUE",
 * //       deliveryDestinationType: "S3" || "CWL" || "FH" || "XRAY",
 * //       defaultDeliveryConfigValues: { // ConfigurationTemplateDeliveryConfigValues
 * //         recordFields: [ // RecordFields
 * //           "STRING_VALUE",
 * //         ],
 * //         fieldDelimiter: "STRING_VALUE",
 * //         s3DeliveryConfiguration: { // S3DeliveryConfiguration
 * //           suffixPath: "STRING_VALUE",
 * //           enableHiveCompatiblePath: true || false,
 * //         },
 * //       },
 * //       allowedFields: [ // AllowedFields
 * //         { // RecordField
 * //           name: "STRING_VALUE",
 * //           mandatory: true || false,
 * //         },
 * //       ],
 * //       allowedOutputFormats: [ // OutputFormats
 * //         "json" || "plain" || "w3c" || "raw" || "parquet",
 * //       ],
 * //       allowedActionForAllowVendedLogsDeliveryForResource: "STRING_VALUE",
 * //       allowedFieldDelimiters: [ // AllowedFieldDelimiters
 * //         "STRING_VALUE",
 * //       ],
 * //       allowedSuffixPathFields: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationTemplatesCommandInput - {@link DescribeConfigurationTemplatesCommandInput}
 * @returns {@link DescribeConfigurationTemplatesCommandOutput}
 * @see {@link DescribeConfigurationTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
export class DescribeConfigurationTemplatesCommand extends $Command
  .classBuilder<
    DescribeConfigurationTemplatesCommandInput,
    DescribeConfigurationTemplatesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DescribeConfigurationTemplates", {})
  .n("CloudWatchLogsClient", "DescribeConfigurationTemplatesCommand")
  .sc(DescribeConfigurationTemplates$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigurationTemplatesRequest;
      output: DescribeConfigurationTemplatesResponse;
    };
    sdk: {
      input: DescribeConfigurationTemplatesCommandInput;
      output: DescribeConfigurationTemplatesCommandOutput;
    };
  };
}
