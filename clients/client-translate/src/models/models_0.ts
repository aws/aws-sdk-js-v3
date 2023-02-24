// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { TranslateServiceException as __BaseException } from "./TranslateServiceException";

/**
 * <p>The term being translated by the custom terminology.</p>
 */
export interface Term {
  /**
   * <p>The source text of the term being translated by the custom terminology.</p>
   */
  SourceText?: string;

  /**
   * <p>The target text of the term being translated by the custom terminology.</p>
   */
  TargetText?: string;
}

/**
 * <p>The custom terminology applied to the input text by Amazon Translate for the translated text
 *       response. This is optional in the response and will only be present if you specified
 *       terminology input in the request. Currently, only one terminology can be applied per
 *       TranslateText request.</p>
 */
export interface AppliedTerminology {
  /**
   * <p>The name of the custom terminology applied to the input text by Amazon Translate for the translated
   *       text response.</p>
   */
  Name?: string;

  /**
   * <p>The specific terms of the custom terminology applied to the input text by Amazon Translate for the
   *       translated text response. A maximum of 250 terms will be returned, and the specific terms
   *       applied will be the first 250 terms in the source text. </p>
   */
  Terms?: Term[];
}

/**
 * <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There was a conflict processing the request. Try your request again.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

export enum EncryptionKeyType {
  KMS = "KMS",
}

/**
 * <p>The encryption key used to encrypt this object.</p>
 */
export interface EncryptionKey {
  /**
   * <p>The type of encryption key used by Amazon Translate to encrypt this object.</p>
   */
  Type: EncryptionKeyType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the encryption key being used to encrypt this object.</p>
   */
  Id: string | undefined;
}

export enum ParallelDataFormat {
  CSV = "CSV",
  TMX = "TMX",
  TSV = "TSV",
}

/**
 * <p>Specifies the format and S3 location of the parallel data input file.</p>
 */
export interface ParallelDataConfig {
  /**
   * <p>The URI of the Amazon S3 folder that contains the parallel data input file. The folder
   *       must be in the same Region as the API endpoint you are calling.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The format of the parallel data input file.</p>
   */
  Format: ParallelDataFormat | string | undefined;
}

/**
 * <p>A key-value pair that adds as a metadata to a resource used by Amazon Translate. </p>
 */
export interface Tag {
  /**
   * <p>The initial part of a key-value pair that forms a tag associated with a given resource.
   *     </p>
   */
  Key: string | undefined;

  /**
   * <p> The second part of a key-value pair that forms a tag associated with a given resource.</p>
   */
  Value: string | undefined;
}

export interface CreateParallelDataRequest {
  /**
   * <p>A custom name for the parallel data resource in Amazon Translate. You must assign a name
   *       that is unique in the account and region.</p>
   */
  Name: string | undefined;

  /**
   * <p>A custom description for the parallel data resource in Amazon Translate.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the format and S3 location of the parallel data input file.</p>
   */
  ParallelDataConfig: ParallelDataConfig | undefined;

  /**
   * <p>The encryption key used to encrypt this object.</p>
   */
  EncryptionKey?: EncryptionKey;

  /**
   * <p>A unique identifier for the request. This token is automatically generated when you use
   *       Amazon Translate through an AWS SDK.</p>
   */
  ClientToken?: string;

  /**
   * <p>Tags to be associated with this resource. A tag is a key-value pair that
   *       adds metadata to a resource. Each tag key for the resource must be unique.
   *       For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html">
   *         Tagging your resources</a>.</p>
   */
  Tags?: Tag[];
}

export enum ParallelDataStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

export interface CreateParallelDataResponse {
  /**
   * <p>The custom name that you assigned to the parallel data resource.</p>
   */
  Name?: string;

  /**
   * <p>The status of the parallel data resource. When the resource is ready for you to use, the
   *       status is <code>ACTIVE</code>.</p>
   */
  Status?: ParallelDataStatus | string;
}

/**
 * <p>An internal server error occurred. Retry your request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The value of the parameter is not valid. Review the value of the parameter you are using
 *       to correct it, and then retry your operation.</p>
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> The request that you made is not valid. Check your request to determine why it's not
 *       valid and then retry the request. </p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified limit has been exceeded. Review your request and retry it with a quantity
 *       below the stated limit.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have added too many tags to this resource. The maximum is 50 tags.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  ResourceArn?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.ResourceArn = opts.ResourceArn;
  }
}

export interface DeleteParallelDataRequest {
  /**
   * <p>The name of the parallel data resource that is being deleted.</p>
   */
  Name: string | undefined;
}

export interface DeleteParallelDataResponse {
  /**
   * <p>The name of the parallel data resource that is being deleted.</p>
   */
  Name?: string;

  /**
   * <p>The status of the parallel data deletion.</p>
   */
  Status?: ParallelDataStatus | string;
}

/**
 * <p>The resource you are looking for has not been found. Review the resource you're looking
 *       for and see if a different resource will accomplish your needs before retrying the revised
 *       request.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

export interface DeleteTerminologyRequest {
  /**
   * <p>The name of the custom terminology being deleted. </p>
   */
  Name: string | undefined;
}

