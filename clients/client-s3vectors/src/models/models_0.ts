// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type { DataType, DistanceMetric, IndexMode, SseType } from "./enums";

/**
 * The encryption configuration for a vector bucket or index. By default, if you don't specify, all new vectors in Amazon S3 vector buckets use server-side encryption with Amazon S3 managed keys (SSE-S3), specifically `AES256`. You can optionally override bucket level encryption settings, and set a specific encryption configuration for a vector index at the time of index creation.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * The server-side encryption type to use for the encryption configuration of the vector bucket. By default, if you don't specify, all new vectors in Amazon S3 vector buckets use server-side encryption with Amazon S3 managed keys (SSE-S3), specifically `AES256`.
   *
   * @public
   */
  sseType?: SseType | undefined;

  /**
   * Amazon Web Services Key Management Service (KMS) customer managed key ID to use for the encryption configuration. This parameter is allowed if and only if `sseType` is set to `aws:kms`.
   *
   * To specify the KMS key, you must use the format of the KMS key Amazon Resource Name (ARN).
   *
   * For example, specify Key ARN in the following format: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * The metadata configuration for a vector index.
 *
 * @public
 */
export interface MetadataConfiguration {
  /**
   * Non-filterable metadata keys allow you to enrich vectors with additional context during storage and retrieval. Unlike default metadata keys, these keys can’t be used as query filters. Non-filterable metadata keys can be retrieved but can’t be searched, queried, or filtered. You can access non-filterable metadata keys of your vectors after finding the vectors. For more information about non-filterable metadata keys, see [Vectors](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-vectors.html) and [Limitations and restrictions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-limitations.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  nonFilterableMetadataKeys: string[] | undefined;
}

/**
 * @public
 */
export interface CreateIndexInput {
  /**
   * The name of the vector bucket to create the vector index in.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vector bucket to create the vector index in.
   *
   * @public
   */
  vectorBucketArn?: string | undefined;

  /**
   * The name of the vector index to create.
   *
   * @public
   */
  indexName: string | undefined;

  /**
   * The data type of the vectors to be inserted into the vector index.
   *
   * @public
   */
  dataType: DataType | undefined;

  /**
   * The dimensions of the vectors to be inserted into the vector index.
   *
   * @public
   */
  dimension: number | undefined;

  /**
   * The distance metric to be used for similarity search.
   *
   * @public
   */
  distanceMetric: DistanceMetric | undefined;

  /**
   * The metadata configuration for the vector index.
   *
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * The encryption configuration for a vector index. By default, if you don't specify, all new vectors in the vector index will use the encryption configuration of the vector bucket.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * An array of user-defined tags that you would like to apply to the vector index that you are creating. A tag is a key-value pair that you apply to your resources. Tags can help you organize, track costs, and control access to resources. For more information, see [Tagging for cost allocation or attribute-based access control (ABAC)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html).
   *
   * > **Note:** You must have the `s3vectors:TagResource` permission in addition to `s3vectors:CreateIndex` permission to create a vector index with tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIndexOutput {
  /**
   * The Amazon Resource Name (ARN) of the newly created vector index.
   *
   * @public
   */
  indexArn: string | undefined;
}

/**
 * Contains information about a validation exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * A path about the validation exception.
   *
   * @public
   */
  path: string | undefined;

  /**
   * A message about the validation exception.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface CreateVectorBucketInput {
  /**
   * The name of the vector bucket to create.
   *
   * @public
   */
  vectorBucketName: string | undefined;

