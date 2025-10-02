// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { CreatePipelineRequest, CreatePipelineResponse } from "../models/models_0";
import { de_CreatePipelineCommand, se_CreatePipelineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePipelineCommand}.
 */
export interface CreatePipelineCommandInput extends CreatePipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreatePipelineCommand}.
 */
export interface CreatePipelineCommandOutput extends CreatePipelineResponse, __MetadataBearer {}

/**
 * <p>Creates a pipeline. A pipeline consumes messages from a channel and allows you to process
 *       the messages before storing them in a data store. You must specify both a <code>channel</code>
 *       and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in
 *       the <code>pipelineActivities</code> array.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CreatePipelineCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CreatePipelineCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // CreatePipelineRequest
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
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreatePipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreatePipelineResponse
 * //   pipelineName: "STRING_VALUE",
 * //   pipelineArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePipelineCommandInput - {@link CreatePipelineCommandInput}
 * @returns {@link CreatePipelineCommandOutput}
 * @see {@link CreatePipelineCommandInput} for command's `input` shape.
 * @see {@link CreatePipelineCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>A resource with the same name already exists.</p>
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
export class CreatePipelineCommand extends $Command
  .classBuilder<
    CreatePipelineCommandInput,
    CreatePipelineCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTAnalytics", "CreatePipeline", {})
  .n("IoTAnalyticsClient", "CreatePipelineCommand")
  .f(void 0, void 0)
  .ser(se_CreatePipelineCommand)
  .de(de_CreatePipelineCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePipelineRequest;
      output: CreatePipelineResponse;
    };
    sdk: {
      input: CreatePipelineCommandInput;
      output: CreatePipelineCommandOutput;
    };
  };
}
