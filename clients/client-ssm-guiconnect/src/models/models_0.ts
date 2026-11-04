// smithy-typescript generated code
/**
 * The S3 bucket where RDP connection recordings are stored.
 *
 * @public
 */
export interface S3Bucket {
  /**
   * The Amazon Web Services account number that owns the S3 bucket.
   *
   * @public
   */
  BucketOwner: string | undefined;

  /**
   * The name of the S3 bucket where RDP connection recordings are stored.
   *
   * @public
   */
  BucketName: string | undefined;
}

/**
 * Determines where recordings of RDP connections are stored.
 *
 * @public
 */
export interface RecordingDestinations {
  /**
   * The S3 bucket where RDP connection recordings are stored.
   *
   * @public
   */
  S3Buckets: S3Bucket[] | undefined;
}

/**
 * The set of preferences used for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region. This includes details such as which S3 bucket recordings are stored in.
 *
 * @public
 */
export interface ConnectionRecordingPreferences {
  /**
   * Determines where recordings of RDP connections are stored.
   *
   * @public
   */
  RecordingDestinations: RecordingDestinations | undefined;

  /**
   * The ARN of a KMS key that is used to encrypt data while it is being processed by the service. This key must exist in the same Amazon Web Services Region as the node you start an RDP connection to.
   *
   * @public
   */
  KMSKeyArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionRecordingPreferencesRequest {
  /**
   * User-provided idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionRecordingPreferencesResponse {
  /**
   * Service-provided idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionRecordingPreferencesResponse {
  /**
   * Service-provided idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The set of preferences used for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region. This includes details such as which S3 bucket recordings are stored in.
   *
   * @public
   */
  ConnectionRecordingPreferences?: ConnectionRecordingPreferences | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionRecordingPreferencesRequest {
  /**
   * The set of preferences used for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region. This includes details such as which S3 bucket recordings are stored in.
   *
   * @public
   */
  ConnectionRecordingPreferences: ConnectionRecordingPreferences | undefined;

  /**
   * User-provided idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionRecordingPreferencesResponse {
  /**
   * Service-provided idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The set of preferences used for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region. This includes details such as which S3 bucket recordings are stored in.
   *
   * @public
   */
  ConnectionRecordingPreferences?: ConnectionRecordingPreferences | undefined;
}
