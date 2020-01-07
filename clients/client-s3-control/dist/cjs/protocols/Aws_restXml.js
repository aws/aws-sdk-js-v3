"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const xml_builder_1 = require("@aws-sdk/xml-builder");
const fast_xml_parser_1 = require("fast-xml-parser");
const uuid_1 = require("uuid");
async function serializeAws_restXmlCreateAccessPointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/accesspoint/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateAccessPointRequest");
    bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    if (input.Bucket !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("BucketName")
            .addChildNode(new xml_builder_1.XmlText(input.Bucket))
            .withName("Bucket"));
    }
    if (input.PublicAccessBlockConfiguration !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context).withName("PublicAccessBlockConfiguration"));
    }
    if (input.VpcConfiguration !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlVpcConfiguration(input.VpcConfiguration, context).withName("VpcConfiguration"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateAccessPointCommand = serializeAws_restXmlCreateAccessPointCommand;
async function serializeAws_restXmlCreateJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/jobs";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateJobRequest");
    bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength64String")
            .addChildNode(new xml_builder_1.XmlText(input.ClientRequestToken))
            .withName("ClientRequestToken"));
    }
    if (input.ConfirmationRequired !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ConfirmationRequired")
            .addChildNode(new xml_builder_1.XmlText(String(input.ConfirmationRequired)))
            .withName("ConfirmationRequired"));
    }
    if (input.Description !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength256String")
            .addChildNode(new xml_builder_1.XmlText(input.Description))
            .withName("Description"));
    }
    if (input.Manifest !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlJobManifest(input.Manifest, context).withName("Manifest"));
    }
    if (input.Operation !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlJobOperation(input.Operation, context).withName("Operation"));
    }
    if (input.Priority !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("JobPriority")
            .addChildNode(new xml_builder_1.XmlText(String(input.Priority)))
            .withName("Priority"));
    }
    if (input.Report !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlJobReport(input.Report, context).withName("Report"));
    }
    if (input.RoleArn !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("IAMRoleArn")
            .addChildNode(new xml_builder_1.XmlText(input.RoleArn))
            .withName("RoleArn"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateJobCommand = serializeAws_restXmlCreateJobCommand;
async function serializeAws_restXmlDeleteAccessPointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/accesspoint/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlDeleteAccessPointCommand = serializeAws_restXmlDeleteAccessPointCommand;
async function serializeAws_restXmlDeleteAccessPointPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/accesspoint/{Name}/policy";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlDeleteAccessPointPolicyCommand = serializeAws_restXmlDeleteAccessPointPolicyCommand;
async function serializeAws_restXmlDeletePublicAccessBlockCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/configuration/publicAccessBlock";
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlDeletePublicAccessBlockCommand = serializeAws_restXmlDeletePublicAccessBlockCommand;
async function serializeAws_restXmlDescribeJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/jobs/{JobId}";
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlDescribeJobCommand = serializeAws_restXmlDescribeJobCommand;
async function serializeAws_restXmlGetAccessPointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/accesspoint/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetAccessPointCommand = serializeAws_restXmlGetAccessPointCommand;
async function serializeAws_restXmlGetAccessPointPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/accesspoint/{Name}/policy";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetAccessPointPolicyCommand = serializeAws_restXmlGetAccessPointPolicyCommand;
async function serializeAws_restXmlGetAccessPointPolicyStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/accesspoint/{Name}/policyStatus";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetAccessPointPolicyStatusCommand = serializeAws_restXmlGetAccessPointPolicyStatusCommand;
async function serializeAws_restXmlGetPublicAccessBlockCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/configuration/publicAccessBlock";
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetPublicAccessBlockCommand = serializeAws_restXmlGetPublicAccessBlockCommand;
async function serializeAws_restXmlListAccessPointsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/accesspoint";
    const query = {};
    if (input.Bucket !== undefined) {
        query["bucket"] = input.Bucket;
    }
    if (input.MaxResults !== undefined) {
        query["maxResults"] = input.MaxResults.toString();
    }
    if (input.NextToken !== undefined) {
        query["nextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListAccessPointsCommand = serializeAws_restXmlListAccessPointsCommand;
async function serializeAws_restXmlListJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/jobs";
    const query = {};
    if (input.JobStatuses !== undefined) {
        query["jobStatuses"] = (input.JobStatuses || []).map(_entry => _entry);
    }
    if (input.MaxResults !== undefined) {
        query["maxResults"] = input.MaxResults.toString();
    }
    if (input.NextToken !== undefined) {
        query["nextToken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListJobsCommand = serializeAws_restXmlListJobsCommand;
async function serializeAws_restXmlPutAccessPointPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/accesspoint/{Name}/policy";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("PutAccessPointPolicyRequest");
    bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    if (input.Policy !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Policy")
            .addChildNode(new xml_builder_1.XmlText(input.Policy))
            .withName("Policy"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlPutAccessPointPolicyCommand = serializeAws_restXmlPutAccessPointPolicyCommand;
async function serializeAws_restXmlPutPublicAccessBlockCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/configuration/publicAccessBlock";
    let body;
    let contents;
    if (input.PublicAccessBlockConfiguration !== undefined) {
        contents = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlPutPublicAccessBlockCommand = serializeAws_restXmlPutPublicAccessBlockCommand;
async function serializeAws_restXmlUpdateJobPriorityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/jobs/{JobId}/priority";
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
    }
    const query = {};
    if (input.Priority !== undefined) {
        query["priority"] = input.Priority.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlUpdateJobPriorityCommand = serializeAws_restXmlUpdateJobPriorityCommand;
async function serializeAws_restXmlUpdateJobStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.AccountId !== undefined) {
        headers["x-amz-account-id"] = input.AccountId;
    }
    let resolvedPath = "/v20180820/jobs/{JobId}/status";
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
    }
    const query = {};
    if (input.RequestedJobStatus !== undefined) {
        query["requestedJobStatus"] = input.RequestedJobStatus;
    }
    if (input.StatusUpdateReason !== undefined) {
        query["statusUpdateReason"] = input.StatusUpdateReason;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlUpdateJobStatusCommand = serializeAws_restXmlUpdateJobStatusCommand;
async function deserializeAws_restXmlCreateAccessPointCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateAccessPointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateAccessPointCommand = deserializeAws_restXmlCreateAccessPointCommand;
async function deserializeAws_restXmlCreateAccessPointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlCreateJobCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateJobResult",
        JobId: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["JobId"] !== undefined) {
        contents.JobId = data["JobId"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateJobCommand = deserializeAws_restXmlCreateJobCommand;
async function deserializeAws_restXmlCreateJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.awss3control.v20180820#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotencyException":
        case "com.amazonaws.awss3control.v20180820#IdempotencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlIdempotencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.awss3control.v20180820#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.awss3control.v20180820#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlDeleteAccessPointCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteAccessPointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteAccessPointCommand = deserializeAws_restXmlDeleteAccessPointCommand;
async function deserializeAws_restXmlDeleteAccessPointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlDeleteAccessPointPolicyCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteAccessPointPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteAccessPointPolicyCommand = deserializeAws_restXmlDeleteAccessPointPolicyCommand;
async function deserializeAws_restXmlDeleteAccessPointPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlDeletePublicAccessBlockCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeletePublicAccessBlockCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeletePublicAccessBlockCommand = deserializeAws_restXmlDeletePublicAccessBlockCommand;
async function deserializeAws_restXmlDeletePublicAccessBlockCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlDescribeJobCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlDescribeJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DescribeJobResult",
        Job: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["Job"] !== undefined) {
        contents.Job = deserializeAws_restXmlJobDescriptor(data["Job"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDescribeJobCommand = deserializeAws_restXmlDescribeJobCommand;
async function deserializeAws_restXmlDescribeJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.awss3control.v20180820#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.awss3control.v20180820#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awss3control.v20180820#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.awss3control.v20180820#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlGetAccessPointCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetAccessPointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetAccessPointResult",
        Bucket: undefined,
        CreationDate: undefined,
        Name: undefined,
        NetworkOrigin: undefined,
        PublicAccessBlockConfiguration: undefined,
        VpcConfiguration: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["Bucket"] !== undefined) {
        contents.Bucket = data["Bucket"];
    }
    if (data["CreationDate"] !== undefined) {
        contents.CreationDate = new Date(data["CreationDate"]);
    }
    if (data["Name"] !== undefined) {
        contents.Name = data["Name"];
    }
    if (data["NetworkOrigin"] !== undefined) {
        contents.NetworkOrigin = data["NetworkOrigin"];
    }
    if (data["PublicAccessBlockConfiguration"] !== undefined) {
        contents.PublicAccessBlockConfiguration = deserializeAws_restXmlPublicAccessBlockConfiguration(data["PublicAccessBlockConfiguration"], context);
    }
    if (data["VpcConfiguration"] !== undefined) {
        contents.VpcConfiguration = deserializeAws_restXmlVpcConfiguration(data["VpcConfiguration"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetAccessPointCommand = deserializeAws_restXmlGetAccessPointCommand;
async function deserializeAws_restXmlGetAccessPointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlGetAccessPointPolicyCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetAccessPointPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetAccessPointPolicyResult",
        Policy: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["Policy"] !== undefined) {
        contents.Policy = data["Policy"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetAccessPointPolicyCommand = deserializeAws_restXmlGetAccessPointPolicyCommand;
async function deserializeAws_restXmlGetAccessPointPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlGetAccessPointPolicyStatusCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetAccessPointPolicyStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetAccessPointPolicyStatusResult",
        PolicyStatus: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["PolicyStatus"] !== undefined) {
        contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(data["PolicyStatus"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetAccessPointPolicyStatusCommand = deserializeAws_restXmlGetAccessPointPolicyStatusCommand;
async function deserializeAws_restXmlGetAccessPointPolicyStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlGetPublicAccessBlockCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetPublicAccessBlockCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetPublicAccessBlockOutput",
        PublicAccessBlockConfiguration: undefined
    };
    const data = await parseBody(output.body, context);
    contents.PublicAccessBlockConfiguration = deserializeAws_restXmlPublicAccessBlockConfiguration(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetPublicAccessBlockCommand = deserializeAws_restXmlGetPublicAccessBlockCommand;
async function deserializeAws_restXmlGetPublicAccessBlockCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchPublicAccessBlockConfiguration":
        case "com.amazonaws.awss3control.v20180820#NoSuchPublicAccessBlockConfiguration":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchPublicAccessBlockConfigurationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlListAccessPointsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListAccessPointsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListAccessPointsResult",
        AccessPointList: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.AccessPointList === "") {
        contents.AccessPointList = [];
    }
    if (data["AccessPointList"] !== undefined &&
        data["AccessPointList"]["AccessPoint"] !== undefined) {
        const wrappedItem = data["AccessPointList"]["AccessPoint"] instanceof Array
            ? data["AccessPointList"]["AccessPoint"]
            : [data["AccessPointList"]["AccessPoint"]];
        contents.AccessPointList = deserializeAws_restXmlAccessPointList(wrappedItem, context);
    }
    if (data["NextToken"] !== undefined) {
        contents.NextToken = data["NextToken"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListAccessPointsCommand = deserializeAws_restXmlListAccessPointsCommand;
async function deserializeAws_restXmlListAccessPointsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlListJobsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListJobsResult",
        Jobs: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Jobs === "") {
        contents.Jobs = [];
    }
    if (data["Jobs"] !== undefined && data["Jobs"]["member"] !== undefined) {
        const wrappedItem = data["Jobs"]["member"] instanceof Array
            ? data["Jobs"]["member"]
            : [data["Jobs"]["member"]];
        contents.Jobs = deserializeAws_restXmlJobListDescriptorList(wrappedItem, context);
    }
    if (data["NextToken"] !== undefined) {
        contents.NextToken = data["NextToken"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListJobsCommand = deserializeAws_restXmlListJobsCommand;
async function deserializeAws_restXmlListJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.awss3control.v20180820#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awss3control.v20180820#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.awss3control.v20180820#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlPutAccessPointPolicyCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutAccessPointPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutAccessPointPolicyCommand = deserializeAws_restXmlPutAccessPointPolicyCommand;
async function deserializeAws_restXmlPutAccessPointPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlPutPublicAccessBlockCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutPublicAccessBlockCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutPublicAccessBlockCommand = deserializeAws_restXmlPutPublicAccessBlockCommand;
async function deserializeAws_restXmlPutPublicAccessBlockCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlUpdateJobPriorityCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlUpdateJobPriorityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateJobPriorityResult",
        JobId: undefined,
        Priority: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["JobId"] !== undefined) {
        contents.JobId = data["JobId"];
    }
    if (data["Priority"] !== undefined) {
        contents.Priority = parseInt(data["Priority"]);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUpdateJobPriorityCommand = deserializeAws_restXmlUpdateJobPriorityCommand;
async function deserializeAws_restXmlUpdateJobPriorityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.awss3control.v20180820#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.awss3control.v20180820#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awss3control.v20180820#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.awss3control.v20180820#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlUpdateJobStatusCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlUpdateJobStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateJobStatusResult",
        JobId: undefined,
        Status: undefined,
        StatusUpdateReason: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["JobId"] !== undefined) {
        contents.JobId = data["JobId"];
    }
    if (data["Status"] !== undefined) {
        contents.Status = data["Status"];
    }
    if (data["StatusUpdateReason"] !== undefined) {
        contents.StatusUpdateReason = data["StatusUpdateReason"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUpdateJobStatusCommand = deserializeAws_restXmlUpdateJobStatusCommand;
async function deserializeAws_restXmlUpdateJobStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.awss3control.v20180820#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.awss3control.v20180820#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobStatusException":
        case "com.amazonaws.awss3control.v20180820#JobStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlJobStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awss3control.v20180820#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.awss3control.v20180820#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_restXmlBadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
    }
    return contents;
};
const deserializeAws_restXmlIdempotencyExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IdempotencyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
    }
    return contents;
};
const deserializeAws_restXmlInternalServiceExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServiceException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidNextTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
    }
    return contents;
};
const deserializeAws_restXmlJobStatusExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "JobStatusException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchPublicAccessBlockConfigurationResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchPublicAccessBlockConfiguration",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
    }
    return contents;
};
const deserializeAws_restXmlNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
    }
    return contents;
};
const deserializeAws_restXmlTooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
    }
    return contents;
};
const serializeAws_restXmlJobManifest = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("JobManifest");
    if (input.Location !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlJobManifestLocation(input.Location, context).withName("Location"));
    }
    if (input.Spec !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlJobManifestSpec(input.Spec, context).withName("Spec"));
    }
    return bodyNode;
};
const serializeAws_restXmlJobManifestFieldList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("JobManifestFieldName").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlJobManifestLocation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("JobManifestLocation");
    if (input.ETag !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.ETag))
            .withName("ETag"));
    }
    if (input.ObjectArn !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3KeyArnString")
            .addChildNode(new xml_builder_1.XmlText(input.ObjectArn))
            .withName("ObjectArn"));
    }
    if (input.ObjectVersionId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3ObjectVersionId")
            .addChildNode(new xml_builder_1.XmlText(input.ObjectVersionId))
            .withName("ObjectVersionId"));
    }
    return bodyNode;
};
const serializeAws_restXmlJobManifestSpec = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("JobManifestSpec");
    if (input.Fields !== undefined) {
        const nodes = serializeAws_restXmlJobManifestFieldList(input.Fields, context);
        const containerNode = new xml_builder_1.XmlNode("Fields");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Format !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("JobManifestFormat")
            .addChildNode(new xml_builder_1.XmlText(input.Format))
            .withName("Format"));
    }
    return bodyNode;
};
const serializeAws_restXmlJobOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("JobOperation");
    if (input.LambdaInvoke !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlLambdaInvokeOperation(input.LambdaInvoke, context).withName("LambdaInvoke"));
    }
    if (input.S3InitiateRestoreObject !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlS3InitiateRestoreObjectOperation(input.S3InitiateRestoreObject, context).withName("S3InitiateRestoreObject"));
    }
    if (input.S3PutObjectAcl !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlS3SetObjectAclOperation(input.S3PutObjectAcl, context).withName("S3PutObjectAcl"));
    }
    if (input.S3PutObjectCopy !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlS3CopyObjectOperation(input.S3PutObjectCopy, context).withName("S3PutObjectCopy"));
    }
    if (input.S3PutObjectTagging !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlS3SetObjectTaggingOperation(input.S3PutObjectTagging, context).withName("S3PutObjectTagging"));
    }
    return bodyNode;
};
const serializeAws_restXmlJobReport = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("JobReport");
    if (input.Bucket !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3BucketArnString")
            .addChildNode(new xml_builder_1.XmlText(input.Bucket))
            .withName("Bucket"));
    }
    if (input.Enabled !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.Enabled)))
            .withName("Enabled"));
    }
    if (input.Format !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("JobReportFormat")
            .addChildNode(new xml_builder_1.XmlText(input.Format))
            .withName("Format"));
    }
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ReportPrefixString")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    if (input.ReportScope !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("JobReportScope")
            .addChildNode(new xml_builder_1.XmlText(input.ReportScope))
            .withName("ReportScope"));
    }
    return bodyNode;
};
const serializeAws_restXmlLambdaInvokeOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LambdaInvokeOperation");
    if (input.FunctionArn !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.FunctionArn))
            .withName("FunctionArn"));
    }
    return bodyNode;
};
const serializeAws_restXmlPublicAccessBlockConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("PublicAccessBlockConfiguration");
    if (input.BlockPublicAcls !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Setting")
            .addChildNode(new xml_builder_1.XmlText(String(input.BlockPublicAcls)))
            .withName("BlockPublicAcls"));
    }
    if (input.BlockPublicPolicy !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Setting")
            .addChildNode(new xml_builder_1.XmlText(String(input.BlockPublicPolicy)))
            .withName("BlockPublicPolicy"));
    }
    if (input.IgnorePublicAcls !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Setting")
            .addChildNode(new xml_builder_1.XmlText(String(input.IgnorePublicAcls)))
            .withName("IgnorePublicAcls"));
    }
    if (input.RestrictPublicBuckets !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Setting")
            .addChildNode(new xml_builder_1.XmlText(String(input.RestrictPublicBuckets)))
            .withName("RestrictPublicBuckets"));
    }
    return bodyNode;
};
const serializeAws_restXmlS3AccessControlList = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3AccessControlList");
    if (input.Grants !== undefined) {
        const nodes = serializeAws_restXmlS3GrantList(input.Grants, context);
        const containerNode = new xml_builder_1.XmlNode("Grants");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Owner !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlS3ObjectOwner(input.Owner, context).withName("Owner"));
    }
    return bodyNode;
};
const serializeAws_restXmlS3AccessControlPolicy = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3AccessControlPolicy");
    if (input.AccessControlList !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlS3AccessControlList(input.AccessControlList, context).withName("AccessControlList"));
    }
    if (input.CannedAccessControlList !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3CannedAccessControlList")
            .addChildNode(new xml_builder_1.XmlText(input.CannedAccessControlList))
            .withName("CannedAccessControlList"));
    }
    return bodyNode;
};
const serializeAws_restXmlS3CopyObjectOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3CopyObjectOperation");
    if (input.AccessControlGrants !== undefined) {
        const nodes = serializeAws_restXmlS3GrantList(input.AccessControlGrants, context);
        const containerNode = new xml_builder_1.XmlNode("AccessControlGrants");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.CannedAccessControlList !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3CannedAccessControlList")
            .addChildNode(new xml_builder_1.XmlText(input.CannedAccessControlList))
            .withName("CannedAccessControlList"));
    }
    if (input.MetadataDirective !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3MetadataDirective")
            .addChildNode(new xml_builder_1.XmlText(input.MetadataDirective))
            .withName("MetadataDirective"));
    }
    if (input.ModifiedSinceConstraint !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TimeStamp")
            .addChildNode(new xml_builder_1.XmlText(input.ModifiedSinceConstraint.toISOString().split(".")[0] + "Z"))
            .withName("ModifiedSinceConstraint"));
    }
    if (input.NewObjectMetadata !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlS3ObjectMetadata(input.NewObjectMetadata, context).withName("NewObjectMetadata"));
    }
    if (input.NewObjectTagging !== undefined) {
        const nodes = serializeAws_restXmlS3TagSet(input.NewObjectTagging, context);
        const containerNode = new xml_builder_1.XmlNode("NewObjectTagging");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.ObjectLockLegalHoldStatus !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3ObjectLockLegalHoldStatus")
            .addChildNode(new xml_builder_1.XmlText(input.ObjectLockLegalHoldStatus))
            .withName("ObjectLockLegalHoldStatus"));
    }
    if (input.ObjectLockMode !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3ObjectLockMode")
            .addChildNode(new xml_builder_1.XmlText(input.ObjectLockMode))
            .withName("ObjectLockMode"));
    }
    if (input.ObjectLockRetainUntilDate !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TimeStamp")
            .addChildNode(new xml_builder_1.XmlText(input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z"))
            .withName("ObjectLockRetainUntilDate"));
    }
    if (input.RedirectLocation !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength2048String")
            .addChildNode(new xml_builder_1.XmlText(input.RedirectLocation))
            .withName("RedirectLocation"));
    }
    if (input.RequesterPays !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.RequesterPays)))
            .withName("RequesterPays"));
    }
    if (input.SSEAwsKmsKeyId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("KmsKeyArnString")
            .addChildNode(new xml_builder_1.XmlText(input.SSEAwsKmsKeyId))
            .withName("SSEAwsKmsKeyId"));
    }
    if (input.StorageClass !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3StorageClass")
            .addChildNode(new xml_builder_1.XmlText(input.StorageClass))
            .withName("StorageClass"));
    }
    if (input.TargetKeyPrefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.TargetKeyPrefix))
            .withName("TargetKeyPrefix"));
    }
    if (input.TargetResource !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3BucketArnString")
            .addChildNode(new xml_builder_1.XmlText(input.TargetResource))
            .withName("TargetResource"));
    }
    if (input.UnModifiedSinceConstraint !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TimeStamp")
            .addChildNode(new xml_builder_1.XmlText(input.UnModifiedSinceConstraint.toISOString().split(".")[0] + "Z"))
            .withName("UnModifiedSinceConstraint"));
    }
    return bodyNode;
};
const serializeAws_restXmlS3Grant = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3Grant");
    if (input.Grantee !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlS3Grantee(input.Grantee, context).withName("Grantee"));
    }
    if (input.Permission !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3Permission")
            .addChildNode(new xml_builder_1.XmlText(input.Permission))
            .withName("Permission"));
    }
    return bodyNode;
};
const serializeAws_restXmlS3GrantList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlS3Grant(entry, context);
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlS3Grantee = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3Grantee");
    if (input.DisplayName !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.DisplayName))
            .withName("DisplayName"));
    }
    if (input.Identifier !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.Identifier))
            .withName("Identifier"));
    }
    if (input.TypeIdentifier !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3GranteeTypeIdentifier")
            .addChildNode(new xml_builder_1.XmlText(input.TypeIdentifier))
            .withName("TypeIdentifier"));
    }
    return bodyNode;
};
const serializeAws_restXmlS3InitiateRestoreObjectOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3InitiateRestoreObjectOperation");
    if (input.ExpirationInDays !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3ExpirationInDays")
            .addChildNode(new xml_builder_1.XmlText(String(input.ExpirationInDays)))
            .withName("ExpirationInDays"));
    }
    if (input.GlacierJobTier !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3GlacierJobTier")
            .addChildNode(new xml_builder_1.XmlText(input.GlacierJobTier))
            .withName("GlacierJobTier"));
    }
    return bodyNode;
};
const serializeAws_restXmlS3ObjectMetadata = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3ObjectMetadata");
    if (input.CacheControl !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.CacheControl))
            .withName("CacheControl"));
    }
    if (input.ContentDisposition !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.ContentDisposition))
            .withName("ContentDisposition"));
    }
    if (input.ContentEncoding !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.ContentEncoding))
            .withName("ContentEncoding"));
    }
    if (input.ContentLanguage !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.ContentLanguage))
            .withName("ContentLanguage"));
    }
    if (input.ContentLength !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3ContentLength")
            .addChildNode(new xml_builder_1.XmlText(String(input.ContentLength)))
            .withName("ContentLength"));
    }
    if (input.ContentMD5 !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.ContentMD5))
            .withName("ContentMD5"));
    }
    if (input.ContentType !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.ContentType))
            .withName("ContentType"));
    }
    if (input.HttpExpiresDate !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TimeStamp")
            .addChildNode(new xml_builder_1.XmlText(input.HttpExpiresDate.toISOString().split(".")[0] + "Z"))
            .withName("HttpExpiresDate"));
    }
    if (input.RequesterCharged !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.RequesterCharged)))
            .withName("RequesterCharged"));
    }
    if (input.SSEAlgorithm !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("S3SSEAlgorithm")
            .addChildNode(new xml_builder_1.XmlText(input.SSEAlgorithm))
            .withName("SSEAlgorithm"));
    }
    if (input.UserMetadata !== undefined) {
        const nodes = serializeAws_restXmlS3UserMetadata(input.UserMetadata, context);
        const containerNode = new xml_builder_1.XmlNode("UserMetadata");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlS3ObjectOwner = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3ObjectOwner");
    if (input.DisplayName !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.DisplayName))
            .withName("DisplayName"));
    }
    if (input.ID !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.ID))
            .withName("ID"));
    }
    return bodyNode;
};
const serializeAws_restXmlS3SetObjectAclOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3SetObjectAclOperation");
    if (input.AccessControlPolicy !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlS3AccessControlPolicy(input.AccessControlPolicy, context).withName("AccessControlPolicy"));
    }
    return bodyNode;
};
const serializeAws_restXmlS3SetObjectTaggingOperation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3SetObjectTaggingOperation");
    if (input.TagSet !== undefined) {
        const nodes = serializeAws_restXmlS3TagSet(input.TagSet, context);
        const containerNode = new xml_builder_1.XmlNode("TagSet");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlS3Tag = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3Tag");
    if (input.Key !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.Key))
            .withName("Key"));
    }
    if (input.Value !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("MaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input.Value))
            .withName("Value"));
    }
    return bodyNode;
};
const serializeAws_restXmlS3TagSet = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlS3Tag(entry, context);
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlS3UserMetadata = (input, context) => {
    const collectedNodes = [];
    Object.keys(input).forEach(key => {
        const entryNode = new xml_builder_1.XmlNode("entry");
        entryNode.addChildNode(new xml_builder_1.XmlNode("NonEmptyMaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(key))
            .withName("key"));
        entryNode.addChildNode(new xml_builder_1.XmlNode("MaxLength1024String")
            .addChildNode(new xml_builder_1.XmlText(input[key]))
            .withName("value"));
        collectedNodes.push(entryNode);
    });
    return collectedNodes;
};
const serializeAws_restXmlVpcConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("VpcConfiguration");
    if (input.VpcId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("VpcId")
            .addChildNode(new xml_builder_1.XmlText(input.VpcId))
            .withName("VpcId"));
    }
    return bodyNode;
};
const deserializeAws_restXmlAccessPoint = (output, context) => {
    let contents = {
        __type: "AccessPoint",
        Bucket: undefined,
        Name: undefined,
        NetworkOrigin: undefined,
        VpcConfiguration: undefined
    };
    if (output["Bucket"] !== undefined) {
        contents.Bucket = output["Bucket"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["NetworkOrigin"] !== undefined) {
        contents.NetworkOrigin = output["NetworkOrigin"];
    }
    if (output["VpcConfiguration"] !== undefined) {
        contents.VpcConfiguration = deserializeAws_restXmlVpcConfiguration(output["VpcConfiguration"], context);
    }
    return contents;
};
const deserializeAws_restXmlAccessPointList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlAccessPoint(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlJobDescriptor = (output, context) => {
    let contents = {
        __type: "JobDescriptor",
        ConfirmationRequired: undefined,
        CreationTime: undefined,
        Description: undefined,
        FailureReasons: undefined,
        JobArn: undefined,
        JobId: undefined,
        Manifest: undefined,
        Operation: undefined,
        Priority: undefined,
        ProgressSummary: undefined,
        Report: undefined,
        RoleArn: undefined,
        Status: undefined,
        StatusUpdateReason: undefined,
        SuspendedCause: undefined,
        SuspendedDate: undefined,
        TerminationDate: undefined
    };
    if (output["ConfirmationRequired"] !== undefined) {
        contents.ConfirmationRequired = output["ConfirmationRequired"] == "true";
    }
    if (output["CreationTime"] !== undefined) {
        contents.CreationTime = new Date(output["CreationTime"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output.FailureReasons === "") {
        contents.FailureReasons = [];
    }
    if (output["FailureReasons"] !== undefined &&
        output["FailureReasons"]["member"] !== undefined) {
        const wrappedItem = output["FailureReasons"]["member"] instanceof Array
            ? output["FailureReasons"]["member"]
            : [output["FailureReasons"]["member"]];
        contents.FailureReasons = deserializeAws_restXmlJobFailureList(wrappedItem, context);
    }
    if (output["JobArn"] !== undefined) {
        contents.JobArn = output["JobArn"];
    }
    if (output["JobId"] !== undefined) {
        contents.JobId = output["JobId"];
    }
    if (output["Manifest"] !== undefined) {
        contents.Manifest = deserializeAws_restXmlJobManifest(output["Manifest"], context);
    }
    if (output["Operation"] !== undefined) {
        contents.Operation = deserializeAws_restXmlJobOperation(output["Operation"], context);
    }
    if (output["Priority"] !== undefined) {
        contents.Priority = parseInt(output["Priority"]);
    }
    if (output["ProgressSummary"] !== undefined) {
        contents.ProgressSummary = deserializeAws_restXmlJobProgressSummary(output["ProgressSummary"], context);
    }
    if (output["Report"] !== undefined) {
        contents.Report = deserializeAws_restXmlJobReport(output["Report"], context);
    }
    if (output["RoleArn"] !== undefined) {
        contents.RoleArn = output["RoleArn"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StatusUpdateReason"] !== undefined) {
        contents.StatusUpdateReason = output["StatusUpdateReason"];
    }
    if (output["SuspendedCause"] !== undefined) {
        contents.SuspendedCause = output["SuspendedCause"];
    }
    if (output["SuspendedDate"] !== undefined) {
        contents.SuspendedDate = new Date(output["SuspendedDate"]);
    }
    if (output["TerminationDate"] !== undefined) {
        contents.TerminationDate = new Date(output["TerminationDate"]);
    }
    return contents;
};
const deserializeAws_restXmlJobFailure = (output, context) => {
    let contents = {
        __type: "JobFailure",
        FailureCode: undefined,
        FailureReason: undefined
    };
    if (output["FailureCode"] !== undefined) {
        contents.FailureCode = output["FailureCode"];
    }
    if (output["FailureReason"] !== undefined) {
        contents.FailureReason = output["FailureReason"];
    }
    return contents;
};
const deserializeAws_restXmlJobFailureList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlJobFailure(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlJobListDescriptor = (output, context) => {
    let contents = {
        __type: "JobListDescriptor",
        CreationTime: undefined,
        Description: undefined,
        JobId: undefined,
        Operation: undefined,
        Priority: undefined,
        ProgressSummary: undefined,
        Status: undefined,
        TerminationDate: undefined
    };
    if (output["CreationTime"] !== undefined) {
        contents.CreationTime = new Date(output["CreationTime"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["JobId"] !== undefined) {
        contents.JobId = output["JobId"];
    }
    if (output["Operation"] !== undefined) {
        contents.Operation = output["Operation"];
    }
    if (output["Priority"] !== undefined) {
        contents.Priority = parseInt(output["Priority"]);
    }
    if (output["ProgressSummary"] !== undefined) {
        contents.ProgressSummary = deserializeAws_restXmlJobProgressSummary(output["ProgressSummary"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["TerminationDate"] !== undefined) {
        contents.TerminationDate = new Date(output["TerminationDate"]);
    }
    return contents;
};
const deserializeAws_restXmlJobListDescriptorList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlJobListDescriptor(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlJobManifest = (output, context) => {
    let contents = {
        __type: "JobManifest",
        Location: undefined,
        Spec: undefined
    };
    if (output["Location"] !== undefined) {
        contents.Location = deserializeAws_restXmlJobManifestLocation(output["Location"], context);
    }
    if (output["Spec"] !== undefined) {
        contents.Spec = deserializeAws_restXmlJobManifestSpec(output["Spec"], context);
    }
    return contents;
};
const deserializeAws_restXmlJobManifestFieldList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlJobManifestLocation = (output, context) => {
    let contents = {
        __type: "JobManifestLocation",
        ETag: undefined,
        ObjectArn: undefined,
        ObjectVersionId: undefined
    };
    if (output["ETag"] !== undefined) {
        contents.ETag = output["ETag"];
    }
    if (output["ObjectArn"] !== undefined) {
        contents.ObjectArn = output["ObjectArn"];
    }
    if (output["ObjectVersionId"] !== undefined) {
        contents.ObjectVersionId = output["ObjectVersionId"];
    }
    return contents;
};
const deserializeAws_restXmlJobManifestSpec = (output, context) => {
    let contents = {
        __type: "JobManifestSpec",
        Fields: undefined,
        Format: undefined
    };
    if (output.Fields === "") {
        contents.Fields = [];
    }
    if (output["Fields"] !== undefined &&
        output["Fields"]["member"] !== undefined) {
        const wrappedItem = output["Fields"]["member"] instanceof Array
            ? output["Fields"]["member"]
            : [output["Fields"]["member"]];
        contents.Fields = deserializeAws_restXmlJobManifestFieldList(wrappedItem, context);
    }
    if (output["Format"] !== undefined) {
        contents.Format = output["Format"];
    }
    return contents;
};
const deserializeAws_restXmlJobOperation = (output, context) => {
    let contents = {
        __type: "JobOperation",
        LambdaInvoke: undefined,
        S3InitiateRestoreObject: undefined,
        S3PutObjectAcl: undefined,
        S3PutObjectCopy: undefined,
        S3PutObjectTagging: undefined
    };
    if (output["LambdaInvoke"] !== undefined) {
        contents.LambdaInvoke = deserializeAws_restXmlLambdaInvokeOperation(output["LambdaInvoke"], context);
    }
    if (output["S3InitiateRestoreObject"] !== undefined) {
        contents.S3InitiateRestoreObject = deserializeAws_restXmlS3InitiateRestoreObjectOperation(output["S3InitiateRestoreObject"], context);
    }
    if (output["S3PutObjectAcl"] !== undefined) {
        contents.S3PutObjectAcl = deserializeAws_restXmlS3SetObjectAclOperation(output["S3PutObjectAcl"], context);
    }
    if (output["S3PutObjectCopy"] !== undefined) {
        contents.S3PutObjectCopy = deserializeAws_restXmlS3CopyObjectOperation(output["S3PutObjectCopy"], context);
    }
    if (output["S3PutObjectTagging"] !== undefined) {
        contents.S3PutObjectTagging = deserializeAws_restXmlS3SetObjectTaggingOperation(output["S3PutObjectTagging"], context);
    }
    return contents;
};
const deserializeAws_restXmlJobProgressSummary = (output, context) => {
    let contents = {
        __type: "JobProgressSummary",
        NumberOfTasksFailed: undefined,
        NumberOfTasksSucceeded: undefined,
        TotalNumberOfTasks: undefined
    };
    if (output["NumberOfTasksFailed"] !== undefined) {
        contents.NumberOfTasksFailed = parseInt(output["NumberOfTasksFailed"]);
    }
    if (output["NumberOfTasksSucceeded"] !== undefined) {
        contents.NumberOfTasksSucceeded = parseInt(output["NumberOfTasksSucceeded"]);
    }
    if (output["TotalNumberOfTasks"] !== undefined) {
        contents.TotalNumberOfTasks = parseInt(output["TotalNumberOfTasks"]);
    }
    return contents;
};
const deserializeAws_restXmlJobReport = (output, context) => {
    let contents = {
        __type: "JobReport",
        Bucket: undefined,
        Enabled: undefined,
        Format: undefined,
        Prefix: undefined,
        ReportScope: undefined
    };
    if (output["Bucket"] !== undefined) {
        contents.Bucket = output["Bucket"];
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["Format"] !== undefined) {
        contents.Format = output["Format"];
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output["ReportScope"] !== undefined) {
        contents.ReportScope = output["ReportScope"];
    }
    return contents;
};
const deserializeAws_restXmlLambdaInvokeOperation = (output, context) => {
    let contents = {
        __type: "LambdaInvokeOperation",
        FunctionArn: undefined
    };
    if (output["FunctionArn"] !== undefined) {
        contents.FunctionArn = output["FunctionArn"];
    }
    return contents;
};
const deserializeAws_restXmlPolicyStatus = (output, context) => {
    let contents = {
        __type: "PolicyStatus",
        IsPublic: undefined
    };
    if (output["IsPublic"] !== undefined) {
        contents.IsPublic = output["IsPublic"] == "true";
    }
    return contents;
};
const deserializeAws_restXmlPublicAccessBlockConfiguration = (output, context) => {
    let contents = {
        __type: "PublicAccessBlockConfiguration",
        BlockPublicAcls: undefined,
        BlockPublicPolicy: undefined,
        IgnorePublicAcls: undefined,
        RestrictPublicBuckets: undefined
    };
    if (output["BlockPublicAcls"] !== undefined) {
        contents.BlockPublicAcls = output["BlockPublicAcls"] == "true";
    }
    if (output["BlockPublicPolicy"] !== undefined) {
        contents.BlockPublicPolicy = output["BlockPublicPolicy"] == "true";
    }
    if (output["IgnorePublicAcls"] !== undefined) {
        contents.IgnorePublicAcls = output["IgnorePublicAcls"] == "true";
    }
    if (output["RestrictPublicBuckets"] !== undefined) {
        contents.RestrictPublicBuckets = output["RestrictPublicBuckets"] == "true";
    }
    return contents;
};
const deserializeAws_restXmlS3AccessControlList = (output, context) => {
    let contents = {
        __type: "S3AccessControlList",
        Grants: undefined,
        Owner: undefined
    };
    if (output.Grants === "") {
        contents.Grants = [];
    }
    if (output["Grants"] !== undefined &&
        output["Grants"]["member"] !== undefined) {
        const wrappedItem = output["Grants"]["member"] instanceof Array
            ? output["Grants"]["member"]
            : [output["Grants"]["member"]];
        contents.Grants = deserializeAws_restXmlS3GrantList(wrappedItem, context);
    }
    if (output["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlS3ObjectOwner(output["Owner"], context);
    }
    return contents;
};
const deserializeAws_restXmlS3AccessControlPolicy = (output, context) => {
    let contents = {
        __type: "S3AccessControlPolicy",
        AccessControlList: undefined,
        CannedAccessControlList: undefined
    };
    if (output["AccessControlList"] !== undefined) {
        contents.AccessControlList = deserializeAws_restXmlS3AccessControlList(output["AccessControlList"], context);
    }
    if (output["CannedAccessControlList"] !== undefined) {
        contents.CannedAccessControlList = output["CannedAccessControlList"];
    }
    return contents;
};
const deserializeAws_restXmlS3CopyObjectOperation = (output, context) => {
    let contents = {
        __type: "S3CopyObjectOperation",
        AccessControlGrants: undefined,
        CannedAccessControlList: undefined,
        MetadataDirective: undefined,
        ModifiedSinceConstraint: undefined,
        NewObjectMetadata: undefined,
        NewObjectTagging: undefined,
        ObjectLockLegalHoldStatus: undefined,
        ObjectLockMode: undefined,
        ObjectLockRetainUntilDate: undefined,
        RedirectLocation: undefined,
        RequesterPays: undefined,
        SSEAwsKmsKeyId: undefined,
        StorageClass: undefined,
        TargetKeyPrefix: undefined,
        TargetResource: undefined,
        UnModifiedSinceConstraint: undefined
    };
    if (output.AccessControlGrants === "") {
        contents.AccessControlGrants = [];
    }
    if (output["AccessControlGrants"] !== undefined &&
        output["AccessControlGrants"]["member"] !== undefined) {
        const wrappedItem = output["AccessControlGrants"]["member"] instanceof Array
            ? output["AccessControlGrants"]["member"]
            : [output["AccessControlGrants"]["member"]];
        contents.AccessControlGrants = deserializeAws_restXmlS3GrantList(wrappedItem, context);
    }
    if (output["CannedAccessControlList"] !== undefined) {
        contents.CannedAccessControlList = output["CannedAccessControlList"];
    }
    if (output["MetadataDirective"] !== undefined) {
        contents.MetadataDirective = output["MetadataDirective"];
    }
    if (output["ModifiedSinceConstraint"] !== undefined) {
        contents.ModifiedSinceConstraint = new Date(output["ModifiedSinceConstraint"]);
    }
    if (output["NewObjectMetadata"] !== undefined) {
        contents.NewObjectMetadata = deserializeAws_restXmlS3ObjectMetadata(output["NewObjectMetadata"], context);
    }
    if (output.NewObjectTagging === "") {
        contents.NewObjectTagging = [];
    }
    if (output["NewObjectTagging"] !== undefined &&
        output["NewObjectTagging"]["member"] !== undefined) {
        const wrappedItem = output["NewObjectTagging"]["member"] instanceof Array
            ? output["NewObjectTagging"]["member"]
            : [output["NewObjectTagging"]["member"]];
        contents.NewObjectTagging = deserializeAws_restXmlS3TagSet(wrappedItem, context);
    }
    if (output["ObjectLockLegalHoldStatus"] !== undefined) {
        contents.ObjectLockLegalHoldStatus = output["ObjectLockLegalHoldStatus"];
    }
    if (output["ObjectLockMode"] !== undefined) {
        contents.ObjectLockMode = output["ObjectLockMode"];
    }
    if (output["ObjectLockRetainUntilDate"] !== undefined) {
        contents.ObjectLockRetainUntilDate = new Date(output["ObjectLockRetainUntilDate"]);
    }
    if (output["RedirectLocation"] !== undefined) {
        contents.RedirectLocation = output["RedirectLocation"];
    }
    if (output["RequesterPays"] !== undefined) {
        contents.RequesterPays = output["RequesterPays"] == "true";
    }
    if (output["SSEAwsKmsKeyId"] !== undefined) {
        contents.SSEAwsKmsKeyId = output["SSEAwsKmsKeyId"];
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = output["StorageClass"];
    }
    if (output["TargetKeyPrefix"] !== undefined) {
        contents.TargetKeyPrefix = output["TargetKeyPrefix"];
    }
    if (output["TargetResource"] !== undefined) {
        contents.TargetResource = output["TargetResource"];
    }
    if (output["UnModifiedSinceConstraint"] !== undefined) {
        contents.UnModifiedSinceConstraint = new Date(output["UnModifiedSinceConstraint"]);
    }
    return contents;
};
const deserializeAws_restXmlS3Grant = (output, context) => {
    let contents = {
        __type: "S3Grant",
        Grantee: undefined,
        Permission: undefined
    };
    if (output["Grantee"] !== undefined) {
        contents.Grantee = deserializeAws_restXmlS3Grantee(output["Grantee"], context);
    }
    if (output["Permission"] !== undefined) {
        contents.Permission = output["Permission"];
    }
    return contents;
};
const deserializeAws_restXmlS3GrantList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlS3Grant(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlS3Grantee = (output, context) => {
    let contents = {
        __type: "S3Grantee",
        DisplayName: undefined,
        Identifier: undefined,
        TypeIdentifier: undefined
    };
    if (output["DisplayName"] !== undefined) {
        contents.DisplayName = output["DisplayName"];
    }
    if (output["Identifier"] !== undefined) {
        contents.Identifier = output["Identifier"];
    }
    if (output["TypeIdentifier"] !== undefined) {
        contents.TypeIdentifier = output["TypeIdentifier"];
    }
    return contents;
};
const deserializeAws_restXmlS3InitiateRestoreObjectOperation = (output, context) => {
    let contents = {
        __type: "S3InitiateRestoreObjectOperation",
        ExpirationInDays: undefined,
        GlacierJobTier: undefined
    };
    if (output["ExpirationInDays"] !== undefined) {
        contents.ExpirationInDays = parseInt(output["ExpirationInDays"]);
    }
    if (output["GlacierJobTier"] !== undefined) {
        contents.GlacierJobTier = output["GlacierJobTier"];
    }
    return contents;
};
const deserializeAws_restXmlS3ObjectMetadata = (output, context) => {
    let contents = {
        __type: "S3ObjectMetadata",
        CacheControl: undefined,
        ContentDisposition: undefined,
        ContentEncoding: undefined,
        ContentLanguage: undefined,
        ContentLength: undefined,
        ContentMD5: undefined,
        ContentType: undefined,
        HttpExpiresDate: undefined,
        RequesterCharged: undefined,
        SSEAlgorithm: undefined,
        UserMetadata: undefined
    };
    if (output["CacheControl"] !== undefined) {
        contents.CacheControl = output["CacheControl"];
    }
    if (output["ContentDisposition"] !== undefined) {
        contents.ContentDisposition = output["ContentDisposition"];
    }
    if (output["ContentEncoding"] !== undefined) {
        contents.ContentEncoding = output["ContentEncoding"];
    }
    if (output["ContentLanguage"] !== undefined) {
        contents.ContentLanguage = output["ContentLanguage"];
    }
    if (output["ContentLength"] !== undefined) {
        contents.ContentLength = parseInt(output["ContentLength"]);
    }
    if (output["ContentMD5"] !== undefined) {
        contents.ContentMD5 = output["ContentMD5"];
    }
    if (output["ContentType"] !== undefined) {
        contents.ContentType = output["ContentType"];
    }
    if (output["HttpExpiresDate"] !== undefined) {
        contents.HttpExpiresDate = new Date(output["HttpExpiresDate"]);
    }
    if (output["RequesterCharged"] !== undefined) {
        contents.RequesterCharged = output["RequesterCharged"] == "true";
    }
    if (output["SSEAlgorithm"] !== undefined) {
        contents.SSEAlgorithm = output["SSEAlgorithm"];
    }
    if (output.UserMetadata === "") {
        contents.UserMetadata = {};
    }
    if (output["UserMetadata"] !== undefined &&
        output["UserMetadata"]["entry"] !== undefined) {
        const wrappedItem = output["UserMetadata"]["entry"] instanceof Array
            ? output["UserMetadata"]["entry"]
            : [output["UserMetadata"]["entry"]];
        contents.UserMetadata = deserializeAws_restXmlS3UserMetadata(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_restXmlS3ObjectOwner = (output, context) => {
    let contents = {
        __type: "S3ObjectOwner",
        DisplayName: undefined,
        ID: undefined
    };
    if (output["DisplayName"] !== undefined) {
        contents.DisplayName = output["DisplayName"];
    }
    if (output["ID"] !== undefined) {
        contents.ID = output["ID"];
    }
    return contents;
};
const deserializeAws_restXmlS3SetObjectAclOperation = (output, context) => {
    let contents = {
        __type: "S3SetObjectAclOperation",
        AccessControlPolicy: undefined
    };
    if (output["AccessControlPolicy"] !== undefined) {
        contents.AccessControlPolicy = deserializeAws_restXmlS3AccessControlPolicy(output["AccessControlPolicy"], context);
    }
    return contents;
};
const deserializeAws_restXmlS3SetObjectTaggingOperation = (output, context) => {
    let contents = {
        __type: "S3SetObjectTaggingOperation",
        TagSet: undefined
    };
    if (output.TagSet === "") {
        contents.TagSet = [];
    }
    if (output["TagSet"] !== undefined &&
        output["TagSet"]["member"] !== undefined) {
        const wrappedItem = output["TagSet"]["member"] instanceof Array
            ? output["TagSet"]["member"]
            : [output["TagSet"]["member"]];
        contents.TagSet = deserializeAws_restXmlS3TagSet(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_restXmlS3Tag = (output, context) => {
    let contents = {
        __type: "S3Tag",
        Key: undefined,
        Value: undefined
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_restXmlS3TagSet = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlS3Tag(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlS3UserMetadata = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = pair["value"];
    });
    return mapParams;
};
const deserializeAws_restXmlVpcConfiguration = (output, context) => {
    let contents = {
        __type: "VpcConfiguration",
        VpcId: undefined
    };
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
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
const decodeEscapedXML = (str) => {
    return str
        .replace(/&amp;/g, "&")
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&gt;/g, ">")
        .replace(/&lt;/g, "<");
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            const parsedObj = fast_xml_parser_1.parse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
            });
            const textNodeName = "#text";
            const key = Object.keys(parsedObj)[0];
            const parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return parsedObjToReturn;
        }
        return {};
    });
};
const loadRestXmlErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_restXml.js.map