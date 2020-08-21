import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Your request didn't pass one or more validation tests. For example, if the
 *             transcription you're trying to delete doesn't exist or if it is in a non-terminal state
 *             (for example, it's "in progress"). See the exception <code>Message</code> field for more
 *             information.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BadRequestException => __isa(o, "BadRequestException");
}

/**
 * <p>The resource name already exists.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConflictException => __isa(o, "ConflictException");
}

/**
 * <p>Settings for content redaction within a transcription job.</p>
 */
export interface ContentRedaction {
  __type?: "ContentRedaction";
  /**
   * <p>The output transcript file stored in either the default S3 bucket or in a bucket you
   *             specify.</p>
   *         <p>When you choose <code>redacted</code> Amazon Transcribe outputs only the redacted
   *             transcript.</p>
   *         <p>When you choose <code>redacted_and_unredacted</code> Amazon Transcribe outputs both the redacted
   *             and unredacted transcripts.</p>
   */
  RedactionOutput: RedactionOutput | string | undefined;

  /**
   * <p>Request parameter that defines the entities to be redacted. The only accepted value is
   *                 <code>PII</code>.</p>
   */
  RedactionType: RedactionType | string | undefined;
}

export namespace ContentRedaction {
  export const filterSensitiveLog = (obj: ContentRedaction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ContentRedaction => __isa(o, "ContentRedaction");
}

export interface CreateMedicalVocabularyRequest {
  __type?: "CreateMedicalVocabularyRequest";
  /**
   * <p>The Amazon S3 location of the text file you use to define your custom vocabulary. The URI
   *             must be in the same AWS region as the API endpoint you're calling. Enter information
   *             about your <code>VocabularyFileUri</code> in the following format:</p>
   *         <p>
   *             <code>
   *                 https://s3.<aws-region>.amazonaws.com/<bucket-name>/<keyprefix>/<objectkey>
   *             </code>
   *         </p>
   *         <p>This is an example of a vocabulary file uri location in Amazon S3:</p>
   *         <p>
   *             <code>https://s3.us-east-1.amazonaws.com/AWSDOC-EXAMPLE-BUCKET/vocab.txt</code>
   *          </p>
   *         <p>For more information about S3 object names, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   *         <p>For more information about custom vocabularies, see <a href="http://docs.aws.amazon.com/transcribe/latest/dg/how-it-works.html#how-vocabulary-med">Medical Custom Vocabularies</a>.</p>
   */
  VocabularyFileUri: string | undefined;

  /**
   * <p>The language code used for the entries within your custom vocabulary. The language
   *             code of your custom vocabulary must match the language code of your transcription job.
   *             US English (en-US) is the only language code available for Amazon Transcribe Medical.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The name of the custom vocabulary. This case-sensitive name must be unique within an
   *             AWS account. If you try to create a vocabulary with the same name as a previous
   *             vocabulary you will receive a <code>ConflictException</code> error.</p>
   */
  VocabularyName: string | undefined;
}

export namespace CreateMedicalVocabularyRequest {
  export const filterSensitiveLog = (obj: CreateMedicalVocabularyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateMedicalVocabularyRequest => __isa(o, "CreateMedicalVocabularyRequest");
}

export interface CreateMedicalVocabularyResponse {
  __type?: "CreateMedicalVocabularyResponse";
  /**
   * <p>The language code you chose to describe the entries in your custom vocabulary. US
   *             English (en-US) is the only valid language code for Amazon Transcribe Medical.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The name of the vocabulary. The name must be unique within an AWS account. It is also
   *             case-sensitive.</p>
   */
  VocabularyName?: string;

  /**
   * <p>If the <code>VocabularyState</code> field is <code>FAILED</code>, this field contains
   *             information about why the job failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The date and time you created the vocabulary.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The processing state of your custom vocabulary in Amazon Transcribe Medical. If the state is
   *                 <code>READY</code> you can use the vocabulary in a
   *                 <code>StartMedicalTranscriptionJob</code> request.</p>
   */
  VocabularyState?: VocabularyState | string;
}

export namespace CreateMedicalVocabularyResponse {
  export const filterSensitiveLog = (obj: CreateMedicalVocabularyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateMedicalVocabularyResponse => __isa(o, "CreateMedicalVocabularyResponse");
}

export interface CreateVocabularyFilterRequest {
  __type?: "CreateVocabularyFilterRequest";
  /**
   * <p>The Amazon S3 location of a text file used as input to create the vocabulary filter.
   *             Only use characters from the character set defined for custom vocabularies. For a list
   *             of character sets, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-vocabulary.html#charsets">Character Sets for Custom
   *                 Vocabularies</a>.</p>
   *         <p>The specified file must be less than 50 KB of UTF-8 characters.</p>
   *         <p>If you provide the location of a list of words in the
   *                 <code>VocabularyFilterFileUri</code> parameter, you can't use the <code>Words</code>
   *             parameter.</p>
   */
  VocabularyFilterFileUri?: string;

  /**
   * <p>The language code of the words in the vocabulary filter. All words in the filter must
   *             be in the same language. The vocabulary filter can only be used with transcription jobs
   *             in the specified language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The words to use in the vocabulary filter. Only use characters from the character set
   *             defined for custom vocabularies. For a list of character sets, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-vocabulary.html#charsets">Character Sets for Custom Vocabularies</a>.</p>
   *         <p>If you provide a list of words in the <code>Words</code> parameter, you can't use the
   *                 <code>VocabularyFilterFileUri</code> parameter.</p>
   */
  Words?: string[];

  /**
   * <p>The vocabulary filter name. The name must be unique within the account that contains
   *             it.If you try to create a vocabulary filter with the same name as a previous vocabulary
   *             filter you will receive a <code>ConflictException</code> error.</p>
   */
  VocabularyFilterName: string | undefined;
}

export namespace CreateVocabularyFilterRequest {
  export const filterSensitiveLog = (obj: CreateVocabularyFilterRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateVocabularyFilterRequest => __isa(o, "CreateVocabularyFilterRequest");
}

export interface CreateVocabularyFilterResponse {
  __type?: "CreateVocabularyFilterResponse";
  /**
   * <p>The name of the vocabulary filter.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The date and time that the vocabulary filter was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The language code of the words in the collection.</p>
   */
  LanguageCode?: LanguageCode | string;
}

export namespace CreateVocabularyFilterResponse {
  export const filterSensitiveLog = (obj: CreateVocabularyFilterResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateVocabularyFilterResponse => __isa(o, "CreateVocabularyFilterResponse");
}

export interface CreateVocabularyRequest {
  __type?: "CreateVocabularyRequest";
  /**
   * <p>The name of the vocabulary. The name must be unique within an AWS account. The name is
   *             case-sensitive. If you try to create a vocabulary with the same name as a previous
   *             vocabulary you will receive a <code>ConflictException</code> error.</p>
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>An array of strings that contains the vocabulary entries. </p>
   */
  Phrases?: string[];

