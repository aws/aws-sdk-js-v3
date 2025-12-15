// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import type { DescribePipelineRequest, DescribePipelineResponse } from "../models/models_0";
import { DescribePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePipelineCommand}.
 */
export interface DescribePipelineCommandInput extends DescribePipelineRequest {}
/**
 * @public
 *
 * The output of {@link DescribePipelineCommand}.
 */
export interface DescribePipelineCommandOutput extends DescribePipelineResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DescribePipelineCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DescribePipelineCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // DescribePipelineRequest
 *   pipelineName: "STRING_VALUE", // required
 * };
 * const command = new DescribePipelineCommand(input);
 * const response = await client.send(command);
 * // { // DescribePipelineResponse
 * //   pipeline: { // Pipeline
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     activities: [ // PipelineActivities
 * //       { // PipelineActivity
 * //         channel: { // ChannelActivity
 * //           name: "STRING_VALUE", // required
 * //           channelName: "STRING_VALUE", // required
 * //           next: "STRING_VALUE",
 * //         },
 * //         lambda: { // LambdaActivity
 * //           name: "STRING_VALUE", // required
 * //           lambdaName: "STRING_VALUE", // required
 * //           batchSize: Number("int"), // required
 * //           next: "STRING_VALUE",
 * //         },
 * //         datastore: { // DatastoreActivity
 * //           name: "STRING_VALUE", // required
 * //           datastoreName: "STRING_VALUE", // required
 * //         },
 * //         addAttributes: { // AddAttributesActivity
 * //           name: "STRING_VALUE", // required
 * //           attributes: { // AttributeNameMapping // required
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           next: "STRING_VALUE",
 * //         },
 * //         removeAttributes: { // RemoveAttributesActivity
 * //           name: "STRING_VALUE", // required
 * //           attributes: [ // AttributeNames // required
 * //             "STRING_VALUE",
 * //           ],
 * //           next: "STRING_VALUE",
 * //         },
 * //         selectAttributes: { // SelectAttributesActivity
 * //           name: "STRING_VALUE", // required
 * //           attributes: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           next: "STRING_VALUE",
 * //         },
 * //         filter: { // FilterActivity
 * //           name: "STRING_VALUE", // required
 * //           filter: "STRING_VALUE", // required
 * //           next: "STRING_VALUE",
 * //         },
 * //         math: { // MathActivity
 * //           name: "STRING_VALUE", // required
 * //           attribute: "STRING_VALUE", // required
 * //           math: "STRING_VALUE", // required
 * //           next: "STRING_VALUE",
 * //         },
 * //         deviceRegistryEnrich: { // DeviceRegistryEnrichActivity
 * //           name: "STRING_VALUE", // required
 * //           attribute: "STRING_VALUE", // required
 * //           thingName: "STRING_VALUE", // required
 * //           roleArn: "STRING_VALUE", // required
 * //           next: "STRING_VALUE",
 * //         },
 * //         deviceShadowEnrich: { // DeviceShadowEnrichActivity
 * //           name: "STRING_VALUE", // required
 * //           attribute: "STRING_VALUE", // required
 * //           thingName: "STRING_VALUE", // required
 * //           roleArn: "STRING_VALUE", // required
 * //           next: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     reprocessingSummaries: [ // ReprocessingSummaries
 * //       { // ReprocessingSummary
 * //         id: "STRING_VALUE",
 * //         status: "RUNNING" || "SUCCEEDED" || "CANCELLED" || "FAILED",
 * //         creationTime: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePipelineCommandInput - {@link DescribePipelineCommandInput}
 * @returns {@link DescribePipelineCommandOutput}
 * @see {@link DescribePipelineCommandInput} for command's `input` shape.
 * @see {@link DescribePipelineCommandOutput} for command's `response` shape.
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
export class DescribePipelineCommand extends $Command
  .classBuilder<
    DescribePipelineCommandInput,
    DescribePipelineCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTAnalytics", "DescribePipeline", {})
  .n("IoTAnalyticsClient", "DescribePipelineCommand")
  .sc(DescribePipeline$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePipelineRequest;
      output: DescribePipelineResponse;
    };
    sdk: {
      input: DescribePipelineCommandInput;
      output: DescribePipelineCommandOutput;
    };
  };
}
