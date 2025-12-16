// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSpeakerEnrollmentJobRequest, DescribeSpeakerEnrollmentJobResponse } from "../models/models_0";
import { DescribeSpeakerEnrollmentJob$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSpeakerEnrollmentJobCommand}.
 */
export interface DescribeSpeakerEnrollmentJobCommandInput extends DescribeSpeakerEnrollmentJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSpeakerEnrollmentJobCommand}.
 */
export interface DescribeSpeakerEnrollmentJobCommandOutput
  extends DescribeSpeakerEnrollmentJobResponse,
    __MetadataBearer {}

/**
 * <p>Describes the specified speaker enrollment job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, DescribeSpeakerEnrollmentJobCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, DescribeSpeakerEnrollmentJobCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // DescribeSpeakerEnrollmentJobRequest
 *   DomainId: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSpeakerEnrollmentJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSpeakerEnrollmentJobResponse
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
 * @param DescribeSpeakerEnrollmentJobCommandInput - {@link DescribeSpeakerEnrollmentJobCommandInput}
 * @returns {@link DescribeSpeakerEnrollmentJobCommandOutput}
 * @see {@link DescribeSpeakerEnrollmentJobCommandInput} for command's `input` shape.
 * @see {@link DescribeSpeakerEnrollmentJobCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Check the error message
 *             and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unknown error on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the <code>ResourceType</code> and error
 *             message for more details.</p>
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
export class DescribeSpeakerEnrollmentJobCommand extends $Command
  .classBuilder<
    DescribeSpeakerEnrollmentJobCommandInput,
    DescribeSpeakerEnrollmentJobCommandOutput,
    VoiceIDClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VoiceIDClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("VoiceID", "DescribeSpeakerEnrollmentJob", {})
  .n("VoiceIDClient", "DescribeSpeakerEnrollmentJobCommand")
  .sc(DescribeSpeakerEnrollmentJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSpeakerEnrollmentJobRequest;
      output: DescribeSpeakerEnrollmentJobResponse;
    };
    sdk: {
      input: DescribeSpeakerEnrollmentJobCommandInput;
      output: DescribeSpeakerEnrollmentJobCommandOutput;
    };
  };
}
