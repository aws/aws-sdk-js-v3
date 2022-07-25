// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ServerlessApplicationRepositoryServiceException as __BaseException } from "./ServerlessApplicationRepositoryServiceException";

/**
 * <p>A nested application summary.</p>
 */
export interface ApplicationDependencySummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the nested application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The semantic version of the nested application.</p>
   */
  SemanticVersion: string | undefined;
}

/**
 * <p>Policy statement applied to the application.</p>
 */
export interface ApplicationPolicyStatement {
  /**
   * <p>For the list of actions supported for this operation, see <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application
   *  Permissions</a>.</p>
   */
  Actions: string[] | undefined;

  /**
   * <p>An array of PrinciplalOrgIDs, which corresponds to AWS IAM <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#principal-org-id">aws:PrincipalOrgID</a> global condition key.</p>
   */
  PrincipalOrgIDs?: string[];

  /**
   * <p>An array of AWS account IDs, or * to make the application public.</p>
   */
  Principals: string[] | undefined;

  /**
   * <p>A unique ID for the statement.</p>
   */
  StatementId?: string;
}

/**
 * <p>Summary of details about the application.</p>
 */
export interface ApplicationSummary {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>
   */
  Author: string | undefined;

  /**
   * <p>The date and time this resource was created.</p>
   */
  CreationTime?: string;

  /**
   * <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>
   */
  Description: string | undefined;

  /**
   * <p>A URL with more information about the application, for example the location of your GitHub repository for the application.</p>
   */
  HomePageUrl?: string;

  /**
   * <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p>
   */
  Labels?: string[];

  /**
   * <p>The name of the application.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\-]+";</p>
   */
  Name: string | undefined;

  /**
   * <p>A valid identifier from <a href="https://spdx.org/licenses/">https://spdx.org/licenses/</a>.</p>
   */
  SpdxLicenseId?: string;
}

export enum Capability {
  CAPABILITY_AUTO_EXPAND = "CAPABILITY_AUTO_EXPAND",
  CAPABILITY_IAM = "CAPABILITY_IAM",
  CAPABILITY_NAMED_IAM = "CAPABILITY_NAMED_IAM",
  CAPABILITY_RESOURCE_POLICY = "CAPABILITY_RESOURCE_POLICY",
}

/**
 * <p>Parameters supported by the application.</p>
 */
export interface ParameterDefinition {
  /**
   * <p>A regular expression that represents the patterns to allow for String types.</p>
   */
  AllowedPattern?: string;

  /**
   * <p>An array containing the list of values allowed for the parameter.</p>
   */
  AllowedValues?: string[];

  /**
   * <p>A string that explains a constraint when the constraint is violated. For example, without a constraint description,
   *  a parameter that has an allowed pattern of [A-Za-z0-9]+ displays the following error message when the user
   *  specifies an invalid value:</p><p>
   *  Malformed input-Parameter MyParameter must match pattern [A-Za-z0-9]+
   *  </p><p>By adding a constraint description, such as "must contain only uppercase and lowercase letters and numbers," you can display
   *  the following customized error message:</p><p>
   *  Malformed input-Parameter MyParameter must contain only uppercase and lowercase letters and numbers.
   *  </p>
   */
  ConstraintDescription?: string;

  /**
   * <p>A value of the appropriate type for the template to use if no value is specified when a stack is created.
   *  If you define constraints for the parameter, you must specify a value that adheres to those constraints.</p>
   */
  DefaultValue?: string;

  /**
   * <p>A string of up to 4,000 characters that describes the parameter.</p>
   */
  Description?: string;

  /**
   * <p>An integer value that determines the largest number of characters that you want to allow for String types.</p>
   */
  MaxLength?: number;

  /**
   * <p>A numeric value that determines the largest numeric value that you want to allow for Number types.</p>
   */
  MaxValue?: number;

  /**
   * <p>An integer value that determines the smallest number of characters that you want to allow for String types.</p>
   */
  MinLength?: number;

  /**
   * <p>A numeric value that determines the smallest numeric value that you want to allow for Number types.</p>
   */
  MinValue?: number;

  /**
   * <p>The name of the parameter.</p>
   */
  Name: string | undefined;

  /**
   * <p>Whether to mask the parameter value whenever anyone makes a call that describes the stack. If you set the
   *  value to true, the parameter value is masked with asterisks (*****).</p>
   */
  NoEcho?: boolean;

