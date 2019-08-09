import {
  _UserStorageMetadata,
  _UnmarshalledUserStorageMetadata
} from "./_UserStorageMetadata";

/**
 * <p>Describes a user.</p>
 */
export interface _User {
  /**
   * <p>The ID of the user.</p>
   */
  Id?: string;

  /**
   * <p>The login name of the user.</p>
   */
  Username?: string;

  /**
   * <p>The email address of the user.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The given name of the user.</p>
   */
  GivenName?: string;

  /**
   * <p>The surname of the user.</p>
   */
  Surname?: string;

  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The ID of the root folder.</p>
   */
  RootFolderId?: string;

  /**
   * <p>The ID of the recycle bin folder.</p>
   */
  RecycleBinFolderId?: string;

  /**
   * <p>The status of the user.</p>
   */
  Status?: "ACTIVE" | "INACTIVE" | "PENDING" | string;

  /**
   * <p>The type of user.</p>
   */
  Type?:
    | "USER"
    | "ADMIN"
    | "POWERUSER"
    | "MINIMALUSER"
    | "WORKSPACESUSER"
    | string;

  /**
   * <p>The time when the user was created.</p>
   */
  CreatedTimestamp?: Date | string | number;

  /**
   * <p>The time when the user was modified.</p>
   */
  ModifiedTimestamp?: Date | string | number;

  /**
   * <p>The time zone ID of the user.</p>
   */
  TimeZoneId?: string;

  /**
   * <p>The locale of the user.</p>
   */
  Locale?:
    | "en"
    | "fr"
    | "ko"
    | "de"
    | "es"
    | "ja"
    | "ru"
    | "zh_CN"
    | "zh_TW"
    | "pt_BR"
    | "default"
    | string;

  /**
   * <p>The storage for the user.</p>
   */
  Storage?: _UserStorageMetadata;
}

export interface _UnmarshalledUser extends _User {
  /**
   * <p>The time when the user was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time when the user was modified.</p>
   */
  ModifiedTimestamp?: Date;

  /**
   * <p>The storage for the user.</p>
   */
  Storage?: _UnmarshalledUserStorageMetadata;
}
