"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GroundStationClient_1 = require("./GroundStationClient");
const CancelContactCommand_1 = require("./commands/CancelContactCommand");
const CreateConfigCommand_1 = require("./commands/CreateConfigCommand");
const CreateDataflowEndpointGroupCommand_1 = require("./commands/CreateDataflowEndpointGroupCommand");
const CreateMissionProfileCommand_1 = require("./commands/CreateMissionProfileCommand");
const DeleteConfigCommand_1 = require("./commands/DeleteConfigCommand");
const DeleteDataflowEndpointGroupCommand_1 = require("./commands/DeleteDataflowEndpointGroupCommand");
const DeleteMissionProfileCommand_1 = require("./commands/DeleteMissionProfileCommand");
const DescribeContactCommand_1 = require("./commands/DescribeContactCommand");
const GetConfigCommand_1 = require("./commands/GetConfigCommand");
const GetDataflowEndpointGroupCommand_1 = require("./commands/GetDataflowEndpointGroupCommand");
const GetMinuteUsageCommand_1 = require("./commands/GetMinuteUsageCommand");
const GetMissionProfileCommand_1 = require("./commands/GetMissionProfileCommand");
const GetSatelliteCommand_1 = require("./commands/GetSatelliteCommand");
const ListConfigsCommand_1 = require("./commands/ListConfigsCommand");
const ListContactsCommand_1 = require("./commands/ListContactsCommand");
const ListDataflowEndpointGroupsCommand_1 = require("./commands/ListDataflowEndpointGroupsCommand");
const ListGroundStationsCommand_1 = require("./commands/ListGroundStationsCommand");
const ListMissionProfilesCommand_1 = require("./commands/ListMissionProfilesCommand");
const ListSatellitesCommand_1 = require("./commands/ListSatellitesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ReserveContactCommand_1 = require("./commands/ReserveContactCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateConfigCommand_1 = require("./commands/UpdateConfigCommand");
const UpdateMissionProfileCommand_1 = require("./commands/UpdateMissionProfileCommand");
/**
 * <p>Welcome to the AWS Ground Station API Reference. AWS Ground Station is a fully managed service that
 *       enables you to control satellite communications, downlink and process satellite data, and
 *       scale your satellite operations efficiently and cost-effectively without having
 *       to build or manage your own ground station infrastructure.</p>
 */
class GroundStation extends GroundStationClient_1.GroundStationClient {
    cancelContact(args, optionsOrCb, cb) {
        const command = new CancelContactCommand_1.CancelContactCommand(args);
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
    createConfig(args, optionsOrCb, cb) {
        const command = new CreateConfigCommand_1.CreateConfigCommand(args);
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
    createDataflowEndpointGroup(args, optionsOrCb, cb) {
        const command = new CreateDataflowEndpointGroupCommand_1.CreateDataflowEndpointGroupCommand(args);
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
    createMissionProfile(args, optionsOrCb, cb) {
        const command = new CreateMissionProfileCommand_1.CreateMissionProfileCommand(args);
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
    deleteConfig(args, optionsOrCb, cb) {
        const command = new DeleteConfigCommand_1.DeleteConfigCommand(args);
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
    deleteDataflowEndpointGroup(args, optionsOrCb, cb) {
        const command = new DeleteDataflowEndpointGroupCommand_1.DeleteDataflowEndpointGroupCommand(args);
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
    deleteMissionProfile(args, optionsOrCb, cb) {
        const command = new DeleteMissionProfileCommand_1.DeleteMissionProfileCommand(args);
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
    describeContact(args, optionsOrCb, cb) {
        const command = new DescribeContactCommand_1.DescribeContactCommand(args);
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
    getConfig(args, optionsOrCb, cb) {
        const command = new GetConfigCommand_1.GetConfigCommand(args);
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
    getDataflowEndpointGroup(args, optionsOrCb, cb) {
        const command = new GetDataflowEndpointGroupCommand_1.GetDataflowEndpointGroupCommand(args);
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
    getMissionProfile(args, optionsOrCb, cb) {
        const command = new GetMissionProfileCommand_1.GetMissionProfileCommand(args);
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
    listConfigs(args, optionsOrCb, cb) {
        const command = new ListConfigsCommand_1.ListConfigsCommand(args);
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
    listContacts(args, optionsOrCb, cb) {
        const command = new ListContactsCommand_1.ListContactsCommand(args);
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
    listDataflowEndpointGroups(args, optionsOrCb, cb) {
        const command = new ListDataflowEndpointGroupsCommand_1.ListDataflowEndpointGroupsCommand(args);
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
    listMissionProfiles(args, optionsOrCb, cb) {
        const command = new ListMissionProfilesCommand_1.ListMissionProfilesCommand(args);
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
    reserveContact(args, optionsOrCb, cb) {
        const command = new ReserveContactCommand_1.ReserveContactCommand(args);
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
    updateConfig(args, optionsOrCb, cb) {
        const command = new UpdateConfigCommand_1.UpdateConfigCommand(args);
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
    updateMissionProfile(args, optionsOrCb, cb) {
        const command = new UpdateMissionProfileCommand_1.UpdateMissionProfileCommand(args);
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
    getMinuteUsage(args, optionsOrCb, cb) {
        const command = new GetMinuteUsageCommand_1.GetMinuteUsageCommand(args);
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
    getSatellite(args, optionsOrCb, cb) {
        const command = new GetSatelliteCommand_1.GetSatelliteCommand(args);
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
    listGroundStations(args, optionsOrCb, cb) {
        const command = new ListGroundStationsCommand_1.ListGroundStationsCommand(args);
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
    listSatellites(args, optionsOrCb, cb) {
        const command = new ListSatellitesCommand_1.ListSatellitesCommand(args);
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
}
exports.GroundStation = GroundStation;
//# sourceMappingURL=GroundStation.js.map