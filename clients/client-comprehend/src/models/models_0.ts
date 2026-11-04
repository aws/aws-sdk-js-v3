// smithy-typescript generated code
import type {
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
 * An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
 *
 * @public
 */
export interface AugmentedManifestsListItem {
  /**
   * The Amazon S3 location of the augmented manifest file.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The purpose of the data you've provided in the augmented manifest. You can either train or test this data. If you don't specify, the default is train.
   *
   * TRAIN - all of the documents in the manifest will be used for training. If no test documents are provided, Amazon Comprehend will automatically reserve a portion of the training documents for testing.
   *
   * TEST - all of the documents in the manifest will be used for testing.
   *
   * @public
   */
  Split?: Split | undefined;

  /**
   * The JSON attribute that contains the annotations for your training documents. The number of attribute names that you specify depends on whether your augmented manifest file is the output of a single labeling job or a chained labeling job.
   *
   * If your file is the output of a single labeling job, specify the LabelAttributeName key that was used when the job was created in Ground Truth.
   *
   * If your file is the output of a chained labeling job, specify the LabelAttributeName key for one or more jobs in the chain. Each LabelAttributeName key provides the annotations from an individual job.
   *
   * @public
   */
  AttributeNames: string[] | undefined;

  /**
   * The S3 prefix to the annotation files that are referred in the augmented manifest file.
   *
   * @public
   */
  AnnotationDataS3Uri?: string | undefined;

  /**
   * The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file.
   *
   * @public
   */
  SourceDocumentsS3Uri?: string | undefined;

  /**
   * The type of augmented manifest. PlainTextDocument or SemiStructuredDocument. If you don't specify, the default is PlainTextDocument.
   *
   * - `PLAIN_TEXT_DOCUMENT` A document type that represents any unicode text that is encoded in UTF-8.
   * - `SEMI_STRUCTURED_DOCUMENT` A document type with positional and structural context, like a PDF. For training with Amazon Comprehend, only PDFs are supported. For inference, Amazon Comprehend support PDFs, DOCX and TXT.
   *
   * @public
   */
  DocumentType?: AugmentedManifestsDocumentTypeFormat | undefined;
}

/**
 * @public
 */
export interface BatchDetectDominantLanguageRequest {
  /**
   * A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. Each document should contain at least 20 characters. The maximum size of each document is 5 KB.
   *
   * @public
   */
  TextList: string[] | undefined;
}

/**
 * Describes an error that occurred while processing a document in a batch. The operation returns on `BatchItemError` object for each document that contained an error.
 *
 * @public
 */
export interface BatchItemError {
  /**
   * The zero-based index of the document in the input list.
   *
   * @public
   */
  Index?: number | undefined;

  /**
   * The numeric error code of the error.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * A text description of the error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection.
 *
 * @public
 */
export interface DominantLanguage {
  /**
   * The RFC 5646 language code for the dominant language. For more information about RFC 5646, see [Tags for Identifying Languages](https://tools.ietf.org/html/rfc5646) on the *IETF Tools* web site.
   *
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of the detection.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
 *
 * @public
 */
export interface BatchDetectDominantLanguageItemResult {
  /**
   * The zero-based index of the document in the input list.
   *
   * @public
   */
  Index?: number | undefined;

  /**
   * One or more DominantLanguage objects describing the dominant languages in the document.
   *
   * @public
   */
  Languages?: DominantLanguage[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectDominantLanguageResponse {
  /**
   * A list of objects containing the results of the operation. The results are sorted in ascending order by the `Index` field and match the order of the documents in the input list. If all of the documents contain an error, the `ResultList` is empty.
   *
   * @public
   */
  ResultList: BatchDetectDominantLanguageItemResult[] | undefined;

  /**
   * A list containing one object for each document that contained an error. The results are sorted in ascending order by the `Index` field and match the order of the documents in the input list. If there are no errors in the batch, the `ErrorList` is empty.
   *
   * @public
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * Provides additional detail about why the request failed.
 *
 * @public
 */
export interface InvalidRequestDetail {
  /**
   * Reason codes include the following values:
   *
   * - DOCUMENT_SIZE_EXCEEDED - Document size is too large. Check the size of your file and resubmit the request.
   * - UNSUPPORTED_DOC_TYPE - Document type is not supported. Check the file type and resubmit the request.
   * - PAGE_LIMIT_EXCEEDED - Too many pages in the document. Check the number of pages in your file and resubmit the request.
   * - TEXTRACT_ACCESS_DENIED - Access denied to Amazon Textract. Verify that your account has permission to use Amazon Textract API operations and resubmit the request.
   * - NOT_TEXTRACT_JSON - Document is not Amazon Textract JSON format. Verify the format and resubmit the request.
   * - MISMATCHED_TOTAL_PAGE_COUNT - Check the number of pages in your file and resubmit the request.
   * - INVALID_DOCUMENT - Invalid document. Check the file and resubmit the request.
   *
   * @public
   */
  Reason?: InvalidRequestDetailReason | undefined;
}

/**
 * @public
 */
export interface BatchDetectEntitiesRequest {
  /**
   * A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB.
   *
   * @public
   */
  TextList: string[] | undefined;

  /**
   * The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * Nested block contained within a block.
 *
 * @public
 */
export interface ChildBlock {
  /**
   * Unique identifier for the child block.
   *
   * @public
   */
  ChildBlockId?: string | undefined;

  /**
   * Offset of the start of the child block within its parent block.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * Offset of the end of the child block within its parent block.
   *
   * @public
   */
  EndOffset?: number | undefined;
}

/**
 * A reference to a block.
 *
 * @public
 */
export interface BlockReference {
  /**
   * Unique identifier for the block.
   *
   * @public
   */
  BlockId?: string | undefined;

  /**
   * Offset of the start of the block within its parent block.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * Offset of the end of the block within its parent block.
   *
   * @public
   */
  EndOffset?: number | undefined;

  /**
   * List of child blocks within this block.
   *
   * @public
   */
  ChildBlocks?: ChildBlock[] | undefined;
}

/**
 * Provides information about an entity.
 *
 * @public
 */
export interface Entity {
  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of the detection.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The entity type. For entity detection using the built-in model, this field contains one of the standard entity types listed below.
   *
   * For custom entity detection, this field contains one of the entity types that you specified when you trained your custom model.
   *
   * @public
   */
  Type?: EntityType | undefined;

  /**
   * The text of the entity.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The zero-based offset from the beginning of the source text to the first character in the entity.
   *
   * This field is empty for non-text input.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * The zero-based offset from the beginning of the source text to the last character in the entity.
   *
   * This field is empty for non-text input.
   *
   * @public
   */
  EndOffset?: number | undefined;

  /**
   * A reference to each block for this entity. This field is empty for plain-text input.
   *
   * @public
   */
  BlockReferences?: BlockReference[] | undefined;
}

/**
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
 *
 * @public
 */
export interface BatchDetectEntitiesItemResult {
  /**
   * The zero-based index of the document in the input list.
   *
   * @public
   */
  Index?: number | undefined;

  /**
   * One or more Entity objects, one for each entity detected in the document.
   *
   * @public
   */
  Entities?: Entity[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectEntitiesResponse {
  /**
   * A list of objects containing the results of the operation. The results are sorted in ascending order by the `Index` field and match the order of the documents in the input list. If all of the documents contain an error, the `ResultList` is empty.
   *
   * @public
   */
  ResultList: BatchDetectEntitiesItemResult[] | undefined;

  /**
   * A list containing one object for each document that contained an error. The results are sorted in ascending order by the `Index` field and match the order of the documents in the input list. If there are no errors in the batch, the `ErrorList` is empty.
   *
   * @public
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectKeyPhrasesRequest {
  /**
   * A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB.
   *
   * @public
   */
  TextList: string[] | undefined;

  /**
   * The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * Describes a key noun phrase.
 *
 * @public
 */
export interface KeyPhrase {
  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of the detection.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The text of a key noun phrase.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The zero-based offset from the beginning of the source text to the first character in the key phrase.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * The zero-based offset from the beginning of the source text to the last character in the key phrase.
   *
   * @public
   */
  EndOffset?: number | undefined;
}

/**
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
 *
 * @public
 */
export interface BatchDetectKeyPhrasesItemResult {
  /**
   * The zero-based index of the document in the input list.
   *
   * @public
   */
  Index?: number | undefined;

  /**
   * One or more KeyPhrase objects, one for each key phrase detected in the document.
   *
   * @public
   */
  KeyPhrases?: KeyPhrase[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectKeyPhrasesResponse {
  /**
   * A list of objects containing the results of the operation. The results are sorted in ascending order by the `Index` field and match the order of the documents in the input list. If all of the documents contain an error, the `ResultList` is empty.
   *
   * @public
   */
  ResultList: BatchDetectKeyPhrasesItemResult[] | undefined;

  /**
   * A list containing one object for each document that contained an error. The results are sorted in ascending order by the `Index` field and match the order of the documents in the input list. If there are no errors in the batch, the `ErrorList` is empty.
   *
   * @public
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectSentimentRequest {
  /**
   * A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB.
   *
   * @public
   */
  TextList: string[] | undefined;

  /**
   * The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments.
 *
 * @public
 */
export interface SentimentScore {
  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the `POSITIVE` sentiment.
   *
   * @public
   */
  Positive?: number | undefined;

  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the `NEGATIVE` sentiment.
   *
   * @public
   */
  Negative?: number | undefined;

  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the `NEUTRAL` sentiment.
   *
   * @public
   */
  Neutral?: number | undefined;

  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the `MIXED` sentiment.
   *
   * @public
   */
  Mixed?: number | undefined;
}

/**
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
 *
 * @public
 */
export interface BatchDetectSentimentItemResult {
  /**
   * The zero-based index of the document in the input list.
   *
   * @public
   */
  Index?: number | undefined;

  /**
   * The sentiment detected in the document.
   *
   * @public
   */
  Sentiment?: SentimentType | undefined;

  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of its sentiment detection.
   *
   * @public
   */
  SentimentScore?: SentimentScore | undefined;
}

/**
 * @public
 */
export interface BatchDetectSentimentResponse {
  /**
   * A list of objects containing the results of the operation. The results are sorted in ascending order by the `Index` field and match the order of the documents in the input list. If all of the documents contain an error, the `ResultList` is empty.
   *
   * @public
   */
  ResultList: BatchDetectSentimentItemResult[] | undefined;

  /**
   * A list containing one object for each document that contained an error. The results are sorted in ascending order by the `Index` field and match the order of the documents in the input list. If there are no errors in the batch, the `ErrorList` is empty.
   *
   * @public
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectSyntaxRequest {
  /**
   * A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size for each document is 5 KB.
   *
   * @public
   */
  TextList: string[] | undefined;

  /**
   * The language of the input documents. You can specify any of the following languages supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), or Portuguese ("pt"). All documents must be in the same language.
   *
   * @public
   */
  LanguageCode: SyntaxLanguageCode | undefined;
}

/**
 * Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see [Syntax](https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html) in the Comprehend Developer Guide.
 *
 * @public
 */
export interface PartOfSpeechTag {
  /**
   * Identifies the part of speech that the token represents.
   *
   * @public
   */
  Tag?: PartOfSpeechTagType | undefined;

  /**
   * The confidence that Amazon Comprehend has that the part of speech was correctly identified.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text.
 *
 * @public
 */
export interface SyntaxToken {
  /**
   * A unique identifier for a token.
   *
   * @public
   */
  TokenId?: number | undefined;

  /**
   * The word that was recognized in the source text.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The zero-based offset from the beginning of the source text to the first character in the word.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * The zero-based offset from the beginning of the source text to the last character in the word.
   *
   * @public
   */
  EndOffset?: number | undefined;

  /**
   * Provides the part of speech label and the confidence level that Amazon Comprehend has that the part of speech was correctly identified. For more information, see [Syntax](https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html) in the Comprehend Developer Guide.
   *
   * @public
   */
  PartOfSpeech?: PartOfSpeechTag | undefined;
}

/**
 * The result of calling the operation. The operation returns one object that is successfully processed by the operation.
 *
 * @public
 */
export interface BatchDetectSyntaxItemResult {
  /**
   * The zero-based index of the document in the input list.
   *
   * @public
   */
  Index?: number | undefined;

  /**
   * The syntax tokens for the words in the document, one token for each word.
   *
   * @public
   */
  SyntaxTokens?: SyntaxToken[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectSyntaxResponse {
  /**
   * A list of objects containing the results of the operation. The results are sorted in ascending order by the `Index` field and match the order of the documents in the input list. If all of the documents contain an error, the `ResultList` is empty.
   *
   * @public
   */
  ResultList: BatchDetectSyntaxItemResult[] | undefined;

  /**
   * A list containing one object for each document that contained an error. The results are sorted in ascending order by the `Index` field and match the order of the documents in the input list. If there are no errors in the batch, the `ErrorList` is empty.
   *
   * @public
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectTargetedSentimentRequest {
  /**
   * A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB.
   *
   * @public
   */
  TextList: string[] | undefined;

  /**
   * The language of the input documents. Currently, English is the only supported language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * Contains the sentiment and sentiment score for one mention of an entity.
 *
 * For more information about targeted sentiment, see [Targeted sentiment](https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html) in the *Amazon Comprehend Developer Guide*.
 *
 * @public
 */
export interface MentionSentiment {
  /**
   * The sentiment of the mention.
   *
   * @public
   */
  Sentiment?: SentimentType | undefined;

  /**
   * Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments.
   *
   * @public
   */
  SentimentScore?: SentimentScore | undefined;
}

/**
 * Information about one mention of an entity. The mention information includes the location of the mention in the text and the sentiment of the mention.
 *
 * For more information about targeted sentiment, see [Targeted sentiment](https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html) in the *Amazon Comprehend Developer Guide*.
 *
 * @public
 */
export interface TargetedSentimentMention {
  /**
   * Model confidence that the entity is relevant. Value range is zero to one, where one is highest confidence.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The confidence that all the entities mentioned in the group relate to the same entity.
   *
   * @public
   */
  GroupScore?: number | undefined;

  /**
   * The text in the document that identifies the entity.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The type of the entity. Amazon Comprehend supports a variety of [entity types](https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html#how-targeted-sentiment-entities).
   *
   * @public
   */
  Type?: TargetedSentimentEntityType | undefined;

  /**
   * Contains the sentiment and sentiment score for the mention.
   *
   * @public
   */
  MentionSentiment?: MentionSentiment | undefined;

  /**
   * The offset into the document text where the mention begins.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * The offset into the document text where the mention ends.
   *
   * @public
   */
  EndOffset?: number | undefined;
}

/**
 * Information about one of the entities found by targeted sentiment analysis.
 *
 * For more information about targeted sentiment, see [Targeted sentiment](https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html) in the *Amazon Comprehend Developer Guide*.
 *
 * @public
 */
export interface TargetedSentimentEntity {
  /**
   * One or more index into the Mentions array that provides the best name for the entity group.
   *
   * @public
   */
  DescriptiveMentionIndex?: number[] | undefined;

  /**
   * An array of mentions of the entity in the document. The array represents a co-reference group. See [Co-reference group](https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html#how-targeted-sentiment-values) for an example.
   *
   * @public
   */
  Mentions?: TargetedSentimentMention[] | undefined;
}

/**
 * Analysis results for one of the documents in the batch.
 *
 * @public
 */
export interface BatchDetectTargetedSentimentItemResult {
  /**
   * The zero-based index of this result in the input list.
   *
   * @public
   */
  Index?: number | undefined;

  /**
   * An array of targeted sentiment entities.
   *
   * @public
   */
  Entities?: TargetedSentimentEntity[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectTargetedSentimentResponse {
  /**
   * A list of objects containing the results of the operation. The results are sorted in ascending order by the `Index` field and match the order of the documents in the input list. If all of the documents contain an error, the `ResultList` is empty.
   *
   * @public
   */
  ResultList: BatchDetectTargetedSentimentItemResult[] | undefined;

  /**
   * List of errors that the operation can return.
   *
   * @public
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * The bounding box around the detected page or around an element on a document page. The left (x-coordinate) and top (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0).
 *
 * For additional information, see [BoundingBox](https://docs.aws.amazon.com/textract/latest/dg/API_BoundingBox.html) in the Amazon Textract API reference.
 *
 * @public
 */
export interface BoundingBox {
  /**
   * The height of the bounding box as a ratio of the overall document page height.
   *
   * @public
   */
  Height?: number | undefined;

  /**
   * The left coordinate of the bounding box as a ratio of overall document page width.
   *
   * @public
   */
  Left?: number | undefined;

  /**
   * The top coordinate of the bounding box as a ratio of overall document page height.
   *
   * @public
   */
  Top?: number | undefined;

  /**
   * The width of the bounding box as a ratio of the overall document page width.
   *
   * @public
   */
  Width?: number | undefined;
}

/**
 * The X and Y coordinates of a point on a document page.
 *
 * For additional information, see [Point](https://docs.aws.amazon.com/textract/latest/dg/API_Point.html) in the Amazon Textract API reference.
 *
 * @public
 */
export interface Point {
  /**
   * The value of the X coordinate for a point on a polygon
   *
   * @public
   */
  X?: number | undefined;

  /**
   * The value of the Y coordinate for a point on a polygon
   *
   * @public
   */
  Y?: number | undefined;
}

/**
 * Information about the location of items on a document page.
 *
 * For additional information, see [Geometry](https://docs.aws.amazon.com/textract/latest/dg/API_Geometry.html) in the Amazon Textract API reference.
 *
 * @public
 */
export interface Geometry {
  /**
   * An axis-aligned coarse representation of the location of the recognized item on the document page.
   *
   * @public
   */
  BoundingBox?: BoundingBox | undefined;

  /**
   * Within the bounding box, a fine-grained polygon around the recognized item.
   *
   * @public
   */
  Polygon?: Point[] | undefined;
}

/**
 * List of child blocks for the current block.
 *
 * @public
 */
export interface RelationshipsListItem {
  /**
   * Identifers of the child blocks.
   *
   * @public
   */
  Ids?: string[] | undefined;

  /**
   * Only supported relationship is a child relationship.
   *
   * @public
   */
  Type?: RelationshipType | undefined;
}

/**
 * Information about each word or line of text in the input document.
 *
 * For additional information, see [Block](https://docs.aws.amazon.com/textract/latest/dg/API_Block.html) in the Amazon Textract API reference.
 *
 * @public
 */
export interface Block {
  /**
   * Unique identifier for the block.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The block represents a line of text or one word of text.
   *
   * - WORD - A word that's detected on a document page. A word is one or more ISO basic Latin script characters that aren't separated by spaces.
   * - LINE - A string of tab-delimited, contiguous words that are detected on a document page
   *
   * @public
   */
  BlockType?: BlockType | undefined;

  /**
   * The word or line of text extracted from the block.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * Page number where the block appears.
   *
   * @public
   */
  Page?: number | undefined;

  /**
   * Co-ordinates of the rectangle or polygon that contains the text.
   *
   * @public
   */
  Geometry?: Geometry | undefined;

  /**
   * A list of child blocks of the current block. For example, a LINE object has child blocks for each WORD block that's part of the line of text.
   *
   * @public
   */
  Relationships?: RelationshipsListItem[] | undefined;
}

/**
 * Describes the result metrics for the test data associated with an documentation classifier.
 *
 * @public
 */
export interface ClassifierEvaluationMetrics {
  /**
   * The fraction of the labels that were correct recognized. It is computed by dividing the number of labels in the test documents that were correctly recognized by the total number of labels in the test documents.
   *
   * @public
   */
  Accuracy?: number | undefined;

  /**
   * A measure of the usefulness of the classifier results in the test data. High precision means that the classifier returned substantially more relevant results than irrelevant ones.
   *
   * @public
   */
  Precision?: number | undefined;

  /**
   * A measure of how complete the classifier results are for the test data. High recall means that the classifier returned most of the relevant results.
   *
   * @public
   */
  Recall?: number | undefined;

  /**
   * A measure of how accurate the classifier results are for the test data. It is derived from the `Precision` and `Recall` values. The `F1Score` is the harmonic average of the two scores. The highest score is 1, and the worst score is 0.
   *
   * @public
   */
  F1Score?: number | undefined;

  /**
   * A measure of the usefulness of the recognizer results in the test data. High precision means that the recognizer returned substantially more relevant results than irrelevant ones. Unlike the Precision metric which comes from averaging the precision of all available labels, this is based on the overall score of all precision scores added together.
   *
   * @public
   */
  MicroPrecision?: number | undefined;

  /**
   * A measure of how complete the classifier results are for the test data. High recall means that the classifier returned most of the relevant results. Specifically, this indicates how many of the correct categories in the text that the model can predict. It is a percentage of correct categories in the text that can found. Instead of averaging the recall scores of all labels (as with Recall), micro Recall is based on the overall score of all recall scores added together.
   *
   * @public
   */
  MicroRecall?: number | undefined;

  /**
   * A measure of how accurate the classifier results are for the test data. It is a combination of the `Micro Precision` and `Micro Recall` values. The `Micro F1Score` is the harmonic mean of the two scores. The highest score is 1, and the worst score is 0.
   *
   * @public
   */
  MicroF1Score?: number | undefined;

  /**
   * Indicates the fraction of labels that are incorrectly predicted. Also seen as the fraction of wrong labels compared to the total number of labels. Scores closer to zero are better.
   *
   * @public
   */
  HammingLoss?: number | undefined;
}

/**
 * Provides information about a document classifier.
 *
 * @public
 */
export interface ClassifierMetadata {
  /**
   * The number of labels in the input data.
   *
   * @public
   */
  NumberOfLabels?: number | undefined;

  /**
   * The number of documents in the input data that were used to train the classifier. Typically this is 80 to 90 percent of the input documents.
   *
   * @public
   */
  NumberOfTrainedDocuments?: number | undefined;

  /**
   * The number of documents in the input data that were used to test the classifier. Typically this is 10 to 20 percent of the input documents, up to 10,000 documents.
   *
   * @public
   */
  NumberOfTestDocuments?: number | undefined;

  /**
   * Describes the result metrics for the test data associated with an documentation classifier.
   *
   * @public
   */
  EvaluationMetrics?: ClassifierEvaluationMetrics | undefined;
}

/**
 * Provides configuration parameters to override the default actions for extracting text from PDF documents and image files.
 *
 * By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type:
 *
 * - **Word files** - Amazon Comprehend parser extracts the text.
 * - **Digital PDF files** - Amazon Comprehend parser extracts the text.
 * - **Image files and scanned PDF files** - Amazon Comprehend uses the Amazon Textract `DetectDocumentText` API to extract the text.
 *
 * `DocumentReaderConfig` does not apply to plain text files or Word files.
 *
 * For image files and PDF documents, you can override these default actions using the fields listed below. For more information, see [Setting text extraction options](https://docs.aws.amazon.com/comprehend/latest/dg/idp-set-textract-options.html) in the Comprehend Developer Guide.
 *
 * @public
 */
export interface DocumentReaderConfig {
  /**
   * This field defines the Amazon Textract API operation that Amazon Comprehend uses to extract text from PDF files and image files. Enter one of the following values:
   *
   * - `TEXTRACT_DETECT_DOCUMENT_TEXT` - The Amazon Comprehend service uses the `DetectDocumentText` API operation.
   * - `TEXTRACT_ANALYZE_DOCUMENT` - The Amazon Comprehend service uses the `AnalyzeDocument` API operation.
   *
   * @public
   */
  DocumentReadAction: DocumentReadAction | undefined;

  /**
   * Determines the text extraction actions for PDF files. Enter one of the following values:
   *
   * - `SERVICE_DEFAULT` - use the Amazon Comprehend service defaults for PDF files.
   * - `FORCE_DOCUMENT_READ_ACTION` - Amazon Comprehend uses the Textract API specified by DocumentReadAction for all PDF files, including digital PDF files.
   *
   * @public
   */
  DocumentReadMode?: DocumentReadMode | undefined;

  /**
   * Specifies the type of Amazon Textract features to apply. If you chose `TEXTRACT_ANALYZE_DOCUMENT` as the read action, you must specify one or both of the following values:
   *
   * - `TABLES` - Returns additional information about any tables that are detected in the input document.
   * - `FORMS` - Returns additional information about any forms that are detected in the input document.
   *
   * @public
   */
  FeatureTypes?: DocumentReadFeatureTypes[] | undefined;
}

/**
 * @public
 */
export interface ClassifyDocumentRequest {
  /**
   * The document text to be analyzed. If you enter text using this parameter, do not use the `Bytes` parameter.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the endpoint.
   *
   * For prompt safety classification, Amazon Comprehend provides the endpoint ARN. For more information about prompt safety classifiers, see [Prompt safety classification](https://docs.aws.amazon.com/comprehend/latest/dg/trust-safety.html#prompt-classification) in the *Amazon Comprehend Developer Guide*
   *
   * For custom classification, you create an endpoint for your custom model. For more information, see [Using Amazon Comprehend endpoints](https://docs.aws.amazon.com/comprehend/latest/dg/using-endpoints.html).
   *
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * Use the `Bytes` parameter to input a text, PDF, Word or image file.
   *
   * When you classify a document using a custom model, you can also use the `Bytes` parameter to input an Amazon Textract `DetectDocumentText` or `AnalyzeDocument` output file.
   *
   * To classify a document using the prompt safety classifier, use the `Text` parameter for input.
   *
   * Provide the input document as a sequence of base64-encoded bytes. If your code uses an Amazon Web Services SDK to classify documents, the SDK may encode the document file bytes for you.
   *
   * The maximum length of this field depends on the input document type. For details, see [Inputs for real-time custom analysis](https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync.html) in the Comprehend Developer Guide.
   *
   * If you use the `Bytes` parameter, do not use the `Text` parameter.
   *
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * Provides configuration parameters to override the default actions for extracting text from PDF documents and image files.
   *
   * @public
   */
  DocumentReaderConfig?: DocumentReaderConfig | undefined;
}

/**
 * Specifies the class that categorizes the document being analyzed
 *
 * @public
 */
export interface DocumentClass {
  /**
   * The name of the class.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The confidence score that Amazon Comprehend has this class correctly attributed.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * Page number in the input document. This field is present in the response only if your request includes the `Byte` parameter.
   *
   * @public
   */
  Page?: number | undefined;
}

/**
 * Array of the number of characters extracted from each page.
 *
 * @public
 */
export interface ExtractedCharactersListItem {
  /**
   * Page number.
   *
   * @public
   */
  Page?: number | undefined;

  /**
   * Number of characters extracted from each page.
   *
   * @public
   */
  Count?: number | undefined;
}

/**
 * Information about the document, discovered during text extraction.
 *
 * @public
 */
export interface DocumentMetadata {
  /**
   * Number of pages in the document.
   *
   * @public
   */
  Pages?: number | undefined;

  /**
   * List of pages in the document, with the number of characters extracted from each page.
   *
   * @public
   */
  ExtractedCharacters?: ExtractedCharactersListItem[] | undefined;
}

/**
 * Document type for each page in the document.
 *
 * @public
 */
export interface DocumentTypeListItem {
  /**
   * Page number.
   *
   * @public
   */
  Page?: number | undefined;

  /**
   * Document type.
   *
   * @public
   */
  Type?: DocumentType | undefined;
}

/**
 * Text extraction encountered one or more page-level errors in the input document.
 *
 * The `ErrorCode` contains one of the following values:
 *
 * - TEXTRACT_BAD_PAGE - Amazon Textract cannot read the page. For more information about page limits in Amazon Textract, see [Page Quotas in Amazon Textract](https://docs.aws.amazon.com/textract/latest/dg/limits-document.html).
 * - TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED - The number of requests exceeded your throughput limit. For more information about throughput quotas in Amazon Textract, see [Default quotas in Amazon Textract](https://docs.aws.amazon.com/textract/latest/dg/limits-quotas-explained.html).
 * - PAGE_CHARACTERS_EXCEEDED - Too many text characters on the page (10,000 characters maximum).
 * - PAGE_SIZE_EXCEEDED - The maximum page size is 10 MB.
 * - INTERNAL_SERVER_ERROR - The request encountered a service issue. Try the API request again.
 *
 * @public
 */
export interface ErrorsListItem {
  /**
   * Page number where the error occurred.
   *
   * @public
   */
  Page?: number | undefined;

  /**
   * Error code for the cause of the error.
   *
   * @public
   */
  ErrorCode?: PageBasedErrorCode | undefined;

  /**
   * Text message explaining the reason for the error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Specifies one of the label or labels that categorize the document being analyzed.
 *
 * @public
 */
export interface DocumentLabel {
  /**
   * The name of the label.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The confidence score that Amazon Comprehend has this label correctly attributed.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * Page number where the label occurs. This field is present in the response only if your request includes the `Byte` parameter.
   *
   * @public
   */
  Page?: number | undefined;
}

/**
 * The system identified one of the following warnings while processing the input document:
 *
 * - The document to classify is plain text, but the classifier is a native document model.
 * - The document to classify is semi-structured, but the classifier is a plain-text model.
 *
 * @public
 */
export interface WarningsListItem {
  /**
   * Page number in the input document.
   *
   * @public
   */
  Page?: number | undefined;

  /**
   * The type of warning.
   *
   * @public
   */
  WarnCode?: PageBasedWarningCode | undefined;

  /**
   * Text message associated with the warning.
   *
   * @public
   */
  WarnMessage?: string | undefined;
}

/**
 * @public
 */
export interface ClassifyDocumentResponse {
  /**
   * The classes used by the document being analyzed. These are used for models trained in multi-class mode. Individual classes are mutually exclusive and each document is expected to have only a single class assigned to it. For example, an animal can be a dog or a cat, but not both at the same time.
   *
   * For prompt safety classification, the response includes only two classes (SAFE_PROMPT and UNSAFE_PROMPT), along with a confidence score for each class. The value range of the score is zero to one, where one is the highest confidence.
   *
   * @public
   */
  Classes?: DocumentClass[] | undefined;

  /**
   * The labels used in the document being analyzed. These are used for multi-label trained models. Individual labels represent different categories that are related in some manner and are not mutually exclusive. For example, a movie can be just an action movie, or it can be an action movie, a science fiction movie, and a comedy, all at the same time.
   *
   * @public
   */
  Labels?: DocumentLabel[] | undefined;

  /**
   * Extraction information about the document. This field is present in the response only if your request includes the `Byte` parameter.
   *
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * The document type for each page in the input document. This field is present in the response only if your request includes the `Byte` parameter.
   *
   * @public
   */
  DocumentType?: DocumentTypeListItem[] | undefined;

  /**
   * Page-level errors that the system detected while processing the input document. The field is empty if the system encountered no errors.
   *
   * @public
   */
  Errors?: ErrorsListItem[] | undefined;

  /**
   * Warnings detected while processing the input document. The response includes a warning if there is a mismatch between the input document type and the model type associated with the endpoint that you specified. The response can also include warnings for individual pages that have a mismatch.
   *
   * The field is empty if the system generated no warnings.
   *
   * @public
   */
  Warnings?: WarningsListItem[] | undefined;
}

/**
 * @public
 */
export interface ContainsPiiEntitiesRequest {
  /**
   * A UTF-8 text string. The maximum string size is 100 KB.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The language of the input documents.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * Specifies one of the label or labels that categorize the personally identifiable information (PII) entity being analyzed.
 *
 * @public
 */
export interface EntityLabel {
  /**
   * The name of the label.
   *
   * @public
   */
  Name?: PiiEntityType | undefined;

  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of the detection.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * @public
 */
export interface ContainsPiiEntitiesResponse {
  /**
   * The labels used in the document being analyzed. Individual labels represent personally identifiable information (PII) entity types.
   *
   * @public
   */
  Labels?: EntityLabel[] | undefined;
}

/**
 * An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
 *
 * @public
 */
export interface DatasetAugmentedManifestsListItem {
  /**
   * The JSON attribute that contains the annotations for your training documents. The number of attribute names that you specify depends on whether your augmented manifest file is the output of a single labeling job or a chained labeling job.
   *
   * If your file is the output of a single labeling job, specify the LabelAttributeName key that was used when the job was created in Ground Truth.
   *
   * If your file is the output of a chained labeling job, specify the LabelAttributeName key for one or more jobs in the chain. Each LabelAttributeName key provides the annotations from an individual job.
   *
   * @public
   */
  AttributeNames: string[] | undefined;

  /**
   * The Amazon S3 location of the augmented manifest file.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The S3 prefix to the annotation files that are referred in the augmented manifest file.
   *
   * @public
   */
  AnnotationDataS3Uri?: string | undefined;

  /**
   * The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file.
   *
   * @public
   */
  SourceDocumentsS3Uri?: string | undefined;

  /**
   * The type of augmented manifest. If you don't specify, the default is PlainTextDocument.
   *
   * `PLAIN_TEXT_DOCUMENT` A document type that represents any unicode text that is encoded in UTF-8.
   *
   * @public
   */
  DocumentType?: AugmentedManifestsDocumentTypeFormat | undefined;
}

/**
 * Describes the dataset input data configuration for a document classifier model.
 *
 * For more information on how the input file is formatted, see [Preparing training data](https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html) in the Comprehend Developer Guide.
 *
 * @public
 */
export interface DatasetDocumentClassifierInputDataConfig {
  /**
   * The Amazon S3 URI for the input data. The S3 bucket must be in the same Region as the API endpoint that you are calling. The URI can point to a single input file or it can provide the prefix for a collection of input files.
   *
   * For example, if you use the URI `S3://bucketName/prefix`, if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input.
   *
   * This parameter is required if you set `DataFormat` to `COMPREHEND_CSV`.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * Indicates the delimiter used to separate each label for training a multi-label classifier. The default delimiter between labels is a pipe (|). You can use a different character as a delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the training documents use a delimiter other than the default or the delimiter you specify, the labels on that line will be combined to make a single unique label, such as LABELLABELLABEL.
   *
   * @public
   */
  LabelDelimiter?: string | undefined;
}

/**
 * Describes the annotations associated with a entity recognizer.
 *
 * @public
 */
export interface DatasetEntityRecognizerAnnotations {
  /**
   * Specifies the Amazon S3 location where the training documents for an entity recognizer are located. The URI must be in the same Region as the API endpoint that you are calling.
   *
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * Describes the documents submitted with a dataset for an entity recognizer model.
 *
 * @public
 */
export interface DatasetEntityRecognizerDocuments {
  /**
   * Specifies the Amazon S3 location where the documents for the dataset are located.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * Specifies how the text in an input file should be processed. This is optional, and the default is ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document. Use this option when you are processing large documents, such as newspaper articles or scientific papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document. Use this option when you are processing many short documents, such as text messages.
   *
   * @public
   */
  InputFormat?: InputFormat | undefined;
}

/**
 * Describes the dataset entity list for an entity recognizer model.
 *
 * For more information on how the input file is formatted, see [Preparing training data](https://docs.aws.amazon.com/comprehend/latest/dg/prep-training-data-cer.html) in the Comprehend Developer Guide.
 *
 * @public
 */
export interface DatasetEntityRecognizerEntityList {
  /**
   * Specifies the Amazon S3 location where the entity list is located.
   *
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * Specifies the format and location of the input data. You must provide either the `Annotations` parameter or the `EntityList` parameter.
 *
 * @public
 */
export interface DatasetEntityRecognizerInputDataConfig {
  /**
   * The S3 location of the annotation documents for your custom entity recognizer.
   *
   * @public
   */
  Annotations?: DatasetEntityRecognizerAnnotations | undefined;

  /**
   * The format and location of the training documents for your custom entity recognizer.
   *
   * @public
   */
  Documents: DatasetEntityRecognizerDocuments | undefined;

  /**
   * The S3 location of the entity list for your custom entity recognizer.
   *
   * @public
   */
  EntityList?: DatasetEntityRecognizerEntityList | undefined;
}

/**
 * Specifies the format and location of the input data for the dataset.
 *
 * @public
 */
export interface DatasetInputDataConfig {
  /**
   * A list of augmented manifest files that provide training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
   *
   * @public
   */
  AugmentedManifests?: DatasetAugmentedManifestsListItem[] | undefined;

  /**
   * `COMPREHEND_CSV`: The data format is a two-column CSV file, where the first column contains labels and the second column contains documents.
   *
   * `AUGMENTED_MANIFEST`: The data format
   *
   * @public
   */
  DataFormat?: DatasetDataFormat | undefined;

  /**
   * The input properties for training a document classifier model.
   *
   * For more information on how the input file is formatted, see [Preparing training data](https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html) in the Comprehend Developer Guide.
   *
   * @public
   */
  DocumentClassifierInputDataConfig?: DatasetDocumentClassifierInputDataConfig | undefined;

  /**
   * The input properties for training an entity recognizer model.
   *
   * @public
   */
  EntityRecognizerInputDataConfig?: DatasetEntityRecognizerInputDataConfig | undefined;
}

/**
 * A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by a particular department.
 *
 * @public
 */
export interface Tag {
  /**
   * The initial part of a key-value pair that forms a tag associated with a given resource. For instance, if you want to show which resources are used by which departments, you might use “Department” as the key portion of the pair, with multiple possible values such as “sales,” “legal,” and “administration.”
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The second part of a key-value pair that forms a tag associated with a given resource. For instance, if you want to show which resources are used by which departments, you might use “Department” as the initial (key) portion of the pair, with a value of “sales” to indicate the sales department.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * The Amazon Resource Number (ARN) of the flywheel of the flywheel to receive the data.
   *
   * @public
   */
  FlywheelArn: string | undefined;

  /**
   * Name of the dataset.
   *
   * @public
   */
  DatasetName: string | undefined;

  /**
   * The dataset type. You can specify that the data in a dataset is for training the model or for testing the model.
   *
   * @public
   */
  DatasetType?: DatasetType | undefined;

  /**
   * Description of the dataset.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the input data configuration. The type of input data varies based on the format of the input and whether the data is for a classifier model or an entity recognition model.
   *
   * @public
   */
  InputDataConfig: DatasetInputDataConfig | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Tags for the dataset.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * The ARN of the dataset.
   *
   * @public
   */
  DatasetArn?: string | undefined;
}

/**
 * The location of the training documents. This parameter is required in a request to create a semi-structured document classification model.
 *
 * @public
 */
export interface DocumentClassifierDocuments {
  /**
   * The S3 URI location of the training documents specified in the S3Uri CSV file.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The S3 URI location of the test documents included in the TestS3Uri CSV file. This field is not required if you do not specify a test CSV file.
   *
   * @public
   */
  TestS3Uri?: string | undefined;
}

/**
 * The input properties for training a document classifier.
 *
 * For more information on how the input file is formatted, see [Preparing training data](https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html) in the Comprehend Developer Guide.
 *
 * @public
 */
export interface DocumentClassifierInputDataConfig {
  /**
   * The format of your training data:
   *
   * - `COMPREHEND_CSV`: A two-column CSV file, where labels are provided in the first column, and documents are provided in the second. If you use this value, you must provide the `S3Uri` parameter in your request.
   * - `AUGMENTED_MANIFEST`: A labeled dataset that is produced by Amazon SageMaker Ground Truth. This file is in JSON lines format. Each line is a complete JSON object that contains a training document and its associated labels.
   *
   *   If you use this value, you must provide the `AugmentedManifests` parameter in your request.
   *
   * If you don't specify a value, Amazon Comprehend uses `COMPREHEND_CSV` as the default.
   *
   * @public
   */
  DataFormat?: DocumentClassifierDataFormat | undefined;

  /**
   * The Amazon S3 URI for the input data. The S3 bucket must be in the same Region as the API endpoint that you are calling. The URI can point to a single input file or it can provide the prefix for a collection of input files.
   *
   * For example, if you use the URI `S3://bucketName/prefix`, if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input.
   *
   * This parameter is required if you set `DataFormat` to `COMPREHEND_CSV`.
   *
   * @public
   */
  S3Uri?: string | undefined;

  /**
   * This specifies the Amazon S3 location that contains the test annotations for the document classifier. The URI must be in the same Amazon Web Services Region as the API endpoint that you are calling.
   *
   * @public
   */
  TestS3Uri?: string | undefined;

  /**
   * Indicates the delimiter used to separate each label for training a multi-label classifier. The default delimiter between labels is a pipe (|). You can use a different character as a delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the training documents use a delimiter other than the default or the delimiter you specify, the labels on that line will be combined to make a single unique label, such as LABELLABELLABEL.
   *
   * @public
   */
  LabelDelimiter?: string | undefined;

  /**
   * A list of augmented manifest files that provide training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
   *
   * This parameter is required if you set `DataFormat` to `AUGMENTED_MANIFEST`.
   *
   * @public
   */
  AugmentedManifests?: AugmentedManifestsListItem[] | undefined;

  /**
   * The type of input documents for training the model. Provide plain-text documents to create a plain-text model, and provide semi-structured documents to create a native document model.
   *
   * @public
   */
  DocumentType?: DocumentClassifierDocumentTypeFormat | undefined;

  /**
   * The S3 location of the training documents. This parameter is required in a request to create a native document model.
   *
   * @public
   */
  Documents?: DocumentClassifierDocuments | undefined;

  /**
   * Provides configuration parameters to override the default actions for extracting text from PDF documents and image files.
   *
   * By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type:
   *
   * - **Word files** - Amazon Comprehend parser extracts the text.
   * - **Digital PDF files** - Amazon Comprehend parser extracts the text.
   * - **Image files and scanned PDF files** - Amazon Comprehend uses the Amazon Textract `DetectDocumentText` API to extract the text.
   *
   * `DocumentReaderConfig` does not apply to plain text files or Word files.
   *
   * For image files and PDF documents, you can override these default actions using the fields listed below. For more information, see [Setting text extraction options](https://docs.aws.amazon.com/comprehend/latest/dg/idp-set-textract-options.html) in the Comprehend Developer Guide.
   *
   * @public
   */
  DocumentReaderConfig?: DocumentReaderConfig | undefined;
}

/**
 * Provide the location for output data from a custom classifier job. This field is mandatory if you are training a native document model.
 *
 * @public
 */
export interface DocumentClassifierOutputDataConfig {
  /**
   * When you use the `OutputDataConfig` object while creating a custom classifier, you specify the Amazon S3 location where you want to write the confusion matrix and other output files. The URI must be in the same Region as the API endpoint that you are calling. The location is used as the prefix for the actual location of this output file.
   *
   * When the custom classifier job is finished, the service creates the output file in a directory specific to the job. The `S3Uri` field contains the location of the output file, called `output.tar.gz`. It is a compressed archive that contains the confusion matrix.
   *
   * @public
   */
  S3Uri?: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output results from an analysis job. The KmsKeyId can be one of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - KMS Key Alias: `"alias/ExampleAlias"`
   * - ARN of a KMS Key Alias: `"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"`
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon S3 prefix for the data lake location of the flywheel statistics.
   *
   * @public
   */
  FlywheelStatsS3Prefix?: string | undefined;
}

/**
 * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
 *
 * @public
 */
export interface VpcConfig {
  /**
   * The ID number for a security group on an instance of your private VPC. Security groups on your VPC function serve as a virtual firewall to control inbound and outbound traffic and provides security for the resources that you’ll be accessing on the VPC. This ID number is preceded by "sg-", for instance: "sg-03b388029b0a285ea". For more information, see [Security Groups for your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html).
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * The ID for each subnet being used in your private VPC. This subnet is a subset of the a range of IPv4 addresses used by the VPC and is specific to a given availability zone in the VPC’s Region. This ID number is preceded by "subnet-", for instance: "subnet-04ccf456919e69055". For more information, see [VPCs and Subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html).
   *
   * @public
   */
  Subnets: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDocumentClassifierRequest {
  /**
   * The name of the document classifier.
   *
   * @public
   */
  DocumentClassifierName: string | undefined;

  /**
   * The version name given to the newly created classifier. Version names can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same classifier name in the Amazon Web Services account/Amazon Web Services Region.
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * Tags to associate with the document classifier. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the format and location of the input data for the job.
   *
   * @public
   */
  InputDataConfig: DocumentClassifierInputDataConfig | undefined;

  /**
   * Specifies the location for the output files from a custom classifier job. This parameter is required for a request that creates a native document model.
   *
   * @public
   */
  OutputDataConfig?: DocumentClassifierOutputDataConfig | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The language of the input documents. You can specify any of the languages supported by Amazon Comprehend. All documents must be in the same language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Indicates the mode in which the classifier will be trained. The classifier can be trained in multi-class (single-label) mode or multi-label mode. Multi-class mode identifies a single class label for each document and multi-label mode identifies one or more class labels for each document. Multiple labels for an individual document are separated by a delimiter. The default delimiter between labels is a pipe (|).
   *
   * @public
   */
  Mode?: DocumentClassifierMode | undefined;

  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * The resource-based policy to attach to your custom document classifier model. You can use this policy to allow another Amazon Web Services account to import your custom model.
   *
   * Provide your policy as a JSON body that you enter as a UTF-8 encoded string without line breaks. To provide valid JSON, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy:
   *
   * `"\{\"attribute\": \"value\", \"attribute\": [\"value\"]\}"`
   *
   * To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values:
   *
   * `'\{"attribute": "value", "attribute": ["value"]\}'`
   *
   * @public
   */
  ModelPolicy?: string | undefined;
}

/**
 * @public
 */
export interface CreateDocumentClassifierResponse {
  /**
   * The Amazon Resource Name (ARN) that identifies the document classifier.
   *
   * @public
   */
  DocumentClassifierArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEndpointRequest {
  /**
   * This is the descriptive suffix that becomes part of the `EndpointArn` used for all subsequent requests to this resource.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the model to which the endpoint will be attached.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second.
   *
   * @public
   */
  DesiredInferenceUnits: number | undefined;

  /**
   * An idempotency token provided by the customer. If this token matches a previous endpoint creation request, Amazon Comprehend will not return a `ResourceInUseException`.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Tags to associate with the endpoint. A tag is a key-value pair that adds metadata to the endpoint. For example, a tag with "Sales" as the key might be added to an endpoint to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId).
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the flywheel to which the endpoint will be attached.
   *
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEndpointResponse {
  /**
   * The Amazon Resource Number (ARN) of the endpoint being created.
   *
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the model to which the endpoint is attached.
   *
   * @public
   */
  ModelArn?: string | undefined;
}

/**
 * Describes the annotations associated with a entity recognizer.
 *
 * @public
 */
export interface EntityRecognizerAnnotations {
  /**
   * Specifies the Amazon S3 location where the annotations for an entity recognizer are located. The URI must be in the same Region as the API endpoint that you are calling.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * Specifies the Amazon S3 location where the test annotations for an entity recognizer are located. The URI must be in the same Region as the API endpoint that you are calling.
   *
   * @public
   */
  TestS3Uri?: string | undefined;
}

/**
 * Describes the training documents submitted with an entity recognizer.
 *
 * @public
 */
export interface EntityRecognizerDocuments {
  /**
   * Specifies the Amazon S3 location where the training documents for an entity recognizer are located. The URI must be in the same Region as the API endpoint that you are calling.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * Specifies the Amazon S3 location where the test documents for an entity recognizer are located. The URI must be in the same Amazon Web Services Region as the API endpoint that you are calling.
   *
   * @public
   */
  TestS3Uri?: string | undefined;

  /**
   * Specifies how the text in an input file should be processed. This is optional, and the default is ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document. Use this option when you are processing large documents, such as newspaper articles or scientific papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document. Use this option when you are processing many short documents, such as text messages.
   *
   * @public
   */
  InputFormat?: InputFormat | undefined;
}

/**
 * Describes the entity list submitted with an entity recognizer.
 *
 * @public
 */
export interface EntityRecognizerEntityList {
  /**
   * Specifies the Amazon S3 location where the entity list is located. The URI must be in the same Region as the API endpoint that you are calling.
   *
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.
 *
 * @public
 */
export interface EntityTypesListItem {
  /**
   * An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.
   *
   * Entity types must not contain the following invalid characters: \n (line break), \\n (escaped line break, \r (carriage return), \\r (escaped carriage return), \t (tab), \\t (escaped tab), and , (comma).
   *
   * @public
   */
  Type: string | undefined;
}

/**
 * Specifies the format and location of the input data.
 *
 * @public
 */
export interface EntityRecognizerInputDataConfig {
  /**
   * The format of your training data:
   *
   * - `COMPREHEND_CSV`: A CSV file that supplements your training documents. The CSV file contains information about the custom entities that your trained model will detect. The required format of the file depends on whether you are providing annotations or an entity list.
   *
   *   If you use this value, you must provide your CSV file by using either the `Annotations` or `EntityList` parameters. You must provide your training documents by using the `Documents` parameter.
   * - `AUGMENTED_MANIFEST`: A labeled dataset that is produced by Amazon SageMaker Ground Truth. This file is in JSON lines format. Each line is a complete JSON object that contains a training document and its labels. Each label annotates a named entity in the training document.
   *
   *   If you use this value, you must provide the `AugmentedManifests` parameter in your request.
   *
   * If you don't specify a value, Amazon Comprehend uses `COMPREHEND_CSV` as the default.
   *
   * @public
   */
  DataFormat?: EntityRecognizerDataFormat | undefined;

  /**
   * The entity types in the labeled training data that Amazon Comprehend uses to train the custom entity recognizer. Any entity types that you don't specify are ignored.
   *
   * A maximum of 25 entity types can be used at one time to train an entity recognizer. Entity types must not contain the following invalid characters: \n (line break), \\n (escaped line break), \r (carriage return), \\r (escaped carriage return), \t (tab), \\t (escaped tab), space, and , (comma).
   *
   * @public
   */
  EntityTypes: EntityTypesListItem[] | undefined;

  /**
   * The S3 location of the folder that contains the training documents for your custom entity recognizer.
   *
   * This parameter is required if you set `DataFormat` to `COMPREHEND_CSV`.
   *
   * @public
   */
  Documents?: EntityRecognizerDocuments | undefined;

  /**
   * The S3 location of the CSV file that annotates your training documents.
   *
   * @public
   */
  Annotations?: EntityRecognizerAnnotations | undefined;

  /**
   * The S3 location of the CSV file that has the entity list for your custom entity recognizer.
   *
   * @public
   */
  EntityList?: EntityRecognizerEntityList | undefined;

  /**
   * A list of augmented manifest files that provide training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
   *
   * This parameter is required if you set `DataFormat` to `AUGMENTED_MANIFEST`.
   *
   * @public
   */
  AugmentedManifests?: AugmentedManifestsListItem[] | undefined;
}

/**
 * @public
 */
export interface CreateEntityRecognizerRequest {
  /**
   * The name given to the newly created recognizer. Recognizer names can be a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The name must be unique in the account/Region.
   *
   * @public
   */
  RecognizerName: string | undefined;

  /**
   * The version name given to the newly created recognizer. Version names can be a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same recognizer name in the account/Region.
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * Tags to associate with the entity recognizer. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the format and location of the input data. The S3 bucket containing the input data must be located in the same Region as the entity recognizer being created.
   *
   * @public
   */
  InputDataConfig: EntityRecognizerInputDataConfig | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * You can specify any of the following languages: English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), German ("de"), or Portuguese ("pt"). If you plan to use this entity recognizer with PDF, Word, or image input files, you must specify English as the language. All training documents must be in the same language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom entity recognizer. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * The JSON resource-based policy to attach to your custom entity recognizer model. You can use this policy to allow another Amazon Web Services account to import your custom model.
   *
   * Provide your JSON as a UTF-8 encoded string without line breaks. To provide valid JSON for your policy, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy:
   *
   * `"\{\"attribute\": \"value\", \"attribute\": [\"value\"]\}"`
   *
   * To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values:
   *
   * `'\{"attribute": "value", "attribute": ["value"]\}'`
   *
   * @public
   */
  ModelPolicy?: string | undefined;
}

/**
 * @public
 */
export interface CreateEntityRecognizerResponse {
  /**
   * The Amazon Resource Name (ARN) that identifies the entity recognizer.
   *
   * @public
   */
  EntityRecognizerArn?: string | undefined;
}

/**
 * Data security configuration.
 *
 * @public
 */
export interface DataSecurityConfig {
  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt the volume.
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt the data in the data lake.
   *
   * @public
   */
  DataLakeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * Configuration required for a document classification model.
 *
 * @public
 */
export interface DocumentClassificationConfig {
  /**
   * Classification mode indicates whether the documents are `MULTI_CLASS` or `MULTI_LABEL`.
   *
   * @public
   */
  Mode: DocumentClassifierMode | undefined;

  /**
   * One or more labels to associate with the custom classifier.
   *
   * @public
   */
  Labels?: string[] | undefined;
}

/**
 * Configuration required for an entity recognition model.
 *
 * @public
 */
export interface EntityRecognitionConfig {
  /**
   * Up to 25 entity types that the model is trained to recognize.
   *
   * @public
   */
  EntityTypes: EntityTypesListItem[] | undefined;
}

/**
 * Configuration about the model associated with a flywheel.
 *
 * @public
 */
export interface TaskConfig {
  /**
   * Language code for the language that the model supports.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * Configuration required for a document classification model.
   *
   * @public
   */
  DocumentClassificationConfig?: DocumentClassificationConfig | undefined;

  /**
   * Configuration required for an entity recognition model.
   *
   * @public
   */
  EntityRecognitionConfig?: EntityRecognitionConfig | undefined;
}

/**
 * @public
 */
export interface CreateFlywheelRequest {
  /**
   * Name for the flywheel.
   *
   * @public
   */
  FlywheelName: string | undefined;

  /**
   * To associate an existing model with the flywheel, specify the Amazon Resource Number (ARN) of the model version. Do not set `TaskConfig` or `ModelType` if you specify an `ActiveModelArn`.
   *
   * @public
   */
  ActiveModelArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend the permissions required to access the flywheel data in the data lake.
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * Configuration about the model associated with the flywheel. You need to set `TaskConfig` if you are creating a flywheel for a new model.
   *
   * @public
   */
  TaskConfig?: TaskConfig | undefined;

  /**
   * The model type. You need to set `ModelType` if you are creating a flywheel for a new model.
   *
   * @public
   */
  ModelType?: ModelType | undefined;

  /**
   * Enter the S3 location for the data lake. You can specify a new S3 bucket or a new folder of an existing S3 bucket. The flywheel creates the data lake at this location.
   *
   * @public
   */
  DataLakeS3Uri: string | undefined;

  /**
   * Data security configurations.
   *
   * @public
   */
  DataSecurityConfig?: DataSecurityConfig | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The tags to associate with this flywheel.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateFlywheelResponse {
  /**
   * The Amazon Resource Number (ARN) of the flywheel.
   *
   * @public
   */
  FlywheelArn?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the active model version.
   *
   * @public
   */
  ActiveModelArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDocumentClassifierRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the document classifier.
   *
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
   * The Amazon Resource Number (ARN) of the endpoint being deleted.
   *
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
   * The Amazon Resource Name (ARN) that identifies the entity recognizer.
   *
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
   * The Amazon Resource Number (ARN) of the flywheel to delete.
   *
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
   * The Amazon Resource Name (ARN) of the custom model version that has the policy to delete.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The revision ID of the policy to delete.
   *
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
   * The ARN of the dataset.
   *
   * @public
   */
  DatasetArn: string | undefined;
}

/**
 * Properties associated with the dataset.
 *
 * @public
 */
export interface DatasetProperties {
  /**
   * The ARN of the dataset.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * The name of the dataset.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The dataset type (training data or test data).
   *
   * @public
   */
  DatasetType?: DatasetType | undefined;

  /**
   * The S3 URI where the dataset is stored.
   *
   * @public
   */
  DatasetS3Uri?: string | undefined;

  /**
   * Description of the dataset.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The dataset status. While the system creates the dataset, the status is `CREATING`. When the dataset is ready to use, the status changes to `COMPLETED`.
   *
   * @public
   */
  Status?: DatasetStatus | undefined;

  /**
   * A description of the status of the dataset.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The number of documents in the dataset.
   *
   * @public
   */
  NumberOfDocuments?: number | undefined;

  /**
   * Creation time of the dataset.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Time when the data from the dataset becomes available in the data lake.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * The dataset properties.
   *
   * @public
   */
  DatasetProperties?: DatasetProperties | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentClassificationJobRequest {
  /**
   * The identifier that Amazon Comprehend generated for the job. The `StartDocumentClassificationJob` operation returns this identifier in its response.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis.
 *
 * @public
 */
export interface InputDataConfig {
  /**
   * The Amazon S3 URI for the input data. The URI must be in same Region as the API endpoint that you are calling. The URI can point to a single input file or it can provide the prefix for a collection of data files.
   *
   * For example, if you use the URI `S3://bucketName/prefix`, if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * Specifies how the text in an input file should be processed:
   *
   * - `ONE_DOC_PER_FILE` - Each file is considered a separate document. Use this option when you are processing large documents, such as newspaper articles or scientific papers.
   * - `ONE_DOC_PER_LINE` - Each line in a file is considered a separate document. Use this option when you are processing many short documents, such as text messages.
   *
   * @public
   */
  InputFormat?: InputFormat | undefined;

  /**
   * Provides configuration parameters to override the default actions for extracting text from PDF documents and image files.
   *
   * @public
   */
  DocumentReaderConfig?: DocumentReaderConfig | undefined;
}

/**
 * Provides configuration parameters for the output of inference jobs.
 *
 * @public
 */
export interface OutputDataConfig {
  /**
   * When you use the `OutputDataConfig` object with asynchronous operations, you specify the Amazon S3 location where you want to write the output data. The URI must be in the same Region as the API endpoint that you are calling. The location is used as the prefix for the actual location of the output file.
   *
   * When the topic detection job is finished, the service creates an output file in a directory specific to the job. The `S3Uri` field contains the location of the output file, called `output.tar.gz`. It is a compressed archive that contains the ouput of the operation.
   *
   * For a PII entity detection job, the output file is plain text, not a compressed archive. The output file name is the same as the input file, with `.out` appended at the end.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output results from an analysis job. Specify the Key Id of a symmetric key, because you cannot use an asymmetric key for uploading data to S3.
   *
   * The KmsKeyId can be one of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - KMS Key Alias: `"alias/ExampleAlias"`
   * - ARN of a KMS Key Alias: `"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"`
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * Provides information about a document classification job.
 *
 * @public
 */
export interface DocumentClassificationJobProperties {
  /**
   * The identifier assigned to the document classification job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:document-classification-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The name that you assigned to the document classification job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The current status of the document classification job. If the status is `FAILED`, the `Message` field shows the reason for the failure.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * A description of the status of the job.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time that the document classification job was submitted for processing.
   *
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * The time that the document classification job completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the document classifier.
   *
   * @public
   */
  DocumentClassifierArn?: string | undefined;

  /**
   * The input data configuration that you supplied when you created the document classification job.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The output data configuration that you supplied when you created the document classification job.
   *
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your document classification job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * The Amazon Resource Number (ARN) of the flywheel
   *
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentClassificationJobResponse {
  /**
   * An object that describes the properties associated with the document classification job.
   *
   * @public
   */
  DocumentClassificationJobProperties?: DocumentClassificationJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentClassifierRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the document classifier. The `CreateDocumentClassifier` operation returns this identifier in its response.
   *
   * @public
   */
  DocumentClassifierArn: string | undefined;
}

/**
 * Provides information about a document classifier.
 *
 * @public
 */
export interface DocumentClassifierProperties {
  /**
   * The Amazon Resource Name (ARN) that identifies the document classifier.
   *
   * @public
   */
  DocumentClassifierArn?: string | undefined;

  /**
   * The language code for the language of the documents that the classifier was trained on.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The status of the document classifier. If the status is `TRAINED` the classifier is ready to use. If the status is `TRAINED_WITH_WARNINGS` the classifier training succeeded, but you should review the warnings returned in the `CreateDocumentClassifier` response.
   *
   * If the status is `FAILED` you can see additional information about why the classifier wasn't trained in the `Message` field.
   *
   * @public
   */
  Status?: ModelStatus | undefined;

  /**
   * Additional information about the status of the classifier.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time that the document classifier was submitted for training.
   *
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * The time that training the document classifier completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Indicates the time when the training starts on documentation classifiers. You are billed for the time interval between this time and the value of TrainingEndTime.
   *
   * @public
   */
  TrainingStartTime?: Date | undefined;

  /**
   * The time that training of the document classifier was completed. Indicates the time when the training completes on documentation classifiers. You are billed for the time interval between this time and the value of TrainingStartTime.
   *
   * @public
   */
  TrainingEndTime?: Date | undefined;

  /**
   * The input data configuration that you supplied when you created the document classifier for training.
   *
   * @public
   */
  InputDataConfig?: DocumentClassifierInputDataConfig | undefined;

  /**
   * Provides output results configuration parameters for custom classifier jobs.
   *
   * @public
   */
  OutputDataConfig?: DocumentClassifierOutputDataConfig | undefined;

  /**
   * Information about the document classifier, including the number of documents used for training the classifier, the number of documents used for test the classifier, and an accuracy rating.
   *
   * @public
   */
  ClassifierMetadata?: ClassifierMetadata | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Indicates the mode in which the specific classifier was trained. This also indicates the format of input documents and the format of the confusion matrix. Each classifier can only be trained in one mode and this cannot be changed once the classifier is trained.
   *
   * @public
   */
  Mode?: DocumentClassifierMode | undefined;

  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * The version name that you assigned to the document classifier.
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source model. This model was imported from a different Amazon Web Services account to create the document classifier model in your Amazon Web Services account.
   *
   * @public
   */
  SourceModelArn?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the flywheel
   *
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentClassifierResponse {
  /**
   * An object that contains the properties associated with a document classifier.
   *
   * @public
   */
  DocumentClassifierProperties?: DocumentClassifierProperties | undefined;
}

/**
 * @public
 */
export interface DescribeDominantLanguageDetectionJobRequest {
  /**
   * The identifier that Amazon Comprehend generated for the job. The `StartDominantLanguageDetectionJob` operation returns this identifier in its response.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Provides information about a dominant language detection job.
 *
 * @public
 */
export interface DominantLanguageDetectionJobProperties {
  /**
   * The identifier assigned to the dominant language detection job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dominant language detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:dominant-language-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:dominant-language-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The name that you assigned to the dominant language detection job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The current status of the dominant language detection job. If the status is `FAILED`, the `Message` field shows the reason for the failure.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * A description for the status of a job.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time that the dominant language detection job was submitted for processing.
   *
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * The time that the dominant language detection job completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The input data configuration that you supplied when you created the dominant language detection job.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The output data configuration that you supplied when you created the dominant language detection job.
   *
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your dominant language detection job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface DescribeDominantLanguageDetectionJobResponse {
  /**
   * An object that contains the properties associated with a dominant language detection job.
   *
   * @public
   */
  DominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointRequest {
  /**
   * The Amazon Resource Number (ARN) of the endpoint being described.
   *
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * Specifies information about the specified endpoint. For information about endpoints, see [Managing endpoints](https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html).
 *
 * @public
 */
export interface EndpointProperties {
  /**
   * The Amazon Resource Number (ARN) of the endpoint.
   *
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * Specifies the status of the endpoint. Because the endpoint updates and creation are asynchronous, so customers will need to wait for the endpoint to be `Ready` status before making inference requests.
   *
   * @public
   */
  Status?: EndpointStatus | undefined;

  /**
   * Specifies a reason for failure in cases of `Failed` status.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the model to which the endpoint is attached.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * ARN of the new model to use for updating an existing endpoint. This ARN is going to be different from the model ARN when the update is in progress
   *
   * @public
   */
  DesiredModelArn?: string | undefined;

  /**
   * The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second.
   *
   * @public
   */
  DesiredInferenceUnits?: number | undefined;

  /**
   * The number of inference units currently used by the model using this endpoint.
   *
   * @public
   */
  CurrentInferenceUnits?: number | undefined;

  /**
   * The creation date and time of the endpoint.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time that the endpoint was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId).
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * Data access role ARN to use in case the new model is encrypted with a customer KMS key.
   *
   * @public
   */
  DesiredDataAccessRoleArn?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the flywheel
   *
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointResponse {
  /**
   * Describes information associated with the specific endpoint.
   *
   * @public
   */
  EndpointProperties?: EndpointProperties | undefined;
}

/**
 * @public
 */
export interface DescribeEntitiesDetectionJobRequest {
  /**
   * The identifier that Amazon Comprehend generated for the job. The `StartEntitiesDetectionJob` operation returns this identifier in its response.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Provides information about an entities detection job.
 *
 * @public
 */
export interface EntitiesDetectionJobProperties {
  /**
   * The identifier assigned to the entities detection job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entities detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:entities-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:entities-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The name that you assigned the entities detection job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The current status of the entities detection job. If the status is `FAILED`, the `Message` field shows the reason for the failure.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * A description of the status of a job.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time that the entities detection job was submitted for processing.
   *
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * The time that the entities detection job completed
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the entity recognizer.
   *
   * @public
   */
  EntityRecognizerArn?: string | undefined;

  /**
   * The input data configuration that you supplied when you created the entities detection job.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The output data configuration that you supplied when you created the entities detection job.
   *
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * The language code of the input documents.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your entity detection job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flywheel associated with this job.
   *
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEntitiesDetectionJobResponse {
  /**
   * An object that contains the properties associated with an entities detection job.
   *
   * @public
   */
  EntitiesDetectionJobProperties?: EntitiesDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeEntityRecognizerRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the entity recognizer.
   *
   * @public
   */
  EntityRecognizerArn: string | undefined;
}

/**
 * Output data configuration.
 *
 * @public
 */
export interface EntityRecognizerOutputDataConfig {
  /**
   * The Amazon S3 prefix for the data lake location of the flywheel statistics.
   *
   * @public
   */
  FlywheelStatsS3Prefix?: string | undefined;
}

/**
 * Detailed information about the accuracy of an entity recognizer for a specific entity type.
 *
 * @public
 */
export interface EntityTypesEvaluationMetrics {
  /**
   * A measure of the usefulness of the recognizer results for a specific entity type in the test data. High precision means that the recognizer returned substantially more relevant results than irrelevant ones.
   *
   * @public
   */
  Precision?: number | undefined;

  /**
   * A measure of how complete the recognizer results are for a specific entity type in the test data. High recall means that the recognizer returned most of the relevant results.
   *
   * @public
   */
  Recall?: number | undefined;

  /**
   * A measure of how accurate the recognizer results are for a specific entity type in the test data. It is derived from the `Precision` and `Recall` values. The `F1Score` is the harmonic average of the two scores. The highest score is 1, and the worst score is 0.
   *
   * @public
   */
  F1Score?: number | undefined;
}

/**
 * Individual item from the list of entity types in the metadata of an entity recognizer.
 *
 * @public
 */
export interface EntityRecognizerMetadataEntityTypesListItem {
  /**
   * Type of entity from the list of entity types in the metadata of an entity recognizer.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * Detailed information about the accuracy of the entity recognizer for a specific item on the list of entity types.
   *
   * @public
   */
  EvaluationMetrics?: EntityTypesEvaluationMetrics | undefined;

  /**
   * Indicates the number of times the given entity type was seen in the training data.
   *
   * @public
   */
  NumberOfTrainMentions?: number | undefined;
}

/**
 * Detailed information about the accuracy of an entity recognizer.
 *
 * @public
 */
export interface EntityRecognizerEvaluationMetrics {
  /**
   * A measure of the usefulness of the recognizer results in the test data. High precision means that the recognizer returned substantially more relevant results than irrelevant ones.
   *
   * @public
   */
  Precision?: number | undefined;

  /**
   * A measure of how complete the recognizer results are for the test data. High recall means that the recognizer returned most of the relevant results.
   *
   * @public
   */
  Recall?: number | undefined;

  /**
   * A measure of how accurate the recognizer results are for the test data. It is derived from the `Precision` and `Recall` values. The `F1Score` is the harmonic average of the two scores. For plain text entity recognizer models, the range is 0 to 100, where 100 is the best score. For PDF/Word entity recognizer models, the range is 0 to 1, where 1 is the best score.
   *
   * @public
   */
  F1Score?: number | undefined;
}

/**
 * Detailed information about an entity recognizer.
 *
 * @public
 */
export interface EntityRecognizerMetadata {
  /**
   * The number of documents in the input data that were used to train the entity recognizer. Typically this is 80 to 90 percent of the input documents.
   *
   * @public
   */
  NumberOfTrainedDocuments?: number | undefined;

  /**
   * The number of documents in the input data that were used to test the entity recognizer. Typically this is 10 to 20 percent of the input documents.
   *
   * @public
   */
  NumberOfTestDocuments?: number | undefined;

  /**
   * Detailed information about the accuracy of an entity recognizer.
   *
   * @public
   */
  EvaluationMetrics?: EntityRecognizerEvaluationMetrics | undefined;

  /**
   * Entity types from the metadata of an entity recognizer.
   *
   * @public
   */
  EntityTypes?: EntityRecognizerMetadataEntityTypesListItem[] | undefined;
}

/**
 * Describes information about an entity recognizer.
 *
 * @public
 */
export interface EntityRecognizerProperties {
  /**
   * The Amazon Resource Name (ARN) that identifies the entity recognizer.
   *
   * @public
   */
  EntityRecognizerArn?: string | undefined;

  /**
   * The language of the input documents. All documents must be in the same language. Only English ("en") is currently supported.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Provides the status of the entity recognizer.
   *
   * @public
   */
  Status?: ModelStatus | undefined;

  /**
   * A description of the status of the recognizer.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time that the recognizer was submitted for processing.
   *
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * The time that the recognizer creation completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The time that training of the entity recognizer started.
   *
   * @public
   */
  TrainingStartTime?: Date | undefined;

  /**
   * The time that training of the entity recognizer was completed.
   *
   * @public
   */
  TrainingEndTime?: Date | undefined;

  /**
   * The input data properties of an entity recognizer.
   *
   * @public
   */
  InputDataConfig?: EntityRecognizerInputDataConfig | undefined;

  /**
   * Provides information about an entity recognizer.
   *
   * @public
   */
  RecognizerMetadata?: EntityRecognizerMetadata | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom entity recognizer. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * The version name you assigned to the entity recognizer.
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source model. This model was imported from a different Amazon Web Services account to create the entity recognizer model in your Amazon Web Services account.
   *
   * @public
   */
  SourceModelArn?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the flywheel
   *
   * @public
   */
  FlywheelArn?: string | undefined;

  /**
   * Output data configuration.
   *
   * @public
   */
  OutputDataConfig?: EntityRecognizerOutputDataConfig | undefined;
}

/**
 * @public
 */
export interface DescribeEntityRecognizerResponse {
  /**
   * Describes information associated with an entity recognizer.
   *
   * @public
   */
  EntityRecognizerProperties?: EntityRecognizerProperties | undefined;
}

/**
 * @public
 */
export interface DescribeEventsDetectionJobRequest {
  /**
   * The identifier of the events detection job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Provides information about an events detection job.
 *
 * @public
 */
export interface EventsDetectionJobProperties {
  /**
   * The identifier assigned to the events detection job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:events-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The name you assigned the events detection job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The current status of the events detection job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * A description of the status of the events detection job.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time that the events detection job was submitted for processing.
   *
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * The time that the events detection job completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The input data configuration that you supplied when you created the events detection job.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The output data configuration that you supplied when you created the events detection job.
   *
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * The language code of the input documents.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * The types of events that are detected by the job.
   *
   * @public
   */
  TargetEventTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventsDetectionJobResponse {
  /**
   * An object that contains the properties associated with an event detection job.
   *
   * @public
   */
  EventsDetectionJobProperties?: EventsDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeFlywheelRequest {
  /**
   * The Amazon Resource Number (ARN) of the flywheel.
   *
   * @public
   */
  FlywheelArn: string | undefined;
}

/**
 * The flywheel properties.
 *
 * @public
 */
export interface FlywheelProperties {
  /**
   * The Amazon Resource Number (ARN) of the flywheel.
   *
   * @public
   */
  FlywheelArn?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the active model version.
   *
   * @public
   */
  ActiveModelArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to access the flywheel data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * Configuration about the model associated with a flywheel.
   *
   * @public
   */
  TaskConfig?: TaskConfig | undefined;

  /**
   * Amazon S3 URI of the data lake location.
   *
   * @public
   */
  DataLakeS3Uri?: string | undefined;

  /**
   * Data security configuration.
   *
   * @public
   */
  DataSecurityConfig?: DataSecurityConfig | undefined;

  /**
   * The status of the flywheel.
   *
   * @public
   */
  Status?: FlywheelStatus | undefined;

  /**
   * Model type of the flywheel's model.
   *
   * @public
   */
  ModelType?: ModelType | undefined;

  /**
   * A description of the status of the flywheel.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Creation time of the flywheel.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Last modified time for the flywheel.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The most recent flywheel iteration.
   *
   * @public
   */
  LatestFlywheelIteration?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFlywheelResponse {
  /**
   * The flywheel properties.
   *
   * @public
   */
  FlywheelProperties?: FlywheelProperties | undefined;
}

/**
 * @public
 */
export interface DescribeFlywheelIterationRequest {
  /**
   * @public
   */
  FlywheelArn: string | undefined;

  /**
   * @public
   */
  FlywheelIterationId: string | undefined;
}

/**
 * The evaluation metrics associated with the evaluated model.
 *
 * @public
 */
export interface FlywheelModelEvaluationMetrics {
  /**
   * The average F1 score from the evaluation metrics.
   *
   * @public
   */
  AverageF1Score?: number | undefined;

  /**
   * Average precision metric for the model.
   *
   * @public
   */
  AveragePrecision?: number | undefined;

  /**
   * Average recall metric for the model.
   *
   * @public
   */
  AverageRecall?: number | undefined;

  /**
   * Average accuracy metric for the model.
   *
   * @public
   */
  AverageAccuracy?: number | undefined;
}

/**
 * The configuration properties of a flywheel iteration.
 *
 * @public
 */
export interface FlywheelIterationProperties {
  /**
   * @public
   */
  FlywheelArn?: string | undefined;

  /**
   * @public
   */
  FlywheelIterationId?: string | undefined;

  /**
   * The creation start time of the flywheel iteration.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The completion time of this flywheel iteration.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The status of the flywheel iteration.
   *
   * @public
   */
  Status?: FlywheelIterationStatus | undefined;

  /**
   * A description of the status of the flywheel iteration.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The ARN of the evaluated model associated with this flywheel iteration.
   *
   * @public
   */
  EvaluatedModelArn?: string | undefined;

  /**
   * The evaluation metrics associated with the evaluated model.
   *
   * @public
   */
  EvaluatedModelMetrics?: FlywheelModelEvaluationMetrics | undefined;

  /**
   * The ARN of the trained model associated with this flywheel iteration.
   *
   * @public
   */
  TrainedModelArn?: string | undefined;

  /**
   * The metrics associated with the trained model.
   *
   * @public
   */
  TrainedModelMetrics?: FlywheelModelEvaluationMetrics | undefined;

  /**
   * @public
   */
  EvaluationManifestS3Prefix?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFlywheelIterationResponse {
  /**
   * The configuration properties of a flywheel iteration.
   *
   * @public
   */
  FlywheelIterationProperties?: FlywheelIterationProperties | undefined;
}

/**
 * @public
 */
export interface DescribeKeyPhrasesDetectionJobRequest {
  /**
   * The identifier that Amazon Comprehend generated for the job. The `StartKeyPhrasesDetectionJob` operation returns this identifier in its response.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Provides information about a key phrases detection job.
 *
 * @public
 */
export interface KeyPhrasesDetectionJobProperties {
  /**
   * The identifier assigned to the key phrases detection job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the key phrases detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:key-phrases-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:key-phrases-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The name that you assigned the key phrases detection job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The current status of the key phrases detection job. If the status is `FAILED`, the `Message` field shows the reason for the failure.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * A description of the status of a job.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time that the key phrases detection job was submitted for processing.
   *
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * The time that the key phrases detection job completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The input data configuration that you supplied when you created the key phrases detection job.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The output data configuration that you supplied when you created the key phrases detection job.
   *
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * The language code of the input documents.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your key phrases detection job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface DescribeKeyPhrasesDetectionJobResponse {
  /**
   * An object that contains the properties associated with a key phrases detection job.
   *
   * @public
   */
  KeyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribePiiEntitiesDetectionJobRequest {
  /**
   * The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Provides configuration parameters for the output of PII entity detection jobs.
 *
 * @public
 */
export interface PiiOutputDataConfig {
  /**
   * When you use the `PiiOutputDataConfig` object with asynchronous operations, you specify the Amazon S3 location where you want to write the output data.
   *
   * For a PII entity detection job, the output file is plain text, not a compressed archive. The output file name is the same as the input file, with `.out` appended at the end.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output results from an analysis job.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * Provides configuration parameters for PII entity redaction.
 *
 * @public
 */
export interface RedactionConfig {
  /**
   * An array of the types of PII entities that Amazon Comprehend detects in the input text for your request.
   *
   * @public
   */
  PiiEntityTypes?: PiiEntityType[] | undefined;

  /**
   * Specifies whether the PII entity is redacted with the mask character or the entity type.
   *
   * @public
   */
  MaskMode?: PiiEntitiesDetectionMaskMode | undefined;

  /**
   * A character that replaces each character in the redacted PII entity.
   *
   * @public
   */
  MaskCharacter?: string | undefined;
}

/**
 * Provides information about a PII entities detection job.
 *
 * @public
 */
export interface PiiEntitiesDetectionJobProperties {
  /**
   * The identifier assigned to the PII entities detection job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the PII entities detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:pii-entities-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The name that you assigned the PII entities detection job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The current status of the PII entities detection job. If the status is `FAILED`, the `Message` field shows the reason for the failure.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * A description of the status of a job.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time that the PII entities detection job was submitted for processing.
   *
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * The time that the PII entities detection job completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The input properties for a PII entities detection job.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The output data configuration that you supplied when you created the PII entities detection job.
   *
   * @public
   */
  OutputDataConfig?: PiiOutputDataConfig | undefined;

  /**
   * Provides configuration parameters for PII entity redaction.
   *
   * This parameter is required if you set the `Mode` parameter to `ONLY_REDACTION`. In that case, you must provide a `RedactionConfig` definition that includes the `PiiEntityTypes` parameter.
   *
   * @public
   */
  RedactionConfig?: RedactionConfig | undefined;

  /**
   * The language code of the input documents.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * Specifies whether the output provides the locations (offsets) of PII entities or a file in which PII entities are redacted.
   *
   * @public
   */
  Mode?: PiiEntitiesDetectionMode | undefined;
}

/**
 * @public
 */
export interface DescribePiiEntitiesDetectionJobResponse {
  /**
   * Provides information about a PII entities detection job.
   *
   * @public
   */
  PiiEntitiesDetectionJobProperties?: PiiEntitiesDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the custom model version that has the resource policy.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * The JSON body of the resource-based policy.
   *
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * The time at which the policy was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time at which the policy was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a new revision ID, and it deletes the prior version of the policy.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSentimentDetectionJobRequest {
  /**
   * The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Provides information about a sentiment detection job.
 *
 * @public
 */
export interface SentimentDetectionJobProperties {
  /**
   * The identifier assigned to the sentiment detection job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the sentiment detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:sentiment-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The name that you assigned to the sentiment detection job
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The current status of the sentiment detection job. If the status is `FAILED`, the `Messages` field shows the reason for the failure.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * A description of the status of a job.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time that the sentiment detection job was submitted for processing.
   *
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * The time that the sentiment detection job ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The input data configuration that you supplied when you created the sentiment detection job.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The output data configuration that you supplied when you created the sentiment detection job.
   *
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * The language code of the input documents.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your sentiment detection job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface DescribeSentimentDetectionJobResponse {
  /**
   * An object that contains the properties associated with a sentiment detection job.
   *
   * @public
   */
  SentimentDetectionJobProperties?: SentimentDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeTargetedSentimentDetectionJobRequest {
  /**
   * The identifier that Amazon Comprehend generated for the job. The `StartTargetedSentimentDetectionJob` operation returns this identifier in its response.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Provides information about a targeted sentiment detection job.
 *
 * @public
 */
export interface TargetedSentimentDetectionJobProperties {
  /**
   * The identifier assigned to the targeted sentiment detection job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the targeted sentiment detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:targeted-sentiment-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:targeted-sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The name that you assigned to the targeted sentiment detection job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The current status of the targeted sentiment detection job. If the status is `FAILED`, the `Messages` field shows the reason for the failure.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * A description of the status of a job.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time that the targeted sentiment detection job was submitted for processing.
   *
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * The time that the targeted sentiment detection job ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * Provides configuration parameters for the output of inference jobs.
   *
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * The language code of the input documents.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt the data on the storage volume attached to the ML compute instance(s) that process the targeted sentiment detection job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface DescribeTargetedSentimentDetectionJobResponse {
  /**
   * An object that contains the properties associated with a targeted sentiment detection job.
   *
   * @public
   */
  TargetedSentimentDetectionJobProperties?: TargetedSentimentDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeTopicsDetectionJobRequest {
  /**
   * The identifier assigned by the user to the detection job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Provides information about a topic detection job.
 *
 * @public
 */
export interface TopicsDetectionJobProperties {
  /**
   * The identifier assigned to the topic detection job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the topics detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:topics-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:topics-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The name of the topic detection job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The current status of the topic detection job. If the status is `Failed`, the reason for the failure is shown in the `Message` field.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * A description for the status of a job.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time that the topic detection job was submitted for processing.
   *
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * The time that the topic detection job was completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The input data configuration supplied when you created the topic detection job.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The output data configuration supplied when you created the topic detection job.
   *
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * The number of topics to detect supplied when you created the topic detection job. The default is 10.
   *
   * @public
   */
  NumberOfTopics?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your job data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your topic detection job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface DescribeTopicsDetectionJobResponse {
  /**
   * The list of properties for the requested job.
   *
   * @public
   */
  TopicsDetectionJobProperties?: TopicsDetectionJobProperties | undefined;
}

/**
 * @public
 */
export interface DetectDominantLanguageRequest {
  /**
   * A UTF-8 text string. The string must contain at least 20 characters. The maximum string size is 100 KB.
   *
   * @public
   */
  Text: string | undefined;
}

/**
 * @public
 */
export interface DetectDominantLanguageResponse {
  /**
   * Array of languages that Amazon Comprehend detected in the input text. The array is sorted in descending order of the score (the dominant language is always the first element in the array).
   *
   * For each language, the response returns the RFC 5646 language code and the level of confidence that Amazon Comprehend has in the accuracy of its inference. For more information about RFC 5646, see [Tags for Identifying Languages](https://tools.ietf.org/html/rfc5646) on the *IETF Tools* web site.
   *
   * @public
   */
  Languages?: DominantLanguage[] | undefined;
}

/**
 * @public
 */
export interface DetectEntitiesRequest {
  /**
   * A UTF-8 text string. The maximum string size is 100 KB. If you enter text using this parameter, do not use the `Bytes` parameter.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. If your request includes the endpoint for a custom entity recognition model, Amazon Comprehend uses the language of your custom model, and it ignores any language code that you specify here.
   *
   * All input documents must be in the same language.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The Amazon Resource Name of an endpoint that is associated with a custom entity recognition model. Provide an endpoint if you want to detect entities by using your own custom model instead of the default model that is used by Amazon Comprehend.
   *
   * If you specify an endpoint, Amazon Comprehend uses the language of your custom model, and it ignores any language code that you provide in your request.
   *
   * For information about endpoints, see [Managing endpoints](https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html).
   *
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * This field applies only when you use a custom entity recognition model that was trained with PDF annotations. For other cases, enter your text input in the `Text` field.
   *
   * Use the `Bytes` parameter to input a text, PDF, Word or image file. Using a plain-text file in the `Bytes` parameter is equivelent to using the `Text` parameter (the `Entities` field in the response is identical).
   *
   * You can also use the `Bytes` parameter to input an Amazon Textract `DetectDocumentText` or `AnalyzeDocument` output file.
   *
   * Provide the input document as a sequence of base64-encoded bytes. If your code uses an Amazon Web Services SDK to detect entities, the SDK may encode the document file bytes for you.
   *
   * The maximum length of this field depends on the input document type. For details, see [Inputs for real-time custom analysis](https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync.html) in the Comprehend Developer Guide.
   *
   * If you use the `Bytes` parameter, do not use the `Text` parameter.
   *
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * Provides configuration parameters to override the default actions for extracting text from PDF documents and image files.
   *
   * @public
   */
  DocumentReaderConfig?: DocumentReaderConfig | undefined;
}

/**
 * @public
 */
export interface DetectEntitiesResponse {
  /**
   * A collection of entities identified in the input text. For each entity, the response provides the entity text, entity type, where the entity text begins and ends, and the level of confidence that Amazon Comprehend has in the detection.
   *
   * If your request uses a custom entity recognition model, Amazon Comprehend detects the entities that the model is trained to recognize. Otherwise, it detects the default entity types. For a list of default entity types, see [Entities](https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html) in the Comprehend Developer Guide.
   *
   * @public
   */
  Entities?: Entity[] | undefined;

  /**
   * Information about the document, discovered during text extraction. This field is present in the response only if your request used the `Byte` parameter.
   *
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * The document type for each page in the input document. This field is present in the response only if your request used the `Byte` parameter.
   *
   * @public
   */
  DocumentType?: DocumentTypeListItem[] | undefined;

  /**
   * Information about each block of text in the input document. Blocks are nested. A page block contains a block for each line of text, which contains a block for each word.
   *
   * The `Block` content for a Word input document does not include a `Geometry` field.
   *
   * The `Block` field is not present in the response for plain-text inputs.
   *
   * @public
   */
  Blocks?: Block[] | undefined;

  /**
   * Page-level errors that the system detected while processing the input document. The field is empty if the system encountered no errors.
   *
   * @public
   */
  Errors?: ErrorsListItem[] | undefined;
}

/**
 * @public
 */
export interface DetectKeyPhrasesRequest {
  /**
   * A UTF-8 text string. The string must contain less than 100 KB of UTF-8 encoded characters.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * @public
 */
export interface DetectKeyPhrasesResponse {
  /**
   * A collection of key phrases that Amazon Comprehend identified in the input text. For each key phrase, the response provides the text of the key phrase, where the key phrase begins and ends, and the level of confidence that Amazon Comprehend has in the accuracy of the detection.
   *
   * @public
   */
  KeyPhrases?: KeyPhrase[] | undefined;
}

/**
 * @public
 */
export interface DetectPiiEntitiesRequest {
  /**
   * A UTF-8 text string. The maximum string size is 100 KB.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The language of the input text. Enter the language code for English (en) or Spanish (es).
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * Provides information about a PII entity.
 *
 * @public
 */
export interface PiiEntity {
  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of the detection.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The entity's type.
   *
   * @public
   */
  Type?: PiiEntityType | undefined;

  /**
   * The zero-based offset from the beginning of the source text to the first character in the entity.
   *
   * @public
   */
  BeginOffset?: number | undefined;

  /**
   * The zero-based offset from the beginning of the source text to the last character in the entity.
   *
   * @public
   */
  EndOffset?: number | undefined;
}

/**
 * @public
 */
export interface DetectPiiEntitiesResponse {
  /**
   * A collection of PII entities identified in the input text. For each entity, the response provides the entity type, where the entity text begins and ends, and the level of confidence that Amazon Comprehend has in the detection.
   *
   * @public
   */
  Entities?: PiiEntity[] | undefined;
}

/**
 * @public
 */
export interface DetectSentimentRequest {
  /**
   * A UTF-8 text string. The maximum string size is 5 KB.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * @public
 */
export interface DetectSentimentResponse {
  /**
   * The inferred sentiment that Amazon Comprehend has the highest level of confidence in.
   *
   * @public
   */
  Sentiment?: SentimentType | undefined;

  /**
   * An object that lists the sentiments, and their corresponding confidence levels.
   *
   * @public
   */
  SentimentScore?: SentimentScore | undefined;
}

/**
 * @public
 */
export interface DetectSyntaxRequest {
  /**
   * A UTF-8 string. The maximum string size is 5 KB.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The language code of the input documents. You can specify any of the following languages supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), or Portuguese ("pt").
   *
   * @public
   */
  LanguageCode: SyntaxLanguageCode | undefined;
}

/**
 * @public
 */
export interface DetectSyntaxResponse {
  /**
   * A collection of syntax tokens describing the text. For each token, the response provides the text, the token type, where the text begins and ends, and the level of confidence that Amazon Comprehend has that the token is correct. For a list of token types, see [Syntax](https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html) in the Comprehend Developer Guide.
   *
   * @public
   */
  SyntaxTokens?: SyntaxToken[] | undefined;
}

/**
 * @public
 */
export interface DetectTargetedSentimentRequest {
  /**
   * A UTF-8 text string. The maximum string length is 5 KB.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The language of the input documents. Currently, English is the only supported language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * @public
 */
export interface DetectTargetedSentimentResponse {
  /**
   * Targeted sentiment analysis for each of the entities identified in the input text.
   *
   * @public
   */
  Entities?: TargetedSentimentEntity[] | undefined;
}

/**
 * One of the of text strings. Each string has a size limit of 1KB.
 *
 * @public
 */
export interface TextSegment {
  /**
   * The text content.
   *
   * @public
   */
  Text: string | undefined;
}

/**
 * @public
 */
export interface DetectToxicContentRequest {
  /**
   * A list of up to 10 text strings. Each string has a maximum size of 1 KB, and the maximum size of the list is 10 KB.
   *
   * @public
   */
  TextSegments: TextSegment[] | undefined;

  /**
   * The language of the input text. Currently, English is the only supported language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;
}

/**
 * Toxic content analysis result for one string. For more information about toxicity detection, see [Toxicity detection](https://docs.aws.amazon.com/comprehend/latest/dg/toxicity-detection.html) in the *Amazon Comprehend Developer Guide*
 *
 * @public
 */
export interface ToxicContent {
  /**
   * The name of the toxic content type.
   *
   * @public
   */
  Name?: ToxicContentType | undefined;

  /**
   * Model confidence in the detected content type. Value range is zero to one, where one is highest confidence.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * Toxicity analysis result for one string. For more information about toxicity detection, see [Toxicity detection](https://docs.aws.amazon.com/comprehend/latest/dg/toxicity-detection.html) in the *Amazon Comprehend Developer Guide*.
 *
 * @public
 */
export interface ToxicLabels {
  /**
   * Array of toxic content types identified in the string.
   *
   * @public
   */
  Labels?: ToxicContent[] | undefined;

  /**
   * Overall toxicity score for the string. Value range is zero to one, where one is the highest confidence.
   *
   * @public
   */
  Toxicity?: number | undefined;
}

/**
 * @public
 */
export interface DetectToxicContentResponse {
  /**
   * Results of the content moderation analysis. Each entry in the results list contains a list of toxic content types identified in the text, along with a confidence score for each content type. The results list also includes a toxicity score for each entry in the results list.
   *
   * @public
   */
  ResultList?: ToxicLabels[] | undefined;
}

/**
 * @public
 */
export interface ImportModelRequest {
  /**
   * The Amazon Resource Name (ARN) of the custom model to import.
   *
   * @public
   */
  SourceModelArn: string | undefined;

  /**
   * The name to assign to the custom model that is created in Amazon Comprehend by this import.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The version name given to the custom model that is created by this import. Version names can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same classifier name in the account/Region.
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to use Amazon Key Management Service (KMS) to encrypt or decrypt the custom model.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * Tags to associate with the custom model that is created by this import. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportModelResponse {
  /**
   * The Amazon Resource Name (ARN) of the custom model being imported.
   *
   * @public
   */
  ModelArn?: string | undefined;
}

/**
 * Filter the datasets based on creation time or dataset status.
 *
 * @public
 */
export interface DatasetFilter {
  /**
   * Filter the datasets based on the dataset status.
   *
   * @public
   */
  Status?: DatasetStatus | undefined;

  /**
   * Filter the datasets based on the dataset type.
   *
   * @public
   */
  DatasetType?: DatasetType | undefined;

  /**
   * Filter the datasets to include datasets created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Filter the datasets to include datasets created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * The Amazon Resource Number (ARN) of the flywheel.
   *
   * @public
   */
  FlywheelArn?: string | undefined;

  /**
   * Filters the datasets to be returned in the response.
   *
   * @public
   */
  Filter?: DatasetFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in a response. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * The dataset properties list.
   *
   * @public
   */
  DatasetPropertiesList?: DatasetProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information for filtering a list of document classification jobs. For more information, see the operation. You can provide only one filter parameter in each request.
 *
 * @public
 */
export interface DocumentClassificationJobFilter {
  /**
   * Filters on the name of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Filters the list based on job status. Returns only jobs with the specified status.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
   *
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
   *
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListDocumentClassificationJobsRequest {
  /**
   * Filters the jobs that are returned. You can filter jobs on their names, status, or the date and time that they were submitted. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: DocumentClassificationJobFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDocumentClassificationJobsResponse {
  /**
   * A list containing the properties of each job returned.
   *
   * @public
   */
  DocumentClassificationJobPropertiesList?: DocumentClassificationJobProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the `ListDocumentClassifiers` operation.
 *
 * @public
 */
export interface DocumentClassifierFilter {
  /**
   * Filters the list of classifiers based on status.
   *
   * @public
   */
  Status?: ModelStatus | undefined;

  /**
   * The name that you assigned to the document classifier
   *
   * @public
   */
  DocumentClassifierName?: string | undefined;

  /**
   * Filters the list of classifiers based on the time that the classifier was submitted for processing. Returns only classifiers submitted before the specified time. Classifiers are returned in ascending order, oldest to newest.
   *
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * Filters the list of classifiers based on the time that the classifier was submitted for processing. Returns only classifiers submitted after the specified time. Classifiers are returned in descending order, newest to oldest.
   *
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListDocumentClassifiersRequest {
  /**
   * Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: DocumentClassifierFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDocumentClassifiersResponse {
  /**
   * A list containing the properties of each job returned.
   *
   * @public
   */
  DocumentClassifierPropertiesList?: DocumentClassifierProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDocumentClassifierSummariesRequest {
  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return on each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes information about a document classifier and its versions.
 *
 * @public
 */
export interface DocumentClassifierSummary {
  /**
   * The name that you assigned the document classifier.
   *
   * @public
   */
  DocumentClassifierName?: string | undefined;

  /**
   * The number of versions you created.
   *
   * @public
   */
  NumberOfVersions?: number | undefined;

  /**
   * The time that the latest document classifier version was submitted for processing.
   *
   * @public
   */
  LatestVersionCreatedAt?: Date | undefined;

  /**
   * The version name you assigned to the latest document classifier version.
   *
   * @public
   */
  LatestVersionName?: string | undefined;

  /**
   * Provides the status of the latest document classifier version.
   *
   * @public
   */
  LatestVersionStatus?: ModelStatus | undefined;
}

/**
 * @public
 */
export interface ListDocumentClassifierSummariesResponse {
  /**
   * The list of summaries of document classifiers.
   *
   * @public
   */
  DocumentClassifierSummariesList?: DocumentClassifierSummary[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.
 *
 * @public
 */
export interface DominantLanguageDetectionJobFilter {
  /**
   * Filters on the name of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Filters the list of jobs based on job status. Returns only jobs with the specified status.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
   *
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
   *
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListDominantLanguageDetectionJobsRequest {
  /**
   * Filters that jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: DominantLanguageDetectionJobFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDominantLanguageDetectionJobsResponse {
  /**
   * A list containing the properties of each job that is returned.
   *
   * @public
   */
  DominantLanguageDetectionJobPropertiesList?: DominantLanguageDetectionJobProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filter used to determine which endpoints are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time.
 *
 * @public
 */
export interface EndpointFilter {
  /**
   * The Amazon Resource Number (ARN) of the model to which the endpoint is attached.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * Specifies the status of the endpoint being returned. Possible values are: Creating, Ready, Updating, Deleting, Failed.
   *
   * @public
   */
  Status?: EndpointStatus | undefined;

  /**
   * Specifies a date before which the returned endpoint or endpoints were created.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * Specifies a date after which the returned endpoint or endpoints were created.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListEndpointsRequest {
  /**
   * Filters the endpoints that are returned. You can filter endpoints on their name, model, status, or the date and time that they were created. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: EndpointFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEndpointsResponse {
  /**
   * Displays a list of endpoint properties being retrieved by the service in response to the request.
   *
   * @public
   */
  EndpointPropertiesList?: EndpointProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.
 *
 * @public
 */
export interface EntitiesDetectionJobFilter {
  /**
   * Filters on the name of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Filters the list of jobs based on job status. Returns only jobs with the specified status.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
   *
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
   *
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListEntitiesDetectionJobsRequest {
  /**
   * Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: EntitiesDetectionJobFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEntitiesDetectionJobsResponse {
  /**
   * A list containing the properties of each job that is returned.
   *
   * @public
   */
  EntitiesDetectionJobPropertiesList?: EntitiesDetectionJobProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information for filtering a list of entity recognizers. You can only specify one filtering parameter in a request. For more information, see the `ListEntityRecognizers` operation./>
 *
 * @public
 */
export interface EntityRecognizerFilter {
  /**
   * The status of an entity recognizer.
   *
   * @public
   */
  Status?: ModelStatus | undefined;

  /**
   * The name that you assigned the entity recognizer.
   *
   * @public
   */
  RecognizerName?: string | undefined;

  /**
   * Filters the list of entities based on the time that the list was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.
   *
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * Filters the list of entities based on the time that the list was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.
   *
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListEntityRecognizersRequest {
  /**
   * Filters the list of entities returned. You can filter on `Status`, `SubmitTimeBefore`, or `SubmitTimeAfter`. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: EntityRecognizerFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return on each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEntityRecognizersResponse {
  /**
   * The list of properties of an entity recognizer.
   *
   * @public
   */
  EntityRecognizerPropertiesList?: EntityRecognizerProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntityRecognizerSummariesRequest {
  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return on each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes the information about an entity recognizer and its versions.
 *
 * @public
 */
export interface EntityRecognizerSummary {
  /**
   * The name that you assigned the entity recognizer.
   *
   * @public
   */
  RecognizerName?: string | undefined;

  /**
   * The number of versions you created.
   *
   * @public
   */
  NumberOfVersions?: number | undefined;

  /**
   * The time that the latest entity recognizer version was submitted for processing.
   *
   * @public
   */
  LatestVersionCreatedAt?: Date | undefined;

  /**
   * The version name you assigned to the latest entity recognizer version.
   *
   * @public
   */
  LatestVersionName?: string | undefined;

  /**
   * Provides the status of the latest entity recognizer version.
   *
   * @public
   */
  LatestVersionStatus?: ModelStatus | undefined;
}

/**
 * @public
 */
export interface ListEntityRecognizerSummariesResponse {
  /**
   * The list entity recognizer summaries.
   *
   * @public
   */
  EntityRecognizerSummariesList?: EntityRecognizerSummary[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information for filtering a list of event detection jobs.
 *
 * @public
 */
export interface EventsDetectionJobFilter {
  /**
   * Filters on the name of the events detection job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Filters the list of jobs based on job status. Returns only jobs with the specified status.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
   *
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
   *
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListEventsDetectionJobsRequest {
  /**
   * Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: EventsDetectionJobFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEventsDetectionJobsResponse {
  /**
   * A list containing the properties of each job that is returned.
   *
   * @public
   */
  EventsDetectionJobPropertiesList?: EventsDetectionJobProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filter the flywheel iterations based on creation time.
 *
 * @public
 */
export interface FlywheelIterationFilter {
  /**
   * Filter the flywheel iterations to include iterations created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Filter the flywheel iterations to include iterations created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListFlywheelIterationHistoryRequest {
  /**
   * The ARN of the flywheel.
   *
   * @public
   */
  FlywheelArn: string | undefined;

  /**
   * Filter the flywheel iteration history based on creation time.
   *
   * @public
   */
  Filter?: FlywheelIterationFilter | undefined;

  /**
   * Next token
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of iteration history results to return
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFlywheelIterationHistoryResponse {
  /**
   * List of flywheel iteration properties
   *
   * @public
   */
  FlywheelIterationPropertiesList?: FlywheelIterationProperties[] | undefined;

  /**
   * Next token
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filter the flywheels based on creation time or flywheel status.
 *
 * @public
 */
export interface FlywheelFilter {
  /**
   * Filter the flywheels based on the flywheel status.
   *
   * @public
   */
  Status?: FlywheelStatus | undefined;

  /**
   * Filter the flywheels to include flywheels created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Filter the flywheels to include flywheels created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListFlywheelsRequest {
  /**
   * Filters the flywheels that are returned. You can filter flywheels on their status, or the date and time that they were submitted. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: FlywheelFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in a response. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Flywheel summary information.
 *
 * @public
 */
export interface FlywheelSummary {
  /**
   * The Amazon Resource Number (ARN) of the flywheel
   *
   * @public
   */
  FlywheelArn?: string | undefined;

  /**
   * ARN of the active model version for the flywheel.
   *
   * @public
   */
  ActiveModelArn?: string | undefined;

  /**
   * Amazon S3 URI of the data lake location.
   *
   * @public
   */
  DataLakeS3Uri?: string | undefined;

  /**
   * The status of the flywheel.
   *
   * @public
   */
  Status?: FlywheelStatus | undefined;

  /**
   * Model type of the flywheel's model.
   *
   * @public
   */
  ModelType?: ModelType | undefined;

  /**
   * A description of the status of the flywheel.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Creation time of the flywheel.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Last modified time for the flywheel.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The most recent flywheel iteration.
   *
   * @public
   */
  LatestFlywheelIteration?: string | undefined;
}

/**
 * @public
 */
export interface ListFlywheelsResponse {
  /**
   * A list of flywheel properties retrieved by the service in response to the request.
   *
   * @public
   */
  FlywheelSummaryList?: FlywheelSummary[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.
 *
 * @public
 */
export interface KeyPhrasesDetectionJobFilter {
  /**
   * Filters on the name of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Filters the list of jobs based on job status. Returns only jobs with the specified status.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
   *
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
   *
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListKeyPhrasesDetectionJobsRequest {
  /**
   * Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: KeyPhrasesDetectionJobFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListKeyPhrasesDetectionJobsResponse {
  /**
   * A list containing the properties of each job that is returned.
   *
   * @public
   */
  KeyPhrasesDetectionJobPropertiesList?: KeyPhrasesDetectionJobProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information for filtering a list of PII entity detection jobs.
 *
 * @public
 */
export interface PiiEntitiesDetectionJobFilter {
  /**
   * Filters on the name of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Filters the list of jobs based on job status. Returns only jobs with the specified status.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
   *
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
   *
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListPiiEntitiesDetectionJobsRequest {
  /**
   * Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: PiiEntitiesDetectionJobFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPiiEntitiesDetectionJobsResponse {
  /**
   * A list containing the properties of each job that is returned.
   *
   * @public
   */
  PiiEntitiesDetectionJobPropertiesList?: PiiEntitiesDetectionJobProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.
 *
 * @public
 */
export interface SentimentDetectionJobFilter {
  /**
   * Filters on the name of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Filters the list of jobs based on job status. Returns only jobs with the specified status.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
   *
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
   *
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListSentimentDetectionJobsRequest {
  /**
   * Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: SentimentDetectionJobFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSentimentDetectionJobsResponse {
  /**
   * A list containing the properties of each job that is returned.
   *
   * @public
   */
  SentimentDetectionJobPropertiesList?: SentimentDetectionJobProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
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
   * The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying.
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
   * The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Tags associated with the Amazon Comprehend resource being queried. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Provides information for filtering a list of dominant language detection jobs. For more information, see the `ListTargetedSentimentDetectionJobs` operation.
 *
 * @public
 */
export interface TargetedSentimentDetectionJobFilter {
  /**
   * Filters on the name of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Filters the list of jobs based on job status. Returns only jobs with the specified status.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
   *
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
   *
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListTargetedSentimentDetectionJobsRequest {
  /**
   * Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
   *
   * @public
   */
  Filter?: TargetedSentimentDetectionJobFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTargetedSentimentDetectionJobsResponse {
  /**
   * A list containing the properties of each job that is returned.
   *
   * @public
   */
  TargetedSentimentDetectionJobPropertiesList?: TargetedSentimentDetectionJobProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information for filtering topic detection jobs. For more information, see .
 *
 * @public
 */
export interface TopicsDetectionJobFilter {
  /**
   * @public
   */
  JobName?: string | undefined;

  /**
   * Filters the list of topic detection jobs based on job status. Returns only jobs with the specified status.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Only returns jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.
   *
   * @public
   */
  SubmitTimeBefore?: Date | undefined;

  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Only returns jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.
   *
   * @public
   */
  SubmitTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListTopicsDetectionJobsRequest {
  /**
   * Filters the jobs that are returned. Jobs can be filtered on their name, status, or the date and time that they were submitted. You can set only one filter at a time.
   *
   * @public
   */
  Filter?: TopicsDetectionJobFilter | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in each page. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTopicsDetectionJobsResponse {
  /**
   * A list containing the properties of each job that is returned.
   *
   * @public
   */
  TopicsDetectionJobPropertiesList?: TopicsDetectionJobProperties[] | undefined;

  /**
   * Identifies the next page of results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the custom model to attach the policy to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The JSON resource-based policy to attach to your custom model. Provide your JSON as a UTF-8 encoded string without line breaks. To provide valid JSON for your policy, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy:
   *
   * `"\{\"attribute\": \"value\", \"attribute\": [\"value\"]\}"`
   *
   * To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values:
   *
   * `'\{"attribute": "value", "attribute": ["value"]\}'`
   *
   * @public
   */
  ResourcePolicy: string | undefined;

  /**
   * The revision ID that Amazon Comprehend assigned to the policy that you are updating. If you are creating a new policy that has no prior version, don't use this parameter. Amazon Comprehend creates the revision ID for you.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a new revision ID, and it deletes the prior version of the policy.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface StartDocumentClassificationJobRequest {
  /**
   * The identifier of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the document classifier to use to process the job.
   *
   * @public
   */
  DocumentClassifierArn?: string | undefined;

  /**
   * Specifies the format and location of the input data for the job.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * Specifies where to send the output files.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your document classification job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Tags to associate with the document classification job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Number (ARN) of the flywheel associated with the model to use.
   *
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface StartDocumentClassificationJobResponse {
  /**
   * The identifier generated for the job. To get the status of the job, use this identifier with the `DescribeDocumentClassificationJob` operation.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:document-classification-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The status of the job:
   *
   * - SUBMITTED - The job has been received and queued for processing.
   * - IN_PROGRESS - Amazon Comprehend is processing the job.
   * - COMPLETED - The job was successfully completed and the output is available.
   * - FAILED - The job did not complete. For details, use the `DescribeDocumentClassificationJob` operation.
   * - STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is processing the request.
   * - STOPPED - The job was successfully stopped without completing.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * The ARN of the custom classification model.
   *
   * @public
   */
  DocumentClassifierArn?: string | undefined;
}

/**
 * @public
 */
export interface StartDominantLanguageDetectionJobRequest {
  /**
   * Specifies the format and location of the input data for the job.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * Specifies where to send the output files.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see [Role-based permissions](https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions).
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * An identifier for the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your dominant language detection job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Tags to associate with the dominant language detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartDominantLanguageDetectionJobResponse {
  /**
   * The identifier generated for the job. To get the status of a job, use this identifier with the operation.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dominant language detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:dominant-language-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:dominant-language-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The status of the job.
   *
   * - SUBMITTED - The job has been received and is queued for processing.
   * - IN_PROGRESS - Amazon Comprehend is processing the job.
   * - COMPLETED - The job was successfully completed and the output is available.
   * - FAILED - The job did not complete. To get details, use the operation.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StartEntitiesDetectionJobRequest {
  /**
   * Specifies the format and location of the input data for the job.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * Specifies where to send the output files.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see [Role-based permissions](https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions).
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The identifier of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the specific entity recognizer to be used by the `StartEntitiesDetectionJob`. This ARN is optional and is only used for a custom entity recognition job.
   *
   * @public
   */
  EntityRecognizerArn?: string | undefined;

  /**
   * The language of the input documents. All documents must be in the same language. You can specify any of the languages supported by Amazon Comprehend. If custom entities recognition is used, this parameter is ignored and the language used for training the model is used instead.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your entity detection job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Tags to associate with the entities detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Number (ARN) of the flywheel associated with the model to use.
   *
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface StartEntitiesDetectionJobResponse {
  /**
   * The identifier generated for the job. To get the status of job, use this identifier with the operation.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entities detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:entities-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:entities-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The status of the job.
   *
   * - SUBMITTED - The job has been received and is queued for processing.
   * - IN_PROGRESS - Amazon Comprehend is processing the job.
   * - COMPLETED - The job was successfully completed and the output is available.
   * - FAILED - The job did not complete. To get details, use the operation.
   * - STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is processing the request.
   * - STOPPED - The job was successfully stopped without completing.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * The ARN of the custom entity recognition model.
   *
   * @public
   */
  EntityRecognizerArn?: string | undefined;
}

/**
 * @public
 */
export interface StartEventsDetectionJobRequest {
  /**
   * Specifies the format and location of the input data for the job.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * Specifies where to send the output files.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The identifier of the events detection job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The language code of the input documents.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * An unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The types of events to detect in the input documents.
   *
   * @public
   */
  TargetEventTypes: string[] | undefined;

  /**
   * Tags to associate with the events detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartEventsDetectionJobResponse {
  /**
   * An unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:events-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The status of the events detection job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StartFlywheelIterationRequest {
  /**
   * The ARN of the flywheel.
   *
   * @public
   */
  FlywheelArn: string | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StartFlywheelIterationResponse {
  /**
   * @public
   */
  FlywheelArn?: string | undefined;

  /**
   * @public
   */
  FlywheelIterationId?: string | undefined;
}

/**
 * @public
 */
export interface StartKeyPhrasesDetectionJobRequest {
  /**
   * Specifies the format and location of the input data for the job.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * Specifies where to send the output files.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see [Role-based permissions](https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions).
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The identifier of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your key phrases detection job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Tags to associate with the key phrases detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartKeyPhrasesDetectionJobResponse {
  /**
   * The identifier generated for the job. To get the status of a job, use this identifier with the operation.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the key phrase detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:key-phrases-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:key-phrases-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The status of the job.
   *
   * - SUBMITTED - The job has been received and is queued for processing.
   * - IN_PROGRESS - Amazon Comprehend is processing the job.
   * - COMPLETED - The job was successfully completed and the output is available.
   * - FAILED - The job did not complete. To get details, use the operation.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StartPiiEntitiesDetectionJobRequest {
  /**
   * The input properties for a PII entities detection job.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * Provides conﬁguration parameters for the output of PII entity detection jobs.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * Specifies whether the output provides the locations (offsets) of PII entities or a file in which PII entities are redacted.
   *
   * @public
   */
  Mode: PiiEntitiesDetectionMode | undefined;

  /**
   * Provides configuration parameters for PII entity redaction.
   *
   * This parameter is required if you set the `Mode` parameter to `ONLY_REDACTION`. In that case, you must provide a `RedactionConfig` definition that includes the `PiiEntityTypes` parameter.
   *
   * @public
   */
  RedactionConfig?: RedactionConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The identifier of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The language of the input documents. Enter the language code for English (en) or Spanish (es).
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Tags to associate with the PII entities detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartPiiEntitiesDetectionJobResponse {
  /**
   * The identifier generated for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the PII entity detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:pii-entities-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The status of the job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StartSentimentDetectionJobRequest {
  /**
   * Specifies the format and location of the input data for the job.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * Specifies where to send the output files.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see [Role-based permissions](https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions).
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The identifier of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your sentiment detection job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Tags to associate with the sentiment detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartSentimentDetectionJobResponse {
  /**
   * The identifier generated for the job. To get the status of a job, use this identifier with the operation.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the sentiment detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:sentiment-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The status of the job.
   *
   * - SUBMITTED - The job has been received and is queued for processing.
   * - IN_PROGRESS - Amazon Comprehend is processing the job.
   * - COMPLETED - The job was successfully completed and the output is available.
   * - FAILED - The job did not complete. To get details, use the operation.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StartTargetedSentimentDetectionJobRequest {
  /**
   * The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * Specifies where to send the output files.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see [Role-based permissions](https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions).
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The identifier of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The language of the input documents. Currently, English is the only supported language.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Tags to associate with the targeted sentiment detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartTargetedSentimentDetectionJobResponse {
  /**
   * The identifier generated for the job. To get the status of a job, use this identifier with the `DescribeTargetedSentimentDetectionJob` operation.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the targeted sentiment detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:targeted-sentiment-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:targeted-sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The status of the job.
   *
   * - SUBMITTED - The job has been received and is queued for processing.
   * - IN_PROGRESS - Amazon Comprehend is processing the job.
   * - COMPLETED - The job was successfully completed and the output is available.
   * - FAILED - The job did not complete. To get details, use the `DescribeTargetedSentimentDetectionJob` operation.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StartTopicsDetectionJobRequest {
  /**
   * Specifies the format and location of the input data for the job.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * Specifies where to send the output files. The output is a compressed archive with two files, `topic-terms.csv` that lists the terms associated with each topic, and `doc-topics.csv` that lists the documents associated with each topic
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see [Role-based permissions](https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions).
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The identifier of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The number of topics to detect.
   *
   * @public
   */
  NumberOfTopics?: number | undefined;

  /**
   * A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your topic detection job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Tags to associate with the topics detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartTopicsDetectionJobResponse {
  /**
   * The identifier generated for the job. To get the status of the job, use this identifier with the `DescribeTopicDetectionJob` operation.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the topics detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:
   *
   * `arn:<partition>:comprehend:<region>:<account-id>:topics-detection-job/<job-id>`
   *
   * The following is an example job ARN:
   *
   * `arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab`
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The status of the job:
   *
   * - SUBMITTED - The job has been received and is queued for processing.
   * - IN_PROGRESS - Amazon Comprehend is processing the job.
   * - COMPLETED - The job was successfully completed and the output is available.
   * - FAILED - The job did not complete. To get details, use the `DescribeTopicDetectionJob` operation.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopDominantLanguageDetectionJobRequest {
  /**
   * The identifier of the dominant language detection job to stop.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopDominantLanguageDetectionJobResponse {
  /**
   * The identifier of the dominant language detection job to stop.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Either `STOP_REQUESTED` if the job is currently running, or `STOPPED` if the job was previously stopped with the `StopDominantLanguageDetectionJob` operation.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopEntitiesDetectionJobRequest {
  /**
   * The identifier of the entities detection job to stop.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopEntitiesDetectionJobResponse {
  /**
   * The identifier of the entities detection job to stop.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Either `STOP_REQUESTED` if the job is currently running, or `STOPPED` if the job was previously stopped with the `StopEntitiesDetectionJob` operation.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopEventsDetectionJobRequest {
  /**
   * The identifier of the events detection job to stop.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopEventsDetectionJobResponse {
  /**
   * The identifier of the events detection job to stop.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The status of the events detection job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopKeyPhrasesDetectionJobRequest {
  /**
   * The identifier of the key phrases detection job to stop.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopKeyPhrasesDetectionJobResponse {
  /**
   * The identifier of the key phrases detection job to stop.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Either `STOP_REQUESTED` if the job is currently running, or `STOPPED` if the job was previously stopped with the `StopKeyPhrasesDetectionJob` operation.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopPiiEntitiesDetectionJobRequest {
  /**
   * The identifier of the PII entities detection job to stop.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopPiiEntitiesDetectionJobResponse {
  /**
   * The identifier of the PII entities detection job to stop.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The status of the PII entities detection job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopSentimentDetectionJobRequest {
  /**
   * The identifier of the sentiment detection job to stop.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopSentimentDetectionJobResponse {
  /**
   * The identifier of the sentiment detection job to stop.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Either `STOP_REQUESTED` if the job is currently running, or `STOPPED` if the job was previously stopped with the `StopSentimentDetectionJob` operation.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopTargetedSentimentDetectionJobRequest {
  /**
   * The identifier of the targeted sentiment detection job to stop.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopTargetedSentimentDetectionJobResponse {
  /**
   * The identifier of the targeted sentiment detection job to stop.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Either `STOP_REQUESTED` if the job is currently running, or `STOPPED` if the job was previously stopped with the `StopSentimentDetectionJob` operation.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopTrainingDocumentClassifierRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the document classifier currently being trained.
   *
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
   * The Amazon Resource Name (ARN) that identifies the entity recognizer currently being trained.
   *
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
   * The Amazon Resource Name (ARN) of the given Amazon Comprehend resource to which you want to associate the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Tags being associated with a specific Amazon Comprehend resource. There can be a maximum of 50 tags (both existing and pending) associated with a specific resource.
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
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the given Amazon Comprehend resource from which you want to remove the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The initial part of a key-value pair that forms a tag being removed from a given resource. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. Keys must be unique and cannot be duplicated for a particular resource.
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
export interface UpdateEndpointRequest {
  /**
   * The Amazon Resource Number (ARN) of the endpoint being updated.
   *
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * The ARN of the new model to use when updating an existing endpoint.
   *
   * @public
   */
  DesiredModelArn?: string | undefined;

  /**
   * The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second.
   *
   * @public
   */
  DesiredInferenceUnits?: number | undefined;

  /**
   * Data access role ARN to use in case the new model is encrypted with a customer CMK.
   *
   * @public
   */
  DesiredDataAccessRoleArn?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the flywheel
   *
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointResponse {
  /**
   * The Amazon Resource Number (ARN) of the new model.
   *
   * @public
   */
  DesiredModelArn?: string | undefined;
}

/**
 * Data security configuration.
 *
 * @public
 */
export interface UpdateDataSecurityConfig {
  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:
   *
   * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt the volume.
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFlywheelRequest {
  /**
   * The Amazon Resource Number (ARN) of the flywheel to update.
   *
   * @public
   */
  FlywheelArn: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the active model version.
   *
   * @public
   */
  ActiveModelArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to access the flywheel data.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * Flywheel data security configuration.
   *
   * @public
   */
  DataSecurityConfig?: UpdateDataSecurityConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFlywheelResponse {
  /**
   * The flywheel properties.
   *
   * @public
   */
  FlywheelProperties?: FlywheelProperties | undefined;
}
