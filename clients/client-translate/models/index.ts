import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *          <p>The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and
 *       will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request.</p>
 *
 */
export interface AppliedTerminology {
  __type?: "AppliedTerminology";
  /**
   *
   *          <p>The name of the custom terminology applied to the input text by Amazon Translate for the translated text response.</p>
   *
   */
  Name?: string;

  /**
   *
   *          <p>The specific terms of the custom terminology applied to the input text by Amazon Translate for the translated text response. A maximum of 250 terms will be
   *     returned, and the specific terms applied will be the first 250 terms in the source text. </p>
   *
   */
  Terms?: Array<Term>;
}

export namespace AppliedTerminology {
  export function isa(o: any): o is AppliedTerminology {
    return _smithy.isa(o, "AppliedTerminology");
  }
}

export interface DeleteTerminologyRequest {
  __type?: "DeleteTerminologyRequest";
  /**
   *
   *          <p>The name of the custom terminology being deleted. </p>
   *
   */
  Name: string | undefined;
}

export namespace DeleteTerminologyRequest {
  export function isa(o: any): o is DeleteTerminologyRequest {
    return _smithy.isa(o, "DeleteTerminologyRequest");
  }
}

/**
 *
 *          <p>The confidence that Amazon Comprehend accurately detected the source language is low. If a low confidence level is acceptable for your application, you can use the language in the
 *       exception to call Amazon Translate again. For more information, see the <a href="https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html">DetectDominantLanguage</a> operation in the <i>Amazon Comprehend Developer
 *         Guide</i>.
 * </p>
 *
 */
export interface DetectedLanguageLowConfidenceException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DetectedLanguageLowConfidenceException";
  $fault: "client";
  /**
   *
   *          <p>The language code of the auto-detected language from Amazon Comprehend.</p>
   *
   */
  DetectedLanguageCode?: string;

  Message?: string;
}

export namespace DetectedLanguageLowConfidenceException {
  export function isa(o: any): o is DetectedLanguageLowConfidenceException {
    return _smithy.isa(o, "DetectedLanguageLowConfidenceException");
  }
}

/**
 *
 *          <p>The encryption key used to encrypt the custom terminologies used by Amazon Translate.</p>
 *
 */
export interface EncryptionKey {
  __type?: "EncryptionKey";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the encryption key being used to encrypt the custom terminology.</p>
   *
   */
  Id: string | undefined;

  /**
   *
   *          <p>The type of encryption key used by Amazon Translate to encrypt custom terminologies.</p>
   *
   */
  Type: EncryptionKeyType | string | undefined;
}

export namespace EncryptionKey {
  export function isa(o: any): o is EncryptionKey {
    return _smithy.isa(o, "EncryptionKey");
  }
}

export enum EncryptionKeyType {
  KMS = "KMS"
}

export interface GetTerminologyRequest {
  __type?: "GetTerminologyRequest";
  /**
   *
   *          <p>The name of the custom terminology being retrieved.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   *          <p>The data format of the custom terminology being retrieved, either CSV or TMX.</p>
   *
   */
  TerminologyDataFormat: TerminologyDataFormat | string | undefined;
}

export namespace GetTerminologyRequest {
  export function isa(o: any): o is GetTerminologyRequest {
    return _smithy.isa(o, "GetTerminologyRequest");
  }
}

export interface GetTerminologyResponse extends $MetadataBearer {
  __type?: "GetTerminologyResponse";
  /**
   *
   *          <p>The data location of the custom terminology being retrieved. The custom terminology file is returned in a presigned url that has a 30 minute expiration.</p>
   *
   */
  TerminologyDataLocation?: TerminologyDataLocation;

  /**
   *
   *          <p>The properties of the custom terminology being retrieved.</p>
   *
   */
  TerminologyProperties?: TerminologyProperties;
}

export namespace GetTerminologyResponse {
  export function isa(o: any): o is GetTerminologyResponse {
    return _smithy.isa(o, "GetTerminologyResponse");
  }
}

export interface ImportTerminologyRequest {
  __type?: "ImportTerminologyRequest";
  /**
   *
   *          <p>The description of the custom terminology being imported.</p>
   *
   */
  Description?: string;

  /**
   *
   *          <p>The encryption key for the custom terminology being imported.</p>
   *
   */
  EncryptionKey?: EncryptionKey;

  /**
   *
   *          <p>The merge strategy of the custom terminology being imported. Currently, only the OVERWRITE merge strategy is supported. In this case, the imported terminology will overwrite an existing terminology of the same name.</p>
   *
   */
  MergeStrategy: MergeStrategy | string | undefined;

  /**
   *
   *          <p>The name of the custom terminology being imported.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   *          <p>The terminology data for the custom terminology being imported.</p>
   *
   */
  TerminologyData: TerminologyData | undefined;
}

export namespace ImportTerminologyRequest {
  export function isa(o: any): o is ImportTerminologyRequest {
    return _smithy.isa(o, "ImportTerminologyRequest");
  }
}