export interface DescribeTextTranslationJobRequest {
  /**
   * <p>The identifier that Amazon Translate generated for the job. The <a>StartTextTranslationJob</a> operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

/**
 * <p>The input configuration properties for requesting a batch translation job.</p>
 */
export interface InputDataConfig {
  /**
   * <p>The URI of the AWS S3 folder that contains the input files. Amazon Translate translates all the
   *       files in the folder and all its sub-folders. The folder must be in the same Region as the API endpoint you are
   *       calling.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>Describes the format of the data that you submit to Amazon Translate as input. You can
   *       specify one of the following multipurpose internet mail extension (MIME) types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>text/html</code>: The input data consists of one or more HTML files. Amazon
   *           Translate translates only the text that resides in the <code>html</code> element in each
   *           file.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>text/plain</code>: The input data consists of one or more unformatted text
   *           files. Amazon Translate translates every character in this type of input.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>application/vnd.openxmlformats-officedocument.wordprocessingml.document</code>:
   *           The input data consists of one or more Word documents (.docx).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>application/vnd.openxmlformats-officedocument.presentationml.presentation</code>:
   *           The input data consists of one or more PowerPoint Presentation files (.pptx).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</code>: The
   *           input data consists of one or more Excel Workbook files (.xlsx).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>application/x-xliff+xml</code>: The input data consists of one or more XML
   *           Localization Interchange File Format (XLIFF) files (.xlf). Amazon Translate supports only
   *           XLIFF version 1.2.</p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>If you structure your input data as HTML, ensure that you set this parameter to
   *           <code>text/html</code>. By doing so, you cut costs by limiting the translation to the
   *         contents of the <code>html</code> element in each file. Otherwise, if you set this parameter
   *         to <code>text/plain</code>, your costs will cover the translation of every character.</p>
   *          </important>
   */
  ContentType: string | undefined;
}

/**
 * <p>The number of documents successfully and unsuccessfully processed during a translation
 *       job.</p>
 */
export interface JobDetails {
  /**
   * <p>The number of documents successfully processed during a translation job.</p>
   */
  TranslatedDocumentsCount?: number;

  /**
   * <p>The number of documents that could not be processed during a translation job.</p>
   */
  DocumentsWithErrorsCount?: number;

  /**
   * <p>The number of documents used as input in a translation job.</p>
   */
  InputDocumentsCount?: number;
}

export enum JobStatus {
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_ERROR = "COMPLETED_WITH_ERROR",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  STOPPED = "STOPPED",
  STOP_REQUESTED = "STOP_REQUESTED",
  SUBMITTED = "SUBMITTED",
}

/**
 * <p>The output configuration properties for a batch translation job.</p>
 */
export interface OutputDataConfig {
  /**
   * <p>The URI of the S3 folder that contains a translation job's output file. The folder must
   *       be in the same Region as the API endpoint that you are calling.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The encryption key used to encrypt this object.</p>
   */
  EncryptionKey?: EncryptionKey;
}

export enum Formality {
  FORMAL = "FORMAL",
  INFORMAL = "INFORMAL",
}

export enum Profanity {
  MASK = "MASK",
}

/**
 * <p>Optional settings that configure the translation output. Use these settings for
 *       real time translations and asynchronous translation jobs.</p>
 */
export interface TranslationSettings {
  /**
   * <p>You can optionally specify the desired level of formality for translations
   *         to supported target languages. The formality
   *       setting controls the level of formal language usage (also known as <a href="https://en.wikipedia.org/wiki/Register_(sociolinguistics)">register</a>) in the
   *       translation output.  You can set the value to informal or formal. If you don't specify a value for
   *       formality, or if the target language doesn't support formality, the translation will
   *       ignore the formality setting.</p>
   *          <p> If you specify multiple target languages for the job, translate ignores
   *       the formality setting for any unsupported target language.</p>
   *          <p>For a list of target languages that support formality, see <a href="https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-formality.html#customizing-translations-formality-languages">Supported languages</a>
   *       in the Amazon Translate Developer Guide.</p>
   */
  Formality?: Formality | string;

  /**
   * <p>Enable the profanity setting if you want Amazon Translate to mask profane words and
   *       phrases in your translation output.</p>
   *          <p>To mask profane words and phrases, Amazon Translate replaces them with the grawlix string
   *       “?$#@$“. This 5-character sequence is used for each profane word or phrase, regardless of the
   *       length or number of words.</p>
   *          <p>Amazon Translate doesn't detect profanity in all of its supported languages. For languages
   *       that don't support profanity detection, see <a href="https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-profanity.html#customizing-translations-profanity-languages">Unsupported languages</a> in the Amazon Translate Developer Guide.</p>
   *          <p>If you specify multiple target languages for the job, all the
   *       target languages must support profanity masking. If any of the
   *       target languages don't support profanity masking, the
   *       translation job won't mask profanity for any target
   *       language.</p>
   */
  Profanity?: Profanity | string;
}

/**
 * <p>Provides information about a translation job.</p>
 */
export interface TextTranslationJobProperties {
  /**
   * <p>The ID of the translation job.</p>
   */
  JobId?: string;

  /**
   * <p>The user-defined name of the translation job.</p>
   */
  JobName?: string;

  /**
   * <p>The status of the translation job.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>The number of documents successfully and unsuccessfully processed during the translation
   *       job.</p>
   */
  JobDetails?: JobDetails;

  /**
   * <p>The language code of the language of the source text. The language must be a language
   *       supported by Amazon Translate.</p>
   */
  SourceLanguageCode?: string;

  /**
   * <p>The language code of the language of the target text. The language must be a language
   *       supported by Amazon Translate.</p>
   */
  TargetLanguageCodes?: string[];

  /**
   * <p>A list containing the names of the terminologies applied to a translation job. Only one
   *       terminology can be applied per <a>StartTextTranslationJob</a> request at this
   *       time.</p>
   */
  TerminologyNames?: string[];

