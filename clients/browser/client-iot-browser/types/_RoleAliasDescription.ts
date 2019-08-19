/**
 * <p>Role alias description.</p>
 */
export interface _RoleAliasDescription {
  /**
   * <p>The role alias.</p>
   */
  roleAlias?: string;

  /**
   * <p>The ARN of the role alias.</p>
   */
  roleAliasArn?: string;

  /**
   * <p>The role ARN.</p>
   */
  roleArn?: string;

  /**
   * <p>The role alias owner.</p>
   */
  owner?: string;

  /**
   * <p>The number of seconds for which the credential is valid.</p>
   */
  credentialDurationSeconds?: number;

  /**
   * <p>The UNIX timestamp of when the role alias was created.</p>
   */
  creationDate?: Date | string | number;

  /**
   * <p>The UNIX timestamp of when the role alias was last modified.</p>
   */
  lastModifiedDate?: Date | string | number;
}

export interface _UnmarshalledRoleAliasDescription
  extends _RoleAliasDescription {
  /**
   * <p>The UNIX timestamp of when the role alias was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The UNIX timestamp of when the role alias was last modified.</p>
   */
  lastModifiedDate?: Date;
}
