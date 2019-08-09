import {
  _ServiceAccountCredentials,
  _UnmarshalledServiceAccountCredentials
} from "./_ServiceAccountCredentials";

/**
 * <p>Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 */
export interface _DirectoryConfig {
  /**
   * <p>The fully qualified name of the directory (for example, corp.example.com).</p>
   */
  DirectoryName: string;

  /**
   * <p>The distinguished names of the organizational units for computer accounts.</p>
   */
  OrganizationalUnitDistinguishedNames?: Array<string> | Iterable<string>;

  /**
   * <p>The credentials for the service account used by the fleet or image builder to connect to the directory.</p>
   */
  ServiceAccountCredentials?: _ServiceAccountCredentials;

  /**
   * <p>The time the directory configuration was created.</p>
   */
  CreatedTime?: Date | string | number;
}

export interface _UnmarshalledDirectoryConfig extends _DirectoryConfig {
  /**
   * <p>The distinguished names of the organizational units for computer accounts.</p>
   */
  OrganizationalUnitDistinguishedNames?: Array<string>;

  /**
   * <p>The credentials for the service account used by the fleet or image builder to connect to the directory.</p>
   */
  ServiceAccountCredentials?: _UnmarshalledServiceAccountCredentials;

  /**
   * <p>The time the directory configuration was created.</p>
   */
  CreatedTime?: Date;
}
