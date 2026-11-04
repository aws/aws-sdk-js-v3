// smithy-typescript generated code
import type { Capability, Status } from "./enums";

/**
 * A nested application summary.
 *
 * @public
 */
export interface ApplicationDependencySummary {
  /**
   * The Amazon Resource Name (ARN) of the nested application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The semantic version of the nested application.
   *
   * @public
   */
  SemanticVersion: string | undefined;
}

/**
 * Policy statement applied to the application.
 *
 * @public
 */
export interface ApplicationPolicyStatement {
  /**
   * For the list of actions supported for this operation, see [Application Permissions](https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions).
   *
   * @public
   */
  Actions: string[] | undefined;

  /**
   * An array of PrinciplalOrgIDs, which corresponds to AWS IAM [aws:PrincipalOrgID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#principal-org-id) global condition key.
   *
   * @public
   */
  PrincipalOrgIDs?: string[] | undefined;

  /**
   * An array of AWS account IDs, or * to make the application public.
   *
   * @public
   */
  Principals: string[] | undefined;

  /**
   * A unique ID for the statement.
   *
   * @public
   */
  StatementId?: string | undefined;
}

/**
 * Summary of details about the application.
 *
 * @public
 */
export interface ApplicationSummary {
  /**
   * The application Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The name of the author publishing the app.
   *
   * Minimum length=1. Maximum length=127.
   *
   * Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
   *
   * @public
   */
  Author: string | undefined;

  /**
   * The date and time this resource was created.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The description of the application.
   *
   * Minimum length=1. Maximum length=256
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A URL with more information about the application, for example the location of your GitHub repository for the application.
   *
   * @public
   */
  HomePageUrl?: string | undefined;

  /**
   * Labels to improve discovery of apps in search results.
   *
   * Minimum length=1. Maximum length=127. Maximum number of labels: 10
   *
   * Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
   *
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * The name of the application.
   *
   * Minimum length=1. Maximum length=140
   *
   * Pattern: "[a-zA-Z0-9\\-]+";
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A valid identifier from [https://spdx.org/licenses/](https://spdx.org/licenses/).
   *
   * @public
   */
  SpdxLicenseId?: string | undefined;
}

/**
 * Parameters supported by the application.
 *
 * @public
 */
export interface ParameterDefinition {
  /**
   * A regular expression that represents the patterns to allow for String types.
   *
   * @public
   */
  AllowedPattern?: string | undefined;

  /**
   * An array containing the list of values allowed for the parameter.
   *
   * @public
   */
  AllowedValues?: string[] | undefined;

  /**
   * A string that explains a constraint when the constraint is violated. For example, without a constraint description, a parameter that has an allowed pattern of [A-Za-z0-9]+ displays the following error message when the user specifies an invalid value:
   *
   * Malformed input-Parameter MyParameter must match pattern [A-Za-z0-9]+
   *
   * By adding a constraint description, such as "must contain only uppercase and lowercase letters and numbers," you can display the following customized error message:
   *
   * Malformed input-Parameter MyParameter must contain only uppercase and lowercase letters and numbers.
   *
   * @public
   */
  ConstraintDescription?: string | undefined;

  /**
   * A value of the appropriate type for the template to use if no value is specified when a stack is created. If you define constraints for the parameter, you must specify a value that adheres to those constraints.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * A string of up to 4,000 characters that describes the parameter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * An integer value that determines the largest number of characters that you want to allow for String types.
   *
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * A numeric value that determines the largest numeric value that you want to allow for Number types.
   *
   * @public
   */
  MaxValue?: number | undefined;

  /**
   * An integer value that determines the smallest number of characters that you want to allow for String types.
   *
   * @public
   */
  MinLength?: number | undefined;

  /**
   * A numeric value that determines the smallest numeric value that you want to allow for Number types.
   *
   * @public
   */
  MinValue?: number | undefined;

  /**
   * The name of the parameter.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Whether to mask the parameter value whenever anyone makes a call that describes the stack. If you set the value to true, the parameter value is masked with asterisks (*****).
   *
   * @public
   */
  NoEcho?: boolean | undefined;

  /**
   * A list of AWS SAM resources that use this parameter.
   *
   * @public
   */
  ReferencedByResources: string[] | undefined;

