/**
 * <p>A structure that contains information about one version of a secret.</p>
 */
export interface _SecretVersionsListEntry {
  /**
   * <p>The unique version identifier of this version of the secret.</p>
   */
  VersionId?: string;

  /**
   * <p>An array of staging labels that are currently associated with this version of the secret.</p>
   */
  VersionStages?: Array<string> | Iterable<string>;

  /**
   * <p>The date that this version of the secret was last accessed. Note that the resolution of this field is at the date level and does not include the time.</p>
   */
  LastAccessedDate?: Date | string | number;

  /**
   * <p>The date and time this version of the secret was created.</p>
   */
  CreatedDate?: Date | string | number;
}

export interface _UnmarshalledSecretVersionsListEntry
  extends _SecretVersionsListEntry {
  /**
   * <p>An array of staging labels that are currently associated with this version of the secret.</p>
   */
  VersionStages?: Array<string>;

  /**
   * <p>The date that this version of the secret was last accessed. Note that the resolution of this field is at the date level and does not include the time.</p>
   */
  LastAccessedDate?: Date;

  /**
   * <p>The date and time this version of the secret was created.</p>
   */
  CreatedDate?: Date;
}
