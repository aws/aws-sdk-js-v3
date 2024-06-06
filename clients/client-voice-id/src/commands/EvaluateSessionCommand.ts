// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  EvaluateSessionRequest,
  EvaluateSessionResponse,
  EvaluateSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_EvaluateSessionCommand, se_EvaluateSessionCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Evaluates a specified session based on audio data accumulated during a streaming
 *             Amazon Connect Voice ID call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, EvaluateSessionCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, EvaluateSessionCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
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
 * @public
 */
export class EvaluateSessionCommand extends $Command
  .classBuilder<
    EvaluateSessionCommandInput,
    EvaluateSessionCommandOutput,
    VoiceIDClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: VoiceIDClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("VoiceID", "EvaluateSession", {})
  .n("VoiceIDClient", "EvaluateSessionCommand")
  .f(void 0, EvaluateSessionResponseFilterSensitiveLog)
  .ser(se_EvaluateSessionCommand)
  .de(de_EvaluateSessionCommand)
  .build() {}