  /**
   * The type of the parameter.
   *
   * Valid values: String | Number | List&lt;Number> | CommaDelimitedList
   *
   * String: A literal string.
   *
   * For example, users can specify "MyUserName".
   *
   * Number: An integer or float. AWS CloudFormation validates the parameter value as a number. However, when you use the parameter elsewhere in your template (for example, by using the Ref intrinsic function), the parameter value becomes a string.
   *
   * For example, users might specify "8888".
   *
   * List&lt;Number>: An array of integers or floats that are separated by commas. AWS CloudFormation validates the parameter value as numbers. However, when you use the parameter elsewhere in your template (for example, by using the Ref intrinsic function), the parameter value becomes a list of strings.
   *
   * For example, users might specify "80,20", and then Ref results in ["80","20"].
   *
   * CommaDelimitedList: An array of literal strings that are separated by commas. The total number of strings should be one more than the total number of commas. Also, each member string is space-trimmed.
   *
   * For example, users might specify "test,dev,prod", and then Ref results in ["test","dev","prod"].
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Parameter value of the application.
 *
 * @public
 */
export interface ParameterValue {
  /**
   * The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The input value associated with the parameter.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * This property corresponds to the *AWS CloudFormation [RollbackTrigger](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger)* Data Type.
 *
 * @public
 */
export interface RollbackTrigger {
  /**
   * This property corresponds to the content of the same name for the *AWS CloudFormation [RollbackTrigger](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger)* Data Type.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * This property corresponds to the content of the same name for the *AWS CloudFormation [RollbackTrigger](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger)* Data Type.
   *
   * @public
   */
  Type: string | undefined;
}

/**
 * This property corresponds to the *AWS CloudFormation [Tag](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag)* Data Type.
 *
 * @public
 */
export interface Tag {
  /**
   * This property corresponds to the content of the same name for the *AWS CloudFormation [Tag](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag)* Data Type.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * This property corresponds to the content of the same name for the *AWS CloudFormation [Tag](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag)* Data Type.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * An application version summary.
 *
 * @public
 */
export interface VersionSummary {
  /**
   * The application Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The date and time this resource was created.
   *
   * @public
   */
  CreationTime: string | undefined;

  /**
   * The semantic version of the application:
   *
   * [https://semver.org/](https://semver.org/)
   *
   * @public
   */
  SemanticVersion: string | undefined;

  /**
   * A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.
   *
   * @public
   */
  SourceCodeUrl?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * The name of the author publishing the app.
   *
   * Minimum length=1. Maximum length=127.
   *
   * Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
   *
   * @public
   */
  Author: string | undefined;

  /**
   * The description of the application.
   *
   * Minimum length=1. Maximum length=256
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A URL with more information about the application, for example the location of your GitHub repository for the application.
   *
   * @public
   */
  HomePageUrl?: string | undefined;

  /**
   * Labels to improve discovery of apps in search results.
   *
   * Minimum length=1. Maximum length=127. Maximum number of labels: 10
   *
   * Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
   *
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * A local text file that contains the license of the app that matches the spdxLicenseID value of your application. The file has the format file://&lt;path>/&lt;filename>.
   *
   * Maximum size 5 MB
   *
   * You can specify only one of licenseBody and licenseUrl; otherwise, an error results.
   *
   * @public
   */
  LicenseBody?: string | undefined;

  /**
   * A link to the S3 object that contains the license of the app that matches the spdxLicenseID value of your application.
   *
   * Maximum size 5 MB
   *
   * You can specify only one of licenseBody and licenseUrl; otherwise, an error results.
   *
   * @public
   */
  LicenseUrl?: string | undefined;

  /**
   * The name of the application that you want to publish.
   *
   * Minimum length=1. Maximum length=140
   *
   * Pattern: "[a-zA-Z0-9\\-]+";
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A local text readme file in Markdown language that contains a more detailed description of the application and how it works. The file has the format file://&lt;path>/&lt;filename>.
   *
   * Maximum size 5 MB
   *
   * You can specify only one of readmeBody and readmeUrl; otherwise, an error results.
   *
   * @public
   */
  ReadmeBody?: string | undefined;

  /**
   * A link to the S3 object in Markdown language that contains a more detailed description of the application and how it works.
   *
   * Maximum size 5 MB
   *
   * You can specify only one of readmeBody and readmeUrl; otherwise, an error results.
   *
   * @public
   */
  ReadmeUrl?: string | undefined;

