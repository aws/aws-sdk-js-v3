"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceQuotasClient_1 = require("./ServiceQuotasClient");
const AssociateServiceQuotaTemplateCommand_1 = require("./commands/AssociateServiceQuotaTemplateCommand");
const DeleteServiceQuotaIncreaseRequestFromTemplateCommand_1 = require("./commands/DeleteServiceQuotaIncreaseRequestFromTemplateCommand");
const DisassociateServiceQuotaTemplateCommand_1 = require("./commands/DisassociateServiceQuotaTemplateCommand");
const GetAWSDefaultServiceQuotaCommand_1 = require("./commands/GetAWSDefaultServiceQuotaCommand");
const GetAssociationForServiceQuotaTemplateCommand_1 = require("./commands/GetAssociationForServiceQuotaTemplateCommand");
const GetRequestedServiceQuotaChangeCommand_1 = require("./commands/GetRequestedServiceQuotaChangeCommand");
const GetServiceQuotaCommand_1 = require("./commands/GetServiceQuotaCommand");
const GetServiceQuotaIncreaseRequestFromTemplateCommand_1 = require("./commands/GetServiceQuotaIncreaseRequestFromTemplateCommand");
const ListAWSDefaultServiceQuotasCommand_1 = require("./commands/ListAWSDefaultServiceQuotasCommand");
const ListRequestedServiceQuotaChangeHistoryByQuotaCommand_1 = require("./commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand");
const ListRequestedServiceQuotaChangeHistoryCommand_1 = require("./commands/ListRequestedServiceQuotaChangeHistoryCommand");
const ListServiceQuotaIncreaseRequestsInTemplateCommand_1 = require("./commands/ListServiceQuotaIncreaseRequestsInTemplateCommand");
const ListServiceQuotasCommand_1 = require("./commands/ListServiceQuotasCommand");
const ListServicesCommand_1 = require("./commands/ListServicesCommand");
const PutServiceQuotaIncreaseRequestIntoTemplateCommand_1 = require("./commands/PutServiceQuotaIncreaseRequestIntoTemplateCommand");
const RequestServiceQuotaIncreaseCommand_1 = require("./commands/RequestServiceQuotaIncreaseCommand");
/**
 * <p> Service Quotas is a web service that you can use to manage many of your AWS service
 *       quotas. Quotas, also referred to as limits, are the maximum values for a resource, item, or
 *       operation. This guide provide descriptions of the Service Quotas actions that you can call
 *       from an API. For the Service Quotas user guide, which explains how to use Service Quotas from
 *       the console, see <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">What is Service Quotas</a>. </p>
 *
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for programming languages
 *         and platforms (Java, Ruby, .NET, iOS, Android, etc...,). The SDKs provide a convenient way
 *         to create programmatic access to Service Quotas and AWS. For information about the AWS SDKs,
 *         including how to download and install them, see the <a href="https://docs.aws.amazon.com/aws.amazon.com/tools">Tools for Amazon Web Services</a> page.</p>
 *          </note>
 */
class ServiceQuotas extends ServiceQuotasClient_1.ServiceQuotasClient {
    associateServiceQuotaTemplate(args, optionsOrCb, cb) {
        const command = new AssociateServiceQuotaTemplateCommand_1.AssociateServiceQuotaTemplateCommand(args);
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
    deleteServiceQuotaIncreaseRequestFromTemplate(args, optionsOrCb, cb) {
        const command = new DeleteServiceQuotaIncreaseRequestFromTemplateCommand_1.DeleteServiceQuotaIncreaseRequestFromTemplateCommand(args);
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
    disassociateServiceQuotaTemplate(args, optionsOrCb, cb) {
        const command = new DisassociateServiceQuotaTemplateCommand_1.DisassociateServiceQuotaTemplateCommand(args);
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
    getAWSDefaultServiceQuota(args, optionsOrCb, cb) {
        const command = new GetAWSDefaultServiceQuotaCommand_1.GetAWSDefaultServiceQuotaCommand(args);
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
    getAssociationForServiceQuotaTemplate(args, optionsOrCb, cb) {
        const command = new GetAssociationForServiceQuotaTemplateCommand_1.GetAssociationForServiceQuotaTemplateCommand(args);
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
    getRequestedServiceQuotaChange(args, optionsOrCb, cb) {
        const command = new GetRequestedServiceQuotaChangeCommand_1.GetRequestedServiceQuotaChangeCommand(args);
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
    getServiceQuota(args, optionsOrCb, cb) {
        const command = new GetServiceQuotaCommand_1.GetServiceQuotaCommand(args);
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
    getServiceQuotaIncreaseRequestFromTemplate(args, optionsOrCb, cb) {
        const command = new GetServiceQuotaIncreaseRequestFromTemplateCommand_1.GetServiceQuotaIncreaseRequestFromTemplateCommand(args);
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
    listAWSDefaultServiceQuotas(args, optionsOrCb, cb) {
        const command = new ListAWSDefaultServiceQuotasCommand_1.ListAWSDefaultServiceQuotasCommand(args);
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
    listRequestedServiceQuotaChangeHistory(args, optionsOrCb, cb) {
        const command = new ListRequestedServiceQuotaChangeHistoryCommand_1.ListRequestedServiceQuotaChangeHistoryCommand(args);
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
    listRequestedServiceQuotaChangeHistoryByQuota(args, optionsOrCb, cb) {
        const command = new ListRequestedServiceQuotaChangeHistoryByQuotaCommand_1.ListRequestedServiceQuotaChangeHistoryByQuotaCommand(args);
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
    listServiceQuotaIncreaseRequestsInTemplate(args, optionsOrCb, cb) {
        const command = new ListServiceQuotaIncreaseRequestsInTemplateCommand_1.ListServiceQuotaIncreaseRequestsInTemplateCommand(args);
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
    listServiceQuotas(args, optionsOrCb, cb) {
        const command = new ListServiceQuotasCommand_1.ListServiceQuotasCommand(args);
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
    putServiceQuotaIncreaseRequestIntoTemplate(args, optionsOrCb, cb) {
        const command = new PutServiceQuotaIncreaseRequestIntoTemplateCommand_1.PutServiceQuotaIncreaseRequestIntoTemplateCommand(args);
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
    requestServiceQuotaIncrease(args, optionsOrCb, cb) {
        const command = new RequestServiceQuotaIncreaseCommand_1.RequestServiceQuotaIncreaseCommand(args);
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
exports.ServiceQuotas = ServiceQuotas;
//# sourceMappingURL=ServiceQuotas.js.map