// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EvaluateSessionRequest, EvaluateSessionResponse } from "../models/models_0";
import { EvaluateSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EvaluateSessionCommand}.
 */
export interface EvaluateSessionCommandInput extends EvaluateSessionRequest {}
/**
 * @public
 *
 * The output of {@link EvaluateSessionCommand}.
 */
export interface EvaluateSessionCommandOutput extends EvaluateSessionResponse, __MetadataBearer {}

/**
 * Evaluates a specified session based on audio data accumulated during a streaming Amazon Connect Voice ID call.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, EvaluateSessionCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, EvaluateSessionCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // EvaluateSessionRequest
 *   DomainId: "STRING_VALUE", // required
 *   SessionNameOrId: "STRING_VALUE", // required
 * };
 * const command = new EvaluateSessionCommand(input);
 * const response = await client.send(command);
 * // { // EvaluateSessionResponse
 * //   DomainId: "STRING_VALUE",
 * //   SessionId: "STRING_VALUE",
 * //   SessionName: "STRING_VALUE",
 * //   StreamingStatus: "STRING_VALUE",
 * //   AuthenticationResult: { // AuthenticationResult
 * //     AuthenticationResultId: "STRING_VALUE",
 * //     AudioAggregationStartedAt: new Date("TIMESTAMP"),
 * //     AudioAggregationEndedAt: new Date("TIMESTAMP"),
 * //     CustomerSpeakerId: "STRING_VALUE",
 * //     GeneratedSpeakerId: "STRING_VALUE",
 * //     Decision: "STRING_VALUE",
 * //     Score: Number("int"),
 * //     Configuration: { // AuthenticationConfiguration
 * //       AcceptanceThreshold: Number("int"), // required
 * //     },
 * //   },
 * //   FraudDetectionResult: { // FraudDetectionResult
 * //     FraudDetectionResultId: "STRING_VALUE",
 * //     AudioAggregationStartedAt: new Date("TIMESTAMP"),
 * //     AudioAggregationEndedAt: new Date("TIMESTAMP"),
 * //     Configuration: { // FraudDetectionConfiguration
 * //       RiskThreshold: Number("int"),
 * //       WatchlistId: "STRING_VALUE",
 * //     },
 * //     Decision: "STRING_VALUE",
 * //     Reasons: [ // FraudDetectionReasons
 * //       "STRING_VALUE",
 * //     ],
 * //     RiskDetails: { // FraudRiskDetails
 * //       KnownFraudsterRisk: { // KnownFraudsterRisk
 * //         RiskScore: Number("int"), // required
 * //         GeneratedFraudsterId: "STRING_VALUE",
 * //       },
 * //       VoiceSpoofingRisk: { // VoiceSpoofingRisk
 * //         RiskScore: Number("int"), // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param EvaluateSessionCommandInput - {@link EvaluateSessionCommandInput}
 * @returns {@link EvaluateSessionCommandOutput}
 * @see {@link EvaluateSessionCommandInput} for command's `input` shape.
 * @see {@link EvaluateSessionCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action. Check the error message and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request failed due to a conflict. Check the `ConflictType` and error message for more details.
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
export class EvaluateSessionCommand extends command<EvaluateSessionCommandInput, EvaluateSessionCommandOutput>(
  _ep0,
  _mw0,
  "EvaluateSession",
  EvaluateSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EvaluateSessionRequest;
      output: EvaluateSessionResponse;
    };
    sdk: {
      input: EvaluateSessionCommandInput;
      output: EvaluateSessionCommandOutput;
    };
  };
}