  /**
   * The semantic version of the application:
   *
   * [https://semver.org/](https://semver.org/)
   *
   * @public
   */
  SemanticVersion?: string | undefined;

  /**
   * A link to the S3 object that contains the ZIP archive of the source code for this version of your application.
   *
   * Maximum size 50 MB
   *
   * @public
   */
  SourceCodeArchiveUrl?: string | undefined;

  /**
   * A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.
   *
   * @public
   */
  SourceCodeUrl?: string | undefined;

  /**
   * A valid identifier from [https://spdx.org/licenses/](https://spdx.org/licenses/).
   *
   * @public
   */
  SpdxLicenseId?: string | undefined;

  /**
   * The local raw packaged AWS SAM template file of your application. The file has the format file://&lt;path>/&lt;filename>.
   *
   * You can specify only one of templateBody and templateUrl; otherwise an error results.
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * A link to the S3 object containing the packaged AWS SAM template of your application.
   *
   * You can specify only one of templateBody and templateUrl; otherwise an error results.
   *
   * @public
   */
  TemplateUrl?: string | undefined;
}

/**
 * Application version details.
 *
 * @public
 */
export interface Version {
  /**
   * The application Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The date and time this resource was created.
   *
   * @public
   */
  CreationTime: string | undefined;

  /**
   * An array of parameter types supported by the application.
   *
   * @public
   */
  ParameterDefinitions: ParameterDefinition[] | undefined;

  /**
   * A list of values that you must specify before you can deploy certain applications. Some applications might include resources that can affect permissions in your AWS account, for example, by creating new AWS Identity and Access Management (IAM) users. For those applications, you must explicitly acknowledge their capabilities by specifying this parameter.
   *
   * The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM, CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.
   *
   * The following resources require you to specify CAPABILITY_IAM or CAPABILITY_NAMED_IAM: [AWS::IAM::Group](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html), [AWS::IAM::InstanceProfile](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html), [AWS::IAM::Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html), and [AWS::IAM::Role](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html). If the application contains IAM resources, you can specify either CAPABILITY_IAM or CAPABILITY_NAMED_IAM. If the application contains IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM.
   *
   * The following resources require you to specify CAPABILITY_RESOURCE_POLICY: [AWS::Lambda::Permission](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html), [AWS::IAM:Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html), [AWS::ApplicationAutoScaling::ScalingPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html), [AWS::S3::BucketPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html), [AWS::SQS::QueuePolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html), and [AWS::SNS::TopicPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html).
   *
   * Applications that contain one or more nested applications require you to specify CAPABILITY_AUTO_EXPAND.
   *
   * If your application template contains any of the above resources, we recommend that you review all permissions associated with the application before deploying. If you don't specify this parameter for an application that requires capabilities, the call will fail.
   *
   * @public
   */
  RequiredCapabilities: Capability[] | undefined;

  /**
   * Whether all of the AWS resources contained in this application are supported in the region in which it is being retrieved.
   *
   * @public
   */
  ResourcesSupported: boolean | undefined;

  /**
   * The semantic version of the application:
   *
   * [https://semver.org/](https://semver.org/)
   *
   * @public
   */
  SemanticVersion: string | undefined;

  /**
   * A link to the S3 object that contains the ZIP archive of the source code for this version of your application.
   *
   * Maximum size 50 MB
   *
   * @public
   */
  SourceCodeArchiveUrl?: string | undefined;

  /**
   * A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.
   *
   * @public
   */
  SourceCodeUrl?: string | undefined;

  /**
   * A link to the packaged AWS SAM template of your application.
   *
   * @public
   */
  TemplateUrl: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * The application Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The name of the author publishing the app.
   *
   * Minimum length=1. Maximum length=127.
   *
   * Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
   *
   * @public
   */
  Author?: string | undefined;

  /**
   * The date and time this resource was created.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The description of the application.
   *
   * Minimum length=1. Maximum length=256
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A URL with more information about the application, for example the location of your GitHub repository for the application.
   *
   * @public
   */
  HomePageUrl?: string | undefined;

  /**
   * Whether the author of this application has been verified. This means means that AWS has made a good faith review, as a reasonable and prudent service provider, of the information provided by the requester and has confirmed that the requester's identity is as claimed.
   *
   * @public
   */
  IsVerifiedAuthor?: boolean | undefined;

