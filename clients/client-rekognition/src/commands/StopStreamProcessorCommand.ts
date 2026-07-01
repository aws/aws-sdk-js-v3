// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopStreamProcessorRequest, StopStreamProcessorResponse } from "../models/models_0";
import { StopStreamProcessor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopStreamProcessorCommand}.
 */
export interface StopStreamProcessorCommandInput extends StopStreamProcessorRequest {}
/**
 * @public
 *
 * The output of {@link StopStreamProcessorCommand}.
 */
export interface StopStreamProcessorCommandOutput extends StopStreamProcessorResponse, __MetadataBearer {}

/**
 * <p>Stops a running stream processor that was created by <a>CreateStreamProcessor</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StopStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StopStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // StopStreamProcessorRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StopStreamProcessorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopStreamProcessorCommandInput - {@link StopStreamProcessorCommandInput}
 * @returns {@link StopStreamProcessorCommandOutput}
 * @see {@link StopStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link StopStreamProcessorCommandOutput} for command's `response` shape.
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
export class StopStreamProcessorCommand extends command<StopStreamProcessorCommandInput, StopStreamProcessorCommandOutput>(
  _ep0,
  _mw0,
  "StopStreamProcessor",
  StopStreamProcessor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopStreamProcessorRequest;
      output: {};
    };
    sdk: {
      input: StopStreamProcessorCommandInput;
      output: StopStreamProcessorCommandOutput;
    };
  };
}