  /**
   * <p>A list containing the names of the parallel data resources applied to the translation
   *       job.</p>
   */
  ParallelDataNames?: string[];

  /**
   * <p>An explanation of any errors that may have occurred during the translation job.</p>
   */
  Message?: string;

  /**
   * <p>The time at which the translation job was submitted.</p>
   */
  SubmittedTime?: Date;

  /**
   * <p>The time at which the translation job ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input configuration properties that were specified when the job was requested.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output configuration properties that were specified when the job was requested.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity Access and Management (IAM) role
   *       that granted Amazon Translate read access to the job's input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>Settings that configure the translation output.</p>
   */
  Settings?: TranslationSettings;
}

export interface DescribeTextTranslationJobResponse {
  /**
   * <p>An object that contains the properties associated with an asynchronous batch translation
   *       job.</p>
   */
  TextTranslationJobProperties?: TextTranslationJobProperties;
}

export interface GetParallelDataRequest {
  /**
   * <p>The name of the parallel data resource that is being retrieved.</p>
   */
  Name: string | undefined;
}

/**
 * <p>The location of the most recent parallel data input file that was successfully imported
 *       into Amazon Translate.</p>
 */
export interface ParallelDataDataLocation {
  /**
   * <p>Describes the repository that contains the parallel data input file.</p>
   */
  RepositoryType: string | undefined;

  /**
   * <p>The Amazon S3 location of the parallel data input file. The location is returned as a
   *       presigned URL to that has a 30-minute expiration.</p>
   *
   *          <important>
   *             <p>Amazon Translate doesn't scan all input files for the risk of CSV injection
   *         attacks. </p>
   *             <p>CSV injection occurs when a .csv or .tsv file is altered so that a record contains
   *         malicious code. The record begins with a special character, such as =, +, -, or @. When the
   *         file is opened in a spreadsheet program, the program might interpret the record as a formula
   *         and run the code within it.</p>
   *             <p>Before you download an input file from Amazon S3, ensure that you recognize the file and trust its creator.</p>
   *          </important>
   */
  Location: string | undefined;
}

/**
 * <p>The properties of a parallel data resource.</p>
 */
export interface ParallelDataProperties {
  /**
   * <p>The custom name assigned to the parallel data resource.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the parallel data resource.</p>
   */
  Arn?: string;

  /**
   * <p>The description assigned to the parallel data resource.</p>
   */
  Description?: string;

  /**
   * <p>The status of the parallel data resource. When the parallel data is ready for you to use,
   *       the status is <code>ACTIVE</code>.</p>
   */
  Status?: ParallelDataStatus | string;

  /**
   * <p>The source language of the translations in the parallel data file.</p>
   */
  SourceLanguageCode?: string;

  /**
   * <p>The language codes for the target languages available in the parallel data file. All
   *       possible target languages are returned as an array.</p>
   */
  TargetLanguageCodes?: string[];

  /**
   * <p>Specifies the format and S3 location of the parallel data input file.</p>
   */
  ParallelDataConfig?: ParallelDataConfig;

  /**
   * <p>Additional information from Amazon Translate about the parallel data resource. </p>
   */
  Message?: string;

  /**
   * <p>The number of UTF-8 characters that Amazon Translate imported from the parallel data input
   *       file. This number includes only the characters in your translation examples. It does not
   *       include characters that are used to format your file. For example, if you provided a
   *       Translation Memory Exchange (.tmx) file, this number does not include the tags.</p>
   */
  ImportedDataSize?: number;

  /**
   * <p>The number of records successfully imported from the parallel data input file.</p>
   */
  ImportedRecordCount?: number;

  /**
   * <p>The number of records unsuccessfully imported from the parallel data input file.</p>
   */
  FailedRecordCount?: number;

  /**
   * <p>The number of items in the input file that Amazon Translate skipped when you created or
   *       updated the parallel data resource. For example, Amazon Translate skips empty records, empty
   *       target texts, and empty lines.</p>
   */
  SkippedRecordCount?: number;

  /**
   * <p>The encryption key used to encrypt this object.</p>
   */
  EncryptionKey?: EncryptionKey;

  /**
   * <p>The time at which the parallel data resource was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The time at which the parallel data resource was last updated.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The status of the most recent update attempt for the parallel data resource.</p>
   */
  LatestUpdateAttemptStatus?: ParallelDataStatus | string;

  /**
   * <p>The time that the most recent update was attempted.</p>
   */
  LatestUpdateAttemptAt?: Date;
}

export interface GetParallelDataResponse {
  /**
   * <p>The properties of the parallel data resource that is being retrieved.</p>
   */
  ParallelDataProperties?: ParallelDataProperties;

  /**
   * <p>The Amazon S3 location of the most recent parallel data input file that was successfully
   *       imported into Amazon Translate. The location is returned as a presigned URL that has a
   *       30-minute expiration.</p>
   *
   *          <important>
   *             <p>Amazon Translate doesn't scan all input files for the risk of CSV injection
   *         attacks. </p>
   *             <p>CSV injection occurs when a .csv or .tsv file is altered so that a record contains
   *         malicious code. The record begins with a special character, such as =, +, -, or @. When the
   *         file is opened in a spreadsheet program, the program might interpret the record as a formula
   *         and run the code within it.</p>
   *             <p>Before you download an input file from Amazon S3, ensure that you recognize the file and trust its creator.</p>
   *          </important>
   */
  DataLocation?: ParallelDataDataLocation;

  /**
   * <p>The Amazon S3 location of a file that provides any errors or warnings that were produced
   *       by your input file. This file was created when Amazon Translate attempted to create a parallel
   *       data resource. The location is returned as a presigned URL to that has a 30-minute
   *       expiration.</p>
   */
  AuxiliaryDataLocation?: ParallelDataDataLocation;

