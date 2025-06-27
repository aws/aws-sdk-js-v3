// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { BatchPutMessageRequest, BatchPutMessageResponse } from "../models/models_0";
import { de_BatchPutMessageCommand, se_BatchPutMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchPutMessageCommand}.
 */
export interface BatchPutMessageCommandInput extends BatchPutMessageRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutMessageCommand}.
 */
export interface BatchPutMessageCommandOutput extends BatchPutMessageResponse, __MetadataBearer {}

/**
 * <p>Sends messages to a channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, BatchPutMessageCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, BatchPutMessageCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // BatchPutMessageRequest
 *   channelName: "STRING_VALUE", // required
 *   messages: [ // Messages // required
 *     { // Message
 *       messageId: "STRING_VALUE", // required
 *       payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *     },
 *   ],
 * };
 * const command = new BatchPutMessageCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutMessageResponse
 * //   batchPutMessageErrorEntries: [ // BatchPutMessageErrorEntries
 * //     { // BatchPutMessageErrorEntry
 * //       messageId: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutMessageCommandInput - {@link BatchPutMessageCommandInput}
 * @returns {@link BatchPutMessageCommandOutput}
 * @see {@link BatchPutMessageCommandInput} for command's `input` shape.
 * @see {@link BatchPutMessageCommandOutput} for command's `response` shape.
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
export class BatchPutMessageCommand extends $Command
  .classBuilder<
    BatchPutMessageCommandInput,
    BatchPutMessageCommandOutput,
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
  .s("AWSIoTAnalytics", "BatchPutMessage", {})
  .n("IoTAnalyticsClient", "BatchPutMessageCommand")
  .f(void 0, void 0)
  .ser(se_BatchPutMessageCommand)
  .de(de_BatchPutMessageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchPutMessageRequest;
      output: BatchPutMessageResponse;
    };
    sdk: {
      input: BatchPutMessageCommandInput;
      output: BatchPutMessageCommandOutput;
    };
  };
}
