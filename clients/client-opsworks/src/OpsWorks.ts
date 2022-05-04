// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssignInstanceCommand,
  AssignInstanceCommandInput,
  AssignInstanceCommandOutput,
} from "./commands/AssignInstanceCommand";
import {
  AssignVolumeCommand,
  AssignVolumeCommandInput,
  AssignVolumeCommandOutput,
} from "./commands/AssignVolumeCommand";
import {
  AssociateElasticIpCommand,
  AssociateElasticIpCommandInput,
  AssociateElasticIpCommandOutput,
} from "./commands/AssociateElasticIpCommand";
import {
  AttachElasticLoadBalancerCommand,
  AttachElasticLoadBalancerCommandInput,
  AttachElasticLoadBalancerCommandOutput,
} from "./commands/AttachElasticLoadBalancerCommand";
import { CloneStackCommand, CloneStackCommandInput, CloneStackCommandOutput } from "./commands/CloneStackCommand";
import { CreateAppCommand, CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  CreateInstanceCommand,
  CreateInstanceCommandInput,
  CreateInstanceCommandOutput,
} from "./commands/CreateInstanceCommand";
import { CreateLayerCommand, CreateLayerCommandInput, CreateLayerCommandOutput } from "./commands/CreateLayerCommand";
import { CreateStackCommand, CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import {
  CreateUserProfileCommand,
  CreateUserProfileCommandInput,
  CreateUserProfileCommandOutput,
} from "./commands/CreateUserProfileCommand";
import { DeleteAppCommand, DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import {
  DeleteInstanceCommand,
  DeleteInstanceCommandInput,
  DeleteInstanceCommandOutput,
} from "./commands/DeleteInstanceCommand";
import { DeleteLayerCommand, DeleteLayerCommandInput, DeleteLayerCommandOutput } from "./commands/DeleteLayerCommand";
import { DeleteStackCommand, DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand";
import {
  DeleteUserProfileCommand,
  DeleteUserProfileCommandInput,
  DeleteUserProfileCommandOutput,
} from "./commands/DeleteUserProfileCommand";
import {
  DeregisterEcsClusterCommand,
  DeregisterEcsClusterCommandInput,
  DeregisterEcsClusterCommandOutput,
} from "./commands/DeregisterEcsClusterCommand";
import {
  DeregisterElasticIpCommand,
  DeregisterElasticIpCommandInput,
  DeregisterElasticIpCommandOutput,
} from "./commands/DeregisterElasticIpCommand";
import {
  DeregisterInstanceCommand,
  DeregisterInstanceCommandInput,
  DeregisterInstanceCommandOutput,
} from "./commands/DeregisterInstanceCommand";
import {
  DeregisterRdsDbInstanceCommand,
  DeregisterRdsDbInstanceCommandInput,
  DeregisterRdsDbInstanceCommandOutput,
} from "./commands/DeregisterRdsDbInstanceCommand";
import {
  DeregisterVolumeCommand,
  DeregisterVolumeCommandInput,
  DeregisterVolumeCommandOutput,
} from "./commands/DeregisterVolumeCommand";
import {
  DescribeAgentVersionsCommand,
  DescribeAgentVersionsCommandInput,
  DescribeAgentVersionsCommandOutput,
} from "./commands/DescribeAgentVersionsCommand";
import {
  DescribeAppsCommand,
  DescribeAppsCommandInput,
  DescribeAppsCommandOutput,
} from "./commands/DescribeAppsCommand";
import {
  DescribeCommandsCommand,
  DescribeCommandsCommandInput,
  DescribeCommandsCommandOutput,
} from "./commands/DescribeCommandsCommand";
import {
  DescribeDeploymentsCommand,
  DescribeDeploymentsCommandInput,
  DescribeDeploymentsCommandOutput,
} from "./commands/DescribeDeploymentsCommand";
import {
  DescribeEcsClustersCommand,
  DescribeEcsClustersCommandInput,
  DescribeEcsClustersCommandOutput,
} from "./commands/DescribeEcsClustersCommand";
import {
  DescribeElasticIpsCommand,
  DescribeElasticIpsCommandInput,
  DescribeElasticIpsCommandOutput,
} from "./commands/DescribeElasticIpsCommand";
import {
  DescribeElasticLoadBalancersCommand,
  DescribeElasticLoadBalancersCommandInput,
  DescribeElasticLoadBalancersCommandOutput,
} from "./commands/DescribeElasticLoadBalancersCommand";
import {
  DescribeInstancesCommand,
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
} from "./commands/DescribeInstancesCommand";
import {
  DescribeLayersCommand,
  DescribeLayersCommandInput,
  DescribeLayersCommandOutput,
} from "./commands/DescribeLayersCommand";
import {
  DescribeLoadBasedAutoScalingCommand,
  DescribeLoadBasedAutoScalingCommandInput,
  DescribeLoadBasedAutoScalingCommandOutput,
} from "./commands/DescribeLoadBasedAutoScalingCommand";
import {
  DescribeMyUserProfileCommand,
  DescribeMyUserProfileCommandInput,
  DescribeMyUserProfileCommandOutput,
} from "./commands/DescribeMyUserProfileCommand";
import {
  DescribeOperatingSystemsCommand,
  DescribeOperatingSystemsCommandInput,
  DescribeOperatingSystemsCommandOutput,
} from "./commands/DescribeOperatingSystemsCommand";
import {
  DescribePermissionsCommand,
  DescribePermissionsCommandInput,
  DescribePermissionsCommandOutput,
} from "./commands/DescribePermissionsCommand";
import {
  DescribeRaidArraysCommand,
  DescribeRaidArraysCommandInput,
  DescribeRaidArraysCommandOutput,
} from "./commands/DescribeRaidArraysCommand";
import {
  DescribeRdsDbInstancesCommand,
  DescribeRdsDbInstancesCommandInput,
  DescribeRdsDbInstancesCommandOutput,
} from "./commands/DescribeRdsDbInstancesCommand";
import {
  DescribeServiceErrorsCommand,
  DescribeServiceErrorsCommandInput,
  DescribeServiceErrorsCommandOutput,
} from "./commands/DescribeServiceErrorsCommand";
import {
  DescribeStackProvisioningParametersCommand,
  DescribeStackProvisioningParametersCommandInput,
  DescribeStackProvisioningParametersCommandOutput,
} from "./commands/DescribeStackProvisioningParametersCommand";
import {
  DescribeStacksCommand,
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput,
} from "./commands/DescribeStacksCommand";
import {
  DescribeStackSummaryCommand,
  DescribeStackSummaryCommandInput,
  DescribeStackSummaryCommandOutput,
} from "./commands/DescribeStackSummaryCommand";
import {
  DescribeTimeBasedAutoScalingCommand,
  DescribeTimeBasedAutoScalingCommandInput,
  DescribeTimeBasedAutoScalingCommandOutput,
} from "./commands/DescribeTimeBasedAutoScalingCommand";
import {
  DescribeUserProfilesCommand,
  DescribeUserProfilesCommandInput,
  DescribeUserProfilesCommandOutput,
} from "./commands/DescribeUserProfilesCommand";
import {
  DescribeVolumesCommand,
  DescribeVolumesCommandInput,
  DescribeVolumesCommandOutput,
} from "./commands/DescribeVolumesCommand";
import {
  DetachElasticLoadBalancerCommand,
  DetachElasticLoadBalancerCommandInput,
  DetachElasticLoadBalancerCommandOutput,
} from "./commands/DetachElasticLoadBalancerCommand";
import {
  DisassociateElasticIpCommand,
  DisassociateElasticIpCommandInput,
  DisassociateElasticIpCommandOutput,
} from "./commands/DisassociateElasticIpCommand";
import {
  GetHostnameSuggestionCommand,
  GetHostnameSuggestionCommandInput,
  GetHostnameSuggestionCommandOutput,
} from "./commands/GetHostnameSuggestionCommand";
import { GrantAccessCommand, GrantAccessCommandInput, GrantAccessCommandOutput } from "./commands/GrantAccessCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  RebootInstanceCommand,
  RebootInstanceCommandInput,
  RebootInstanceCommandOutput,
} from "./commands/RebootInstanceCommand";
import {
  RegisterEcsClusterCommand,
  RegisterEcsClusterCommandInput,
  RegisterEcsClusterCommandOutput,
} from "./commands/RegisterEcsClusterCommand";
import {
  RegisterElasticIpCommand,
  RegisterElasticIpCommandInput,
  RegisterElasticIpCommandOutput,
} from "./commands/RegisterElasticIpCommand";
import {
  RegisterInstanceCommand,
  RegisterInstanceCommandInput,
  RegisterInstanceCommandOutput,
} from "./commands/RegisterInstanceCommand";
import {
  RegisterRdsDbInstanceCommand,
  RegisterRdsDbInstanceCommandInput,
  RegisterRdsDbInstanceCommandOutput,
} from "./commands/RegisterRdsDbInstanceCommand";
import {
  RegisterVolumeCommand,
  RegisterVolumeCommandInput,
  RegisterVolumeCommandOutput,
} from "./commands/RegisterVolumeCommand";
import {
  SetLoadBasedAutoScalingCommand,
  SetLoadBasedAutoScalingCommandInput,
  SetLoadBasedAutoScalingCommandOutput,
} from "./commands/SetLoadBasedAutoScalingCommand";
import {
  SetPermissionCommand,
  SetPermissionCommandInput,
  SetPermissionCommandOutput,
} from "./commands/SetPermissionCommand";
import {
  SetTimeBasedAutoScalingCommand,
  SetTimeBasedAutoScalingCommandInput,
  SetTimeBasedAutoScalingCommandOutput,
} from "./commands/SetTimeBasedAutoScalingCommand";
import {
  StartInstanceCommand,
  StartInstanceCommandInput,
  StartInstanceCommandOutput,
} from "./commands/StartInstanceCommand";
import { StartStackCommand, StartStackCommandInput, StartStackCommandOutput } from "./commands/StartStackCommand";
import {
  StopInstanceCommand,
  StopInstanceCommandInput,
  StopInstanceCommandOutput,
} from "./commands/StopInstanceCommand";
import { StopStackCommand, StopStackCommandInput, StopStackCommandOutput } from "./commands/StopStackCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UnassignInstanceCommand,
  UnassignInstanceCommandInput,
  UnassignInstanceCommandOutput,
} from "./commands/UnassignInstanceCommand";
import {
  UnassignVolumeCommand,
  UnassignVolumeCommandInput,
  UnassignVolumeCommandOutput,
} from "./commands/UnassignVolumeCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAppCommand, UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand";
import {
  UpdateElasticIpCommand,
  UpdateElasticIpCommandInput,
  UpdateElasticIpCommandOutput,
} from "./commands/UpdateElasticIpCommand";
import {
  UpdateInstanceCommand,
  UpdateInstanceCommandInput,
  UpdateInstanceCommandOutput,
} from "./commands/UpdateInstanceCommand";
import { UpdateLayerCommand, UpdateLayerCommandInput, UpdateLayerCommandOutput } from "./commands/UpdateLayerCommand";
import {
  UpdateMyUserProfileCommand,
  UpdateMyUserProfileCommandInput,
  UpdateMyUserProfileCommandOutput,
} from "./commands/UpdateMyUserProfileCommand";
import {
  UpdateRdsDbInstanceCommand,
  UpdateRdsDbInstanceCommandInput,
  UpdateRdsDbInstanceCommandOutput,
} from "./commands/UpdateRdsDbInstanceCommand";
import { UpdateStackCommand, UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";
import {
  UpdateUserProfileCommand,
  UpdateUserProfileCommandInput,
  UpdateUserProfileCommandOutput,
} from "./commands/UpdateUserProfileCommand";
import {
  UpdateVolumeCommand,
  UpdateVolumeCommandInput,
  UpdateVolumeCommandOutput,
} from "./commands/UpdateVolumeCommand";
import { OpsWorksClient } from "./OpsWorksClient";

/**
 * <fullname>AWS OpsWorks</fullname>
 *          <p>Welcome to the <i>AWS OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax, and
 *       usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error
 *       codes. </p>
 *          <p>AWS OpsWorks Stacks is an application management service that provides an integrated experience for
 *       overseeing the complete application lifecycle. For information about this product, go to the
 *         <a href="http://aws.amazon.com/opsworks/">AWS OpsWorks</a> details page. </p>
 *
 *          <p>
 *             <b>SDKs and CLI</b>
 *          </p>
 *          <p>The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">AWS SDK for Java</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm">AWS SDK for
 *           .NET</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html">AWS
 *           SDK for PHP 2</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://docs.aws.amazon.com/sdkforruby/api/">AWS SDK for Ruby</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/documentation/sdkforjavascript/">AWS SDK for Node.js</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">AWS SDK for
 *           Python(Boto)</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks
 *           can only be accessed or managed within the endpoint in which they are created.</p>
 *          <ul>
 *             <li>
 *                <p>opsworks.us-east-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-east-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-west-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-west-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ca-central-1.amazonaws.com (API only; not available in the AWS console)</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-3.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-central-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-northeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-northeast-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-south-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-southeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-southeast-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.sa-east-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Chef Versions</b>
 *          </p>
 *          <p>When you call <a>CreateStack</a>, <a>CloneStack</a>, or <a>UpdateStack</a> we recommend you
 *       use the <code>ConfigurationManager</code> parameter to specify the Chef version.
 *       The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information,
 *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html">Chef Versions</a>.</p>
 *          <note>
 *             <p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.</p>
 *          </note>
 */
export class OpsWorks extends OpsWorksClient {
  /**
   * <p>Assign a registered instance to a layer.</p>
   *          <ul>
   *             <li>
   *                <p>You can assign registered on-premises instances to any layer type.</p>
   *             </li>
   *             <li>
   *                <p>You can assign registered Amazon EC2 instances only to custom layers.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management
   *       (IAM) user must have a Manage permissions
   *       level for the stack or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public assignInstance(
    args: AssignInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssignInstanceCommandOutput>;
  public assignInstance(
    args: AssignInstanceCommandInput,
    cb: (err: any, data?: AssignInstanceCommandOutput) => void
  ): void;
  public assignInstance(
    args: AssignInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssignInstanceCommandOutput) => void
  ): void;
  public assignInstance(
    args: AssignInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssignInstanceCommandOutput) => void),
    cb?: (err: any, data?: AssignInstanceCommandOutput) => void
  ): Promise<AssignInstanceCommandOutput> | void {
    const command = new AssignInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must
   *       first be registered with the stack by calling <a>RegisterVolume</a>. After you register the
   *       volume, you must call <a>UpdateVolume</a> to specify a mount point before calling
   *         <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public assignVolume(
    args: AssignVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssignVolumeCommandOutput>;
  public assignVolume(args: AssignVolumeCommandInput, cb: (err: any, data?: AssignVolumeCommandOutput) => void): void;
  public assignVolume(
    args: AssignVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssignVolumeCommandOutput) => void
  ): void;
  public assignVolume(
    args: AssignVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssignVolumeCommandOutput) => void),
    cb?: (err: any, data?: AssignVolumeCommandOutput) => void
  ): Promise<AssignVolumeCommandOutput> | void {
    const command = new AssignVolumeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates one of the stack's registered Elastic IP addresses with a specified instance. The
   *       address must first be registered with the stack by calling <a>RegisterElasticIp</a>. For more
   *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource
   *         Management</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public associateElasticIp(
    args: AssociateElasticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateElasticIpCommandOutput>;
  public associateElasticIp(
    args: AssociateElasticIpCommandInput,
    cb: (err: any, data?: AssociateElasticIpCommandOutput) => void
  ): void;
  public associateElasticIp(
    args: AssociateElasticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateElasticIpCommandOutput) => void
  ): void;
  public associateElasticIp(
    args: AssociateElasticIpCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateElasticIpCommandOutput) => void),
    cb?: (err: any, data?: AssociateElasticIpCommandOutput) => void
  ): Promise<AssociateElasticIpCommandOutput> | void {
    const command = new AssociateElasticIpCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support
   *           Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks.
   *           For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html">Elastic Load
   *         Balancing</a>.</p>
   *          <note>
   *             <p>You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For
   *         more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html"> Elastic
   *           Load Balancing Developer Guide</a>.</p>
   *          </note>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public attachElasticLoadBalancer(
    args: AttachElasticLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachElasticLoadBalancerCommandOutput>;
  public attachElasticLoadBalancer(
    args: AttachElasticLoadBalancerCommandInput,
    cb: (err: any, data?: AttachElasticLoadBalancerCommandOutput) => void
  ): void;
  public attachElasticLoadBalancer(
    args: AttachElasticLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachElasticLoadBalancerCommandOutput) => void
  ): void;
  public attachElasticLoadBalancer(
    args: AttachElasticLoadBalancerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachElasticLoadBalancerCommandOutput) => void),
    cb?: (err: any, data?: AttachElasticLoadBalancerCommandOutput) => void
  ): Promise<AttachElasticLoadBalancerCommandOutput> | void {
    const command = new AttachElasticLoadBalancerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a
   *         Stack</a>. By default, all parameters are set to the values used by the parent stack.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
   *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public cloneStack(args: CloneStackCommandInput, options?: __HttpHandlerOptions): Promise<CloneStackCommandOutput>;
  public cloneStack(args: CloneStackCommandInput, cb: (err: any, data?: CloneStackCommandOutput) => void): void;
  public cloneStack(
    args: CloneStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CloneStackCommandOutput) => void
  ): void;
  public cloneStack(
    args: CloneStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CloneStackCommandOutput) => void),
    cb?: (err: any, data?: CloneStackCommandOutput) => void
  ): Promise<CloneStackCommandOutput> | void {
    const command = new CloneStackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an app for a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating
   *       Apps</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public createApp(args: CreateAppCommandInput, options?: __HttpHandlerOptions): Promise<CreateAppCommandOutput>;
  public createApp(args: CreateAppCommandInput, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
  public createApp(
    args: CreateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;
  public createApp(
    args: CreateAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAppCommandOutput) => void),
    cb?: (err: any, data?: CreateAppCommandOutput) => void
  ): Promise<CreateAppCommandOutput> | void {
    const command = new CreateAppCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Runs deployment or stack commands. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html">Deploying
   *         Apps</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html">Run Stack Commands</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage
   *       permissions level for the stack, or an attached policy that explicitly grants permissions. For
   *       more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeploymentCommandOutput) => void),
    cb?: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): Promise<CreateDeploymentCommandOutput> | void {
    const command = new CreateDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an
   *         Instance to a Layer</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public createInstance(
    args: CreateInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceCommandOutput>;
  public createInstance(
    args: CreateInstanceCommandInput,
    cb: (err: any, data?: CreateInstanceCommandOutput) => void
  ): void;
  public createInstance(
    args: CreateInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceCommandOutput) => void
  ): void;
  public createInstance(
    args: CreateInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateInstanceCommandOutput) => void),
    cb?: (err: any, data?: CreateInstanceCommandOutput) => void
  ): Promise<CreateInstanceCommandOutput> | void {
    const command = new CreateInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to
   *         Create a Layer</a>.</p>
   *          <note>
   *             <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack
   *         does not have an existing layer of that type. A stack can have at most one instance of each
   *         noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A
   *         stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as
   *         many times as you like for that layer type.</p>
   *          </note>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public createLayer(args: CreateLayerCommandInput, options?: __HttpHandlerOptions): Promise<CreateLayerCommandOutput>;
  public createLayer(args: CreateLayerCommandInput, cb: (err: any, data?: CreateLayerCommandOutput) => void): void;
  public createLayer(
    args: CreateLayerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLayerCommandOutput) => void
  ): void;
  public createLayer(
    args: CreateLayerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLayerCommandOutput) => void),
    cb?: (err: any, data?: CreateLayerCommandOutput) => void
  ): Promise<CreateLayerCommandOutput> | void {
    const command = new CreateLayerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New
   *         Stack</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
   *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public createStack(args: CreateStackCommandInput, options?: __HttpHandlerOptions): Promise<CreateStackCommandOutput>;
  public createStack(args: CreateStackCommandInput, cb: (err: any, data?: CreateStackCommandOutput) => void): void;
  public createStack(
    args: CreateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStackCommandOutput) => void
  ): void;
  public createStack(
    args: CreateStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStackCommandOutput) => void),
    cb?: (err: any, data?: CreateStackCommandOutput) => void
  ): Promise<CreateStackCommandOutput> | void {
    const command = new CreateStackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new user profile.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
   *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public createUserProfile(
    args: CreateUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserProfileCommandOutput>;
  public createUserProfile(
    args: CreateUserProfileCommandInput,
    cb: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): void;
  public createUserProfile(
    args: CreateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): void;
  public createUserProfile(
    args: CreateUserProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): Promise<CreateUserProfileCommandOutput> | void {
    const command = new CreateUserProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified app.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
  public deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
  public deleteApp(
    args: DeleteAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;
  public deleteApp(
    args: DeleteAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppCommandOutput) => void
  ): Promise<DeleteAppCommandOutput> | void {
    const command = new DeleteAppCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-delete.html">Deleting
   *         Instances</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public deleteInstance(
    args: DeleteInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceCommandOutput>;
  public deleteInstance(
    args: DeleteInstanceCommandInput,
    cb: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): void;
  public deleteInstance(
    args: DeleteInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): void;
  public deleteInstance(
    args: DeleteInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): Promise<DeleteInstanceCommandOutput> | void {
    const command = new DeleteInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified layer. You must first stop and then delete all associated instances or
   *       unassign registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html">How to
   *         Delete a Layer</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public deleteLayer(args: DeleteLayerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLayerCommandOutput>;
  public deleteLayer(args: DeleteLayerCommandInput, cb: (err: any, data?: DeleteLayerCommandOutput) => void): void;
  public deleteLayer(
    args: DeleteLayerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLayerCommandOutput) => void
  ): void;
  public deleteLayer(
    args: DeleteLayerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLayerCommandOutput) => void),
    cb?: (err: any, data?: DeleteLayerCommandOutput) => void
  ): Promise<DeleteLayerCommandOutput> | void {
    const command = new DeleteLayerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified stack. You must first delete all instances, layers, and apps or
   *       deregister registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-shutting.html">Shut Down a
   *         Stack</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public deleteStack(args: DeleteStackCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStackCommandOutput>;
  public deleteStack(args: DeleteStackCommandInput, cb: (err: any, data?: DeleteStackCommandOutput) => void): void;
  public deleteStack(
    args: DeleteStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStackCommandOutput) => void
  ): void;
  public deleteStack(
    args: DeleteStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStackCommandOutput) => void),
    cb?: (err: any, data?: DeleteStackCommandOutput) => void
  ): Promise<DeleteStackCommandOutput> | void {
    const command = new DeleteStackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a user profile.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
   *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserProfileCommandOutput>;
  public deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    cb: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): void;
  public deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): void;
  public deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): Promise<DeleteUserProfileCommandOutput> | void {
    const command = new DeleteUserProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deregisters a specified Amazon ECS cluster from a stack.
   *       For more information, see
   *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete">
   *         Resource Management</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see
   *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html</a>.</p>
   */
  public deregisterEcsCluster(
    args: DeregisterEcsClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterEcsClusterCommandOutput>;
  public deregisterEcsCluster(
    args: DeregisterEcsClusterCommandInput,
    cb: (err: any, data?: DeregisterEcsClusterCommandOutput) => void
  ): void;
  public deregisterEcsCluster(
    args: DeregisterEcsClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterEcsClusterCommandOutput) => void
  ): void;
  public deregisterEcsCluster(
    args: DeregisterEcsClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterEcsClusterCommandOutput) => void),
    cb?: (err: any, data?: DeregisterEcsClusterCommandOutput) => void
  ): Promise<DeregisterEcsClusterCommandOutput> | void {
    const command = new DeregisterEcsClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deregisters a specified Elastic IP address. The address can then be registered by another
   *       stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public deregisterElasticIp(
    args: DeregisterElasticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterElasticIpCommandOutput>;
  public deregisterElasticIp(
    args: DeregisterElasticIpCommandInput,
    cb: (err: any, data?: DeregisterElasticIpCommandOutput) => void
  ): void;
  public deregisterElasticIp(
    args: DeregisterElasticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterElasticIpCommandOutput) => void
  ): void;
  public deregisterElasticIp(
    args: DeregisterElasticIpCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterElasticIpCommandOutput) => void),
    cb?: (err: any, data?: DeregisterElasticIpCommandOutput) => void
  ): Promise<DeregisterElasticIpCommandOutput> | void {
    const command = new DeregisterElasticIpCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deregister a registered Amazon EC2 or on-premises instance. This action removes the
   *           instance from the stack and returns it to your control. This action cannot be used with
   *           instances that were created with AWS OpsWorks Stacks.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public deregisterInstance(
    args: DeregisterInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterInstanceCommandOutput>;
  public deregisterInstance(
    args: DeregisterInstanceCommandInput,
    cb: (err: any, data?: DeregisterInstanceCommandOutput) => void
  ): void;
  public deregisterInstance(
    args: DeregisterInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterInstanceCommandOutput) => void
  ): void;
  public deregisterInstance(
    args: DeregisterInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeregisterInstanceCommandOutput) => void
  ): Promise<DeregisterInstanceCommandOutput> | void {
    const command = new DeregisterInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deregisters an Amazon RDS instance.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public deregisterRdsDbInstance(
    args: DeregisterRdsDbInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterRdsDbInstanceCommandOutput>;
  public deregisterRdsDbInstance(
    args: DeregisterRdsDbInstanceCommandInput,
    cb: (err: any, data?: DeregisterRdsDbInstanceCommandOutput) => void
  ): void;
  public deregisterRdsDbInstance(
    args: DeregisterRdsDbInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterRdsDbInstanceCommandOutput) => void
  ): void;
  public deregisterRdsDbInstance(
    args: DeregisterRdsDbInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterRdsDbInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeregisterRdsDbInstanceCommandOutput) => void
  ): Promise<DeregisterRdsDbInstanceCommandOutput> | void {
    const command = new DeregisterRdsDbInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more
   *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource
   *         Management</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public deregisterVolume(
    args: DeregisterVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterVolumeCommandOutput>;
  public deregisterVolume(
    args: DeregisterVolumeCommandInput,
    cb: (err: any, data?: DeregisterVolumeCommandOutput) => void
  ): void;
  public deregisterVolume(
    args: DeregisterVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterVolumeCommandOutput) => void
  ): void;
  public deregisterVolume(
    args: DeregisterVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterVolumeCommandOutput) => void),
    cb?: (err: any, data?: DeregisterVolumeCommandOutput) => void
  ): Promise<DeregisterVolumeCommandOutput> | void {
    const command = new DeregisterVolumeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a
   *     configuration manager. <code>DescribeAgentVersions</code> returns a list of available
   *     agent versions for the specified stack or configuration manager.</p>
   */
  public describeAgentVersions(
    args: DescribeAgentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAgentVersionsCommandOutput>;
  public describeAgentVersions(
    args: DescribeAgentVersionsCommandInput,
    cb: (err: any, data?: DescribeAgentVersionsCommandOutput) => void
  ): void;
  public describeAgentVersions(
    args: DescribeAgentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAgentVersionsCommandOutput) => void
  ): void;
  public describeAgentVersions(
    args: DescribeAgentVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAgentVersionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAgentVersionsCommandOutput) => void
  ): Promise<DescribeAgentVersionsCommandOutput> | void {
    const command = new DescribeAgentVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests a description of a specified set of apps.</p>
   *          <note>
   *             <p>This call accepts only one resource-identifying parameter.</p>
   *          </note>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeApps(
    args: DescribeAppsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppsCommandOutput>;
  public describeApps(args: DescribeAppsCommandInput, cb: (err: any, data?: DescribeAppsCommandOutput) => void): void;
  public describeApps(
    args: DescribeAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppsCommandOutput) => void
  ): void;
  public describeApps(
    args: DescribeAppsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAppsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppsCommandOutput) => void
  ): Promise<DescribeAppsCommandOutput> | void {
    const command = new DescribeAppsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the results of specified commands.</p>
   *          <note>
   *             <p>This call accepts only one resource-identifying parameter.</p>
   *          </note>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeCommands(
    args: DescribeCommandsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCommandsCommandOutput>;
  public describeCommands(
    args: DescribeCommandsCommandInput,
    cb: (err: any, data?: DescribeCommandsCommandOutput) => void
  ): void;
  public describeCommands(
    args: DescribeCommandsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCommandsCommandOutput) => void
  ): void;
  public describeCommands(
    args: DescribeCommandsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCommandsCommandOutput) => void),
    cb?: (err: any, data?: DescribeCommandsCommandOutput) => void
  ): Promise<DescribeCommandsCommandOutput> | void {
    const command = new DescribeCommandsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests a description of a specified set of deployments.</p>
   *          <note>
   *             <p>This call accepts only one resource-identifying parameter.</p>
   *          </note>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeDeployments(
    args: DescribeDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeploymentsCommandOutput>;
  public describeDeployments(
    args: DescribeDeploymentsCommandInput,
    cb: (err: any, data?: DescribeDeploymentsCommandOutput) => void
  ): void;
  public describeDeployments(
    args: DescribeDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeploymentsCommandOutput) => void
  ): void;
  public describeDeployments(
    args: DescribeDeploymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDeploymentsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDeploymentsCommandOutput) => void
  ): Promise<DescribeDeploymentsCommandOutput> | void {
    const command = new DescribeDeploymentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID,
   *     you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the
   *     response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result
   *     set has a maximum of one element.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack or an attached policy that explicitly grants
   *       permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   *          <p>This call accepts only one resource-identifying parameter.</p>
   */
  public describeEcsClusters(
    args: DescribeEcsClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEcsClustersCommandOutput>;
  public describeEcsClusters(
    args: DescribeEcsClustersCommandInput,
    cb: (err: any, data?: DescribeEcsClustersCommandOutput) => void
  ): void;
  public describeEcsClusters(
    args: DescribeEcsClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEcsClustersCommandOutput) => void
  ): void;
  public describeEcsClusters(
    args: DescribeEcsClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEcsClustersCommandOutput) => void),
    cb?: (err: any, data?: DescribeEcsClustersCommandOutput) => void
  ): Promise<DescribeEcsClustersCommandOutput> | void {
    const command = new DescribeEcsClustersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP addresses</a>.</p>
   *          <note>
   *             <p>This call accepts only one resource-identifying parameter.</p>
   *          </note>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeElasticIps(
    args: DescribeElasticIpsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeElasticIpsCommandOutput>;
  public describeElasticIps(
    args: DescribeElasticIpsCommandInput,
    cb: (err: any, data?: DescribeElasticIpsCommandOutput) => void
  ): void;
  public describeElasticIps(
    args: DescribeElasticIpsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeElasticIpsCommandOutput) => void
  ): void;
  public describeElasticIps(
    args: DescribeElasticIpsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeElasticIpsCommandOutput) => void),
    cb?: (err: any, data?: DescribeElasticIpsCommandOutput) => void
  ): Promise<DescribeElasticIpsCommandOutput> | void {
    const command = new DescribeElasticIpsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a stack's Elastic Load Balancing instances.</p>
   *          <note>
   *             <p>This call accepts only one resource-identifying parameter.</p>
   *          </note>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeElasticLoadBalancers(
    args: DescribeElasticLoadBalancersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeElasticLoadBalancersCommandOutput>;
  public describeElasticLoadBalancers(
    args: DescribeElasticLoadBalancersCommandInput,
    cb: (err: any, data?: DescribeElasticLoadBalancersCommandOutput) => void
  ): void;
  public describeElasticLoadBalancers(
    args: DescribeElasticLoadBalancersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeElasticLoadBalancersCommandOutput) => void
  ): void;
  public describeElasticLoadBalancers(
    args: DescribeElasticLoadBalancersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeElasticLoadBalancersCommandOutput) => void),
    cb?: (err: any, data?: DescribeElasticLoadBalancersCommandOutput) => void
  ): Promise<DescribeElasticLoadBalancersCommandOutput> | void {
    const command = new DescribeElasticLoadBalancersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests a description of a set of instances.</p>
   *          <note>
   *             <p>This call accepts only one resource-identifying parameter.</p>
   *          </note>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeInstances(
    args: DescribeInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstancesCommandOutput>;
  public describeInstances(
    args: DescribeInstancesCommandInput,
    cb: (err: any, data?: DescribeInstancesCommandOutput) => void
  ): void;
  public describeInstances(
    args: DescribeInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstancesCommandOutput) => void
  ): void;
  public describeInstances(
    args: DescribeInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstancesCommandOutput) => void
  ): Promise<DescribeInstancesCommandOutput> | void {
    const command = new DescribeInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests a description of one or more layers in a specified stack.</p>
   *          <note>
   *             <p>This call accepts only one resource-identifying parameter.</p>
   *          </note>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeLayers(
    args: DescribeLayersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLayersCommandOutput>;
  public describeLayers(
    args: DescribeLayersCommandInput,
    cb: (err: any, data?: DescribeLayersCommandOutput) => void
  ): void;
  public describeLayers(
    args: DescribeLayersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLayersCommandOutput) => void
  ): void;
  public describeLayers(
    args: DescribeLayersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLayersCommandOutput) => void),
    cb?: (err: any, data?: DescribeLayersCommandOutput) => void
  ): Promise<DescribeLayersCommandOutput> | void {
    const command = new DescribeLayersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes load-based auto scaling configurations for specified layers.</p>
   *          <note>
   *             <p>You must specify at least one of the parameters.</p>
   *          </note>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeLoadBasedAutoScaling(
    args: DescribeLoadBasedAutoScalingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoadBasedAutoScalingCommandOutput>;
  public describeLoadBasedAutoScaling(
    args: DescribeLoadBasedAutoScalingCommandInput,
    cb: (err: any, data?: DescribeLoadBasedAutoScalingCommandOutput) => void
  ): void;
  public describeLoadBasedAutoScaling(
    args: DescribeLoadBasedAutoScalingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoadBasedAutoScalingCommandOutput) => void
  ): void;
  public describeLoadBasedAutoScaling(
    args: DescribeLoadBasedAutoScalingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLoadBasedAutoScalingCommandOutput) => void),
    cb?: (err: any, data?: DescribeLoadBasedAutoScalingCommandOutput) => void
  ): Promise<DescribeLoadBasedAutoScalingCommandOutput> | void {
    const command = new DescribeLoadBasedAutoScalingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a user's SSH information.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have self-management
   *       enabled or an attached policy that explicitly grants permissions. For more information about user
   *       permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeMyUserProfile(
    args: DescribeMyUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMyUserProfileCommandOutput>;
  public describeMyUserProfile(
    args: DescribeMyUserProfileCommandInput,
    cb: (err: any, data?: DescribeMyUserProfileCommandOutput) => void
  ): void;
  public describeMyUserProfile(
    args: DescribeMyUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMyUserProfileCommandOutput) => void
  ): void;
  public describeMyUserProfile(
    args: DescribeMyUserProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMyUserProfileCommandOutput) => void),
    cb?: (err: any, data?: DescribeMyUserProfileCommandOutput) => void
  ): Promise<DescribeMyUserProfileCommandOutput> | void {
    const command = new DescribeMyUserProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the operating systems that are supported by AWS OpsWorks Stacks.</p>
   */
  public describeOperatingSystems(
    args: DescribeOperatingSystemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOperatingSystemsCommandOutput>;
  public describeOperatingSystems(
    args: DescribeOperatingSystemsCommandInput,
    cb: (err: any, data?: DescribeOperatingSystemsCommandOutput) => void
  ): void;
  public describeOperatingSystems(
    args: DescribeOperatingSystemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOperatingSystemsCommandOutput) => void
  ): void;
  public describeOperatingSystems(
    args: DescribeOperatingSystemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOperatingSystemsCommandOutput) => void),
    cb?: (err: any, data?: DescribeOperatingSystemsCommandOutput) => void
  ): Promise<DescribeOperatingSystemsCommandOutput> | void {
    const command = new DescribeOperatingSystemsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the permissions for a specified stack.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describePermissions(
    args: DescribePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePermissionsCommandOutput>;
  public describePermissions(
    args: DescribePermissionsCommandInput,
    cb: (err: any, data?: DescribePermissionsCommandOutput) => void
  ): void;
  public describePermissions(
    args: DescribePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePermissionsCommandOutput) => void
  ): void;
  public describePermissions(
    args: DescribePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribePermissionsCommandOutput) => void
  ): Promise<DescribePermissionsCommandOutput> | void {
    const command = new DescribePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describe an instance's RAID arrays.</p>
   *          <note>
   *             <p>This call accepts only one resource-identifying parameter.</p>
   *          </note>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeRaidArrays(
    args: DescribeRaidArraysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRaidArraysCommandOutput>;
  public describeRaidArrays(
    args: DescribeRaidArraysCommandInput,
    cb: (err: any, data?: DescribeRaidArraysCommandOutput) => void
  ): void;
  public describeRaidArrays(
    args: DescribeRaidArraysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRaidArraysCommandOutput) => void
  ): void;
  public describeRaidArrays(
    args: DescribeRaidArraysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRaidArraysCommandOutput) => void),
    cb?: (err: any, data?: DescribeRaidArraysCommandOutput) => void
  ): Promise<DescribeRaidArraysCommandOutput> | void {
    const command = new DescribeRaidArraysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes Amazon RDS instances.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   *          <p>This call accepts only one resource-identifying parameter.</p>
   */
  public describeRdsDbInstances(
    args: DescribeRdsDbInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRdsDbInstancesCommandOutput>;
  public describeRdsDbInstances(
    args: DescribeRdsDbInstancesCommandInput,
    cb: (err: any, data?: DescribeRdsDbInstancesCommandOutput) => void
  ): void;
  public describeRdsDbInstances(
    args: DescribeRdsDbInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRdsDbInstancesCommandOutput) => void
  ): void;
  public describeRdsDbInstances(
    args: DescribeRdsDbInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRdsDbInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeRdsDbInstancesCommandOutput) => void
  ): Promise<DescribeRdsDbInstancesCommandOutput> | void {
    const command = new DescribeRdsDbInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes AWS OpsWorks Stacks service errors.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   *          <p>This call accepts only one resource-identifying parameter.</p>
   */
  public describeServiceErrors(
    args: DescribeServiceErrorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceErrorsCommandOutput>;
  public describeServiceErrors(
    args: DescribeServiceErrorsCommandInput,
    cb: (err: any, data?: DescribeServiceErrorsCommandOutput) => void
  ): void;
  public describeServiceErrors(
    args: DescribeServiceErrorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceErrorsCommandOutput) => void
  ): void;
  public describeServiceErrors(
    args: DescribeServiceErrorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeServiceErrorsCommandOutput) => void),
    cb?: (err: any, data?: DescribeServiceErrorsCommandOutput) => void
  ): Promise<DescribeServiceErrorsCommandOutput> | void {
    const command = new DescribeServiceErrorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests a description of a stack's provisioning parameters.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeStackProvisioningParameters(
    args: DescribeStackProvisioningParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackProvisioningParametersCommandOutput>;
  public describeStackProvisioningParameters(
    args: DescribeStackProvisioningParametersCommandInput,
    cb: (err: any, data?: DescribeStackProvisioningParametersCommandOutput) => void
  ): void;
  public describeStackProvisioningParameters(
    args: DescribeStackProvisioningParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackProvisioningParametersCommandOutput) => void
  ): void;
  public describeStackProvisioningParameters(
    args: DescribeStackProvisioningParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStackProvisioningParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackProvisioningParametersCommandOutput) => void
  ): Promise<DescribeStackProvisioningParametersCommandOutput> | void {
    const command = new DescribeStackProvisioningParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests a description of one or more stacks.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeStacks(
    args: DescribeStacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStacksCommandOutput>;
  public describeStacks(
    args: DescribeStacksCommandInput,
    cb: (err: any, data?: DescribeStacksCommandOutput) => void
  ): void;
  public describeStacks(
    args: DescribeStacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStacksCommandOutput) => void
  ): void;
  public describeStacks(
    args: DescribeStacksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStacksCommandOutput) => void),
    cb?: (err: any, data?: DescribeStacksCommandOutput) => void
  ): Promise<DescribeStacksCommandOutput> | void {
    const command = new DescribeStacksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the number of layers and apps in a specified stack, and the number of instances in
   *       each state, such as <code>running_setup</code> or <code>online</code>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeStackSummary(
    args: DescribeStackSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackSummaryCommandOutput>;
  public describeStackSummary(
    args: DescribeStackSummaryCommandInput,
    cb: (err: any, data?: DescribeStackSummaryCommandOutput) => void
  ): void;
  public describeStackSummary(
    args: DescribeStackSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackSummaryCommandOutput) => void
  ): void;
  public describeStackSummary(
    args: DescribeStackSummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStackSummaryCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackSummaryCommandOutput) => void
  ): Promise<DescribeStackSummaryCommandOutput> | void {
    const command = new DescribeStackSummaryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes time-based auto scaling configurations for specified instances.</p>
   *          <note>
   *             <p>You must specify at least one of the parameters.</p>
   *          </note>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeTimeBasedAutoScaling(
    args: DescribeTimeBasedAutoScalingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTimeBasedAutoScalingCommandOutput>;
  public describeTimeBasedAutoScaling(
    args: DescribeTimeBasedAutoScalingCommandInput,
    cb: (err: any, data?: DescribeTimeBasedAutoScalingCommandOutput) => void
  ): void;
  public describeTimeBasedAutoScaling(
    args: DescribeTimeBasedAutoScalingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTimeBasedAutoScalingCommandOutput) => void
  ): void;
  public describeTimeBasedAutoScaling(
    args: DescribeTimeBasedAutoScalingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTimeBasedAutoScalingCommandOutput) => void),
    cb?: (err: any, data?: DescribeTimeBasedAutoScalingCommandOutput) => void
  ): Promise<DescribeTimeBasedAutoScalingCommandOutput> | void {
    const command = new DescribeTimeBasedAutoScalingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describe specified users.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
   *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeUserProfiles(
    args: DescribeUserProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserProfilesCommandOutput>;
  public describeUserProfiles(
    args: DescribeUserProfilesCommandInput,
    cb: (err: any, data?: DescribeUserProfilesCommandOutput) => void
  ): void;
  public describeUserProfiles(
    args: DescribeUserProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserProfilesCommandOutput) => void
  ): void;
  public describeUserProfiles(
    args: DescribeUserProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserProfilesCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserProfilesCommandOutput) => void
  ): Promise<DescribeUserProfilesCommandOutput> | void {
    const command = new DescribeUserProfilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an instance's Amazon EBS volumes.</p>
   *          <note>
   *             <p>This call accepts only one resource-identifying parameter.</p>
   *          </note>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
   *       Manage permissions level for the stack, or an attached policy that explicitly grants
   *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public describeVolumes(
    args: DescribeVolumesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVolumesCommandOutput>;
  public describeVolumes(
    args: DescribeVolumesCommandInput,
    cb: (err: any, data?: DescribeVolumesCommandOutput) => void
  ): void;
  public describeVolumes(
    args: DescribeVolumesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVolumesCommandOutput) => void
  ): void;
  public describeVolumes(
    args: DescribeVolumesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVolumesCommandOutput) => void),
    cb?: (err: any, data?: DescribeVolumesCommandOutput) => void
  ): Promise<DescribeVolumesCommandOutput> | void {
    const command = new DescribeVolumesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches a specified Elastic Load Balancing instance from its layer.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public detachElasticLoadBalancer(
    args: DetachElasticLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachElasticLoadBalancerCommandOutput>;
  public detachElasticLoadBalancer(
    args: DetachElasticLoadBalancerCommandInput,
    cb: (err: any, data?: DetachElasticLoadBalancerCommandOutput) => void
  ): void;
  public detachElasticLoadBalancer(
    args: DetachElasticLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachElasticLoadBalancerCommandOutput) => void
  ): void;
  public detachElasticLoadBalancer(
    args: DetachElasticLoadBalancerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachElasticLoadBalancerCommandOutput) => void),
    cb?: (err: any, data?: DetachElasticLoadBalancerCommandOutput) => void
  ): Promise<DetachElasticLoadBalancerCommandOutput> | void {
    const command = new DetachElasticLoadBalancerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates an Elastic IP address from its instance. The address remains registered with
   *       the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public disassociateElasticIp(
    args: DisassociateElasticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateElasticIpCommandOutput>;
  public disassociateElasticIp(
    args: DisassociateElasticIpCommandInput,
    cb: (err: any, data?: DisassociateElasticIpCommandOutput) => void
  ): void;
  public disassociateElasticIp(
    args: DisassociateElasticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateElasticIpCommandOutput) => void
  ): void;
  public disassociateElasticIp(
    args: DisassociateElasticIpCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateElasticIpCommandOutput) => void),
    cb?: (err: any, data?: DisassociateElasticIpCommandOutput) => void
  ): Promise<DisassociateElasticIpCommandOutput> | void {
    const command = new DisassociateElasticIpCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a generated host name for the specified layer, based on the current host name theme.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public getHostnameSuggestion(
    args: GetHostnameSuggestionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHostnameSuggestionCommandOutput>;
  public getHostnameSuggestion(
    args: GetHostnameSuggestionCommandInput,
    cb: (err: any, data?: GetHostnameSuggestionCommandOutput) => void
  ): void;
  public getHostnameSuggestion(
    args: GetHostnameSuggestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostnameSuggestionCommandOutput) => void
  ): void;
  public getHostnameSuggestion(
    args: GetHostnameSuggestionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHostnameSuggestionCommandOutput) => void),
    cb?: (err: any, data?: GetHostnameSuggestionCommandOutput) => void
  ): Promise<GetHostnameSuggestionCommandOutput> | void {
    const command = new GetHostnameSuggestionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This action can be used only with Windows stacks.</p>
   *          </note>
   *          <p>Grants RDP access to a Windows instance for a specified time period.</p>
   */
  public grantAccess(args: GrantAccessCommandInput, options?: __HttpHandlerOptions): Promise<GrantAccessCommandOutput>;
  public grantAccess(args: GrantAccessCommandInput, cb: (err: any, data?: GrantAccessCommandOutput) => void): void;
  public grantAccess(
    args: GrantAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GrantAccessCommandOutput) => void
  ): void;
  public grantAccess(
    args: GrantAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GrantAccessCommandOutput) => void),
    cb?: (err: any, data?: GrantAccessCommandOutput) => void
  ): Promise<GrantAccessCommandOutput> | void {
    const command = new GrantAccessCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of tags that are applied to the specified stack or layer.</p>
   */
  public listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  public listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  public listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  public listTags(
    args: ListTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsCommandOutput) => void),
    cb?: (err: any, data?: ListTagsCommandOutput) => void
  ): Promise<ListTagsCommandOutput> | void {
    const command = new ListTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Reboots a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting,
   *         Stopping, and Rebooting Instances</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public rebootInstance(
    args: RebootInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootInstanceCommandOutput>;
  public rebootInstance(
    args: RebootInstanceCommandInput,
    cb: (err: any, data?: RebootInstanceCommandOutput) => void
  ): void;
  public rebootInstance(
    args: RebootInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootInstanceCommandOutput) => void
  ): void;
  public rebootInstance(
    args: RebootInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RebootInstanceCommandOutput) => void),
    cb?: (err: any, data?: RebootInstanceCommandOutput) => void
  ): Promise<RebootInstanceCommandOutput> | void {
    const command = new RebootInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers a specified Amazon ECS cluster with a stack. You can register only one
   *       cluster with a stack. A cluster can be registered with only one stack.
   *       For more information, see
   *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html">
   *       Resource Management</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see
   *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">
   *       Managing User Permissions</a>.</p>
   */
  public registerEcsCluster(
    args: RegisterEcsClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterEcsClusterCommandOutput>;
  public registerEcsCluster(
    args: RegisterEcsClusterCommandInput,
    cb: (err: any, data?: RegisterEcsClusterCommandOutput) => void
  ): void;
  public registerEcsCluster(
    args: RegisterEcsClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterEcsClusterCommandOutput) => void
  ): void;
  public registerEcsCluster(
    args: RegisterEcsClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterEcsClusterCommandOutput) => void),
    cb?: (err: any, data?: RegisterEcsClusterCommandOutput) => void
  ): Promise<RegisterEcsClusterCommandOutput> | void {
    const command = new RegisterEcsClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers an Elastic IP address with a specified stack. An address can be registered with
   *       only one stack at a time. If the address is already registered, you must first deregister it
   *       by calling <a>DeregisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public registerElasticIp(
    args: RegisterElasticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterElasticIpCommandOutput>;
  public registerElasticIp(
    args: RegisterElasticIpCommandInput,
    cb: (err: any, data?: RegisterElasticIpCommandOutput) => void
  ): void;
  public registerElasticIp(
    args: RegisterElasticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterElasticIpCommandOutput) => void
  ): void;
  public registerElasticIp(
    args: RegisterElasticIpCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterElasticIpCommandOutput) => void),
    cb?: (err: any, data?: RegisterElasticIpCommandOutput) => void
  ): Promise<RegisterElasticIpCommandOutput> | void {
    const command = new RegisterElasticIpCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p>
   *          <note>
   *             <p>We do not recommend using this action to register instances. The complete registration
   *       operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering
   *       the instance with the stack. <code>RegisterInstance</code> handles only the second step. You
   *       should instead use the AWS CLI <code>register</code> command, which performs the entire
   *       registration operation. For more information,
   *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html">
   *       Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p>
   *          </note>
   *          <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API.
   *       For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance
   *       type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html">
   *           Preparing the Instance</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public registerInstance(
    args: RegisterInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterInstanceCommandOutput>;
  public registerInstance(
    args: RegisterInstanceCommandInput,
    cb: (err: any, data?: RegisterInstanceCommandOutput) => void
  ): void;
  public registerInstance(
    args: RegisterInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterInstanceCommandOutput) => void
  ): void;
  public registerInstance(
    args: RegisterInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterInstanceCommandOutput) => void),
    cb?: (err: any, data?: RegisterInstanceCommandOutput) => void
  ): Promise<RegisterInstanceCommandOutput> | void {
    const command = new RegisterInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers an Amazon RDS instance with a stack.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public registerRdsDbInstance(
    args: RegisterRdsDbInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterRdsDbInstanceCommandOutput>;
  public registerRdsDbInstance(
    args: RegisterRdsDbInstanceCommandInput,
    cb: (err: any, data?: RegisterRdsDbInstanceCommandOutput) => void
  ): void;
  public registerRdsDbInstance(
    args: RegisterRdsDbInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterRdsDbInstanceCommandOutput) => void
  ): void;
  public registerRdsDbInstance(
    args: RegisterRdsDbInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterRdsDbInstanceCommandOutput) => void),
    cb?: (err: any, data?: RegisterRdsDbInstanceCommandOutput) => void
  ): Promise<RegisterRdsDbInstanceCommandOutput> | void {
    const command = new RegisterRdsDbInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one
   *       stack at a time. If the volume is already registered, you must first deregister it by calling
   *         <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public registerVolume(
    args: RegisterVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterVolumeCommandOutput>;
  public registerVolume(
    args: RegisterVolumeCommandInput,
    cb: (err: any, data?: RegisterVolumeCommandOutput) => void
  ): void;
  public registerVolume(
    args: RegisterVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterVolumeCommandOutput) => void
  ): void;
  public registerVolume(
    args: RegisterVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterVolumeCommandOutput) => void),
    cb?: (err: any, data?: RegisterVolumeCommandOutput) => void
  ): Promise<RegisterVolumeCommandOutput> | void {
    const command = new RegisterVolumeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Specify the load-based auto scaling configuration for a specified layer. For more
   *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing
   *         Load with Time-based and Load-based Instances</a>.</p>
   *          <note>
   *             <p>To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.</p>
   *          </note>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public setLoadBasedAutoScaling(
    args: SetLoadBasedAutoScalingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetLoadBasedAutoScalingCommandOutput>;
  public setLoadBasedAutoScaling(
    args: SetLoadBasedAutoScalingCommandInput,
    cb: (err: any, data?: SetLoadBasedAutoScalingCommandOutput) => void
  ): void;
  public setLoadBasedAutoScaling(
    args: SetLoadBasedAutoScalingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetLoadBasedAutoScalingCommandOutput) => void
  ): void;
  public setLoadBasedAutoScaling(
    args: SetLoadBasedAutoScalingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetLoadBasedAutoScalingCommandOutput) => void),
    cb?: (err: any, data?: SetLoadBasedAutoScalingCommandOutput) => void
  ): Promise<SetLoadBasedAutoScalingCommandOutput> | void {
    const command = new SetLoadBasedAutoScalingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Specifies a user's permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and
   *         Permissions</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public setPermission(
    args: SetPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetPermissionCommandOutput>;
  public setPermission(
    args: SetPermissionCommandInput,
    cb: (err: any, data?: SetPermissionCommandOutput) => void
  ): void;
  public setPermission(
    args: SetPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetPermissionCommandOutput) => void
  ): void;
  public setPermission(
    args: SetPermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetPermissionCommandOutput) => void),
    cb?: (err: any, data?: SetPermissionCommandOutput) => void
  ): Promise<SetPermissionCommandOutput> | void {
    const command = new SetPermissionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Specify the time-based auto scaling configuration for a specified instance. For more
   *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing
   *         Load with Time-based and Load-based Instances</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public setTimeBasedAutoScaling(
    args: SetTimeBasedAutoScalingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTimeBasedAutoScalingCommandOutput>;
  public setTimeBasedAutoScaling(
    args: SetTimeBasedAutoScalingCommandInput,
    cb: (err: any, data?: SetTimeBasedAutoScalingCommandOutput) => void
  ): void;
  public setTimeBasedAutoScaling(
    args: SetTimeBasedAutoScalingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTimeBasedAutoScalingCommandOutput) => void
  ): void;
  public setTimeBasedAutoScaling(
    args: SetTimeBasedAutoScalingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetTimeBasedAutoScalingCommandOutput) => void),
    cb?: (err: any, data?: SetTimeBasedAutoScalingCommandOutput) => void
  ): Promise<SetTimeBasedAutoScalingCommandOutput> | void {
    const command = new SetTimeBasedAutoScalingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting,
   *         Stopping, and Rebooting Instances</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public startInstance(
    args: StartInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartInstanceCommandOutput>;
  public startInstance(
    args: StartInstanceCommandInput,
    cb: (err: any, data?: StartInstanceCommandOutput) => void
  ): void;
  public startInstance(
    args: StartInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInstanceCommandOutput) => void
  ): void;
  public startInstance(
    args: StartInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartInstanceCommandOutput) => void),
    cb?: (err: any, data?: StartInstanceCommandOutput) => void
  ): Promise<StartInstanceCommandOutput> | void {
    const command = new StartInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a stack's instances.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public startStack(args: StartStackCommandInput, options?: __HttpHandlerOptions): Promise<StartStackCommandOutput>;
  public startStack(args: StartStackCommandInput, cb: (err: any, data?: StartStackCommandOutput) => void): void;
  public startStack(
    args: StartStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartStackCommandOutput) => void
  ): void;
  public startStack(
    args: StartStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartStackCommandOutput) => void),
    cb?: (err: any, data?: StartStackCommandOutput) => void
  ): Promise<StartStackCommandOutput> | void {
    const command = new StartStackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops a specified instance. When you stop a standard instance, the data disappears and must
   *       be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without
   *       losing data. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting,
   *         Stopping, and Rebooting Instances</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public stopInstance(
    args: StopInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopInstanceCommandOutput>;
  public stopInstance(args: StopInstanceCommandInput, cb: (err: any, data?: StopInstanceCommandOutput) => void): void;
  public stopInstance(
    args: StopInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopInstanceCommandOutput) => void
  ): void;
  public stopInstance(
    args: StopInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopInstanceCommandOutput) => void),
    cb?: (err: any, data?: StopInstanceCommandOutput) => void
  ): Promise<StopInstanceCommandOutput> | void {
    const command = new StopInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops a specified stack.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public stopStack(args: StopStackCommandInput, options?: __HttpHandlerOptions): Promise<StopStackCommandOutput>;
  public stopStack(args: StopStackCommandInput, cb: (err: any, data?: StopStackCommandOutput) => void): void;
  public stopStack(
    args: StopStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopStackCommandOutput) => void
  ): void;
  public stopStack(
    args: StopStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopStackCommandOutput) => void),
    cb?: (err: any, data?: StopStackCommandOutput) => void
  ): Promise<StopStackCommandOutput> | void {
    const command = new StopStackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/tagging.html">Tags</a> in the AWS OpsWorks User Guide.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Unassigns a registered instance from all layers that are using the instance.
   *           The instance remains in the stack as an unassigned instance, and can be assigned to
   *           another layer as needed. You cannot use this action with instances that were created
   *           with AWS OpsWorks Stacks.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must
   *           have a Manage permissions level for the stack or an attached policy that explicitly
   *           grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public unassignInstance(
    args: UnassignInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnassignInstanceCommandOutput>;
  public unassignInstance(
    args: UnassignInstanceCommandInput,
    cb: (err: any, data?: UnassignInstanceCommandOutput) => void
  ): void;
  public unassignInstance(
    args: UnassignInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnassignInstanceCommandOutput) => void
  ): void;
  public unassignInstance(
    args: UnassignInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnassignInstanceCommandOutput) => void),
    cb?: (err: any, data?: UnassignInstanceCommandOutput) => void
  ): Promise<UnassignInstanceCommandOutput> | void {
    const command = new UnassignInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more
   *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource
   *         Management</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public unassignVolume(
    args: UnassignVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnassignVolumeCommandOutput>;
  public unassignVolume(
    args: UnassignVolumeCommandInput,
    cb: (err: any, data?: UnassignVolumeCommandOutput) => void
  ): void;
  public unassignVolume(
    args: UnassignVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnassignVolumeCommandOutput) => void
  ): void;
  public unassignVolume(
    args: UnassignVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnassignVolumeCommandOutput) => void),
    cb?: (err: any, data?: UnassignVolumeCommandOutput) => void
  ): Promise<UnassignVolumeCommandOutput> | void {
    const command = new UnassignVolumeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes tags from a specified stack or layer.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a specified app.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage
   *       permissions level for the stack, or an attached policy that explicitly grants permissions. For
   *       more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public updateApp(args: UpdateAppCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAppCommandOutput>;
  public updateApp(args: UpdateAppCommandInput, cb: (err: any, data?: UpdateAppCommandOutput) => void): void;
  public updateApp(
    args: UpdateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppCommandOutput) => void
  ): void;
  public updateApp(
    args: UpdateAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAppCommandOutput) => void),
    cb?: (err: any, data?: UpdateAppCommandOutput) => void
  ): Promise<UpdateAppCommandOutput> | void {
    const command = new UpdateAppCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a registered Elastic IP address's name. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public updateElasticIp(
    args: UpdateElasticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateElasticIpCommandOutput>;
  public updateElasticIp(
    args: UpdateElasticIpCommandInput,
    cb: (err: any, data?: UpdateElasticIpCommandOutput) => void
  ): void;
  public updateElasticIp(
    args: UpdateElasticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateElasticIpCommandOutput) => void
  ): void;
  public updateElasticIp(
    args: UpdateElasticIpCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateElasticIpCommandOutput) => void),
    cb?: (err: any, data?: UpdateElasticIpCommandOutput) => void
  ): Promise<UpdateElasticIpCommandOutput> | void {
    const command = new UpdateElasticIpCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a specified instance.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public updateInstance(
    args: UpdateInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceCommandOutput>;
  public updateInstance(
    args: UpdateInstanceCommandInput,
    cb: (err: any, data?: UpdateInstanceCommandOutput) => void
  ): void;
  public updateInstance(
    args: UpdateInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceCommandOutput) => void
  ): void;
  public updateInstance(
    args: UpdateInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateInstanceCommandOutput) => void),
    cb?: (err: any, data?: UpdateInstanceCommandOutput) => void
  ): Promise<UpdateInstanceCommandOutput> | void {
    const command = new UpdateInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a specified layer.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public updateLayer(args: UpdateLayerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLayerCommandOutput>;
  public updateLayer(args: UpdateLayerCommandInput, cb: (err: any, data?: UpdateLayerCommandOutput) => void): void;
  public updateLayer(
    args: UpdateLayerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLayerCommandOutput) => void
  ): void;
  public updateLayer(
    args: UpdateLayerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLayerCommandOutput) => void),
    cb?: (err: any, data?: UpdateLayerCommandOutput) => void
  ): Promise<UpdateLayerCommandOutput> | void {
    const command = new UpdateLayerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a user's SSH public key.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have self-management
   *       enabled or an attached policy that explicitly grants permissions. For more information about user
   *       permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public updateMyUserProfile(
    args: UpdateMyUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMyUserProfileCommandOutput>;
  public updateMyUserProfile(
    args: UpdateMyUserProfileCommandInput,
    cb: (err: any, data?: UpdateMyUserProfileCommandOutput) => void
  ): void;
  public updateMyUserProfile(
    args: UpdateMyUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMyUserProfileCommandOutput) => void
  ): void;
  public updateMyUserProfile(
    args: UpdateMyUserProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMyUserProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateMyUserProfileCommandOutput) => void
  ): Promise<UpdateMyUserProfileCommandOutput> | void {
    const command = new UpdateMyUserProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an Amazon RDS instance.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public updateRdsDbInstance(
    args: UpdateRdsDbInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRdsDbInstanceCommandOutput>;
  public updateRdsDbInstance(
    args: UpdateRdsDbInstanceCommandInput,
    cb: (err: any, data?: UpdateRdsDbInstanceCommandOutput) => void
  ): void;
  public updateRdsDbInstance(
    args: UpdateRdsDbInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRdsDbInstanceCommandOutput) => void
  ): void;
  public updateRdsDbInstance(
    args: UpdateRdsDbInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRdsDbInstanceCommandOutput) => void),
    cb?: (err: any, data?: UpdateRdsDbInstanceCommandOutput) => void
  ): Promise<UpdateRdsDbInstanceCommandOutput> | void {
    const command = new UpdateRdsDbInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a specified stack.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public updateStack(args: UpdateStackCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStackCommandOutput>;
  public updateStack(args: UpdateStackCommandInput, cb: (err: any, data?: UpdateStackCommandOutput) => void): void;
  public updateStack(
    args: UpdateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStackCommandOutput) => void
  ): void;
  public updateStack(
    args: UpdateStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStackCommandOutput) => void),
    cb?: (err: any, data?: UpdateStackCommandOutput) => void
  ): Promise<UpdateStackCommandOutput> | void {
    const command = new UpdateStackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a specified user profile.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
   *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserProfileCommandOutput>;
  public updateUserProfile(
    args: UpdateUserProfileCommandInput,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;
  public updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;
  public updateUserProfile(
    args: UpdateUserProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): Promise<UpdateUserProfileCommandOutput> | void {
    const command = new UpdateUserProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an Amazon EBS volume's name or mount point. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
   *          <p>
   *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
   *       level for the stack, or an attached policy that explicitly grants permissions. For more
   *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
   *         Permissions</a>.</p>
   */
  public updateVolume(
    args: UpdateVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVolumeCommandOutput>;
  public updateVolume(args: UpdateVolumeCommandInput, cb: (err: any, data?: UpdateVolumeCommandOutput) => void): void;
  public updateVolume(
    args: UpdateVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVolumeCommandOutput) => void
  ): void;
  public updateVolume(
    args: UpdateVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVolumeCommandOutput) => void),
    cb?: (err: any, data?: UpdateVolumeCommandOutput) => void
  ): Promise<UpdateVolumeCommandOutput> | void {
    const command = new UpdateVolumeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
