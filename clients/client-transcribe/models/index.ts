import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Your request didn't pass one or more validation tests. For example, if the
 *             transcription you're trying to delete doesn't exist or if it is in a non-terminal state
 *             (for example, it's "in progress"). See the exception <code>Message</code> field for more
 *             information.</p>
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return __isa(o, "BadRequestException");
  }
}

/**
 * <p>When you are using the <code>CreateVocabulary</code> operation, the
 *                 <code>JobName</code> field is a duplicate of a previously entered job name. Resend
 *             your request with a different name.</p>
 *         <p>When you are using the <code>UpdateVocabulary</code> operation, there are two jobs
 *             running at the same time. Resend the second request later.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export function isa(o: any): o is ConflictException {
    return __isa(o, "ConflictException");
  }
}

export interface CreateVocabularyFilterRequest {
  __type?: "CreateVocabularyFilterRequest";
  /**
   * <p>The language code of the words in the vocabulary filter. All words in the filter must
   *             be in the same language. The vocabulary filter can only be used with transcription jobs
   *             in the specified language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The Amazon S3 location of a text file used as input to create the vocabulary filter.
   *             Only use characters from the character set defined for custom vocabularies. For a list of
   *             character sets, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-vocabulary.html#charsets">Character Sets for Custom
   *                 Vocabularies</a>.</p>
   *         <p>The specified file must be less than 50 KB of UTF-8 characters.</p>
   *         <p>If you provide the location of a list of words in the
   *                 <code>VocabularyFilterFileUri</code> parameter, you can't use the <code>Words</code>
   *             parameter.</p>
   */
  VocabularyFilterFileUri?: string;

  /**
   * <p>The vocabulary filter name. The name must be unique within the account that contains
   *             it.</p>
   */
  VocabularyFilterName: string | undefined;

  /**
   * <p>The words to use in the vocabulary filter. Only use characters from the character set
   *             defined for custom vocabularies. For a list of character sets, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-vocabulary.html#charsets">Character Sets for Custom Vocabularies</a>.</p>
   *         <p>If you provide a list of words in the <code>Words</code> parameter, you can't use the
   *                 <code>VocabularyFilterFileUri</code> parameter.</p>
   */
  Words?: Array<string>;
}

export namespace CreateVocabularyFilterRequest {
  export function isa(o: any): o is CreateVocabularyFilterRequest {
    return __isa(o, "CreateVocabularyFilterRequest");
  }
}

export interface CreateVocabularyFilterResponse {
  __type?: "CreateVocabularyFilterResponse";
  /**
   * <p>The language code of the words in the collection.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the vocabulary filter was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the vocabulary filter.</p>
   */
  VocabularyFilterName?: string;
}

export namespace CreateVocabularyFilterResponse {
  export function isa(o: any): o is CreateVocabularyFilterResponse {
    return __isa(o, "CreateVocabularyFilterResponse");
  }
}

export interface CreateVocabularyRequest {
  __type?: "CreateVocabularyRequest";
  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>An array of strings that contains the vocabulary entries. </p>
   */
  Phrases?: Array<string>;

  /**
   * <p>The S3 location of the text file that contains the definition of the custom
   *             vocabulary. The URI must be in the same region as the API endpoint that you are calling.
   *             The general form is </p>
   *         <p>
   *             <code>
   *                 https://s3.<aws-region>.amazonaws.com/<bucket-name>/<keyprefix>/<objectkey>
   *             </code>
   *         </p>
   *         <p>For example:</p>
   *         <p>
   *             <code>https://s3.us-east-1.amazonaws.com/examplebucket/vocab.txt</code>
   *          </p>
   *         <p>For more information about S3 object names, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   *         <p>For more information about custom vocabularies, see <a href="http://docs.aws.amazon.com/transcribe/latest/dg/how-it-works.html#how-vocabulary">Custom Vocabularies</a>.</p>
   */
  VocabularyFileUri?: string;

  /**
   * <p>The name of the vocabulary. The name must be unique within an AWS account. The name is
   *             case-sensitive.</p>
   */
  VocabularyName: string | undefined;
}

export namespace CreateVocabularyRequest {
  export function isa(o: any): o is CreateVocabularyRequest {
    return __isa(o, "CreateVocabularyRequest");
  }
}

export interface CreateVocabularyResponse {
  __type?: "CreateVocabularyResponse";
  /**
   * <p>If the <code>VocabularyState</code> field is <code>FAILED</code>, this field contains
   *             information about why the job failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the vocabulary was created.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the vocabulary.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The processing state of the vocabulary. When the <code>VocabularyState</code> field
   *             contains <code>READY</code> the vocabulary is ready to be used in a
   *                 <code>StartTranscriptionJob</code> request.</p>
   */
  VocabularyState?: VocabularyState | string;
}

