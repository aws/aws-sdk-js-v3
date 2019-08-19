/**
 * <p>Information about build output artifacts.</p>
 */
export interface _BuildArtifacts {
  /**
   * <p>Information about the location of the build artifacts.</p>
   */
  location?: string;

  /**
   * <p>The SHA-256 hash of the build artifact.</p> <p>You can use this hash along with a checksum tool to confirm file integrity and authenticity.</p> <note> <p>This value is available only if the build project's <code>packaging</code> value is set to <code>ZIP</code>.</p> </note>
   */
  sha256sum?: string;

  /**
   * <p>The MD5 hash of the build artifact.</p> <p>You can use this hash along with a checksum tool to confirm file integrity and authenticity.</p> <note> <p>This value is available only if the build project's <code>packaging</code> value is set to <code>ZIP</code>.</p> </note>
   */
  md5sum?: string;

  /**
   * <p> If this flag is set, a name specified in the build spec file overrides the artifact name. The name specified in a build spec file is calculated at build time and uses the Shell Command Language. For example, you can append a date and time to your artifact name so that it is always unique. </p>
   */
  overrideArtifactName?: boolean;

  /**
   * <p> Information that tells you if encryption for build artifacts is disabled. </p>
   */
  encryptionDisabled?: boolean;

  /**
   * <p> An identifier for this artifact definition. </p>
   */
  artifactIdentifier?: string;
}

export type _UnmarshalledBuildArtifacts = _BuildArtifacts;
