import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The custom terminology applied to the input text by Amazon Translate for the translated text
 *       response. This is optional in the response and will only be present if you specified
 *       terminology input in the request. Currently, only one terminology can be applied per
 *       TranslateText request.</p>
 */
export interface AppliedTerminology {
  __type?: "AppliedTerminology";
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

export namespace AppliedTerminology {
  export const filterSensitiveLog = (obj: AppliedTerminology): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AppliedTerminology => __isa(o, "AppliedTerminology");
}

export interface DeleteTerminologyRequest {
  __type?: "DeleteTerminologyRequest";
  /**
   * <p>The name of the custom terminology being deleted. </p>
   */
  Name: string | undefined;
}

export namespace DeleteTerminologyRequest {
  export const filterSensitiveLog = (obj: DeleteTerminologyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteTerminologyRequest => __isa(o, "DeleteTerminologyRequest");
}

export interface DescribeTextTranslationJobRequest {
  __type?: "DescribeTextTranslationJobRequest";
  /**
   * <p>The identifier that Amazon Translate generated for the job. The <a>StartTextTranslationJob</a> operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeTextTranslationJobRequest {
  export const filterSensitiveLog = (obj: DescribeTextTranslationJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeTextTranslationJobRequest => __isa(o, "DescribeTextTranslationJobRequest");
}

export interface DescribeTextTranslationJobResponse {
  __type?: "DescribeTextTranslationJobResponse";
  /**
   * <p>An object that contains the properties associated with an asynchronous batch translation
   *       job.</p>
   */
  TextTranslationJobProperties?: TextTranslationJobProperties;
}

export namespace DescribeTextTranslationJobResponse {
  export const filterSensitiveLog = (obj: DescribeTextTranslationJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeTextTranslationJobResponse =>
    __isa(o, "DescribeTextTranslationJobResponse");
}

/**
 * <p>The confidence that Amazon Comprehend accurately detected the source language is low. If a
 *       low confidence level is acceptable for your application, you can use the language in the
 *       exception to call Amazon Translate again. For more information, see the <a href="https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html">DetectDominantLanguage</a> operation in the <i>Amazon Comprehend Developer
 *         Guide</i>. </p>
 */
export interface DetectedLanguageLowConfidenceException extends __SmithyException, $MetadataBearer {
  name: "DetectedLanguageLowConfidenceException";
  $fault: "client";
  /**
   * <p>The language code of the auto-detected language from Amazon Comprehend.</p>
   */
  DetectedLanguageCode?: string;

  Message?: string;
}

export namespace DetectedLanguageLowConfidenceException {
  export const filterSensitiveLog = (obj: DetectedLanguageLowConfidenceException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectedLanguageLowConfidenceException =>
    __isa(o, "DetectedLanguageLowConfidenceException");
}

/**
 * <p>The encryption key used to encrypt the custom terminologies used by Amazon Translate.</p>
 */
export interface EncryptionKey {
  __type?: "EncryptionKey";
  /**
   * <p>The Amazon Resource Name (ARN) of the encryption key being used to encrypt the custom
   *       terminology.</p>
   */
  Id: string | undefined;

  /**
   * <p>The type of encryption key used by Amazon Translate to encrypt custom terminologies.</p>
   */
  Type: EncryptionKeyType | string | undefined;
}

export namespace EncryptionKey {
  export const filterSensitiveLog = (obj: EncryptionKey): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EncryptionKey => __isa(o, "EncryptionKey");
}

export enum EncryptionKeyType {
  KMS = "KMS",
}

export interface GetTerminologyRequest {
  __type?: "GetTerminologyRequest";
  /**
   * <p>The name of the custom terminology being retrieved.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data format of the custom terminology being retrieved, either CSV or TMX.</p>
   */
  TerminologyDataFormat: TerminologyDataFormat | string | undefined;
}

export namespace GetTerminologyRequest {
  export const filterSensitiveLog = (obj: GetTerminologyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetTerminologyRequest => __isa(o, "GetTerminologyRequest");
}

export interface GetTerminologyResponse {
  __type?: "GetTerminologyResponse";
  /**
   * <p>The data location of the custom terminology being retrieved. The custom terminology file
   *       is returned in a presigned url that has a 30 minute expiration.</p>
   */
  TerminologyDataLocation?: TerminologyDataLocation;

  /**
   * <p>The properties of the custom terminology being retrieved.</p>
   */
  TerminologyProperties?: TerminologyProperties;
}

export namespace GetTerminologyResponse {
  export const filterSensitiveLog = (obj: GetTerminologyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetTerminologyResponse => __isa(o, "GetTerminologyResponse");
}

export interface ImportTerminologyRequest {
  __type?: "ImportTerminologyRequest";
  /**
   * <p>The description of the custom terminology being imported.</p>
   */
  Description?: string;

