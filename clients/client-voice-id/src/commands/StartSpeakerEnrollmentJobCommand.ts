// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartSpeakerEnrollmentJobRequest,
  StartSpeakerEnrollmentJobRequestFilterSensitiveLog,
  StartSpeakerEnrollmentJobResponse,
  StartSpeakerEnrollmentJobResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartSpeakerEnrollmentJobCommand, se_StartSpeakerEnrollmentJobCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSpeakerEnrollmentJobCommand}.
 */
export interface StartSpeakerEnrollmentJobCommandInput extends StartSpeakerEnrollmentJobRequest {}
/**
 * @public
 *
 * The output of {@link StartSpeakerEnrollmentJobCommand}.
 */
export interface StartSpeakerEnrollmentJobCommandOutput extends StartSpeakerEnrollmentJobResponse, __MetadataBearer {}

/**
 * <p>Starts a new batch speaker enrollment job using specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, StartSpeakerEnrollmentJobCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, StartSpeakerEnrollmentJobCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const input = { // StartSpeakerEnrollmentJobRequest
 *   ClientToken: "STRING_VALUE",
 *   JobName: "STRING_VALUE",
 *   DomainId: "STRING_VALUE", // required
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   EnrollmentConfig: { // EnrollmentConfig
 *     ExistingEnrollmentAction: "STRING_VALUE",
 *     FraudDetectionConfig: { // EnrollmentJobFraudDetectionConfig
 *       FraudDetectionAction: "STRING_VALUE",
 *       RiskThreshold: Number("int"),
 *       WatchlistIds: [ // EnrollmentJobFraudDetectionConfigWatchlistIds
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   InputDataConfig: { // InputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *   },
 *   OutputDataConfig: { // OutputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *     KmsKeyId: "STRING_VALUE",
 *   },
 * };
 * const command = new StartSpeakerEnrollmentJobCommand(input);
 * const response = await client.send(command);
 * // { // StartSpeakerEnrollmentJobResponse
 * //   Job: { // SpeakerEnrollmentJob
 * //     JobName: "STRING_VALUE",
 * //     JobId: "STRING_VALUE",
 * //     JobStatus: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     EnrollmentConfig: { // EnrollmentConfig
 * //       ExistingEnrollmentAction: "STRING_VALUE",
 * //       FraudDetectionConfig: { // EnrollmentJobFraudDetectionConfig
 * //         FraudDetectionAction: "STRING_VALUE",
 * //         RiskThreshold: Number("int"),
 * //         WatchlistIds: [ // EnrollmentJobFraudDetectionConfigWatchlistIds
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     InputDataConfig: { // InputDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //     },
 * //     OutputDataConfig: { // OutputDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     EndedAt: new Date("TIMESTAMP"),
 * //     FailureDetails: { // FailureDetails
 * //       StatusCode: Number("int"),
 * //       Message: "STRING_VALUE",
 * //     },
 * //     JobProgress: { // JobProgress
 * //       PercentComplete: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartSpeakerEnrollmentJobCommandInput - {@link StartSpeakerEnrollmentJobCommandInput}
 * @returns {@link StartSpeakerEnrollmentJobCommandOutput}
 * @see {@link StartSpeakerEnrollmentJobCommandInput} for command's `input` shape.
 * @see {@link StartSpeakerEnrollmentJobCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Check the error message
 *             and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed due to a conflict. Check the <code>ConflictType</code> and error
 *             message for more details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unknown error on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the <code>ResourceType</code> and error
 *             message for more details.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded the service quota. Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#voiceid-quotas">Voice ID Service Quotas</a> and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please slow down your request rate.
 *             Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html##voiceid-api-quotas">
 *                 Amazon Connect Voice ID Service API throttling quotas </a> and try your
 *             request again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed one or more validations; check the error message for more
 *             details.</p>
 *
 * @throws {@link VoiceIDServiceException}
 * <p>Base exception class for all service exceptions from VoiceID service.</p>
 *
 *
 * @public
 */
export class StartSpeakerEnrollmentJobCommand extends $Command
  .classBuilder<
    StartSpeakerEnrollmentJobCommandInput,
    StartSpeakerEnrollmentJobCommandOutput,
    VoiceIDClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VoiceIDClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("VoiceID", "StartSpeakerEnrollmentJob", {})
  .n("VoiceIDClient", "StartSpeakerEnrollmentJobCommand")
  .f(StartSpeakerEnrollmentJobRequestFilterSensitiveLog, StartSpeakerEnrollmentJobResponseFilterSensitiveLog)
  .ser(se_StartSpeakerEnrollmentJobCommand)
  .de(de_StartSpeakerEnrollmentJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSpeakerEnrollmentJobRequest;
      output: StartSpeakerEnrollmentJobResponse;
    };
    sdk: {
      input: StartSpeakerEnrollmentJobCommandInput;
      output: StartSpeakerEnrollmentJobCommandOutput;
    };
  };
}
