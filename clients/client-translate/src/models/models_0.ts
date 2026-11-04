// smithy-typescript generated code
import type {
  Brevity,
  Directionality,
  DisplayLanguageCode,
  EncryptionKeyType,
  Formality,
  JobStatus,
  MergeStrategy,
  ParallelDataFormat,
  ParallelDataStatus,
  Profanity,
  TerminologyDataFormat,
} from "./enums";

/**
 * The term being translated by the custom terminology.
 *
 * @public
 */
export interface Term {
  /**
   * The source text of the term being translated by the custom terminology.
   *
   * @public
   */
  SourceText?: string | undefined;

  /**
   * The target text of the term being translated by the custom terminology.
   *
   * @public
   */
  TargetText?: string | undefined;
}

/**
 * The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request.
 *
 * @public
 */
export interface AppliedTerminology {
  /**
   * The name of the custom terminology applied to the input text by Amazon Translate for the translated text response.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The specific terms of the custom terminology applied to the input text by Amazon Translate for the translated text response. A maximum of 250 terms will be returned, and the specific terms applied will be the first 250 terms in the source text.
   *
   * @public
   */
  Terms?: Term[] | undefined;
}

/**
 * The encryption key used to encrypt this object.
 *
 * @public
 */
export interface EncryptionKey {
  /**
   * The type of encryption key used by Amazon Translate to encrypt this object.
   *
   * @public
   */
  Type: EncryptionKeyType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the encryption key being used to encrypt this object.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * Specifies the format and S3 location of the parallel data input file.
 *
 * @public
 */
export interface ParallelDataConfig {
  /**
   * The URI of the Amazon S3 folder that contains the parallel data input file. The folder must be in the same Region as the API endpoint you are calling.
   *
   * @public
   */
  S3Uri?: string | undefined;

  /**
   * The format of the parallel data input file.
   *
   * @public
   */
  Format?: ParallelDataFormat | undefined;
}

/**
 * A key-value pair that adds as a metadata to a resource used by Amazon Translate.
 *
 * @public
 */
export interface Tag {
  /**
   * The initial part of a key-value pair that forms a tag associated with a given resource.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The second part of a key-value pair that forms a tag associated with a given resource.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateParallelDataRequest {
  /**
   * A custom name for the parallel data resource in Amazon Translate. You must assign a name that is unique in the account and region.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A custom description for the parallel data resource in Amazon Translate.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies the format and S3 location of the parallel data input file.
   *
   * @public
   */
  ParallelDataConfig: ParallelDataConfig | undefined;

  /**
   * The encryption key used to encrypt this object.
   *
   * @public
   */
  EncryptionKey?: EncryptionKey | undefined;

  /**
   * A unique identifier for the request. This token is automatically generated when you use Amazon Translate through an AWS SDK.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Tags to be associated with this resource. A tag is a key-value pair that adds metadata to a resource. Each tag key for the resource must be unique. For more information, see [Tagging your resources](https://docs.aws.amazon.com/translate/latest/dg/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateParallelDataResponse {
  /**
   * The custom name that you assigned to the parallel data resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the parallel data resource. When the resource is ready for you to use, the status is `ACTIVE`.
   *
   * @public
   */
  Status?: ParallelDataStatus | undefined;
}

/**
 * @public
 */
export interface DeleteParallelDataRequest {
  /**
   * The name of the parallel data resource that is being deleted.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteParallelDataResponse {
  /**
   * The name of the parallel data resource that is being deleted.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the parallel data deletion.
   *
   * @public
   */
  Status?: ParallelDataStatus | undefined;
}

/**
 * @public
 */
export interface DeleteTerminologyRequest {
  /**
   * The name of the custom terminology being deleted.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeTextTranslationJobRequest {
  /**
   * The identifier that Amazon Translate generated for the job. The StartTextTranslationJob operation returns this identifier in its response.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * The input configuration properties for requesting a batch translation job.
 *
 * @public
 */
export interface InputDataConfig {
  /**
   * The URI of the AWS S3 folder that contains the input files. Amazon Translate translates all the files in the folder and all its sub-folders. The folder must be in the same Region as the API endpoint you are calling.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * Describes the format of the data that you submit to Amazon Translate as input. You can specify one of the following multipurpose internet mail extension (MIME) types:
   *
   * - `text/html`: The input data consists of one or more HTML files. Amazon Translate translates only the text that resides in the `html` element in each file.
   * - `text/plain`: The input data consists of one or more unformatted text files. Amazon Translate translates every character in this type of input.
   * - `application/vnd.openxmlformats-officedocument.wordprocessingml.document`: The input data consists of one or more Word documents (.docx).
   * - `application/vnd.openxmlformats-officedocument.presentationml.presentation`: The input data consists of one or more PowerPoint Presentation files (.pptx).
   * - `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`: The input data consists of one or more Excel Workbook files (.xlsx).
   * - `application/x-xliff+xml`: The input data consists of one or more XML Localization Interchange File Format (XLIFF) files (.xlf). Amazon Translate supports only XLIFF version 1.2.
   *
   * > **Important:** If you structure your input data as HTML, ensure that you set this parameter to `text/html`. By doing so, you cut costs by limiting the translation to the contents of the `html` element in each file. Otherwise, if you set this parameter to `text/plain`, your costs will cover the translation of every character.
   *
   * @public
   */
  ContentType: string | undefined;
}

/**
 * The number of documents successfully and unsuccessfully processed during a translation job.
 *
 * @public
 */
export interface JobDetails {
  /**
   * The number of documents successfully processed during a translation job.
   *
   * @public
   */
  TranslatedDocumentsCount?: number | undefined;