  /**
   * <p>The encryption key for the custom terminology being imported.</p>
   */
  EncryptionKey?: EncryptionKey;

  /**
   * <p>The merge strategy of the custom terminology being imported. Currently, only the OVERWRITE
   *       merge strategy is supported. In this case, the imported terminology will overwrite an existing
   *       terminology of the same name.</p>
   */
  MergeStrategy: MergeStrategy | string | undefined;

  /**
   * <p>The name of the custom terminology being imported.</p>
   */
  Name: string | undefined;

  /**
   * <p>The terminology data for the custom terminology being imported.</p>
   */
  TerminologyData: TerminologyData | undefined;
}

export namespace ImportTerminologyRequest {
  export const filterSensitiveLog = (obj: ImportTerminologyRequest): any => ({
    ...obj,
    ...(obj.TerminologyData && { TerminologyData: TerminologyData.filterSensitiveLog(obj.TerminologyData) }),
  });
  export const isa = (o: any): o is ImportTerminologyRequest => __isa(o, "ImportTerminologyRequest");
}

export interface ImportTerminologyResponse {
  __type?: "ImportTerminologyResponse";
  /**
   * <p>The properties of the custom terminology being imported.</p>
   */
  TerminologyProperties?: TerminologyProperties;
}

export namespace ImportTerminologyResponse {
  export const filterSensitiveLog = (obj: ImportTerminologyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImportTerminologyResponse => __isa(o, "ImportTerminologyResponse");
}

/**
 * <p>The input configuration properties for requesting a batch translation job.</p>
 */
export interface InputDataConfig {
  __type?: "InputDataConfig";
  /**
   * <p>The multipurpose internet mail extension (MIME) type of the input files. Valid values are
   *         <code>text/plain</code> for plaintext files and <code>text/html</code> for HTML
   *       files.</p>
   */
  ContentType: string | undefined;

  /**
   * <p>The URI of the AWS S3 folder that contains the input file. The folder must be in the
   *       same Region as the API endpoint you are calling.</p>
   */
  S3Uri: string | undefined;
}

export namespace InputDataConfig {
  export const filterSensitiveLog = (obj: InputDataConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InputDataConfig => __isa(o, "InputDataConfig");
}

/**
 * <p>An internal server error occurred. Retry your request.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
}

/**
 * <p>The filter specified for the operation is invalid. Specify a different filter.</p>
 */
export interface InvalidFilterException extends __SmithyException, $MetadataBearer {
  name: "InvalidFilterException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidFilterException {
  export const filterSensitiveLog = (obj: InvalidFilterException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidFilterException => __isa(o, "InvalidFilterException");
}

/**
 * <p>The value of the parameter is invalid. Review the value of the parameter you are using to
 *       correct it, and then retry your operation.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParameterValueException {
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidParameterValueException => __isa(o, "InvalidParameterValueException");
}

/**
 * <p> The request that you made is invalid. Check your request to determine why it's invalid
 *       and then retry the request. </p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidRequestException => __isa(o, "InvalidRequestException");
}

/**
 * <p>The number of documents successfully and unsuccessfully processed during a translation
 *       job.</p>
 */
export interface JobDetails {
  __type?: "JobDetails";
  /**
   * <p>The number of documents that could not be processed during a translation job.</p>
   */
  DocumentsWithErrorsCount?: number;

  /**
   * <p>The number of documents used as input in a translation job.</p>
   */
  InputDocumentsCount?: number;

