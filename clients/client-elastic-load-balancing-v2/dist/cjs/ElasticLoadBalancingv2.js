"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ElasticLoadBalancingv2Client_1 = require("./ElasticLoadBalancingv2Client");
const AddListenerCertificatesCommand_1 = require("./commands/AddListenerCertificatesCommand");
const AddTagsCommand_1 = require("./commands/AddTagsCommand");
const CreateListenerCommand_1 = require("./commands/CreateListenerCommand");
const CreateLoadBalancerCommand_1 = require("./commands/CreateLoadBalancerCommand");
const CreateRuleCommand_1 = require("./commands/CreateRuleCommand");
const CreateTargetGroupCommand_1 = require("./commands/CreateTargetGroupCommand");
const DeleteListenerCommand_1 = require("./commands/DeleteListenerCommand");
const DeleteLoadBalancerCommand_1 = require("./commands/DeleteLoadBalancerCommand");
const DeleteRuleCommand_1 = require("./commands/DeleteRuleCommand");
const DeleteTargetGroupCommand_1 = require("./commands/DeleteTargetGroupCommand");
const DeregisterTargetsCommand_1 = require("./commands/DeregisterTargetsCommand");
const DescribeAccountLimitsCommand_1 = require("./commands/DescribeAccountLimitsCommand");
const DescribeListenerCertificatesCommand_1 = require("./commands/DescribeListenerCertificatesCommand");
const DescribeListenersCommand_1 = require("./commands/DescribeListenersCommand");
const DescribeLoadBalancerAttributesCommand_1 = require("./commands/DescribeLoadBalancerAttributesCommand");
const DescribeLoadBalancersCommand_1 = require("./commands/DescribeLoadBalancersCommand");
const DescribeRulesCommand_1 = require("./commands/DescribeRulesCommand");
const DescribeSSLPoliciesCommand_1 = require("./commands/DescribeSSLPoliciesCommand");
const DescribeTagsCommand_1 = require("./commands/DescribeTagsCommand");
const DescribeTargetGroupAttributesCommand_1 = require("./commands/DescribeTargetGroupAttributesCommand");
const DescribeTargetGroupsCommand_1 = require("./commands/DescribeTargetGroupsCommand");
const DescribeTargetHealthCommand_1 = require("./commands/DescribeTargetHealthCommand");
const ModifyListenerCommand_1 = require("./commands/ModifyListenerCommand");
const ModifyLoadBalancerAttributesCommand_1 = require("./commands/ModifyLoadBalancerAttributesCommand");
const ModifyRuleCommand_1 = require("./commands/ModifyRuleCommand");
const ModifyTargetGroupAttributesCommand_1 = require("./commands/ModifyTargetGroupAttributesCommand");
const ModifyTargetGroupCommand_1 = require("./commands/ModifyTargetGroupCommand");
const RegisterTargetsCommand_1 = require("./commands/RegisterTargetsCommand");
const RemoveListenerCertificatesCommand_1 = require("./commands/RemoveListenerCertificatesCommand");
const RemoveTagsCommand_1 = require("./commands/RemoveTagsCommand");
const SetIpAddressTypeCommand_1 = require("./commands/SetIpAddressTypeCommand");
const SetRulePrioritiesCommand_1 = require("./commands/SetRulePrioritiesCommand");
const SetSecurityGroupsCommand_1 = require("./commands/SetSecurityGroupsCommand");
const SetSubnetsCommand_1 = require("./commands/SetSubnetsCommand");
/**
 * <fullname>Elastic Load Balancing</fullname>
 *
 *          <p>A load balancer distributes incoming traffic across targets, such as your EC2
 *       instances. This enables you to increase the availability of your application. The load
 *       balancer also monitors the health of its registered targets and ensures that it routes traffic
 *       only to healthy targets. You configure your load balancer to accept incoming traffic by
 *       specifying one or more listeners, which are configured with a protocol and port number for
 *       connections from clients to the load balancer. You configure a target group with a protocol
 *       and port number for connections from the load balancer to the targets, and with health check
 *       settings to be used when checking the health status of the targets.</p>
 *
 *          <p>Elastic Load Balancing supports the following types of load balancers: Application Load
 *       Balancers, Network Load Balancers, and Classic Load Balancers. This reference covers
 *       Application Load Balancers and Network Load Balancers.</p>
 *          <p>An Application Load Balancer makes routing and load balancing decisions at the
 *       application layer (HTTP/HTTPS). A Network Load Balancer makes routing and load balancing
 *       decisions at the transport layer (TCP/TLS). Both Application Load Balancers and Network Load
 *       Balancers can route requests to one or more ports on each EC2 instance or container instance
 *       in your virtual private cloud (VPC). For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User
 *       Guide</a>.</p>
 *
 *
 *
 *
 *
 *
 *
 *          <p>All Elastic Load Balancing operations are idempotent, which means that they complete at
 *       most one time. If you repeat an operation, it succeeds.</p>
 */