export namespace CreateVocabularyResponse {
  export function isa(o: any): o is CreateVocabularyResponse {
    return __isa(o, "CreateVocabularyResponse");
  }
}

export interface DeleteTranscriptionJobRequest {
  __type?: "DeleteTranscriptionJobRequest";
  /**
   * <p>The name of the transcription job to be deleted.</p>
   */
  TranscriptionJobName: string | undefined;
}

export namespace DeleteTranscriptionJobRequest {
  export function isa(o: any): o is DeleteTranscriptionJobRequest {
    return __isa(o, "DeleteTranscriptionJobRequest");
  }
}

export interface DeleteVocabularyFilterRequest {
  __type?: "DeleteVocabularyFilterRequest";
  /**
   * <p>The name of the vocabulary filter to remove.</p>
   */
  VocabularyFilterName: string | undefined;
}

export namespace DeleteVocabularyFilterRequest {
  export function isa(o: any): o is DeleteVocabularyFilterRequest {
    return __isa(o, "DeleteVocabularyFilterRequest");
  }
}

export interface DeleteVocabularyRequest {
  __type?: "DeleteVocabularyRequest";
  /**
   * <p>The name of the vocabulary to delete. </p>
   */
  VocabularyName: string | undefined;
}

export namespace DeleteVocabularyRequest {
  export function isa(o: any): o is DeleteVocabularyRequest {
    return __isa(o, "DeleteVocabularyRequest");
  }
}

export interface GetTranscriptionJobRequest {
  __type?: "GetTranscriptionJobRequest";
  /**
   * <p>The name of the job.</p>
   */
  TranscriptionJobName: string | undefined;
}

export namespace GetTranscriptionJobRequest {
  export function isa(o: any): o is GetTranscriptionJobRequest {
    return __isa(o, "GetTranscriptionJobRequest");
  }
}

export interface GetTranscriptionJobResponse {
  __type?: "GetTranscriptionJobResponse";
  /**
   * <p>An object that contains the results of the transcription job.</p>
   */
  TranscriptionJob?: TranscriptionJob;
}

export namespace GetTranscriptionJobResponse {
  export function isa(o: any): o is GetTranscriptionJobResponse {
    return __isa(o, "GetTranscriptionJobResponse");
  }
}

export interface GetVocabularyFilterRequest {
  __type?: "GetVocabularyFilterRequest";
  /**
   * <p>The name of the vocabulary filter for which to return information.</p>
   */
  VocabularyFilterName: string | undefined;
}

export namespace GetVocabularyFilterRequest {
  export function isa(o: any): o is GetVocabularyFilterRequest {
    return __isa(o, "GetVocabularyFilterRequest");
  }
}

export interface GetVocabularyFilterResponse {
  __type?: "GetVocabularyFilterResponse";
  /**
   * <p>The URI of the list of words in the vocabulary filter. You can use this URI to get the
   *             list of words.</p>
   */
  DownloadUri?: string;

  /**
   * <p>The language code of the words in the vocabulary filter.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the contents of the vocabulary filter were updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the vocabulary filter.</p>
   */
  VocabularyFilterName?: string;
}

export namespace GetVocabularyFilterResponse {
  export function isa(o: any): o is GetVocabularyFilterResponse {
    return __isa(o, "GetVocabularyFilterResponse");
  }
}

export interface GetVocabularyRequest {
  __type?: "GetVocabularyRequest";
  /**
   * <p>The name of the vocabulary to return information about. The name is
   *             case-sensitive.</p>
   */
  VocabularyName: string | undefined;
}

export namespace GetVocabularyRequest {
  export function isa(o: any): o is GetVocabularyRequest {
    return __isa(o, "GetVocabularyRequest");
  }
}

export interface GetVocabularyResponse {
  __type?: "GetVocabularyResponse";
  /**
   * <p>The S3 location where the vocabulary is stored. Use this URI to get the contents of
   *             the vocabulary. The URI is available for a limited time.</p>
   */
  DownloadUri?: string;

  /**
   * <p>If the <code>VocabularyState</code> field is <code>FAILED</code>, this field contains
   *             information about why the job failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the vocabulary was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the vocabulary to return.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The processing state of the vocabulary.</p>
   */
  VocabularyState?: VocabularyState | string;
}

export namespace GetVocabularyResponse {
  export function isa(o: any): o is GetVocabularyResponse {
    return __isa(o, "GetVocabularyResponse");
  }
}

/**
 * <p>There was an internal error. Check the error message and try your request
 *             again.</p>
 */
