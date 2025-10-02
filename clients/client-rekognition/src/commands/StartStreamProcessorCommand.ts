// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartStreamProcessorRequest, StartStreamProcessorResponse } from "../models/models_1";
import { de_StartStreamProcessorCommand, se_StartStreamProcessorCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartStreamProcessorCommand}.
 */
export interface StartStreamProcessorCommandInput extends StartStreamProcessorRequest {}
/**
 * @public
 *
 * The output of {@link StartStreamProcessorCommand}.
 */
export interface StartStreamProcessorCommandOutput extends StartStreamProcessorResponse, __MetadataBearer {}

/**
 * <p>Starts processing a stream processor. You create a stream processor by calling <a>CreateStreamProcessor</a>.
 *             To tell <code>StartStreamProcessor</code> which stream processor to start, use the value of the <code>Name</code> field specified in the call to
 *             <code>CreateStreamProcessor</code>.</p>
 *          <p>If you are using a label detection stream processor to detect labels, you need to provide a <code>Start selector</code> and a <code>Stop selector</code> to determine the length of the stream processing time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // StartStreamProcessorRequest
 *   Name: "STRING_VALUE", // required
 *   StartSelector: { // StreamProcessingStartSelector
 *     KVSStreamStartSelector: { // KinesisVideoStreamStartSelector
 *       ProducerTimestamp: Number("long"),
 *       FragmentNumber: "STRING_VALUE",
 *     },
 *   },
 *   StopSelector: { // StreamProcessingStopSelector
 *     MaxDurationInSeconds: Number("long"),
 *   },
 * };
 * const command = new StartStreamProcessorCommand(input);
 * const response = await client.send(command);
 * // { // StartStreamProcessorResponse
 * //   SessionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartStreamProcessorCommandInput - {@link StartStreamProcessorCommandInput}
 * @returns {@link StartStreamProcessorCommandOutput}
 * @see {@link StartStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link StartStreamProcessorCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is already being used.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 *
 * @public
 */
export class StartStreamProcessorCommand extends $Command
  .classBuilder<
    StartStreamProcessorCommandInput,
    StartStreamProcessorCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "StartStreamProcessor", {})
  .n("RekognitionClient", "StartStreamProcessorCommand")
  .f(void 0, void 0)
  .ser(se_StartStreamProcessorCommand)
  .de(de_StartStreamProcessorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartStreamProcessorRequest;
      output: StartStreamProcessorResponse;
    };
    sdk: {
      input: StartStreamProcessorCommandInput;
      output: StartStreamProcessorCommandOutput;
    };
  };
}
