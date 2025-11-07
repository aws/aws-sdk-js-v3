// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFaceLivenessSessionRequest, CreateFaceLivenessSessionResponse } from "../models/models_0";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { CreateFaceLivenessSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFaceLivenessSessionCommand}.
 */
export interface CreateFaceLivenessSessionCommandInput extends CreateFaceLivenessSessionRequest {}
/**
 * @public
 *
 * The output of {@link CreateFaceLivenessSessionCommand}.
 */
export interface CreateFaceLivenessSessionCommandOutput extends CreateFaceLivenessSessionResponse, __MetadataBearer {}

/**
 * <p>This API operation initiates a Face Liveness session. It returns a <code>SessionId</code>,
 *       which you can use to start streaming Face Liveness video and get the results for a Face
 *       Liveness session. </p>
 *          <p>You can use the <code>OutputConfig</code> option in the Settings parameter to provide an
 *       Amazon S3 bucket location. The Amazon S3 bucket stores reference images and audit images. If no Amazon S3
 *       bucket is defined, raw bytes are sent instead. </p>
 *          <p>You can use <code>AuditImagesLimit</code> to limit the number of audit images returned
 *       when <code>GetFaceLivenessSessionResults</code> is called. This number is between 0 and 4. By
 *       default, it is set to 0. The limit is best effort and based on the duration of the
 *       selfie-video. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, CreateFaceLivenessSessionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, CreateFaceLivenessSessionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // CreateFaceLivenessSessionRequest
 *   KmsKeyId: "STRING_VALUE",
 *   Settings: { // CreateFaceLivenessSessionRequestSettings
 *     OutputConfig: { // LivenessOutputConfig
 *       S3Bucket: "STRING_VALUE", // required
 *       S3KeyPrefix: "STRING_VALUE",
 *     },
 *     AuditImagesLimit: Number("int"),
 *     ChallengePreferences: [ // ChallengePreferences
 *       { // ChallengePreference
 *         Type: "FaceMovementAndLightChallenge" || "FaceMovementChallenge", // required
 *         Versions: { // Versions
 *           Minimum: "STRING_VALUE",
 *           Maximum: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateFaceLivenessSessionCommand(input);
 * const response = await client.send(command);
 * // { // CreateFaceLivenessSessionResponse
 * //   SessionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateFaceLivenessSessionCommandInput - {@link CreateFaceLivenessSessionCommandInput}
 * @returns {@link CreateFaceLivenessSessionCommandOutput}
 * @see {@link CreateFaceLivenessSessionCommandInput} for command's `input` shape.
 * @see {@link CreateFaceLivenessSessionCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 *
 * @public
 */
export class CreateFaceLivenessSessionCommand extends $Command
  .classBuilder<
    CreateFaceLivenessSessionCommandInput,
    CreateFaceLivenessSessionCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "CreateFaceLivenessSession", {})
  .n("RekognitionClient", "CreateFaceLivenessSessionCommand")
  .sc(CreateFaceLivenessSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFaceLivenessSessionRequest;
      output: CreateFaceLivenessSessionResponse;
    };
    sdk: {
      input: CreateFaceLivenessSessionCommandInput;
      output: CreateFaceLivenessSessionCommandOutput;
    };
  };
}
