// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { DetectAnomaliesRequest, DetectAnomaliesResponse } from "../models/models_0";
import { DetectAnomalies } from "../schemas/schemas_3_Model";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetectAnomaliesCommand}.
 */
export interface DetectAnomaliesCommandInput extends Omit<DetectAnomaliesRequest, "Body"> {
  Body: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link DetectAnomaliesCommand}.
 */
export interface DetectAnomaliesCommandOutput extends DetectAnomaliesResponse, __MetadataBearer {}

/**
 * <p>Detects anomalies in an image that you supply. </p>
 *          <p>The response from <code>DetectAnomalies</code> includes a boolean prediction
 *          that the image contains one or more anomalies and a confidence value for the prediction.
 *       If the model is an image segmentation model, the response also includes segmentation
 *       information for each type of anomaly found in the image.</p>
 *          <note>
 *             <p>Before calling <code>DetectAnomalies</code>, you must first start your model with the <a>StartModel</a> operation.
 *          You are charged for the amount of time, in minutes, that a model runs and for the number of anomaly detection units that your
 *          model uses. If you are not using a model, use the <a>StopModel</a> operation to stop your model. </p>
 *          </note>
 *          <p>For more information, see <i>Detecting anomalies in an image</i> in the Amazon Lookout for Vision developer guide.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DetectAnomalies</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DetectAnomaliesCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DetectAnomaliesCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * // import type { LookoutVisionClientConfig } from "@aws-sdk/client-lookoutvision";
 * const config = {}; // type is LookoutVisionClientConfig
 * const client = new LookoutVisionClient(config);
 * const input = { // DetectAnomaliesRequest
 *   ProjectName: "STRING_VALUE", // required
 *   ModelVersion: "STRING_VALUE", // required
 *   Body: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes // required
 *   ContentType: "STRING_VALUE", // required
 * };
 * const command = new DetectAnomaliesCommand(input);
 * const response = await client.send(command);
 * // { // DetectAnomaliesResponse
 * //   DetectAnomalyResult: { // DetectAnomalyResult
 * //     Source: { // ImageSource
 * //       Type: "STRING_VALUE",
 * //     },
 * //     IsAnomalous: true || false,
 * //     Confidence: Number("float"),
 * //     Anomalies: [ // AnomalyList
 * //       { // Anomaly
 * //         Name: "STRING_VALUE",
 * //         PixelAnomaly: { // PixelAnomaly
 * //           TotalPercentageArea: Number("float"),
 * //           Color: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     AnomalyMask: new Uint8Array(),
 * //   },
 * // };
 *
 * ```
 *
 * @param DetectAnomaliesCommandInput - {@link DetectAnomaliesCommandInput}
 * @returns {@link DetectAnomaliesCommandOutput}
 * @see {@link DetectAnomaliesCommandInput} for command's `input` shape.
 * @see {@link DetectAnomaliesCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The update or deletion of a resource caused an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 *
 * @throws {@link LookoutVisionServiceException}
 * <p>Base exception class for all service exceptions from LookoutVision service.</p>
 *
 *
 * @public
 */
export class DetectAnomaliesCommand extends $Command
  .classBuilder<
    DetectAnomaliesCommandInput,
    DetectAnomaliesCommandOutput,
    LookoutVisionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutVisionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LookoutVisionService", "DetectAnomalies", {})
  .n("LookoutVisionClient", "DetectAnomaliesCommand")
  .sc(DetectAnomalies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectAnomaliesRequest;
      output: DetectAnomaliesResponse;
    };
    sdk: {
      input: DetectAnomaliesCommandInput;
      output: DetectAnomaliesCommandOutput;
    };
  };
}
