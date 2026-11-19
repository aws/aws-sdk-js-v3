// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVoiceInput, CreateVoiceOutput } from "../models/models_0";
import { CreateVoice$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateVoiceCommand}.
 */
export interface CreateVoiceCommandInput extends CreateVoiceInput {}
/**
 * @public
 *
 * The output of {@link CreateVoiceCommand}.
 */
export interface CreateVoiceCommandOutput extends CreateVoiceOutput, __MetadataBearer {}

/**
 * <p>Creates a custom voice from recordings of a speaker and returns it
 *       in <code>pending</code> status. Use <code>GetVoice</code> to check the
 *       status. When the status is <code>active</code>, you can use the voice ID
 *       in <code>SynthesizeSpeech</code>, <code>StartSpeechSynthesisTask</code>,
 *       and <code>StartSpeechSynthesisStream</code>.</p>
 *          <p>The <code>custom-voice-max-count</code> service quota limits the
 *       number of custom voices in your account in each Region. If you reach the
 *       quota, the request fails with
 *       <code>ServiceQuotaExceededException</code>.</p>
 *          <p>This operation requires permissions to perform the
 *       <code>polly:CreateVoice</code> action. You also need
 *       <code>s3:GetObject</code> permission on each recording that you specify by
 *       <code>S3Url</code>. If you specify a customer managed key, you also need
 *       <code>kms:DescribeKey</code>, <code>kms:GenerateDataKey</code>, and
 *       <code>kms:Decrypt</code> permissions on the key. If you specify
 *       <code>Tags</code>, you also need the <code>polly:TagResource</code>
 *       permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, CreateVoiceCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, CreateVoiceCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * // import type { PollyClientConfig } from "@aws-sdk/client-polly";
 * const config = {}; // type is PollyClientConfig
 * const client = new PollyClient(config);
 * const input = { // CreateVoiceInput
 *   Name: "STRING_VALUE", // required
 *   LanguageCode: "de-DE" || "en-US" || "es-US" || "fr-FR" || "hi-IN" || "it-IT" || "pt-BR", // required
 *   TermsAccepted: true || false, // required
 *   VoiceCreationData: { // VoiceCreationData
 *     Recordings: [ // RecordingList // required
 *       { // Recording
 *         Format: "wav" || "flac" || "ogg_vorbis" || "mp3", // required
 *         Data: { // RecordingData
 *           S3Url: "STRING_VALUE",
 *           Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         },
 *       },
 *     ],
 *   },
 *   CustomerManagedEncryption: { // CustomerManagedEncryption
 *     KmsKeyArn: "STRING_VALUE", // required
 *     EncryptionContext: { // EncryptionContext
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateVoiceCommand(input);
 * const response = await client.send(command);
 * // { // CreateVoiceOutput
 * //   Voice: { // Voice
 * //     Arn: "STRING_VALUE",
 * //     Gender: "Female" || "Male",
 * //     Id: "Aditi" || "Amy" || "Astrid" || "Bianca" || "Brian" || "Camila" || "Carla" || "Carmen" || "Celine" || "Chantal" || "Conchita" || "Cristiano" || "Dora" || "Emma" || "Enrique" || "Ewa" || "Filiz" || "Gabrielle" || "Geraint" || "Giorgio" || "Gwyneth" || "Hans" || "Ines" || "Ivy" || "Jacek" || "Jan" || "Joanna" || "Joey" || "Justin" || "Karl" || "Kendra" || "Kevin" || "Kimberly" || "Lea" || "Liv" || "Lotte" || "Lucia" || "Lupe" || "Mads" || "Maja" || "Marlene" || "Mathieu" || "Matthew" || "Maxim" || "Mia" || "Miguel" || "Mizuki" || "Naja" || "Nicole" || "Olivia" || "Penelope" || "Raveena" || "Ricardo" || "Ruben" || "Russell" || "Salli" || "Seoyeon" || "Takumi" || "Tatyana" || "Vicki" || "Vitoria" || "Zeina" || "Zhiyu" || "Aria" || "Ayanda" || "Arlet" || "Hannah" || "Arthur" || "Daniel" || "Liam" || "Pedro" || "Kajal" || "Hiujin" || "Laura" || "Elin" || "Ida" || "Suvi" || "Ola" || "Hala" || "Andres" || "Sergio" || "Remi" || "Adriano" || "Thiago" || "Ruth" || "Stephen" || "Kazuha" || "Tomoko" || "Niamh" || "Sofie" || "Lisa" || "Isabelle" || "Zayd" || "Danielle" || "Gregory" || "Burcu" || "Jitka" || "Sabrina" || "Jasmine" || "Jihye" || "Ambre" || "Beatrice" || "Florian" || "Lennart" || "Lorenzo" || "Tiffany" || "Arjun" || "Carlos" || "Carolina" || "Curtis" || "Hyunduk" || "Kenneth" || "Kiara" || "Leo" || "Nate" || "Tina",
 * //     LanguageCode: "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE" || "cs-CZ" || "de-CH" || "en-SG",
 * //     LanguageName: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Origin: "aws" || "customer",
 * //     Status: "pending" || "active" || "failed",
 * //     StatusReason: "STRING_VALUE",
 * //     AdditionalLanguageCodes: [ // LanguageCodeList
 * //       "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE" || "cs-CZ" || "de-CH" || "en-SG",
 * //     ],
 * //     SupportedEngines: [ // EngineList
 * //       "standard" || "neural" || "long-form" || "generative",
 * //     ],
 * //     VoiceCreationData: { // VoiceCreationData
 * //       Recordings: [ // RecordingList // required
 * //         { // Recording
 * //           Format: "wav" || "flac" || "ogg_vorbis" || "mp3", // required
 * //           Data: { // RecordingData
 * //             S3Url: "STRING_VALUE",
 * //             Bytes: new Uint8Array(),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     CustomerManagedEncryption: { // CustomerManagedEncryption
 * //       KmsKeyArn: "STRING_VALUE", // required
 * //       EncryptionContext: { // EncryptionContext
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     CreationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVoiceCommandInput - {@link CreateVoiceCommandInput}
 * @returns {@link CreateVoiceCommandOutput}
 * @see {@link CreateVoiceCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action. For a
 *       custom voice that uses a customer managed key, Amazon Polly also returns this
 *       exception if you don't have the required Amazon Web Services KMS permissions on the
 *       key.</p>
 *
 * @throws {@link InvalidTagParameterException} (client fault)
 *  <p>The resource ARN or a tag in the request isn't valid. Specify the ARN
 *       of a supported resource in the Amazon Web Services account and Region of the request.
 *       Tag keys can have a maximum length of 128 characters, and tag values can
 *       have a maximum length of 256 characters. Correct the ARN or the tags, and
 *       then try again.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The list of tags on the resource is over the limit. The maximum number
 *       of tags that can be applied to a resource is 50. Remove unused tags or
 *       reduce the number of tags in the request, and then try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link PollyServiceException}
 * <p>Base exception class for all service exceptions from Polly service.</p>
 *
 *
 * @public
 */
export class CreateVoiceCommand extends command<CreateVoiceCommandInput, CreateVoiceCommandOutput>(
  _ep0,
  _mw0,
  "CreateVoice",
  CreateVoice$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVoiceInput;
      output: CreateVoiceOutput;
    };
    sdk: {
      input: CreateVoiceCommandInput;
      output: CreateVoiceCommandOutput;
    };
  };
}
