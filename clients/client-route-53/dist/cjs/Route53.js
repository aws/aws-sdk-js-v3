"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Route53Client_1 = require("./Route53Client");
const AssociateVPCWithHostedZoneCommand_1 = require("./commands/AssociateVPCWithHostedZoneCommand");
const ChangeResourceRecordSetsCommand_1 = require("./commands/ChangeResourceRecordSetsCommand");
const ChangeTagsForResourceCommand_1 = require("./commands/ChangeTagsForResourceCommand");
const CreateHealthCheckCommand_1 = require("./commands/CreateHealthCheckCommand");
const CreateHostedZoneCommand_1 = require("./commands/CreateHostedZoneCommand");
const CreateQueryLoggingConfigCommand_1 = require("./commands/CreateQueryLoggingConfigCommand");
const CreateReusableDelegationSetCommand_1 = require("./commands/CreateReusableDelegationSetCommand");
const CreateTrafficPolicyCommand_1 = require("./commands/CreateTrafficPolicyCommand");
const CreateTrafficPolicyInstanceCommand_1 = require("./commands/CreateTrafficPolicyInstanceCommand");
const CreateTrafficPolicyVersionCommand_1 = require("./commands/CreateTrafficPolicyVersionCommand");
const CreateVPCAssociationAuthorizationCommand_1 = require("./commands/CreateVPCAssociationAuthorizationCommand");
const DeleteHealthCheckCommand_1 = require("./commands/DeleteHealthCheckCommand");
const DeleteHostedZoneCommand_1 = require("./commands/DeleteHostedZoneCommand");
const DeleteQueryLoggingConfigCommand_1 = require("./commands/DeleteQueryLoggingConfigCommand");
const DeleteReusableDelegationSetCommand_1 = require("./commands/DeleteReusableDelegationSetCommand");
const DeleteTrafficPolicyCommand_1 = require("./commands/DeleteTrafficPolicyCommand");
const DeleteTrafficPolicyInstanceCommand_1 = require("./commands/DeleteTrafficPolicyInstanceCommand");
const DeleteVPCAssociationAuthorizationCommand_1 = require("./commands/DeleteVPCAssociationAuthorizationCommand");
const DisassociateVPCFromHostedZoneCommand_1 = require("./commands/DisassociateVPCFromHostedZoneCommand");
const GetAccountLimitCommand_1 = require("./commands/GetAccountLimitCommand");
const GetChangeCommand_1 = require("./commands/GetChangeCommand");
const GetCheckerIpRangesCommand_1 = require("./commands/GetCheckerIpRangesCommand");
const GetGeoLocationCommand_1 = require("./commands/GetGeoLocationCommand");
const GetHealthCheckCommand_1 = require("./commands/GetHealthCheckCommand");
const GetHealthCheckCountCommand_1 = require("./commands/GetHealthCheckCountCommand");
const GetHealthCheckLastFailureReasonCommand_1 = require("./commands/GetHealthCheckLastFailureReasonCommand");
const GetHealthCheckStatusCommand_1 = require("./commands/GetHealthCheckStatusCommand");
const GetHostedZoneCommand_1 = require("./commands/GetHostedZoneCommand");
const GetHostedZoneCountCommand_1 = require("./commands/GetHostedZoneCountCommand");
const GetHostedZoneLimitCommand_1 = require("./commands/GetHostedZoneLimitCommand");
const GetQueryLoggingConfigCommand_1 = require("./commands/GetQueryLoggingConfigCommand");
const GetReusableDelegationSetCommand_1 = require("./commands/GetReusableDelegationSetCommand");
const GetReusableDelegationSetLimitCommand_1 = require("./commands/GetReusableDelegationSetLimitCommand");
const GetTrafficPolicyCommand_1 = require("./commands/GetTrafficPolicyCommand");
const GetTrafficPolicyInstanceCommand_1 = require("./commands/GetTrafficPolicyInstanceCommand");
const GetTrafficPolicyInstanceCountCommand_1 = require("./commands/GetTrafficPolicyInstanceCountCommand");
const ListGeoLocationsCommand_1 = require("./commands/ListGeoLocationsCommand");
const ListHealthChecksCommand_1 = require("./commands/ListHealthChecksCommand");
const ListHostedZonesByNameCommand_1 = require("./commands/ListHostedZonesByNameCommand");
const ListHostedZonesCommand_1 = require("./commands/ListHostedZonesCommand");
const ListQueryLoggingConfigsCommand_1 = require("./commands/ListQueryLoggingConfigsCommand");
const ListResourceRecordSetsCommand_1 = require("./commands/ListResourceRecordSetsCommand");
const ListReusableDelegationSetsCommand_1 = require("./commands/ListReusableDelegationSetsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTagsForResourcesCommand_1 = require("./commands/ListTagsForResourcesCommand");
const ListTrafficPoliciesCommand_1 = require("./commands/ListTrafficPoliciesCommand");
const ListTrafficPolicyInstancesByHostedZoneCommand_1 = require("./commands/ListTrafficPolicyInstancesByHostedZoneCommand");
const ListTrafficPolicyInstancesByPolicyCommand_1 = require("./commands/ListTrafficPolicyInstancesByPolicyCommand");
const ListTrafficPolicyInstancesCommand_1 = require("./commands/ListTrafficPolicyInstancesCommand");
const ListTrafficPolicyVersionsCommand_1 = require("./commands/ListTrafficPolicyVersionsCommand");
const ListVPCAssociationAuthorizationsCommand_1 = require("./commands/ListVPCAssociationAuthorizationsCommand");
const TestDNSAnswerCommand_1 = require("./commands/TestDNSAnswerCommand");
const UpdateHealthCheckCommand_1 = require("./commands/UpdateHealthCheckCommand");
const UpdateHostedZoneCommentCommand_1 = require("./commands/UpdateHostedZoneCommentCommand");
const UpdateTrafficPolicyCommentCommand_1 = require("./commands/UpdateTrafficPolicyCommentCommand");
const UpdateTrafficPolicyInstanceCommand_1 = require("./commands/UpdateTrafficPolicyInstanceCommand");
/**
 * <p>Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service.</p>
 */
class Route53 extends Route53Client_1.Route53Client {
    associateVPCWithHostedZone(args, optionsOrCb, cb) {
        const command = new AssociateVPCWithHostedZoneCommand_1.AssociateVPCWithHostedZoneCommand(args);
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
    changeResourceRecordSets(args, optionsOrCb, cb) {
        const command = new ChangeResourceRecordSetsCommand_1.ChangeResourceRecordSetsCommand(args);
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
    changeTagsForResource(args, optionsOrCb, cb) {
        const command = new ChangeTagsForResourceCommand_1.ChangeTagsForResourceCommand(args);
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
    createHealthCheck(args, optionsOrCb, cb) {
        const command = new CreateHealthCheckCommand_1.CreateHealthCheckCommand(args);
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
    createHostedZone(args, optionsOrCb, cb) {
        const command = new CreateHostedZoneCommand_1.CreateHostedZoneCommand(args);
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
    createQueryLoggingConfig(args, optionsOrCb, cb) {
        const command = new CreateQueryLoggingConfigCommand_1.CreateQueryLoggingConfigCommand(args);
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
    createReusableDelegationSet(args, optionsOrCb, cb) {
        const command = new CreateReusableDelegationSetCommand_1.CreateReusableDelegationSetCommand(args);
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
    createTrafficPolicy(args, optionsOrCb, cb) {
        const command = new CreateTrafficPolicyCommand_1.CreateTrafficPolicyCommand(args);
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
    createTrafficPolicyInstance(args, optionsOrCb, cb) {
        const command = new CreateTrafficPolicyInstanceCommand_1.CreateTrafficPolicyInstanceCommand(args);
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
    createTrafficPolicyVersion(args, optionsOrCb, cb) {
        const command = new CreateTrafficPolicyVersionCommand_1.CreateTrafficPolicyVersionCommand(args);
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
    createVPCAssociationAuthorization(args, optionsOrCb, cb) {
        const command = new CreateVPCAssociationAuthorizationCommand_1.CreateVPCAssociationAuthorizationCommand(args);
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
    deleteHealthCheck(args, optionsOrCb, cb) {
        const command = new DeleteHealthCheckCommand_1.DeleteHealthCheckCommand(args);
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
    deleteHostedZone(args, optionsOrCb, cb) {
        const command = new DeleteHostedZoneCommand_1.DeleteHostedZoneCommand(args);
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
    deleteQueryLoggingConfig(args, optionsOrCb, cb) {
        const command = new DeleteQueryLoggingConfigCommand_1.DeleteQueryLoggingConfigCommand(args);
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
    deleteReusableDelegationSet(args, optionsOrCb, cb) {
        const command = new DeleteReusableDelegationSetCommand_1.DeleteReusableDelegationSetCommand(args);
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
    deleteTrafficPolicy(args, optionsOrCb, cb) {
        const command = new DeleteTrafficPolicyCommand_1.DeleteTrafficPolicyCommand(args);
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
    deleteTrafficPolicyInstance(args, optionsOrCb, cb) {
        const command = new DeleteTrafficPolicyInstanceCommand_1.DeleteTrafficPolicyInstanceCommand(args);
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
    deleteVPCAssociationAuthorization(args, optionsOrCb, cb) {
        const command = new DeleteVPCAssociationAuthorizationCommand_1.DeleteVPCAssociationAuthorizationCommand(args);
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
    disassociateVPCFromHostedZone(args, optionsOrCb, cb) {
        const command = new DisassociateVPCFromHostedZoneCommand_1.DisassociateVPCFromHostedZoneCommand(args);
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
    getAccountLimit(args, optionsOrCb, cb) {
        const command = new GetAccountLimitCommand_1.GetAccountLimitCommand(args);
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
    getChange(args, optionsOrCb, cb) {
        const command = new GetChangeCommand_1.GetChangeCommand(args);
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
    getCheckerIpRanges(args, optionsOrCb, cb) {
        const command = new GetCheckerIpRangesCommand_1.GetCheckerIpRangesCommand(args);
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
    getGeoLocation(args, optionsOrCb, cb) {
        const command = new GetGeoLocationCommand_1.GetGeoLocationCommand(args);
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
    getHealthCheck(args, optionsOrCb, cb) {
        const command = new GetHealthCheckCommand_1.GetHealthCheckCommand(args);
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
    getHealthCheckCount(args, optionsOrCb, cb) {
        const command = new GetHealthCheckCountCommand_1.GetHealthCheckCountCommand(args);
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
    getHealthCheckLastFailureReason(args, optionsOrCb, cb) {
        const command = new GetHealthCheckLastFailureReasonCommand_1.GetHealthCheckLastFailureReasonCommand(args);
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
    getHealthCheckStatus(args, optionsOrCb, cb) {
        const command = new GetHealthCheckStatusCommand_1.GetHealthCheckStatusCommand(args);
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
    getHostedZone(args, optionsOrCb, cb) {
        const command = new GetHostedZoneCommand_1.GetHostedZoneCommand(args);
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
    getHostedZoneCount(args, optionsOrCb, cb) {
        const command = new GetHostedZoneCountCommand_1.GetHostedZoneCountCommand(args);
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
    getHostedZoneLimit(args, optionsOrCb, cb) {
        const command = new GetHostedZoneLimitCommand_1.GetHostedZoneLimitCommand(args);
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
    getQueryLoggingConfig(args, optionsOrCb, cb) {
        const command = new GetQueryLoggingConfigCommand_1.GetQueryLoggingConfigCommand(args);
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
    getReusableDelegationSet(args, optionsOrCb, cb) {
        const command = new GetReusableDelegationSetCommand_1.GetReusableDelegationSetCommand(args);
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
    getReusableDelegationSetLimit(args, optionsOrCb, cb) {
        const command = new GetReusableDelegationSetLimitCommand_1.GetReusableDelegationSetLimitCommand(args);
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
    getTrafficPolicy(args, optionsOrCb, cb) {
        const command = new GetTrafficPolicyCommand_1.GetTrafficPolicyCommand(args);
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
    getTrafficPolicyInstance(args, optionsOrCb, cb) {
        const command = new GetTrafficPolicyInstanceCommand_1.GetTrafficPolicyInstanceCommand(args);
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
    getTrafficPolicyInstanceCount(args, optionsOrCb, cb) {
        const command = new GetTrafficPolicyInstanceCountCommand_1.GetTrafficPolicyInstanceCountCommand(args);
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
    listGeoLocations(args, optionsOrCb, cb) {
        const command = new ListGeoLocationsCommand_1.ListGeoLocationsCommand(args);
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
    listHealthChecks(args, optionsOrCb, cb) {
        const command = new ListHealthChecksCommand_1.ListHealthChecksCommand(args);
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
    listHostedZones(args, optionsOrCb, cb) {
        const command = new ListHostedZonesCommand_1.ListHostedZonesCommand(args);
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
    listHostedZonesByName(args, optionsOrCb, cb) {
        const command = new ListHostedZonesByNameCommand_1.ListHostedZonesByNameCommand(args);
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
    listQueryLoggingConfigs(args, optionsOrCb, cb) {
        const command = new ListQueryLoggingConfigsCommand_1.ListQueryLoggingConfigsCommand(args);
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
    listResourceRecordSets(args, optionsOrCb, cb) {
        const command = new ListResourceRecordSetsCommand_1.ListResourceRecordSetsCommand(args);
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
    listReusableDelegationSets(args, optionsOrCb, cb) {
        const command = new ListReusableDelegationSetsCommand_1.ListReusableDelegationSetsCommand(args);
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
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
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
    listTagsForResources(args, optionsOrCb, cb) {
        const command = new ListTagsForResourcesCommand_1.ListTagsForResourcesCommand(args);
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
    listTrafficPolicies(args, optionsOrCb, cb) {
        const command = new ListTrafficPoliciesCommand_1.ListTrafficPoliciesCommand(args);
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
    listTrafficPolicyInstances(args, optionsOrCb, cb) {
        const command = new ListTrafficPolicyInstancesCommand_1.ListTrafficPolicyInstancesCommand(args);
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
    listTrafficPolicyInstancesByHostedZone(args, optionsOrCb, cb) {
        const command = new ListTrafficPolicyInstancesByHostedZoneCommand_1.ListTrafficPolicyInstancesByHostedZoneCommand(args);
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
    listTrafficPolicyInstancesByPolicy(args, optionsOrCb, cb) {
        const command = new ListTrafficPolicyInstancesByPolicyCommand_1.ListTrafficPolicyInstancesByPolicyCommand(args);
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
    listTrafficPolicyVersions(args, optionsOrCb, cb) {
        const command = new ListTrafficPolicyVersionsCommand_1.ListTrafficPolicyVersionsCommand(args);
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
    listVPCAssociationAuthorizations(args, optionsOrCb, cb) {
        const command = new ListVPCAssociationAuthorizationsCommand_1.ListVPCAssociationAuthorizationsCommand(args);
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
    testDNSAnswer(args, optionsOrCb, cb) {
        const command = new TestDNSAnswerCommand_1.TestDNSAnswerCommand(args);
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
    updateHealthCheck(args, optionsOrCb, cb) {
        const command = new UpdateHealthCheckCommand_1.UpdateHealthCheckCommand(args);
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
    updateHostedZoneComment(args, optionsOrCb, cb) {
        const command = new UpdateHostedZoneCommentCommand_1.UpdateHostedZoneCommentCommand(args);
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
    updateTrafficPolicyComment(args, optionsOrCb, cb) {
        const command = new UpdateTrafficPolicyCommentCommand_1.UpdateTrafficPolicyCommentCommand(args);
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
    updateTrafficPolicyInstance(args, optionsOrCb, cb) {
        const command = new UpdateTrafficPolicyInstanceCommand_1.UpdateTrafficPolicyInstanceCommand(args);
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
exports.Route53 = Route53;
//# sourceMappingURL=Route53.js.map