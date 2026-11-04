// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetectModerationLabelsRequest, DetectModerationLabelsResponse } from "../models/models_0";
import { DetectModerationLabels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Detects unsafe content in a specified JPEG or PNG format image. Use `DetectModerationLabels` to moderate images depending on your requirements. For example, you might want to filter images that contain nudity, but not images containing suggestive content.
 *
 * To filter images, use the labels returned by `DetectModerationLabels` to determine which types of content are appropriate.
 *
 * For information about moderation labels, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide.
 *
 * You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file.
 *
 * You can specify an adapter to use when retrieving label predictions by providing a `ProjectVersionArn` to the `ProjectVersion` argument.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DetectModerationLabelsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DetectModerationLabelsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
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
 *
 * You are not authorized to perform the action.
 *
 * @throws {@link HumanLoopQuotaExceededException} (client fault)
 *
 * The number of in-progress human reviews you have has exceeded the number allowed.
 *
 * @throws {@link ImageTooLargeException} (client fault)
 *
 * The input image size exceeds the allowed limit. If you are calling DetectProtectiveEquipment, the image size or resolution exceeds the allowed limit. For more information, see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Rekognition experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidImageFormatException} (client fault)
 *
 * The provided image format is not supported.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Input parameter violated a constraint. Validate your parameter before calling the API operation again.
 *
 * @throws {@link InvalidS3ObjectException} (client fault)
 *
 * Amazon Rekognition is unable to access the S3 object specified in the request.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request cannot be found.
 *
 * @throws {@link ResourceNotReadyException} (client fault)
 *
 * The requested resource isn't ready. For example, this exception occurs when you call `DetectCustomLabels` with a model version that isn't deployed.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
 *
 * @public
 */
export class DetectModerationLabelsCommand extends command<DetectModerationLabelsCommandInput, DetectModerationLabelsCommandOutput>(
  _ep0,
  _mw0,
  "DetectModerationLabels",
  DetectModerationLabels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectModerationLabelsRequest;
      output: DetectModerationLabelsResponse;
    };
    sdk: {
      input: DetectModerationLabelsCommandInput;
      output: DetectModerationLabelsCommandOutput;
    };
  };
}
