// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFaceLivenessSessionRequest, CreateFaceLivenessSessionResponse } from "../models/models_0";
import { de_CreateFaceLivenessSessionCommand, se_CreateFaceLivenessSessionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

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
 * const client = new RekognitionClient(config);
 * const input = { // CreateFaceLivenessSessionRequest
 *   KmsKeyId: "STRING_VALUE",
 *   Settings: { // CreateFaceLivenessSessionRequestSettings
 *     OutputConfig: { // LivenessOutputConfig
 *       S3Bucket: "STRING_VALUE", // required
 *       S3KeyPrefix: "STRING_VALUE",
 *     },
 *     AuditImagesLimit: Number("int"),
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "CreateFaceLivenessSession", {})
  .n("RekognitionClient", "CreateFaceLivenessSessionCommand")
  .f(void 0, void 0)
  .ser(se_CreateFaceLivenessSessionCommand)
  .de(de_CreateFaceLivenessSessionCommand)
  .build() {}
