"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const xml_builder_1 = require("@aws-sdk/xml-builder");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2019-03-26/origin-access-identity/cloudfront";
    let body;
    let contents;
    if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
        contents = serializeAws_restXmlCloudFrontOriginAccessIdentityConfig(input.CloudFrontOriginAccessIdentityConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand = serializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand;
async function serializeAws_restXmlCreateDistributionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2019-03-26/distribution";
    let body;
    let contents;
    if (input.DistributionConfig !== undefined) {
        contents = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateDistributionCommand = serializeAws_restXmlCreateDistributionCommand;
async function serializeAws_restXmlCreateDistributionWithTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2019-03-26/distribution";
    const query = {
        WithTags: ""
    };
    let body;
    let contents;
    if (input.DistributionConfigWithTags !== undefined) {
        contents = serializeAws_restXmlDistributionConfigWithTags(input.DistributionConfigWithTags, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlCreateDistributionWithTagsCommand = serializeAws_restXmlCreateDistributionWithTagsCommand;
async function serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2019-03-26/field-level-encryption";
    let body;
    let contents;
    if (input.FieldLevelEncryptionConfig !== undefined) {
        contents = serializeAws_restXmlFieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand = serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand;
async function serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2019-03-26/field-level-encryption-profile";
    let body;
    let contents;
    if (input.FieldLevelEncryptionProfileConfig !== undefined) {
        contents = serializeAws_restXmlFieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand = serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand;
async function serializeAws_restXmlCreateInvalidationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2019-03-26/distribution/{DistributionId}/invalidation";
    if (input.DistributionId !== undefined) {
        const labelValue = input.DistributionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DistributionId.");
        }
        resolvedPath = resolvedPath.replace("{DistributionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DistributionId.");
    }
    let body;
    let contents;
    if (input.InvalidationBatch !== undefined) {
        contents = serializeAws_restXmlInvalidationBatch(input.InvalidationBatch, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateInvalidationCommand = serializeAws_restXmlCreateInvalidationCommand;
async function serializeAws_restXmlCreatePublicKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2019-03-26/public-key";
    let body;
    let contents;
    if (input.PublicKeyConfig !== undefined) {
        contents = serializeAws_restXmlPublicKeyConfig(input.PublicKeyConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreatePublicKeyCommand = serializeAws_restXmlCreatePublicKeyCommand;
async function serializeAws_restXmlCreateStreamingDistributionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2019-03-26/streaming-distribution";
    let body;
    let contents;
    if (input.StreamingDistributionConfig !== undefined) {
        contents = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateStreamingDistributionCommand = serializeAws_restXmlCreateStreamingDistributionCommand;
async function serializeAws_restXmlCreateStreamingDistributionWithTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2019-03-26/streaming-distribution";
    const query = {
        WithTags: ""
    };
    let body;
    let contents;
    if (input.StreamingDistributionConfigWithTags !== undefined) {
        contents = serializeAws_restXmlStreamingDistributionConfigWithTags(input.StreamingDistributionConfigWithTags, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlCreateStreamingDistributionWithTagsCommand = serializeAws_restXmlCreateStreamingDistributionWithTagsCommand;
async function serializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.IfMatch !== undefined) {
        headers["If-Match"] = input.IfMatch;
    }
    let resolvedPath = "/2019-03-26/origin-access-identity/cloudfront/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand = serializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand;
async function serializeAws_restXmlDeleteDistributionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.IfMatch !== undefined) {
        headers["If-Match"] = input.IfMatch;
    }
    let resolvedPath = "/2019-03-26/distribution/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlDeleteDistributionCommand = serializeAws_restXmlDeleteDistributionCommand;
async function serializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.IfMatch !== undefined) {
        headers["If-Match"] = input.IfMatch;
    }
    let resolvedPath = "/2019-03-26/field-level-encryption/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand = serializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand;
async function serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.IfMatch !== undefined) {
        headers["If-Match"] = input.IfMatch;
    }
    let resolvedPath = "/2019-03-26/field-level-encryption-profile/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand = serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand;
async function serializeAws_restXmlDeletePublicKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.IfMatch !== undefined) {
        headers["If-Match"] = input.IfMatch;
    }
    let resolvedPath = "/2019-03-26/public-key/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlDeletePublicKeyCommand = serializeAws_restXmlDeletePublicKeyCommand;
async function serializeAws_restXmlDeleteStreamingDistributionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.IfMatch !== undefined) {
        headers["If-Match"] = input.IfMatch;
    }
    let resolvedPath = "/2019-03-26/streaming-distribution/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlDeleteStreamingDistributionCommand = serializeAws_restXmlDeleteStreamingDistributionCommand;
async function serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/origin-access-identity/cloudfront/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand = serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand;
async function serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/origin-access-identity/cloudfront/{Id}/config";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand = serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand;
async function serializeAws_restXmlGetDistributionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/distribution/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetDistributionCommand = serializeAws_restXmlGetDistributionCommand;
async function serializeAws_restXmlGetDistributionConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/distribution/{Id}/config";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetDistributionConfigCommand = serializeAws_restXmlGetDistributionConfigCommand;
async function serializeAws_restXmlGetFieldLevelEncryptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/field-level-encryption/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetFieldLevelEncryptionCommand = serializeAws_restXmlGetFieldLevelEncryptionCommand;
async function serializeAws_restXmlGetFieldLevelEncryptionConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/field-level-encryption/{Id}/config";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetFieldLevelEncryptionConfigCommand = serializeAws_restXmlGetFieldLevelEncryptionConfigCommand;
async function serializeAws_restXmlGetFieldLevelEncryptionProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/field-level-encryption-profile/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetFieldLevelEncryptionProfileCommand = serializeAws_restXmlGetFieldLevelEncryptionProfileCommand;
async function serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/field-level-encryption-profile/{Id}/config";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand = serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand;
async function serializeAws_restXmlGetInvalidationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/distribution/{DistributionId}/invalidation/{Id}";
    if (input.DistributionId !== undefined) {
        const labelValue = input.DistributionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DistributionId.");
        }
        resolvedPath = resolvedPath.replace("{DistributionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DistributionId.");
    }
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetInvalidationCommand = serializeAws_restXmlGetInvalidationCommand;
async function serializeAws_restXmlGetPublicKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/public-key/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetPublicKeyCommand = serializeAws_restXmlGetPublicKeyCommand;
async function serializeAws_restXmlGetPublicKeyConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/public-key/{Id}/config";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetPublicKeyConfigCommand = serializeAws_restXmlGetPublicKeyConfigCommand;
async function serializeAws_restXmlGetStreamingDistributionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/streaming-distribution/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetStreamingDistributionCommand = serializeAws_restXmlGetStreamingDistributionCommand;
async function serializeAws_restXmlGetStreamingDistributionConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/streaming-distribution/{Id}/config";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetStreamingDistributionConfigCommand = serializeAws_restXmlGetStreamingDistributionConfigCommand;
async function serializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/origin-access-identity/cloudfront";
    const query = {};
    if (input.Marker !== undefined) {
        query["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        query["MaxItems"] = input.MaxItems;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand = serializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand;
async function serializeAws_restXmlListDistributionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/distribution";
    const query = {};
    if (input.Marker !== undefined) {
        query["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        query["MaxItems"] = input.MaxItems;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListDistributionsCommand = serializeAws_restXmlListDistributionsCommand;
async function serializeAws_restXmlListDistributionsByWebACLIdCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/distributionsByWebACLId/{WebACLId}";
    if (input.WebACLId !== undefined) {
        const labelValue = input.WebACLId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WebACLId.");
        }
        resolvedPath = resolvedPath.replace("{WebACLId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WebACLId.");
    }
    const query = {};
    if (input.Marker !== undefined) {
        query["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        query["MaxItems"] = input.MaxItems;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListDistributionsByWebACLIdCommand = serializeAws_restXmlListDistributionsByWebACLIdCommand;
async function serializeAws_restXmlListFieldLevelEncryptionConfigsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/field-level-encryption";
    const query = {};
    if (input.Marker !== undefined) {
        query["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        query["MaxItems"] = input.MaxItems;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListFieldLevelEncryptionConfigsCommand = serializeAws_restXmlListFieldLevelEncryptionConfigsCommand;
async function serializeAws_restXmlListFieldLevelEncryptionProfilesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/field-level-encryption-profile";
    const query = {};
    if (input.Marker !== undefined) {
        query["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        query["MaxItems"] = input.MaxItems;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListFieldLevelEncryptionProfilesCommand = serializeAws_restXmlListFieldLevelEncryptionProfilesCommand;
async function serializeAws_restXmlListInvalidationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/distribution/{DistributionId}/invalidation";
    if (input.DistributionId !== undefined) {
        const labelValue = input.DistributionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DistributionId.");
        }
        resolvedPath = resolvedPath.replace("{DistributionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DistributionId.");
    }
    const query = {};
    if (input.Marker !== undefined) {
        query["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        query["MaxItems"] = input.MaxItems;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListInvalidationsCommand = serializeAws_restXmlListInvalidationsCommand;
async function serializeAws_restXmlListPublicKeysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/public-key";
    const query = {};
    if (input.Marker !== undefined) {
        query["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        query["MaxItems"] = input.MaxItems;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListPublicKeysCommand = serializeAws_restXmlListPublicKeysCommand;
async function serializeAws_restXmlListStreamingDistributionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/streaming-distribution";
    const query = {};
    if (input.Marker !== undefined) {
        query["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        query["MaxItems"] = input.MaxItems;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListStreamingDistributionsCommand = serializeAws_restXmlListStreamingDistributionsCommand;
async function serializeAws_restXmlListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2019-03-26/tagging";
    const query = {};
    if (input.Resource !== undefined) {
        query["Resource"] = input.Resource;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListTagsForResourceCommand = serializeAws_restXmlListTagsForResourceCommand;
async function serializeAws_restXmlTagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2019-03-26/tagging";
    const query = {
        Operation: "Tag"
    };
    if (input.Resource !== undefined) {
        query["Resource"] = input.Resource;
    }
    let body;
    let contents;
    if (input.Tags !== undefined) {
        contents = serializeAws_restXmlTags(input.Tags, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlTagResourceCommand = serializeAws_restXmlTagResourceCommand;
async function serializeAws_restXmlUntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2019-03-26/tagging";
    const query = {
        Operation: "Untag"
    };
    if (input.Resource !== undefined) {
        query["Resource"] = input.Resource;
    }
    let body;
    let contents;
    if (input.TagKeys !== undefined) {
        contents = serializeAws_restXmlTagKeys(input.TagKeys, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlUntagResourceCommand = serializeAws_restXmlUntagResourceCommand;
async function serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.IfMatch !== undefined) {
        headers["If-Match"] = input.IfMatch;
    }
    let resolvedPath = "/2019-03-26/origin-access-identity/cloudfront/{Id}/config";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    let contents;
    if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
        contents = serializeAws_restXmlCloudFrontOriginAccessIdentityConfig(input.CloudFrontOriginAccessIdentityConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand = serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand;
async function serializeAws_restXmlUpdateDistributionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.IfMatch !== undefined) {
        headers["If-Match"] = input.IfMatch;
    }
    let resolvedPath = "/2019-03-26/distribution/{Id}/config";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    let contents;
    if (input.DistributionConfig !== undefined) {
        contents = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlUpdateDistributionCommand = serializeAws_restXmlUpdateDistributionCommand;
async function serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.IfMatch !== undefined) {
        headers["If-Match"] = input.IfMatch;
    }
    let resolvedPath = "/2019-03-26/field-level-encryption/{Id}/config";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    let contents;
    if (input.FieldLevelEncryptionConfig !== undefined) {
        contents = serializeAws_restXmlFieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand = serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand;
async function serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.IfMatch !== undefined) {
        headers["If-Match"] = input.IfMatch;
    }
    let resolvedPath = "/2019-03-26/field-level-encryption-profile/{Id}/config";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    let contents;
    if (input.FieldLevelEncryptionProfileConfig !== undefined) {
        contents = serializeAws_restXmlFieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand = serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand;
async function serializeAws_restXmlUpdatePublicKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.IfMatch !== undefined) {
        headers["If-Match"] = input.IfMatch;
    }
    let resolvedPath = "/2019-03-26/public-key/{Id}/config";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    let contents;
    if (input.PublicKeyConfig !== undefined) {
        contents = serializeAws_restXmlPublicKeyConfig(input.PublicKeyConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlUpdatePublicKeyCommand = serializeAws_restXmlUpdatePublicKeyCommand;
async function serializeAws_restXmlUpdateStreamingDistributionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.IfMatch !== undefined) {
        headers["If-Match"] = input.IfMatch;
    }
    let resolvedPath = "/2019-03-26/streaming-distribution/{Id}/config";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    let contents;
    if (input.StreamingDistributionConfig !== undefined) {
        contents = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2019-03-26/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlUpdateStreamingDistributionCommand = serializeAws_restXmlUpdateStreamingDistributionCommand;
async function deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateCloudFrontOriginAccessIdentityResult",
        CloudFrontOriginAccessIdentity: undefined,
        ETag: undefined,
        Location: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    contents.CloudFrontOriginAccessIdentity = deserializeAws_restXmlCloudFrontOriginAccessIdentity(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand = deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand;
async function deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudFrontOriginAccessIdentityAlreadyExists":
        case "com.amazon.edge.error#CloudFrontOriginAccessIdentityAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlCloudFrontOriginAccessIdentityAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InconsistentQuantities":
        case "com.amazon.edge.error#InconsistentQuantities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingBody":
        case "com.amazon.edge.error#MissingBody":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyCloudFrontOriginAccessIdentities":
        case "com.amazon.edge.error#TooManyCloudFrontOriginAccessIdentities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyCloudFrontOriginAccessIdentitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateDistributionCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateDistributionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateDistributionResult",
        Distribution: undefined,
        ETag: undefined,
        Location: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    contents.Distribution = deserializeAws_restXmlDistribution(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateDistributionCommand = deserializeAws_restXmlCreateDistributionCommand;
async function deserializeAws_restXmlCreateDistributionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CNAMEAlreadyExists":
        case "com.amazon.edge.error#CNAMEAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DistributionAlreadyExists":
        case "com.amazon.edge.error#DistributionAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlDistributionAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
        case "com.amazon.edge.error#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InconsistentQuantities":
        case "com.amazon.edge.error#InconsistentQuantities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDefaultRootObject":
        case "com.amazon.edge.error#InvalidDefaultRootObject":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidDefaultRootObjectResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidErrorCode":
        case "com.amazon.edge.error#InvalidErrorCode":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidErrorCodeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidForwardCookies":
        case "com.amazon.edge.error#InvalidForwardCookies":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidForwardCookiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGeoRestrictionParameter":
        case "com.amazon.edge.error#InvalidGeoRestrictionParameter":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidGeoRestrictionParameterResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidHeadersForS3Origin":
        case "com.amazon.edge.error#InvalidHeadersForS3Origin":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidHeadersForS3OriginResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaFunctionAssociation":
        case "com.amazon.edge.error#InvalidLambdaFunctionAssociation":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLocationCode":
        case "com.amazon.edge.error#InvalidLocationCode":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidLocationCodeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMinimumProtocolVersion":
        case "com.amazon.edge.error#InvalidMinimumProtocolVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidMinimumProtocolVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOrigin":
        case "com.amazon.edge.error#InvalidOrigin":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOriginAccessIdentity":
        case "com.amazon.edge.error#InvalidOriginAccessIdentity":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOriginKeepaliveTimeout":
        case "com.amazon.edge.error#InvalidOriginKeepaliveTimeout":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOriginReadTimeout":
        case "com.amazon.edge.error#InvalidOriginReadTimeout":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginReadTimeoutResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidProtocolSettings":
        case "com.amazon.edge.error#InvalidProtocolSettings":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidProtocolSettingsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidQueryStringParameters":
        case "com.amazon.edge.error#InvalidQueryStringParameters":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidQueryStringParametersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRelativePath":
        case "com.amazon.edge.error#InvalidRelativePath":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidRelativePathResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequiredProtocol":
        case "com.amazon.edge.error#InvalidRequiredProtocol":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidRequiredProtocolResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResponseCode":
        case "com.amazon.edge.error#InvalidResponseCode":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidResponseCodeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTTLOrder":
        case "com.amazon.edge.error#InvalidTTLOrder":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidTTLOrderResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidViewerCertificate":
        case "com.amazon.edge.error#InvalidViewerCertificate":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidViewerCertificateResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidWebACLId":
        case "com.amazon.edge.error#InvalidWebACLId":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingBody":
        case "com.amazon.edge.error#MissingBody":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazon.edge.error#NoSuchFieldLevelEncryptionConfig":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchOrigin":
        case "com.amazon.edge.error#NoSuchOrigin":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchOriginResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyCacheBehaviors":
        case "com.amazon.edge.error#TooManyCacheBehaviors":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyCacheBehaviorsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyCertificates":
        case "com.amazon.edge.error#TooManyCertificates":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyCertificatesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyCookieNamesInWhiteList":
        case "com.amazon.edge.error#TooManyCookieNamesInWhiteList":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyDistributionCNAMEs":
        case "com.amazon.edge.error#TooManyDistributionCNAMEs":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyDistributionCNAMEsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyDistributions":
        case "com.amazon.edge.error#TooManyDistributions":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyDistributionsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
        case "com.amazon.edge.error#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyDistributionsWithLambdaAssociations":
        case "com.amazon.edge.error#TooManyDistributionsWithLambdaAssociations":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyHeadersInForwardedValues":
        case "com.amazon.edge.error#TooManyHeadersInForwardedValues":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyLambdaFunctionAssociations":
        case "com.amazon.edge.error#TooManyLambdaFunctionAssociations":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyOriginCustomHeaders":
        case "com.amazon.edge.error#TooManyOriginCustomHeaders":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyOriginCustomHeadersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyOriginGroupsPerDistribution":
        case "com.amazon.edge.error#TooManyOriginGroupsPerDistribution":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyOrigins":
        case "com.amazon.edge.error#TooManyOrigins":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyOriginsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyQueryStringParameters":
        case "com.amazon.edge.error#TooManyQueryStringParameters":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyQueryStringParametersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTrustedSigners":
        case "com.amazon.edge.error#TooManyTrustedSigners":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrustedSignerDoesNotExist":
        case "com.amazon.edge.error#TrustedSignerDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateDistributionWithTagsCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateDistributionWithTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateDistributionWithTagsResult",
        Distribution: undefined,
        ETag: undefined,
        Location: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    contents.Distribution = deserializeAws_restXmlDistribution(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateDistributionWithTagsCommand = deserializeAws_restXmlCreateDistributionWithTagsCommand;
async function deserializeAws_restXmlCreateDistributionWithTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CNAMEAlreadyExists":
        case "com.amazon.edge.error#CNAMEAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DistributionAlreadyExists":
        case "com.amazon.edge.error#DistributionAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlDistributionAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
        case "com.amazon.edge.error#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InconsistentQuantities":
        case "com.amazon.edge.error#InconsistentQuantities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDefaultRootObject":
        case "com.amazon.edge.error#InvalidDefaultRootObject":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidDefaultRootObjectResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidErrorCode":
        case "com.amazon.edge.error#InvalidErrorCode":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidErrorCodeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidForwardCookies":
        case "com.amazon.edge.error#InvalidForwardCookies":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidForwardCookiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGeoRestrictionParameter":
        case "com.amazon.edge.error#InvalidGeoRestrictionParameter":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidGeoRestrictionParameterResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidHeadersForS3Origin":
        case "com.amazon.edge.error#InvalidHeadersForS3Origin":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidHeadersForS3OriginResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaFunctionAssociation":
        case "com.amazon.edge.error#InvalidLambdaFunctionAssociation":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLocationCode":
        case "com.amazon.edge.error#InvalidLocationCode":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidLocationCodeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMinimumProtocolVersion":
        case "com.amazon.edge.error#InvalidMinimumProtocolVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidMinimumProtocolVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOrigin":
        case "com.amazon.edge.error#InvalidOrigin":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOriginAccessIdentity":
        case "com.amazon.edge.error#InvalidOriginAccessIdentity":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOriginKeepaliveTimeout":
        case "com.amazon.edge.error#InvalidOriginKeepaliveTimeout":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOriginReadTimeout":
        case "com.amazon.edge.error#InvalidOriginReadTimeout":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginReadTimeoutResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidProtocolSettings":
        case "com.amazon.edge.error#InvalidProtocolSettings":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidProtocolSettingsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidQueryStringParameters":
        case "com.amazon.edge.error#InvalidQueryStringParameters":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidQueryStringParametersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRelativePath":
        case "com.amazon.edge.error#InvalidRelativePath":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidRelativePathResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequiredProtocol":
        case "com.amazon.edge.error#InvalidRequiredProtocol":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidRequiredProtocolResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResponseCode":
        case "com.amazon.edge.error#InvalidResponseCode":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidResponseCodeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTTLOrder":
        case "com.amazon.edge.error#InvalidTTLOrder":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidTTLOrderResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagging":
        case "com.amazon.edge.error#InvalidTagging":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidViewerCertificate":
        case "com.amazon.edge.error#InvalidViewerCertificate":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidViewerCertificateResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidWebACLId":
        case "com.amazon.edge.error#InvalidWebACLId":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingBody":
        case "com.amazon.edge.error#MissingBody":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazon.edge.error#NoSuchFieldLevelEncryptionConfig":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchOrigin":
        case "com.amazon.edge.error#NoSuchOrigin":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchOriginResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyCacheBehaviors":
        case "com.amazon.edge.error#TooManyCacheBehaviors":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyCacheBehaviorsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyCertificates":
        case "com.amazon.edge.error#TooManyCertificates":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyCertificatesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyCookieNamesInWhiteList":
        case "com.amazon.edge.error#TooManyCookieNamesInWhiteList":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyDistributionCNAMEs":
        case "com.amazon.edge.error#TooManyDistributionCNAMEs":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyDistributionCNAMEsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyDistributions":
        case "com.amazon.edge.error#TooManyDistributions":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyDistributionsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
        case "com.amazon.edge.error#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyDistributionsWithLambdaAssociations":
        case "com.amazon.edge.error#TooManyDistributionsWithLambdaAssociations":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyHeadersInForwardedValues":
        case "com.amazon.edge.error#TooManyHeadersInForwardedValues":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyLambdaFunctionAssociations":
        case "com.amazon.edge.error#TooManyLambdaFunctionAssociations":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyOriginCustomHeaders":
        case "com.amazon.edge.error#TooManyOriginCustomHeaders":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyOriginCustomHeadersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyOriginGroupsPerDistribution":
        case "com.amazon.edge.error#TooManyOriginGroupsPerDistribution":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyOrigins":
        case "com.amazon.edge.error#TooManyOrigins":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyOriginsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyQueryStringParameters":
        case "com.amazon.edge.error#TooManyQueryStringParameters":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyQueryStringParametersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTrustedSigners":
        case "com.amazon.edge.error#TooManyTrustedSigners":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrustedSignerDoesNotExist":
        case "com.amazon.edge.error#TrustedSignerDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateFieldLevelEncryptionConfigResult",
        ETag: undefined,
        FieldLevelEncryption: undefined,
        Location: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    contents.FieldLevelEncryption = deserializeAws_restXmlFieldLevelEncryption(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand = deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand;
async function deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FieldLevelEncryptionConfigAlreadyExists":
        case "com.amazon.edge.error#FieldLevelEncryptionConfigAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlFieldLevelEncryptionConfigAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InconsistentQuantities":
        case "com.amazon.edge.error#InconsistentQuantities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchFieldLevelEncryptionProfile":
        case "com.amazon.edge.error#NoSuchFieldLevelEncryptionProfile":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "QueryArgProfileEmpty":
        case "com.amazon.edge.error#QueryArgProfileEmpty":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlQueryArgProfileEmptyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyFieldLevelEncryptionConfigs":
        case "com.amazon.edge.error#TooManyFieldLevelEncryptionConfigs":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyFieldLevelEncryptionConfigsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyFieldLevelEncryptionContentTypeProfiles":
        case "com.amazon.edge.error#TooManyFieldLevelEncryptionContentTypeProfiles":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyFieldLevelEncryptionContentTypeProfilesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyFieldLevelEncryptionQueryArgProfiles":
        case "com.amazon.edge.error#TooManyFieldLevelEncryptionQueryArgProfiles":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyFieldLevelEncryptionQueryArgProfilesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateFieldLevelEncryptionProfileResult",
        ETag: undefined,
        FieldLevelEncryptionProfile: undefined,
        Location: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    contents.FieldLevelEncryptionProfile = deserializeAws_restXmlFieldLevelEncryptionProfile(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand = deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand;
async function deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FieldLevelEncryptionProfileAlreadyExists":
        case "com.amazon.edge.error#FieldLevelEncryptionProfileAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlFieldLevelEncryptionProfileAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FieldLevelEncryptionProfileSizeExceeded":
        case "com.amazon.edge.error#FieldLevelEncryptionProfileSizeExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlFieldLevelEncryptionProfileSizeExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InconsistentQuantities":
        case "com.amazon.edge.error#InconsistentQuantities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchPublicKey":
        case "com.amazon.edge.error#NoSuchPublicKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyFieldLevelEncryptionEncryptionEntities":
        case "com.amazon.edge.error#TooManyFieldLevelEncryptionEncryptionEntities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyFieldLevelEncryptionEncryptionEntitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyFieldLevelEncryptionFieldPatterns":
        case "com.amazon.edge.error#TooManyFieldLevelEncryptionFieldPatterns":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyFieldLevelEncryptionFieldPatternsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyFieldLevelEncryptionProfiles":
        case "com.amazon.edge.error#TooManyFieldLevelEncryptionProfiles":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyFieldLevelEncryptionProfilesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateInvalidationCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateInvalidationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateInvalidationResult",
        Invalidation: undefined,
        Location: undefined
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    contents.Invalidation = deserializeAws_restXmlInvalidation(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateInvalidationCommand = deserializeAws_restXmlCreateInvalidationCommand;
async function deserializeAws_restXmlCreateInvalidationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BatchTooLarge":
        case "com.amazon.edge.error#BatchTooLarge":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlBatchTooLargeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InconsistentQuantities":
        case "com.amazon.edge.error#InconsistentQuantities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingBody":
        case "com.amazon.edge.error#MissingBody":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchDistribution":
        case "com.amazon.edge.error#NoSuchDistribution":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyInvalidationsInProgress":
        case "com.amazon.edge.error#TooManyInvalidationsInProgress":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyInvalidationsInProgressResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreatePublicKeyCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreatePublicKeyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreatePublicKeyResult",
        ETag: undefined,
        Location: undefined,
        PublicKey: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    contents.PublicKey = deserializeAws_restXmlPublicKey(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreatePublicKeyCommand = deserializeAws_restXmlCreatePublicKeyCommand;
async function deserializeAws_restXmlCreatePublicKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PublicKeyAlreadyExists":
        case "com.amazon.edge.error#PublicKeyAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPublicKeyAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyPublicKeys":
        case "com.amazon.edge.error#TooManyPublicKeys":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyPublicKeysResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateStreamingDistributionCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateStreamingDistributionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateStreamingDistributionResult",
        ETag: undefined,
        Location: undefined,
        StreamingDistribution: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateStreamingDistributionCommand = deserializeAws_restXmlCreateStreamingDistributionCommand;
async function deserializeAws_restXmlCreateStreamingDistributionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CNAMEAlreadyExists":
        case "com.amazon.edge.error#CNAMEAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InconsistentQuantities":
        case "com.amazon.edge.error#InconsistentQuantities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOrigin":
        case "com.amazon.edge.error#InvalidOrigin":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOriginAccessIdentity":
        case "com.amazon.edge.error#InvalidOriginAccessIdentity":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingBody":
        case "com.amazon.edge.error#MissingBody":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StreamingDistributionAlreadyExists":
        case "com.amazon.edge.error#StreamingDistributionAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlStreamingDistributionAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyStreamingDistributionCNAMEs":
        case "com.amazon.edge.error#TooManyStreamingDistributionCNAMEs":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyStreamingDistributions":
        case "com.amazon.edge.error#TooManyStreamingDistributions":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyStreamingDistributionsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTrustedSigners":
        case "com.amazon.edge.error#TooManyTrustedSigners":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrustedSignerDoesNotExist":
        case "com.amazon.edge.error#TrustedSignerDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateStreamingDistributionWithTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateStreamingDistributionWithTagsResult",
        ETag: undefined,
        Location: undefined,
        StreamingDistribution: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand = deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand;
async function deserializeAws_restXmlCreateStreamingDistributionWithTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CNAMEAlreadyExists":
        case "com.amazon.edge.error#CNAMEAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InconsistentQuantities":
        case "com.amazon.edge.error#InconsistentQuantities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOrigin":
        case "com.amazon.edge.error#InvalidOrigin":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOriginAccessIdentity":
        case "com.amazon.edge.error#InvalidOriginAccessIdentity":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagging":
        case "com.amazon.edge.error#InvalidTagging":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingBody":
        case "com.amazon.edge.error#MissingBody":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StreamingDistributionAlreadyExists":
        case "com.amazon.edge.error#StreamingDistributionAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlStreamingDistributionAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyStreamingDistributionCNAMEs":
        case "com.amazon.edge.error#TooManyStreamingDistributionCNAMEs":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyStreamingDistributions":
        case "com.amazon.edge.error#TooManyStreamingDistributions":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyStreamingDistributionsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTrustedSigners":
        case "com.amazon.edge.error#TooManyTrustedSigners":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrustedSignerDoesNotExist":
        case "com.amazon.edge.error#TrustedSignerDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand = deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand;
async function deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudFrontOriginAccessIdentityInUse":
        case "com.amazon.edge.error#CloudFrontOriginAccessIdentityInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlCloudFrontOriginAccessIdentityInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIfMatchVersion":
        case "com.amazon.edge.error#InvalidIfMatchVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchCloudFrontOriginAccessIdentity":
        case "com.amazon.edge.error#NoSuchCloudFrontOriginAccessIdentity":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionFailed":
        case "com.amazon.edge.error#PreconditionFailed":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlDeleteDistributionCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteDistributionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteDistributionCommand = deserializeAws_restXmlDeleteDistributionCommand;
async function deserializeAws_restXmlDeleteDistributionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DistributionNotDisabled":
        case "com.amazon.edge.error#DistributionNotDisabled":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlDistributionNotDisabledResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIfMatchVersion":
        case "com.amazon.edge.error#InvalidIfMatchVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchDistribution":
        case "com.amazon.edge.error#NoSuchDistribution":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionFailed":
        case "com.amazon.edge.error#PreconditionFailed":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand = deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand;
async function deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FieldLevelEncryptionConfigInUse":
        case "com.amazon.edge.error#FieldLevelEncryptionConfigInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlFieldLevelEncryptionConfigInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIfMatchVersion":
        case "com.amazon.edge.error#InvalidIfMatchVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazon.edge.error#NoSuchFieldLevelEncryptionConfig":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionFailed":
        case "com.amazon.edge.error#PreconditionFailed":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand = deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand;
async function deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FieldLevelEncryptionProfileInUse":
        case "com.amazon.edge.error#FieldLevelEncryptionProfileInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlFieldLevelEncryptionProfileInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIfMatchVersion":
        case "com.amazon.edge.error#InvalidIfMatchVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchFieldLevelEncryptionProfile":
        case "com.amazon.edge.error#NoSuchFieldLevelEncryptionProfile":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionFailed":
        case "com.amazon.edge.error#PreconditionFailed":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlDeletePublicKeyCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeletePublicKeyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeletePublicKeyCommand = deserializeAws_restXmlDeletePublicKeyCommand;
async function deserializeAws_restXmlDeletePublicKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIfMatchVersion":
        case "com.amazon.edge.error#InvalidIfMatchVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchPublicKey":
        case "com.amazon.edge.error#NoSuchPublicKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionFailed":
        case "com.amazon.edge.error#PreconditionFailed":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PublicKeyInUse":
        case "com.amazon.edge.error#PublicKeyInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPublicKeyInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlDeleteStreamingDistributionCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteStreamingDistributionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteStreamingDistributionCommand = deserializeAws_restXmlDeleteStreamingDistributionCommand;
async function deserializeAws_restXmlDeleteStreamingDistributionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIfMatchVersion":
        case "com.amazon.edge.error#InvalidIfMatchVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchStreamingDistribution":
        case "com.amazon.edge.error#NoSuchStreamingDistribution":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionFailed":
        case "com.amazon.edge.error#PreconditionFailed":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StreamingDistributionNotDisabled":
        case "com.amazon.edge.error#StreamingDistributionNotDisabled":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlStreamingDistributionNotDisabledResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetCloudFrontOriginAccessIdentityResult",
        CloudFrontOriginAccessIdentity: undefined,
        ETag: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.CloudFrontOriginAccessIdentity = deserializeAws_restXmlCloudFrontOriginAccessIdentity(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand = deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand;
async function deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchCloudFrontOriginAccessIdentity":
        case "com.amazon.edge.error#NoSuchCloudFrontOriginAccessIdentity":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetCloudFrontOriginAccessIdentityConfigResult",
        CloudFrontOriginAccessIdentityConfig: undefined,
        ETag: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.CloudFrontOriginAccessIdentityConfig = deserializeAws_restXmlCloudFrontOriginAccessIdentityConfig(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand = deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand;
async function deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchCloudFrontOriginAccessIdentity":
        case "com.amazon.edge.error#NoSuchCloudFrontOriginAccessIdentity":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetDistributionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetDistributionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetDistributionResult",
        Distribution: undefined,
        ETag: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.Distribution = deserializeAws_restXmlDistribution(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetDistributionCommand = deserializeAws_restXmlGetDistributionCommand;
async function deserializeAws_restXmlGetDistributionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchDistribution":
        case "com.amazon.edge.error#NoSuchDistribution":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetDistributionConfigCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetDistributionConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetDistributionConfigResult",
        DistributionConfig: undefined,
        ETag: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.DistributionConfig = deserializeAws_restXmlDistributionConfig(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetDistributionConfigCommand = deserializeAws_restXmlGetDistributionConfigCommand;
async function deserializeAws_restXmlGetDistributionConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchDistribution":
        case "com.amazon.edge.error#NoSuchDistribution":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetFieldLevelEncryptionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetFieldLevelEncryptionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetFieldLevelEncryptionResult",
        ETag: undefined,
        FieldLevelEncryption: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.FieldLevelEncryption = deserializeAws_restXmlFieldLevelEncryption(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetFieldLevelEncryptionCommand = deserializeAws_restXmlGetFieldLevelEncryptionCommand;
async function deserializeAws_restXmlGetFieldLevelEncryptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazon.edge.error#NoSuchFieldLevelEncryptionConfig":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetFieldLevelEncryptionConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetFieldLevelEncryptionConfigResult",
        ETag: undefined,
        FieldLevelEncryptionConfig: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.FieldLevelEncryptionConfig = deserializeAws_restXmlFieldLevelEncryptionConfig(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand = deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand;
async function deserializeAws_restXmlGetFieldLevelEncryptionConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazon.edge.error#NoSuchFieldLevelEncryptionConfig":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetFieldLevelEncryptionProfileCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetFieldLevelEncryptionProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetFieldLevelEncryptionProfileResult",
        ETag: undefined,
        FieldLevelEncryptionProfile: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.FieldLevelEncryptionProfile = deserializeAws_restXmlFieldLevelEncryptionProfile(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetFieldLevelEncryptionProfileCommand = deserializeAws_restXmlGetFieldLevelEncryptionProfileCommand;
async function deserializeAws_restXmlGetFieldLevelEncryptionProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchFieldLevelEncryptionProfile":
        case "com.amazon.edge.error#NoSuchFieldLevelEncryptionProfile":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetFieldLevelEncryptionProfileConfigResult",
        ETag: undefined,
        FieldLevelEncryptionProfileConfig: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.FieldLevelEncryptionProfileConfig = deserializeAws_restXmlFieldLevelEncryptionProfileConfig(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand = deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand;
async function deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchFieldLevelEncryptionProfile":
        case "com.amazon.edge.error#NoSuchFieldLevelEncryptionProfile":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetInvalidationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetInvalidationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetInvalidationResult",
        Invalidation: undefined
    };
    const data = await parseBody(output.body, context);
    contents.Invalidation = deserializeAws_restXmlInvalidation(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetInvalidationCommand = deserializeAws_restXmlGetInvalidationCommand;
async function deserializeAws_restXmlGetInvalidationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchDistribution":
        case "com.amazon.edge.error#NoSuchDistribution":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchInvalidation":
        case "com.amazon.edge.error#NoSuchInvalidation":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchInvalidationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetPublicKeyCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetPublicKeyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetPublicKeyResult",
        ETag: undefined,
        PublicKey: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.PublicKey = deserializeAws_restXmlPublicKey(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetPublicKeyCommand = deserializeAws_restXmlGetPublicKeyCommand;
async function deserializeAws_restXmlGetPublicKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchPublicKey":
        case "com.amazon.edge.error#NoSuchPublicKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetPublicKeyConfigCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetPublicKeyConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetPublicKeyConfigResult",
        ETag: undefined,
        PublicKeyConfig: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.PublicKeyConfig = deserializeAws_restXmlPublicKeyConfig(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetPublicKeyConfigCommand = deserializeAws_restXmlGetPublicKeyConfigCommand;
async function deserializeAws_restXmlGetPublicKeyConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchPublicKey":
        case "com.amazon.edge.error#NoSuchPublicKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetStreamingDistributionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetStreamingDistributionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetStreamingDistributionResult",
        ETag: undefined,
        StreamingDistribution: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetStreamingDistributionCommand = deserializeAws_restXmlGetStreamingDistributionCommand;
async function deserializeAws_restXmlGetStreamingDistributionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchStreamingDistribution":
        case "com.amazon.edge.error#NoSuchStreamingDistribution":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetStreamingDistributionConfigCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetStreamingDistributionConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetStreamingDistributionConfigResult",
        ETag: undefined,
        StreamingDistributionConfig: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.StreamingDistributionConfig = deserializeAws_restXmlStreamingDistributionConfig(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetStreamingDistributionConfigCommand = deserializeAws_restXmlGetStreamingDistributionConfigCommand;
async function deserializeAws_restXmlGetStreamingDistributionConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchStreamingDistribution":
        case "com.amazon.edge.error#NoSuchStreamingDistribution":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListCloudFrontOriginAccessIdentitiesResult",
        CloudFrontOriginAccessIdentityList: undefined
    };
    const data = await parseBody(output.body, context);
    contents.CloudFrontOriginAccessIdentityList = deserializeAws_restXmlCloudFrontOriginAccessIdentityList(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand = deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand;
async function deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListDistributionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListDistributionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListDistributionsResult",
        DistributionList: undefined
    };
    const data = await parseBody(output.body, context);
    contents.DistributionList = deserializeAws_restXmlDistributionList(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListDistributionsCommand = deserializeAws_restXmlListDistributionsCommand;
async function deserializeAws_restXmlListDistributionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListDistributionsByWebACLIdCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListDistributionsByWebACLIdCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListDistributionsByWebACLIdResult",
        DistributionList: undefined
    };
    const data = await parseBody(output.body, context);
    contents.DistributionList = deserializeAws_restXmlDistributionList(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListDistributionsByWebACLIdCommand = deserializeAws_restXmlListDistributionsByWebACLIdCommand;
async function deserializeAws_restXmlListDistributionsByWebACLIdCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidWebACLId":
        case "com.amazon.edge.error#InvalidWebACLId":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListFieldLevelEncryptionConfigsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListFieldLevelEncryptionConfigsResult",
        FieldLevelEncryptionList: undefined
    };
    const data = await parseBody(output.body, context);
    contents.FieldLevelEncryptionList = deserializeAws_restXmlFieldLevelEncryptionList(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand = deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand;
async function deserializeAws_restXmlListFieldLevelEncryptionConfigsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListFieldLevelEncryptionProfilesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListFieldLevelEncryptionProfilesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListFieldLevelEncryptionProfilesResult",
        FieldLevelEncryptionProfileList: undefined
    };
    const data = await parseBody(output.body, context);
    contents.FieldLevelEncryptionProfileList = deserializeAws_restXmlFieldLevelEncryptionProfileList(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListFieldLevelEncryptionProfilesCommand = deserializeAws_restXmlListFieldLevelEncryptionProfilesCommand;
async function deserializeAws_restXmlListFieldLevelEncryptionProfilesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListInvalidationsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListInvalidationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListInvalidationsResult",
        InvalidationList: undefined
    };
    const data = await parseBody(output.body, context);
    contents.InvalidationList = deserializeAws_restXmlInvalidationList(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListInvalidationsCommand = deserializeAws_restXmlListInvalidationsCommand;
async function deserializeAws_restXmlListInvalidationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchDistribution":
        case "com.amazon.edge.error#NoSuchDistribution":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListPublicKeysCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListPublicKeysCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListPublicKeysResult",
        PublicKeyList: undefined
    };
    const data = await parseBody(output.body, context);
    contents.PublicKeyList = deserializeAws_restXmlPublicKeyList(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListPublicKeysCommand = deserializeAws_restXmlListPublicKeysCommand;
async function deserializeAws_restXmlListPublicKeysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListStreamingDistributionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListStreamingDistributionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListStreamingDistributionsResult",
        StreamingDistributionList: undefined
    };
    const data = await parseBody(output.body, context);
    contents.StreamingDistributionList = deserializeAws_restXmlStreamingDistributionList(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListStreamingDistributionsCommand = deserializeAws_restXmlListStreamingDistributionsCommand;
async function deserializeAws_restXmlListStreamingDistributionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListTagsForResourceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListTagsForResourceResult",
        Tags: undefined
    };
    const data = await parseBody(output.body, context);
    contents.Tags = deserializeAws_restXmlTags(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListTagsForResourceCommand = deserializeAws_restXmlListTagsForResourceCommand;
async function deserializeAws_restXmlListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagging":
        case "com.amazon.edge.error#InvalidTagging":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchResource":
        case "com.amazon.edge.error#NoSuchResource":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlTagResourceCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlTagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlTagResourceCommand = deserializeAws_restXmlTagResourceCommand;
async function deserializeAws_restXmlTagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagging":
        case "com.amazon.edge.error#InvalidTagging":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchResource":
        case "com.amazon.edge.error#NoSuchResource":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlUntagResourceCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlUntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUntagResourceCommand = deserializeAws_restXmlUntagResourceCommand;
async function deserializeAws_restXmlUntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagging":
        case "com.amazon.edge.error#InvalidTagging":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchResource":
        case "com.amazon.edge.error#NoSuchResource":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateCloudFrontOriginAccessIdentityResult",
        CloudFrontOriginAccessIdentity: undefined,
        ETag: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.CloudFrontOriginAccessIdentity = deserializeAws_restXmlCloudFrontOriginAccessIdentity(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand = deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand;
async function deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalUpdate":
        case "com.amazon.edge.error#IllegalUpdate":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InconsistentQuantities":
        case "com.amazon.edge.error#InconsistentQuantities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIfMatchVersion":
        case "com.amazon.edge.error#InvalidIfMatchVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingBody":
        case "com.amazon.edge.error#MissingBody":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchCloudFrontOriginAccessIdentity":
        case "com.amazon.edge.error#NoSuchCloudFrontOriginAccessIdentity":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionFailed":
        case "com.amazon.edge.error#PreconditionFailed":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlUpdateDistributionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlUpdateDistributionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateDistributionResult",
        Distribution: undefined,
        ETag: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.Distribution = deserializeAws_restXmlDistribution(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUpdateDistributionCommand = deserializeAws_restXmlUpdateDistributionCommand;
async function deserializeAws_restXmlUpdateDistributionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CNAMEAlreadyExists":
        case "com.amazon.edge.error#CNAMEAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
        case "com.amazon.edge.error#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalUpdate":
        case "com.amazon.edge.error#IllegalUpdate":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InconsistentQuantities":
        case "com.amazon.edge.error#InconsistentQuantities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDefaultRootObject":
        case "com.amazon.edge.error#InvalidDefaultRootObject":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidDefaultRootObjectResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidErrorCode":
        case "com.amazon.edge.error#InvalidErrorCode":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidErrorCodeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidForwardCookies":
        case "com.amazon.edge.error#InvalidForwardCookies":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidForwardCookiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGeoRestrictionParameter":
        case "com.amazon.edge.error#InvalidGeoRestrictionParameter":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidGeoRestrictionParameterResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidHeadersForS3Origin":
        case "com.amazon.edge.error#InvalidHeadersForS3Origin":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidHeadersForS3OriginResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIfMatchVersion":
        case "com.amazon.edge.error#InvalidIfMatchVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaFunctionAssociation":
        case "com.amazon.edge.error#InvalidLambdaFunctionAssociation":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLocationCode":
        case "com.amazon.edge.error#InvalidLocationCode":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidLocationCodeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMinimumProtocolVersion":
        case "com.amazon.edge.error#InvalidMinimumProtocolVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidMinimumProtocolVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOriginAccessIdentity":
        case "com.amazon.edge.error#InvalidOriginAccessIdentity":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOriginKeepaliveTimeout":
        case "com.amazon.edge.error#InvalidOriginKeepaliveTimeout":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOriginReadTimeout":
        case "com.amazon.edge.error#InvalidOriginReadTimeout":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginReadTimeoutResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidQueryStringParameters":
        case "com.amazon.edge.error#InvalidQueryStringParameters":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidQueryStringParametersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRelativePath":
        case "com.amazon.edge.error#InvalidRelativePath":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidRelativePathResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequiredProtocol":
        case "com.amazon.edge.error#InvalidRequiredProtocol":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidRequiredProtocolResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResponseCode":
        case "com.amazon.edge.error#InvalidResponseCode":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidResponseCodeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTTLOrder":
        case "com.amazon.edge.error#InvalidTTLOrder":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidTTLOrderResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidViewerCertificate":
        case "com.amazon.edge.error#InvalidViewerCertificate":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidViewerCertificateResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidWebACLId":
        case "com.amazon.edge.error#InvalidWebACLId":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingBody":
        case "com.amazon.edge.error#MissingBody":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchDistribution":
        case "com.amazon.edge.error#NoSuchDistribution":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazon.edge.error#NoSuchFieldLevelEncryptionConfig":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchOrigin":
        case "com.amazon.edge.error#NoSuchOrigin":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchOriginResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionFailed":
        case "com.amazon.edge.error#PreconditionFailed":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyCacheBehaviors":
        case "com.amazon.edge.error#TooManyCacheBehaviors":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyCacheBehaviorsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyCertificates":
        case "com.amazon.edge.error#TooManyCertificates":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyCertificatesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyCookieNamesInWhiteList":
        case "com.amazon.edge.error#TooManyCookieNamesInWhiteList":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyDistributionCNAMEs":
        case "com.amazon.edge.error#TooManyDistributionCNAMEs":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyDistributionCNAMEsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
        case "com.amazon.edge.error#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyDistributionsWithLambdaAssociations":
        case "com.amazon.edge.error#TooManyDistributionsWithLambdaAssociations":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyHeadersInForwardedValues":
        case "com.amazon.edge.error#TooManyHeadersInForwardedValues":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyLambdaFunctionAssociations":
        case "com.amazon.edge.error#TooManyLambdaFunctionAssociations":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyOriginCustomHeaders":
        case "com.amazon.edge.error#TooManyOriginCustomHeaders":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyOriginCustomHeadersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyOriginGroupsPerDistribution":
        case "com.amazon.edge.error#TooManyOriginGroupsPerDistribution":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyOrigins":
        case "com.amazon.edge.error#TooManyOrigins":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyOriginsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyQueryStringParameters":
        case "com.amazon.edge.error#TooManyQueryStringParameters":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyQueryStringParametersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTrustedSigners":
        case "com.amazon.edge.error#TooManyTrustedSigners":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrustedSignerDoesNotExist":
        case "com.amazon.edge.error#TrustedSignerDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateFieldLevelEncryptionConfigResult",
        ETag: undefined,
        FieldLevelEncryption: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.FieldLevelEncryption = deserializeAws_restXmlFieldLevelEncryption(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand = deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand;
async function deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalUpdate":
        case "com.amazon.edge.error#IllegalUpdate":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InconsistentQuantities":
        case "com.amazon.edge.error#InconsistentQuantities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIfMatchVersion":
        case "com.amazon.edge.error#InvalidIfMatchVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazon.edge.error#NoSuchFieldLevelEncryptionConfig":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchFieldLevelEncryptionProfile":
        case "com.amazon.edge.error#NoSuchFieldLevelEncryptionProfile":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionFailed":
        case "com.amazon.edge.error#PreconditionFailed":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "QueryArgProfileEmpty":
        case "com.amazon.edge.error#QueryArgProfileEmpty":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlQueryArgProfileEmptyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyFieldLevelEncryptionContentTypeProfiles":
        case "com.amazon.edge.error#TooManyFieldLevelEncryptionContentTypeProfiles":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyFieldLevelEncryptionContentTypeProfilesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyFieldLevelEncryptionQueryArgProfiles":
        case "com.amazon.edge.error#TooManyFieldLevelEncryptionQueryArgProfiles":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyFieldLevelEncryptionQueryArgProfilesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateFieldLevelEncryptionProfileResult",
        ETag: undefined,
        FieldLevelEncryptionProfile: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.FieldLevelEncryptionProfile = deserializeAws_restXmlFieldLevelEncryptionProfile(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand = deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand;
async function deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FieldLevelEncryptionProfileAlreadyExists":
        case "com.amazon.edge.error#FieldLevelEncryptionProfileAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlFieldLevelEncryptionProfileAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FieldLevelEncryptionProfileSizeExceeded":
        case "com.amazon.edge.error#FieldLevelEncryptionProfileSizeExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlFieldLevelEncryptionProfileSizeExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalUpdate":
        case "com.amazon.edge.error#IllegalUpdate":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InconsistentQuantities":
        case "com.amazon.edge.error#InconsistentQuantities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIfMatchVersion":
        case "com.amazon.edge.error#InvalidIfMatchVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchFieldLevelEncryptionProfile":
        case "com.amazon.edge.error#NoSuchFieldLevelEncryptionProfile":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchPublicKey":
        case "com.amazon.edge.error#NoSuchPublicKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionFailed":
        case "com.amazon.edge.error#PreconditionFailed":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyFieldLevelEncryptionEncryptionEntities":
        case "com.amazon.edge.error#TooManyFieldLevelEncryptionEncryptionEntities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyFieldLevelEncryptionEncryptionEntitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyFieldLevelEncryptionFieldPatterns":
        case "com.amazon.edge.error#TooManyFieldLevelEncryptionFieldPatterns":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyFieldLevelEncryptionFieldPatternsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlUpdatePublicKeyCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlUpdatePublicKeyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdatePublicKeyResult",
        ETag: undefined,
        PublicKey: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.PublicKey = deserializeAws_restXmlPublicKey(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUpdatePublicKeyCommand = deserializeAws_restXmlUpdatePublicKeyCommand;
async function deserializeAws_restXmlUpdatePublicKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CannotChangeImmutablePublicKeyFields":
        case "com.amazon.edge.error#CannotChangeImmutablePublicKeyFields":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlCannotChangeImmutablePublicKeyFieldsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalUpdate":
        case "com.amazon.edge.error#IllegalUpdate":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIfMatchVersion":
        case "com.amazon.edge.error#InvalidIfMatchVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchPublicKey":
        case "com.amazon.edge.error#NoSuchPublicKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionFailed":
        case "com.amazon.edge.error#PreconditionFailed":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlUpdateStreamingDistributionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlUpdateStreamingDistributionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateStreamingDistributionResult",
        ETag: undefined,
        StreamingDistribution: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    const data = await parseBody(output.body, context);
    contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUpdateStreamingDistributionCommand = deserializeAws_restXmlUpdateStreamingDistributionCommand;
async function deserializeAws_restXmlUpdateStreamingDistributionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazon.edge.error#AccessDenied":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CNAMEAlreadyExists":
        case "com.amazon.edge.error#CNAMEAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IllegalUpdate":
        case "com.amazon.edge.error#IllegalUpdate":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InconsistentQuantities":
        case "com.amazon.edge.error#InconsistentQuantities":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.edge.error#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIfMatchVersion":
        case "com.amazon.edge.error#InvalidIfMatchVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOriginAccessIdentity":
        case "com.amazon.edge.error#InvalidOriginAccessIdentity":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingBody":
        case "com.amazon.edge.error#MissingBody":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchStreamingDistribution":
        case "com.amazon.edge.error#NoSuchStreamingDistribution":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionFailed":
        case "com.amazon.edge.error#PreconditionFailed":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyStreamingDistributionCNAMEs":
        case "com.amazon.edge.error#TooManyStreamingDistributionCNAMEs":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTrustedSigners":
        case "com.amazon.edge.error#TooManyTrustedSigners":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrustedSignerDoesNotExist":
        case "com.amazon.edge.error#TrustedSignerDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_restXmlAccessDeniedResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessDenied",
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
const deserializeAws_restXmlBatchTooLargeResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BatchTooLarge",
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
const deserializeAws_restXmlCNAMEAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "CNAMEAlreadyExists",
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
const deserializeAws_restXmlCannotChangeImmutablePublicKeyFieldsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "CannotChangeImmutablePublicKeyFields",
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
const deserializeAws_restXmlCloudFrontOriginAccessIdentityAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "CloudFrontOriginAccessIdentityAlreadyExists",
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
const deserializeAws_restXmlCloudFrontOriginAccessIdentityInUseResponse = async (parsedOutput, context) => {
    const contents = {
        name: "CloudFrontOriginAccessIdentityInUse",
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
const deserializeAws_restXmlDistributionAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DistributionAlreadyExists",
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
const deserializeAws_restXmlDistributionNotDisabledResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DistributionNotDisabled",
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
const deserializeAws_restXmlFieldLevelEncryptionConfigAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "FieldLevelEncryptionConfigAlreadyExists",
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
const deserializeAws_restXmlFieldLevelEncryptionConfigInUseResponse = async (parsedOutput, context) => {
    const contents = {
        name: "FieldLevelEncryptionConfigInUse",
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
const deserializeAws_restXmlFieldLevelEncryptionProfileAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "FieldLevelEncryptionProfileAlreadyExists",
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
const deserializeAws_restXmlFieldLevelEncryptionProfileInUseResponse = async (parsedOutput, context) => {
    const contents = {
        name: "FieldLevelEncryptionProfileInUse",
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
const deserializeAws_restXmlFieldLevelEncryptionProfileSizeExceededResponse = async (parsedOutput, context) => {
    const contents = {
        name: "FieldLevelEncryptionProfileSizeExceeded",
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
const deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior",
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
const deserializeAws_restXmlIllegalUpdateResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IllegalUpdate",
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
const deserializeAws_restXmlInconsistentQuantitiesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InconsistentQuantities",
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
const deserializeAws_restXmlInvalidArgumentResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidArgument",
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
const deserializeAws_restXmlInvalidDefaultRootObjectResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidDefaultRootObject",
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
const deserializeAws_restXmlInvalidErrorCodeResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidErrorCode",
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
const deserializeAws_restXmlInvalidForwardCookiesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidForwardCookies",
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
const deserializeAws_restXmlInvalidGeoRestrictionParameterResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidGeoRestrictionParameter",
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
const deserializeAws_restXmlInvalidHeadersForS3OriginResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidHeadersForS3Origin",
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
const deserializeAws_restXmlInvalidIfMatchVersionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidIfMatchVersion",
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
const deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidLambdaFunctionAssociation",
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
const deserializeAws_restXmlInvalidLocationCodeResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidLocationCode",
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
const deserializeAws_restXmlInvalidMinimumProtocolVersionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidMinimumProtocolVersion",
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
const deserializeAws_restXmlInvalidOriginResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidOrigin",
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
const deserializeAws_restXmlInvalidOriginAccessIdentityResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidOriginAccessIdentity",
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
const deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidOriginKeepaliveTimeout",
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
const deserializeAws_restXmlInvalidOriginReadTimeoutResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidOriginReadTimeout",
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
const deserializeAws_restXmlInvalidProtocolSettingsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidProtocolSettings",
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
const deserializeAws_restXmlInvalidQueryStringParametersResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidQueryStringParameters",
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
const deserializeAws_restXmlInvalidRelativePathResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRelativePath",
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
const deserializeAws_restXmlInvalidRequiredProtocolResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequiredProtocol",
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
const deserializeAws_restXmlInvalidResponseCodeResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidResponseCode",
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
const deserializeAws_restXmlInvalidTTLOrderResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidTTLOrder",
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
const deserializeAws_restXmlInvalidTaggingResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidTagging",
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
const deserializeAws_restXmlInvalidViewerCertificateResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidViewerCertificate",
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
const deserializeAws_restXmlInvalidWebACLIdResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidWebACLId",
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
const deserializeAws_restXmlMissingBodyResponse = async (parsedOutput, context) => {
    const contents = {
        name: "MissingBody",
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
const deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchCloudFrontOriginAccessIdentity",
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
const deserializeAws_restXmlNoSuchDistributionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchDistribution",
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
const deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchFieldLevelEncryptionConfig",
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
const deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchFieldLevelEncryptionProfile",
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
const deserializeAws_restXmlNoSuchInvalidationResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchInvalidation",
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
const deserializeAws_restXmlNoSuchOriginResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchOrigin",
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
const deserializeAws_restXmlNoSuchPublicKeyResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchPublicKey",
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
const deserializeAws_restXmlNoSuchResourceResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchResource",
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
const deserializeAws_restXmlNoSuchStreamingDistributionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchStreamingDistribution",
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
const deserializeAws_restXmlPreconditionFailedResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PreconditionFailed",
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
const deserializeAws_restXmlPublicKeyAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PublicKeyAlreadyExists",
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
const deserializeAws_restXmlPublicKeyInUseResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PublicKeyInUse",
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
const deserializeAws_restXmlQueryArgProfileEmptyResponse = async (parsedOutput, context) => {
    const contents = {
        name: "QueryArgProfileEmpty",
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
const deserializeAws_restXmlStreamingDistributionAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "StreamingDistributionAlreadyExists",
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
const deserializeAws_restXmlStreamingDistributionNotDisabledResponse = async (parsedOutput, context) => {
    const contents = {
        name: "StreamingDistributionNotDisabled",
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
const deserializeAws_restXmlTooManyCacheBehaviorsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyCacheBehaviors",
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
const deserializeAws_restXmlTooManyCertificatesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyCertificates",
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
const deserializeAws_restXmlTooManyCloudFrontOriginAccessIdentitiesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyCloudFrontOriginAccessIdentities",
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
const deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyCookieNamesInWhiteList",
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
const deserializeAws_restXmlTooManyDistributionCNAMEsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyDistributionCNAMEs",
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
const deserializeAws_restXmlTooManyDistributionsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyDistributions",
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
const deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig",
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
const deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyDistributionsWithLambdaAssociations",
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
const deserializeAws_restXmlTooManyFieldLevelEncryptionConfigsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyFieldLevelEncryptionConfigs",
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
const deserializeAws_restXmlTooManyFieldLevelEncryptionContentTypeProfilesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyFieldLevelEncryptionContentTypeProfiles",
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
const deserializeAws_restXmlTooManyFieldLevelEncryptionEncryptionEntitiesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyFieldLevelEncryptionEncryptionEntities",
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
const deserializeAws_restXmlTooManyFieldLevelEncryptionFieldPatternsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyFieldLevelEncryptionFieldPatterns",
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
const deserializeAws_restXmlTooManyFieldLevelEncryptionProfilesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyFieldLevelEncryptionProfiles",
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
const deserializeAws_restXmlTooManyFieldLevelEncryptionQueryArgProfilesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyFieldLevelEncryptionQueryArgProfiles",
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
const deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyHeadersInForwardedValues",
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
const deserializeAws_restXmlTooManyInvalidationsInProgressResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyInvalidationsInProgress",
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
const deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyLambdaFunctionAssociations",
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
const deserializeAws_restXmlTooManyOriginCustomHeadersResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyOriginCustomHeaders",
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
const deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyOriginGroupsPerDistribution",
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
const deserializeAws_restXmlTooManyOriginsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyOrigins",
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
const deserializeAws_restXmlTooManyPublicKeysResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyPublicKeys",
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
const deserializeAws_restXmlTooManyQueryStringParametersResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyQueryStringParameters",
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
const deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyStreamingDistributionCNAMEs",
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
const deserializeAws_restXmlTooManyStreamingDistributionsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyStreamingDistributions",
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
const deserializeAws_restXmlTooManyTrustedSignersResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyTrustedSigners",
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
const deserializeAws_restXmlTrustedSignerDoesNotExistResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TrustedSignerDoesNotExist",
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
const serializeAws_restXmlAliasList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("CNAME"));
    }
    return collectedNodes;
};
const serializeAws_restXmlAliases = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Aliases");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlAliasList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlAllowedMethods = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AllowedMethods");
    if (input.CachedMethods !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlCachedMethods(input.CachedMethods, context).withName("CachedMethods"));
    }
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlMethodsList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlAwsAccountNumberList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("AwsAccountNumber"));
    }
    return collectedNodes;
};
const serializeAws_restXmlCacheBehavior = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CacheBehavior");
    if (input.AllowedMethods !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlAllowedMethods(input.AllowedMethods, context).withName("AllowedMethods"));
    }
    if (input.Compress !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.Compress)))
            .withName("Compress"));
    }
    if (input.DefaultTTL !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("long")
            .addChildNode(new xml_builder_1.XmlText(String(input.DefaultTTL)))
            .withName("DefaultTTL"));
    }
    if (input.FieldLevelEncryptionId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.FieldLevelEncryptionId))
            .withName("FieldLevelEncryptionId"));
    }
    if (input.ForwardedValues !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlForwardedValues(input.ForwardedValues, context).withName("ForwardedValues"));
    }
    if (input.LambdaFunctionAssociations !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlLambdaFunctionAssociations(input.LambdaFunctionAssociations, context).withName("LambdaFunctionAssociations"));
    }
    if (input.MaxTTL !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("long")
            .addChildNode(new xml_builder_1.XmlText(String(input.MaxTTL)))
            .withName("MaxTTL"));
    }
    if (input.MinTTL !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("long")
            .addChildNode(new xml_builder_1.XmlText(String(input.MinTTL)))
            .withName("MinTTL"));
    }
    if (input.PathPattern !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.PathPattern))
            .withName("PathPattern"));
    }
    if (input.SmoothStreaming !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.SmoothStreaming)))
            .withName("SmoothStreaming"));
    }
    if (input.TargetOriginId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.TargetOriginId))
            .withName("TargetOriginId"));
    }
    if (input.TrustedSigners !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlTrustedSigners(input.TrustedSigners, context).withName("TrustedSigners"));
    }
    if (input.ViewerProtocolPolicy !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ViewerProtocolPolicy")
            .addChildNode(new xml_builder_1.XmlText(input.ViewerProtocolPolicy))
            .withName("ViewerProtocolPolicy"));
    }
    return bodyNode;
};
const serializeAws_restXmlCacheBehaviorList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlCacheBehavior(entry, context);
        collectedNodes.push(node.withName("CacheBehavior"));
    }
    return collectedNodes;
};
const serializeAws_restXmlCacheBehaviors = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CacheBehaviors");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlCacheBehaviorList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlCachedMethods = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CachedMethods");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlMethodsList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlCloudFrontOriginAccessIdentityConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CloudFrontOriginAccessIdentityConfig");
    if (input.CallerReference !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
            .withName("CallerReference"));
    }
    if (input.Comment !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.Comment))
            .withName("Comment"));
    }
    return bodyNode;
};
const serializeAws_restXmlContentTypeProfile = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ContentTypeProfile");
    if (input.ContentType !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.ContentType))
            .withName("ContentType"));
    }
    if (input.Format !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Format")
            .addChildNode(new xml_builder_1.XmlText(input.Format))
            .withName("Format"));
    }
    if (input.ProfileId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.ProfileId))
            .withName("ProfileId"));
    }
    return bodyNode;
};
const serializeAws_restXmlContentTypeProfileConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ContentTypeProfileConfig");
    if (input.ContentTypeProfiles !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlContentTypeProfiles(input.ContentTypeProfiles, context).withName("ContentTypeProfiles"));
    }
    if (input.ForwardWhenContentTypeIsUnknown !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.ForwardWhenContentTypeIsUnknown)))
            .withName("ForwardWhenContentTypeIsUnknown"));
    }
    return bodyNode;
};
const serializeAws_restXmlContentTypeProfileList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlContentTypeProfile(entry, context);
        collectedNodes.push(node.withName("ContentTypeProfile"));
    }
    return collectedNodes;
};
const serializeAws_restXmlContentTypeProfiles = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ContentTypeProfiles");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlContentTypeProfileList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlCookieNameList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("Name"));
    }
    return collectedNodes;
};
const serializeAws_restXmlCookieNames = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CookieNames");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlCookieNameList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlCookiePreference = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CookiePreference");
    if (input.Forward !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ItemSelection")
            .addChildNode(new xml_builder_1.XmlText(input.Forward))
            .withName("Forward"));
    }
    if (input.WhitelistedNames !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlCookieNames(input.WhitelistedNames, context).withName("WhitelistedNames"));
    }
    return bodyNode;
};
const serializeAws_restXmlCustomErrorResponse = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CustomErrorResponse");
    if (input.ErrorCachingMinTTL !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("long")
            .addChildNode(new xml_builder_1.XmlText(String(input.ErrorCachingMinTTL)))
            .withName("ErrorCachingMinTTL"));
    }
    if (input.ErrorCode !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.ErrorCode)))
            .withName("ErrorCode"));
    }
    if (input.ResponseCode !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.ResponseCode))
            .withName("ResponseCode"));
    }
    if (input.ResponsePagePath !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.ResponsePagePath))
            .withName("ResponsePagePath"));
    }
    return bodyNode;
};
const serializeAws_restXmlCustomErrorResponseList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlCustomErrorResponse(entry, context);
        collectedNodes.push(node.withName("CustomErrorResponse"));
    }
    return collectedNodes;
};
const serializeAws_restXmlCustomErrorResponses = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CustomErrorResponses");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlCustomErrorResponseList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlCustomHeaders = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CustomHeaders");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlOriginCustomHeadersList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlCustomOriginConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CustomOriginConfig");
    if (input.HTTPPort !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.HTTPPort)))
            .withName("HTTPPort"));
    }
    if (input.HTTPSPort !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.HTTPSPort)))
            .withName("HTTPSPort"));
    }
    if (input.OriginKeepaliveTimeout !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.OriginKeepaliveTimeout)))
            .withName("OriginKeepaliveTimeout"));
    }
    if (input.OriginProtocolPolicy !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("OriginProtocolPolicy")
            .addChildNode(new xml_builder_1.XmlText(input.OriginProtocolPolicy))
            .withName("OriginProtocolPolicy"));
    }
    if (input.OriginReadTimeout !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.OriginReadTimeout)))
            .withName("OriginReadTimeout"));
    }
    if (input.OriginSslProtocols !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlOriginSslProtocols(input.OriginSslProtocols, context).withName("OriginSslProtocols"));
    }
    return bodyNode;
};
const serializeAws_restXmlDefaultCacheBehavior = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("DefaultCacheBehavior");
    if (input.AllowedMethods !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlAllowedMethods(input.AllowedMethods, context).withName("AllowedMethods"));
    }
    if (input.Compress !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.Compress)))
            .withName("Compress"));
    }
    if (input.DefaultTTL !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("long")
            .addChildNode(new xml_builder_1.XmlText(String(input.DefaultTTL)))
            .withName("DefaultTTL"));
    }
    if (input.FieldLevelEncryptionId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.FieldLevelEncryptionId))
            .withName("FieldLevelEncryptionId"));
    }
    if (input.ForwardedValues !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlForwardedValues(input.ForwardedValues, context).withName("ForwardedValues"));
    }
    if (input.LambdaFunctionAssociations !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlLambdaFunctionAssociations(input.LambdaFunctionAssociations, context).withName("LambdaFunctionAssociations"));
    }
    if (input.MaxTTL !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("long")
            .addChildNode(new xml_builder_1.XmlText(String(input.MaxTTL)))
            .withName("MaxTTL"));
    }
    if (input.MinTTL !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("long")
            .addChildNode(new xml_builder_1.XmlText(String(input.MinTTL)))
            .withName("MinTTL"));
    }
    if (input.SmoothStreaming !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.SmoothStreaming)))
            .withName("SmoothStreaming"));
    }
    if (input.TargetOriginId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.TargetOriginId))
            .withName("TargetOriginId"));
    }
    if (input.TrustedSigners !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlTrustedSigners(input.TrustedSigners, context).withName("TrustedSigners"));
    }
    if (input.ViewerProtocolPolicy !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ViewerProtocolPolicy")
            .addChildNode(new xml_builder_1.XmlText(input.ViewerProtocolPolicy))
            .withName("ViewerProtocolPolicy"));
    }
    return bodyNode;
};
const serializeAws_restXmlDistributionConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("DistributionConfig");
    if (input.Aliases !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlAliases(input.Aliases, context).withName("Aliases"));
    }
    if (input.CacheBehaviors !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlCacheBehaviors(input.CacheBehaviors, context).withName("CacheBehaviors"));
    }
    if (input.CallerReference !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
            .withName("CallerReference"));
    }
    if (input.Comment !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("CommentType")
            .addChildNode(new xml_builder_1.XmlText(input.Comment))
            .withName("Comment"));
    }
    if (input.CustomErrorResponses !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlCustomErrorResponses(input.CustomErrorResponses, context).withName("CustomErrorResponses"));
    }
    if (input.DefaultCacheBehavior !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlDefaultCacheBehavior(input.DefaultCacheBehavior, context).withName("DefaultCacheBehavior"));
    }
    if (input.DefaultRootObject !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.DefaultRootObject))
            .withName("DefaultRootObject"));
    }
    if (input.Enabled !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.Enabled)))
            .withName("Enabled"));
    }
    if (input.HttpVersion !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("HttpVersion")
            .addChildNode(new xml_builder_1.XmlText(input.HttpVersion))
            .withName("HttpVersion"));
    }
    if (input.IsIPV6Enabled !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.IsIPV6Enabled)))
            .withName("IsIPV6Enabled"));
    }
    if (input.Logging !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlLoggingConfig(input.Logging, context).withName("Logging"));
    }
    if (input.OriginGroups !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlOriginGroups(input.OriginGroups, context).withName("OriginGroups"));
    }
    if (input.Origins !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlOrigins(input.Origins, context).withName("Origins"));
    }
    if (input.PriceClass !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("PriceClass")
            .addChildNode(new xml_builder_1.XmlText(input.PriceClass))
            .withName("PriceClass"));
    }
    if (input.Restrictions !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlRestrictions(input.Restrictions, context).withName("Restrictions"));
    }
    if (input.ViewerCertificate !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlViewerCertificate(input.ViewerCertificate, context).withName("ViewerCertificate"));
    }
    if (input.WebACLId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.WebACLId))
            .withName("WebACLId"));
    }
    return bodyNode;
};
const serializeAws_restXmlDistributionConfigWithTags = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("DistributionConfigWithTags");
    if (input.DistributionConfig !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlDistributionConfig(input.DistributionConfig, context).withName("DistributionConfig"));
    }
    if (input.Tags !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlTags(input.Tags, context).withName("Tags"));
    }
    return bodyNode;
};
const serializeAws_restXmlEncryptionEntities = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("EncryptionEntities");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlEncryptionEntityList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlEncryptionEntity = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("EncryptionEntity");
    if (input.FieldPatterns !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlFieldPatterns(input.FieldPatterns, context).withName("FieldPatterns"));
    }
    if (input.ProviderId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.ProviderId))
            .withName("ProviderId"));
    }
    if (input.PublicKeyId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.PublicKeyId))
            .withName("PublicKeyId"));
    }
    return bodyNode;
};
const serializeAws_restXmlEncryptionEntityList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlEncryptionEntity(entry, context);
        collectedNodes.push(node.withName("EncryptionEntity"));
    }
    return collectedNodes;
};
const serializeAws_restXmlFieldLevelEncryptionConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("FieldLevelEncryptionConfig");
    if (input.CallerReference !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
            .withName("CallerReference"));
    }
    if (input.Comment !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.Comment))
            .withName("Comment"));
    }
    if (input.ContentTypeProfileConfig !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlContentTypeProfileConfig(input.ContentTypeProfileConfig, context).withName("ContentTypeProfileConfig"));
    }
    if (input.QueryArgProfileConfig !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlQueryArgProfileConfig(input.QueryArgProfileConfig, context).withName("QueryArgProfileConfig"));
    }
    return bodyNode;
};
const serializeAws_restXmlFieldLevelEncryptionProfileConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("FieldLevelEncryptionProfileConfig");
    if (input.CallerReference !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
            .withName("CallerReference"));
    }
    if (input.Comment !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.Comment))
            .withName("Comment"));
    }
    if (input.EncryptionEntities !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlEncryptionEntities(input.EncryptionEntities, context).withName("EncryptionEntities"));
    }
    if (input.Name !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.Name))
            .withName("Name"));
    }
    return bodyNode;
};
const serializeAws_restXmlFieldPatternList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("FieldPattern"));
    }
    return collectedNodes;
};
const serializeAws_restXmlFieldPatterns = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("FieldPatterns");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlFieldPatternList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlForwardedValues = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ForwardedValues");
    if (input.Cookies !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlCookiePreference(input.Cookies, context).withName("Cookies"));
    }
    if (input.Headers !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlHeaders(input.Headers, context).withName("Headers"));
    }
    if (input.QueryString !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.QueryString)))
            .withName("QueryString"));
    }
    if (input.QueryStringCacheKeys !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlQueryStringCacheKeys(input.QueryStringCacheKeys, context).withName("QueryStringCacheKeys"));
    }
    return bodyNode;
};
const serializeAws_restXmlGeoRestriction = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("GeoRestriction");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlLocationList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    if (input.RestrictionType !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("GeoRestrictionType")
            .addChildNode(new xml_builder_1.XmlText(input.RestrictionType))
            .withName("RestrictionType"));
    }
    return bodyNode;
};
const serializeAws_restXmlHeaderList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("Name"));
    }
    return collectedNodes;
};
const serializeAws_restXmlHeaders = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Headers");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlHeaderList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlInvalidationBatch = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InvalidationBatch");
    if (input.CallerReference !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
            .withName("CallerReference"));
    }
    if (input.Paths !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlPaths(input.Paths, context).withName("Paths"));
    }
    return bodyNode;
};
const serializeAws_restXmlLambdaFunctionAssociation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LambdaFunctionAssociation");
    if (input.EventType !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("EventType")
            .addChildNode(new xml_builder_1.XmlText(input.EventType))
            .withName("EventType"));
    }
    if (input.IncludeBody !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.IncludeBody)))
            .withName("IncludeBody"));
    }
    if (input.LambdaFunctionARN !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("LambdaFunctionARN")
            .addChildNode(new xml_builder_1.XmlText(input.LambdaFunctionARN))
            .withName("LambdaFunctionARN"));
    }
    return bodyNode;
};
const serializeAws_restXmlLambdaFunctionAssociationList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlLambdaFunctionAssociation(entry, context);
        collectedNodes.push(node.withName("LambdaFunctionAssociation"));
    }
    return collectedNodes;
};
const serializeAws_restXmlLambdaFunctionAssociations = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LambdaFunctionAssociations");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlLambdaFunctionAssociationList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlLocationList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("Location"));
    }
    return collectedNodes;
};
const serializeAws_restXmlLoggingConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LoggingConfig");
    if (input.Bucket !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.Bucket))
            .withName("Bucket"));
    }
    if (input.Enabled !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.Enabled)))
            .withName("Enabled"));
    }
    if (input.IncludeCookies !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.IncludeCookies)))
            .withName("IncludeCookies"));
    }
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    return bodyNode;
};
const serializeAws_restXmlMethodsList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("Method").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("Method"));
    }
    return collectedNodes;
};
const serializeAws_restXmlOrigin = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Origin");
    if (input.CustomHeaders !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlCustomHeaders(input.CustomHeaders, context).withName("CustomHeaders"));
    }
    if (input.CustomOriginConfig !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlCustomOriginConfig(input.CustomOriginConfig, context).withName("CustomOriginConfig"));
    }
    if (input.DomainName !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.DomainName))
            .withName("DomainName"));
    }
    if (input.Id !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.Id))
            .withName("Id"));
    }
    if (input.OriginPath !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.OriginPath))
            .withName("OriginPath"));
    }
    if (input.S3OriginConfig !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlS3OriginConfig(input.S3OriginConfig, context).withName("S3OriginConfig"));
    }
    return bodyNode;
};
const serializeAws_restXmlOriginCustomHeader = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginCustomHeader");
    if (input.HeaderName !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.HeaderName))
            .withName("HeaderName"));
    }
    if (input.HeaderValue !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.HeaderValue))
            .withName("HeaderValue"));
    }
    return bodyNode;
};
const serializeAws_restXmlOriginCustomHeadersList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlOriginCustomHeader(entry, context);
        collectedNodes.push(node.withName("OriginCustomHeader"));
    }
    return collectedNodes;
};
const serializeAws_restXmlOriginGroup = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginGroup");
    if (input.FailoverCriteria !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlOriginGroupFailoverCriteria(input.FailoverCriteria, context).withName("FailoverCriteria"));
    }
    if (input.Id !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.Id))
            .withName("Id"));
    }
    if (input.Members !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlOriginGroupMembers(input.Members, context).withName("Members"));
    }
    return bodyNode;
};
const serializeAws_restXmlOriginGroupFailoverCriteria = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginGroupFailoverCriteria");
    if (input.StatusCodes !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlStatusCodes(input.StatusCodes, context).withName("StatusCodes"));
    }
    return bodyNode;
};
const serializeAws_restXmlOriginGroupList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlOriginGroup(entry, context);
        collectedNodes.push(node.withName("OriginGroup"));
    }
    return collectedNodes;
};
const serializeAws_restXmlOriginGroupMember = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginGroupMember");
    if (input.OriginId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.OriginId))
            .withName("OriginId"));
    }
    return bodyNode;
};
const serializeAws_restXmlOriginGroupMemberList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlOriginGroupMember(entry, context);
        collectedNodes.push(node.withName("OriginGroupMember"));
    }
    return collectedNodes;
};
const serializeAws_restXmlOriginGroupMembers = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginGroupMembers");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlOriginGroupMemberList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlOriginGroups = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginGroups");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlOriginGroupList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlOriginList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlOrigin(entry, context);
        collectedNodes.push(node.withName("Origin"));
    }
    return collectedNodes;
};
const serializeAws_restXmlOriginSslProtocols = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginSslProtocols");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlSslProtocolsList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlOrigins = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Origins");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlOriginList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlPathList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("Path"));
    }
    return collectedNodes;
};
const serializeAws_restXmlPaths = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Paths");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlPathList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlPublicKeyConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("PublicKeyConfig");
    if (input.CallerReference !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
            .withName("CallerReference"));
    }
    if (input.Comment !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.Comment))
            .withName("Comment"));
    }
    if (input.EncodedKey !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.EncodedKey))
            .withName("EncodedKey"));
    }
    if (input.Name !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.Name))
            .withName("Name"));
    }
    return bodyNode;
};
const serializeAws_restXmlQueryArgProfile = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("QueryArgProfile");
    if (input.ProfileId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.ProfileId))
            .withName("ProfileId"));
    }
    if (input.QueryArg !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.QueryArg))
            .withName("QueryArg"));
    }
    return bodyNode;
};
const serializeAws_restXmlQueryArgProfileConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("QueryArgProfileConfig");
    if (input.ForwardWhenQueryArgProfileIsUnknown !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.ForwardWhenQueryArgProfileIsUnknown)))
            .withName("ForwardWhenQueryArgProfileIsUnknown"));
    }
    if (input.QueryArgProfiles !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlQueryArgProfiles(input.QueryArgProfiles, context).withName("QueryArgProfiles"));
    }
    return bodyNode;
};
const serializeAws_restXmlQueryArgProfileList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlQueryArgProfile(entry, context);
        collectedNodes.push(node.withName("QueryArgProfile"));
    }
    return collectedNodes;
};
const serializeAws_restXmlQueryArgProfiles = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("QueryArgProfiles");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlQueryArgProfileList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlQueryStringCacheKeys = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("QueryStringCacheKeys");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlQueryStringCacheKeysList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlQueryStringCacheKeysList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("Name"));
    }
    return collectedNodes;
};
const serializeAws_restXmlRestrictions = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Restrictions");
    if (input.GeoRestriction !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlGeoRestriction(input.GeoRestriction, context).withName("GeoRestriction"));
    }
    return bodyNode;
};
const serializeAws_restXmlS3Origin = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3Origin");
    if (input.DomainName !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.DomainName))
            .withName("DomainName"));
    }
    if (input.OriginAccessIdentity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.OriginAccessIdentity))
            .withName("OriginAccessIdentity"));
    }
    return bodyNode;
};
const serializeAws_restXmlS3OriginConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3OriginConfig");
    if (input.OriginAccessIdentity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.OriginAccessIdentity))
            .withName("OriginAccessIdentity"));
    }
    return bodyNode;
};
const serializeAws_restXmlSslProtocolsList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("SslProtocol").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("SslProtocol"));
    }
    return collectedNodes;
};
const serializeAws_restXmlStatusCodeList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("integer").addChildNode(new xml_builder_1.XmlText(String(entry)));
        collectedNodes.push(node.withName("StatusCode"));
    }
    return collectedNodes;
};
const serializeAws_restXmlStatusCodes = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StatusCodes");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlStatusCodeList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlStreamingDistributionConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StreamingDistributionConfig");
    if (input.Aliases !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlAliases(input.Aliases, context).withName("Aliases"));
    }
    if (input.CallerReference !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
            .withName("CallerReference"));
    }
    if (input.Comment !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.Comment))
            .withName("Comment"));
    }
    if (input.Enabled !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.Enabled)))
            .withName("Enabled"));
    }
    if (input.Logging !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlStreamingLoggingConfig(input.Logging, context).withName("Logging"));
    }
    if (input.PriceClass !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("PriceClass")
            .addChildNode(new xml_builder_1.XmlText(input.PriceClass))
            .withName("PriceClass"));
    }
    if (input.S3Origin !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlS3Origin(input.S3Origin, context).withName("S3Origin"));
    }
    if (input.TrustedSigners !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlTrustedSigners(input.TrustedSigners, context).withName("TrustedSigners"));
    }
    return bodyNode;
};
const serializeAws_restXmlStreamingDistributionConfigWithTags = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StreamingDistributionConfigWithTags");
    if (input.StreamingDistributionConfig !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context).withName("StreamingDistributionConfig"));
    }
    if (input.Tags !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlTags(input.Tags, context).withName("Tags"));
    }
    return bodyNode;
};
const serializeAws_restXmlStreamingLoggingConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StreamingLoggingConfig");
    if (input.Bucket !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.Bucket))
            .withName("Bucket"));
    }
    if (input.Enabled !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.Enabled)))
            .withName("Enabled"));
    }
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    return bodyNode;
};
const serializeAws_restXmlTag = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Tag");
    if (input.Key !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TagKey")
            .addChildNode(new xml_builder_1.XmlText(input.Key))
            .withName("Key"));
    }
    if (input.Value !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TagValue")
            .addChildNode(new xml_builder_1.XmlText(input.Value))
            .withName("Value"));
    }
    return bodyNode;
};
const serializeAws_restXmlTagKeyList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("TagKey").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("Key"));
    }
    return collectedNodes;
};
const serializeAws_restXmlTagKeys = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("TagKeys");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlTagKeyList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlTagList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlTag(entry, context);
        collectedNodes.push(node.withName("Tag"));
    }
    return collectedNodes;
};
const serializeAws_restXmlTags = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Tags");
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlTagList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlTrustedSigners = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("TrustedSigners");
    if (input.Enabled !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.Enabled)))
            .withName("Enabled"));
    }
    if (input.Items !== undefined) {
        const nodes = serializeAws_restXmlAwsAccountNumberList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Quantity !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("integer")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
            .withName("Quantity"));
    }
    return bodyNode;
};
const serializeAws_restXmlViewerCertificate = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ViewerCertificate");
    if (input.ACMCertificateArn !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.ACMCertificateArn))
            .withName("ACMCertificateArn"));
    }
    if (input.Certificate !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.Certificate))
            .withName("Certificate"));
    }
    if (input.CertificateSource !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("CertificateSource")
            .addChildNode(new xml_builder_1.XmlText(input.CertificateSource))
            .withName("CertificateSource"));
    }
    if (input.CloudFrontDefaultCertificate !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("boolean")
            .addChildNode(new xml_builder_1.XmlText(String(input.CloudFrontDefaultCertificate)))
            .withName("CloudFrontDefaultCertificate"));
    }
    if (input.IAMCertificateId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("string")
            .addChildNode(new xml_builder_1.XmlText(input.IAMCertificateId))
            .withName("IAMCertificateId"));
    }
    if (input.MinimumProtocolVersion !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("MinimumProtocolVersion")
            .addChildNode(new xml_builder_1.XmlText(input.MinimumProtocolVersion))
            .withName("MinimumProtocolVersion"));
    }
    if (input.SSLSupportMethod !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("SSLSupportMethod")
            .addChildNode(new xml_builder_1.XmlText(input.SSLSupportMethod))
            .withName("SSLSupportMethod"));
    }
    return bodyNode;
};
const deserializeAws_restXmlActiveTrustedSigners = (output, context) => {
    let contents = {
        __type: "ActiveTrustedSigners",
        Enabled: undefined,
        Items: undefined,
        Quantity: undefined
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["Signer"] !== undefined) {
        const wrappedItem = output["Items"]["Signer"] instanceof Array
            ? output["Items"]["Signer"]
            : [output["Items"]["Signer"]];
        contents.Items = deserializeAws_restXmlSignerList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlAliasICPRecordal = (output, context) => {
    let contents = {
        __type: "AliasICPRecordal",
        CNAME: undefined,
        ICPRecordalStatus: undefined
    };
    if (output["CNAME"] !== undefined) {
        contents.CNAME = output["CNAME"];
    }
    if (output["ICPRecordalStatus"] !== undefined) {
        contents.ICPRecordalStatus = output["ICPRecordalStatus"];
    }
    return contents;
};
const deserializeAws_restXmlAliasICPRecordals = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlAliasICPRecordal(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlAliasList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlAliases = (output, context) => {
    let contents = {
        __type: "Aliases",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined && output["Items"]["CNAME"] !== undefined) {
        const wrappedItem = output["Items"]["CNAME"] instanceof Array
            ? output["Items"]["CNAME"]
            : [output["Items"]["CNAME"]];
        contents.Items = deserializeAws_restXmlAliasList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlAllowedMethods = (output, context) => {
    let contents = {
        __type: "AllowedMethods",
        CachedMethods: undefined,
        Items: undefined,
        Quantity: undefined
    };
    if (output["CachedMethods"] !== undefined) {
        contents.CachedMethods = deserializeAws_restXmlCachedMethods(output["CachedMethods"], context);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["Method"] !== undefined) {
        const wrappedItem = output["Items"]["Method"] instanceof Array
            ? output["Items"]["Method"]
            : [output["Items"]["Method"]];
        contents.Items = deserializeAws_restXmlMethodsList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlAwsAccountNumberList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlCacheBehavior = (output, context) => {
    let contents = {
        __type: "CacheBehavior",
        AllowedMethods: undefined,
        Compress: undefined,
        DefaultTTL: undefined,
        FieldLevelEncryptionId: undefined,
        ForwardedValues: undefined,
        LambdaFunctionAssociations: undefined,
        MaxTTL: undefined,
        MinTTL: undefined,
        PathPattern: undefined,
        SmoothStreaming: undefined,
        TargetOriginId: undefined,
        TrustedSigners: undefined,
        ViewerProtocolPolicy: undefined
    };
    if (output["AllowedMethods"] !== undefined) {
        contents.AllowedMethods = deserializeAws_restXmlAllowedMethods(output["AllowedMethods"], context);
    }
    if (output["Compress"] !== undefined) {
        contents.Compress = output["Compress"] == "true";
    }
    if (output["DefaultTTL"] !== undefined) {
        contents.DefaultTTL = parseInt(output["DefaultTTL"]);
    }
    if (output["FieldLevelEncryptionId"] !== undefined) {
        contents.FieldLevelEncryptionId = output["FieldLevelEncryptionId"];
    }
    if (output["ForwardedValues"] !== undefined) {
        contents.ForwardedValues = deserializeAws_restXmlForwardedValues(output["ForwardedValues"], context);
    }
    if (output["LambdaFunctionAssociations"] !== undefined) {
        contents.LambdaFunctionAssociations = deserializeAws_restXmlLambdaFunctionAssociations(output["LambdaFunctionAssociations"], context);
    }
    if (output["MaxTTL"] !== undefined) {
        contents.MaxTTL = parseInt(output["MaxTTL"]);
    }
    if (output["MinTTL"] !== undefined) {
        contents.MinTTL = parseInt(output["MinTTL"]);
    }
    if (output["PathPattern"] !== undefined) {
        contents.PathPattern = output["PathPattern"];
    }
    if (output["SmoothStreaming"] !== undefined) {
        contents.SmoothStreaming = output["SmoothStreaming"] == "true";
    }
    if (output["TargetOriginId"] !== undefined) {
        contents.TargetOriginId = output["TargetOriginId"];
    }
    if (output["TrustedSigners"] !== undefined) {
        contents.TrustedSigners = deserializeAws_restXmlTrustedSigners(output["TrustedSigners"], context);
    }
    if (output["ViewerProtocolPolicy"] !== undefined) {
        contents.ViewerProtocolPolicy = output["ViewerProtocolPolicy"];
    }
    return contents;
};
const deserializeAws_restXmlCacheBehaviorList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlCacheBehavior(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlCacheBehaviors = (output, context) => {
    let contents = {
        __type: "CacheBehaviors",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["CacheBehavior"] !== undefined) {
        const wrappedItem = output["Items"]["CacheBehavior"] instanceof Array
            ? output["Items"]["CacheBehavior"]
            : [output["Items"]["CacheBehavior"]];
        contents.Items = deserializeAws_restXmlCacheBehaviorList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlCachedMethods = (output, context) => {
    let contents = {
        __type: "CachedMethods",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["Method"] !== undefined) {
        const wrappedItem = output["Items"]["Method"] instanceof Array
            ? output["Items"]["Method"]
            : [output["Items"]["Method"]];
        contents.Items = deserializeAws_restXmlMethodsList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlCloudFrontOriginAccessIdentity = (output, context) => {
    let contents = {
        __type: "CloudFrontOriginAccessIdentity",
        CloudFrontOriginAccessIdentityConfig: undefined,
        Id: undefined,
        S3CanonicalUserId: undefined
    };
    if (output["CloudFrontOriginAccessIdentityConfig"] !== undefined) {
        contents.CloudFrontOriginAccessIdentityConfig = deserializeAws_restXmlCloudFrontOriginAccessIdentityConfig(output["CloudFrontOriginAccessIdentityConfig"], context);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["S3CanonicalUserId"] !== undefined) {
        contents.S3CanonicalUserId = output["S3CanonicalUserId"];
    }
    return contents;
};
const deserializeAws_restXmlCloudFrontOriginAccessIdentityConfig = (output, context) => {
    let contents = {
        __type: "CloudFrontOriginAccessIdentityConfig",
        CallerReference: undefined,
        Comment: undefined
    };
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = output["CallerReference"];
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    return contents;
};
const deserializeAws_restXmlCloudFrontOriginAccessIdentityList = (output, context) => {
    let contents = {
        __type: "CloudFrontOriginAccessIdentityList",
        IsTruncated: undefined,
        Items: undefined,
        Marker: undefined,
        MaxItems: undefined,
        NextMarker: undefined,
        Quantity: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["CloudFrontOriginAccessIdentitySummary"] !== undefined) {
        const wrappedItem = output["Items"]["CloudFrontOriginAccessIdentitySummary"] instanceof Array
            ? output["Items"]["CloudFrontOriginAccessIdentitySummary"]
            : [output["Items"]["CloudFrontOriginAccessIdentitySummary"]];
        contents.Items = deserializeAws_restXmlCloudFrontOriginAccessIdentitySummaryList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(output["MaxItems"]);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlCloudFrontOriginAccessIdentitySummary = (output, context) => {
    let contents = {
        __type: "CloudFrontOriginAccessIdentitySummary",
        Comment: undefined,
        Id: undefined,
        S3CanonicalUserId: undefined
    };
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["S3CanonicalUserId"] !== undefined) {
        contents.S3CanonicalUserId = output["S3CanonicalUserId"];
    }
    return contents;
};
const deserializeAws_restXmlCloudFrontOriginAccessIdentitySummaryList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlCloudFrontOriginAccessIdentitySummary(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlContentTypeProfile = (output, context) => {
    let contents = {
        __type: "ContentTypeProfile",
        ContentType: undefined,
        Format: undefined,
        ProfileId: undefined
    };
    if (output["ContentType"] !== undefined) {
        contents.ContentType = output["ContentType"];
    }
    if (output["Format"] !== undefined) {
        contents.Format = output["Format"];
    }
    if (output["ProfileId"] !== undefined) {
        contents.ProfileId = output["ProfileId"];
    }
    return contents;
};
const deserializeAws_restXmlContentTypeProfileConfig = (output, context) => {
    let contents = {
        __type: "ContentTypeProfileConfig",
        ContentTypeProfiles: undefined,
        ForwardWhenContentTypeIsUnknown: undefined
    };
    if (output["ContentTypeProfiles"] !== undefined) {
        contents.ContentTypeProfiles = deserializeAws_restXmlContentTypeProfiles(output["ContentTypeProfiles"], context);
    }
    if (output["ForwardWhenContentTypeIsUnknown"] !== undefined) {
        contents.ForwardWhenContentTypeIsUnknown =
            output["ForwardWhenContentTypeIsUnknown"] == "true";
    }
    return contents;
};
const deserializeAws_restXmlContentTypeProfileList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlContentTypeProfile(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlContentTypeProfiles = (output, context) => {
    let contents = {
        __type: "ContentTypeProfiles",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["ContentTypeProfile"] !== undefined) {
        const wrappedItem = output["Items"]["ContentTypeProfile"] instanceof Array
            ? output["Items"]["ContentTypeProfile"]
            : [output["Items"]["ContentTypeProfile"]];
        contents.Items = deserializeAws_restXmlContentTypeProfileList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlCookieNameList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlCookieNames = (output, context) => {
    let contents = {
        __type: "CookieNames",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
        const wrappedItem = output["Items"]["Name"] instanceof Array
            ? output["Items"]["Name"]
            : [output["Items"]["Name"]];
        contents.Items = deserializeAws_restXmlCookieNameList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlCookiePreference = (output, context) => {
    let contents = {
        __type: "CookiePreference",
        Forward: undefined,
        WhitelistedNames: undefined
    };
    if (output["Forward"] !== undefined) {
        contents.Forward = output["Forward"];
    }
    if (output["WhitelistedNames"] !== undefined) {
        contents.WhitelistedNames = deserializeAws_restXmlCookieNames(output["WhitelistedNames"], context);
    }
    return contents;
};
const deserializeAws_restXmlCustomErrorResponse = (output, context) => {
    let contents = {
        __type: "CustomErrorResponse",
        ErrorCachingMinTTL: undefined,
        ErrorCode: undefined,
        ResponseCode: undefined,
        ResponsePagePath: undefined
    };
    if (output["ErrorCachingMinTTL"] !== undefined) {
        contents.ErrorCachingMinTTL = parseInt(output["ErrorCachingMinTTL"]);
    }
    if (output["ErrorCode"] !== undefined) {
        contents.ErrorCode = parseInt(output["ErrorCode"]);
    }
    if (output["ResponseCode"] !== undefined) {
        contents.ResponseCode = output["ResponseCode"];
    }
    if (output["ResponsePagePath"] !== undefined) {
        contents.ResponsePagePath = output["ResponsePagePath"];
    }
    return contents;
};
const deserializeAws_restXmlCustomErrorResponseList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlCustomErrorResponse(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlCustomErrorResponses = (output, context) => {
    let contents = {
        __type: "CustomErrorResponses",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["CustomErrorResponse"] !== undefined) {
        const wrappedItem = output["Items"]["CustomErrorResponse"] instanceof Array
            ? output["Items"]["CustomErrorResponse"]
            : [output["Items"]["CustomErrorResponse"]];
        contents.Items = deserializeAws_restXmlCustomErrorResponseList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlCustomHeaders = (output, context) => {
    let contents = {
        __type: "CustomHeaders",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["OriginCustomHeader"] !== undefined) {
        const wrappedItem = output["Items"]["OriginCustomHeader"] instanceof Array
            ? output["Items"]["OriginCustomHeader"]
            : [output["Items"]["OriginCustomHeader"]];
        contents.Items = deserializeAws_restXmlOriginCustomHeadersList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlCustomOriginConfig = (output, context) => {
    let contents = {
        __type: "CustomOriginConfig",
        HTTPPort: undefined,
        HTTPSPort: undefined,
        OriginKeepaliveTimeout: undefined,
        OriginProtocolPolicy: undefined,
        OriginReadTimeout: undefined,
        OriginSslProtocols: undefined
    };
    if (output["HTTPPort"] !== undefined) {
        contents.HTTPPort = parseInt(output["HTTPPort"]);
    }
    if (output["HTTPSPort"] !== undefined) {
        contents.HTTPSPort = parseInt(output["HTTPSPort"]);
    }
    if (output["OriginKeepaliveTimeout"] !== undefined) {
        contents.OriginKeepaliveTimeout = parseInt(output["OriginKeepaliveTimeout"]);
    }
    if (output["OriginProtocolPolicy"] !== undefined) {
        contents.OriginProtocolPolicy = output["OriginProtocolPolicy"];
    }
    if (output["OriginReadTimeout"] !== undefined) {
        contents.OriginReadTimeout = parseInt(output["OriginReadTimeout"]);
    }
    if (output["OriginSslProtocols"] !== undefined) {
        contents.OriginSslProtocols = deserializeAws_restXmlOriginSslProtocols(output["OriginSslProtocols"], context);
    }
    return contents;
};
const deserializeAws_restXmlDefaultCacheBehavior = (output, context) => {
    let contents = {
        __type: "DefaultCacheBehavior",
        AllowedMethods: undefined,
        Compress: undefined,
        DefaultTTL: undefined,
        FieldLevelEncryptionId: undefined,
        ForwardedValues: undefined,
        LambdaFunctionAssociations: undefined,
        MaxTTL: undefined,
        MinTTL: undefined,
        SmoothStreaming: undefined,
        TargetOriginId: undefined,
        TrustedSigners: undefined,
        ViewerProtocolPolicy: undefined
    };
    if (output["AllowedMethods"] !== undefined) {
        contents.AllowedMethods = deserializeAws_restXmlAllowedMethods(output["AllowedMethods"], context);
    }
    if (output["Compress"] !== undefined) {
        contents.Compress = output["Compress"] == "true";
    }
    if (output["DefaultTTL"] !== undefined) {
        contents.DefaultTTL = parseInt(output["DefaultTTL"]);
    }
    if (output["FieldLevelEncryptionId"] !== undefined) {
        contents.FieldLevelEncryptionId = output["FieldLevelEncryptionId"];
    }
    if (output["ForwardedValues"] !== undefined) {
        contents.ForwardedValues = deserializeAws_restXmlForwardedValues(output["ForwardedValues"], context);
    }
    if (output["LambdaFunctionAssociations"] !== undefined) {
        contents.LambdaFunctionAssociations = deserializeAws_restXmlLambdaFunctionAssociations(output["LambdaFunctionAssociations"], context);
    }
    if (output["MaxTTL"] !== undefined) {
        contents.MaxTTL = parseInt(output["MaxTTL"]);
    }
    if (output["MinTTL"] !== undefined) {
        contents.MinTTL = parseInt(output["MinTTL"]);
    }
    if (output["SmoothStreaming"] !== undefined) {
        contents.SmoothStreaming = output["SmoothStreaming"] == "true";
    }
    if (output["TargetOriginId"] !== undefined) {
        contents.TargetOriginId = output["TargetOriginId"];
    }
    if (output["TrustedSigners"] !== undefined) {
        contents.TrustedSigners = deserializeAws_restXmlTrustedSigners(output["TrustedSigners"], context);
    }
    if (output["ViewerProtocolPolicy"] !== undefined) {
        contents.ViewerProtocolPolicy = output["ViewerProtocolPolicy"];
    }
    return contents;
};
const deserializeAws_restXmlDistribution = (output, context) => {
    let contents = {
        __type: "Distribution",
        ARN: undefined,
        ActiveTrustedSigners: undefined,
        AliasICPRecordals: undefined,
        DistributionConfig: undefined,
        DomainName: undefined,
        Id: undefined,
        InProgressInvalidationBatches: undefined,
        LastModifiedTime: undefined,
        Status: undefined
    };
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    if (output["ActiveTrustedSigners"] !== undefined) {
        contents.ActiveTrustedSigners = deserializeAws_restXmlActiveTrustedSigners(output["ActiveTrustedSigners"], context);
    }
    if (output.AliasICPRecordals === "") {
        contents.AliasICPRecordals = [];
    }
    if (output["AliasICPRecordals"] !== undefined &&
        output["AliasICPRecordals"]["AliasICPRecordal"] !== undefined) {
        const wrappedItem = output["AliasICPRecordals"]["AliasICPRecordal"] instanceof Array
            ? output["AliasICPRecordals"]["AliasICPRecordal"]
            : [output["AliasICPRecordals"]["AliasICPRecordal"]];
        contents.AliasICPRecordals = deserializeAws_restXmlAliasICPRecordals(wrappedItem, context);
    }
    if (output["DistributionConfig"] !== undefined) {
        contents.DistributionConfig = deserializeAws_restXmlDistributionConfig(output["DistributionConfig"], context);
    }
    if (output["DomainName"] !== undefined) {
        contents.DomainName = output["DomainName"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["InProgressInvalidationBatches"] !== undefined) {
        contents.InProgressInvalidationBatches = parseInt(output["InProgressInvalidationBatches"]);
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_restXmlDistributionConfig = (output, context) => {
    let contents = {
        __type: "DistributionConfig",
        Aliases: undefined,
        CacheBehaviors: undefined,
        CallerReference: undefined,
        Comment: undefined,
        CustomErrorResponses: undefined,
        DefaultCacheBehavior: undefined,
        DefaultRootObject: undefined,
        Enabled: undefined,
        HttpVersion: undefined,
        IsIPV6Enabled: undefined,
        Logging: undefined,
        OriginGroups: undefined,
        Origins: undefined,
        PriceClass: undefined,
        Restrictions: undefined,
        ViewerCertificate: undefined,
        WebACLId: undefined
    };
    if (output["Aliases"] !== undefined) {
        contents.Aliases = deserializeAws_restXmlAliases(output["Aliases"], context);
    }
    if (output["CacheBehaviors"] !== undefined) {
        contents.CacheBehaviors = deserializeAws_restXmlCacheBehaviors(output["CacheBehaviors"], context);
    }
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = output["CallerReference"];
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["CustomErrorResponses"] !== undefined) {
        contents.CustomErrorResponses = deserializeAws_restXmlCustomErrorResponses(output["CustomErrorResponses"], context);
    }
    if (output["DefaultCacheBehavior"] !== undefined) {
        contents.DefaultCacheBehavior = deserializeAws_restXmlDefaultCacheBehavior(output["DefaultCacheBehavior"], context);
    }
    if (output["DefaultRootObject"] !== undefined) {
        contents.DefaultRootObject = output["DefaultRootObject"];
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["HttpVersion"] !== undefined) {
        contents.HttpVersion = output["HttpVersion"];
    }
    if (output["IsIPV6Enabled"] !== undefined) {
        contents.IsIPV6Enabled = output["IsIPV6Enabled"] == "true";
    }
    if (output["Logging"] !== undefined) {
        contents.Logging = deserializeAws_restXmlLoggingConfig(output["Logging"], context);
    }
    if (output["OriginGroups"] !== undefined) {
        contents.OriginGroups = deserializeAws_restXmlOriginGroups(output["OriginGroups"], context);
    }
    if (output["Origins"] !== undefined) {
        contents.Origins = deserializeAws_restXmlOrigins(output["Origins"], context);
    }
    if (output["PriceClass"] !== undefined) {
        contents.PriceClass = output["PriceClass"];
    }
    if (output["Restrictions"] !== undefined) {
        contents.Restrictions = deserializeAws_restXmlRestrictions(output["Restrictions"], context);
    }
    if (output["ViewerCertificate"] !== undefined) {
        contents.ViewerCertificate = deserializeAws_restXmlViewerCertificate(output["ViewerCertificate"], context);
    }
    if (output["WebACLId"] !== undefined) {
        contents.WebACLId = output["WebACLId"];
    }
    return contents;
};
const deserializeAws_restXmlDistributionList = (output, context) => {
    let contents = {
        __type: "DistributionList",
        IsTruncated: undefined,
        Items: undefined,
        Marker: undefined,
        MaxItems: undefined,
        NextMarker: undefined,
        Quantity: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["DistributionSummary"] !== undefined) {
        const wrappedItem = output["Items"]["DistributionSummary"] instanceof Array
            ? output["Items"]["DistributionSummary"]
            : [output["Items"]["DistributionSummary"]];
        contents.Items = deserializeAws_restXmlDistributionSummaryList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(output["MaxItems"]);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlDistributionSummary = (output, context) => {
    let contents = {
        __type: "DistributionSummary",
        ARN: undefined,
        AliasICPRecordals: undefined,
        Aliases: undefined,
        CacheBehaviors: undefined,
        Comment: undefined,
        CustomErrorResponses: undefined,
        DefaultCacheBehavior: undefined,
        DomainName: undefined,
        Enabled: undefined,
        HttpVersion: undefined,
        Id: undefined,
        IsIPV6Enabled: undefined,
        LastModifiedTime: undefined,
        OriginGroups: undefined,
        Origins: undefined,
        PriceClass: undefined,
        Restrictions: undefined,
        Status: undefined,
        ViewerCertificate: undefined,
        WebACLId: undefined
    };
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    if (output.AliasICPRecordals === "") {
        contents.AliasICPRecordals = [];
    }
    if (output["AliasICPRecordals"] !== undefined &&
        output["AliasICPRecordals"]["AliasICPRecordal"] !== undefined) {
        const wrappedItem = output["AliasICPRecordals"]["AliasICPRecordal"] instanceof Array
            ? output["AliasICPRecordals"]["AliasICPRecordal"]
            : [output["AliasICPRecordals"]["AliasICPRecordal"]];
        contents.AliasICPRecordals = deserializeAws_restXmlAliasICPRecordals(wrappedItem, context);
    }
    if (output["Aliases"] !== undefined) {
        contents.Aliases = deserializeAws_restXmlAliases(output["Aliases"], context);
    }
    if (output["CacheBehaviors"] !== undefined) {
        contents.CacheBehaviors = deserializeAws_restXmlCacheBehaviors(output["CacheBehaviors"], context);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["CustomErrorResponses"] !== undefined) {
        contents.CustomErrorResponses = deserializeAws_restXmlCustomErrorResponses(output["CustomErrorResponses"], context);
    }
    if (output["DefaultCacheBehavior"] !== undefined) {
        contents.DefaultCacheBehavior = deserializeAws_restXmlDefaultCacheBehavior(output["DefaultCacheBehavior"], context);
    }
    if (output["DomainName"] !== undefined) {
        contents.DomainName = output["DomainName"];
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["HttpVersion"] !== undefined) {
        contents.HttpVersion = output["HttpVersion"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["IsIPV6Enabled"] !== undefined) {
        contents.IsIPV6Enabled = output["IsIPV6Enabled"] == "true";
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
    }
    if (output["OriginGroups"] !== undefined) {
        contents.OriginGroups = deserializeAws_restXmlOriginGroups(output["OriginGroups"], context);
    }
    if (output["Origins"] !== undefined) {
        contents.Origins = deserializeAws_restXmlOrigins(output["Origins"], context);
    }
    if (output["PriceClass"] !== undefined) {
        contents.PriceClass = output["PriceClass"];
    }
    if (output["Restrictions"] !== undefined) {
        contents.Restrictions = deserializeAws_restXmlRestrictions(output["Restrictions"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["ViewerCertificate"] !== undefined) {
        contents.ViewerCertificate = deserializeAws_restXmlViewerCertificate(output["ViewerCertificate"], context);
    }
    if (output["WebACLId"] !== undefined) {
        contents.WebACLId = output["WebACLId"];
    }
    return contents;
};
const deserializeAws_restXmlDistributionSummaryList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlDistributionSummary(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlEncryptionEntities = (output, context) => {
    let contents = {
        __type: "EncryptionEntities",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["EncryptionEntity"] !== undefined) {
        const wrappedItem = output["Items"]["EncryptionEntity"] instanceof Array
            ? output["Items"]["EncryptionEntity"]
            : [output["Items"]["EncryptionEntity"]];
        contents.Items = deserializeAws_restXmlEncryptionEntityList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlEncryptionEntity = (output, context) => {
    let contents = {
        __type: "EncryptionEntity",
        FieldPatterns: undefined,
        ProviderId: undefined,
        PublicKeyId: undefined
    };
    if (output["FieldPatterns"] !== undefined) {
        contents.FieldPatterns = deserializeAws_restXmlFieldPatterns(output["FieldPatterns"], context);
    }
    if (output["ProviderId"] !== undefined) {
        contents.ProviderId = output["ProviderId"];
    }
    if (output["PublicKeyId"] !== undefined) {
        contents.PublicKeyId = output["PublicKeyId"];
    }
    return contents;
};
const deserializeAws_restXmlEncryptionEntityList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlEncryptionEntity(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlFieldLevelEncryption = (output, context) => {
    let contents = {
        __type: "FieldLevelEncryption",
        FieldLevelEncryptionConfig: undefined,
        Id: undefined,
        LastModifiedTime: undefined
    };
    if (output["FieldLevelEncryptionConfig"] !== undefined) {
        contents.FieldLevelEncryptionConfig = deserializeAws_restXmlFieldLevelEncryptionConfig(output["FieldLevelEncryptionConfig"], context);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
    }
    return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionConfig = (output, context) => {
    let contents = {
        __type: "FieldLevelEncryptionConfig",
        CallerReference: undefined,
        Comment: undefined,
        ContentTypeProfileConfig: undefined,
        QueryArgProfileConfig: undefined
    };
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = output["CallerReference"];
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["ContentTypeProfileConfig"] !== undefined) {
        contents.ContentTypeProfileConfig = deserializeAws_restXmlContentTypeProfileConfig(output["ContentTypeProfileConfig"], context);
    }
    if (output["QueryArgProfileConfig"] !== undefined) {
        contents.QueryArgProfileConfig = deserializeAws_restXmlQueryArgProfileConfig(output["QueryArgProfileConfig"], context);
    }
    return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionList = (output, context) => {
    let contents = {
        __type: "FieldLevelEncryptionList",
        Items: undefined,
        MaxItems: undefined,
        NextMarker: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["FieldLevelEncryptionSummary"] !== undefined) {
        const wrappedItem = output["Items"]["FieldLevelEncryptionSummary"] instanceof Array
            ? output["Items"]["FieldLevelEncryptionSummary"]
            : [output["Items"]["FieldLevelEncryptionSummary"]];
        contents.Items = deserializeAws_restXmlFieldLevelEncryptionSummaryList(wrappedItem, context);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(output["MaxItems"]);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionProfile = (output, context) => {
    let contents = {
        __type: "FieldLevelEncryptionProfile",
        FieldLevelEncryptionProfileConfig: undefined,
        Id: undefined,
        LastModifiedTime: undefined
    };
    if (output["FieldLevelEncryptionProfileConfig"] !== undefined) {
        contents.FieldLevelEncryptionProfileConfig = deserializeAws_restXmlFieldLevelEncryptionProfileConfig(output["FieldLevelEncryptionProfileConfig"], context);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
    }
    return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionProfileConfig = (output, context) => {
    let contents = {
        __type: "FieldLevelEncryptionProfileConfig",
        CallerReference: undefined,
        Comment: undefined,
        EncryptionEntities: undefined,
        Name: undefined
    };
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = output["CallerReference"];
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["EncryptionEntities"] !== undefined) {
        contents.EncryptionEntities = deserializeAws_restXmlEncryptionEntities(output["EncryptionEntities"], context);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionProfileList = (output, context) => {
    let contents = {
        __type: "FieldLevelEncryptionProfileList",
        Items: undefined,
        MaxItems: undefined,
        NextMarker: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["FieldLevelEncryptionProfileSummary"] !== undefined) {
        const wrappedItem = output["Items"]["FieldLevelEncryptionProfileSummary"] instanceof Array
            ? output["Items"]["FieldLevelEncryptionProfileSummary"]
            : [output["Items"]["FieldLevelEncryptionProfileSummary"]];
        contents.Items = deserializeAws_restXmlFieldLevelEncryptionProfileSummaryList(wrappedItem, context);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(output["MaxItems"]);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionProfileSummary = (output, context) => {
    let contents = {
        __type: "FieldLevelEncryptionProfileSummary",
        Comment: undefined,
        EncryptionEntities: undefined,
        Id: undefined,
        LastModifiedTime: undefined,
        Name: undefined
    };
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["EncryptionEntities"] !== undefined) {
        contents.EncryptionEntities = deserializeAws_restXmlEncryptionEntities(output["EncryptionEntities"], context);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionProfileSummaryList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlFieldLevelEncryptionProfileSummary(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionSummary = (output, context) => {
    let contents = {
        __type: "FieldLevelEncryptionSummary",
        Comment: undefined,
        ContentTypeProfileConfig: undefined,
        Id: undefined,
        LastModifiedTime: undefined,
        QueryArgProfileConfig: undefined
    };
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["ContentTypeProfileConfig"] !== undefined) {
        contents.ContentTypeProfileConfig = deserializeAws_restXmlContentTypeProfileConfig(output["ContentTypeProfileConfig"], context);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
    }
    if (output["QueryArgProfileConfig"] !== undefined) {
        contents.QueryArgProfileConfig = deserializeAws_restXmlQueryArgProfileConfig(output["QueryArgProfileConfig"], context);
    }
    return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionSummaryList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlFieldLevelEncryptionSummary(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlFieldPatternList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlFieldPatterns = (output, context) => {
    let contents = {
        __type: "FieldPatterns",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["FieldPattern"] !== undefined) {
        const wrappedItem = output["Items"]["FieldPattern"] instanceof Array
            ? output["Items"]["FieldPattern"]
            : [output["Items"]["FieldPattern"]];
        contents.Items = deserializeAws_restXmlFieldPatternList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlForwardedValues = (output, context) => {
    let contents = {
        __type: "ForwardedValues",
        Cookies: undefined,
        Headers: undefined,
        QueryString: undefined,
        QueryStringCacheKeys: undefined
    };
    if (output["Cookies"] !== undefined) {
        contents.Cookies = deserializeAws_restXmlCookiePreference(output["Cookies"], context);
    }
    if (output["Headers"] !== undefined) {
        contents.Headers = deserializeAws_restXmlHeaders(output["Headers"], context);
    }
    if (output["QueryString"] !== undefined) {
        contents.QueryString = output["QueryString"] == "true";
    }
    if (output["QueryStringCacheKeys"] !== undefined) {
        contents.QueryStringCacheKeys = deserializeAws_restXmlQueryStringCacheKeys(output["QueryStringCacheKeys"], context);
    }
    return contents;
};
const deserializeAws_restXmlGeoRestriction = (output, context) => {
    let contents = {
        __type: "GeoRestriction",
        Items: undefined,
        Quantity: undefined,
        RestrictionType: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["Location"] !== undefined) {
        const wrappedItem = output["Items"]["Location"] instanceof Array
            ? output["Items"]["Location"]
            : [output["Items"]["Location"]];
        contents.Items = deserializeAws_restXmlLocationList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    if (output["RestrictionType"] !== undefined) {
        contents.RestrictionType = output["RestrictionType"];
    }
    return contents;
};
const deserializeAws_restXmlHeaderList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlHeaders = (output, context) => {
    let contents = {
        __type: "Headers",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
        const wrappedItem = output["Items"]["Name"] instanceof Array
            ? output["Items"]["Name"]
            : [output["Items"]["Name"]];
        contents.Items = deserializeAws_restXmlHeaderList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlInvalidation = (output, context) => {
    let contents = {
        __type: "Invalidation",
        CreateTime: undefined,
        Id: undefined,
        InvalidationBatch: undefined,
        Status: undefined
    };
    if (output["CreateTime"] !== undefined) {
        contents.CreateTime = new Date(output["CreateTime"]);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["InvalidationBatch"] !== undefined) {
        contents.InvalidationBatch = deserializeAws_restXmlInvalidationBatch(output["InvalidationBatch"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidationBatch = (output, context) => {
    let contents = {
        __type: "InvalidationBatch",
        CallerReference: undefined,
        Paths: undefined
    };
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = output["CallerReference"];
    }
    if (output["Paths"] !== undefined) {
        contents.Paths = deserializeAws_restXmlPaths(output["Paths"], context);
    }
    return contents;
};
const deserializeAws_restXmlInvalidationList = (output, context) => {
    let contents = {
        __type: "InvalidationList",
        IsTruncated: undefined,
        Items: undefined,
        Marker: undefined,
        MaxItems: undefined,
        NextMarker: undefined,
        Quantity: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["InvalidationSummary"] !== undefined) {
        const wrappedItem = output["Items"]["InvalidationSummary"] instanceof Array
            ? output["Items"]["InvalidationSummary"]
            : [output["Items"]["InvalidationSummary"]];
        contents.Items = deserializeAws_restXmlInvalidationSummaryList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(output["MaxItems"]);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlInvalidationSummary = (output, context) => {
    let contents = {
        __type: "InvalidationSummary",
        CreateTime: undefined,
        Id: undefined,
        Status: undefined
    };
    if (output["CreateTime"] !== undefined) {
        contents.CreateTime = new Date(output["CreateTime"]);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidationSummaryList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlInvalidationSummary(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlKeyPairIdList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlKeyPairIds = (output, context) => {
    let contents = {
        __type: "KeyPairIds",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["KeyPairId"] !== undefined) {
        const wrappedItem = output["Items"]["KeyPairId"] instanceof Array
            ? output["Items"]["KeyPairId"]
            : [output["Items"]["KeyPairId"]];
        contents.Items = deserializeAws_restXmlKeyPairIdList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlLambdaFunctionAssociation = (output, context) => {
    let contents = {
        __type: "LambdaFunctionAssociation",
        EventType: undefined,
        IncludeBody: undefined,
        LambdaFunctionARN: undefined
    };
    if (output["EventType"] !== undefined) {
        contents.EventType = output["EventType"];
    }
    if (output["IncludeBody"] !== undefined) {
        contents.IncludeBody = output["IncludeBody"] == "true";
    }
    if (output["LambdaFunctionARN"] !== undefined) {
        contents.LambdaFunctionARN = output["LambdaFunctionARN"];
    }
    return contents;
};
const deserializeAws_restXmlLambdaFunctionAssociationList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlLambdaFunctionAssociation(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlLambdaFunctionAssociations = (output, context) => {
    let contents = {
        __type: "LambdaFunctionAssociations",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["LambdaFunctionAssociation"] !== undefined) {
        const wrappedItem = output["Items"]["LambdaFunctionAssociation"] instanceof Array
            ? output["Items"]["LambdaFunctionAssociation"]
            : [output["Items"]["LambdaFunctionAssociation"]];
        contents.Items = deserializeAws_restXmlLambdaFunctionAssociationList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlLocationList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlLoggingConfig = (output, context) => {
    let contents = {
        __type: "LoggingConfig",
        Bucket: undefined,
        Enabled: undefined,
        IncludeCookies: undefined,
        Prefix: undefined
    };
    if (output["Bucket"] !== undefined) {
        contents.Bucket = output["Bucket"];
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["IncludeCookies"] !== undefined) {
        contents.IncludeCookies = output["IncludeCookies"] == "true";
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    return contents;
};
const deserializeAws_restXmlMethodsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlOrigin = (output, context) => {
    let contents = {
        __type: "Origin",
        CustomHeaders: undefined,
        CustomOriginConfig: undefined,
        DomainName: undefined,
        Id: undefined,
        OriginPath: undefined,
        S3OriginConfig: undefined
    };
    if (output["CustomHeaders"] !== undefined) {
        contents.CustomHeaders = deserializeAws_restXmlCustomHeaders(output["CustomHeaders"], context);
    }
    if (output["CustomOriginConfig"] !== undefined) {
        contents.CustomOriginConfig = deserializeAws_restXmlCustomOriginConfig(output["CustomOriginConfig"], context);
    }
    if (output["DomainName"] !== undefined) {
        contents.DomainName = output["DomainName"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["OriginPath"] !== undefined) {
        contents.OriginPath = output["OriginPath"];
    }
    if (output["S3OriginConfig"] !== undefined) {
        contents.S3OriginConfig = deserializeAws_restXmlS3OriginConfig(output["S3OriginConfig"], context);
    }
    return contents;
};
const deserializeAws_restXmlOriginCustomHeader = (output, context) => {
    let contents = {
        __type: "OriginCustomHeader",
        HeaderName: undefined,
        HeaderValue: undefined
    };
    if (output["HeaderName"] !== undefined) {
        contents.HeaderName = output["HeaderName"];
    }
    if (output["HeaderValue"] !== undefined) {
        contents.HeaderValue = output["HeaderValue"];
    }
    return contents;
};
const deserializeAws_restXmlOriginCustomHeadersList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlOriginCustomHeader(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlOriginGroup = (output, context) => {
    let contents = {
        __type: "OriginGroup",
        FailoverCriteria: undefined,
        Id: undefined,
        Members: undefined
    };
    if (output["FailoverCriteria"] !== undefined) {
        contents.FailoverCriteria = deserializeAws_restXmlOriginGroupFailoverCriteria(output["FailoverCriteria"], context);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Members"] !== undefined) {
        contents.Members = deserializeAws_restXmlOriginGroupMembers(output["Members"], context);
    }
    return contents;
};
const deserializeAws_restXmlOriginGroupFailoverCriteria = (output, context) => {
    let contents = {
        __type: "OriginGroupFailoverCriteria",
        StatusCodes: undefined
    };
    if (output["StatusCodes"] !== undefined) {
        contents.StatusCodes = deserializeAws_restXmlStatusCodes(output["StatusCodes"], context);
    }
    return contents;
};
const deserializeAws_restXmlOriginGroupList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlOriginGroup(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlOriginGroupMember = (output, context) => {
    let contents = {
        __type: "OriginGroupMember",
        OriginId: undefined
    };
    if (output["OriginId"] !== undefined) {
        contents.OriginId = output["OriginId"];
    }
    return contents;
};
const deserializeAws_restXmlOriginGroupMemberList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlOriginGroupMember(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlOriginGroupMembers = (output, context) => {
    let contents = {
        __type: "OriginGroupMembers",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["OriginGroupMember"] !== undefined) {
        const wrappedItem = output["Items"]["OriginGroupMember"] instanceof Array
            ? output["Items"]["OriginGroupMember"]
            : [output["Items"]["OriginGroupMember"]];
        contents.Items = deserializeAws_restXmlOriginGroupMemberList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlOriginGroups = (output, context) => {
    let contents = {
        __type: "OriginGroups",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["OriginGroup"] !== undefined) {
        const wrappedItem = output["Items"]["OriginGroup"] instanceof Array
            ? output["Items"]["OriginGroup"]
            : [output["Items"]["OriginGroup"]];
        contents.Items = deserializeAws_restXmlOriginGroupList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlOriginList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlOrigin(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlOriginSslProtocols = (output, context) => {
    let contents = {
        __type: "OriginSslProtocols",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["SslProtocol"] !== undefined) {
        const wrappedItem = output["Items"]["SslProtocol"] instanceof Array
            ? output["Items"]["SslProtocol"]
            : [output["Items"]["SslProtocol"]];
        contents.Items = deserializeAws_restXmlSslProtocolsList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlOrigins = (output, context) => {
    let contents = {
        __type: "Origins",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["Origin"] !== undefined) {
        const wrappedItem = output["Items"]["Origin"] instanceof Array
            ? output["Items"]["Origin"]
            : [output["Items"]["Origin"]];
        contents.Items = deserializeAws_restXmlOriginList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlPathList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlPaths = (output, context) => {
    let contents = {
        __type: "Paths",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined && output["Items"]["Path"] !== undefined) {
        const wrappedItem = output["Items"]["Path"] instanceof Array
            ? output["Items"]["Path"]
            : [output["Items"]["Path"]];
        contents.Items = deserializeAws_restXmlPathList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlPublicKey = (output, context) => {
    let contents = {
        __type: "PublicKey",
        CreatedTime: undefined,
        Id: undefined,
        PublicKeyConfig: undefined
    };
    if (output["CreatedTime"] !== undefined) {
        contents.CreatedTime = new Date(output["CreatedTime"]);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["PublicKeyConfig"] !== undefined) {
        contents.PublicKeyConfig = deserializeAws_restXmlPublicKeyConfig(output["PublicKeyConfig"], context);
    }
    return contents;
};
const deserializeAws_restXmlPublicKeyConfig = (output, context) => {
    let contents = {
        __type: "PublicKeyConfig",
        CallerReference: undefined,
        Comment: undefined,
        EncodedKey: undefined,
        Name: undefined
    };
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = output["CallerReference"];
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["EncodedKey"] !== undefined) {
        contents.EncodedKey = output["EncodedKey"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_restXmlPublicKeyList = (output, context) => {
    let contents = {
        __type: "PublicKeyList",
        Items: undefined,
        MaxItems: undefined,
        NextMarker: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["PublicKeySummary"] !== undefined) {
        const wrappedItem = output["Items"]["PublicKeySummary"] instanceof Array
            ? output["Items"]["PublicKeySummary"]
            : [output["Items"]["PublicKeySummary"]];
        contents.Items = deserializeAws_restXmlPublicKeySummaryList(wrappedItem, context);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(output["MaxItems"]);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlPublicKeySummary = (output, context) => {
    let contents = {
        __type: "PublicKeySummary",
        Comment: undefined,
        CreatedTime: undefined,
        EncodedKey: undefined,
        Id: undefined,
        Name: undefined
    };
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["CreatedTime"] !== undefined) {
        contents.CreatedTime = new Date(output["CreatedTime"]);
    }
    if (output["EncodedKey"] !== undefined) {
        contents.EncodedKey = output["EncodedKey"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_restXmlPublicKeySummaryList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlPublicKeySummary(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlQueryArgProfile = (output, context) => {
    let contents = {
        __type: "QueryArgProfile",
        ProfileId: undefined,
        QueryArg: undefined
    };
    if (output["ProfileId"] !== undefined) {
        contents.ProfileId = output["ProfileId"];
    }
    if (output["QueryArg"] !== undefined) {
        contents.QueryArg = output["QueryArg"];
    }
    return contents;
};
const deserializeAws_restXmlQueryArgProfileConfig = (output, context) => {
    let contents = {
        __type: "QueryArgProfileConfig",
        ForwardWhenQueryArgProfileIsUnknown: undefined,
        QueryArgProfiles: undefined
    };
    if (output["ForwardWhenQueryArgProfileIsUnknown"] !== undefined) {
        contents.ForwardWhenQueryArgProfileIsUnknown =
            output["ForwardWhenQueryArgProfileIsUnknown"] == "true";
    }
    if (output["QueryArgProfiles"] !== undefined) {
        contents.QueryArgProfiles = deserializeAws_restXmlQueryArgProfiles(output["QueryArgProfiles"], context);
    }
    return contents;
};
const deserializeAws_restXmlQueryArgProfileList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlQueryArgProfile(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlQueryArgProfiles = (output, context) => {
    let contents = {
        __type: "QueryArgProfiles",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["QueryArgProfile"] !== undefined) {
        const wrappedItem = output["Items"]["QueryArgProfile"] instanceof Array
            ? output["Items"]["QueryArgProfile"]
            : [output["Items"]["QueryArgProfile"]];
        contents.Items = deserializeAws_restXmlQueryArgProfileList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlQueryStringCacheKeys = (output, context) => {
    let contents = {
        __type: "QueryStringCacheKeys",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
        const wrappedItem = output["Items"]["Name"] instanceof Array
            ? output["Items"]["Name"]
            : [output["Items"]["Name"]];
        contents.Items = deserializeAws_restXmlQueryStringCacheKeysList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlQueryStringCacheKeysList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlRestrictions = (output, context) => {
    let contents = {
        __type: "Restrictions",
        GeoRestriction: undefined
    };
    if (output["GeoRestriction"] !== undefined) {
        contents.GeoRestriction = deserializeAws_restXmlGeoRestriction(output["GeoRestriction"], context);
    }
    return contents;
};
const deserializeAws_restXmlS3Origin = (output, context) => {
    let contents = {
        __type: "S3Origin",
        DomainName: undefined,
        OriginAccessIdentity: undefined
    };
    if (output["DomainName"] !== undefined) {
        contents.DomainName = output["DomainName"];
    }
    if (output["OriginAccessIdentity"] !== undefined) {
        contents.OriginAccessIdentity = output["OriginAccessIdentity"];
    }
    return contents;
};
const deserializeAws_restXmlS3OriginConfig = (output, context) => {
    let contents = {
        __type: "S3OriginConfig",
        OriginAccessIdentity: undefined
    };
    if (output["OriginAccessIdentity"] !== undefined) {
        contents.OriginAccessIdentity = output["OriginAccessIdentity"];
    }
    return contents;
};
const deserializeAws_restXmlSigner = (output, context) => {
    let contents = {
        __type: "Signer",
        AwsAccountNumber: undefined,
        KeyPairIds: undefined
    };
    if (output["AwsAccountNumber"] !== undefined) {
        contents.AwsAccountNumber = output["AwsAccountNumber"];
    }
    if (output["KeyPairIds"] !== undefined) {
        contents.KeyPairIds = deserializeAws_restXmlKeyPairIds(output["KeyPairIds"], context);
    }
    return contents;
};
const deserializeAws_restXmlSignerList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlSigner(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlSslProtocolsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlStatusCodeList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(parseInt(entry));
    });
    return contents;
};
const deserializeAws_restXmlStatusCodes = (output, context) => {
    let contents = {
        __type: "StatusCodes",
        Items: undefined,
        Quantity: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["StatusCode"] !== undefined) {
        const wrappedItem = output["Items"]["StatusCode"] instanceof Array
            ? output["Items"]["StatusCode"]
            : [output["Items"]["StatusCode"]];
        contents.Items = deserializeAws_restXmlStatusCodeList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlStreamingDistribution = (output, context) => {
    let contents = {
        __type: "StreamingDistribution",
        ARN: undefined,
        ActiveTrustedSigners: undefined,
        DomainName: undefined,
        Id: undefined,
        LastModifiedTime: undefined,
        Status: undefined,
        StreamingDistributionConfig: undefined
    };
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    if (output["ActiveTrustedSigners"] !== undefined) {
        contents.ActiveTrustedSigners = deserializeAws_restXmlActiveTrustedSigners(output["ActiveTrustedSigners"], context);
    }
    if (output["DomainName"] !== undefined) {
        contents.DomainName = output["DomainName"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StreamingDistributionConfig"] !== undefined) {
        contents.StreamingDistributionConfig = deserializeAws_restXmlStreamingDistributionConfig(output["StreamingDistributionConfig"], context);
    }
    return contents;
};
const deserializeAws_restXmlStreamingDistributionConfig = (output, context) => {
    let contents = {
        __type: "StreamingDistributionConfig",
        Aliases: undefined,
        CallerReference: undefined,
        Comment: undefined,
        Enabled: undefined,
        Logging: undefined,
        PriceClass: undefined,
        S3Origin: undefined,
        TrustedSigners: undefined
    };
    if (output["Aliases"] !== undefined) {
        contents.Aliases = deserializeAws_restXmlAliases(output["Aliases"], context);
    }
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = output["CallerReference"];
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["Logging"] !== undefined) {
        contents.Logging = deserializeAws_restXmlStreamingLoggingConfig(output["Logging"], context);
    }
    if (output["PriceClass"] !== undefined) {
        contents.PriceClass = output["PriceClass"];
    }
    if (output["S3Origin"] !== undefined) {
        contents.S3Origin = deserializeAws_restXmlS3Origin(output["S3Origin"], context);
    }
    if (output["TrustedSigners"] !== undefined) {
        contents.TrustedSigners = deserializeAws_restXmlTrustedSigners(output["TrustedSigners"], context);
    }
    return contents;
};
const deserializeAws_restXmlStreamingDistributionList = (output, context) => {
    let contents = {
        __type: "StreamingDistributionList",
        IsTruncated: undefined,
        Items: undefined,
        Marker: undefined,
        MaxItems: undefined,
        NextMarker: undefined,
        Quantity: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["StreamingDistributionSummary"] !== undefined) {
        const wrappedItem = output["Items"]["StreamingDistributionSummary"] instanceof Array
            ? output["Items"]["StreamingDistributionSummary"]
            : [output["Items"]["StreamingDistributionSummary"]];
        contents.Items = deserializeAws_restXmlStreamingDistributionSummaryList(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(output["MaxItems"]);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlStreamingDistributionSummary = (output, context) => {
    let contents = {
        __type: "StreamingDistributionSummary",
        ARN: undefined,
        Aliases: undefined,
        Comment: undefined,
        DomainName: undefined,
        Enabled: undefined,
        Id: undefined,
        LastModifiedTime: undefined,
        PriceClass: undefined,
        S3Origin: undefined,
        Status: undefined,
        TrustedSigners: undefined
    };
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    if (output["Aliases"] !== undefined) {
        contents.Aliases = deserializeAws_restXmlAliases(output["Aliases"], context);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["DomainName"] !== undefined) {
        contents.DomainName = output["DomainName"];
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
    }
    if (output["PriceClass"] !== undefined) {
        contents.PriceClass = output["PriceClass"];
    }
    if (output["S3Origin"] !== undefined) {
        contents.S3Origin = deserializeAws_restXmlS3Origin(output["S3Origin"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["TrustedSigners"] !== undefined) {
        contents.TrustedSigners = deserializeAws_restXmlTrustedSigners(output["TrustedSigners"], context);
    }
    return contents;
};
const deserializeAws_restXmlStreamingDistributionSummaryList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlStreamingDistributionSummary(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlStreamingLoggingConfig = (output, context) => {
    let contents = {
        __type: "StreamingLoggingConfig",
        Bucket: undefined,
        Enabled: undefined,
        Prefix: undefined
    };
    if (output["Bucket"] !== undefined) {
        contents.Bucket = output["Bucket"];
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    return contents;
};
const deserializeAws_restXmlTag = (output, context) => {
    let contents = {
        __type: "Tag",
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
const deserializeAws_restXmlTagList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlTag(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlTags = (output, context) => {
    let contents = {
        __type: "Tags",
        Items: undefined
    };
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined && output["Items"]["Tag"] !== undefined) {
        const wrappedItem = output["Items"]["Tag"] instanceof Array
            ? output["Items"]["Tag"]
            : [output["Items"]["Tag"]];
        contents.Items = deserializeAws_restXmlTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_restXmlTrustedSigners = (output, context) => {
    let contents = {
        __type: "TrustedSigners",
        Enabled: undefined,
        Items: undefined,
        Quantity: undefined
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    if (output["Items"] !== undefined &&
        output["Items"]["AwsAccountNumber"] !== undefined) {
        const wrappedItem = output["Items"]["AwsAccountNumber"] instanceof Array
            ? output["Items"]["AwsAccountNumber"]
            : [output["Items"]["AwsAccountNumber"]];
        contents.Items = deserializeAws_restXmlAwsAccountNumberList(wrappedItem, context);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = parseInt(output["Quantity"]);
    }
    return contents;
};
const deserializeAws_restXmlViewerCertificate = (output, context) => {
    let contents = {
        __type: "ViewerCertificate",
        ACMCertificateArn: undefined,
        Certificate: undefined,
        CertificateSource: undefined,
        CloudFrontDefaultCertificate: undefined,
        IAMCertificateId: undefined,
        MinimumProtocolVersion: undefined,
        SSLSupportMethod: undefined
    };
    if (output["ACMCertificateArn"] !== undefined) {
        contents.ACMCertificateArn = output["ACMCertificateArn"];
    }
    if (output["Certificate"] !== undefined) {
        contents.Certificate = output["Certificate"];
    }
    if (output["CertificateSource"] !== undefined) {
        contents.CertificateSource = output["CertificateSource"];
    }
    if (output["CloudFrontDefaultCertificate"] !== undefined) {
        contents.CloudFrontDefaultCertificate =
            output["CloudFrontDefaultCertificate"] == "true";
    }
    if (output["IAMCertificateId"] !== undefined) {
        contents.IAMCertificateId = output["IAMCertificateId"];
    }
    if (output["MinimumProtocolVersion"] !== undefined) {
        contents.MinimumProtocolVersion = output["MinimumProtocolVersion"];
    }
    if (output["SSLSupportMethod"] !== undefined) {
        contents.SSLSupportMethod = output["SSLSupportMethod"];
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