  /**
   * <p>The S3 location of the text file that contains the definition of the custom
   *             vocabulary. The URI must be in the same region as the API endpoint that you are calling.
   *             The general form is </p>
   *
   *
   *
   *         <p>For more information about S3 object names, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   *         <p>For more information about custom vocabularies, see <a href="http://docs.aws.amazon.com/transcribe/latest/dg/how-it-works.html#how-vocabulary">Custom Vocabularies</a>.</p>
   */
  VocabularyFileUri?: string;
}

export namespace CreateVocabularyRequest {
  export const filterSensitiveLog = (obj: CreateVocabularyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateVocabularyRequest => __isa(o, "CreateVocabularyRequest");
}

export interface CreateVocabularyResponse {
  __type?: "CreateVocabularyResponse";
  /**
   * <p>The date and time that the vocabulary was created.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The processing state of the vocabulary. When the <code>VocabularyState</code> field
   *             contains <code>READY</code> the vocabulary is ready to be used in a
   *                 <code>StartTranscriptionJob</code> request.</p>
   */
  VocabularyState?: VocabularyState | string;

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
   * <p>The name of the vocabulary.</p>
   */
  VocabularyName?: string;
}

export namespace CreateVocabularyResponse {
  export const filterSensitiveLog = (obj: CreateVocabularyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateVocabularyResponse => __isa(o, "CreateVocabularyResponse");
}

export interface DeleteMedicalTranscriptionJobRequest {
  __type?: "DeleteMedicalTranscriptionJobRequest";
  /**
   * <p>The name you provide to the <code>DeleteMedicalTranscriptionJob</code> object to
   *             delete a transcription job.</p>
   */
  MedicalTranscriptionJobName: string | undefined;
}

export namespace DeleteMedicalTranscriptionJobRequest {
  export const filterSensitiveLog = (obj: DeleteMedicalTranscriptionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteMedicalTranscriptionJobRequest =>
    __isa(o, "DeleteMedicalTranscriptionJobRequest");
}

export interface DeleteMedicalVocabularyRequest {
  __type?: "DeleteMedicalVocabularyRequest";
  /**
   * <p>The name of the vocabulary you are choosing to delete.</p>
   */
  VocabularyName: string | undefined;
}

export namespace DeleteMedicalVocabularyRequest {
  export const filterSensitiveLog = (obj: DeleteMedicalVocabularyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteMedicalVocabularyRequest => __isa(o, "DeleteMedicalVocabularyRequest");
}

export interface DeleteTranscriptionJobRequest {
  __type?: "DeleteTranscriptionJobRequest";
  /**
   * <p>The name of the transcription job to be deleted.</p>
   */
  TranscriptionJobName: string | undefined;
}

export namespace DeleteTranscriptionJobRequest {
  export const filterSensitiveLog = (obj: DeleteTranscriptionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteTranscriptionJobRequest => __isa(o, "DeleteTranscriptionJobRequest");
}

export interface DeleteVocabularyFilterRequest {
  __type?: "DeleteVocabularyFilterRequest";
  /**
   * <p>The name of the vocabulary filter to remove.</p>
   */
  VocabularyFilterName: string | undefined;
}

export namespace DeleteVocabularyFilterRequest {
  export const filterSensitiveLog = (obj: DeleteVocabularyFilterRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVocabularyFilterRequest => __isa(o, "DeleteVocabularyFilterRequest");
}

export interface DeleteVocabularyRequest {
  __type?: "DeleteVocabularyRequest";
  /**
   * <p>The name of the vocabulary to delete. </p>
   */
  VocabularyName: string | undefined;
}

export namespace DeleteVocabularyRequest {
  export const filterSensitiveLog = (obj: DeleteVocabularyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVocabularyRequest => __isa(o, "DeleteVocabularyRequest");
}

export interface GetMedicalTranscriptionJobRequest {
  __type?: "GetMedicalTranscriptionJobRequest";
  /**
   * <p>The name of the medical transcription job.</p>
   */
  MedicalTranscriptionJobName: string | undefined;
}

export namespace GetMedicalTranscriptionJobRequest {
  export const filterSensitiveLog = (obj: GetMedicalTranscriptionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMedicalTranscriptionJobRequest => __isa(o, "GetMedicalTranscriptionJobRequest");
}

export interface GetMedicalTranscriptionJobResponse {
  __type?: "GetMedicalTranscriptionJobResponse";
  /**
   * <p>An object that contains the results of the medical transcription job.</p>
   */
  MedicalTranscriptionJob?: MedicalTranscriptionJob;
}

export namespace GetMedicalTranscriptionJobResponse {
  export const filterSensitiveLog = (obj: GetMedicalTranscriptionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMedicalTranscriptionJobResponse =>
    __isa(o, "GetMedicalTranscriptionJobResponse");
}

export interface GetMedicalVocabularyRequest {
  __type?: "GetMedicalVocabularyRequest";
  /**
   * <p>The name of the vocabulary you are trying to get information about. The value you
   *             enter for this request is case-sensitive. </p>
   */
  VocabularyName: string | undefined;
}

export namespace GetMedicalVocabularyRequest {
  export const filterSensitiveLog = (obj: GetMedicalVocabularyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMedicalVocabularyRequest => __isa(o, "GetMedicalVocabularyRequest");
}

export interface GetMedicalVocabularyResponse {
  __type?: "GetMedicalVocabularyResponse";
  /**
   * <p>The Amazon S3 location where the vocabulary is stored. Use this URI to get the contents of
   *             the vocabulary. You can download your vocabulary from the URI for a limited time.</p>
   */
  DownloadUri?: string;

  /**
   * <p>The processing state of the vocabulary.</p>
   */
  VocabularyState?: VocabularyState | string;

