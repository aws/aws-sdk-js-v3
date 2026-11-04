// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeFraudsterRegistrationJobRequest,
  DescribeFraudsterRegistrationJobResponse,
} from "../models/models_0";
import { DescribeFraudsterRegistrationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeFraudsterRegistrationJobCommand}.
 */
export interface DescribeFraudsterRegistrationJobCommandInput extends DescribeFraudsterRegistrationJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFraudsterRegistrationJobCommand}.
 */
export interface DescribeFraudsterRegistrationJobCommandOutput extends DescribeFraudsterRegistrationJobResponse, __MetadataBearer {}

/**
 * Describes the specified fraudster registration job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, DescribeFraudsterRegistrationJobCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, DescribeFraudsterRegistrationJobCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // DescribeFraudsterRegistrationJobRequest
 *   DomainId: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeFraudsterRegistrationJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFraudsterRegistrationJobResponse
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
 * @param DescribeFraudsterRegistrationJobCommandInput - {@link DescribeFraudsterRegistrationJobCommandInput}
 * @returns {@link DescribeFraudsterRegistrationJobCommandOutput}
 * @see {@link DescribeFraudsterRegistrationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeFraudsterRegistrationJobCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action. Check the error message and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed due to an unknown error on the server side.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found. Check the `ResourceType` and error message for more details.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Please slow down your request rate. Refer to [Amazon Connect Voice ID Service API throttling quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html##voiceid-api-quotas) and try your request again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed one or more validations; check the error message for more details.
 *
 * @throws {@link VoiceIDServiceException}
 *
 * Base exception class for all service exceptions from VoiceID service.
 *
 * @public
 */
export class DescribeFraudsterRegistrationJobCommand extends command<DescribeFraudsterRegistrationJobCommandInput, DescribeFraudsterRegistrationJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFraudsterRegistrationJob",
  DescribeFraudsterRegistrationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFraudsterRegistrationJobRequest;
      output: DescribeFraudsterRegistrationJobResponse;
    };
    sdk: {
      input: DescribeFraudsterRegistrationJobCommandInput;
      output: DescribeFraudsterRegistrationJobCommandOutput;
    };
  };
}
