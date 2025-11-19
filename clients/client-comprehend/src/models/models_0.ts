// smithy-typescript generated code
import {
  AugmentedManifestsDocumentTypeFormat,
  BlockType,
  DatasetDataFormat,
  DatasetStatus,
  DatasetType,
  DocumentClassifierDataFormat,
  DocumentClassifierDocumentTypeFormat,
  DocumentClassifierMode,
  DocumentReadAction,
  DocumentReadFeatureTypes,
  DocumentReadMode,
  DocumentType,
  EndpointStatus,
  EntityRecognizerDataFormat,
  EntityType,
  FlywheelIterationStatus,
  FlywheelStatus,
  InputFormat,
  InvalidRequestDetailReason,
  JobStatus,
  LanguageCode,
  ModelStatus,
  ModelType,
  PageBasedErrorCode,
  PageBasedWarningCode,
  PartOfSpeechTagType,
  PiiEntitiesDetectionMaskMode,
  PiiEntitiesDetectionMode,
  PiiEntityType,
  RelationshipType,
  SentimentType,
  Split,
  SyntaxLanguageCode,
  TargetedSentimentEntityType,
  ToxicContentType,
} from "./enums";

/**
 * <p>An augmented manifest file that provides training data for your custom model. An augmented
 *       manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.</p>
 * @public
 */
export interface AugmentedManifestsListItem {
  /**
   * <p>The Amazon S3 location of the augmented manifest file.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>The purpose of the data you've provided in the augmented manifest. You can either train or
   *       test this data. If you don't specify, the default is train.</p>
   *          <p>TRAIN - all of the documents in the manifest will be used for training. If no test
   *       documents are provided, Amazon Comprehend will automatically reserve a portion of the training
   *       documents for testing.</p>
   *          <p> TEST - all of the documents in the manifest will be used for testing.</p>
   * @public
   */
  Split?: Split | undefined;

  /**
   * <p>The JSON attribute that contains the annotations for your training documents. The number
   *       of attribute names that you specify depends on whether your augmented manifest file is the
   *       output of a single labeling job or a chained labeling job.</p>
   *          <p>If your file is the output of a single labeling job, specify the LabelAttributeName key
   *       that was used when the job was created in Ground Truth.</p>
   *          <p>If your file is the output of a chained labeling job, specify the LabelAttributeName key
   *       for one or more jobs in the chain. Each LabelAttributeName key provides the annotations from
   *       an individual job.</p>
   * @public
   */
  AttributeNames: string[] | undefined;

  /**
   * <p>The S3 prefix to the annotation files that are referred in the augmented manifest
   *       file.</p>
   * @public
   */
  AnnotationDataS3Uri?: string | undefined;

  /**
   * <p>The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest
   *       file.</p>
   * @public
   */
  SourceDocumentsS3Uri?: string | undefined;

  /**
   * <p>The type of augmented manifest. PlainTextDocument or SemiStructuredDocument. If you don't
   *       specify, the default is PlainTextDocument. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PLAIN_TEXT_DOCUMENT</code> A document type that represents any unicode text that
   *           is encoded in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SEMI_STRUCTURED_DOCUMENT</code> A document type with positional and structural
   *           context, like a PDF. For training with Amazon Comprehend, only PDFs are supported. For
   *           inference, Amazon Comprehend support PDFs, DOCX and TXT.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DocumentType?: AugmentedManifestsDocumentTypeFormat | undefined;
}

/**
 * @public
 */
export interface BatchDetectDominantLanguageRequest {
  /**
   * <p>A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25
   *       documents. Each document should contain at least 20 characters. The maximum size of each document is 5 KB.</p>
   * @public
   */
  TextList: string[] | undefined;
}

/**
 * <p>Describes an error that occurred while processing a document in a batch. The operation
 *       returns on <code>BatchItemError</code> object for each document that contained an
 *       error.</p>
 * @public
 */
export interface BatchItemError {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   * @public
   */
  Index?: number | undefined;

  /**
   * <p>The numeric error code of the error.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>A text description of the error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Returns the code for the dominant language in the input text and the level of
 *       confidence that Amazon Comprehend has in the accuracy of the detection.</p>
 * @public
 */
export interface DominantLanguage {
  /**
   * <p>The RFC 5646 language code for the dominant language. For more information about RFC
   *       5646, see <a href="https://tools.ietf.org/html/rfc5646">Tags for Identifying
   *         Languages</a> on the <i>IETF Tools</i> web site.</p>
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   * @public
   */
  Score?: number | undefined;
}

/**
 * <p>The result of calling the  operation.
 *       The operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 * @public
 */
export interface BatchDetectDominantLanguageItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   * @public
   */
  Index?: number | undefined;

