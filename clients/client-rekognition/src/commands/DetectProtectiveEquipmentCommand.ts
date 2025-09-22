// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DetectProtectiveEquipmentRequest, DetectProtectiveEquipmentResponse } from "../models/models_0";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DetectProtectiveEquipment } from "../schemas/schemas_3_Detect";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetectProtectiveEquipmentCommand}.
 */
export interface DetectProtectiveEquipmentCommandInput extends DetectProtectiveEquipmentRequest {}
/**
 * @public
 *
 * The output of {@link DetectProtectiveEquipmentCommand}.
 */
export interface DetectProtectiveEquipmentCommandOutput extends DetectProtectiveEquipmentResponse, __MetadataBearer {}

/**
 * <p>Detects Personal Protective Equipment (PPE) worn by people detected in an image. Amazon Rekognition can detect the
 *          following types of PPE.</p>
 *          <ul>
 *             <li>
 *                <p>Face cover</p>
 *             </li>
 *             <li>
 *                <p>Hand cover</p>
 *             </li>
 *             <li>
 *                <p>Head cover</p>
 *             </li>
 *          </ul>
 *          <p>You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket.
 *          The image must be either a PNG or JPG formatted file. </p>
 *          <p>
 *             <code>DetectProtectiveEquipment</code> detects PPE worn by up to 15 persons detected in an image.</p>
 *          <p>For each person detected in the image the API returns an array of body parts (face, head, left-hand, right-hand).
 *          For each body part, an array of detected items of PPE is returned, including an indicator of whether or not the PPE
 *          covers the body part. The API returns the confidence it has in each detection
 *          (person, PPE, body part and body part coverage). It also returns a bounding box (<a>BoundingBox</a>) for each detected
 *          person and each detected item of PPE. </p>
 *          <p>You can optionally request a summary of detected PPE items with the <code>SummarizationAttributes</code> input parameter.
 *          The summary provides the following information. </p>
 *          <ul>
 *             <li>
 *                <p>The persons detected as wearing all of the types of PPE that you specify.</p>
 *             </li>
 *             <li>
 *                <p>The persons detected as not wearing all of the types PPE that you specify.</p>
 *             </li>
 *             <li>
 *                <p>The persons detected where PPE adornment could not be determined. </p>
 *             </li>
 *          </ul>
 *          <p>This is a stateless API operation. That is, the operation does not persist any data.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:DetectProtectiveEquipment</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DetectProtectiveEquipmentCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DetectProtectiveEquipmentCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // DetectProtectiveEquipmentRequest
 *   Image: { // Image
 *     Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   SummarizationAttributes: { // ProtectiveEquipmentSummarizationAttributes
 *     MinConfidence: Number("float"), // required
 *     RequiredEquipmentTypes: [ // ProtectiveEquipmentTypes // required
 *       "FACE_COVER" || "HAND_COVER" || "HEAD_COVER",
 *     ],
 *   },
 * };
 * const command = new DetectProtectiveEquipmentCommand(input);
 * const response = await client.send(command);
 * // { // DetectProtectiveEquipmentResponse
 * //   ProtectiveEquipmentModelVersion: "STRING_VALUE",
 * //   Persons: [ // ProtectiveEquipmentPersons
 * //     { // ProtectiveEquipmentPerson
 * //       BodyParts: [ // BodyParts
 * //         { // ProtectiveEquipmentBodyPart
 * //           Name: "FACE" || "HEAD" || "LEFT_HAND" || "RIGHT_HAND",
 * //           Confidence: Number("float"),
 * //           EquipmentDetections: [ // EquipmentDetections
 * //             { // EquipmentDetection
 * //               BoundingBox: { // BoundingBox
 * //                 Width: Number("float"),
 * //                 Height: Number("float"),
 * //                 Left: Number("float"),
 * //                 Top: Number("float"),
 * //               },
 * //               Confidence: Number("float"),
 * //               Type: "FACE_COVER" || "HAND_COVER" || "HEAD_COVER",
 * //               CoversBodyPart: { // CoversBodyPart
 * //                 Confidence: Number("float"),
 * //                 Value: true || false,
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       BoundingBox: {
 * //         Width: Number("float"),
 * //         Height: Number("float"),
 * //         Left: Number("float"),
 * //         Top: Number("float"),
 * //       },
 * //       Confidence: Number("float"),
 * //       Id: Number("int"),
 * //     },
 * //   ],
 * //   Summary: { // ProtectiveEquipmentSummary
 * //     PersonsWithRequiredEquipment: [ // ProtectiveEquipmentPersonIds
 * //       Number("int"),
 * //     ],
 * //     PersonsWithoutRequiredEquipment: [
 * //       Number("int"),
 * //     ],
 * //     PersonsIndeterminate: [
 * //       Number("int"),
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DetectProtectiveEquipmentCommandInput - {@link DetectProtectiveEquipmentCommandInput}
 * @returns {@link DetectProtectiveEquipmentCommandOutput}
 * @see {@link DetectProtectiveEquipmentCommandInput} for command's `input` shape.
 * @see {@link DetectProtectiveEquipmentCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ImageTooLargeException} (client fault)
 *  <p>The input image size exceeds the allowed limit. If you are calling
 *       DetectProtectiveEquipment, the image size or resolution exceeds the allowed limit. For more
 *       information, see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide.
 *     </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidImageFormatException} (client fault)
 *  <p>The provided image format is not supported. </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link InvalidS3ObjectException} (client fault)
 *  <p>Amazon Rekognition is unable to access the S3 object specified in the request.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
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
export class DetectProtectiveEquipmentCommand extends $Command
  .classBuilder<
    DetectProtectiveEquipmentCommandInput,
    DetectProtectiveEquipmentCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "DetectProtectiveEquipment", {})
  .n("RekognitionClient", "DetectProtectiveEquipmentCommand")
  .sc(DetectProtectiveEquipment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectProtectiveEquipmentRequest;
      output: DetectProtectiveEquipmentResponse;
    };
    sdk: {
      input: DetectProtectiveEquipmentCommandInput;
      output: DetectProtectiveEquipmentCommandOutput;
    };
  };
}
