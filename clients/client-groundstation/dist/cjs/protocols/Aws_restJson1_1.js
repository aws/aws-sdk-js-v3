"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../models/index");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
async function serializeAws_restJson1_1CancelContactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/contact/{contactId}";
    if (input.contactId !== undefined) {
        const labelValue = input.contactId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: contactId.");
        }
        resolvedPath = resolvedPath.replace("{contactId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: contactId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1CancelContactCommand = serializeAws_restJson1_1CancelContactCommand;
async function serializeAws_restJson1_1CreateConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/config";
    let body;
    const bodyParams = {};
    if (input.configData !== undefined) {
        bodyParams["configData"] = serializeAws_restJson1_1ConfigTypeData(input.configData, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateConfigCommand = serializeAws_restJson1_1CreateConfigCommand;
async function serializeAws_restJson1_1CreateDataflowEndpointGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/dataflowEndpointGroup";
    let body;
    const bodyParams = {};
    if (input.endpointDetails !== undefined) {
        bodyParams["endpointDetails"] = serializeAws_restJson1_1EndpointDetailsList(input.endpointDetails, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateDataflowEndpointGroupCommand = serializeAws_restJson1_1CreateDataflowEndpointGroupCommand;
async function serializeAws_restJson1_1CreateMissionProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/missionprofile";
    let body;
    const bodyParams = {};
    if (input.contactPostPassDurationSeconds !== undefined) {
        bodyParams["contactPostPassDurationSeconds"] =
            input.contactPostPassDurationSeconds;
    }
    if (input.contactPrePassDurationSeconds !== undefined) {
        bodyParams["contactPrePassDurationSeconds"] =
            input.contactPrePassDurationSeconds;
    }
    if (input.dataflowEdges !== undefined) {
        bodyParams["dataflowEdges"] = serializeAws_restJson1_1DataflowEdgeList(input.dataflowEdges, context);
    }
    if (input.minimumViableContactDurationSeconds !== undefined) {
        bodyParams["minimumViableContactDurationSeconds"] =
            input.minimumViableContactDurationSeconds;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
    }
    if (input.trackingConfigArn !== undefined) {
        bodyParams["trackingConfigArn"] = input.trackingConfigArn;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateMissionProfileCommand = serializeAws_restJson1_1CreateMissionProfileCommand;
async function serializeAws_restJson1_1DeleteConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/config/{configType}/{configId}";
    if (input.configId !== undefined) {
        const labelValue = input.configId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: configId.");
        }
        resolvedPath = resolvedPath.replace("{configId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: configId.");
    }
    if (input.configType !== undefined) {
        const labelValue = input.configType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: configType.");
        }
        resolvedPath = resolvedPath.replace("{configType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: configType.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteConfigCommand = serializeAws_restJson1_1DeleteConfigCommand;
async function serializeAws_restJson1_1DeleteDataflowEndpointGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/dataflowEndpointGroup/{dataflowEndpointGroupId}";
    if (input.dataflowEndpointGroupId !== undefined) {
        const labelValue = input.dataflowEndpointGroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: dataflowEndpointGroupId.");
        }
        resolvedPath = resolvedPath.replace("{dataflowEndpointGroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: dataflowEndpointGroupId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteDataflowEndpointGroupCommand = serializeAws_restJson1_1DeleteDataflowEndpointGroupCommand;
async function serializeAws_restJson1_1DeleteMissionProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/missionprofile/{missionProfileId}";
    if (input.missionProfileId !== undefined) {
        const labelValue = input.missionProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: missionProfileId.");
        }
        resolvedPath = resolvedPath.replace("{missionProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: missionProfileId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteMissionProfileCommand = serializeAws_restJson1_1DeleteMissionProfileCommand;
async function serializeAws_restJson1_1DescribeContactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/contact/{contactId}";
    if (input.contactId !== undefined) {
        const labelValue = input.contactId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: contactId.");
        }
        resolvedPath = resolvedPath.replace("{contactId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: contactId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DescribeContactCommand = serializeAws_restJson1_1DescribeContactCommand;
async function serializeAws_restJson1_1GetConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/config/{configType}/{configId}";
    if (input.configId !== undefined) {
        const labelValue = input.configId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: configId.");
        }
        resolvedPath = resolvedPath.replace("{configId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: configId.");
    }
    if (input.configType !== undefined) {
        const labelValue = input.configType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: configType.");
        }
        resolvedPath = resolvedPath.replace("{configType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: configType.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetConfigCommand = serializeAws_restJson1_1GetConfigCommand;
async function serializeAws_restJson1_1GetDataflowEndpointGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/dataflowEndpointGroup/{dataflowEndpointGroupId}";
    if (input.dataflowEndpointGroupId !== undefined) {
        const labelValue = input.dataflowEndpointGroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: dataflowEndpointGroupId.");
        }
        resolvedPath = resolvedPath.replace("{dataflowEndpointGroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: dataflowEndpointGroupId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetDataflowEndpointGroupCommand = serializeAws_restJson1_1GetDataflowEndpointGroupCommand;
async function serializeAws_restJson1_1GetMissionProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/missionprofile/{missionProfileId}";
    if (input.missionProfileId !== undefined) {
        const labelValue = input.missionProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: missionProfileId.");
        }
        resolvedPath = resolvedPath.replace("{missionProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: missionProfileId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetMissionProfileCommand = serializeAws_restJson1_1GetMissionProfileCommand;
async function serializeAws_restJson1_1ListConfigsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/config";
    const query = {};
    if (input.maxResults !== undefined) {
        query["maxResults"] = input.maxResults.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListConfigsCommand = serializeAws_restJson1_1ListConfigsCommand;
async function serializeAws_restJson1_1ListContactsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/contacts";
    let body;
    const bodyParams = {};
    if (input.endTime !== undefined) {
        bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
    }
    if (input.groundStation !== undefined) {
        bodyParams["groundStation"] = input.groundStation;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.missionProfileArn !== undefined) {
        bodyParams["missionProfileArn"] = input.missionProfileArn;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.satelliteArn !== undefined) {
        bodyParams["satelliteArn"] = input.satelliteArn;
    }
    if (input.startTime !== undefined) {
        bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
    }
    if (input.statusList !== undefined) {
        bodyParams["statusList"] = serializeAws_restJson1_1StatusList(input.statusList, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1ListContactsCommand = serializeAws_restJson1_1ListContactsCommand;
async function serializeAws_restJson1_1ListDataflowEndpointGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/dataflowEndpointGroup";
    const query = {};
    if (input.maxResults !== undefined) {
        query["maxResults"] = input.maxResults.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListDataflowEndpointGroupsCommand = serializeAws_restJson1_1ListDataflowEndpointGroupsCommand;
async function serializeAws_restJson1_1ListMissionProfilesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/missionprofile";
    const query = {};
    if (input.maxResults !== undefined) {
        query["maxResults"] = input.maxResults.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListMissionProfilesCommand = serializeAws_restJson1_1ListMissionProfilesCommand;
async function serializeAws_restJson1_1ReserveContactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/contact";
    let body;
    const bodyParams = {};
    if (input.endTime !== undefined) {
        bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
    }
    if (input.groundStation !== undefined) {
        bodyParams["groundStation"] = input.groundStation;
    }
    if (input.missionProfileArn !== undefined) {
        bodyParams["missionProfileArn"] = input.missionProfileArn;
    }
    if (input.satelliteArn !== undefined) {
        bodyParams["satelliteArn"] = input.satelliteArn;
    }
    if (input.startTime !== undefined) {
        bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1ReserveContactCommand = serializeAws_restJson1_1ReserveContactCommand;
async function serializeAws_restJson1_1UpdateConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/config/{configType}/{configId}";
    if (input.configId !== undefined) {
        const labelValue = input.configId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: configId.");
        }
        resolvedPath = resolvedPath.replace("{configId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: configId.");
    }
    if (input.configType !== undefined) {
        const labelValue = input.configType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: configType.");
        }
        resolvedPath = resolvedPath.replace("{configType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: configType.");
    }
    let body;
    const bodyParams = {};
    if (input.configData !== undefined) {
        bodyParams["configData"] = serializeAws_restJson1_1ConfigTypeData(input.configData, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateConfigCommand = serializeAws_restJson1_1UpdateConfigCommand;
async function serializeAws_restJson1_1UpdateMissionProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/missionprofile/{missionProfileId}";
    if (input.missionProfileId !== undefined) {
        const labelValue = input.missionProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: missionProfileId.");
        }
        resolvedPath = resolvedPath.replace("{missionProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: missionProfileId.");
    }
    let body;
    const bodyParams = {};
    if (input.contactPostPassDurationSeconds !== undefined) {
        bodyParams["contactPostPassDurationSeconds"] =
            input.contactPostPassDurationSeconds;
    }
    if (input.contactPrePassDurationSeconds !== undefined) {
        bodyParams["contactPrePassDurationSeconds"] =
            input.contactPrePassDurationSeconds;
    }
    if (input.dataflowEdges !== undefined) {
        bodyParams["dataflowEdges"] = serializeAws_restJson1_1DataflowEdgeList(input.dataflowEdges, context);
    }
    if (input.minimumViableContactDurationSeconds !== undefined) {
        bodyParams["minimumViableContactDurationSeconds"] =
            input.minimumViableContactDurationSeconds;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.trackingConfigArn !== undefined) {
        bodyParams["trackingConfigArn"] = input.trackingConfigArn;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateMissionProfileCommand = serializeAws_restJson1_1UpdateMissionProfileCommand;
async function serializeAws_restJson1_1GetMinuteUsageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/minute-usage";
    let body;
    const bodyParams = {};
    if (input.month !== undefined) {
        bodyParams["month"] = input.month;
    }
    if (input.year !== undefined) {
        bodyParams["year"] = input.year;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1GetMinuteUsageCommand = serializeAws_restJson1_1GetMinuteUsageCommand;
async function serializeAws_restJson1_1GetSatelliteCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/satellite/{satelliteId}";
    if (input.satelliteId !== undefined) {
        const labelValue = input.satelliteId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: satelliteId.");
        }
        resolvedPath = resolvedPath.replace("{satelliteId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: satelliteId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetSatelliteCommand = serializeAws_restJson1_1GetSatelliteCommand;
async function serializeAws_restJson1_1ListGroundStationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/groundstation";
    const query = {};
    if (input.maxResults !== undefined) {
        query["maxResults"] = input.maxResults.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListGroundStationsCommand = serializeAws_restJson1_1ListGroundStationsCommand;
async function serializeAws_restJson1_1ListSatellitesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/satellite";
    const query = {};
    if (input.maxResults !== undefined) {
        query["maxResults"] = input.maxResults.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListSatellitesCommand = serializeAws_restJson1_1ListSatellitesCommand;
async function serializeAws_restJson1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1ListTagsForResourceCommand = serializeAws_restJson1_1ListTagsForResourceCommand;
async function serializeAws_restJson1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    let body;
    const bodyParams = {};
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1TagResourceCommand = serializeAws_restJson1_1TagResourceCommand;
async function serializeAws_restJson1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    const query = {};
    if (input.tagKeys !== undefined) {
        query["tagKeys"] = (input.tagKeys || []).map(_entry => _entry);
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1UntagResourceCommand = serializeAws_restJson1_1UntagResourceCommand;
async function deserializeAws_restJson1_1CancelContactCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CancelContactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ContactIdResponse",
        contactId: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.contactId !== undefined && data.contactId !== null) {
        contents.contactId = data.contactId;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CancelContactCommand = deserializeAws_restJson1_1CancelContactCommand;
async function deserializeAws_restJson1_1CancelContactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1CreateConfigCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ConfigIdResponse",
        configArn: undefined,
        configId: undefined,
        configType: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.configArn !== undefined && data.configArn !== null) {
        contents.configArn = data.configArn;
    }
    if (data.configId !== undefined && data.configId !== null) {
        contents.configId = data.configId;
    }
    if (data.configType !== undefined && data.configType !== null) {
        contents.configType = data.configType;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateConfigCommand = deserializeAws_restJson1_1CreateConfigCommand;
async function deserializeAws_restJson1_1CreateConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1CreateDataflowEndpointGroupCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateDataflowEndpointGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DataflowEndpointGroupIdResponse",
        dataflowEndpointGroupId: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.dataflowEndpointGroupId !== undefined &&
        data.dataflowEndpointGroupId !== null) {
        contents.dataflowEndpointGroupId = data.dataflowEndpointGroupId;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateDataflowEndpointGroupCommand = deserializeAws_restJson1_1CreateDataflowEndpointGroupCommand;
async function deserializeAws_restJson1_1CreateDataflowEndpointGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1CreateMissionProfileCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateMissionProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "MissionProfileIdResponse",
        missionProfileId: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.missionProfileId !== undefined && data.missionProfileId !== null) {
        contents.missionProfileId = data.missionProfileId;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateMissionProfileCommand = deserializeAws_restJson1_1CreateMissionProfileCommand;
async function deserializeAws_restJson1_1CreateMissionProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1DeleteConfigCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ConfigIdResponse",
        configArn: undefined,
        configId: undefined,
        configType: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.configArn !== undefined && data.configArn !== null) {
        contents.configArn = data.configArn;
    }
    if (data.configId !== undefined && data.configId !== null) {
        contents.configId = data.configId;
    }
    if (data.configType !== undefined && data.configType !== null) {
        contents.configType = data.configType;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteConfigCommand = deserializeAws_restJson1_1DeleteConfigCommand;
async function deserializeAws_restJson1_1DeleteConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1DeleteDataflowEndpointGroupCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteDataflowEndpointGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DataflowEndpointGroupIdResponse",
        dataflowEndpointGroupId: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.dataflowEndpointGroupId !== undefined &&
        data.dataflowEndpointGroupId !== null) {
        contents.dataflowEndpointGroupId = data.dataflowEndpointGroupId;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteDataflowEndpointGroupCommand = deserializeAws_restJson1_1DeleteDataflowEndpointGroupCommand;
async function deserializeAws_restJson1_1DeleteDataflowEndpointGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1DeleteMissionProfileCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteMissionProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "MissionProfileIdResponse",
        missionProfileId: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.missionProfileId !== undefined && data.missionProfileId !== null) {
        contents.missionProfileId = data.missionProfileId;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteMissionProfileCommand = deserializeAws_restJson1_1DeleteMissionProfileCommand;
async function deserializeAws_restJson1_1DeleteMissionProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1DescribeContactCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DescribeContactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DescribeContactResponse",
        contactId: undefined,
        contactStatus: undefined,
        endTime: undefined,
        errorMessage: undefined,
        groundStation: undefined,
        maximumElevation: undefined,
        missionProfileArn: undefined,
        postPassEndTime: undefined,
        prePassStartTime: undefined,
        satelliteArn: undefined,
        startTime: undefined,
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.contactId !== undefined && data.contactId !== null) {
        contents.contactId = data.contactId;
    }
    if (data.contactStatus !== undefined && data.contactStatus !== null) {
        contents.contactStatus = data.contactStatus;
    }
    if (data.endTime !== undefined && data.endTime !== null) {
        contents.endTime = new Date(Math.round(data.endTime * 1000));
    }
    if (data.errorMessage !== undefined && data.errorMessage !== null) {
        contents.errorMessage = data.errorMessage;
    }
    if (data.groundStation !== undefined && data.groundStation !== null) {
        contents.groundStation = data.groundStation;
    }
    if (data.maximumElevation !== undefined && data.maximumElevation !== null) {
        contents.maximumElevation = deserializeAws_restJson1_1Elevation(data.maximumElevation, context);
    }
    if (data.missionProfileArn !== undefined && data.missionProfileArn !== null) {
        contents.missionProfileArn = data.missionProfileArn;
    }
    if (data.postPassEndTime !== undefined && data.postPassEndTime !== null) {
        contents.postPassEndTime = new Date(Math.round(data.postPassEndTime * 1000));
    }
    if (data.prePassStartTime !== undefined && data.prePassStartTime !== null) {
        contents.prePassStartTime = new Date(Math.round(data.prePassStartTime * 1000));
    }
    if (data.satelliteArn !== undefined && data.satelliteArn !== null) {
        contents.satelliteArn = data.satelliteArn;
    }
    if (data.startTime !== undefined && data.startTime !== null) {
        contents.startTime = new Date(Math.round(data.startTime * 1000));
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DescribeContactCommand = deserializeAws_restJson1_1DescribeContactCommand;
async function deserializeAws_restJson1_1DescribeContactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1GetConfigCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetConfigResponse",
        configArn: undefined,
        configData: undefined,
        configId: undefined,
        configType: undefined,
        name: undefined,
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.configArn !== undefined && data.configArn !== null) {
        contents.configArn = data.configArn;
    }
    if (data.configData !== undefined && data.configData !== null) {
        contents.configData = deserializeAws_restJson1_1ConfigTypeData(data.configData, context);
    }
    if (data.configId !== undefined && data.configId !== null) {
        contents.configId = data.configId;
    }
    if (data.configType !== undefined && data.configType !== null) {
        contents.configType = data.configType;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetConfigCommand = deserializeAws_restJson1_1GetConfigCommand;
async function deserializeAws_restJson1_1GetConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1GetDataflowEndpointGroupCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetDataflowEndpointGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetDataflowEndpointGroupResponse",
        dataflowEndpointGroupArn: undefined,
        dataflowEndpointGroupId: undefined,
        endpointsDetails: undefined,
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.dataflowEndpointGroupArn !== undefined &&
        data.dataflowEndpointGroupArn !== null) {
        contents.dataflowEndpointGroupArn = data.dataflowEndpointGroupArn;
    }
    if (data.dataflowEndpointGroupId !== undefined &&
        data.dataflowEndpointGroupId !== null) {
        contents.dataflowEndpointGroupId = data.dataflowEndpointGroupId;
    }
    if (data.endpointsDetails !== undefined && data.endpointsDetails !== null) {
        contents.endpointsDetails = deserializeAws_restJson1_1EndpointDetailsList(data.endpointsDetails, context);
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetDataflowEndpointGroupCommand = deserializeAws_restJson1_1GetDataflowEndpointGroupCommand;
async function deserializeAws_restJson1_1GetDataflowEndpointGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1GetMissionProfileCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetMissionProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetMissionProfileResponse",
        contactPostPassDurationSeconds: undefined,
        contactPrePassDurationSeconds: undefined,
        dataflowEdges: undefined,
        minimumViableContactDurationSeconds: undefined,
        missionProfileArn: undefined,
        missionProfileId: undefined,
        name: undefined,
        region: undefined,
        tags: undefined,
        trackingConfigArn: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.contactPostPassDurationSeconds !== undefined &&
        data.contactPostPassDurationSeconds !== null) {
        contents.contactPostPassDurationSeconds =
            data.contactPostPassDurationSeconds;
    }
    if (data.contactPrePassDurationSeconds !== undefined &&
        data.contactPrePassDurationSeconds !== null) {
        contents.contactPrePassDurationSeconds = data.contactPrePassDurationSeconds;
    }
    if (data.dataflowEdges !== undefined && data.dataflowEdges !== null) {
        contents.dataflowEdges = deserializeAws_restJson1_1DataflowEdgeList(data.dataflowEdges, context);
    }
    if (data.minimumViableContactDurationSeconds !== undefined &&
        data.minimumViableContactDurationSeconds !== null) {
        contents.minimumViableContactDurationSeconds =
            data.minimumViableContactDurationSeconds;
    }
    if (data.missionProfileArn !== undefined && data.missionProfileArn !== null) {
        contents.missionProfileArn = data.missionProfileArn;
    }
    if (data.missionProfileId !== undefined && data.missionProfileId !== null) {
        contents.missionProfileId = data.missionProfileId;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.region !== undefined && data.region !== null) {
        contents.region = data.region;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
    }
    if (data.trackingConfigArn !== undefined && data.trackingConfigArn !== null) {
        contents.trackingConfigArn = data.trackingConfigArn;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetMissionProfileCommand = deserializeAws_restJson1_1GetMissionProfileCommand;
async function deserializeAws_restJson1_1GetMissionProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1ListConfigsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListConfigsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListConfigsResponse",
        configList: undefined,
        nextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.configList !== undefined && data.configList !== null) {
        contents.configList = deserializeAws_restJson1_1ConfigList(data.configList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListConfigsCommand = deserializeAws_restJson1_1ListConfigsCommand;
async function deserializeAws_restJson1_1ListConfigsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1ListContactsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListContactsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListContactsResponse",
        contactList: undefined,
        nextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.contactList !== undefined && data.contactList !== null) {
        contents.contactList = deserializeAws_restJson1_1ContactList(data.contactList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListContactsCommand = deserializeAws_restJson1_1ListContactsCommand;
async function deserializeAws_restJson1_1ListContactsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1ListDataflowEndpointGroupsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListDataflowEndpointGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListDataflowEndpointGroupsResponse",
        dataflowEndpointGroupList: undefined,
        nextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.dataflowEndpointGroupList !== undefined &&
        data.dataflowEndpointGroupList !== null) {
        contents.dataflowEndpointGroupList = deserializeAws_restJson1_1DataflowEndpointGroupList(data.dataflowEndpointGroupList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListDataflowEndpointGroupsCommand = deserializeAws_restJson1_1ListDataflowEndpointGroupsCommand;
async function deserializeAws_restJson1_1ListDataflowEndpointGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1ListMissionProfilesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListMissionProfilesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListMissionProfilesResponse",
        missionProfileList: undefined,
        nextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.missionProfileList !== undefined &&
        data.missionProfileList !== null) {
        contents.missionProfileList = deserializeAws_restJson1_1MissionProfileList(data.missionProfileList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListMissionProfilesCommand = deserializeAws_restJson1_1ListMissionProfilesCommand;
async function deserializeAws_restJson1_1ListMissionProfilesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1ReserveContactCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ReserveContactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ContactIdResponse",
        contactId: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.contactId !== undefined && data.contactId !== null) {
        contents.contactId = data.contactId;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ReserveContactCommand = deserializeAws_restJson1_1ReserveContactCommand;
async function deserializeAws_restJson1_1ReserveContactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1UpdateConfigCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ConfigIdResponse",
        configArn: undefined,
        configId: undefined,
        configType: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.configArn !== undefined && data.configArn !== null) {
        contents.configArn = data.configArn;
    }
    if (data.configId !== undefined && data.configId !== null) {
        contents.configId = data.configId;
    }
    if (data.configType !== undefined && data.configType !== null) {
        contents.configType = data.configType;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateConfigCommand = deserializeAws_restJson1_1UpdateConfigCommand;
async function deserializeAws_restJson1_1UpdateConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1UpdateMissionProfileCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateMissionProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "MissionProfileIdResponse",
        missionProfileId: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.missionProfileId !== undefined && data.missionProfileId !== null) {
        contents.missionProfileId = data.missionProfileId;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateMissionProfileCommand = deserializeAws_restJson1_1UpdateMissionProfileCommand;
async function deserializeAws_restJson1_1UpdateMissionProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1GetMinuteUsageCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetMinuteUsageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetMinuteUsageResponse",
        estimatedMinutesRemaining: undefined,
        isReservedMinutesCustomer: undefined,
        totalReservedMinuteAllocation: undefined,
        totalScheduledMinutes: undefined,
        upcomingMinutesScheduled: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.estimatedMinutesRemaining !== undefined &&
        data.estimatedMinutesRemaining !== null) {
        contents.estimatedMinutesRemaining = data.estimatedMinutesRemaining;
    }
    if (data.isReservedMinutesCustomer !== undefined &&
        data.isReservedMinutesCustomer !== null) {
        contents.isReservedMinutesCustomer = data.isReservedMinutesCustomer;
    }
    if (data.totalReservedMinuteAllocation !== undefined &&
        data.totalReservedMinuteAllocation !== null) {
        contents.totalReservedMinuteAllocation = data.totalReservedMinuteAllocation;
    }
    if (data.totalScheduledMinutes !== undefined &&
        data.totalScheduledMinutes !== null) {
        contents.totalScheduledMinutes = data.totalScheduledMinutes;
    }
    if (data.upcomingMinutesScheduled !== undefined &&
        data.upcomingMinutesScheduled !== null) {
        contents.upcomingMinutesScheduled = data.upcomingMinutesScheduled;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetMinuteUsageCommand = deserializeAws_restJson1_1GetMinuteUsageCommand;
async function deserializeAws_restJson1_1GetMinuteUsageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1GetSatelliteCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetSatelliteCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetSatelliteResponse",
        dateCreated: undefined,
        lastUpdated: undefined,
        noradSatelliteID: undefined,
        satelliteArn: undefined,
        satelliteId: undefined,
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.dateCreated !== undefined && data.dateCreated !== null) {
        contents.dateCreated = new Date(Math.round(data.dateCreated * 1000));
    }
    if (data.lastUpdated !== undefined && data.lastUpdated !== null) {
        contents.lastUpdated = new Date(Math.round(data.lastUpdated * 1000));
    }
    if (data.noradSatelliteID !== undefined && data.noradSatelliteID !== null) {
        contents.noradSatelliteID = data.noradSatelliteID;
    }
    if (data.satelliteArn !== undefined && data.satelliteArn !== null) {
        contents.satelliteArn = data.satelliteArn;
    }
    if (data.satelliteId !== undefined && data.satelliteId !== null) {
        contents.satelliteId = data.satelliteId;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetSatelliteCommand = deserializeAws_restJson1_1GetSatelliteCommand;
async function deserializeAws_restJson1_1GetSatelliteCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1ListGroundStationsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListGroundStationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListGroundStationsResponse",
        groundStationList: undefined,
        nextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.groundStationList !== undefined && data.groundStationList !== null) {
        contents.groundStationList = deserializeAws_restJson1_1GroundStationList(data.groundStationList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListGroundStationsCommand = deserializeAws_restJson1_1ListGroundStationsCommand;
async function deserializeAws_restJson1_1ListGroundStationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1ListSatellitesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListSatellitesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListSatellitesResponse",
        nextToken: undefined,
        satellites: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.satellites !== undefined && data.satellites !== null) {
        contents.satellites = deserializeAws_restJson1_1SatelliteList(data.satellites, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListSatellitesCommand = deserializeAws_restJson1_1ListSatellitesCommand;
async function deserializeAws_restJson1_1ListSatellitesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1ListTagsForResourceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListTagsForResourceResponse",
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListTagsForResourceCommand = deserializeAws_restJson1_1ListTagsForResourceCommand;
async function deserializeAws_restJson1_1ListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1TagResourceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "TagResourceResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1TagResourceCommand = deserializeAws_restJson1_1TagResourceCommand;
async function deserializeAws_restJson1_1TagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1UntagResourceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UntagResourceResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UntagResourceCommand = deserializeAws_restJson1_1UntagResourceCommand;
async function deserializeAws_restJson1_1UntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1DependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_restJson1_1DependencyExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DependencyException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        parameterName: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.parameterName !== undefined && data.parameterName !== null) {
        contents.parameterName = data.parameterName;
    }
    return contents;
};
const deserializeAws_restJson1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        parameterName: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.parameterName !== undefined && data.parameterName !== null) {
        contents.parameterName = data.parameterName;
    }
    return contents;
};
const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const serializeAws_restJson1_1AntennaDownlinkConfig = (input, context) => {
    const bodyParams = {};
    if (input.spectrumConfig !== undefined) {
        bodyParams["spectrumConfig"] = serializeAws_restJson1_1SpectrumConfig(input.spectrumConfig, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1AntennaDownlinkDemodDecodeConfig = (input, context) => {
    const bodyParams = {};
    if (input.decodeConfig !== undefined) {
        bodyParams["decodeConfig"] = serializeAws_restJson1_1DecodeConfig(input.decodeConfig, context);
    }
    if (input.demodulationConfig !== undefined) {
        bodyParams["demodulationConfig"] = serializeAws_restJson1_1DemodulationConfig(input.demodulationConfig, context);
    }
    if (input.spectrumConfig !== undefined) {
        bodyParams["spectrumConfig"] = serializeAws_restJson1_1SpectrumConfig(input.spectrumConfig, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1AntennaUplinkConfig = (input, context) => {
    const bodyParams = {};
    if (input.spectrumConfig !== undefined) {
        bodyParams["spectrumConfig"] = serializeAws_restJson1_1UplinkSpectrumConfig(input.spectrumConfig, context);
    }
    if (input.targetEirp !== undefined) {
        bodyParams["targetEirp"] = serializeAws_restJson1_1Eirp(input.targetEirp, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1ConfigTypeData = (input, context) => {
    return index_1.ConfigTypeData.visit(input, {
        antennaDownlinkConfig: value => serializeAws_restJson1_1AntennaDownlinkConfig(value, context),
        antennaDownlinkDemodDecodeConfig: value => serializeAws_restJson1_1AntennaDownlinkDemodDecodeConfig(value, context),
        antennaUplinkConfig: value => serializeAws_restJson1_1AntennaUplinkConfig(value, context),
        dataflowEndpointConfig: value => serializeAws_restJson1_1DataflowEndpointConfig(value, context),
        trackingConfig: value => serializeAws_restJson1_1TrackingConfig(value, context),
        uplinkEchoConfig: value => serializeAws_restJson1_1UplinkEchoConfig(value, context),
        _: value => value
    });
};
const serializeAws_restJson1_1DataflowEdge = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_restJson1_1DataflowEdgeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1DataflowEdge(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1DataflowEndpoint = (input, context) => {
    const bodyParams = {};
    if (input.address !== undefined) {
        bodyParams["address"] = serializeAws_restJson1_1SocketAddress(input.address, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_restJson1_1DataflowEndpointConfig = (input, context) => {
    const bodyParams = {};
    if (input.dataflowEndpointName !== undefined) {
        bodyParams["dataflowEndpointName"] = input.dataflowEndpointName;
    }
    return bodyParams;
};
const serializeAws_restJson1_1DecodeConfig = (input, context) => {
    const bodyParams = {};
    if (input.unvalidatedJSON !== undefined) {
        bodyParams["unvalidatedJSON"] = input.unvalidatedJSON;
    }
    return bodyParams;
};
const serializeAws_restJson1_1DemodulationConfig = (input, context) => {
    const bodyParams = {};
    if (input.unvalidatedJSON !== undefined) {
        bodyParams["unvalidatedJSON"] = input.unvalidatedJSON;
    }
    return bodyParams;
};
const serializeAws_restJson1_1EndpointDetails = (input, context) => {
    const bodyParams = {};
    if (input.endpoint !== undefined) {
        bodyParams["endpoint"] = serializeAws_restJson1_1DataflowEndpoint(input.endpoint, context);
    }
    if (input.securityDetails !== undefined) {
        bodyParams["securityDetails"] = serializeAws_restJson1_1SecurityDetails(input.securityDetails, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1EndpointDetailsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1EndpointDetails(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1StatusList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_restJson1_1TrackingConfig = (input, context) => {
    const bodyParams = {};
    if (input.autotrack !== undefined) {
        bodyParams["autotrack"] = input.autotrack;
    }
    return bodyParams;
};
const serializeAws_restJson1_1UplinkEchoConfig = (input, context) => {
    const bodyParams = {};
    if (input.antennaUplinkConfigArn !== undefined) {
        bodyParams["antennaUplinkConfigArn"] = input.antennaUplinkConfigArn;
    }
    if (input.enabled !== undefined) {
        bodyParams["enabled"] = input.enabled;
    }
    return bodyParams;
};
const serializeAws_restJson1_1Eirp = (input, context) => {
    const bodyParams = {};
    if (input.units !== undefined) {
        bodyParams["units"] = input.units;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_restJson1_1Frequency = (input, context) => {
    const bodyParams = {};
    if (input.units !== undefined) {
        bodyParams["units"] = input.units;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_restJson1_1FrequencyBandwidth = (input, context) => {
    const bodyParams = {};
    if (input.units !== undefined) {
        bodyParams["units"] = input.units;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_restJson1_1SecurityDetails = (input, context) => {
    const bodyParams = {};
    if (input.roleArn !== undefined) {
        bodyParams["roleArn"] = input.roleArn;
    }
    if (input.securityGroupIds !== undefined) {
        bodyParams["securityGroupIds"] = serializeAws_restJson1_1SecurityGroupIdList(input.securityGroupIds, context);
    }
    if (input.subnetIds !== undefined) {
        bodyParams["subnetIds"] = serializeAws_restJson1_1SubnetList(input.subnetIds, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1SecurityGroupIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_restJson1_1SocketAddress = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.port !== undefined) {
        bodyParams["port"] = input.port;
    }
    return bodyParams;
};
const serializeAws_restJson1_1SpectrumConfig = (input, context) => {
    const bodyParams = {};
    if (input.bandwidth !== undefined) {
        bodyParams["bandwidth"] = serializeAws_restJson1_1FrequencyBandwidth(input.bandwidth, context);
    }
    if (input.centerFrequency !== undefined) {
        bodyParams["centerFrequency"] = serializeAws_restJson1_1Frequency(input.centerFrequency, context);
    }
    if (input.polarization !== undefined) {
        bodyParams["polarization"] = input.polarization;
    }
    return bodyParams;
};
const serializeAws_restJson1_1SubnetList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_restJson1_1TagsMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_restJson1_1UplinkSpectrumConfig = (input, context) => {
    const bodyParams = {};
    if (input.centerFrequency !== undefined) {
        bodyParams["centerFrequency"] = serializeAws_restJson1_1Frequency(input.centerFrequency, context);
    }
    if (input.polarization !== undefined) {
        bodyParams["polarization"] = input.polarization;
    }
    return bodyParams;
};
const deserializeAws_restJson1_1AntennaDownlinkConfig = (output, context) => {
    let contents = {
        __type: "AntennaDownlinkConfig",
        spectrumConfig: undefined
    };
    if (output.spectrumConfig !== undefined && output.spectrumConfig !== null) {
        contents.spectrumConfig = deserializeAws_restJson1_1SpectrumConfig(output.spectrumConfig, context);
    }
    return contents;
};
const deserializeAws_restJson1_1AntennaDownlinkDemodDecodeConfig = (output, context) => {
    let contents = {
        __type: "AntennaDownlinkDemodDecodeConfig",
        decodeConfig: undefined,
        demodulationConfig: undefined,
        spectrumConfig: undefined
    };
    if (output.decodeConfig !== undefined && output.decodeConfig !== null) {
        contents.decodeConfig = deserializeAws_restJson1_1DecodeConfig(output.decodeConfig, context);
    }
    if (output.demodulationConfig !== undefined &&
        output.demodulationConfig !== null) {
        contents.demodulationConfig = deserializeAws_restJson1_1DemodulationConfig(output.demodulationConfig, context);
    }
    if (output.spectrumConfig !== undefined && output.spectrumConfig !== null) {
        contents.spectrumConfig = deserializeAws_restJson1_1SpectrumConfig(output.spectrumConfig, context);
    }
    return contents;
};
const deserializeAws_restJson1_1AntennaUplinkConfig = (output, context) => {
    let contents = {
        __type: "AntennaUplinkConfig",
        spectrumConfig: undefined,
        targetEirp: undefined
    };
    if (output.spectrumConfig !== undefined && output.spectrumConfig !== null) {
        contents.spectrumConfig = deserializeAws_restJson1_1UplinkSpectrumConfig(output.spectrumConfig, context);
    }
    if (output.targetEirp !== undefined && output.targetEirp !== null) {
        contents.targetEirp = deserializeAws_restJson1_1Eirp(output.targetEirp, context);
    }
    return contents;
};
const deserializeAws_restJson1_1ConfigList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1ConfigListItem(entry, context));
};
const deserializeAws_restJson1_1ConfigListItem = (output, context) => {
    let contents = {
        __type: "ConfigListItem",
        configArn: undefined,
        configId: undefined,
        configType: undefined,
        name: undefined
    };
    if (output.configArn !== undefined && output.configArn !== null) {
        contents.configArn = output.configArn;
    }
    if (output.configId !== undefined && output.configId !== null) {
        contents.configId = output.configId;
    }
    if (output.configType !== undefined && output.configType !== null) {
        contents.configType = output.configType;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_restJson1_1ConfigTypeData = (output, context) => {
    if (output.antennaDownlinkConfig !== undefined &&
        output.antennaDownlinkConfig !== null) {
        return {
            antennaDownlinkConfig: deserializeAws_restJson1_1AntennaDownlinkConfig(output.antennaDownlinkConfig, context)
        };
    }
    if (output.antennaDownlinkDemodDecodeConfig !== undefined &&
        output.antennaDownlinkDemodDecodeConfig !== null) {
        return {
            antennaDownlinkDemodDecodeConfig: deserializeAws_restJson1_1AntennaDownlinkDemodDecodeConfig(output.antennaDownlinkDemodDecodeConfig, context)
        };
    }
    if (output.antennaUplinkConfig !== undefined &&
        output.antennaUplinkConfig !== null) {
        return {
            antennaUplinkConfig: deserializeAws_restJson1_1AntennaUplinkConfig(output.antennaUplinkConfig, context)
        };
    }
    if (output.dataflowEndpointConfig !== undefined &&
        output.dataflowEndpointConfig !== null) {
        return {
            dataflowEndpointConfig: deserializeAws_restJson1_1DataflowEndpointConfig(output.dataflowEndpointConfig, context)
        };
    }
    if (output.trackingConfig !== undefined && output.trackingConfig !== null) {
        return {
            trackingConfig: deserializeAws_restJson1_1TrackingConfig(output.trackingConfig, context)
        };
    }
    if (output.uplinkEchoConfig !== undefined &&
        output.uplinkEchoConfig !== null) {
        return {
            uplinkEchoConfig: deserializeAws_restJson1_1UplinkEchoConfig(output.uplinkEchoConfig, context)
        };
    }
    const key = Object.keys(output)[0];
    return { $unknown: [key, output[key]] };
};
const deserializeAws_restJson1_1ContactData = (output, context) => {
    let contents = {
        __type: "ContactData",
        contactId: undefined,
        contactStatus: undefined,
        endTime: undefined,
        errorMessage: undefined,
        groundStation: undefined,
        maximumElevation: undefined,
        missionProfileArn: undefined,
        postPassEndTime: undefined,
        prePassStartTime: undefined,
        satelliteArn: undefined,
        startTime: undefined,
        tags: undefined
    };
    if (output.contactId !== undefined && output.contactId !== null) {
        contents.contactId = output.contactId;
    }
    if (output.contactStatus !== undefined && output.contactStatus !== null) {
        contents.contactStatus = output.contactStatus;
    }
    if (output.endTime !== undefined && output.endTime !== null) {
        contents.endTime = new Date(Math.round(output.endTime * 1000));
    }
    if (output.errorMessage !== undefined && output.errorMessage !== null) {
        contents.errorMessage = output.errorMessage;
    }
    if (output.groundStation !== undefined && output.groundStation !== null) {
        contents.groundStation = output.groundStation;
    }
    if (output.maximumElevation !== undefined &&
        output.maximumElevation !== null) {
        contents.maximumElevation = deserializeAws_restJson1_1Elevation(output.maximumElevation, context);
    }
    if (output.missionProfileArn !== undefined &&
        output.missionProfileArn !== null) {
        contents.missionProfileArn = output.missionProfileArn;
    }
    if (output.postPassEndTime !== undefined && output.postPassEndTime !== null) {
        contents.postPassEndTime = new Date(Math.round(output.postPassEndTime * 1000));
    }
    if (output.prePassStartTime !== undefined &&
        output.prePassStartTime !== null) {
        contents.prePassStartTime = new Date(Math.round(output.prePassStartTime * 1000));
    }
    if (output.satelliteArn !== undefined && output.satelliteArn !== null) {
        contents.satelliteArn = output.satelliteArn;
    }
    if (output.startTime !== undefined && output.startTime !== null) {
        contents.startTime = new Date(Math.round(output.startTime * 1000));
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_restJson1_1TagsMap(output.tags, context);
    }
    return contents;
};
const deserializeAws_restJson1_1ContactList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1ContactData(entry, context));
};
const deserializeAws_restJson1_1DataflowEdge = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_restJson1_1DataflowEdgeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1DataflowEdge(entry, context));
};
const deserializeAws_restJson1_1DataflowEndpoint = (output, context) => {
    let contents = {
        __type: "DataflowEndpoint",
        address: undefined,
        name: undefined,
        status: undefined
    };
    if (output.address !== undefined && output.address !== null) {
        contents.address = deserializeAws_restJson1_1SocketAddress(output.address, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_restJson1_1DataflowEndpointConfig = (output, context) => {
    let contents = {
        __type: "DataflowEndpointConfig",
        dataflowEndpointName: undefined
    };
    if (output.dataflowEndpointName !== undefined &&
        output.dataflowEndpointName !== null) {
        contents.dataflowEndpointName = output.dataflowEndpointName;
    }
    return contents;
};
const deserializeAws_restJson1_1DataflowEndpointGroupList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1DataflowEndpointListItem(entry, context));
};
const deserializeAws_restJson1_1DataflowEndpointListItem = (output, context) => {
    let contents = {
        __type: "DataflowEndpointListItem",
        dataflowEndpointGroupArn: undefined,
        dataflowEndpointGroupId: undefined
    };
    if (output.dataflowEndpointGroupArn !== undefined &&
        output.dataflowEndpointGroupArn !== null) {
        contents.dataflowEndpointGroupArn = output.dataflowEndpointGroupArn;
    }
    if (output.dataflowEndpointGroupId !== undefined &&
        output.dataflowEndpointGroupId !== null) {
        contents.dataflowEndpointGroupId = output.dataflowEndpointGroupId;
    }
    return contents;
};
const deserializeAws_restJson1_1DecodeConfig = (output, context) => {
    let contents = {
        __type: "DecodeConfig",
        unvalidatedJSON: undefined
    };
    if (output.unvalidatedJSON !== undefined && output.unvalidatedJSON !== null) {
        contents.unvalidatedJSON = output.unvalidatedJSON;
    }
    return contents;
};
const deserializeAws_restJson1_1DemodulationConfig = (output, context) => {
    let contents = {
        __type: "DemodulationConfig",
        unvalidatedJSON: undefined
    };
    if (output.unvalidatedJSON !== undefined && output.unvalidatedJSON !== null) {
        contents.unvalidatedJSON = output.unvalidatedJSON;
    }
    return contents;
};
const deserializeAws_restJson1_1EndpointDetails = (output, context) => {
    let contents = {
        __type: "EndpointDetails",
        endpoint: undefined,
        securityDetails: undefined
    };
    if (output.endpoint !== undefined && output.endpoint !== null) {
        contents.endpoint = deserializeAws_restJson1_1DataflowEndpoint(output.endpoint, context);
    }
    if (output.securityDetails !== undefined && output.securityDetails !== null) {
        contents.securityDetails = deserializeAws_restJson1_1SecurityDetails(output.securityDetails, context);
    }
    return contents;
};
const deserializeAws_restJson1_1EndpointDetailsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1EndpointDetails(entry, context));
};
const deserializeAws_restJson1_1MissionProfileList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1MissionProfileListItem(entry, context));
};
const deserializeAws_restJson1_1MissionProfileListItem = (output, context) => {
    let contents = {
        __type: "MissionProfileListItem",
        missionProfileArn: undefined,
        missionProfileId: undefined,
        name: undefined,
        region: undefined
    };
    if (output.missionProfileArn !== undefined &&
        output.missionProfileArn !== null) {
        contents.missionProfileArn = output.missionProfileArn;
    }
    if (output.missionProfileId !== undefined &&
        output.missionProfileId !== null) {
        contents.missionProfileId = output.missionProfileId;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.region !== undefined && output.region !== null) {
        contents.region = output.region;
    }
    return contents;
};
const deserializeAws_restJson1_1TrackingConfig = (output, context) => {
    let contents = {
        __type: "TrackingConfig",
        autotrack: undefined
    };
    if (output.autotrack !== undefined && output.autotrack !== null) {
        contents.autotrack = output.autotrack;
    }
    return contents;
};
const deserializeAws_restJson1_1UplinkEchoConfig = (output, context) => {
    let contents = {
        __type: "UplinkEchoConfig",
        antennaUplinkConfigArn: undefined,
        enabled: undefined
    };
    if (output.antennaUplinkConfigArn !== undefined &&
        output.antennaUplinkConfigArn !== null) {
        contents.antennaUplinkConfigArn = output.antennaUplinkConfigArn;
    }
    if (output.enabled !== undefined && output.enabled !== null) {
        contents.enabled = output.enabled;
    }
    return contents;
};
const deserializeAws_restJson1_1Eirp = (output, context) => {
    let contents = {
        __type: "Eirp",
        units: undefined,
        value: undefined
    };
    if (output.units !== undefined && output.units !== null) {
        contents.units = output.units;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_restJson1_1Elevation = (output, context) => {
    let contents = {
        __type: "Elevation",
        unit: undefined,
        value: undefined
    };
    if (output.unit !== undefined && output.unit !== null) {
        contents.unit = output.unit;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_restJson1_1Frequency = (output, context) => {
    let contents = {
        __type: "Frequency",
        units: undefined,
        value: undefined
    };
    if (output.units !== undefined && output.units !== null) {
        contents.units = output.units;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_restJson1_1FrequencyBandwidth = (output, context) => {
    let contents = {
        __type: "FrequencyBandwidth",
        units: undefined,
        value: undefined
    };
    if (output.units !== undefined && output.units !== null) {
        contents.units = output.units;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_restJson1_1GroundStationData = (output, context) => {
    let contents = {
        __type: "GroundStationData",
        groundStationId: undefined,
        groundStationName: undefined,
        region: undefined
    };
    if (output.groundStationId !== undefined && output.groundStationId !== null) {
        contents.groundStationId = output.groundStationId;
    }
    if (output.groundStationName !== undefined &&
        output.groundStationName !== null) {
        contents.groundStationName = output.groundStationName;
    }
    if (output.region !== undefined && output.region !== null) {
        contents.region = output.region;
    }
    return contents;
};
const deserializeAws_restJson1_1GroundStationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1GroundStationData(entry, context));
};
const deserializeAws_restJson1_1SatelliteList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1SatelliteListItem(entry, context));
};
const deserializeAws_restJson1_1SatelliteListItem = (output, context) => {
    let contents = {
        __type: "SatelliteListItem",
        noradSatelliteID: undefined,
        satelliteArn: undefined,
        satelliteId: undefined
    };
    if (output.noradSatelliteID !== undefined &&
        output.noradSatelliteID !== null) {
        contents.noradSatelliteID = output.noradSatelliteID;
    }
    if (output.satelliteArn !== undefined && output.satelliteArn !== null) {
        contents.satelliteArn = output.satelliteArn;
    }
    if (output.satelliteId !== undefined && output.satelliteId !== null) {
        contents.satelliteId = output.satelliteId;
    }
    return contents;
};
const deserializeAws_restJson1_1SecurityDetails = (output, context) => {
    let contents = {
        __type: "SecurityDetails",
        roleArn: undefined,
        securityGroupIds: undefined,
        subnetIds: undefined
    };
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    if (output.securityGroupIds !== undefined &&
        output.securityGroupIds !== null) {
        contents.securityGroupIds = deserializeAws_restJson1_1SecurityGroupIdList(output.securityGroupIds, context);
    }
    if (output.subnetIds !== undefined && output.subnetIds !== null) {
        contents.subnetIds = deserializeAws_restJson1_1SubnetList(output.subnetIds, context);
    }
    return contents;
};
const deserializeAws_restJson1_1SecurityGroupIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_restJson1_1SocketAddress = (output, context) => {
    let contents = {
        __type: "SocketAddress",
        name: undefined,
        port: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.port !== undefined && output.port !== null) {
        contents.port = output.port;
    }
    return contents;
};
const deserializeAws_restJson1_1SpectrumConfig = (output, context) => {
    let contents = {
        __type: "SpectrumConfig",
        bandwidth: undefined,
        centerFrequency: undefined,
        polarization: undefined
    };
    if (output.bandwidth !== undefined && output.bandwidth !== null) {
        contents.bandwidth = deserializeAws_restJson1_1FrequencyBandwidth(output.bandwidth, context);
    }
    if (output.centerFrequency !== undefined && output.centerFrequency !== null) {
        contents.centerFrequency = deserializeAws_restJson1_1Frequency(output.centerFrequency, context);
    }
    if (output.polarization !== undefined && output.polarization !== null) {
        contents.polarization = output.polarization;
    }
    return contents;
};
const deserializeAws_restJson1_1SubnetList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_restJson1_1TagsMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_restJson1_1UplinkSpectrumConfig = (output, context) => {
    let contents = {
        __type: "UplinkSpectrumConfig",
        centerFrequency: undefined,
        polarization: undefined
    };
    if (output.centerFrequency !== undefined && output.centerFrequency !== null) {
        contents.centerFrequency = deserializeAws_restJson1_1Frequency(output.centerFrequency, context);
    }
    if (output.polarization !== undefined && output.polarization !== null) {
        contents.polarization = output.polarization;
    }
    return contents;
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    httpHeaders: output.headers,
    requestId: output.headers["x-amzn-requestid"]
});
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody, context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return (context.streamCollector(streamBody) || Promise.resolve(new Uint8Array()));
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => {
    return collectBody(streamBody, context).then(body => context.utf8Encoder(body));
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_restJson1_1.js.map