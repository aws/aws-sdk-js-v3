// smithy-typescript generated code
import {
  InstanceMetadataOptions,
  LifecyclePolicyDetail,
  LifecyclePolicyResourceSelection,
  LifecyclePolicyResourceType,
  LifecyclePolicyStatus,
  Logging,
  Placement,
} from "./models_0";

/**
 * @public
 */
export interface UpdateInfrastructureConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that you want to
   * 			update.</p>
   * @public
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p>The description of the infrastructure configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The instance types of the infrastructure configuration. You can specify one or more
   * 			instance types to use for this build. The service will pick one of these instance types
   * 			based on availability.</p>
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * <p>The instance profile to associate with the instance used to customize your Amazon EC2
   * 			AMI.</p>
   * @public
   */
  instanceProfileName: string | undefined;

  /**
   * <p>The security group IDs to associate with the instance used to customize your Amazon EC2
   * 			AMI.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The subnet ID to place the instance used to customize your Amazon EC2 AMI in.</p>
   * @public
   */
  subnetId?: string | undefined;

  /**
   * <p>The logging configuration of the infrastructure configuration.</p>
   * @public
   */
  logging?: Logging | undefined;

  /**
   * <p>The key pair of the infrastructure configuration. You can use this to log on to and
   * 			debug the instance used to create your image.</p>
   * @public
   */
  keyPair?: string | undefined;

  /**
   * <p>The terminate instance on failure setting of the infrastructure configuration. Set to
   * 			false if you want Image Builder to retain the instance used to configure your AMI if the build or
   * 			test phase of your workflow fails.</p>
   * @public
   */
  terminateInstanceOnFailure?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event
   * 			notifications.</p>
   *          <note>
   *             <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys
   * 				from other accounts. The key that is used to encrypt the SNS topic must reside in the
   * 				account that the Image Builder service runs under.</p>
   *          </note>
   * @public
   */
  snsTopicArn?: string | undefined;

  /**
   * <p>The tags attached to the resource created by Image Builder.</p>
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * <p>The instance metadata options that you can set for the HTTP requests that pipeline
   * 			builds use to launch EC2 build and test instances. For more information about instance
   * 			metadata options, see one of the following links:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the
   * 						<i>
   *                      <i>Amazon EC2 User Guide</i>
   *                   </i> for Linux instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the
   * 						<i>
   *                      <i>Amazon EC2 Windows Guide</i>
   *                   </i> for Windows instances.</p>
   *             </li>
   *          </ul>
   * @public
   */
  instanceMetadataOptions?: InstanceMetadataOptions | undefined;

  /**
   * <p>The instance placement settings that define where the instances that are launched
   * 			from your image will run.</p>
   * @public
   */
  placement?: Placement | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInfrastructureConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was updated by
   * 			this request.</p>
   * @public
   */
  infrastructureConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLifecyclePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle policy resource.</p>
   * @public
   */
  lifecyclePolicyArn: string | undefined;

  /**
   * <p>Optional description for the lifecycle policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Indicates whether the lifecycle policy resource is enabled.</p>
   * @public
   */
  status?: LifecyclePolicyStatus | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role that Image Builder uses to update the
   * 			lifecycle policy.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>The type of image resource that the lifecycle policy applies to.</p>
   * @public
   */
  resourceType: LifecyclePolicyResourceType | undefined;

  /**
   * <p>The configuration details for a lifecycle policy resource.</p>
   * @public
   */
  policyDetails: LifecyclePolicyDetail[] | undefined;

  /**
   * <p>Selection criteria for resources that the lifecycle policy applies to.</p>
   * @public
   */
  resourceSelection: LifecyclePolicyResourceSelection | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLifecyclePolicyResponse {
  /**
   * <p>The ARN of the image lifecycle policy resource that was updated.</p>
   * @public
   */
  lifecyclePolicyArn?: string | undefined;
}