  /**
   * <p>The number of documents successfully processed during a translation job.</p>
   */
  TranslatedDocumentsCount?: number;
}

export namespace JobDetails {
  export const filterSensitiveLog = (obj: JobDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JobDetails => __isa(o, "JobDetails");
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
 * <p>The specified limit has been exceeded. Review your request and retry it with a quantity
 *       below the stated limit.</p>
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

export interface ListTerminologiesRequest {
  __type?: "ListTerminologiesRequest";
  /**
   * <p>The maximum number of custom terminologies returned per list request.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the request to ListTerminologies was truncated, include the NextToken to
   *       fetch the next group of custom terminologies. </p>
   */
  NextToken?: string;
}

export namespace ListTerminologiesRequest {
  export const filterSensitiveLog = (obj: ListTerminologiesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTerminologiesRequest => __isa(o, "ListTerminologiesRequest");
}

export interface ListTerminologiesResponse {
  __type?: "ListTerminologiesResponse";
  /**
   * <p> If the response to the ListTerminologies was truncated, the NextToken fetches the next
   *       group of custom terminologies.</p>
   */
  NextToken?: string;

  /**
   * <p>The properties list of the custom terminologies returned on the list request.</p>
   */
  TerminologyPropertiesList?: TerminologyProperties[];
}

export namespace ListTerminologiesResponse {
  export const filterSensitiveLog = (obj: ListTerminologiesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTerminologiesResponse => __isa(o, "ListTerminologiesResponse");
}

export interface ListTextTranslationJobsRequest {
  __type?: "ListTextTranslationJobsRequest";
  /**
   * <p>The parameters that specify which batch translation jobs to retrieve. Filters include job
   *       name, job status, and submission time. You can only set one filter at a time.</p>
   */
  Filter?: TextTranslationJobFilter;

  /**
   * <p>The maximum number of results to return in each page. The default value is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListTextTranslationJobsRequest {
  export const filterSensitiveLog = (obj: ListTextTranslationJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTextTranslationJobsRequest => __isa(o, "ListTextTranslationJobsRequest");
}

export interface ListTextTranslationJobsResponse {
  __type?: "ListTextTranslationJobsResponse";
  /**
   * <p>The token to use to retreive the next page of results. This value is <code>null</code>
   *       when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  TextTranslationJobPropertiesList?: TextTranslationJobProperties[];
}

export namespace ListTextTranslationJobsResponse {
  export const filterSensitiveLog = (obj: ListTextTranslationJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTextTranslationJobsResponse => __isa(o, "ListTextTranslationJobsResponse");
}

export enum MergeStrategy {
  OVERWRITE = "OVERWRITE",
}

/**
 * <p>The output configuration properties for a batch translation job.</p>
 */
export interface OutputDataConfig {
  __type?: "OutputDataConfig";
  /**
   * <p>The URI of the S3 folder that contains a translation job's output file. The folder must
   *       be in the same Region as the API endpoint that you are calling.</p>
   */
  S3Uri: string | undefined;
}

export namespace OutputDataConfig {
  export const filterSensitiveLog = (obj: OutputDataConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OutputDataConfig => __isa(o, "OutputDataConfig");
}

/**
 * <p>The resource you are looking for has not been found. Review the resource you're looking
 *       for and see if a different resource will accomplish your needs before retrying the revised
 *       request.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The Amazon Translate service is temporarily unavailable. Please wait a bit and then retry your
 *       request.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceUnavailableException => __isa(o, "ServiceUnavailableException");
}

export interface StartTextTranslationJobRequest {
  __type?: "StartTextTranslationJobRequest";
  /**
   * <p>The client token of the EC2 instance calling the request. This token is auto-generated
   *       when using the Amazon Translate SDK. Otherwise, use the <a href="docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html">DescribeInstances</a> EC2 operation to retreive an instance's client token. For more
   *       information, see <a href="docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html#client-tokens">Client
   *         Tokens</a> in the EC2 User Guide.</p>
   */
  ClientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity Access and Management (IAM) role
   *       that grants Amazon Translate read access to your input data. For more nformation, see <a>identity-and-access-management</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Specifies the format and S3 location of the input documents for the translation
   *       job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The name of the batch translation job to be performed.</p>
   */
  JobName?: string;

  /**
   * <p>Specifies the S3 folder to which your job output will be saved.
   *       </p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The language code of the input language. For a list of language codes, see <a>what-is-languages</a>.</p>
   *          <p>Amazon Translate does not automatically detect a source language during batch translation
   *       jobs.</p>
   */
  SourceLanguageCode: string | undefined;

  /**
   * <p>The language code of the output language.</p>
   */
  TargetLanguageCodes: string[] | undefined;

  /**
   * <p>The name of the terminology to use in the batch translation job. For a list of available
   *       terminologies, use the <a>ListTerminologies</a> operation.</p>
   */
  TerminologyNames?: string[];
}

export namespace StartTextTranslationJobRequest {
  export const filterSensitiveLog = (obj: StartTextTranslationJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartTextTranslationJobRequest => __isa(o, "StartTextTranslationJobRequest");
}

export interface StartTextTranslationJobResponse {
  __type?: "StartTextTranslationJobResponse";
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
   *                   <code>COMPLETED_WITH_ERRORS</code> - The job was completed with errors. The errors can
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

export namespace StartTextTranslationJobResponse {
  export const filterSensitiveLog = (obj: StartTextTranslationJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartTextTranslationJobResponse => __isa(o, "StartTextTranslationJobResponse");
}

export interface StopTextTranslationJobRequest {
  __type?: "StopTextTranslationJobRequest";
  /**
   * <p>The job ID of the job to be stopped.</p>
   */
  JobId: string | undefined;
}

export namespace StopTextTranslationJobRequest {
  export const filterSensitiveLog = (obj: StopTextTranslationJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopTextTranslationJobRequest => __isa(o, "StopTextTranslationJobRequest");
}

export interface StopTextTranslationJobResponse {
  __type?: "StopTextTranslationJobResponse";
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

export namespace StopTextTranslationJobResponse {
  export const filterSensitiveLog = (obj: StopTextTranslationJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopTextTranslationJobResponse => __isa(o, "StopTextTranslationJobResponse");
}

/**
 * <p>The term being translated by the custom terminology.</p>
 */
export interface Term {
  __type?: "Term";
  /**
   * <p>The source text of the term being translated by the custom terminology.</p>
   */
  SourceText?: string;

  /**
   * <p>The target text of the term being translated by the custom terminology.</p>
   */
  TargetText?: string;
}

export namespace Term {
  export const filterSensitiveLog = (obj: Term): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Term => __isa(o, "Term");
}

/**
 * <p>The data associated with the custom terminology.</p>
 */
export interface TerminologyData {
  __type?: "TerminologyData";
  /**
   * <p>The file containing the custom terminology data. Your version of the AWS SDK performs a
   *       Base64-encoding on this field before sending a request to the AWS service. Users of the SDK
   *       should not perform Base64-encoding themselves.</p>
   */
  File: Uint8Array | undefined;

  /**
   * <p>The data format of the custom terminology. Either CSV or TMX.</p>
   */
  Format: TerminologyDataFormat | string | undefined;
}

export namespace TerminologyData {
  export const filterSensitiveLog = (obj: TerminologyData): any => ({
    ...obj,
    ...(obj.File && { File: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is TerminologyData => __isa(o, "TerminologyData");
}

export enum TerminologyDataFormat {
  CSV = "CSV",
  TMX = "TMX",
}

/**
 * <p>The location of the custom terminology data.</p>
 */
export interface TerminologyDataLocation {
  __type?: "TerminologyDataLocation";
  /**
   * <p>The location of the custom terminology data.</p>
   */
  Location: string | undefined;

  /**
   * <p>The repository type for the custom terminology data.</p>
   */
  RepositoryType: string | undefined;
}

export namespace TerminologyDataLocation {
  export const filterSensitiveLog = (obj: TerminologyDataLocation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TerminologyDataLocation => __isa(o, "TerminologyDataLocation");
}

/**
 * <p>The properties of the custom terminology.</p>
 */
export interface TerminologyProperties {
  __type?: "TerminologyProperties";
  /**
   * <p> The Amazon Resource Name (ARN) of the custom terminology. </p>
   */
  Arn?: string;

  /**
   * <p>The time at which the custom terminology was created, based on the timestamp.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description of the custom terminology properties.</p>
   */
  Description?: string;

  /**
   * <p>The encryption key for the custom terminology.</p>
   */
  EncryptionKey?: EncryptionKey;

  /**
   * <p>The time at which the custom terminology was last update, based on the timestamp.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The name of the custom terminology.</p>
   */
  Name?: string;

  /**
   * <p>The size of the file used when importing a custom terminology.</p>
   */
  SizeBytes?: number;

  /**
   * <p>The language code for the source text of the translation request for which the custom
   *       terminology is being used.</p>
   */
  SourceLanguageCode?: string;

  /**
   * <p>The language codes for the target languages available with the custom terminology file.
   *       All possible target languages are returned in array.</p>
   */
  TargetLanguageCodes?: string[];

  /**
   * <p>The number of terms included in the custom terminology.</p>
   */
  TermCount?: number;
}

export namespace TerminologyProperties {
  export const filterSensitiveLog = (obj: TerminologyProperties): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TerminologyProperties => __isa(o, "TerminologyProperties");
}

/**
 * <p> The size of the text you submitted exceeds the size limit. Reduce the size of the text or
 *       use a smaller document and then retry your request. </p>
 */
export interface TextSizeLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "TextSizeLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace TextSizeLimitExceededException {
  export const filterSensitiveLog = (obj: TextSizeLimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TextSizeLimitExceededException => __isa(o, "TextSizeLimitExceededException");
}

/**
 * <p>Provides information for filtering a list of translation jobs. For more information, see
 *         <a>ListTextTranslationJobs</a>.</p>
 */
export interface TextTranslationJobFilter {
  __type?: "TextTranslationJobFilter";
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
   *       returns only the jobs submitted after the specified time. Jobs are returned in descending
   *       order, newest to oldest.</p>
   */
  SubmittedAfterTime?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing and
   *       returns only the jobs submitted before the specified time. Jobs are returned in ascending
   *       order, oldest to newest.</p>
   */
  SubmittedBeforeTime?: Date;
}

export namespace TextTranslationJobFilter {
  export const filterSensitiveLog = (obj: TextTranslationJobFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TextTranslationJobFilter => __isa(o, "TextTranslationJobFilter");
}

/**
 * <p>Provides information about a translation job.</p>
 */
export interface TextTranslationJobProperties {
  __type?: "TextTranslationJobProperties";
  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity Access and Management (IAM) role
   *       that granted Amazon Translate read access to the job's input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The time at which the translation job ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input configuration properties that were specified when the job was requested.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The number of documents successfully and unsuccessfully processed during the translation
   *       job.</p>
   */
  JobDetails?: JobDetails;

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
   * <p>An explanation of any errors that may have occured during the translation job.</p>
   */
  Message?: string;

  /**
   * <p>The output configuration properties that were specified when the job was requested.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The language code of the language of the source text. The language must be a language
   *       supported by Amazon Translate.</p>
   */
  SourceLanguageCode?: string;

  /**
   * <p>The time at which the translation job was submitted.</p>
   */
  SubmittedTime?: Date;

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
}

export namespace TextTranslationJobProperties {
  export const filterSensitiveLog = (obj: TextTranslationJobProperties): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TextTranslationJobProperties => __isa(o, "TextTranslationJobProperties");
}

/**
 * <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TooManyRequestsException => __isa(o, "TooManyRequestsException");
}

export interface TranslateTextRequest {
  __type?: "TranslateTextRequest";
  /**
   * <p>The language code for the language of the source text. The language must be a language
   *       supported by Amazon Translate. For a list of language codes, see <a>what-is-languages</a>.</p>
   *          <p>To have Amazon Translate determine the source language of your text, you can specify
   *         <code>auto</code> in the <code>SourceLanguageCode</code> field. If you specify
   *         <code>auto</code>, Amazon Translate will call <a href="https://docs.aws.amazon.com/comprehend/latest/dg/comprehend-general.html">Amazon
   *         Comprehend</a> to determine the source language.</p>
   */
  SourceLanguageCode: string | undefined;

  /**
   * <p>The language code requested for the language of the target text. The language must be a
   *       language supported by Amazon Translate.</p>
   */
  TargetLanguageCode: string | undefined;

  /**
   * <p>The name of the terminology list file to be used in the TranslateText request. You can use
   *       1 terminology list at most in a <code>TranslateText</code> request. Terminology lists can
   *       contain a maximum of 256 terms.</p>
   */
  TerminologyNames?: string[];

  /**
   * <p>The text to translate. The text string can be a maximum of 5,000 bytes long. Depending on
   *       your character set, this may be fewer than 5,000 characters.</p>
   */
  Text: string | undefined;
}

export namespace TranslateTextRequest {
  export const filterSensitiveLog = (obj: TranslateTextRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TranslateTextRequest => __isa(o, "TranslateTextRequest");
}

export interface TranslateTextResponse {
  __type?: "TranslateTextResponse";
  /**
   * <p>The names of the custom terminologies applied to the input text by Amazon Translate for the
   *       translated text response.</p>
   */
  AppliedTerminologies?: AppliedTerminology[];

  /**
   * <p>The language code for the language of the source text.</p>
   */
  SourceLanguageCode: string | undefined;

  /**
   * <p>The language code for the language of the target text. </p>
   */
  TargetLanguageCode: string | undefined;

  /**
   * <p>The translated text.</p>
   */
  TranslatedText: string | undefined;
}

export namespace TranslateTextResponse {
  export const filterSensitiveLog = (obj: TranslateTextResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TranslateTextResponse => __isa(o, "TranslateTextResponse");
}

/**
 * <p>Amazon Translate does not support translation from the language of the source text into the requested
 *       target language. For more information, see <a>how-to-error-msg</a>. </p>
 */
export interface UnsupportedLanguagePairException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedLanguagePairException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The language code for the language of the input text. </p>
   */
  SourceLanguageCode?: string;

  /**
   * <p>The language code for the language of the translated text. </p>
   */
  TargetLanguageCode?: string;
}

export namespace UnsupportedLanguagePairException {
  export const filterSensitiveLog = (obj: UnsupportedLanguagePairException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnsupportedLanguagePairException => __isa(o, "UnsupportedLanguagePairException");
}