  /**
   * The encryption configuration for the vector bucket. By default, if you don't specify, all new vectors in Amazon S3 vector buckets use server-side encryption with Amazon S3 managed keys (SSE-S3), specifically `AES256`.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * An array of user-defined tags that you would like to apply to the vector bucket that you are creating. A tag is a key-value pair that you apply to your resources. Tags can help you organize and control access to resources. For more information, see [Tagging for cost allocation or attribute-based access control (ABAC)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html).
   *
   * > **Note:** You must have the `s3vectors:TagResource` permission in addition to `s3vectors:CreateVectorBucket` permission to create a vector bucket with tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateVectorBucketOutput {
  /**
   * The Amazon Resource Name (ARN) of the newly created vector bucket.
   *
   * @public
   */
  vectorBucketArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIndexInput {
  /**
   * The name of the vector bucket that contains the vector index.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The name of the vector index to delete.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The ARN of the vector index to delete.
   *
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
   * The name of the vector bucket to delete.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The ARN of the vector bucket to delete.
   *
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
   * The name of the vector bucket to delete the policy from.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The ARN of the vector bucket to delete the policy from.
   *
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
   * The name of the vector bucket that contains the vector index.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The name of the vector index that contains a vector you want to delete.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The ARN of the vector index that contains a vector you want to delete.
   *
   * @public
   */
  indexArn?: string | undefined;

  /**
   * The keys of the vectors to delete.
   *
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
   * The name of the vector bucket that contains the vector index.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The name of the vector index.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The ARN of the vector index.
   *
   * @public
   */
  indexArn?: string | undefined;
}

/**
 * The attributes of a vector index.
 *
 * @public
 */
export interface Index {
  /**
   * The name of the vector bucket that contains the vector index.
   *
   * @public
   */
  vectorBucketName: string | undefined;

  /**
   * The name of the vector index.
   *
   * @public
   */
  indexName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vector index.
   *
   * @public
   */
  indexArn: string | undefined;

  /**
   * Date and time when the vector index was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The data type of the vectors inserted into the vector index.
   *
   * @public
   */
  dataType: DataType | undefined;

  /**
   * The number of values in the vectors that are inserted into the vector index.
   *
   * @public
   */
  dimension: number | undefined;

  /**
   * The distance metric to be used for similarity search.
   *
   * @public
   */
  distanceMetric: DistanceMetric | undefined;

  /**
   * The metadata configuration for the vector index.
   *
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * The encryption configuration for a vector index. By default, if you don't specify, all new vectors in the vector index will use the encryption configuration of the vector bucket.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The mode that determines how the vector index processes queries.
   *
   * Valid values:
   *
   * - `CLASSIC` - Applies metadata filters during the vector search.
   * - `ENHANCED` - Applies metadata filters before the vector search.
   *
   * @public
   */
  indexMode?: IndexMode | undefined;
}

/**
 * @public
 */
export interface GetIndexOutput {
  /**
   * The attributes of the vector index.
   *
   * @public
   */
  index: Index | undefined;
}

/**
 * The vector data in different formats.
 *
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
   * The vector data as 32-bit floating point numbers. The number of elements in this array must exactly match the dimension of the vector index where the operation is being performed.
   *
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
 * The attributes of a vector returned by the `GetVectors` operation.
 *
 * @public
 */
export interface GetOutputVector {
  /**
   * The name of the vector.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The vector data of the vector.
   *
   * @public
   */
  data?: VectorData | undefined;

  /**
   * Metadata about the vector.
   *
   * @public
   */
  metadata?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface GetVectorBucketInput {
  /**
   * The name of the vector bucket to retrieve information about.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The ARN of the vector bucket to retrieve information about.
   *
   * @public
   */
  vectorBucketArn?: string | undefined;
}

/**
 * The attributes of a vector bucket.
 *
 * @public
 */
export interface VectorBucket {
  /**
   * The name of the vector bucket.
   *
   * @public
   */
  vectorBucketName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vector bucket.
   *
   * @public
   */
  vectorBucketArn: string | undefined;