  /**
   * <p>The Amazon S3 location of a file that provides any errors or warnings that were produced
   *       by your input file. This file was created when Amazon Translate attempted to update a parallel
   *       data resource. The location is returned as a presigned URL to that has a 30-minute
   *       expiration.</p>
   */
  LatestUpdateAttemptAuxiliaryDataLocation?: ParallelDataDataLocation;
}

export enum TerminologyDataFormat {
  CSV = "CSV",
  TMX = "TMX",
  TSV = "TSV",
}

export interface GetTerminologyRequest {
  /**
   * <p>The name of the custom terminology being retrieved.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data format of the custom terminology being retrieved.</p>
   *          <p>If you don't specify this parameter, Amazon Translate returns a file with the same format
   *       as the file that was imported to create the terminology. </p>
   *          <p>If you specify this parameter when you retrieve a multi-directional terminology resource,
   *       you must specify the same format as the input file that was imported to create it. Otherwise,
   *       Amazon Translate throws an error.</p>
   */
  TerminologyDataFormat?: TerminologyDataFormat | string;
}

/**
 * <p>The location of the custom terminology data.</p>
 */
export interface TerminologyDataLocation {
  /**
   * <p>The repository type for the custom terminology data.</p>
   */
  RepositoryType: string | undefined;

  /**
   * <p>The Amazon S3 location of the most recent custom terminology input file that was
   *       successfully imported into Amazon Translate. The location is returned as a presigned URL that
   *       has a 30-minute expiration .</p>
   *
   *          <important>
   *             <p>Amazon Translate doesn't scan all input files for the risk of CSV injection
   *         attacks. </p>
   *             <p>CSV injection occurs when a .csv or .tsv file is altered so that a record contains
   *         malicious code. The record begins with a special character, such as =, +, -, or @. When the
   *         file is opened in a spreadsheet program, the program might interpret the record as a formula
   *         and run the code within it.</p>
   *             <p>Before you download an input file from Amazon S3, ensure that you recognize the file and trust its creator.</p>
   *          </important>
   */
  Location: string | undefined;
}

export enum Directionality {
  MULTI = "MULTI",
  UNI = "UNI",
}

/**
 * <p>The properties of the custom terminology.</p>
 */
export interface TerminologyProperties {
  /**
   * <p>The name of the custom terminology.</p>
   */
  Name?: string;

  /**
   * <p>The description of the custom terminology properties.</p>
   */
  Description?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the custom terminology. </p>
   */
  Arn?: string;

  /**
   * <p>The language code for the source text of the translation request for which the custom
   *       terminology is being used.</p>
   */
  SourceLanguageCode?: string;

  /**
   * <p>The language codes for the target languages available with the custom terminology
   *       resource. All possible target languages are returned in array.</p>
   */
  TargetLanguageCodes?: string[];

  /**
   * <p>The encryption key for the custom terminology.</p>
   */
  EncryptionKey?: EncryptionKey;

  /**
   * <p>The size of the file used when importing a custom terminology.</p>
   */
  SizeBytes?: number;

  /**
   * <p>The number of terms included in the custom terminology.</p>
   */
  TermCount?: number;

  /**
   * <p>The time at which the custom terminology was created, based on the timestamp.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The time at which the custom terminology was last update, based on the timestamp.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The directionality of your terminology resource indicates whether it has one source
   *       language (uni-directional) or multiple (multi-directional). </p>
   *          <dl>
   *             <dt>UNI</dt>
   *             <dd>
   *                <p>The terminology resource has one source language (the first column in a CSV file),
   *             and all of its other languages are target languages.</p>
   *             </dd>
   *             <dt>MULTI</dt>
   *             <dd>
   *                <p>Any language in the terminology resource can be the source language.</p>
   *             </dd>
   *          </dl>
   */
  Directionality?: Directionality | string;

  /**
   * <p>Additional information from Amazon Translate about the terminology resource.</p>
   */
  Message?: string;

  /**
   * <p>The number of terms in the input file that Amazon Translate skipped when you created or
   *       updated the terminology resource.</p>
   */
  SkippedTermCount?: number;

  /**
   * <p>The format of the custom terminology input file.</p>
   */
  Format?: TerminologyDataFormat | string;
}

export interface GetTerminologyResponse {
  /**
   * <p>The properties of the custom terminology being retrieved.</p>
   */
  TerminologyProperties?: TerminologyProperties;

  /**
   * <p>The Amazon S3 location of the most recent custom terminology input file that was
   *       successfully imported into Amazon Translate. The location is returned as a presigned URL that
   *       has a 30-minute expiration.</p>
   *
   *          <important>
   *             <p>Amazon Translate doesn't scan all input files for the risk of CSV injection
   *         attacks. </p>
   *             <p>CSV injection occurs when a .csv or .tsv file is altered so that a record contains
   *         malicious code. The record begins with a special character, such as =, +, -, or @. When the
   *         file is opened in a spreadsheet program, the program might interpret the record as a formula
   *         and run the code within it.</p>
   *             <p>Before you download an input file from Amazon S3, ensure that you recognize the file and trust its creator.</p>
   *          </important>
   */
  TerminologyDataLocation?: TerminologyDataLocation;

