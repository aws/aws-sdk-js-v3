"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ElasticLoadBalancingClient_1 = require("./ElasticLoadBalancingClient");
const AddTagsCommand_1 = require("./commands/AddTagsCommand");
const ApplySecurityGroupsToLoadBalancerCommand_1 = require("./commands/ApplySecurityGroupsToLoadBalancerCommand");
const AttachLoadBalancerToSubnetsCommand_1 = require("./commands/AttachLoadBalancerToSubnetsCommand");
const ConfigureHealthCheckCommand_1 = require("./commands/ConfigureHealthCheckCommand");
const CreateAppCookieStickinessPolicyCommand_1 = require("./commands/CreateAppCookieStickinessPolicyCommand");
const CreateLBCookieStickinessPolicyCommand_1 = require("./commands/CreateLBCookieStickinessPolicyCommand");
const CreateLoadBalancerCommand_1 = require("./commands/CreateLoadBalancerCommand");
const CreateLoadBalancerListenersCommand_1 = require("./commands/CreateLoadBalancerListenersCommand");
const CreateLoadBalancerPolicyCommand_1 = require("./commands/CreateLoadBalancerPolicyCommand");
const DeleteLoadBalancerCommand_1 = require("./commands/DeleteLoadBalancerCommand");
const DeleteLoadBalancerListenersCommand_1 = require("./commands/DeleteLoadBalancerListenersCommand");
const DeleteLoadBalancerPolicyCommand_1 = require("./commands/DeleteLoadBalancerPolicyCommand");
const DeregisterInstancesFromLoadBalancerCommand_1 = require("./commands/DeregisterInstancesFromLoadBalancerCommand");
const DescribeAccountLimitsCommand_1 = require("./commands/DescribeAccountLimitsCommand");
const DescribeInstanceHealthCommand_1 = require("./commands/DescribeInstanceHealthCommand");
const DescribeLoadBalancerAttributesCommand_1 = require("./commands/DescribeLoadBalancerAttributesCommand");
const DescribeLoadBalancerPoliciesCommand_1 = require("./commands/DescribeLoadBalancerPoliciesCommand");
const DescribeLoadBalancerPolicyTypesCommand_1 = require("./commands/DescribeLoadBalancerPolicyTypesCommand");
const DescribeLoadBalancersCommand_1 = require("./commands/DescribeLoadBalancersCommand");
const DescribeTagsCommand_1 = require("./commands/DescribeTagsCommand");
const DetachLoadBalancerFromSubnetsCommand_1 = require("./commands/DetachLoadBalancerFromSubnetsCommand");
const DisableAvailabilityZonesForLoadBalancerCommand_1 = require("./commands/DisableAvailabilityZonesForLoadBalancerCommand");
const EnableAvailabilityZonesForLoadBalancerCommand_1 = require("./commands/EnableAvailabilityZonesForLoadBalancerCommand");
const ModifyLoadBalancerAttributesCommand_1 = require("./commands/ModifyLoadBalancerAttributesCommand");
const RegisterInstancesWithLoadBalancerCommand_1 = require("./commands/RegisterInstancesWithLoadBalancerCommand");
const RemoveTagsCommand_1 = require("./commands/RemoveTagsCommand");
const SetLoadBalancerListenerSSLCertificateCommand_1 = require("./commands/SetLoadBalancerListenerSSLCertificateCommand");
const SetLoadBalancerPoliciesForBackendServerCommand_1 = require("./commands/SetLoadBalancerPoliciesForBackendServerCommand");
const SetLoadBalancerPoliciesOfListenerCommand_1 = require("./commands/SetLoadBalancerPoliciesOfListenerCommand");
/**
 * <fullname>Elastic Load Balancing</fullname>
 *
 *         <p>A load balancer can distribute incoming traffic across your EC2 instances.
 *             This enables you to increase the availability of your application. The load balancer
 *             also monitors the health of its registered instances and ensures that it routes traffic
 *             only to healthy instances. You configure your load balancer to accept incoming traffic
 *             by specifying one or more listeners, which are configured with a protocol and port
 *             number for connections from clients to the load balancer and a protocol and port number
 *             for connections from the load balancer to the instances.</p>
 *         <p>Elastic Load Balancing supports three types of load balancers: Application Load Balancers, Network Load Balancers,
 *             and Classic Load Balancers. You can select a load balancer based on your application needs. For more
 *             information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p>
 *         <p>This reference covers the 2012-06-01 API, which supports Classic Load Balancers.
 *             The 2015-12-01 API supports Application Load Balancers and Network Load Balancers.</p>
 *
 *         <p>To get started, create a load balancer with one or more listeners using <a>CreateLoadBalancer</a>.
 *             Register your instances with the load balancer using <a>RegisterInstancesWithLoadBalancer</a>.</p>
 *
 *         <p>All Elastic Load Balancing operations are <i>idempotent</i>, which means
 *             that they complete at most one time. If you repeat an operation, it succeeds with a 200 OK
 *             response code.</p>
 */
