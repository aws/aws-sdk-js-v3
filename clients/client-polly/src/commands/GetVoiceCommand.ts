// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVoiceInput, GetVoiceOutput } from "../models/models_0";
import { GetVoice$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVoiceCommand}.
 */
export interface GetVoiceCommandInput extends GetVoiceInput {}
/**
 * @public
 *
 * The output of {@link GetVoiceCommand}.
 */
export interface GetVoiceCommandOutput extends GetVoiceOutput, __MetadataBearer {}

/**
 * <p>Returns the status and properties of a custom voice. Use this
 *       operation after <code>CreateVoice</code> to check whether the status of
 *       the voice is <code>active</code> or <code>failed</code>. Unlike
 *       <code>DescribeVoices</code>, <code>GetVoice</code> also returns
 *       <code>Arn</code>, <code>VoiceCreationData</code>,
 *       <code>CustomerManagedEncryption</code>, and
 *       <code>StatusReason</code>. If no custom voice with the specified ID exists
 *       in your account and Region, the request fails with
 *       <code>ResourceNotFoundException</code>.</p>
 *          <p>This operation requires permissions to perform the
 *       <code>polly:GetVoice</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, GetVoiceCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, GetVoiceCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * // import type { PollyClientConfig } from "@aws-sdk/client-polly";
 * const config = {}; // type is PollyClientConfig
 * const client = new PollyClient(config);
 * const input = { // GetVoiceInput
 *   VoiceId: "STRING_VALUE", // required
 * };
 * const command = new GetVoiceCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceOutput
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
 * @param GetVoiceCommandInput - {@link GetVoiceCommandInput}
 * @returns {@link GetVoiceCommandOutput}
 * @see {@link GetVoiceCommandInput} for command's `input` shape.
 * @see {@link GetVoiceCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Polly can't find the specified resource. Verify that the resource
 *       exists in the Amazon Web Services account and Region of the request and that its ARN or
 *       ID is spelled correctly, and then try again.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
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
export class GetVoiceCommand extends command<GetVoiceCommandInput, GetVoiceCommandOutput>(
  _ep0,
  _mw0,
  "GetVoice",
  GetVoice$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVoiceInput;
      output: GetVoiceOutput;
    };
    sdk: {
      input: GetVoiceCommandInput;
      output: GetVoiceCommandOutput;
    };
  };
}