  /**
   * <p>A list of AWS SAM resources that use this parameter.</p>
   */
  ReferencedByResources: string[] | undefined;

  /**
   * <p>The type of the parameter.</p><p>Valid values: String | Number | List&lt;Number> | CommaDelimitedList
   *  </p><p>
   *  String: A literal string.</p><p>For example, users can specify "MyUserName".</p><p>
   *  Number: An integer or float. AWS CloudFormation validates the parameter value as a number. However, when you use the
   *  parameter elsewhere in your template (for example, by using the Ref intrinsic function), the parameter value becomes a string.</p><p>For example, users might specify "8888".</p><p>
   *  List&lt;Number>: An array of integers or floats that are separated by commas. AWS CloudFormation validates the parameter value as numbers. However, when
   *  you use the parameter elsewhere in your template (for example, by using the Ref intrinsic function), the parameter value becomes a list of strings.</p><p>For example, users might specify "80,20", and then Ref results in ["80","20"].</p><p>
   *  CommaDelimitedList: An array of literal strings that are separated by commas. The total number of strings should be one more than the total number of commas.
   *  Also, each member string is space-trimmed.</p><p>For example, users might specify "test,dev,prod", and then Ref results in ["test","dev","prod"].</p>
   */
  Type?: string;
}

/**
 * <p>Parameter value of the application.</p>
 */
export interface ParameterValue {
  /**
   * <p>The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation
   *  uses the default value that is specified in your template.</p>
   */
  Name: string | undefined;

  /**
   * <p>The input value associated with the parameter.</p>
   */
  Value: string | undefined;
}

/**
 * <p>This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger">RollbackTrigger</a>
 *  </i> Data Type.</p>
 */
export interface RollbackTrigger {
  /**
   * <p>This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger">RollbackTrigger</a>
   *  </i> Data Type.</p>
   */
  Arn: string | undefined;

  /**
   * <p>This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger">RollbackTrigger</a>
   *  </i> Data Type.</p>
   */
  Type: string | undefined;
}

/**
 * <p>This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag">Tag</a>
 *  </i> Data Type.</p>
 */
export interface Tag {
  /**
   * <p>This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag">Tag</a>
   *  </i> Data Type.</p>
   */
  Key: string | undefined;

  /**
   * <p>This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag">
   *  Tag</a>
   *  </i>
   *  Data Type.</p>
   */
  Value: string | undefined;
}

/**
 * <p>An application version summary.</p>
 */
export interface VersionSummary {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The date and time this resource was created.</p>
   */
  CreationTime: string | undefined;

  /**
   * <p>The semantic version of the application:</p><p>
   *  <a href="https://semver.org/">https://semver.org/</a>
   *  </p>
   */
  SemanticVersion: string | undefined;

  /**
   * <p>A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.</p>
   */
  SourceCodeUrl?: string;
}

/**
 * <p>One of the parameters in the request is invalid.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>400</p>
   */
  ErrorCode?: string;

  /**
   * <p>One of the parameters in the request is invalid.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource already exists.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>409</p>
   */
  ErrorCode?: string;

  /**
   * <p>The resource already exists.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

export interface CreateApplicationRequest {
  /**
   * <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>
   */
  Author: string | undefined;

  /**
   * <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>
   */
  Description: string | undefined;

  /**
   * <p>A URL with more information about the application, for example the location of your GitHub repository for the application.</p>
   */
  HomePageUrl?: string;

  /**
   * <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p>
   */
  Labels?: string[];

  /**
   * <p>A local text file that contains the license of the app that matches the spdxLicenseID value of your application.
   *  The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p>
   */
  LicenseBody?: string;

  /**
   * <p>A link to the S3 object that contains the license of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p>
   */
  LicenseUrl?: string;

  /**
   * <p>The name of the application that you want to publish.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\-]+";</p>
   */
  Name: string | undefined;

  /**
   * <p>A local text readme file in Markdown language that contains a more detailed description of the application and how it works.
   *  The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p>
   */
  ReadmeBody?: string;

  /**
   * <p>A link to the S3 object in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p>
   */
  ReadmeUrl?: string;

  /**
   * <p>The semantic version of the application:</p><p>
   *  <a href="https://semver.org/">https://semver.org/</a>
   *  </p>
   */
  SemanticVersion?: string;

  /**
   * <p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>
   */
  SourceCodeArchiveUrl?: string;

  /**
   * <p>A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.</p>
   */
  SourceCodeUrl?: string;

  /**
   * <p>A valid identifier from <a href="https://spdx.org/licenses/">https://spdx.org/licenses/</a>.</p>
   */
  SpdxLicenseId?: string;

  /**
   * <p>The local raw packaged AWS SAM template file of your application.
   *  The file has the format file://&lt;path>/&lt;filename>.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p>
   */
  TemplateBody?: string;

  /**
   * <p>A link to the S3 object containing the packaged AWS SAM template of your application.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p>
   */
  TemplateUrl?: string;
}

