import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The result of calling the  operation.
 *       The operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 */
export interface BatchDetectDominantLanguageItemResult {
  __type?: "BatchDetectDominantLanguageItemResult";
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>One or more <a>DominantLanguage</a> objects describing the dominant
   *       languages in the document.</p>
   */
  Languages?: DominantLanguage[];
}

export namespace BatchDetectDominantLanguageItemResult {
  export const filterSensitiveLog = (obj: BatchDetectDominantLanguageItemResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectDominantLanguageItemResult =>
    __isa(o, "BatchDetectDominantLanguageItemResult");
}

export interface BatchDetectDominantLanguageRequest {
  __type?: "BatchDetectDominantLanguageRequest";
  /**
   * <p>A list containing the text of the input documents. The list can contain a maximum of 25
   *       documents. Each document should contain at least 20 characters and must contain fewer than
   *       5,000 bytes of UTF-8 encoded characters.</p>
   */
  TextList: string[] | undefined;
}

export namespace BatchDetectDominantLanguageRequest {
  export const filterSensitiveLog = (obj: BatchDetectDominantLanguageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectDominantLanguageRequest =>
    __isa(o, "BatchDetectDominantLanguageRequest");
}

export interface BatchDetectDominantLanguageResponse {
  __type?: "BatchDetectDominantLanguageResponse";
  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;

  /**
   * <p>A list of  objects
   *       containing the results of the operation. The results are sorted in ascending order by the
   *         <code>Index</code> field and match the order of the documents in the input list. If all of
   *       the documents contain an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectDominantLanguageItemResult[] | undefined;
}

export namespace BatchDetectDominantLanguageResponse {
  export const filterSensitiveLog = (obj: BatchDetectDominantLanguageResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectDominantLanguageResponse =>
    __isa(o, "BatchDetectDominantLanguageResponse");
}

/**
 * <p>The result of calling the  operation. The
 *       operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 */
export interface BatchDetectEntitiesItemResult {
  __type?: "BatchDetectEntitiesItemResult";
  /**
   * <p>One or more <a>Entity</a> objects, one for each entity detected in the
   *       document.</p>
   */
  Entities?: Entity[];

  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;
}

export namespace BatchDetectEntitiesItemResult {
  export const filterSensitiveLog = (obj: BatchDetectEntitiesItemResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectEntitiesItemResult => __isa(o, "BatchDetectEntitiesItemResult");
}

export interface BatchDetectEntitiesRequest {
  __type?: "BatchDetectEntitiesRequest";
  /**
   * <p>The language of the input documents. You can specify any of the primary languages supported by Amazon
   *       Comprehend.
   *       All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A list containing the text of the input documents. The list can contain a maximum of 25
   *       documents. Each document must contain fewer than 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  TextList: string[] | undefined;
}

export namespace BatchDetectEntitiesRequest {
  export const filterSensitiveLog = (obj: BatchDetectEntitiesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectEntitiesRequest => __isa(o, "BatchDetectEntitiesRequest");
}

export interface BatchDetectEntitiesResponse {
  __type?: "BatchDetectEntitiesResponse";
  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;

  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectEntitiesItemResult[] | undefined;
}

export namespace BatchDetectEntitiesResponse {
  export const filterSensitiveLog = (obj: BatchDetectEntitiesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectEntitiesResponse => __isa(o, "BatchDetectEntitiesResponse");
}

/**
 * <p>The result of calling the  operation. The
 *       operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 */
export interface BatchDetectKeyPhrasesItemResult {
  __type?: "BatchDetectKeyPhrasesItemResult";
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>One or more <a>KeyPhrase</a> objects, one for each key phrase detected in
   *       the document.</p>
   */
  KeyPhrases?: KeyPhrase[];
}

export namespace BatchDetectKeyPhrasesItemResult {
  export const filterSensitiveLog = (obj: BatchDetectKeyPhrasesItemResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectKeyPhrasesItemResult => __isa(o, "BatchDetectKeyPhrasesItemResult");
}

export interface BatchDetectKeyPhrasesRequest {
  __type?: "BatchDetectKeyPhrasesRequest";
  /**
   * <p>The language of the input documents. You can specify any of the primary languages supported by Amazon
   *       Comprehend.
   *       All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A list containing the text of the input documents. The list can contain a maximum of 25
   *       documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  TextList: string[] | undefined;
}

export namespace BatchDetectKeyPhrasesRequest {
  export const filterSensitiveLog = (obj: BatchDetectKeyPhrasesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectKeyPhrasesRequest => __isa(o, "BatchDetectKeyPhrasesRequest");
}

export interface BatchDetectKeyPhrasesResponse {
  __type?: "BatchDetectKeyPhrasesResponse";
  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;

  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectKeyPhrasesItemResult[] | undefined;
}

export namespace BatchDetectKeyPhrasesResponse {
  export const filterSensitiveLog = (obj: BatchDetectKeyPhrasesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectKeyPhrasesResponse => __isa(o, "BatchDetectKeyPhrasesResponse");
}

/**
 * <p>The result of calling the  operation. The
 *       operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 */
export interface BatchDetectSentimentItemResult {
  __type?: "BatchDetectSentimentItemResult";
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>The sentiment detected in the document.</p>
   */
  Sentiment?: SentimentType | string;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its sentiment
   *       detection.</p>
   */
  SentimentScore?: SentimentScore;
}

export namespace BatchDetectSentimentItemResult {
  export const filterSensitiveLog = (obj: BatchDetectSentimentItemResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectSentimentItemResult => __isa(o, "BatchDetectSentimentItemResult");
}

export interface BatchDetectSentimentRequest {
  __type?: "BatchDetectSentimentRequest";
  /**
   * <p>The language of the input documents. You can specify any of the primary languages supported by Amazon
   *       Comprehend.
   *       All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A list containing the text of the input documents. The list can contain a maximum of 25
   *       documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  TextList: string[] | undefined;
}

export namespace BatchDetectSentimentRequest {
  export const filterSensitiveLog = (obj: BatchDetectSentimentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectSentimentRequest => __isa(o, "BatchDetectSentimentRequest");
}

export interface BatchDetectSentimentResponse {
  __type?: "BatchDetectSentimentResponse";
  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;

  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectSentimentItemResult[] | undefined;
}

export namespace BatchDetectSentimentResponse {
  export const filterSensitiveLog = (obj: BatchDetectSentimentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectSentimentResponse => __isa(o, "BatchDetectSentimentResponse");
}

/**
 * <p>The result of calling the  operation. The operation
 *       returns one object that is successfully processed by the operation.</p>
 */
export interface BatchDetectSyntaxItemResult {
  __type?: "BatchDetectSyntaxItemResult";
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>The syntax tokens for the words in the document, one token for each word.</p>
   */
  SyntaxTokens?: SyntaxToken[];
}

export namespace BatchDetectSyntaxItemResult {
  export const filterSensitiveLog = (obj: BatchDetectSyntaxItemResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectSyntaxItemResult => __isa(o, "BatchDetectSyntaxItemResult");
}

export interface BatchDetectSyntaxRequest {
  __type?: "BatchDetectSyntaxRequest";
  /**
   * <p>The language of the input documents. You can specify any of the following languages supported by Amazon
   *       Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), or Portuguese ("pt"). All
   *       documents must be in the same language.</p>
   */
  LanguageCode: SyntaxLanguageCode | string | undefined;

  /**
   * <p>A list containing the text of the input documents. The list can contain a maximum of 25
   *       documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  TextList: string[] | undefined;
}

export namespace BatchDetectSyntaxRequest {
  export const filterSensitiveLog = (obj: BatchDetectSyntaxRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectSyntaxRequest => __isa(o, "BatchDetectSyntaxRequest");
}

export interface BatchDetectSyntaxResponse {
  __type?: "BatchDetectSyntaxResponse";
  /**
   * <p>A list containing one  object for each document that
   *       contained an error. The results are sorted in ascending order by the <code>Index</code> field
   *       and match the order of the documents in the input list. If there are no errors in the batch,
   *       the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;

  /**
   * <p>A list of  objects containing the results
   *       of the operation. The results are sorted in ascending order by the <code>Index</code> field
   *       and match the order of the documents in the input list. If all of the documents contain an
   *       error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectSyntaxItemResult[] | undefined;
}

export namespace BatchDetectSyntaxResponse {
  export const filterSensitiveLog = (obj: BatchDetectSyntaxResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDetectSyntaxResponse => __isa(o, "BatchDetectSyntaxResponse");
}

/**
 * <p>Describes an error that occurred while processing a document in a batch. The operation
 *       returns on <code>BatchItemError</code> object for each document that contained an
 *       error.</p>
 */
export interface BatchItemError {
  __type?: "BatchItemError";
  /**
   * <p>The numeric error code of the error.</p>
   */
  ErrorCode?: string;

  /**
   * <p>A text description of the error.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;
}

export namespace BatchItemError {
  export const filterSensitiveLog = (obj: BatchItemError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchItemError => __isa(o, "BatchItemError");
}

/**
 * <p>The number of documents in the request exceeds the limit of 25. Try your request again
 *       with fewer documents.</p>
 */
export interface BatchSizeLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "BatchSizeLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace BatchSizeLimitExceededException {
  export const filterSensitiveLog = (obj: BatchSizeLimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchSizeLimitExceededException => __isa(o, "BatchSizeLimitExceededException");
}

/**
 * <p>Describes the result metrics for the test data associated with an documentation classifier.</p>
 */
export interface ClassifierEvaluationMetrics {
  __type?: "ClassifierEvaluationMetrics";
  /**
   * <p>The fraction of the labels that were correct recognized. It is computed by dividing
   *       the number of labels in the test documents that were correctly recognized by the total number of labels in the test documents.</p>
   */
  Accuracy?: number;

  /**
   * <p>A measure of how accurate the classifier results are for the test data. It is
   *       derived from the <code>Precision</code> and <code>Recall</code> values. The <code>F1Score</code> is
   *       the harmonic average of the two scores. The highest score is 1, and the worst score is 0.
   *     </p>
   */
  F1Score?: number;

  /**
   * <p>Indicates the fraction of labels that are incorrectly predicted. Also seen as the fraction of wrong labels compared to the
   *       total number of labels. Scores closer to zero are better.</p>
   */
  HammingLoss?: number;

  /**
   * <p>A measure of how accurate the classifier results are for the test data. It is a combination of the <code>Micro Precision</code>
   *       and <code>Micro Recall</code> values. The <code>Micro F1Score</code> is the harmonic mean of the two scores. The highest score is 1,
   *       and the worst score is 0.</p>
   */
  MicroF1Score?: number;

  /**
   * <p>A measure of the usefulness of the recognizer results in the test data. High precision means that the recognizer returned
   *       substantially more relevant results than irrelevant ones. Unlike the Precision metric which comes from averaging the precision
   *       of all available labels, this is based on the overall score of all precision scores added together.</p>
   */
  MicroPrecision?: number;

  /**
   * <p>A measure of how complete the classifier results are for the test data. High recall means that the classifier returned
   *       most of the relevant results. Specifically, this indicates how many of the correct categories in the text that the model
   *       can predict. It is a percentage of correct categories in the text that can found. Instead of averaging the recall scores
   *       of all labels (as with Recall), micro Recall is based on the overall score of all recall scores added together.</p>
   */
  MicroRecall?: number;

  /**
   * <p>A measure of the usefulness of the classifier results in the test data. High precision
   *       means that the classifier returned substantially more relevant results than irrelevant ones.</p>
   */
  Precision?: number;

  /**
   * <p>A measure of how complete the classifier results are for the test data. High recall means
   *       that the classifier returned most of the relevant results. </p>
   */
  Recall?: number;
}

export namespace ClassifierEvaluationMetrics {
  export const filterSensitiveLog = (obj: ClassifierEvaluationMetrics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClassifierEvaluationMetrics => __isa(o, "ClassifierEvaluationMetrics");
}

/**
 * <p>Provides information about a document classifier.</p>
 */
export interface ClassifierMetadata {
  __type?: "ClassifierMetadata";
  /**
   * <p> Describes the result metrics for the test data associated with an documentation classifier.</p>
   */
  EvaluationMetrics?: ClassifierEvaluationMetrics;