class ElasticLoadBalancing extends ElasticLoadBalancingClient_1.ElasticLoadBalancingClient {
    addTags(args, optionsOrCb, cb) {
        const command = new AddTagsCommand_1.AddTagsCommand(args);
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
    applySecurityGroupsToLoadBalancer(args, optionsOrCb, cb) {
        const command = new ApplySecurityGroupsToLoadBalancerCommand_1.ApplySecurityGroupsToLoadBalancerCommand(args);
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
    attachLoadBalancerToSubnets(args, optionsOrCb, cb) {
        const command = new AttachLoadBalancerToSubnetsCommand_1.AttachLoadBalancerToSubnetsCommand(args);
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
    configureHealthCheck(args, optionsOrCb, cb) {
        const command = new ConfigureHealthCheckCommand_1.ConfigureHealthCheckCommand(args);
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
    createAppCookieStickinessPolicy(args, optionsOrCb, cb) {
        const command = new CreateAppCookieStickinessPolicyCommand_1.CreateAppCookieStickinessPolicyCommand(args);
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
    createLBCookieStickinessPolicy(args, optionsOrCb, cb) {
        const command = new CreateLBCookieStickinessPolicyCommand_1.CreateLBCookieStickinessPolicyCommand(args);
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
    createLoadBalancer(args, optionsOrCb, cb) {
        const command = new CreateLoadBalancerCommand_1.CreateLoadBalancerCommand(args);
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
    createLoadBalancerListeners(args, optionsOrCb, cb) {
        const command = new CreateLoadBalancerListenersCommand_1.CreateLoadBalancerListenersCommand(args);
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
    createLoadBalancerPolicy(args, optionsOrCb, cb) {
        const command = new CreateLoadBalancerPolicyCommand_1.CreateLoadBalancerPolicyCommand(args);
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
    deleteLoadBalancer(args, optionsOrCb, cb) {
        const command = new DeleteLoadBalancerCommand_1.DeleteLoadBalancerCommand(args);
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
    deleteLoadBalancerListeners(args, optionsOrCb, cb) {
        const command = new DeleteLoadBalancerListenersCommand_1.DeleteLoadBalancerListenersCommand(args);
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
    deleteLoadBalancerPolicy(args, optionsOrCb, cb) {
        const command = new DeleteLoadBalancerPolicyCommand_1.DeleteLoadBalancerPolicyCommand(args);
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
    deregisterInstancesFromLoadBalancer(args, optionsOrCb, cb) {
        const command = new DeregisterInstancesFromLoadBalancerCommand_1.DeregisterInstancesFromLoadBalancerCommand(args);
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
    describeAccountLimits(args, optionsOrCb, cb) {
        const command = new DescribeAccountLimitsCommand_1.DescribeAccountLimitsCommand(args);
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
    describeInstanceHealth(args, optionsOrCb, cb) {
        const command = new DescribeInstanceHealthCommand_1.DescribeInstanceHealthCommand(args);
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
    describeLoadBalancerAttributes(args, optionsOrCb, cb) {
        const command = new DescribeLoadBalancerAttributesCommand_1.DescribeLoadBalancerAttributesCommand(args);
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
    describeLoadBalancerPolicies(args, optionsOrCb, cb) {
        const command = new DescribeLoadBalancerPoliciesCommand_1.DescribeLoadBalancerPoliciesCommand(args);
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
    describeLoadBalancerPolicyTypes(args, optionsOrCb, cb) {
        const command = new DescribeLoadBalancerPolicyTypesCommand_1.DescribeLoadBalancerPolicyTypesCommand(args);
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
    describeLoadBalancers(args, optionsOrCb, cb) {
        const command = new DescribeLoadBalancersCommand_1.DescribeLoadBalancersCommand(args);
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
    describeTags(args, optionsOrCb, cb) {
        const command = new DescribeTagsCommand_1.DescribeTagsCommand(args);
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
    detachLoadBalancerFromSubnets(args, optionsOrCb, cb) {
        const command = new DetachLoadBalancerFromSubnetsCommand_1.DetachLoadBalancerFromSubnetsCommand(args);
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
    disableAvailabilityZonesForLoadBalancer(args, optionsOrCb, cb) {
        const command = new DisableAvailabilityZonesForLoadBalancerCommand_1.DisableAvailabilityZonesForLoadBalancerCommand(args);
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
    enableAvailabilityZonesForLoadBalancer(args, optionsOrCb, cb) {
        const command = new EnableAvailabilityZonesForLoadBalancerCommand_1.EnableAvailabilityZonesForLoadBalancerCommand(args);
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
    modifyLoadBalancerAttributes(args, optionsOrCb, cb) {
        const command = new ModifyLoadBalancerAttributesCommand_1.ModifyLoadBalancerAttributesCommand(args);
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
    registerInstancesWithLoadBalancer(args, optionsOrCb, cb) {
        const command = new RegisterInstancesWithLoadBalancerCommand_1.RegisterInstancesWithLoadBalancerCommand(args);
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
    removeTags(args, optionsOrCb, cb) {
        const command = new RemoveTagsCommand_1.RemoveTagsCommand(args);
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
    setLoadBalancerListenerSSLCertificate(args, optionsOrCb, cb) {
        const command = new SetLoadBalancerListenerSSLCertificateCommand_1.SetLoadBalancerListenerSSLCertificateCommand(args);
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
    setLoadBalancerPoliciesForBackendServer(args, optionsOrCb, cb) {
        const command = new SetLoadBalancerPoliciesForBackendServerCommand_1.SetLoadBalancerPoliciesForBackendServerCommand(args);
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
    setLoadBalancerPoliciesOfListener(args, optionsOrCb, cb) {
        const command = new SetLoadBalancerPoliciesOfListenerCommand_1.SetLoadBalancerPoliciesOfListenerCommand(args);
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
exports.ElasticLoadBalancing = ElasticLoadBalancing;
//# sourceMappingURL=ElasticLoadBalancing.js.map