  /**
   * Date and time when the vector bucket was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The encryption configuration for the vector bucket.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The mode that is automatically assigned to new vector indexes in the vector bucket. Changing the default index mode doesn't affect existing vector indexes.
   *
   * @public
   */
  defaultIndexMode?: IndexMode | undefined;
}

/**
 * @public
 */
export interface GetVectorBucketOutput {
  /**
   * The attributes of the vector bucket.
   *
   * @public
   */
  vectorBucket: VectorBucket | undefined;
}

/**
 * @public
 */
export interface GetVectorBucketPolicyInput {
  /**
   * The name of the vector bucket.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The ARN of the vector bucket.
   *
   * @public
   */
  vectorBucketArn?: string | undefined;
}

/**
 * @public
 */
export interface GetVectorBucketPolicyOutput {
  /**
   * The `JSON` that defines the policy.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetVectorsInput {
  /**
   * The name of the vector bucket that contains the vector index.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The name of the vector index.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The ARN of the vector index.
   *
   * @public
   */
  indexArn?: string | undefined;

  /**
   * The names of the vectors you want to return attributes for.
   *
   * @public
   */
  keys: string[] | undefined;

  /**
   * Indicates whether to include the vector data in the response. The default value is `false`.
   *
   * @public
   */
  returnData?: boolean | undefined;

  /**
   * Indicates whether to include metadata in the response. The default value is `false`.
   *
   * @public
   */
  returnMetadata?: boolean | undefined;
}

/**
 * @public
 */
export interface GetVectorsOutput {
  /**
   * The attributes of the vectors.
   *
   * @public
   */
  vectors: GetOutputVector[] | undefined;
}

/**
 * @public
 */
export interface ListIndexesInput {
  /**
   * The name of the vector bucket that contains the vector indexes.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The ARN of the vector bucket that contains the vector indexes.
   *
   * @public
   */
  vectorBucketArn?: string | undefined;

  /**
   * The maximum number of items to be returned in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The previous pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Limits the response to vector indexes that begin with the specified prefix.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Summary information about a vector index.
 *
 * @public
 */
export interface IndexSummary {
  /**
   * The name of the vector bucket that contains the vector index.
   *
   * @public
   */
  vectorBucketName: string | undefined;

  /**
   * The name of the vector index.
   *
   * @public
   */
  indexName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vector index.
   *
   * @public
   */
  indexArn: string | undefined;

  /**
   * Date and time when the vector index was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListIndexesOutput {
  /**
   * The next pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The attributes of the vector indexes
   *
   * @public
   */
  indexes: IndexSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateIndexModeInput {
  /**
   * The name of the vector bucket that contains the vector index.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The name of the vector index to update.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vector index to update.
   *
   * @public
   */
  indexArn?: string | undefined;

  /**
   * The new mode for the vector index.
   *
   * Valid values:
   *
   * - `CLASSIC` - Applies metadata filters during the vector search. You can specify `CLASSIC` only for a vector index in a vector bucket created before September 30, 2026.
   * - `ENHANCED` - Applies metadata filters before the vector search.
   *
   * @public
   */
  indexMode: IndexMode | undefined;
}

/**
 * @public
 */
export interface UpdateIndexModeOutput {}

/**
 * @public
 */
export interface ListVectorsInput {
  /**
   * The name of the vector bucket.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The name of the vector index.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The Amazon resource Name (ARN) of the vector index.
   *
   * @public
   */
  indexArn?: string | undefined;

  /**
   * The maximum number of vectors to return on a page.
   *
   * If you don't specify `maxResults`, the `ListVectors` operation uses a default value of 500.
   *
   * If the processed dataset size exceeds 1 MB before reaching the `maxResults` value, the operation stops and returns the vectors that are retrieved up to that point, along with a `nextToken` that you can use in a subsequent request to retrieve the next set of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token from a previous request. The value of this field is empty for an initial request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * For a parallel `ListVectors` request, `segmentCount` represents the total number of vector segments into which the `ListVectors` operation will be divided. The value of `segmentCount` corresponds to the number of application workers that will perform the parallel `ListVectors` operation. For example, if you want to use four application threads to list vectors in a vector index, specify a `segmentCount` value of 4.
   *
   * If you specify a `segmentCount` value of 1, the `ListVectors` operation will be sequential rather than parallel.
   *
   * If you specify `segmentCount`, you must also specify `segmentIndex`.
   *
   * @public
   */
  segmentCount?: number | undefined;

