// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type { AnalyzerStatus, DataType, DistanceMetric, IndexMode, LanguageCode, SseType } from "./enums";

/**
 * <p>The raw BM25 relevance score for a single searchable metadata key.</p>
 * @public
 */
export interface Bm25Score {
  /**
   * <p>The searchable metadata key that the score applies to.</p>
   * @public
   */
  metadataKey: string | undefined;

  /**
   * <p>The BM25 relevance score.</p>
   * @public
   */
  score: number | undefined;
}

/**
 * <p>The encryption configuration for a vector bucket or index. By default, if you don't specify, all new vectors in Amazon S3 vector buckets use server-side encryption with Amazon S3 managed keys (SSE-S3), specifically <code>AES256</code>. You can optionally override bucket level encryption settings, and set a specific encryption configuration for a vector index at the time of index creation.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>The server-side encryption type to use for the encryption configuration of the vector bucket. By default, if you don't specify, all new vectors in Amazon S3 vector buckets use server-side encryption with Amazon S3 managed keys (SSE-S3), specifically <code>AES256</code>.</p>
   * @public
   */
  sseType?: SseType | undefined;

  /**
   * <p>Amazon Web Services Key Management Service (KMS) customer managed key ID to use for the encryption configuration. This parameter is allowed if and only if <code>sseType</code> is set to <code>aws:kms</code>.</p> <p>To specify the KMS key, you must use the format of the KMS key Amazon Resource Name (ARN).</p> <p>For example, specify Key ARN in the following format: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * <p>A full-text search configuration for a single metadata key.</p>
 * @public
 */
export interface TextSearchConfiguration {
  /**
   * <p>The metadata key to make full-text searchable.</p>
   * @public
   */
  metadataKey: string | undefined;

  /**
   * <p>The language that the text search analyzer uses. Valid values are <code>en</code> (English), <code>fr</code> (French), <code>es</code> (Spanish), <code>pt</code> (Portuguese), <code>it</code> (Italian), <code>de</code> (German), <code>nl</code> (Dutch), <code>zh</code> (Chinese), <code>ja</code> (Japanese), and <code>ko</code> (Korean). If you don't specify a language, Amazon S3 Vectors uses the default standard analyzer.</p>
   * @public
   */
  language?: LanguageCode | undefined;

  /**
   * <p>The backfill status of the text search configuration. Valid values are <code>ACTIVE</code>, which indicates that the analyzer is built and serving queries, and <code>BUILDING</code>, which indicates that the analyzer is being backfilled and isn't yet serving queries. This field is returned by <code>GetIndex</code>.</p>
   * @public
   */
  status?: AnalyzerStatus | undefined;
}

/**
 * <p>The metadata configuration for a vector index.</p>
 * @public
 */
export interface MetadataConfiguration {
  /**
   * <p>Non-filterable metadata keys allow you to enrich vectors with additional context during storage and retrieval. You can't use these keys in metadata filters. You can still make a non-filterable key full-text searchable by configuring it separately in <code>textSearchConfigurations</code>. You can retrieve non-filterable metadata keys after finding the vectors. For more information about non-filterable metadata keys, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-vectors.html">Vectors</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-limitations.html">Limitations and restrictions</a> in the <i>Amazon S3 User Guide</i>. </p>
   * @public
   */
  nonFilterableMetadataKeys?: string[] | undefined;