export interface InternalFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  Message?: string;
}

export namespace InternalFailureException {
  export function isa(o: any): o is InternalFailureException {
    return __isa(o, "InternalFailureException");
  }
}

/**
 * <p>Provides information about when a transcription job should be executed.</p>
 */
export interface JobExecutionSettings {
  __type?: "JobExecutionSettings";
  /**
   * <p>Indicates whether a job should be queued by Amazon Transcribe when the concurrent execution limit
   *             is exceeded. When the <code>AllowDeferredExecution</code> field is true, jobs are queued
   *             and will be executed when the number of executing jobs falls below the concurrent
   *             execution limit. If the field is false, Amazon Transcribe returns a
   *                 <code>LimitExceededException</code> exception.</p>
   *         <p>If you specify the <code>AllowDeferredExecution</code> field, you must specify the
   *                 <code>DataAccessRoleArn</code> field.</p>
   */
  AllowDeferredExecution?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of a role that has access to the S3 bucket that
   *             contains the input files. Amazon Transcribe will assume this role to read queued media files. If you
   *             have specified an output S3 bucket for the transcription results, this role should have
   *             access to the output bucket as well.</p>
   *         <p>If you specify the <code>AllowDeferredExecution</code> field, you must specify the
   *                 <code>DataAccessRoleArn</code> field.</p>
   */
  DataAccessRoleArn?: string;
}

export namespace JobExecutionSettings {
  export function isa(o: any): o is JobExecutionSettings {
    return __isa(o, "JobExecutionSettings");
  }
}

export enum LanguageCode {
  AR_AE = "ar-AE",
  AR_SA = "ar-SA",
  DE_CH = "de-CH",
  DE_DE = "de-DE",
  EN_AB = "en-AB",
  EN_AU = "en-AU",
  EN_GB = "en-GB",
  EN_IE = "en-IE",
  EN_IN = "en-IN",
  EN_US = "en-US",
  EN_WL = "en-WL",
  ES_ES = "es-ES",
  ES_US = "es-US",
  FA_IR = "fa-IR",
  FR_CA = "fr-CA",
  FR_FR = "fr-FR",
  HE_IL = "he-IL",
  HI_IN = "hi-IN",
  ID_ID = "id-ID",
  IT_IT = "it-IT",
  JA_JP = "ja-JP",
  KO_KR = "ko-KR",
  MS_MY = "ms-MY",
  NL_NL = "nl-NL",
  PT_BR = "pt-BR",
  PT_PT = "pt-PT",
  RU_RU = "ru-RU",
  TA_IN = "ta-IN",
  TE_IN = "te-IN",
  TR_TR = "tr-TR",
  ZH_CN = "zh-CN"
}

/**
 * <p>Either you have sent too many requests or your input file is too long. Wait before you
 *             resend your request, or use a smaller file and resend the request.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

export interface ListTranscriptionJobsRequest {
  __type?: "ListTranscriptionJobsRequest";
  /**
   * <p>When specified, the jobs returned in the list are limited to jobs whose name contains
   *             the specified string.</p>
   */
  JobNameContains?: string;

  /**
   * <p>The maximum number of jobs to return in the response. If there are fewer results in
   *             the list, this response contains only the actual results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous request to <code>ListTranscriptionJobs</code> was
   *             truncated, include the <code>NextToken</code> to fetch the next set of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>When specified, returns only transcription jobs with the specified status. Jobs are
   *             ordered by creation date, with the newest jobs returned first. If you don’t specify a
   *             status, Amazon Transcribe returns all transcription jobs ordered by creation date. </p>
   */
  Status?: TranscriptionJobStatus | string;
}

export namespace ListTranscriptionJobsRequest {
  export function isa(o: any): o is ListTranscriptionJobsRequest {
    return __isa(o, "ListTranscriptionJobsRequest");
  }
}

export interface ListTranscriptionJobsResponse {
  __type?: "ListTranscriptionJobsResponse";
  /**
   * <p>The <code>ListTranscriptionJobs</code> operation returns a page of jobs at a time. The
   *             maximum size of the page is set by the <code>MaxResults</code> parameter. If there are
   *             more jobs in the list than the page size, Amazon Transcribe returns the <code>NextPage</code> token.
   *             Include the token in the next request to the <code>ListTranscriptionJobs</code>
   *             operation to return in the next page of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>The requested status of the jobs returned.</p>
   */
  Status?: TranscriptionJobStatus | string;

  /**
   * <p>A list of objects containing summary information for a transcription job.</p>
   */
  TranscriptionJobSummaries?: Array<TranscriptionJobSummary>;
}