  /**
   * For a parallel `ListVectors` request, `segmentIndex` is the index of the segment from which to list vectors in the current request. It identifies an individual segment to be listed by an application worker.
   *
   * Segment IDs are zero-based, so the first segment is always 0. For example, if you want to use four application threads to list vectors in a vector index, then the first thread specifies a `segmentIndex` value of 0, the second thread specifies 1, and so on.
   *
   * The value of `segmentIndex` must be less than the value provided for `segmentCount`.
   *
   * If you provide `segmentIndex`, you must also provide `segmentCount`.
   *
   * @public
   */
  segmentIndex?: number | undefined;

  /**
   * If true, the vector data of each vector will be included in the response. The default value is `false`.
   *
   * @public
   */
  returnData?: boolean | undefined;

  /**
   * If true, the metadata associated with each vector will be included in the response. The default value is `false`.
   *
   * @public
   */
  returnMetadata?: boolean | undefined;
}

/**
 * The attributes of a vector returned by the `ListVectors` operation.
 *
 * @public
 */
export interface ListOutputVector {
  /**
   * The name of the vector.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The vector data of the vector.
   *
   * @public
   */
  data?: VectorData | undefined;

  /**
   * Metadata about the vector.
   *
   * @public
   */
  metadata?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface ListVectorsOutput {
  /**
   * Pagination token to be used in the subsequent request. The field is empty if no further pagination is required.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Vectors in the current segment.
   *
   * @public
   */
  vectors: ListOutputVector[] | undefined;
}

/**
 * The attributes of a vector to add to a vector index.
 *
 * @public
 */
export interface PutInputVector {
  /**
   * The name of the vector. The key uniquely identifies the vector in a vector index.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The vector data of the vector.
   *
   * Vector dimensions must match the dimension count that's configured for the vector index.
   *
   * - For the `cosine` distance metric, zero vectors (vectors containing all zeros) aren't allowed.
   * - For both `cosine` and `euclidean` distance metrics, vector data must contain only valid floating-point values. Invalid values such as NaN (Not a Number) or Infinity aren't allowed.
   *
   * @public
   */
  data: VectorData | undefined;

  /**
   * Metadata about the vector. All metadata entries undergo validation to ensure they meet the format requirements for size and data types.
   *
   * @public
   */
  metadata?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface PutVectorsInput {
  /**
   * The name of the vector bucket that contains the vector index.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The name of the vector index where you want to write vectors.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The ARN of the vector index where you want to write vectors.
   *
   * @public
   */
  indexArn?: string | undefined;

  /**
   * The vectors to add to a vector index. The number of vectors in a single request must not exceed the resource capacity, otherwise the request will be rejected with the error `ServiceUnavailableException` with the error message "Currently unable to handle the request".
   *
   * @public
   */
  vectors: PutInputVector[] | undefined;
}

/**
 * @public
 */
export interface PutVectorsOutput {}

/**
 * @public
 */
export interface QueryVectorsInput {
  /**
   * The name of the vector bucket that contains the vector index.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The name of the vector index that you want to query.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The ARN of the vector index that you want to query.
   *
   * @public
   */
  indexArn?: string | undefined;

  /**
   * The number of results to return for each query.
   *
   * @public
   */
  topK: number | undefined;

  /**
   * The query vector. Ensure that the query vector has the same dimension as the dimension of the vector index that's being queried. For example, if your vector index contains vectors with 384 dimensions, your query vector must also have 384 dimensions.
   *
   * @public
   */
  queryVector: VectorData | undefined;

