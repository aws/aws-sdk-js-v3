// smithy-typescript generated code
/**
 * Request structure for checking revocation status.
 *
 * @public
 */
export interface GetRevocationStatusRequest {
  /**
   * The timestamp when the artifact was signed, in ISO 8601 format.
   *
   * @public
   */
  signatureTimestamp: Date | undefined;

  /**
   * The platform identifier for the signing platform used.
   *
   * @public
   */
  platformId: string | undefined;

  /**
   * The ARN of the signing profile version used to sign the artifact.
   *
   * @public
   */
  profileVersionArn: string | undefined;

  /**
   * The ARN of the signing job that produced the signature.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * List of certificate hashes to check for revocation.
   *
   * @public
   */
  certificateHashes: string[] | undefined;
}

/**
 * Response containing the list of revoked entities.
 *
 * @public
 */
export interface GetRevocationStatusResponse {
  /**
   * List of entity identifiers that have been revoked. Empty if no revocations found.
   *
   * @public
   */
  revokedEntities?: string[] | undefined;
}
