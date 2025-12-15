// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import type { DescribeChannelRequest, DescribeChannelResponse } from "../models/models_0";
import { DescribeChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeChannelCommand}.
 */
export interface DescribeChannelCommandInput extends DescribeChannelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChannelCommand}.
 */
export interface DescribeChannelCommandOutput extends DescribeChannelResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DescribeChannelCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DescribeChannelCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // DescribeChannelRequest
 *   channelName: "STRING_VALUE", // required
 *   includeStatistics: true || false,
 * };
 * const command = new DescribeChannelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChannelResponse
 * //   channel: { // Channel
 * //     name: "STRING_VALUE",
 * //     storage: { // ChannelStorage
 * //       serviceManagedS3: {},
 * //       customerManagedS3: { // CustomerManagedChannelS3Storage
 * //         bucket: "STRING_VALUE", // required
 * //         keyPrefix: "STRING_VALUE",
 * //         roleArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     arn: "STRING_VALUE",
 * //     status: "CREATING" || "ACTIVE" || "DELETING",
 * //     retentionPeriod: { // RetentionPeriod
 * //       unlimited: true || false,
 * //       numberOfDays: Number("int"),
 * //     },
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdateTime: new Date("TIMESTAMP"),
 * //     lastMessageArrivalTime: new Date("TIMESTAMP"),
 * //   },
 * //   statistics: { // ChannelStatistics
 * //     size: { // EstimatedResourceSize
 * //       estimatedSizeInBytes: Number("double"),
 * //       estimatedOn: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeChannelCommandInput - {@link DescribeChannelCommandInput}
 * @returns {@link DescribeChannelCommandOutput}
 * @see {@link DescribeChannelCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource with the specified name could not be found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link IoTAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from IoTAnalytics service.</p>
 *
 *
 * @public
 */
export class DescribeChannelCommand extends $Command
  .classBuilder<
    DescribeChannelCommandInput,
    DescribeChannelCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTAnalytics", "DescribeChannel", {})
  .n("IoTAnalyticsClient", "DescribeChannelCommand")
  .sc(DescribeChannel$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeChannelRequest;
      output: DescribeChannelResponse;
    };
    sdk: {
      input: DescribeChannelCommandInput;
      output: DescribeChannelCommandOutput;
    };
  };
}