  /**
   * The number of documents that could not be processed during a translation job.
   *
   * @public
   */
  DocumentsWithErrorsCount?: number | undefined;

  /**
   * The number of documents used as input in a translation job.
   *
   * @public
   */
  InputDocumentsCount?: number | undefined;
}

/**
 * The output configuration properties for a batch translation job.
 *
 * @public
 */
export interface OutputDataConfig {
  /**
   * The URI of the S3 folder that contains a translation job's output file. The folder must be in the same Region as the API endpoint that you are calling.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The encryption key used to encrypt this object.
   *
   * @public
   */
  EncryptionKey?: EncryptionKey | undefined;
}

/**
 * Settings to configure your translation output. You can configure the following options:
 *
 * - Brevity: reduces the length of the translation output for most translations. Available for `TranslateText` only.
 * - Formality: sets the formality level of the translation output.
 * - Profanity: masks profane words and phrases in the translation output.
 *
 * @public
 */
export interface TranslationSettings {
  /**
   * You can specify the desired level of formality for translations to supported target languages. The formality setting controls the level of formal language usage (also known as [register](<https://en.wikipedia.org/wiki/Register_(sociolinguistics)>)) in the translation output. You can set the value to informal or formal. If you don't specify a value for formality, or if the target language doesn't support formality, the translation will ignore the formality setting.
   *
   * If you specify multiple target languages for the job, translate ignores the formality setting for any unsupported target language.
   *
   * For a list of target languages that support formality, see [Supported languages](https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-formality.html#customizing-translations-formality-languages) in the Amazon Translate Developer Guide.
   *
   * @public
   */
  Formality?: Formality | undefined;

  /**
   * You can enable the profanity setting if you want to mask profane words and phrases in your translation output.
   *
   * To mask profane words and phrases, Amazon Translate replaces them with the grawlix string “?$#@$“. This 5-character sequence is used for each profane word or phrase, regardless of the length or number of words.
   *
   * Amazon Translate doesn't detect profanity in all of its supported languages. For languages that don't support profanity detection, see [Unsupported languages](https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-profanity.html#customizing-translations-profanity-languages) in the Amazon Translate Developer Guide.
   *
   * If you specify multiple target languages for the job, all the target languages must support profanity masking. If any of the target languages don't support profanity masking, the translation job won't mask profanity for any target language.
   *
   * @public
   */
  Profanity?: Profanity | undefined;

  /**
   * When you turn on brevity, Amazon Translate reduces the length of the translation output for most translations (when compared with the same translation with brevity turned off). By default, brevity is turned off.
   *
   * If you turn on brevity for a translation request with an unsupported language pair, the translation proceeds with the brevity setting turned off.
   *
   * For the language pairs that brevity supports, see [Using brevity](https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-brevity) in the Amazon Translate Developer Guide.
   *
   * @public
   */
  Brevity?: Brevity | undefined;
}

/**
 * Provides information about a translation job.
 *
 * @public
 */
export interface TextTranslationJobProperties {
  /**
   * The ID of the translation job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The user-defined name of the translation job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The status of the translation job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * The number of documents successfully and unsuccessfully processed during the translation job.
   *
   * @public
   */
  JobDetails?: JobDetails | undefined;

  /**
   * The language code of the language of the source text. The language must be a language supported by Amazon Translate.
   *
   * @public
   */
  SourceLanguageCode?: string | undefined;

  /**
   * The language code of the language of the target text. The language must be a language supported by Amazon Translate.
   *
   * @public
   */
  TargetLanguageCodes?: string[] | undefined;

