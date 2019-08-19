import { OpsWorksClient } from "./OpsWorksClient";
import { AssignInstanceInput } from "./types/AssignInstanceInput";
import { AssignInstanceOutput } from "./types/AssignInstanceOutput";
import { AssignVolumeInput } from "./types/AssignVolumeInput";
import { AssignVolumeOutput } from "./types/AssignVolumeOutput";
import { AssociateElasticIpInput } from "./types/AssociateElasticIpInput";
import { AssociateElasticIpOutput } from "./types/AssociateElasticIpOutput";
import { AttachElasticLoadBalancerInput } from "./types/AttachElasticLoadBalancerInput";
import { AttachElasticLoadBalancerOutput } from "./types/AttachElasticLoadBalancerOutput";
import { CloneStackInput } from "./types/CloneStackInput";
import { CloneStackOutput } from "./types/CloneStackOutput";
import { CreateAppInput } from "./types/CreateAppInput";
import { CreateAppOutput } from "./types/CreateAppOutput";
import { CreateDeploymentInput } from "./types/CreateDeploymentInput";
import { CreateDeploymentOutput } from "./types/CreateDeploymentOutput";
import { CreateInstanceInput } from "./types/CreateInstanceInput";
import { CreateInstanceOutput } from "./types/CreateInstanceOutput";
import { CreateLayerInput } from "./types/CreateLayerInput";
import { CreateLayerOutput } from "./types/CreateLayerOutput";
import { CreateStackInput } from "./types/CreateStackInput";
import { CreateStackOutput } from "./types/CreateStackOutput";
import { CreateUserProfileInput } from "./types/CreateUserProfileInput";
import { CreateUserProfileOutput } from "./types/CreateUserProfileOutput";
import { DeleteAppInput } from "./types/DeleteAppInput";
import { DeleteAppOutput } from "./types/DeleteAppOutput";
import { DeleteInstanceInput } from "./types/DeleteInstanceInput";
import { DeleteInstanceOutput } from "./types/DeleteInstanceOutput";
import { DeleteLayerInput } from "./types/DeleteLayerInput";
import { DeleteLayerOutput } from "./types/DeleteLayerOutput";
import { DeleteStackInput } from "./types/DeleteStackInput";
import { DeleteStackOutput } from "./types/DeleteStackOutput";
import { DeleteUserProfileInput } from "./types/DeleteUserProfileInput";
import { DeleteUserProfileOutput } from "./types/DeleteUserProfileOutput";
import { DeregisterEcsClusterInput } from "./types/DeregisterEcsClusterInput";
import { DeregisterEcsClusterOutput } from "./types/DeregisterEcsClusterOutput";
import { DeregisterElasticIpInput } from "./types/DeregisterElasticIpInput";
import { DeregisterElasticIpOutput } from "./types/DeregisterElasticIpOutput";
import { DeregisterInstanceInput } from "./types/DeregisterInstanceInput";
import { DeregisterInstanceOutput } from "./types/DeregisterInstanceOutput";
import { DeregisterRdsDbInstanceInput } from "./types/DeregisterRdsDbInstanceInput";
import { DeregisterRdsDbInstanceOutput } from "./types/DeregisterRdsDbInstanceOutput";
import { DeregisterVolumeInput } from "./types/DeregisterVolumeInput";
import { DeregisterVolumeOutput } from "./types/DeregisterVolumeOutput";
import { DescribeAgentVersionsInput } from "./types/DescribeAgentVersionsInput";
import { DescribeAgentVersionsOutput } from "./types/DescribeAgentVersionsOutput";
import { DescribeAppsInput } from "./types/DescribeAppsInput";
import { DescribeAppsOutput } from "./types/DescribeAppsOutput";
import { DescribeCommandsInput } from "./types/DescribeCommandsInput";
import { DescribeCommandsOutput } from "./types/DescribeCommandsOutput";
import { DescribeDeploymentsInput } from "./types/DescribeDeploymentsInput";
import { DescribeDeploymentsOutput } from "./types/DescribeDeploymentsOutput";
import { DescribeEcsClustersInput } from "./types/DescribeEcsClustersInput";
import { DescribeEcsClustersOutput } from "./types/DescribeEcsClustersOutput";
import { DescribeElasticIpsInput } from "./types/DescribeElasticIpsInput";
import { DescribeElasticIpsOutput } from "./types/DescribeElasticIpsOutput";
import { DescribeElasticLoadBalancersInput } from "./types/DescribeElasticLoadBalancersInput";
import { DescribeElasticLoadBalancersOutput } from "./types/DescribeElasticLoadBalancersOutput";
import { DescribeInstancesInput } from "./types/DescribeInstancesInput";
import { DescribeInstancesOutput } from "./types/DescribeInstancesOutput";
import { DescribeLayersInput } from "./types/DescribeLayersInput";
import { DescribeLayersOutput } from "./types/DescribeLayersOutput";
import { DescribeLoadBasedAutoScalingInput } from "./types/DescribeLoadBasedAutoScalingInput";
import { DescribeLoadBasedAutoScalingOutput } from "./types/DescribeLoadBasedAutoScalingOutput";
import { DescribeMyUserProfileInput } from "./types/DescribeMyUserProfileInput";
import { DescribeMyUserProfileOutput } from "./types/DescribeMyUserProfileOutput";
import { DescribeOperatingSystemsInput } from "./types/DescribeOperatingSystemsInput";
import { DescribeOperatingSystemsOutput } from "./types/DescribeOperatingSystemsOutput";
import { DescribePermissionsInput } from "./types/DescribePermissionsInput";
import { DescribePermissionsOutput } from "./types/DescribePermissionsOutput";
import { DescribeRaidArraysInput } from "./types/DescribeRaidArraysInput";
import { DescribeRaidArraysOutput } from "./types/DescribeRaidArraysOutput";
import { DescribeRdsDbInstancesInput } from "./types/DescribeRdsDbInstancesInput";
import { DescribeRdsDbInstancesOutput } from "./types/DescribeRdsDbInstancesOutput";
import { DescribeServiceErrorsInput } from "./types/DescribeServiceErrorsInput";
import { DescribeServiceErrorsOutput } from "./types/DescribeServiceErrorsOutput";
import { DescribeStackProvisioningParametersInput } from "./types/DescribeStackProvisioningParametersInput";
import { DescribeStackProvisioningParametersOutput } from "./types/DescribeStackProvisioningParametersOutput";
import { DescribeStackSummaryInput } from "./types/DescribeStackSummaryInput";
import { DescribeStackSummaryOutput } from "./types/DescribeStackSummaryOutput";
import { DescribeStacksInput } from "./types/DescribeStacksInput";
import { DescribeStacksOutput } from "./types/DescribeStacksOutput";
import { DescribeTimeBasedAutoScalingInput } from "./types/DescribeTimeBasedAutoScalingInput";
import { DescribeTimeBasedAutoScalingOutput } from "./types/DescribeTimeBasedAutoScalingOutput";
import { DescribeUserProfilesInput } from "./types/DescribeUserProfilesInput";
import { DescribeUserProfilesOutput } from "./types/DescribeUserProfilesOutput";
import { DescribeVolumesInput } from "./types/DescribeVolumesInput";
import { DescribeVolumesOutput } from "./types/DescribeVolumesOutput";
import { DetachElasticLoadBalancerInput } from "./types/DetachElasticLoadBalancerInput";
import { DetachElasticLoadBalancerOutput } from "./types/DetachElasticLoadBalancerOutput";
import { DisassociateElasticIpInput } from "./types/DisassociateElasticIpInput";
import { DisassociateElasticIpOutput } from "./types/DisassociateElasticIpOutput";
import { GetHostnameSuggestionInput } from "./types/GetHostnameSuggestionInput";
import { GetHostnameSuggestionOutput } from "./types/GetHostnameSuggestionOutput";
import { GrantAccessInput } from "./types/GrantAccessInput";
import { GrantAccessOutput } from "./types/GrantAccessOutput";
import { ListTagsInput } from "./types/ListTagsInput";
import { ListTagsOutput } from "./types/ListTagsOutput";
import { RebootInstanceInput } from "./types/RebootInstanceInput";
import { RebootInstanceOutput } from "./types/RebootInstanceOutput";
import { RegisterEcsClusterInput } from "./types/RegisterEcsClusterInput";
import { RegisterEcsClusterOutput } from "./types/RegisterEcsClusterOutput";
import { RegisterElasticIpInput } from "./types/RegisterElasticIpInput";
import { RegisterElasticIpOutput } from "./types/RegisterElasticIpOutput";
import { RegisterInstanceInput } from "./types/RegisterInstanceInput";
import { RegisterInstanceOutput } from "./types/RegisterInstanceOutput";
import { RegisterRdsDbInstanceInput } from "./types/RegisterRdsDbInstanceInput";
import { RegisterRdsDbInstanceOutput } from "./types/RegisterRdsDbInstanceOutput";
import { RegisterVolumeInput } from "./types/RegisterVolumeInput";
import { RegisterVolumeOutput } from "./types/RegisterVolumeOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { SetLoadBasedAutoScalingInput } from "./types/SetLoadBasedAutoScalingInput";
import { SetLoadBasedAutoScalingOutput } from "./types/SetLoadBasedAutoScalingOutput";
import { SetPermissionInput } from "./types/SetPermissionInput";
import { SetPermissionOutput } from "./types/SetPermissionOutput";
import { SetTimeBasedAutoScalingInput } from "./types/SetTimeBasedAutoScalingInput";
import { SetTimeBasedAutoScalingOutput } from "./types/SetTimeBasedAutoScalingOutput";
import { StartInstanceInput } from "./types/StartInstanceInput";
import { StartInstanceOutput } from "./types/StartInstanceOutput";
import { StartStackInput } from "./types/StartStackInput";
import { StartStackOutput } from "./types/StartStackOutput";
import { StopInstanceInput } from "./types/StopInstanceInput";
import { StopInstanceOutput } from "./types/StopInstanceOutput";
import { StopStackInput } from "./types/StopStackInput";
import { StopStackOutput } from "./types/StopStackOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UnassignInstanceInput } from "./types/UnassignInstanceInput";
import { UnassignInstanceOutput } from "./types/UnassignInstanceOutput";
import { UnassignVolumeInput } from "./types/UnassignVolumeInput";
import { UnassignVolumeOutput } from "./types/UnassignVolumeOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateAppInput } from "./types/UpdateAppInput";
import { UpdateAppOutput } from "./types/UpdateAppOutput";
import { UpdateElasticIpInput } from "./types/UpdateElasticIpInput";
import { UpdateElasticIpOutput } from "./types/UpdateElasticIpOutput";
import { UpdateInstanceInput } from "./types/UpdateInstanceInput";
import { UpdateInstanceOutput } from "./types/UpdateInstanceOutput";
import { UpdateLayerInput } from "./types/UpdateLayerInput";
import { UpdateLayerOutput } from "./types/UpdateLayerOutput";
import { UpdateMyUserProfileInput } from "./types/UpdateMyUserProfileInput";
import { UpdateMyUserProfileOutput } from "./types/UpdateMyUserProfileOutput";
import { UpdateRdsDbInstanceInput } from "./types/UpdateRdsDbInstanceInput";
import { UpdateRdsDbInstanceOutput } from "./types/UpdateRdsDbInstanceOutput";
import { UpdateStackInput } from "./types/UpdateStackInput";
import { UpdateStackOutput } from "./types/UpdateStackOutput";
import { UpdateUserProfileInput } from "./types/UpdateUserProfileInput";
import { UpdateUserProfileOutput } from "./types/UpdateUserProfileOutput";
import { UpdateVolumeInput } from "./types/UpdateVolumeInput";
import { UpdateVolumeOutput } from "./types/UpdateVolumeOutput";
import { ValidationException } from "./types/ValidationException";
import { AssignInstanceCommand } from "./commands/AssignInstanceCommand";
import { AssignVolumeCommand } from "./commands/AssignVolumeCommand";
import { AssociateElasticIpCommand } from "./commands/AssociateElasticIpCommand";
import { AttachElasticLoadBalancerCommand } from "./commands/AttachElasticLoadBalancerCommand";
import { CloneStackCommand } from "./commands/CloneStackCommand";
import { CreateAppCommand } from "./commands/CreateAppCommand";
import { CreateDeploymentCommand } from "./commands/CreateDeploymentCommand";
import { CreateInstanceCommand } from "./commands/CreateInstanceCommand";
import { CreateLayerCommand } from "./commands/CreateLayerCommand";
import { CreateStackCommand } from "./commands/CreateStackCommand";
import { CreateUserProfileCommand } from "./commands/CreateUserProfileCommand";
import { DeleteAppCommand } from "./commands/DeleteAppCommand";
import { DeleteInstanceCommand } from "./commands/DeleteInstanceCommand";
import { DeleteLayerCommand } from "./commands/DeleteLayerCommand";
import { DeleteStackCommand } from "./commands/DeleteStackCommand";
import { DeleteUserProfileCommand } from "./commands/DeleteUserProfileCommand";
import { DeregisterEcsClusterCommand } from "./commands/DeregisterEcsClusterCommand";
import { DeregisterElasticIpCommand } from "./commands/DeregisterElasticIpCommand";
import { DeregisterInstanceCommand } from "./commands/DeregisterInstanceCommand";
import { DeregisterRdsDbInstanceCommand } from "./commands/DeregisterRdsDbInstanceCommand";
import { DeregisterVolumeCommand } from "./commands/DeregisterVolumeCommand";
import { DescribeAgentVersionsCommand } from "./commands/DescribeAgentVersionsCommand";
import { DescribeAppsCommand } from "./commands/DescribeAppsCommand";
import { DescribeCommandsCommand } from "./commands/DescribeCommandsCommand";
import { DescribeDeploymentsCommand } from "./commands/DescribeDeploymentsCommand";
import { DescribeEcsClustersCommand } from "./commands/DescribeEcsClustersCommand";
import { DescribeElasticIpsCommand } from "./commands/DescribeElasticIpsCommand";
import { DescribeElasticLoadBalancersCommand } from "./commands/DescribeElasticLoadBalancersCommand";
import { DescribeInstancesCommand } from "./commands/DescribeInstancesCommand";
import { DescribeLayersCommand } from "./commands/DescribeLayersCommand";
import { DescribeLoadBasedAutoScalingCommand } from "./commands/DescribeLoadBasedAutoScalingCommand";
import { DescribeMyUserProfileCommand } from "./commands/DescribeMyUserProfileCommand";
import { DescribeOperatingSystemsCommand } from "./commands/DescribeOperatingSystemsCommand";
import { DescribePermissionsCommand } from "./commands/DescribePermissionsCommand";
import { DescribeRaidArraysCommand } from "./commands/DescribeRaidArraysCommand";
import { DescribeRdsDbInstancesCommand } from "./commands/DescribeRdsDbInstancesCommand";
import { DescribeServiceErrorsCommand } from "./commands/DescribeServiceErrorsCommand";
import { DescribeStackProvisioningParametersCommand } from "./commands/DescribeStackProvisioningParametersCommand";
import { DescribeStackSummaryCommand } from "./commands/DescribeStackSummaryCommand";
import { DescribeStacksCommand } from "./commands/DescribeStacksCommand";
import { DescribeTimeBasedAutoScalingCommand } from "./commands/DescribeTimeBasedAutoScalingCommand";
import { DescribeUserProfilesCommand } from "./commands/DescribeUserProfilesCommand";
import { DescribeVolumesCommand } from "./commands/DescribeVolumesCommand";
import { DetachElasticLoadBalancerCommand } from "./commands/DetachElasticLoadBalancerCommand";
import { DisassociateElasticIpCommand } from "./commands/DisassociateElasticIpCommand";
import { GetHostnameSuggestionCommand } from "./commands/GetHostnameSuggestionCommand";
import { GrantAccessCommand } from "./commands/GrantAccessCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { RebootInstanceCommand } from "./commands/RebootInstanceCommand";
import { RegisterEcsClusterCommand } from "./commands/RegisterEcsClusterCommand";
import { RegisterElasticIpCommand } from "./commands/RegisterElasticIpCommand";
import { RegisterInstanceCommand } from "./commands/RegisterInstanceCommand";
import { RegisterRdsDbInstanceCommand } from "./commands/RegisterRdsDbInstanceCommand";
import { RegisterVolumeCommand } from "./commands/RegisterVolumeCommand";
import { SetLoadBasedAutoScalingCommand } from "./commands/SetLoadBasedAutoScalingCommand";
import { SetPermissionCommand } from "./commands/SetPermissionCommand";
import { SetTimeBasedAutoScalingCommand } from "./commands/SetTimeBasedAutoScalingCommand";
import { StartInstanceCommand } from "./commands/StartInstanceCommand";
import { StartStackCommand } from "./commands/StartStackCommand";
import { StopInstanceCommand } from "./commands/StopInstanceCommand";
import { StopStackCommand } from "./commands/StopStackCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UnassignInstanceCommand } from "./commands/UnassignInstanceCommand";
import { UnassignVolumeCommand } from "./commands/UnassignVolumeCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateAppCommand } from "./commands/UpdateAppCommand";
import { UpdateElasticIpCommand } from "./commands/UpdateElasticIpCommand";
import { UpdateInstanceCommand } from "./commands/UpdateInstanceCommand";
import { UpdateLayerCommand } from "./commands/UpdateLayerCommand";
import { UpdateMyUserProfileCommand } from "./commands/UpdateMyUserProfileCommand";
import { UpdateRdsDbInstanceCommand } from "./commands/UpdateRdsDbInstanceCommand";
import { UpdateStackCommand } from "./commands/UpdateStackCommand";
import { UpdateUserProfileCommand } from "./commands/UpdateUserProfileCommand";
import { UpdateVolumeCommand } from "./commands/UpdateVolumeCommand";

