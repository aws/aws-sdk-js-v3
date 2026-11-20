// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TranscribeAudioRequest, TranscribeAudioResponse } from "../models/models_0";
import { TranscribeAudio$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TranscribeAudioCommand}.
 */
export interface TranscribeAudioCommandInput extends TranscribeAudioRequest {}
/**
 * @public
 *
 * The output of {@link TranscribeAudioCommand}.
 */
export interface TranscribeAudioCommandOutput extends TranscribeAudioResponse, __MetadataBearer {}

/**
 * <p>Transcribes a media file and returns the transcript in the same response. There is
 *             no job to start and no status to poll.</p>
 *          <p>Use <code>TranscribeAudio</code> when you already have a complete media file and want
 *             the transcript right away. For large files, long audio, or bulk processing, use .</p>
 *          <p>You must include the following parameters in your <code>TranscribeAudio</code>
 *             request:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Media</code>: Your audio, either as inline bytes
 *                         (<code>MediaBytes</code>) or as the Amazon S3 location of a media
 *                     file (<code>MediaFileUri</code>).</p>
 *             </li>
 *             <li>
 *                <p>One of <code>Language</code> or <code>LanguageDetectionMode</code>: Specify
 *                     the language of your audio, or have Amazon Transcribe identify it.</p>
 *             </li>
 *          </ul>
 *          <p>Your audio must be between 0.5 seconds and 1 hour long. Supported formats are WAV,
 *             MP3, FLAC, M4A, MP4, Ogg, WebM, and AMR.</p>
 *          <p>If you send your audio in the request (<code>MediaBytes</code>), the file can be up to
 *             25 MB. If you provide an Amazon S3 location (<code>MediaFileUri</code>), the
 *             file can be up to 500 MB.</p>
 *          <p>Amazon Transcribe always turns on smart formatting, also known as inverse text
 *             normalization (ITN). It writes numbers, dates, currency, and similar items in their
 *             usual written form. For example, "one hundred" becomes "100". You can't turn smart
 *             formatting off.</p>
 *          <p>By default, Amazon Transcribe returns the transcript in
 *                 <code>TranscriptResponse</code>. If you include <code>OutputConfiguration</code>,
 *                 Amazon Transcribe writes the transcript to the Amazon S3 location you
 *             specify instead, and the response contains only that location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, TranscribeAudioCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, TranscribeAudioCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // TranscribeAudioRequest
 *   Media: { // SyncMedia Union: only one key present
 *     MediaBytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     MediaFileUri: "STRING_VALUE",
 *   },
 *   Language: "en" || "es" || "fr" || "it" || "de" || "ja" || "pt" || "ko" || "zh-CN" || "zh-TW" || "zh-HK",
 *   LanguageDetectionMode: "IDENTIFY_LANGUAGE",
 *   LanguageOptions: [ // SyncLanguageOptions
 *     "en" || "es" || "fr" || "it" || "de" || "ja" || "pt" || "ko" || "zh-CN" || "zh-TW" || "zh-HK",
 *   ],
 *   ChannelIdentification: true || false,
 *   ShowSpeakerLabels: true || false,
 *   MaxSpeakerLabels: Number("int"),
 *   VocabularySettings: [ // VocabularySettingsList
 *     { // VocabularySettingsEntry
 *       Language: "en" || "es" || "fr" || "it" || "de" || "ja" || "pt" || "ko" || "zh-CN" || "zh-TW" || "zh-HK", // required
 *       VocabularyName: "STRING_VALUE",
 *       Phrases: [ // VocabularyPhraseList
 *         { // VocabularyPhrase
 *           Text: "STRING_VALUE", // required
 *           DisplayAs: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   VocabularyFilterSettings: { // VocabularyFilterSettings
 *     VocabularyFilterMethod: "remove" || "mask" || "tag", // required
 *     Filters: [ // VocabularyFilterEntryList // required
 *       { // VocabularyFilterEntry
 *         Language: "en" || "es" || "fr" || "it" || "de" || "ja" || "pt" || "ko" || "zh-CN" || "zh-TW" || "zh-HK", // required
 *         VocabularyFilterName: "STRING_VALUE",
 *         Words: [ // Words
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   ContentRedaction: { // ContentRedaction
 *     RedactionType: "PII", // required
 *     RedactionOutput: "redacted" || "redacted_and_unredacted", // required
 *     PiiEntityTypes: [ // PiiEntityTypes
 *       "BANK_ACCOUNT_NUMBER" || "BANK_ROUTING" || "CREDIT_DEBIT_NUMBER" || "CREDIT_DEBIT_CVV" || "CREDIT_DEBIT_EXPIRY" || "PIN" || "EMAIL" || "ADDRESS" || "NAME" || "PHONE" || "SSN" || "DATE_TIME" || "PASSPORT_NUMBER" || "DRIVER_ID" || "URL" || "AGE" || "USERNAME" || "PASSWORD" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "IP_ADDRESS" || "MAC_ADDRESS" || "LICENSE_PLATE" || "VEHICLE_IDENTIFICATION_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "SWIFT_CODE" || "ALL",
 *     ],
 *   },
 *   OutputConfiguration: { // SyncOutputConfiguration
 *     OutputMediaFileUri: "STRING_VALUE", // required
 *   },
 * };
 * const command = new TranscribeAudioCommand(input);
 * const response = await client.send(command);
 * // { // TranscribeAudioResponse
 * //   OutputConfiguration: { // SyncOutputConfiguration
 * //     OutputMediaFileUri: "STRING_VALUE", // required
 * //   },
 * //   TranscriptResponse: { // TranscriptResponse
 * //     Metadata: { // TranscribeAudioMetadata
 * //       LanguageCode: "en-US" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-WL" || "en-ZA" || "en-NZ" || "es-US" || "es-ES" || "es-MX" || "fr-FR" || "fr-CA" || "it-IT" || "de-DE" || "de-CH" || "ja-JP" || "pt-BR" || "pt-PT" || "zh-CN" || "zh-TW" || "zh-HK" || "ko-KR",
 * //       LanguageCodes: [ // SyncLanguageCodeList
 * //         { // SyncLanguageCodeItem
 * //           LanguageCode: "en-US" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-WL" || "en-ZA" || "en-NZ" || "es-US" || "es-ES" || "es-MX" || "fr-FR" || "fr-CA" || "it-IT" || "de-DE" || "de-CH" || "ja-JP" || "pt-BR" || "pt-PT" || "zh-CN" || "zh-TW" || "zh-HK" || "ko-KR",
 * //           DurationInSeconds: Number("float"),
 * //         },
 * //       ],
 * //       MediaFormat: "mp3" || "mp4" || "wav" || "flac" || "ogg" || "amr" || "webm" || "m4a",
 * //       MediaSampleRateHertz: Number("int"),
 * //       SpeakersCount: Number("int"),
 * //       NumberOfChannels: Number("int"),
 * //     },
 * //     Results: { // TranscribeAudioResults
 * //       Transcript: "STRING_VALUE",
 * //       Items: [ // SyncItemList
 * //         { // SyncItem
 * //           Id: Number("int"),
 * //           Content: "STRING_VALUE",
 * //           StartTime: Number("double"),
 * //           EndTime: Number("double"),
 * //           LanguageCode: "en-US" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-WL" || "en-ZA" || "en-NZ" || "es-US" || "es-ES" || "es-MX" || "fr-FR" || "fr-CA" || "it-IT" || "de-DE" || "de-CH" || "ja-JP" || "pt-BR" || "pt-PT" || "zh-CN" || "zh-TW" || "zh-HK" || "ko-KR",
 * //           ChannelLabel: "STRING_VALUE",
 * //           SpeakerLabel: "STRING_VALUE",
 * //           VocabularyFilterMatch: true || false,
 * //           Redactions: [ // SyncRedactionList
 * //             { // SyncRedaction
 * //               Type: "BANK_ACCOUNT_NUMBER" || "BANK_ROUTING" || "CREDIT_DEBIT_NUMBER" || "CREDIT_DEBIT_CVV" || "CREDIT_DEBIT_EXPIRY" || "PIN" || "EMAIL" || "ADDRESS" || "NAME" || "PHONE" || "SSN" || "DATE_TIME" || "PASSPORT_NUMBER" || "DRIVER_ID" || "URL" || "AGE" || "USERNAME" || "PASSWORD" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "IP_ADDRESS" || "MAC_ADDRESS" || "LICENSE_PLATE" || "VEHICLE_IDENTIFICATION_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "SWIFT_CODE" || "ALL",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     RedactedResults: {
 * //       Transcript: "STRING_VALUE",
 * //       Items: [
 * //         {
 * //           Id: Number("int"),
 * //           Content: "STRING_VALUE",
 * //           StartTime: Number("double"),
 * //           EndTime: Number("double"),
 * //           LanguageCode: "en-US" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-WL" || "en-ZA" || "en-NZ" || "es-US" || "es-ES" || "es-MX" || "fr-FR" || "fr-CA" || "it-IT" || "de-DE" || "de-CH" || "ja-JP" || "pt-BR" || "pt-PT" || "zh-CN" || "zh-TW" || "zh-HK" || "ko-KR",
 * //           ChannelLabel: "STRING_VALUE",
 * //           SpeakerLabel: "STRING_VALUE",
 * //           VocabularyFilterMatch: true || false,
 * //           Redactions: [
 * //             {
 * //               Type: "BANK_ACCOUNT_NUMBER" || "BANK_ROUTING" || "CREDIT_DEBIT_NUMBER" || "CREDIT_DEBIT_CVV" || "CREDIT_DEBIT_EXPIRY" || "PIN" || "EMAIL" || "ADDRESS" || "NAME" || "PHONE" || "SSN" || "DATE_TIME" || "PASSPORT_NUMBER" || "DRIVER_ID" || "URL" || "AGE" || "USERNAME" || "PASSWORD" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "IP_ADDRESS" || "MAC_ADDRESS" || "LICENSE_PLATE" || "VEHICLE_IDENTIFICATION_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "SWIFT_CODE" || "ALL",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param TranscribeAudioCommandInput - {@link TranscribeAudioCommandInput}
 * @returns {@link TranscribeAudioCommandOutput}
 * @see {@link TranscribeAudioCommandInput} for command's `input` shape.
 * @see {@link TranscribeAudioCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when a
 *             parameter has an invalid value, when you combine parameters in a way that isn't
 *             supported, when the entity you're trying to delete doesn't exist, or if it's in a
 *             non-terminal state (such as <code>IN PROGRESS</code>). See the exception message field
 *             for more information.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 *
 * @public
 */
export class TranscribeAudioCommand extends command<TranscribeAudioCommandInput, TranscribeAudioCommandOutput>(
  _ep0,
  _mw0,
  "TranscribeAudio",
  TranscribeAudio$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TranscribeAudioRequest;
      output: TranscribeAudioResponse;
    };
    sdk: {
      input: TranscribeAudioCommandInput;
      output: TranscribeAudioCommandOutput;
    };
  };
}
