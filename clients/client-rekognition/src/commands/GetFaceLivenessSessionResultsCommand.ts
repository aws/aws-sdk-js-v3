// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetFaceLivenessSessionResultsRequest,
  GetFaceLivenessSessionResultsResponse,
  GetFaceLivenessSessionResultsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetFaceLivenessSessionResultsCommand,
  se_GetFaceLivenessSessionResultsCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFaceLivenessSessionResultsCommand}.
 */
export interface GetFaceLivenessSessionResultsCommandInput extends GetFaceLivenessSessionResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetFaceLivenessSessionResultsCommand}.
 */
export interface GetFaceLivenessSessionResultsCommandOutput
  extends GetFaceLivenessSessionResultsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the results of a specific Face Liveness session. It requires the
 *         <code>sessionId</code> as input, which was created using
 *         <code>CreateFaceLivenessSession</code>. Returns the corresponding Face Liveness confidence
 *       score, a reference image that includes a face bounding box, and audit images that also contain
 *       face bounding boxes. The Face Liveness confidence score ranges from 0 to 100. </p>
 *          <p>The number of audit images returned by <code>GetFaceLivenessSessionResults</code> is
 *       defined by the <code>AuditImagesLimit</code> paramater when calling
 *         <code>CreateFaceLivenessSession</code>. Reference images are always returned when
 *       possible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetFaceLivenessSessionResultsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetFaceLivenessSessionResultsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // GetFaceLivenessSessionResultsRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new GetFaceLivenessSessionResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetFaceLivenessSessionResultsResponse
 * //   SessionId: "STRING_VALUE", // required
 * //   Status: "CREATED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "EXPIRED", // required
 * //   Confidence: Number("float"),
 * //   ReferenceImage: { // AuditImage
 * //     Bytes: new Uint8Array(),
 * //     S3Object: { // S3Object
 * //       Bucket: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //     },
 * //     BoundingBox: { // BoundingBox
 * //       Width: Number("float"),
 * //       Height: Number("float"),
 * //       Left: Number("float"),
 * //       Top: Number("float"),
 * //     },
 * //   },
 * //   AuditImages: [ // AuditImages
 * //     {
 * //       Bytes: new Uint8Array(),
 * //       S3Object: {
 * //         Bucket: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //       BoundingBox: {
 * //         Width: Number("float"),
 * //         Height: Number("float"),
 * //         Left: Number("float"),
 * //         Top: Number("float"),
 * //       },
 * //     },
 * //   ],
 * //   Challenge: { // Challenge
 * //     Type: "FaceMovementAndLightChallenge" || "FaceMovementChallenge", // required
 * //     Version: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFaceLivenessSessionResultsCommandInput - {@link GetFaceLivenessSessionResultsCommandInput}
 * @returns {@link GetFaceLivenessSessionResultsCommandOutput}
 * @see {@link GetFaceLivenessSessionResultsCommandInput} for command's `input` shape.
 * @see {@link GetFaceLivenessSessionResultsCommandOutput} for command's `response` shape.
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
 * @throws {@link SessionNotFoundException} (client fault)
 *  <p>Occurs when a given sessionId is not found.</p>
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
export class GetFaceLivenessSessionResultsCommand extends $Command
  .classBuilder<
    GetFaceLivenessSessionResultsCommandInput,
    GetFaceLivenessSessionResultsCommandOutput,
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
  .s("RekognitionService", "GetFaceLivenessSessionResults", {})
  .n("RekognitionClient", "GetFaceLivenessSessionResultsCommand")
  .f(void 0, GetFaceLivenessSessionResultsResponseFilterSensitiveLog)
  .ser(se_GetFaceLivenessSessionResultsCommand)
  .de(de_GetFaceLivenessSessionResultsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFaceLivenessSessionResultsRequest;
      output: GetFaceLivenessSessionResultsResponse;
    };
    sdk: {
      input: GetFaceLivenessSessionResultsCommandInput;
      output: GetFaceLivenessSessionResultsCommandOutput;
    };
  };
}