  /**
   * <p>The Amazon S3 location of a file that provides any errors or warnings that were produced
   *       by your input file. This file was created when Amazon Translate attempted to create a
   *       terminology resource. The location is returned as a presigned URL to that has a 30-minute
   *       expiration.</p>
   */
  AuxiliaryDataLocation?: TerminologyDataLocation;
}

export enum MergeStrategy {
  OVERWRITE = "OVERWRITE",
}

/**
 * <p>The data associated with the custom terminology. For information about the custom terminology file, see
 *       <a href="https://docs.aws.amazon.com/translate/latest/dg/creating-custom-terminology.html">
 *       Creating a Custom Terminology</a>.</p>
 */
export interface TerminologyData {
  /**
   * <p>The file containing the custom terminology data. Your version of the AWS SDK performs a
   *       Base64-encoding on this field before sending a request to the AWS service. Users of the SDK
   *       should not perform Base64-encoding themselves.</p>
   */
  File: Uint8Array | undefined;

  /**
   * <p>The data format of the custom terminology.</p>
   */
  Format: TerminologyDataFormat | string | undefined;

  /**
   * <p>The directionality of your terminology resource indicates whether it has one source
   *       language (uni-directional) or multiple (multi-directional).</p>
   *          <dl>
   *             <dt>UNI</dt>
   *             <dd>
   *                <p>The terminology resource has one source language (for example, the first column in a
   *             CSV file), and all of its other languages are target languages. </p>
   *             </dd>
   *             <dt>MULTI</dt>
   *             <dd>
   *                <p>Any language in the terminology resource can be the source language or a target
   *             language. A single multi-directional terminology resource can be used for jobs that
   *             translate different language pairs. For example, if the terminology contains English and
   *             Spanish terms, it can be used for jobs that translate English to Spanish and Spanish to
   *             English.</p>
   *             </dd>
   *          </dl>
   *          <p>When you create a custom terminology resource without specifying the directionality, it
   *       behaves as uni-directional terminology, although this parameter will have a null value.</p>
   */
  Directionality?: Directionality | string;
}

export interface ImportTerminologyRequest {
  /**
   * <p>The name of the custom terminology being imported.</p>
   */
  Name: string | undefined;

  /**
   * <p>The merge strategy of the custom terminology being imported. Currently, only the OVERWRITE
   *       merge strategy is supported. In this case, the imported terminology will overwrite an existing
   *       terminology of the same name.</p>
   */
  MergeStrategy: MergeStrategy | string | undefined;

  /**
   * <p>The description of the custom terminology being imported.</p>
   */
  Description?: string;

  /**
   * <p>The terminology data for the custom terminology being imported.</p>
   */
  TerminologyData: TerminologyData | undefined;

  /**
   * <p>The encryption key for the custom terminology being imported.</p>
   */
  EncryptionKey?: EncryptionKey;

  /**
   * <p>Tags to be associated with this resource. A tag is a key-value pair that
   *       adds metadata to a resource. Each tag key for the resource must be unique.
   *       For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html">
   *         Tagging your resources</a>.</p>
   */
  Tags?: Tag[];
}

export interface ImportTerminologyResponse {
  /**
   * <p>The properties of the custom terminology being imported.</p>
   */
  TerminologyProperties?: TerminologyProperties;

  /**
   * <p>The Amazon S3 location of a file that provides any errors or warnings that were produced
   *       by your input file. This file was created when Amazon Translate attempted to create a
   *       terminology resource. The location is returned as a presigned URL to that has a 30 minute
   *       expiration.</p>
   */
  AuxiliaryDataLocation?: TerminologyDataLocation;
}

export enum DisplayLanguageCode {
  DE = "de",
  EN = "en",
  ES = "es",
  FR = "fr",
  IT = "it",
  JA = "ja",
  KO = "ko",
  PT = "pt",
  ZH = "zh",
  ZH_TW = "zh-TW",
}

export interface ListLanguagesRequest {
  /**
   * <p>The language code for the language to use to display the language names in the response.
   *       The language code is <code>en</code> by default. </p>
   */
  DisplayLanguageCode?: DisplayLanguageCode | string;

  /**
   * <p>Include the NextToken value to fetch the next group of supported languages. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each response.</p>
   */
  MaxResults?: number;
}

/**
 * <p>A supported language.</p>
 */
export interface Language {
  /**
   * <p>Language name of the supported language.</p>
   */
  LanguageName: string | undefined;

  /**
   * <p>Language code for the supported language.</p>
   */
  LanguageCode: string | undefined;
}

export interface ListLanguagesResponse {
  /**
   * <p>The list of supported languages.</p>
   */
  Languages?: Language[];

  /**
   * <p>The language code passed in with the request.</p>
   */
  DisplayLanguageCode?: DisplayLanguageCode | string;

