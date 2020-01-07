"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../models/index");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
async function serializeAws_restJson1_1CreateMeshCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v20190125/meshes";
    let body;
    const bodyParams = {};
    if (input.clientToken === undefined) {
        input.clientToken = uuid_1.v4();
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.meshName !== undefined) {
        bodyParams["meshName"] = input.meshName;
    }
    if (input.spec !== undefined) {
        bodyParams["spec"] = serializeAws_restJson1_1MeshSpec(input.spec, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateMeshCommand = serializeAws_restJson1_1CreateMeshCommand;
async function serializeAws_restJson1_1CreateRouteCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    if (input.virtualRouterName !== undefined) {
        const labelValue = input.virtualRouterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
        }
        resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualRouterName.");
    }
    let body;
    const bodyParams = {};
    if (input.clientToken === undefined) {
        input.clientToken = uuid_1.v4();
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.routeName !== undefined) {
        bodyParams["routeName"] = input.routeName;
    }
    if (input.spec !== undefined) {
        bodyParams["spec"] = serializeAws_restJson1_1RouteSpec(input.spec, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateRouteCommand = serializeAws_restJson1_1CreateRouteCommand;
async function serializeAws_restJson1_1CreateVirtualNodeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    let body;
    const bodyParams = {};
    if (input.clientToken === undefined) {
        input.clientToken = uuid_1.v4();
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.spec !== undefined) {
        bodyParams["spec"] = serializeAws_restJson1_1VirtualNodeSpec(input.spec, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
    }
    if (input.virtualNodeName !== undefined) {
        bodyParams["virtualNodeName"] = input.virtualNodeName;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateVirtualNodeCommand = serializeAws_restJson1_1CreateVirtualNodeCommand;
async function serializeAws_restJson1_1CreateVirtualRouterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    let body;
    const bodyParams = {};
    if (input.clientToken === undefined) {
        input.clientToken = uuid_1.v4();
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.spec !== undefined) {
        bodyParams["spec"] = serializeAws_restJson1_1VirtualRouterSpec(input.spec, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
    }
    if (input.virtualRouterName !== undefined) {
        bodyParams["virtualRouterName"] = input.virtualRouterName;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateVirtualRouterCommand = serializeAws_restJson1_1CreateVirtualRouterCommand;
async function serializeAws_restJson1_1CreateVirtualServiceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    let body;
    const bodyParams = {};
    if (input.clientToken === undefined) {
        input.clientToken = uuid_1.v4();
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.spec !== undefined) {
        bodyParams["spec"] = serializeAws_restJson1_1VirtualServiceSpec(input.spec, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
    }
    if (input.virtualServiceName !== undefined) {
        bodyParams["virtualServiceName"] = input.virtualServiceName;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateVirtualServiceCommand = serializeAws_restJson1_1CreateVirtualServiceCommand;
async function serializeAws_restJson1_1DeleteMeshCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes/{meshName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteMeshCommand = serializeAws_restJson1_1DeleteMeshCommand;
async function serializeAws_restJson1_1DeleteRouteCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    if (input.routeName !== undefined) {
        const labelValue = input.routeName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: routeName.");
        }
        resolvedPath = resolvedPath.replace("{routeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: routeName.");
    }
    if (input.virtualRouterName !== undefined) {
        const labelValue = input.virtualRouterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
        }
        resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualRouterName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteRouteCommand = serializeAws_restJson1_1DeleteRouteCommand;
async function serializeAws_restJson1_1DeleteVirtualNodeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    if (input.virtualNodeName !== undefined) {
        const labelValue = input.virtualNodeName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualNodeName.");
        }
        resolvedPath = resolvedPath.replace("{virtualNodeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualNodeName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteVirtualNodeCommand = serializeAws_restJson1_1DeleteVirtualNodeCommand;
async function serializeAws_restJson1_1DeleteVirtualRouterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    if (input.virtualRouterName !== undefined) {
        const labelValue = input.virtualRouterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
        }
        resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualRouterName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteVirtualRouterCommand = serializeAws_restJson1_1DeleteVirtualRouterCommand;
async function serializeAws_restJson1_1DeleteVirtualServiceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    if (input.virtualServiceName !== undefined) {
        const labelValue = input.virtualServiceName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualServiceName.");
        }
        resolvedPath = resolvedPath.replace("{virtualServiceName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualServiceName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DeleteVirtualServiceCommand = serializeAws_restJson1_1DeleteVirtualServiceCommand;
async function serializeAws_restJson1_1DescribeMeshCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes/{meshName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DescribeMeshCommand = serializeAws_restJson1_1DescribeMeshCommand;
async function serializeAws_restJson1_1DescribeRouteCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    if (input.routeName !== undefined) {
        const labelValue = input.routeName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: routeName.");
        }
        resolvedPath = resolvedPath.replace("{routeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: routeName.");
    }
    if (input.virtualRouterName !== undefined) {
        const labelValue = input.virtualRouterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
        }
        resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualRouterName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DescribeRouteCommand = serializeAws_restJson1_1DescribeRouteCommand;
async function serializeAws_restJson1_1DescribeVirtualNodeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    if (input.virtualNodeName !== undefined) {
        const labelValue = input.virtualNodeName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualNodeName.");
        }
        resolvedPath = resolvedPath.replace("{virtualNodeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualNodeName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DescribeVirtualNodeCommand = serializeAws_restJson1_1DescribeVirtualNodeCommand;
async function serializeAws_restJson1_1DescribeVirtualRouterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    if (input.virtualRouterName !== undefined) {
        const labelValue = input.virtualRouterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
        }
        resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualRouterName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DescribeVirtualRouterCommand = serializeAws_restJson1_1DescribeVirtualRouterCommand;
async function serializeAws_restJson1_1DescribeVirtualServiceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    if (input.virtualServiceName !== undefined) {
        const labelValue = input.virtualServiceName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualServiceName.");
        }
        resolvedPath = resolvedPath.replace("{virtualServiceName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualServiceName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1DescribeVirtualServiceCommand = serializeAws_restJson1_1DescribeVirtualServiceCommand;
async function serializeAws_restJson1_1ListMeshesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes";
    const query = {};
    if (input.limit !== undefined) {
        query["limit"] = input.limit.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListMeshesCommand = serializeAws_restJson1_1ListMeshesCommand;
async function serializeAws_restJson1_1ListRoutesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    if (input.virtualRouterName !== undefined) {
        const labelValue = input.virtualRouterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
        }
        resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualRouterName.");
    }
    const query = {};
    if (input.limit !== undefined) {
        query["limit"] = input.limit.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListRoutesCommand = serializeAws_restJson1_1ListRoutesCommand;
async function serializeAws_restJson1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/tags";
    const query = {};
    if (input.limit !== undefined) {
        query["limit"] = input.limit.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    if (input.resourceArn !== undefined) {
        query["resourceArn"] = input.resourceArn;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListTagsForResourceCommand = serializeAws_restJson1_1ListTagsForResourceCommand;
async function serializeAws_restJson1_1ListVirtualNodesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    const query = {};
    if (input.limit !== undefined) {
        query["limit"] = input.limit.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListVirtualNodesCommand = serializeAws_restJson1_1ListVirtualNodesCommand;
async function serializeAws_restJson1_1ListVirtualRoutersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    const query = {};
    if (input.limit !== undefined) {
        query["limit"] = input.limit.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListVirtualRoutersCommand = serializeAws_restJson1_1ListVirtualRoutersCommand;
async function serializeAws_restJson1_1ListVirtualServicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    const query = {};
    if (input.limit !== undefined) {
        query["limit"] = input.limit.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListVirtualServicesCommand = serializeAws_restJson1_1ListVirtualServicesCommand;
async function serializeAws_restJson1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v20190125/tag";
    const query = {};
    if (input.resourceArn !== undefined) {
        query["resourceArn"] = input.resourceArn;
    }
    let body;
    const bodyParams = {};
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restJson1_1TagResourceCommand = serializeAws_restJson1_1TagResourceCommand;
async function serializeAws_restJson1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v20190125/untag";
    const query = {};
    if (input.resourceArn !== undefined) {
        query["resourceArn"] = input.resourceArn;
    }
    let body;
    const bodyParams = {};
    if (input.tagKeys !== undefined) {
        bodyParams["tagKeys"] = serializeAws_restJson1_1TagKeyList(input.tagKeys, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restJson1_1UntagResourceCommand = serializeAws_restJson1_1UntagResourceCommand;
async function serializeAws_restJson1_1UpdateMeshCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v20190125/meshes/{meshName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    let body;
    const bodyParams = {};
    if (input.clientToken === undefined) {
        input.clientToken = uuid_1.v4();
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.spec !== undefined) {
        bodyParams["spec"] = serializeAws_restJson1_1MeshSpec(input.spec, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateMeshCommand = serializeAws_restJson1_1UpdateMeshCommand;
async function serializeAws_restJson1_1UpdateRouteCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    if (input.routeName !== undefined) {
        const labelValue = input.routeName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: routeName.");
        }
        resolvedPath = resolvedPath.replace("{routeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: routeName.");
    }
    if (input.virtualRouterName !== undefined) {
        const labelValue = input.virtualRouterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
        }
        resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualRouterName.");
    }
    let body;
    const bodyParams = {};
    if (input.clientToken === undefined) {
        input.clientToken = uuid_1.v4();
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.spec !== undefined) {
        bodyParams["spec"] = serializeAws_restJson1_1RouteSpec(input.spec, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateRouteCommand = serializeAws_restJson1_1UpdateRouteCommand;
async function serializeAws_restJson1_1UpdateVirtualNodeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    if (input.virtualNodeName !== undefined) {
        const labelValue = input.virtualNodeName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualNodeName.");
        }
        resolvedPath = resolvedPath.replace("{virtualNodeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualNodeName.");
    }
    let body;
    const bodyParams = {};
    if (input.clientToken === undefined) {
        input.clientToken = uuid_1.v4();
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.spec !== undefined) {
        bodyParams["spec"] = serializeAws_restJson1_1VirtualNodeSpec(input.spec, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateVirtualNodeCommand = serializeAws_restJson1_1UpdateVirtualNodeCommand;
async function serializeAws_restJson1_1UpdateVirtualRouterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    if (input.virtualRouterName !== undefined) {
        const labelValue = input.virtualRouterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
        }
        resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualRouterName.");
    }
    let body;
    const bodyParams = {};
    if (input.clientToken === undefined) {
        input.clientToken = uuid_1.v4();
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.spec !== undefined) {
        bodyParams["spec"] = serializeAws_restJson1_1VirtualRouterSpec(input.spec, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateVirtualRouterCommand = serializeAws_restJson1_1UpdateVirtualRouterCommand;
async function serializeAws_restJson1_1UpdateVirtualServiceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
    if (input.meshName !== undefined) {
        const labelValue = input.meshName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: meshName.");
        }
        resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: meshName.");
    }
    if (input.virtualServiceName !== undefined) {
        const labelValue = input.virtualServiceName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: virtualServiceName.");
        }
        resolvedPath = resolvedPath.replace("{virtualServiceName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: virtualServiceName.");
    }
    let body;
    const bodyParams = {};
    if (input.clientToken === undefined) {
        input.clientToken = uuid_1.v4();
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.spec !== undefined) {
        bodyParams["spec"] = serializeAws_restJson1_1VirtualServiceSpec(input.spec, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateVirtualServiceCommand = serializeAws_restJson1_1UpdateVirtualServiceCommand;
async function deserializeAws_restJson1_1CreateMeshCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateMeshCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateMeshOutput",
        mesh: undefined
    };
    const data = await parseBody(output.body, context);
    contents.mesh = deserializeAws_restJson1_1MeshData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateMeshCommand = deserializeAws_restJson1_1CreateMeshCommand;
async function deserializeAws_restJson1_1CreateMeshCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.lattice.v20190125#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.lattice.v20190125#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateRouteCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateRouteCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateRouteOutput",
        route: undefined
    };
    const data = await parseBody(output.body, context);
    contents.route = deserializeAws_restJson1_1RouteData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateRouteCommand = deserializeAws_restJson1_1CreateRouteCommand;
async function deserializeAws_restJson1_1CreateRouteCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.lattice.v20190125#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.lattice.v20190125#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateVirtualNodeCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateVirtualNodeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateVirtualNodeOutput",
        virtualNode: undefined
    };
    const data = await parseBody(output.body, context);
    contents.virtualNode = deserializeAws_restJson1_1VirtualNodeData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateVirtualNodeCommand = deserializeAws_restJson1_1CreateVirtualNodeCommand;
async function deserializeAws_restJson1_1CreateVirtualNodeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.lattice.v20190125#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.lattice.v20190125#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateVirtualRouterCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateVirtualRouterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateVirtualRouterOutput",
        virtualRouter: undefined
    };
    const data = await parseBody(output.body, context);
    contents.virtualRouter = deserializeAws_restJson1_1VirtualRouterData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateVirtualRouterCommand = deserializeAws_restJson1_1CreateVirtualRouterCommand;
async function deserializeAws_restJson1_1CreateVirtualRouterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.lattice.v20190125#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.lattice.v20190125#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateVirtualServiceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateVirtualServiceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateVirtualServiceOutput",
        virtualService: undefined
    };
    const data = await parseBody(output.body, context);
    contents.virtualService = deserializeAws_restJson1_1VirtualServiceData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateVirtualServiceCommand = deserializeAws_restJson1_1CreateVirtualServiceCommand;
async function deserializeAws_restJson1_1CreateVirtualServiceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.lattice.v20190125#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.lattice.v20190125#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteMeshCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteMeshCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteMeshOutput",
        mesh: undefined
    };
    const data = await parseBody(output.body, context);
    contents.mesh = deserializeAws_restJson1_1MeshData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteMeshCommand = deserializeAws_restJson1_1DeleteMeshCommand;
async function deserializeAws_restJson1_1DeleteMeshCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.lattice.v20190125#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteRouteCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteRouteCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteRouteOutput",
        route: undefined
    };
    const data = await parseBody(output.body, context);
    contents.route = deserializeAws_restJson1_1RouteData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteRouteCommand = deserializeAws_restJson1_1DeleteRouteCommand;
async function deserializeAws_restJson1_1DeleteRouteCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.lattice.v20190125#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteVirtualNodeCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteVirtualNodeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteVirtualNodeOutput",
        virtualNode: undefined
    };
    const data = await parseBody(output.body, context);
    contents.virtualNode = deserializeAws_restJson1_1VirtualNodeData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteVirtualNodeCommand = deserializeAws_restJson1_1DeleteVirtualNodeCommand;
async function deserializeAws_restJson1_1DeleteVirtualNodeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.lattice.v20190125#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteVirtualRouterCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteVirtualRouterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteVirtualRouterOutput",
        virtualRouter: undefined
    };
    const data = await parseBody(output.body, context);
    contents.virtualRouter = deserializeAws_restJson1_1VirtualRouterData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteVirtualRouterCommand = deserializeAws_restJson1_1DeleteVirtualRouterCommand;
async function deserializeAws_restJson1_1DeleteVirtualRouterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.lattice.v20190125#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DeleteVirtualServiceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteVirtualServiceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteVirtualServiceOutput",
        virtualService: undefined
    };
    const data = await parseBody(output.body, context);
    contents.virtualService = deserializeAws_restJson1_1VirtualServiceData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteVirtualServiceCommand = deserializeAws_restJson1_1DeleteVirtualServiceCommand;
async function deserializeAws_restJson1_1DeleteVirtualServiceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DescribeMeshCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DescribeMeshCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DescribeMeshOutput",
        mesh: undefined
    };
    const data = await parseBody(output.body, context);
    contents.mesh = deserializeAws_restJson1_1MeshData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DescribeMeshCommand = deserializeAws_restJson1_1DescribeMeshCommand;
async function deserializeAws_restJson1_1DescribeMeshCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DescribeRouteCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DescribeRouteCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DescribeRouteOutput",
        route: undefined
    };
    const data = await parseBody(output.body, context);
    contents.route = deserializeAws_restJson1_1RouteData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DescribeRouteCommand = deserializeAws_restJson1_1DescribeRouteCommand;
async function deserializeAws_restJson1_1DescribeRouteCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DescribeVirtualNodeCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DescribeVirtualNodeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DescribeVirtualNodeOutput",
        virtualNode: undefined
    };
    const data = await parseBody(output.body, context);
    contents.virtualNode = deserializeAws_restJson1_1VirtualNodeData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DescribeVirtualNodeCommand = deserializeAws_restJson1_1DescribeVirtualNodeCommand;
async function deserializeAws_restJson1_1DescribeVirtualNodeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DescribeVirtualRouterCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DescribeVirtualRouterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DescribeVirtualRouterOutput",
        virtualRouter: undefined
    };
    const data = await parseBody(output.body, context);
    contents.virtualRouter = deserializeAws_restJson1_1VirtualRouterData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DescribeVirtualRouterCommand = deserializeAws_restJson1_1DescribeVirtualRouterCommand;
async function deserializeAws_restJson1_1DescribeVirtualRouterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1DescribeVirtualServiceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DescribeVirtualServiceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DescribeVirtualServiceOutput",
        virtualService: undefined
    };
    const data = await parseBody(output.body, context);
    contents.virtualService = deserializeAws_restJson1_1VirtualServiceData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DescribeVirtualServiceCommand = deserializeAws_restJson1_1DescribeVirtualServiceCommand;
async function deserializeAws_restJson1_1DescribeVirtualServiceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListMeshesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListMeshesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListMeshesOutput",
        meshes: undefined,
        nextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.meshes !== undefined && data.meshes !== null) {
        contents.meshes = deserializeAws_restJson1_1MeshList(data.meshes, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListMeshesCommand = deserializeAws_restJson1_1ListMeshesCommand;
async function deserializeAws_restJson1_1ListMeshesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListRoutesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListRoutesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListRoutesOutput",
        nextToken: undefined,
        routes: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.routes !== undefined && data.routes !== null) {
        contents.routes = deserializeAws_restJson1_1RouteList(data.routes, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListRoutesCommand = deserializeAws_restJson1_1ListRoutesCommand;
async function deserializeAws_restJson1_1ListRoutesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        __type: "ListTagsForResourceOutput",
        nextToken: undefined,
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1TagList(data.tags, context);
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
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListVirtualNodesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListVirtualNodesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListVirtualNodesOutput",
        nextToken: undefined,
        virtualNodes: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.virtualNodes !== undefined && data.virtualNodes !== null) {
        contents.virtualNodes = deserializeAws_restJson1_1VirtualNodeList(data.virtualNodes, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListVirtualNodesCommand = deserializeAws_restJson1_1ListVirtualNodesCommand;
async function deserializeAws_restJson1_1ListVirtualNodesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListVirtualRoutersCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListVirtualRoutersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListVirtualRoutersOutput",
        nextToken: undefined,
        virtualRouters: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.virtualRouters !== undefined && data.virtualRouters !== null) {
        contents.virtualRouters = deserializeAws_restJson1_1VirtualRouterList(data.virtualRouters, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListVirtualRoutersCommand = deserializeAws_restJson1_1ListVirtualRoutersCommand;
async function deserializeAws_restJson1_1ListVirtualRoutersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1ListVirtualServicesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListVirtualServicesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListVirtualServicesOutput",
        nextToken: undefined,
        virtualServices: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.virtualServices !== undefined && data.virtualServices !== null) {
        contents.virtualServices = deserializeAws_restJson1_1VirtualServiceList(data.virtualServices, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListVirtualServicesCommand = deserializeAws_restJson1_1ListVirtualServicesCommand;
async function deserializeAws_restJson1_1ListVirtualServicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        __type: "TagResourceOutput"
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
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.lattice.v20190125#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        __type: "UntagResourceOutput"
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
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateMeshCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateMeshCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateMeshOutput",
        mesh: undefined
    };
    const data = await parseBody(output.body, context);
    contents.mesh = deserializeAws_restJson1_1MeshData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateMeshCommand = deserializeAws_restJson1_1UpdateMeshCommand;
async function deserializeAws_restJson1_1UpdateMeshCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.lattice.v20190125#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateRouteCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateRouteCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateRouteOutput",
        route: undefined
    };
    const data = await parseBody(output.body, context);
    contents.route = deserializeAws_restJson1_1RouteData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateRouteCommand = deserializeAws_restJson1_1UpdateRouteCommand;
async function deserializeAws_restJson1_1UpdateRouteCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.lattice.v20190125#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.lattice.v20190125#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateVirtualNodeCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateVirtualNodeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateVirtualNodeOutput",
        virtualNode: undefined
    };
    const data = await parseBody(output.body, context);
    contents.virtualNode = deserializeAws_restJson1_1VirtualNodeData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateVirtualNodeCommand = deserializeAws_restJson1_1UpdateVirtualNodeCommand;
async function deserializeAws_restJson1_1UpdateVirtualNodeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.lattice.v20190125#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.lattice.v20190125#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateVirtualRouterCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateVirtualRouterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateVirtualRouterOutput",
        virtualRouter: undefined
    };
    const data = await parseBody(output.body, context);
    contents.virtualRouter = deserializeAws_restJson1_1VirtualRouterData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateVirtualRouterCommand = deserializeAws_restJson1_1UpdateVirtualRouterCommand;
async function deserializeAws_restJson1_1UpdateVirtualRouterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.lattice.v20190125#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.lattice.v20190125#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1UpdateVirtualServiceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateVirtualServiceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateVirtualServiceOutput",
        virtualService: undefined
    };
    const data = await parseBody(output.body, context);
    contents.virtualService = deserializeAws_restJson1_1VirtualServiceData(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateVirtualServiceCommand = deserializeAws_restJson1_1UpdateVirtualServiceCommand;
async function deserializeAws_restJson1_1UpdateVirtualServiceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lattice.v20190125#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.lattice.v20190125#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazonaws.lattice.v20190125#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.lattice.v20190125#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lattice.v20190125#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
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
const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ForbiddenException",
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
const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitExceededException",
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
const deserializeAws_restJson1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
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
const deserializeAws_restJson1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceInUseException",
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
const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
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
const deserializeAws_restJson1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyTagsException",
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
const serializeAws_restJson1_1AccessLog = (input, context) => {
    return index_1.AccessLog.visit(input, {
        file: value => serializeAws_restJson1_1FileAccessLog(value, context),
        _: value => value
    });
};
const serializeAws_restJson1_1AwsCloudMapInstanceAttribute = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_restJson1_1AwsCloudMapInstanceAttributes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1AwsCloudMapInstanceAttribute(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1AwsCloudMapServiceDiscovery = (input, context) => {
    const bodyParams = {};
    if (input.attributes !== undefined) {
        bodyParams["attributes"] = serializeAws_restJson1_1AwsCloudMapInstanceAttributes(input.attributes, context);
    }
    if (input.namespaceName !== undefined) {
        bodyParams["namespaceName"] = input.namespaceName;
    }
    if (input.serviceName !== undefined) {
        bodyParams["serviceName"] = input.serviceName;
    }
    return bodyParams;
};
const serializeAws_restJson1_1Backend = (input, context) => {
    return index_1.Backend.visit(input, {
        virtualService: value => serializeAws_restJson1_1VirtualServiceBackend(value, context),
        _: value => value
    });
};
const serializeAws_restJson1_1Backends = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1Backend(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1DnsServiceDiscovery = (input, context) => {
    const bodyParams = {};
    if (input.hostname !== undefined) {
        bodyParams["hostname"] = input.hostname;
    }
    return bodyParams;
};
const serializeAws_restJson1_1Duration = (input, context) => {
    const bodyParams = {};
    if (input.unit !== undefined) {
        bodyParams["unit"] = input.unit;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_restJson1_1EgressFilter = (input, context) => {
    const bodyParams = {};
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_restJson1_1FileAccessLog = (input, context) => {
    const bodyParams = {};
    if (input.path !== undefined) {
        bodyParams["path"] = input.path;
    }
    return bodyParams;
};
const serializeAws_restJson1_1GrpcRetryPolicy = (input, context) => {
    const bodyParams = {};
    if (input.grpcRetryEvents !== undefined) {
        bodyParams["grpcRetryEvents"] = serializeAws_restJson1_1GrpcRetryPolicyEvents(input.grpcRetryEvents, context);
    }
    if (input.httpRetryEvents !== undefined) {
        bodyParams["httpRetryEvents"] = serializeAws_restJson1_1HttpRetryPolicyEvents(input.httpRetryEvents, context);
    }
    if (input.maxRetries !== undefined) {
        bodyParams["maxRetries"] = input.maxRetries;
    }
    if (input.perRetryTimeout !== undefined) {
        bodyParams["perRetryTimeout"] = serializeAws_restJson1_1Duration(input.perRetryTimeout, context);
    }
    if (input.tcpRetryEvents !== undefined) {
        bodyParams["tcpRetryEvents"] = serializeAws_restJson1_1TcpRetryPolicyEvents(input.tcpRetryEvents, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1GrpcRetryPolicyEvents = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_restJson1_1GrpcRoute = (input, context) => {
    const bodyParams = {};
    if (input.action !== undefined) {
        bodyParams["action"] = serializeAws_restJson1_1GrpcRouteAction(input.action, context);
    }
    if (input.match !== undefined) {
        bodyParams["match"] = serializeAws_restJson1_1GrpcRouteMatch(input.match, context);
    }
    if (input.retryPolicy !== undefined) {
        bodyParams["retryPolicy"] = serializeAws_restJson1_1GrpcRetryPolicy(input.retryPolicy, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1GrpcRouteAction = (input, context) => {
    const bodyParams = {};
    if (input.weightedTargets !== undefined) {
        bodyParams["weightedTargets"] = serializeAws_restJson1_1WeightedTargets(input.weightedTargets, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1GrpcRouteMatch = (input, context) => {
    const bodyParams = {};
    if (input.metadata !== undefined) {
        bodyParams["metadata"] = serializeAws_restJson1_1GrpcRouteMetadataList(input.metadata, context);
    }
    if (input.methodName !== undefined) {
        bodyParams["methodName"] = input.methodName;
    }
    if (input.serviceName !== undefined) {
        bodyParams["serviceName"] = input.serviceName;
    }
    return bodyParams;
};
const serializeAws_restJson1_1GrpcRouteMetadata = (input, context) => {
    const bodyParams = {};
    if (input.invert !== undefined) {
        bodyParams["invert"] = input.invert;
    }
    if (input.match !== undefined) {
        bodyParams["match"] = serializeAws_restJson1_1GrpcRouteMetadataMatchMethod(input.match, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_restJson1_1GrpcRouteMetadataList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1GrpcRouteMetadata(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1GrpcRouteMetadataMatchMethod = (input, context) => {
    return index_1.GrpcRouteMetadataMatchMethod.visit(input, {
        exact: value => value,
        prefix: value => value,
        range: value => serializeAws_restJson1_1MatchRange(value, context),
        regex: value => value,
        suffix: value => value,
        _: value => value
    });
};
const serializeAws_restJson1_1HeaderMatchMethod = (input, context) => {
    return index_1.HeaderMatchMethod.visit(input, {
        exact: value => value,
        prefix: value => value,
        range: value => serializeAws_restJson1_1MatchRange(value, context),
        regex: value => value,
        suffix: value => value,
        _: value => value
    });
};
const serializeAws_restJson1_1HealthCheckPolicy = (input, context) => {
    const bodyParams = {};
    if (input.healthyThreshold !== undefined) {
        bodyParams["healthyThreshold"] = input.healthyThreshold;
    }
    if (input.intervalMillis !== undefined) {
        bodyParams["intervalMillis"] = input.intervalMillis;
    }
    if (input.path !== undefined) {
        bodyParams["path"] = input.path;
    }
    if (input.port !== undefined) {
        bodyParams["port"] = input.port;
    }
    if (input.protocol !== undefined) {
        bodyParams["protocol"] = input.protocol;
    }
    if (input.timeoutMillis !== undefined) {
        bodyParams["timeoutMillis"] = input.timeoutMillis;
    }
    if (input.unhealthyThreshold !== undefined) {
        bodyParams["unhealthyThreshold"] = input.unhealthyThreshold;
    }
    return bodyParams;
};
const serializeAws_restJson1_1HttpRetryPolicy = (input, context) => {
    const bodyParams = {};
    if (input.httpRetryEvents !== undefined) {
        bodyParams["httpRetryEvents"] = serializeAws_restJson1_1HttpRetryPolicyEvents(input.httpRetryEvents, context);
    }
    if (input.maxRetries !== undefined) {
        bodyParams["maxRetries"] = input.maxRetries;
    }
    if (input.perRetryTimeout !== undefined) {
        bodyParams["perRetryTimeout"] = serializeAws_restJson1_1Duration(input.perRetryTimeout, context);
    }
    if (input.tcpRetryEvents !== undefined) {
        bodyParams["tcpRetryEvents"] = serializeAws_restJson1_1TcpRetryPolicyEvents(input.tcpRetryEvents, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1HttpRetryPolicyEvents = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_restJson1_1HttpRoute = (input, context) => {
    const bodyParams = {};
    if (input.action !== undefined) {
        bodyParams["action"] = serializeAws_restJson1_1HttpRouteAction(input.action, context);
    }
    if (input.match !== undefined) {
        bodyParams["match"] = serializeAws_restJson1_1HttpRouteMatch(input.match, context);
    }
    if (input.retryPolicy !== undefined) {
        bodyParams["retryPolicy"] = serializeAws_restJson1_1HttpRetryPolicy(input.retryPolicy, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1HttpRouteAction = (input, context) => {
    const bodyParams = {};
    if (input.weightedTargets !== undefined) {
        bodyParams["weightedTargets"] = serializeAws_restJson1_1WeightedTargets(input.weightedTargets, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1HttpRouteHeader = (input, context) => {
    const bodyParams = {};
    if (input.invert !== undefined) {
        bodyParams["invert"] = input.invert;
    }
    if (input.match !== undefined) {
        bodyParams["match"] = serializeAws_restJson1_1HeaderMatchMethod(input.match, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_restJson1_1HttpRouteHeaders = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1HttpRouteHeader(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1HttpRouteMatch = (input, context) => {
    const bodyParams = {};
    if (input.headers !== undefined) {
        bodyParams["headers"] = serializeAws_restJson1_1HttpRouteHeaders(input.headers, context);
    }
    if (input.method !== undefined) {
        bodyParams["method"] = input.method;
    }
    if (input.prefix !== undefined) {
        bodyParams["prefix"] = input.prefix;
    }
    if (input.scheme !== undefined) {
        bodyParams["scheme"] = input.scheme;
    }
    return bodyParams;
};
const serializeAws_restJson1_1Listener = (input, context) => {
    const bodyParams = {};
    if (input.healthCheck !== undefined) {
        bodyParams["healthCheck"] = serializeAws_restJson1_1HealthCheckPolicy(input.healthCheck, context);
    }
    if (input.portMapping !== undefined) {
        bodyParams["portMapping"] = serializeAws_restJson1_1PortMapping(input.portMapping, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1Listeners = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1Listener(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1Logging = (input, context) => {
    const bodyParams = {};
    if (input.accessLog !== undefined) {
        bodyParams["accessLog"] = serializeAws_restJson1_1AccessLog(input.accessLog, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1MatchRange = (input, context) => {
    const bodyParams = {};
    if (input.end !== undefined) {
        bodyParams["end"] = input.end;
    }
    if (input.start !== undefined) {
        bodyParams["start"] = input.start;
    }
    return bodyParams;
};
const serializeAws_restJson1_1MeshSpec = (input, context) => {
    const bodyParams = {};
    if (input.egressFilter !== undefined) {
        bodyParams["egressFilter"] = serializeAws_restJson1_1EgressFilter(input.egressFilter, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1PortMapping = (input, context) => {
    const bodyParams = {};
    if (input.port !== undefined) {
        bodyParams["port"] = input.port;
    }
    if (input.protocol !== undefined) {
        bodyParams["protocol"] = input.protocol;
    }
    return bodyParams;
};
const serializeAws_restJson1_1RouteSpec = (input, context) => {
    const bodyParams = {};
    if (input.grpcRoute !== undefined) {
        bodyParams["grpcRoute"] = serializeAws_restJson1_1GrpcRoute(input.grpcRoute, context);
    }
    if (input.http2Route !== undefined) {
        bodyParams["http2Route"] = serializeAws_restJson1_1HttpRoute(input.http2Route, context);
    }
    if (input.httpRoute !== undefined) {
        bodyParams["httpRoute"] = serializeAws_restJson1_1HttpRoute(input.httpRoute, context);
    }
    if (input.priority !== undefined) {
        bodyParams["priority"] = input.priority;
    }
    if (input.tcpRoute !== undefined) {
        bodyParams["tcpRoute"] = serializeAws_restJson1_1TcpRoute(input.tcpRoute, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1ServiceDiscovery = (input, context) => {
    return index_1.ServiceDiscovery.visit(input, {
        awsCloudMap: value => serializeAws_restJson1_1AwsCloudMapServiceDiscovery(value, context),
        dns: value => serializeAws_restJson1_1DnsServiceDiscovery(value, context),
        _: value => value
    });
};
const serializeAws_restJson1_1TagKeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_restJson1_1TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1TagRef(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1TagRef = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_restJson1_1TcpRetryPolicyEvents = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_restJson1_1TcpRoute = (input, context) => {
    const bodyParams = {};
    if (input.action !== undefined) {
        bodyParams["action"] = serializeAws_restJson1_1TcpRouteAction(input.action, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1TcpRouteAction = (input, context) => {
    const bodyParams = {};
    if (input.weightedTargets !== undefined) {
        bodyParams["weightedTargets"] = serializeAws_restJson1_1WeightedTargets(input.weightedTargets, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1VirtualNodeServiceProvider = (input, context) => {
    const bodyParams = {};
    if (input.virtualNodeName !== undefined) {
        bodyParams["virtualNodeName"] = input.virtualNodeName;
    }
    return bodyParams;
};
const serializeAws_restJson1_1VirtualNodeSpec = (input, context) => {
    const bodyParams = {};
    if (input.backends !== undefined) {
        bodyParams["backends"] = serializeAws_restJson1_1Backends(input.backends, context);
    }
    if (input.listeners !== undefined) {
        bodyParams["listeners"] = serializeAws_restJson1_1Listeners(input.listeners, context);
    }
    if (input.logging !== undefined) {
        bodyParams["logging"] = serializeAws_restJson1_1Logging(input.logging, context);
    }
    if (input.serviceDiscovery !== undefined) {
        bodyParams["serviceDiscovery"] = serializeAws_restJson1_1ServiceDiscovery(input.serviceDiscovery, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1VirtualRouterListener = (input, context) => {
    const bodyParams = {};
    if (input.portMapping !== undefined) {
        bodyParams["portMapping"] = serializeAws_restJson1_1PortMapping(input.portMapping, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1VirtualRouterListeners = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1VirtualRouterListener(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1VirtualRouterServiceProvider = (input, context) => {
    const bodyParams = {};
    if (input.virtualRouterName !== undefined) {
        bodyParams["virtualRouterName"] = input.virtualRouterName;
    }
    return bodyParams;
};
const serializeAws_restJson1_1VirtualRouterSpec = (input, context) => {
    const bodyParams = {};
    if (input.listeners !== undefined) {
        bodyParams["listeners"] = serializeAws_restJson1_1VirtualRouterListeners(input.listeners, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1VirtualServiceBackend = (input, context) => {
    const bodyParams = {};
    if (input.virtualServiceName !== undefined) {
        bodyParams["virtualServiceName"] = input.virtualServiceName;
    }
    return bodyParams;
};
const serializeAws_restJson1_1VirtualServiceProvider = (input, context) => {
    return index_1.VirtualServiceProvider.visit(input, {
        virtualNode: value => serializeAws_restJson1_1VirtualNodeServiceProvider(value, context),
        virtualRouter: value => serializeAws_restJson1_1VirtualRouterServiceProvider(value, context),
        _: value => value
    });
};
const serializeAws_restJson1_1VirtualServiceSpec = (input, context) => {
    const bodyParams = {};
    if (input.provider !== undefined) {
        bodyParams["provider"] = serializeAws_restJson1_1VirtualServiceProvider(input.provider, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1WeightedTarget = (input, context) => {
    const bodyParams = {};
    if (input.virtualNode !== undefined) {
        bodyParams["virtualNode"] = input.virtualNode;
    }
    if (input.weight !== undefined) {
        bodyParams["weight"] = input.weight;
    }
    return bodyParams;
};
const serializeAws_restJson1_1WeightedTargets = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1WeightedTarget(entry, context));
    }
    return contents;
};
const deserializeAws_restJson1_1AccessLog = (output, context) => {
    if (output.file !== undefined && output.file !== null) {
        return {
            file: deserializeAws_restJson1_1FileAccessLog(output.file, context)
        };
    }
    const key = Object.keys(output)[0];
    return { $unknown: [key, output[key]] };
};
const deserializeAws_restJson1_1AwsCloudMapInstanceAttribute = (output, context) => {
    let contents = {
        __type: "AwsCloudMapInstanceAttribute",
        key: undefined,
        value: undefined
    };
    if (output.key !== undefined && output.key !== null) {
        contents.key = output.key;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_restJson1_1AwsCloudMapInstanceAttributes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1AwsCloudMapInstanceAttribute(entry, context));
};
const deserializeAws_restJson1_1AwsCloudMapServiceDiscovery = (output, context) => {
    let contents = {
        __type: "AwsCloudMapServiceDiscovery",
        attributes: undefined,
        namespaceName: undefined,
        serviceName: undefined
    };
    if (output.attributes !== undefined && output.attributes !== null) {
        contents.attributes = deserializeAws_restJson1_1AwsCloudMapInstanceAttributes(output.attributes, context);
    }
    if (output.namespaceName !== undefined && output.namespaceName !== null) {
        contents.namespaceName = output.namespaceName;
    }
    if (output.serviceName !== undefined && output.serviceName !== null) {
        contents.serviceName = output.serviceName;
    }
    return contents;
};
const deserializeAws_restJson1_1Backend = (output, context) => {
    if (output.virtualService !== undefined && output.virtualService !== null) {
        return {
            virtualService: deserializeAws_restJson1_1VirtualServiceBackend(output.virtualService, context)
        };
    }
    const key = Object.keys(output)[0];
    return { $unknown: [key, output[key]] };
};
const deserializeAws_restJson1_1Backends = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1Backend(entry, context));
};
const deserializeAws_restJson1_1DnsServiceDiscovery = (output, context) => {
    let contents = {
        __type: "DnsServiceDiscovery",
        hostname: undefined
    };
    if (output.hostname !== undefined && output.hostname !== null) {
        contents.hostname = output.hostname;
    }
    return contents;
};
const deserializeAws_restJson1_1Duration = (output, context) => {
    let contents = {
        __type: "Duration",
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
const deserializeAws_restJson1_1EgressFilter = (output, context) => {
    let contents = {
        __type: "EgressFilter",
        type: undefined
    };
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_restJson1_1FileAccessLog = (output, context) => {
    let contents = {
        __type: "FileAccessLog",
        path: undefined
    };
    if (output.path !== undefined && output.path !== null) {
        contents.path = output.path;
    }
    return contents;
};
const deserializeAws_restJson1_1GrpcRetryPolicy = (output, context) => {
    let contents = {
        __type: "GrpcRetryPolicy",
        grpcRetryEvents: undefined,
        httpRetryEvents: undefined,
        maxRetries: undefined,
        perRetryTimeout: undefined,
        tcpRetryEvents: undefined
    };
    if (output.grpcRetryEvents !== undefined && output.grpcRetryEvents !== null) {
        contents.grpcRetryEvents = deserializeAws_restJson1_1GrpcRetryPolicyEvents(output.grpcRetryEvents, context);
    }
    if (output.httpRetryEvents !== undefined && output.httpRetryEvents !== null) {
        contents.httpRetryEvents = deserializeAws_restJson1_1HttpRetryPolicyEvents(output.httpRetryEvents, context);
    }
    if (output.maxRetries !== undefined && output.maxRetries !== null) {
        contents.maxRetries = output.maxRetries;
    }
    if (output.perRetryTimeout !== undefined && output.perRetryTimeout !== null) {
        contents.perRetryTimeout = deserializeAws_restJson1_1Duration(output.perRetryTimeout, context);
    }
    if (output.tcpRetryEvents !== undefined && output.tcpRetryEvents !== null) {
        contents.tcpRetryEvents = deserializeAws_restJson1_1TcpRetryPolicyEvents(output.tcpRetryEvents, context);
    }
    return contents;
};
const deserializeAws_restJson1_1GrpcRetryPolicyEvents = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_restJson1_1GrpcRoute = (output, context) => {
    let contents = {
        __type: "GrpcRoute",
        action: undefined,
        match: undefined,
        retryPolicy: undefined
    };
    if (output.action !== undefined && output.action !== null) {
        contents.action = deserializeAws_restJson1_1GrpcRouteAction(output.action, context);
    }
    if (output.match !== undefined && output.match !== null) {
        contents.match = deserializeAws_restJson1_1GrpcRouteMatch(output.match, context);
    }
    if (output.retryPolicy !== undefined && output.retryPolicy !== null) {
        contents.retryPolicy = deserializeAws_restJson1_1GrpcRetryPolicy(output.retryPolicy, context);
    }
    return contents;
};
const deserializeAws_restJson1_1GrpcRouteAction = (output, context) => {
    let contents = {
        __type: "GrpcRouteAction",
        weightedTargets: undefined
    };
    if (output.weightedTargets !== undefined && output.weightedTargets !== null) {
        contents.weightedTargets = deserializeAws_restJson1_1WeightedTargets(output.weightedTargets, context);
    }
    return contents;
};
const deserializeAws_restJson1_1GrpcRouteMatch = (output, context) => {
    let contents = {
        __type: "GrpcRouteMatch",
        metadata: undefined,
        methodName: undefined,
        serviceName: undefined
    };
    if (output.metadata !== undefined && output.metadata !== null) {
        contents.metadata = deserializeAws_restJson1_1GrpcRouteMetadataList(output.metadata, context);
    }
    if (output.methodName !== undefined && output.methodName !== null) {
        contents.methodName = output.methodName;
    }
    if (output.serviceName !== undefined && output.serviceName !== null) {
        contents.serviceName = output.serviceName;
    }
    return contents;
};
const deserializeAws_restJson1_1GrpcRouteMetadata = (output, context) => {
    let contents = {
        __type: "GrpcRouteMetadata",
        invert: undefined,
        match: undefined,
        name: undefined
    };
    if (output.invert !== undefined && output.invert !== null) {
        contents.invert = output.invert;
    }
    if (output.match !== undefined && output.match !== null) {
        contents.match = deserializeAws_restJson1_1GrpcRouteMetadataMatchMethod(output.match, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_restJson1_1GrpcRouteMetadataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1GrpcRouteMetadata(entry, context));
};
const deserializeAws_restJson1_1GrpcRouteMetadataMatchMethod = (output, context) => {
    if (output.exact !== undefined && output.exact !== null) {
        return {
            exact: output.exact
        };
    }
    if (output.prefix !== undefined && output.prefix !== null) {
        return {
            prefix: output.prefix
        };
    }
    if (output.range !== undefined && output.range !== null) {
        return {
            range: deserializeAws_restJson1_1MatchRange(output.range, context)
        };
    }
    if (output.regex !== undefined && output.regex !== null) {
        return {
            regex: output.regex
        };
    }
    if (output.suffix !== undefined && output.suffix !== null) {
        return {
            suffix: output.suffix
        };
    }
    const key = Object.keys(output)[0];
    return { $unknown: [key, output[key]] };
};
const deserializeAws_restJson1_1HeaderMatchMethod = (output, context) => {
    if (output.exact !== undefined && output.exact !== null) {
        return {
            exact: output.exact
        };
    }
    if (output.prefix !== undefined && output.prefix !== null) {
        return {
            prefix: output.prefix
        };
    }
    if (output.range !== undefined && output.range !== null) {
        return {
            range: deserializeAws_restJson1_1MatchRange(output.range, context)
        };
    }
    if (output.regex !== undefined && output.regex !== null) {
        return {
            regex: output.regex
        };
    }
    if (output.suffix !== undefined && output.suffix !== null) {
        return {
            suffix: output.suffix
        };
    }
    const key = Object.keys(output)[0];
    return { $unknown: [key, output[key]] };
};
const deserializeAws_restJson1_1HealthCheckPolicy = (output, context) => {
    let contents = {
        __type: "HealthCheckPolicy",
        healthyThreshold: undefined,
        intervalMillis: undefined,
        path: undefined,
        port: undefined,
        protocol: undefined,
        timeoutMillis: undefined,
        unhealthyThreshold: undefined
    };
    if (output.healthyThreshold !== undefined &&
        output.healthyThreshold !== null) {
        contents.healthyThreshold = output.healthyThreshold;
    }
    if (output.intervalMillis !== undefined && output.intervalMillis !== null) {
        contents.intervalMillis = output.intervalMillis;
    }
    if (output.path !== undefined && output.path !== null) {
        contents.path = output.path;
    }
    if (output.port !== undefined && output.port !== null) {
        contents.port = output.port;
    }
    if (output.protocol !== undefined && output.protocol !== null) {
        contents.protocol = output.protocol;
    }
    if (output.timeoutMillis !== undefined && output.timeoutMillis !== null) {
        contents.timeoutMillis = output.timeoutMillis;
    }
    if (output.unhealthyThreshold !== undefined &&
        output.unhealthyThreshold !== null) {
        contents.unhealthyThreshold = output.unhealthyThreshold;
    }
    return contents;
};
const deserializeAws_restJson1_1HttpRetryPolicy = (output, context) => {
    let contents = {
        __type: "HttpRetryPolicy",
        httpRetryEvents: undefined,
        maxRetries: undefined,
        perRetryTimeout: undefined,
        tcpRetryEvents: undefined
    };
    if (output.httpRetryEvents !== undefined && output.httpRetryEvents !== null) {
        contents.httpRetryEvents = deserializeAws_restJson1_1HttpRetryPolicyEvents(output.httpRetryEvents, context);
    }
    if (output.maxRetries !== undefined && output.maxRetries !== null) {
        contents.maxRetries = output.maxRetries;
    }
    if (output.perRetryTimeout !== undefined && output.perRetryTimeout !== null) {
        contents.perRetryTimeout = deserializeAws_restJson1_1Duration(output.perRetryTimeout, context);
    }
    if (output.tcpRetryEvents !== undefined && output.tcpRetryEvents !== null) {
        contents.tcpRetryEvents = deserializeAws_restJson1_1TcpRetryPolicyEvents(output.tcpRetryEvents, context);
    }
    return contents;
};
const deserializeAws_restJson1_1HttpRetryPolicyEvents = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_restJson1_1HttpRoute = (output, context) => {
    let contents = {
        __type: "HttpRoute",
        action: undefined,
        match: undefined,
        retryPolicy: undefined
    };
    if (output.action !== undefined && output.action !== null) {
        contents.action = deserializeAws_restJson1_1HttpRouteAction(output.action, context);
    }
    if (output.match !== undefined && output.match !== null) {
        contents.match = deserializeAws_restJson1_1HttpRouteMatch(output.match, context);
    }
    if (output.retryPolicy !== undefined && output.retryPolicy !== null) {
        contents.retryPolicy = deserializeAws_restJson1_1HttpRetryPolicy(output.retryPolicy, context);
    }
    return contents;
};
const deserializeAws_restJson1_1HttpRouteAction = (output, context) => {
    let contents = {
        __type: "HttpRouteAction",
        weightedTargets: undefined
    };
    if (output.weightedTargets !== undefined && output.weightedTargets !== null) {
        contents.weightedTargets = deserializeAws_restJson1_1WeightedTargets(output.weightedTargets, context);
    }
    return contents;
};
const deserializeAws_restJson1_1HttpRouteHeader = (output, context) => {
    let contents = {
        __type: "HttpRouteHeader",
        invert: undefined,
        match: undefined,
        name: undefined
    };
    if (output.invert !== undefined && output.invert !== null) {
        contents.invert = output.invert;
    }
    if (output.match !== undefined && output.match !== null) {
        contents.match = deserializeAws_restJson1_1HeaderMatchMethod(output.match, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_restJson1_1HttpRouteHeaders = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1HttpRouteHeader(entry, context));
};
const deserializeAws_restJson1_1HttpRouteMatch = (output, context) => {
    let contents = {
        __type: "HttpRouteMatch",
        headers: undefined,
        method: undefined,
        prefix: undefined,
        scheme: undefined
    };
    if (output.headers !== undefined && output.headers !== null) {
        contents.headers = deserializeAws_restJson1_1HttpRouteHeaders(output.headers, context);
    }
    if (output.method !== undefined && output.method !== null) {
        contents.method = output.method;
    }
    if (output.prefix !== undefined && output.prefix !== null) {
        contents.prefix = output.prefix;
    }
    if (output.scheme !== undefined && output.scheme !== null) {
        contents.scheme = output.scheme;
    }
    return contents;
};
const deserializeAws_restJson1_1Listener = (output, context) => {
    let contents = {
        __type: "Listener",
        healthCheck: undefined,
        portMapping: undefined
    };
    if (output.healthCheck !== undefined && output.healthCheck !== null) {
        contents.healthCheck = deserializeAws_restJson1_1HealthCheckPolicy(output.healthCheck, context);
    }
    if (output.portMapping !== undefined && output.portMapping !== null) {
        contents.portMapping = deserializeAws_restJson1_1PortMapping(output.portMapping, context);
    }
    return contents;
};
const deserializeAws_restJson1_1Listeners = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1Listener(entry, context));
};
const deserializeAws_restJson1_1Logging = (output, context) => {
    let contents = {
        __type: "Logging",
        accessLog: undefined
    };
    if (output.accessLog !== undefined && output.accessLog !== null) {
        contents.accessLog = deserializeAws_restJson1_1AccessLog(output.accessLog, context);
    }
    return contents;
};
const deserializeAws_restJson1_1MatchRange = (output, context) => {
    let contents = {
        __type: "MatchRange",
        end: undefined,
        start: undefined
    };
    if (output.end !== undefined && output.end !== null) {
        contents.end = output.end;
    }
    if (output.start !== undefined && output.start !== null) {
        contents.start = output.start;
    }
    return contents;
};
const deserializeAws_restJson1_1MeshData = (output, context) => {
    let contents = {
        __type: "MeshData",
        meshName: undefined,
        metadata: undefined,
        spec: undefined,
        status: undefined
    };
    if (output.meshName !== undefined && output.meshName !== null) {
        contents.meshName = output.meshName;
    }
    if (output.metadata !== undefined && output.metadata !== null) {
        contents.metadata = deserializeAws_restJson1_1ResourceMetadata(output.metadata, context);
    }
    if (output.spec !== undefined && output.spec !== null) {
        contents.spec = deserializeAws_restJson1_1MeshSpec(output.spec, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = deserializeAws_restJson1_1MeshStatus(output.status, context);
    }
    return contents;
};
const deserializeAws_restJson1_1MeshList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1MeshRef(entry, context));
};
const deserializeAws_restJson1_1MeshRef = (output, context) => {
    let contents = {
        __type: "MeshRef",
        arn: undefined,
        meshName: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.meshName !== undefined && output.meshName !== null) {
        contents.meshName = output.meshName;
    }
    return contents;
};
const deserializeAws_restJson1_1MeshSpec = (output, context) => {
    let contents = {
        __type: "MeshSpec",
        egressFilter: undefined
    };
    if (output.egressFilter !== undefined && output.egressFilter !== null) {
        contents.egressFilter = deserializeAws_restJson1_1EgressFilter(output.egressFilter, context);
    }
    return contents;
};
const deserializeAws_restJson1_1MeshStatus = (output, context) => {
    let contents = {
        __type: "MeshStatus",
        status: undefined
    };
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_restJson1_1PortMapping = (output, context) => {
    let contents = {
        __type: "PortMapping",
        port: undefined,
        protocol: undefined
    };
    if (output.port !== undefined && output.port !== null) {
        contents.port = output.port;
    }
    if (output.protocol !== undefined && output.protocol !== null) {
        contents.protocol = output.protocol;
    }
    return contents;
};
const deserializeAws_restJson1_1ResourceMetadata = (output, context) => {
    let contents = {
        __type: "ResourceMetadata",
        arn: undefined,
        createdAt: undefined,
        lastUpdatedAt: undefined,
        uid: undefined,
        version: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
    }
    if (output.uid !== undefined && output.uid !== null) {
        contents.uid = output.uid;
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    return contents;
};
const deserializeAws_restJson1_1RouteData = (output, context) => {
    let contents = {
        __type: "RouteData",
        meshName: undefined,
        metadata: undefined,
        routeName: undefined,
        spec: undefined,
        status: undefined,
        virtualRouterName: undefined
    };
    if (output.meshName !== undefined && output.meshName !== null) {
        contents.meshName = output.meshName;
    }
    if (output.metadata !== undefined && output.metadata !== null) {
        contents.metadata = deserializeAws_restJson1_1ResourceMetadata(output.metadata, context);
    }
    if (output.routeName !== undefined && output.routeName !== null) {
        contents.routeName = output.routeName;
    }
    if (output.spec !== undefined && output.spec !== null) {
        contents.spec = deserializeAws_restJson1_1RouteSpec(output.spec, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = deserializeAws_restJson1_1RouteStatus(output.status, context);
    }
    if (output.virtualRouterName !== undefined &&
        output.virtualRouterName !== null) {
        contents.virtualRouterName = output.virtualRouterName;
    }
    return contents;
};
const deserializeAws_restJson1_1RouteList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1RouteRef(entry, context));
};
const deserializeAws_restJson1_1RouteRef = (output, context) => {
    let contents = {
        __type: "RouteRef",
        arn: undefined,
        meshName: undefined,
        routeName: undefined,
        virtualRouterName: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.meshName !== undefined && output.meshName !== null) {
        contents.meshName = output.meshName;
    }
    if (output.routeName !== undefined && output.routeName !== null) {
        contents.routeName = output.routeName;
    }
    if (output.virtualRouterName !== undefined &&
        output.virtualRouterName !== null) {
        contents.virtualRouterName = output.virtualRouterName;
    }
    return contents;
};
const deserializeAws_restJson1_1RouteSpec = (output, context) => {
    let contents = {
        __type: "RouteSpec",
        grpcRoute: undefined,
        http2Route: undefined,
        httpRoute: undefined,
        priority: undefined,
        tcpRoute: undefined
    };
    if (output.grpcRoute !== undefined && output.grpcRoute !== null) {
        contents.grpcRoute = deserializeAws_restJson1_1GrpcRoute(output.grpcRoute, context);
    }
    if (output.http2Route !== undefined && output.http2Route !== null) {
        contents.http2Route = deserializeAws_restJson1_1HttpRoute(output.http2Route, context);
    }
    if (output.httpRoute !== undefined && output.httpRoute !== null) {
        contents.httpRoute = deserializeAws_restJson1_1HttpRoute(output.httpRoute, context);
    }
    if (output.priority !== undefined && output.priority !== null) {
        contents.priority = output.priority;
    }
    if (output.tcpRoute !== undefined && output.tcpRoute !== null) {
        contents.tcpRoute = deserializeAws_restJson1_1TcpRoute(output.tcpRoute, context);
    }
    return contents;
};
const deserializeAws_restJson1_1RouteStatus = (output, context) => {
    let contents = {
        __type: "RouteStatus",
        status: undefined
    };
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_restJson1_1ServiceDiscovery = (output, context) => {
    if (output.awsCloudMap !== undefined && output.awsCloudMap !== null) {
        return {
            awsCloudMap: deserializeAws_restJson1_1AwsCloudMapServiceDiscovery(output.awsCloudMap, context)
        };
    }
    if (output.dns !== undefined && output.dns !== null) {
        return {
            dns: deserializeAws_restJson1_1DnsServiceDiscovery(output.dns, context)
        };
    }
    const key = Object.keys(output)[0];
    return { $unknown: [key, output[key]] };
};
const deserializeAws_restJson1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1TagRef(entry, context));
};
const deserializeAws_restJson1_1TagRef = (output, context) => {
    let contents = {
        __type: "TagRef",
        key: undefined,
        value: undefined
    };
    if (output.key !== undefined && output.key !== null) {
        contents.key = output.key;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_restJson1_1TcpRetryPolicyEvents = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_restJson1_1TcpRoute = (output, context) => {
    let contents = {
        __type: "TcpRoute",
        action: undefined
    };
    if (output.action !== undefined && output.action !== null) {
        contents.action = deserializeAws_restJson1_1TcpRouteAction(output.action, context);
    }
    return contents;
};
const deserializeAws_restJson1_1TcpRouteAction = (output, context) => {
    let contents = {
        __type: "TcpRouteAction",
        weightedTargets: undefined
    };
    if (output.weightedTargets !== undefined && output.weightedTargets !== null) {
        contents.weightedTargets = deserializeAws_restJson1_1WeightedTargets(output.weightedTargets, context);
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualNodeData = (output, context) => {
    let contents = {
        __type: "VirtualNodeData",
        meshName: undefined,
        metadata: undefined,
        spec: undefined,
        status: undefined,
        virtualNodeName: undefined
    };
    if (output.meshName !== undefined && output.meshName !== null) {
        contents.meshName = output.meshName;
    }
    if (output.metadata !== undefined && output.metadata !== null) {
        contents.metadata = deserializeAws_restJson1_1ResourceMetadata(output.metadata, context);
    }
    if (output.spec !== undefined && output.spec !== null) {
        contents.spec = deserializeAws_restJson1_1VirtualNodeSpec(output.spec, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = deserializeAws_restJson1_1VirtualNodeStatus(output.status, context);
    }
    if (output.virtualNodeName !== undefined && output.virtualNodeName !== null) {
        contents.virtualNodeName = output.virtualNodeName;
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualNodeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1VirtualNodeRef(entry, context));
};
const deserializeAws_restJson1_1VirtualNodeRef = (output, context) => {
    let contents = {
        __type: "VirtualNodeRef",
        arn: undefined,
        meshName: undefined,
        virtualNodeName: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.meshName !== undefined && output.meshName !== null) {
        contents.meshName = output.meshName;
    }
    if (output.virtualNodeName !== undefined && output.virtualNodeName !== null) {
        contents.virtualNodeName = output.virtualNodeName;
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualNodeServiceProvider = (output, context) => {
    let contents = {
        __type: "VirtualNodeServiceProvider",
        virtualNodeName: undefined
    };
    if (output.virtualNodeName !== undefined && output.virtualNodeName !== null) {
        contents.virtualNodeName = output.virtualNodeName;
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualNodeSpec = (output, context) => {
    let contents = {
        __type: "VirtualNodeSpec",
        backends: undefined,
        listeners: undefined,
        logging: undefined,
        serviceDiscovery: undefined
    };
    if (output.backends !== undefined && output.backends !== null) {
        contents.backends = deserializeAws_restJson1_1Backends(output.backends, context);
    }
    if (output.listeners !== undefined && output.listeners !== null) {
        contents.listeners = deserializeAws_restJson1_1Listeners(output.listeners, context);
    }
    if (output.logging !== undefined && output.logging !== null) {
        contents.logging = deserializeAws_restJson1_1Logging(output.logging, context);
    }
    if (output.serviceDiscovery !== undefined &&
        output.serviceDiscovery !== null) {
        contents.serviceDiscovery = deserializeAws_restJson1_1ServiceDiscovery(output.serviceDiscovery, context);
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualNodeStatus = (output, context) => {
    let contents = {
        __type: "VirtualNodeStatus",
        status: undefined
    };
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualRouterData = (output, context) => {
    let contents = {
        __type: "VirtualRouterData",
        meshName: undefined,
        metadata: undefined,
        spec: undefined,
        status: undefined,
        virtualRouterName: undefined
    };
    if (output.meshName !== undefined && output.meshName !== null) {
        contents.meshName = output.meshName;
    }
    if (output.metadata !== undefined && output.metadata !== null) {
        contents.metadata = deserializeAws_restJson1_1ResourceMetadata(output.metadata, context);
    }
    if (output.spec !== undefined && output.spec !== null) {
        contents.spec = deserializeAws_restJson1_1VirtualRouterSpec(output.spec, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = deserializeAws_restJson1_1VirtualRouterStatus(output.status, context);
    }
    if (output.virtualRouterName !== undefined &&
        output.virtualRouterName !== null) {
        contents.virtualRouterName = output.virtualRouterName;
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualRouterList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1VirtualRouterRef(entry, context));
};
const deserializeAws_restJson1_1VirtualRouterListener = (output, context) => {
    let contents = {
        __type: "VirtualRouterListener",
        portMapping: undefined
    };
    if (output.portMapping !== undefined && output.portMapping !== null) {
        contents.portMapping = deserializeAws_restJson1_1PortMapping(output.portMapping, context);
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualRouterListeners = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1VirtualRouterListener(entry, context));
};
const deserializeAws_restJson1_1VirtualRouterRef = (output, context) => {
    let contents = {
        __type: "VirtualRouterRef",
        arn: undefined,
        meshName: undefined,
        virtualRouterName: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.meshName !== undefined && output.meshName !== null) {
        contents.meshName = output.meshName;
    }
    if (output.virtualRouterName !== undefined &&
        output.virtualRouterName !== null) {
        contents.virtualRouterName = output.virtualRouterName;
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualRouterServiceProvider = (output, context) => {
    let contents = {
        __type: "VirtualRouterServiceProvider",
        virtualRouterName: undefined
    };
    if (output.virtualRouterName !== undefined &&
        output.virtualRouterName !== null) {
        contents.virtualRouterName = output.virtualRouterName;
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualRouterSpec = (output, context) => {
    let contents = {
        __type: "VirtualRouterSpec",
        listeners: undefined
    };
    if (output.listeners !== undefined && output.listeners !== null) {
        contents.listeners = deserializeAws_restJson1_1VirtualRouterListeners(output.listeners, context);
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualRouterStatus = (output, context) => {
    let contents = {
        __type: "VirtualRouterStatus",
        status: undefined
    };
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualServiceBackend = (output, context) => {
    let contents = {
        __type: "VirtualServiceBackend",
        virtualServiceName: undefined
    };
    if (output.virtualServiceName !== undefined &&
        output.virtualServiceName !== null) {
        contents.virtualServiceName = output.virtualServiceName;
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualServiceData = (output, context) => {
    let contents = {
        __type: "VirtualServiceData",
        meshName: undefined,
        metadata: undefined,
        spec: undefined,
        status: undefined,
        virtualServiceName: undefined
    };
    if (output.meshName !== undefined && output.meshName !== null) {
        contents.meshName = output.meshName;
    }
    if (output.metadata !== undefined && output.metadata !== null) {
        contents.metadata = deserializeAws_restJson1_1ResourceMetadata(output.metadata, context);
    }
    if (output.spec !== undefined && output.spec !== null) {
        contents.spec = deserializeAws_restJson1_1VirtualServiceSpec(output.spec, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = deserializeAws_restJson1_1VirtualServiceStatus(output.status, context);
    }
    if (output.virtualServiceName !== undefined &&
        output.virtualServiceName !== null) {
        contents.virtualServiceName = output.virtualServiceName;
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualServiceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1VirtualServiceRef(entry, context));
};
const deserializeAws_restJson1_1VirtualServiceProvider = (output, context) => {
    if (output.virtualNode !== undefined && output.virtualNode !== null) {
        return {
            virtualNode: deserializeAws_restJson1_1VirtualNodeServiceProvider(output.virtualNode, context)
        };
    }
    if (output.virtualRouter !== undefined && output.virtualRouter !== null) {
        return {
            virtualRouter: deserializeAws_restJson1_1VirtualRouterServiceProvider(output.virtualRouter, context)
        };
    }
    const key = Object.keys(output)[0];
    return { $unknown: [key, output[key]] };
};
const deserializeAws_restJson1_1VirtualServiceRef = (output, context) => {
    let contents = {
        __type: "VirtualServiceRef",
        arn: undefined,
        meshName: undefined,
        virtualServiceName: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.meshName !== undefined && output.meshName !== null) {
        contents.meshName = output.meshName;
    }
    if (output.virtualServiceName !== undefined &&
        output.virtualServiceName !== null) {
        contents.virtualServiceName = output.virtualServiceName;
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualServiceSpec = (output, context) => {
    let contents = {
        __type: "VirtualServiceSpec",
        provider: undefined
    };
    if (output.provider !== undefined && output.provider !== null) {
        contents.provider = deserializeAws_restJson1_1VirtualServiceProvider(output.provider, context);
    }
    return contents;
};
const deserializeAws_restJson1_1VirtualServiceStatus = (output, context) => {
    let contents = {
        __type: "VirtualServiceStatus",
        status: undefined
    };
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_restJson1_1WeightedTarget = (output, context) => {
    let contents = {
        __type: "WeightedTarget",
        virtualNode: undefined,
        weight: undefined
    };
    if (output.virtualNode !== undefined && output.virtualNode !== null) {
        contents.virtualNode = output.virtualNode;
    }
    if (output.weight !== undefined && output.weight !== null) {
        contents.weight = output.weight;
    }
    return contents;
};
const deserializeAws_restJson1_1WeightedTargets = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1WeightedTarget(entry, context));
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