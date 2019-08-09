/**
 * <p>Describes a connector that enables persistent storage for users.</p>
 */
export interface _StorageConnector {
  /**
   * <p>The type of storage connector.</p>
   */
  ConnectorType: "HOMEFOLDERS" | "GOOGLE_DRIVE" | "ONE_DRIVE" | string;

  /**
   * <p>The ARN of the storage connector.</p>
   */
  ResourceIdentifier?: string;

  /**
   * <p>The names of the domains for the account.</p>
   */
  Domains?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledStorageConnector extends _StorageConnector {
  /**
   * <p>The names of the domains for the account.</p>
   */
  Domains?: Array<string>;
}