export namespace ListTranscriptionJobsResponse {
  export function isa(o: any): o is ListTranscriptionJobsResponse {
    return __isa(o, "ListTranscriptionJobsResponse");
  }
}

export interface ListVocabulariesRequest {
  __type?: "ListVocabulariesRequest";
  /**
   * <p>The maximum number of vocabularies to return in the response. If there are fewer
   *             results in the list, this response contains only the actual results.</p>
   */
  MaxResults?: number;

  /**
   * <p>When specified, the vocabularies returned in the list are limited to vocabularies
   *             whose name contains the specified string. The search is case-insensitive,
   *                 <code>ListVocabularies</code> will return both "vocabularyname" and "VocabularyName"
   *             in the response list.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous request to <code>ListVocabularies</code> was truncated,
   *             include the <code>NextToken</code> to fetch the next set of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>When specified, only returns vocabularies with the <code>VocabularyState</code> field
   *             equal to the specified state.</p>
   */
  StateEquals?: VocabularyState | string;
}

export namespace ListVocabulariesRequest {
  export function isa(o: any): o is ListVocabulariesRequest {
    return __isa(o, "ListVocabulariesRequest");
  }
}

export interface ListVocabulariesResponse {
  __type?: "ListVocabulariesResponse";
  /**
   * <p>The <code>ListVocabularies</code> operation returns a page of vocabularies at a time.
   *             The maximum size of the page is set by the <code>MaxResults</code> parameter. If there
   *             are more jobs in the list than the page size, Amazon Transcribe returns the <code>NextPage</code>
   *             token. Include the token in the next request to the <code>ListVocabularies</code>
   *             operation to return in the next page of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>The requested vocabulary state.</p>
   */
  Status?: TranscriptionJobStatus | string;

  /**
   * <p>A list of objects that describe the vocabularies that match the search criteria in the
   *             request.</p>
   */
  Vocabularies?: Array<VocabularyInfo>;
}

export namespace ListVocabulariesResponse {
  export function isa(o: any): o is ListVocabulariesResponse {
    return __isa(o, "ListVocabulariesResponse");
  }
}

export interface ListVocabularyFiltersRequest {
  __type?: "ListVocabularyFiltersRequest";
  /**
   * <p>The maximum number of filters to return in the response. If there are fewer results in
   *             the list, this response contains only the actual results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters the response so that it only contains vocabulary filters whose name contains
   *             the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous request to <code>ListVocabularyFilters</code> was
   *             truncated, include the <code>NextToken</code> to fetch the next set of
   *             collections.</p>
   */
  NextToken?: string;
}

export namespace ListVocabularyFiltersRequest {
  export function isa(o: any): o is ListVocabularyFiltersRequest {
    return __isa(o, "ListVocabularyFiltersRequest");
  }
}

export interface ListVocabularyFiltersResponse {
  __type?: "ListVocabularyFiltersResponse";
  /**
   * <p>The <code>ListVocabularyFilters</code> operation returns a page of collections at a
   *             time. The maximum size of the page is set by the <code>MaxResults</code> parameter. If
   *             there are more jobs in the list than the page size, Amazon Transcribe returns the
   *                 <code>NextPage</code> token. Include the token in the next request to the
   *                 <code>ListVocabularyFilters</code> operation to return in the next page of
   *             jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of vocabulary filters. It will contain at most <code>MaxResults</code> number
   *             of filters. If there are more filters, call the <code>ListVocabularyFilters</code>
   *             operation again with the <code>NextToken</code> parameter in the request set to the
   *             value of the <code>NextToken</code> field in the response.</p>
   */
  VocabularyFilters?: Array<VocabularyFilterInfo>;
}

export namespace ListVocabularyFiltersResponse {
  export function isa(o: any): o is ListVocabularyFiltersResponse {
    return __isa(o, "ListVocabularyFiltersResponse");
  }
}

/**
 * <p>Describes the input media file in a transcription request.</p>
 */
