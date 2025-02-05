// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { RunPipelineActivityRequest, RunPipelineActivityResponse } from "../models/models_0";
import { de_RunPipelineActivityCommand, se_RunPipelineActivityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RunPipelineActivityCommand}.
 */
export interface RunPipelineActivityCommandInput extends RunPipelineActivityRequest {}
/**
 * @public
 *
 * The output of {@link RunPipelineActivityCommand}.
 */
export interface RunPipelineActivityCommandOutput extends RunPipelineActivityResponse, __MetadataBearer {}

/**
 * <p>Simulates the results of running a pipeline activity on a message payload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, RunPipelineActivityCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, RunPipelineActivityCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTAnalyticsClient(config);
 * const input = { // RunPipelineActivityRequest
 *   pipelineActivity: { // PipelineActivity
 *     channel: { // ChannelActivity
 *       name: "STRING_VALUE", // required
 *       channelName: "STRING_VALUE", // required
 *       next: "STRING_VALUE",
 *     },
 *     lambda: { // LambdaActivity
 *       name: "STRING_VALUE", // required
 *       lambdaName: "STRING_VALUE", // required
 *       batchSize: Number("int"), // required
 *       next: "STRING_VALUE",
 *     },
 *     datastore: { // DatastoreActivity
 *       name: "STRING_VALUE", // required
 *       datastoreName: "STRING_VALUE", // required
 *     },
 *     addAttributes: { // AddAttributesActivity
 *       name: "STRING_VALUE", // required
 *       attributes: { // AttributeNameMapping // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *       next: "STRING_VALUE",
 *     },
 *     removeAttributes: { // RemoveAttributesActivity
 *       name: "STRING_VALUE", // required
 *       attributes: [ // AttributeNames // required
 *         "STRING_VALUE",
 *       ],
 *       next: "STRING_VALUE",
 *     },
 *     selectAttributes: { // SelectAttributesActivity
 *       name: "STRING_VALUE", // required
 *       attributes: [ // required
 *         "STRING_VALUE",
 *       ],
 *       next: "STRING_VALUE",
 *     },
 *     filter: { // FilterActivity
 *       name: "STRING_VALUE", // required
 *       filter: "STRING_VALUE", // required
 *       next: "STRING_VALUE",
 *     },
 *     math: { // MathActivity
 *       name: "STRING_VALUE", // required
 *       attribute: "STRING_VALUE", // required
 *       math: "STRING_VALUE", // required
 *       next: "STRING_VALUE",
 *     },
 *     deviceRegistryEnrich: { // DeviceRegistryEnrichActivity
 *       name: "STRING_VALUE", // required
 *       attribute: "STRING_VALUE", // required
 *       thingName: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *       next: "STRING_VALUE",
 *     },
 *     deviceShadowEnrich: { // DeviceShadowEnrichActivity
 *       name: "STRING_VALUE", // required
 *       attribute: "STRING_VALUE", // required
 *       thingName: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *       next: "STRING_VALUE",
 *     },
 *   },
 *   payloads: [ // MessagePayloads // required
 *     new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   ],
 * };
 * const command = new RunPipelineActivityCommand(input);
 * const response = await client.send(command);
 * // { // RunPipelineActivityResponse
 * //   payloads: [ // MessagePayloads
 * //     new Uint8Array(),
 * //   ],
 * //   logResult: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RunPipelineActivityCommandInput - {@link RunPipelineActivityCommandInput}
 * @returns {@link RunPipelineActivityCommandOutput}
 * @see {@link RunPipelineActivityCommandInput} for command's `input` shape.
 * @see {@link RunPipelineActivityCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
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
 * @public
 */
export class RunPipelineActivityCommand extends $Command
  .classBuilder<
    RunPipelineActivityCommandInput,
    RunPipelineActivityCommandOutput,
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
  .s("AWSIoTAnalytics", "RunPipelineActivity", {})
  .n("IoTAnalyticsClient", "RunPipelineActivityCommand")
  .f(void 0, void 0)
  .ser(se_RunPipelineActivityCommand)
  .de(de_RunPipelineActivityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RunPipelineActivityRequest;
      output: RunPipelineActivityResponse;
    };
    sdk: {
      input: RunPipelineActivityCommandInput;
      output: RunPipelineActivityCommandOutput;
    };
  };
}