/**
 * <p>Application version details.</p>
 */
export interface Version {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The date and time this resource was created.</p>
   */
  CreationTime: string | undefined;

  /**
   * <p>An array of parameter types supported by the application.</p>
   */
  ParameterDefinitions: ParameterDefinition[] | undefined;

  /**
   * <p>A list of values that you must specify before you can deploy certain applications.
   *  Some applications might include resources that can affect permissions in your AWS
   *  account, for example, by creating new AWS Identity and Access Management (IAM) users.
   *  For those applications, you must explicitly acknowledge their capabilities by
   *  specifying this parameter.</p><p>The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM,
   *  CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.</p><p>The following resources require you to specify CAPABILITY_IAM or
   *  CAPABILITY_NAMED_IAM:
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">AWS::IAM::Group</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM::Policy</a>, and
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">AWS::IAM::Role</a>.
   *  If the application contains IAM resources, you can specify either CAPABILITY_IAM
   *  or CAPABILITY_NAMED_IAM. If the application contains IAM resources
   *  with custom names, you must specify CAPABILITY_NAMED_IAM.</p><p>The following resources require you to specify CAPABILITY_RESOURCE_POLICY:
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html">AWS::Lambda::Permission</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM:Policy</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html">AWS::ApplicationAutoScaling::ScalingPolicy</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html">AWS::S3::BucketPolicy</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html">AWS::SQS::QueuePolicy</a>, and
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html">AWS::SNS::TopicPolicy</a>.</p><p>Applications that contain one or more nested applications require you to specify
   *  CAPABILITY_AUTO_EXPAND.</p><p>If your application template contains any of the above resources, we recommend that you review
   *  all permissions associated with the application before deploying. If you don't specify
   *  this parameter for an application that requires capabilities, the call will fail.</p>
   */
  RequiredCapabilities: (Capability | string)[] | undefined;

  /**
   * <p>Whether all of the AWS resources contained in this application are supported in the region
   *  in which it is being retrieved.</p>
   */
  ResourcesSupported: boolean | undefined;

  /**
   * <p>The semantic version of the application:</p><p>
   *  <a href="https://semver.org/">https://semver.org/</a>
   *  </p>
   */
  SemanticVersion: string | undefined;

  /**
   * <p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>
   */
  SourceCodeArchiveUrl?: string;

  /**
   * <p>A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.</p>
   */
  SourceCodeUrl?: string;

  /**
   * <p>A link to the packaged AWS SAM template of your application.</p>
   */
  TemplateUrl: string | undefined;
}

export interface CreateApplicationResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId?: string;

  /**
   * <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>
   */
  Author?: string;

  /**
   * <p>The date and time this resource was created.</p>
   */
  CreationTime?: string;

  /**
   * <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>
   */
  Description?: string;

  /**
   * <p>A URL with more information about the application, for example the location of your GitHub repository for the application.</p>
   */
  HomePageUrl?: string;

  /**
   * <p>Whether the author of this application has been verified. This means means that AWS has made a good faith review, as a reasonable and prudent service provider, of the information provided by the requester and has confirmed that the requester's identity is as claimed.</p>
   */
  IsVerifiedAuthor?: boolean;

  /**
   * <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p>
   */
  Labels?: string[];

  /**
   * <p>A link to a license file of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p>
   */
  LicenseUrl?: string;

  /**
   * <p>The name of the application.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\-]+";</p>
   */
  Name?: string;

  /**
   * <p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>
   */
  ReadmeUrl?: string;

  /**
   * <p>A valid identifier from https://spdx.org/licenses/.</p>
   */
  SpdxLicenseId?: string;

  /**
   * <p>The URL to the public profile of a verified author. This URL is submitted by the author.</p>
   */
  VerifiedAuthorUrl?: string;

  /**
   * <p>Version information about the application.</p>
   */
  Version?: Version;
}