  /**
   * A list containing the names of the terminologies applied to a translation job. Only one terminology can be applied per StartTextTranslationJob request at this time.
   *
   * @public
   */
  TerminologyNames?: string[] | undefined;

  /**
   * A list containing the names of the parallel data resources applied to the translation job.
   *
   * @public
   */
  ParallelDataNames?: string[] | undefined;

  /**
   * An explanation of any errors that may have occurred during the translation job.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time at which the translation job was submitted.
   *
   * @public
   */
  SubmittedTime?: Date | undefined;

  /**
   * The time at which the translation job ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The input configuration properties that were specified when the job was requested.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The output configuration properties that were specified when the job was requested.
   *
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of an AWS Identity Access and Management (IAM) role that granted Amazon Translate read access to the job's input data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * Settings that modify the translation output.
   *
   * @public
   */
  Settings?: TranslationSettings | undefined;
}

/**
 * @public
 */
export interface DescribeTextTranslationJobResponse {
  /**
   * An object that contains the properties associated with an asynchronous batch translation job.
   *
   * @public
   */
  TextTranslationJobProperties?: TextTranslationJobProperties | undefined;
}

/**
 * @public
 */
export interface GetParallelDataRequest {
  /**
   * The name of the parallel data resource that is being retrieved.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The location of the most recent parallel data input file that was successfully imported into Amazon Translate.
 *
 * @public
 */
export interface ParallelDataDataLocation {
  /**
   * Describes the repository that contains the parallel data input file.
   *
   * @public
   */
  RepositoryType: string | undefined;

  /**
   * The Amazon S3 location of the parallel data input file. The location is returned as a presigned URL to that has a 30-minute expiration.
   *
   *
   *
   * > **Important:**
   * >
   * > Amazon Translate doesn't scan all input files for the risk of CSV injection attacks.
   * >
   * > CSV injection occurs when a .csv or .tsv file is altered so that a record contains malicious code. The record begins with a special character, such as =, +, -, or @. When the file is opened in a spreadsheet program, the program might interpret the record as a formula and run the code within it.
   * >
   * > Before you download an input file from Amazon S3, ensure that you recognize the file and trust its creator.
   *
   * @public
   */
  Location: string | undefined;
}

/**
 * The properties of a parallel data resource.
 *
 * @public
 */
export interface ParallelDataProperties {
  /**
   * The custom name assigned to the parallel data resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the parallel data resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The description assigned to the parallel data resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the parallel data resource. When the parallel data is ready for you to use, the status is `ACTIVE`.
   *
   * @public
   */
  Status?: ParallelDataStatus | undefined;

  /**
   * The source language of the translations in the parallel data file.
   *
   * @public
   */
  SourceLanguageCode?: string | undefined;

  /**
   * The language codes for the target languages available in the parallel data file. All possible target languages are returned as an array.
   *
   * @public
   */
  TargetLanguageCodes?: string[] | undefined;

  /**
   * Specifies the format and S3 location of the parallel data input file.
   *
   * @public
   */
  ParallelDataConfig?: ParallelDataConfig | undefined;

  /**
   * Additional information from Amazon Translate about the parallel data resource.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The number of UTF-8 characters that Amazon Translate imported from the parallel data input file. This number includes only the characters in your translation examples. It does not include characters that are used to format your file. For example, if you provided a Translation Memory Exchange (.tmx) file, this number does not include the tags.
   *
   * @public
   */
  ImportedDataSize?: number | undefined;

  /**
   * The number of records successfully imported from the parallel data input file.
   *
   * @public
   */
  ImportedRecordCount?: number | undefined;

  /**
   * The number of records unsuccessfully imported from the parallel data input file.
   *
   * @public
   */
  FailedRecordCount?: number | undefined;

  /**
   * The number of items in the input file that Amazon Translate skipped when you created or updated the parallel data resource. For example, Amazon Translate skips empty records, empty target texts, and empty lines.
   *
   * @public
   */
  SkippedRecordCount?: number | undefined;

  /**
   * The encryption key used to encrypt this object.
   *
   * @public
   */
  EncryptionKey?: EncryptionKey | undefined;

  /**
   * The time at which the parallel data resource was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which the parallel data resource was last updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The status of the most recent update attempt for the parallel data resource.
   *
   * @public
   */
  LatestUpdateAttemptStatus?: ParallelDataStatus | undefined;