export interface Media {
  __type?: "Media";
  /**
   * <p>The S3 location of the input media file. The URI must be in the same region as the API
   *             endpoint that you are calling. The general form is:</p>
   *         <p>
   *             <code>
   *                 https://s3.<aws-region>.amazonaws.com/<bucket-name>/<keyprefix>/<objectkey>
   *             </code>
   *         </p>
   *         <p>For example:</p>
   *         <p>
   *             <code>https://s3.us-east-1.amazonaws.com/examplebucket/example.mp4</code>
   *          </p>
   *         <p>
   *             <code>https://s3.us-east-1.amazonaws.com/examplebucket/mediadocs/example.mp4</code>
   *          </p>
   *         <p>For more information about S3 object names, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  MediaFileUri?: string;
}

export namespace Media {
  export function isa(o: any): o is Media {
    return __isa(o, "Media");
  }
}

export enum MediaFormat {
  FLAC = "flac",
  MP3 = "mp3",
  MP4 = "mp4",
  WAV = "wav"
}

/**
 * <p>We can't find the requested resource. Check the name and try your request
 *             again.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
}

export enum OutputLocationType {
  CUSTOMER_BUCKET = "CUSTOMER_BUCKET",
  SERVICE_BUCKET = "SERVICE_BUCKET"
}

/**
 * <p>Provides optional settings for the <code>StartTranscriptionJob</code>
 *             operation.</p>
 */
export interface Settings {
  __type?: "Settings";
  /**
   * <p>Instructs Amazon Transcribe to process each audio channel separately and then merge the
   *             transcription output of each channel into a single transcription. </p>
   *         <p>Amazon Transcribe also produces a transcription of each item detected on an audio channel,
   *             including the start time and end time of the item and alternative transcriptions of the
   *             item including the confidence that Amazon Transcribe has in the transcription.</p>
   *         <p>You can't set both <code>ShowSpeakerLabels</code> and
   *                 <code>ChannelIdentification</code> in the same request. If you set both, your
   *             request returns a <code>BadRequestException</code>.</p>
   */
  ChannelIdentification?: boolean;

  /**
   * <p>The number of alternative transcriptions that the service should return. If you
   *         specify the <code>MaxAlternatives</code> field, you must set the <code>ShowAlternatives</code>
   *         field to true.</p>
   */
  MaxAlternatives?: number;

  /**
   * <p>The maximum number of speakers to identify in the input audio. If there are more
   *             speakers in the audio than this number, multiple speakers will be identified as a single
   *             speaker. If you specify the <code>MaxSpeakerLabels</code> field, you must set the
   *                 <code>ShowSpeakerLabels</code> field to true.</p>
   */
  MaxSpeakerLabels?: number;

  /**
   * <p>Determines whether the transcription contains alternative transcriptions. If you set
   *             the <code>ShowAlternatives</code> field to true, you must also set the maximum number of
   *             alternatives to return in the <code>MaxAlternatives</code> field.</p>
   */
  ShowAlternatives?: boolean;

  /**
   * <p>Determines whether the transcription job uses speaker recognition to identify
   *             different speakers in the input audio. Speaker recognition labels individual speakers in
   *             the audio file. If you set the <code>ShowSpeakerLabels</code> field to true, you must
   *             also set the maximum number of speaker labels <code>MaxSpeakerLabels</code>
   *             field.</p>
   *         <p>You can't set both <code>ShowSpeakerLabels</code> and
   *                 <code>ChannelIdentification</code> in the same request. If you set both, your
   *             request returns a <code>BadRequestException</code>.</p>
   */
  ShowSpeakerLabels?: boolean;

  /**
   * <p>Set to <code>mask</code> to remove filtered text from the transcript and replace it
   *             with three asterisks ("***") as placeholder text. Set to <code>remove</code> to remove
   *             filtered text from the transcript without using placeholder text.</p>
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | string;

  /**
   * <p>The name of the vocabulary filter to use when transcribing the audio. The filter that
   *             you specify must have the same language code as the transcription job.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The name of a vocabulary to use when processing the transcription job.</p>
   */
  VocabularyName?: string;
}

export namespace Settings {
  export function isa(o: any): o is Settings {
    return __isa(o, "Settings");
  }
}

export interface StartTranscriptionJobRequest {
  __type?: "StartTranscriptionJobRequest";
  /**
   * <p>Provides information about how a transcription job is executed. Use this field to
   *             indicate that the job can be queued for deferred execution if the concurrency limit is
   *             reached and there are no slots available to immediately run the job.</p>
   */
  JobExecutionSettings?: JobExecutionSettings;

  /**
   * <p>The language code for the language used in the input media file.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>An object that describes the input media for a transcription job.</p>
   */
  Media: Media | undefined;

