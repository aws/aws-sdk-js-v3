// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { ListDetectorModelsRequest, ListDetectorModelsResponse } from "../models/models_0";
import { de_ListDetectorModelsCommand, se_ListDetectorModelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDetectorModelsCommand}.
 */
export interface ListDetectorModelsCommandInput extends ListDetectorModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListDetectorModelsCommand}.
 */
export interface ListDetectorModelsCommandOutput extends ListDetectorModelsResponse, __MetadataBearer {}

/**
 * <p>Lists the detector models you have created. Only the metadata associated with each
 *       detector model is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListDetectorModelsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListDetectorModelsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const input = { // ListDetectorModelsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDetectorModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListDetectorModelsResponse
 * //   detectorModelSummaries: [ // DetectorModelSummaries
 * //     { // DetectorModelSummary
 * //       detectorModelName: "STRING_VALUE",
 * //       detectorModelDescription: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDetectorModelsCommandInput - {@link ListDetectorModelsCommandInput}
 * @returns {@link ListDetectorModelsCommandOutput}
 * @see {@link ListDetectorModelsCommandInput} for command's `input` shape.
 * @see {@link ListDetectorModelsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 * @public
 */
export class ListDetectorModelsCommand extends $Command
  .classBuilder<
    ListDetectorModelsCommandInput,
    ListDetectorModelsCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotColumboService", "ListDetectorModels", {})
  .n("IoTEventsClient", "ListDetectorModelsCommand")
  .f(void 0, void 0)
  .ser(se_ListDetectorModelsCommand)
  .de(de_ListDetectorModelsCommand)
  .build() {}