/**
 * <p>The client is not authenticated.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * <p>403</p>
   */
  ErrorCode?: string;

  /**
   * <p>The client is not authenticated.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>The AWS Serverless Application Repository service encountered an internal error.</p>
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * <p>500</p>
   */
  ErrorCode?: string;

  /**
   * <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>The client is sending more than the allowed number of requests per unit of time.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * <p>429</p>
   */
  ErrorCode?: string;

  /**
   * <p>The client is sending more than the allowed number of requests per unit of time.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

export interface CreateApplicationVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The semantic version of the new version.</p>
   */
  SemanticVersion: string | undefined;

  /**
   * <p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>
   */
  SourceCodeArchiveUrl?: string;

  /**
   * <p>A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.</p>
   */
  SourceCodeUrl?: string;

  /**
   * <p>The raw packaged AWS SAM template of your application.</p>
   */
  TemplateBody?: string;

  /**
   * <p>A link to the packaged AWS SAM template of your application.</p>
   */
  TemplateUrl?: string;
}

export interface CreateApplicationVersionResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time this resource was created.</p>
   */
  CreationTime?: string;

  /**
   * <p>An array of parameter types supported by the application.</p>
   */
  ParameterDefinitions?: ParameterDefinition[];

  /**
   * <p>A list of values that you must specify before you can deploy certain applications.
   *  Some applications might include resources that can affect permissions in your AWS
   *  account, for example, by creating new AWS Identity and Access Management (IAM) users.
   *  For those applications, you must explicitly acknowledge their capabilities by
   *  specifying this parameter.</p><p>The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM,
   *  CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.</p><p>The following resources require you to specify CAPABILITY_IAM or
   *  CAPABILITY_NAMED_IAM:
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">AWS::IAM::Group</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM::Policy</a>, and
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">AWS::IAM::Role</a>.
   *  If the application contains IAM resources, you can specify either CAPABILITY_IAM
   *  or CAPABILITY_NAMED_IAM. If the application contains IAM resources
   *  with custom names, you must specify CAPABILITY_NAMED_IAM.</p><p>The following resources require you to specify CAPABILITY_RESOURCE_POLICY:
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html">AWS::Lambda::Permission</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM:Policy</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html">AWS::ApplicationAutoScaling::ScalingPolicy</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html">AWS::S3::BucketPolicy</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html">AWS::SQS::QueuePolicy</a>, and
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html">AWS::SNS::TopicPolicy</a>.</p><p>Applications that contain one or more nested applications require you to specify
   *  CAPABILITY_AUTO_EXPAND.</p><p>If your application template contains any of the above resources, we recommend that you review
   *  all permissions associated with the application before deploying. If you don't specify
   *  this parameter for an application that requires capabilities, the call will fail.</p>
   */
  RequiredCapabilities?: (Capability | string)[];

  /**
   * <p>Whether all of the AWS resources contained in this application are supported in the region
   *  in which it is being retrieved.</p>
   */
  ResourcesSupported?: boolean;

  /**
   * <p>The semantic version of the application:</p><p>
   *  <a href="https://semver.org/">https://semver.org/</a>
   *  </p>
   */
  SemanticVersion?: string;

  /**
   * <p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>
   */
  SourceCodeArchiveUrl?: string;

  /**
   * <p>A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.</p>
   */
  SourceCodeUrl?: string;

  /**
   * <p>A link to the packaged AWS SAM template of your application.</p>
   */
  TemplateUrl?: string;
}

/**
 * <p>This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
 *  </i> Data Type.</p>
 */
export interface RollbackConfiguration {
  /**
   * <p>This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
   *  </i> Data Type.</p>
   */
  MonitoringTimeInMinutes?: number;

  /**
   * <p>This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
   *  </i> Data Type.</p>
   */
  RollbackTriggers?: RollbackTrigger[];
}

export interface CreateCloudFormationChangeSetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>A list of values that you must specify before you can deploy certain applications.
   *  Some applications might include resources that can affect permissions in your AWS
   *  account, for example, by creating new AWS Identity and Access Management (IAM) users.
   *  For those applications, you must explicitly acknowledge their capabilities by
   *  specifying this parameter.</p><p>The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM,
   *  CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.</p><p>The following resources require you to specify CAPABILITY_IAM or
   *  CAPABILITY_NAMED_IAM:
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">AWS::IAM::Group</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM::Policy</a>, and
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">AWS::IAM::Role</a>.
   *  If the application contains IAM resources, you can specify either CAPABILITY_IAM
   *  or CAPABILITY_NAMED_IAM. If the application contains IAM resources
   *  with custom names, you must specify CAPABILITY_NAMED_IAM.</p><p>The following resources require you to specify CAPABILITY_RESOURCE_POLICY:
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html">AWS::Lambda::Permission</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM:Policy</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html">AWS::ApplicationAutoScaling::ScalingPolicy</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html">AWS::S3::BucketPolicy</a>,
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html">AWS::SQS::QueuePolicy</a>, and
   *  <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html">AWS::SNS:TopicPolicy</a>.</p><p>Applications that contain one or more nested applications require you to specify
   *  CAPABILITY_AUTO_EXPAND.</p><p>If your application template contains any of the above resources, we recommend that you review
   *  all permissions associated with the application before deploying. If you don't specify
   *  this parameter for an application that requires capabilities, the call will fail.</p>
   */
  Capabilities?: string[];

  /**
   * <p>This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
   *  </i> API.</p>
   */
  ChangeSetName?: string;

  /**
   * <p>This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
   *  </i> API.</p>
   */
  ClientToken?: string;

  /**
   * <p>This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
   *  </i> API.</p>
   */
  Description?: string;

  /**
   * <p>This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
   *  </i> API.</p>
   */
  NotificationArns?: string[];

  /**
   * <p>A list of parameter values for the parameters of the application.</p>
   */
  ParameterOverrides?: ParameterValue[];

  /**
   * <p>This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
   *  </i> API.</p>
   */
  ResourceTypes?: string[];

  /**
   * <p>This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
   *  </i> API.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * <p>The semantic version of the application:</p><p>
   *  <a href="https://semver.org/">https://semver.org/</a>
   *  </p>
   */
  SemanticVersion?: string;

  /**
   * <p>This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
   *  </i> API.</p>
   */
  StackName: string | undefined;

  /**
   * <p>This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
   *  </i> API.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p>
   */
  TemplateId?: string;
}

export interface CreateCloudFormationChangeSetResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the change set.</p><p>Length constraints: Minimum length of 1.</p><p>Pattern: ARN:[-a-zA-Z0-9:/]*</p>
   */
  ChangeSetId?: string;

  /**
   * <p>The semantic version of the application:</p><p>
   *  <a href="https://semver.org/">https://semver.org/</a>
   *  </p>
   */
  SemanticVersion?: string;

  /**
   * <p>The unique ID of the stack.</p>
   */
  StackId?: string;
}

export interface CreateCloudFormationTemplateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The semantic version of the application:</p><p>
   *  <a href="https://semver.org/">https://semver.org/</a>
   *  </p>
   */
  SemanticVersion?: string;
}

export enum Status {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  PREPARING = "PREPARING",
}

export interface CreateCloudFormationTemplateResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time this resource was created.</p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time this template expires. Templates
   *  expire 1 hour after creation.</p>
   */
  ExpirationTime?: string;

  /**
   * <p>The semantic version of the application:</p><p>
   *  <a href="https://semver.org/">https://semver.org/</a>
   *  </p>
   */
  SemanticVersion?: string;

  /**
   * <p>Status of the template creation workflow.</p><p>Possible values: PREPARING | ACTIVE | EXPIRED
   *  </p>
   */
  Status?: Status | string;

  /**
   * <p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p>
   */
  TemplateId?: string;

  /**
   * <p>A link to the template that can be used to deploy the application using
   *  AWS CloudFormation.</p>
   */
  TemplateUrl?: string;
}

/**
 * <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>404</p>
   */
  ErrorCode?: string;

  /**
   * <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

export interface DeleteApplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationId: string | undefined;
}

export interface GetApplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The semantic version of the application to get.</p>
   */
  SemanticVersion?: string;
}

