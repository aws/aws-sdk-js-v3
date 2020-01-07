"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OpsWorksClient_1 = require("./OpsWorksClient");
const AssignInstanceCommand_1 = require("./commands/AssignInstanceCommand");
const AssignVolumeCommand_1 = require("./commands/AssignVolumeCommand");
const AssociateElasticIpCommand_1 = require("./commands/AssociateElasticIpCommand");
const AttachElasticLoadBalancerCommand_1 = require("./commands/AttachElasticLoadBalancerCommand");
const CloneStackCommand_1 = require("./commands/CloneStackCommand");
const CreateAppCommand_1 = require("./commands/CreateAppCommand");
const CreateDeploymentCommand_1 = require("./commands/CreateDeploymentCommand");
const CreateInstanceCommand_1 = require("./commands/CreateInstanceCommand");
const CreateLayerCommand_1 = require("./commands/CreateLayerCommand");
const CreateStackCommand_1 = require("./commands/CreateStackCommand");
const CreateUserProfileCommand_1 = require("./commands/CreateUserProfileCommand");
const DeleteAppCommand_1 = require("./commands/DeleteAppCommand");
const DeleteInstanceCommand_1 = require("./commands/DeleteInstanceCommand");
const DeleteLayerCommand_1 = require("./commands/DeleteLayerCommand");
const DeleteStackCommand_1 = require("./commands/DeleteStackCommand");
const DeleteUserProfileCommand_1 = require("./commands/DeleteUserProfileCommand");
const DeregisterEcsClusterCommand_1 = require("./commands/DeregisterEcsClusterCommand");
const DeregisterElasticIpCommand_1 = require("./commands/DeregisterElasticIpCommand");
const DeregisterInstanceCommand_1 = require("./commands/DeregisterInstanceCommand");
const DeregisterRdsDbInstanceCommand_1 = require("./commands/DeregisterRdsDbInstanceCommand");
const DeregisterVolumeCommand_1 = require("./commands/DeregisterVolumeCommand");
const DescribeAgentVersionsCommand_1 = require("./commands/DescribeAgentVersionsCommand");
const DescribeAppsCommand_1 = require("./commands/DescribeAppsCommand");
const DescribeCommandsCommand_1 = require("./commands/DescribeCommandsCommand");
const DescribeDeploymentsCommand_1 = require("./commands/DescribeDeploymentsCommand");
const DescribeEcsClustersCommand_1 = require("./commands/DescribeEcsClustersCommand");
const DescribeElasticIpsCommand_1 = require("./commands/DescribeElasticIpsCommand");
const DescribeElasticLoadBalancersCommand_1 = require("./commands/DescribeElasticLoadBalancersCommand");
const DescribeInstancesCommand_1 = require("./commands/DescribeInstancesCommand");
const DescribeLayersCommand_1 = require("./commands/DescribeLayersCommand");
const DescribeLoadBasedAutoScalingCommand_1 = require("./commands/DescribeLoadBasedAutoScalingCommand");
const DescribeMyUserProfileCommand_1 = require("./commands/DescribeMyUserProfileCommand");
const DescribeOperatingSystemsCommand_1 = require("./commands/DescribeOperatingSystemsCommand");
const DescribePermissionsCommand_1 = require("./commands/DescribePermissionsCommand");
const DescribeRaidArraysCommand_1 = require("./commands/DescribeRaidArraysCommand");
const DescribeRdsDbInstancesCommand_1 = require("./commands/DescribeRdsDbInstancesCommand");
const DescribeServiceErrorsCommand_1 = require("./commands/DescribeServiceErrorsCommand");
const DescribeStackProvisioningParametersCommand_1 = require("./commands/DescribeStackProvisioningParametersCommand");
const DescribeStackSummaryCommand_1 = require("./commands/DescribeStackSummaryCommand");
const DescribeStacksCommand_1 = require("./commands/DescribeStacksCommand");
const DescribeTimeBasedAutoScalingCommand_1 = require("./commands/DescribeTimeBasedAutoScalingCommand");
const DescribeUserProfilesCommand_1 = require("./commands/DescribeUserProfilesCommand");
const DescribeVolumesCommand_1 = require("./commands/DescribeVolumesCommand");
const DetachElasticLoadBalancerCommand_1 = require("./commands/DetachElasticLoadBalancerCommand");
const DisassociateElasticIpCommand_1 = require("./commands/DisassociateElasticIpCommand");
const GetHostnameSuggestionCommand_1 = require("./commands/GetHostnameSuggestionCommand");
const GrantAccessCommand_1 = require("./commands/GrantAccessCommand");
const ListTagsCommand_1 = require("./commands/ListTagsCommand");
const RebootInstanceCommand_1 = require("./commands/RebootInstanceCommand");
const RegisterEcsClusterCommand_1 = require("./commands/RegisterEcsClusterCommand");
const RegisterElasticIpCommand_1 = require("./commands/RegisterElasticIpCommand");
const RegisterInstanceCommand_1 = require("./commands/RegisterInstanceCommand");
const RegisterRdsDbInstanceCommand_1 = require("./commands/RegisterRdsDbInstanceCommand");
const RegisterVolumeCommand_1 = require("./commands/RegisterVolumeCommand");
const SetLoadBasedAutoScalingCommand_1 = require("./commands/SetLoadBasedAutoScalingCommand");
const SetPermissionCommand_1 = require("./commands/SetPermissionCommand");
const SetTimeBasedAutoScalingCommand_1 = require("./commands/SetTimeBasedAutoScalingCommand");
const StartInstanceCommand_1 = require("./commands/StartInstanceCommand");
const StartStackCommand_1 = require("./commands/StartStackCommand");
const StopInstanceCommand_1 = require("./commands/StopInstanceCommand");
const StopStackCommand_1 = require("./commands/StopStackCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UnassignInstanceCommand_1 = require("./commands/UnassignInstanceCommand");
const UnassignVolumeCommand_1 = require("./commands/UnassignVolumeCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAppCommand_1 = require("./commands/UpdateAppCommand");
const UpdateElasticIpCommand_1 = require("./commands/UpdateElasticIpCommand");
const UpdateInstanceCommand_1 = require("./commands/UpdateInstanceCommand");
const UpdateLayerCommand_1 = require("./commands/UpdateLayerCommand");
const UpdateMyUserProfileCommand_1 = require("./commands/UpdateMyUserProfileCommand");
const UpdateRdsDbInstanceCommand_1 = require("./commands/UpdateRdsDbInstanceCommand");
const UpdateStackCommand_1 = require("./commands/UpdateStackCommand");
const UpdateUserProfileCommand_1 = require("./commands/UpdateUserProfileCommand");
const UpdateVolumeCommand_1 = require("./commands/UpdateVolumeCommand");
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
class OpsWorks extends OpsWorksClient_1.OpsWorksClient {
    assignInstance(args, optionsOrCb, cb) {
        const command = new AssignInstanceCommand_1.AssignInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    assignVolume(args, optionsOrCb, cb) {
        const command = new AssignVolumeCommand_1.AssignVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateElasticIp(args, optionsOrCb, cb) {
        const command = new AssociateElasticIpCommand_1.AssociateElasticIpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    attachElasticLoadBalancer(args, optionsOrCb, cb) {
        const command = new AttachElasticLoadBalancerCommand_1.AttachElasticLoadBalancerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cloneStack(args, optionsOrCb, cb) {
        const command = new CloneStackCommand_1.CloneStackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createApp(args, optionsOrCb, cb) {
        const command = new CreateAppCommand_1.CreateAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDeployment(args, optionsOrCb, cb) {
        const command = new CreateDeploymentCommand_1.CreateDeploymentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createInstance(args, optionsOrCb, cb) {
        const command = new CreateInstanceCommand_1.CreateInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createLayer(args, optionsOrCb, cb) {
        const command = new CreateLayerCommand_1.CreateLayerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createStack(args, optionsOrCb, cb) {
        const command = new CreateStackCommand_1.CreateStackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createUserProfile(args, optionsOrCb, cb) {
        const command = new CreateUserProfileCommand_1.CreateUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteApp(args, optionsOrCb, cb) {
        const command = new DeleteAppCommand_1.DeleteAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteInstance(args, optionsOrCb, cb) {
        const command = new DeleteInstanceCommand_1.DeleteInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteLayer(args, optionsOrCb, cb) {
        const command = new DeleteLayerCommand_1.DeleteLayerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteStack(args, optionsOrCb, cb) {
        const command = new DeleteStackCommand_1.DeleteStackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteUserProfile(args, optionsOrCb, cb) {
        const command = new DeleteUserProfileCommand_1.DeleteUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterEcsCluster(args, optionsOrCb, cb) {
        const command = new DeregisterEcsClusterCommand_1.DeregisterEcsClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterElasticIp(args, optionsOrCb, cb) {
        const command = new DeregisterElasticIpCommand_1.DeregisterElasticIpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterInstance(args, optionsOrCb, cb) {
        const command = new DeregisterInstanceCommand_1.DeregisterInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterRdsDbInstance(args, optionsOrCb, cb) {
        const command = new DeregisterRdsDbInstanceCommand_1.DeregisterRdsDbInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterVolume(args, optionsOrCb, cb) {
        const command = new DeregisterVolumeCommand_1.DeregisterVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAgentVersions(args, optionsOrCb, cb) {
        const command = new DescribeAgentVersionsCommand_1.DescribeAgentVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeApps(args, optionsOrCb, cb) {
        const command = new DescribeAppsCommand_1.DescribeAppsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCommands(args, optionsOrCb, cb) {
        const command = new DescribeCommandsCommand_1.DescribeCommandsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDeployments(args, optionsOrCb, cb) {
        const command = new DescribeDeploymentsCommand_1.DescribeDeploymentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEcsClusters(args, optionsOrCb, cb) {
        const command = new DescribeEcsClustersCommand_1.DescribeEcsClustersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeElasticIps(args, optionsOrCb, cb) {
        const command = new DescribeElasticIpsCommand_1.DescribeElasticIpsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeElasticLoadBalancers(args, optionsOrCb, cb) {
        const command = new DescribeElasticLoadBalancersCommand_1.DescribeElasticLoadBalancersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstances(args, optionsOrCb, cb) {
        const command = new DescribeInstancesCommand_1.DescribeInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLayers(args, optionsOrCb, cb) {
        const command = new DescribeLayersCommand_1.DescribeLayersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLoadBasedAutoScaling(args, optionsOrCb, cb) {
        const command = new DescribeLoadBasedAutoScalingCommand_1.DescribeLoadBasedAutoScalingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMyUserProfile(args, optionsOrCb, cb) {
        const command = new DescribeMyUserProfileCommand_1.DescribeMyUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeOperatingSystems(args, optionsOrCb, cb) {
        const command = new DescribeOperatingSystemsCommand_1.DescribeOperatingSystemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePermissions(args, optionsOrCb, cb) {
        const command = new DescribePermissionsCommand_1.DescribePermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeRaidArrays(args, optionsOrCb, cb) {
        const command = new DescribeRaidArraysCommand_1.DescribeRaidArraysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeRdsDbInstances(args, optionsOrCb, cb) {
        const command = new DescribeRdsDbInstancesCommand_1.DescribeRdsDbInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeServiceErrors(args, optionsOrCb, cb) {
        const command = new DescribeServiceErrorsCommand_1.DescribeServiceErrorsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeStackProvisioningParameters(args, optionsOrCb, cb) {
        const command = new DescribeStackProvisioningParametersCommand_1.DescribeStackProvisioningParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeStackSummary(args, optionsOrCb, cb) {
        const command = new DescribeStackSummaryCommand_1.DescribeStackSummaryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeStacks(args, optionsOrCb, cb) {
        const command = new DescribeStacksCommand_1.DescribeStacksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTimeBasedAutoScaling(args, optionsOrCb, cb) {
        const command = new DescribeTimeBasedAutoScalingCommand_1.DescribeTimeBasedAutoScalingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeUserProfiles(args, optionsOrCb, cb) {
        const command = new DescribeUserProfilesCommand_1.DescribeUserProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVolumes(args, optionsOrCb, cb) {
        const command = new DescribeVolumesCommand_1.DescribeVolumesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    detachElasticLoadBalancer(args, optionsOrCb, cb) {
        const command = new DetachElasticLoadBalancerCommand_1.DetachElasticLoadBalancerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateElasticIp(args, optionsOrCb, cb) {
        const command = new DisassociateElasticIpCommand_1.DisassociateElasticIpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getHostnameSuggestion(args, optionsOrCb, cb) {
        const command = new GetHostnameSuggestionCommand_1.GetHostnameSuggestionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    grantAccess(args, optionsOrCb, cb) {
        const command = new GrantAccessCommand_1.GrantAccessCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTags(args, optionsOrCb, cb) {
        const command = new ListTagsCommand_1.ListTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    rebootInstance(args, optionsOrCb, cb) {
        const command = new RebootInstanceCommand_1.RebootInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerEcsCluster(args, optionsOrCb, cb) {
        const command = new RegisterEcsClusterCommand_1.RegisterEcsClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerElasticIp(args, optionsOrCb, cb) {
        const command = new RegisterElasticIpCommand_1.RegisterElasticIpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerInstance(args, optionsOrCb, cb) {
        const command = new RegisterInstanceCommand_1.RegisterInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerRdsDbInstance(args, optionsOrCb, cb) {
        const command = new RegisterRdsDbInstanceCommand_1.RegisterRdsDbInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerVolume(args, optionsOrCb, cb) {
        const command = new RegisterVolumeCommand_1.RegisterVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setLoadBasedAutoScaling(args, optionsOrCb, cb) {
        const command = new SetLoadBasedAutoScalingCommand_1.SetLoadBasedAutoScalingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setPermission(args, optionsOrCb, cb) {
        const command = new SetPermissionCommand_1.SetPermissionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setTimeBasedAutoScaling(args, optionsOrCb, cb) {
        const command = new SetTimeBasedAutoScalingCommand_1.SetTimeBasedAutoScalingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startInstance(args, optionsOrCb, cb) {
        const command = new StartInstanceCommand_1.StartInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startStack(args, optionsOrCb, cb) {
        const command = new StartStackCommand_1.StartStackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopInstance(args, optionsOrCb, cb) {
        const command = new StopInstanceCommand_1.StopInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopStack(args, optionsOrCb, cb) {
        const command = new StopStackCommand_1.StopStackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    unassignInstance(args, optionsOrCb, cb) {
        const command = new UnassignInstanceCommand_1.UnassignInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    unassignVolume(args, optionsOrCb, cb) {
        const command = new UnassignVolumeCommand_1.UnassignVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateApp(args, optionsOrCb, cb) {
        const command = new UpdateAppCommand_1.UpdateAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateElasticIp(args, optionsOrCb, cb) {
        const command = new UpdateElasticIpCommand_1.UpdateElasticIpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateInstance(args, optionsOrCb, cb) {
        const command = new UpdateInstanceCommand_1.UpdateInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateLayer(args, optionsOrCb, cb) {
        const command = new UpdateLayerCommand_1.UpdateLayerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateMyUserProfile(args, optionsOrCb, cb) {
        const command = new UpdateMyUserProfileCommand_1.UpdateMyUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateRdsDbInstance(args, optionsOrCb, cb) {
        const command = new UpdateRdsDbInstanceCommand_1.UpdateRdsDbInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateStack(args, optionsOrCb, cb) {
        const command = new UpdateStackCommand_1.UpdateStackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUserProfile(args, optionsOrCb, cb) {
        const command = new UpdateUserProfileCommand_1.UpdateUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateVolume(args, optionsOrCb, cb) {
        const command = new UpdateVolumeCommand_1.UpdateVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.OpsWorks = OpsWorks;
//# sourceMappingURL=OpsWorks.js.map