class ElasticLoadBalancingv2 extends ElasticLoadBalancingv2Client_1.ElasticLoadBalancingv2Client {
    addListenerCertificates(args, optionsOrCb, cb) {
        const command = new AddListenerCertificatesCommand_1.AddListenerCertificatesCommand(args);
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
    createListener(args, optionsOrCb, cb) {
        const command = new CreateListenerCommand_1.CreateListenerCommand(args);
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
    createRule(args, optionsOrCb, cb) {
        const command = new CreateRuleCommand_1.CreateRuleCommand(args);
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
    createTargetGroup(args, optionsOrCb, cb) {
        const command = new CreateTargetGroupCommand_1.CreateTargetGroupCommand(args);
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
    deleteListener(args, optionsOrCb, cb) {
        const command = new DeleteListenerCommand_1.DeleteListenerCommand(args);
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
    deleteRule(args, optionsOrCb, cb) {
        const command = new DeleteRuleCommand_1.DeleteRuleCommand(args);
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
    deleteTargetGroup(args, optionsOrCb, cb) {
        const command = new DeleteTargetGroupCommand_1.DeleteTargetGroupCommand(args);
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
    deregisterTargets(args, optionsOrCb, cb) {
        const command = new DeregisterTargetsCommand_1.DeregisterTargetsCommand(args);
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
    describeListenerCertificates(args, optionsOrCb, cb) {
        const command = new DescribeListenerCertificatesCommand_1.DescribeListenerCertificatesCommand(args);
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
    describeListeners(args, optionsOrCb, cb) {
        const command = new DescribeListenersCommand_1.DescribeListenersCommand(args);
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
    describeRules(args, optionsOrCb, cb) {
        const command = new DescribeRulesCommand_1.DescribeRulesCommand(args);
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
    describeSSLPolicies(args, optionsOrCb, cb) {
        const command = new DescribeSSLPoliciesCommand_1.DescribeSSLPoliciesCommand(args);
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
    describeTargetGroupAttributes(args, optionsOrCb, cb) {
        const command = new DescribeTargetGroupAttributesCommand_1.DescribeTargetGroupAttributesCommand(args);
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
    describeTargetGroups(args, optionsOrCb, cb) {
        const command = new DescribeTargetGroupsCommand_1.DescribeTargetGroupsCommand(args);
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
    describeTargetHealth(args, optionsOrCb, cb) {
        const command = new DescribeTargetHealthCommand_1.DescribeTargetHealthCommand(args);
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
    modifyListener(args, optionsOrCb, cb) {
        const command = new ModifyListenerCommand_1.ModifyListenerCommand(args);
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
    modifyRule(args, optionsOrCb, cb) {
        const command = new ModifyRuleCommand_1.ModifyRuleCommand(args);
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
    modifyTargetGroup(args, optionsOrCb, cb) {
        const command = new ModifyTargetGroupCommand_1.ModifyTargetGroupCommand(args);
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
    modifyTargetGroupAttributes(args, optionsOrCb, cb) {
        const command = new ModifyTargetGroupAttributesCommand_1.ModifyTargetGroupAttributesCommand(args);
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
    registerTargets(args, optionsOrCb, cb) {
        const command = new RegisterTargetsCommand_1.RegisterTargetsCommand(args);
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
    removeListenerCertificates(args, optionsOrCb, cb) {
        const command = new RemoveListenerCertificatesCommand_1.RemoveListenerCertificatesCommand(args);
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
    setIpAddressType(args, optionsOrCb, cb) {
        const command = new SetIpAddressTypeCommand_1.SetIpAddressTypeCommand(args);
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
    setRulePriorities(args, optionsOrCb, cb) {
        const command = new SetRulePrioritiesCommand_1.SetRulePrioritiesCommand(args);
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
    setSecurityGroups(args, optionsOrCb, cb) {
        const command = new SetSecurityGroupsCommand_1.SetSecurityGroupsCommand(args);
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
    setSubnets(args, optionsOrCb, cb) {
        const command = new SetSubnetsCommand_1.SetSubnetsCommand(args);
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
exports.ElasticLoadBalancingv2 = ElasticLoadBalancingv2;
//# sourceMappingURL=ElasticLoadBalancingv2.js.map