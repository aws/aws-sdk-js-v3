/**
 * <p>Information about the build output artifacts for the build project.</p>
 */
export interface _ProjectArtifacts {
  /**
   * <p>The type of build output artifact. Valid values include:</p> <ul> <li> <p> <code>CODEPIPELINE</code>: The build project has build output generated through AWS CodePipeline.</p> </li> <li> <p> <code>NO_ARTIFACTS</code>: The build project does not produce any build output.</p> </li> <li> <p> <code>S3</code>: The build project stores build output in Amazon Simple Storage Service (Amazon S3).</p> </li> </ul>
   */
  type: "CODEPIPELINE" | "S3" | "NO_ARTIFACTS" | string;

  /**
   * <p>Information about the build output artifact location:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, AWS CodePipeline ignores this value if specified. This is because AWS CodePipeline manages its build output locations instead of AWS CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is ignored if specified, because no build output is produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, this is the name of the output bucket.</p> </li> </ul>
   */
  location?: string;

  /**
   * <p>Along with <code>namespaceType</code> and <code>name</code>, the pattern that AWS CodeBuild uses to name and store the output artifact:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, AWS CodePipeline ignores this value if specified. This is because AWS CodePipeline manages its build output names instead of AWS CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is ignored if specified, because no build output is produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, this is the path to the output artifact. If <code>path</code> is not specified, <code>path</code> is not used.</p> </li> </ul> <p>For example, if <code>path</code> is set to <code>MyArtifacts</code>, <code>namespaceType</code> is set to <code>NONE</code>, and <code>name</code> is set to <code>MyArtifact.zip</code>, the output artifact is stored in the output bucket at <code>MyArtifacts/MyArtifact.zip</code>.</p>
   */
  path?: string;

  /**
   * <p>Along with <code>path</code> and <code>name</code>, the pattern that AWS CodeBuild uses to determine the name and location to store the output artifact:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, AWS CodePipeline ignores this value if specified. This is because AWS CodePipeline manages its build output names instead of AWS CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is ignored if specified, because no build output is produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, valid values include:</p> <ul> <li> <p> <code>BUILD_ID</code>: Include the build ID in the location of the build output artifact.</p> </li> <li> <p> <code>NONE</code>: Do not include the build ID. This is the default if <code>namespaceType</code> is not specified.</p> </li> </ul> </li> </ul> <p>For example, if <code>path</code> is set to <code>MyArtifacts</code>, <code>namespaceType</code> is set to <code>BUILD_ID</code>, and <code>name</code> is set to <code>MyArtifact.zip</code>, the output artifact is stored in <code>MyArtifacts/<i>build-ID</i>/MyArtifact.zip</code>.</p>
   */
  namespaceType?: "NONE" | "BUILD_ID" | string;

  /**
   * <p>Along with <code>path</code> and <code>namespaceType</code>, the pattern that AWS CodeBuild uses to name and store the output artifact:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, AWS CodePipeline ignores this value if specified. This is because AWS CodePipeline manages its build output names instead of AWS CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is ignored if specified, because no build output is produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, this is the name of the output artifact object. If you set the name to be a forward slash ("/"), the artifact is stored in the root of the output bucket.</p> </li> </ul> <p>For example:</p> <ul> <li> <p> If <code>path</code> is set to <code>MyArtifacts</code>, <code>namespaceType</code> is set to <code>BUILD_ID</code>, and <code>name</code> is set to <code>MyArtifact.zip</code>, then the output artifact is stored in <code>MyArtifacts/<i>build-ID</i>/MyArtifact.zip</code>. </p> </li> <li> <p> If <code>path</code> is empty, <code>namespaceType</code> is set to <code>NONE</code>, and <code>name</code> is set to "<code>/</code>", the output artifact is stored in the root of the output bucket. </p> </li> <li> <p> If <code>path</code> is set to <code>MyArtifacts</code>, <code>namespaceType</code> is set to <code>BUILD_ID</code>, and <code>name</code> is set to "<code>/</code>", the output artifact is stored in <code>MyArtifacts/<i>build-ID</i> </code>. </p> </li> </ul>
   */
  name?: string;

  /**
   * <p>The type of build output artifact to create:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, AWS CodePipeline ignores this value if specified. This is because AWS CodePipeline manages its build output artifacts instead of AWS CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is ignored if specified, because no build output is produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, valid values include:</p> <ul> <li> <p> <code>NONE</code>: AWS CodeBuild creates in the output bucket a folder that contains the build output. This is the default if <code>packaging</code> is not specified.</p> </li> <li> <p> <code>ZIP</code>: AWS CodeBuild creates in the output bucket a ZIP file that contains the build output.</p> </li> </ul> </li> </ul>
   */
  packaging?: "NONE" | "ZIP" | string;

  /**
   * <p> If this flag is set, a name specified in the build spec file overrides the artifact name. The name specified in a build spec file is calculated at build time and uses the Shell Command Language. For example, you can append a date and time to your artifact name so that it is always unique. </p>
   */
  overrideArtifactName?: boolean;

  /**
   * <p> Set to true if you do not want your output artifacts encrypted. This option is valid only if your artifacts type is Amazon Simple Storage Service (Amazon S3). If this is set with another artifacts type, an invalidInputException is thrown. </p>
   */
  encryptionDisabled?: boolean;

  /**
   * <p> An identifier for this artifact definition. </p>
   */
  artifactIdentifier?: string;
}

export type _UnmarshalledProjectArtifacts = _ProjectArtifacts;