  /**
   * <p> If the response does not include all remaining results, use the NextToken
   *       in the next request to fetch the next group of supported languages.</p>
   */
  NextToken?: string;
}

/**
 * <p>Requested display language code is not supported.</p>
 */
export class UnsupportedDisplayLanguageCodeException extends __BaseException {
  readonly name: "UnsupportedDisplayLanguageCodeException" = "UnsupportedDisplayLanguageCodeException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>Language code passed in with the request.</p>
   */
  DisplayLanguageCode?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedDisplayLanguageCodeException, __BaseException>) {
    super({
      name: "UnsupportedDisplayLanguageCodeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedDisplayLanguageCodeException.prototype);
    this.Message = opts.Message;
    this.DisplayLanguageCode = opts.DisplayLanguageCode;
  }
}

export interface ListParallelDataRequest {
  /**
   * <p>A string that specifies the next page of results to return in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of parallel data resources returned for each request.</p>
   */
  MaxResults?: number;
}

export interface ListParallelDataResponse {
  /**
   * <p>The properties of the parallel data resources returned by this request.</p>
   */
  ParallelDataPropertiesList?: ParallelDataProperties[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated
   *       response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the given Amazon Translate resource you are querying.
   *     </p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Tags associated with the Amazon Translate resource being queried. A tag is a key-value
   *       pair that adds as a metadata to a resource used by Amazon Translate. For example, a tag with
   *       "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *     </p>
   */
  Tags?: Tag[];
}

export interface ListTerminologiesRequest {
  /**
   * <p>If the result of the request to ListTerminologies was truncated, include the NextToken to
   *       fetch the next group of custom terminologies. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of custom terminologies returned per list request.</p>
   */
  MaxResults?: number;
}

export interface ListTerminologiesResponse {
  /**
   * <p>The properties list of the custom terminologies returned on the list request.</p>
   */
  TerminologyPropertiesList?: TerminologyProperties[];

  /**
   * <p> If the response to the ListTerminologies was truncated, the NextToken fetches the next
   *       group of custom terminologies.</p>
   */
  NextToken?: string;
}

/**
 * <p>The filter specified for the operation is not valid. Specify a different filter.</p>
 */
export class InvalidFilterException extends __BaseException {
  readonly name: "InvalidFilterException" = "InvalidFilterException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFilterException, __BaseException>) {
    super({
      name: "InvalidFilterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFilterException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Provides information for filtering a list of translation jobs. For more information, see
 *         <a>ListTextTranslationJobs</a>.</p>
 */
export interface TextTranslationJobFilter {
  /**
   * <p>Filters the list of jobs by name.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based by job status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing and
   *       returns only the jobs submitted before the specified time. Jobs are returned in ascending
   *       order, oldest to newest.</p>
   */
  SubmittedBeforeTime?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing and
   *       returns only the jobs submitted after the specified time. Jobs are returned in descending
   *       order, newest to oldest.</p>
   */
  SubmittedAfterTime?: Date;
}

export interface ListTextTranslationJobsRequest {
  /**
   * <p>The parameters that specify which batch translation jobs to retrieve. Filters include job
   *       name, job status, and submission time. You can only set one filter at a time.</p>
   */
  Filter?: TextTranslationJobFilter;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default value is 100.</p>
   */
  MaxResults?: number;
}

export interface ListTextTranslationJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  TextTranslationJobPropertiesList?: TextTranslationJobProperties[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *       when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface StartTextTranslationJobRequest {
  /**
   * <p>The name of the batch translation job to be performed.</p>
   */
  JobName?: string;

  /**
   * <p>Specifies the format and location of the input documents for the translation job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies the S3 folder to which your job output will be saved.
   *       </p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity Access and Management (IAM) role
   *       that grants Amazon Translate read access to your input data. For more information, see
   *       <a href="https://docs.aws.amazon.com/translate/latest/dg/identity-and-access-management.html">Identity and access management </a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The language code of the input language. Specify the language if all input documents share the same language.
   *       If you don't know the language of the source files, or your input documents contains different source
   *       languages, select <code>auto</code>. Amazon Translate auto detects the source language for each input document.
   *       For a list of supported language codes, see
   *       <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.</p>
   */
  SourceLanguageCode: string | undefined;

  /**
   * <p>The target languages of the translation job. Enter up to 10 language codes.
   *       Each input file is translated into each target language.</p>
   *          <p>Each language code is 2 or 5 characters long. For a list of language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.</p>
   */
  TargetLanguageCodes: string[] | undefined;

  /**
   * <p>The name of a custom terminology resource to add to the translation job. This resource
   *       lists examples source terms and the desired translation for each term.</p>
   *          <p>This parameter accepts only one custom terminology resource.</p>
   *          <p>If you specify multiple target languages for the
   *       job, translate uses the designated terminology for each
   *       requested target language that has an entry for the source term
   *       in the terminology file.</p>
   *          <p>For a list of available custom terminology resources, use the <a>ListTerminologies</a> operation.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/how-custom-terminology.html">Custom terminology</a>.</p>
   */
  TerminologyNames?: string[];

  /**
   * <p>The name of a parallel data resource to add to the translation job. This resource consists
   *       of examples that show how you want segments of text to be translated.
   *       If you specify multiple target languages for
   *       the job, the parallel data file must include translations for
   *       all the target languages.</p>
   *          <p>When you add parallel
   *       data to a translation job, you create an <i>Active Custom Translation</i> job. </p>
   *          <p>This parameter accepts only one parallel data resource.</p>
   *          <note>
   *             <p>Active Custom Translation jobs are priced at a higher rate than other jobs that don't
   *         use parallel data. For more information, see <a href="http://aws.amazon.com/translate/pricing/">Amazon Translate pricing</a>.</p>
   *          </note>
   *          <p>For a list of available parallel data resources, use the <a>ListParallelData</a> operation.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-parallel-data.html">
   *     Customizing your translations with parallel data</a>.</p>
   */
  ParallelDataNames?: string[];

  /**
   * <p>A unique identifier for the request. This token is generated for you when using the Amazon Translate
   *       SDK.</p>
   */
  ClientToken?: string;

  /**
   * <p>Settings to configure your translation output, including the option to set the formality
   *       level of the output text and the option to mask profane words and phrases.</p>
   */
  Settings?: TranslationSettings;
}

export interface StartTextTranslationJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this ID with the
   *         <a>DescribeTextTranslationJob</a> operation.</p>
   */
  JobId?: string;

  /**
   * <p>The status of the job. Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUBMITTED</code> - The job has been received and is queued for
   *           processing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - Amazon Translate is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - The job was successfully completed and the output is
   *           available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED_WITH_ERROR</code> - The job was completed with errors. The errors can
   *           be analyzed in the job's output.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The job did not complete. To get details, use the <a>DescribeTextTranslationJob</a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOP_REQUESTED</code> - The user who started the job has requested that it be
   *           stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code> - The job has been stopped.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

/**
 * <p>Amazon Translate does not support translation from the language of the source text into the requested
 *       target language. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/how-to-error-msg.html">Error messages</a>. </p>
 */
export class UnsupportedLanguagePairException extends __BaseException {
  readonly name: "UnsupportedLanguagePairException" = "UnsupportedLanguagePairException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The language code for the language of the input text. </p>
   */
  SourceLanguageCode?: string;

  /**
   * <p>The language code for the language of the translated text. </p>
   */
  TargetLanguageCode?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedLanguagePairException, __BaseException>) {
    super({
      name: "UnsupportedLanguagePairException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedLanguagePairException.prototype);
    this.Message = opts.Message;
    this.SourceLanguageCode = opts.SourceLanguageCode;
    this.TargetLanguageCode = opts.TargetLanguageCode;
  }
}

export interface StopTextTranslationJobRequest {
  /**
   * <p>The job ID of the job to be stopped.</p>
   */
  JobId: string | undefined;
}

export interface StopTextTranslationJobResponse {
  /**
   * <p>The job ID of the stopped batch translation job.</p>
   */
  JobId?: string;

  /**
   * <p>The status of the designated job. Upon successful completion, the job's status will be
   *         <code>STOPPED</code>.</p>
   */
  JobStatus?: JobStatus | string;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the given Amazon Translate resource to which you want
   *       to associate the tags. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags being associated with a specific Amazon Translate resource. There can be a maximum
   *       of 50 tags (both existing and pending) associated with a specific resource.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

/**
 * <p>The confidence that Amazon Comprehend accurately detected the source language is low. If a
 *       low confidence level is acceptable for your application, you can use the language in the
 *       exception to call Amazon Translate again. For more information, see the <a href="https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html">DetectDominantLanguage</a> operation in the <i>Amazon Comprehend Developer
 *         Guide</i>. </p>
 */
export class DetectedLanguageLowConfidenceException extends __BaseException {
  readonly name: "DetectedLanguageLowConfidenceException" = "DetectedLanguageLowConfidenceException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The language code of the auto-detected language from Amazon Comprehend.</p>
   */
  DetectedLanguageCode?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DetectedLanguageLowConfidenceException, __BaseException>) {
    super({
      name: "DetectedLanguageLowConfidenceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DetectedLanguageLowConfidenceException.prototype);
    this.Message = opts.Message;
    this.DetectedLanguageCode = opts.DetectedLanguageCode;
  }
}

/**
 * <p>The Amazon Translate service is temporarily unavailable. Wait a bit and then retry your
 *       request.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> The size of the text you submitted exceeds the size limit. Reduce the size of the text or
 *       use a smaller document and then retry your request. </p>
 */
export class TextSizeLimitExceededException extends __BaseException {
  readonly name: "TextSizeLimitExceededException" = "TextSizeLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TextSizeLimitExceededException, __BaseException>) {
    super({
      name: "TextSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TextSizeLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

export interface TranslateTextRequest {
  /**
   * <p>The text to translate. The text string can be a maximum of 10,000 bytes long. Depending on
   *       your character set, this may be fewer than 10,000 characters.</p>
   */
  Text: string | undefined;

  /**
   * <p>The name of the terminology list file to be used in the TranslateText request. You can use
   *       1 terminology list at most in a <code>TranslateText</code> request. Terminology lists can
   *       contain a maximum of 256 terms.</p>
   */
  TerminologyNames?: string[];

  /**
   * <p>The language code for the language of the source text. The language must be a language
   *       supported by Amazon Translate. For a list of language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.</p>
   *          <p>To have Amazon Translate determine the source language of your text, you can specify
   *         <code>auto</code> in the <code>SourceLanguageCode</code> field. If you specify
   *         <code>auto</code>, Amazon Translate will call <a href="https://docs.aws.amazon.com/comprehend/latest/dg/comprehend-general.html">Amazon
   *         Comprehend</a> to determine the source language.</p>
   *          <note>
   *             <p>If you specify <code>auto</code>, you must send the <code>TranslateText</code> request in a region that supports
   *           Amazon Comprehend. Otherwise, the request returns an error indicating that autodetect is not supported. </p>
   *          </note>
   */
  SourceLanguageCode: string | undefined;

  /**
   * <p>The language code requested for the language of the target text. The language must be a
   *       language supported by Amazon Translate.</p>
   */
  TargetLanguageCode: string | undefined;

  /**
   * <p>Settings to configure your translation output, including the option to set the formality
   *       level of the output text and the option to mask profane words and phrases.</p>
   */
  Settings?: TranslationSettings;
}

export interface TranslateTextResponse {
  /**
   * <p>The translated text.</p>
   */
  TranslatedText: string | undefined;

  /**
   * <p>The language code for the language of the source text.</p>
   */
  SourceLanguageCode: string | undefined;

  /**
   * <p>The language code for the language of the target text. </p>
   */
  TargetLanguageCode: string | undefined;

  /**
   * <p>The names of the custom terminologies applied to the input text by Amazon Translate for the
   *       translated text response.</p>
   */
  AppliedTerminologies?: AppliedTerminology[];

  /**
   * <p>Settings that configure the translation output.</p>
   */
  AppliedSettings?: TranslationSettings;
}

export interface UntagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the given Amazon Translate resource from which you
   *       want to remove the tags. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The initial part of a key-value pair that forms a tag being removed from a given resource.
   *         Keys must be unique and cannot be duplicated for a particular resource.
   *     </p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateParallelDataRequest {
  /**
   * <p>The name of the parallel data resource being updated.</p>
   */
  Name: string | undefined;

  /**
   * <p>A custom description for the parallel data resource in Amazon Translate.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the format and S3 location of the parallel data input file.</p>
   */
  ParallelDataConfig: ParallelDataConfig | undefined;

  /**
   * <p>A unique identifier for the request. This token is automatically generated when you use
   *       Amazon Translate through an AWS SDK.</p>
   */
  ClientToken?: string;
}

export interface UpdateParallelDataResponse {
  /**
   * <p>The name of the parallel data resource being updated.</p>
   */
  Name?: string;

  /**
   * <p>The status of the parallel data resource that you are attempting to update. Your update
   *       request is accepted only if this status is either <code>ACTIVE</code> or
   *       <code>FAILED</code>.</p>
   */
  Status?: ParallelDataStatus | string;

  /**
   * <p>The status of the parallel data update attempt. When the updated parallel data resource is
   *       ready for you to use, the status is <code>ACTIVE</code>.</p>
   */
  LatestUpdateAttemptStatus?: ParallelDataStatus | string;

  /**
   * <p>The time that the most recent update was attempted.</p>
   */
  LatestUpdateAttemptAt?: Date;
}

/**
 * @internal
 */
export const TermFilterSensitiveLog = (obj: Term): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppliedTerminologyFilterSensitiveLog = (obj: AppliedTerminology): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionKeyFilterSensitiveLog = (obj: EncryptionKey): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParallelDataConfigFilterSensitiveLog = (obj: ParallelDataConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateParallelDataRequestFilterSensitiveLog = (obj: CreateParallelDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateParallelDataResponseFilterSensitiveLog = (obj: CreateParallelDataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteParallelDataRequestFilterSensitiveLog = (obj: DeleteParallelDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteParallelDataResponseFilterSensitiveLog = (obj: DeleteParallelDataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTerminologyRequestFilterSensitiveLog = (obj: DeleteTerminologyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTextTranslationJobRequestFilterSensitiveLog = (obj: DescribeTextTranslationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputDataConfigFilterSensitiveLog = (obj: InputDataConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobDetailsFilterSensitiveLog = (obj: JobDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputDataConfigFilterSensitiveLog = (obj: OutputDataConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TranslationSettingsFilterSensitiveLog = (obj: TranslationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TextTranslationJobPropertiesFilterSensitiveLog = (obj: TextTranslationJobProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTextTranslationJobResponseFilterSensitiveLog = (obj: DescribeTextTranslationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetParallelDataRequestFilterSensitiveLog = (obj: GetParallelDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParallelDataDataLocationFilterSensitiveLog = (obj: ParallelDataDataLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParallelDataPropertiesFilterSensitiveLog = (obj: ParallelDataProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetParallelDataResponseFilterSensitiveLog = (obj: GetParallelDataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTerminologyRequestFilterSensitiveLog = (obj: GetTerminologyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminologyDataLocationFilterSensitiveLog = (obj: TerminologyDataLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminologyPropertiesFilterSensitiveLog = (obj: TerminologyProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTerminologyResponseFilterSensitiveLog = (obj: GetTerminologyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminologyDataFilterSensitiveLog = (obj: TerminologyData): any => ({
  ...obj,
  ...(obj.File && { File: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportTerminologyRequestFilterSensitiveLog = (obj: ImportTerminologyRequest): any => ({
  ...obj,
  ...(obj.TerminologyData && { TerminologyData: TerminologyDataFilterSensitiveLog(obj.TerminologyData) }),
});

/**
 * @internal
 */
export const ImportTerminologyResponseFilterSensitiveLog = (obj: ImportTerminologyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLanguagesRequestFilterSensitiveLog = (obj: ListLanguagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LanguageFilterSensitiveLog = (obj: Language): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLanguagesResponseFilterSensitiveLog = (obj: ListLanguagesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListParallelDataRequestFilterSensitiveLog = (obj: ListParallelDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListParallelDataResponseFilterSensitiveLog = (obj: ListParallelDataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTerminologiesRequestFilterSensitiveLog = (obj: ListTerminologiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTerminologiesResponseFilterSensitiveLog = (obj: ListTerminologiesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TextTranslationJobFilterFilterSensitiveLog = (obj: TextTranslationJobFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTextTranslationJobsRequestFilterSensitiveLog = (obj: ListTextTranslationJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTextTranslationJobsResponseFilterSensitiveLog = (obj: ListTextTranslationJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartTextTranslationJobRequestFilterSensitiveLog = (obj: StartTextTranslationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartTextTranslationJobResponseFilterSensitiveLog = (obj: StartTextTranslationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopTextTranslationJobRequestFilterSensitiveLog = (obj: StopTextTranslationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopTextTranslationJobResponseFilterSensitiveLog = (obj: StopTextTranslationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TranslateTextRequestFilterSensitiveLog = (obj: TranslateTextRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TranslateTextResponseFilterSensitiveLog = (obj: TranslateTextResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateParallelDataRequestFilterSensitiveLog = (obj: UpdateParallelDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateParallelDataResponseFilterSensitiveLog = (obj: UpdateParallelDataResponse): any => ({
  ...obj,
});