  /**
   * <p>The format of the input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>The sample rate, in Hertz, of the audio track in the input media file. </p>
   *         <p>If you do not specify the media sample rate, Amazon Transcribe determines the sample rate. If you
   *             specify the sample rate, it must match the sample rate detected by Amazon Transcribe. In most cases,
   *             you should leave the <code>MediaSampleRateHertz</code> field blank and let Amazon Transcribe
   *             determine the sample rate.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>The location where the transcription is stored.</p>
   *         <p>If you set the <code>OutputBucketName</code>, Amazon Transcribe puts the transcription in the
   *             specified S3 bucket. When you call the <a>GetTranscriptionJob</a> operation,
   *             the operation returns this location in the <code>TranscriptFileUri</code> field. The S3
   *             bucket must have permissions that allow Amazon Transcribe to put files in the bucket. For more
   *             information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user">Permissions Required for IAM User Roles</a>.</p>
   *         <p>You can specify an AWS Key Management Service (KMS) key to encrypt the output of your
   *             transcription using the <code>OutputEncryptionKMSKeyId</code> parameter. If you don't
   *             specify a KMS key, Amazon Transcribe uses the default Amazon S3 key for server-side encryption of
   *             transcripts that are placed in your S3 bucket.</p>
   *         <p>If you don't set the <code>OutputBucketName</code>, Amazon Transcribe generates a pre-signed URL,
   *             a shareable URL that provides secure access to your transcription, and returns it in the
   *                 <code>TranscriptFileUri</code> field. Use this URL to download the
   *             transcription.</p>
   */
  OutputBucketName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key used to
   *             encrypt the output of the transcription job. The user calling the
   *                 <code>StartTranscriptionJob</code> operation must have permission to use the
   *             specified KMS key.</p>
   *         <p>You can use either of the following to identify a KMS key in the current
   *             account:</p>
   *         <ul>
   *             <li>
   *                 <p>KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"</p>
   *             </li>
   *             <li>
   *                 <p>KMS Key Alias: "alias/ExampleAlias"</p>
   *             </li>
   *          </ul>
   *         <p>You can use either of the following to identify a KMS key in the current account or
   *             another account:</p>
   *         <ul>
   *             <li>
   *                 <p>Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:region:account
   *                     ID:key/1234abcd-12ab-34cd-56ef-1234567890ab"</p>
   *             </li>
   *             <li>
   *                 <p>ARN of a KMS Key Alias: "arn:aws:kms:region:account
   *                     ID:alias/ExampleAlias"</p>
   *             </li>
   *          </ul>
   *         <p>If you don't specify an encryption key, the output of the transcription job is
   *             encrypted with the default Amazon S3 key (SSE-S3). </p>
   *         <p>If you specify a KMS key to encrypt your output, you must also specify an output
   *             location in the <code>OutputBucketName</code> parameter.</p>
   */
  OutputEncryptionKMSKeyId?: string;

  /**
   * <p>A <code>Settings</code> object that provides optional settings for a transcription
   *             job.</p>
   */
  Settings?: Settings;

  /**
   * <p>The name of the job. Note that you can't use the strings "." or ".." by themselves as
   *             the job name. The name must also be unique within an AWS account.</p>
   */
  TranscriptionJobName: string | undefined;
}

export namespace StartTranscriptionJobRequest {
  export function isa(o: any): o is StartTranscriptionJobRequest {
    return __isa(o, "StartTranscriptionJobRequest");
  }
}

export interface StartTranscriptionJobResponse {
  __type?: "StartTranscriptionJobResponse";
  /**
   * <p>An object containing details of the asynchronous transcription job.</p>
   */
  TranscriptionJob?: TranscriptionJob;
}

export namespace StartTranscriptionJobResponse {
  export function isa(o: any): o is StartTranscriptionJobResponse {
    return __isa(o, "StartTranscriptionJobResponse");
  }
}

/**
 * <p>Identifies the location of a transcription.</p>
 */
export interface Transcript {
  __type?: "Transcript";
  /**
   * <p>The location where the transcription is stored.</p>
   *         <p>Use this URI to access the transcription. If you specified an S3 bucket in the
   *                 <code>OutputBucketName</code> field when you created the job, this is the URI of
   *             that bucket. If you chose to store the transcription in Amazon Transcribe, this is a shareable URL
   *             that provides secure access to that location.</p>
   */
  TranscriptFileUri?: string;
}

export namespace Transcript {
  export function isa(o: any): o is Transcript {
    return __isa(o, "Transcript");
  }
}

/**
 * <p>Describes an asynchronous transcription job that was created with the
 *                 <code>StartTranscriptionJob</code> operation. </p>
 */
export interface TranscriptionJob {
  __type?: "TranscriptionJob";
  /**
   * <p>A timestamp that shows when the job was completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>If the <code>TranscriptionJobStatus</code> field is <code>FAILED</code>, this field
   *             contains information about why the job failed.</p>
   *         <p>The <code>FailureReason</code> field can contain one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Unsupported media format</code> - The media format specified in the
   *                         <code>MediaFormat</code> field of the request isn't valid. See the
   *                     description of the <code>MediaFormat</code> field for a list of valid
   *                     values.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>The media format provided does not match the detected media
   *                         format</code> - The media format of the audio file doesn't match the format
   *                     specified in the <code>MediaFormat</code> field in the request. Check the media
   *                     format of your media file and make sure that the two values match.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid sample rate for audio file</code> - The sample rate specified in
   *                     the <code>MediaSampleRateHertz</code> of the request isn't valid. The sample
   *                     rate must be between 8000 and 48000 Hertz.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>The sample rate provided does not match the detected sample rate</code>
   *                     - The sample rate in the audio file doesn't match the sample rate specified in
   *                     the <code>MediaSampleRateHertz</code> field in the request. Check the sample
   *                     rate of your media file and make sure that the two values match.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid file size: file size too large</code> - The size of your audio
   *                     file is larger than Amazon Transcribe can process. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/limits-guidelines.html#limits">Limits</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid number of channels: number of channels too large</code> - Your
   *                     audio contains more channels than Amazon Transcribe is configured to process. To request
   *                     additional channels, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits-amazon-transcribe">Amazon Transcribe Limits</a> in the <i>Amazon Web Services
   *                         General Reference</i>.</p>
   *             </li>
   *          </ul>
   */
  FailureReason?: string;

