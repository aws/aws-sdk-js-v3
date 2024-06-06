// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DetectModerationLabelsRequest, DetectModerationLabelsResponse } from "../models/models_0";
import { de_DetectModerationLabelsCommand, se_DetectModerationLabelsCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetectModerationLabelsCommand}.
 */
export interface DetectModerationLabelsCommandInput extends DetectModerationLabelsRequest {}
/**
 * @public
 *
 * The output of {@link DetectModerationLabelsCommand}.
 */
export interface DetectModerationLabelsCommandOutput extends DetectModerationLabelsResponse, __MetadataBearer {}

/**
 * <p>Detects unsafe content in a specified JPEG or PNG format image. Use
 *         <code>DetectModerationLabels</code> to moderate images depending on your requirements. For
 *       example, you might want to filter images that contain nudity, but not images containing
 *       suggestive content.</p>
 *          <p>To filter images, use the labels returned by <code>DetectModerationLabels</code> to
 *       determine which types of content are appropriate.</p>
 *          <p>For information about moderation labels, see Detecting Unsafe Content in the
 *       Amazon Rekognition Developer Guide.</p>
 *          <p>You pass the input image either as base64-encoded image bytes or as a reference to an
 *       image in an Amazon S3 bucket. If you use the
 *       AWS
 *       CLI to call Amazon Rekognition operations, passing image bytes is not
 *       supported. The image must be either a PNG or JPEG formatted file. </p>
 *          <p>You can specify an adapter to use when retrieving label predictions by providing a
 *         <code>ProjectVersionArn</code> to the <code>ProjectVersion</code> argument.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DetectModerationLabelsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DetectModerationLabelsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // DetectModerationLabelsRequest
 *   Image: { // Image
 *     Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   MinConfidence: Number("float"),
 *   HumanLoopConfig: { // HumanLoopConfig
 *     HumanLoopName: "STRING_VALUE", // required
 *     FlowDefinitionArn: "STRING_VALUE", // required
 *     DataAttributes: { // HumanLoopDataAttributes
 *       ContentClassifiers: [ // ContentClassifiers
 *         "FreeOfPersonallyIdentifiableInformation" || "FreeOfAdultContent",
 *       ],
 *     },
 *   },
 *   ProjectVersion: "STRING_VALUE",
 * };
 * const command = new DetectModerationLabelsCommand(input);
 * const response = await client.send(command);
 * // { // DetectModerationLabelsResponse
 * //   ModerationLabels: [ // ModerationLabels
 * //     { // ModerationLabel
 * //       Confidence: Number("float"),
 * //       Name: "STRING_VALUE",
 * //       ParentName: "STRING_VALUE",
 * //       TaxonomyLevel: Number("int"),
 * //     },
 * //   ],
 * //   ModerationModelVersion: "STRING_VALUE",
 * //   HumanLoopActivationOutput: { // HumanLoopActivationOutput
 * //     HumanLoopArn: "STRING_VALUE",
 * //     HumanLoopActivationReasons: [ // HumanLoopActivationReasons
 * //       "STRING_VALUE",
 * //     ],
 * //     HumanLoopActivationConditionsEvaluationResults: "STRING_VALUE",
 * //   },
 * //   ProjectVersion: "STRING_VALUE",
 * //   ContentTypes: [ // ContentTypes
 * //     { // ContentType
 * //       Confidence: Number("float"),
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetectModerationLabelsCommandInput - {@link DetectModerationLabelsCommandInput}
 * @returns {@link DetectModerationLabelsCommandOutput}
 * @see {@link DetectModerationLabelsCommandInput} for command's `input` shape.
 * @see {@link DetectModerationLabelsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link HumanLoopQuotaExceededException} (client fault)
 *  <p>The number of in-progress human reviews you have has exceeded the number allowed.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ResourceNotReadyException} (client fault)
 *  <p>The requested resource isn't ready. For example,
 *          this exception occurs when you call <code>DetectCustomLabels</code> with a
 *          model version that isn't deployed. </p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @public
 */
export class DetectModerationLabelsCommand extends $Command
  .classBuilder<
    DetectModerationLabelsCommandInput,
    DetectModerationLabelsCommandOutput,
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
  .s("RekognitionService", "DetectModerationLabels", {})
  .n("RekognitionClient", "DetectModerationLabelsCommand")
  .f(void 0, void 0)
  .ser(se_DetectModerationLabelsCommand)
  .de(de_DetectModerationLabelsCommand)
  .build() {}
