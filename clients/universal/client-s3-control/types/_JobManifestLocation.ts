/**
 * <p>Contains the information required to locate a manifest object.</p>
 */
export interface _JobManifestLocation {
  /**
   * <p>The Amazon Resource Name (ARN) for a manifest object.</p>
   */
  ObjectArn: string;

  /**
   * <p>The optional version ID to identify a specific version of the manifest object.</p>
   */
  ObjectVersionId?: string;

  /**
   * <p>The ETag for the specified manifest object.</p>
   */
  ETag: string;
}

export type _UnmarshalledJobManifestLocation = _JobManifestLocation;