  /**
   * Metadata filter to apply during the query. For more information about metadata keys, see [Metadata filtering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-metadata-filtering.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  filter?: __DocumentType | undefined;

  /**
   * The mode to use to process the query. If you don't specify a query mode, the operation uses the mode that's currently configured for the vector index.
   *
   * Valid values:
   *
   * - `CLASSIC` - Applies metadata filters during the vector search. You can't specify `CLASSIC` for an `ENHANCED` index.
   * - `ENHANCED` - Applies metadata filters before the vector search.
   *
   * @public
   */
  queryMode?: IndexMode | undefined;

  /**
   * Indicates whether to include metadata in the response. The default value is `false`.
   *
   * @public
   */
  returnMetadata?: boolean | undefined;

  /**
   * Indicates whether to include the computed distance in the response. The default value is `false`.
   *
   * @public
   */
  returnDistance?: boolean | undefined;

  /**
   * Pagination token from a previous request. The value of this field is empty for an initial request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The attributes of a vector in the approximate nearest neighbor search.
 *
 * @public
 */
export interface QueryOutputVector {
  /**
   * The measure of similarity between the vector in the response and the query vector.
   *
   * @public
   */
  distance?: number | undefined;

  /**
   * The key of the vector in the approximate nearest neighbor search.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The metadata associated with the vector, if requested.
   *
   * @public
   */
  metadata?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface QueryVectorsOutput {
  /**
   * The vectors in the approximate nearest neighbor search.
   *
   * @public
   */
  vectors: QueryOutputVector[] | undefined;

  /**
   * The distance metric that was used for the similarity search calculation. This is the same distance metric that was configured for the vector index when it was created.
   *
   * @public
   */
  distanceMetric: DistanceMetric | undefined;

  /**
   * Pagination token to be used in the subsequent page request. The field is empty if no further pagination is required.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 Vectors resource that you want to list tags for. The tagged resource can be a vector bucket or a vector index.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The user-defined tags that are applied to the S3 Vectors resource. For more information, see [Tagging for cost allocation or attribute-based access control (ABAC)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html).
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVectorBucketsInput {
  /**
   * The maximum number of vector buckets to be returned in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The previous pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Limits the response to vector buckets that begin with the specified prefix.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Summary information about a vector bucket.
 *
 * @public
 */
export interface VectorBucketSummary {
  /**
   * The name of the vector bucket.
   *
   * @public
   */
  vectorBucketName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vector bucket.
   *
   * @public
   */
  vectorBucketArn: string | undefined;

  /**
   * Date and time when the vector bucket was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListVectorBucketsOutput {
  /**
   * The element is included in the response when there are more buckets to be listed with pagination.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of vector buckets owned by the requester.
   *
   * @public
   */
  vectorBuckets: VectorBucketSummary[] | undefined;
}

/**
 * @public
 */
export interface PutVectorBucketDefaultIndexModeInput {
  /**
   * The name of the vector bucket to update.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vector bucket to update.
   *
   * @public
   */
  vectorBucketArn?: string | undefined;

  /**
   * The default mode to assign to new vector indexes in the vector bucket. This change doesn't affect existing vector indexes.
   *
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
   * The name of the vector bucket.
   *
   * @public
   */
  vectorBucketName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vector bucket.
   *
   * @public
   */
  vectorBucketArn?: string | undefined;

  /**
   * The `JSON` that defines the policy. For more information about bucket policies for S3 Vectors, see [Managing vector bucket policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-bucket-policy.html) in the *Amazon S3 User Guide*.
   *
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
   * The Amazon Resource Name (ARN) of the Amazon S3 Vectors resource that you're applying tags to. The tagged resource can be a vector bucket or a vector index.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The user-defined tag that you want to add to the specified S3 Vectors resource. For more information, see [Tagging for cost allocation or attribute-based access control (ABAC)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html).
   *
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
   * The Amazon Resource Name (ARN) of the Amazon S3 Vectors resource that you're removing tags from. The tagged resource can be a vector bucket or a vector index.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The array of tag keys that you're removing from the S3 Vectors resource. For more information, see [Tagging for cost allocation or attribute-based access control (ABAC)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html).
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
