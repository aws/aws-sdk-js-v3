import {
  _GitSubmodulesConfig,
  _UnmarshalledGitSubmodulesConfig
} from "./_GitSubmodulesConfig";
import { _SourceAuth, _UnmarshalledSourceAuth } from "./_SourceAuth";

/**
 * <p>Information about the build input source code for the build project.</p>
 */
export interface _ProjectSource {
  /**
   * <p>The type of repository that contains the source code to be built. Valid values include:</p> <ul> <li> <p> <code>BITBUCKET</code>: The source code is in a Bitbucket repository.</p> </li> <li> <p> <code>CODECOMMIT</code>: The source code is in an AWS CodeCommit repository.</p> </li> <li> <p> <code>CODEPIPELINE</code>: The source code settings are specified in the source action of a pipeline in AWS CodePipeline.</p> </li> <li> <p> <code>GITHUB</code>: The source code is in a GitHub repository.</p> </li> <li> <p> <code>NO_SOURCE</code>: The project does not have input source code.</p> </li> <li> <p> <code>S3</code>: The source code is in an Amazon Simple Storage Service (Amazon S3) input bucket.</p> </li> </ul>
   */
  type:
    | "CODECOMMIT"
    | "CODEPIPELINE"
    | "GITHUB"
    | "S3"
    | "BITBUCKET"
    | "GITHUB_ENTERPRISE"
    | "NO_SOURCE"
    | string;

  /**
   * <p>Information about the location of the source code to be built. Valid values include:</p> <ul> <li> <p>For source code settings that are specified in the source action of a pipeline in AWS CodePipeline, <code>location</code> should not be specified. If it is specified, AWS CodePipeline ignores it. This is because AWS CodePipeline uses the settings in a pipeline's source action instead of this value.</p> </li> <li> <p>For source code in an AWS CodeCommit repository, the HTTPS clone URL to the repository that contains the source code and the build spec (for example, <code>https://git-codecommit.<i>region-ID</i>.amazonaws.com/v1/repos/<i>repo-name</i> </code>).</p> </li> <li> <p>For source code in an Amazon Simple Storage Service (Amazon S3) input bucket, one of the following. </p> <ul> <li> <p> The path to the ZIP file that contains the source code (for example, <code> <i>bucket-name</i>/<i>path</i>/<i>to</i>/<i>object-name</i>.zip</code>). </p> </li> <li> <p> The path to the folder that contains the source code (for example, <code> <i>bucket-name</i>/<i>path</i>/<i>to</i>/<i>source-code</i>/<i>folder</i>/</code>). </p> </li> </ul> </li> <li> <p>For source code in a GitHub repository, the HTTPS clone URL to the repository that contains the source and the build spec. You must connect your AWS account to your GitHub account. Use the AWS CodeBuild console to start creating a build project. When you use the console to connect (or reconnect) with GitHub, on the GitHub <b>Authorize application</b> page, for <b>Organization access</b>, choose <b>Request access</b> next to each repository you want to allow AWS CodeBuild to have access to, and then choose <b>Authorize application</b>. (After you have connected to your GitHub account, you do not need to finish creating the build project. You can leave the AWS CodeBuild console.) To instruct AWS CodeBuild to use this connection, in the <code>source</code> object, set the <code>auth</code> object's <code>type</code> value to <code>OAUTH</code>.</p> </li> <li> <p>For source code in a Bitbucket repository, the HTTPS clone URL to the repository that contains the source and the build spec. You must connect your AWS account to your Bitbucket account. Use the AWS CodeBuild console to start creating a build project. When you use the console to connect (or reconnect) with Bitbucket, on the Bitbucket <b>Confirm access to your account</b> page, choose <b>Grant access</b>. (After you have connected to your Bitbucket account, you do not need to finish creating the build project. You can leave the AWS CodeBuild console.) To instruct AWS CodeBuild to use this connection, in the <code>source</code> object, set the <code>auth</code> object's <code>type</code> value to <code>OAUTH</code>.</p> </li> </ul>
   */
  location?: string;

  /**
   * <p>Information about the Git clone depth for the build project.</p>
   */
  gitCloneDepth?: number;

  /**
   * <p> Information about the Git submodules configuration for the build project. </p>
   */
  gitSubmodulesConfig?: _GitSubmodulesConfig;

  /**
   * <p>The build spec declaration to use for the builds in this build project.</p> <p>If this value is not specified, a build spec must be included along with the source code to be built.</p>
   */
  buildspec?: string;

  /**
   * <p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.</p>
   */
  auth?: _SourceAuth;

  /**
   * <p> Set to true to report the status of a build's start and finish to your source provider. This option is valid only when your source provider is GitHub, GitHub Enterprise, or Bitbucket. If this is set and you use a different source provider, an invalidInputException is thrown. </p>
   */
  reportBuildStatus?: boolean;

  /**
   * <p>Enable this flag to ignore SSL warnings while connecting to the project source code.</p>
   */
  insecureSsl?: boolean;

  /**
   * <p> An identifier for this project source. </p>
   */
  sourceIdentifier?: string;
}

export interface _UnmarshalledProjectSource extends _ProjectSource {
  /**
   * <p> Information about the Git submodules configuration for the build project. </p>
   */
  gitSubmodulesConfig?: _UnmarshalledGitSubmodulesConfig;

  /**
   * <p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.</p>
   */
  auth?: _UnmarshalledSourceAuth;
}