  /**
   * <p>The number of labels in the input data. </p>
   */
  NumberOfLabels?: number;

  /**
   * <p>The number of documents in the input data that were used to test the classifier. Typically
   *       this is 10 to 20 percent of the input documents.</p>
   */
  NumberOfTestDocuments?: number;

  /**
   * <p>The number of documents in the input data that were used to train the classifier.
   *       Typically this is 80 to 90 percent of the input documents.</p>
   */
  NumberOfTrainedDocuments?: number;
}

export namespace ClassifierMetadata {
  export const filterSensitiveLog = (obj: ClassifierMetadata): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClassifierMetadata => __isa(o, "ClassifierMetadata");
}

export interface ClassifyDocumentRequest {
  __type?: "ClassifyDocumentRequest";
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The document text to be analyzed.</p>
   */
  Text: string | undefined;
}

export namespace ClassifyDocumentRequest {
  export const filterSensitiveLog = (obj: ClassifyDocumentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClassifyDocumentRequest => __isa(o, "ClassifyDocumentRequest");
}

export interface ClassifyDocumentResponse {
  __type?: "ClassifyDocumentResponse";
  /**
   * <p>The classes used by the document being analyzed. These are used for multi-class trained models. Individual classes are mutually exclusive and each document is expected
   *       to have only a single class assigned to it. For example, an animal can be a dog or a cat, but not both at the same time. </p>
   */
  Classes?: DocumentClass[];

  /**
   * <p>The labels used the document being analyzed. These are used for multi-label trained models. Individual labels represent different categories that are related in some manner
   *       and are not multually exclusive. For example, a movie can be just an action movie, or it can be an action movie, a science fiction movie, and
   *       a comedy, all at the same time. </p>
   */
  Labels?: DocumentLabel[];
}

export namespace ClassifyDocumentResponse {
  export const filterSensitiveLog = (obj: ClassifyDocumentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClassifyDocumentResponse => __isa(o, "ClassifyDocumentResponse");
}

/**
 * <p>Concurrent modification of the tags associated with an Amazon Comprehend resource is not supported. </p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  Message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConcurrentModificationException => __isa(o, "ConcurrentModificationException");
}

export interface CreateDocumentClassifierRequest {
  __type?: "CreateDocumentClassifierRequest";
  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon Comprehend
   *       generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants
   *       Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The name of the document classifier.</p>
   */
  DocumentClassifierName: string | undefined;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: DocumentClassifierInputDataConfig | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the following languages supported by Amazon
   *       Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), or Portuguese ("pt"). All
   *       documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>Indicates the mode in which the classifier will be trained. The classifier can be trained in multi-class mode, which
   *       identifies one and only one class for each document, or multi-label mode, which identifies one or more labels for each
   *       document. In multi-label mode, multiple labels for an individual document are separated by a delimiter. The default
   *       delimiter between labels is a pipe (|).</p>
   */
  Mode?: DocumentClassifierMode | string;

  /**
   * <p>Enables the addition of output results configuration parameters for custom classifier jobs.</p>
   */
  OutputDataConfig?: DocumentClassifierOutputDataConfig;

