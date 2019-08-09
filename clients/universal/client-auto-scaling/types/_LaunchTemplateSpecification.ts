/**
 * <p>Describes a launch template and the launch template version.</p> <p>The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a Launch Template for an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface _LaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template. You must specify either a template ID or a template name.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either a template name or a template ID.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number, <code>$Latest</code>, or <code>$Default</code>. If the value is <code>$Latest</code>, Amazon EC2 Auto Scaling selects the latest version of the launch template when launching instances. If the value is <code>$Default</code>, Amazon EC2 Auto Scaling selects the default version of the launch template when launching instances. The default value is <code>$Default</code>.</p>
   */
  Version?: string;
}

export type _UnmarshalledLaunchTemplateSpecification = _LaunchTemplateSpecification;
