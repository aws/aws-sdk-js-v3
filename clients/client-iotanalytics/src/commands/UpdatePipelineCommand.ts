// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import type { UpdatePipelineRequest } from "../models/models_0";
import { UpdatePipeline } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePipelineCommand}.
 */
export interface UpdatePipelineCommandInput extends UpdatePipelineRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePipelineCommand}.
 */
export interface UpdatePipelineCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the settings of a pipeline. You must specify both a <code>channel</code> and a
 *         <code>datastore</code> activity and, optionally, as many as 23 additional activities in the
 *         <code>pipelineActivities</code> array.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, UpdatePipelineCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, UpdatePipelineCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // UpdatePipelineRequest
 *   pipelineName: "STRING_VALUE", // required
 *   pipelineActivities: [ // PipelineActivities // required
 *     { // PipelineActivity
 *       channel: { // ChannelActivity
 *         name: "STRING_VALUE", // required
 *         channelName: "STRING_VALUE", // required
 *         next: "STRING_VALUE",
 *       },
 *       lambda: { // LambdaActivity
 *         name: "STRING_VALUE", // required
 *         lambdaName: "STRING_VALUE", // required
 *         batchSize: Number("int"), // required
 *         next: "STRING_VALUE",
 *       },
 *       datastore: { // DatastoreActivity
 *         name: "STRING_VALUE", // required
 *         datastoreName: "STRING_VALUE", // required
 *       },
 *       addAttributes: { // AddAttributesActivity
 *         name: "STRING_VALUE", // required
 *         attributes: { // AttributeNameMapping // required
 *           "<keys>": "STRING_VALUE",
 *         },
 *         next: "STRING_VALUE",
 *       },
 *       removeAttributes: { // RemoveAttributesActivity
 *         name: "STRING_VALUE", // required
 *         attributes: [ // AttributeNames // required
 *           "STRING_VALUE",
 *         ],
 *         next: "STRING_VALUE",
 *       },
 *       selectAttributes: { // SelectAttributesActivity
 *         name: "STRING_VALUE", // required
 *         attributes: [ // required
 *           "STRING_VALUE",
 *         ],
 *         next: "STRING_VALUE",
 *       },
 *       filter: { // FilterActivity
 *         name: "STRING_VALUE", // required
 *         filter: "STRING_VALUE", // required
 *         next: "STRING_VALUE",
 *       },
 *       math: { // MathActivity
 *         name: "STRING_VALUE", // required
 *         attribute: "STRING_VALUE", // required
 *         math: "STRING_VALUE", // required
 *         next: "STRING_VALUE",
 *       },
 *       deviceRegistryEnrich: { // DeviceRegistryEnrichActivity
 *         name: "STRING_VALUE", // required
 *         attribute: "STRING_VALUE", // required
 *         thingName: "STRING_VALUE", // required
 *         roleArn: "STRING_VALUE", // required
 *         next: "STRING_VALUE",
 *       },
 *       deviceShadowEnrich: { // DeviceShadowEnrichActivity
 *         name: "STRING_VALUE", // required
 *         attribute: "STRING_VALUE", // required
 *         thingName: "STRING_VALUE", // required
 *         roleArn: "STRING_VALUE", // required
 *         next: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdatePipelineCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePipelineCommandInput - {@link UpdatePipelineCommandInput}
 * @returns {@link UpdatePipelineCommandOutput}
 * @see {@link UpdatePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The command caused an internal limit to be exceeded.</p>
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
export class UpdatePipelineCommand extends $Command
  .classBuilder<
    UpdatePipelineCommandInput,
    UpdatePipelineCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTAnalytics", "UpdatePipeline", {})
  .n("IoTAnalyticsClient", "UpdatePipelineCommand")
  .sc(UpdatePipeline)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePipelineRequest;
      output: {};
    };
    sdk: {
      input: UpdatePipelineCommandInput;
      output: UpdatePipelineCommandOutput;
    };
  };
}
