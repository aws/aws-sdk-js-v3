// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartFraudsterRegistrationJobRequest, StartFraudsterRegistrationJobResponse } from "../models/models_0";
import { StartFraudsterRegistrationJob } from "../schemas/schemas_3_Job";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartFraudsterRegistrationJobCommand}.
 */
export interface StartFraudsterRegistrationJobCommandInput extends StartFraudsterRegistrationJobRequest {}
/**
 * @public
 *
 * The output of {@link StartFraudsterRegistrationJobCommand}.
 */
export interface StartFraudsterRegistrationJobCommandOutput
  extends StartFraudsterRegistrationJobResponse,
    __MetadataBearer {}

/**
 * <p>Starts a new batch fraudster registration job using provided details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, StartFraudsterRegistrationJobCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, StartFraudsterRegistrationJobCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // StartFraudsterRegistrationJobRequest
 *   ClientToken: "STRING_VALUE",
 *   JobName: "STRING_VALUE",
 *   DomainId: "STRING_VALUE", // required
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   RegistrationConfig: { // RegistrationConfig
 *     DuplicateRegistrationAction: "STRING_VALUE",
 *     FraudsterSimilarityThreshold: Number("int"),
 *     WatchlistIds: [ // RegistrationConfigWatchlistIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   InputDataConfig: { // InputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *   },
 *   OutputDataConfig: { // OutputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *     KmsKeyId: "STRING_VALUE",
 *   },
 * };
 * const command = new StartFraudsterRegistrationJobCommand(input);
 * const response = await client.send(command);
 * // { // StartFraudsterRegistrationJobResponse
 * //   Job: { // FraudsterRegistrationJob
 * //     JobName: "STRING_VALUE",
 * //     JobId: "STRING_VALUE",
 * //     JobStatus: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     RegistrationConfig: { // RegistrationConfig
 * //       DuplicateRegistrationAction: "STRING_VALUE",
 * //       FraudsterSimilarityThreshold: Number("int"),
 * //       WatchlistIds: [ // RegistrationConfigWatchlistIds
 * //         "STRING_VALUE",
 * //       ],
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
 * @param StartFraudsterRegistrationJobCommandInput - {@link StartFraudsterRegistrationJobCommandInput}
 * @returns {@link StartFraudsterRegistrationJobCommandOutput}
 * @see {@link StartFraudsterRegistrationJobCommandInput} for command's `input` shape.
 * @see {@link StartFraudsterRegistrationJobCommandOutput} for command's `response` shape.
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
export class StartFraudsterRegistrationJobCommand extends $Command
  .classBuilder<
    StartFraudsterRegistrationJobCommandInput,
    StartFraudsterRegistrationJobCommandOutput,
    VoiceIDClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VoiceIDClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("VoiceID", "StartFraudsterRegistrationJob", {})
  .n("VoiceIDClient", "StartFraudsterRegistrationJobCommand")
  .sc(StartFraudsterRegistrationJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFraudsterRegistrationJobRequest;
      output: StartFraudsterRegistrationJobResponse;
    };
    sdk: {
      input: StartFraudsterRegistrationJobCommandInput;
      output: StartFraudsterRegistrationJobCommandOutput;
    };
  };
}