  /**
   * <p>Provides information about how a transcription job is executed.</p>
   */
  JobExecutionSettings?: JobExecutionSettings;

  /**
   * <p>The language code for the input speech.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>An object that describes the input media for the transcription job.</p>
   */
  Media?: Media;

  /**
   * <p>The format of the input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>The sample rate, in Hertz, of the audio track in the input media file. </p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>Optional settings for the transcription job. Use these settings to turn on speaker
   *             recognition, to set the maximum number of speakers that should be identified and to
   *             specify a custom vocabulary to use when processing the transcription job.</p>
   */
  Settings?: Settings;

  /**
   * <p>A timestamp that shows with the job was started processing.</p>
   */
  StartTime?: Date;

  /**
   * <p>An object that describes the output of the transcription job.</p>
   */
  Transcript?: Transcript;

  /**
   * <p>The name of the transcription job.</p>
   */
  TranscriptionJobName?: string;

  /**
   * <p>The status of the transcription job.</p>
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | string;
}

export namespace TranscriptionJob {
  export function isa(o: any): o is TranscriptionJob {
    return __isa(o, "TranscriptionJob");
  }
}

export enum TranscriptionJobStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  QUEUED = "QUEUED"
}

/**
 * <p>Provides a summary of information about a transcription job.</p>
 */
export interface TranscriptionJobSummary {
  __type?: "TranscriptionJobSummary";
  /**
   * <p>A timestamp that shows when the job was completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>If the <code>TranscriptionJobStatus</code> field is <code>FAILED</code>, a description
   *             of the error.</p>
   */
  FailureReason?: string;

  /**
   * <p>The language code for the input speech.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>Indicates the location of the output of the transcription job.</p>
   *         <p>If the value is <code>CUSTOMER_BUCKET</code> then the location is the S3 bucket
   *             specified in the <code>outputBucketName</code> field when the transcription job was
   *             started with the <code>StartTranscriptionJob</code> operation.</p>
   *         <p>If the value is <code>SERVICE_BUCKET</code> then the output is stored by Amazon Transcribe and can
   *             be retrieved using the URI in the <code>GetTranscriptionJob</code> response's
   *                 <code>TranscriptFileUri</code> field.</p>
   */
  OutputLocationType?: OutputLocationType | string;

  /**
   * <p>A timestamp that shows when the job started processing.</p>
   */
  StartTime?: Date;

  /**
   * <p>The name of the transcription job.</p>
   */
  TranscriptionJobName?: string;

  /**
   * <p>The status of the transcription job. When the status is <code>COMPLETED</code>, use
   *             the <code>GetTranscriptionJob</code> operation to get the results of the
   *             transcription.</p>
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | string;
}

export namespace TranscriptionJobSummary {
  export function isa(o: any): o is TranscriptionJobSummary {
    return __isa(o, "TranscriptionJobSummary");
  }
}

export interface UpdateVocabularyFilterRequest {
  __type?: "UpdateVocabularyFilterRequest";
  /**
   * <p>The Amazon S3 location of a text file used as input to create the vocabulary filter.
   *             Only use characters from the character set defined for custom vocabularies. For a list of
   *             character sets, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-vocabulary.html#charsets">Character Sets for Custom
   *                 Vocabularies</a>.</p>
   *         <p>The specified file must be less than 50 KB of UTF-8 characters.</p>
   *         <p>If you provide the location of a list of words in the
   *                 <code>VocabularyFilterFileUri</code> parameter, you can't use the <code>Words</code>
   *             parameter.</p>
   */
  VocabularyFilterFileUri?: string;

