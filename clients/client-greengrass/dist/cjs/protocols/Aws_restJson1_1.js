"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
async function serializeAws_restJson1_1AssociateRoleToGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/greengrass/groups/{GroupId}/role";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    let body;
    const bodyParams = {};
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1AssociateRoleToGroupCommand = serializeAws_restJson1_1AssociateRoleToGroupCommand;
async function serializeAws_restJson1_1AssociateServiceRoleToAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/greengrass/servicerole";
    let body;
    const bodyParams = {};
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1AssociateServiceRoleToAccountCommand = serializeAws_restJson1_1AssociateServiceRoleToAccountCommand;
async function serializeAws_restJson1_1CreateConnectorDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/definition/connectors";
    let body;
    const bodyParams = {};
    if (input.InitialVersion !== undefined) {
        bodyParams["InitialVersion"] = serializeAws_restJson1_1ConnectorDefinitionVersion(input.InitialVersion, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1Tags(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateConnectorDefinitionCommand = serializeAws_restJson1_1CreateConnectorDefinitionCommand;
async function serializeAws_restJson1_1CreateConnectorDefinitionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions";
    if (input.ConnectorDefinitionId !== undefined) {
        const labelValue = input.ConnectorDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectorDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectorDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectorDefinitionId.");
    }
    let body;
    const bodyParams = {};
    if (input.Connectors !== undefined) {
        bodyParams["Connectors"] = serializeAws_restJson1_1__listOfConnector(input.Connectors, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateConnectorDefinitionVersionCommand = serializeAws_restJson1_1CreateConnectorDefinitionVersionCommand;
async function serializeAws_restJson1_1CreateCoreDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/definition/cores";
    let body;
    const bodyParams = {};
    if (input.InitialVersion !== undefined) {
        bodyParams["InitialVersion"] = serializeAws_restJson1_1CoreDefinitionVersion(input.InitialVersion, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1Tags(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateCoreDefinitionCommand = serializeAws_restJson1_1CreateCoreDefinitionCommand;
async function serializeAws_restJson1_1CreateCoreDefinitionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/definition/cores/{CoreDefinitionId}/versions";
    if (input.CoreDefinitionId !== undefined) {
        const labelValue = input.CoreDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CoreDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{CoreDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CoreDefinitionId.");
    }
    let body;
    const bodyParams = {};
    if (input.Cores !== undefined) {
        bodyParams["Cores"] = serializeAws_restJson1_1__listOfCore(input.Cores, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateCoreDefinitionVersionCommand = serializeAws_restJson1_1CreateCoreDefinitionVersionCommand;
async function serializeAws_restJson1_1CreateDeploymentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/groups/{GroupId}/deployments";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    let body;
    const bodyParams = {};
    if (input.DeploymentId !== undefined) {
        bodyParams["DeploymentId"] = input.DeploymentId;
    }
    if (input.DeploymentType !== undefined) {
        bodyParams["DeploymentType"] = input.DeploymentType;
    }
    if (input.GroupVersionId !== undefined) {
        bodyParams["GroupVersionId"] = input.GroupVersionId;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateDeploymentCommand = serializeAws_restJson1_1CreateDeploymentCommand;
async function serializeAws_restJson1_1CreateDeviceDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/definition/devices";
    let body;
    const bodyParams = {};
    if (input.InitialVersion !== undefined) {
        bodyParams["InitialVersion"] = serializeAws_restJson1_1DeviceDefinitionVersion(input.InitialVersion, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1Tags(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateDeviceDefinitionCommand = serializeAws_restJson1_1CreateDeviceDefinitionCommand;
async function serializeAws_restJson1_1CreateDeviceDefinitionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/definition/devices/{DeviceDefinitionId}/versions";
    if (input.DeviceDefinitionId !== undefined) {
        const labelValue = input.DeviceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceDefinitionId.");
    }
    let body;
    const bodyParams = {};
    if (input.Devices !== undefined) {
        bodyParams["Devices"] = serializeAws_restJson1_1__listOfDevice(input.Devices, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateDeviceDefinitionVersionCommand = serializeAws_restJson1_1CreateDeviceDefinitionVersionCommand;
async function serializeAws_restJson1_1CreateFunctionDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/definition/functions";
    let body;
    const bodyParams = {};
    if (input.InitialVersion !== undefined) {
        bodyParams["InitialVersion"] = serializeAws_restJson1_1FunctionDefinitionVersion(input.InitialVersion, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1Tags(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateFunctionDefinitionCommand = serializeAws_restJson1_1CreateFunctionDefinitionCommand;
async function serializeAws_restJson1_1CreateFunctionDefinitionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/definition/functions/{FunctionDefinitionId}/versions";
    if (input.FunctionDefinitionId !== undefined) {
        const labelValue = input.FunctionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{FunctionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionDefinitionId.");
    }
    let body;
    const bodyParams = {};
    if (input.DefaultConfig !== undefined) {
        bodyParams["DefaultConfig"] = serializeAws_restJson1_1FunctionDefaultConfig(input.DefaultConfig, context);
    }
    if (input.Functions !== undefined) {
        bodyParams["Functions"] = serializeAws_restJson1_1__listOfFunction(input.Functions, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateFunctionDefinitionVersionCommand = serializeAws_restJson1_1CreateFunctionDefinitionVersionCommand;
async function serializeAws_restJson1_1CreateGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/groups";
    let body;
    const bodyParams = {};
    if (input.InitialVersion !== undefined) {
        bodyParams["InitialVersion"] = serializeAws_restJson1_1GroupVersion(input.InitialVersion, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1Tags(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateGroupCommand = serializeAws_restJson1_1CreateGroupCommand;
async function serializeAws_restJson1_1CreateGroupCertificateAuthorityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/groups/{GroupId}/certificateauthorities";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1CreateGroupCertificateAuthorityCommand = serializeAws_restJson1_1CreateGroupCertificateAuthorityCommand;
async function serializeAws_restJson1_1CreateGroupVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/groups/{GroupId}/versions";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    let body;
    const bodyParams = {};
    if (input.ConnectorDefinitionVersionArn !== undefined) {
        bodyParams["ConnectorDefinitionVersionArn"] =
            input.ConnectorDefinitionVersionArn;
    }
    if (input.CoreDefinitionVersionArn !== undefined) {
        bodyParams["CoreDefinitionVersionArn"] = input.CoreDefinitionVersionArn;
    }
    if (input.DeviceDefinitionVersionArn !== undefined) {
        bodyParams["DeviceDefinitionVersionArn"] = input.DeviceDefinitionVersionArn;
    }
    if (input.FunctionDefinitionVersionArn !== undefined) {
        bodyParams["FunctionDefinitionVersionArn"] =
            input.FunctionDefinitionVersionArn;
    }
    if (input.LoggerDefinitionVersionArn !== undefined) {
        bodyParams["LoggerDefinitionVersionArn"] = input.LoggerDefinitionVersionArn;
    }
    if (input.ResourceDefinitionVersionArn !== undefined) {
        bodyParams["ResourceDefinitionVersionArn"] =
            input.ResourceDefinitionVersionArn;
    }
    if (input.SubscriptionDefinitionVersionArn !== undefined) {
        bodyParams["SubscriptionDefinitionVersionArn"] =
            input.SubscriptionDefinitionVersionArn;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateGroupVersionCommand = serializeAws_restJson1_1CreateGroupVersionCommand;
async function serializeAws_restJson1_1CreateLoggerDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/definition/loggers";
    let body;
    const bodyParams = {};
    if (input.InitialVersion !== undefined) {
        bodyParams["InitialVersion"] = serializeAws_restJson1_1LoggerDefinitionVersion(input.InitialVersion, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1Tags(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateLoggerDefinitionCommand = serializeAws_restJson1_1CreateLoggerDefinitionCommand;
async function serializeAws_restJson1_1CreateLoggerDefinitionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/definition/loggers/{LoggerDefinitionId}/versions";
    if (input.LoggerDefinitionId !== undefined) {
        const labelValue = input.LoggerDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LoggerDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{LoggerDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LoggerDefinitionId.");
    }
    let body;
    const bodyParams = {};
    if (input.Loggers !== undefined) {
        bodyParams["Loggers"] = serializeAws_restJson1_1__listOfLogger(input.Loggers, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateLoggerDefinitionVersionCommand = serializeAws_restJson1_1CreateLoggerDefinitionVersionCommand;
async function serializeAws_restJson1_1CreateResourceDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/definition/resources";
    let body;
    const bodyParams = {};
    if (input.InitialVersion !== undefined) {
        bodyParams["InitialVersion"] = serializeAws_restJson1_1ResourceDefinitionVersion(input.InitialVersion, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1Tags(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateResourceDefinitionCommand = serializeAws_restJson1_1CreateResourceDefinitionCommand;
async function serializeAws_restJson1_1CreateResourceDefinitionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/definition/resources/{ResourceDefinitionId}/versions";
    if (input.ResourceDefinitionId !== undefined) {
        const labelValue = input.ResourceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceDefinitionId.");
    }
    let body;
    const bodyParams = {};
    if (input.Resources !== undefined) {
        bodyParams["Resources"] = serializeAws_restJson1_1__listOfResource(input.Resources, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateResourceDefinitionVersionCommand = serializeAws_restJson1_1CreateResourceDefinitionVersionCommand;
async function serializeAws_restJson1_1CreateSoftwareUpdateJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/updates";
    let body;
    const bodyParams = {};
    if (input.S3UrlSignerRole !== undefined) {
        bodyParams["S3UrlSignerRole"] = input.S3UrlSignerRole;
    }
    if (input.SoftwareToUpdate !== undefined) {
        bodyParams["SoftwareToUpdate"] = input.SoftwareToUpdate;
    }
    if (input.UpdateAgentLogLevel !== undefined) {
        bodyParams["UpdateAgentLogLevel"] = input.UpdateAgentLogLevel;
    }
    if (input.UpdateTargets !== undefined) {
        bodyParams["UpdateTargets"] = serializeAws_restJson1_1UpdateTargets(input.UpdateTargets, context);
    }
    if (input.UpdateTargetsArchitecture !== undefined) {
        bodyParams["UpdateTargetsArchitecture"] = input.UpdateTargetsArchitecture;
    }
    if (input.UpdateTargetsOperatingSystem !== undefined) {
        bodyParams["UpdateTargetsOperatingSystem"] =
            input.UpdateTargetsOperatingSystem;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateSoftwareUpdateJobCommand = serializeAws_restJson1_1CreateSoftwareUpdateJobCommand;
async function serializeAws_restJson1_1CreateSubscriptionDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/definition/subscriptions";
    let body;
    const bodyParams = {};
    if (input.InitialVersion !== undefined) {
        bodyParams["InitialVersion"] = serializeAws_restJson1_1SubscriptionDefinitionVersion(input.InitialVersion, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1Tags(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateSubscriptionDefinitionCommand = serializeAws_restJson1_1CreateSubscriptionDefinitionCommand;
async function serializeAws_restJson1_1CreateSubscriptionDefinitionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions";
    if (input.SubscriptionDefinitionId !== undefined) {
        const labelValue = input.SubscriptionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionDefinitionId.");
    }
    let body;
    const bodyParams = {};
    if (input.Subscriptions !== undefined) {
        bodyParams["Subscriptions"] = serializeAws_restJson1_1__listOfSubscription(input.Subscriptions, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateSubscriptionDefinitionVersionCommand = serializeAws_restJson1_1CreateSubscriptionDefinitionVersionCommand;
async function serializeAws_restJson1_1DeleteConnectorDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/connectors/{ConnectorDefinitionId}";
    if (input.ConnectorDefinitionId !== undefined) {
        const labelValue = input.ConnectorDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectorDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectorDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectorDefinitionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteConnectorDefinitionCommand = serializeAws_restJson1_1DeleteConnectorDefinitionCommand;
async function serializeAws_restJson1_1DeleteCoreDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/cores/{CoreDefinitionId}";
    if (input.CoreDefinitionId !== undefined) {
        const labelValue = input.CoreDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CoreDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{CoreDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CoreDefinitionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteCoreDefinitionCommand = serializeAws_restJson1_1DeleteCoreDefinitionCommand;
async function serializeAws_restJson1_1DeleteDeviceDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/devices/{DeviceDefinitionId}";
    if (input.DeviceDefinitionId !== undefined) {
        const labelValue = input.DeviceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceDefinitionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteDeviceDefinitionCommand = serializeAws_restJson1_1DeleteDeviceDefinitionCommand;
async function serializeAws_restJson1_1DeleteFunctionDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/functions/{FunctionDefinitionId}";
    if (input.FunctionDefinitionId !== undefined) {
        const labelValue = input.FunctionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{FunctionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionDefinitionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteFunctionDefinitionCommand = serializeAws_restJson1_1DeleteFunctionDefinitionCommand;
async function serializeAws_restJson1_1DeleteGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/groups/{GroupId}";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteGroupCommand = serializeAws_restJson1_1DeleteGroupCommand;
async function serializeAws_restJson1_1DeleteLoggerDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/loggers/{LoggerDefinitionId}";
    if (input.LoggerDefinitionId !== undefined) {
        const labelValue = input.LoggerDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LoggerDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{LoggerDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LoggerDefinitionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteLoggerDefinitionCommand = serializeAws_restJson1_1DeleteLoggerDefinitionCommand;
async function serializeAws_restJson1_1DeleteResourceDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/resources/{ResourceDefinitionId}";
    if (input.ResourceDefinitionId !== undefined) {
        const labelValue = input.ResourceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceDefinitionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteResourceDefinitionCommand = serializeAws_restJson1_1DeleteResourceDefinitionCommand;
async function serializeAws_restJson1_1DeleteSubscriptionDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}";
    if (input.SubscriptionDefinitionId !== undefined) {
        const labelValue = input.SubscriptionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionDefinitionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteSubscriptionDefinitionCommand = serializeAws_restJson1_1DeleteSubscriptionDefinitionCommand;
async function serializeAws_restJson1_1DisassociateRoleFromGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/groups/{GroupId}/role";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DisassociateRoleFromGroupCommand = serializeAws_restJson1_1DisassociateRoleFromGroupCommand;
async function serializeAws_restJson1_1DisassociateServiceRoleFromAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/servicerole";
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DisassociateServiceRoleFromAccountCommand = serializeAws_restJson1_1DisassociateServiceRoleFromAccountCommand;
async function serializeAws_restJson1_1GetAssociatedRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/groups/{GroupId}/role";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetAssociatedRoleCommand = serializeAws_restJson1_1GetAssociatedRoleCommand;
async function serializeAws_restJson1_1GetBulkDeploymentStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/bulk/deployments/{BulkDeploymentId}/status";
    if (input.BulkDeploymentId !== undefined) {
        const labelValue = input.BulkDeploymentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BulkDeploymentId.");
        }
        resolvedPath = resolvedPath.replace("{BulkDeploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BulkDeploymentId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetBulkDeploymentStatusCommand = serializeAws_restJson1_1GetBulkDeploymentStatusCommand;
async function serializeAws_restJson1_1GetConnectivityInfoCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/things/{ThingName}/connectivityInfo";
    if (input.ThingName !== undefined) {
        const labelValue = input.ThingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThingName.");
        }
        resolvedPath = resolvedPath.replace("{ThingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThingName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetConnectivityInfoCommand = serializeAws_restJson1_1GetConnectivityInfoCommand;
async function serializeAws_restJson1_1GetConnectorDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/connectors/{ConnectorDefinitionId}";
    if (input.ConnectorDefinitionId !== undefined) {
        const labelValue = input.ConnectorDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectorDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectorDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectorDefinitionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetConnectorDefinitionCommand = serializeAws_restJson1_1GetConnectorDefinitionCommand;
async function serializeAws_restJson1_1GetConnectorDefinitionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions/{ConnectorDefinitionVersionId}";
    if (input.ConnectorDefinitionId !== undefined) {
        const labelValue = input.ConnectorDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectorDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectorDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectorDefinitionId.");
    }
    if (input.ConnectorDefinitionVersionId !== undefined) {
        const labelValue = input.ConnectorDefinitionVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectorDefinitionVersionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectorDefinitionVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectorDefinitionVersionId.");
    }
    const query = {};
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1GetConnectorDefinitionVersionCommand = serializeAws_restJson1_1GetConnectorDefinitionVersionCommand;
async function serializeAws_restJson1_1GetCoreDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/cores/{CoreDefinitionId}";
    if (input.CoreDefinitionId !== undefined) {
        const labelValue = input.CoreDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CoreDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{CoreDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CoreDefinitionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetCoreDefinitionCommand = serializeAws_restJson1_1GetCoreDefinitionCommand;
async function serializeAws_restJson1_1GetCoreDefinitionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}";
    if (input.CoreDefinitionId !== undefined) {
        const labelValue = input.CoreDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CoreDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{CoreDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CoreDefinitionId.");
    }
    if (input.CoreDefinitionVersionId !== undefined) {
        const labelValue = input.CoreDefinitionVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CoreDefinitionVersionId.");
        }
        resolvedPath = resolvedPath.replace("{CoreDefinitionVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CoreDefinitionVersionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetCoreDefinitionVersionCommand = serializeAws_restJson1_1GetCoreDefinitionVersionCommand;
async function serializeAws_restJson1_1GetDeploymentStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/groups/{GroupId}/deployments/{DeploymentId}/status";
    if (input.DeploymentId !== undefined) {
        const labelValue = input.DeploymentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeploymentId.");
        }
        resolvedPath = resolvedPath.replace("{DeploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeploymentId.");
    }
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetDeploymentStatusCommand = serializeAws_restJson1_1GetDeploymentStatusCommand;
async function serializeAws_restJson1_1GetDeviceDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/devices/{DeviceDefinitionId}";
    if (input.DeviceDefinitionId !== undefined) {
        const labelValue = input.DeviceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceDefinitionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetDeviceDefinitionCommand = serializeAws_restJson1_1GetDeviceDefinitionCommand;
async function serializeAws_restJson1_1GetDeviceDefinitionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}";
    if (input.DeviceDefinitionId !== undefined) {
        const labelValue = input.DeviceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceDefinitionId.");
    }
    if (input.DeviceDefinitionVersionId !== undefined) {
        const labelValue = input.DeviceDefinitionVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceDefinitionVersionId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceDefinitionVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceDefinitionVersionId.");
    }
    const query = {};
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1GetDeviceDefinitionVersionCommand = serializeAws_restJson1_1GetDeviceDefinitionVersionCommand;
async function serializeAws_restJson1_1GetFunctionDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/functions/{FunctionDefinitionId}";
    if (input.FunctionDefinitionId !== undefined) {
        const labelValue = input.FunctionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{FunctionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionDefinitionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetFunctionDefinitionCommand = serializeAws_restJson1_1GetFunctionDefinitionCommand;
async function serializeAws_restJson1_1GetFunctionDefinitionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}";
    if (input.FunctionDefinitionId !== undefined) {
        const labelValue = input.FunctionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{FunctionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionDefinitionId.");
    }
    if (input.FunctionDefinitionVersionId !== undefined) {
        const labelValue = input.FunctionDefinitionVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionDefinitionVersionId.");
        }
        resolvedPath = resolvedPath.replace("{FunctionDefinitionVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionDefinitionVersionId.");
    }
    const query = {};
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1GetFunctionDefinitionVersionCommand = serializeAws_restJson1_1GetFunctionDefinitionVersionCommand;
async function serializeAws_restJson1_1GetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/groups/{GroupId}";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetGroupCommand = serializeAws_restJson1_1GetGroupCommand;
async function serializeAws_restJson1_1GetGroupCertificateAuthorityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}";
    if (input.CertificateAuthorityId !== undefined) {
        const labelValue = input.CertificateAuthorityId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CertificateAuthorityId.");
        }
        resolvedPath = resolvedPath.replace("{CertificateAuthorityId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CertificateAuthorityId.");
    }
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetGroupCertificateAuthorityCommand = serializeAws_restJson1_1GetGroupCertificateAuthorityCommand;
async function serializeAws_restJson1_1GetGroupCertificateConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetGroupCertificateConfigurationCommand = serializeAws_restJson1_1GetGroupCertificateConfigurationCommand;
async function serializeAws_restJson1_1GetGroupVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/groups/{GroupId}/versions/{GroupVersionId}";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    if (input.GroupVersionId !== undefined) {
        const labelValue = input.GroupVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupVersionId.");
        }
        resolvedPath = resolvedPath.replace("{GroupVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupVersionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetGroupVersionCommand = serializeAws_restJson1_1GetGroupVersionCommand;
async function serializeAws_restJson1_1GetLoggerDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/loggers/{LoggerDefinitionId}";
    if (input.LoggerDefinitionId !== undefined) {
        const labelValue = input.LoggerDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LoggerDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{LoggerDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LoggerDefinitionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetLoggerDefinitionCommand = serializeAws_restJson1_1GetLoggerDefinitionCommand;
async function serializeAws_restJson1_1GetLoggerDefinitionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}";
    if (input.LoggerDefinitionId !== undefined) {
        const labelValue = input.LoggerDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LoggerDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{LoggerDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LoggerDefinitionId.");
    }
    if (input.LoggerDefinitionVersionId !== undefined) {
        const labelValue = input.LoggerDefinitionVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LoggerDefinitionVersionId.");
        }
        resolvedPath = resolvedPath.replace("{LoggerDefinitionVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LoggerDefinitionVersionId.");
    }
    const query = {};
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1GetLoggerDefinitionVersionCommand = serializeAws_restJson1_1GetLoggerDefinitionVersionCommand;
async function serializeAws_restJson1_1GetResourceDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/resources/{ResourceDefinitionId}";
    if (input.ResourceDefinitionId !== undefined) {
        const labelValue = input.ResourceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceDefinitionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetResourceDefinitionCommand = serializeAws_restJson1_1GetResourceDefinitionCommand;
async function serializeAws_restJson1_1GetResourceDefinitionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}";
    if (input.ResourceDefinitionId !== undefined) {
        const labelValue = input.ResourceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceDefinitionId.");
    }
    if (input.ResourceDefinitionVersionId !== undefined) {
        const labelValue = input.ResourceDefinitionVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceDefinitionVersionId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceDefinitionVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceDefinitionVersionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetResourceDefinitionVersionCommand = serializeAws_restJson1_1GetResourceDefinitionVersionCommand;
async function serializeAws_restJson1_1GetServiceRoleForAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/servicerole";
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetServiceRoleForAccountCommand = serializeAws_restJson1_1GetServiceRoleForAccountCommand;
async function serializeAws_restJson1_1GetSubscriptionDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}";
    if (input.SubscriptionDefinitionId !== undefined) {
        const labelValue = input.SubscriptionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionDefinitionId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetSubscriptionDefinitionCommand = serializeAws_restJson1_1GetSubscriptionDefinitionCommand;
async function serializeAws_restJson1_1GetSubscriptionDefinitionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}";
    if (input.SubscriptionDefinitionId !== undefined) {
        const labelValue = input.SubscriptionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionDefinitionId.");
    }
    if (input.SubscriptionDefinitionVersionId !== undefined) {
        const labelValue = input.SubscriptionDefinitionVersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionDefinitionVersionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionDefinitionVersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionDefinitionVersionId.");
    }
    const query = {};
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1GetSubscriptionDefinitionVersionCommand = serializeAws_restJson1_1GetSubscriptionDefinitionVersionCommand;
async function serializeAws_restJson1_1ListBulkDeploymentDetailedReportsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports";
    if (input.BulkDeploymentId !== undefined) {
        const labelValue = input.BulkDeploymentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BulkDeploymentId.");
        }
        resolvedPath = resolvedPath.replace("{BulkDeploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BulkDeploymentId.");
    }
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListBulkDeploymentDetailedReportsCommand = serializeAws_restJson1_1ListBulkDeploymentDetailedReportsCommand;
async function serializeAws_restJson1_1ListBulkDeploymentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/bulk/deployments";
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListBulkDeploymentsCommand = serializeAws_restJson1_1ListBulkDeploymentsCommand;
async function serializeAws_restJson1_1ListConnectorDefinitionVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions";
    if (input.ConnectorDefinitionId !== undefined) {
        const labelValue = input.ConnectorDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectorDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectorDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectorDefinitionId.");
    }
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListConnectorDefinitionVersionsCommand = serializeAws_restJson1_1ListConnectorDefinitionVersionsCommand;
async function serializeAws_restJson1_1ListConnectorDefinitionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/connectors";
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListConnectorDefinitionsCommand = serializeAws_restJson1_1ListConnectorDefinitionsCommand;
async function serializeAws_restJson1_1ListCoreDefinitionVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/cores/{CoreDefinitionId}/versions";
    if (input.CoreDefinitionId !== undefined) {
        const labelValue = input.CoreDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CoreDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{CoreDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CoreDefinitionId.");
    }
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListCoreDefinitionVersionsCommand = serializeAws_restJson1_1ListCoreDefinitionVersionsCommand;
async function serializeAws_restJson1_1ListCoreDefinitionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/cores";
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListCoreDefinitionsCommand = serializeAws_restJson1_1ListCoreDefinitionsCommand;
async function serializeAws_restJson1_1ListDeploymentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/groups/{GroupId}/deployments";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListDeploymentsCommand = serializeAws_restJson1_1ListDeploymentsCommand;
async function serializeAws_restJson1_1ListDeviceDefinitionVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/devices/{DeviceDefinitionId}/versions";
    if (input.DeviceDefinitionId !== undefined) {
        const labelValue = input.DeviceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceDefinitionId.");
    }
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListDeviceDefinitionVersionsCommand = serializeAws_restJson1_1ListDeviceDefinitionVersionsCommand;
async function serializeAws_restJson1_1ListDeviceDefinitionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/devices";
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListDeviceDefinitionsCommand = serializeAws_restJson1_1ListDeviceDefinitionsCommand;
async function serializeAws_restJson1_1ListFunctionDefinitionVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/functions/{FunctionDefinitionId}/versions";
    if (input.FunctionDefinitionId !== undefined) {
        const labelValue = input.FunctionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{FunctionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionDefinitionId.");
    }
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListFunctionDefinitionVersionsCommand = serializeAws_restJson1_1ListFunctionDefinitionVersionsCommand;
async function serializeAws_restJson1_1ListFunctionDefinitionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/functions";
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListFunctionDefinitionsCommand = serializeAws_restJson1_1ListFunctionDefinitionsCommand;
async function serializeAws_restJson1_1ListGroupCertificateAuthoritiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/groups/{GroupId}/certificateauthorities";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1ListGroupCertificateAuthoritiesCommand = serializeAws_restJson1_1ListGroupCertificateAuthoritiesCommand;
async function serializeAws_restJson1_1ListGroupVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/groups/{GroupId}/versions";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListGroupVersionsCommand = serializeAws_restJson1_1ListGroupVersionsCommand;
async function serializeAws_restJson1_1ListGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/groups";
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListGroupsCommand = serializeAws_restJson1_1ListGroupsCommand;
async function serializeAws_restJson1_1ListLoggerDefinitionVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/loggers/{LoggerDefinitionId}/versions";
    if (input.LoggerDefinitionId !== undefined) {
        const labelValue = input.LoggerDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LoggerDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{LoggerDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LoggerDefinitionId.");
    }
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListLoggerDefinitionVersionsCommand = serializeAws_restJson1_1ListLoggerDefinitionVersionsCommand;
async function serializeAws_restJson1_1ListLoggerDefinitionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/loggers";
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListLoggerDefinitionsCommand = serializeAws_restJson1_1ListLoggerDefinitionsCommand;
async function serializeAws_restJson1_1ListResourceDefinitionVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/resources/{ResourceDefinitionId}/versions";
    if (input.ResourceDefinitionId !== undefined) {
        const labelValue = input.ResourceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceDefinitionId.");
    }
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListResourceDefinitionVersionsCommand = serializeAws_restJson1_1ListResourceDefinitionVersionsCommand;
async function serializeAws_restJson1_1ListResourceDefinitionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/resources";
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListResourceDefinitionsCommand = serializeAws_restJson1_1ListResourceDefinitionsCommand;
async function serializeAws_restJson1_1ListSubscriptionDefinitionVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions";
    if (input.SubscriptionDefinitionId !== undefined) {
        const labelValue = input.SubscriptionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionDefinitionId.");
    }
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListSubscriptionDefinitionVersionsCommand = serializeAws_restJson1_1ListSubscriptionDefinitionVersionsCommand;
async function serializeAws_restJson1_1ListSubscriptionDefinitionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/definition/subscriptions";
    const query = {};
    if (input.MaxResults !== undefined) {
        query["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["NextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListSubscriptionDefinitionsCommand = serializeAws_restJson1_1ListSubscriptionDefinitionsCommand;
async function serializeAws_restJson1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1ListTagsForResourceCommand = serializeAws_restJson1_1ListTagsForResourceCommand;
async function serializeAws_restJson1_1ResetDeploymentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/groups/{GroupId}/deployments/$reset";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    let body;
    const bodyParams = {};
    if (input.Force !== undefined) {
        bodyParams["Force"] = input.Force;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1ResetDeploymentsCommand = serializeAws_restJson1_1ResetDeploymentsCommand;
async function serializeAws_restJson1_1StartBulkDeploymentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    if (input.AmznClientToken !== undefined) {
        headers["X-Amzn-Client-Token"] = input.AmznClientToken;
    }
    let resolvedPath = "/greengrass/bulk/deployments";
    let body;
    const bodyParams = {};
    if (input.ExecutionRoleArn !== undefined) {
        bodyParams["ExecutionRoleArn"] = input.ExecutionRoleArn;
    }
    if (input.InputFileUri !== undefined) {
        bodyParams["InputFileUri"] = input.InputFileUri;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1Tags(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1StartBulkDeploymentCommand = serializeAws_restJson1_1StartBulkDeploymentCommand;
async function serializeAws_restJson1_1StopBulkDeploymentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/greengrass/bulk/deployments/{BulkDeploymentId}/$stop";
    if (input.BulkDeploymentId !== undefined) {
        const labelValue = input.BulkDeploymentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: BulkDeploymentId.");
        }
        resolvedPath = resolvedPath.replace("{BulkDeploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: BulkDeploymentId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1StopBulkDeploymentCommand = serializeAws_restJson1_1StopBulkDeploymentCommand;
async function serializeAws_restJson1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    let body;
    const bodyParams = {};
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1Tags(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1TagResourceCommand = serializeAws_restJson1_1TagResourceCommand;
async function serializeAws_restJson1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    const query = {};
    if (input.TagKeys !== undefined) {
        query["tagKeys"] = (input.TagKeys || []).map(_entry => _entry);
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1UntagResourceCommand = serializeAws_restJson1_1UntagResourceCommand;
async function serializeAws_restJson1_1UpdateConnectivityInfoCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/greengrass/things/{ThingName}/connectivityInfo";
    if (input.ThingName !== undefined) {
        const labelValue = input.ThingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThingName.");
        }
        resolvedPath = resolvedPath.replace("{ThingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThingName.");
    }
    let body;
    const bodyParams = {};
    if (input.ConnectivityInfo !== undefined) {
        bodyParams["ConnectivityInfo"] = serializeAws_restJson1_1__listOfConnectivityInfo(input.ConnectivityInfo, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateConnectivityInfoCommand = serializeAws_restJson1_1UpdateConnectivityInfoCommand;
async function serializeAws_restJson1_1UpdateConnectorDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/greengrass/definition/connectors/{ConnectorDefinitionId}";
    if (input.ConnectorDefinitionId !== undefined) {
        const labelValue = input.ConnectorDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConnectorDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ConnectorDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConnectorDefinitionId.");
    }
    let body;
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateConnectorDefinitionCommand = serializeAws_restJson1_1UpdateConnectorDefinitionCommand;
async function serializeAws_restJson1_1UpdateCoreDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/greengrass/definition/cores/{CoreDefinitionId}";
    if (input.CoreDefinitionId !== undefined) {
        const labelValue = input.CoreDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CoreDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{CoreDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CoreDefinitionId.");
    }
    let body;
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateCoreDefinitionCommand = serializeAws_restJson1_1UpdateCoreDefinitionCommand;
async function serializeAws_restJson1_1UpdateDeviceDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/greengrass/definition/devices/{DeviceDefinitionId}";
    if (input.DeviceDefinitionId !== undefined) {
        const labelValue = input.DeviceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceDefinitionId.");
    }
    let body;
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateDeviceDefinitionCommand = serializeAws_restJson1_1UpdateDeviceDefinitionCommand;
async function serializeAws_restJson1_1UpdateFunctionDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/greengrass/definition/functions/{FunctionDefinitionId}";
    if (input.FunctionDefinitionId !== undefined) {
        const labelValue = input.FunctionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{FunctionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionDefinitionId.");
    }
    let body;
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateFunctionDefinitionCommand = serializeAws_restJson1_1UpdateFunctionDefinitionCommand;
async function serializeAws_restJson1_1UpdateGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/greengrass/groups/{GroupId}";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    let body;
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateGroupCommand = serializeAws_restJson1_1UpdateGroupCommand;
async function serializeAws_restJson1_1UpdateGroupCertificateConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry";
    if (input.GroupId !== undefined) {
        const labelValue = input.GroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupId.");
        }
        resolvedPath = resolvedPath.replace("{GroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupId.");
    }
    let body;
    const bodyParams = {};
    if (input.CertificateExpiryInMilliseconds !== undefined) {
        bodyParams["CertificateExpiryInMilliseconds"] =
            input.CertificateExpiryInMilliseconds;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateGroupCertificateConfigurationCommand = serializeAws_restJson1_1UpdateGroupCertificateConfigurationCommand;
async function serializeAws_restJson1_1UpdateLoggerDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/greengrass/definition/loggers/{LoggerDefinitionId}";
    if (input.LoggerDefinitionId !== undefined) {
        const labelValue = input.LoggerDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LoggerDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{LoggerDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LoggerDefinitionId.");
    }
    let body;
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateLoggerDefinitionCommand = serializeAws_restJson1_1UpdateLoggerDefinitionCommand;
async function serializeAws_restJson1_1UpdateResourceDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/greengrass/definition/resources/{ResourceDefinitionId}";
    if (input.ResourceDefinitionId !== undefined) {
        const labelValue = input.ResourceDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceDefinitionId.");
    }
    let body;
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateResourceDefinitionCommand = serializeAws_restJson1_1UpdateResourceDefinitionCommand;
async function serializeAws_restJson1_1UpdateSubscriptionDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}";
    if (input.SubscriptionDefinitionId !== undefined) {
        const labelValue = input.SubscriptionDefinitionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionDefinitionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionDefinitionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionDefinitionId.");
    }
    let body;
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateSubscriptionDefinitionCommand = serializeAws_restJson1_1UpdateSubscriptionDefinitionCommand;
async function deserializeAws_restJson1_1AssociateRoleToGroupCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1AssociateRoleToGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "AssociateRoleToGroupResponse",
        AssociatedAt: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.AssociatedAt !== undefined && data.AssociatedAt !== null) {
        contents.AssociatedAt = data.AssociatedAt;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1AssociateRoleToGroupCommand = deserializeAws_restJson1_1AssociateRoleToGroupCommand;
async function deserializeAws_restJson1_1AssociateRoleToGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1AssociateServiceRoleToAccountCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1AssociateServiceRoleToAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "AssociateServiceRoleToAccountResponse",
        AssociatedAt: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.AssociatedAt !== undefined && data.AssociatedAt !== null) {
        contents.AssociatedAt = data.AssociatedAt;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1AssociateServiceRoleToAccountCommand = deserializeAws_restJson1_1AssociateServiceRoleToAccountCommand;
async function deserializeAws_restJson1_1AssociateServiceRoleToAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateConnectorDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateConnectorDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateConnectorDefinitionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateConnectorDefinitionCommand = deserializeAws_restJson1_1CreateConnectorDefinitionCommand;
async function deserializeAws_restJson1_1CreateConnectorDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateConnectorDefinitionVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateConnectorDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateConnectorDefinitionVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateConnectorDefinitionVersionCommand = deserializeAws_restJson1_1CreateConnectorDefinitionVersionCommand;
async function deserializeAws_restJson1_1CreateConnectorDefinitionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateCoreDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateCoreDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateCoreDefinitionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateCoreDefinitionCommand = deserializeAws_restJson1_1CreateCoreDefinitionCommand;
async function deserializeAws_restJson1_1CreateCoreDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateCoreDefinitionVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateCoreDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateCoreDefinitionVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateCoreDefinitionVersionCommand = deserializeAws_restJson1_1CreateCoreDefinitionVersionCommand;
async function deserializeAws_restJson1_1CreateCoreDefinitionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateDeploymentCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateDeploymentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateDeploymentResponse",
        DeploymentArn: undefined,
        DeploymentId: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.DeploymentArn !== undefined && data.DeploymentArn !== null) {
        contents.DeploymentArn = data.DeploymentArn;
    }
    if (data.DeploymentId !== undefined && data.DeploymentId !== null) {
        contents.DeploymentId = data.DeploymentId;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateDeploymentCommand = deserializeAws_restJson1_1CreateDeploymentCommand;
async function deserializeAws_restJson1_1CreateDeploymentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateDeviceDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateDeviceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateDeviceDefinitionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateDeviceDefinitionCommand = deserializeAws_restJson1_1CreateDeviceDefinitionCommand;
async function deserializeAws_restJson1_1CreateDeviceDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateDeviceDefinitionVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateDeviceDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateDeviceDefinitionVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateDeviceDefinitionVersionCommand = deserializeAws_restJson1_1CreateDeviceDefinitionVersionCommand;
async function deserializeAws_restJson1_1CreateDeviceDefinitionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateFunctionDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateFunctionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateFunctionDefinitionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateFunctionDefinitionCommand = deserializeAws_restJson1_1CreateFunctionDefinitionCommand;
async function deserializeAws_restJson1_1CreateFunctionDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateFunctionDefinitionVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateFunctionDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateFunctionDefinitionVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateFunctionDefinitionVersionCommand = deserializeAws_restJson1_1CreateFunctionDefinitionVersionCommand;
async function deserializeAws_restJson1_1CreateFunctionDefinitionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateGroupCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateGroupResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateGroupCommand = deserializeAws_restJson1_1CreateGroupCommand;
async function deserializeAws_restJson1_1CreateGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateGroupCertificateAuthorityCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateGroupCertificateAuthorityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateGroupCertificateAuthorityResponse",
        GroupCertificateAuthorityArn: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.GroupCertificateAuthorityArn !== undefined &&
        data.GroupCertificateAuthorityArn !== null) {
        contents.GroupCertificateAuthorityArn = data.GroupCertificateAuthorityArn;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateGroupCertificateAuthorityCommand = deserializeAws_restJson1_1CreateGroupCertificateAuthorityCommand;
async function deserializeAws_restJson1_1CreateGroupCertificateAuthorityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateGroupVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateGroupVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateGroupVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateGroupVersionCommand = deserializeAws_restJson1_1CreateGroupVersionCommand;
async function deserializeAws_restJson1_1CreateGroupVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateLoggerDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateLoggerDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateLoggerDefinitionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateLoggerDefinitionCommand = deserializeAws_restJson1_1CreateLoggerDefinitionCommand;
async function deserializeAws_restJson1_1CreateLoggerDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateLoggerDefinitionVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateLoggerDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateLoggerDefinitionVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateLoggerDefinitionVersionCommand = deserializeAws_restJson1_1CreateLoggerDefinitionVersionCommand;
async function deserializeAws_restJson1_1CreateLoggerDefinitionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateResourceDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateResourceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateResourceDefinitionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateResourceDefinitionCommand = deserializeAws_restJson1_1CreateResourceDefinitionCommand;
async function deserializeAws_restJson1_1CreateResourceDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateResourceDefinitionVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateResourceDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateResourceDefinitionVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateResourceDefinitionVersionCommand = deserializeAws_restJson1_1CreateResourceDefinitionVersionCommand;
async function deserializeAws_restJson1_1CreateResourceDefinitionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateSoftwareUpdateJobCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateSoftwareUpdateJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateSoftwareUpdateJobResponse",
        IotJobArn: undefined,
        IotJobId: undefined,
        PlatformSoftwareVersion: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.IotJobArn !== undefined && data.IotJobArn !== null) {
        contents.IotJobArn = data.IotJobArn;
    }
    if (data.IotJobId !== undefined && data.IotJobId !== null) {
        contents.IotJobId = data.IotJobId;
    }
    if (data.PlatformSoftwareVersion !== undefined &&
        data.PlatformSoftwareVersion !== null) {
        contents.PlatformSoftwareVersion = data.PlatformSoftwareVersion;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateSoftwareUpdateJobCommand = deserializeAws_restJson1_1CreateSoftwareUpdateJobCommand;
async function deserializeAws_restJson1_1CreateSoftwareUpdateJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateSubscriptionDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateSubscriptionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateSubscriptionDefinitionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateSubscriptionDefinitionCommand = deserializeAws_restJson1_1CreateSubscriptionDefinitionCommand;
async function deserializeAws_restJson1_1CreateSubscriptionDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateSubscriptionDefinitionVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateSubscriptionDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateSubscriptionDefinitionVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateSubscriptionDefinitionVersionCommand = deserializeAws_restJson1_1CreateSubscriptionDefinitionVersionCommand;
async function deserializeAws_restJson1_1CreateSubscriptionDefinitionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteConnectorDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteConnectorDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteConnectorDefinitionResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteConnectorDefinitionCommand = deserializeAws_restJson1_1DeleteConnectorDefinitionCommand;
async function deserializeAws_restJson1_1DeleteConnectorDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteCoreDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteCoreDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteCoreDefinitionResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteCoreDefinitionCommand = deserializeAws_restJson1_1DeleteCoreDefinitionCommand;
async function deserializeAws_restJson1_1DeleteCoreDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteDeviceDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteDeviceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteDeviceDefinitionResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteDeviceDefinitionCommand = deserializeAws_restJson1_1DeleteDeviceDefinitionCommand;
async function deserializeAws_restJson1_1DeleteDeviceDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteFunctionDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteFunctionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteFunctionDefinitionResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteFunctionDefinitionCommand = deserializeAws_restJson1_1DeleteFunctionDefinitionCommand;
async function deserializeAws_restJson1_1DeleteFunctionDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteGroupCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteGroupResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteGroupCommand = deserializeAws_restJson1_1DeleteGroupCommand;
async function deserializeAws_restJson1_1DeleteGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteLoggerDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteLoggerDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteLoggerDefinitionResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteLoggerDefinitionCommand = deserializeAws_restJson1_1DeleteLoggerDefinitionCommand;
async function deserializeAws_restJson1_1DeleteLoggerDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteResourceDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteResourceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteResourceDefinitionResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteResourceDefinitionCommand = deserializeAws_restJson1_1DeleteResourceDefinitionCommand;
async function deserializeAws_restJson1_1DeleteResourceDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteSubscriptionDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteSubscriptionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteSubscriptionDefinitionResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteSubscriptionDefinitionCommand = deserializeAws_restJson1_1DeleteSubscriptionDefinitionCommand;
async function deserializeAws_restJson1_1DeleteSubscriptionDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DisassociateRoleFromGroupCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DisassociateRoleFromGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DisassociateRoleFromGroupResponse",
        DisassociatedAt: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.DisassociatedAt !== undefined && data.DisassociatedAt !== null) {
        contents.DisassociatedAt = data.DisassociatedAt;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DisassociateRoleFromGroupCommand = deserializeAws_restJson1_1DisassociateRoleFromGroupCommand;
async function deserializeAws_restJson1_1DisassociateRoleFromGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DisassociateServiceRoleFromAccountCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DisassociateServiceRoleFromAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DisassociateServiceRoleFromAccountResponse",
        DisassociatedAt: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.DisassociatedAt !== undefined && data.DisassociatedAt !== null) {
        contents.DisassociatedAt = data.DisassociatedAt;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DisassociateServiceRoleFromAccountCommand = deserializeAws_restJson1_1DisassociateServiceRoleFromAccountCommand;
async function deserializeAws_restJson1_1DisassociateServiceRoleFromAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetAssociatedRoleCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetAssociatedRoleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetAssociatedRoleResponse",
        AssociatedAt: undefined,
        RoleArn: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.AssociatedAt !== undefined && data.AssociatedAt !== null) {
        contents.AssociatedAt = data.AssociatedAt;
    }
    if (data.RoleArn !== undefined && data.RoleArn !== null) {
        contents.RoleArn = data.RoleArn;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetAssociatedRoleCommand = deserializeAws_restJson1_1GetAssociatedRoleCommand;
async function deserializeAws_restJson1_1GetAssociatedRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetBulkDeploymentStatusCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetBulkDeploymentStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBulkDeploymentStatusResponse",
        BulkDeploymentMetrics: undefined,
        BulkDeploymentStatus: undefined,
        CreatedAt: undefined,
        ErrorDetails: undefined,
        ErrorMessage: undefined,
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.BulkDeploymentMetrics !== undefined &&
        data.BulkDeploymentMetrics !== null) {
        contents.BulkDeploymentMetrics = deserializeAws_restJson1_1BulkDeploymentMetrics(data.BulkDeploymentMetrics, context);
    }
    if (data.BulkDeploymentStatus !== undefined &&
        data.BulkDeploymentStatus !== null) {
        contents.BulkDeploymentStatus = data.BulkDeploymentStatus;
    }
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = data.CreatedAt;
    }
    if (data.ErrorDetails !== undefined && data.ErrorDetails !== null) {
        contents.ErrorDetails = deserializeAws_restJson1_1ErrorDetails(data.ErrorDetails, context);
    }
    if (data.ErrorMessage !== undefined && data.ErrorMessage !== null) {
        contents.ErrorMessage = data.ErrorMessage;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetBulkDeploymentStatusCommand = deserializeAws_restJson1_1GetBulkDeploymentStatusCommand;
async function deserializeAws_restJson1_1GetBulkDeploymentStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetConnectivityInfoCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetConnectivityInfoCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetConnectivityInfoResponse",
        ConnectivityInfo: undefined,
        Message: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.ConnectivityInfo !== undefined && data.ConnectivityInfo !== null) {
        contents.ConnectivityInfo = deserializeAws_restJson1_1__listOfConnectivityInfo(data.ConnectivityInfo, context);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetConnectivityInfoCommand = deserializeAws_restJson1_1GetConnectivityInfoCommand;
async function deserializeAws_restJson1_1GetConnectivityInfoCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetConnectorDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetConnectorDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetConnectorDefinitionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetConnectorDefinitionCommand = deserializeAws_restJson1_1GetConnectorDefinitionCommand;
async function deserializeAws_restJson1_1GetConnectorDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetConnectorDefinitionVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetConnectorDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetConnectorDefinitionVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        NextToken: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1_1ConnectorDefinitionVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetConnectorDefinitionVersionCommand = deserializeAws_restJson1_1GetConnectorDefinitionVersionCommand;
async function deserializeAws_restJson1_1GetConnectorDefinitionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetCoreDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetCoreDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetCoreDefinitionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetCoreDefinitionCommand = deserializeAws_restJson1_1GetCoreDefinitionCommand;
async function deserializeAws_restJson1_1GetCoreDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetCoreDefinitionVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetCoreDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetCoreDefinitionVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        NextToken: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1_1CoreDefinitionVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetCoreDefinitionVersionCommand = deserializeAws_restJson1_1GetCoreDefinitionVersionCommand;
async function deserializeAws_restJson1_1GetCoreDefinitionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetDeploymentStatusCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetDeploymentStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetDeploymentStatusResponse",
        DeploymentStatus: undefined,
        DeploymentType: undefined,
        ErrorDetails: undefined,
        ErrorMessage: undefined,
        UpdatedAt: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.DeploymentStatus !== undefined && data.DeploymentStatus !== null) {
        contents.DeploymentStatus = data.DeploymentStatus;
    }
    if (data.DeploymentType !== undefined && data.DeploymentType !== null) {
        contents.DeploymentType = data.DeploymentType;
    }
    if (data.ErrorDetails !== undefined && data.ErrorDetails !== null) {
        contents.ErrorDetails = deserializeAws_restJson1_1ErrorDetails(data.ErrorDetails, context);
    }
    if (data.ErrorMessage !== undefined && data.ErrorMessage !== null) {
        contents.ErrorMessage = data.ErrorMessage;
    }
    if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
        contents.UpdatedAt = data.UpdatedAt;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetDeploymentStatusCommand = deserializeAws_restJson1_1GetDeploymentStatusCommand;
async function deserializeAws_restJson1_1GetDeploymentStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetDeviceDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetDeviceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetDeviceDefinitionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetDeviceDefinitionCommand = deserializeAws_restJson1_1GetDeviceDefinitionCommand;
async function deserializeAws_restJson1_1GetDeviceDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetDeviceDefinitionVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetDeviceDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetDeviceDefinitionVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        NextToken: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1_1DeviceDefinitionVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetDeviceDefinitionVersionCommand = deserializeAws_restJson1_1GetDeviceDefinitionVersionCommand;
async function deserializeAws_restJson1_1GetDeviceDefinitionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetFunctionDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetFunctionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetFunctionDefinitionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetFunctionDefinitionCommand = deserializeAws_restJson1_1GetFunctionDefinitionCommand;
async function deserializeAws_restJson1_1GetFunctionDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetFunctionDefinitionVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetFunctionDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetFunctionDefinitionVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        NextToken: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1_1FunctionDefinitionVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetFunctionDefinitionVersionCommand = deserializeAws_restJson1_1GetFunctionDefinitionVersionCommand;
async function deserializeAws_restJson1_1GetFunctionDefinitionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetGroupCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetGroupResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetGroupCommand = deserializeAws_restJson1_1GetGroupCommand;
async function deserializeAws_restJson1_1GetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetGroupCertificateAuthorityCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetGroupCertificateAuthorityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetGroupCertificateAuthorityResponse",
        GroupCertificateAuthorityArn: undefined,
        GroupCertificateAuthorityId: undefined,
        PemEncodedCertificate: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.GroupCertificateAuthorityArn !== undefined &&
        data.GroupCertificateAuthorityArn !== null) {
        contents.GroupCertificateAuthorityArn = data.GroupCertificateAuthorityArn;
    }
    if (data.GroupCertificateAuthorityId !== undefined &&
        data.GroupCertificateAuthorityId !== null) {
        contents.GroupCertificateAuthorityId = data.GroupCertificateAuthorityId;
    }
    if (data.PemEncodedCertificate !== undefined &&
        data.PemEncodedCertificate !== null) {
        contents.PemEncodedCertificate = data.PemEncodedCertificate;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetGroupCertificateAuthorityCommand = deserializeAws_restJson1_1GetGroupCertificateAuthorityCommand;
async function deserializeAws_restJson1_1GetGroupCertificateAuthorityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetGroupCertificateConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetGroupCertificateConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetGroupCertificateConfigurationResponse",
        CertificateAuthorityExpiryInMilliseconds: undefined,
        CertificateExpiryInMilliseconds: undefined,
        GroupId: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.CertificateAuthorityExpiryInMilliseconds !== undefined &&
        data.CertificateAuthorityExpiryInMilliseconds !== null) {
        contents.CertificateAuthorityExpiryInMilliseconds =
            data.CertificateAuthorityExpiryInMilliseconds;
    }
    if (data.CertificateExpiryInMilliseconds !== undefined &&
        data.CertificateExpiryInMilliseconds !== null) {
        contents.CertificateExpiryInMilliseconds =
            data.CertificateExpiryInMilliseconds;
    }
    if (data.GroupId !== undefined && data.GroupId !== null) {
        contents.GroupId = data.GroupId;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetGroupCertificateConfigurationCommand = deserializeAws_restJson1_1GetGroupCertificateConfigurationCommand;
async function deserializeAws_restJson1_1GetGroupCertificateConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetGroupVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetGroupVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetGroupVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1_1GroupVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetGroupVersionCommand = deserializeAws_restJson1_1GetGroupVersionCommand;
async function deserializeAws_restJson1_1GetGroupVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetLoggerDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetLoggerDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetLoggerDefinitionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetLoggerDefinitionCommand = deserializeAws_restJson1_1GetLoggerDefinitionCommand;
async function deserializeAws_restJson1_1GetLoggerDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetLoggerDefinitionVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetLoggerDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetLoggerDefinitionVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1_1LoggerDefinitionVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetLoggerDefinitionVersionCommand = deserializeAws_restJson1_1GetLoggerDefinitionVersionCommand;
async function deserializeAws_restJson1_1GetLoggerDefinitionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetResourceDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetResourceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetResourceDefinitionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetResourceDefinitionCommand = deserializeAws_restJson1_1GetResourceDefinitionCommand;
async function deserializeAws_restJson1_1GetResourceDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetResourceDefinitionVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetResourceDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetResourceDefinitionVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1_1ResourceDefinitionVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetResourceDefinitionVersionCommand = deserializeAws_restJson1_1GetResourceDefinitionVersionCommand;
async function deserializeAws_restJson1_1GetResourceDefinitionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetServiceRoleForAccountCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetServiceRoleForAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetServiceRoleForAccountResponse",
        AssociatedAt: undefined,
        RoleArn: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.AssociatedAt !== undefined && data.AssociatedAt !== null) {
        contents.AssociatedAt = data.AssociatedAt;
    }
    if (data.RoleArn !== undefined && data.RoleArn !== null) {
        contents.RoleArn = data.RoleArn;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetServiceRoleForAccountCommand = deserializeAws_restJson1_1GetServiceRoleForAccountCommand;
async function deserializeAws_restJson1_1GetServiceRoleForAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetSubscriptionDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetSubscriptionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetSubscriptionDefinitionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.LastUpdatedTimestamp !== undefined &&
        data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = data.LastUpdatedTimestamp;
    }
    if (data.LatestVersion !== undefined && data.LatestVersion !== null) {
        contents.LatestVersion = data.LatestVersion;
    }
    if (data.LatestVersionArn !== undefined && data.LatestVersionArn !== null) {
        contents.LatestVersionArn = data.LatestVersionArn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetSubscriptionDefinitionCommand = deserializeAws_restJson1_1GetSubscriptionDefinitionCommand;
async function deserializeAws_restJson1_1GetSubscriptionDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1GetSubscriptionDefinitionVersionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetSubscriptionDefinitionVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetSubscriptionDefinitionVersionResponse",
        Arn: undefined,
        CreationTimestamp: undefined,
        Definition: undefined,
        Id: undefined,
        NextToken: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
        contents.CreationTimestamp = data.CreationTimestamp;
    }
    if (data.Definition !== undefined && data.Definition !== null) {
        contents.Definition = deserializeAws_restJson1_1SubscriptionDefinitionVersion(data.Definition, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetSubscriptionDefinitionVersionCommand = deserializeAws_restJson1_1GetSubscriptionDefinitionVersionCommand;
async function deserializeAws_restJson1_1GetSubscriptionDefinitionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListBulkDeploymentDetailedReportsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListBulkDeploymentDetailedReportsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListBulkDeploymentDetailedReportsResponse",
        Deployments: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Deployments !== undefined && data.Deployments !== null) {
        contents.Deployments = deserializeAws_restJson1_1BulkDeploymentResults(data.Deployments, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListBulkDeploymentDetailedReportsCommand = deserializeAws_restJson1_1ListBulkDeploymentDetailedReportsCommand;
async function deserializeAws_restJson1_1ListBulkDeploymentDetailedReportsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListBulkDeploymentsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListBulkDeploymentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListBulkDeploymentsResponse",
        BulkDeployments: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.BulkDeployments !== undefined && data.BulkDeployments !== null) {
        contents.BulkDeployments = deserializeAws_restJson1_1BulkDeployments(data.BulkDeployments, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListBulkDeploymentsCommand = deserializeAws_restJson1_1ListBulkDeploymentsCommand;
async function deserializeAws_restJson1_1ListBulkDeploymentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListConnectorDefinitionVersionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListConnectorDefinitionVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListConnectorDefinitionVersionsResponse",
        NextToken: undefined,
        Versions: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1_1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListConnectorDefinitionVersionsCommand = deserializeAws_restJson1_1ListConnectorDefinitionVersionsCommand;
async function deserializeAws_restJson1_1ListConnectorDefinitionVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListConnectorDefinitionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListConnectorDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListConnectorDefinitionsResponse",
        Definitions: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Definitions !== undefined && data.Definitions !== null) {
        contents.Definitions = deserializeAws_restJson1_1__listOfDefinitionInformation(data.Definitions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListConnectorDefinitionsCommand = deserializeAws_restJson1_1ListConnectorDefinitionsCommand;
async function deserializeAws_restJson1_1ListConnectorDefinitionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
async function deserializeAws_restJson1_1ListCoreDefinitionVersionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListCoreDefinitionVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListCoreDefinitionVersionsResponse",
        NextToken: undefined,
        Versions: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1_1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListCoreDefinitionVersionsCommand = deserializeAws_restJson1_1ListCoreDefinitionVersionsCommand;
async function deserializeAws_restJson1_1ListCoreDefinitionVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListCoreDefinitionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListCoreDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListCoreDefinitionsResponse",
        Definitions: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Definitions !== undefined && data.Definitions !== null) {
        contents.Definitions = deserializeAws_restJson1_1__listOfDefinitionInformation(data.Definitions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListCoreDefinitionsCommand = deserializeAws_restJson1_1ListCoreDefinitionsCommand;
async function deserializeAws_restJson1_1ListCoreDefinitionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
async function deserializeAws_restJson1_1ListDeploymentsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListDeploymentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListDeploymentsResponse",
        Deployments: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Deployments !== undefined && data.Deployments !== null) {
        contents.Deployments = deserializeAws_restJson1_1Deployments(data.Deployments, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListDeploymentsCommand = deserializeAws_restJson1_1ListDeploymentsCommand;
async function deserializeAws_restJson1_1ListDeploymentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListDeviceDefinitionVersionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListDeviceDefinitionVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListDeviceDefinitionVersionsResponse",
        NextToken: undefined,
        Versions: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1_1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListDeviceDefinitionVersionsCommand = deserializeAws_restJson1_1ListDeviceDefinitionVersionsCommand;
async function deserializeAws_restJson1_1ListDeviceDefinitionVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListDeviceDefinitionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListDeviceDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListDeviceDefinitionsResponse",
        Definitions: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Definitions !== undefined && data.Definitions !== null) {
        contents.Definitions = deserializeAws_restJson1_1__listOfDefinitionInformation(data.Definitions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListDeviceDefinitionsCommand = deserializeAws_restJson1_1ListDeviceDefinitionsCommand;
async function deserializeAws_restJson1_1ListDeviceDefinitionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
async function deserializeAws_restJson1_1ListFunctionDefinitionVersionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListFunctionDefinitionVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListFunctionDefinitionVersionsResponse",
        NextToken: undefined,
        Versions: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1_1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListFunctionDefinitionVersionsCommand = deserializeAws_restJson1_1ListFunctionDefinitionVersionsCommand;
async function deserializeAws_restJson1_1ListFunctionDefinitionVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListFunctionDefinitionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListFunctionDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListFunctionDefinitionsResponse",
        Definitions: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Definitions !== undefined && data.Definitions !== null) {
        contents.Definitions = deserializeAws_restJson1_1__listOfDefinitionInformation(data.Definitions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListFunctionDefinitionsCommand = deserializeAws_restJson1_1ListFunctionDefinitionsCommand;
async function deserializeAws_restJson1_1ListFunctionDefinitionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
async function deserializeAws_restJson1_1ListGroupCertificateAuthoritiesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListGroupCertificateAuthoritiesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListGroupCertificateAuthoritiesResponse",
        GroupCertificateAuthorities: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.GroupCertificateAuthorities !== undefined &&
        data.GroupCertificateAuthorities !== null) {
        contents.GroupCertificateAuthorities = deserializeAws_restJson1_1__listOfGroupCertificateAuthorityProperties(data.GroupCertificateAuthorities, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListGroupCertificateAuthoritiesCommand = deserializeAws_restJson1_1ListGroupCertificateAuthoritiesCommand;
async function deserializeAws_restJson1_1ListGroupCertificateAuthoritiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListGroupVersionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListGroupVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListGroupVersionsResponse",
        NextToken: undefined,
        Versions: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1_1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListGroupVersionsCommand = deserializeAws_restJson1_1ListGroupVersionsCommand;
async function deserializeAws_restJson1_1ListGroupVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListGroupsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListGroupsResponse",
        Groups: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Groups !== undefined && data.Groups !== null) {
        contents.Groups = deserializeAws_restJson1_1__listOfGroupInformation(data.Groups, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListGroupsCommand = deserializeAws_restJson1_1ListGroupsCommand;
async function deserializeAws_restJson1_1ListGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
async function deserializeAws_restJson1_1ListLoggerDefinitionVersionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListLoggerDefinitionVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListLoggerDefinitionVersionsResponse",
        NextToken: undefined,
        Versions: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1_1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListLoggerDefinitionVersionsCommand = deserializeAws_restJson1_1ListLoggerDefinitionVersionsCommand;
async function deserializeAws_restJson1_1ListLoggerDefinitionVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListLoggerDefinitionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListLoggerDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListLoggerDefinitionsResponse",
        Definitions: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Definitions !== undefined && data.Definitions !== null) {
        contents.Definitions = deserializeAws_restJson1_1__listOfDefinitionInformation(data.Definitions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListLoggerDefinitionsCommand = deserializeAws_restJson1_1ListLoggerDefinitionsCommand;
async function deserializeAws_restJson1_1ListLoggerDefinitionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
async function deserializeAws_restJson1_1ListResourceDefinitionVersionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListResourceDefinitionVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListResourceDefinitionVersionsResponse",
        NextToken: undefined,
        Versions: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1_1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListResourceDefinitionVersionsCommand = deserializeAws_restJson1_1ListResourceDefinitionVersionsCommand;
async function deserializeAws_restJson1_1ListResourceDefinitionVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListResourceDefinitionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListResourceDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListResourceDefinitionsResponse",
        Definitions: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Definitions !== undefined && data.Definitions !== null) {
        contents.Definitions = deserializeAws_restJson1_1__listOfDefinitionInformation(data.Definitions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListResourceDefinitionsCommand = deserializeAws_restJson1_1ListResourceDefinitionsCommand;
async function deserializeAws_restJson1_1ListResourceDefinitionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
async function deserializeAws_restJson1_1ListSubscriptionDefinitionVersionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListSubscriptionDefinitionVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListSubscriptionDefinitionVersionsResponse",
        NextToken: undefined,
        Versions: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1_1__listOfVersionInformation(data.Versions, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListSubscriptionDefinitionVersionsCommand = deserializeAws_restJson1_1ListSubscriptionDefinitionVersionsCommand;
async function deserializeAws_restJson1_1ListSubscriptionDefinitionVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListSubscriptionDefinitionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListSubscriptionDefinitionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListSubscriptionDefinitionsResponse",
        Definitions: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Definitions !== undefined && data.Definitions !== null) {
        contents.Definitions = deserializeAws_restJson1_1__listOfDefinitionInformation(data.Definitions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListSubscriptionDefinitionsCommand = deserializeAws_restJson1_1ListSubscriptionDefinitionsCommand;
async function deserializeAws_restJson1_1ListSubscriptionDefinitionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
        contents.tags = deserializeAws_restJson1_1Tags(data.tags, context);
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
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ResetDeploymentsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ResetDeploymentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ResetDeploymentsResponse",
        DeploymentArn: undefined,
        DeploymentId: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.DeploymentArn !== undefined && data.DeploymentArn !== null) {
        contents.DeploymentArn = data.DeploymentArn;
    }
    if (data.DeploymentId !== undefined && data.DeploymentId !== null) {
        contents.DeploymentId = data.DeploymentId;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ResetDeploymentsCommand = deserializeAws_restJson1_1ResetDeploymentsCommand;
async function deserializeAws_restJson1_1ResetDeploymentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1StartBulkDeploymentCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1StartBulkDeploymentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "StartBulkDeploymentResponse",
        BulkDeploymentArn: undefined,
        BulkDeploymentId: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.BulkDeploymentArn !== undefined && data.BulkDeploymentArn !== null) {
        contents.BulkDeploymentArn = data.BulkDeploymentArn;
    }
    if (data.BulkDeploymentId !== undefined && data.BulkDeploymentId !== null) {
        contents.BulkDeploymentId = data.BulkDeploymentId;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1StartBulkDeploymentCommand = deserializeAws_restJson1_1StartBulkDeploymentCommand;
async function deserializeAws_restJson1_1StartBulkDeploymentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1StopBulkDeploymentCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1StopBulkDeploymentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "StopBulkDeploymentResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1StopBulkDeploymentCommand = deserializeAws_restJson1_1StopBulkDeploymentCommand;
async function deserializeAws_restJson1_1StopBulkDeploymentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
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
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
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
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateConnectivityInfoCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateConnectivityInfoCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateConnectivityInfoResponse",
        Message: undefined,
        Version: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateConnectivityInfoCommand = deserializeAws_restJson1_1UpdateConnectivityInfoCommand;
async function deserializeAws_restJson1_1UpdateConnectivityInfoCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateConnectorDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateConnectorDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateConnectorDefinitionResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateConnectorDefinitionCommand = deserializeAws_restJson1_1UpdateConnectorDefinitionCommand;
async function deserializeAws_restJson1_1UpdateConnectorDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateCoreDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateCoreDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateCoreDefinitionResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateCoreDefinitionCommand = deserializeAws_restJson1_1UpdateCoreDefinitionCommand;
async function deserializeAws_restJson1_1UpdateCoreDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateDeviceDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateDeviceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateDeviceDefinitionResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateDeviceDefinitionCommand = deserializeAws_restJson1_1UpdateDeviceDefinitionCommand;
async function deserializeAws_restJson1_1UpdateDeviceDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateFunctionDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateFunctionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateFunctionDefinitionResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateFunctionDefinitionCommand = deserializeAws_restJson1_1UpdateFunctionDefinitionCommand;
async function deserializeAws_restJson1_1UpdateFunctionDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateGroupCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateGroupResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateGroupCommand = deserializeAws_restJson1_1UpdateGroupCommand;
async function deserializeAws_restJson1_1UpdateGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateGroupCertificateConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateGroupCertificateConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateGroupCertificateConfigurationResponse",
        CertificateAuthorityExpiryInMilliseconds: undefined,
        CertificateExpiryInMilliseconds: undefined,
        GroupId: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.CertificateAuthorityExpiryInMilliseconds !== undefined &&
        data.CertificateAuthorityExpiryInMilliseconds !== null) {
        contents.CertificateAuthorityExpiryInMilliseconds =
            data.CertificateAuthorityExpiryInMilliseconds;
    }
    if (data.CertificateExpiryInMilliseconds !== undefined &&
        data.CertificateExpiryInMilliseconds !== null) {
        contents.CertificateExpiryInMilliseconds =
            data.CertificateExpiryInMilliseconds;
    }
    if (data.GroupId !== undefined && data.GroupId !== null) {
        contents.GroupId = data.GroupId;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateGroupCertificateConfigurationCommand = deserializeAws_restJson1_1UpdateGroupCertificateConfigurationCommand;
async function deserializeAws_restJson1_1UpdateGroupCertificateConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.greengrass#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateLoggerDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateLoggerDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateLoggerDefinitionResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateLoggerDefinitionCommand = deserializeAws_restJson1_1UpdateLoggerDefinitionCommand;
async function deserializeAws_restJson1_1UpdateLoggerDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateResourceDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateResourceDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateResourceDefinitionResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateResourceDefinitionCommand = deserializeAws_restJson1_1UpdateResourceDefinitionCommand;
async function deserializeAws_restJson1_1UpdateResourceDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateSubscriptionDefinitionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateSubscriptionDefinitionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateSubscriptionDefinitionResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateSubscriptionDefinitionCommand = deserializeAws_restJson1_1UpdateSubscriptionDefinitionCommand;
async function deserializeAws_restJson1_1UpdateSubscriptionDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.greengrass#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_restJson1_1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorDetails: undefined,
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.ErrorDetails !== undefined && data.ErrorDetails !== null) {
        contents.ErrorDetails = deserializeAws_restJson1_1ErrorDetails(data.ErrorDetails, context);
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorDetails: undefined,
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.ErrorDetails !== undefined && data.ErrorDetails !== null) {
        contents.ErrorDetails = deserializeAws_restJson1_1ErrorDetails(data.ErrorDetails, context);
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const serializeAws_restJson1_1ConnectivityInfo = (input, context) => {
    const bodyParams = {};
    if (input.HostAddress !== undefined) {
        bodyParams["HostAddress"] = input.HostAddress;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Metadata !== undefined) {
        bodyParams["Metadata"] = input.Metadata;
    }
    if (input.PortNumber !== undefined) {
        bodyParams["PortNumber"] = input.PortNumber;
    }
    return bodyParams;
};
const serializeAws_restJson1_1Connector = (input, context) => {
    const bodyParams = {};
    if (input.ConnectorArn !== undefined) {
        bodyParams["ConnectorArn"] = input.ConnectorArn;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_restJson1_1__mapOf__string(input.Parameters, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1ConnectorDefinitionVersion = (input, context) => {
    const bodyParams = {};
    if (input.Connectors !== undefined) {
        bodyParams["Connectors"] = serializeAws_restJson1_1__listOfConnector(input.Connectors, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1Core = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.SyncShadow !== undefined) {
        bodyParams["SyncShadow"] = input.SyncShadow;
    }
    if (input.ThingArn !== undefined) {
        bodyParams["ThingArn"] = input.ThingArn;
    }
    return bodyParams;
};
const serializeAws_restJson1_1CoreDefinitionVersion = (input, context) => {
    const bodyParams = {};
    if (input.Cores !== undefined) {
        bodyParams["Cores"] = serializeAws_restJson1_1__listOfCore(input.Cores, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1Device = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.SyncShadow !== undefined) {
        bodyParams["SyncShadow"] = input.SyncShadow;
    }
    if (input.ThingArn !== undefined) {
        bodyParams["ThingArn"] = input.ThingArn;
    }
    return bodyParams;
};
const serializeAws_restJson1_1DeviceDefinitionVersion = (input, context) => {
    const bodyParams = {};
    if (input.Devices !== undefined) {
        bodyParams["Devices"] = serializeAws_restJson1_1__listOfDevice(input.Devices, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1Function = (input, context) => {
    const bodyParams = {};
    if (input.FunctionArn !== undefined) {
        bodyParams["FunctionArn"] = input.FunctionArn;
    }
    if (input.FunctionConfiguration !== undefined) {
        bodyParams["FunctionConfiguration"] = serializeAws_restJson1_1FunctionConfiguration(input.FunctionConfiguration, context);
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_restJson1_1FunctionConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.EncodingType !== undefined) {
        bodyParams["EncodingType"] = input.EncodingType;
    }
    if (input.Environment !== undefined) {
        bodyParams["Environment"] = serializeAws_restJson1_1FunctionConfigurationEnvironment(input.Environment, context);
    }
    if (input.ExecArgs !== undefined) {
        bodyParams["ExecArgs"] = input.ExecArgs;
    }
    if (input.Executable !== undefined) {
        bodyParams["Executable"] = input.Executable;
    }
    if (input.MemorySize !== undefined) {
        bodyParams["MemorySize"] = input.MemorySize;
    }
    if (input.Pinned !== undefined) {
        bodyParams["Pinned"] = input.Pinned;
    }
    if (input.Timeout !== undefined) {
        bodyParams["Timeout"] = input.Timeout;
    }
    return bodyParams;
};
const serializeAws_restJson1_1FunctionConfigurationEnvironment = (input, context) => {
    const bodyParams = {};
    if (input.AccessSysfs !== undefined) {
        bodyParams["AccessSysfs"] = input.AccessSysfs;
    }
    if (input.Execution !== undefined) {
        bodyParams["Execution"] = serializeAws_restJson1_1FunctionExecutionConfig(input.Execution, context);
    }
    if (input.ResourceAccessPolicies !== undefined) {
        bodyParams["ResourceAccessPolicies"] = serializeAws_restJson1_1__listOfResourceAccessPolicy(input.ResourceAccessPolicies, context);
    }
    if (input.Variables !== undefined) {
        bodyParams["Variables"] = serializeAws_restJson1_1__mapOf__string(input.Variables, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1FunctionDefaultConfig = (input, context) => {
    const bodyParams = {};
    if (input.Execution !== undefined) {
        bodyParams["Execution"] = serializeAws_restJson1_1FunctionDefaultExecutionConfig(input.Execution, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1FunctionDefaultExecutionConfig = (input, context) => {
    const bodyParams = {};
    if (input.IsolationMode !== undefined) {
        bodyParams["IsolationMode"] = input.IsolationMode;
    }
    if (input.RunAs !== undefined) {
        bodyParams["RunAs"] = serializeAws_restJson1_1FunctionRunAsConfig(input.RunAs, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1FunctionDefinitionVersion = (input, context) => {
    const bodyParams = {};
    if (input.DefaultConfig !== undefined) {
        bodyParams["DefaultConfig"] = serializeAws_restJson1_1FunctionDefaultConfig(input.DefaultConfig, context);
    }
    if (input.Functions !== undefined) {
        bodyParams["Functions"] = serializeAws_restJson1_1__listOfFunction(input.Functions, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1FunctionExecutionConfig = (input, context) => {
    const bodyParams = {};
    if (input.IsolationMode !== undefined) {
        bodyParams["IsolationMode"] = input.IsolationMode;
    }
    if (input.RunAs !== undefined) {
        bodyParams["RunAs"] = serializeAws_restJson1_1FunctionRunAsConfig(input.RunAs, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1FunctionRunAsConfig = (input, context) => {
    const bodyParams = {};
    if (input.Gid !== undefined) {
        bodyParams["Gid"] = input.Gid;
    }
    if (input.Uid !== undefined) {
        bodyParams["Uid"] = input.Uid;
    }
    return bodyParams;
};
const serializeAws_restJson1_1GroupOwnerSetting = (input, context) => {
    const bodyParams = {};
    if (input.AutoAddGroupOwner !== undefined) {
        bodyParams["AutoAddGroupOwner"] = input.AutoAddGroupOwner;
    }
    if (input.GroupOwner !== undefined) {
        bodyParams["GroupOwner"] = input.GroupOwner;
    }
    return bodyParams;
};
const serializeAws_restJson1_1GroupVersion = (input, context) => {
    const bodyParams = {};
    if (input.ConnectorDefinitionVersionArn !== undefined) {
        bodyParams["ConnectorDefinitionVersionArn"] =
            input.ConnectorDefinitionVersionArn;
    }
    if (input.CoreDefinitionVersionArn !== undefined) {
        bodyParams["CoreDefinitionVersionArn"] = input.CoreDefinitionVersionArn;
    }
    if (input.DeviceDefinitionVersionArn !== undefined) {
        bodyParams["DeviceDefinitionVersionArn"] = input.DeviceDefinitionVersionArn;
    }
    if (input.FunctionDefinitionVersionArn !== undefined) {
        bodyParams["FunctionDefinitionVersionArn"] =
            input.FunctionDefinitionVersionArn;
    }
    if (input.LoggerDefinitionVersionArn !== undefined) {
        bodyParams["LoggerDefinitionVersionArn"] = input.LoggerDefinitionVersionArn;
    }
    if (input.ResourceDefinitionVersionArn !== undefined) {
        bodyParams["ResourceDefinitionVersionArn"] =
            input.ResourceDefinitionVersionArn;
    }
    if (input.SubscriptionDefinitionVersionArn !== undefined) {
        bodyParams["SubscriptionDefinitionVersionArn"] =
            input.SubscriptionDefinitionVersionArn;
    }
    return bodyParams;
};
const serializeAws_restJson1_1LocalDeviceResourceData = (input, context) => {
    const bodyParams = {};
    if (input.GroupOwnerSetting !== undefined) {
        bodyParams["GroupOwnerSetting"] = serializeAws_restJson1_1GroupOwnerSetting(input.GroupOwnerSetting, context);
    }
    if (input.SourcePath !== undefined) {
        bodyParams["SourcePath"] = input.SourcePath;
    }
    return bodyParams;
};
const serializeAws_restJson1_1LocalVolumeResourceData = (input, context) => {
    const bodyParams = {};
    if (input.DestinationPath !== undefined) {
        bodyParams["DestinationPath"] = input.DestinationPath;
    }
    if (input.GroupOwnerSetting !== undefined) {
        bodyParams["GroupOwnerSetting"] = serializeAws_restJson1_1GroupOwnerSetting(input.GroupOwnerSetting, context);
    }
    if (input.SourcePath !== undefined) {
        bodyParams["SourcePath"] = input.SourcePath;
    }
    return bodyParams;
};
const serializeAws_restJson1_1Logger = (input, context) => {
    const bodyParams = {};
    if (input.Component !== undefined) {
        bodyParams["Component"] = input.Component;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Level !== undefined) {
        bodyParams["Level"] = input.Level;
    }
    if (input.Space !== undefined) {
        bodyParams["Space"] = input.Space;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_restJson1_1LoggerDefinitionVersion = (input, context) => {
    const bodyParams = {};
    if (input.Loggers !== undefined) {
        bodyParams["Loggers"] = serializeAws_restJson1_1__listOfLogger(input.Loggers, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1Resource = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ResourceDataContainer !== undefined) {
        bodyParams["ResourceDataContainer"] = serializeAws_restJson1_1ResourceDataContainer(input.ResourceDataContainer, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1ResourceAccessPolicy = (input, context) => {
    const bodyParams = {};
    if (input.Permission !== undefined) {
        bodyParams["Permission"] = input.Permission;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const serializeAws_restJson1_1ResourceDataContainer = (input, context) => {
    const bodyParams = {};
    if (input.LocalDeviceResourceData !== undefined) {
        bodyParams["LocalDeviceResourceData"] = serializeAws_restJson1_1LocalDeviceResourceData(input.LocalDeviceResourceData, context);
    }
    if (input.LocalVolumeResourceData !== undefined) {
        bodyParams["LocalVolumeResourceData"] = serializeAws_restJson1_1LocalVolumeResourceData(input.LocalVolumeResourceData, context);
    }
    if (input.S3MachineLearningModelResourceData !== undefined) {
        bodyParams["S3MachineLearningModelResourceData"] = serializeAws_restJson1_1S3MachineLearningModelResourceData(input.S3MachineLearningModelResourceData, context);
    }
    if (input.SageMakerMachineLearningModelResourceData !== undefined) {
        bodyParams["SageMakerMachineLearningModelResourceData"] = serializeAws_restJson1_1SageMakerMachineLearningModelResourceData(input.SageMakerMachineLearningModelResourceData, context);
    }
    if (input.SecretsManagerSecretResourceData !== undefined) {
        bodyParams["SecretsManagerSecretResourceData"] = serializeAws_restJson1_1SecretsManagerSecretResourceData(input.SecretsManagerSecretResourceData, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1ResourceDefinitionVersion = (input, context) => {
    const bodyParams = {};
    if (input.Resources !== undefined) {
        bodyParams["Resources"] = serializeAws_restJson1_1__listOfResource(input.Resources, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1ResourceDownloadOwnerSetting = (input, context) => {
    const bodyParams = {};
    if (input.GroupOwner !== undefined) {
        bodyParams["GroupOwner"] = input.GroupOwner;
    }
    if (input.GroupPermission !== undefined) {
        bodyParams["GroupPermission"] = input.GroupPermission;
    }
    return bodyParams;
};
const serializeAws_restJson1_1S3MachineLearningModelResourceData = (input, context) => {
    const bodyParams = {};
    if (input.DestinationPath !== undefined) {
        bodyParams["DestinationPath"] = input.DestinationPath;
    }
    if (input.OwnerSetting !== undefined) {
        bodyParams["OwnerSetting"] = serializeAws_restJson1_1ResourceDownloadOwnerSetting(input.OwnerSetting, context);
    }
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_restJson1_1SageMakerMachineLearningModelResourceData = (input, context) => {
    const bodyParams = {};
    if (input.DestinationPath !== undefined) {
        bodyParams["DestinationPath"] = input.DestinationPath;
    }
    if (input.OwnerSetting !== undefined) {
        bodyParams["OwnerSetting"] = serializeAws_restJson1_1ResourceDownloadOwnerSetting(input.OwnerSetting, context);
    }
    if (input.SageMakerJobArn !== undefined) {
        bodyParams["SageMakerJobArn"] = input.SageMakerJobArn;
    }
    return bodyParams;
};
const serializeAws_restJson1_1SecretsManagerSecretResourceData = (input, context) => {
    const bodyParams = {};
    if (input.ARN !== undefined) {
        bodyParams["ARN"] = input.ARN;
    }
    if (input.AdditionalStagingLabelsToDownload !== undefined) {
        bodyParams["AdditionalStagingLabelsToDownload"] = serializeAws_restJson1_1__listOf__string(input.AdditionalStagingLabelsToDownload, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1Subscription = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Source !== undefined) {
        bodyParams["Source"] = input.Source;
    }
    if (input.Subject !== undefined) {
        bodyParams["Subject"] = input.Subject;
    }
    if (input.Target !== undefined) {
        bodyParams["Target"] = input.Target;
    }
    return bodyParams;
};
const serializeAws_restJson1_1SubscriptionDefinitionVersion = (input, context) => {
    const bodyParams = {};
    if (input.Subscriptions !== undefined) {
        bodyParams["Subscriptions"] = serializeAws_restJson1_1__listOfSubscription(input.Subscriptions, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1Tags = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_restJson1_1UpdateTargets = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_restJson1_1__listOfConnectivityInfo = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1ConnectivityInfo(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1__listOfConnector = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1Connector(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1__listOfCore = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1Core(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1__listOfDevice = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1Device(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1__listOfFunction = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1Function(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1__listOfLogger = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1Logger(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1__listOfResource = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1Resource(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1__listOfResourceAccessPolicy = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1ResourceAccessPolicy(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1__listOfSubscription = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1Subscription(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1__listOf__string = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_restJson1_1__mapOf__string = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const deserializeAws_restJson1_1BulkDeployment = (output, context) => {
    let contents = {
        __type: "BulkDeployment",
        BulkDeploymentArn: undefined,
        BulkDeploymentId: undefined,
        CreatedAt: undefined
    };
    if (output.BulkDeploymentArn !== undefined &&
        output.BulkDeploymentArn !== null) {
        contents.BulkDeploymentArn = output.BulkDeploymentArn;
    }
    if (output.BulkDeploymentId !== undefined &&
        output.BulkDeploymentId !== null) {
        contents.BulkDeploymentId = output.BulkDeploymentId;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = output.CreatedAt;
    }
    return contents;
};
const deserializeAws_restJson1_1BulkDeploymentMetrics = (output, context) => {
    let contents = {
        __type: "BulkDeploymentMetrics",
        InvalidInputRecords: undefined,
        RecordsProcessed: undefined,
        RetryAttempts: undefined
    };
    if (output.InvalidInputRecords !== undefined &&
        output.InvalidInputRecords !== null) {
        contents.InvalidInputRecords = output.InvalidInputRecords;
    }
    if (output.RecordsProcessed !== undefined &&
        output.RecordsProcessed !== null) {
        contents.RecordsProcessed = output.RecordsProcessed;
    }
    if (output.RetryAttempts !== undefined && output.RetryAttempts !== null) {
        contents.RetryAttempts = output.RetryAttempts;
    }
    return contents;
};
const deserializeAws_restJson1_1BulkDeploymentResult = (output, context) => {
    let contents = {
        __type: "BulkDeploymentResult",
        CreatedAt: undefined,
        DeploymentArn: undefined,
        DeploymentId: undefined,
        DeploymentStatus: undefined,
        DeploymentType: undefined,
        ErrorDetails: undefined,
        ErrorMessage: undefined,
        GroupArn: undefined
    };
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = output.CreatedAt;
    }
    if (output.DeploymentArn !== undefined && output.DeploymentArn !== null) {
        contents.DeploymentArn = output.DeploymentArn;
    }
    if (output.DeploymentId !== undefined && output.DeploymentId !== null) {
        contents.DeploymentId = output.DeploymentId;
    }
    if (output.DeploymentStatus !== undefined &&
        output.DeploymentStatus !== null) {
        contents.DeploymentStatus = output.DeploymentStatus;
    }
    if (output.DeploymentType !== undefined && output.DeploymentType !== null) {
        contents.DeploymentType = output.DeploymentType;
    }
    if (output.ErrorDetails !== undefined && output.ErrorDetails !== null) {
        contents.ErrorDetails = deserializeAws_restJson1_1ErrorDetails(output.ErrorDetails, context);
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.GroupArn !== undefined && output.GroupArn !== null) {
        contents.GroupArn = output.GroupArn;
    }
    return contents;
};
const deserializeAws_restJson1_1BulkDeploymentResults = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1BulkDeploymentResult(entry, context));
};
const deserializeAws_restJson1_1BulkDeployments = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1BulkDeployment(entry, context));
};
const deserializeAws_restJson1_1ConnectivityInfo = (output, context) => {
    let contents = {
        __type: "ConnectivityInfo",
        HostAddress: undefined,
        Id: undefined,
        Metadata: undefined,
        PortNumber: undefined
    };
    if (output.HostAddress !== undefined && output.HostAddress !== null) {
        contents.HostAddress = output.HostAddress;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Metadata !== undefined && output.Metadata !== null) {
        contents.Metadata = output.Metadata;
    }
    if (output.PortNumber !== undefined && output.PortNumber !== null) {
        contents.PortNumber = output.PortNumber;
    }
    return contents;
};
const deserializeAws_restJson1_1Connector = (output, context) => {
    let contents = {
        __type: "Connector",
        ConnectorArn: undefined,
        Id: undefined,
        Parameters: undefined
    };
    if (output.ConnectorArn !== undefined && output.ConnectorArn !== null) {
        contents.ConnectorArn = output.ConnectorArn;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_restJson1_1__mapOf__string(output.Parameters, context);
    }
    return contents;
};
const deserializeAws_restJson1_1ConnectorDefinitionVersion = (output, context) => {
    let contents = {
        __type: "ConnectorDefinitionVersion",
        Connectors: undefined
    };
    if (output.Connectors !== undefined && output.Connectors !== null) {
        contents.Connectors = deserializeAws_restJson1_1__listOfConnector(output.Connectors, context);
    }
    return contents;
};
const deserializeAws_restJson1_1Core = (output, context) => {
    let contents = {
        __type: "Core",
        CertificateArn: undefined,
        Id: undefined,
        SyncShadow: undefined,
        ThingArn: undefined
    };
    if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
        contents.CertificateArn = output.CertificateArn;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.SyncShadow !== undefined && output.SyncShadow !== null) {
        contents.SyncShadow = output.SyncShadow;
    }
    if (output.ThingArn !== undefined && output.ThingArn !== null) {
        contents.ThingArn = output.ThingArn;
    }
    return contents;
};
const deserializeAws_restJson1_1CoreDefinitionVersion = (output, context) => {
    let contents = {
        __type: "CoreDefinitionVersion",
        Cores: undefined
    };
    if (output.Cores !== undefined && output.Cores !== null) {
        contents.Cores = deserializeAws_restJson1_1__listOfCore(output.Cores, context);
    }
    return contents;
};
const deserializeAws_restJson1_1DefinitionInformation = (output, context) => {
    let contents = {
        __type: "DefinitionInformation",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined,
        Tags: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreationTimestamp !== undefined &&
        output.CreationTimestamp !== null) {
        contents.CreationTimestamp = output.CreationTimestamp;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.LastUpdatedTimestamp !== undefined &&
        output.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = output.LastUpdatedTimestamp;
    }
    if (output.LatestVersion !== undefined && output.LatestVersion !== null) {
        contents.LatestVersion = output.LatestVersion;
    }
    if (output.LatestVersionArn !== undefined &&
        output.LatestVersionArn !== null) {
        contents.LatestVersionArn = output.LatestVersionArn;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
    }
    return contents;
};
const deserializeAws_restJson1_1Deployment = (output, context) => {
    let contents = {
        __type: "Deployment",
        CreatedAt: undefined,
        DeploymentArn: undefined,
        DeploymentId: undefined,
        DeploymentType: undefined,
        GroupArn: undefined
    };
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = output.CreatedAt;
    }
    if (output.DeploymentArn !== undefined && output.DeploymentArn !== null) {
        contents.DeploymentArn = output.DeploymentArn;
    }
    if (output.DeploymentId !== undefined && output.DeploymentId !== null) {
        contents.DeploymentId = output.DeploymentId;
    }
    if (output.DeploymentType !== undefined && output.DeploymentType !== null) {
        contents.DeploymentType = output.DeploymentType;
    }
    if (output.GroupArn !== undefined && output.GroupArn !== null) {
        contents.GroupArn = output.GroupArn;
    }
    return contents;
};
const deserializeAws_restJson1_1Deployments = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1Deployment(entry, context));
};
const deserializeAws_restJson1_1Device = (output, context) => {
    let contents = {
        __type: "Device",
        CertificateArn: undefined,
        Id: undefined,
        SyncShadow: undefined,
        ThingArn: undefined
    };
    if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
        contents.CertificateArn = output.CertificateArn;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.SyncShadow !== undefined && output.SyncShadow !== null) {
        contents.SyncShadow = output.SyncShadow;
    }
    if (output.ThingArn !== undefined && output.ThingArn !== null) {
        contents.ThingArn = output.ThingArn;
    }
    return contents;
};
const deserializeAws_restJson1_1DeviceDefinitionVersion = (output, context) => {
    let contents = {
        __type: "DeviceDefinitionVersion",
        Devices: undefined
    };
    if (output.Devices !== undefined && output.Devices !== null) {
        contents.Devices = deserializeAws_restJson1_1__listOfDevice(output.Devices, context);
    }
    return contents;
};
const deserializeAws_restJson1_1ErrorDetail = (output, context) => {
    let contents = {
        __type: "ErrorDetail",
        DetailedErrorCode: undefined,
        DetailedErrorMessage: undefined
    };
    if (output.DetailedErrorCode !== undefined &&
        output.DetailedErrorCode !== null) {
        contents.DetailedErrorCode = output.DetailedErrorCode;
    }
    if (output.DetailedErrorMessage !== undefined &&
        output.DetailedErrorMessage !== null) {
        contents.DetailedErrorMessage = output.DetailedErrorMessage;
    }
    return contents;
};
const deserializeAws_restJson1_1ErrorDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1ErrorDetail(entry, context));
};
const deserializeAws_restJson1_1Function = (output, context) => {
    let contents = {
        __type: "Function",
        FunctionArn: undefined,
        FunctionConfiguration: undefined,
        Id: undefined
    };
    if (output.FunctionArn !== undefined && output.FunctionArn !== null) {
        contents.FunctionArn = output.FunctionArn;
    }
    if (output.FunctionConfiguration !== undefined &&
        output.FunctionConfiguration !== null) {
        contents.FunctionConfiguration = deserializeAws_restJson1_1FunctionConfiguration(output.FunctionConfiguration, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    return contents;
};
const deserializeAws_restJson1_1FunctionConfiguration = (output, context) => {
    let contents = {
        __type: "FunctionConfiguration",
        EncodingType: undefined,
        Environment: undefined,
        ExecArgs: undefined,
        Executable: undefined,
        MemorySize: undefined,
        Pinned: undefined,
        Timeout: undefined
    };
    if (output.EncodingType !== undefined && output.EncodingType !== null) {
        contents.EncodingType = output.EncodingType;
    }
    if (output.Environment !== undefined && output.Environment !== null) {
        contents.Environment = deserializeAws_restJson1_1FunctionConfigurationEnvironment(output.Environment, context);
    }
    if (output.ExecArgs !== undefined && output.ExecArgs !== null) {
        contents.ExecArgs = output.ExecArgs;
    }
    if (output.Executable !== undefined && output.Executable !== null) {
        contents.Executable = output.Executable;
    }
    if (output.MemorySize !== undefined && output.MemorySize !== null) {
        contents.MemorySize = output.MemorySize;
    }
    if (output.Pinned !== undefined && output.Pinned !== null) {
        contents.Pinned = output.Pinned;
    }
    if (output.Timeout !== undefined && output.Timeout !== null) {
        contents.Timeout = output.Timeout;
    }
    return contents;
};
const deserializeAws_restJson1_1FunctionConfigurationEnvironment = (output, context) => {
    let contents = {
        __type: "FunctionConfigurationEnvironment",
        AccessSysfs: undefined,
        Execution: undefined,
        ResourceAccessPolicies: undefined,
        Variables: undefined
    };
    if (output.AccessSysfs !== undefined && output.AccessSysfs !== null) {
        contents.AccessSysfs = output.AccessSysfs;
    }
    if (output.Execution !== undefined && output.Execution !== null) {
        contents.Execution = deserializeAws_restJson1_1FunctionExecutionConfig(output.Execution, context);
    }
    if (output.ResourceAccessPolicies !== undefined &&
        output.ResourceAccessPolicies !== null) {
        contents.ResourceAccessPolicies = deserializeAws_restJson1_1__listOfResourceAccessPolicy(output.ResourceAccessPolicies, context);
    }
    if (output.Variables !== undefined && output.Variables !== null) {
        contents.Variables = deserializeAws_restJson1_1__mapOf__string(output.Variables, context);
    }
    return contents;
};
const deserializeAws_restJson1_1FunctionDefaultConfig = (output, context) => {
    let contents = {
        __type: "FunctionDefaultConfig",
        Execution: undefined
    };
    if (output.Execution !== undefined && output.Execution !== null) {
        contents.Execution = deserializeAws_restJson1_1FunctionDefaultExecutionConfig(output.Execution, context);
    }
    return contents;
};
const deserializeAws_restJson1_1FunctionDefaultExecutionConfig = (output, context) => {
    let contents = {
        __type: "FunctionDefaultExecutionConfig",
        IsolationMode: undefined,
        RunAs: undefined
    };
    if (output.IsolationMode !== undefined && output.IsolationMode !== null) {
        contents.IsolationMode = output.IsolationMode;
    }
    if (output.RunAs !== undefined && output.RunAs !== null) {
        contents.RunAs = deserializeAws_restJson1_1FunctionRunAsConfig(output.RunAs, context);
    }
    return contents;
};
const deserializeAws_restJson1_1FunctionDefinitionVersion = (output, context) => {
    let contents = {
        __type: "FunctionDefinitionVersion",
        DefaultConfig: undefined,
        Functions: undefined
    };
    if (output.DefaultConfig !== undefined && output.DefaultConfig !== null) {
        contents.DefaultConfig = deserializeAws_restJson1_1FunctionDefaultConfig(output.DefaultConfig, context);
    }
    if (output.Functions !== undefined && output.Functions !== null) {
        contents.Functions = deserializeAws_restJson1_1__listOfFunction(output.Functions, context);
    }
    return contents;
};
const deserializeAws_restJson1_1FunctionExecutionConfig = (output, context) => {
    let contents = {
        __type: "FunctionExecutionConfig",
        IsolationMode: undefined,
        RunAs: undefined
    };
    if (output.IsolationMode !== undefined && output.IsolationMode !== null) {
        contents.IsolationMode = output.IsolationMode;
    }
    if (output.RunAs !== undefined && output.RunAs !== null) {
        contents.RunAs = deserializeAws_restJson1_1FunctionRunAsConfig(output.RunAs, context);
    }
    return contents;
};
const deserializeAws_restJson1_1FunctionRunAsConfig = (output, context) => {
    let contents = {
        __type: "FunctionRunAsConfig",
        Gid: undefined,
        Uid: undefined
    };
    if (output.Gid !== undefined && output.Gid !== null) {
        contents.Gid = output.Gid;
    }
    if (output.Uid !== undefined && output.Uid !== null) {
        contents.Uid = output.Uid;
    }
    return contents;
};
const deserializeAws_restJson1_1GroupCertificateAuthorityProperties = (output, context) => {
    let contents = {
        __type: "GroupCertificateAuthorityProperties",
        GroupCertificateAuthorityArn: undefined,
        GroupCertificateAuthorityId: undefined
    };
    if (output.GroupCertificateAuthorityArn !== undefined &&
        output.GroupCertificateAuthorityArn !== null) {
        contents.GroupCertificateAuthorityArn = output.GroupCertificateAuthorityArn;
    }
    if (output.GroupCertificateAuthorityId !== undefined &&
        output.GroupCertificateAuthorityId !== null) {
        contents.GroupCertificateAuthorityId = output.GroupCertificateAuthorityId;
    }
    return contents;
};
const deserializeAws_restJson1_1GroupInformation = (output, context) => {
    let contents = {
        __type: "GroupInformation",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        LastUpdatedTimestamp: undefined,
        LatestVersion: undefined,
        LatestVersionArn: undefined,
        Name: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreationTimestamp !== undefined &&
        output.CreationTimestamp !== null) {
        contents.CreationTimestamp = output.CreationTimestamp;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.LastUpdatedTimestamp !== undefined &&
        output.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = output.LastUpdatedTimestamp;
    }
    if (output.LatestVersion !== undefined && output.LatestVersion !== null) {
        contents.LatestVersion = output.LatestVersion;
    }
    if (output.LatestVersionArn !== undefined &&
        output.LatestVersionArn !== null) {
        contents.LatestVersionArn = output.LatestVersionArn;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_restJson1_1GroupOwnerSetting = (output, context) => {
    let contents = {
        __type: "GroupOwnerSetting",
        AutoAddGroupOwner: undefined,
        GroupOwner: undefined
    };
    if (output.AutoAddGroupOwner !== undefined &&
        output.AutoAddGroupOwner !== null) {
        contents.AutoAddGroupOwner = output.AutoAddGroupOwner;
    }
    if (output.GroupOwner !== undefined && output.GroupOwner !== null) {
        contents.GroupOwner = output.GroupOwner;
    }
    return contents;
};
const deserializeAws_restJson1_1GroupVersion = (output, context) => {
    let contents = {
        __type: "GroupVersion",
        ConnectorDefinitionVersionArn: undefined,
        CoreDefinitionVersionArn: undefined,
        DeviceDefinitionVersionArn: undefined,
        FunctionDefinitionVersionArn: undefined,
        LoggerDefinitionVersionArn: undefined,
        ResourceDefinitionVersionArn: undefined,
        SubscriptionDefinitionVersionArn: undefined
    };
    if (output.ConnectorDefinitionVersionArn !== undefined &&
        output.ConnectorDefinitionVersionArn !== null) {
        contents.ConnectorDefinitionVersionArn =
            output.ConnectorDefinitionVersionArn;
    }
    if (output.CoreDefinitionVersionArn !== undefined &&
        output.CoreDefinitionVersionArn !== null) {
        contents.CoreDefinitionVersionArn = output.CoreDefinitionVersionArn;
    }
    if (output.DeviceDefinitionVersionArn !== undefined &&
        output.DeviceDefinitionVersionArn !== null) {
        contents.DeviceDefinitionVersionArn = output.DeviceDefinitionVersionArn;
    }
    if (output.FunctionDefinitionVersionArn !== undefined &&
        output.FunctionDefinitionVersionArn !== null) {
        contents.FunctionDefinitionVersionArn = output.FunctionDefinitionVersionArn;
    }
    if (output.LoggerDefinitionVersionArn !== undefined &&
        output.LoggerDefinitionVersionArn !== null) {
        contents.LoggerDefinitionVersionArn = output.LoggerDefinitionVersionArn;
    }
    if (output.ResourceDefinitionVersionArn !== undefined &&
        output.ResourceDefinitionVersionArn !== null) {
        contents.ResourceDefinitionVersionArn = output.ResourceDefinitionVersionArn;
    }
    if (output.SubscriptionDefinitionVersionArn !== undefined &&
        output.SubscriptionDefinitionVersionArn !== null) {
        contents.SubscriptionDefinitionVersionArn =
            output.SubscriptionDefinitionVersionArn;
    }
    return contents;
};
const deserializeAws_restJson1_1LocalDeviceResourceData = (output, context) => {
    let contents = {
        __type: "LocalDeviceResourceData",
        GroupOwnerSetting: undefined,
        SourcePath: undefined
    };
    if (output.GroupOwnerSetting !== undefined &&
        output.GroupOwnerSetting !== null) {
        contents.GroupOwnerSetting = deserializeAws_restJson1_1GroupOwnerSetting(output.GroupOwnerSetting, context);
    }
    if (output.SourcePath !== undefined && output.SourcePath !== null) {
        contents.SourcePath = output.SourcePath;
    }
    return contents;
};
const deserializeAws_restJson1_1LocalVolumeResourceData = (output, context) => {
    let contents = {
        __type: "LocalVolumeResourceData",
        DestinationPath: undefined,
        GroupOwnerSetting: undefined,
        SourcePath: undefined
    };
    if (output.DestinationPath !== undefined && output.DestinationPath !== null) {
        contents.DestinationPath = output.DestinationPath;
    }
    if (output.GroupOwnerSetting !== undefined &&
        output.GroupOwnerSetting !== null) {
        contents.GroupOwnerSetting = deserializeAws_restJson1_1GroupOwnerSetting(output.GroupOwnerSetting, context);
    }
    if (output.SourcePath !== undefined && output.SourcePath !== null) {
        contents.SourcePath = output.SourcePath;
    }
    return contents;
};
const deserializeAws_restJson1_1Logger = (output, context) => {
    let contents = {
        __type: "Logger",
        Component: undefined,
        Id: undefined,
        Level: undefined,
        Space: undefined,
        Type: undefined
    };
    if (output.Component !== undefined && output.Component !== null) {
        contents.Component = output.Component;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Level !== undefined && output.Level !== null) {
        contents.Level = output.Level;
    }
    if (output.Space !== undefined && output.Space !== null) {
        contents.Space = output.Space;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_restJson1_1LoggerDefinitionVersion = (output, context) => {
    let contents = {
        __type: "LoggerDefinitionVersion",
        Loggers: undefined
    };
    if (output.Loggers !== undefined && output.Loggers !== null) {
        contents.Loggers = deserializeAws_restJson1_1__listOfLogger(output.Loggers, context);
    }
    return contents;
};
const deserializeAws_restJson1_1Resource = (output, context) => {
    let contents = {
        __type: "Resource",
        Id: undefined,
        Name: undefined,
        ResourceDataContainer: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ResourceDataContainer !== undefined &&
        output.ResourceDataContainer !== null) {
        contents.ResourceDataContainer = deserializeAws_restJson1_1ResourceDataContainer(output.ResourceDataContainer, context);
    }
    return contents;
};
const deserializeAws_restJson1_1ResourceAccessPolicy = (output, context) => {
    let contents = {
        __type: "ResourceAccessPolicy",
        Permission: undefined,
        ResourceId: undefined
    };
    if (output.Permission !== undefined && output.Permission !== null) {
        contents.Permission = output.Permission;
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    return contents;
};
const deserializeAws_restJson1_1ResourceDataContainer = (output, context) => {
    let contents = {
        __type: "ResourceDataContainer",
        LocalDeviceResourceData: undefined,
        LocalVolumeResourceData: undefined,
        S3MachineLearningModelResourceData: undefined,
        SageMakerMachineLearningModelResourceData: undefined,
        SecretsManagerSecretResourceData: undefined
    };
    if (output.LocalDeviceResourceData !== undefined &&
        output.LocalDeviceResourceData !== null) {
        contents.LocalDeviceResourceData = deserializeAws_restJson1_1LocalDeviceResourceData(output.LocalDeviceResourceData, context);
    }
    if (output.LocalVolumeResourceData !== undefined &&
        output.LocalVolumeResourceData !== null) {
        contents.LocalVolumeResourceData = deserializeAws_restJson1_1LocalVolumeResourceData(output.LocalVolumeResourceData, context);
    }
    if (output.S3MachineLearningModelResourceData !== undefined &&
        output.S3MachineLearningModelResourceData !== null) {
        contents.S3MachineLearningModelResourceData = deserializeAws_restJson1_1S3MachineLearningModelResourceData(output.S3MachineLearningModelResourceData, context);
    }
    if (output.SageMakerMachineLearningModelResourceData !== undefined &&
        output.SageMakerMachineLearningModelResourceData !== null) {
        contents.SageMakerMachineLearningModelResourceData = deserializeAws_restJson1_1SageMakerMachineLearningModelResourceData(output.SageMakerMachineLearningModelResourceData, context);
    }
    if (output.SecretsManagerSecretResourceData !== undefined &&
        output.SecretsManagerSecretResourceData !== null) {
        contents.SecretsManagerSecretResourceData = deserializeAws_restJson1_1SecretsManagerSecretResourceData(output.SecretsManagerSecretResourceData, context);
    }
    return contents;
};
const deserializeAws_restJson1_1ResourceDefinitionVersion = (output, context) => {
    let contents = {
        __type: "ResourceDefinitionVersion",
        Resources: undefined
    };
    if (output.Resources !== undefined && output.Resources !== null) {
        contents.Resources = deserializeAws_restJson1_1__listOfResource(output.Resources, context);
    }
    return contents;
};
const deserializeAws_restJson1_1ResourceDownloadOwnerSetting = (output, context) => {
    let contents = {
        __type: "ResourceDownloadOwnerSetting",
        GroupOwner: undefined,
        GroupPermission: undefined
    };
    if (output.GroupOwner !== undefined && output.GroupOwner !== null) {
        contents.GroupOwner = output.GroupOwner;
    }
    if (output.GroupPermission !== undefined && output.GroupPermission !== null) {
        contents.GroupPermission = output.GroupPermission;
    }
    return contents;
};
const deserializeAws_restJson1_1S3MachineLearningModelResourceData = (output, context) => {
    let contents = {
        __type: "S3MachineLearningModelResourceData",
        DestinationPath: undefined,
        OwnerSetting: undefined,
        S3Uri: undefined
    };
    if (output.DestinationPath !== undefined && output.DestinationPath !== null) {
        contents.DestinationPath = output.DestinationPath;
    }
    if (output.OwnerSetting !== undefined && output.OwnerSetting !== null) {
        contents.OwnerSetting = deserializeAws_restJson1_1ResourceDownloadOwnerSetting(output.OwnerSetting, context);
    }
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_restJson1_1SageMakerMachineLearningModelResourceData = (output, context) => {
    let contents = {
        __type: "SageMakerMachineLearningModelResourceData",
        DestinationPath: undefined,
        OwnerSetting: undefined,
        SageMakerJobArn: undefined
    };
    if (output.DestinationPath !== undefined && output.DestinationPath !== null) {
        contents.DestinationPath = output.DestinationPath;
    }
    if (output.OwnerSetting !== undefined && output.OwnerSetting !== null) {
        contents.OwnerSetting = deserializeAws_restJson1_1ResourceDownloadOwnerSetting(output.OwnerSetting, context);
    }
    if (output.SageMakerJobArn !== undefined && output.SageMakerJobArn !== null) {
        contents.SageMakerJobArn = output.SageMakerJobArn;
    }
    return contents;
};
const deserializeAws_restJson1_1SecretsManagerSecretResourceData = (output, context) => {
    let contents = {
        __type: "SecretsManagerSecretResourceData",
        ARN: undefined,
        AdditionalStagingLabelsToDownload: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.AdditionalStagingLabelsToDownload !== undefined &&
        output.AdditionalStagingLabelsToDownload !== null) {
        contents.AdditionalStagingLabelsToDownload = deserializeAws_restJson1_1__listOf__string(output.AdditionalStagingLabelsToDownload, context);
    }
    return contents;
};
const deserializeAws_restJson1_1Subscription = (output, context) => {
    let contents = {
        __type: "Subscription",
        Id: undefined,
        Source: undefined,
        Subject: undefined,
        Target: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Source !== undefined && output.Source !== null) {
        contents.Source = output.Source;
    }
    if (output.Subject !== undefined && output.Subject !== null) {
        contents.Subject = output.Subject;
    }
    if (output.Target !== undefined && output.Target !== null) {
        contents.Target = output.Target;
    }
    return contents;
};
const deserializeAws_restJson1_1SubscriptionDefinitionVersion = (output, context) => {
    let contents = {
        __type: "SubscriptionDefinitionVersion",
        Subscriptions: undefined
    };
    if (output.Subscriptions !== undefined && output.Subscriptions !== null) {
        contents.Subscriptions = deserializeAws_restJson1_1__listOfSubscription(output.Subscriptions, context);
    }
    return contents;
};
const deserializeAws_restJson1_1Tags = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_restJson1_1VersionInformation = (output, context) => {
    let contents = {
        __type: "VersionInformation",
        Arn: undefined,
        CreationTimestamp: undefined,
        Id: undefined,
        Version: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreationTimestamp !== undefined &&
        output.CreationTimestamp !== null) {
        contents.CreationTimestamp = output.CreationTimestamp;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_restJson1_1__listOfConnectivityInfo = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1ConnectivityInfo(entry, context));
};
const deserializeAws_restJson1_1__listOfConnector = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1Connector(entry, context));
};
const deserializeAws_restJson1_1__listOfCore = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1Core(entry, context));
};
const deserializeAws_restJson1_1__listOfDefinitionInformation = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1DefinitionInformation(entry, context));
};
const deserializeAws_restJson1_1__listOfDevice = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1Device(entry, context));
};
const deserializeAws_restJson1_1__listOfFunction = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1Function(entry, context));
};
const deserializeAws_restJson1_1__listOfGroupCertificateAuthorityProperties = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1GroupCertificateAuthorityProperties(entry, context));
};
const deserializeAws_restJson1_1__listOfGroupInformation = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1GroupInformation(entry, context));
};
const deserializeAws_restJson1_1__listOfLogger = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1Logger(entry, context));
};
const deserializeAws_restJson1_1__listOfResource = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1Resource(entry, context));
};
const deserializeAws_restJson1_1__listOfResourceAccessPolicy = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1ResourceAccessPolicy(entry, context));
};
const deserializeAws_restJson1_1__listOfSubscription = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1Subscription(entry, context));
};
const deserializeAws_restJson1_1__listOfVersionInformation = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1VersionInformation(entry, context));
};
const deserializeAws_restJson1_1__listOf__string = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_restJson1_1__mapOf__string = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
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