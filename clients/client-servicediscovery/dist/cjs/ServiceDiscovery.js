"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceDiscoveryClient_1 = require("./ServiceDiscoveryClient");
const CreateHttpNamespaceCommand_1 = require("./commands/CreateHttpNamespaceCommand");
const CreatePrivateDnsNamespaceCommand_1 = require("./commands/CreatePrivateDnsNamespaceCommand");
const CreatePublicDnsNamespaceCommand_1 = require("./commands/CreatePublicDnsNamespaceCommand");
const CreateServiceCommand_1 = require("./commands/CreateServiceCommand");
const DeleteNamespaceCommand_1 = require("./commands/DeleteNamespaceCommand");
const DeleteServiceCommand_1 = require("./commands/DeleteServiceCommand");
const DeregisterInstanceCommand_1 = require("./commands/DeregisterInstanceCommand");
const DiscoverInstancesCommand_1 = require("./commands/DiscoverInstancesCommand");
const GetInstanceCommand_1 = require("./commands/GetInstanceCommand");
const GetInstancesHealthStatusCommand_1 = require("./commands/GetInstancesHealthStatusCommand");
const GetNamespaceCommand_1 = require("./commands/GetNamespaceCommand");
const GetOperationCommand_1 = require("./commands/GetOperationCommand");
const GetServiceCommand_1 = require("./commands/GetServiceCommand");
const ListInstancesCommand_1 = require("./commands/ListInstancesCommand");
const ListNamespacesCommand_1 = require("./commands/ListNamespacesCommand");
const ListOperationsCommand_1 = require("./commands/ListOperationsCommand");
const ListServicesCommand_1 = require("./commands/ListServicesCommand");
const RegisterInstanceCommand_1 = require("./commands/RegisterInstanceCommand");
const UpdateInstanceCustomHealthStatusCommand_1 = require("./commands/UpdateInstanceCustomHealthStatusCommand");
const UpdateServiceCommand_1 = require("./commands/UpdateServiceCommand");
/**
 * <p>AWS Cloud Map lets you configure public DNS, private DNS, or HTTP namespaces that your microservice applications run in.
 * 			When an instance of the service becomes available, you can call the AWS Cloud Map API to register the instance with AWS Cloud Map.
 * 			For public or private DNS namespaces, AWS Cloud Map automatically creates DNS records and an optional health check.
 * 			Clients that submit public or private DNS queries, or HTTP requests, for the service receive an answer that contains up to
 * 			eight healthy records. </p>
 */
class ServiceDiscovery extends ServiceDiscoveryClient_1.ServiceDiscoveryClient {
    createHttpNamespace(args, optionsOrCb, cb) {
        const command = new CreateHttpNamespaceCommand_1.CreateHttpNamespaceCommand(args);
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
    createPrivateDnsNamespace(args, optionsOrCb, cb) {
        const command = new CreatePrivateDnsNamespaceCommand_1.CreatePrivateDnsNamespaceCommand(args);
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
    createPublicDnsNamespace(args, optionsOrCb, cb) {
        const command = new CreatePublicDnsNamespaceCommand_1.CreatePublicDnsNamespaceCommand(args);
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
    createService(args, optionsOrCb, cb) {
        const command = new CreateServiceCommand_1.CreateServiceCommand(args);
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
    deleteNamespace(args, optionsOrCb, cb) {
        const command = new DeleteNamespaceCommand_1.DeleteNamespaceCommand(args);
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
    deleteService(args, optionsOrCb, cb) {
        const command = new DeleteServiceCommand_1.DeleteServiceCommand(args);
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
    discoverInstances(args, optionsOrCb, cb) {
        const command = new DiscoverInstancesCommand_1.DiscoverInstancesCommand(args);
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
    getInstance(args, optionsOrCb, cb) {
        const command = new GetInstanceCommand_1.GetInstanceCommand(args);
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
    getInstancesHealthStatus(args, optionsOrCb, cb) {
        const command = new GetInstancesHealthStatusCommand_1.GetInstancesHealthStatusCommand(args);
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
    getNamespace(args, optionsOrCb, cb) {
        const command = new GetNamespaceCommand_1.GetNamespaceCommand(args);
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
    getOperation(args, optionsOrCb, cb) {
        const command = new GetOperationCommand_1.GetOperationCommand(args);
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
    getService(args, optionsOrCb, cb) {
        const command = new GetServiceCommand_1.GetServiceCommand(args);
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
    listInstances(args, optionsOrCb, cb) {
        const command = new ListInstancesCommand_1.ListInstancesCommand(args);
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
    listNamespaces(args, optionsOrCb, cb) {
        const command = new ListNamespacesCommand_1.ListNamespacesCommand(args);
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
    listOperations(args, optionsOrCb, cb) {
        const command = new ListOperationsCommand_1.ListOperationsCommand(args);
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
    listServices(args, optionsOrCb, cb) {
        const command = new ListServicesCommand_1.ListServicesCommand(args);
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
    updateInstanceCustomHealthStatus(args, optionsOrCb, cb) {
        const command = new UpdateInstanceCustomHealthStatusCommand_1.UpdateInstanceCustomHealthStatusCommand(args);
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
    updateService(args, optionsOrCb, cb) {
        const command = new UpdateServiceCommand_1.UpdateServiceCommand(args);
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
exports.ServiceDiscovery = ServiceDiscovery;
//# sourceMappingURL=ServiceDiscovery.js.map