  /**
   * Labels to improve discovery of apps in search results.
   *
   * Minimum length=1. Maximum length=127. Maximum number of labels: 10
   *
   * Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
   *
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * A link to a license file of the app that matches the spdxLicenseID value of your application.
   *
   * Maximum size 5 MB
   *
   * @public
   */
  LicenseUrl?: string | undefined;

  /**
   * The name of the application.
   *
   * Minimum length=1. Maximum length=140
   *
   * Pattern: "[a-zA-Z0-9\\-]+";
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.
   *
   * Maximum size 5 MB
   *
   * @public
   */
  ReadmeUrl?: string | undefined;

  /**
   * A valid identifier from https://spdx.org/licenses/.
   *
   * @public
   */
  SpdxLicenseId?: string | undefined;

  /**
   * The URL to the public profile of a verified author. This URL is submitted by the author.
   *
   * @public
   */
  VerifiedAuthorUrl?: string | undefined;

  /**
   * Version information about the application.
   *
   * @public
   */
  Version?: Version | undefined;
}

/**
 * @public
 */
export interface CreateApplicationVersionRequest {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The semantic version of the new version.
   *
   * @public
   */
  SemanticVersion: string | undefined;

  /**
   * A link to the S3 object that contains the ZIP archive of the source code for this version of your application.
   *
   * Maximum size 50 MB
   *
   * @public
   */
  SourceCodeArchiveUrl?: string | undefined;

  /**
   * A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.
   *
   * @public
   */
  SourceCodeUrl?: string | undefined;

  /**
   * The raw packaged AWS SAM template of your application.
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * A link to the packaged AWS SAM template of your application.
   *
   * @public
   */
  TemplateUrl?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationVersionResponse {
  /**
   * The application Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The date and time this resource was created.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * An array of parameter types supported by the application.
   *
   * @public
   */
  ParameterDefinitions?: ParameterDefinition[] | undefined;

  /**
   * A list of values that you must specify before you can deploy certain applications. Some applications might include resources that can affect permissions in your AWS account, for example, by creating new AWS Identity and Access Management (IAM) users. For those applications, you must explicitly acknowledge their capabilities by specifying this parameter.
   *
   * The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM, CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.
   *
   * The following resources require you to specify CAPABILITY_IAM or CAPABILITY_NAMED_IAM: [AWS::IAM::Group](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html), [AWS::IAM::InstanceProfile](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html), [AWS::IAM::Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html), and [AWS::IAM::Role](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html). If the application contains IAM resources, you can specify either CAPABILITY_IAM or CAPABILITY_NAMED_IAM. If the application contains IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM.
   *
   * The following resources require you to specify CAPABILITY_RESOURCE_POLICY: [AWS::Lambda::Permission](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html), [AWS::IAM:Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html), [AWS::ApplicationAutoScaling::ScalingPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html), [AWS::S3::BucketPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html), [AWS::SQS::QueuePolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html), and [AWS::SNS::TopicPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html).
   *
   * Applications that contain one or more nested applications require you to specify CAPABILITY_AUTO_EXPAND.
   *
   * If your application template contains any of the above resources, we recommend that you review all permissions associated with the application before deploying. If you don't specify this parameter for an application that requires capabilities, the call will fail.
   *
   * @public
   */
  RequiredCapabilities?: Capability[] | undefined;

  /**
   * Whether all of the AWS resources contained in this application are supported in the region in which it is being retrieved.
   *
   * @public
   */
  ResourcesSupported?: boolean | undefined;

  /**
   * The semantic version of the application:
   *
   * [https://semver.org/](https://semver.org/)
   *
   * @public
   */
  SemanticVersion?: string | undefined;

  /**
   * A link to the S3 object that contains the ZIP archive of the source code for this version of your application.
   *
   * Maximum size 50 MB
   *
   * @public
   */
  SourceCodeArchiveUrl?: string | undefined;

  /**
   * A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.
   *
   * @public
   */
  SourceCodeUrl?: string | undefined;

  /**
   * A link to the packaged AWS SAM template of your application.
   *
   * @public
   */
  TemplateUrl?: string | undefined;
}

/**
 * This property corresponds to the *AWS CloudFormation [RollbackConfiguration](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration)* Data Type.
 *
 * @public
 */
export interface RollbackConfiguration {
  /**
   * This property corresponds to the content of the same name for the *AWS CloudFormation [RollbackConfiguration](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration)* Data Type.
   *
   * @public
   */
  MonitoringTimeInMinutes?: number | undefined;

