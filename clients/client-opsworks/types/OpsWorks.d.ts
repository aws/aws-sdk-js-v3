import { OpsWorksClient } from "./OpsWorksClient";
import { AssignInstanceCommandInput, AssignInstanceCommandOutput } from "./commands/AssignInstanceCommand";
import { AssignVolumeCommandInput, AssignVolumeCommandOutput } from "./commands/AssignVolumeCommand";
import { AssociateElasticIpCommandInput, AssociateElasticIpCommandOutput } from "./commands/AssociateElasticIpCommand";
import { AttachElasticLoadBalancerCommandInput, AttachElasticLoadBalancerCommandOutput } from "./commands/AttachElasticLoadBalancerCommand";
import { CloneStackCommandInput, CloneStackCommandOutput } from "./commands/CloneStackCommand";
import { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import { CreateInstanceCommandInput, CreateInstanceCommandOutput } from "./commands/CreateInstanceCommand";
import { CreateLayerCommandInput, CreateLayerCommandOutput } from "./commands/CreateLayerCommand";
import { CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "./commands/CreateUserProfileCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "./commands/DeleteInstanceCommand";
import { DeleteLayerCommandInput, DeleteLayerCommandOutput } from "./commands/DeleteLayerCommand";
import { DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "./commands/DeleteUserProfileCommand";
import { DeregisterEcsClusterCommandInput, DeregisterEcsClusterCommandOutput } from "./commands/DeregisterEcsClusterCommand";
import { DeregisterElasticIpCommandInput, DeregisterElasticIpCommandOutput } from "./commands/DeregisterElasticIpCommand";
import { DeregisterInstanceCommandInput, DeregisterInstanceCommandOutput } from "./commands/DeregisterInstanceCommand";
import { DeregisterRdsDbInstanceCommandInput, DeregisterRdsDbInstanceCommandOutput } from "./commands/DeregisterRdsDbInstanceCommand";
import { DeregisterVolumeCommandInput, DeregisterVolumeCommandOutput } from "./commands/DeregisterVolumeCommand";
import { DescribeAgentVersionsCommandInput, DescribeAgentVersionsCommandOutput } from "./commands/DescribeAgentVersionsCommand";
import { DescribeAppsCommandInput, DescribeAppsCommandOutput } from "./commands/DescribeAppsCommand";
import { DescribeCommandsCommandInput, DescribeCommandsCommandOutput } from "./commands/DescribeCommandsCommand";
import { DescribeDeploymentsCommandInput, DescribeDeploymentsCommandOutput } from "./commands/DescribeDeploymentsCommand";
import { DescribeEcsClustersCommandInput, DescribeEcsClustersCommandOutput } from "./commands/DescribeEcsClustersCommand";
import { DescribeElasticIpsCommandInput, DescribeElasticIpsCommandOutput } from "./commands/DescribeElasticIpsCommand";
import { DescribeElasticLoadBalancersCommandInput, DescribeElasticLoadBalancersCommandOutput } from "./commands/DescribeElasticLoadBalancersCommand";
import { DescribeInstancesCommandInput, DescribeInstancesCommandOutput } from "./commands/DescribeInstancesCommand";
import { DescribeLayersCommandInput, DescribeLayersCommandOutput } from "./commands/DescribeLayersCommand";
import { DescribeLoadBasedAutoScalingCommandInput, DescribeLoadBasedAutoScalingCommandOutput } from "./commands/DescribeLoadBasedAutoScalingCommand";
import { DescribeMyUserProfileCommandInput, DescribeMyUserProfileCommandOutput } from "./commands/DescribeMyUserProfileCommand";
import { DescribeOperatingSystemsCommandInput, DescribeOperatingSystemsCommandOutput } from "./commands/DescribeOperatingSystemsCommand";
import { DescribePermissionsCommandInput, DescribePermissionsCommandOutput } from "./commands/DescribePermissionsCommand";
import { DescribeRaidArraysCommandInput, DescribeRaidArraysCommandOutput } from "./commands/DescribeRaidArraysCommand";
import { DescribeRdsDbInstancesCommandInput, DescribeRdsDbInstancesCommandOutput } from "./commands/DescribeRdsDbInstancesCommand";
import { DescribeServiceErrorsCommandInput, DescribeServiceErrorsCommandOutput } from "./commands/DescribeServiceErrorsCommand";
import { DescribeStackProvisioningParametersCommandInput, DescribeStackProvisioningParametersCommandOutput } from "./commands/DescribeStackProvisioningParametersCommand";
import { DescribeStackSummaryCommandInput, DescribeStackSummaryCommandOutput } from "./commands/DescribeStackSummaryCommand";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "./commands/DescribeStacksCommand";
import { DescribeTimeBasedAutoScalingCommandInput, DescribeTimeBasedAutoScalingCommandOutput } from "./commands/DescribeTimeBasedAutoScalingCommand";
import { DescribeUserProfilesCommandInput, DescribeUserProfilesCommandOutput } from "./commands/DescribeUserProfilesCommand";
import { DescribeVolumesCommandInput, DescribeVolumesCommandOutput } from "./commands/DescribeVolumesCommand";
import { DetachElasticLoadBalancerCommandInput, DetachElasticLoadBalancerCommandOutput } from "./commands/DetachElasticLoadBalancerCommand";
import { DisassociateElasticIpCommandInput, DisassociateElasticIpCommandOutput } from "./commands/DisassociateElasticIpCommand";
import { GetHostnameSuggestionCommandInput, GetHostnameSuggestionCommandOutput } from "./commands/GetHostnameSuggestionCommand";
import { GrantAccessCommandInput, GrantAccessCommandOutput } from "./commands/GrantAccessCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { RebootInstanceCommandInput, RebootInstanceCommandOutput } from "./commands/RebootInstanceCommand";
import { RegisterEcsClusterCommandInput, RegisterEcsClusterCommandOutput } from "./commands/RegisterEcsClusterCommand";
import { RegisterElasticIpCommandInput, RegisterElasticIpCommandOutput } from "./commands/RegisterElasticIpCommand";
import { RegisterInstanceCommandInput, RegisterInstanceCommandOutput } from "./commands/RegisterInstanceCommand";
import { RegisterRdsDbInstanceCommandInput, RegisterRdsDbInstanceCommandOutput } from "./commands/RegisterRdsDbInstanceCommand";
import { RegisterVolumeCommandInput, RegisterVolumeCommandOutput } from "./commands/RegisterVolumeCommand";
import { SetLoadBasedAutoScalingCommandInput, SetLoadBasedAutoScalingCommandOutput } from "./commands/SetLoadBasedAutoScalingCommand";
import { SetPermissionCommandInput, SetPermissionCommandOutput } from "./commands/SetPermissionCommand";
import { SetTimeBasedAutoScalingCommandInput, SetTimeBasedAutoScalingCommandOutput } from "./commands/SetTimeBasedAutoScalingCommand";
import { StartInstanceCommandInput, StartInstanceCommandOutput } from "./commands/StartInstanceCommand";
import { StartStackCommandInput, StartStackCommandOutput } from "./commands/StartStackCommand";
import { StopInstanceCommandInput, StopInstanceCommandOutput } from "./commands/StopInstanceCommand";
import { StopStackCommandInput, StopStackCommandOutput } from "./commands/StopStackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UnassignInstanceCommandInput, UnassignInstanceCommandOutput } from "./commands/UnassignInstanceCommand";
import { UnassignVolumeCommandInput, UnassignVolumeCommandOutput } from "./commands/UnassignVolumeCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand";
import { UpdateElasticIpCommandInput, UpdateElasticIpCommandOutput } from "./commands/UpdateElasticIpCommand";
import { UpdateInstanceCommandInput, UpdateInstanceCommandOutput } from "./commands/UpdateInstanceCommand";
import { UpdateLayerCommandInput, UpdateLayerCommandOutput } from "./commands/UpdateLayerCommand";
import { UpdateMyUserProfileCommandInput, UpdateMyUserProfileCommandOutput } from "./commands/UpdateMyUserProfileCommand";
import { UpdateRdsDbInstanceCommandInput, UpdateRdsDbInstanceCommandOutput } from "./commands/UpdateRdsDbInstanceCommand";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "./commands/UpdateUserProfileCommand";
import { UpdateVolumeCommandInput, UpdateVolumeCommandOutput } from "./commands/UpdateVolumeCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class OpsWorks extends OpsWorksClient {
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
    assignInstance(args: AssignInstanceCommandInput, options?: __HttpHandlerOptions): Promise<AssignInstanceCommandOutput>;
    assignInstance(args: AssignInstanceCommandInput, cb: (err: any, data?: AssignInstanceCommandOutput) => void): void;
    assignInstance(args: AssignInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssignInstanceCommandOutput) => void): void;
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
    assignVolume(args: AssignVolumeCommandInput, options?: __HttpHandlerOptions): Promise<AssignVolumeCommandOutput>;
    assignVolume(args: AssignVolumeCommandInput, cb: (err: any, data?: AssignVolumeCommandOutput) => void): void;
    assignVolume(args: AssignVolumeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssignVolumeCommandOutput) => void): void;
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
    associateElasticIp(args: AssociateElasticIpCommandInput, options?: __HttpHandlerOptions): Promise<AssociateElasticIpCommandOutput>;
    associateElasticIp(args: AssociateElasticIpCommandInput, cb: (err: any, data?: AssociateElasticIpCommandOutput) => void): void;
    associateElasticIp(args: AssociateElasticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateElasticIpCommandOutput) => void): void;
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
    attachElasticLoadBalancer(args: AttachElasticLoadBalancerCommandInput, options?: __HttpHandlerOptions): Promise<AttachElasticLoadBalancerCommandOutput>;
    attachElasticLoadBalancer(args: AttachElasticLoadBalancerCommandInput, cb: (err: any, data?: AttachElasticLoadBalancerCommandOutput) => void): void;
    attachElasticLoadBalancer(args: AttachElasticLoadBalancerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachElasticLoadBalancerCommandOutput) => void): void;
    /**
     * <p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a
     *         Stack</a>. By default, all parameters are set to the values used by the parent stack.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
     *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    cloneStack(args: CloneStackCommandInput, options?: __HttpHandlerOptions): Promise<CloneStackCommandOutput>;
    cloneStack(args: CloneStackCommandInput, cb: (err: any, data?: CloneStackCommandOutput) => void): void;
    cloneStack(args: CloneStackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CloneStackCommandOutput) => void): void;
    /**
     * <p>Creates an app for a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating
     *       Apps</a>.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    createApp(args: CreateAppCommandInput, options?: __HttpHandlerOptions): Promise<CreateAppCommandOutput>;
    createApp(args: CreateAppCommandInput, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
    createApp(args: CreateAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
    /**
     * <p>Runs deployment or stack commands. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html">Deploying
     *         Apps</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html">Run Stack Commands</a>.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage
     *       permissions level for the stack, or an attached policy that explicitly grants permissions. For
     *       more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    createDeployment(args: CreateDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeploymentCommandOutput>;
    createDeployment(args: CreateDeploymentCommandInput, cb: (err: any, data?: CreateDeploymentCommandOutput) => void): void;
    createDeployment(args: CreateDeploymentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDeploymentCommandOutput) => void): void;
    /**
     * <p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an
     *         Instance to a Layer</a>.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    createInstance(args: CreateInstanceCommandInput, options?: __HttpHandlerOptions): Promise<CreateInstanceCommandOutput>;
    createInstance(args: CreateInstanceCommandInput, cb: (err: any, data?: CreateInstanceCommandOutput) => void): void;
    createInstance(args: CreateInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInstanceCommandOutput) => void): void;
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
    createLayer(args: CreateLayerCommandInput, options?: __HttpHandlerOptions): Promise<CreateLayerCommandOutput>;
    createLayer(args: CreateLayerCommandInput, cb: (err: any, data?: CreateLayerCommandOutput) => void): void;
    createLayer(args: CreateLayerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLayerCommandOutput) => void): void;
    /**
     * <p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New
     *         Stack</a>.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
     *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    createStack(args: CreateStackCommandInput, options?: __HttpHandlerOptions): Promise<CreateStackCommandOutput>;
    createStack(args: CreateStackCommandInput, cb: (err: any, data?: CreateStackCommandOutput) => void): void;
    createStack(args: CreateStackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateStackCommandOutput) => void): void;
    /**
     * <p>Creates a new user profile.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
     *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    createUserProfile(args: CreateUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserProfileCommandOutput>;
    createUserProfile(args: CreateUserProfileCommandInput, cb: (err: any, data?: CreateUserProfileCommandOutput) => void): void;
    createUserProfile(args: CreateUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserProfileCommandOutput) => void): void;
    /**
     * <p>Deletes a specified app.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
    deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
    deleteApp(args: DeleteAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
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
    deleteInstance(args: DeleteInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInstanceCommandOutput>;
    deleteInstance(args: DeleteInstanceCommandInput, cb: (err: any, data?: DeleteInstanceCommandOutput) => void): void;
    deleteInstance(args: DeleteInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInstanceCommandOutput) => void): void;
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
    deleteLayer(args: DeleteLayerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLayerCommandOutput>;
    deleteLayer(args: DeleteLayerCommandInput, cb: (err: any, data?: DeleteLayerCommandOutput) => void): void;
    deleteLayer(args: DeleteLayerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLayerCommandOutput) => void): void;
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
    deleteStack(args: DeleteStackCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStackCommandOutput>;
    deleteStack(args: DeleteStackCommandInput, cb: (err: any, data?: DeleteStackCommandOutput) => void): void;
    deleteStack(args: DeleteStackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteStackCommandOutput) => void): void;
    /**
     * <p>Deletes a user profile.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
     *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    deleteUserProfile(args: DeleteUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserProfileCommandOutput>;
    deleteUserProfile(args: DeleteUserProfileCommandInput, cb: (err: any, data?: DeleteUserProfileCommandOutput) => void): void;
    deleteUserProfile(args: DeleteUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserProfileCommandOutput) => void): void;
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
    deregisterEcsCluster(args: DeregisterEcsClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterEcsClusterCommandOutput>;
    deregisterEcsCluster(args: DeregisterEcsClusterCommandInput, cb: (err: any, data?: DeregisterEcsClusterCommandOutput) => void): void;
    deregisterEcsCluster(args: DeregisterEcsClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterEcsClusterCommandOutput) => void): void;
    /**
     * <p>Deregisters a specified Elastic IP address. The address can then be registered by another
     *       stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    deregisterElasticIp(args: DeregisterElasticIpCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterElasticIpCommandOutput>;
    deregisterElasticIp(args: DeregisterElasticIpCommandInput, cb: (err: any, data?: DeregisterElasticIpCommandOutput) => void): void;
    deregisterElasticIp(args: DeregisterElasticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterElasticIpCommandOutput) => void): void;
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
    deregisterInstance(args: DeregisterInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterInstanceCommandOutput>;
    deregisterInstance(args: DeregisterInstanceCommandInput, cb: (err: any, data?: DeregisterInstanceCommandOutput) => void): void;
    deregisterInstance(args: DeregisterInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterInstanceCommandOutput) => void): void;
    /**
     * <p>Deregisters an Amazon RDS instance.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    deregisterRdsDbInstance(args: DeregisterRdsDbInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterRdsDbInstanceCommandOutput>;
    deregisterRdsDbInstance(args: DeregisterRdsDbInstanceCommandInput, cb: (err: any, data?: DeregisterRdsDbInstanceCommandOutput) => void): void;
    deregisterRdsDbInstance(args: DeregisterRdsDbInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterRdsDbInstanceCommandOutput) => void): void;
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
    deregisterVolume(args: DeregisterVolumeCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterVolumeCommandOutput>;
    deregisterVolume(args: DeregisterVolumeCommandInput, cb: (err: any, data?: DeregisterVolumeCommandOutput) => void): void;
    deregisterVolume(args: DeregisterVolumeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterVolumeCommandOutput) => void): void;
    /**
     * <p>Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a
     *     configuration manager. <code>DescribeAgentVersions</code> returns a list of available
     *     agent versions for the specified stack or configuration manager.</p>
     */
    describeAgentVersions(args: DescribeAgentVersionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAgentVersionsCommandOutput>;
    describeAgentVersions(args: DescribeAgentVersionsCommandInput, cb: (err: any, data?: DescribeAgentVersionsCommandOutput) => void): void;
    describeAgentVersions(args: DescribeAgentVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAgentVersionsCommandOutput) => void): void;
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
    describeApps(args: DescribeAppsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAppsCommandOutput>;
    describeApps(args: DescribeAppsCommandInput, cb: (err: any, data?: DescribeAppsCommandOutput) => void): void;
    describeApps(args: DescribeAppsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAppsCommandOutput) => void): void;
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
    describeCommands(args: DescribeCommandsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCommandsCommandOutput>;
    describeCommands(args: DescribeCommandsCommandInput, cb: (err: any, data?: DescribeCommandsCommandOutput) => void): void;
    describeCommands(args: DescribeCommandsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCommandsCommandOutput) => void): void;
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
    describeDeployments(args: DescribeDeploymentsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDeploymentsCommandOutput>;
    describeDeployments(args: DescribeDeploymentsCommandInput, cb: (err: any, data?: DescribeDeploymentsCommandOutput) => void): void;
    describeDeployments(args: DescribeDeploymentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDeploymentsCommandOutput) => void): void;
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
    describeEcsClusters(args: DescribeEcsClustersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEcsClustersCommandOutput>;
    describeEcsClusters(args: DescribeEcsClustersCommandInput, cb: (err: any, data?: DescribeEcsClustersCommandOutput) => void): void;
    describeEcsClusters(args: DescribeEcsClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEcsClustersCommandOutput) => void): void;
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
    describeElasticIps(args: DescribeElasticIpsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeElasticIpsCommandOutput>;
    describeElasticIps(args: DescribeElasticIpsCommandInput, cb: (err: any, data?: DescribeElasticIpsCommandOutput) => void): void;
    describeElasticIps(args: DescribeElasticIpsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeElasticIpsCommandOutput) => void): void;
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
    describeElasticLoadBalancers(args: DescribeElasticLoadBalancersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeElasticLoadBalancersCommandOutput>;
    describeElasticLoadBalancers(args: DescribeElasticLoadBalancersCommandInput, cb: (err: any, data?: DescribeElasticLoadBalancersCommandOutput) => void): void;
    describeElasticLoadBalancers(args: DescribeElasticLoadBalancersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeElasticLoadBalancersCommandOutput) => void): void;
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
    describeInstances(args: DescribeInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInstancesCommandOutput>;
    describeInstances(args: DescribeInstancesCommandInput, cb: (err: any, data?: DescribeInstancesCommandOutput) => void): void;
    describeInstances(args: DescribeInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInstancesCommandOutput) => void): void;
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
    describeLayers(args: DescribeLayersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLayersCommandOutput>;
    describeLayers(args: DescribeLayersCommandInput, cb: (err: any, data?: DescribeLayersCommandOutput) => void): void;
    describeLayers(args: DescribeLayersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLayersCommandOutput) => void): void;
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
    describeLoadBasedAutoScaling(args: DescribeLoadBasedAutoScalingCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLoadBasedAutoScalingCommandOutput>;
    describeLoadBasedAutoScaling(args: DescribeLoadBasedAutoScalingCommandInput, cb: (err: any, data?: DescribeLoadBasedAutoScalingCommandOutput) => void): void;
    describeLoadBasedAutoScaling(args: DescribeLoadBasedAutoScalingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLoadBasedAutoScalingCommandOutput) => void): void;
    /**
     * <p>Describes a user's SSH information.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have self-management
     *       enabled or an attached policy that explicitly grants permissions. For more information about user
     *       permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    describeMyUserProfile(args: DescribeMyUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMyUserProfileCommandOutput>;
    describeMyUserProfile(args: DescribeMyUserProfileCommandInput, cb: (err: any, data?: DescribeMyUserProfileCommandOutput) => void): void;
    describeMyUserProfile(args: DescribeMyUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMyUserProfileCommandOutput) => void): void;
    /**
     * <p>Describes the operating systems that are supported by AWS OpsWorks Stacks.</p>
     */
    describeOperatingSystems(args: DescribeOperatingSystemsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOperatingSystemsCommandOutput>;
    describeOperatingSystems(args: DescribeOperatingSystemsCommandInput, cb: (err: any, data?: DescribeOperatingSystemsCommandOutput) => void): void;
    describeOperatingSystems(args: DescribeOperatingSystemsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOperatingSystemsCommandOutput) => void): void;
    /**
     * <p>Describes the permissions for a specified stack.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    describePermissions(args: DescribePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribePermissionsCommandOutput>;
    describePermissions(args: DescribePermissionsCommandInput, cb: (err: any, data?: DescribePermissionsCommandOutput) => void): void;
    describePermissions(args: DescribePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePermissionsCommandOutput) => void): void;
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
    describeRaidArrays(args: DescribeRaidArraysCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRaidArraysCommandOutput>;
    describeRaidArrays(args: DescribeRaidArraysCommandInput, cb: (err: any, data?: DescribeRaidArraysCommandOutput) => void): void;
    describeRaidArrays(args: DescribeRaidArraysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRaidArraysCommandOutput) => void): void;
    /**
     * <p>Describes Amazon RDS instances.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
     *       Manage permissions level for the stack, or an attached policy that explicitly grants
     *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     *          <p>This call accepts only one resource-identifying parameter.</p>
     */
    describeRdsDbInstances(args: DescribeRdsDbInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRdsDbInstancesCommandOutput>;
    describeRdsDbInstances(args: DescribeRdsDbInstancesCommandInput, cb: (err: any, data?: DescribeRdsDbInstancesCommandOutput) => void): void;
    describeRdsDbInstances(args: DescribeRdsDbInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRdsDbInstancesCommandOutput) => void): void;
    /**
     * <p>Describes AWS OpsWorks Stacks service errors.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
     *       Manage permissions level for the stack, or an attached policy that explicitly grants
     *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     *          <p>This call accepts only one resource-identifying parameter.</p>
     */
    describeServiceErrors(args: DescribeServiceErrorsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeServiceErrorsCommandOutput>;
    describeServiceErrors(args: DescribeServiceErrorsCommandInput, cb: (err: any, data?: DescribeServiceErrorsCommandOutput) => void): void;
    describeServiceErrors(args: DescribeServiceErrorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeServiceErrorsCommandOutput) => void): void;
    /**
     * <p>Requests a description of a stack's provisioning parameters.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
     *       Manage permissions level for the stack or an attached policy that explicitly grants
     *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    describeStackProvisioningParameters(args: DescribeStackProvisioningParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeStackProvisioningParametersCommandOutput>;
    describeStackProvisioningParameters(args: DescribeStackProvisioningParametersCommandInput, cb: (err: any, data?: DescribeStackProvisioningParametersCommandOutput) => void): void;
    describeStackProvisioningParameters(args: DescribeStackProvisioningParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeStackProvisioningParametersCommandOutput) => void): void;
    /**
     * <p>Describes the number of layers and apps in a specified stack, and the number of instances in
     *       each state, such as <code>running_setup</code> or <code>online</code>.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
     *       Manage permissions level for the stack, or an attached policy that explicitly grants
     *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    describeStackSummary(args: DescribeStackSummaryCommandInput, options?: __HttpHandlerOptions): Promise<DescribeStackSummaryCommandOutput>;
    describeStackSummary(args: DescribeStackSummaryCommandInput, cb: (err: any, data?: DescribeStackSummaryCommandOutput) => void): void;
    describeStackSummary(args: DescribeStackSummaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeStackSummaryCommandOutput) => void): void;
    /**
     * <p>Requests a description of one or more stacks.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
     *       Manage permissions level for the stack, or an attached policy that explicitly grants
     *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    describeStacks(args: DescribeStacksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeStacksCommandOutput>;
    describeStacks(args: DescribeStacksCommandInput, cb: (err: any, data?: DescribeStacksCommandOutput) => void): void;
    describeStacks(args: DescribeStacksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeStacksCommandOutput) => void): void;
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
    describeTimeBasedAutoScaling(args: DescribeTimeBasedAutoScalingCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTimeBasedAutoScalingCommandOutput>;
    describeTimeBasedAutoScaling(args: DescribeTimeBasedAutoScalingCommandInput, cb: (err: any, data?: DescribeTimeBasedAutoScalingCommandOutput) => void): void;
    describeTimeBasedAutoScaling(args: DescribeTimeBasedAutoScalingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTimeBasedAutoScalingCommandOutput) => void): void;
    /**
     * <p>Describe specified users.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
     *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    describeUserProfiles(args: DescribeUserProfilesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserProfilesCommandOutput>;
    describeUserProfiles(args: DescribeUserProfilesCommandInput, cb: (err: any, data?: DescribeUserProfilesCommandOutput) => void): void;
    describeUserProfiles(args: DescribeUserProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserProfilesCommandOutput) => void): void;
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
    describeVolumes(args: DescribeVolumesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeVolumesCommandOutput>;
    describeVolumes(args: DescribeVolumesCommandInput, cb: (err: any, data?: DescribeVolumesCommandOutput) => void): void;
    describeVolumes(args: DescribeVolumesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeVolumesCommandOutput) => void): void;
    /**
     * <p>Detaches a specified Elastic Load Balancing instance from its layer.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    detachElasticLoadBalancer(args: DetachElasticLoadBalancerCommandInput, options?: __HttpHandlerOptions): Promise<DetachElasticLoadBalancerCommandOutput>;
    detachElasticLoadBalancer(args: DetachElasticLoadBalancerCommandInput, cb: (err: any, data?: DetachElasticLoadBalancerCommandOutput) => void): void;
    detachElasticLoadBalancer(args: DetachElasticLoadBalancerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachElasticLoadBalancerCommandOutput) => void): void;
    /**
     * <p>Disassociates an Elastic IP address from its instance. The address remains registered with
     *       the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    disassociateElasticIp(args: DisassociateElasticIpCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateElasticIpCommandOutput>;
    disassociateElasticIp(args: DisassociateElasticIpCommandInput, cb: (err: any, data?: DisassociateElasticIpCommandOutput) => void): void;
    disassociateElasticIp(args: DisassociateElasticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateElasticIpCommandOutput) => void): void;
    /**
     * <p>Gets a generated host name for the specified layer, based on the current host name theme.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    getHostnameSuggestion(args: GetHostnameSuggestionCommandInput, options?: __HttpHandlerOptions): Promise<GetHostnameSuggestionCommandOutput>;
    getHostnameSuggestion(args: GetHostnameSuggestionCommandInput, cb: (err: any, data?: GetHostnameSuggestionCommandOutput) => void): void;
    getHostnameSuggestion(args: GetHostnameSuggestionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetHostnameSuggestionCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action can be used only with Windows stacks.</p>
     *          </note>
     *          <p>Grants RDP access to a Windows instance for a specified time period.</p>
     */
    grantAccess(args: GrantAccessCommandInput, options?: __HttpHandlerOptions): Promise<GrantAccessCommandOutput>;
    grantAccess(args: GrantAccessCommandInput, cb: (err: any, data?: GrantAccessCommandOutput) => void): void;
    grantAccess(args: GrantAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GrantAccessCommandOutput) => void): void;
    /**
     * <p>Returns a list of tags that are applied to the specified stack or layer.</p>
     */
    listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
    listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    listTags(args: ListTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    /**
     * <p>Reboots a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting,
     *         Stopping, and Rebooting Instances</a>.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    rebootInstance(args: RebootInstanceCommandInput, options?: __HttpHandlerOptions): Promise<RebootInstanceCommandOutput>;
    rebootInstance(args: RebootInstanceCommandInput, cb: (err: any, data?: RebootInstanceCommandOutput) => void): void;
    rebootInstance(args: RebootInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootInstanceCommandOutput) => void): void;
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
    registerEcsCluster(args: RegisterEcsClusterCommandInput, options?: __HttpHandlerOptions): Promise<RegisterEcsClusterCommandOutput>;
    registerEcsCluster(args: RegisterEcsClusterCommandInput, cb: (err: any, data?: RegisterEcsClusterCommandOutput) => void): void;
    registerEcsCluster(args: RegisterEcsClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterEcsClusterCommandOutput) => void): void;
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
    registerElasticIp(args: RegisterElasticIpCommandInput, options?: __HttpHandlerOptions): Promise<RegisterElasticIpCommandOutput>;
    registerElasticIp(args: RegisterElasticIpCommandInput, cb: (err: any, data?: RegisterElasticIpCommandOutput) => void): void;
    registerElasticIp(args: RegisterElasticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterElasticIpCommandOutput) => void): void;
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
    registerInstance(args: RegisterInstanceCommandInput, options?: __HttpHandlerOptions): Promise<RegisterInstanceCommandOutput>;
    registerInstance(args: RegisterInstanceCommandInput, cb: (err: any, data?: RegisterInstanceCommandOutput) => void): void;
    registerInstance(args: RegisterInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterInstanceCommandOutput) => void): void;
    /**
     * <p>Registers an Amazon RDS instance with a stack.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    registerRdsDbInstance(args: RegisterRdsDbInstanceCommandInput, options?: __HttpHandlerOptions): Promise<RegisterRdsDbInstanceCommandOutput>;
    registerRdsDbInstance(args: RegisterRdsDbInstanceCommandInput, cb: (err: any, data?: RegisterRdsDbInstanceCommandOutput) => void): void;
    registerRdsDbInstance(args: RegisterRdsDbInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterRdsDbInstanceCommandOutput) => void): void;
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
    registerVolume(args: RegisterVolumeCommandInput, options?: __HttpHandlerOptions): Promise<RegisterVolumeCommandOutput>;
    registerVolume(args: RegisterVolumeCommandInput, cb: (err: any, data?: RegisterVolumeCommandOutput) => void): void;
    registerVolume(args: RegisterVolumeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterVolumeCommandOutput) => void): void;
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
    setLoadBasedAutoScaling(args: SetLoadBasedAutoScalingCommandInput, options?: __HttpHandlerOptions): Promise<SetLoadBasedAutoScalingCommandOutput>;
    setLoadBasedAutoScaling(args: SetLoadBasedAutoScalingCommandInput, cb: (err: any, data?: SetLoadBasedAutoScalingCommandOutput) => void): void;
    setLoadBasedAutoScaling(args: SetLoadBasedAutoScalingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetLoadBasedAutoScalingCommandOutput) => void): void;
    /**
     * <p>Specifies a user's permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and
     *         Permissions</a>.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    setPermission(args: SetPermissionCommandInput, options?: __HttpHandlerOptions): Promise<SetPermissionCommandOutput>;
    setPermission(args: SetPermissionCommandInput, cb: (err: any, data?: SetPermissionCommandOutput) => void): void;
    setPermission(args: SetPermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetPermissionCommandOutput) => void): void;
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
    setTimeBasedAutoScaling(args: SetTimeBasedAutoScalingCommandInput, options?: __HttpHandlerOptions): Promise<SetTimeBasedAutoScalingCommandOutput>;
    setTimeBasedAutoScaling(args: SetTimeBasedAutoScalingCommandInput, cb: (err: any, data?: SetTimeBasedAutoScalingCommandOutput) => void): void;
    setTimeBasedAutoScaling(args: SetTimeBasedAutoScalingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetTimeBasedAutoScalingCommandOutput) => void): void;
    /**
     * <p>Starts a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting,
     *         Stopping, and Rebooting Instances</a>.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    startInstance(args: StartInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StartInstanceCommandOutput>;
    startInstance(args: StartInstanceCommandInput, cb: (err: any, data?: StartInstanceCommandOutput) => void): void;
    startInstance(args: StartInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartInstanceCommandOutput) => void): void;
    /**
     * <p>Starts a stack's instances.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    startStack(args: StartStackCommandInput, options?: __HttpHandlerOptions): Promise<StartStackCommandOutput>;
    startStack(args: StartStackCommandInput, cb: (err: any, data?: StartStackCommandOutput) => void): void;
    startStack(args: StartStackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartStackCommandOutput) => void): void;
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
    stopInstance(args: StopInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StopInstanceCommandOutput>;
    stopInstance(args: StopInstanceCommandInput, cb: (err: any, data?: StopInstanceCommandOutput) => void): void;
    stopInstance(args: StopInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopInstanceCommandOutput) => void): void;
    /**
     * <p>Stops a specified stack.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    stopStack(args: StopStackCommandInput, options?: __HttpHandlerOptions): Promise<StopStackCommandOutput>;
    stopStack(args: StopStackCommandInput, cb: (err: any, data?: StopStackCommandOutput) => void): void;
    stopStack(args: StopStackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopStackCommandOutput) => void): void;
    /**
     * <p>Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/tagging.html">Tags</a> in the AWS OpsWorks User Guide.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
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
    unassignInstance(args: UnassignInstanceCommandInput, options?: __HttpHandlerOptions): Promise<UnassignInstanceCommandOutput>;
    unassignInstance(args: UnassignInstanceCommandInput, cb: (err: any, data?: UnassignInstanceCommandOutput) => void): void;
    unassignInstance(args: UnassignInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UnassignInstanceCommandOutput) => void): void;
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
    unassignVolume(args: UnassignVolumeCommandInput, options?: __HttpHandlerOptions): Promise<UnassignVolumeCommandOutput>;
    unassignVolume(args: UnassignVolumeCommandInput, cb: (err: any, data?: UnassignVolumeCommandOutput) => void): void;
    unassignVolume(args: UnassignVolumeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UnassignVolumeCommandOutput) => void): void;
    /**
     * <p>Removes tags from a specified stack or layer.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates a specified app.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage
     *       permissions level for the stack, or an attached policy that explicitly grants permissions. For
     *       more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    updateApp(args: UpdateAppCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAppCommandOutput>;
    updateApp(args: UpdateAppCommandInput, cb: (err: any, data?: UpdateAppCommandOutput) => void): void;
    updateApp(args: UpdateAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAppCommandOutput) => void): void;
    /**
     * <p>Updates a registered Elastic IP address's name. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    updateElasticIp(args: UpdateElasticIpCommandInput, options?: __HttpHandlerOptions): Promise<UpdateElasticIpCommandOutput>;
    updateElasticIp(args: UpdateElasticIpCommandInput, cb: (err: any, data?: UpdateElasticIpCommandOutput) => void): void;
    updateElasticIp(args: UpdateElasticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateElasticIpCommandOutput) => void): void;
    /**
     * <p>Updates a specified instance.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    updateInstance(args: UpdateInstanceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInstanceCommandOutput>;
    updateInstance(args: UpdateInstanceCommandInput, cb: (err: any, data?: UpdateInstanceCommandOutput) => void): void;
    updateInstance(args: UpdateInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateInstanceCommandOutput) => void): void;
    /**
     * <p>Updates a specified layer.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    updateLayer(args: UpdateLayerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLayerCommandOutput>;
    updateLayer(args: UpdateLayerCommandInput, cb: (err: any, data?: UpdateLayerCommandOutput) => void): void;
    updateLayer(args: UpdateLayerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLayerCommandOutput) => void): void;
    /**
     * <p>Updates a user's SSH public key.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have self-management
     *       enabled or an attached policy that explicitly grants permissions. For more information about user
     *       permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    updateMyUserProfile(args: UpdateMyUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMyUserProfileCommandOutput>;
    updateMyUserProfile(args: UpdateMyUserProfileCommandInput, cb: (err: any, data?: UpdateMyUserProfileCommandOutput) => void): void;
    updateMyUserProfile(args: UpdateMyUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMyUserProfileCommandOutput) => void): void;
    /**
     * <p>Updates an Amazon RDS instance.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    updateRdsDbInstance(args: UpdateRdsDbInstanceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRdsDbInstanceCommandOutput>;
    updateRdsDbInstance(args: UpdateRdsDbInstanceCommandInput, cb: (err: any, data?: UpdateRdsDbInstanceCommandOutput) => void): void;
    updateRdsDbInstance(args: UpdateRdsDbInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRdsDbInstanceCommandOutput) => void): void;
    /**
     * <p>Updates a specified stack.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    updateStack(args: UpdateStackCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStackCommandOutput>;
    updateStack(args: UpdateStackCommandInput, cb: (err: any, data?: UpdateStackCommandOutput) => void): void;
    updateStack(args: UpdateStackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateStackCommandOutput) => void): void;
    /**
     * <p>Updates a specified user profile.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
     *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    updateUserProfile(args: UpdateUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserProfileCommandOutput>;
    updateUserProfile(args: UpdateUserProfileCommandInput, cb: (err: any, data?: UpdateUserProfileCommandOutput) => void): void;
    updateUserProfile(args: UpdateUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserProfileCommandOutput) => void): void;
    /**
     * <p>Updates an Amazon EBS volume's name or mount point. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
     *          <p>
     *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
     *       level for the stack, or an attached policy that explicitly grants permissions. For more
     *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
     *         Permissions</a>.</p>
     */
    updateVolume(args: UpdateVolumeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVolumeCommandOutput>;
    updateVolume(args: UpdateVolumeCommandInput, cb: (err: any, data?: UpdateVolumeCommandOutput) => void): void;
    updateVolume(args: UpdateVolumeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateVolumeCommandOutput) => void): void;
}