export class OpsWorks extends OpsWorksClient {
  /**
   * <p>Assign a registered instance to a layer.</p> <ul> <li> <p>You can assign registered on-premises instances to any layer type.</p> </li> <li> <p>You can assign registered Amazon EC2 instances only to custom layers.</p> </li> <li> <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> </li> </ul> <p> <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management (IAM) user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public assignInstance(
    args: AssignInstanceInput
  ): Promise<AssignInstanceOutput>;
  public assignInstance(
    args: AssignInstanceInput,
    cb: (err: any, data?: AssignInstanceOutput) => void
  ): void;
  public assignInstance(
    args: AssignInstanceInput,
    cb?: (err: any, data?: AssignInstanceOutput) => void
  ): Promise<AssignInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssignInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must first be registered with the stack by calling <a>RegisterVolume</a>. After you register the volume, you must call <a>UpdateVolume</a> to specify a mount point before calling <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public assignVolume(args: AssignVolumeInput): Promise<AssignVolumeOutput>;
  public assignVolume(
    args: AssignVolumeInput,
    cb: (err: any, data?: AssignVolumeOutput) => void
  ): void;
  public assignVolume(
    args: AssignVolumeInput,
    cb?: (err: any, data?: AssignVolumeOutput) => void
  ): Promise<AssignVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssignVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates one of the stack's registered Elastic IP addresses with a specified instance. The address must first be registered with the stack by calling <a>RegisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateElasticIp(
    args: AssociateElasticIpInput
  ): Promise<AssociateElasticIpOutput>;
  public associateElasticIp(
    args: AssociateElasticIpInput,
    cb: (err: any, data?: AssociateElasticIpOutput) => void
  ): void;
  public associateElasticIp(
    args: AssociateElasticIpInput,
    cb?: (err: any, data?: AssociateElasticIpOutput) => void
  ): Promise<AssociateElasticIpOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateElasticIpCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html">Elastic Load Balancing</a>.</p> <note> <p>You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html"> Elastic Load Balancing Developer Guide</a>.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachElasticLoadBalancer(
    args: AttachElasticLoadBalancerInput
  ): Promise<AttachElasticLoadBalancerOutput>;
  public attachElasticLoadBalancer(
    args: AttachElasticLoadBalancerInput,
    cb: (err: any, data?: AttachElasticLoadBalancerOutput) => void
  ): void;
  public attachElasticLoadBalancer(
    args: AttachElasticLoadBalancerInput,
    cb?: (err: any, data?: AttachElasticLoadBalancerOutput) => void
  ): Promise<AttachElasticLoadBalancerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachElasticLoadBalancerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a Stack</a>. By default, all parameters are set to the values used by the parent stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cloneStack(args: CloneStackInput): Promise<CloneStackOutput>;
  public cloneStack(
    args: CloneStackInput,
    cb: (err: any, data?: CloneStackOutput) => void
  ): void;
  public cloneStack(
    args: CloneStackInput,
    cb?: (err: any, data?: CloneStackOutput) => void
  ): Promise<CloneStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CloneStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an app for a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createApp(args: CreateAppInput): Promise<CreateAppOutput>;
  public createApp(
    args: CreateAppInput,
    cb: (err: any, data?: CreateAppOutput) => void
  ): void;
  public createApp(
    args: CreateAppInput,
    cb?: (err: any, data?: CreateAppOutput) => void
  ): Promise<CreateAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Runs deployment or stack commands. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html">Deploying Apps</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html">Run Stack Commands</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDeployment(
    args: CreateDeploymentInput
  ): Promise<CreateDeploymentOutput>;
  public createDeployment(
    args: CreateDeploymentInput,
    cb: (err: any, data?: CreateDeploymentOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentInput,
    cb?: (err: any, data?: CreateDeploymentOutput) => void
  ): Promise<CreateDeploymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDeploymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an Instance to a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createInstance(
    args: CreateInstanceInput
  ): Promise<CreateInstanceOutput>;
  public createInstance(
    args: CreateInstanceInput,
    cb: (err: any, data?: CreateInstanceOutput) => void
  ): void;
  public createInstance(
    args: CreateInstanceInput,
    cb?: (err: any, data?: CreateInstanceOutput) => void
  ): Promise<CreateInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to Create a Layer</a>.</p> <note> <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as many times as you like for that layer type.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLayer(args: CreateLayerInput): Promise<CreateLayerOutput>;
  public createLayer(
    args: CreateLayerInput,
    cb: (err: any, data?: CreateLayerOutput) => void
  ): void;
  public createLayer(
    args: CreateLayerInput,
    cb?: (err: any, data?: CreateLayerOutput) => void
  ): Promise<CreateLayerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLayerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createStack(args: CreateStackInput): Promise<CreateStackOutput>;
  public createStack(
    args: CreateStackInput,
    cb: (err: any, data?: CreateStackOutput) => void
  ): void;
  public createStack(
    args: CreateStackInput,
    cb?: (err: any, data?: CreateStackOutput) => void
  ): Promise<CreateStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUserProfile(
    args: CreateUserProfileInput
  ): Promise<CreateUserProfileOutput>;
  public createUserProfile(
    args: CreateUserProfileInput,
    cb: (err: any, data?: CreateUserProfileOutput) => void
  ): void;
  public createUserProfile(
    args: CreateUserProfileInput,
    cb?: (err: any, data?: CreateUserProfileOutput) => void
  ): Promise<CreateUserProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUserProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApp(args: DeleteAppInput): Promise<DeleteAppOutput>;
  public deleteApp(
    args: DeleteAppInput,
    cb: (err: any, data?: DeleteAppOutput) => void
  ): void;
  public deleteApp(
    args: DeleteAppInput,
    cb?: (err: any, data?: DeleteAppOutput) => void
  ): Promise<DeleteAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-delete.html">Deleting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteInstance(
    args: DeleteInstanceInput
  ): Promise<DeleteInstanceOutput>;
  public deleteInstance(
    args: DeleteInstanceInput,
    cb: (err: any, data?: DeleteInstanceOutput) => void
  ): void;
  public deleteInstance(
    args: DeleteInstanceInput,
    cb?: (err: any, data?: DeleteInstanceOutput) => void
  ): Promise<DeleteInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified layer. You must first stop and then delete all associated instances or unassign registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html">How to Delete a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLayer(args: DeleteLayerInput): Promise<DeleteLayerOutput>;
  public deleteLayer(
    args: DeleteLayerInput,
    cb: (err: any, data?: DeleteLayerOutput) => void
  ): void;
  public deleteLayer(
    args: DeleteLayerInput,
    cb?: (err: any, data?: DeleteLayerOutput) => void
  ): Promise<DeleteLayerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLayerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified stack. You must first delete all instances, layers, and apps or deregister registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-shutting.html">Shut Down a Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteStack(args: DeleteStackInput): Promise<DeleteStackOutput>;
  public deleteStack(
    args: DeleteStackInput,
    cb: (err: any, data?: DeleteStackOutput) => void
  ): void;
  public deleteStack(
    args: DeleteStackInput,
    cb?: (err: any, data?: DeleteStackOutput) => void
  ): Promise<DeleteStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUserProfile(
    args: DeleteUserProfileInput
  ): Promise<DeleteUserProfileOutput>;
  public deleteUserProfile(
    args: DeleteUserProfileInput,
    cb: (err: any, data?: DeleteUserProfileOutput) => void
  ): void;
  public deleteUserProfile(
    args: DeleteUserProfileInput,
    cb?: (err: any, data?: DeleteUserProfileOutput) => void
  ): Promise<DeleteUserProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deregisters a specified Amazon ECS cluster from a stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterEcsCluster(
    args: DeregisterEcsClusterInput
  ): Promise<DeregisterEcsClusterOutput>;
  public deregisterEcsCluster(
    args: DeregisterEcsClusterInput,
    cb: (err: any, data?: DeregisterEcsClusterOutput) => void
  ): void;
  public deregisterEcsCluster(
    args: DeregisterEcsClusterInput,
    cb?: (err: any, data?: DeregisterEcsClusterOutput) => void
  ): Promise<DeregisterEcsClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterEcsClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deregisters a specified Elastic IP address. The address can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterElasticIp(
    args: DeregisterElasticIpInput
  ): Promise<DeregisterElasticIpOutput>;
  public deregisterElasticIp(
    args: DeregisterElasticIpInput,
    cb: (err: any, data?: DeregisterElasticIpOutput) => void
  ): void;
  public deregisterElasticIp(
    args: DeregisterElasticIpInput,
    cb?: (err: any, data?: DeregisterElasticIpOutput) => void
  ): Promise<DeregisterElasticIpOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterElasticIpCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deregister a registered Amazon EC2 or on-premises instance. This action removes the instance from the stack and returns it to your control. This action cannot be used with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterInstance(
    args: DeregisterInstanceInput
  ): Promise<DeregisterInstanceOutput>;
  public deregisterInstance(
    args: DeregisterInstanceInput,
    cb: (err: any, data?: DeregisterInstanceOutput) => void
  ): void;
  public deregisterInstance(
    args: DeregisterInstanceInput,
    cb?: (err: any, data?: DeregisterInstanceOutput) => void
  ): Promise<DeregisterInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deregisters an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterRdsDbInstance(
    args: DeregisterRdsDbInstanceInput
  ): Promise<DeregisterRdsDbInstanceOutput>;
  public deregisterRdsDbInstance(
    args: DeregisterRdsDbInstanceInput,
    cb: (err: any, data?: DeregisterRdsDbInstanceOutput) => void
  ): void;
  public deregisterRdsDbInstance(
    args: DeregisterRdsDbInstanceInput,
    cb?: (err: any, data?: DeregisterRdsDbInstanceOutput) => void
  ): Promise<DeregisterRdsDbInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterRdsDbInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterVolume(
    args: DeregisterVolumeInput
  ): Promise<DeregisterVolumeOutput>;
  public deregisterVolume(
    args: DeregisterVolumeInput,
    cb: (err: any, data?: DeregisterVolumeOutput) => void
  ): void;
  public deregisterVolume(
    args: DeregisterVolumeInput,
    cb?: (err: any, data?: DeregisterVolumeOutput) => void
  ): Promise<DeregisterVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a configuration manager. <code>DescribeAgentVersions</code> returns a list of available agent versions for the specified stack or configuration manager.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAgentVersions(
    args: DescribeAgentVersionsInput
  ): Promise<DescribeAgentVersionsOutput>;
  public describeAgentVersions(
    args: DescribeAgentVersionsInput,
    cb: (err: any, data?: DescribeAgentVersionsOutput) => void
  ): void;
  public describeAgentVersions(
    args: DescribeAgentVersionsInput,
    cb?: (err: any, data?: DescribeAgentVersionsOutput) => void
  ): Promise<DescribeAgentVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAgentVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests a description of a specified set of apps.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeApps(args: DescribeAppsInput): Promise<DescribeAppsOutput>;
  public describeApps(
    args: DescribeAppsInput,
    cb: (err: any, data?: DescribeAppsOutput) => void
  ): void;
  public describeApps(
    args: DescribeAppsInput,
    cb?: (err: any, data?: DescribeAppsOutput) => void
  ): Promise<DescribeAppsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAppsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the results of specified commands.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCommands(
    args: DescribeCommandsInput
  ): Promise<DescribeCommandsOutput>;
  public describeCommands(
    args: DescribeCommandsInput,
    cb: (err: any, data?: DescribeCommandsOutput) => void
  ): void;
  public describeCommands(
    args: DescribeCommandsInput,
    cb?: (err: any, data?: DescribeCommandsOutput) => void
  ): Promise<DescribeCommandsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCommandsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests a description of a specified set of deployments.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDeployments(
    args: DescribeDeploymentsInput
  ): Promise<DescribeDeploymentsOutput>;
  public describeDeployments(
    args: DescribeDeploymentsInput,
    cb: (err: any, data?: DescribeDeploymentsOutput) => void
  ): void;
  public describeDeployments(
    args: DescribeDeploymentsInput,
    cb?: (err: any, data?: DescribeDeploymentsOutput) => void
  ): Promise<DescribeDeploymentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDeploymentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID, you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result set has a maximum of one element.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEcsClusters(
    args: DescribeEcsClustersInput
  ): Promise<DescribeEcsClustersOutput>;
  public describeEcsClusters(
    args: DescribeEcsClustersInput,
    cb: (err: any, data?: DescribeEcsClustersOutput) => void
  ): void;
  public describeEcsClusters(
    args: DescribeEcsClustersInput,
    cb?: (err: any, data?: DescribeEcsClustersOutput) => void
  ): Promise<DescribeEcsClustersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEcsClustersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP addresses</a>.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeElasticIps(
    args: DescribeElasticIpsInput
  ): Promise<DescribeElasticIpsOutput>;
  public describeElasticIps(
    args: DescribeElasticIpsInput,
    cb: (err: any, data?: DescribeElasticIpsOutput) => void
  ): void;
  public describeElasticIps(
    args: DescribeElasticIpsInput,
    cb?: (err: any, data?: DescribeElasticIpsOutput) => void
  ): Promise<DescribeElasticIpsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeElasticIpsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a stack's Elastic Load Balancing instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeElasticLoadBalancers(
    args: DescribeElasticLoadBalancersInput
  ): Promise<DescribeElasticLoadBalancersOutput>;
  public describeElasticLoadBalancers(
    args: DescribeElasticLoadBalancersInput,
    cb: (err: any, data?: DescribeElasticLoadBalancersOutput) => void
  ): void;
  public describeElasticLoadBalancers(
    args: DescribeElasticLoadBalancersInput,
    cb?: (err: any, data?: DescribeElasticLoadBalancersOutput) => void
  ): Promise<DescribeElasticLoadBalancersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeElasticLoadBalancersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests a description of a set of instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInstances(
    args: DescribeInstancesInput
  ): Promise<DescribeInstancesOutput>;
  public describeInstances(
    args: DescribeInstancesInput,
    cb: (err: any, data?: DescribeInstancesOutput) => void
  ): void;
  public describeInstances(
    args: DescribeInstancesInput,
    cb?: (err: any, data?: DescribeInstancesOutput) => void
  ): Promise<DescribeInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests a description of one or more layers in a specified stack.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLayers(
    args: DescribeLayersInput
  ): Promise<DescribeLayersOutput>;
  public describeLayers(
    args: DescribeLayersInput,
    cb: (err: any, data?: DescribeLayersOutput) => void
  ): void;
  public describeLayers(
    args: DescribeLayersInput,
    cb?: (err: any, data?: DescribeLayersOutput) => void
  ): Promise<DescribeLayersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLayersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes load-based auto scaling configurations for specified layers.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLoadBasedAutoScaling(
    args: DescribeLoadBasedAutoScalingInput
  ): Promise<DescribeLoadBasedAutoScalingOutput>;
  public describeLoadBasedAutoScaling(
    args: DescribeLoadBasedAutoScalingInput,
    cb: (err: any, data?: DescribeLoadBasedAutoScalingOutput) => void
  ): void;
  public describeLoadBasedAutoScaling(
    args: DescribeLoadBasedAutoScalingInput,
    cb?: (err: any, data?: DescribeLoadBasedAutoScalingOutput) => void
  ): Promise<DescribeLoadBasedAutoScalingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLoadBasedAutoScalingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a user's SSH information.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMyUserProfile(
    args: DescribeMyUserProfileInput
  ): Promise<DescribeMyUserProfileOutput>;
  public describeMyUserProfile(
    args: DescribeMyUserProfileInput,
    cb: (err: any, data?: DescribeMyUserProfileOutput) => void
  ): void;
  public describeMyUserProfile(
    args: DescribeMyUserProfileInput,
    cb?: (err: any, data?: DescribeMyUserProfileOutput) => void
  ): Promise<DescribeMyUserProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMyUserProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the operating systems that are supported by AWS OpsWorks Stacks.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeOperatingSystems(
    args: DescribeOperatingSystemsInput
  ): Promise<DescribeOperatingSystemsOutput>;
  public describeOperatingSystems(
    args: DescribeOperatingSystemsInput,
    cb: (err: any, data?: DescribeOperatingSystemsOutput) => void
  ): void;
  public describeOperatingSystems(
    args: DescribeOperatingSystemsInput,
    cb?: (err: any, data?: DescribeOperatingSystemsOutput) => void
  ): Promise<DescribeOperatingSystemsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeOperatingSystemsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the permissions for a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePermissions(
    args: DescribePermissionsInput
  ): Promise<DescribePermissionsOutput>;
  public describePermissions(
    args: DescribePermissionsInput,
    cb: (err: any, data?: DescribePermissionsOutput) => void
  ): void;
  public describePermissions(
    args: DescribePermissionsInput,
    cb?: (err: any, data?: DescribePermissionsOutput) => void
  ): Promise<DescribePermissionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePermissionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describe an instance's RAID arrays.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRaidArrays(
    args: DescribeRaidArraysInput
  ): Promise<DescribeRaidArraysOutput>;
  public describeRaidArrays(
    args: DescribeRaidArraysInput,
    cb: (err: any, data?: DescribeRaidArraysOutput) => void
  ): void;
  public describeRaidArrays(
    args: DescribeRaidArraysInput,
    cb?: (err: any, data?: DescribeRaidArraysOutput) => void
  ): Promise<DescribeRaidArraysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRaidArraysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes Amazon RDS instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRdsDbInstances(
    args: DescribeRdsDbInstancesInput
  ): Promise<DescribeRdsDbInstancesOutput>;
  public describeRdsDbInstances(
    args: DescribeRdsDbInstancesInput,
    cb: (err: any, data?: DescribeRdsDbInstancesOutput) => void
  ): void;
  public describeRdsDbInstances(
    args: DescribeRdsDbInstancesInput,
    cb?: (err: any, data?: DescribeRdsDbInstancesOutput) => void
  ): Promise<DescribeRdsDbInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRdsDbInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes AWS OpsWorks Stacks service errors.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeServiceErrors(
    args: DescribeServiceErrorsInput
  ): Promise<DescribeServiceErrorsOutput>;
  public describeServiceErrors(
    args: DescribeServiceErrorsInput,
    cb: (err: any, data?: DescribeServiceErrorsOutput) => void
  ): void;
  public describeServiceErrors(
    args: DescribeServiceErrorsInput,
    cb?: (err: any, data?: DescribeServiceErrorsOutput) => void
  ): Promise<DescribeServiceErrorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeServiceErrorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests a description of a stack's provisioning parameters.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStackProvisioningParameters(
    args: DescribeStackProvisioningParametersInput
  ): Promise<DescribeStackProvisioningParametersOutput>;
  public describeStackProvisioningParameters(
    args: DescribeStackProvisioningParametersInput,
    cb: (err: any, data?: DescribeStackProvisioningParametersOutput) => void
  ): void;
  public describeStackProvisioningParameters(
    args: DescribeStackProvisioningParametersInput,
    cb?: (err: any, data?: DescribeStackProvisioningParametersOutput) => void
  ): Promise<DescribeStackProvisioningParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStackProvisioningParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as <code>running_setup</code> or <code>online</code>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStackSummary(
    args: DescribeStackSummaryInput
  ): Promise<DescribeStackSummaryOutput>;
  public describeStackSummary(
    args: DescribeStackSummaryInput,
    cb: (err: any, data?: DescribeStackSummaryOutput) => void
  ): void;
  public describeStackSummary(
    args: DescribeStackSummaryInput,
    cb?: (err: any, data?: DescribeStackSummaryOutput) => void
  ): Promise<DescribeStackSummaryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStackSummaryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests a description of one or more stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStacks(
    args: DescribeStacksInput
  ): Promise<DescribeStacksOutput>;
  public describeStacks(
    args: DescribeStacksInput,
    cb: (err: any, data?: DescribeStacksOutput) => void
  ): void;
  public describeStacks(
    args: DescribeStacksInput,
    cb?: (err: any, data?: DescribeStacksOutput) => void
  ): Promise<DescribeStacksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStacksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes time-based auto scaling configurations for specified instances.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTimeBasedAutoScaling(
    args: DescribeTimeBasedAutoScalingInput
  ): Promise<DescribeTimeBasedAutoScalingOutput>;
  public describeTimeBasedAutoScaling(
    args: DescribeTimeBasedAutoScalingInput,
    cb: (err: any, data?: DescribeTimeBasedAutoScalingOutput) => void
  ): void;
  public describeTimeBasedAutoScaling(
    args: DescribeTimeBasedAutoScalingInput,
    cb?: (err: any, data?: DescribeTimeBasedAutoScalingOutput) => void
  ): Promise<DescribeTimeBasedAutoScalingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTimeBasedAutoScalingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describe specified users.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUserProfiles(
    args: DescribeUserProfilesInput
  ): Promise<DescribeUserProfilesOutput>;
  public describeUserProfiles(
    args: DescribeUserProfilesInput,
    cb: (err: any, data?: DescribeUserProfilesOutput) => void
  ): void;
  public describeUserProfiles(
    args: DescribeUserProfilesInput,
    cb?: (err: any, data?: DescribeUserProfilesOutput) => void
  ): Promise<DescribeUserProfilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUserProfilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an instance's Amazon EBS volumes.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVolumes(
    args: DescribeVolumesInput
  ): Promise<DescribeVolumesOutput>;
  public describeVolumes(
    args: DescribeVolumesInput,
    cb: (err: any, data?: DescribeVolumesOutput) => void
  ): void;
  public describeVolumes(
    args: DescribeVolumesInput,
    cb?: (err: any, data?: DescribeVolumesOutput) => void
  ): Promise<DescribeVolumesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVolumesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches a specified Elastic Load Balancing instance from its layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachElasticLoadBalancer(
    args: DetachElasticLoadBalancerInput
  ): Promise<DetachElasticLoadBalancerOutput>;
  public detachElasticLoadBalancer(
    args: DetachElasticLoadBalancerInput,
    cb: (err: any, data?: DetachElasticLoadBalancerOutput) => void
  ): void;
  public detachElasticLoadBalancer(
    args: DetachElasticLoadBalancerInput,
    cb?: (err: any, data?: DetachElasticLoadBalancerOutput) => void
  ): Promise<DetachElasticLoadBalancerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachElasticLoadBalancerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates an Elastic IP address from its instance. The address remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateElasticIp(
    args: DisassociateElasticIpInput
  ): Promise<DisassociateElasticIpOutput>;
  public disassociateElasticIp(
    args: DisassociateElasticIpInput,
    cb: (err: any, data?: DisassociateElasticIpOutput) => void
  ): void;
  public disassociateElasticIp(
    args: DisassociateElasticIpInput,
    cb?: (err: any, data?: DisassociateElasticIpOutput) => void
  ): Promise<DisassociateElasticIpOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateElasticIpCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a generated host name for the specified layer, based on the current host name theme.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getHostnameSuggestion(
    args: GetHostnameSuggestionInput
  ): Promise<GetHostnameSuggestionOutput>;
  public getHostnameSuggestion(
    args: GetHostnameSuggestionInput,
    cb: (err: any, data?: GetHostnameSuggestionOutput) => void
  ): void;
  public getHostnameSuggestion(
    args: GetHostnameSuggestionInput,
    cb?: (err: any, data?: GetHostnameSuggestionOutput) => void
  ): Promise<GetHostnameSuggestionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetHostnameSuggestionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <note> <p>This action can be used only with Windows stacks.</p> </note> <p>Grants RDP access to a Windows instance for a specified time period.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public grantAccess(args: GrantAccessInput): Promise<GrantAccessOutput>;
  public grantAccess(
    args: GrantAccessInput,
    cb: (err: any, data?: GrantAccessOutput) => void
  ): void;
  public grantAccess(
    args: GrantAccessInput,
    cb?: (err: any, data?: GrantAccessOutput) => void
  ): Promise<GrantAccessOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GrantAccessCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of tags that are applied to the specified stack or layer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTags(args: ListTagsInput): Promise<ListTagsOutput>;
  public listTags(
    args: ListTagsInput,
    cb: (err: any, data?: ListTagsOutput) => void
  ): void;
  public listTags(
    args: ListTagsInput,
    cb?: (err: any, data?: ListTagsOutput) => void
  ): Promise<ListTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Reboots a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rebootInstance(
    args: RebootInstanceInput
  ): Promise<RebootInstanceOutput>;
  public rebootInstance(
    args: RebootInstanceInput,
    cb: (err: any, data?: RebootInstanceOutput) => void
  ): void;
  public rebootInstance(
    args: RebootInstanceInput,
    cb?: (err: any, data?: RebootInstanceOutput) => void
  ): Promise<RebootInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RebootInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers a specified Amazon ECS cluster with a stack. You can register only one cluster with a stack. A cluster can be registered with only one stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html"> Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerEcsCluster(
    args: RegisterEcsClusterInput
  ): Promise<RegisterEcsClusterOutput>;
  public registerEcsCluster(
    args: RegisterEcsClusterInput,
    cb: (err: any, data?: RegisterEcsClusterOutput) => void
  ): void;
  public registerEcsCluster(
    args: RegisterEcsClusterInput,
    cb?: (err: any, data?: RegisterEcsClusterOutput) => void
  ): Promise<RegisterEcsClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterEcsClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers an Elastic IP address with a specified stack. An address can be registered with only one stack at a time. If the address is already registered, you must first deregister it by calling <a>DeregisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerElasticIp(
    args: RegisterElasticIpInput
  ): Promise<RegisterElasticIpOutput>;
  public registerElasticIp(
    args: RegisterElasticIpInput,
    cb: (err: any, data?: RegisterElasticIpOutput) => void
  ): void;
  public registerElasticIp(
    args: RegisterElasticIpInput,
    cb?: (err: any, data?: RegisterElasticIpOutput) => void
  ): Promise<RegisterElasticIpOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterElasticIpCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p> <note> <p>We do not recommend using this action to register instances. The complete registration operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering the instance with the stack. <code>RegisterInstance</code> handles only the second step. You should instead use the AWS CLI <code>register</code> command, which performs the entire registration operation. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html"> Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p> </note> <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API. For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html"> Preparing the Instance</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerInstance(
    args: RegisterInstanceInput
  ): Promise<RegisterInstanceOutput>;
  public registerInstance(
    args: RegisterInstanceInput,
    cb: (err: any, data?: RegisterInstanceOutput) => void
  ): void;
  public registerInstance(
    args: RegisterInstanceInput,
    cb?: (err: any, data?: RegisterInstanceOutput) => void
  ): Promise<RegisterInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers an Amazon RDS instance with a stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerRdsDbInstance(
    args: RegisterRdsDbInstanceInput
  ): Promise<RegisterRdsDbInstanceOutput>;
  public registerRdsDbInstance(
    args: RegisterRdsDbInstanceInput,
    cb: (err: any, data?: RegisterRdsDbInstanceOutput) => void
  ): void;
  public registerRdsDbInstance(
    args: RegisterRdsDbInstanceInput,
    cb?: (err: any, data?: RegisterRdsDbInstanceOutput) => void
  ): Promise<RegisterRdsDbInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterRdsDbInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one stack at a time. If the volume is already registered, you must first deregister it by calling <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerVolume(
    args: RegisterVolumeInput
  ): Promise<RegisterVolumeOutput>;
  public registerVolume(
    args: RegisterVolumeInput,
    cb: (err: any, data?: RegisterVolumeOutput) => void
  ): void;
  public registerVolume(
    args: RegisterVolumeInput,
    cb?: (err: any, data?: RegisterVolumeOutput) => void
  ): Promise<RegisterVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Specify the load-based auto scaling configuration for a specified layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <note> <p>To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setLoadBasedAutoScaling(
    args: SetLoadBasedAutoScalingInput
  ): Promise<SetLoadBasedAutoScalingOutput>;
  public setLoadBasedAutoScaling(
    args: SetLoadBasedAutoScalingInput,
    cb: (err: any, data?: SetLoadBasedAutoScalingOutput) => void
  ): void;
  public setLoadBasedAutoScaling(
    args: SetLoadBasedAutoScalingInput,
    cb?: (err: any, data?: SetLoadBasedAutoScalingOutput) => void
  ): Promise<SetLoadBasedAutoScalingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetLoadBasedAutoScalingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Specifies a user's permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and Permissions</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setPermission(args: SetPermissionInput): Promise<SetPermissionOutput>;
  public setPermission(
    args: SetPermissionInput,
    cb: (err: any, data?: SetPermissionOutput) => void
  ): void;
  public setPermission(
    args: SetPermissionInput,
    cb?: (err: any, data?: SetPermissionOutput) => void
  ): Promise<SetPermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetPermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Specify the time-based auto scaling configuration for a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setTimeBasedAutoScaling(
    args: SetTimeBasedAutoScalingInput
  ): Promise<SetTimeBasedAutoScalingOutput>;
  public setTimeBasedAutoScaling(
    args: SetTimeBasedAutoScalingInput,
    cb: (err: any, data?: SetTimeBasedAutoScalingOutput) => void
  ): void;
  public setTimeBasedAutoScaling(
    args: SetTimeBasedAutoScalingInput,
    cb?: (err: any, data?: SetTimeBasedAutoScalingOutput) => void
  ): Promise<SetTimeBasedAutoScalingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetTimeBasedAutoScalingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startInstance(args: StartInstanceInput): Promise<StartInstanceOutput>;
  public startInstance(
    args: StartInstanceInput,
    cb: (err: any, data?: StartInstanceOutput) => void
  ): void;
  public startInstance(
    args: StartInstanceInput,
    cb?: (err: any, data?: StartInstanceOutput) => void
  ): Promise<StartInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a stack's instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startStack(args: StartStackInput): Promise<StartStackOutput>;
  public startStack(
    args: StartStackInput,
    cb: (err: any, data?: StartStackOutput) => void
  ): void;
  public startStack(
    args: StartStackInput,
    cb?: (err: any, data?: StartStackOutput) => void
  ): Promise<StartStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a specified instance. When you stop a standard instance, the data disappears and must be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without losing data. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopInstance(args: StopInstanceInput): Promise<StopInstanceOutput>;
  public stopInstance(
    args: StopInstanceInput,
    cb: (err: any, data?: StopInstanceOutput) => void
  ): void;
  public stopInstance(
    args: StopInstanceInput,
    cb?: (err: any, data?: StopInstanceOutput) => void
  ): Promise<StopInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopStack(args: StopStackInput): Promise<StopStackOutput>;
  public stopStack(
    args: StopStackInput,
    cb: (err: any, data?: StopStackOutput) => void
  ): void;
  public stopStack(
    args: StopStackInput,
    cb?: (err: any, data?: StopStackOutput) => void
  ): Promise<StopStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/tagging.html">Tags</a> in the AWS OpsWorks User Guide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Unassigns a registered instance from all layers that are using the instance. The instance remains in the stack as an unassigned instance, and can be assigned to another layer as needed. You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public unassignInstance(
    args: UnassignInstanceInput
  ): Promise<UnassignInstanceOutput>;
  public unassignInstance(
    args: UnassignInstanceInput,
    cb: (err: any, data?: UnassignInstanceOutput) => void
  ): void;
  public unassignInstance(
    args: UnassignInstanceInput,
    cb?: (err: any, data?: UnassignInstanceOutput) => void
  ): Promise<UnassignInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UnassignInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public unassignVolume(
    args: UnassignVolumeInput
  ): Promise<UnassignVolumeOutput>;
  public unassignVolume(
    args: UnassignVolumeInput,
    cb: (err: any, data?: UnassignVolumeOutput) => void
  ): void;
  public unassignVolume(
    args: UnassignVolumeInput,
    cb?: (err: any, data?: UnassignVolumeOutput) => void
  ): Promise<UnassignVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UnassignVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes tags from a specified stack or layer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApp(args: UpdateAppInput): Promise<UpdateAppOutput>;
  public updateApp(
    args: UpdateAppInput,
    cb: (err: any, data?: UpdateAppOutput) => void
  ): void;
  public updateApp(
    args: UpdateAppInput,
    cb?: (err: any, data?: UpdateAppOutput) => void
  ): Promise<UpdateAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a registered Elastic IP address's name. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateElasticIp(
    args: UpdateElasticIpInput
  ): Promise<UpdateElasticIpOutput>;
  public updateElasticIp(
    args: UpdateElasticIpInput,
    cb: (err: any, data?: UpdateElasticIpOutput) => void
  ): void;
  public updateElasticIp(
    args: UpdateElasticIpInput,
    cb?: (err: any, data?: UpdateElasticIpOutput) => void
  ): Promise<UpdateElasticIpOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateElasticIpCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a specified instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateInstance(
    args: UpdateInstanceInput
  ): Promise<UpdateInstanceOutput>;
  public updateInstance(
    args: UpdateInstanceInput,
    cb: (err: any, data?: UpdateInstanceOutput) => void
  ): void;
  public updateInstance(
    args: UpdateInstanceInput,
    cb?: (err: any, data?: UpdateInstanceOutput) => void
  ): Promise<UpdateInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a specified layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateLayer(args: UpdateLayerInput): Promise<UpdateLayerOutput>;
  public updateLayer(
    args: UpdateLayerInput,
    cb: (err: any, data?: UpdateLayerOutput) => void
  ): void;
  public updateLayer(
    args: UpdateLayerInput,
    cb?: (err: any, data?: UpdateLayerOutput) => void
  ): Promise<UpdateLayerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateLayerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a user's SSH public key.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateMyUserProfile(
    args: UpdateMyUserProfileInput
  ): Promise<UpdateMyUserProfileOutput>;
  public updateMyUserProfile(
    args: UpdateMyUserProfileInput,
    cb: (err: any, data?: UpdateMyUserProfileOutput) => void
  ): void;
  public updateMyUserProfile(
    args: UpdateMyUserProfileInput,
    cb?: (err: any, data?: UpdateMyUserProfileOutput) => void
  ): Promise<UpdateMyUserProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateMyUserProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRdsDbInstance(
    args: UpdateRdsDbInstanceInput
  ): Promise<UpdateRdsDbInstanceOutput>;
  public updateRdsDbInstance(
    args: UpdateRdsDbInstanceInput,
    cb: (err: any, data?: UpdateRdsDbInstanceOutput) => void
  ): void;
  public updateRdsDbInstance(
    args: UpdateRdsDbInstanceInput,
    cb?: (err: any, data?: UpdateRdsDbInstanceOutput) => void
  ): Promise<UpdateRdsDbInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRdsDbInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateStack(args: UpdateStackInput): Promise<UpdateStackOutput>;
  public updateStack(
    args: UpdateStackInput,
    cb: (err: any, data?: UpdateStackOutput) => void
  ): void;
  public updateStack(
    args: UpdateStackInput,
    cb?: (err: any, data?: UpdateStackOutput) => void
  ): Promise<UpdateStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a specified user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUserProfile(
    args: UpdateUserProfileInput
  ): Promise<UpdateUserProfileOutput>;
  public updateUserProfile(
    args: UpdateUserProfileInput,
    cb: (err: any, data?: UpdateUserProfileOutput) => void
  ): void;
  public updateUserProfile(
    args: UpdateUserProfileInput,
    cb?: (err: any, data?: UpdateUserProfileOutput) => void
  ): Promise<UpdateUserProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an Amazon EBS volume's name or mount point. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>Indicates that a request was not valid.</p>
   *   - {ResourceNotFoundException} <p>Indicates that a resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateVolume(args: UpdateVolumeInput): Promise<UpdateVolumeOutput>;
  public updateVolume(
    args: UpdateVolumeInput,
    cb: (err: any, data?: UpdateVolumeOutput) => void
  ): void;
  public updateVolume(
    args: UpdateVolumeInput,
    cb?: (err: any, data?: UpdateVolumeOutput) => void
  ): Promise<UpdateVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