  /**
   * The time that the most recent update was attempted.
   *
   * @public
   */
  LatestUpdateAttemptAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetParallelDataResponse {
  /**
   * The properties of the parallel data resource that is being retrieved.
   *
   * @public
   */
  ParallelDataProperties?: ParallelDataProperties | undefined;

  /**
   * The Amazon S3 location of the most recent parallel data input file that was successfully imported into Amazon Translate. The location is returned as a presigned URL that has a 30-minute expiration.
   *
   *
   *
   * > **Important:**
   * >
   * > Amazon Translate doesn't scan all input files for the risk of CSV injection attacks.
   * >
   * > CSV injection occurs when a .csv or .tsv file is altered so that a record contains malicious code. The record begins with a special character, such as =, +, -, or @. When the file is opened in a spreadsheet program, the program might interpret the record as a formula and run the code within it.
   * >
   * > Before you download an input file from Amazon S3, ensure that you recognize the file and trust its creator.
   *
   * @public
   */
  DataLocation?: ParallelDataDataLocation | undefined;

  /**
   * The Amazon S3 location of a file that provides any errors or warnings that were produced by your input file. This file was created when Amazon Translate attempted to create a parallel data resource. The location is returned as a presigned URL to that has a 30-minute expiration.
   *
   * @public
   */
  AuxiliaryDataLocation?: ParallelDataDataLocation | undefined;

  /**
   * The Amazon S3 location of a file that provides any errors or warnings that were produced by your input file. This file was created when Amazon Translate attempted to update a parallel data resource. The location is returned as a presigned URL to that has a 30-minute expiration.
   *
   * @public
   */
  LatestUpdateAttemptAuxiliaryDataLocation?: ParallelDataDataLocation | undefined;
}

/**
 * @public
 */
export interface GetTerminologyRequest {
  /**
   * The name of the custom terminology being retrieved.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data format of the custom terminology being retrieved.
   *
   * If you don't specify this parameter, Amazon Translate returns a file with the same format as the file that was imported to create the terminology.
   *
   * If you specify this parameter when you retrieve a multi-directional terminology resource, you must specify the same format as the input file that was imported to create it. Otherwise, Amazon Translate throws an error.
   *
   * @public
   */
  TerminologyDataFormat?: TerminologyDataFormat | undefined;
}

/**
 * The location of the custom terminology data.
 *
 * @public
 */
export interface TerminologyDataLocation {
  /**
   * The repository type for the custom terminology data.
   *
   * @public
   */
  RepositoryType: string | undefined;

  /**
   * The Amazon S3 location of the most recent custom terminology input file that was successfully imported into Amazon Translate. The location is returned as a presigned URL that has a 30-minute expiration .
   *
   *
   *
   * > **Important:**
   * >
   * > Amazon Translate doesn't scan all input files for the risk of CSV injection attacks.
   * >
   * > CSV injection occurs when a .csv or .tsv file is altered so that a record contains malicious code. The record begins with a special character, such as =, +, -, or @. When the file is opened in a spreadsheet program, the program might interpret the record as a formula and run the code within it.
   * >
   * > Before you download an input file from Amazon S3, ensure that you recognize the file and trust its creator.
   *
   * @public
   */
  Location: string | undefined;
}

/**
 * The properties of the custom terminology.
 *
 * @public
 */
export interface TerminologyProperties {
  /**
   * The name of the custom terminology.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the custom terminology properties.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the custom terminology.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The language code for the source text of the translation request for which the custom terminology is being used.
   *
   * @public
   */
  SourceLanguageCode?: string | undefined;

  /**
   * The language codes for the target languages available with the custom terminology resource. All possible target languages are returned in array.
   *
   * @public
   */
  TargetLanguageCodes?: string[] | undefined;

  /**
   * The encryption key for the custom terminology.
   *
   * @public
   */
  EncryptionKey?: EncryptionKey | undefined;

  /**
   * The size of the file used when importing a custom terminology.
   *
   * @public
   */
  SizeBytes?: number | undefined;

  /**
   * The number of terms included in the custom terminology.
   *
   * @public
   */
  TermCount?: number | undefined;

  /**
   * The time at which the custom terminology was created, based on the timestamp.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which the custom terminology was last update, based on the timestamp.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The directionality of your terminology resource indicates whether it has one source language (uni-directional) or multiple (multi-directional).
   *
   * - **UNI**
   *
   *   The terminology resource has one source language (the first column in a CSV file), and all of its other languages are target languages.
   *
   * - **MULTI**
   *
   *   Any language in the terminology resource can be the source language.
   *
   * @public
   */
  Directionality?: Directionality | undefined;

  /**
   * Additional information from Amazon Translate about the terminology resource.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The number of terms in the input file that Amazon Translate skipped when you created or updated the terminology resource.
   *
   * @public
   */
  SkippedTermCount?: number | undefined;

