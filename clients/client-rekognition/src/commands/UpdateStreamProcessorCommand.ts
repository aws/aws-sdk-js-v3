// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateStreamProcessorRequest, UpdateStreamProcessorResponse } from "../models/models_1";
import { de_UpdateStreamProcessorCommand, se_UpdateStreamProcessorCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStreamProcessorCommand}.
 */
export interface UpdateStreamProcessorCommandInput extends UpdateStreamProcessorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStreamProcessorCommand}.
 */
export interface UpdateStreamProcessorCommandOutput extends UpdateStreamProcessorResponse, __MetadataBearer {}

/**
 * <p>
 *             Allows you to update a stream processor. You can change some settings and regions of interest and delete certain parameters.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, UpdateStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, UpdateStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // UpdateStreamProcessorRequest
 *   Name: "STRING_VALUE", // required
 *   SettingsForUpdate: { // StreamProcessorSettingsForUpdate
 *     ConnectedHomeForUpdate: { // ConnectedHomeSettingsForUpdate
 *       Labels: [ // ConnectedHomeLabels
 *         "STRING_VALUE",
 *       ],
 *       MinConfidence: Number("float"),
 *     },
 *   },
 *   RegionsOfInterestForUpdate: [ // RegionsOfInterest
 *     { // RegionOfInterest
 *       BoundingBox: { // BoundingBox
 *         Width: Number("float"),
 *         Height: Number("float"),
 *         Left: Number("float"),
 *         Top: Number("float"),
 *       },
 *       Polygon: [ // Polygon
 *         { // Point
 *           X: Number("float"),
 *           Y: Number("float"),
 *         },
 *       ],
 *     },
 *   ],
 *   DataSharingPreferenceForUpdate: { // StreamProcessorDataSharingPreference
 *     OptIn: true || false, // required
 *   },
 *   ParametersToDelete: [ // StreamProcessorParametersToDelete
 *     "ConnectedHomeMinConfidence" || "RegionsOfInterest",
 *   ],
 * };
 * const command = new UpdateStreamProcessorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateStreamProcessorCommandInput - {@link UpdateStreamProcessorCommandInput}
 * @returns {@link UpdateStreamProcessorCommandOutput}
 * @see {@link UpdateStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamProcessorCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateStreamProcessorCommand extends $Command
  .classBuilder<
    UpdateStreamProcessorCommandInput,
    UpdateStreamProcessorCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "UpdateStreamProcessor", {})
  .n("RekognitionClient", "UpdateStreamProcessorCommand")
  .f(void 0, void 0)
  .ser(se_UpdateStreamProcessorCommand)
  .de(de_UpdateStreamProcessorCommand)
  .build() {}
