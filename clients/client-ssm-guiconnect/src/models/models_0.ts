// smithy-typescript generated code
/**
 * <p>The S3 bucket where RDP connection recordings are stored.</p>
 * @public
 */
export interface S3Bucket {
  /**
   * <p>The Amazon Web Services account number that owns the S3 bucket.</p>
   * @public
   */
  BucketOwner: string | undefined;

  /**
   * <p>The name of the S3 bucket where RDP connection recordings are stored.</p>
   * @public
   */
  BucketName: string | undefined;
}

/**
 * <p>Determines where recordings of RDP connections are stored.</p>
 * @public
 */
export interface RecordingDestinations {
  /**
   * <p>The S3 bucket where RDP connection recordings are stored.</p>
   * @public
   */
  S3Buckets: S3Bucket[] | undefined;
}

/**
 * <p>The set of preferences used for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region. This includes details such as which S3 bucket recordings are stored in.</p>
 * @public
 */
export interface ConnectionRecordingPreferences {
  /**
   * <p>Determines where recordings of RDP connections are stored.</p>
   * @public
   */
  RecordingDestinations: RecordingDestinations | undefined;

  /**
   * <p>The ARN of a KMS key that is used to encrypt data while it is being processed by the service. This key must exist in the same Amazon Web Services Region as the node you start an RDP connection to.</p>
   * @public
   */
  KMSKeyArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionRecordingPreferencesRequest {
  /**
   * <p>User-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionRecordingPreferencesResponse {
  /**
   * <p>Service-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionRecordingPreferencesResponse {
  /**
   * <p>Service-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The set of preferences used for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region. This includes details such as which S3 bucket recordings are stored in.</p>
   * @public
   */
  ConnectionRecordingPreferences?: ConnectionRecordingPreferences | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionRecordingPreferencesRequest {
  /**
   * <p>The set of preferences used for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region. This includes details such as which S3 bucket recordings are stored in.</p>
   * @public
   */
  ConnectionRecordingPreferences: ConnectionRecordingPreferences | undefined;

  /**
   * <p>User-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionRecordingPreferencesResponse {
  /**
   * <p>Service-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The set of preferences used for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region. This includes details such as which S3 bucket recordings are stored in.</p>
   * @public
   */
  ConnectionRecordingPreferences?: ConnectionRecordingPreferences | undefined;
}
