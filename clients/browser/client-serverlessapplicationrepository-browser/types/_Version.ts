import {
  _ParameterDefinition,
  _UnmarshalledParameterDefinition
} from "./_ParameterDefinition";

/**
 * <p>Application version details.</p>
 */
export interface _Version {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId: string;

  /**
   * <p>The date and time this resource was created.</p>
   */
  CreationTime: string;

  /**
   * <p>An array of parameter types supported by the application.</p>
   */
  ParameterDefinitions:
    | Array<_ParameterDefinition>
    | Iterable<_ParameterDefinition>;

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
  RequiredCapabilities:
    | Array<
        | "CAPABILITY_IAM"
        | "CAPABILITY_NAMED_IAM"
        | "CAPABILITY_AUTO_EXPAND"
        | "CAPABILITY_RESOURCE_POLICY"
        | string
      >
    | Iterable<
        | "CAPABILITY_IAM"
        | "CAPABILITY_NAMED_IAM"
        | "CAPABILITY_AUTO_EXPAND"
        | "CAPABILITY_RESOURCE_POLICY"
        | string
      >;

  /**
   * <p>Whether all of the AWS resources contained in this application are supported in the region
   *  in which it is being retrieved.</p>
   */
  ResourcesSupported: boolean;

  /**
   * <p>The semantic version of the application:</p><p>
   *  <a href="https://semver.org/">https://semver.org/</a>
   *  </p>
   */
  SemanticVersion: string;

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
  TemplateUrl: string;
}

export interface _UnmarshalledVersion extends _Version {
  /**
   * <p>An array of parameter types supported by the application.</p>
   */
  ParameterDefinitions: Array<_UnmarshalledParameterDefinition>;

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
  RequiredCapabilities: Array<
    | "CAPABILITY_IAM"
    | "CAPABILITY_NAMED_IAM"
    | "CAPABILITY_AUTO_EXPAND"
    | "CAPABILITY_RESOURCE_POLICY"
    | string
  >;
}
