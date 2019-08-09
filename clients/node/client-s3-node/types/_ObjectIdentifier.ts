/**
 * <p/>
 */
export interface _ObjectIdentifier {
  /**
   * <p>Key name of the object to delete.</p>
   */
  Key: string;

  /**
   * <p>VersionId for the specific version of the object to delete.</p>
   */
  VersionId?: string;
}

export type _UnmarshalledObjectIdentifier = _ObjectIdentifier;
