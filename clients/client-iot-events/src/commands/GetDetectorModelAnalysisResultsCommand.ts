// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { GetDetectorModelAnalysisResultsRequest, GetDetectorModelAnalysisResultsResponse } from "../models/models_0";
import { GetDetectorModelAnalysisResults } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDetectorModelAnalysisResultsCommand}.
 */
export interface GetDetectorModelAnalysisResultsCommandInput extends GetDetectorModelAnalysisResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetDetectorModelAnalysisResultsCommand}.
 */
export interface GetDetectorModelAnalysisResultsCommandOutput
  extends GetDetectorModelAnalysisResultsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves one or more analysis results of the detector model.</p>
 *          <note>
 *             <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, GetDetectorModelAnalysisResultsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, GetDetectorModelAnalysisResultsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * // import type { IoTEventsClientConfig } from "@aws-sdk/client-iot-events";
 * const config = {}; // type is IoTEventsClientConfig
 * const client = new IoTEventsClient(config);
 * const input = { // GetDetectorModelAnalysisResultsRequest
 *   analysisId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetDetectorModelAnalysisResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetDetectorModelAnalysisResultsResponse
 * //   analysisResults: [ // AnalysisResults
 * //     { // AnalysisResult
 * //       type: "STRING_VALUE",
 * //       level: "INFO" || "WARNING" || "ERROR",
 * //       message: "STRING_VALUE",
 * //       locations: [ // AnalysisResultLocations
 * //         { // AnalysisResultLocation
 * //           path: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDetectorModelAnalysisResultsCommandInput - {@link GetDetectorModelAnalysisResultsCommandInput}
 * @returns {@link GetDetectorModelAnalysisResultsCommandOutput}
 * @see {@link GetDetectorModelAnalysisResultsCommandInput} for command's `input` shape.
 * @see {@link GetDetectorModelAnalysisResultsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
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
 *
 * @public
 */
export class GetDetectorModelAnalysisResultsCommand extends $Command
  .classBuilder<
    GetDetectorModelAnalysisResultsCommandInput,
    GetDetectorModelAnalysisResultsCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotColumboService", "GetDetectorModelAnalysisResults", {})
  .n("IoTEventsClient", "GetDetectorModelAnalysisResultsCommand")
  .sc(GetDetectorModelAnalysisResults)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDetectorModelAnalysisResultsRequest;
      output: GetDetectorModelAnalysisResultsResponse;
    };
    sdk: {
      input: GetDetectorModelAnalysisResultsCommandInput;
      output: GetDetectorModelAnalysisResultsCommandOutput;
    };
  };
}