  /**
   * <p>Full-text search configurations for searchable metadata keys.</p>
   * @public
   */
  textSearchConfigurations?: TextSearchConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateIndexInput {
  /**
   * <p>The name of the vector bucket to create the vector index in. </p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vector bucket to create the vector index in.</p>
   * @public
   */
  vectorBucketArn?: string | undefined;

  /**
   * <p>The name of the vector index to create. </p>
   * @public
   */
  indexName: string | undefined;

  /**
   * <p>The data type of the vectors to be inserted into the vector index. </p>
   * @public
   */
  dataType: DataType | undefined;

  /**
   * <p>The dimensions of the vectors to be inserted into the vector index. </p>
   * @public
   */
  dimension: number | undefined;

  /**
   * <p>The distance metric to be used for similarity search. </p>
   * @public
   */
  distanceMetric: DistanceMetric | undefined;

  /**
   * <p>The metadata configuration for the vector index. </p>
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * <p>The encryption configuration for a vector index. By default, if you don't specify, all new vectors in the vector index will use the encryption configuration of the vector bucket.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>An array of user-defined tags that you would like to apply to the vector index that you are creating. A tag is a key-value pair that you apply to your resources. Tags can help you organize, track costs, and control access to resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html">Tagging for cost allocation or attribute-based access control (ABAC)</a>.</p> <note> <p>You must have the <code>s3vectors:TagResource</code> permission in addition to <code>s3vectors:CreateIndex</code> permission to create a vector index with tags.</p> </note>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIndexOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created vector index.</p>
   * @public
   */
  indexArn: string | undefined;
}

/**
 * <p>Contains information about a validation exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>A path about the validation exception.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>A message about the validation exception.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface CreateVectorBucketInput {
  /**
   * <p>The name of the vector bucket to create. </p>
   * @public
   */
  vectorBucketName: string | undefined;