export interface GetApplicationResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId?: string;

  /**
   * <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>
   */
  Author?: string;

  /**
   * <p>The date and time this resource was created.</p>
   */
  CreationTime?: string;

  /**
   * <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>
   */
  Description?: string;

  /**
   * <p>A URL with more information about the application, for example the location of your GitHub repository for the application.</p>
   */
  HomePageUrl?: string;

  /**
   * <p>Whether the author of this application has been verified. This means means that AWS has made a good faith review, as a reasonable and prudent service provider, of the information provided by the requester and has confirmed that the requester's identity is as claimed.</p>
   */
  IsVerifiedAuthor?: boolean;

  /**
   * <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p>
   */
  Labels?: string[];

  /**
   * <p>A link to a license file of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p>
   */
  LicenseUrl?: string;

  /**
   * <p>The name of the application.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\-]+";</p>
   */
  Name?: string;

  /**
   * <p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>
   */
  ReadmeUrl?: string;

  /**
   * <p>A valid identifier from https://spdx.org/licenses/.</p>
   */
  SpdxLicenseId?: string;

  /**
   * <p>The URL to the public profile of a verified author. This URL is submitted by the author.</p>
   */
  VerifiedAuthorUrl?: string;

  /**
   * <p>Version information about the application.</p>
   */
  Version?: Version;
}

export interface GetApplicationPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationId: string | undefined;
}

export interface GetApplicationPolicyResponse {
  /**
   * <p>An array of policy statements applied to the application.</p>
   */
  Statements?: ApplicationPolicyStatement[];
}

export interface GetCloudFormationTemplateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p>
   */
  TemplateId: string | undefined;
}

export interface GetCloudFormationTemplateResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time this resource was created.</p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time this template expires. Templates
   *  expire 1 hour after creation.</p>
   */
  ExpirationTime?: string;

  /**
   * <p>The semantic version of the application:</p><p>
   *  <a href="https://semver.org/">https://semver.org/</a>
   *  </p>
   */
  SemanticVersion?: string;

  /**
   * <p>Status of the template creation workflow.</p><p>Possible values: PREPARING | ACTIVE | EXPIRED
   *  </p>
   */
  Status?: Status | string;

  /**
   * <p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p>
   */
  TemplateId?: string;

  /**
   * <p>A link to the template that can be used to deploy the application using
   *  AWS CloudFormation.</p>
   */
  TemplateUrl?: string;
}

export interface ListApplicationDependenciesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The total number of items to return.</p>
   */
  MaxItems?: number;

  /**
   * <p>A token to specify where to start paginating.</p>
   */
  NextToken?: string;

  /**
   * <p>The semantic version of the application to get.</p>
   */
  SemanticVersion?: string;
}

export interface ListApplicationDependenciesResponse {
  /**
   * <p>An array of application summaries nested in the application.</p>
   */
  Dependencies?: ApplicationDependencySummary[];

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListApplicationsRequest {
  /**
   * <p>The total number of items to return.</p>
   */
  MaxItems?: number;

  /**
   * <p>A token to specify where to start paginating.</p>
   */
  NextToken?: string;
}

export interface ListApplicationsResponse {
  /**
   * <p>An array of application summaries.</p>
   */
  Applications?: ApplicationSummary[];

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListApplicationVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The total number of items to return.</p>
   */
  MaxItems?: number;

  /**
   * <p>A token to specify where to start paginating.</p>
   */
  NextToken?: string;
}

export interface ListApplicationVersionsResponse {
  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of version summaries for the application.</p>
   */
  Versions?: VersionSummary[];
}

export interface PutApplicationPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>An array of policy statements applied to the application.</p>
   */
  Statements: ApplicationPolicyStatement[] | undefined;
}

export interface PutApplicationPolicyResponse {
  /**
   * <p>An array of policy statements applied to the application.</p>
   */
  Statements?: ApplicationPolicyStatement[];
}

export interface UnshareApplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The AWS Organization ID to unshare the application from.</p>
   */
  OrganizationId: string | undefined;
}

export interface UpdateApplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>
   */
  Author?: string;

  /**
   * <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>
   */
  Description?: string;

  /**
   * <p>A URL with more information about the application, for example the location of your GitHub repository for the application.</p>
   */
  HomePageUrl?: string;

  /**
   * <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p>
   */
  Labels?: string[];

  /**
   * <p>A text readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>
   */
  ReadmeBody?: string;

  /**
   * <p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>
   */
  ReadmeUrl?: string;
}