  /**
   * <p>The name of the vocabulary filter to update.</p>
   */
  VocabularyFilterName: string | undefined;

  /**
   * <p>The words to use in the vocabulary filter. Only use characters from the character set
   *             defined for custom vocabularies. For a list of character sets, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-vocabulary.html#charsets">Character Sets for Custom Vocabularies</a>.</p>
   *         <p>If you provide a list of words in the <code>Words</code> parameter, you can't use the
   *                 <code>VocabularyFilterFileUri</code> parameter.</p>
   */
  Words?: Array<string>;
}

export namespace UpdateVocabularyFilterRequest {
  export function isa(o: any): o is UpdateVocabularyFilterRequest {
    return __isa(o, "UpdateVocabularyFilterRequest");
  }
}

export interface UpdateVocabularyFilterResponse {
  __type?: "UpdateVocabularyFilterResponse";
  /**
   * <p>The language code of the words in the vocabulary filter.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the vocabulary filter was updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the updated vocabulary filter.</p>
   */
  VocabularyFilterName?: string;
}

export namespace UpdateVocabularyFilterResponse {
  export function isa(o: any): o is UpdateVocabularyFilterResponse {
    return __isa(o, "UpdateVocabularyFilterResponse");
  }
}

export interface UpdateVocabularyRequest {
  __type?: "UpdateVocabularyRequest";
  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>An array of strings containing the vocabulary entries.</p>
   */
  Phrases?: Array<string>;

  /**
   * <p>The S3 location of the text file that contains the definition of the custom
   *             vocabulary. The URI must be in the same region as the API endpoint that you are calling.
   *             The general form is </p>
   *         <p>
   *             <code>
   *                 https://s3.<aws-region>.amazonaws.com/<bucket-name>/<keyprefix>/<objectkey>
   *             </code>
   *         </p>
   *         <p>For example:</p>
   *         <p>
   *             <code>https://s3.us-east-1.amazonaws.com/examplebucket/vocab.txt</code>
   *          </p>
   *         <p>For more information about S3 object names, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   *         <p>For more information about custom vocabularies, see <a href="http://docs.aws.amazon.com/transcribe/latest/dg/how-it-works.html#how-vocabulary">Custom Vocabularies</a>.</p>
   */
  VocabularyFileUri?: string;

  /**
   * <p>The name of the vocabulary to update. The name is case-sensitive.</p>
   */
  VocabularyName: string | undefined;
}

export namespace UpdateVocabularyRequest {
  export function isa(o: any): o is UpdateVocabularyRequest {
    return __isa(o, "UpdateVocabularyRequest");
  }
}

export interface UpdateVocabularyResponse {
  __type?: "UpdateVocabularyResponse";
  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the vocabulary was updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the vocabulary that was updated.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The processing state of the vocabulary. When the <code>VocabularyState</code> field
   *             contains <code>READY</code> the vocabulary is ready to be used in a
   *                 <code>StartTranscriptionJob</code> request.</p>
   */
  VocabularyState?: VocabularyState | string;
}

export namespace UpdateVocabularyResponse {
  export function isa(o: any): o is UpdateVocabularyResponse {
    return __isa(o, "UpdateVocabularyResponse");
  }
}

/**
 * <p>Provides information about a vocabulary filter.</p>
 */
export interface VocabularyFilterInfo {
  __type?: "VocabularyFilterInfo";
  /**
   * <p>The language code of the words in the vocabulary filter.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the vocabulary was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the vocabulary filter. The name must be unique in the account that holds
   *             the filter.</p>
   */
  VocabularyFilterName?: string;
}

export namespace VocabularyFilterInfo {
  export function isa(o: any): o is VocabularyFilterInfo {
    return __isa(o, "VocabularyFilterInfo");
  }
}

export enum VocabularyFilterMethod {
  MASK = "mask",
  REMOVE = "remove"
}

/**
 * <p>Provides information about a custom vocabulary. </p>
 */
export interface VocabularyInfo {
  __type?: "VocabularyInfo";
  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the vocabulary was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the vocabulary.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The processing state of the vocabulary. If the state is <code>READY</code> you can use
   *             the vocabulary in a <code>StartTranscriptionJob</code> request.</p>
   */
  VocabularyState?: VocabularyState | string;
}

export namespace VocabularyInfo {
  export function isa(o: any): o is VocabularyInfo {
    return __isa(o, "VocabularyInfo");
  }
}

export enum VocabularyState {
  FAILED = "FAILED",
  PENDING = "PENDING",
  READY = "READY"
}