  /**
   * This property corresponds to the content of the same name for the *AWS CloudFormation [RollbackConfiguration](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration)* Data Type.
   *
   * @public
   */
  RollbackTriggers?: RollbackTrigger[] | undefined;
}

/**
 * @public
 */
export interface CreateCloudFormationChangeSetRequest {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * A list of values that you must specify before you can deploy certain applications. Some applications might include resources that can affect permissions in your AWS account, for example, by creating new AWS Identity and Access Management (IAM) users. For those applications, you must explicitly acknowledge their capabilities by specifying this parameter.
   *
   * The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM, CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.
   *
   * The following resources require you to specify CAPABILITY_IAM or CAPABILITY_NAMED_IAM: [AWS::IAM::Group](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html), [AWS::IAM::InstanceProfile](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html), [AWS::IAM::Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html), and [AWS::IAM::Role](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html). If the application contains IAM resources, you can specify either CAPABILITY_IAM or CAPABILITY_NAMED_IAM. If the application contains IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM.
   *
   * The following resources require you to specify CAPABILITY_RESOURCE_POLICY: [AWS::Lambda::Permission](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html), [AWS::IAM:Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html), [AWS::ApplicationAutoScaling::ScalingPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html), [AWS::S3::BucketPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html), [AWS::SQS::QueuePolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html), and [AWS::SNS:TopicPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html).
   *
   * Applications that contain one or more nested applications require you to specify CAPABILITY_AUTO_EXPAND.
   *
   * If your application template contains any of the above resources, we recommend that you review all permissions associated with the application before deploying. If you don't specify this parameter for an application that requires capabilities, the call will fail.
   *
   * @public
   */
  Capabilities?: string[] | undefined;

  /**
   * This property corresponds to the parameter of the same name for the *AWS CloudFormation [CreateChangeSet](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet)* API.
   *
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * This property corresponds to the parameter of the same name for the *AWS CloudFormation [CreateChangeSet](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet)* API.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * This property corresponds to the parameter of the same name for the *AWS CloudFormation [CreateChangeSet](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet)* API.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * This property corresponds to the parameter of the same name for the *AWS CloudFormation [CreateChangeSet](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet)* API.
   *
   * @public
   */
  NotificationArns?: string[] | undefined;

  /**
   * A list of parameter values for the parameters of the application.
   *
   * @public
   */
  ParameterOverrides?: ParameterValue[] | undefined;

  /**
   * This property corresponds to the parameter of the same name for the *AWS CloudFormation [CreateChangeSet](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet)* API.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * This property corresponds to the parameter of the same name for the *AWS CloudFormation [CreateChangeSet](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet)* API.
   *
   * @public
   */
  RollbackConfiguration?: RollbackConfiguration | undefined;

  /**
   * The semantic version of the application:
   *
   * [https://semver.org/](https://semver.org/)
   *
   * @public
   */
  SemanticVersion?: string | undefined;

  /**
   * This property corresponds to the parameter of the same name for the *AWS CloudFormation [CreateChangeSet](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet)* API.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * This property corresponds to the parameter of the same name for the *AWS CloudFormation [CreateChangeSet](https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet)* API.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The UUID returned by CreateCloudFormationTemplate.
   *
   * Pattern: [0-9a-fA-F]\{8\}\-[0-9a-fA-F]\{4\}\-[0-9a-fA-F]\{4\}\-[0-9a-fA-F]\{4\}\-[0-9a-fA-F]\{12\}
   *
   * @public
   */
  TemplateId?: string | undefined;
}

/**
 * @public
 */
export interface CreateCloudFormationChangeSetResponse {
  /**
   * The application Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the change set.
   *
   * Length constraints: Minimum length of 1.
   *
   * Pattern: ARN:[-a-zA-Z0-9:/]*
   *
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * The semantic version of the application:
   *
   * [https://semver.org/](https://semver.org/)
   *
   * @public
   */
  SemanticVersion?: string | undefined;