  /**
   * The format of the custom terminology input file.
   *
   * @public
   */
  Format?: TerminologyDataFormat | undefined;
}

/**
 * @public
 */
export interface GetTerminologyResponse {
  /**
   * The properties of the custom terminology being retrieved.
   *
   * @public
   */
  TerminologyProperties?: TerminologyProperties | undefined;

  /**
   * The Amazon S3 location of the most recent custom terminology input file that was successfully imported into Amazon Translate. The location is returned as a presigned URL that has a 30-minute expiration.
   *
   *
   *
   * > **Important:**
   * >
   * > Amazon Translate doesn't scan all input files for the risk of CSV injection attacks.
   * >
   * > CSV injection occurs when a .csv or .tsv file is altered so that a record contains malicious code. The record begins with a special character, such as =, +, -, or @. When the file is opened in a spreadsheet program, the program might interpret the record as a formula and run the code within it.
   * >
   * > Before you download an input file from Amazon S3, ensure that you recognize the file and trust its creator.
   *
   * @public
   */
  TerminologyDataLocation?: TerminologyDataLocation | undefined;

  /**
   * The Amazon S3 location of a file that provides any errors or warnings that were produced by your input file. This file was created when Amazon Translate attempted to create a terminology resource. The location is returned as a presigned URL to that has a 30-minute expiration.
   *
   * @public
   */
  AuxiliaryDataLocation?: TerminologyDataLocation | undefined;
}

/**
 * The data associated with the custom terminology. For information about the custom terminology file, see [Creating a Custom Terminology](https://docs.aws.amazon.com/translate/latest/dg/creating-custom-terminology.html).
 *
 * @public
 */
export interface TerminologyData {
  /**
   * The file containing the custom terminology data. Your version of the AWS SDK performs a Base64-encoding on this field before sending a request to the AWS service. Users of the SDK should not perform Base64-encoding themselves.
   *
   * @public
   */
  File: Uint8Array | undefined;

  /**
   * The data format of the custom terminology.
   *
   * @public
   */
  Format: TerminologyDataFormat | undefined;

  /**
   * The directionality of your terminology resource indicates whether it has one source language (uni-directional) or multiple (multi-directional).
   *
   * - **UNI**
   *
   *   The terminology resource has one source language (for example, the first column in a CSV file), and all of its other languages are target languages.
   *
   * - **MULTI**
   *
   *   Any language in the terminology resource can be the source language or a target language. A single multi-directional terminology resource can be used for jobs that translate different language pairs. For example, if the terminology contains English and Spanish terms, it can be used for jobs that translate English to Spanish and Spanish to English.
   *
   * When you create a custom terminology resource without specifying the directionality, it behaves as uni-directional terminology, although this parameter will have a null value.
   *
   * @public
   */
  Directionality?: Directionality | undefined;
}

/**
 * @public
 */
export interface ImportTerminologyRequest {
  /**
   * The name of the custom terminology being imported.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The merge strategy of the custom terminology being imported. Currently, only the OVERWRITE merge strategy is supported. In this case, the imported terminology will overwrite an existing terminology of the same name.
   *
   * @public
   */
  MergeStrategy: MergeStrategy | undefined;

  /**
   * The description of the custom terminology being imported.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The terminology data for the custom terminology being imported.
   *
   * @public
   */
  TerminologyData: TerminologyData | undefined;

  /**
   * The encryption key for the custom terminology being imported.
   *
   * @public
   */
  EncryptionKey?: EncryptionKey | undefined;

  /**
   * Tags to be associated with this resource. A tag is a key-value pair that adds metadata to a resource. Each tag key for the resource must be unique. For more information, see [Tagging your resources](https://docs.aws.amazon.com/translate/latest/dg/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportTerminologyResponse {
  /**
   * The properties of the custom terminology being imported.
   *
   * @public
   */
  TerminologyProperties?: TerminologyProperties | undefined;

  /**
   * The Amazon S3 location of a file that provides any errors or warnings that were produced by your input file. This file was created when Amazon Translate attempted to create a terminology resource. The location is returned as a presigned URL to that has a 30 minute expiration.
   *
   * @public
   */
  AuxiliaryDataLocation?: TerminologyDataLocation | undefined;
}

/**
 * @public
 */
export interface ListLanguagesRequest {
  /**
   * The language code for the language to use to display the language names in the response. The language code is `en` by default.
   *
   * @public
   */
  DisplayLanguageCode?: DisplayLanguageCode | undefined;

  /**
   * Include the NextToken value to fetch the next group of supported languages.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A supported language.
 *
 * @public
 */
export interface Language {
  /**
   * Language name of the supported language.
   *
   * @public
   */
  LanguageName: string | undefined;