  /**
   * <p>The encryption configuration for the vector bucket. By default, if you don't specify, all new vectors in Amazon S3 vector buckets use server-side encryption with Amazon S3 managed keys (SSE-S3), specifically <code>AES256</code>. </p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>An array of user-defined tags that you would like to apply to the vector bucket that you are creating. A tag is a key-value pair that you apply to your resources. Tags can help you organize and control access to resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html">Tagging for cost allocation or attribute-based access control (ABAC)</a>.</p> <note> <p>You must have the <code>s3vectors:TagResource</code> permission in addition to <code>s3vectors:CreateVectorBucket</code> permission to create a vector bucket with tags.</p> </note>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateVectorBucketOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created vector bucket.</p>
   * @public
   */
  vectorBucketArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIndexInput {
  /**
   * <p>The name of the vector bucket that contains the vector index. </p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The name of the vector index to delete. </p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The ARN of the vector index to delete.</p>
   * @public
   */
  indexArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteIndexOutput {}

/**
 * @public
 */
export interface DeleteVectorBucketInput {
  /**
   * <p>The name of the vector bucket to delete.</p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The ARN of the vector bucket to delete.</p>
   * @public
   */
  vectorBucketArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVectorBucketOutput {}

/**
 * @public
 */
export interface DeleteVectorBucketPolicyInput {
  /**
   * <p>The name of the vector bucket to delete the policy from.</p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The ARN of the vector bucket to delete the policy from.</p>
   * @public
   */
  vectorBucketArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVectorBucketPolicyOutput {}

/**
 * @public
 */
export interface DeleteVectorsInput {
  /**
   * <p>The name of the vector bucket that contains the vector index. </p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The name of the vector index that contains a vector you want to delete.</p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The ARN of the vector index that contains a vector you want to delete.</p>
   * @public
   */
  indexArn?: string | undefined;

  /**
   * <p>The keys of the vectors to delete. </p>
   * @public
   */
  keys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVectorsOutput {}

/**
 * @public
 */
export interface GetIndexInput {
  /**
   * <p>The name of the vector bucket that contains the vector index. </p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The name of the vector index.</p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The ARN of the vector index.</p>
   * @public
   */
  indexArn?: string | undefined;
}

/**
 * <p>The attributes of a vector index.</p>
 * @public
 */
export interface Index {
  /**
   * <p>The name of the vector bucket that contains the vector index. </p>
   * @public
   */
  vectorBucketName: string | undefined;

  /**
   * <p>The name of the vector index.</p>
   * @public
   */
  indexName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vector index.</p>
   * @public
   */
  indexArn: string | undefined;

  /**
   * <p>Date and time when the vector index was created. </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The data type of the vectors inserted into the vector index. </p>
   * @public
   */
  dataType: DataType | undefined;

  /**
   * <p>The number of values in the vectors that are inserted into the vector index. </p>
   * @public
   */
  dimension: number | undefined;

  /**
   * <p>The distance metric to be used for similarity search. </p>
   * @public
   */
  distanceMetric: DistanceMetric | undefined;

  /**
   * <p>The metadata configuration for the vector index. </p>
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * <p>The encryption configuration for a vector index. By default, if you don't specify, all new vectors in the vector index will use the encryption configuration of the vector bucket.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>The mode that determines how the vector index processes queries.</p> <p>Valid values:</p> <ul> <li> <p> <code>CLASSIC</code> - Applies metadata filters during the vector search.</p> </li> <li> <p> <code>ENHANCED</code> - Applies metadata filters before the vector search.</p> </li> </ul>
   * @public
   */
  indexMode?: IndexMode | undefined;
}

/**
 * @public
 */
export interface GetIndexOutput {
  /**
   * <p>The attributes of the vector index.</p>
   * @public
   */
  index: Index | undefined;
}

/**
 * <p>The vector data in different formats.</p>
 * @public
 */
export type VectorData =
  | VectorData.Float32Member
  | VectorData.$UnknownMember;

/**
 * @public
 */
export namespace VectorData {
  /**
   * <p>The vector data as 32-bit floating point numbers. The number of elements in this array must exactly match the dimension of the vector index where the operation is being performed.</p>
   * @public
   */
  export interface Float32Member {
    float32: number[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    float32?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    float32: (value: number[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The attributes of a vector returned by the <code>GetVectors</code> operation.</p>
 * @public
 */
export interface GetOutputVector {
  /**
   * <p>The name of the vector. </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The vector data of the vector. </p>
   * @public
   */
  data?: VectorData | undefined;

  /**
   * <p>Metadata about the vector. </p>
   * @public
   */
  metadata?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface GetVectorBucketInput {
  /**
   * <p>The name of the vector bucket to retrieve information about.</p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The ARN of the vector bucket to retrieve information about.</p>
   * @public
   */
  vectorBucketArn?: string | undefined;
}

/**
 * <p>The attributes of a vector bucket. </p>
 * @public
 */
export interface VectorBucket {
  /**
   * <p>The name of the vector bucket. </p>
   * @public
   */
  vectorBucketName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vector bucket. </p>
   * @public
   */
  vectorBucketArn: string | undefined;

  /**
   * <p>Date and time when the vector bucket was created. </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The encryption configuration for the vector bucket.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>The mode that is automatically assigned to new vector indexes in the vector bucket. Changing the default index mode doesn't affect existing vector indexes.</p>
   * @public
   */
  defaultIndexMode?: IndexMode | undefined;
}

/**
 * @public
 */
export interface GetVectorBucketOutput {
  /**
   * <p>The attributes of the vector bucket.</p>
   * @public
   */
  vectorBucket: VectorBucket | undefined;
}

/**
 * @public
 */
export interface GetVectorBucketPolicyInput {
  /**
   * <p>The name of the vector bucket.</p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The ARN of the vector bucket.</p>
   * @public
   */
  vectorBucketArn?: string | undefined;
}

/**
 * @public
 */
export interface GetVectorBucketPolicyOutput {
  /**
   * <p>The <code>JSON</code> that defines the policy.</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetVectorsInput {
  /**
   * <p>The name of the vector bucket that contains the vector index. </p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The name of the vector index.</p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The ARN of the vector index.</p>
   * @public
   */
  indexArn?: string | undefined;

  /**
   * <p>The names of the vectors you want to return attributes for. </p>
   * @public
   */
  keys: string[] | undefined;

  /**
   * <p>Indicates whether to include the vector data in the response. The default value is <code>false</code>.</p>
   * @public
   */
  returnData?: boolean | undefined;

  /**
   * <p>Indicates whether to include metadata in the response. The default value is <code>false</code>.</p>
   * @public
   */
  returnMetadata?: boolean | undefined;
}

/**
 * @public
 */
export interface GetVectorsOutput {
  /**
   * <p>The attributes of the vectors.</p>
   * @public
   */
  vectors: GetOutputVector[] | undefined;
}

/**
 * @public
 */
export interface ListIndexesInput {
  /**
   * <p>The name of the vector bucket that contains the vector indexes. </p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The ARN of the vector bucket that contains the vector indexes.</p>
   * @public
   */
  vectorBucketArn?: string | undefined;

  /**
   * <p>The maximum number of items to be returned in the response. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The previous pagination token. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Limits the response to vector indexes that begin with the specified prefix.</p>
   * @public
   */
  prefix?: string | undefined;
}

/**
 * <p>Summary information about a vector index.</p>
 * @public
 */
export interface IndexSummary {
  /**
   * <p>The name of the vector bucket that contains the vector index. </p>
   * @public
   */
  vectorBucketName: string | undefined;

  /**
   * <p>The name of the vector index.</p>
   * @public
   */
  indexName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vector index.</p>
   * @public
   */
  indexArn: string | undefined;

  /**
   * <p>Date and time when the vector index was created. </p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListIndexesOutput {
  /**
   * <p>The next pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The attributes of the vector indexes</p>
   * @public
   */
  indexes: IndexSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateIndexModeInput {
  /**
   * <p>The name of the vector bucket that contains the vector index.</p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The name of the vector index to update.</p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vector index to update.</p>
   * @public
   */
  indexArn?: string | undefined;

  /**
   * <p>The new mode for the vector index.</p> <p>Valid values:</p> <ul> <li> <p> <code>CLASSIC</code> - Applies metadata filters during the vector search. You can specify <code>CLASSIC</code> only for a vector index in a vector bucket created before September 30, 2026.</p> </li> <li> <p> <code>ENHANCED</code> - Applies metadata filters before the vector search.</p> </li> </ul>
   * @public
   */
  indexMode: IndexMode | undefined;
}

/**
 * @public
 */
export interface UpdateIndexModeOutput {}

/**
 * <p>Text search configurations to add to a vector index.</p>
 * @public
 */
export interface MetadataConfigurationAdd {
  /**
   * <p>Text search configurations to add. Amazon S3 Vectors begins building the corresponding full-text indexes after the update is accepted.</p>
   * @public
   */
  textSearchConfigurations?: TextSearchConfiguration[] | undefined;
}

/**
 * <p>A searchable metadata key that identifies a text search configuration.</p>
 * @public
 */
export interface TextSearchConfigurationKey {
  /**
   * <p>The searchable metadata key whose text search configuration to delete.</p>
   * @public
   */
  metadataKey: string | undefined;
}

/**
 * <p>Text search configurations to delete from a vector index.</p>
 * @public
 */
export interface MetadataConfigurationDelete {
  /**
   * <p>Searchable metadata keys whose text search configurations to delete.</p>
   * @public
   */
  textSearchConfigurations?: TextSearchConfigurationKey[] | undefined;
}

/**
 * @public
 */
export interface UpdateMetadataConfigurationInput {
  /**
   * <p>The name of the vector bucket that contains the vector index.</p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The name of the vector index to update.</p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vector index to update.</p>
   * @public
   */
  indexArn?: string | undefined;

  /**
   * <p>Text search configurations to add to the vector index.</p>
   * @public
   */
  add?: MetadataConfigurationAdd | undefined;

  /**
   * <p>Text search configurations to delete from the vector index.</p>
   * @public
   */
  delete?: MetadataConfigurationDelete | undefined;
}

/**
 * @public
 */
export interface UpdateMetadataConfigurationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated vector index.</p>
   * @public
   */
  indexArn: string | undefined;
}

/**
 * @public
 */
export interface ListVectorsInput {
  /**
   * <p>The name of the vector bucket. </p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The name of the vector index.</p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The Amazon resource Name (ARN) of the vector index.</p>
   * @public
   */
  indexArn?: string | undefined;

  /**
   * <p>The maximum number of vectors to return on a page.</p> <p>If you don't specify <code>maxResults</code>, the <code>ListVectors</code> operation uses a default value of 500.</p> <p>If the processed dataset size exceeds 1 MB before reaching the <code>maxResults</code> value, the operation stops and returns the vectors that are retrieved up to that point, along with a <code>nextToken</code> that you can use in a subsequent request to retrieve the next set of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Pagination token from a previous request. The value of this field is empty for an initial request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>For a parallel <code>ListVectors</code> request, <code>segmentCount</code> represents the total number of vector segments into which the <code>ListVectors</code> operation will be divided. The value of <code>segmentCount</code> corresponds to the number of application workers that will perform the parallel <code>ListVectors</code> operation. For example, if you want to use four application threads to list vectors in a vector index, specify a <code>segmentCount</code> value of 4. </p> <p>If you specify a <code>segmentCount</code> value of 1, the <code>ListVectors</code> operation will be sequential rather than parallel.</p> <p>If you specify <code>segmentCount</code>, you must also specify <code>segmentIndex</code>.</p>
   * @public
   */
  segmentCount?: number | undefined;

  /**
   * <p>For a parallel <code>ListVectors</code> request, <code>segmentIndex</code> is the index of the segment from which to list vectors in the current request. It identifies an individual segment to be listed by an application worker. </p> <p>Segment IDs are zero-based, so the first segment is always 0. For example, if you want to use four application threads to list vectors in a vector index, then the first thread specifies a <code>segmentIndex</code> value of 0, the second thread specifies 1, and so on. </p> <p>The value of <code>segmentIndex</code> must be less than the value provided for <code>segmentCount</code>. </p> <p>If you provide <code>segmentIndex</code>, you must also provide <code>segmentCount</code>.</p>
   * @public
   */
  segmentIndex?: number | undefined;

  /**
   * <p>If true, the vector data of each vector will be included in the response. The default value is <code>false</code>.</p>
   * @public
   */
  returnData?: boolean | undefined;

  /**
   * <p>If true, the metadata associated with each vector will be included in the response. The default value is <code>false</code>.</p>
   * @public
   */
  returnMetadata?: boolean | undefined;
}

/**
 * <p>The attributes of a vector returned by the <code>ListVectors</code> operation.</p>
 * @public
 */
export interface ListOutputVector {
  /**
   * <p>The name of the vector. </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The vector data of the vector. </p>
   * @public
   */
  data?: VectorData | undefined;

  /**
   * <p>Metadata about the vector. </p>
   * @public
   */
  metadata?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface ListVectorsOutput {
  /**
   * <p>Pagination token to be used in the subsequent request. The field is empty if no further pagination is required.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Vectors in the current segment.</p>
   * @public
   */
  vectors: ListOutputVector[] | undefined;
}

/**
 * <p>The attributes of a vector to add to a vector index.</p>
 * @public
 */
export interface PutInputVector {
  /**
   * <p>The name of the vector. The key uniquely identifies the vector in a vector index. </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The vector data of the vector. </p> <p>Vector dimensions must match the dimension count that's configured for the vector index.</p> <ul> <li> <p>For the <code>cosine</code> distance metric, zero vectors (vectors containing all zeros) aren't allowed.</p> </li> <li> <p>For both <code>cosine</code> and <code>euclidean</code> distance metrics, vector data must contain only valid floating-point values. Invalid values such as NaN (Not a Number) or Infinity aren't allowed.</p> </li> </ul>
   * @public
   */
  data: VectorData | undefined;

  /**
   * <p>Metadata about the vector. All metadata entries undergo validation to ensure they meet the format requirements for size and data types.</p>
   * @public
   */
  metadata?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface PutVectorsInput {
  /**
   * <p>The name of the vector bucket that contains the vector index. </p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The name of the vector index where you want to write vectors. </p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The ARN of the vector index where you want to write vectors.</p>
   * @public
   */
  indexArn?: string | undefined;

  /**
   * <p>The vectors to add to a vector index. The number of vectors in a single request must not exceed the resource capacity, otherwise the request will be rejected with the error <code>ServiceUnavailableException</code> with the error message "Currently unable to handle the request".</p>
   * @public
   */
  vectors: PutInputVector[] | undefined;
}

/**
 * @public
 */
export interface PutVectorsOutput {}

/**
 * <p>A full-text search query for a single metadata key.</p>
 * @public
 */
export interface QueryText {
  /**
   * <p>The full-text query string.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>The searchable metadata key to query.</p>
   * @public
   */
  metadataKey: string | undefined;
}

/**
 * @public
 */
export interface QueryVectorsInput {
  /**
   * <p>The name of the vector bucket that contains the vector index. </p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The name of the vector index that you want to query. </p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The ARN of the vector index that you want to query.</p>
   * @public
   */
  indexArn?: string | undefined;

  /**
   * <p>The number of results to return for each query.</p>
   * @public
   */
  topK: number | undefined;

  /**
   * <p>The query vector for vector similarity search. The query vector must have the same dimension as the vector index. For example, if the vector index has 384 dimensions, the query vector must also have 384 dimensions. You can omit this parameter when you supply <code>queryTexts</code> to perform a full-text-only search. A request must include <code>queryVector</code>, <code>queryTexts</code>, or both.</p>
   * @public
   */
  queryVector?: VectorData | undefined;

  /**
   * <p>Metadata filter to apply during the query. For more information about metadata keys, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-metadata-filtering.html">Metadata filtering</a> in the <i>Amazon S3 User Guide</i>. </p>
   * @public
   */
  filter?: __DocumentType | undefined;

  /**
   * <p>The mode to use to process the query. If you don't specify a query mode, the operation uses the mode that's currently configured for the vector index.</p> <p>Valid values:</p> <ul> <li> <p> <code>CLASSIC</code> - Applies metadata filters during the vector search. You can't specify <code>CLASSIC</code> for an <code>ENHANCED</code> index.</p> </li> <li> <p> <code>ENHANCED</code> - Applies metadata filters before the vector search.</p> </li> </ul>
   * @public
   */
  queryMode?: IndexMode | undefined;

  /**
   * <p>Indicates whether to include metadata in the response. The default value is <code>false</code>.</p>
   * @public
   */
  returnMetadata?: boolean | undefined;

  /**
   * <p>Indicates whether to include the computed distance in the response. The default value is <code>false</code>.</p>
   * @public
   */
  returnDistance?: boolean | undefined;

  /**
   * <p>Full-text queries for searchable metadata keys. Omit <code>queryVector</code> to run a full-text-only search, or provide both fields to run a hybrid search. Each entry must target a distinct searchable metadata key.</p>
   * @public
   */
  queryTexts?: QueryText[] | undefined;

  /**
   * <p>Indicates whether to include relevance scores in the response. Full-text-only results can include BM25 scores. Hybrid results can also include a Reciprocal Rank Fusion (RRF) score and vector distance. This setting doesn't add scores to vector-only requests. The default value is <code>false</code>.</p>
   * @public
   */
  returnScores?: boolean | undefined;

  /**
   * <p>Pagination token from a previous request. The value of this field is empty for an initial request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Relevance scores for a full-text-only or hybrid search result.</p>
 * @public
 */
export interface QueryScores {
  /**
   * <p>The Reciprocal Rank Fusion (RRF) score that combines the vector and full-text rankings. This field is returned only for hybrid requests.</p>
   * @public
   */
  fused?: number | undefined;

  /**
   * <p>The BM25 scores for the searchable metadata keys that the result matched.</p>
   * @public
   */
  bm25Scores?: Bm25Score[] | undefined;

  /**
   * <p>The distance from the query vector. This field is returned when a hybrid result matches the vector search.</p>
   * @public
   */
  vectorDistance?: number | undefined;
}

/**
 * <p>Contains the key and optional distance, relevance scores, and metadata for a vector returned by the <code>QueryVectors</code> operation.</p>
 * @public
 */
export interface QueryOutputVector {
  /**
   * <p>The measure of similarity between the vector in the response and the query vector.</p>
   * @public
   */
  distance?: number | undefined;

  /**
   * <p>The relevance scores for a full-text-only or hybrid result, when requested through <code>returnScores</code>.</p>
   * @public
   */
  scores?: QueryScores | undefined;

  /**
   * <p>The key of the matching vector.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The metadata associated with the vector, if requested.</p>
   * @public
   */
  metadata?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface QueryVectorsOutput {
  /**
   * <p>The matching vector results in ranked order. Results are ranked by vector distance for a vector-only search, by BM25 relevance for a full-text-only search, and by RRF score for a hybrid search.</p>
   * @public
   */
  vectors: QueryOutputVector[] | undefined;

  /**
   * <p>The distance metric that was used for the similarity search calculation. This is the same distance metric that was configured for the vector index when it was created.</p>
   * @public
   */
  distanceMetric: DistanceMetric | undefined;

  /**
   * <p>Pagination token to be used in the subsequent page request. The field is empty if no further pagination is required.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 Vectors resource that you want to list tags for. The tagged resource can be a vector bucket or a vector index. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The user-defined tags that are applied to the S3 Vectors resource. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html">Tagging for cost allocation or attribute-based access control (ABAC)</a>.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVectorBucketsInput {
  /**
   * <p>The maximum number of vector buckets to be returned in the response. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The previous pagination token. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Limits the response to vector buckets that begin with the specified prefix.</p>
   * @public
   */
  prefix?: string | undefined;
}

/**
 * <p>Summary information about a vector bucket.</p>
 * @public
 */
export interface VectorBucketSummary {
  /**
   * <p>The name of the vector bucket. </p>
   * @public
   */
  vectorBucketName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vector bucket. </p>
   * @public
   */
  vectorBucketArn: string | undefined;

  /**
   * <p>Date and time when the vector bucket was created. </p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListVectorBucketsOutput {
  /**
   * <p>The element is included in the response when there are more buckets to be listed with pagination. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of vector buckets owned by the requester. </p>
   * @public
   */
  vectorBuckets: VectorBucketSummary[] | undefined;
}

/**
 * @public
 */
export interface PutVectorBucketDefaultIndexModeInput {
  /**
   * <p>The name of the vector bucket to update.</p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vector bucket to update.</p>
   * @public
   */
  vectorBucketArn?: string | undefined;

  /**
   * <p>The default mode to assign to new vector indexes in the vector bucket. This change doesn't affect existing vector indexes.</p>
   * @public
   */
  defaultIndexMode: IndexMode | undefined;
}

/**
 * @public
 */
export interface PutVectorBucketDefaultIndexModeOutput {}

/**
 * @public
 */
export interface PutVectorBucketPolicyInput {
  /**
   * <p>The name of the vector bucket.</p>
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vector bucket.</p>
   * @public
   */
  vectorBucketArn?: string | undefined;

  /**
   * <p>The <code>JSON</code> that defines the policy. For more information about bucket policies for S3 Vectors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-bucket-policy.html">Managing vector bucket policies</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutVectorBucketPolicyOutput {}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 Vectors resource that you're applying tags to. The tagged resource can be a vector bucket or a vector index. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The user-defined tag that you want to add to the specified S3 Vectors resource. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html">Tagging for cost allocation or attribute-based access control (ABAC)</a>.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 Vectors resource that you're removing tags from. The tagged resource can be a vector bucket or a vector index. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The array of tag keys that you're removing from the S3 Vectors resource. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html">Tagging for cost allocation or attribute-based access control (ABAC)</a>.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
