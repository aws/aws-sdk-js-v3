// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  StartContactConversationalAnalyticsJobRequest,
  StartContactConversationalAnalyticsJobResponse,
} from "../models/models_3";
import { StartContactConversationalAnalyticsJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartContactConversationalAnalyticsJobCommand}.
 */
export interface StartContactConversationalAnalyticsJobCommandInput extends StartContactConversationalAnalyticsJobRequest {}
/**
 * @public
 *
 * The output of {@link StartContactConversationalAnalyticsJobCommand}.
 */
export interface StartContactConversationalAnalyticsJobCommandOutput extends StartContactConversationalAnalyticsJobResponse, __MetadataBearer {}

/**
 * <p>Starts a Contact Lens post-call analytics job for the specified contact. This API runs Conversational
 *    Analytics post-contact analysis on a voice recording that is already attached to the contact, generating
 *    transcription, sentiment analysis, redaction, and summarization results based on the provided configuration.</p>
 *          <important>
 *             <p>A voice recording must already be attached to the contact before calling this API. Use
 *     <code>CreateAttachedFile</code> to attach a recording from an S3 source URI.</p>
 *          </important>
 *          <note>
 *             <p>For example, you can call <code>CreateContact</code>, then <code>CreateAttachedFile</code>, then
 *     <code>StartContactConversationalAnalyticsJob</code> to create a contact, attach a recording, and
 *     run post-call analytics.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartContactConversationalAnalyticsJobCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartContactConversationalAnalyticsJobCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StartContactConversationalAnalyticsJobRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   AnalyticsModes: [ // AnalyticsModes // required
 *     "PostContact" || "RealTime" || "ContactLens" || "AutomatedInteraction",
 *   ],
 *   AnalyticsConfiguration: { // AnalyticsConfiguration
 *     LanguageConfiguration: { // LanguageConfiguration
 *       LanguageLocale: "STRING_VALUE",
 *     },
 *     RedactionConfiguration: { // RedactionConfiguration
 *       Behavior: "Enable" || "Disable", // required
 *       Policy: "None" || "RedactedOnly" || "RedactedAndOriginal", // required
 *       Entities: [ // Entities
 *         "STRING_VALUE",
 *       ],
 *       MaskMode: "PII" || "EntityType",
 *     },
 *     SentimentConfiguration: { // SentimentConfiguration
 *       Behavior: "Enable" || "Disable", // required
 *     },
 *     SummaryConfiguration: { // SummaryConfiguration
 *       SummaryModes: [ // SummaryModes // required
 *         "PostContact" || "AutomatedInteraction" || "ContactChain",
 *       ],
 *     },
 *     RulesConfiguration: { // RulesConfiguration
 *       Behavior: "Enable" || "Disable",
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StartContactConversationalAnalyticsJobCommand(input);
 * const response = await client.send(command);
 * // { // StartContactConversationalAnalyticsJobResponse
 * //   InstanceId: "STRING_VALUE",
 * //   ContactId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartContactConversationalAnalyticsJobCommandInput - {@link StartContactConversationalAnalyticsJobCommandInput}
 * @returns {@link StartContactConversationalAnalyticsJobCommandOutput}
 * @see {@link StartContactConversationalAnalyticsJobCommandInput} for command's `input` shape.
 * @see {@link StartContactConversationalAnalyticsJobCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link IdempotencyException} (client fault)
 *  <p>An entity with the same name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class StartContactConversationalAnalyticsJobCommand extends $Command
  .classBuilder<
    StartContactConversationalAnalyticsJobCommandInput,
    StartContactConversationalAnalyticsJobCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "StartContactConversationalAnalyticsJob", {})
  .n("ConnectClient", "StartContactConversationalAnalyticsJobCommand")
  .sc(StartContactConversationalAnalyticsJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartContactConversationalAnalyticsJobRequest;
      output: StartContactConversationalAnalyticsJobResponse;
    };
    sdk: {
      input: StartContactConversationalAnalyticsJobCommandInput;
      output: StartContactConversationalAnalyticsJobCommandOutput;
    };
  };
}