  /**
   * <p>One or more <a>DominantLanguage</a> objects describing the dominant
   *       languages in the document.</p>
   * @public
   */
  Languages?: DominantLanguage[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectDominantLanguageResponse {
  /**
   * <p>A list of  objects
   *       containing the results of the operation. The results are sorted in ascending order by the
   *         <code>Index</code> field and match the order of the documents in the input list. If all of
   *       the documents contain an error, the <code>ResultList</code> is empty.</p>
   * @public
   */
  ResultList: BatchDetectDominantLanguageItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   * @public
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * <p>Provides additional detail about why the request failed.</p>
 * @public
 */
export interface InvalidRequestDetail {
  /**
   * <p>Reason codes include the following values:</p>
   *          <ul>
   *             <li>
   *                <p>DOCUMENT_SIZE_EXCEEDED - Document size is too large. Check the size of your file and resubmit the request.</p>
   *             </li>
   *             <li>
   *                <p>UNSUPPORTED_DOC_TYPE - Document type is not supported. Check the file type and resubmit the request.</p>
   *             </li>
   *             <li>
   *                <p>PAGE_LIMIT_EXCEEDED - Too many pages in the document. Check the number of pages in your file and resubmit the request.</p>
   *             </li>
   *             <li>
   *                <p>TEXTRACT_ACCESS_DENIED - Access denied to Amazon Textract. Verify that your account has permission to use Amazon Textract API operations and resubmit the request.</p>
   *             </li>
   *             <li>
   *                <p>NOT_TEXTRACT_JSON - Document is not Amazon Textract JSON format. Verify the format and resubmit the request.</p>
   *             </li>
   *             <li>
   *                <p>MISMATCHED_TOTAL_PAGE_COUNT - Check the number of pages in your file and resubmit the request.</p>
   *             </li>
   *             <li>
   *                <p>INVALID_DOCUMENT - Invalid document. Check the file and resubmit the request.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Reason?: InvalidRequestDetailReason | undefined;
}

/**
 * @public
 */
export interface BatchDetectEntitiesRequest {
  /**
   * <p>A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25
   *       documents. The maximum size of each document is 5 KB.</p>
   * @public
   */
  TextList: string[] | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * <p>Nested block contained within a block.</p>
 * @public
 */
export interface ChildBlock {
  /**
   * <p>Unique identifier for the child block.</p>
   * @public
   */
  ChildBlockId?: string | undefined;

  /**
   * <p>Offset of the start of the child block within its parent block.</p>
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * <p>Offset of the end of the child block within its parent block.</p>
   * @public
   */
  EndOffset?: number | undefined;
}

/**
 * <p>A reference to a block. </p>
 * @public
 */
export interface BlockReference {
  /**
   * <p>Unique identifier for the block.</p>
   * @public
   */
  BlockId?: string | undefined;

  /**
   * <p>Offset of the start of the block within its parent block.</p>
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * <p>Offset of the end of the block within its parent block.</p>
   * @public
   */
  EndOffset?: number | undefined;

  /**
   * <p>List of child blocks within this block.</p>
   * @public
   */
  ChildBlocks?: ChildBlock[] | undefined;
}

/**
 * <p>Provides information about an entity. </p>
 *          <p> </p>
 * @public
 */
export interface Entity {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   * @public
   */
  Score?: number | undefined;

  /**
   * <p>The entity type. For entity detection using the built-in model, this field contains one of the
   *       standard entity types listed below.</p>
   *          <p>For custom entity detection, this field contains one of the
   *       entity types that you specified when you trained your custom model.</p>
   * @public
   */
  Type?: EntityType | undefined;

  /**
   * <p>The text of the entity.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The zero-based offset from the beginning of the source text to the first character in the
   *       entity.</p>
   *          <p>This field is empty for non-text input.</p>
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * <p>The zero-based offset from the beginning of the source text to the last character in the
   *       entity.</p>
   *          <p>This field is empty for non-text input.</p>
   * @public
   */
  EndOffset?: number | undefined;

  /**
   * <p>A reference to each block for this entity. This field is empty for plain-text input.</p>
   * @public
   */
  BlockReferences?: BlockReference[] | undefined;
}

/**
 * <p>The result of calling the  operation. The
 *       operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 * @public
 */
export interface BatchDetectEntitiesItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   * @public
   */
  Index?: number | undefined;

  /**
   * <p>One or more <a>Entity</a> objects, one for each entity detected in the
   *       document.</p>
   * @public
   */
  Entities?: Entity[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectEntitiesResponse {
  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   * @public
   */
  ResultList: BatchDetectEntitiesItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   * @public
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectKeyPhrasesRequest {
  /**
   * <p>A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25
   *       documents. The maximum size of each document is 5 KB.</p>
   * @public
   */
  TextList: string[] | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * <p>Describes a key noun phrase.</p>
 * @public
 */
export interface KeyPhrase {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   * @public
   */
  Score?: number | undefined;

  /**
   * <p>The text of a key noun phrase.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The zero-based offset from the beginning of the source text to the first character in the
   *       key phrase.</p>
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * <p>The zero-based offset from the beginning of the source text to the last character in the
   *       key phrase.</p>
   * @public
   */
  EndOffset?: number | undefined;
}

/**
 * <p>The result of calling the  operation. The
 *       operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 * @public
 */
export interface BatchDetectKeyPhrasesItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   * @public
   */
  Index?: number | undefined;

  /**
   * <p>One or more <a>KeyPhrase</a> objects, one for each key phrase detected in
   *       the document.</p>
   * @public
   */
  KeyPhrases?: KeyPhrase[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectKeyPhrasesResponse {
  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   * @public
   */
  ResultList: BatchDetectKeyPhrasesItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   * @public
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectSentimentRequest {
  /**
   * <p>A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25
   *       documents. The maximum size of each document is 5 KB. </p>
   * @public
   */
  TextList: string[] | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * <p>Describes the level of confidence that Amazon Comprehend has in the accuracy of its
 *       detection of sentiments.</p>
 * @public
 */
export interface SentimentScore {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of
   *       the <code>POSITIVE</code> sentiment.</p>
   * @public
   */
  Positive?: number | undefined;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of
   *       the <code>NEGATIVE</code> sentiment.</p>
   * @public
   */
  Negative?: number | undefined;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of
   *       the <code>NEUTRAL</code> sentiment.</p>
   * @public
   */
  Neutral?: number | undefined;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of
   *       the <code>MIXED</code> sentiment.</p>
   * @public
   */
  Mixed?: number | undefined;
}

/**
 * <p>The result of calling the  operation. The
 *       operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 * @public
 */
export interface BatchDetectSentimentItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   * @public
   */
  Index?: number | undefined;

  /**
   * <p>The sentiment detected in the document.</p>
   * @public
   */
  Sentiment?: SentimentType | undefined;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its sentiment
   *       detection.</p>
   * @public
   */
  SentimentScore?: SentimentScore | undefined;
}

/**
 * @public
 */
export interface BatchDetectSentimentResponse {
  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   * @public
   */
  ResultList: BatchDetectSentimentItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   * @public
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectSyntaxRequest {
  /**
   * <p>A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25
   *       documents. The maximum size for each document is 5 KB.</p>
   * @public
   */
  TextList: string[] | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the following languages
   *       supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"),
   *       Italian ("it"), or Portuguese ("pt"). All documents must be in the same language.</p>
   * @public
   */
  LanguageCode: SyntaxLanguageCode | undefined;
}

/**
 * <p>Identifies the part of speech represented by the token and gives the confidence that
 *       Amazon Comprehend has that the part of speech was correctly identified. For more information
 *       about the parts of speech that Amazon Comprehend can identify, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
 *        </p>
 * @public
 */
export interface PartOfSpeechTag {
  /**
   * <p>Identifies the part of speech that the token represents.</p>
   * @public
   */
  Tag?: PartOfSpeechTagType | undefined;

  /**
   * <p>The confidence that Amazon Comprehend has that the part of speech was correctly
   *       identified.</p>
   * @public
   */
  Score?: number | undefined;
}

/**
 * <p>Represents a work in the input text that was recognized and assigned a part of speech.
 *       There is one syntax token record for each word in the source text.</p>
 * @public
 */
export interface SyntaxToken {
  /**
   * <p>A unique identifier for a token.</p>
   * @public
   */
  TokenId?: number | undefined;

  /**
   * <p>The word that was recognized in the source text.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The zero-based offset from the beginning of the source text to the first character in the
   *       word.</p>
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * <p>The zero-based offset from the beginning of the source text to the last character in the
   *       word.</p>
   * @public
   */
  EndOffset?: number | undefined;

  /**
   * <p>Provides the part of speech label and the confidence level that Amazon Comprehend has that
   *       the part of speech was correctly identified. For more information, see
   *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
   *     </p>
   * @public
   */
  PartOfSpeech?: PartOfSpeechTag | undefined;
}

/**
 * <p>The result of calling the  operation. The
 *       operation returns one object that is successfully processed by the operation.</p>
 * @public
 */
export interface BatchDetectSyntaxItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   * @public
   */
  Index?: number | undefined;

  /**
   * <p>The syntax tokens for the words in the document, one token for each word.</p>
   * @public
   */
  SyntaxTokens?: SyntaxToken[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectSyntaxResponse {
  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   * @public
   */
  ResultList: BatchDetectSyntaxItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document that
   *       contained an error. The results are sorted in ascending order by the <code>Index</code> field
   *       and match the order of the documents in the input list. If there are no errors in the batch,
   *       the <code>ErrorList</code> is empty.</p>
   * @public
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectTargetedSentimentRequest {
  /**
   * <p>A list containing the UTF-8 encoded text of the input documents.
   *       The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB.</p>
   * @public
   */
  TextList: string[] | undefined;

  /**
   * <p>The language of the input documents. Currently, English is the only supported language.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * <p>Contains the sentiment and sentiment score for one mention of an entity.</p>
 *          <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @public
 */
export interface MentionSentiment {
  /**
   * <p>The sentiment of the mention. </p>
   * @public
   */
  Sentiment?: SentimentType | undefined;

  /**
   * <p>Describes the level of confidence that Amazon Comprehend has in the accuracy of its
   *       detection of sentiments.</p>
   * @public
   */
  SentimentScore?: SentimentScore | undefined;
}

/**
 * <p>Information about one mention of an entity. The mention information includes the location of the mention
 *       in the text and the sentiment of the mention.</p>
 *          <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @public
 */
export interface TargetedSentimentMention {
  /**
   * <p>Model confidence that the entity is relevant. Value range is zero to one, where one is highest confidence.</p>
   * @public
   */
  Score?: number | undefined;

  /**
   * <p>The confidence that all the entities mentioned in the group relate to the same entity.</p>
   * @public
   */
  GroupScore?: number | undefined;

  /**
   * <p>The text in the document that identifies the entity.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The type of the entity. Amazon Comprehend supports a variety of <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html#how-targeted-sentiment-entities">entity types</a>.</p>
   * @public
   */
  Type?: TargetedSentimentEntityType | undefined;

  /**
   * <p>Contains the sentiment and sentiment score for the mention.</p>
   * @public
   */
  MentionSentiment?: MentionSentiment | undefined;

  /**
   * <p>The offset into the document text where the mention begins.</p>
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * <p>The offset into the document text where the mention ends.</p>
   * @public
   */
  EndOffset?: number | undefined;
}

/**
 * <p>Information about one of the entities found by targeted sentiment analysis.</p>
 *          <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @public
 */
export interface TargetedSentimentEntity {
  /**
   * <p>One or more index into the Mentions array that provides the best name for the entity group.</p>
   * @public
   */
  DescriptiveMentionIndex?: number[] | undefined;

  /**
   * <p>An array of mentions of the entity in the document. The array represents a co-reference group.
   *       See <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html#how-targeted-sentiment-values">
   *         Co-reference group</a> for an example. </p>
   * @public
   */
  Mentions?: TargetedSentimentMention[] | undefined;
}

/**
 * <p>Analysis results for one of the documents in the batch.</p>
 * @public
 */
export interface BatchDetectTargetedSentimentItemResult {
  /**
   * <p>The zero-based index of this result in the input list.</p>
   * @public
   */
  Index?: number | undefined;

  /**
   * <p>An array of targeted sentiment entities.</p>
   * @public
   */
  Entities?: TargetedSentimentEntity[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectTargetedSentimentResponse {
  /**
   * <p>A list of objects containing the results of the operation.
   *       The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list.
   *       If all of the documents contain an error, the <code>ResultList</code> is empty.</p>
   * @public
   */
  ResultList: BatchDetectTargetedSentimentItemResult[] | undefined;

  /**
   * <p>List of errors that the operation can return.</p>
   * @public
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * <p>The bounding box around the detected page
 *      or around an element on a document page.
 *     The left (x-coordinate) and top (y-coordinate) are coordinates that
 *       represent the top and left sides of the bounding box. Note that the upper-left
 *       corner of the image is the origin (0,0). </p>
 *          <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_BoundingBox.html">BoundingBox</a> in the Amazon Textract API reference.</p>
 * @public
 */
export interface BoundingBox {
  /**
   * <p>The height of the bounding box as a ratio of the overall document page height.</p>
   * @public
   */
  Height?: number | undefined;

  /**
   * <p>The left coordinate of the bounding box as a ratio of overall document page width.</p>
   * @public
   */
  Left?: number | undefined;

  /**
   * <p>The top coordinate of the bounding box as a ratio of overall document page height.</p>
   * @public
   */
  Top?: number | undefined;

  /**
   * <p>The width of the bounding box as a ratio of the overall document page width.</p>
   * @public
   */
  Width?: number | undefined;
}

/**
 * <p>The X and Y coordinates of a point on a document page.</p>
 *          <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Point.html">Point</a> in the Amazon Textract API reference.</p>
 * @public
 */
export interface Point {
  /**
   * <p>The value of the X coordinate for a point on a polygon</p>
   * @public
   */
  X?: number | undefined;

  /**
   * <p>The value of the Y coordinate for a point on a polygon</p>
   * @public
   */
  Y?: number | undefined;
}

/**
 * <p>Information about the location of items on a document page.</p>
 *          <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Geometry.html">Geometry</a> in the Amazon Textract API reference.</p>
 * @public
 */
export interface Geometry {
  /**
   * <p>An axis-aligned coarse representation of the location of the recognized item on the
   *       document page.</p>
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * <p>Within the bounding box, a fine-grained polygon around the recognized item.</p>
   * @public
   */
  Polygon?: Point[] | undefined;
}

/**
 * <p>List of child blocks for the current block.</p>
 * @public
 */
export interface RelationshipsListItem {
  /**
   * <p>Identifers of the child blocks.</p>
   * @public
   */
  Ids?: string[] | undefined;

  /**
   * <p>Only supported relationship is a child relationship.</p>
   * @public
   */
  Type?: RelationshipType | undefined;
}

/**
 * <p>Information about each word or line of text in the input document.</p>
 *          <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Block.html">Block</a> in the Amazon Textract API reference.</p>
 * @public
 */
export interface Block {
  /**
   * <p>Unique identifier for the block.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The block represents a line of text or one word of text.</p>
   *          <ul>
   *             <li>
   *                <p>WORD - A word that's detected on a document page.
   *         A word is one or more ISO basic Latin script characters that aren't separated by spaces.</p>
   *             </li>
   *             <li>
   *                <p>LINE - A string of tab-delimited, contiguous words
   *         that are detected on a document page</p>
   *             </li>
   *          </ul>
   * @public
   */
  BlockType?: BlockType | undefined;

  /**
   * <p>The word or line of text extracted from the block.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>Page number where the block appears.</p>
   * @public
   */
  Page?: number | undefined;

  /**
   * <p>Co-ordinates of the rectangle or polygon that contains the text.</p>
   * @public
   */
  Geometry?: Geometry | undefined;

  /**
   * <p>A list of child blocks of the current block.
   *       For example, a LINE object has child blocks for each WORD block that's part of the line of text. </p>
   * @public
   */
  Relationships?: RelationshipsListItem[] | undefined;
}

/**
 * <p>Describes the result metrics for the test data associated with an documentation
 *       classifier.</p>
 * @public
 */
export interface ClassifierEvaluationMetrics {
  /**
   * <p>The fraction of the labels that were correct recognized. It is computed by dividing the
   *       number of labels in the test documents that were correctly recognized by the total number of
   *       labels in the test documents.</p>
   * @public
   */
  Accuracy?: number | undefined;

  /**
   * <p>A measure of the usefulness of the classifier results in the test data. High precision
   *       means that the classifier returned substantially more relevant results than irrelevant
   *       ones.</p>
   * @public
   */
  Precision?: number | undefined;

  /**
   * <p>A measure of how complete the classifier results are for the test data. High recall means
   *       that the classifier returned most of the relevant results. </p>
   * @public
   */
  Recall?: number | undefined;

  /**
   * <p>A measure of how accurate the classifier results are for the test data. It is derived from
   *       the <code>Precision</code> and <code>Recall</code> values. The <code>F1Score</code> is the
   *       harmonic average of the two scores. The highest score is 1, and the worst score is 0. </p>
   * @public
   */
  F1Score?: number | undefined;

  /**
   * <p>A measure of the usefulness of the recognizer results in the test data. High precision
   *       means that the recognizer returned substantially more relevant results than irrelevant ones.
   *       Unlike the Precision metric which comes from averaging the precision of all available labels,
   *       this is based on the overall score of all precision scores added together.</p>
   * @public
   */
  MicroPrecision?: number | undefined;

  /**
   * <p>A measure of how complete the classifier results are for the test data. High recall means
   *       that the classifier returned most of the relevant results. Specifically, this indicates how
   *       many of the correct categories in the text that the model can predict. It is a percentage of
   *       correct categories in the text that can found. Instead of averaging the recall scores of all
   *       labels (as with Recall), micro Recall is based on the overall score of all recall scores added
   *       together.</p>
   * @public
   */
  MicroRecall?: number | undefined;

  /**
   * <p>A measure of how accurate the classifier results are for the test data. It is a
   *       combination of the <code>Micro Precision</code> and <code>Micro Recall</code> values. The
   *         <code>Micro F1Score</code> is the harmonic mean of the two scores. The highest score is 1,
   *       and the worst score is 0.</p>
   * @public
   */
  MicroF1Score?: number | undefined;

  /**
   * <p>Indicates the fraction of labels that are incorrectly predicted. Also seen as the fraction
   *       of wrong labels compared to the total number of labels. Scores closer to zero are
   *       better.</p>
   * @public
   */
  HammingLoss?: number | undefined;
}

/**
 * <p>Provides information about a document classifier.</p>
 * @public
 */
export interface ClassifierMetadata {
  /**
   * <p>The number of labels in the input data. </p>
   * @public
   */
  NumberOfLabels?: number | undefined;

  /**
   * <p>The number of documents in the input data that were used to train the classifier.
   *       Typically this is 80 to 90 percent of the input documents.</p>
   * @public
   */
  NumberOfTrainedDocuments?: number | undefined;

  /**
   * <p>The number of documents in the input data that were used to test the classifier. Typically
   *       this is 10 to 20 percent of the input documents, up to 10,000 documents.</p>
   * @public
   */
  NumberOfTestDocuments?: number | undefined;

  /**
   * <p> Describes the result metrics for the test data associated with an documentation
   *       classifier.</p>
   * @public
   */
  EvaluationMetrics?: ClassifierEvaluationMetrics | undefined;
}

/**
 * <p>Provides configuration parameters to override the default actions for extracting text from PDF documents and image files. </p>
 *          <p> By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Word files</b> - Amazon Comprehend parser extracts the text. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Digital PDF files</b> - Amazon Comprehend parser extracts the text. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Image files and scanned PDF files</b> - Amazon Comprehend uses the Amazon Textract <code>DetectDocumentText</code>
 *           API to extract the text. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <code>DocumentReaderConfig</code> does not apply to plain text files or Word files.</p>
 *          <p>
 *         For image files and PDF documents, you can override these default actions using the fields listed below.
 *         For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-set-textract-options.html">
 *         Setting text extraction options</a> in the Comprehend Developer Guide.
 *     </p>
 * @public
 */
export interface DocumentReaderConfig {
  /**
   * <p>This field defines the Amazon Textract API operation that Amazon Comprehend uses to extract text from PDF files and image files.
   *       Enter one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TEXTRACT_DETECT_DOCUMENT_TEXT</code> - The Amazon Comprehend service uses the <code>DetectDocumentText</code>
   *            API operation. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEXTRACT_ANALYZE_DOCUMENT</code> - The Amazon Comprehend service uses the <code>AnalyzeDocument</code>
   *           API operation. </p>
   *             </li>
   *          </ul>
   * @public
   */
  DocumentReadAction: DocumentReadAction | undefined;

  /**
   * <p>Determines the text extraction actions for PDF files. Enter one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SERVICE_DEFAULT</code> - use the Amazon Comprehend service defaults for PDF files.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FORCE_DOCUMENT_READ_ACTION</code> - Amazon Comprehend uses the Textract API specified by
   *           DocumentReadAction for all PDF files, including digital PDF files. </p>
   *             </li>
   *          </ul>
   * @public
   */
  DocumentReadMode?: DocumentReadMode | undefined;

  /**
   * <p>Specifies the type of Amazon Textract features to apply. If you chose <code>TEXTRACT_ANALYZE_DOCUMENT</code>
   *       as the read action, you must specify one or both of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TABLES</code> - Returns additional information about any tables that are detected in the input document. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FORMS</code> - Returns additional information about any forms that are detected in the input document. </p>
   *             </li>
   *          </ul>
   * @public
   */
  FeatureTypes?: DocumentReadFeatureTypes[] | undefined;
}

/**
 * @public
 */
export interface ClassifyDocumentRequest {
  /**
   * <p>The document text to be analyzed. If you enter text using this parameter,
   *       do not use the <code>Bytes</code> parameter.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint. </p>
   *          <p>For prompt safety classification, Amazon Comprehend provides the endpoint ARN. For more information about prompt safety classifiers, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/trust-safety.html#prompt-classification">Prompt safety classification</a> in the <i>Amazon Comprehend Developer Guide</i>
   *          </p>
   *          <p>For custom classification, you create an endpoint for your custom model. For more information,
   *       see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/using-endpoints.html">Using Amazon Comprehend endpoints</a>.</p>
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * <p>Use the <code>Bytes</code> parameter to input a text, PDF, Word or image file.</p>
   *          <p>When you classify a document using a custom model, you can also use the <code>Bytes</code> parameter to input an Amazon Textract <code>DetectDocumentText</code>
   *         or <code>AnalyzeDocument</code> output file.</p>
   *          <p>To classify a document using the prompt safety classifier, use the <code>Text</code> parameter for input.</p>
   *          <p>Provide the input document as a sequence of base64-encoded bytes.
   *       If your code uses an Amazon Web Services SDK to classify documents, the SDK may encode
   *       the document file bytes for you. </p>
   *          <p>The maximum length of this field depends on the input document type. For details, see
   *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync.html">
   *         Inputs for real-time custom analysis</a> in the Comprehend Developer Guide. </p>
   *          <p>If you use the <code>Bytes</code> parameter, do not use the <code>Text</code> parameter.</p>
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * <p>Provides configuration parameters to override the default actions for extracting text
   *       from PDF documents and image files.</p>
   * @public
   */
  DocumentReaderConfig?: DocumentReaderConfig | undefined;
}

/**
 * <p>Specifies the class that categorizes the document being analyzed</p>
 * @public
 */
export interface DocumentClass {
  /**
   * <p>The name of the class.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The confidence score that Amazon Comprehend has this class correctly attributed.</p>
   * @public
   */
  Score?: number | undefined;

  /**
   * <p>Page number in the input document. This field is present
   *       in the response only if your request includes the <code>Byte</code> parameter. </p>
   * @public
   */
  Page?: number | undefined;
}

/**
 * <p>Array of the number of characters extracted from each page.</p>
 * @public
 */
export interface ExtractedCharactersListItem {
  /**
   * <p>Page number.</p>
   * @public
   */
  Page?: number | undefined;

  /**
   * <p>Number of characters extracted from each page.</p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * <p>Information about the document, discovered during text extraction.</p>
 * @public
 */
export interface DocumentMetadata {
  /**
   * <p>Number of pages in the document.</p>
   * @public
   */
  Pages?: number | undefined;

  /**
   * <p>List of pages in the document, with the number of characters extracted from each page.</p>
   * @public
   */
  ExtractedCharacters?: ExtractedCharactersListItem[] | undefined;
}

/**
 * <p>Document type for each page in the document.</p>
 * @public
 */
export interface DocumentTypeListItem {
  /**
   * <p>Page number.</p>
   * @public
   */
  Page?: number | undefined;

  /**
   * <p>Document type.</p>
   * @public
   */
  Type?: DocumentType | undefined;
}

/**
 * <p>Text extraction encountered one or more page-level errors in the input document.</p>
 *          <p>The <code>ErrorCode</code> contains one of the following values:</p>
 *          <ul>
 *             <li>
 *                <p>TEXTRACT_BAD_PAGE - Amazon Textract cannot read the page. For more information
 *           about page limits in Amazon Textract, see <a href="https://docs.aws.amazon.com/textract/latest/dg/limits-document.html">
 *             Page Quotas in Amazon Textract</a>.</p>
 *             </li>
 *             <li>
 *                <p>TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED - The number of requests exceeded your throughput limit.
 *           For more information about throughput quotas in Amazon Textract, see <a href="https://docs.aws.amazon.com/textract/latest/dg/limits-quotas-explained.html">
 *             Default quotas in Amazon Textract</a>.</p>
 *             </li>
 *             <li>
 *                <p>PAGE_CHARACTERS_EXCEEDED - Too many text characters on the page (10,000 characters maximum).</p>
 *             </li>
 *             <li>
 *                <p>PAGE_SIZE_EXCEEDED - The maximum page size is 10 MB.</p>
 *             </li>
 *             <li>
 *                <p>INTERNAL_SERVER_ERROR - The request encountered a service issue. Try the API request again.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ErrorsListItem {
  /**
   * <p>Page number where the error occurred.</p>
   * @public
   */
  Page?: number | undefined;

  /**
   * <p>Error code for the cause of the error.</p>
   * @public
   */
  ErrorCode?: PageBasedErrorCode | undefined;

  /**
   * <p>Text message explaining the reason for the error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Specifies one of the label or labels that categorize the document being analyzed.</p>
 * @public
 */
export interface DocumentLabel {
  /**
   * <p>The name of the label.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The confidence score that Amazon Comprehend has this label correctly attributed.</p>
   * @public
   */
  Score?: number | undefined;

  /**
   * <p>Page number where the label occurs. This field is present
   *       in the response only if your request includes the <code>Byte</code> parameter. </p>
   * @public
   */
  Page?: number | undefined;
}

/**
 * <p>The system identified one of the following warnings while processing the input document:</p>
 *          <ul>
 *             <li>
 *                <p>The document to classify is plain text, but the classifier is a native document model.</p>
 *             </li>
 *             <li>
 *                <p>The document to classify is semi-structured, but the classifier is a plain-text model.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface WarningsListItem {
  /**
   * <p>Page number in the input document.</p>
   * @public
   */
  Page?: number | undefined;

  /**
   * <p>The type of warning.</p>
   * @public
   */
  WarnCode?: PageBasedWarningCode | undefined;

  /**
   * <p>Text message associated with the warning.</p>
   * @public
   */
  WarnMessage?: string | undefined;
}

/**
 * @public
 */
export interface ClassifyDocumentResponse {
  /**
   * <p>The classes used by the document being analyzed. These are used for models trained in multi-class mode.
   *       Individual classes are mutually exclusive and each document is expected to have only a
   *       single class assigned to it. For example, an animal can be a dog or a cat, but not both at the
   *       same time. </p>
   *          <p>For prompt safety classification, the response includes only two classes (SAFE_PROMPT and UNSAFE_PROMPT),
   *       along with a confidence score for each class. The value range of the score is zero to one, where one is the highest confidence.</p>
   * @public
   */
  Classes?: DocumentClass[] | undefined;

  /**
   * <p>The labels used in the document being analyzed. These are used for multi-label trained
   *       models. Individual labels represent different categories that are related in some manner and
   *       are not mutually exclusive. For example, a movie can be just an action movie, or it can be an
   *       action movie, a science fiction movie, and a comedy, all at the same time. </p>
   * @public
   */
  Labels?: DocumentLabel[] | undefined;

  /**
   * <p>Extraction information about the document. This field is present
   *       in the response only if your request includes the <code>Byte</code> parameter. </p>
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * <p>The document type for each page in the input document. This field is present
   *       in the response only if your request includes the <code>Byte</code> parameter. </p>
   * @public
   */
  DocumentType?: DocumentTypeListItem[] | undefined;

  /**
   * <p>Page-level errors that the system detected while processing the input document.
   *       The field is empty if the system encountered no errors.</p>
   * @public
   */
  Errors?: ErrorsListItem[] | undefined;

  /**
   * <p>Warnings detected while processing the input document.
   *       The response includes a warning if there is a mismatch between the input document type
   *       and the model type associated with the endpoint that you specified. The response can also include
   *        warnings for individual pages that have a mismatch. </p>
   *          <p>The field is empty if the system generated no warnings.</p>
   * @public
   */
  Warnings?: WarningsListItem[] | undefined;
}

/**
 * @public
 */
export interface ContainsPiiEntitiesRequest {
  /**
   * <p>A UTF-8 text string. The maximum string size is 100 KB.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The language of the input documents.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * <p>Specifies one of the label or labels that categorize the personally identifiable
 *       information (PII) entity being analyzed.</p>
 * @public
 */
export interface EntityLabel {
  /**
   * <p>The name of the label.</p>
   * @public
   */
  Name?: PiiEntityType | undefined;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   * @public
   */
  Score?: number | undefined;
}

/**
 * @public
 */
export interface ContainsPiiEntitiesResponse {
  /**
   * <p>The labels used in the document being analyzed. Individual labels represent personally
   *       identifiable information (PII) entity types.</p>
   * @public
   */
  Labels?: EntityLabel[] | undefined;
}

/**
 * <p>An augmented manifest file that provides training data for your custom model.
 *       An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.</p>
 * @public
 */
export interface DatasetAugmentedManifestsListItem {
  /**
   * <p>The JSON attribute that contains the annotations for your training documents. The number
   *       of attribute names that you specify depends on whether your augmented manifest file is the
   *       output of a single labeling job or a chained labeling job.</p>
   *          <p>If your file is the output of a single labeling job, specify the LabelAttributeName key
   *       that was used when the job was created in Ground Truth.</p>
   *          <p>If your file is the output of a chained labeling job, specify the LabelAttributeName key
   *       for one or more jobs in the chain. Each LabelAttributeName key provides the annotations from
   *       an individual job.</p>
   * @public
   */
  AttributeNames: string[] | undefined;

  /**
   * <p>The Amazon S3 location of the augmented manifest file.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>The S3 prefix to the annotation files that are referred in the augmented manifest
   *       file.</p>
   * @public
   */
  AnnotationDataS3Uri?: string | undefined;

  /**
   * <p>The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest
   *       file.</p>
   * @public
   */
  SourceDocumentsS3Uri?: string | undefined;

  /**
   * <p>The type of augmented manifest. If you don't specify, the default is PlainTextDocument. </p>
   *          <p>
   *             <code>PLAIN_TEXT_DOCUMENT</code> A document type that represents any unicode text that
   *       is encoded in UTF-8.</p>
   * @public
   */
  DocumentType?: AugmentedManifestsDocumentTypeFormat | undefined;
}

/**
 * <p>Describes the dataset input data configuration for a document classifier model.</p>
 *          <p>For more information on how the input file is formatted, see  <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a>
 *       in the Comprehend Developer Guide. </p>
 * @public
 */
export interface DatasetDocumentClassifierInputDataConfig {
  /**
   * <p>The Amazon S3 URI for the input data. The S3 bucket must be in the same Region as the API
   *       endpoint that you are calling. The URI can point to a single input file or it can provide the
   *       prefix for a collection of input files.</p>
   *          <p>For example, if you use the URI <code>S3://bucketName/prefix</code>, if the prefix is a
   *       single file, Amazon Comprehend uses that file as input. If more than one file begins with the
   *       prefix, Amazon Comprehend uses all of them as input.</p>
   *          <p>This parameter is required if you set <code>DataFormat</code> to
   *       <code>COMPREHEND_CSV</code>.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>Indicates the delimiter used to separate each label for training a multi-label classifier.
   *       The default delimiter between labels is a pipe (|). You can use a different character as a
   *       delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the
   *       training documents use a delimiter other than the default or the delimiter you specify, the
   *       labels on that line will be combined to make a single unique label, such as
   *       LABELLABELLABEL.</p>
   * @public
   */
  LabelDelimiter?: string | undefined;
}

/**
 * <p>Describes the annotations associated with a entity recognizer.</p>
 * @public
 */
export interface DatasetEntityRecognizerAnnotations {
  /**
   * <p> Specifies the Amazon S3 location where the training documents for an entity recognizer
   *       are located. The URI must be in the same Region as the API endpoint that you are
   *       calling.</p>
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * <p>Describes the documents submitted with a dataset for an entity recognizer model.</p>
 * @public
 */
export interface DatasetEntityRecognizerDocuments {
  /**
   * <p> Specifies the Amazon S3 location where the documents for the dataset
   *       are located.  </p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p> Specifies how the text in an input file should be processed. This is optional, and the
   *       default is ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document.
   *       Use this option when you are processing large documents, such as newspaper articles or
   *       scientific papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document.
   *       Use this option when you are processing many short documents, such as text messages.</p>
   * @public
   */
  InputFormat?: InputFormat | undefined;
}

/**
 * <p>Describes the dataset entity list for an entity recognizer model.</p>
 *          <p>For more information on how the input file is formatted, see  <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-training-data-cer.html">Preparing training data</a>
 *       in the Comprehend Developer Guide. </p>
 * @public
 */
export interface DatasetEntityRecognizerEntityList {
  /**
   * <p>Specifies the Amazon S3 location where the entity list is located.</p>
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * <p>Specifies the format and location of the input data. You must provide either the
 *       <code>Annotations</code> parameter or the <code>EntityList</code> parameter.</p>
 * @public
 */
export interface DatasetEntityRecognizerInputDataConfig {
  /**
   * <p>The S3 location of the annotation documents for your custom entity recognizer.</p>
   * @public
   */
  Annotations?: DatasetEntityRecognizerAnnotations | undefined;

  /**
   * <p>The format and location of the training documents for your custom entity
   *       recognizer.</p>
   * @public
   */
  Documents: DatasetEntityRecognizerDocuments | undefined;

  /**
   * <p>The S3 location of the entity list for your custom entity recognizer.</p>
   * @public
   */
  EntityList?: DatasetEntityRecognizerEntityList | undefined;
}

/**
 * <p>Specifies the format and location of the input data for the dataset.</p>
 * @public
 */
export interface DatasetInputDataConfig {
  /**
   * <p>A list of augmented manifest files that provide training data for your custom model. An
   *       augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground
   *       Truth. </p>
   * @public
   */
  AugmentedManifests?: DatasetAugmentedManifestsListItem[] | undefined;

  /**
   * <p>
   *             <code>COMPREHEND_CSV</code>: The data format is a two-column CSV file, where the
   *       first column contains labels and the second column contains documents.</p>
   *          <p>
   *             <code>AUGMENTED_MANIFEST</code>: The data format  </p>
   * @public
   */
  DataFormat?: DatasetDataFormat | undefined;

  /**
   * <p>The input properties for training a document classifier model. </p>
   *          <p>For more information on how the input file is formatted, see  <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a>
   *       in the Comprehend Developer Guide. </p>
   * @public
   */
  DocumentClassifierInputDataConfig?: DatasetDocumentClassifierInputDataConfig | undefined;

  /**
   * <p>The input properties for training an entity recognizer model.</p>
   * @public
   */
  EntityRecognizerInputDataConfig?: DatasetEntityRecognizerInputDataConfig | undefined;
}

/**
 * <p>A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For
 *       example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to
 *       indicate its use by a particular department. </p>
 * @public
 */
export interface Tag {
  /**
   * <p>The initial part of a key-value pair that forms a tag associated with a given resource.
   *       For instance, if you want to show which resources are used by which departments, you might use
   *       “Department” as the key portion of the pair, with multiple possible values such as “sales,”
   *       “legal,” and “administration.” </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p> The second part of a key-value pair that forms a tag associated with a given resource.
   *       For instance, if you want to show which resources are used by which departments, you might use
   *       “Department” as the initial (key) portion of the pair, with a value of “sales” to indicate the
   *       sales department. </p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel of the flywheel to receive the data.</p>
   * @public
   */
  FlywheelArn: string | undefined;

  /**
   * <p>Name of the dataset.</p>
   * @public
   */
  DatasetName: string | undefined;

  /**
   * <p>The dataset type. You can specify that the data in a dataset is for training
   *       the model or for testing the model.</p>
   * @public
   */
  DatasetType?: DatasetType | undefined;

  /**
   * <p>Description of the dataset.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the input data configuration. The type of input data varies based
   *       on the format of the input and whether the data is for a classifier model or an entity recognition model.</p>
   * @public
   */
  InputDataConfig: DatasetInputDataConfig | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Tags for the dataset.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * <p>The ARN of the dataset.</p>
   * @public
   */
  DatasetArn?: string | undefined;
}

/**
 * <p>The location of the training documents. This parameter is required in a request to create a semi-structured document classification model.</p>
 * @public
 */
export interface DocumentClassifierDocuments {
  /**
   * <p>The S3 URI location of the training documents specified in the S3Uri CSV file.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>The S3 URI location of the test documents included in the TestS3Uri CSV file.
   *       This field is not required if you do not specify a test CSV file.</p>
   * @public
   */
  TestS3Uri?: string | undefined;
}

/**
 * <p>The input properties for training a document classifier. </p>
 *          <p>For more information on how the input file is formatted, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a> in the Comprehend Developer Guide.
 *     </p>
 * @public
 */
export interface DocumentClassifierInputDataConfig {
  /**
   * <p>The format of your training data:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPREHEND_CSV</code>: A two-column CSV file, where labels are provided in the
   *           first column, and documents are provided in the second. If you use this value, you must
   *           provide the <code>S3Uri</code> parameter in your request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUGMENTED_MANIFEST</code>: A labeled dataset that is produced by Amazon
   *           SageMaker Ground Truth. This file is in JSON lines format. Each line is a complete JSON
   *           object that contains a training document and its associated labels. </p>
   *                <p>If you use this value, you must provide the <code>AugmentedManifests</code> parameter
   *           in your request.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a value, Amazon Comprehend uses <code>COMPREHEND_CSV</code> as the
   *       default.</p>
   * @public
   */
  DataFormat?: DocumentClassifierDataFormat | undefined;

  /**
   * <p>The Amazon S3 URI for the input data. The S3 bucket must be in the same Region as the API
   *       endpoint that you are calling. The URI can point to a single input file or it can provide the
   *       prefix for a collection of input files.</p>
   *          <p>For example, if you use the URI <code>S3://bucketName/prefix</code>, if the prefix is a
   *       single file, Amazon Comprehend uses that file as input. If more than one file begins with the
   *       prefix, Amazon Comprehend uses all of them as input.</p>
   *          <p>This parameter is required if you set <code>DataFormat</code> to
   *         <code>COMPREHEND_CSV</code>.</p>
   * @public
   */
  S3Uri?: string | undefined;

  /**
   * <p>This specifies the Amazon S3 location that contains the test annotations for the document classifier.
   *       The URI must be in the same Amazon Web Services Region as the API endpoint that you are calling. </p>
   * @public
   */
  TestS3Uri?: string | undefined;

  /**
   * <p>Indicates the delimiter used to separate each label for training a multi-label classifier.
   *       The default delimiter between labels is a pipe (|). You can use a different character as a
   *       delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the
   *       training documents use a delimiter other than the default or the delimiter you specify, the
   *       labels on that line will be combined to make a single unique label, such as
   *       LABELLABELLABEL.</p>
   * @public
   */
  LabelDelimiter?: string | undefined;

  /**
   * <p>A list of augmented manifest files that provide training data for your custom model. An
   *       augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground
   *       Truth.</p>
   *          <p>This parameter is required if you set <code>DataFormat</code> to
   *         <code>AUGMENTED_MANIFEST</code>.</p>
   * @public
   */
  AugmentedManifests?: AugmentedManifestsListItem[] | undefined;

  /**
   * <p>The type of input documents for training the model. Provide plain-text documents to create a plain-text model, and
   *     provide semi-structured documents to create a native document model.</p>
   * @public
   */
  DocumentType?: DocumentClassifierDocumentTypeFormat | undefined;

  /**
   * <p>The S3 location of the training documents.
   *       This parameter is required in a request to create a native document model.</p>
   * @public
   */
  Documents?: DocumentClassifierDocuments | undefined;

  /**
   * <p>Provides configuration parameters to override the default actions for extracting text from PDF documents and image files. </p>
   *          <p> By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Word files</b> - Amazon Comprehend parser extracts the text. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Digital PDF files</b> - Amazon Comprehend parser extracts the text. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Image files and scanned PDF files</b> - Amazon Comprehend uses the Amazon Textract <code>DetectDocumentText</code>
   *           API to extract the text. </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>DocumentReaderConfig</code> does not apply to plain text files or Word files.</p>
   *          <p>
   *         For image files and PDF documents, you can override these default actions using the fields listed below.
   *         For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-set-textract-options.html">
   *         Setting text extraction options</a> in the Comprehend Developer Guide.
   *     </p>
   * @public
   */
  DocumentReaderConfig?: DocumentReaderConfig | undefined;
}

/**
 * <p>Provide the location for output data from a custom classifier job. This field is mandatory
 *       if you are training a native document model.</p>
 * @public
 */
export interface DocumentClassifierOutputDataConfig {
  /**
   * <p>When you use the <code>OutputDataConfig</code> object while creating a custom
   *       classifier, you specify the Amazon S3 location where you want to write the confusion matrix
   *       and other output files.
   *       The URI must be in the same Region as the API endpoint that you are calling. The location is
   *       used as the prefix for the actual location of this output file.</p>
   *          <p>When the custom classifier job is finished, the service creates the output file in a
   *       directory specific to the job. The <code>S3Uri</code> field contains the location of the
   *       output file, called <code>output.tar.gz</code>. It is a compressed archive that contains the
   *       confusion matrix.</p>
   * @public
   */
  S3Uri?: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the
   *       output results from an analysis job. The KmsKeyId can be one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>KMS Key Alias: <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ARN of a KMS Key Alias:
   *             <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon S3 prefix for the data lake location of the flywheel statistics.</p>
   * @public
   */
  FlywheelStatsS3Prefix?: string | undefined;
}

/**
 * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
 *       the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
 *         VPC</a>. </p>
 * @public
 */
export interface VpcConfig {
  /**
   * <p>The ID number for a security group on an instance of your private VPC. Security groups on
   *       your VPC function serve as a virtual firewall to control inbound and outbound traffic and
   *       provides security for the resources that you’ll be accessing on the VPC. This ID number is
   *       preceded by "sg-", for instance: "sg-03b388029b0a285ea". For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Security
   *         Groups for your VPC</a>. </p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID for each subnet being used in your private VPC. This subnet is a subset of the a
   *       range of IPv4 addresses used by the VPC and is specific to a given availability zone in the
   *       VPC’s Region. This ID number is preceded by "subnet-", for instance:
   *       "subnet-04ccf456919e69055". For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and
   *         Subnets</a>. </p>
   * @public
   */
  Subnets: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDocumentClassifierRequest {
  /**
   * <p>The name of the document classifier.</p>
   * @public
   */
  DocumentClassifierName: string | undefined;

  /**
   * <p>The version name given to the newly created classifier. Version names can have a maximum
   *       of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The
   *       version name must be unique among all models with the same classifier name in the Amazon Web Services account/Amazon Web Services Region.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Tags to associate with the document classifier. A tag is a key-value
   *       pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with
   *       "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *     </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   * @public
   */
  InputDataConfig: DocumentClassifierInputDataConfig | undefined;

  /**
   * <p>Specifies the location for the output files from a custom classifier job.
   *       This parameter is required for a request that creates a native document model.</p>
   * @public
   */
  OutputDataConfig?: DocumentClassifierOutputDataConfig | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your custom classifier. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>Indicates the mode in which the classifier will be trained. The classifier can be trained
   *       in multi-class (single-label) mode or multi-label mode.
   *       Multi-class mode identifies a single class label for each document and
   *       multi-label mode identifies one or more class labels for each document. Multiple
   *       labels for an individual document are separated by a delimiter. The default delimiter between
   *       labels is a pipe (|).</p>
   * @public
   */
  Mode?: DocumentClassifierMode | undefined;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * <p>The resource-based policy to attach to your custom document classifier model. You can use
   *       this policy to allow another Amazon Web Services account to import your custom model.</p>
   *          <p>Provide your policy as a JSON body that you enter as a UTF-8 encoded string without line
   *       breaks. To provide valid JSON, enclose the attribute names and values in double quotes. If the
   *       JSON body is also enclosed in double quotes, then you must escape the double quotes that are
   *       inside the policy:</p>
   *          <p>
   *             <code>"\{\"attribute\": \"value\", \"attribute\": [\"value\"]\}"</code>
   *          </p>
   *          <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double
   *       quotes to enclose the JSON names and values:</p>
   *          <p>
   *             <code>'\{"attribute": "value", "attribute": ["value"]\}'</code>
   *          </p>
   * @public
   */
  ModelPolicy?: string | undefined;
}

/**
 * @public
 */
export interface CreateDocumentClassifierResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier.</p>
   * @public
   */
  DocumentClassifierArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEndpointRequest {
  /**
   * <p>This is the descriptive suffix that becomes part of the <code>EndpointArn</code> used for
   *       all subsequent requests to this resource. </p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the model to which the endpoint will be
   *       attached.</p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p> The desired number of inference units to be used by the model using this endpoint.
   *
   *       Each inference unit represents of a throughput of 100 characters per second.</p>
   * @public
   */
  DesiredInferenceUnits: number | undefined;

  /**
   * <p>An idempotency token provided by the customer. If this token matches a previous endpoint
   *       creation request, Amazon Comprehend will not return a <code>ResourceInUseException</code>.
   *     </p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Tags to associate with the endpoint. A tag is a key-value pair that adds
   *       metadata to the endpoint. For example, a tag with "Sales" as the key might be added to an
   *       endpoint to indicate its use by the sales department. </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to trained custom models encrypted with a customer
   *       managed key (ModelKmsKeyId).</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel to which the endpoint will be
   *       attached.</p>
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEndpointResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being created.</p>
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the model to which the endpoint is
   *       attached.</p>
   * @public
   */
  ModelArn?: string | undefined;
}

/**
 * <p>Describes the annotations associated with a entity recognizer.</p>
 * @public
 */
export interface EntityRecognizerAnnotations {
  /**
   * <p> Specifies the Amazon S3 location where the annotations for an entity recognizer are
   *       located. The URI must be in the same Region as the API endpoint that you are calling.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p> Specifies the Amazon S3 location where the test annotations for an entity recognizer are
   *       located. The URI must be in the same Region as the API endpoint that you are calling.</p>
   * @public
   */
  TestS3Uri?: string | undefined;
}

/**
 * <p>Describes the training documents submitted with an entity recognizer.</p>
 * @public
 */
export interface EntityRecognizerDocuments {
  /**
   * <p> Specifies the Amazon S3 location where the training documents for an entity recognizer
   *       are located. The URI must be in the same Region as the API endpoint that you are
   *       calling.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p> Specifies the Amazon S3 location where the test documents for an entity recognizer are
   *       located. The URI must be in the same Amazon Web Services Region as the API endpoint that you are
   *       calling.</p>
   * @public
   */
  TestS3Uri?: string | undefined;

  /**
   * <p> Specifies how the text in an input file should be processed. This is optional, and the
   *       default is ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document.
   *       Use this option when you are processing large documents, such as newspaper articles or
   *       scientific papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document.
   *       Use this option when you are processing many short documents, such as text messages.</p>
   * @public
   */
  InputFormat?: InputFormat | undefined;
}

/**
 * <p>Describes the entity list submitted with an entity recognizer.</p>
 * @public
 */
export interface EntityRecognizerEntityList {
  /**
   * <p>Specifies the Amazon S3 location where the entity list is located. The URI must be in the
   *       same Region as the API endpoint that you are calling.</p>
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * <p>An entity type within a labeled training dataset that Amazon Comprehend uses to train a
 *       custom entity recognizer.</p>
 * @public
 */
export interface EntityTypesListItem {
  /**
   * <p>An entity type within a labeled training dataset that Amazon Comprehend uses to train a
   *       custom entity recognizer.</p>
   *          <p>Entity types must not contain the following invalid characters: \n (line break), \\n
   *       (escaped line break, \r (carriage return), \\r (escaped carriage return), \t (tab), \\t
   *       (escaped tab), and , (comma).</p>
   * @public
   */
  Type: string | undefined;
}

/**
 * <p>Specifies the format and location of the input data.</p>
 * @public
 */
export interface EntityRecognizerInputDataConfig {
  /**
   * <p>The format of your training data:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPREHEND_CSV</code>: A CSV file that supplements your training documents. The
   *           CSV file contains information about the custom entities that your trained model will
   *           detect. The required format of the file depends on whether you are providing annotations
   *           or an entity list.</p>
   *                <p>If you use this value, you must provide your CSV file by using either the
   *             <code>Annotations</code> or <code>EntityList</code> parameters. You must provide your
   *           training documents by using the <code>Documents</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUGMENTED_MANIFEST</code>: A labeled dataset that is produced by Amazon
   *           SageMaker Ground Truth. This file is in JSON lines format. Each line is a complete JSON
   *           object that contains a training document and its labels. Each label annotates a named
   *           entity in the training document. </p>
   *                <p>If you use this value, you must provide the <code>AugmentedManifests</code> parameter
   *           in your request.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a value, Amazon Comprehend uses <code>COMPREHEND_CSV</code> as the
   *       default.</p>
   * @public
   */
  DataFormat?: EntityRecognizerDataFormat | undefined;

  /**
   * <p>The entity types in the labeled training data that Amazon Comprehend uses to train the
   *       custom entity recognizer. Any entity types that you don't specify are ignored.</p>
   *          <p>A maximum of 25 entity types can be used at one time to train an entity recognizer. Entity
   *       types must not contain the following invalid characters: \n (line break), \\n (escaped line
   *       break), \r (carriage return), \\r (escaped carriage return), \t (tab), \\t (escaped tab),
   *       space, and , (comma). </p>
   * @public
   */
  EntityTypes: EntityTypesListItem[] | undefined;

  /**
   * <p>The S3 location of the folder that contains the training documents for your custom entity
   *       recognizer.</p>
   *          <p>This parameter is required if you set <code>DataFormat</code> to
   *         <code>COMPREHEND_CSV</code>.</p>
   * @public
   */
  Documents?: EntityRecognizerDocuments | undefined;

  /**
   * <p>The S3 location of the CSV file that annotates your training documents.</p>
   * @public
   */
  Annotations?: EntityRecognizerAnnotations | undefined;

  /**
   * <p>The S3 location of the CSV file that has the entity list for your custom entity
   *       recognizer.</p>
   * @public
   */
  EntityList?: EntityRecognizerEntityList | undefined;

  /**
   * <p>A list of augmented manifest files that provide training data for your custom model. An
   *       augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground
   *       Truth.</p>
   *          <p>This parameter is required if you set <code>DataFormat</code> to
   *         <code>AUGMENTED_MANIFEST</code>.</p>
   * @public
   */
  AugmentedManifests?: AugmentedManifestsListItem[] | undefined;
}

/**
 * @public
 */
export interface CreateEntityRecognizerRequest {
  /**
   * <p>The name given to the newly created recognizer. Recognizer names can be a maximum of 256
   *       characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The name
   *       must be unique in the account/Region.</p>
   * @public
   */
  RecognizerName: string | undefined;

  /**
   * <p>The version name given to the newly created recognizer. Version names can be a maximum of
   *       256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The
   *       version name must be unique among all models with the same recognizer name in the account/Region.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Tags to associate with the entity recognizer. A tag is a key-value pair
   *       that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with
   *       "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *     </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies the format and location of the input data. The S3 bucket containing the input
   *       data must be located in the same Region as the entity recognizer being created. </p>
   * @public
   */
  InputDataConfig: EntityRecognizerInputDataConfig | undefined;

  /**
   * <p> A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p> You can specify any of the following languages: English
   *       ("en"), Spanish ("es"), French ("fr"), Italian ("it"), German ("de"), or Portuguese ("pt").
   *       If you plan to use this entity recognizer with PDF, Word, or image input files, you must
   *       specify English as the language.
   *       All training documents must be in the same language.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your custom entity recognizer. For more information, see
   *       <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * <p>The JSON resource-based policy to attach to your custom entity recognizer model. You can
   *       use this policy to allow another Amazon Web Services account to import your custom model.</p>
   *          <p>Provide your JSON as a UTF-8 encoded string without line breaks. To provide valid JSON for
   *       your policy, enclose the attribute names and values in double quotes. If the JSON body is also
   *       enclosed in double quotes, then you must escape the double quotes that are inside the
   *       policy:</p>
   *          <p>
   *             <code>"\{\"attribute\": \"value\", \"attribute\": [\"value\"]\}"</code>
   *          </p>
   *          <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double
   *       quotes to enclose the JSON names and values:</p>
   *          <p>
   *             <code>'\{"attribute": "value", "attribute": ["value"]\}'</code>
   *          </p>
   * @public
   */
  ModelPolicy?: string | undefined;
}

/**
 * @public
 */
export interface CreateEntityRecognizerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   * @public
   */
  EntityRecognizerArn?: string | undefined;
}

/**
 * <p>Data security configuration.</p>
 * @public
 */
export interface DataSecurityConfig {
  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt the volume.</p>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt the data in the data lake.</p>
   * @public
   */
  DataLakeKmsKeyId?: string | undefined;

  /**
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * <p>Configuration required for a document classification model.</p>
 * @public
 */
export interface DocumentClassificationConfig {
  /**
   * <p>Classification mode indicates whether the documents are <code>MULTI_CLASS</code> or <code>MULTI_LABEL</code>.</p>
   * @public
   */
  Mode: DocumentClassifierMode | undefined;

  /**
   * <p>One or more labels to associate with the custom classifier.</p>
   * @public
   */
  Labels?: string[] | undefined;
}

/**
 * <p>Configuration required for an entity recognition model.</p>
 * @public
 */
export interface EntityRecognitionConfig {
  /**
   * <p>Up to 25 entity types that the model is trained to recognize.</p>
   * @public
   */
  EntityTypes: EntityTypesListItem[] | undefined;
}

/**
 * <p>Configuration about the model associated with a flywheel.</p>
 * @public
 */
export interface TaskConfig {
  /**
   * <p>Language code for the language that the model supports.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>Configuration required for a document classification model.</p>
   * @public
   */
  DocumentClassificationConfig?: DocumentClassificationConfig | undefined;

  /**
   * <p>Configuration required for an entity recognition model.</p>
   * @public
   */
  EntityRecognitionConfig?: EntityRecognitionConfig | undefined;
}

/**
 * @public
 */
export interface CreateFlywheelRequest {
  /**
   * <p>Name for the flywheel.</p>
   * @public
   */
  FlywheelName: string | undefined;

  /**
   * <p>To associate an existing model with the flywheel, specify the Amazon Resource Number (ARN) of the model version.
   *       Do not set <code>TaskConfig</code> or <code>ModelType</code> if you specify an <code>ActiveModelArn</code>.</p>
   * @public
   */
  ActiveModelArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend the permissions required to access the flywheel data in the data lake.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Configuration about the model associated with the flywheel.
   *       You need to set <code>TaskConfig</code> if you are creating a flywheel for a new model.</p>
   * @public
   */
  TaskConfig?: TaskConfig | undefined;

  /**
   * <p>The model type. You need to set <code>ModelType</code> if you are creating a flywheel for a new model.</p>
   * @public
   */
  ModelType?: ModelType | undefined;

  /**
   * <p>Enter the S3 location for the data lake. You can specify a new S3 bucket or a new folder of an
   *     existing S3 bucket. The flywheel creates the data lake at this location.</p>
   * @public
   */
  DataLakeS3Uri: string | undefined;

  /**
   * <p>Data security configurations.</p>
   * @public
   */
  DataSecurityConfig?: DataSecurityConfig | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The tags to associate with this flywheel.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateFlywheelResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel.</p>
   * @public
   */
  FlywheelArn?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the active model version.</p>
   * @public
   */
  ActiveModelArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDocumentClassifierRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier. </p>
   * @public
   */
  DocumentClassifierArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDocumentClassifierResponse {}

/**
 * @public
 */
export interface DeleteEndpointRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being deleted.</p>
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointResponse {}

/**
 * @public
 */
export interface DeleteEntityRecognizerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   * @public
   */
  EntityRecognizerArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEntityRecognizerResponse {}

/**
 * @public
 */
export interface DeleteFlywheelRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel to delete.</p>
   * @public
   */
  FlywheelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlywheelResponse {}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model version that has the policy to delete.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The revision ID of the policy to delete.</p>
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * <p>The ARN of the dataset.</p>
   * @public
   */
  DatasetArn: string | undefined;
}

/**
 * <p>Properties associated with the dataset.</p>
 * @public
 */
export interface DatasetProperties {
  /**
   * <p>The ARN of the dataset.</p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The dataset type (training data or test data).</p>
   * @public
   */
  DatasetType?: DatasetType | undefined;

  /**
   * <p>The S3 URI where the dataset is stored.</p>
   * @public
   */
  DatasetS3Uri?: string | undefined;

  /**
   * <p>Description of the dataset.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The dataset status. While the system creates the dataset, the status is <code>CREATING</code>.
   *       When the dataset is ready to use, the status changes to <code>COMPLETED</code>. </p>
   * @public
   */
  Status?: DatasetStatus | undefined;

  /**
   * <p>A description of the status of the dataset.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The number of documents in the dataset.</p>
   * @public
   */
  NumberOfDocuments?: number | undefined;

  /**
   * <p>Creation time of the dataset.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Time when the data from the dataset becomes available in the data lake.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * <p>The dataset properties.</p>
   * @public
   */
  DatasetProperties?: DatasetProperties | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentClassificationJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The
   *       <code>StartDocumentClassificationJob</code> operation returns this identifier in its response.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>The input properties for an inference job. The document reader config field applies
 *       only to non-text inputs for custom analysis.</p>
 * @public
 */
export interface InputDataConfig {
  /**
   * <p>The Amazon S3 URI for the input data. The URI must be in same Region as the API
   *       endpoint that you are calling. The URI can point to a single input file or it can provide the
   *       prefix for a collection of data files. </p>
   *          <p>For example, if you use the URI <code>S3://bucketName/prefix</code>, if the prefix is a
   *       single file, Amazon Comprehend uses that file as input. If more than one file begins with the
   *       prefix, Amazon Comprehend uses all of them as input.</p>
   * @public
   */
  S3Uri: string | undefined;

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
   * @public
   */
  InputFormat?: InputFormat | undefined;

  /**
   * <p>Provides configuration parameters to override the default actions for extracting text
   *       from PDF documents and image files.</p>
   * @public
   */
  DocumentReaderConfig?: DocumentReaderConfig | undefined;
}

/**
 * <p>Provides configuration parameters for the output of inference jobs.</p>
 *          <p></p>
 * @public
 */
export interface OutputDataConfig {
  /**
   * <p>When you use the <code>OutputDataConfig</code> object with asynchronous operations, you
   *       specify the Amazon S3 location where you want to write the output data. The URI must be in the
   *       same Region as the API endpoint that you are calling. The location is used as the prefix for
   *       the actual location of the output file.</p>
   *          <p>When the topic detection job is finished, the service creates an output file in a
   *       directory specific to the job. The <code>S3Uri</code> field contains the location of the
   *       output file, called <code>output.tar.gz</code>. It is a compressed archive that contains the
   *       ouput of the operation.</p>
   *          <p>
   *       For a PII entity detection job, the output file is plain text, not a compressed archive.
   *       The output file name is the same as the input file, with <code>.out</code> appended at the end.
   *     </p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the
   *       output results from an analysis job. Specify the Key Id of a symmetric key, because you cannot use an asymmetric
   *        key for uploading data to S3.</p>
   *          <p>The KmsKeyId can be one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>KMS Key Alias: <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ARN of a KMS Key Alias:
   *             <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * <p>Provides information about a document classification job.</p>
 * @public
 */
export interface DocumentClassificationJobProperties {
  /**
   * <p>The identifier assigned to the document classification job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:document-classification-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

  /**
   * <p>The name that you assigned to the document classification job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The current status of the document classification job. If the status is
   *         <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>A description of the status of the job.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The time that the document classification job was submitted for processing.</p>
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * <p>The time that the document classification job completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier. </p>
   * @public
   */
  DocumentClassifierArn?: string | undefined;

  /**
   * <p>The input data configuration that you supplied when you created the document
   *       classification job.</p>
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * <p>The output data configuration that you supplied when you created the document
   *       classification job.</p>
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your document classification job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel</p>
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentClassificationJobResponse {
  /**
   * <p>An object that describes the properties associated with the document classification
   *       job.</p>
   * @public
   */
  DocumentClassificationJobProperties?: DocumentClassificationJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentClassifierRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier. The
   *       <code>CreateDocumentClassifier</code> operation returns this identifier in its response.</p>
   * @public
   */
  DocumentClassifierArn: string | undefined;
}

/**
 * <p>Provides information about a document classifier.</p>
 * @public
 */
export interface DocumentClassifierProperties {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier.</p>
   * @public
   */
  DocumentClassifierArn?: string | undefined;

  /**
   * <p>The language code for the language of the documents that the classifier was trained
   *       on.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The status of the document classifier. If the status is <code>TRAINED</code> the
   *       classifier is ready to use. If the status is <code>TRAINED_WITH_WARNINGS</code> the
   *       classifier training succeeded, but you should review the warnings returned in the
   *       <code>CreateDocumentClassifier</code> response.</p>
   *          <p>  If the status is <code>FAILED</code> you can see additional
   *       information about why the classifier wasn't trained in the <code>Message</code> field.</p>
   * @public
   */
  Status?: ModelStatus | undefined;

  /**
   * <p>Additional information about the status of the classifier.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The time that the document classifier was submitted for training.</p>
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * <p>The time that training the document classifier completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Indicates the time when the training starts on documentation classifiers. You are billed
   *       for the time interval between this time and the value of TrainingEndTime. </p>
   * @public
   */
  TrainingStartTime?: Date | undefined;

  /**
   * <p>The time that training of the document classifier was completed. Indicates the time when
   *       the training completes on documentation classifiers. You are billed for the time interval
   *       between this time and the value of TrainingStartTime.</p>
   * @public
   */
  TrainingEndTime?: Date | undefined;

  /**
   * <p>The input data configuration that you supplied when you created the document classifier
   *       for training.</p>
   * @public
   */
  InputDataConfig?: DocumentClassifierInputDataConfig | undefined;

  /**
   * <p> Provides output results configuration parameters for custom classifier jobs.</p>
   * @public
   */
  OutputDataConfig?: DocumentClassifierOutputDataConfig | undefined;

  /**
   * <p>Information about the document classifier, including the number of documents used for
   *       training the classifier, the number of documents used for test the classifier, and an accuracy
   *       rating.</p>
   * @public
   */
  ClassifierMetadata?: ClassifierMetadata | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your custom classifier. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>Indicates the mode in which the specific classifier was trained. This also indicates the
   *       format of input documents and the format of the confusion matrix. Each classifier can only be
   *       trained in one mode and this cannot be changed once the classifier is trained.</p>
   * @public
   */
  Mode?: DocumentClassifierMode | undefined;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * <p>The version name that you assigned to the document classifier.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source model. This model was imported from a
   *       different Amazon Web Services account to create the document classifier model in your Amazon Web Services account.</p>
   * @public
   */
  SourceModelArn?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel</p>
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentClassifierResponse {
  /**
   * <p>An object that contains the properties associated with a document classifier.</p>
   * @public
   */
  DocumentClassifierProperties?: DocumentClassifierProperties | undefined;
}

/**
 * @public
 */
export interface DescribeDominantLanguageDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The
   *       <code>StartDominantLanguageDetectionJob</code> operation returns this identifier in its response.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Provides information about a dominant language detection job.</p>
 * @public
 */
export interface DominantLanguageDetectionJobProperties {
  /**
   * <p>The identifier assigned to the dominant language detection job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dominant language detection job. It is a unique,
   *       fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID.
   *       The format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:dominant-language-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:dominant-language-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

  /**
   * <p>The name that you assigned to the dominant language detection job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The current status of the dominant language detection job. If the status is
   *         <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>A description for the status of a job.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The time that the dominant language detection job was submitted for processing.</p>
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * <p>The time that the dominant language detection job completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The input data configuration that you supplied when you created the dominant language
   *       detection job.</p>
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * <p>The output data configuration that you supplied when you created the dominant language
   *       detection job.</p>
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your dominant language detection job. For more information, see
   *       <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface DescribeDominantLanguageDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with a dominant language detection
   *       job.</p>
   * @public
   */
  DominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being described.</p>
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * <p>Specifies information about the specified endpoint.
 *       For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.</p>
 * @public
 */
export interface EndpointProperties {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint.</p>
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * <p>Specifies the status of the endpoint. Because the endpoint updates and creation are
   *       asynchronous, so customers will need to wait for the endpoint to be <code>Ready</code> status
   *       before making inference requests.</p>
   * @public
   */
  Status?: EndpointStatus | undefined;

  /**
   * <p>Specifies a reason for failure in cases of <code>Failed</code> status.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the model to which the endpoint is attached.</p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>ARN of the new model to use for updating an existing endpoint. This ARN is going to be
   *       different from the model ARN when the update is in progress</p>
   * @public
   */
  DesiredModelArn?: string | undefined;

  /**
   * <p>The desired number of inference units to be used by the model using this endpoint.
   *
   *       Each inference unit represents of a throughput of 100 characters per second.</p>
   * @public
   */
  DesiredInferenceUnits?: number | undefined;

  /**
   * <p>The number of inference units currently used by the model using this endpoint.</p>
   * @public
   */
  CurrentInferenceUnits?: number | undefined;

  /**
   * <p>The creation date and time of the endpoint.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time that the endpoint was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to trained custom models encrypted with a customer
   *       managed key (ModelKmsKeyId).</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>Data access role ARN to use in case the new model is encrypted with a customer KMS
   *       key.</p>
   * @public
   */
  DesiredDataAccessRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel</p>
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointResponse {
  /**
   * <p>Describes information associated with the specific endpoint.</p>
   * @public
   */
  EndpointProperties?: EndpointProperties | undefined;
}

/**
 * @public
 */
export interface DescribeEntitiesDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The
   *         <code>StartEntitiesDetectionJob</code> operation returns this identifier in its response.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Provides information about an entities detection job.</p>
 * @public
 */
export interface EntitiesDetectionJobProperties {
  /**
   * <p>The identifier assigned to the entities detection job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the entities detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:entities-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

  /**
   * <p>The name that you assigned the entities detection job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The current status of the entities detection job. If the status is <code>FAILED</code>,
   *       the <code>Message</code> field shows the reason for the failure.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>A description of the status of a job.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The time that the entities detection job was submitted for processing.</p>
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * <p>The time that the entities detection job completed</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   * @public
   */
  EntityRecognizerArn?: string | undefined;

  /**
   * <p>The input data configuration that you supplied when you created the entities detection
   *       job.</p>
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * <p>The output data configuration that you supplied when you created the entities detection
   *       job. </p>
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>The language code of the input documents.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your entity detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flywheel associated with this job.</p>
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEntitiesDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with an entities detection job.</p>
   * @public
   */
  EntitiesDetectionJobProperties?: EntitiesDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeEntityRecognizerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   * @public
   */
  EntityRecognizerArn: string | undefined;
}

/**
 * <p>Output data configuration.</p>
 * @public
 */
export interface EntityRecognizerOutputDataConfig {
  /**
   * <p>The Amazon S3 prefix for the data lake location of the flywheel statistics.</p>
   * @public
   */
  FlywheelStatsS3Prefix?: string | undefined;
}

/**
 * <p>Detailed information about the accuracy of an entity recognizer for a specific entity
 *       type. </p>
 * @public
 */
export interface EntityTypesEvaluationMetrics {
  /**
   * <p>A measure of the usefulness of the recognizer results for a specific entity type in the
   *       test data. High precision means that the recognizer returned substantially more relevant
   *       results than irrelevant ones. </p>
   * @public
   */
  Precision?: number | undefined;

  /**
   * <p>A measure of how complete the recognizer results are for a specific entity type in the
   *       test data. High recall means that the recognizer returned most of the relevant results.</p>
   * @public
   */
  Recall?: number | undefined;

  /**
   * <p>A measure of how accurate the recognizer results are for a specific entity type in the
   *       test data. It is derived from the <code>Precision</code> and <code>Recall</code> values. The
   *         <code>F1Score</code> is the harmonic average of the two scores. The highest score is 1, and
   *       the worst score is 0. </p>
   * @public
   */
  F1Score?: number | undefined;
}

/**
 * <p>Individual item from the list of entity types in the metadata of an entity
 *       recognizer.</p>
 * @public
 */
export interface EntityRecognizerMetadataEntityTypesListItem {
  /**
   * <p>Type of entity from the list of entity types in the metadata of an entity recognizer.
   *     </p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>Detailed information about the accuracy of the entity recognizer for a specific item on
   *       the list of entity types. </p>
   * @public
   */
  EvaluationMetrics?: EntityTypesEvaluationMetrics | undefined;

  /**
   * <p>Indicates the number of times the given entity type was seen in the training data. </p>
   * @public
   */
  NumberOfTrainMentions?: number | undefined;
}

/**
 * <p>Detailed information about the accuracy of an entity recognizer. </p>
 * @public
 */
export interface EntityRecognizerEvaluationMetrics {
  /**
   * <p>A measure of the usefulness of the recognizer results in the test data. High precision
   *       means that the recognizer returned substantially more relevant results than irrelevant ones.
   *     </p>
   * @public
   */
  Precision?: number | undefined;

  /**
   * <p>A measure of how complete the recognizer results are for the test data. High recall means
   *       that the recognizer returned most of the relevant results.</p>
   * @public
   */
  Recall?: number | undefined;

  /**
   * <p>A measure of how accurate the recognizer results are for the test data. It is derived from
   *       the <code>Precision</code> and <code>Recall</code> values. The <code>F1Score</code> is the
   *       harmonic average of the two scores. For plain text entity recognizer models, the range is 0 to 100,
   *       where 100 is the best score. For PDF/Word entity recognizer models, the range is 0 to 1,
   *       where 1 is the best score.
   *     </p>
   * @public
   */
  F1Score?: number | undefined;
}

/**
 * <p>Detailed information about an entity recognizer.</p>
 * @public
 */
export interface EntityRecognizerMetadata {
  /**
   * <p> The number of documents in the input data that were used to train the entity recognizer.
   *       Typically this is 80 to 90 percent of the input documents.</p>
   * @public
   */
  NumberOfTrainedDocuments?: number | undefined;

  /**
   * <p> The number of documents in the input data that were used to test the entity recognizer.
   *       Typically this is 10 to 20 percent of the input documents.</p>
   * @public
   */
  NumberOfTestDocuments?: number | undefined;

  /**
   * <p>Detailed information about the accuracy of an entity recognizer.</p>
   * @public
   */
  EvaluationMetrics?: EntityRecognizerEvaluationMetrics | undefined;

  /**
   * <p>Entity types from the metadata of an entity recognizer.</p>
   * @public
   */
  EntityTypes?: EntityRecognizerMetadataEntityTypesListItem[] | undefined;
}

/**
 * <p>Describes information about an entity recognizer.</p>
 * @public
 */
export interface EntityRecognizerProperties {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   * @public
   */
  EntityRecognizerArn?: string | undefined;

  /**
   * <p> The language of the input documents. All documents must be in the same language. Only
   *       English ("en") is currently supported.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>Provides the status of the entity recognizer.</p>
   * @public
   */
  Status?: ModelStatus | undefined;

  /**
   * <p> A description of the status of the recognizer.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The time that the recognizer was submitted for processing.</p>
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * <p>The time that the recognizer creation completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The time that training of the entity recognizer started.</p>
   * @public
   */
  TrainingStartTime?: Date | undefined;

  /**
   * <p>The time that training of the entity recognizer was completed.</p>
   * @public
   */
  TrainingEndTime?: Date | undefined;

  /**
   * <p>The input data properties of an entity recognizer.</p>
   * @public
   */
  InputDataConfig?: EntityRecognizerInputDataConfig | undefined;

  /**
   * <p> Provides information about an entity recognizer.</p>
   * @public
   */
  RecognizerMetadata?: EntityRecognizerMetadata | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your custom entity recognizer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * <p>The version name you assigned to the entity recognizer.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source model. This model was imported from a
   *       different Amazon Web Services account to create the entity recognizer model in your Amazon Web Services account.</p>
   * @public
   */
  SourceModelArn?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel</p>
   * @public
   */
  FlywheelArn?: string | undefined;

  /**
   * <p>Output data configuration.</p>
   * @public
   */
  OutputDataConfig?: EntityRecognizerOutputDataConfig | undefined;
}

/**
 * @public
 */
export interface DescribeEntityRecognizerResponse {
  /**
   * <p>Describes information associated with an entity recognizer.</p>
   * @public
   */
  EntityRecognizerProperties?: EntityRecognizerProperties | undefined;
}

/**
 * @public
 */
export interface DescribeEventsDetectionJobRequest {
  /**
   * <p>The identifier of the events detection job.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Provides information about an events detection job.</p>
 * @public
 */
export interface EventsDetectionJobProperties {
  /**
   * <p>The identifier assigned to the events detection job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:events-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

  /**
   * <p>The name you assigned the events detection job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The current status of the events detection job.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>A description of the status of the events detection job.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The time that the events detection job was submitted for processing.</p>
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * <p>The time that the events detection job completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The input data configuration that you supplied when you created the events detection
   *       job.</p>
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * <p>The output data configuration that you supplied when you created the events detection
   *       job.</p>
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>The language code of the input documents.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>The types of events that are detected by the job.</p>
   * @public
   */
  TargetEventTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventsDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with an event detection job.</p>
   * @public
   */
  EventsDetectionJobProperties?: EventsDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeFlywheelRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel.</p>
   * @public
   */
  FlywheelArn: string | undefined;
}

/**
 * <p>The flywheel properties.</p>
 * @public
 */
export interface FlywheelProperties {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel.</p>
   * @public
   */
  FlywheelArn?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the active model version.</p>
   * @public
   */
  ActiveModelArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend permission to access the flywheel data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>Configuration about the model associated with a flywheel.</p>
   * @public
   */
  TaskConfig?: TaskConfig | undefined;

  /**
   * <p>Amazon S3 URI of the data lake location. </p>
   * @public
   */
  DataLakeS3Uri?: string | undefined;

  /**
   * <p>Data security configuration.</p>
   * @public
   */
  DataSecurityConfig?: DataSecurityConfig | undefined;

  /**
   * <p>The status of the flywheel.</p>
   * @public
   */
  Status?: FlywheelStatus | undefined;

  /**
   * <p>Model type of the flywheel's model.</p>
   * @public
   */
  ModelType?: ModelType | undefined;

  /**
   * <p>A description of the status of the flywheel.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Creation time of the flywheel.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Last modified time for the flywheel.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The most recent flywheel iteration.</p>
   * @public
   */
  LatestFlywheelIteration?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFlywheelResponse {
  /**
   * <p>The flywheel properties.</p>
   * @public
   */
  FlywheelProperties?: FlywheelProperties | undefined;
}

/**
 * @public
 */
export interface DescribeFlywheelIterationRequest {
  /**
   * <p></p>
   * @public
   */
  FlywheelArn: string | undefined;

  /**
   * <p></p>
   * @public
   */
  FlywheelIterationId: string | undefined;
}

/**
 * <p>The evaluation metrics associated with the evaluated model.</p>
 * @public
 */
export interface FlywheelModelEvaluationMetrics {
  /**
   * <p>The average F1 score from the evaluation metrics.</p>
   * @public
   */
  AverageF1Score?: number | undefined;

  /**
   * <p>Average precision metric for the model.</p>
   * @public
   */
  AveragePrecision?: number | undefined;

  /**
   * <p>Average recall metric for the model.</p>
   * @public
   */
  AverageRecall?: number | undefined;

  /**
   * <p>Average accuracy metric for the model.</p>
   * @public
   */
  AverageAccuracy?: number | undefined;
}

/**
 * <p>The configuration properties of a flywheel iteration.</p>
 * @public
 */
export interface FlywheelIterationProperties {
  /**
   * <p></p>
   * @public
   */
  FlywheelArn?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  FlywheelIterationId?: string | undefined;

  /**
   * <p>The creation start time of the flywheel iteration.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The completion time of this flywheel iteration.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The status of the flywheel iteration.</p>
   * @public
   */
  Status?: FlywheelIterationStatus | undefined;

  /**
   * <p>A description of the status of the flywheel iteration.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The ARN of the evaluated model associated with this flywheel iteration.</p>
   * @public
   */
  EvaluatedModelArn?: string | undefined;

  /**
   * <p>The evaluation metrics associated with the evaluated model.</p>
   * @public
   */
  EvaluatedModelMetrics?: FlywheelModelEvaluationMetrics | undefined;

  /**
   * <p>The ARN of the trained model associated with this flywheel iteration.</p>
   * @public
   */
  TrainedModelArn?: string | undefined;

  /**
   * <p>The metrics associated with the trained model.</p>
   * @public
   */
  TrainedModelMetrics?: FlywheelModelEvaluationMetrics | undefined;

  /**
   * <p></p>
   * @public
   */
  EvaluationManifestS3Prefix?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFlywheelIterationResponse {
  /**
   * <p>The configuration properties of a flywheel iteration.</p>
   * @public
   */
  FlywheelIterationProperties?: FlywheelIterationProperties | undefined;
}

/**
 * @public
 */
export interface DescribeKeyPhrasesDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The
   *         <code>StartKeyPhrasesDetectionJob</code> operation returns this identifier in its
   *       response.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Provides information about a key phrases detection job.</p>
 * @public
 */
export interface KeyPhrasesDetectionJobProperties {
  /**
   * <p>The identifier assigned to the key phrases detection job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the key phrases detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:key-phrases-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:key-phrases-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

  /**
   * <p>The name that you assigned the key phrases detection job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The current status of the key phrases detection job. If the status is <code>FAILED</code>,
   *       the <code>Message</code> field shows the reason for the failure.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>A description of the status of a job.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The time that the key phrases detection job was submitted for processing.</p>
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * <p>The time that the key phrases detection job completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The input data configuration that you supplied when you created the key phrases detection
   *       job.</p>
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * <p>The output data configuration that you supplied when you created the key phrases detection
   *       job.</p>
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>The language code of the input documents.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your key phrases detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface DescribeKeyPhrasesDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with a key phrases detection job.
   *     </p>
   * @public
   */
  KeyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribePiiEntitiesDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Provides configuration parameters for the output of PII entity detection jobs.</p>
 * @public
 */
export interface PiiOutputDataConfig {
  /**
   * <p>When you use the <code>PiiOutputDataConfig</code> object with asynchronous operations,
   *       you specify the Amazon S3 location where you want to write the output data. </p>
   *          <p>
   *       For a PII entity detection job, the output file is plain text, not a compressed archive.
   *       The output file name is the same as the input file, with <code>.out</code> appended at the end.
   *     </p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the
   *       output results from an analysis job.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * <p>Provides configuration parameters for PII entity redaction.</p>
 * @public
 */
export interface RedactionConfig {
  /**
   * <p>An array of the types of PII entities that Amazon Comprehend detects in the input text for
   *       your request.</p>
   * @public
   */
  PiiEntityTypes?: PiiEntityType[] | undefined;

  /**
   * <p>Specifies whether the PII entity is redacted with the mask character or the entity
   *       type.</p>
   * @public
   */
  MaskMode?: PiiEntitiesDetectionMaskMode | undefined;

  /**
   * <p>A character that replaces each character in the redacted PII entity.</p>
   * @public
   */
  MaskCharacter?: string | undefined;
}

/**
 * <p>Provides information about a PII entities detection job.</p>
 * @public
 */
export interface PiiEntitiesDetectionJobProperties {
  /**
   * <p>The identifier assigned to the PII entities detection job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the PII entities detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:pii-entities-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

  /**
   * <p>The name that you assigned the PII entities detection job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The current status of the PII entities detection job. If the status is
   *       <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>A description of the status of a job.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The time that the PII entities detection job was submitted for processing.</p>
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * <p>The time that the PII entities detection job completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The input properties for a PII entities detection job.</p>
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * <p>The output data configuration that you supplied when you created the PII entities
   *       detection job.</p>
   * @public
   */
  OutputDataConfig?: PiiOutputDataConfig | undefined;

  /**
   * <p>Provides configuration parameters for PII entity redaction.</p>
   *          <p>This parameter is required if you set the <code>Mode</code> parameter to
   *         <code>ONLY_REDACTION</code>. In that case, you must provide a <code>RedactionConfig</code>
   *       definition that includes the <code>PiiEntityTypes</code> parameter.</p>
   * @public
   */
  RedactionConfig?: RedactionConfig | undefined;

  /**
   * <p>The language code of the input documents.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>Specifies whether the output provides the locations (offsets) of PII entities or a file in
   *       which PII entities are redacted.</p>
   * @public
   */
  Mode?: PiiEntitiesDetectionMode | undefined;
}

/**
 * @public
 */
export interface DescribePiiEntitiesDetectionJobResponse {
  /**
   * <p>Provides information about a PII entities detection job.</p>
   * @public
   */
  PiiEntitiesDetectionJobProperties?: PiiEntitiesDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model version that has the resource policy.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * <p>The JSON body of the resource-based policy.</p>
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * <p>The time at which the policy was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time at which the policy was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a
   *       new revision ID, and it deletes the prior version of the policy.</p>
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSentimentDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Provides information about a sentiment detection job.</p>
 * @public
 */
export interface SentimentDetectionJobProperties {
  /**
   * <p>The identifier assigned to the sentiment detection job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the sentiment detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:sentiment-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

  /**
   * <p>The name that you assigned to the sentiment detection job</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The current status of the sentiment detection job. If the status is <code>FAILED</code>,
   *       the <code>Messages</code> field shows the reason for the failure.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>A description of the status of a job.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The time that the sentiment detection job was submitted for processing.</p>
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * <p>The time that the sentiment detection job ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The input data configuration that you supplied when you created the sentiment detection
   *       job.</p>
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * <p>The output data configuration that you supplied when you created the sentiment detection
   *       job.</p>
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>The language code of the input documents.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your sentiment detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface DescribeSentimentDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with a sentiment detection job.</p>
   * @public
   */
  SentimentDetectionJobProperties?: SentimentDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeTargetedSentimentDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The
   *       <code>StartTargetedSentimentDetectionJob</code> operation returns this identifier in its
   *       response.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Provides information about a targeted sentiment detection job.</p>
 * @public
 */
export interface TargetedSentimentDetectionJobProperties {
  /**
   * <p>The identifier assigned to the targeted sentiment detection job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the targeted sentiment detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:targeted-sentiment-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:targeted-sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

  /**
   * <p>The name that you assigned to the targeted sentiment detection job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The current status of the targeted sentiment detection job. If the status is <code>FAILED</code>,
   *       the <code>Messages</code> field shows the reason for the failure.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>A description of the status of a job.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The time that the targeted sentiment detection job was submitted for processing.</p>
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * <p>The time that the targeted sentiment detection job ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The input properties for an inference job. The document reader config field applies
   *       only to non-text inputs for custom analysis.</p>
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * <p>Provides configuration parameters for the output of inference jobs.</p>
   *          <p></p>
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>The language code of the input documents.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt the
   *       data on the storage volume attached to the ML compute instance(s) that process the
   *       targeted sentiment detection job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *           <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface DescribeTargetedSentimentDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with a targeted sentiment detection job.</p>
   * @public
   */
  TargetedSentimentDetectionJobProperties?: TargetedSentimentDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeTopicsDetectionJobRequest {
  /**
   * <p>The identifier assigned by the user to the detection job.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Provides information about a topic detection job.</p>
 * @public
 */
export interface TopicsDetectionJobProperties {
  /**
   * <p>The identifier assigned to the topic detection job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topics detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:topics-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:topics-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

  /**
   * <p>The name of the topic detection job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The current status of the topic detection job. If the status is <code>Failed</code>,
   *       the reason for the failure is shown in the <code>Message</code> field.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>A description for the status of a job.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The time that the topic detection job was submitted for processing.</p>
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * <p>The time that the topic detection job was completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The input data configuration supplied when you created the topic detection
   *       job.</p>
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * <p>The output data configuration supplied when you created the topic detection
   *       job.</p>
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>The number of topics to detect supplied when you created the topic detection job. The
   *       default is 10. </p>
   * @public
   */
  NumberOfTopics?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your job data. </p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p>Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your topic detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface DescribeTopicsDetectionJobResponse {
  /**
   * <p>The list of properties for the requested job.</p>
   * @public
   */
  TopicsDetectionJobProperties?: TopicsDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DetectDominantLanguageRequest {
  /**
   * <p>A UTF-8 text string. The string must contain at least 20 characters. The maximum string size is 100 KB.</p>
   * @public
   */
  Text: string | undefined;
}

/**
 * @public
 */
export interface DetectDominantLanguageResponse {
  /**
   * <p>Array of languages that Amazon Comprehend detected in the input text.
   *       The array is sorted in descending order of the score
   *       (the dominant language is always the first element in the array).</p>
   *          <p>For each language, the
   *       response returns the RFC 5646 language code and the level of confidence that Amazon Comprehend
   *       has in the accuracy of its inference. For more information about RFC 5646, see <a href="https://tools.ietf.org/html/rfc5646">Tags for Identifying Languages</a> on the
   *         <i>IETF Tools</i> web site.</p>
   * @public
   */
  Languages?: DominantLanguage[] | undefined;
}

/**
 * @public
 */
export interface DetectEntitiesRequest {
  /**
   * <p>A UTF-8 text string. The maximum string size is 100 KB. If you enter text using this parameter,
   *     do not use the <code>Bytes</code> parameter.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. If your request includes the endpoint for a custom entity recognition model, Amazon
   *       Comprehend uses the language of your custom model, and it ignores any language code that you
   *       specify here.</p>
   *          <p>All input documents must be in the same language.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The Amazon Resource Name of an endpoint that is associated with a custom entity
   *       recognition model. Provide an endpoint if you want to detect entities by using your own custom
   *       model instead of the default model that is used by Amazon Comprehend.</p>
   *          <p>If you specify an endpoint, Amazon Comprehend uses the language of your custom model, and
   *       it ignores any language code that you provide in your request.</p>
   *          <p>For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.</p>
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * <p>This field applies only when you use a custom entity recognition model that
   *       was trained with PDF annotations. For other cases,
   *       enter your text input in the <code>Text</code> field.</p>
   *          <p>
   *       Use the <code>Bytes</code> parameter to input a text, PDF, Word or image file.
   *       Using a plain-text file in the <code>Bytes</code> parameter is equivelent to using the
   *       <code>Text</code> parameter (the <code>Entities</code> field in the response is identical).</p>
   *          <p>You can also use the <code>Bytes</code> parameter to input an Amazon Textract <code>DetectDocumentText</code>
   *       or <code>AnalyzeDocument</code> output file.</p>
   *          <p>Provide the input document as a sequence of base64-encoded bytes.
   *       If your code uses an Amazon Web Services SDK to detect entities, the SDK may encode
   *       the document file bytes for you. </p>
   *          <p>The maximum length of this field depends on the input document type. For details, see
   *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync.html">
   *         Inputs for real-time custom analysis</a> in the Comprehend Developer Guide. </p>
   *          <p>If you use the <code>Bytes</code> parameter, do not use the <code>Text</code> parameter.</p>
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * <p>Provides configuration parameters to override the default actions for extracting text
   *       from PDF documents and image files.</p>
   * @public
   */
  DocumentReaderConfig?: DocumentReaderConfig | undefined;
}

/**
 * @public
 */
export interface DetectEntitiesResponse {
  /**
   * <p>A collection of entities identified in the input text. For each entity, the response
   *       provides the entity text, entity type, where the entity text begins and ends, and the level of
   *       confidence that Amazon Comprehend has in the detection. </p>
   *          <p>If your request uses a custom entity recognition model, Amazon Comprehend detects the
   *       entities that the model is trained to recognize. Otherwise, it detects the default entity
   *       types. For a list of default entity types, see
   *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.
   *     </p>
   * @public
   */
  Entities?: Entity[] | undefined;

  /**
   * <p>Information about the document, discovered during text extraction. This field is present
   *       in the response only if your request used the <code>Byte</code> parameter. </p>
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * <p>The document type for each page in the input document. This field is present
   *       in the response only if your request used the <code>Byte</code> parameter. </p>
   * @public
   */
  DocumentType?: DocumentTypeListItem[] | undefined;

  /**
   * <p>Information about each block of text in the input document.
   *       Blocks are nested. A page block contains a block for each line of text,
   *       which contains a block for each word. </p>
   *          <p>The <code>Block</code> content for a Word input document does not include a <code>Geometry</code> field.</p>
   *          <p>The <code>Block</code> field is not present in the response for plain-text inputs.</p>
   * @public
   */
  Blocks?: Block[] | undefined;

  /**
   * <p>Page-level errors that the system detected while processing the input document.
   *       The field is empty if the system encountered no errors.</p>
   * @public
   */
  Errors?: ErrorsListItem[] | undefined;
}

/**
 * @public
 */
export interface DetectKeyPhrasesRequest {
  /**
   * <p>A UTF-8 text string. The string must contain less than 100 KB of UTF-8 encoded
   *       characters.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * @public
 */
export interface DetectKeyPhrasesResponse {
  /**
   * <p>A collection of key phrases that Amazon Comprehend identified in the input text. For
   *       each key phrase, the response provides the text of the key phrase, where the key phrase begins
   *       and ends, and the level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection. </p>
   * @public
   */
  KeyPhrases?: KeyPhrase[] | undefined;
}

/**
 * @public
 */
export interface DetectPiiEntitiesRequest {
  /**
   * <p>A UTF-8 text string. The maximum string size is 100 KB.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The language of the input text.
   *       Enter the language code for English (en) or Spanish (es).</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * <p>Provides information about a PII entity.</p>
 * @public
 */
export interface PiiEntity {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   * @public
   */
  Score?: number | undefined;

  /**
   * <p>The entity's type.</p>
   * @public
   */
  Type?: PiiEntityType | undefined;

  /**
   * <p>The zero-based offset from the beginning of the source text to the first character in the
   *       entity.</p>
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * <p>The zero-based offset from the beginning of the source text to the last character in the
   *       entity.</p>
   * @public
   */
  EndOffset?: number | undefined;
}

/**
 * @public
 */
export interface DetectPiiEntitiesResponse {
  /**
   * <p>A collection of PII entities identified in the input text. For each entity, the response
   *       provides the entity type, where the entity text begins and ends, and the level of confidence
   *       that Amazon Comprehend has in the detection.</p>
   * @public
   */
  Entities?: PiiEntity[] | undefined;
}

/**
 * @public
 */
export interface DetectSentimentRequest {
  /**
   * <p>A UTF-8 text string. The maximum string size is 5 KB.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * @public
 */
export interface DetectSentimentResponse {
  /**
   * <p>The inferred sentiment that Amazon Comprehend has the highest level of confidence
   *       in.</p>
   * @public
   */
  Sentiment?: SentimentType | undefined;

  /**
   * <p>An object that lists the sentiments, and their corresponding confidence
   *       levels.</p>
   * @public
   */
  SentimentScore?: SentimentScore | undefined;
}

/**
 * @public
 */
export interface DetectSyntaxRequest {
  /**
   * <p>A UTF-8 string. The maximum string size is 5 KB.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The language code of the input documents. You can specify any of the following languages
   *       supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"),
   *       Italian ("it"), or Portuguese ("pt").</p>
   * @public
   */
  LanguageCode: SyntaxLanguageCode | undefined;
}

/**
 * @public
 */
export interface DetectSyntaxResponse {
  /**
   * <p>A collection of syntax tokens describing the text. For each token, the response provides
   *       the text, the token type, where the text begins and ends, and the level of confidence that
   *       Amazon Comprehend has that the token is correct. For a list of token types, see
   *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
   *     </p>
   * @public
   */
  SyntaxTokens?: SyntaxToken[] | undefined;
}

/**
 * @public
 */
export interface DetectTargetedSentimentRequest {
  /**
   * <p>A UTF-8 text string. The maximum string length is 5 KB.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The language of the input documents. Currently, English is the only supported language.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * @public
 */
export interface DetectTargetedSentimentResponse {
  /**
   * <p>Targeted sentiment analysis for each of the entities identified in the input text.</p>
   * @public
   */
  Entities?: TargetedSentimentEntity[] | undefined;
}

/**
 * <p>One of the of text strings. Each string has a size limit of 1KB.</p>
 * @public
 */
export interface TextSegment {
  /**
   * <p>The text content.</p>
   * @public
   */
  Text: string | undefined;
}

/**
 * @public
 */
export interface DetectToxicContentRequest {
  /**
   * <p>A list of up to 10 text strings. Each string has a maximum size of 1 KB, and
   *       the maximum size of the list is 10 KB.</p>
   * @public
   */
  TextSegments: TextSegment[] | undefined;

  /**
   * <p>The language of the input text. Currently, English is the only supported language.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * <p>Toxic content analysis result for one string. For more information about toxicity detection, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/toxicity-detection.html">Toxicity detection</a> in the <i>Amazon Comprehend Developer Guide</i>
 *          </p>
 * @public
 */
export interface ToxicContent {
  /**
   * <p>The name of the toxic content type.</p>
   * @public
   */
  Name?: ToxicContentType | undefined;

  /**
   * <p>
   *       Model confidence in the detected content type. Value range is zero to one, where one is highest confidence.</p>
   * @public
   */
  Score?: number | undefined;
}

/**
 * <p>Toxicity analysis result for one string. For more information about toxicity detection, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/toxicity-detection.html">Toxicity detection</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @public
 */
export interface ToxicLabels {
  /**
   * <p>Array of toxic content types identified in the string.</p>
   * @public
   */
  Labels?: ToxicContent[] | undefined;

  /**
   * <p>Overall toxicity score for the string. Value range is zero to one, where one is the highest confidence.</p>
   * @public
   */
  Toxicity?: number | undefined;
}

/**
 * @public
 */
export interface DetectToxicContentResponse {
  /**
   * <p>Results of the content moderation analysis.
   *       Each entry in the results list contains a list of toxic content types identified in
   *       the text, along with a confidence score for each content type.
   *       The results list also includes a toxicity score for each entry in the results list.
   *     </p>
   * @public
   */
  ResultList?: ToxicLabels[] | undefined;
}

/**
 * @public
 */
export interface ImportModelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model to import.</p>
   * @public
   */
  SourceModelArn: string | undefined;

  /**
   * <p>The name to assign to the custom model that is created in Amazon Comprehend by this
   *       import.</p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The version name given to the custom model that is created by this import. Version names
   *       can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_)
   *       are allowed. The version name must be unique among all models with the same classifier name in
   *       the account/Region.</p>
   * @public
   */
  VersionName?: string | undefined;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend permission to use Amazon Key Management Service (KMS) to encrypt or decrypt the custom
   *       model.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>Tags to associate with the custom model that is created by this import. A tag is a
   *       key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a
   *       tag with "Sales" as the key might be added to a resource to indicate its use by the sales
   *       department.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportModelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model being imported.</p>
   * @public
   */
  ModelArn?: string | undefined;
}

/**
 * <p>Filter the datasets based on creation time or dataset status.</p>
 * @public
 */
export interface DatasetFilter {
  /**
   * <p>Filter the datasets based on the dataset status.</p>
   * @public
   */
  Status?: DatasetStatus | undefined;

  /**
   * <p>Filter the datasets based on the dataset type.</p>
   * @public
   */
  DatasetType?: DatasetType | undefined;

  /**
   * <p>Filter the datasets to include datasets created after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Filter the datasets to include datasets created before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel.</p>
   * @public
   */
  FlywheelArn?: string | undefined;

  /**
   * <p>Filters the datasets to be returned in the response.</p>
   * @public
   */
  Filter?: DatasetFilter | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return in a response. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * <p>The dataset properties list.</p>
   * @public
   */
  DatasetPropertiesList?: DatasetProperties[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides information for filtering a list of document classification jobs. For more
 *       information, see the  operation. You can
 *       provide only one filter parameter in each request.</p>
 * @public
 */
export interface DocumentClassificationJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Filters the list based on job status. Returns only jobs with the specified status.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListDocumentClassificationJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their names, status, or the
   *       date and time that they were submitted. You can only set one filter at a time.</p>
   * @public
   */
  Filter?: DocumentClassificationJobFilter | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDocumentClassificationJobsResponse {
  /**
   * <p>A list containing the properties of each job returned.</p>
   * @public
   */
  DocumentClassificationJobPropertiesList?: DocumentClassificationJobProperties[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides information for filtering a list of document classifiers. You can only specify
 *       one filtering parameter in a request. For more information, see the
 *         <code>ListDocumentClassifiers</code> operation.</p>
 * @public
 */
export interface DocumentClassifierFilter {
  /**
   * <p>Filters the list of classifiers based on status.</p>
   * @public
   */
  Status?: ModelStatus | undefined;

  /**
   * <p>The name that you assigned to the document classifier</p>
   * @public
   */
  DocumentClassifierName?: string | undefined;

  /**
   * <p>Filters the list of classifiers based on the time that the classifier was submitted for
   *       processing. Returns only classifiers submitted before the specified time. Classifiers are
   *       returned in ascending order, oldest to newest.</p>
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * <p>Filters the list of classifiers based on the time that the classifier was submitted for
   *       processing. Returns only classifiers submitted after the specified time. Classifiers are
   *       returned in descending order, newest to oldest.</p>
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListDocumentClassifiersRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   * @public
   */
  Filter?: DocumentClassifierFilter | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDocumentClassifiersResponse {
  /**
   * <p>A list containing the properties of each job returned.</p>
   * @public
   */
  DocumentClassifierPropertiesList?: DocumentClassifierProperties[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDocumentClassifierSummariesRequest {
  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return on each page. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes information about a document classifier and its versions.</p>
 * @public
 */
export interface DocumentClassifierSummary {
  /**
   * <p>The name that you assigned the document classifier.</p>
   * @public
   */
  DocumentClassifierName?: string | undefined;

  /**
   * <p>The number of versions you created.</p>
   * @public
   */
  NumberOfVersions?: number | undefined;

  /**
   * <p>The time that the latest document classifier version was submitted for processing.</p>
   * @public
   */
  LatestVersionCreatedAt?: Date | undefined;

  /**
   * <p>The version name you assigned to the latest document classifier version.</p>
   * @public
   */
  LatestVersionName?: string | undefined;

  /**
   * <p>Provides the status of the latest document classifier version.</p>
   * @public
   */
  LatestVersionStatus?: ModelStatus | undefined;
}

/**
 * @public
 */
export interface ListDocumentClassifierSummariesResponse {
  /**
   * <p>The list of summaries of document classifiers.</p>
   * @public
   */
  DocumentClassifierSummariesList?: DocumentClassifierSummary[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the
 *       operation.</p>
 * @public
 */
export interface DominantLanguageDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListDominantLanguageDetectionJobsRequest {
  /**
   * <p>Filters that jobs that are returned. You can filter jobs on their name, status, or the
   *       date and time that they were submitted. You can only set one filter at a time.</p>
   * @public
   */
  Filter?: DominantLanguageDetectionJobFilter | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDominantLanguageDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   * @public
   */
  DominantLanguageDetectionJobPropertiesList?: DominantLanguageDetectionJobProperties[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The filter used to determine which endpoints are returned. You can filter jobs on their
 *       name, model, status, or the date and time that they were created. You can only set one filter
 *       at a time. </p>
 * @public
 */
export interface EndpointFilter {
  /**
   * <p>The Amazon Resource Number (ARN) of the model to which the endpoint is attached.</p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>Specifies the status of the endpoint being returned. Possible values are: Creating, Ready,
   *       Updating, Deleting, Failed.</p>
   * @public
   */
  Status?: EndpointStatus | undefined;

  /**
   * <p>Specifies a date before which the returned endpoint or endpoints were created.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Specifies a date after which the returned endpoint or endpoints were created.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListEndpointsRequest {
  /**
   * <p>Filters the endpoints that are returned. You can filter endpoints on their name, model,
   *       status, or the date and time that they were created. You can only set one filter at a time.
   *     </p>
   * @public
   */
  Filter?: EndpointFilter | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEndpointsResponse {
  /**
   * <p>Displays a list of endpoint properties being retrieved by the service in response to the
   *       request.</p>
   * @public
   */
  EndpointPropertiesList?: EndpointProperties[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the  operation.</p>
 * @public
 */
export interface EntitiesDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListEntitiesDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   * @public
   */
  Filter?: EntitiesDetectionJobFilter | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEntitiesDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   * @public
   */
  EntitiesDetectionJobPropertiesList?: EntitiesDetectionJobProperties[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides information for filtering a list of entity recognizers. You can only specify one
 *       filtering parameter in a request. For more information, see the
 *         <code>ListEntityRecognizers</code> operation./></p>
 * @public
 */
export interface EntityRecognizerFilter {
  /**
   * <p>The status of an entity recognizer.</p>
   * @public
   */
  Status?: ModelStatus | undefined;

  /**
   * <p>The name that you assigned the entity recognizer.</p>
   * @public
   */
  RecognizerName?: string | undefined;

  /**
   * <p>Filters the list of entities based on the time that the list was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * <p>Filters the list of entities based on the time that the list was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListEntityRecognizersRequest {
  /**
   * <p>Filters the list of entities returned. You can filter on <code>Status</code>,
   *         <code>SubmitTimeBefore</code>, or <code>SubmitTimeAfter</code>. You can only set one filter
   *       at a time.</p>
   * @public
   */
  Filter?: EntityRecognizerFilter | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of results to return on each page. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEntityRecognizersResponse {
  /**
   * <p>The list of properties of an entity recognizer.</p>
   * @public
   */
  EntityRecognizerPropertiesList?: EntityRecognizerProperties[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntityRecognizerSummariesRequest {
  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return on each page. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p> Describes the information about an entity recognizer and its versions.</p>
 * @public
 */
export interface EntityRecognizerSummary {
  /**
   * <p> The name that you assigned the entity recognizer.</p>
   * @public
   */
  RecognizerName?: string | undefined;

  /**
   * <p> The number of versions you created.</p>
   * @public
   */
  NumberOfVersions?: number | undefined;

  /**
   * <p> The time that the latest entity recognizer version was submitted for processing.</p>
   * @public
   */
  LatestVersionCreatedAt?: Date | undefined;

  /**
   * <p> The version name you assigned to the latest entity recognizer version.</p>
   * @public
   */
  LatestVersionName?: string | undefined;

  /**
   * <p> Provides the status of the latest entity recognizer version.</p>
   * @public
   */
  LatestVersionStatus?: ModelStatus | undefined;
}

/**
 * @public
 */
export interface ListEntityRecognizerSummariesResponse {
  /**
   * <p>The list entity recognizer summaries.</p>
   * @public
   */
  EntityRecognizerSummariesList?: EntityRecognizerSummary[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides information for filtering a list of event detection jobs.</p>
 * @public
 */
export interface EventsDetectionJobFilter {
  /**
   * <p>Filters on the name of the events detection job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListEventsDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   * @public
   */
  Filter?: EventsDetectionJobFilter | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in each page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEventsDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   * @public
   */
  EventsDetectionJobPropertiesList?: EventsDetectionJobProperties[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Filter the flywheel iterations based on creation time.</p>
 * @public
 */
export interface FlywheelIterationFilter {
  /**
   * <p>Filter the flywheel iterations to include iterations created after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Filter the flywheel iterations to include iterations created before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListFlywheelIterationHistoryRequest {
  /**
   * <p>The ARN of the flywheel.</p>
   * @public
   */
  FlywheelArn: string | undefined;

  /**
   * <p>Filter the flywheel iteration history based on creation time.</p>
   * @public
   */
  Filter?: FlywheelIterationFilter | undefined;

  /**
   * <p>Next token</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of iteration history results to return</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFlywheelIterationHistoryResponse {
  /**
   * <p>List of flywheel iteration properties</p>
   * @public
   */
  FlywheelIterationPropertiesList?: FlywheelIterationProperties[] | undefined;

  /**
   * <p>Next token</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Filter the flywheels based on creation time or flywheel status.</p>
 * @public
 */
export interface FlywheelFilter {
  /**
   * <p>Filter the flywheels based on the flywheel status.</p>
   * @public
   */
  Status?: FlywheelStatus | undefined;

  /**
   * <p>Filter the flywheels to include flywheels created after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Filter the flywheels to include flywheels created before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListFlywheelsRequest {
  /**
   * <p>Filters the flywheels that are returned. You can filter flywheels on their status,
   *       or the date and time that they were submitted. You can only set one filter at a time.
   *     </p>
   * @public
   */
  Filter?: FlywheelFilter | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return in a response. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Flywheel summary information.</p>
 * @public
 */
export interface FlywheelSummary {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel</p>
   * @public
   */
  FlywheelArn?: string | undefined;

  /**
   * <p>ARN of the active model version for the flywheel.</p>
   * @public
   */
  ActiveModelArn?: string | undefined;

  /**
   * <p>Amazon S3 URI of the data lake location. </p>
   * @public
   */
  DataLakeS3Uri?: string | undefined;

  /**
   * <p>The status of the flywheel.</p>
   * @public
   */
  Status?: FlywheelStatus | undefined;

  /**
   * <p>Model type of the flywheel's model.</p>
   * @public
   */
  ModelType?: ModelType | undefined;

  /**
   * <p>A description of the status of the flywheel.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Creation time of the flywheel.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Last modified time for the flywheel.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The most recent flywheel iteration.</p>
   * @public
   */
  LatestFlywheelIteration?: string | undefined;
}

/**
 * @public
 */
export interface ListFlywheelsResponse {
  /**
   * <p>A list of flywheel properties retrieved by the service in response to the request.
   *        </p>
   * @public
   */
  FlywheelSummaryList?: FlywheelSummary[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the  operation.</p>
 * @public
 */
export interface KeyPhrasesDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListKeyPhrasesDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   * @public
   */
  Filter?: KeyPhrasesDetectionJobFilter | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListKeyPhrasesDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   * @public
   */
  KeyPhrasesDetectionJobPropertiesList?: KeyPhrasesDetectionJobProperties[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides information for filtering a list of PII entity detection jobs.</p>
 * @public
 */
export interface PiiEntitiesDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListPiiEntitiesDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   * @public
   */
  Filter?: PiiEntitiesDetectionJobFilter | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in each page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPiiEntitiesDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   * @public
   */
  PiiEntitiesDetectionJobPropertiesList?: PiiEntitiesDetectionJobProperties[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the  operation.</p>
 * @public
 */
export interface SentimentDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListSentimentDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   * @public
   */
  Filter?: SentimentDetectionJobFilter | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSentimentDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   * @public
   */
  SentimentDetectionJobPropertiesList?: SentimentDetectionJobProperties[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying.
   *     </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are
   *       querying.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>Tags associated with the Amazon Comprehend resource being queried. A tag is a key-value
   *       pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with
   *       "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *     </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the <code>ListTargetedSentimentDetectionJobs</code> operation.</p>
 * @public
 */
export interface TargetedSentimentDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListTargetedSentimentDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   * @public
   */
  Filter?: TargetedSentimentDetectionJobFilter | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTargetedSentimentDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   * @public
   */
  TargetedSentimentDetectionJobPropertiesList?: TargetedSentimentDetectionJobProperties[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides information for filtering topic detection jobs. For more information, see
 *         .</p>
 * @public
 */
export interface TopicsDetectionJobFilter {
  /**
   * <p></p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Filters the list of topic detection jobs based on job status. Returns only jobs with
   *       the specified status.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Only returns jobs submitted before the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Only returns jobs submitted after the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListTopicsDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. Jobs can be filtered on their name, status, or the
   *       date and time that they were submitted. You can set only one filter at a time.</p>
   * @public
   */
  Filter?: TopicsDetectionJobFilter | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTopicsDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   * @public
   */
  TopicsDetectionJobPropertiesList?: TopicsDetectionJobProperties[] | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model to attach the policy to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The JSON resource-based policy to attach to your custom model. Provide your JSON as a
   *       UTF-8 encoded string without line breaks. To provide valid JSON for your policy, enclose the
   *       attribute names and values in double quotes. If the JSON body is also enclosed in double
   *       quotes, then you must escape the double quotes that are inside the policy:</p>
   *          <p>
   *             <code>"\{\"attribute\": \"value\", \"attribute\": [\"value\"]\}"</code>
   *          </p>
   *          <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double
   *       quotes to enclose the JSON names and values:</p>
   *          <p>
   *             <code>'\{"attribute": "value", "attribute": ["value"]\}'</code>
   *          </p>
   * @public
   */
  ResourcePolicy: string | undefined;

  /**
   * <p>The revision ID that Amazon Comprehend assigned to the policy that you are updating. If
   *       you are creating a new policy that has no prior version, don't use this parameter. Amazon
   *       Comprehend creates the revision ID for you.</p>
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a
   *       new revision ID, and it deletes the prior version of the policy.</p>
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface StartDocumentClassificationJobRequest {
  /**
   * <p>The identifier of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the document classifier to use to process the
   *       job.</p>
   * @public
   */
  DocumentClassifierArn?: string | undefined;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your document classification job. For more information, see
   *       <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>Tags to associate with the document classification job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel associated with the model to use.</p>
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface StartDocumentClassificationJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of the job, use this identifier
   *       with the <code>DescribeDocumentClassificationJob</code> operation.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:document-classification-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

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
   *                <p>FAILED - The job did not complete. For details, use the
   *           <code>DescribeDocumentClassificationJob</code> operation.</p>
   *             </li>
   *             <li>
   *                <p>STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is
   *           processing the request.</p>
   *             </li>
   *             <li>
   *                <p>STOPPED - The job was successfully stopped without completing.</p>
   *             </li>
   *          </ul>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>The ARN of the custom classification model.</p>
   * @public
   */
  DocumentClassifierArn?: string | undefined;
}

/**
 * @public
 */
export interface StartDominantLanguageDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>An identifier for the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your dominant language detection job. For more information,
   *       see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>Tags to associate with the dominant language detection job. A tag is a key-value pair
   *       that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as
   *       the key might be added to a resource to indicate its use by the sales department.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartDominantLanguageDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the  operation.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dominant language detection job. It is a unique,
   *       fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID.
   *       The format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:dominant-language-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:dominant-language-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

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
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StartEntitiesDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the specific entity recognizer to be used
   *       by the <code>StartEntitiesDetectionJob</code>. This ARN is optional and is only used for a
   *       custom entity recognition job.</p>
   * @public
   */
  EntityRecognizerArn?: string | undefined;

  /**
   * <p>The language of the input documents. All documents must be in the same language. You can
   *       specify any of the languages supported by Amazon Comprehend. If custom entities recognition is
   *       used, this parameter is ignored and the language used for training the model is used
   *       instead.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your entity detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>Tags to associate with the entities detection job. A tag is a key-value pair that adds
   *       metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key
   *       might be added to a resource to indicate its use by the sales department.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel associated with the model to use.</p>
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface StartEntitiesDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of job, use this identifier with
   *       the  operation.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the entities detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:entities-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

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
   *                <p>STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is
   *           processing the request.</p>
   *             </li>
   *             <li>
   *                <p>STOPPED - The job was successfully stopped without completing.</p>
   *             </li>
   *          </ul>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>The ARN of the custom entity recognition model.</p>
   * @public
   */
  EntityRecognizerArn?: string | undefined;
}

/**
 * @public
 */
export interface StartEventsDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the events detection job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The language code of the input documents.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>An unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The types of events to detect in the input documents.</p>
   * @public
   */
  TargetEventTypes: string[] | undefined;

  /**
   * <p>Tags to associate with the events detection job. A tag is a key-value pair that adds
   *       metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key
   *       might be added to a resource to indicate its use by the sales department.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartEventsDetectionJobResponse {
  /**
   * <p>An unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:events-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

  /**
   * <p>The status of the events detection job.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StartFlywheelIterationRequest {
  /**
   * <p>The ARN of the flywheel.</p>
   * @public
   */
  FlywheelArn: string | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StartFlywheelIterationResponse {
  /**
   * <p></p>
   * @public
   */
  FlywheelArn?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  FlywheelIterationId?: string | undefined;
}

/**
 * @public
 */
export interface StartKeyPhrasesDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your key phrases detection job. For more information, see
   *       <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>Tags to associate with the key phrases detection job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartKeyPhrasesDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the  operation.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the key phrase detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:key-phrases-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:key-phrases-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

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
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StartPiiEntitiesDetectionJobRequest {
  /**
   * <p>The input properties for a PII entities detection job.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Provides conﬁguration parameters for the output of PII entity detection jobs.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>Specifies whether the output provides the locations (offsets) of PII entities or a file in
   *       which PII entities are redacted.</p>
   * @public
   */
  Mode: PiiEntitiesDetectionMode | undefined;

  /**
   * <p>Provides configuration parameters for PII entity redaction.</p>
   *          <p>This parameter is required if you set the <code>Mode</code> parameter to
   *         <code>ONLY_REDACTION</code>. In that case, you must provide a <code>RedactionConfig</code>
   *       definition that includes the <code>PiiEntityTypes</code> parameter.</p>
   * @public
   */
  RedactionConfig?: RedactionConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The language of the input documents.
   *       Enter the language code for English (en) or Spanish (es).</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Tags to associate with the PII entities detection job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartPiiEntitiesDetectionJobResponse {
  /**
   * <p>The identifier generated for the job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the PII entity detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:pii-entities-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

  /**
   * <p>The status of the job.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StartSentimentDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files. </p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your sentiment detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>Tags to associate with the sentiment detection job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartSentimentDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the  operation.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the sentiment detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:sentiment-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

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
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StartTargetedSentimentDetectionJobRequest {
  /**
   * <p>The input properties for an inference job. The document reader config field applies
   *       only to non-text inputs for custom analysis.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files. </p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The language of the input documents. Currently, English is the only supported language.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *           <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>Tags to associate with the targeted sentiment detection job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartTargetedSentimentDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the <code>DescribeTargetedSentimentDetectionJob</code> operation.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the targeted sentiment detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:targeted-sentiment-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:targeted-sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

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
   *                <p>FAILED - The job did not complete. To get details, use the
   *           <code>DescribeTargetedSentimentDetectionJob</code> operation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StartTopicsDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files. The output is a compressed archive with two
   *       files, <code>topic-terms.csv</code> that lists the terms associated with each topic, and
   *         <code>doc-topics.csv</code> that lists the documents associated with each topic</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The number of topics to detect.</p>
   * @public
   */
  NumberOfTopics?: number | undefined;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon
   *       Comprehend generates one.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your topic detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>Tags to associate with the topics detection job. A tag is a key-value pair that adds
   *       metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key
   *       might be added to a resource to indicate its use by the sales department.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartTopicsDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of the job, use this identifier
   *       with the <code>DescribeTopicDetectionJob</code> operation.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topics detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:topics-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   * @public
   */
  JobArn?: string | undefined;

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
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopDominantLanguageDetectionJobRequest {
  /**
   * <p>The identifier of the dominant language detection job to stop.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopDominantLanguageDetectionJobResponse {
  /**
   * <p>The identifier of the dominant language detection job to stop.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopDominantLanguageDetectionJob</code> operation.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopEntitiesDetectionJobRequest {
  /**
   * <p>The identifier of the entities detection job to stop.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopEntitiesDetectionJobResponse {
  /**
   * <p>The identifier of the entities detection job to stop.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopEntitiesDetectionJob</code> operation.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopEventsDetectionJobRequest {
  /**
   * <p>The identifier of the events detection job to stop.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopEventsDetectionJobResponse {
  /**
   * <p>The identifier of the events detection job to stop.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The status of the events detection job.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopKeyPhrasesDetectionJobRequest {
  /**
   * <p>The identifier of the key phrases detection job to stop.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopKeyPhrasesDetectionJobResponse {
  /**
   * <p>The identifier of the key phrases detection job to stop.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopKeyPhrasesDetectionJob</code> operation.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopPiiEntitiesDetectionJobRequest {
  /**
   * <p>The identifier of the PII entities detection job to stop.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopPiiEntitiesDetectionJobResponse {
  /**
   * <p>The identifier of the PII entities detection job to stop.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The status of the PII entities detection job.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopSentimentDetectionJobRequest {
  /**
   * <p>The identifier of the sentiment detection job to stop.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopSentimentDetectionJobResponse {
  /**
   * <p>The identifier of the sentiment detection job to stop.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopSentimentDetectionJob</code> operation.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopTargetedSentimentDetectionJobRequest {
  /**
   * <p>The identifier of the targeted sentiment detection job to stop.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopTargetedSentimentDetectionJobResponse {
  /**
   * <p>The identifier of the targeted sentiment detection job to stop.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *       <code>STOPPED</code> if the job was previously stopped with the
   *       <code>StopSentimentDetectionJob</code> operation.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopTrainingDocumentClassifierRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier currently being
   *       trained.</p>
   * @public
   */
  DocumentClassifierArn: string | undefined;
}

/**
 * @public
 */
export interface StopTrainingDocumentClassifierResponse {}

/**
 * @public
 */
export interface StopTrainingEntityRecognizerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer currently being
   *       trained.</p>
   * @public
   */
  EntityRecognizerArn: string | undefined;
}

/**
 * @public
 */
export interface StopTrainingEntityRecognizerResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the given Amazon Comprehend resource to which you want
   *       to associate the tags. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags being associated with a specific Amazon Comprehend resource. There can be a maximum
   *       of 50 tags (both existing and pending) associated with a specific resource. </p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the given Amazon Comprehend resource from which you
   *       want to remove the tags. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The initial part of a key-value pair that forms a tag being removed from a given resource.
   *       For example, a tag with "Sales" as the key might be added to a resource to indicate its use by
   *       the sales department. Keys must be unique and cannot be duplicated for a particular resource.
   *     </p>
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
export interface UpdateEndpointRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being updated.</p>
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * <p>The ARN of the new model to use when updating an existing endpoint.</p>
   * @public
   */
  DesiredModelArn?: string | undefined;

  /**
   * <p> The desired number of inference units to be used by the model using this endpoint.
   *
   *       Each inference unit represents of a throughput of 100 characters per second.</p>
   * @public
   */
  DesiredInferenceUnits?: number | undefined;

  /**
   * <p>Data access role ARN to use in case the new model is encrypted with a customer CMK.</p>
   * @public
   */
  DesiredDataAccessRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel</p>
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the new model.</p>
   * @public
   */
  DesiredModelArn?: string | undefined;
}

/**
 * <p>Data security configuration.</p>
 * @public
 */
export interface UpdateDataSecurityConfig {
  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt the volume.</p>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFlywheelRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel to update.</p>
   * @public
   */
  FlywheelArn: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the active model version.</p>
   * @public
   */
  ActiveModelArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend permission to access the flywheel data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>Flywheel data security configuration.</p>
   * @public
   */
  DataSecurityConfig?: UpdateDataSecurityConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFlywheelResponse {
  /**
   * <p>The flywheel properties.</p>
   * @public
   */
  FlywheelProperties?: FlywheelProperties | undefined;
}