export interface ImportTerminologyResponse extends $MetadataBearer {
  __type?: "ImportTerminologyResponse";
  /**
   *
   *          <p>The properties of the custom terminology being imported.</p>
   *
   */
  TerminologyProperties?: TerminologyProperties;
}

export namespace ImportTerminologyResponse {
  export function isa(o: any): o is ImportTerminologyResponse {
    return _smithy.isa(o, "ImportTerminologyResponse");
  }
}

/**
 *
 *          <p> An internal server error occurred. Retry your request.</p>
 *
 */
export interface InternalServerException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return _smithy.isa(o, "InternalServerException");
  }
}

/**
 *
 *          <p>The value of the parameter is invalid. Review the value of the parameter you are using to correct it, and then retry your operation.</p>
 *
 */
export interface InvalidParameterValueException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidParameterValueException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParameterValueException {
  export function isa(o: any): o is InvalidParameterValueException {
    return _smithy.isa(o, "InvalidParameterValueException");
  }
}

/**
 *
 *          <p> The request that you made is invalid. Check your request to determine why it's invalid and then retry the request.
 * </p>
 *
 */
export interface InvalidRequestException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return _smithy.isa(o, "InvalidRequestException");
  }
}

/**
 *
 *          <p>The specified limit has been exceeded. Review your request and retry it with a quantity below the stated limit.</p>
 *
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

export interface ListTerminologiesRequest {
  __type?: "ListTerminologiesRequest";
  /**
   *
   *          <p>The maximum number of custom terminologies returned per list request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *          <p>If the result of the request to ListTerminologies was truncated, include the NextToken to fetch the next group of custom terminologies. </p>
   *
   */
  NextToken?: string;
}

export namespace ListTerminologiesRequest {
  export function isa(o: any): o is ListTerminologiesRequest {
    return _smithy.isa(o, "ListTerminologiesRequest");
  }
}

export interface ListTerminologiesResponse extends $MetadataBearer {
  __type?: "ListTerminologiesResponse";
  /**
   *
   *          <p> If the response to the ListTerminologies was truncated, the NextToken fetches the next group of custom terminologies. </p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>The properties list of the custom terminologies returned on the list request.</p>
   *
   */
  TerminologyPropertiesList?: Array<TerminologyProperties>;
}

export namespace ListTerminologiesResponse {
  export function isa(o: any): o is ListTerminologiesResponse {
    return _smithy.isa(o, "ListTerminologiesResponse");
  }
}

export enum MergeStrategy {
  OVERWRITE = "OVERWRITE"
}

/**
 *
 *          <p>The resource you are looking for has not been found. Review the resource you're looking for and see if a different resource will accomplish your needs before retrying the revised request. .</p>
 *
 */
export interface ResourceNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

/**
 *
 *          <p>The Amazon Translate service is temporarily unavailable. Please wait a bit and then retry your request.</p>
 *
 */
export interface ServiceUnavailableException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return _smithy.isa(o, "ServiceUnavailableException");
  }
}

/**
 *
 *          <p>The term being translated by the custom terminology.</p>
 *
 */
export interface Term {
  __type?: "Term";
  /**
   *
   *          <p>The source text of the term being translated by the custom terminology.</p>
   *
   */
  SourceText?: string;

  /**
   *
   *          <p>The target text of the term being translated by the custom terminology.</p>
   *
   */
  TargetText?: string;
}

export namespace Term {
  export function isa(o: any): o is Term {
    return _smithy.isa(o, "Term");
  }
}

/**
 *
 *          <p>The data associated with the custom terminology.</p>
 *
 */
export interface TerminologyData {
  __type?: "TerminologyData";
  /**
   *
   *          <p>The file containing the custom terminology data.</p>
   *
   */
  File: Uint8Array | undefined;

  /**
   *
   *          <p>The data format of the custom terminology. Either CSV or TMX.</p>
   *
   */
  Format: TerminologyDataFormat | string | undefined;
}

export namespace TerminologyData {
  export function isa(o: any): o is TerminologyData {
    return _smithy.isa(o, "TerminologyData");
  }
}

export enum TerminologyDataFormat {
  CSV = "CSV",
  TMX = "TMX"
}

/**
 *
 *          <p>The location of the custom terminology data.</p>
 *
 */
export interface TerminologyDataLocation {
  __type?: "TerminologyDataLocation";
  /**
   *
   *          <p>The location of the custom terminology data.</p>
   *
   */
  Location: string | undefined;

  /**
   *
   *          <p>The repository type for the custom terminology data.</p>
   *
   */
  RepositoryType: string | undefined;
}

export namespace TerminologyDataLocation {
  export function isa(o: any): o is TerminologyDataLocation {
    return _smithy.isa(o, "TerminologyDataLocation");
  }
}

/**
 *
 *          <p>The properties of the custom terminology.</p>
 *
 */
export interface TerminologyProperties {
  __type?: "TerminologyProperties";
  /**
   *
   *          <p> The Amazon Resource Name (ARN) of the custom terminology. </p>
   *
   */
  Arn?: string;