  /**
   * The unique ID of the stack.
   *
   * @public
   */
  StackId?: string | undefined;
}

/**
 * @public
 */
export interface CreateCloudFormationTemplateRequest {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The semantic version of the application:
   *
   * [https://semver.org/](https://semver.org/)
   *
   * @public
   */
  SemanticVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateCloudFormationTemplateResponse {
  /**
   * The application Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The date and time this resource was created.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The date and time this template expires. Templates expire 1 hour after creation.
   *
   * @public
   */
  ExpirationTime?: string | undefined;

  /**
   * The semantic version of the application:
   *
   * [https://semver.org/](https://semver.org/)
   *
   * @public
   */
  SemanticVersion?: string | undefined;

  /**
   * Status of the template creation workflow.
   *
   * Possible values: PREPARING | ACTIVE | EXPIRED
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The UUID returned by CreateCloudFormationTemplate.
   *
   * Pattern: [0-9a-fA-F]\{8\}\-[0-9a-fA-F]\{4\}\-[0-9a-fA-F]\{4\}\-[0-9a-fA-F]\{4\}\-[0-9a-fA-F]\{12\}
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * A link to the template that can be used to deploy the application using AWS CloudFormation.
   *
   * @public
   */
  TemplateUrl?: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The semantic version of the application to get.
   *
   * @public
   */
  SemanticVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * The application Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The name of the author publishing the app.
   *
   * Minimum length=1. Maximum length=127.
   *
   * Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
   *
   * @public
   */
  Author?: string | undefined;

  /**
   * The date and time this resource was created.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The description of the application.
   *
   * Minimum length=1. Maximum length=256
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A URL with more information about the application, for example the location of your GitHub repository for the application.
   *
   * @public
   */
  HomePageUrl?: string | undefined;

  /**
   * Whether the author of this application has been verified. This means means that AWS has made a good faith review, as a reasonable and prudent service provider, of the information provided by the requester and has confirmed that the requester's identity is as claimed.
   *
   * @public
   */
  IsVerifiedAuthor?: boolean | undefined;

  /**
   * Labels to improve discovery of apps in search results.
   *
   * Minimum length=1. Maximum length=127. Maximum number of labels: 10
   *
   * Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
   *
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * A link to a license file of the app that matches the spdxLicenseID value of your application.
   *
   * Maximum size 5 MB
   *
   * @public
   */
  LicenseUrl?: string | undefined;

  /**
   * The name of the application.
   *
   * Minimum length=1. Maximum length=140
   *
   * Pattern: "[a-zA-Z0-9\\-]+";
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.
   *
   * Maximum size 5 MB
   *
   * @public
   */
  ReadmeUrl?: string | undefined;

  /**
   * A valid identifier from https://spdx.org/licenses/.
   *
   * @public
   */
  SpdxLicenseId?: string | undefined;

  /**
   * The URL to the public profile of a verified author. This URL is submitted by the author.
   *
   * @public
   */
  VerifiedAuthorUrl?: string | undefined;

  /**
   * Version information about the application.
   *
   * @public
   */
  Version?: Version | undefined;
}

/**
 * @public
 */
export interface GetApplicationPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationPolicyResponse {
  /**
   * An array of policy statements applied to the application.
   *
   * @public
   */
  Statements?: ApplicationPolicyStatement[] | undefined;
}

/**
 * @public
 */
export interface GetCloudFormationTemplateRequest {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The UUID returned by CreateCloudFormationTemplate.
   *
   * Pattern: [0-9a-fA-F]\{8\}\-[0-9a-fA-F]\{4\}\-[0-9a-fA-F]\{4\}\-[0-9a-fA-F]\{4\}\-[0-9a-fA-F]\{12\}
   *
   * @public
   */
  TemplateId: string | undefined;
}

/**
 * @public
 */
export interface GetCloudFormationTemplateResponse {
  /**
   * The application Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The date and time this resource was created.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The date and time this template expires. Templates expire 1 hour after creation.
   *
   * @public
   */
  ExpirationTime?: string | undefined;

  /**
   * The semantic version of the application:
   *
   * [https://semver.org/](https://semver.org/)
   *
   * @public
   */
  SemanticVersion?: string | undefined;

  /**
   * Status of the template creation workflow.
   *
   * Possible values: PREPARING | ACTIVE | EXPIRED
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The UUID returned by CreateCloudFormationTemplate.
   *
   * Pattern: [0-9a-fA-F]\{8\}\-[0-9a-fA-F]\{4\}\-[0-9a-fA-F]\{4\}\-[0-9a-fA-F]\{4\}\-[0-9a-fA-F]\{12\}
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * A link to the template that can be used to deploy the application using AWS CloudFormation.
   *
   * @public
   */
  TemplateUrl?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationDependenciesRequest {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The total number of items to return.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * A token to specify where to start paginating.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The semantic version of the application to get.
   *
   * @public
   */
  SemanticVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationDependenciesResponse {
  /**
   * An array of application summaries nested in the application.
   *
   * @public
   */
  Dependencies?: ApplicationDependencySummary[] | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * The total number of items to return.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * A token to specify where to start paginating.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * An array of application summaries.
   *
   * @public
   */
  Applications?: ApplicationSummary[] | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationVersionsRequest {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The total number of items to return.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * A token to specify where to start paginating.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationVersionsResponse {
  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of version summaries for the application.
   *
   * @public
   */
  Versions?: VersionSummary[] | undefined;
}

/**
 * @public
 */
export interface PutApplicationPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * An array of policy statements applied to the application.
   *
   * @public
   */
  Statements: ApplicationPolicyStatement[] | undefined;
}

/**
 * @public
 */
export interface PutApplicationPolicyResponse {
  /**
   * An array of policy statements applied to the application.
   *
   * @public
   */
  Statements?: ApplicationPolicyStatement[] | undefined;
}

/**
 * @public
 */
export interface UnshareApplicationRequest {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The AWS Organization ID to unshare the application from.
   *
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The name of the author publishing the app.
   *
   * Minimum length=1. Maximum length=127.
   *
   * Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
   *
   * @public
   */
  Author?: string | undefined;

  /**
   * The description of the application.
   *
   * Minimum length=1. Maximum length=256
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A URL with more information about the application, for example the location of your GitHub repository for the application.
   *
   * @public
   */
  HomePageUrl?: string | undefined;

  /**
   * Labels to improve discovery of apps in search results.
   *
   * Minimum length=1. Maximum length=127. Maximum number of labels: 10
   *
   * Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
   *
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * A text readme file in Markdown language that contains a more detailed description of the application and how it works.
   *
   * Maximum size 5 MB
   *
   * @public
   */
  ReadmeBody?: string | undefined;

  /**
   * A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.
   *
   * Maximum size 5 MB
   *
   * @public
   */
  ReadmeUrl?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * The application Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The name of the author publishing the app.
   *
   * Minimum length=1. Maximum length=127.
   *
   * Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
   *
   * @public
   */
  Author?: string | undefined;

  /**
   * The date and time this resource was created.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The description of the application.
   *
   * Minimum length=1. Maximum length=256
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A URL with more information about the application, for example the location of your GitHub repository for the application.
   *
   * @public
   */
  HomePageUrl?: string | undefined;

  /**
   * Whether the author of this application has been verified. This means means that AWS has made a good faith review, as a reasonable and prudent service provider, of the information provided by the requester and has confirmed that the requester's identity is as claimed.
   *
   * @public
   */
  IsVerifiedAuthor?: boolean | undefined;

  /**
   * Labels to improve discovery of apps in search results.
   *
   * Minimum length=1. Maximum length=127. Maximum number of labels: 10
   *
   * Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
   *
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * A link to a license file of the app that matches the spdxLicenseID value of your application.
   *
   * Maximum size 5 MB
   *
   * @public
   */
  LicenseUrl?: string | undefined;

  /**
   * The name of the application.
   *
   * Minimum length=1. Maximum length=140
   *
   * Pattern: "[a-zA-Z0-9\\-]+";
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.
   *
   * Maximum size 5 MB
   *
   * @public
   */
  ReadmeUrl?: string | undefined;

  /**
   * A valid identifier from https://spdx.org/licenses/.
   *
   * @public
   */
  SpdxLicenseId?: string | undefined;

  /**
   * The URL to the public profile of a verified author. This URL is submitted by the author.
   *
   * @public
   */
  VerifiedAuthorUrl?: string | undefined;

  /**
   * Version information about the application.
   *
   * @public
   */
  Version?: Version | undefined;
}