  /**
   * Language code for the supported language.
   *
   * @public
   */
  LanguageCode: string | undefined;
}

/**
 * @public
 */
export interface ListLanguagesResponse {
  /**
   * The list of supported languages.
   *
   * @public
   */
  Languages?: Language[] | undefined;

  /**
   * The language code passed in with the request.
   *
   * @public
   */
  DisplayLanguageCode?: DisplayLanguageCode | undefined;

  /**
   * If the response does not include all remaining results, use the NextToken in the next request to fetch the next group of supported languages.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListParallelDataRequest {
  /**
   * A string that specifies the next page of results to return in a paginated response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of parallel data resources returned for each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListParallelDataResponse {
  /**
   * The properties of the parallel data resources returned by this request.
   *
   * @public
   */
  ParallelDataPropertiesList?: ParallelDataProperties[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the given Amazon Translate resource you are querying.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Tags associated with the Amazon Translate resource being queried. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Translate. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTerminologiesRequest {
  /**
   * If the result of the request to ListTerminologies was truncated, include the NextToken to fetch the next group of custom terminologies.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of custom terminologies returned per list request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTerminologiesResponse {
  /**
   * The properties list of the custom terminologies returned on the list request.
   *
   * @public
   */
  TerminologyPropertiesList?: TerminologyProperties[] | undefined;

  /**
   * If the response to the ListTerminologies was truncated, the NextToken fetches the next group of custom terminologies.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information for filtering a list of translation jobs. For more information, see ListTextTranslationJobs.
 *
 * @public
 */
export interface TextTranslationJobFilter {
  /**
   * Filters the list of jobs by name.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Filters the list of jobs based by job status.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing and returns only the jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
   *
   * @public
   */
  SubmittedBeforeTime?: Date | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing and returns only the jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
   *
   * @public
   */
  SubmittedAfterTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTextTranslationJobsRequest {
  /**
   * The parameters that specify which batch translation jobs to retrieve. Filters include job name, job status, and submission time. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: TextTranslationJobFilter | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page. The default value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTextTranslationJobsResponse {
  /**
   * A list containing the properties of each job that is returned.
   *
   * @public
   */
  TextTranslationJobPropertiesList?: TextTranslationJobProperties[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartTextTranslationJobRequest {
  /**
   * The name of the batch translation job to be performed.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Specifies the format and location of the input documents for the translation job.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * Specifies the S3 folder to which your job output will be saved.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of an AWS Identity Access and Management (IAM) role that grants Amazon Translate read access to your input data. For more information, see [Identity and access management](https://docs.aws.amazon.com/translate/latest/dg/identity-and-access-management.html).
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The language code of the input language. Specify the language if all input documents share the same language. If you don't know the language of the source files, or your input documents contains different source languages, select `auto`. Amazon Translate auto detects the source language for each input document. For a list of supported language codes, see [Supported languages](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html).
   *
   * @public
   */
  SourceLanguageCode: string | undefined;

  /**
   * The target languages of the translation job. Enter up to 10 language codes. Each input file is translated into each target language.
   *
   * Each language code is 2 or 5 characters long. For a list of language codes, see [Supported languages](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html).
   *
   * @public
   */
  TargetLanguageCodes: string[] | undefined;

  /**
   * The name of a custom terminology resource to add to the translation job. This resource lists examples source terms and the desired translation for each term.
   *
   * This parameter accepts only one custom terminology resource.
   *
   * If you specify multiple target languages for the job, translate uses the designated terminology for each requested target language that has an entry for the source term in the terminology file.
   *
   * For a list of available custom terminology resources, use the ListTerminologies operation.
   *
   * For more information, see [Custom terminology](https://docs.aws.amazon.com/translate/latest/dg/how-custom-terminology.html).
   *
   * @public
   */
  TerminologyNames?: string[] | undefined;

  /**
   * The name of a parallel data resource to add to the translation job. This resource consists of examples that show how you want segments of text to be translated. If you specify multiple target languages for the job, the parallel data file must include translations for all the target languages.
   *
   * When you add parallel data to a translation job, you create an *Active Custom Translation* job.
   *
   * This parameter accepts only one parallel data resource.
   *
   * > **Note:** Active Custom Translation jobs are priced at a higher rate than other jobs that don't use parallel data. For more information, see [Amazon Translate pricing](http://aws.amazon.com/translate/pricing/).
   *
   * For a list of available parallel data resources, use the ListParallelData operation.
   *
   * For more information, see [Customizing your translations with parallel data](https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-parallel-data.html).
   *
   * @public
   */
  ParallelDataNames?: string[] | undefined;

  /**
   * A unique identifier for the request. This token is generated for you when using the Amazon Translate SDK.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Settings to configure your translation output. You can configure the following options:
   *
   * - Brevity: not supported.
   * - Formality: sets the formality level of the output text.
   * - Profanity: masks profane words and phrases in your translation output.
   *
   * @public
   */
  Settings?: TranslationSettings | undefined;
}

/**
 * @public
 */
export interface StartTextTranslationJobResponse {
  /**
   * The identifier generated for the job. To get the status of a job, use this ID with the DescribeTextTranslationJob operation.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The status of the job. Possible values include:
   *
   * - `SUBMITTED` - The job has been received and is queued for processing.
   * - `IN_PROGRESS` - Amazon Translate is processing the job.
   * - `COMPLETED` - The job was successfully completed and the output is available.
   * - `COMPLETED_WITH_ERROR` - The job was completed with errors. The errors can be analyzed in the job's output.
   * - `FAILED` - The job did not complete. To get details, use the DescribeTextTranslationJob operation.
   * - `STOP_REQUESTED` - The user who started the job has requested that it be stopped.
   * - `STOPPED` - The job has been stopped.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopTextTranslationJobRequest {
  /**
   * The job ID of the job to be stopped.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopTextTranslationJobResponse {
  /**
   * The job ID of the stopped batch translation job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The status of the designated job. Upon successful completion, the job's status will be `STOPPED`.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the given Amazon Translate resource to which you want to associate the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Tags being associated with a specific Amazon Translate resource. There can be a maximum of 50 tags (both existing and pending) associated with a specific resource.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * The content and content type of a document.
 *
 * @public
 */
export interface Document {
  /**
   * The `Content`field type is Binary large object (blob). This object contains the document content converted into base64-encoded binary data. If you use one of the AWS SDKs, the SDK performs the Base64-encoding on this field before sending the request.
   *
   * @public
   */
  Content: Uint8Array | undefined;

  /**
   * Describes the format of the document. You can specify one of the following:
   *
   * - `text/html` - The input data consists of HTML content. Amazon Translate translates only the text in the HTML element.
   * - `text/plain` - The input data consists of unformatted text. Amazon Translate translates every character in the content.
   * - `application/vnd.openxmlformats-officedocument.wordprocessingml.document` - The input data consists of a Word document (.docx).
   *
   * @public
   */
  ContentType: string | undefined;
}

/**
 * @public
 */
export interface TranslateDocumentRequest {
  /**
   * The content and content type for the document to be translated. The document size must not exceed 100 KB.
   *
   * @public
   */
  Document: Document | undefined;

  /**
   * The name of a terminology list file to add to the translation job. This file provides source terms and the desired translation for each term. A terminology list can contain a maximum of 256 terms. You can use one custom terminology resource in your translation request.
   *
   * Use the ListTerminologies operation to get the available terminology lists.
   *
   * For more information about custom terminology lists, see [Custom terminology](https://docs.aws.amazon.com/translate/latest/dg/how-custom-terminology.html).
   *
   * @public
   */
  TerminologyNames?: string[] | undefined;

  /**
   * The language code for the language of the source text. For a list of supported language codes, see [Supported languages](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html).
   *
   * To have Amazon Translate determine the source language of your text, you can specify `auto` in the `SourceLanguageCode` field. If you specify `auto`, Amazon Translate will call [Amazon Comprehend](https://docs.aws.amazon.com/comprehend/latest/dg/comprehend-general.html) to determine the source language.
   *
   * > **Note:** If you specify `auto`, you must send the `TranslateDocument` request in a region that supports Amazon Comprehend. Otherwise, the request returns an error indicating that autodetect is not supported.
   *
   * @public
   */
  SourceLanguageCode: string | undefined;

  /**
   * The language code requested for the translated document. For a list of supported language codes, see [Supported languages](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html).
   *
   * @public
   */
  TargetLanguageCode: string | undefined;

  /**
   * Settings to configure your translation output. You can configure the following options:
   *
   * - Brevity: not supported.
   * - Formality: sets the formality level of the output text.
   * - Profanity: masks profane words and phrases in your translation output.
   *
   * @public
   */
  Settings?: TranslationSettings | undefined;
}

/**
 * The translated content.
 *
 * @public
 */
export interface TranslatedDocument {
  /**
   * The document containing the translated content.
   *
   * @public
   */
  Content: Uint8Array | undefined;
}

/**
 * @public
 */
export interface TranslateDocumentResponse {
  /**
   * The document containing the translated content. The document format matches the source document format.
   *
   * @public
   */
  TranslatedDocument: TranslatedDocument | undefined;

  /**
   * The language code of the source document.
   *
   * @public
   */
  SourceLanguageCode: string | undefined;

  /**
   * The language code of the translated document.
   *
   * @public
   */
  TargetLanguageCode: string | undefined;

  /**
   * The names of the custom terminologies applied to the input text by Amazon Translate to produce the translated text document.
   *
   * @public
   */
  AppliedTerminologies?: AppliedTerminology[] | undefined;

  /**
   * Settings to configure your translation output. You can configure the following options:
   *
   * - Brevity: reduces the length of the translation output for most translations. Available for `TranslateText` only.
   * - Formality: sets the formality level of the translation output.
   * - Profanity: masks profane words and phrases in the translation output.
   *
   * @public
   */
  AppliedSettings?: TranslationSettings | undefined;
}

/**
 * @public
 */
export interface TranslateTextRequest {
  /**
   * The text to translate. The text string can be a maximum of 10,000 bytes long. Depending on your character set, this may be fewer than 10,000 characters.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The name of a terminology list file to add to the translation job. This file provides source terms and the desired translation for each term. A terminology list can contain a maximum of 256 terms. You can use one custom terminology resource in your translation request.
   *
   * Use the ListTerminologies operation to get the available terminology lists.
   *
   * For more information about custom terminology lists, see [Custom terminology](https://docs.aws.amazon.com/translate/latest/dg/how-custom-terminology.html).
   *
   * @public
   */
  TerminologyNames?: string[] | undefined;

  /**
   * The language code for the language of the source text. For a list of language codes, see [Supported languages](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html).
   *
   * To have Amazon Translate determine the source language of your text, you can specify `auto` in the `SourceLanguageCode` field. If you specify `auto`, Amazon Translate will call [Amazon Comprehend](https://docs.aws.amazon.com/comprehend/latest/dg/comprehend-general.html) to determine the source language.
   *
   * > **Note:** If you specify `auto`, you must send the `TranslateText` request in a region that supports Amazon Comprehend. Otherwise, the request returns an error indicating that autodetect is not supported.
   *
   * @public
   */
  SourceLanguageCode: string | undefined;

  /**
   * The language code requested for the language of the target text. For a list of language codes, see [Supported languages](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html).
   *
   * @public
   */
  TargetLanguageCode: string | undefined;

  /**
   * Settings to configure your translation output. You can configure the following options:
   *
   * - Brevity: reduces the length of the translated output for most translations.
   * - Formality: sets the formality level of the output text.
   * - Profanity: masks profane words and phrases in your translation output.
   *
   * @public
   */
  Settings?: TranslationSettings | undefined;
}

/**
 * @public
 */
export interface TranslateTextResponse {
  /**
   * The translated text.
   *
   * @public
   */
  TranslatedText: string | undefined;

  /**
   * The language code for the language of the source text.
   *
   * @public
   */
  SourceLanguageCode: string | undefined;

  /**
   * The language code for the language of the target text.
   *
   * @public
   */
  TargetLanguageCode: string | undefined;

  /**
   * The names of the custom terminologies applied to the input text by Amazon Translate for the translated text response.
   *
   * @public
   */
  AppliedTerminologies?: AppliedTerminology[] | undefined;

  /**
   * Optional settings that modify the translation output.
   *
   * @public
   */
  AppliedSettings?: TranslationSettings | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the given Amazon Translate resource from which you want to remove the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The initial part of a key-value pair that forms a tag being removed from a given resource. Keys must be unique and cannot be duplicated for a particular resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateParallelDataRequest {
  /**
   * The name of the parallel data resource being updated.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A custom description for the parallel data resource in Amazon Translate.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies the format and S3 location of the parallel data input file.
   *
   * @public
   */
  ParallelDataConfig: ParallelDataConfig | undefined;

  /**
   * A unique identifier for the request. This token is automatically generated when you use Amazon Translate through an AWS SDK.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateParallelDataResponse {
  /**
   * The name of the parallel data resource being updated.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the parallel data resource that you are attempting to update. Your update request is accepted only if this status is either `ACTIVE` or `FAILED`.
   *
   * @public
   */
  Status?: ParallelDataStatus | undefined;

  /**
   * The status of the parallel data update attempt. When the updated parallel data resource is ready for you to use, the status is `ACTIVE`.
   *
   * @public
   */
  LatestUpdateAttemptStatus?: ParallelDataStatus | undefined;

  /**
   * The time that the most recent update was attempted.
   *
   * @public
   */
  LatestUpdateAttemptAt?: Date | undefined;
}