  /**
   * <p>Tags to be associated with the document classifier being created. A tag is a key-value pair that adds as a metadata to a resource
   *       used by Amazon Comprehend. For example,
   *       a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.   </p>
   */
  Tags?: Tag[];

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *       process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace CreateDocumentClassifierRequest {
  export const filterSensitiveLog = (obj: CreateDocumentClassifierRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDocumentClassifierRequest => __isa(o, "CreateDocumentClassifierRequest");
}

export interface CreateDocumentClassifierResponse {
  __type?: "CreateDocumentClassifierResponse";
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier.</p>
   */
  DocumentClassifierArn?: string;
}

export namespace CreateDocumentClassifierResponse {
  export const filterSensitiveLog = (obj: CreateDocumentClassifierResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDocumentClassifierResponse => __isa(o, "CreateDocumentClassifierResponse");
}

export interface CreateEndpointRequest {
  __type?: "CreateEndpointRequest";
  /**
   * <p>An idempotency token provided by the customer. If this token matches a previous endpoint creation request, Amazon Comprehend
   *       will not return a <code>ResourceInUseException</code>. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p> The desired number of inference units to be used by the model using this endpoint.  Each
   *       inference unit represents of a throughput of 100 characters per second.</p>
   */
  DesiredInferenceUnits: number | undefined;

  /**
   * <p>This is the descriptive suffix that becomes part of the <code>EndpointArn</code> used for all subsequent requests to this resource.  </p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the model to which the endpoint will be attached.</p>
   */
  ModelArn: string | undefined;

  /**
   * <p>Tags associated with the endpoint being created. A tag is a key-value pair that adds metadata
   *       to the endpoint. For example, a tag with "Sales" as the key might be added to an endpoint
   *       to indicate its use by the sales department. </p>
   */
  Tags?: Tag[];
}

export namespace CreateEndpointRequest {
  export const filterSensitiveLog = (obj: CreateEndpointRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateEndpointRequest => __isa(o, "CreateEndpointRequest");
}

export interface CreateEndpointResponse {
  __type?: "CreateEndpointResponse";
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being created.</p>
   */
  EndpointArn?: string;
}

export namespace CreateEndpointResponse {
  export const filterSensitiveLog = (obj: CreateEndpointResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateEndpointResponse => __isa(o, "CreateEndpointResponse");
}

export interface CreateEntityRecognizerRequest {
  __type?: "CreateEntityRecognizerRequest";
  /**
   * <p> A unique identifier for the request. If you don't set the client request token, Amazon Comprehend
   *       generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Specifies the format and location of the input data. The S3 bucket containing the input data must
   *     be located in the same region as the entity recognizer being created. </p>
   */
  InputDataConfig: EntityRecognizerInputDataConfig | undefined;

  /**
   * <p> The language of the input documents. All documents must be in the same language. Only English ("en") is currently supported. </p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The name given to the newly created recognizer. Recognizer names can be a maximum of 256 characters.
   *       Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The name must be unique in the account/region.</p>
   */
  RecognizerName: string | undefined;

  /**
   * <p>Tags to be associated with the entity recognizer being created. A tag is a key-value pair that adds as a metadata to a
   *       resource used by Amazon Comprehend. For example,
   *       a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.    </p>
   */
  Tags?: Tag[];

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *       process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom entity recognizer.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace CreateEntityRecognizerRequest {
  export const filterSensitiveLog = (obj: CreateEntityRecognizerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateEntityRecognizerRequest => __isa(o, "CreateEntityRecognizerRequest");
}

export interface CreateEntityRecognizerResponse {
  __type?: "CreateEntityRecognizerResponse";
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn?: string;
}

export namespace CreateEntityRecognizerResponse {
  export const filterSensitiveLog = (obj: CreateEntityRecognizerResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateEntityRecognizerResponse => __isa(o, "CreateEntityRecognizerResponse");
}

export interface DeleteDocumentClassifierRequest {
  __type?: "DeleteDocumentClassifierRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier. </p>
   */
  DocumentClassifierArn: string | undefined;
}

export namespace DeleteDocumentClassifierRequest {
  export const filterSensitiveLog = (obj: DeleteDocumentClassifierRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDocumentClassifierRequest => __isa(o, "DeleteDocumentClassifierRequest");
}

export interface DeleteDocumentClassifierResponse {
  __type?: "DeleteDocumentClassifierResponse";
}

export namespace DeleteDocumentClassifierResponse {
  export const filterSensitiveLog = (obj: DeleteDocumentClassifierResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDocumentClassifierResponse => __isa(o, "DeleteDocumentClassifierResponse");
}

export interface DeleteEndpointRequest {
  __type?: "DeleteEndpointRequest";
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being deleted.</p>
   */
  EndpointArn: string | undefined;
}

export namespace DeleteEndpointRequest {
  export const filterSensitiveLog = (obj: DeleteEndpointRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEndpointRequest => __isa(o, "DeleteEndpointRequest");
}

export interface DeleteEndpointResponse {
  __type?: "DeleteEndpointResponse";
}

export namespace DeleteEndpointResponse {
  export const filterSensitiveLog = (obj: DeleteEndpointResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEndpointResponse => __isa(o, "DeleteEndpointResponse");
}

export interface DeleteEntityRecognizerRequest {
  __type?: "DeleteEntityRecognizerRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn: string | undefined;
}

export namespace DeleteEntityRecognizerRequest {
  export const filterSensitiveLog = (obj: DeleteEntityRecognizerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEntityRecognizerRequest => __isa(o, "DeleteEntityRecognizerRequest");
}

export interface DeleteEntityRecognizerResponse {
  __type?: "DeleteEntityRecognizerResponse";
}

export namespace DeleteEntityRecognizerResponse {
  export const filterSensitiveLog = (obj: DeleteEntityRecognizerResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEntityRecognizerResponse => __isa(o, "DeleteEntityRecognizerResponse");
}

export interface DescribeDocumentClassificationJobRequest {
  __type?: "DescribeDocumentClassificationJobRequest";
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeDocumentClassificationJobRequest {
  export const filterSensitiveLog = (obj: DescribeDocumentClassificationJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDocumentClassificationJobRequest =>
    __isa(o, "DescribeDocumentClassificationJobRequest");
}

export interface DescribeDocumentClassificationJobResponse {
  __type?: "DescribeDocumentClassificationJobResponse";
  /**
   * <p>An object that describes the properties associated with the document classification
   *       job.</p>
   */
  DocumentClassificationJobProperties?: DocumentClassificationJobProperties;
}

export namespace DescribeDocumentClassificationJobResponse {
  export const filterSensitiveLog = (obj: DescribeDocumentClassificationJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDocumentClassificationJobResponse =>
    __isa(o, "DescribeDocumentClassificationJobResponse");
}

export interface DescribeDocumentClassifierRequest {
  __type?: "DescribeDocumentClassifierRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier. The  operation returns this identifier in its
   *       response.</p>
   */
  DocumentClassifierArn: string | undefined;
}

export namespace DescribeDocumentClassifierRequest {
  export const filterSensitiveLog = (obj: DescribeDocumentClassifierRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDocumentClassifierRequest => __isa(o, "DescribeDocumentClassifierRequest");
}

export interface DescribeDocumentClassifierResponse {
  __type?: "DescribeDocumentClassifierResponse";
  /**
   * <p>An object that contains the properties associated with a document classifier.</p>
   */
  DocumentClassifierProperties?: DocumentClassifierProperties;
}

export namespace DescribeDocumentClassifierResponse {
  export const filterSensitiveLog = (obj: DescribeDocumentClassifierResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDocumentClassifierResponse =>
    __isa(o, "DescribeDocumentClassifierResponse");
}

export interface DescribeDominantLanguageDetectionJobRequest {
  __type?: "DescribeDominantLanguageDetectionJobRequest";
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeDominantLanguageDetectionJobRequest {
  export const filterSensitiveLog = (obj: DescribeDominantLanguageDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDominantLanguageDetectionJobRequest =>
    __isa(o, "DescribeDominantLanguageDetectionJobRequest");
}

export interface DescribeDominantLanguageDetectionJobResponse {
  __type?: "DescribeDominantLanguageDetectionJobResponse";
  /**
   * <p>An object that contains the properties associated with a dominant language detection
   *       job.</p>
   */
  DominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties;
}

export namespace DescribeDominantLanguageDetectionJobResponse {
  export const filterSensitiveLog = (obj: DescribeDominantLanguageDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDominantLanguageDetectionJobResponse =>
    __isa(o, "DescribeDominantLanguageDetectionJobResponse");
}

export interface DescribeEndpointRequest {
  __type?: "DescribeEndpointRequest";
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being described.</p>
   */
  EndpointArn: string | undefined;
}

export namespace DescribeEndpointRequest {
  export const filterSensitiveLog = (obj: DescribeEndpointRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeEndpointRequest => __isa(o, "DescribeEndpointRequest");
}

export interface DescribeEndpointResponse {
  __type?: "DescribeEndpointResponse";
  /**
   * <p>Describes information associated with the specific endpoint.</p>
   */
  EndpointProperties?: EndpointProperties;
}

export namespace DescribeEndpointResponse {
  export const filterSensitiveLog = (obj: DescribeEndpointResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeEndpointResponse => __isa(o, "DescribeEndpointResponse");
}

export interface DescribeEntitiesDetectionJobRequest {
  __type?: "DescribeEntitiesDetectionJobRequest";
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeEntitiesDetectionJobRequest {
  export const filterSensitiveLog = (obj: DescribeEntitiesDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeEntitiesDetectionJobRequest =>
    __isa(o, "DescribeEntitiesDetectionJobRequest");
}

export interface DescribeEntitiesDetectionJobResponse {
  __type?: "DescribeEntitiesDetectionJobResponse";
  /**
   * <p>An object that contains the properties associated with an entities detection job.</p>
   */
  EntitiesDetectionJobProperties?: EntitiesDetectionJobProperties;
}

export namespace DescribeEntitiesDetectionJobResponse {
  export const filterSensitiveLog = (obj: DescribeEntitiesDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeEntitiesDetectionJobResponse =>
    __isa(o, "DescribeEntitiesDetectionJobResponse");
}

export interface DescribeEntityRecognizerRequest {
  __type?: "DescribeEntityRecognizerRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn: string | undefined;
}

export namespace DescribeEntityRecognizerRequest {
  export const filterSensitiveLog = (obj: DescribeEntityRecognizerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeEntityRecognizerRequest => __isa(o, "DescribeEntityRecognizerRequest");
}

export interface DescribeEntityRecognizerResponse {
  __type?: "DescribeEntityRecognizerResponse";
  /**
   * <p>Describes information associated with an entity recognizer.</p>
   */
  EntityRecognizerProperties?: EntityRecognizerProperties;
}

export namespace DescribeEntityRecognizerResponse {
  export const filterSensitiveLog = (obj: DescribeEntityRecognizerResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeEntityRecognizerResponse => __isa(o, "DescribeEntityRecognizerResponse");
}

export interface DescribeKeyPhrasesDetectionJobRequest {
  __type?: "DescribeKeyPhrasesDetectionJobRequest";
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeKeyPhrasesDetectionJobRequest {
  export const filterSensitiveLog = (obj: DescribeKeyPhrasesDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeKeyPhrasesDetectionJobRequest =>
    __isa(o, "DescribeKeyPhrasesDetectionJobRequest");
}

export interface DescribeKeyPhrasesDetectionJobResponse {
  __type?: "DescribeKeyPhrasesDetectionJobResponse";
  /**
   * <p>An object that contains the properties associated with a key phrases detection job.
   *     </p>
   */
  KeyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties;
}

export namespace DescribeKeyPhrasesDetectionJobResponse {
  export const filterSensitiveLog = (obj: DescribeKeyPhrasesDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeKeyPhrasesDetectionJobResponse =>
    __isa(o, "DescribeKeyPhrasesDetectionJobResponse");
}

export interface DescribeSentimentDetectionJobRequest {
  __type?: "DescribeSentimentDetectionJobRequest";
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeSentimentDetectionJobRequest {
  export const filterSensitiveLog = (obj: DescribeSentimentDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeSentimentDetectionJobRequest =>
    __isa(o, "DescribeSentimentDetectionJobRequest");
}

export interface DescribeSentimentDetectionJobResponse {
  __type?: "DescribeSentimentDetectionJobResponse";
  /**
   * <p>An object that contains the properties associated with a sentiment detection job.</p>
   */
  SentimentDetectionJobProperties?: SentimentDetectionJobProperties;
}

export namespace DescribeSentimentDetectionJobResponse {
  export const filterSensitiveLog = (obj: DescribeSentimentDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeSentimentDetectionJobResponse =>
    __isa(o, "DescribeSentimentDetectionJobResponse");
}

export interface DescribeTopicsDetectionJobRequest {
  __type?: "DescribeTopicsDetectionJobRequest";
  /**
   * <p>The identifier assigned by the user to the detection job.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeTopicsDetectionJobRequest {
  export const filterSensitiveLog = (obj: DescribeTopicsDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeTopicsDetectionJobRequest => __isa(o, "DescribeTopicsDetectionJobRequest");
}

export interface DescribeTopicsDetectionJobResponse {
  __type?: "DescribeTopicsDetectionJobResponse";
  /**
   * <p>The list of properties for the requested job.</p>
   */
  TopicsDetectionJobProperties?: TopicsDetectionJobProperties;
}

export namespace DescribeTopicsDetectionJobResponse {
  export const filterSensitiveLog = (obj: DescribeTopicsDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeTopicsDetectionJobResponse =>
    __isa(o, "DescribeTopicsDetectionJobResponse");
}

export interface DetectDominantLanguageRequest {
  __type?: "DetectDominantLanguageRequest";
  /**
   * <p>A UTF-8 text string. Each string should contain at least 20 characters and must contain
   *       fewer that 5,000 bytes of UTF-8 encoded characters.</p>
   */
  Text: string | undefined;
}

export namespace DetectDominantLanguageRequest {
  export const filterSensitiveLog = (obj: DetectDominantLanguageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectDominantLanguageRequest => __isa(o, "DetectDominantLanguageRequest");
}

export interface DetectDominantLanguageResponse {
  __type?: "DetectDominantLanguageResponse";
  /**
   * <p>The languages that Amazon Comprehend detected in the input text. For each language, the response
   *       returns the RFC 5646 language code and the level of confidence that Amazon Comprehend has in the accuracy
   *       of its inference. For more information about RFC 5646, see <a href="https://tools.ietf.org/html/rfc5646">Tags for Identifying Languages</a> on the
   *         <i>IETF Tools</i> web site.</p>
   */
  Languages?: DominantLanguage[];
}

export namespace DetectDominantLanguageResponse {
  export const filterSensitiveLog = (obj: DetectDominantLanguageResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectDominantLanguageResponse => __isa(o, "DetectDominantLanguageResponse");
}

export interface DetectEntitiesRequest {
  __type?: "DetectEntitiesRequest";
  /**
   * <p>The language of the input documents. You can specify any of the primary languages supported by Amazon
   *       Comprehend.
   *       All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  Text: string | undefined;
}

export namespace DetectEntitiesRequest {
  export const filterSensitiveLog = (obj: DetectEntitiesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectEntitiesRequest => __isa(o, "DetectEntitiesRequest");
}

export interface DetectEntitiesResponse {
  __type?: "DetectEntitiesResponse";
  /**
   * <p>A collection of entities identified in the input text. For each entity, the response
   *       provides the entity text, entity type, where the entity text begins and ends, and the level of
   *       confidence that Amazon Comprehend has in the detection. For a list of entity types, see <a>how-entities</a>. </p>
   */
  Entities?: Entity[];
}

export namespace DetectEntitiesResponse {
  export const filterSensitiveLog = (obj: DetectEntitiesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectEntitiesResponse => __isa(o, "DetectEntitiesResponse");
}

export interface DetectKeyPhrasesRequest {
  __type?: "DetectKeyPhrasesRequest";
  /**
   * <p>The language of the input documents. You can specify any of the primary languages supported by Amazon
   *       Comprehend.
   *       All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  Text: string | undefined;
}

export namespace DetectKeyPhrasesRequest {
  export const filterSensitiveLog = (obj: DetectKeyPhrasesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectKeyPhrasesRequest => __isa(o, "DetectKeyPhrasesRequest");
}

export interface DetectKeyPhrasesResponse {
  __type?: "DetectKeyPhrasesResponse";
  /**
   * <p>A collection of key phrases that Amazon Comprehend identified in the input text. For each key
   *       phrase, the response provides the text of the key phrase, where the key phrase begins and
   *       ends, and the level of confidence that Amazon Comprehend has in the accuracy of the detection. </p>
   */
  KeyPhrases?: KeyPhrase[];
}

export namespace DetectKeyPhrasesResponse {
  export const filterSensitiveLog = (obj: DetectKeyPhrasesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectKeyPhrasesResponse => __isa(o, "DetectKeyPhrasesResponse");
}

export interface DetectSentimentRequest {
  __type?: "DetectSentimentRequest";
  /**
   * <p>The language of the input documents. You can specify any of the primary languages supported by Amazon
   *       Comprehend.
   *       All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  Text: string | undefined;
}

export namespace DetectSentimentRequest {
  export const filterSensitiveLog = (obj: DetectSentimentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectSentimentRequest => __isa(o, "DetectSentimentRequest");
}

export interface DetectSentimentResponse {
  __type?: "DetectSentimentResponse";
  /**
   * <p>The inferred sentiment that Amazon Comprehend has the highest level of confidence in.</p>
   */
  Sentiment?: SentimentType | string;

  /**
   * <p>An object that lists the sentiments, and their corresponding confidence
   *       levels.</p>
   */
  SentimentScore?: SentimentScore;
}

export namespace DetectSentimentResponse {
  export const filterSensitiveLog = (obj: DetectSentimentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectSentimentResponse => __isa(o, "DetectSentimentResponse");
}

export interface DetectSyntaxRequest {
  __type?: "DetectSyntaxRequest";
  /**
   * <p>The language code of the input documents. You can specify any of the following languages supported by Amazon
   *       Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), or Portuguese ("pt").</p>
   */
  LanguageCode: SyntaxLanguageCode | string | undefined;

  /**
   * <p>A UTF-8 string. Each string must contain fewer that 5,000 bytes of UTF encoded
   *       characters.</p>
   */
  Text: string | undefined;
}

export namespace DetectSyntaxRequest {
  export const filterSensitiveLog = (obj: DetectSyntaxRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectSyntaxRequest => __isa(o, "DetectSyntaxRequest");
}

export interface DetectSyntaxResponse {
  __type?: "DetectSyntaxResponse";
  /**
   * <p>A collection of syntax tokens describing the text. For each token, the response provides
   *       the text, the token type, where the text begins and ends, and the level of confidence that
   *       Amazon Comprehend has that the token is correct. For a list of token types, see <a>how-syntax</a>.</p>
   */
  SyntaxTokens?: SyntaxToken[];
}

export namespace DetectSyntaxResponse {
  export const filterSensitiveLog = (obj: DetectSyntaxResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectSyntaxResponse => __isa(o, "DetectSyntaxResponse");
}

/**
 * <p>Specifies the class that categorizes the document being analyzed</p>
 */
export interface DocumentClass {
  __type?: "DocumentClass";
  /**
   * <p>The name of the class.</p>
   */
  Name?: string;

  /**
   * <p>The confidence score that Amazon Comprehend has this class correctly attributed.</p>
   */
  Score?: number;
}

export namespace DocumentClass {
  export const filterSensitiveLog = (obj: DocumentClass): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DocumentClass => __isa(o, "DocumentClass");
}

/**
 * <p>Provides information for filtering a list of document classification jobs. For more
 *       information, see the  operation. You can
 *       provide only one filter parameter in each request.</p>
 */
export interface DocumentClassificationJobFilter {
  __type?: "DocumentClassificationJobFilter";
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list based on job status. Returns only jobs with the specified status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;
}

export namespace DocumentClassificationJobFilter {
  export const filterSensitiveLog = (obj: DocumentClassificationJobFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DocumentClassificationJobFilter => __isa(o, "DocumentClassificationJobFilter");
}

/**
 * <p>Provides information about a document classification job.</p>
 */
export interface DocumentClassificationJobProperties {
  __type?: "DocumentClassificationJobProperties";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier. </p>
   */
  DocumentClassifierArn?: string;

  /**
   * <p>The time that the document classification job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the document
   *       classification job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The identifier assigned to the document classification job.</p>
   */
  JobId?: string;

  /**
   * <p>The name that you assigned to the document classification job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the document classification job. If the status is
   *         <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of the job.</p>
   */
  Message?: string;

  /**
   * <p>The output data configuration that you supplied when you created the document
   *       classification job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The time that the document classification job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *         process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your document classification job.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace DocumentClassificationJobProperties {
  export const filterSensitiveLog = (obj: DocumentClassificationJobProperties): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DocumentClassificationJobProperties =>
    __isa(o, "DocumentClassificationJobProperties");
}

/**
 * <p>Provides information for filtering a list of document classifiers. You can
 *          only specify
 *       one filtering parameter in a request. For more information, see the  operation.</p>
 */
export interface DocumentClassifierFilter {
  __type?: "DocumentClassifierFilter";
  /**
   * <p>Filters the list of classifiers based on status. </p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>Filters the list of classifiers based on the time that the classifier was submitted for
   *       processing. Returns only classifiers submitted after the specified time. Classifiers are returned in
   *       descending order, newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;

  /**
   * <p>Filters the list of classifiers based on the time that the classifier was submitted for
   *       processing. Returns only classifiers submitted before the specified time. Classifiers are returned in
   *       ascending order, oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;
}

export namespace DocumentClassifierFilter {
  export const filterSensitiveLog = (obj: DocumentClassifierFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DocumentClassifierFilter => __isa(o, "DocumentClassifierFilter");
}

/**
 * <p>The input properties for training a document classifier. </p>
 *          <p>For more information on how the input file is formatted, see
 *       <a>how-document-classification-training-data</a>.  </p>
 */
export interface DocumentClassifierInputDataConfig {
  __type?: "DocumentClassifierInputDataConfig";
  /**
   * <p>Indicates the delimiter used to separate each label for training a multi-label classifier. The default delimiter
   *       between labels is a pipe (|). You can use a different character as a delimiter (if it's an allowed character) by
   *       specifying it under Delimiter for labels. If the training documents use a delimiter other than the default or the
   *       delimiter you specify, the labels on that line will be combined to make a single unique label, such as LABELLABELLABEL.</p>
   */
  LabelDelimiter?: string;

  /**
   * <p>The Amazon S3 URI for the input data. The S3 bucket must be in the same region as the API
   *       endpoint that you are calling. The URI can point to a single input file or it can provide the
   *       prefix for a collection of input files.</p>
   *          <p>For example, if you use the URI <code>S3://bucketName/prefix</code>, if the prefix is a
   *       single file, Amazon Comprehend uses that file as input. If more than one file begins with the
   *       prefix, Amazon Comprehend uses all of them as input.</p>
   */
  S3Uri: string | undefined;
}

export namespace DocumentClassifierInputDataConfig {
  export const filterSensitiveLog = (obj: DocumentClassifierInputDataConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DocumentClassifierInputDataConfig => __isa(o, "DocumentClassifierInputDataConfig");
}

export enum DocumentClassifierMode {
  MULTI_CLASS = "MULTI_CLASS",
  MULTI_LABEL = "MULTI_LABEL",
}

/**
 * <p>Provides output results configuration parameters for custom classifier jobs. </p>
 */
export interface DocumentClassifierOutputDataConfig {
  __type?: "DocumentClassifierOutputDataConfig";
  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output results from an
   *       analysis job. The KmsKeyId can be one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>KMS Key Alias: <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ARN of a KMS Key Alias: <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>When you use the <code>OutputDataConfig</code> object while creating a custom classifier, you
   *       specify the Amazon S3 location where you want to write the confusion matrix. The URI must be in the
   *       same region as the API endpoint that you are calling. The location is used as the prefix for
   *       the actual location of this output file.</p>
   *          <p>When the custom classifier job is finished, the service creates the output file in a
   *       directory specific to the job. The <code>S3Uri</code> field contains the location of the
   *       output file, called <code>output.tar.gz</code>. It is a compressed archive that contains the
   *       confusion matrix.</p>
   */
  S3Uri?: string;
}

export namespace DocumentClassifierOutputDataConfig {
  export const filterSensitiveLog = (obj: DocumentClassifierOutputDataConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DocumentClassifierOutputDataConfig =>
    __isa(o, "DocumentClassifierOutputDataConfig");
}

/**
 * <p>Provides information about a document classifier.</p>
 */
export interface DocumentClassifierProperties {
  __type?: "DocumentClassifierProperties";
  /**
   * <p>Information about the document classifier, including the number of documents used for
   *       training the classifier, the number of documents used for test the classifier, and an accuracy
   *       rating.</p>
   */
  ClassifierMetadata?: ClassifierMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants
   *       Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier.</p>
   */
  DocumentClassifierArn?: string;

  /**
   * <p>The time that training the document classifier completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the document classifier
   *       for training.</p>
   */
  InputDataConfig?: DocumentClassifierInputDataConfig;

  /**
   * <p>The language code for the language of the documents that the classifier was trained
   *       on.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>Additional information about the status of the classifier.</p>
   */
  Message?: string;

  /**
   * <p>Indicates the mode in which the specific classifier was trained. This also indicates the format of input documents and
   *       the format of the confusion matrix. Each classifier can only be trained in one mode and this cannot be changed once the classifier is trained.</p>
   */
  Mode?: DocumentClassifierMode | string;

  /**
   * <p> Provides output results configuration parameters for custom classifier jobs.</p>
   */
  OutputDataConfig?: DocumentClassifierOutputDataConfig;

  /**
   * <p>The status of the document classifier. If the status is <code>TRAINED</code> the
   *       classifier is ready to use. If the status is <code>FAILED</code> you can see additional
   *       information about why the classifier wasn't trained in the <code>Message</code> field.</p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>The time that the document classifier was submitted for training.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that training of the document classifier was completed.
   *       Indicates the time when the training completes on documentation classifiers. You are billed for
   *       the time interval between this time and the value of TrainingStartTime.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>Indicates the time when the training starts on documentation classifiers. You are billed for
   *       the time interval between this time and the value of TrainingEndTime. </p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *         process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace DocumentClassifierProperties {
  export const filterSensitiveLog = (obj: DocumentClassifierProperties): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DocumentClassifierProperties => __isa(o, "DocumentClassifierProperties");
}

/**
 * <p>Specifies one of the label or labels that categorize the document being analyzed.</p>
 */
export interface DocumentLabel {
  __type?: "DocumentLabel";
  /**
   * <p>The name of the label.</p>
   */
  Name?: string;

  /**
   * <p>The confidence score that Amazon Comprehend has this label correctly attributed.</p>
   */
  Score?: number;
}

export namespace DocumentLabel {
  export const filterSensitiveLog = (obj: DocumentLabel): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DocumentLabel => __isa(o, "DocumentLabel");
}

/**
 * <p>Returns the code for the dominant language in the input text and the level of
 *       confidence that Amazon Comprehend has in the accuracy of the detection.</p>
 */
export interface DominantLanguage {
  __type?: "DominantLanguage";
  /**
   * <p>The RFC 5646 language code for the dominant language. For more information about RFC
   *       5646, see <a href="https://tools.ietf.org/html/rfc5646">Tags for Identifying
   *         Languages</a> on the <i>IETF Tools</i> web site.</p>
   */
  LanguageCode?: string;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the detection.</p>
   */
  Score?: number;
}

export namespace DominantLanguage {
  export const filterSensitiveLog = (obj: DominantLanguage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DominantLanguage => __isa(o, "DominantLanguage");
}

/**
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the  operation.</p>
 */
export interface DominantLanguageDetectionJobFilter {
  __type?: "DominantLanguageDetectionJobFilter";
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;
}

export namespace DominantLanguageDetectionJobFilter {
  export const filterSensitiveLog = (obj: DominantLanguageDetectionJobFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DominantLanguageDetectionJobFilter =>
    __isa(o, "DominantLanguageDetectionJobFilter");
}

/**
 * <p>Provides information about a dominant language detection job.</p>
 */
export interface DominantLanguageDetectionJobProperties {
  __type?: "DominantLanguageDetectionJobProperties";
  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The time that the dominant language detection job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the dominant language
   *       detection job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The identifier assigned to the dominant language detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The name that you assigned to the dominant language detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the dominant language detection job. If the status is
   *         <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description for the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The output data configuration that you supplied when you created the dominant language
   *       detection job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The time that the dominant language detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *         process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your dominant language detection job.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace DominantLanguageDetectionJobProperties {
  export const filterSensitiveLog = (obj: DominantLanguageDetectionJobProperties): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DominantLanguageDetectionJobProperties =>
    __isa(o, "DominantLanguageDetectionJobProperties");
}

/**
 * <p>The filter used to determine which endpoints are are returned. You can filter jobs on their name, model, status, or the date and time that they were created.
 *       You can only set one filter at a time. </p>
 */
export interface EndpointFilter {
  __type?: "EndpointFilter";
  /**
   * <p>Specifies a date after which the returned endpoint or endpoints were created.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Specifies a date before which the returned endpoint or endpoints were created.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The Amazon Resource Number (ARN) of the model to which the endpoint is attached.</p>
   */
  ModelArn?: string;

  /**
   * <p>Specifies the status of the endpoint being returned. Possible values are: Creating, Ready, Updating, Deleting, Failed.</p>
   */
  Status?: EndpointStatus | string;
}

export namespace EndpointFilter {
  export const filterSensitiveLog = (obj: EndpointFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointFilter => __isa(o, "EndpointFilter");
}

/**
 * <p>Specifies information about the specified endpoint.</p>
 */
export interface EndpointProperties {
  __type?: "EndpointProperties";
  /**
   * <p>The creation date and time of the endpoint.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The number of inference units currently used by the model using this endpoint.</p>
   */
  CurrentInferenceUnits?: number;

  /**
   * <p>The desired number of inference units to be used by the model using this endpoint.  Each
   *       inference unit represents of a throughput of 100 characters per second.</p>
   */
  DesiredInferenceUnits?: number;

  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p>The date and time that the endpoint was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Specifies a reason for failure in cases of <code>Failed</code> status.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the model to which the endpoint is attached.</p>
   */
  ModelArn?: string;

  /**
   * <p>Specifies the status of the endpoint. Because the endpoint updates and creation are asynchronous, so
   *       customers will need to wait for the endpoint to be <code>Ready</code> status before making inference requests.</p>
   */
  Status?: EndpointStatus | string;
}

export namespace EndpointProperties {
  export const filterSensitiveLog = (obj: EndpointProperties): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndpointProperties => __isa(o, "EndpointProperties");
}

export enum EndpointStatus {
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  IN_SERVICE = "IN_SERVICE",
  UPDATING = "UPDATING",
}

/**
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the  operation.</p>
 */
export interface EntitiesDetectionJobFilter {
  __type?: "EntitiesDetectionJobFilter";
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;
}

export namespace EntitiesDetectionJobFilter {
  export const filterSensitiveLog = (obj: EntitiesDetectionJobFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntitiesDetectionJobFilter => __isa(o, "EntitiesDetectionJobFilter");
}

/**
 * <p>Provides information about an entities detection job.</p>
 */
export interface EntitiesDetectionJobProperties {
  __type?: "EntitiesDetectionJobProperties";
  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The time that the entities detection job completed</p>
   */
  EndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn?: string;

  /**
   * <p>The input data configuration that you supplied when you created the entities detection
   *       job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The identifier assigned to the entities detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The name that you assigned the entities detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the entities detection job. If the status is <code>FAILED</code>,
   *       the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The output data configuration that you supplied when you created the entities detection
   *       job. </p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The time that the entities detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *         process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your entity detection job.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace EntitiesDetectionJobProperties {
  export const filterSensitiveLog = (obj: EntitiesDetectionJobProperties): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntitiesDetectionJobProperties => __isa(o, "EntitiesDetectionJobProperties");
}

/**
 * <p>Provides information about an entity. </p>
 *          <p> </p>
 */
export interface Entity {
  __type?: "Entity";
  /**
   * <p>A character offset in the input text that shows where the entity begins (the first
   *       character is at position 0). The offset returns the position of each UTF-8 code point in the
   *       string. A <i>code point</i> is the abstract character from a particular
   *       graphical representation. For example, a multi-byte UTF-8 character maps to a single code
   *       point.</p>
   */
  BeginOffset?: number;

  /**
   * <p>A character offset in the input text that shows where the entity ends. The offset
   *       returns the position of each UTF-8 code point in the string. A <i>code point</i>
   *       is the abstract character from a particular graphical representation. For example, a
   *       multi-byte UTF-8 character maps to a single code point. </p>
   */
  EndOffset?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the detection.</p>
   */
  Score?: number;

  /**
   * <p>The text of the entity.</p>
   */
  Text?: string;

  /**
   * <p>The entity's type.</p>
   */
  Type?: EntityType | string;
}

export namespace Entity {
  export const filterSensitiveLog = (obj: Entity): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Entity => __isa(o, "Entity");
}

/**
 * <p>Describes the annotations associated with a entity recognizer.</p>
 */
export interface EntityRecognizerAnnotations {
  __type?: "EntityRecognizerAnnotations";
  /**
   * <p> Specifies the Amazon S3 location where the annotations for an entity recognizer are located. The URI must be in the
   *       same region as the API endpoint that you are calling.</p>
   */
  S3Uri: string | undefined;
}

export namespace EntityRecognizerAnnotations {
  export const filterSensitiveLog = (obj: EntityRecognizerAnnotations): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityRecognizerAnnotations => __isa(o, "EntityRecognizerAnnotations");
}

/**
 * <p>Describes the training documents submitted with an entity recognizer.</p>
 */
export interface EntityRecognizerDocuments {
  __type?: "EntityRecognizerDocuments";
  /**
   * <p> Specifies the Amazon S3 location where the training documents for an entity recognizer are located. The
   *       URI must be in the same region as the API endpoint that you are calling.</p>
   */
  S3Uri: string | undefined;
}

export namespace EntityRecognizerDocuments {
  export const filterSensitiveLog = (obj: EntityRecognizerDocuments): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityRecognizerDocuments => __isa(o, "EntityRecognizerDocuments");
}

/**
 * <p>Describes the entity recognizer submitted with an entity recognizer.</p>
 */
export interface EntityRecognizerEntityList {
  __type?: "EntityRecognizerEntityList";
  /**
   * <p>Specifies the Amazon S3 location where the entity list is located. The URI must be in the same region as the API endpoint that you are calling.</p>
   */
  S3Uri: string | undefined;
}

export namespace EntityRecognizerEntityList {
  export const filterSensitiveLog = (obj: EntityRecognizerEntityList): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityRecognizerEntityList => __isa(o, "EntityRecognizerEntityList");
}

/**
 * <p>Detailed information about the accuracy of an entity recognizer.
 *     </p>
 */
export interface EntityRecognizerEvaluationMetrics {
  __type?: "EntityRecognizerEvaluationMetrics";
  /**
   * <p>A measure of how accurate the recognizer results are for the test data. It is
   *       derived from the <code>Precision</code> and <code>Recall</code> values. The <code>F1Score</code> is
   *       the harmonic average of the two scores. The highest score is 1, and the worst score is 0.
   *     </p>
   */
  F1Score?: number;

  /**
   * <p>A measure of the usefulness of the recognizer results in the test data. High precision
   *       means that the recognizer returned substantially more relevant results than irrelevant ones.
   *     </p>
   */
  Precision?: number;

  /**
   * <p>A measure of how complete the recognizer results are for the test data. High recall means that the recognizer returned most of the relevant results.</p>
   */
  Recall?: number;
}

export namespace EntityRecognizerEvaluationMetrics {
  export const filterSensitiveLog = (obj: EntityRecognizerEvaluationMetrics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityRecognizerEvaluationMetrics => __isa(o, "EntityRecognizerEvaluationMetrics");
}

/**
 * <p>Provides information for filtering a list of entity recognizers. You can only specify
 *       one filtering parameter in a request. For more information, see the  operation./></p>
 */
export interface EntityRecognizerFilter {
  __type?: "EntityRecognizerFilter";
  /**
   * <p>The status of an entity recognizer.</p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>Filters the list of entities based on the time that the list was submitted for processing.
   *     Returns only jobs submitted after the specified time. Jobs are returned in ascending order,
   *     oldest to newest.</p>
   */
  SubmitTimeAfter?: Date;

  /**
   * <p>Filters the list of entities based on the time that the list was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeBefore?: Date;
}

export namespace EntityRecognizerFilter {
  export const filterSensitiveLog = (obj: EntityRecognizerFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityRecognizerFilter => __isa(o, "EntityRecognizerFilter");
}

/**
 * <p>Specifies the format and location of the input data.</p>
 */
export interface EntityRecognizerInputDataConfig {
  __type?: "EntityRecognizerInputDataConfig";
  /**
   * <p>S3 location of the annotations file for an entity recognizer.</p>
   */
  Annotations?: EntityRecognizerAnnotations;

  /**
   * <p>S3 location of the documents folder for an entity recognizer</p>
   */
  Documents: EntityRecognizerDocuments | undefined;

  /**
   * <p>S3 location of the entity list for an entity recognizer.</p>
   */
  EntityList?: EntityRecognizerEntityList;

  /**
   * <p>The entity types in the input data for an entity recognizer. A maximum of 12 entity types can be used at one time to train an entity recognizer.</p>
   */
  EntityTypes: EntityTypesListItem[] | undefined;
}

export namespace EntityRecognizerInputDataConfig {
  export const filterSensitiveLog = (obj: EntityRecognizerInputDataConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityRecognizerInputDataConfig => __isa(o, "EntityRecognizerInputDataConfig");
}

/**
 * <p>Detailed information about an entity recognizer.</p>
 */
export interface EntityRecognizerMetadata {
  __type?: "EntityRecognizerMetadata";
  /**
   * <p>Entity types from the metadata of an entity recognizer.</p>
   */
  EntityTypes?: EntityRecognizerMetadataEntityTypesListItem[];

  /**
   * <p>Detailed information about the accuracy of an entity recognizer.</p>
   */
  EvaluationMetrics?: EntityRecognizerEvaluationMetrics;

  /**
   * <p> The number of documents in the input data that were used to test the entity recognizer. Typically this is 10 to 20 percent of the input documents.</p>
   */
  NumberOfTestDocuments?: number;

  /**
   * <p> The number of documents in the input data that were used to train the entity recognizer. Typically this is 80 to 90 percent of the input documents.</p>
   */
  NumberOfTrainedDocuments?: number;
}

export namespace EntityRecognizerMetadata {
  export const filterSensitiveLog = (obj: EntityRecognizerMetadata): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityRecognizerMetadata => __isa(o, "EntityRecognizerMetadata");
}

/**
 * <p>Individual item from the list of entity types in the metadata of an entity recognizer.</p>
 */
export interface EntityRecognizerMetadataEntityTypesListItem {
  __type?: "EntityRecognizerMetadataEntityTypesListItem";
  /**
   * <p>Detailed information about the accuracy of the entity recognizer for a specific item on the list of entity types. </p>
   */
  EvaluationMetrics?: EntityTypesEvaluationMetrics;

  /**
   * <p>Indicates the number of times the given entity type was seen in the training data. </p>
   */
  NumberOfTrainMentions?: number;

  /**
   * <p>Type of entity from the list of entity types in the metadata of an entity recognizer. </p>
   */
  Type?: string;
}

export namespace EntityRecognizerMetadataEntityTypesListItem {
  export const filterSensitiveLog = (obj: EntityRecognizerMetadataEntityTypesListItem): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityRecognizerMetadataEntityTypesListItem =>
    __isa(o, "EntityRecognizerMetadataEntityTypesListItem");
}

/**
 * <p>Describes information about an entity recognizer.</p>
 */
export interface EntityRecognizerProperties {
  __type?: "EntityRecognizerProperties";
  /**
   * <p> The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The time that the recognizer creation completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn?: string;

  /**
   * <p>The input data properties of an entity recognizer.</p>
   */
  InputDataConfig?: EntityRecognizerInputDataConfig;

  /**
   * <p> The language of the input documents. All documents must be in the same language. Only
   *       English ("en") is currently supported.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p> A description of the status of the recognizer.</p>
   */
  Message?: string;

  /**
   * <p> Provides information about an entity recognizer.</p>
   */
  RecognizerMetadata?: EntityRecognizerMetadata;

  /**
   * <p>Provides the status of the entity recognizer.</p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>The time that the recognizer was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that training of the entity recognizer was completed.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The time that training of the entity recognizer started.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *         process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom entity recognizer.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace EntityRecognizerProperties {
  export const filterSensitiveLog = (obj: EntityRecognizerProperties): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityRecognizerProperties => __isa(o, "EntityRecognizerProperties");
}

export enum EntityType {
  COMMERCIAL_ITEM = "COMMERCIAL_ITEM",
  DATE = "DATE",
  EVENT = "EVENT",
  LOCATION = "LOCATION",
  ORGANIZATION = "ORGANIZATION",
  OTHER = "OTHER",
  PERSON = "PERSON",
  QUANTITY = "QUANTITY",
  TITLE = "TITLE",
}

/**
 * <p>Detailed information about the accuracy of an entity recognizer for a specific entity type. </p>
 */
export interface EntityTypesEvaluationMetrics {
  __type?: "EntityTypesEvaluationMetrics";
  /**
   * <p>A measure of how accurate the recognizer results are for for a specific entity type in the test data. It is
   *       derived from the <code>Precision</code> and <code>Recall</code> values. The <code>F1Score</code> is
   *       the harmonic average of the two scores. The highest score is 1, and the worst score is 0.
   *     </p>
   */
  F1Score?: number;

  /**
   * <p>A measure of the usefulness of the recognizer results for a specific entity type in the test data. High precision
   *       means that the recognizer returned substantially more relevant results than irrelevant ones.
   *     </p>
   */
  Precision?: number;

  /**
   * <p>A measure of how complete the recognizer results are for a specific entity type in the test data. High recall means that the recognizer
   *       returned most of the relevant results.</p>
   */
  Recall?: number;
}

export namespace EntityTypesEvaluationMetrics {
  export const filterSensitiveLog = (obj: EntityTypesEvaluationMetrics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityTypesEvaluationMetrics => __isa(o, "EntityTypesEvaluationMetrics");
}

/**
 * <p>Information about an individual item on a list of entity types.</p>
 */
export interface EntityTypesListItem {
  __type?: "EntityTypesListItem";
  /**
   * <p>Entity type of an item on an entity type list.</p>
   */
  Type: string | undefined;
}

export namespace EntityTypesListItem {
  export const filterSensitiveLog = (obj: EntityTypesListItem): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityTypesListItem => __isa(o, "EntityTypesListItem");
}

/**
 * <p>The input properties for a topic detection job.</p>
 */
export interface InputDataConfig {
  __type?: "InputDataConfig";
  /**
   * <p>Specifies how the text in an input file should be processed:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ONE_DOC_PER_FILE</code> - Each file is considered a separate document. Use
   *           this option when you are processing large documents, such as newspaper articles or
   *           scientific papers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ONE_DOC_PER_LINE</code> - Each line in a file is considered a separate
   *           document. Use this option when you are processing many short documents, such as text
   *           messages.</p>
   *             </li>
   *          </ul>
   */
  InputFormat?: InputFormat | string;

  /**
   * <p>The Amazon S3 URI for the input data. The URI must be in same region as the API
   *       endpoint that you are calling. The URI can point to a single input file or it can provide the
   *       prefix for a collection of data files. </p>
   *          <p>For example, if you use the URI <code>S3://bucketName/prefix</code>, if the prefix is a
   *       single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix,
   *       Amazon Comprehend uses all of them as input.</p>
   */
  S3Uri: string | undefined;
}

export namespace InputDataConfig {
  export const filterSensitiveLog = (obj: InputDataConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InputDataConfig => __isa(o, "InputDataConfig");
}

export enum InputFormat {
  ONE_DOC_PER_FILE = "ONE_DOC_PER_FILE",
  ONE_DOC_PER_LINE = "ONE_DOC_PER_LINE",
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
 * <p>The filter specified for the operation is invalid.
 *       Specify a different filter.</p>
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
 * <p>The request
 *       is invalid.</p>
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
 * <p>The specified job was not found. Check the job ID and try again.</p>
 */
export interface JobNotFoundException extends __SmithyException, $MetadataBearer {
  name: "JobNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace JobNotFoundException {
  export const filterSensitiveLog = (obj: JobNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JobNotFoundException => __isa(o, "JobNotFoundException");
}

export enum JobStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  STOPPED = "STOPPED",
  STOP_REQUESTED = "STOP_REQUESTED",
  SUBMITTED = "SUBMITTED",
}

/**
 * <p>Describes a key noun phrase.</p>
 */
export interface KeyPhrase {
  __type?: "KeyPhrase";
  /**
   * <p>A character offset in the input text that shows where the key phrase begins (the first
   *       character is at position 0). The offset returns the position of each UTF-8 code point in the
   *       string. A <i>code point</i> is the abstract character from a particular
   *       graphical representation. For example, a multi-byte UTF-8 character maps to a single code
   *       point.</p>
   */
  BeginOffset?: number;

  /**
   * <p>A character offset in the input text where the key phrase ends. The offset returns the
   *       position of each UTF-8 code point in the string. A <code>code point</code> is the abstract
   *       character from a particular graphical representation. For example, a multi-byte UTF-8
   *       character maps to a single code point.</p>
   */
  EndOffset?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the detection.</p>
   */
  Score?: number;

  /**
   * <p>The text of a key noun phrase.</p>
   */
  Text?: string;
}

export namespace KeyPhrase {
  export const filterSensitiveLog = (obj: KeyPhrase): any => ({
    ...obj,
  });
  export const isa = (o: any): o is KeyPhrase => __isa(o, "KeyPhrase");
}

/**
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the  operation.</p>
 */
export interface KeyPhrasesDetectionJobFilter {
  __type?: "KeyPhrasesDetectionJobFilter";
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;
}

export namespace KeyPhrasesDetectionJobFilter {
  export const filterSensitiveLog = (obj: KeyPhrasesDetectionJobFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is KeyPhrasesDetectionJobFilter => __isa(o, "KeyPhrasesDetectionJobFilter");
}

/**
 * <p>Provides information about a key phrases detection job.</p>
 */
export interface KeyPhrasesDetectionJobProperties {
  __type?: "KeyPhrasesDetectionJobProperties";
  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The time that the key phrases detection job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the key phrases detection
   *       job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The identifier assigned to the key phrases detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The name that you assigned the key phrases detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the key phrases detection job. If the status is <code>FAILED</code>,
   *       the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The output data configuration that you supplied when you created the key phrases detection
   *       job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The time that the key phrases detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *         process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your key phrases detection job.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace KeyPhrasesDetectionJobProperties {
  export const filterSensitiveLog = (obj: KeyPhrasesDetectionJobProperties): any => ({
    ...obj,
  });
  export const isa = (o: any): o is KeyPhrasesDetectionJobProperties => __isa(o, "KeyPhrasesDetectionJobProperties");
}

/**
 * <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and re-enter it.</p>
 */
export interface KmsKeyValidationException extends __SmithyException, $MetadataBearer {
  name: "KmsKeyValidationException";
  $fault: "client";
  Message?: string;
}

export namespace KmsKeyValidationException {
  export const filterSensitiveLog = (obj: KmsKeyValidationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is KmsKeyValidationException => __isa(o, "KmsKeyValidationException");
}

export enum LanguageCode {
  AR = "ar",
  DE = "de",
  EN = "en",
  ES = "es",
  FR = "fr",
  HI = "hi",
  IT = "it",
  JA = "ja",
  KO = "ko",
  PT = "pt",
  ZH = "zh",
  ZH_TW = "zh-TW",
}

export interface ListDocumentClassificationJobsRequest {
  __type?: "ListDocumentClassificationJobsRequest";
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their names, status, or the
   *       date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: DocumentClassificationJobFilter;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListDocumentClassificationJobsRequest {
  export const filterSensitiveLog = (obj: ListDocumentClassificationJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDocumentClassificationJobsRequest =>
    __isa(o, "ListDocumentClassificationJobsRequest");
}

export interface ListDocumentClassificationJobsResponse {
  __type?: "ListDocumentClassificationJobsResponse";
  /**
   * <p>A list containing the properties of each job returned.</p>
   */
  DocumentClassificationJobPropertiesList?: DocumentClassificationJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListDocumentClassificationJobsResponse {
  export const filterSensitiveLog = (obj: ListDocumentClassificationJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDocumentClassificationJobsResponse =>
    __isa(o, "ListDocumentClassificationJobsResponse");
}

export interface ListDocumentClassifiersRequest {
  __type?: "ListDocumentClassifiersRequest";
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: DocumentClassifierFilter;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListDocumentClassifiersRequest {
  export const filterSensitiveLog = (obj: ListDocumentClassifiersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDocumentClassifiersRequest => __isa(o, "ListDocumentClassifiersRequest");
}

export interface ListDocumentClassifiersResponse {
  __type?: "ListDocumentClassifiersResponse";
  /**
   * <p>A list containing the properties of each job returned.</p>
   */
  DocumentClassifierPropertiesList?: DocumentClassifierProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListDocumentClassifiersResponse {
  export const filterSensitiveLog = (obj: ListDocumentClassifiersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDocumentClassifiersResponse => __isa(o, "ListDocumentClassifiersResponse");
}

export interface ListDominantLanguageDetectionJobsRequest {
  __type?: "ListDominantLanguageDetectionJobsRequest";
  /**
   * <p>Filters that jobs that are returned. You can filter jobs on their name, status, or the
   *       date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: DominantLanguageDetectionJobFilter;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListDominantLanguageDetectionJobsRequest {
  export const filterSensitiveLog = (obj: ListDominantLanguageDetectionJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDominantLanguageDetectionJobsRequest =>
    __isa(o, "ListDominantLanguageDetectionJobsRequest");
}

export interface ListDominantLanguageDetectionJobsResponse {
  __type?: "ListDominantLanguageDetectionJobsResponse";
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  DominantLanguageDetectionJobPropertiesList?: DominantLanguageDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListDominantLanguageDetectionJobsResponse {
  export const filterSensitiveLog = (obj: ListDominantLanguageDetectionJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDominantLanguageDetectionJobsResponse =>
    __isa(o, "ListDominantLanguageDetectionJobsResponse");
}

export interface ListEndpointsRequest {
  __type?: "ListEndpointsRequest";
  /**
   * <p>Filters the endpoints that are returned. You can filter endpoints  on their name, model, status, or the date and time that they were created.
   *       You can only set one filter at a time.  </p>
   */
  Filter?: EndpointFilter;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListEndpointsRequest {
  export const filterSensitiveLog = (obj: ListEndpointsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEndpointsRequest => __isa(o, "ListEndpointsRequest");
}

export interface ListEndpointsResponse {
  __type?: "ListEndpointsResponse";
  /**
   * <p>Displays a list of endpoint properties being retrieved by the service in response to the request.</p>
   */
  EndpointPropertiesList?: EndpointProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListEndpointsResponse {
  export const filterSensitiveLog = (obj: ListEndpointsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEndpointsResponse => __isa(o, "ListEndpointsResponse");
}

export interface ListEntitiesDetectionJobsRequest {
  __type?: "ListEntitiesDetectionJobsRequest";
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: EntitiesDetectionJobFilter;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListEntitiesDetectionJobsRequest {
  export const filterSensitiveLog = (obj: ListEntitiesDetectionJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEntitiesDetectionJobsRequest => __isa(o, "ListEntitiesDetectionJobsRequest");
}

export interface ListEntitiesDetectionJobsResponse {
  __type?: "ListEntitiesDetectionJobsResponse";
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  EntitiesDetectionJobPropertiesList?: EntitiesDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListEntitiesDetectionJobsResponse {
  export const filterSensitiveLog = (obj: ListEntitiesDetectionJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEntitiesDetectionJobsResponse => __isa(o, "ListEntitiesDetectionJobsResponse");
}

export interface ListEntityRecognizersRequest {
  __type?: "ListEntityRecognizersRequest";
  /**
   * <p>Filters the list of entities returned. You can filter on <code>Status</code>, <code>SubmitTimeBefore</code>, or <code>SubmitTimeAfter</code>. You can only set one filter at a time.</p>
   */
  Filter?: EntityRecognizerFilter;

  /**
   * <p> The maximum number of results to return on each page. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListEntityRecognizersRequest {
  export const filterSensitiveLog = (obj: ListEntityRecognizersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEntityRecognizersRequest => __isa(o, "ListEntityRecognizersRequest");
}

export interface ListEntityRecognizersResponse {
  __type?: "ListEntityRecognizersResponse";
  /**
   * <p>The list of properties of an entity recognizer.</p>
   */
  EntityRecognizerPropertiesList?: EntityRecognizerProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListEntityRecognizersResponse {
  export const filterSensitiveLog = (obj: ListEntityRecognizersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEntityRecognizersResponse => __isa(o, "ListEntityRecognizersResponse");
}

export interface ListKeyPhrasesDetectionJobsRequest {
  __type?: "ListKeyPhrasesDetectionJobsRequest";
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: KeyPhrasesDetectionJobFilter;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListKeyPhrasesDetectionJobsRequest {
  export const filterSensitiveLog = (obj: ListKeyPhrasesDetectionJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListKeyPhrasesDetectionJobsRequest =>
    __isa(o, "ListKeyPhrasesDetectionJobsRequest");
}

export interface ListKeyPhrasesDetectionJobsResponse {
  __type?: "ListKeyPhrasesDetectionJobsResponse";
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  KeyPhrasesDetectionJobPropertiesList?: KeyPhrasesDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListKeyPhrasesDetectionJobsResponse {
  export const filterSensitiveLog = (obj: ListKeyPhrasesDetectionJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListKeyPhrasesDetectionJobsResponse =>
    __isa(o, "ListKeyPhrasesDetectionJobsResponse");
}

export interface ListSentimentDetectionJobsRequest {
  __type?: "ListSentimentDetectionJobsRequest";
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: SentimentDetectionJobFilter;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListSentimentDetectionJobsRequest {
  export const filterSensitiveLog = (obj: ListSentimentDetectionJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSentimentDetectionJobsRequest => __isa(o, "ListSentimentDetectionJobsRequest");
}

export interface ListSentimentDetectionJobsResponse {
  __type?: "ListSentimentDetectionJobsResponse";
  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  SentimentDetectionJobPropertiesList?: SentimentDetectionJobProperties[];
}

export namespace ListSentimentDetectionJobsResponse {
  export const filterSensitiveLog = (obj: ListSentimentDetectionJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSentimentDetectionJobsResponse =>
    __isa(o, "ListSentimentDetectionJobsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying. </p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Tags associated with the Amazon Comprehend resource being queried. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example,
   *       a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.    </p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

export interface ListTopicsDetectionJobsRequest {
  __type?: "ListTopicsDetectionJobsRequest";
  /**
   * <p>Filters the jobs that are returned. Jobs can be filtered on their name, status, or the
   *       date and time that they were submitted. You can set only one filter at a time.</p>
   */
  Filter?: TopicsDetectionJobFilter;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListTopicsDetectionJobsRequest {
  export const filterSensitiveLog = (obj: ListTopicsDetectionJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTopicsDetectionJobsRequest => __isa(o, "ListTopicsDetectionJobsRequest");
}

export interface ListTopicsDetectionJobsResponse {
  __type?: "ListTopicsDetectionJobsResponse";
  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  TopicsDetectionJobPropertiesList?: TopicsDetectionJobProperties[];
}

export namespace ListTopicsDetectionJobsResponse {
  export const filterSensitiveLog = (obj: ListTopicsDetectionJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTopicsDetectionJobsResponse => __isa(o, "ListTopicsDetectionJobsResponse");
}

export enum ModelStatus {
  DELETING = "DELETING",
  IN_ERROR = "IN_ERROR",
  STOPPED = "STOPPED",
  STOP_REQUESTED = "STOP_REQUESTED",
  SUBMITTED = "SUBMITTED",
  TRAINED = "TRAINED",
  TRAINING = "TRAINING",
}

/**
 * <p>Provides configuration parameters for the output of topic detection jobs.</p>
 *          <p></p>
 */
export interface OutputDataConfig {
  __type?: "OutputDataConfig";
  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output results from an analysis job. The KmsKeyId can be one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>KMS Key Alias: <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ARN of a KMS Key Alias: <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>When you use the <code>OutputDataConfig</code> object with asynchronous operations, you
   *       specify the Amazon S3 location where you want to write the output data. The URI must be in the
   *       same region as the API endpoint that you are calling. The location is used as the prefix for
   *       the actual location of the output file.</p>
   *          <p>When the topic detection job is finished, the service creates an output file in a
   *       directory specific to the job. The <code>S3Uri</code> field contains the location of the
   *       output file, called <code>output.tar.gz</code>. It is a compressed archive that contains the
   *       ouput of the operation.</p>
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
 * <p>Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend
 *       has that the part of speech was correctly identified. For more information about the parts of
 *       speech that Amazon Comprehend can identify, see <a>how-syntax</a>.</p>
 */
export interface PartOfSpeechTag {
  __type?: "PartOfSpeechTag";
  /**
   * <p>The confidence that Amazon Comprehend has that the part of speech was correctly identified.</p>
   */
  Score?: number;

  /**
   * <p>Identifies the part of speech that the token represents.</p>
   */
  Tag?: PartOfSpeechTagType | string;
}

export namespace PartOfSpeechTag {
  export const filterSensitiveLog = (obj: PartOfSpeechTag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PartOfSpeechTag => __isa(o, "PartOfSpeechTag");
}

export enum PartOfSpeechTagType {
  ADJ = "ADJ",
  ADP = "ADP",
  ADV = "ADV",
  AUX = "AUX",
  CCONJ = "CCONJ",
  CONJ = "CONJ",
  DET = "DET",
  INTJ = "INTJ",
  NOUN = "NOUN",
  NUM = "NUM",
  O = "O",
  PART = "PART",
  PRON = "PRON",
  PROPN = "PROPN",
  PUNCT = "PUNCT",
  SCONJ = "SCONJ",
  SYM = "SYM",
  VERB = "VERB",
}

/**
 * <p>The specified name is already in use. Use a different name and try your request again.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceInUseException => __isa(o, "ResourceInUseException");
}

/**
 * <p>The maximum number of recognizers per account has been exceeded. Review the recognizers, perform cleanup, and then try your request again.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceLimitExceededException {
  export const filterSensitiveLog = (obj: ResourceLimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceLimitExceededException => __isa(o, "ResourceLimitExceededException");
}

/**
 * <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
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
 * <p>The specified resource is not available. Check to see if the resource is in
 *       the <code>TRAINED</code> state and try your request again.</p>
 */
export interface ResourceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ResourceUnavailableException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceUnavailableException {
  export const filterSensitiveLog = (obj: ResourceUnavailableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceUnavailableException => __isa(o, "ResourceUnavailableException");
}

/**
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the  operation.</p>
 */
export interface SentimentDetectionJobFilter {
  __type?: "SentimentDetectionJobFilter";
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;
}

export namespace SentimentDetectionJobFilter {
  export const filterSensitiveLog = (obj: SentimentDetectionJobFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SentimentDetectionJobFilter => __isa(o, "SentimentDetectionJobFilter");
}

/**
 * <p>Provides information about a sentiment detection job.</p>
 */
export interface SentimentDetectionJobProperties {
  __type?: "SentimentDetectionJobProperties";
  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The time that the sentiment detection job ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the sentiment detection
   *       job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The identifier assigned to the sentiment detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The name that you assigned to the sentiment detection job</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the sentiment detection job. If the status is <code>FAILED</code>,
   *       the <code>Messages</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The output data configuration that you supplied when you created the sentiment detection
   *       job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The time that the sentiment detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *         process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your sentiment detection job.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace SentimentDetectionJobProperties {
  export const filterSensitiveLog = (obj: SentimentDetectionJobProperties): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SentimentDetectionJobProperties => __isa(o, "SentimentDetectionJobProperties");
}

/**
 * <p>Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of
 *       sentiments.</p>
 */
export interface SentimentScore {
  __type?: "SentimentScore";
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of the
   *         <code>MIXED</code> sentiment.</p>
   */
  Mixed?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of the
   *         <code>NEGATIVE</code> sentiment.</p>
   */
  Negative?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of the
   *         <code>NEUTRAL</code> sentiment.</p>
   */
  Neutral?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of the
   *         <code>POSITIVE</code> sentiment.</p>
   */
  Positive?: number;
}

export namespace SentimentScore {
  export const filterSensitiveLog = (obj: SentimentScore): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SentimentScore => __isa(o, "SentimentScore");
}

export enum SentimentType {
  MIXED = "MIXED",
  NEGATIVE = "NEGATIVE",
  NEUTRAL = "NEUTRAL",
  POSITIVE = "POSITIVE",
}

export interface StartDocumentClassificationJobRequest {
  __type?: "StartDocumentClassificationJobRequest";
  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon Comprehend
   *       generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the document classifier to use to process the
   *       job.</p>
   */
  DocumentClassifierArn: string | undefined;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *       process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your document classification job.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace StartDocumentClassificationJobRequest {
  export const filterSensitiveLog = (obj: StartDocumentClassificationJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartDocumentClassificationJobRequest =>
    __isa(o, "StartDocumentClassificationJobRequest");
}

export interface StartDocumentClassificationJobResponse {
  __type?: "StartDocumentClassificationJobResponse";
  /**
   * <p>The identifier generated for the job. To get the status of the job, use this identifier
   *       with the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The status of the job:</p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. For details, use the  operation.</p>
   *             </li>
   *             <li>
   *                <p>STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is processing the request.</p>
   *             </li>
   *             <li>
   *                <p>STOPPED - The job was successfully stopped without completing.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartDocumentClassificationJobResponse {
  export const filterSensitiveLog = (obj: StartDocumentClassificationJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartDocumentClassificationJobResponse =>
    __isa(o, "StartDocumentClassificationJobResponse");
}

export interface StartDominantLanguageDetectionJobRequest {
  __type?: "StartDominantLanguageDetectionJobRequest";
  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon Comprehend
   *       generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>An identifier for the job.</p>
   */
  JobName?: string;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *       process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your dominant language detection job.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace StartDominantLanguageDetectionJobRequest {
  export const filterSensitiveLog = (obj: StartDominantLanguageDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartDominantLanguageDetectionJobRequest =>
    __isa(o, "StartDominantLanguageDetectionJobRequest");
}

export interface StartDominantLanguageDetectionJobResponse {
  __type?: "StartDominantLanguageDetectionJobResponse";
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The status of the job. </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the  operation.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartDominantLanguageDetectionJobResponse {
  export const filterSensitiveLog = (obj: StartDominantLanguageDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartDominantLanguageDetectionJobResponse =>
    __isa(o, "StartDominantLanguageDetectionJobResponse");
}

export interface StartEntitiesDetectionJobRequest {
  __type?: "StartEntitiesDetectionJobRequest";
  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon Comprehend
   *       generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the specific entity recognizer to be used by
   *     the <code>StartEntitiesDetectionJob</code>. This ARN is optional and is only used for a custom entity
   *     recognition job.</p>
   */
  EntityRecognizerArn?: string;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The language of the input documents. All documents must be in the same language.
   *       You can specify any of the languages supported by Amazon Comprehend. If custom entities recognition is used, this
   *     parameter is ignored and the language used for training the model is used instead.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *       process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your entity detection job.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace StartEntitiesDetectionJobRequest {
  export const filterSensitiveLog = (obj: StartEntitiesDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartEntitiesDetectionJobRequest => __isa(o, "StartEntitiesDetectionJobRequest");
}

export interface StartEntitiesDetectionJobResponse {
  __type?: "StartEntitiesDetectionJobResponse";
  /**
   * <p>The identifier generated for the job. To get the status of job, use this identifier with
   *       the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The status of the job. </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the  operation.</p>
   *             </li>
   *             <li>
   *                <p>STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is processing the request.</p>
   *             </li>
   *             <li>
   *                <p>STOPPED - The job was successfully stopped without completing.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartEntitiesDetectionJobResponse {
  export const filterSensitiveLog = (obj: StartEntitiesDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartEntitiesDetectionJobResponse => __isa(o, "StartEntitiesDetectionJobResponse");
}

export interface StartKeyPhrasesDetectionJobRequest {
  __type?: "StartKeyPhrasesDetectionJobRequest";
  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon Comprehend
   *       generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages supported by Amazon
   *       Comprehend. All
   *       documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *       process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your key phrases detection job.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace StartKeyPhrasesDetectionJobRequest {
  export const filterSensitiveLog = (obj: StartKeyPhrasesDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartKeyPhrasesDetectionJobRequest =>
    __isa(o, "StartKeyPhrasesDetectionJobRequest");
}

export interface StartKeyPhrasesDetectionJobResponse {
  __type?: "StartKeyPhrasesDetectionJobResponse";
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The status of the job. </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the  operation.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartKeyPhrasesDetectionJobResponse {
  export const filterSensitiveLog = (obj: StartKeyPhrasesDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartKeyPhrasesDetectionJobResponse =>
    __isa(o, "StartKeyPhrasesDetectionJobResponse");
}

export interface StartSentimentDetectionJobRequest {
  __type?: "StartSentimentDetectionJobRequest";
  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon Comprehend
   *       generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages supported by Amazon
   *       Comprehend. All
   *       documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>Specifies where to send the output files. </p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *       process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your sentiment detection job.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace StartSentimentDetectionJobRequest {
  export const filterSensitiveLog = (obj: StartSentimentDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartSentimentDetectionJobRequest => __isa(o, "StartSentimentDetectionJobRequest");
}

export interface StartSentimentDetectionJobResponse {
  __type?: "StartSentimentDetectionJobResponse";
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The status of the job. </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the  operation.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartSentimentDetectionJobResponse {
  export const filterSensitiveLog = (obj: StartSentimentDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartSentimentDetectionJobResponse =>
    __isa(o, "StartSentimentDetectionJobResponse");
}

export interface StartTopicsDetectionJobRequest {
  __type?: "StartTopicsDetectionJobRequest";
  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon Comprehend
   *       generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role
   *       that grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The number of topics to detect.</p>
   */
  NumberOfTopics?: number;

  /**
   * <p>Specifies where to send the output files. The output is a compressed archive with two
   *       files, <code>topic-terms.csv</code> that lists the terms associated with each topic, and
   *         <code>doc-topics.csv</code> that lists the documents associated with each topic</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *       process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your topic detection job.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace StartTopicsDetectionJobRequest {
  export const filterSensitiveLog = (obj: StartTopicsDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartTopicsDetectionJobRequest => __isa(o, "StartTopicsDetectionJobRequest");
}

export interface StartTopicsDetectionJobResponse {
  __type?: "StartTopicsDetectionJobResponse";
  /**
   * <p>The identifier generated for the job. To get the status of the job, use this identifier
   *       with the <code>DescribeTopicDetectionJob</code> operation.</p>
   */
  JobId?: string;

  /**
   * <p>The status of the job: </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is
   *           available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the
   *             <code>DescribeTopicDetectionJob</code> operation.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartTopicsDetectionJobResponse {
  export const filterSensitiveLog = (obj: StartTopicsDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartTopicsDetectionJobResponse => __isa(o, "StartTopicsDetectionJobResponse");
}

export interface StopDominantLanguageDetectionJobRequest {
  __type?: "StopDominantLanguageDetectionJobRequest";
  /**
   * <p>The identifier of the dominant language detection job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopDominantLanguageDetectionJobRequest {
  export const filterSensitiveLog = (obj: StopDominantLanguageDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopDominantLanguageDetectionJobRequest =>
    __isa(o, "StopDominantLanguageDetectionJobRequest");
}

export interface StopDominantLanguageDetectionJobResponse {
  __type?: "StopDominantLanguageDetectionJobResponse";
  /**
   * <p>The identifier of the dominant language detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopDominantLanguageDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

export namespace StopDominantLanguageDetectionJobResponse {
  export const filterSensitiveLog = (obj: StopDominantLanguageDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopDominantLanguageDetectionJobResponse =>
    __isa(o, "StopDominantLanguageDetectionJobResponse");
}

export interface StopEntitiesDetectionJobRequest {
  __type?: "StopEntitiesDetectionJobRequest";
  /**
   * <p>The identifier of the entities detection job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopEntitiesDetectionJobRequest {
  export const filterSensitiveLog = (obj: StopEntitiesDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopEntitiesDetectionJobRequest => __isa(o, "StopEntitiesDetectionJobRequest");
}

export interface StopEntitiesDetectionJobResponse {
  __type?: "StopEntitiesDetectionJobResponse";
  /**
   * <p>The identifier of the entities detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopEntitiesDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

export namespace StopEntitiesDetectionJobResponse {
  export const filterSensitiveLog = (obj: StopEntitiesDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopEntitiesDetectionJobResponse => __isa(o, "StopEntitiesDetectionJobResponse");
}

export interface StopKeyPhrasesDetectionJobRequest {
  __type?: "StopKeyPhrasesDetectionJobRequest";
  /**
   * <p>The identifier of the key phrases detection job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopKeyPhrasesDetectionJobRequest {
  export const filterSensitiveLog = (obj: StopKeyPhrasesDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopKeyPhrasesDetectionJobRequest => __isa(o, "StopKeyPhrasesDetectionJobRequest");
}

export interface StopKeyPhrasesDetectionJobResponse {
  __type?: "StopKeyPhrasesDetectionJobResponse";
  /**
   * <p>The identifier of the key phrases detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopKeyPhrasesDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

export namespace StopKeyPhrasesDetectionJobResponse {
  export const filterSensitiveLog = (obj: StopKeyPhrasesDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopKeyPhrasesDetectionJobResponse =>
    __isa(o, "StopKeyPhrasesDetectionJobResponse");
}

export interface StopSentimentDetectionJobRequest {
  __type?: "StopSentimentDetectionJobRequest";
  /**
   * <p>The identifier of the sentiment detection job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopSentimentDetectionJobRequest {
  export const filterSensitiveLog = (obj: StopSentimentDetectionJobRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopSentimentDetectionJobRequest => __isa(o, "StopSentimentDetectionJobRequest");
}

export interface StopSentimentDetectionJobResponse {
  __type?: "StopSentimentDetectionJobResponse";
  /**
   * <p>The identifier of the sentiment detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopSentimentDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

export namespace StopSentimentDetectionJobResponse {
  export const filterSensitiveLog = (obj: StopSentimentDetectionJobResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopSentimentDetectionJobResponse => __isa(o, "StopSentimentDetectionJobResponse");
}

export interface StopTrainingDocumentClassifierRequest {
  __type?: "StopTrainingDocumentClassifierRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier currently being trained.</p>
   */
  DocumentClassifierArn: string | undefined;
}

export namespace StopTrainingDocumentClassifierRequest {
  export const filterSensitiveLog = (obj: StopTrainingDocumentClassifierRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopTrainingDocumentClassifierRequest =>
    __isa(o, "StopTrainingDocumentClassifierRequest");
}

export interface StopTrainingDocumentClassifierResponse {
  __type?: "StopTrainingDocumentClassifierResponse";
}

export namespace StopTrainingDocumentClassifierResponse {
  export const filterSensitiveLog = (obj: StopTrainingDocumentClassifierResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopTrainingDocumentClassifierResponse =>
    __isa(o, "StopTrainingDocumentClassifierResponse");
}

export interface StopTrainingEntityRecognizerRequest {
  __type?: "StopTrainingEntityRecognizerRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer currently being trained.</p>
   */
  EntityRecognizerArn: string | undefined;
}

export namespace StopTrainingEntityRecognizerRequest {
  export const filterSensitiveLog = (obj: StopTrainingEntityRecognizerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopTrainingEntityRecognizerRequest =>
    __isa(o, "StopTrainingEntityRecognizerRequest");
}

export interface StopTrainingEntityRecognizerResponse {
  __type?: "StopTrainingEntityRecognizerResponse";
}

export namespace StopTrainingEntityRecognizerResponse {
  export const filterSensitiveLog = (obj: StopTrainingEntityRecognizerResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopTrainingEntityRecognizerResponse =>
    __isa(o, "StopTrainingEntityRecognizerResponse");
}

export enum SyntaxLanguageCode {
  DE = "de",
  EN = "en",
  ES = "es",
  FR = "fr",
  IT = "it",
  PT = "pt",
}

/**
 * <p>Represents a work in the input text that was recognized and assigned a part of speech.
 *       There is one syntax token record for each word in the source text.</p>
 */
export interface SyntaxToken {
  __type?: "SyntaxToken";
  /**
   * <p>The zero-based offset from the beginning of the source text to the first character in the
   *       word.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The zero-based offset from the beginning of the source text to the last character in the
   *       word.</p>
   */
  EndOffset?: number;

  /**
   * <p>Provides the part of speech label and the confidence level that Amazon Comprehend has that the part of
   *       speech was correctly identified. For more information, see <a>how-syntax</a>.</p>
   */
  PartOfSpeech?: PartOfSpeechTag;

  /**
   * <p>The word that was recognized in the source text.</p>
   */
  Text?: string;

  /**
   * <p>A unique identifier for a token.</p>
   */
  TokenId?: number;
}

export namespace SyntaxToken {
  export const filterSensitiveLog = (obj: SyntaxToken): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SyntaxToken => __isa(o, "SyntaxToken");
}

/**
 * <p>A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by a particular department. </p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The initial part of a key-value pair that forms a tag associated with a given resource. For instance, if you want to show which resources are used by which departments, you might use “Department” as the key portion of the pair, with multiple possible values such as “sales,” “legal,” and “administration.” </p>
   */
  Key: string | undefined;

  /**
   * <p> The second part of a key-value pair that forms a tag associated with a given resource. For instance, if you want to show which resources are used by which departments, you might use “Department” as the initial (key) portion of the pair, with a value of “sales” to indicate the sales department.  </p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the given Amazon Comprehend resource to which you want to associate the tags. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags being associated with a specific Amazon Comprehend resource. There can be a maximum of 50 tags (both existing and pending) associated with a specific resource. </p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

/**
 * <p>The size of the input text exceeds the limit. Use a smaller document.</p>
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
 * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
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

/**
 * <p>The request contains more tag keys than can be associated with a resource (50 tag keys per resource).</p>
 */
export interface TooManyTagKeysException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagKeysException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTagKeysException {
  export const filterSensitiveLog = (obj: TooManyTagKeysException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TooManyTagKeysException => __isa(o, "TooManyTagKeysException");
}

/**
 * <p>The request contains more tags than can be associated with a resource (50 tags per resource). The maximum
 *       number of tags includes both existing tags and those included in your current request.    </p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TooManyTagsException => __isa(o, "TooManyTagsException");
}

/**
 * <p>Provides information for filtering topic detection jobs. For more information, see
 *         .</p>
 */
export interface TopicsDetectionJobFilter {
  __type?: "TopicsDetectionJobFilter";
  /**
   * <p></p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of topic detection jobs based on job status. Returns only jobs with
   *       the specified status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Only returns jobs submitted after the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeAfter?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Only returns jobs submitted before the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeBefore?: Date;
}

export namespace TopicsDetectionJobFilter {
  export const filterSensitiveLog = (obj: TopicsDetectionJobFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TopicsDetectionJobFilter => __isa(o, "TopicsDetectionJobFilter");
}

/**
 * <p>Provides information about a topic detection job.</p>
 */
export interface TopicsDetectionJobProperties {
  __type?: "TopicsDetectionJobProperties";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants Amazon Comprehend read access to your job data.  </p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The time that the topic detection job was completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration supplied when you created the topic detection
   *       job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The identifier assigned to the topic detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the topic detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the topic detection job. If the status is <code>Failed</code>,
   *       the reason for the failure is shown in the <code>Message</code> field.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description for the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The number of topics to detect supplied when you created the topic detection job. The
   *       default is 10. </p>
   */
  NumberOfTopics?: number;

  /**
   * <p>The output data configuration supplied when you created the topic detection
   *       job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The time that the topic detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that
   *         process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your topic detection job.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace TopicsDetectionJobProperties {
  export const filterSensitiveLog = (obj: TopicsDetectionJobProperties): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TopicsDetectionJobProperties => __isa(o, "TopicsDetectionJobProperties");
}

/**
 * <p>Amazon Comprehend can't process the language of the input text. For all custom entity recognition
 *       APIs (such as <code>CreateEntityRecognizer</code>), only English is accepted. For most other APIs, such as those for Custom Classification, Amazon Comprehend accepts text in
 *       all supported languages. For a list of supported languages, see <a>supported-languages</a>. </p>
 */
export interface UnsupportedLanguageException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedLanguageException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedLanguageException {
  export const filterSensitiveLog = (obj: UnsupportedLanguageException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnsupportedLanguageException => __isa(o, "UnsupportedLanguageException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the given Amazon Comprehend resource from which you want to remove the tags.  </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The initial part of a key-value pair that forms a tag being removed from a given resource.
   *       For example,
   *       a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. Keys must be unique and cannot be duplicated for a particular resource.    </p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

export interface UpdateEndpointRequest {
  __type?: "UpdateEndpointRequest";
  /**
   * <p> The desired number of inference units to be used by the model using this endpoint.  Each
   *       inference unit represents of a throughput of 100 characters per second.</p>
   */
  DesiredInferenceUnits: number | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being updated.</p>
   */
  EndpointArn: string | undefined;
}

export namespace UpdateEndpointRequest {
  export const filterSensitiveLog = (obj: UpdateEndpointRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEndpointRequest => __isa(o, "UpdateEndpointRequest");
}

export interface UpdateEndpointResponse {
  __type?: "UpdateEndpointResponse";
}

export namespace UpdateEndpointResponse {
  export const filterSensitiveLog = (obj: UpdateEndpointResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEndpointResponse => __isa(o, "UpdateEndpointResponse");
}

/**
 * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For
 *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
 */
export interface VpcConfig {
  __type?: "VpcConfig";
  /**
   * <p>The ID number for a security group on an instance of your private VPC.  Security groups on your VPC function serve as a virtual firewall to control inbound and outbound traffic and
   *       provides security for the resources that you’ll be accessing on the VPC. This ID number is preceded by "sg-", for instance: "sg-03b388029b0a285ea".
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Security Groups for your VPC</a>. </p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID for each subnet being used in your private VPC. This subnet is a subset of the a range of IPv4 addresses used by the
   *       VPC and is specific to a given availability zone in the VPC’s region. This ID number is preceded by "subnet-", for instance: "subnet-04ccf456919e69055".
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and Subnets</a>. </p>
   */
  Subnets: string[] | undefined;
}

export namespace VpcConfig {
  export const filterSensitiveLog = (obj: VpcConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VpcConfig => __isa(o, "VpcConfig");
}