  /**
   * <p>The valid name that Amazon Transcribe Medical returns.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The date and time the vocabulary was last modified with a text file different from
   *             what was previously used.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>If the <code>VocabularyState</code> is <code>FAILED</code>, this field contains
   *             information about why the job failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The valid language code returned for your vocabulary entries.</p>
   */
  LanguageCode?: LanguageCode | string;
}

export namespace GetMedicalVocabularyResponse {
  export const filterSensitiveLog = (obj: GetMedicalVocabularyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMedicalVocabularyResponse => __isa(o, "GetMedicalVocabularyResponse");
}

export interface GetTranscriptionJobRequest {
  __type?: "GetTranscriptionJobRequest";
  /**
   * <p>The name of the job.</p>
   */
  TranscriptionJobName: string | undefined;
}

export namespace GetTranscriptionJobRequest {
  export const filterSensitiveLog = (obj: GetTranscriptionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetTranscriptionJobRequest => __isa(o, "GetTranscriptionJobRequest");
}

export interface GetTranscriptionJobResponse {
  __type?: "GetTranscriptionJobResponse";
  /**
   * <p>An object that contains the results of the transcription job.</p>
   */
  TranscriptionJob?: TranscriptionJob;
}

export namespace GetTranscriptionJobResponse {
  export const filterSensitiveLog = (obj: GetTranscriptionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetTranscriptionJobResponse => __isa(o, "GetTranscriptionJobResponse");
}

export interface GetVocabularyFilterRequest {
  __type?: "GetVocabularyFilterRequest";
  /**
   * <p>The name of the vocabulary filter for which to return information.</p>
   */
  VocabularyFilterName: string | undefined;
}

export namespace GetVocabularyFilterRequest {
  export const filterSensitiveLog = (obj: GetVocabularyFilterRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVocabularyFilterRequest => __isa(o, "GetVocabularyFilterRequest");
}

export interface GetVocabularyFilterResponse {
  __type?: "GetVocabularyFilterResponse";
  /**
   * <p>The language code of the words in the vocabulary filter.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The name of the vocabulary filter.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The date and time that the contents of the vocabulary filter were updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The URI of the list of words in the vocabulary filter. You can use this URI to get the
   *             list of words.</p>
   */
  DownloadUri?: string;
}

export namespace GetVocabularyFilterResponse {
  export const filterSensitiveLog = (obj: GetVocabularyFilterResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVocabularyFilterResponse => __isa(o, "GetVocabularyFilterResponse");
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
  export const filterSensitiveLog = (obj: GetVocabularyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVocabularyRequest => __isa(o, "GetVocabularyRequest");
}

export interface GetVocabularyResponse {
  __type?: "GetVocabularyResponse";
  /**
   * <p>The date and time that the vocabulary was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The S3 location where the vocabulary is stored. Use this URI to get the contents of
   *             the vocabulary. The URI is available for a limited time.</p>
   */
  DownloadUri?: string;

  /**
   * <p>The processing state of the vocabulary.</p>
   */
  VocabularyState?: VocabularyState | string;

  /**
   * <p>The name of the vocabulary to return.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>If the <code>VocabularyState</code> field is <code>FAILED</code>, this field contains
   *             information about why the job failed.</p>
   */
  FailureReason?: string;
}

export namespace GetVocabularyResponse {
  export const filterSensitiveLog = (obj: GetVocabularyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVocabularyResponse => __isa(o, "GetVocabularyResponse");
}

/**
 * <p>There was an internal error. Check the error message and try your request
 *             again.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  Message?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalFailureException => __isa(o, "InternalFailureException");
}

/**
 * <p>Provides information about when a transcription job should be executed.</p>
 */
export interface JobExecutionSettings {
  __type?: "JobExecutionSettings";
  /**
   * <p>Indicates whether a job should be queued by Amazon Transcribe when the concurrent execution limit
   *             is exceeded. When the <code>AllowDeferredExecution</code> field is true, jobs are queued
   *             and executed when the number of executing jobs falls below the concurrent execution
   *             limit. If the field is false, Amazon Transcribe returns a <code>LimitExceededException</code>
   *             exception.</p>
   *         <p>If you specify the <code>AllowDeferredExecution</code> field, you must specify the
   *                 <code>DataAccessRoleArn</code> field.</p>
   */
  AllowDeferredExecution?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of a role that has access to the S3 bucket that
   *             contains the input files. Amazon Transcribe assumes this role to read queued media files. If you
   *             have specified an output S3 bucket for the transcription results, this role should have
   *             access to the output bucket as well.</p>
   *         <p>If you specify the <code>AllowDeferredExecution</code> field, you must specify the
   *                 <code>DataAccessRoleArn</code> field.</p>
   */
  DataAccessRoleArn?: string;
}

export namespace JobExecutionSettings {
  export const filterSensitiveLog = (obj: JobExecutionSettings): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JobExecutionSettings => __isa(o, "JobExecutionSettings");
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
  ZH_CN = "zh-CN",
}

/**
 * <p>Either you have sent too many requests or your input file is too long. Wait before you
 *             resend your request, or use a smaller file and resend the request.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
}

export interface ListMedicalTranscriptionJobsRequest {
  __type?: "ListMedicalTranscriptionJobsRequest";
  /**
   * <p>When specified, the jobs returned in the list are limited to jobs whose name contains
   *             the specified string.</p>
   */
  JobNameContains?: string;

  /**
   * <p>When specified, returns only medical transcription jobs with the specified status.
   *             Jobs are ordered by creation date, with the newest jobs returned first. If you don't
   *             specify a status, Amazon Transcribe Medical returns all transcription jobs ordered by creation date.</p>
   */
  Status?: TranscriptionJobStatus | string;

  /**
   * <p>If you a receive a truncated result in the previous request of
   *                 <code>ListMedicalTranscriptionJobs</code>, include <code>NextToken</code> to fetch
   *             the next set of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of medical transcription jobs to return in the response. IF there
   *             are fewer results in the list, this response contains only the actual results.</p>
   */
  MaxResults?: number;
}

export namespace ListMedicalTranscriptionJobsRequest {
  export const filterSensitiveLog = (obj: ListMedicalTranscriptionJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMedicalTranscriptionJobsRequest =>
    __isa(o, "ListMedicalTranscriptionJobsRequest");
}

export interface ListMedicalTranscriptionJobsResponse {
  __type?: "ListMedicalTranscriptionJobsResponse";
  /**
   * <p>The <code>ListMedicalTranscriptionJobs</code> operation returns a page of jobs at a
   *             time. The maximum size of the page is set by the <code>MaxResults</code> parameter. If
   *             the number of jobs exceeds what can fit on a page, Amazon Transcribe Medical returns the
   *                 <code>NextPage</code> token. Include the token in the next request to the
   *                 <code>ListMedicalTranscriptionJobs</code> operation to return in the next page of
   *             jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of objects containing summary information for a transcription job.</p>
   */
  MedicalTranscriptionJobSummaries?: MedicalTranscriptionJobSummary[];

  /**
   * <p>The requested status of the medical transcription jobs returned.</p>
   */
  Status?: TranscriptionJobStatus | string;
}

export namespace ListMedicalTranscriptionJobsResponse {
  export const filterSensitiveLog = (obj: ListMedicalTranscriptionJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMedicalTranscriptionJobsResponse =>
    __isa(o, "ListMedicalTranscriptionJobsResponse");
}

export interface ListMedicalVocabulariesRequest {
  __type?: "ListMedicalVocabulariesRequest";
  /**
   * <p>The maximum number of vocabularies to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>When specified, only returns vocabularies with the <code>VocabularyState</code> equal
   *             to the specified vocabulary state.</p>
   */
  StateEquals?: VocabularyState | string;

  /**
   * <p>Returns vocabularies in the list whose name contains the specified string. The search
   *             is case-insensitive, <code>ListMedicalVocabularies</code> returns both "vocabularyname"
   *             and "VocabularyName" in the response list.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of your previous request to <code>ListMedicalVocabularies</code> was
   *             truncated, include the <code>NextToken</code> to fetch the next set of jobs.</p>
   */
  NextToken?: string;
}

export namespace ListMedicalVocabulariesRequest {
  export const filterSensitiveLog = (obj: ListMedicalVocabulariesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMedicalVocabulariesRequest => __isa(o, "ListMedicalVocabulariesRequest");
}

export interface ListMedicalVocabulariesResponse {
  __type?: "ListMedicalVocabulariesResponse";
  /**
   * <p>The requested vocabulary state.</p>
   */
  Status?: VocabularyState | string;

  /**
   * <p>A list of objects that describe the vocabularies that match the search criteria in the
   *             request.</p>
   */
  Vocabularies?: VocabularyInfo[];

  /**
   * <p>The <code>ListMedicalVocabularies</code> operation returns a page of vocabularies at a
   *             time. The maximum size of the page is set by the <code>MaxResults</code> parameter. If
   *             there are more jobs in the list than the page size, Amazon Transcribe Medical returns the
   *                 <code>NextPage</code> token. Include the token in the next request to the
   *                 <code>ListMedicalVocabularies</code> operation to return the next page of
   *             jobs.</p>
   */
  NextToken?: string;
}

export namespace ListMedicalVocabulariesResponse {
  export const filterSensitiveLog = (obj: ListMedicalVocabulariesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMedicalVocabulariesResponse => __isa(o, "ListMedicalVocabulariesResponse");
}

export interface ListTranscriptionJobsRequest {
  __type?: "ListTranscriptionJobsRequest";
  /**
   * <p>When specified, the jobs returned in the list are limited to jobs whose name contains
   *             the specified string.</p>
   */
  JobNameContains?: string;

  /**
   * <p>When specified, returns only transcription jobs with the specified status. Jobs are
   *             ordered by creation date, with the newest jobs returned first. If you don’t specify a
   *             status, Amazon Transcribe returns all transcription jobs ordered by creation date. </p>
   */
  Status?: TranscriptionJobStatus | string;

  /**
   * <p>If the result of the previous request to <code>ListTranscriptionJobs</code> was
   *             truncated, include the <code>NextToken</code> to fetch the next set of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of jobs to return in the response. If there are fewer results in
   *             the list, this response contains only the actual results.</p>
   */
  MaxResults?: number;
}

export namespace ListTranscriptionJobsRequest {
  export const filterSensitiveLog = (obj: ListTranscriptionJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTranscriptionJobsRequest => __isa(o, "ListTranscriptionJobsRequest");
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
  TranscriptionJobSummaries?: TranscriptionJobSummary[];
}

export namespace ListTranscriptionJobsResponse {
  export const filterSensitiveLog = (obj: ListTranscriptionJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTranscriptionJobsResponse => __isa(o, "ListTranscriptionJobsResponse");
}

export interface ListVocabulariesRequest {
  __type?: "ListVocabulariesRequest";
  /**
   * <p>When specified, only returns vocabularies with the <code>VocabularyState</code> field
   *             equal to the specified state.</p>
   */
  StateEquals?: VocabularyState | string;

  /**
   * <p>If the result of the previous request to <code>ListVocabularies</code> was truncated,
   *             include the <code>NextToken</code> to fetch the next set of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of vocabularies to return in the response. If there are fewer
   *             results in the list, this response contains only the actual results.</p>
   */
  MaxResults?: number;

  /**
   * <p>When specified, the vocabularies returned in the list are limited to vocabularies
   *             whose name contains the specified string. The search is case-insensitive,
   *                 <code>ListVocabularies</code> returns both "vocabularyname" and "VocabularyName" in
   *             the response list.</p>
   */
  NameContains?: string;
}

export namespace ListVocabulariesRequest {
  export const filterSensitiveLog = (obj: ListVocabulariesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListVocabulariesRequest => __isa(o, "ListVocabulariesRequest");
}

export interface ListVocabulariesResponse {
  __type?: "ListVocabulariesResponse";
  /**
   * <p>The requested vocabulary state.</p>
   */
  Status?: VocabularyState | string;

  /**
   * <p>The <code>ListVocabularies</code> operation returns a page of vocabularies at a time.
   *             The maximum size of the page is set by the <code>MaxResults</code> parameter. If there
   *             are more jobs in the list than the page size, Amazon Transcribe returns the <code>NextPage</code>
   *             token. Include the token in the next request to the <code>ListVocabularies</code>
   *             operation to return in the next page of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of objects that describe the vocabularies that match the search criteria in the
   *             request.</p>
   */
  Vocabularies?: VocabularyInfo[];
}

export namespace ListVocabulariesResponse {
  export const filterSensitiveLog = (obj: ListVocabulariesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListVocabulariesResponse => __isa(o, "ListVocabulariesResponse");
}

export interface ListVocabularyFiltersRequest {
  __type?: "ListVocabularyFiltersRequest";
  /**
   * <p>If the result of the previous request to <code>ListVocabularyFilters</code> was
   *             truncated, include the <code>NextToken</code> to fetch the next set of
   *             collections.</p>
   */
  NextToken?: string;

  /**
   * <p>Filters the response so that it only contains vocabulary filters whose name contains
   *             the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>The maximum number of filters to return in the response. If there are fewer results in
   *             the list, this response contains only the actual results.</p>
   */
  MaxResults?: number;
}

export namespace ListVocabularyFiltersRequest {
  export const filterSensitiveLog = (obj: ListVocabularyFiltersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListVocabularyFiltersRequest => __isa(o, "ListVocabularyFiltersRequest");
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
   * <p>The list of vocabulary filters. It contains at most <code>MaxResults</code> number of
   *             filters. If there are more filters, call the <code>ListVocabularyFilters</code>
   *             operation again with the <code>NextToken</code> parameter in the request set to the
   *             value of the <code>NextToken</code> field in the response.</p>
   */
  VocabularyFilters?: VocabularyFilterInfo[];
}

export namespace ListVocabularyFiltersResponse {
  export const filterSensitiveLog = (obj: ListVocabularyFiltersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListVocabularyFiltersResponse => __isa(o, "ListVocabularyFiltersResponse");
}

/**
 * <p>Describes the input media file in a transcription request.</p>
 */
export interface Media {
  __type?: "Media";
  /**
   * <p>The S3 object location of the input media file. The URI must be in the same region as
   *             the API endpoint that you are calling. The general form is:</p>
   *
   *         <p>For example:</p>
   *
   *
   *         <p>For more information about S3 object names, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  MediaFileUri?: string;
}

export namespace Media {
  export const filterSensitiveLog = (obj: Media): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Media => __isa(o, "Media");
}

export enum MediaFormat {
  FLAC = "flac",
  MP3 = "mp3",
  MP4 = "mp4",
  WAV = "wav",
}

/**
 * <p>Identifies the location of a medical transcript.</p>
 */
export interface MedicalTranscript {
  __type?: "MedicalTranscript";
  /**
   * <p>The S3 object location of the medical transcript.</p>
   *         <p>Use this URI to access the medical transcript. This URI points to the S3 bucket you
   *             created to store the medical transcript.</p>
   */
  TranscriptFileUri?: string;
}

export namespace MedicalTranscript {
  export const filterSensitiveLog = (obj: MedicalTranscript): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MedicalTranscript => __isa(o, "MedicalTranscript");
}

/**
 * <p>The data structure that containts the information for a medical transcription
 *             job.</p>
 */
export interface MedicalTranscriptionJob {
  __type?: "MedicalTranscriptionJob";
  /**
   * <p>If the <code>TranscriptionJobStatus</code> field is <code>FAILED</code>, this field
   *             contains information about why the job failed.</p>
   *         <p>The <code>FailureReason</code> field contains one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Unsupported media format</code>- The media format specified in the
   *                         <code>MediaFormat</code> field of the request isn't valid. See the
   *                     description of the <code>MediaFormat</code> field for a list of valid
   *                     values.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>The media format provided does not match the detected media
   *                         format</code>- The media format of the audio file doesn't match the format
   *                     specified in the <code>MediaFormat</code> field in the request. Check the media
   *                     format of your media file and make sure the two values match.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid sample rate for audio file</code>- The sample rate specified in
   *                     the <code>MediaSampleRateHertz</code> of the request isn't valid. The sample
   *                     rate must be between 8000 and 48000 Hertz.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>The sample rate provided does not match the detected sample rate</code>-
   *                     The sample rate in the audio file doesn't match the sample rate specified in the
   *                         <code>MediaSampleRateHertz</code> field in the request. Check the sample
   *                     rate of your media file and make sure that the two values match.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid file size: file size too large</code>- The size of your audio
   *                     file is larger than what Amazon Transcribe Medical can process. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/limits-guidelines.html#limits">Guidlines and
   *                         Quotas</a> in the <i>Amazon Transcribe Medical Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid number of channels: number of channels too large</code>- Your
   *                     audio contains more channels than Amazon Transcribe Medical is configured to process. To request
   *                     additional channels, see <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe-medical.html">Amazon Transcribe Medical Endpoints and
   *                         Quotas</a> in the <i>Amazon Web Services General
   *                         Reference</i>
   *                </p>
   *             </li>
   *          </ul>
   */
  FailureReason?: string;

  /**
   * <p>The type of speech in the transcription job. <code>CONVERSATION</code> is generally
   *             used for patient-physician dialogues. <code>DICTATION</code> is the setting for
   *             physicians speaking their notes after seeing a patient. For more information, see <a>how-it-works-med</a>
   *          </p>
   */
  Type?: Type | string;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name for a given medical transcription job.</p>
   */
  MedicalTranscriptionJobName?: string;

  /**
   * <p>Describes the input media file in a transcription request.</p>
   */
  Media?: Media;

  /**
   * <p>An object that contains the <code>MedicalTranscript</code>. The
   *                 <code>MedicalTranscript</code> contains the <code>TranscriptFileUri</code>.</p>
   */
  Transcript?: MedicalTranscript;

  /**
   * <p>The medical specialty of any clinicians providing a dictation or having a
   *             conversation. <code>PRIMARYCARE</code> is the only available setting for this object.
   *             This specialty enables you to generate transcriptions for the following medical
   *             fields:</p>
   *         <ul>
   *             <li>
   *                 <p>Family Medicine</p>
   *             </li>
   *          </ul>
   */
  Specialty?: Specialty | string;

  /**
   * <p>The completion status of a medical transcription job.</p>
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | string;

  /**
   * <p>A timestamp that shows when the job was completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>Object that contains
   *             object.</p>
   */
  Settings?: MedicalTranscriptionSetting;

  /**
   * <p>A timestamp that shows when the job started processing.</p>
   */
  StartTime?: Date;

  /**
   * <p>The sample rate, in Hertz, of the source audio containing medical information.</p>
   *         <p>If you don't specify the sample rate, Amazon Transcribe Medical determines it for you. If you choose to
   *             specify the sample rate, it must match the rate detected by Amazon Transcribe Medical. In most cases, you
   *             should leave the <code>MediaSampleHertz</code> blank and let Amazon Transcribe Medical determine the sample
   *             rate.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>The format of the input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>The language code for the language spoken in the source audio file. US English (en-US)
   *             is the only supported language for medical transcriptions. Any other value you enter for
   *             language code results in a <code>BadRequestException</code> error.</p>
   */
  LanguageCode?: LanguageCode | string;
}

export namespace MedicalTranscriptionJob {
  export const filterSensitiveLog = (obj: MedicalTranscriptionJob): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MedicalTranscriptionJob => __isa(o, "MedicalTranscriptionJob");
}

/**
 * <p>Provides summary information about a transcription job.</p>
 */
export interface MedicalTranscriptionJobSummary {
  __type?: "MedicalTranscriptionJobSummary";
  /**
   * <p>If the <code>TranscriptionJobStatus</code> field is <code>FAILED</code>, a description
   *             of the error.</p>
   */
  FailureReason?: string;

  /**
   * <p>Indicates the location of the transcription job's output.</p>
   *         <p>The <code>CUSTOMER_BUCKET</code> is the S3 location provided in the
   *                 <code>OutputBucketName</code> field when the </p>
   */
  OutputLocationType?: OutputLocationType | string;

  /**
   * <p>The speech of the clinician in the input audio.</p>
   */
  Type?: Type | string;

  /**
   * <p>A timestamp that shows when the job was completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>A timestamp that shows when the job began processing.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the medical transcription job.</p>
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | string;

  /**
   * <p>The name of a medical transcription job.</p>
   */
  MedicalTranscriptionJobName?: string;

  /**
   * <p>The language of the transcript in the source audio file.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>A timestamp that shows when the medical transcription job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The medical specialty of the transcription job. <code>Primary care</code> is the only
   *             valid value.</p>
   */
  Specialty?: Specialty | string;
}

export namespace MedicalTranscriptionJobSummary {
  export const filterSensitiveLog = (obj: MedicalTranscriptionJobSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MedicalTranscriptionJobSummary => __isa(o, "MedicalTranscriptionJobSummary");
}

/**
 * <p>Optional settings for the <a>StartMedicalTranscriptionJob</a>
 *             operation.</p>
 */
export interface MedicalTranscriptionSetting {
  __type?: "MedicalTranscriptionSetting";
  /**
   * <p>Determines whether the transcription job uses speaker recognition to identify
   *             different speakers in the input audio. Speaker recongition labels individual speakers in
   *             the audio file. If you set the <code>ShowSpeakerLabels</code> field to true, you must
   *             also set the maximum number of speaker labels in the <code>MaxSpeakerLabels</code>
   *             field.</p>
   *         <p>You can't set both <code>ShowSpeakerLabels</code> and
   *                 <code>ChannelIdentification</code> in the same request. If you set both, your
   *             request returns a <code>BadRequestException</code>.</p>
   */
  ShowSpeakerLabels?: boolean;

  /**
   * <p>The maximum number of speakers to identify in the input audio. If there are more
   *             speakers in the audio than this number, multiple speakers are identified as a single
   *             speaker. If you specify the <code>MaxSpeakerLabels</code> field, you must set the
   *                 <code>ShowSpeakerLabels</code> field to true.</p>
   */
  MaxSpeakerLabels?: number;

  /**
   * <p>Determines whether alternative transcripts are generated along with the transcript
   *             that has the highest confidence. If you set <code>ShowAlternatives</code> field to true,
   *             you must also set the maximum number of alternatives to return in the
   *                 <code>MaxAlternatives</code> field.</p>
   */
  ShowAlternatives?: boolean;

  /**
   * <p>The maximum number of alternatives that you tell the service to return. If you specify
   *             the <code>MaxAlternatives</code> field, you must set the <code>ShowAlternatives</code>
   *             field to true.</p>
   */
  MaxAlternatives?: number;

  /**
   * <p>The name of the vocabulary to use when processing a medical transcription job.</p>
   */
  VocabularyName?: string;

  /**
   * <p>Instructs Amazon Transcribe Medical to process each audio channel separately and then merge the
   *             transcription output of each channel into a single transcription.</p>
   *         <p>Amazon Transcribe Medical also produces a transcription of each item detected on an audio channel,
   *             including the start time and end time of the item and alternative transcriptions of
   *             item. The alternative transcriptions also come with confidence scores provided by
   *             Amazon Transcribe Medical.</p>
   *         <p>You can't set both <code>ShowSpeakerLabels</code> and
   *                 <code>ChannelIdentification</code> in the same request. If you set both, your
   *             request returns a <code>BadRequestException</code>
   *          </p>
   */
  ChannelIdentification?: boolean;
}

export namespace MedicalTranscriptionSetting {
  export const filterSensitiveLog = (obj: MedicalTranscriptionSetting): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MedicalTranscriptionSetting => __isa(o, "MedicalTranscriptionSetting");
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
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotFoundException => __isa(o, "NotFoundException");
}

export enum OutputLocationType {
  CUSTOMER_BUCKET = "CUSTOMER_BUCKET",
  SERVICE_BUCKET = "SERVICE_BUCKET",
}

export enum RedactionOutput {
  REDACTED = "redacted",
  REDACTED_AND_UNREDACTED = "redacted_and_unredacted",
}

export enum RedactionType {
  PII = "PII",
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
   * <p>The name of the vocabulary filter to use when transcribing the audio. The filter that
   *             you specify must have the same language code as the transcription job.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The number of alternative transcriptions that the service should return. If you
   *             specify the <code>MaxAlternatives</code> field, you must set the
   *                 <code>ShowAlternatives</code> field to true.</p>
   */
  MaxAlternatives?: number;

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
   * <p>The maximum number of speakers to identify in the input audio. If there are more
   *             speakers in the audio than this number, multiple speakers are identified as a single
   *             speaker. If you specify the <code>MaxSpeakerLabels</code> field, you must set the
   *                 <code>ShowSpeakerLabels</code> field to true.</p>
   */
  MaxSpeakerLabels?: number;

  /**
   * <p>The name of a vocabulary to use when processing the transcription job.</p>
   */
  VocabularyName?: string;

  /**
   * <p>Set to <code>mask</code> to remove filtered text from the transcript and replace it
   *             with three asterisks ("***") as placeholder text. Set to <code>remove</code> to remove
   *             filtered text from the transcript without using placeholder text.</p>
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | string;
}

export namespace Settings {
  export const filterSensitiveLog = (obj: Settings): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Settings => __isa(o, "Settings");
}

export enum Specialty {
  PRIMARYCARE = "PRIMARYCARE",
}

export interface StartMedicalTranscriptionJobRequest {
  __type?: "StartMedicalTranscriptionJobRequest";
  /**
   * <p>The medical specialty of any clinician speaking in the input media.</p>
   */
  Specialty: Specialty | string | undefined;

  /**
   * <p>The name of the medical transcription job. You can't use the strings "." or ".." by
   *             themselves as the job name. The name must also be unique within an AWS account. If you
   *             try to create a medical transcription job with the same name as a previous medical
   *             transcription job you will receive a <code>ConflictException</code> error.</p>
   */
  MedicalTranscriptionJobName: string | undefined;

  /**
   * <p>The Amazon S3 location where the transcription is stored.</p>
   *         <p>You must set <code>OutputBucketName</code> for Amazon Transcribe Medical to store the transcription
   *             results. Your transcript appears in the S3 location you specify. When you call the <a>GetMedicalTranscriptionJob</a>, the operation returns this location in the
   *                 <code>TranscriptFileUri</code> field. The S3 bucket must have permissions that allow
   *             Amazon Transcribe Medical to put files in the bucket. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user">Permissions Required for IAM User Roles</a>.</p>
   *         <p>You can specify an AWS Key Management Service (KMS) key to encrypt the output of your
   *             transcription using the <code>OutputEncryptionKMSKeyId</code> parameter. If you don't
   *             specify a KMS key, Amazon Transcribe Medical uses the default Amazon S3 key for server-side encryption of
   *             transcripts that are placed in your S3 bucket.</p>
   */
  OutputBucketName: string | undefined;

  /**
   * <p>The language code for the language spoken in the input media file. US English (en-US)
   *             is the valid value for medical transcription jobs. Any other value you enter for
   *             language code results in a <code>BadRequestException</code> error.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The type of speech in the input audio. <code>CONVERSATION</code> refers to
   *             conversations between two or more speakers, e.g., a conversations between doctors and
   *             patients. <code>DICTATION</code> refers to single-speaker dictated speech, e.g., for
   *             clinical notes.</p>
   */
  Type: Type | string | undefined;

  /**
   * <p>The audio format of the input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>Optional settings for the medical transcription job.</p>
   */
  Settings?: MedicalTranscriptionSetting;

  /**
   * <p>The sample rate, in Hertz, of the audio track in the input media file.</p>
   *         <p>If you do not specify the media sample rate, Amazon Transcribe Medical determines the sample rate. If you
   *             specify the sample rate, it must match the rate detected by Amazon Transcribe Medical. In most cases, you
   *             should leave the <code>MediaSampleRateHertz</code> field blank and let Amazon Transcribe Medical determine
   *             the sample rate.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>Describes the input media file in a transcription request.</p>
   */
  Media: Media | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key used to
   *             encrypt the output of the transcription job. The user calling the <a>StartMedicalTranscriptionJob</a> operation must have permission to use the
   *             specified KMS key.</p>
   *         <p>You use either of the following to identify a KMS key in the current account:</p>
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
   *                 <p>Amazon Resource Name (ARN) of a KMS key in the current account or another
   *                     account: "arn:aws:kms:region:account
   *                     ID:key/1234abcd-12ab-34cd-56ef-1234567890ab"</p>
   *             </li>
   *             <li>
   *                 <p>ARN of a KMS Key Alias: "arn:aws:kms:region:account
   *                     ID:alias/ExampleAlias"</p>
   *             </li>
   *          </ul>
   *         <p>If you don't specify an encryption key, the output of the medical transcription job is
   *             encrypted with the default Amazon S3 key (SSE-S3).</p>
   *         <p>If you specify a KMS key to encrypt your output, you must also specify an output
   *             location in the <code>OutputBucketName</code> parameter.</p>
   */
  OutputEncryptionKMSKeyId?: string;
}

export namespace StartMedicalTranscriptionJobRequest {
  export const filterSensitiveLog = (obj: StartMedicalTranscriptionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartMedicalTranscriptionJobRequest =>
    __isa(o, "StartMedicalTranscriptionJobRequest");
}

export interface StartMedicalTranscriptionJobResponse {
  __type?: "StartMedicalTranscriptionJobResponse";
  /**
   * <p>A batch job submitted to transcribe medical speech to text.</p>
   */
  MedicalTranscriptionJob?: MedicalTranscriptionJob;
}

export namespace StartMedicalTranscriptionJobResponse {
  export const filterSensitiveLog = (obj: StartMedicalTranscriptionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartMedicalTranscriptionJobResponse =>
    __isa(o, "StartMedicalTranscriptionJobResponse");
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
   * <p>A <code>Settings</code> object that provides optional settings for a transcription
   *             job.</p>
   */
  Settings?: Settings;

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
   *         <p>If you set the <code>OutputBucketName</code>, Amazon Transcribe puts the transcript in the
   *             specified S3 bucket. When you call the <a>GetTranscriptionJob</a> operation,
   *             the operation returns this location in the <code>TranscriptFileUri</code> field. If you
   *             enable content redaction, the redacted transcript appears in
   *                 <code>RedactedTranscriptFileUri</code>. If you enable content redaction and choose
   *             to output an unredacted transcript, that transcript's location still appears in the
   *                 <code>TranscriptFileUri</code>. The S3 bucket must have permissions that allow Amazon Transcribe
   *             to put files in the bucket. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user">Permissions Required for IAM User Roles</a>.</p>
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
   * <p>The language code for the language used in the input media file.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The format of the input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

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
   * <p>An object that contains the request parameters for content redaction.</p>
   */
  ContentRedaction?: ContentRedaction;

  /**
   * <p>An object that describes the input media for a transcription job.</p>
   */
  Media: Media | undefined;

  /**
   * <p>The name of the job. Note that you can't use the strings "." or ".." by themselves as
   *             the job name. The name must also be unique within an AWS account. If you try to create a
   *             transcription job with the same name as a previous transcription job you will receive a
   *                 <code>ConflictException</code> error.</p>
   */
  TranscriptionJobName: string | undefined;
}

export namespace StartTranscriptionJobRequest {
  export const filterSensitiveLog = (obj: StartTranscriptionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartTranscriptionJobRequest => __isa(o, "StartTranscriptionJobRequest");
}

export interface StartTranscriptionJobResponse {
  __type?: "StartTranscriptionJobResponse";
  /**
   * <p>An object containing details of the asynchronous transcription job.</p>
   */
  TranscriptionJob?: TranscriptionJob;
}

export namespace StartTranscriptionJobResponse {
  export const filterSensitiveLog = (obj: StartTranscriptionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartTranscriptionJobResponse => __isa(o, "StartTranscriptionJobResponse");
}

/**
 * <p>Identifies the location of a transcription.</p>
 */
export interface Transcript {
  __type?: "Transcript";
  /**
   * <p>The S3 object location of the the transcript.</p>
   *         <p>Use this URI to access the transcript. If you specified an S3 bucket in the
   *                 <code>OutputBucketName</code> field when you created the job, this is the URI of
   *             that bucket. If you chose to store the transcript in Amazon Transcribe, this is a shareable URL that
   *             provides secure access to that location.</p>
   */
  TranscriptFileUri?: string;

  /**
   * <p>The S3 object location of the redacted transcript.</p>
   *
   *         <p>Use this URI to access the redacated transcript. If you specified an S3 bucket in the
   *                 <code>OutputBucketName</code> field when you created the job, this is the URI of
   *             that bucket. If you chose to store the transcript in Amazon Transcribe, this is a shareable URL that
   *             provides secure access to that location.</p>
   */
  RedactedTranscriptFileUri?: string;
}

export namespace Transcript {
  export const filterSensitiveLog = (obj: Transcript): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Transcript => __isa(o, "Transcript");
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
   * <p>The status of the transcription job.</p>
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | string;

  /**
   * <p>Optional settings for the transcription job. Use these settings to turn on speaker
   *             recognition, to set the maximum number of speakers that should be identified and to
   *             specify a custom vocabulary to use when processing the transcription job.</p>
   */
  Settings?: Settings;

  /**
   * <p>The name of the transcription job.</p>
   */
  TranscriptionJobName?: string;

  /**
   * <p>The language code for the input speech.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The sample rate, in Hertz, of the audio track in the input media file. </p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>A timestamp that shows with the job was started processing.</p>
   */
  StartTime?: Date;

  /**
   * <p>The format of the input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>An object that describes the output of the transcription job.</p>
   */
  Transcript?: Transcript;

  /**
   * <p>An object that describes the input media for the transcription job.</p>
   */
  Media?: Media;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>An object that describes content redaction settings for the transcription job.</p>
   */
  ContentRedaction?: ContentRedaction;

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
}

export namespace TranscriptionJob {
  export const filterSensitiveLog = (obj: TranscriptionJob): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TranscriptionJob => __isa(o, "TranscriptionJob");
}

export enum TranscriptionJobStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  QUEUED = "QUEUED",
}

/**
 * <p>Provides a summary of information about a transcription job.</p>
 */
export interface TranscriptionJobSummary {
  __type?: "TranscriptionJobSummary";
  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that shows when the job started processing.</p>
   */
  StartTime?: Date;

  /**
   * <p>If the <code>TranscriptionJobStatus</code> field is <code>FAILED</code>, a description
   *             of the error.</p>
   */
  FailureReason?: string;

  /**
   * <p>The content redaction settings of the transcription job.</p>
   */
  ContentRedaction?: ContentRedaction;

  /**
   * <p>The status of the transcription job. When the status is <code>COMPLETED</code>, use
   *             the <code>GetTranscriptionJob</code> operation to get the results of the
   *             transcription.</p>
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | string;

  /**
   * <p>The name of the transcription job.</p>
   */
  TranscriptionJobName?: string;

  /**
   * <p>A timestamp that shows when the job was completed.</p>
   */
  CompletionTime?: Date;

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
   * <p>The language code for the input speech.</p>
   */
  LanguageCode?: LanguageCode | string;
}

export namespace TranscriptionJobSummary {
  export const filterSensitiveLog = (obj: TranscriptionJobSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TranscriptionJobSummary => __isa(o, "TranscriptionJobSummary");
}

export enum Type {
  CONVERSATION = "CONVERSATION",
  DICTATION = "DICTATION",
}

export interface UpdateMedicalVocabularyRequest {
  __type?: "UpdateMedicalVocabularyRequest";
  /**
   * <p>The Amazon S3 location of the text file containing the definition of the custom vocabulary.
   *             The URI must be in the same AWS region as the API endpoint you are calling. You can see
   *             the fields you need to enter for you Amazon S3 location in the example URI here:</p>
   *         <p>
   *             <code>
   *                 https://s3.<aws-region>.amazonaws.com/<bucket-name>/<keyprefix>/<objectkey>
   *             </code>
   *         </p>
   *         <p>For example:</p>
   *         <p>
   *             <code>https://s3.us-east-1.amazonaws.com/AWSDOC-EXAMPLE-BUCKET/vocab.txt</code>
   *          </p>
   *         <p>For more information about S3 object names, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   *         <p>For more information about custom vocabularies in Amazon Transcribe Medical, see <a href="http://docs.aws.amazon.com/transcribe/latest/dg/how-it-works.html#how-vocabulary">Medical Custom Vocabularies</a>.</p>
   */
  VocabularyFileUri?: string;

  /**
   * <p>The language code of the entries in the updated vocabulary. US English (en-US) is the
   *             only valid language code in Amazon Transcribe Medical.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The name of the vocabulary to update. The name is case-sensitive. If you try to update
   *             a vocabulary with the same name as a previous vocabulary you will receive a
   *                 <code>ConflictException</code> error.</p>
   */
  VocabularyName: string | undefined;
}

export namespace UpdateMedicalVocabularyRequest {
  export const filterSensitiveLog = (obj: UpdateMedicalVocabularyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateMedicalVocabularyRequest => __isa(o, "UpdateMedicalVocabularyRequest");
}

export interface UpdateMedicalVocabularyResponse {
  __type?: "UpdateMedicalVocabularyResponse";
  /**
   * <p>The language code for the text file used to update the custom vocabulary. US English
   *             (en-US) is the only language supported in Amazon Transcribe Medical.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The name of the updated vocabulary.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The date and time the vocabulary was updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The processing state of the update to the vocabulary. When the
   *                 <code>VocabularyState</code> field is <code>READY</code> the vocabulary is ready to
   *             be used in a <code>StartMedicalTranscriptionJob</code> request.</p>
   */
  VocabularyState?: VocabularyState | string;
}

export namespace UpdateMedicalVocabularyResponse {
  export const filterSensitiveLog = (obj: UpdateMedicalVocabularyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateMedicalVocabularyResponse => __isa(o, "UpdateMedicalVocabularyResponse");
}

export interface UpdateVocabularyFilterRequest {
  __type?: "UpdateVocabularyFilterRequest";
  /**
   * <p>The name of the vocabulary filter to update. If you try to update a vocabulary filter
   *             with the same name as a previous vocabulary filter you will receive a
   *                 <code>ConflictException</code> error.</p>
   */
  VocabularyFilterName: string | undefined;

  /**
   * <p>The Amazon S3 location of a text file used as input to create the vocabulary filter.
   *             Only use characters from the character set defined for custom vocabularies. For a list
   *             of character sets, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-vocabulary.html#charsets">Character Sets for Custom
   *                 Vocabularies</a>.</p>
   *         <p>The specified file must be less than 50 KB of UTF-8 characters.</p>
   *         <p>If you provide the location of a list of words in the
   *                 <code>VocabularyFilterFileUri</code> parameter, you can't use the <code>Words</code>
   *             parameter.</p>
   */
  VocabularyFilterFileUri?: string;

  /**
   * <p>The words to use in the vocabulary filter. Only use characters from the character set
   *             defined for custom vocabularies. For a list of character sets, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-vocabulary.html#charsets">Character Sets for Custom Vocabularies</a>.</p>
   *         <p>If you provide a list of words in the <code>Words</code> parameter, you can't use the
   *                 <code>VocabularyFilterFileUri</code> parameter.</p>
   */
  Words?: string[];
}

export namespace UpdateVocabularyFilterRequest {
  export const filterSensitiveLog = (obj: UpdateVocabularyFilterRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVocabularyFilterRequest => __isa(o, "UpdateVocabularyFilterRequest");
}

export interface UpdateVocabularyFilterResponse {
  __type?: "UpdateVocabularyFilterResponse";
  /**
   * <p>The name of the updated vocabulary filter.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The date and time that the vocabulary filter was updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The language code of the words in the vocabulary filter.</p>
   */
  LanguageCode?: LanguageCode | string;
}

export namespace UpdateVocabularyFilterResponse {
  export const filterSensitiveLog = (obj: UpdateVocabularyFilterResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVocabularyFilterResponse => __isa(o, "UpdateVocabularyFilterResponse");
}

export interface UpdateVocabularyRequest {
  __type?: "UpdateVocabularyRequest";
  /**
   * <p>An array of strings containing the vocabulary entries.</p>
   */
  Phrases?: string[];

  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The name of the vocabulary to update. The name is case-sensitive. If you try to update
   *             a vocabulary with the same name as a previous vocabulary you will receive a
   *                 <code>ConflictException</code> error.</p>
   */
  VocabularyName: string | undefined;

  /**
   * <p>The S3 location of the text file that contains the definition of the custom
   *             vocabulary. The URI must be in the same region as the API endpoint that you are calling.
   *             The general form is </p>
   *
   *         <p>For example:</p>
   *
   *         <p>For more information about S3 object names, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   *         <p>For more information about custom vocabularies, see <a href="http://docs.aws.amazon.com/transcribe/latest/dg/how-it-works.html#how-vocabulary">Custom Vocabularies</a>.</p>
   */
  VocabularyFileUri?: string;
}

export namespace UpdateVocabularyRequest {
  export const filterSensitiveLog = (obj: UpdateVocabularyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVocabularyRequest => __isa(o, "UpdateVocabularyRequest");
}

export interface UpdateVocabularyResponse {
  __type?: "UpdateVocabularyResponse";
  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The processing state of the vocabulary. When the <code>VocabularyState</code> field
   *             contains <code>READY</code> the vocabulary is ready to be used in a
   *                 <code>StartTranscriptionJob</code> request.</p>
   */
  VocabularyState?: VocabularyState | string;

  /**
   * <p>The date and time that the vocabulary was updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the vocabulary that was updated.</p>
   */
  VocabularyName?: string;
}

export namespace UpdateVocabularyResponse {
  export const filterSensitiveLog = (obj: UpdateVocabularyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVocabularyResponse => __isa(o, "UpdateVocabularyResponse");
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
   * <p>The name of the vocabulary filter. The name must be unique in the account that holds
   *             the filter.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The date and time that the vocabulary was last updated.</p>
   */
  LastModifiedTime?: Date;
}

export namespace VocabularyFilterInfo {
  export const filterSensitiveLog = (obj: VocabularyFilterInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VocabularyFilterInfo => __isa(o, "VocabularyFilterInfo");
}

export enum VocabularyFilterMethod {
  MASK = "mask",
  REMOVE = "remove",
}

/**
 * <p>Provides information about a custom vocabulary. </p>
 */
export interface VocabularyInfo {
  __type?: "VocabularyInfo";
  /**
   * <p>The name of the vocabulary.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The processing state of the vocabulary. If the state is <code>READY</code> you can use
   *             the vocabulary in a <code>StartTranscriptionJob</code> request.</p>
   */
  VocabularyState?: VocabularyState | string;

  /**
   * <p>The date and time that the vocabulary was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace VocabularyInfo {
  export const filterSensitiveLog = (obj: VocabularyInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VocabularyInfo => __isa(o, "VocabularyInfo");
}

export enum VocabularyState {
  FAILED = "FAILED",
  PENDING = "PENDING",
  READY = "READY",
}