export interface UpdateApplicationResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId?: string;

  /**
   * <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>
   */
  Author?: string;

  /**
   * <p>The date and time this resource was created.</p>
   */
  CreationTime?: string;

  /**
   * <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>
   */
  Description?: string;

  /**
   * <p>A URL with more information about the application, for example the location of your GitHub repository for the application.</p>
   */
  HomePageUrl?: string;

  /**
   * <p>Whether the author of this application has been verified. This means means that AWS has made a good faith review, as a reasonable and prudent service provider, of the information provided by the requester and has confirmed that the requester's identity is as claimed.</p>
   */
  IsVerifiedAuthor?: boolean;

  /**
   * <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p>
   */
  Labels?: string[];

  /**
   * <p>A link to a license file of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p>
   */
  LicenseUrl?: string;

  /**
   * <p>The name of the application.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\-]+";</p>
   */
  Name?: string;

  /**
   * <p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>
   */
  ReadmeUrl?: string;

  /**
   * <p>A valid identifier from https://spdx.org/licenses/.</p>
   */
  SpdxLicenseId?: string;

  /**
   * <p>The URL to the public profile of a verified author. This URL is submitted by the author.</p>
   */
  VerifiedAuthorUrl?: string;

  /**
   * <p>Version information about the application.</p>
   */
  Version?: Version;
}

/**
 * @internal
 */
export const ApplicationDependencySummaryFilterSensitiveLog = (obj: ApplicationDependencySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationPolicyStatementFilterSensitiveLog = (obj: ApplicationPolicyStatement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationSummaryFilterSensitiveLog = (obj: ApplicationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterDefinitionFilterSensitiveLog = (obj: ParameterDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterValueFilterSensitiveLog = (obj: ParameterValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RollbackTriggerFilterSensitiveLog = (obj: RollbackTrigger): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VersionSummaryFilterSensitiveLog = (obj: VersionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationRequestFilterSensitiveLog = (obj: CreateApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VersionFilterSensitiveLog = (obj: Version): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationResponseFilterSensitiveLog = (obj: CreateApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationVersionRequestFilterSensitiveLog = (obj: CreateApplicationVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationVersionResponseFilterSensitiveLog = (obj: CreateApplicationVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RollbackConfigurationFilterSensitiveLog = (obj: RollbackConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCloudFormationChangeSetRequestFilterSensitiveLog = (
  obj: CreateCloudFormationChangeSetRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCloudFormationChangeSetResponseFilterSensitiveLog = (
  obj: CreateCloudFormationChangeSetResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCloudFormationTemplateRequestFilterSensitiveLog = (
  obj: CreateCloudFormationTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCloudFormationTemplateResponseFilterSensitiveLog = (
  obj: CreateCloudFormationTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationRequestFilterSensitiveLog = (obj: DeleteApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationRequestFilterSensitiveLog = (obj: GetApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationResponseFilterSensitiveLog = (obj: GetApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationPolicyRequestFilterSensitiveLog = (obj: GetApplicationPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationPolicyResponseFilterSensitiveLog = (obj: GetApplicationPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCloudFormationTemplateRequestFilterSensitiveLog = (obj: GetCloudFormationTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCloudFormationTemplateResponseFilterSensitiveLog = (obj: GetCloudFormationTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationDependenciesRequestFilterSensitiveLog = (obj: ListApplicationDependenciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationDependenciesResponseFilterSensitiveLog = (
  obj: ListApplicationDependenciesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationsRequestFilterSensitiveLog = (obj: ListApplicationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationsResponseFilterSensitiveLog = (obj: ListApplicationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationVersionsRequestFilterSensitiveLog = (obj: ListApplicationVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationVersionsResponseFilterSensitiveLog = (obj: ListApplicationVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutApplicationPolicyRequestFilterSensitiveLog = (obj: PutApplicationPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutApplicationPolicyResponseFilterSensitiveLog = (obj: PutApplicationPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnshareApplicationRequestFilterSensitiveLog = (obj: UnshareApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationRequestFilterSensitiveLog = (obj: UpdateApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationResponseFilterSensitiveLog = (obj: UpdateApplicationResponse): any => ({
  ...obj,
});