  /**
   *
   *          <p>The time at which the custom terminology was created, based on the timestamp.</p>
   *
   */
  CreatedAt?: Date;

  /**
   *
   *          <p>The description of the custom terminology properties.</p>
   *
   */
  Description?: string;

  /**
   *
   *          <p>The encryption key for the custom terminology.</p>
   *
   */
  EncryptionKey?: EncryptionKey;

  /**
   *
   *          <p>The time at which the custom terminology was last update, based on the timestamp.</p>
   *
   */
  LastUpdatedAt?: Date;

  /**
   *
   *          <p>The name of the custom terminology.</p>
   *
   */
  Name?: string;

  /**
   *
   *          <p>The size of the file used when importing a custom terminology.</p>
   *
   */
  SizeBytes?: number;

  /**
   *
   *          <p>The language code for the source text of the translation request for which the custom terminology is being used.</p>
   *
   */
  SourceLanguageCode?: string;

  /**
   *
   *          <p>The language codes for the target languages available with the custom terminology file. All possible target languages are returned in array.</p>
   *
   */
  TargetLanguageCodes?: Array<string>;

  /**
   *
   *          <p>The number of terms included in the custom terminology.</p>
   *
   */
  TermCount?: number;
}

export namespace TerminologyProperties {
  export function isa(o: any): o is TerminologyProperties {
    return _smithy.isa(o, "TerminologyProperties");
  }
}

/**
 *
 *          <p> The size of the text you submitted exceeds the size limit. Reduce the size of the text or use a smaller document and then retry your request.
 *  </p>
 *
 */
export interface TextSizeLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TextSizeLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace TextSizeLimitExceededException {
  export function isa(o: any): o is TextSizeLimitExceededException {
    return _smithy.isa(o, "TextSizeLimitExceededException");
  }
}

/**
 *
 *          <p> You have made too many requests within a short period of time. Wait for a short time and then try your request again.</p>
 *
 */
export interface TooManyRequestsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export function isa(o: any): o is TooManyRequestsException {
    return _smithy.isa(o, "TooManyRequestsException");
  }
}

export interface TranslateTextRequest {
  __type?: "TranslateTextRequest";
  /**
   *
   *          <p>The language code for the language of the source text. The language must be a language supported by Amazon Translate. </p>
   *          <p>To have Amazon Translate determine the source language of your text, you can specify
   *         <code>auto</code> in the <code>SourceLanguageCode</code> field. If you specify
   *         <code>auto</code>, Amazon Translate will call Amazon Comprehend to determine the source
   *       language.</p>
   *
   */
  SourceLanguageCode: string | undefined;

  /**
   *
   *          <p>The language code requested for the language of the target text. The language must be a language supported by Amazon Translate.</p>
   *
   */
  TargetLanguageCode: string | undefined;

  /**
   *
   *          <p>The TerminologyNames list that is taken as input to the TranslateText request. This has a minimum length of 0 and a maximum length of 1.</p>
   *
   */
  TerminologyNames?: Array<string>;

  /**
   *
   *          <p>The text to translate. The text string can be a maximum of 5,000 bytes long. Depending
   *     on your character set, this may be fewer than 5,000 characters.</p>
   *
   */
  Text: string | undefined;
}

export namespace TranslateTextRequest {
  export function isa(o: any): o is TranslateTextRequest {
    return _smithy.isa(o, "TranslateTextRequest");
  }
}

export interface TranslateTextResponse extends $MetadataBearer {
  __type?: "TranslateTextResponse";
  /**
   *
   *          <p>The names of the custom terminologies applied to the input text by Amazon Translate for the translated text response.</p>
   *
   */
  AppliedTerminologies?: Array<AppliedTerminology>;

  /**
   *
   *          <p>The language code for the language of the source text. </p>
   *
   */
  SourceLanguageCode: string | undefined;

  /**
   *
   *          <p>The language code for the language of the target text. </p>
   *
   */
  TargetLanguageCode: string | undefined;

  /**
   *
   *          <p>The the translated text. The maximum length of this text is 5kb.</p>
   *
   */
  TranslatedText: string | undefined;
}

export namespace TranslateTextResponse {
  export function isa(o: any): o is TranslateTextResponse {
    return _smithy.isa(o, "TranslateTextResponse");
  }
}

/**
 *
 *          <p>Amazon Translate does not support translation from the language of the source text into the requested target language. For
 *       more information, see <a>how-to-error-msg</a>. </p>
 *
 */
export interface UnsupportedLanguagePairException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "UnsupportedLanguagePairException";
  $fault: "client";
  Message?: string;
  /**
   *
   *          <p>The language code for the language of the input text. </p>
   *
   */
  SourceLanguageCode?: string;

  /**
   *
   *          <p>The language code for the language of the translated text. </p>
   *
   */
  TargetLanguageCode?: string;
}

export namespace UnsupportedLanguagePairException {
  export function isa(o: any): o is UnsupportedLanguagePairException {
    return _smithy.isa(o, "UnsupportedLanguagePairException");
  }
}
