import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVoicesInput shape
 */
export interface DescribeVoicesInput {
  /**
   * <p>Specifies the engine (<code>standard</code> or <code>neural</code>) used by Amazon Polly when processing input text for speech synthesis. </p>
   */
  Engine?: "standard" | "neural" | string;

  /**
   * <p> The language identification tag (ISO 639 code for the language name-ISO 3166 country code) for filtering the list of voices returned. If you don't specify this optional parameter, all available voices are returned. </p>
   */
  LanguageCode?:
    | "arb"
    | "cmn-CN"
    | "cy-GB"
    | "da-DK"
    | "de-DE"
    | "en-AU"
    | "en-GB"
    | "en-GB-WLS"
    | "en-IN"
    | "en-US"
    | "es-ES"
    | "es-MX"
    | "es-US"
    | "fr-CA"
    | "fr-FR"
    | "is-IS"
    | "it-IT"
    | "ja-JP"
    | "hi-IN"
    | "ko-KR"
    | "nb-NO"
    | "nl-NL"
    | "pl-PL"
    | "pt-BR"
    | "pt-PT"
    | "ro-RO"
    | "ru-RU"
    | "sv-SE"
    | "tr-TR"
    | string;

  /**
   * <p>Boolean value indicating whether to return any bilingual voices that use the specified language as an additional language. For instance, if you request all languages that use US English (es-US), and there is an Italian voice that speaks both Italian (it-IT) and US English, that voice will be included if you specify <code>yes</code> but not if you specify <code>no</code>.</p>
   */
  IncludeAdditionalLanguageCodes?: boolean;

  /**
   * <p>An opaque pagination token returned from the previous <code>DescribeVoices</code> operation. If present, this indicates where to continue the listing.</p>
   */
  NextToken?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
