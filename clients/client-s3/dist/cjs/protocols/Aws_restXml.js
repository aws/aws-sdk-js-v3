"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const xml_builder_1 = require("@aws-sdk/xml-builder");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_restXmlAbortMultipartUploadCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        "x-id": "AbortMultipartUpload"
    };
    if (input.UploadId !== undefined) {
        query["uploadId"] = input.UploadId;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlAbortMultipartUploadCommand = serializeAws_restXmlAbortMultipartUploadCommand;
async function serializeAws_restXmlCompleteMultipartUploadCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {};
    if (input.UploadId !== undefined) {
        query["uploadId"] = input.UploadId;
    }
    let body;
    let contents;
    if (input.MultipartUpload !== undefined) {
        contents = serializeAws_restXmlCompletedMultipartUpload(input.MultipartUpload, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlCompleteMultipartUploadCommand = serializeAws_restXmlCompleteMultipartUploadCommand;
async function serializeAws_restXmlCopyObjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.ACL !== undefined) {
        headers["x-amz-acl"] = input.ACL;
    }
    if (input.CacheControl !== undefined) {
        headers["Cache-Control"] = input.CacheControl;
    }
    if (input.ContentDisposition !== undefined) {
        headers["Content-Disposition"] = input.ContentDisposition;
    }
    if (input.ContentEncoding !== undefined) {
        headers["Content-Encoding"] = input.ContentEncoding;
    }
    if (input.ContentLanguage !== undefined) {
        headers["Content-Language"] = input.ContentLanguage;
    }
    if (input.ContentType !== undefined) {
        headers["Content-Type"] = input.ContentType;
    }
    if (input.CopySource !== undefined) {
        headers["x-amz-copy-source"] = input.CopySource;
    }
    if (input.CopySourceIfMatch !== undefined) {
        headers["x-amz-copy-source-if-match"] = input.CopySourceIfMatch;
    }
    if (input.CopySourceIfModifiedSince !== undefined) {
        headers["x-amz-copy-source-if-modified-since"] = smithy_client_1.dateToUtcString(input.CopySourceIfModifiedSince).toString();
    }
    if (input.CopySourceIfNoneMatch !== undefined) {
        headers["x-amz-copy-source-if-none-match"] = input.CopySourceIfNoneMatch;
    }
    if (input.CopySourceIfUnmodifiedSince !== undefined) {
        headers["x-amz-copy-source-if-unmodified-since"] = smithy_client_1.dateToUtcString(input.CopySourceIfUnmodifiedSince).toString();
    }
    if (input.CopySourceSSECustomerAlgorithm !== undefined) {
        headers["x-amz-copy-source-server-side-encryption-customer-algorithm"] =
            input.CopySourceSSECustomerAlgorithm;
    }
    if (input.CopySourceSSECustomerKey !== undefined) {
        headers["x-amz-copy-source-server-side-encryption-customer-key"] =
            input.CopySourceSSECustomerKey;
    }
    if (input.CopySourceSSECustomerKeyMD5 !== undefined) {
        headers["x-amz-copy-source-server-side-encryption-customer-key-MD5"] =
            input.CopySourceSSECustomerKeyMD5;
    }
    if (input.Expires !== undefined) {
        headers["Expires"] = smithy_client_1.dateToUtcString(input.Expires).toString();
    }
    if (input.GrantFullControl !== undefined) {
        headers["x-amz-grant-full-control"] = input.GrantFullControl;
    }
    if (input.GrantRead !== undefined) {
        headers["x-amz-grant-read"] = input.GrantRead;
    }
    if (input.GrantReadACP !== undefined) {
        headers["x-amz-grant-read-acp"] = input.GrantReadACP;
    }
    if (input.GrantWriteACP !== undefined) {
        headers["x-amz-grant-write-acp"] = input.GrantWriteACP;
    }
    if (input.MetadataDirective !== undefined) {
        headers["x-amz-metadata-directive"] = input.MetadataDirective;
    }
    if (input.ObjectLockLegalHoldStatus !== undefined) {
        headers["x-amz-object-lock-legal-hold"] = input.ObjectLockLegalHoldStatus;
    }
    if (input.ObjectLockMode !== undefined) {
        headers["x-amz-object-lock-mode"] = input.ObjectLockMode;
    }
    if (input.ObjectLockRetainUntilDate !== undefined) {
        headers["x-amz-object-lock-retain-until-date"] = (input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z").toString();
    }
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    if (input.SSECustomerAlgorithm !== undefined) {
        headers["x-amz-server-side-encryption-customer-algorithm"] =
            input.SSECustomerAlgorithm;
    }
    if (input.SSECustomerKey !== undefined) {
        headers["x-amz-server-side-encryption-customer-key"] = input.SSECustomerKey;
    }
    if (input.SSECustomerKeyMD5 !== undefined) {
        headers["x-amz-server-side-encryption-customer-key-MD5"] =
            input.SSECustomerKeyMD5;
    }
    if (input.SSEKMSEncryptionContext !== undefined) {
        headers["x-amz-server-side-encryption-context"] =
            input.SSEKMSEncryptionContext;
    }
    if (input.SSEKMSKeyId !== undefined) {
        headers["x-amz-server-side-encryption-aws-kms-key-id"] = input.SSEKMSKeyId;
    }
    if (input.ServerSideEncryption !== undefined) {
        headers["x-amz-server-side-encryption"] = input.ServerSideEncryption;
    }
    if (input.StorageClass !== undefined) {
        headers["x-amz-storage-class"] = input.StorageClass;
    }
    if (input.Tagging !== undefined) {
        headers["x-amz-tagging"] = input.Tagging;
    }
    if (input.TaggingDirective !== undefined) {
        headers["x-amz-tagging-directive"] = input.TaggingDirective;
    }
    if (input.WebsiteRedirectLocation !== undefined) {
        headers["x-amz-website-redirect-location"] = input.WebsiteRedirectLocation;
    }
    if (input.Metadata !== undefined) {
        Object.keys(input.Metadata).forEach(suffix => {
            headers["x-amz-meta-" + suffix] = input.Metadata[suffix];
        });
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        "x-id": "CopyObject"
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlCopyObjectCommand = serializeAws_restXmlCopyObjectCommand;
async function serializeAws_restXmlCreateBucketCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ACL !== undefined) {
        headers["x-amz-acl"] = input.ACL;
    }
    if (input.GrantFullControl !== undefined) {
        headers["x-amz-grant-full-control"] = input.GrantFullControl;
    }
    if (input.GrantRead !== undefined) {
        headers["x-amz-grant-read"] = input.GrantRead;
    }
    if (input.GrantReadACP !== undefined) {
        headers["x-amz-grant-read-acp"] = input.GrantReadACP;
    }
    if (input.GrantWrite !== undefined) {
        headers["x-amz-grant-write"] = input.GrantWrite;
    }
    if (input.GrantWriteACP !== undefined) {
        headers["x-amz-grant-write-acp"] = input.GrantWriteACP;
    }
    if (input.ObjectLockEnabledForBucket !== undefined) {
        headers["x-amz-bucket-object-lock-enabled"] = input.ObjectLockEnabledForBucket.toString();
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    let body;
    let contents;
    if (input.CreateBucketConfiguration !== undefined) {
        contents = serializeAws_restXmlCreateBucketConfiguration(input.CreateBucketConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateBucketCommand = serializeAws_restXmlCreateBucketCommand;
async function serializeAws_restXmlCreateMultipartUploadCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.ACL !== undefined) {
        headers["x-amz-acl"] = input.ACL;
    }
    if (input.CacheControl !== undefined) {
        headers["Cache-Control"] = input.CacheControl;
    }
    if (input.ContentDisposition !== undefined) {
        headers["Content-Disposition"] = input.ContentDisposition;
    }
    if (input.ContentEncoding !== undefined) {
        headers["Content-Encoding"] = input.ContentEncoding;
    }
    if (input.ContentLanguage !== undefined) {
        headers["Content-Language"] = input.ContentLanguage;
    }
    if (input.ContentType !== undefined) {
        headers["Content-Type"] = input.ContentType;
    }
    if (input.Expires !== undefined) {
        headers["Expires"] = smithy_client_1.dateToUtcString(input.Expires).toString();
    }
    if (input.GrantFullControl !== undefined) {
        headers["x-amz-grant-full-control"] = input.GrantFullControl;
    }
    if (input.GrantRead !== undefined) {
        headers["x-amz-grant-read"] = input.GrantRead;
    }
    if (input.GrantReadACP !== undefined) {
        headers["x-amz-grant-read-acp"] = input.GrantReadACP;
    }
    if (input.GrantWriteACP !== undefined) {
        headers["x-amz-grant-write-acp"] = input.GrantWriteACP;
    }
    if (input.ObjectLockLegalHoldStatus !== undefined) {
        headers["x-amz-object-lock-legal-hold"] = input.ObjectLockLegalHoldStatus;
    }
    if (input.ObjectLockMode !== undefined) {
        headers["x-amz-object-lock-mode"] = input.ObjectLockMode;
    }
    if (input.ObjectLockRetainUntilDate !== undefined) {
        headers["x-amz-object-lock-retain-until-date"] = (input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z").toString();
    }
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    if (input.SSECustomerAlgorithm !== undefined) {
        headers["x-amz-server-side-encryption-customer-algorithm"] =
            input.SSECustomerAlgorithm;
    }
    if (input.SSECustomerKey !== undefined) {
        headers["x-amz-server-side-encryption-customer-key"] = input.SSECustomerKey;
    }
    if (input.SSECustomerKeyMD5 !== undefined) {
        headers["x-amz-server-side-encryption-customer-key-MD5"] =
            input.SSECustomerKeyMD5;
    }
    if (input.SSEKMSEncryptionContext !== undefined) {
        headers["x-amz-server-side-encryption-context"] =
            input.SSEKMSEncryptionContext;
    }
    if (input.SSEKMSKeyId !== undefined) {
        headers["x-amz-server-side-encryption-aws-kms-key-id"] = input.SSEKMSKeyId;
    }
    if (input.ServerSideEncryption !== undefined) {
        headers["x-amz-server-side-encryption"] = input.ServerSideEncryption;
    }
    if (input.StorageClass !== undefined) {
        headers["x-amz-storage-class"] = input.StorageClass;
    }
    if (input.Tagging !== undefined) {
        headers["x-amz-tagging"] = input.Tagging;
    }
    if (input.WebsiteRedirectLocation !== undefined) {
        headers["x-amz-website-redirect-location"] = input.WebsiteRedirectLocation;
    }
    if (input.Metadata !== undefined) {
        Object.keys(input.Metadata).forEach(suffix => {
            headers["x-amz-meta-" + suffix] = input.Metadata[suffix];
        });
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        uploads: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlCreateMultipartUploadCommand = serializeAws_restXmlCreateMultipartUploadCommand;
async function serializeAws_restXmlDeleteBucketCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlDeleteBucketCommand = serializeAws_restXmlDeleteBucketCommand;
async function serializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        analytics: ""
    };
    if (input.Id !== undefined) {
        query["id"] = input.Id;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand = serializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand;
async function serializeAws_restXmlDeleteBucketCorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        cors: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlDeleteBucketCorsCommand = serializeAws_restXmlDeleteBucketCorsCommand;
async function serializeAws_restXmlDeleteBucketEncryptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        encryption: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlDeleteBucketEncryptionCommand = serializeAws_restXmlDeleteBucketEncryptionCommand;
async function serializeAws_restXmlDeleteBucketInventoryConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        inventory: ""
    };
    if (input.Id !== undefined) {
        query["id"] = input.Id;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlDeleteBucketInventoryConfigurationCommand = serializeAws_restXmlDeleteBucketInventoryConfigurationCommand;
async function serializeAws_restXmlDeleteBucketLifecycleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        lifecycle: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlDeleteBucketLifecycleCommand = serializeAws_restXmlDeleteBucketLifecycleCommand;
async function serializeAws_restXmlDeleteBucketMetricsConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        metrics: ""
    };
    if (input.Id !== undefined) {
        query["id"] = input.Id;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlDeleteBucketMetricsConfigurationCommand = serializeAws_restXmlDeleteBucketMetricsConfigurationCommand;
async function serializeAws_restXmlDeleteBucketPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        policy: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlDeleteBucketPolicyCommand = serializeAws_restXmlDeleteBucketPolicyCommand;
async function serializeAws_restXmlDeleteBucketReplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        replication: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlDeleteBucketReplicationCommand = serializeAws_restXmlDeleteBucketReplicationCommand;
async function serializeAws_restXmlDeleteBucketTaggingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        tagging: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlDeleteBucketTaggingCommand = serializeAws_restXmlDeleteBucketTaggingCommand;
async function serializeAws_restXmlDeleteBucketWebsiteCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        website: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlDeleteBucketWebsiteCommand = serializeAws_restXmlDeleteBucketWebsiteCommand;
async function serializeAws_restXmlDeleteObjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.BypassGovernanceRetention !== undefined) {
        headers["x-amz-bypass-governance-retention"] = input.BypassGovernanceRetention.toString();
    }
    if (input.MFA !== undefined) {
        headers["x-amz-mfa"] = input.MFA;
    }
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        "x-id": "DeleteObject"
    };
    if (input.VersionId !== undefined) {
        query["versionId"] = input.VersionId;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlDeleteObjectCommand = serializeAws_restXmlDeleteObjectCommand;
async function serializeAws_restXmlDeleteObjectTaggingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        tagging: ""
    };
    if (input.VersionId !== undefined) {
        query["versionId"] = input.VersionId;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlDeleteObjectTaggingCommand = serializeAws_restXmlDeleteObjectTaggingCommand;
async function serializeAws_restXmlDeleteObjectsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.BypassGovernanceRetention !== undefined) {
        headers["x-amz-bypass-governance-retention"] = input.BypassGovernanceRetention.toString();
    }
    if (input.MFA !== undefined) {
        headers["x-amz-mfa"] = input.MFA;
    }
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        delete: ""
    };
    let body;
    let contents;
    if (input.Delete !== undefined) {
        contents = serializeAws_restXmlDelete(input.Delete, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlDeleteObjectsCommand = serializeAws_restXmlDeleteObjectsCommand;
async function serializeAws_restXmlDeletePublicAccessBlockCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        publicAccessBlock: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlDeletePublicAccessBlockCommand = serializeAws_restXmlDeletePublicAccessBlockCommand;
async function serializeAws_restXmlGetBucketAccelerateConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        accelerate: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketAccelerateConfigurationCommand = serializeAws_restXmlGetBucketAccelerateConfigurationCommand;
async function serializeAws_restXmlGetBucketAclCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        acl: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketAclCommand = serializeAws_restXmlGetBucketAclCommand;
async function serializeAws_restXmlGetBucketAnalyticsConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        analytics: "",
        "x-id": "GetBucketAnalyticsConfiguration"
    };
    if (input.Id !== undefined) {
        query["id"] = input.Id;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketAnalyticsConfigurationCommand = serializeAws_restXmlGetBucketAnalyticsConfigurationCommand;
async function serializeAws_restXmlGetBucketCorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        cors: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketCorsCommand = serializeAws_restXmlGetBucketCorsCommand;
async function serializeAws_restXmlGetBucketEncryptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        encryption: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketEncryptionCommand = serializeAws_restXmlGetBucketEncryptionCommand;
async function serializeAws_restXmlGetBucketInventoryConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        inventory: "",
        "x-id": "GetBucketInventoryConfiguration"
    };
    if (input.Id !== undefined) {
        query["id"] = input.Id;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketInventoryConfigurationCommand = serializeAws_restXmlGetBucketInventoryConfigurationCommand;
async function serializeAws_restXmlGetBucketLifecycleConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        lifecycle: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketLifecycleConfigurationCommand = serializeAws_restXmlGetBucketLifecycleConfigurationCommand;
async function serializeAws_restXmlGetBucketLocationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        location: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketLocationCommand = serializeAws_restXmlGetBucketLocationCommand;
async function serializeAws_restXmlGetBucketLoggingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        logging: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketLoggingCommand = serializeAws_restXmlGetBucketLoggingCommand;
async function serializeAws_restXmlGetBucketMetricsConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        metrics: "",
        "x-id": "GetBucketMetricsConfiguration"
    };
    if (input.Id !== undefined) {
        query["id"] = input.Id;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketMetricsConfigurationCommand = serializeAws_restXmlGetBucketMetricsConfigurationCommand;
async function serializeAws_restXmlGetBucketNotificationConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        notification: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketNotificationConfigurationCommand = serializeAws_restXmlGetBucketNotificationConfigurationCommand;
async function serializeAws_restXmlGetBucketPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        policy: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketPolicyCommand = serializeAws_restXmlGetBucketPolicyCommand;
async function serializeAws_restXmlGetBucketPolicyStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        policyStatus: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketPolicyStatusCommand = serializeAws_restXmlGetBucketPolicyStatusCommand;
async function serializeAws_restXmlGetBucketReplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        replication: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketReplicationCommand = serializeAws_restXmlGetBucketReplicationCommand;
async function serializeAws_restXmlGetBucketRequestPaymentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        requestPayment: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketRequestPaymentCommand = serializeAws_restXmlGetBucketRequestPaymentCommand;
async function serializeAws_restXmlGetBucketTaggingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        tagging: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketTaggingCommand = serializeAws_restXmlGetBucketTaggingCommand;
async function serializeAws_restXmlGetBucketVersioningCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        versioning: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketVersioningCommand = serializeAws_restXmlGetBucketVersioningCommand;
async function serializeAws_restXmlGetBucketWebsiteCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        website: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetBucketWebsiteCommand = serializeAws_restXmlGetBucketWebsiteCommand;
async function serializeAws_restXmlGetObjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.IfMatch !== undefined) {
        headers["If-Match"] = input.IfMatch;
    }
    if (input.IfModifiedSince !== undefined) {
        headers["If-Modified-Since"] = smithy_client_1.dateToUtcString(input.IfModifiedSince).toString();
    }
    if (input.IfNoneMatch !== undefined) {
        headers["If-None-Match"] = input.IfNoneMatch;
    }
    if (input.IfUnmodifiedSince !== undefined) {
        headers["If-Unmodified-Since"] = smithy_client_1.dateToUtcString(input.IfUnmodifiedSince).toString();
    }
    if (input.Range !== undefined) {
        headers["Range"] = input.Range;
    }
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    if (input.SSECustomerAlgorithm !== undefined) {
        headers["x-amz-server-side-encryption-customer-algorithm"] =
            input.SSECustomerAlgorithm;
    }
    if (input.SSECustomerKey !== undefined) {
        headers["x-amz-server-side-encryption-customer-key"] = input.SSECustomerKey;
    }
    if (input.SSECustomerKeyMD5 !== undefined) {
        headers["x-amz-server-side-encryption-customer-key-MD5"] =
            input.SSECustomerKeyMD5;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        "x-id": "GetObject"
    };
    if (input.PartNumber !== undefined) {
        query["partNumber"] = input.PartNumber.toString();
    }
    if (input.ResponseCacheControl !== undefined) {
        query["response-cache-control"] = input.ResponseCacheControl;
    }
    if (input.ResponseContentDisposition !== undefined) {
        query["response-content-disposition"] = input.ResponseContentDisposition;
    }
    if (input.ResponseContentEncoding !== undefined) {
        query["response-content-encoding"] = input.ResponseContentEncoding;
    }
    if (input.ResponseContentLanguage !== undefined) {
        query["response-content-language"] = input.ResponseContentLanguage;
    }
    if (input.ResponseContentType !== undefined) {
        query["response-content-type"] = input.ResponseContentType;
    }
    if (input.ResponseExpires !== undefined) {
        query["response-expires"] = (input.ResponseExpires.toISOString().split(".")[0] + "Z").toString();
    }
    if (input.VersionId !== undefined) {
        query["versionId"] = input.VersionId;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetObjectCommand = serializeAws_restXmlGetObjectCommand;
async function serializeAws_restXmlGetObjectAclCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        acl: ""
    };
    if (input.VersionId !== undefined) {
        query["versionId"] = input.VersionId;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetObjectAclCommand = serializeAws_restXmlGetObjectAclCommand;
async function serializeAws_restXmlGetObjectLegalHoldCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        "legal-hold": ""
    };
    if (input.VersionId !== undefined) {
        query["versionId"] = input.VersionId;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetObjectLegalHoldCommand = serializeAws_restXmlGetObjectLegalHoldCommand;
async function serializeAws_restXmlGetObjectLockConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        "object-lock": ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetObjectLockConfigurationCommand = serializeAws_restXmlGetObjectLockConfigurationCommand;
async function serializeAws_restXmlGetObjectRetentionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        retention: ""
    };
    if (input.VersionId !== undefined) {
        query["versionId"] = input.VersionId;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetObjectRetentionCommand = serializeAws_restXmlGetObjectRetentionCommand;
async function serializeAws_restXmlGetObjectTaggingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        tagging: ""
    };
    if (input.VersionId !== undefined) {
        query["versionId"] = input.VersionId;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetObjectTaggingCommand = serializeAws_restXmlGetObjectTaggingCommand;
async function serializeAws_restXmlGetObjectTorrentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        torrent: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetObjectTorrentCommand = serializeAws_restXmlGetObjectTorrentCommand;
async function serializeAws_restXmlGetPublicAccessBlockCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        publicAccessBlock: ""
    };
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetPublicAccessBlockCommand = serializeAws_restXmlGetPublicAccessBlockCommand;
async function serializeAws_restXmlHeadBucketCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "HEAD", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlHeadBucketCommand = serializeAws_restXmlHeadBucketCommand;
async function serializeAws_restXmlHeadObjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.IfMatch !== undefined) {
        headers["If-Match"] = input.IfMatch;
    }
    if (input.IfModifiedSince !== undefined) {
        headers["If-Modified-Since"] = smithy_client_1.dateToUtcString(input.IfModifiedSince).toString();
    }
    if (input.IfNoneMatch !== undefined) {
        headers["If-None-Match"] = input.IfNoneMatch;
    }
    if (input.IfUnmodifiedSince !== undefined) {
        headers["If-Unmodified-Since"] = smithy_client_1.dateToUtcString(input.IfUnmodifiedSince).toString();
    }
    if (input.Range !== undefined) {
        headers["Range"] = input.Range;
    }
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    if (input.SSECustomerAlgorithm !== undefined) {
        headers["x-amz-server-side-encryption-customer-algorithm"] =
            input.SSECustomerAlgorithm;
    }
    if (input.SSECustomerKey !== undefined) {
        headers["x-amz-server-side-encryption-customer-key"] = input.SSECustomerKey;
    }
    if (input.SSECustomerKeyMD5 !== undefined) {
        headers["x-amz-server-side-encryption-customer-key-MD5"] =
            input.SSECustomerKeyMD5;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {};
    if (input.PartNumber !== undefined) {
        query["partNumber"] = input.PartNumber.toString();
    }
    if (input.VersionId !== undefined) {
        query["versionId"] = input.VersionId;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "HEAD", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlHeadObjectCommand = serializeAws_restXmlHeadObjectCommand;
async function serializeAws_restXmlListBucketAnalyticsConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        analytics: "",
        "x-id": "ListBucketAnalyticsConfigurations"
    };
    if (input.ContinuationToken !== undefined) {
        query["continuation-token"] = input.ContinuationToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListBucketAnalyticsConfigurationsCommand = serializeAws_restXmlListBucketAnalyticsConfigurationsCommand;
async function serializeAws_restXmlListBucketInventoryConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        inventory: "",
        "x-id": "ListBucketInventoryConfigurations"
    };
    if (input.ContinuationToken !== undefined) {
        query["continuation-token"] = input.ContinuationToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListBucketInventoryConfigurationsCommand = serializeAws_restXmlListBucketInventoryConfigurationsCommand;
async function serializeAws_restXmlListBucketMetricsConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        metrics: "",
        "x-id": "ListBucketMetricsConfigurations"
    };
    if (input.ContinuationToken !== undefined) {
        query["continuation-token"] = input.ContinuationToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListBucketMetricsConfigurationsCommand = serializeAws_restXmlListBucketMetricsConfigurationsCommand;
async function serializeAws_restXmlListBucketsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/";
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlListBucketsCommand = serializeAws_restXmlListBucketsCommand;
async function serializeAws_restXmlListMultipartUploadsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        uploads: ""
    };
    if (input.Delimiter !== undefined) {
        query["delimiter"] = input.Delimiter;
    }
    if (input.EncodingType !== undefined) {
        query["encoding-type"] = input.EncodingType;
    }
    if (input.KeyMarker !== undefined) {
        query["key-marker"] = input.KeyMarker;
    }
    if (input.MaxUploads !== undefined) {
        query["max-uploads"] = input.MaxUploads.toString();
    }
    if (input.Prefix !== undefined) {
        query["prefix"] = input.Prefix;
    }
    if (input.UploadIdMarker !== undefined) {
        query["upload-id-marker"] = input.UploadIdMarker;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListMultipartUploadsCommand = serializeAws_restXmlListMultipartUploadsCommand;
async function serializeAws_restXmlListObjectVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        versions: ""
    };
    if (input.Delimiter !== undefined) {
        query["delimiter"] = input.Delimiter;
    }
    if (input.EncodingType !== undefined) {
        query["encoding-type"] = input.EncodingType;
    }
    if (input.KeyMarker !== undefined) {
        query["key-marker"] = input.KeyMarker;
    }
    if (input.MaxKeys !== undefined) {
        query["max-keys"] = input.MaxKeys.toString();
    }
    if (input.Prefix !== undefined) {
        query["prefix"] = input.Prefix;
    }
    if (input.VersionIdMarker !== undefined) {
        query["version-id-marker"] = input.VersionIdMarker;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListObjectVersionsCommand = serializeAws_restXmlListObjectVersionsCommand;
async function serializeAws_restXmlListObjectsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {};
    if (input.Delimiter !== undefined) {
        query["delimiter"] = input.Delimiter;
    }
    if (input.EncodingType !== undefined) {
        query["encoding-type"] = input.EncodingType;
    }
    if (input.Marker !== undefined) {
        query["marker"] = input.Marker;
    }
    if (input.MaxKeys !== undefined) {
        query["max-keys"] = input.MaxKeys.toString();
    }
    if (input.Prefix !== undefined) {
        query["prefix"] = input.Prefix;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListObjectsCommand = serializeAws_restXmlListObjectsCommand;
async function serializeAws_restXmlListObjectsV2Command(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        "list-type": "2"
    };
    if (input.ContinuationToken !== undefined) {
        query["continuation-token"] = input.ContinuationToken;
    }
    if (input.Delimiter !== undefined) {
        query["delimiter"] = input.Delimiter;
    }
    if (input.EncodingType !== undefined) {
        query["encoding-type"] = input.EncodingType;
    }
    if (input.FetchOwner !== undefined) {
        query["fetch-owner"] = input.FetchOwner.toString();
    }
    if (input.MaxKeys !== undefined) {
        query["max-keys"] = input.MaxKeys.toString();
    }
    if (input.Prefix !== undefined) {
        query["prefix"] = input.Prefix;
    }
    if (input.StartAfter !== undefined) {
        query["start-after"] = input.StartAfter;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListObjectsV2Command = serializeAws_restXmlListObjectsV2Command;
async function serializeAws_restXmlListPartsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        "x-id": "ListParts"
    };
    if (input.MaxParts !== undefined) {
        query["max-parts"] = input.MaxParts.toString();
    }
    if (input.PartNumberMarker !== undefined) {
        query["part-number-marker"] = input.PartNumberMarker.toString();
    }
    if (input.UploadId !== undefined) {
        query["uploadId"] = input.UploadId;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListPartsCommand = serializeAws_restXmlListPartsCommand;
async function serializeAws_restXmlPutBucketAccelerateConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        accelerate: ""
    };
    let body;
    let contents;
    if (input.AccelerateConfiguration !== undefined) {
        contents = serializeAws_restXmlAccelerateConfiguration(input.AccelerateConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketAccelerateConfigurationCommand = serializeAws_restXmlPutBucketAccelerateConfigurationCommand;
async function serializeAws_restXmlPutBucketAclCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ACL !== undefined) {
        headers["x-amz-acl"] = input.ACL;
    }
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    if (input.GrantFullControl !== undefined) {
        headers["x-amz-grant-full-control"] = input.GrantFullControl;
    }
    if (input.GrantRead !== undefined) {
        headers["x-amz-grant-read"] = input.GrantRead;
    }
    if (input.GrantReadACP !== undefined) {
        headers["x-amz-grant-read-acp"] = input.GrantReadACP;
    }
    if (input.GrantWrite !== undefined) {
        headers["x-amz-grant-write"] = input.GrantWrite;
    }
    if (input.GrantWriteACP !== undefined) {
        headers["x-amz-grant-write-acp"] = input.GrantWriteACP;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        acl: ""
    };
    let body;
    let contents;
    if (input.AccessControlPolicy !== undefined) {
        contents = serializeAws_restXmlAccessControlPolicy(input.AccessControlPolicy, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketAclCommand = serializeAws_restXmlPutBucketAclCommand;
async function serializeAws_restXmlPutBucketAnalyticsConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        analytics: ""
    };
    if (input.Id !== undefined) {
        query["id"] = input.Id;
    }
    let body;
    let contents;
    if (input.AnalyticsConfiguration !== undefined) {
        contents = serializeAws_restXmlAnalyticsConfiguration(input.AnalyticsConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketAnalyticsConfigurationCommand = serializeAws_restXmlPutBucketAnalyticsConfigurationCommand;
async function serializeAws_restXmlPutBucketCorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        cors: ""
    };
    let body;
    let contents;
    if (input.CORSConfiguration !== undefined) {
        contents = serializeAws_restXmlCORSConfiguration(input.CORSConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketCorsCommand = serializeAws_restXmlPutBucketCorsCommand;
async function serializeAws_restXmlPutBucketEncryptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        encryption: ""
    };
    let body;
    let contents;
    if (input.ServerSideEncryptionConfiguration !== undefined) {
        contents = serializeAws_restXmlServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketEncryptionCommand = serializeAws_restXmlPutBucketEncryptionCommand;
async function serializeAws_restXmlPutBucketInventoryConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        inventory: ""
    };
    if (input.Id !== undefined) {
        query["id"] = input.Id;
    }
    let body;
    let contents;
    if (input.InventoryConfiguration !== undefined) {
        contents = serializeAws_restXmlInventoryConfiguration(input.InventoryConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketInventoryConfigurationCommand = serializeAws_restXmlPutBucketInventoryConfigurationCommand;
async function serializeAws_restXmlPutBucketLifecycleConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        lifecycle: ""
    };
    let body;
    let contents;
    if (input.LifecycleConfiguration !== undefined) {
        contents = serializeAws_restXmlBucketLifecycleConfiguration(input.LifecycleConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketLifecycleConfigurationCommand = serializeAws_restXmlPutBucketLifecycleConfigurationCommand;
async function serializeAws_restXmlPutBucketLoggingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        logging: ""
    };
    let body;
    let contents;
    if (input.BucketLoggingStatus !== undefined) {
        contents = serializeAws_restXmlBucketLoggingStatus(input.BucketLoggingStatus, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketLoggingCommand = serializeAws_restXmlPutBucketLoggingCommand;
async function serializeAws_restXmlPutBucketMetricsConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        metrics: ""
    };
    if (input.Id !== undefined) {
        query["id"] = input.Id;
    }
    let body;
    let contents;
    if (input.MetricsConfiguration !== undefined) {
        contents = serializeAws_restXmlMetricsConfiguration(input.MetricsConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketMetricsConfigurationCommand = serializeAws_restXmlPutBucketMetricsConfigurationCommand;
async function serializeAws_restXmlPutBucketNotificationConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        notification: ""
    };
    let body;
    let contents;
    if (input.NotificationConfiguration !== undefined) {
        contents = serializeAws_restXmlNotificationConfiguration(input.NotificationConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketNotificationConfigurationCommand = serializeAws_restXmlPutBucketNotificationConfigurationCommand;
async function serializeAws_restXmlPutBucketPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ConfirmRemoveSelfBucketAccess !== undefined) {
        headers["x-amz-confirm-remove-self-bucket-access"] = input.ConfirmRemoveSelfBucketAccess.toString();
    }
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        policy: ""
    };
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("PutBucketPolicyRequest");
    bodyNode.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    if (input.Policy !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Policy")
            .addChildNode(new xml_builder_1.XmlText(input.Policy))
            .withName("Policy"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketPolicyCommand = serializeAws_restXmlPutBucketPolicyCommand;
async function serializeAws_restXmlPutBucketReplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    if (input.Token !== undefined) {
        headers["x-amz-bucket-object-lock-token"] = input.Token;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        replication: ""
    };
    let body;
    let contents;
    if (input.ReplicationConfiguration !== undefined) {
        contents = serializeAws_restXmlReplicationConfiguration(input.ReplicationConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketReplicationCommand = serializeAws_restXmlPutBucketReplicationCommand;
async function serializeAws_restXmlPutBucketRequestPaymentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        requestPayment: ""
    };
    let body;
    let contents;
    if (input.RequestPaymentConfiguration !== undefined) {
        contents = serializeAws_restXmlRequestPaymentConfiguration(input.RequestPaymentConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketRequestPaymentCommand = serializeAws_restXmlPutBucketRequestPaymentCommand;
async function serializeAws_restXmlPutBucketTaggingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        tagging: ""
    };
    let body;
    let contents;
    if (input.Tagging !== undefined) {
        contents = serializeAws_restXmlTagging(input.Tagging, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketTaggingCommand = serializeAws_restXmlPutBucketTaggingCommand;
async function serializeAws_restXmlPutBucketVersioningCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    if (input.MFA !== undefined) {
        headers["x-amz-mfa"] = input.MFA;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        versioning: ""
    };
    let body;
    let contents;
    if (input.VersioningConfiguration !== undefined) {
        contents = serializeAws_restXmlVersioningConfiguration(input.VersioningConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketVersioningCommand = serializeAws_restXmlPutBucketVersioningCommand;
async function serializeAws_restXmlPutBucketWebsiteCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        website: ""
    };
    let body;
    let contents;
    if (input.WebsiteConfiguration !== undefined) {
        contents = serializeAws_restXmlWebsiteConfiguration(input.WebsiteConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutBucketWebsiteCommand = serializeAws_restXmlPutBucketWebsiteCommand;
async function serializeAws_restXmlPutObjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/octet-stream";
    if (input.ACL !== undefined) {
        headers["x-amz-acl"] = input.ACL;
    }
    if (input.CacheControl !== undefined) {
        headers["Cache-Control"] = input.CacheControl;
    }
    if (input.ContentDisposition !== undefined) {
        headers["Content-Disposition"] = input.ContentDisposition;
    }
    if (input.ContentEncoding !== undefined) {
        headers["Content-Encoding"] = input.ContentEncoding;
    }
    if (input.ContentLanguage !== undefined) {
        headers["Content-Language"] = input.ContentLanguage;
    }
    if (input.ContentLength !== undefined) {
        headers["Content-Length"] = input.ContentLength.toString();
    }
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    if (input.ContentType !== undefined) {
        headers["Content-Type"] = input.ContentType;
    }
    if (input.Expires !== undefined) {
        headers["Expires"] = smithy_client_1.dateToUtcString(input.Expires).toString();
    }
    if (input.GrantFullControl !== undefined) {
        headers["x-amz-grant-full-control"] = input.GrantFullControl;
    }
    if (input.GrantRead !== undefined) {
        headers["x-amz-grant-read"] = input.GrantRead;
    }
    if (input.GrantReadACP !== undefined) {
        headers["x-amz-grant-read-acp"] = input.GrantReadACP;
    }
    if (input.GrantWriteACP !== undefined) {
        headers["x-amz-grant-write-acp"] = input.GrantWriteACP;
    }
    if (input.ObjectLockLegalHoldStatus !== undefined) {
        headers["x-amz-object-lock-legal-hold"] = input.ObjectLockLegalHoldStatus;
    }
    if (input.ObjectLockMode !== undefined) {
        headers["x-amz-object-lock-mode"] = input.ObjectLockMode;
    }
    if (input.ObjectLockRetainUntilDate !== undefined) {
        headers["x-amz-object-lock-retain-until-date"] = (input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z").toString();
    }
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    if (input.SSECustomerAlgorithm !== undefined) {
        headers["x-amz-server-side-encryption-customer-algorithm"] =
            input.SSECustomerAlgorithm;
    }
    if (input.SSECustomerKey !== undefined) {
        headers["x-amz-server-side-encryption-customer-key"] = input.SSECustomerKey;
    }
    if (input.SSECustomerKeyMD5 !== undefined) {
        headers["x-amz-server-side-encryption-customer-key-MD5"] =
            input.SSECustomerKeyMD5;
    }
    if (input.SSEKMSEncryptionContext !== undefined) {
        headers["x-amz-server-side-encryption-context"] =
            input.SSEKMSEncryptionContext;
    }
    if (input.SSEKMSKeyId !== undefined) {
        headers["x-amz-server-side-encryption-aws-kms-key-id"] = input.SSEKMSKeyId;
    }
    if (input.ServerSideEncryption !== undefined) {
        headers["x-amz-server-side-encryption"] = input.ServerSideEncryption;
    }
    if (input.StorageClass !== undefined) {
        headers["x-amz-storage-class"] = input.StorageClass;
    }
    if (input.Tagging !== undefined) {
        headers["x-amz-tagging"] = input.Tagging;
    }
    if (input.WebsiteRedirectLocation !== undefined) {
        headers["x-amz-website-redirect-location"] = input.WebsiteRedirectLocation;
    }
    if (input.Metadata !== undefined) {
        Object.keys(input.Metadata).forEach(suffix => {
            headers["x-amz-meta-" + suffix] = input.Metadata[suffix];
        });
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        "x-id": "PutObject"
    };
    let body;
    let contents;
    if (input.Body !== undefined) {
        contents = input.Body;
        body = contents;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutObjectCommand = serializeAws_restXmlPutObjectCommand;
async function serializeAws_restXmlPutObjectAclCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ACL !== undefined) {
        headers["x-amz-acl"] = input.ACL;
    }
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    if (input.GrantFullControl !== undefined) {
        headers["x-amz-grant-full-control"] = input.GrantFullControl;
    }
    if (input.GrantRead !== undefined) {
        headers["x-amz-grant-read"] = input.GrantRead;
    }
    if (input.GrantReadACP !== undefined) {
        headers["x-amz-grant-read-acp"] = input.GrantReadACP;
    }
    if (input.GrantWrite !== undefined) {
        headers["x-amz-grant-write"] = input.GrantWrite;
    }
    if (input.GrantWriteACP !== undefined) {
        headers["x-amz-grant-write-acp"] = input.GrantWriteACP;
    }
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        acl: ""
    };
    if (input.VersionId !== undefined) {
        query["versionId"] = input.VersionId;
    }
    let body;
    let contents;
    if (input.AccessControlPolicy !== undefined) {
        contents = serializeAws_restXmlAccessControlPolicy(input.AccessControlPolicy, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutObjectAclCommand = serializeAws_restXmlPutObjectAclCommand;
async function serializeAws_restXmlPutObjectLegalHoldCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        "legal-hold": ""
    };
    if (input.VersionId !== undefined) {
        query["versionId"] = input.VersionId;
    }
    let body;
    let contents;
    if (input.LegalHold !== undefined) {
        contents = serializeAws_restXmlObjectLockLegalHold(input.LegalHold, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutObjectLegalHoldCommand = serializeAws_restXmlPutObjectLegalHoldCommand;
async function serializeAws_restXmlPutObjectLockConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    if (input.Token !== undefined) {
        headers["x-amz-bucket-object-lock-token"] = input.Token;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        "object-lock": ""
    };
    let body;
    let contents;
    if (input.ObjectLockConfiguration !== undefined) {
        contents = serializeAws_restXmlObjectLockConfiguration(input.ObjectLockConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutObjectLockConfigurationCommand = serializeAws_restXmlPutObjectLockConfigurationCommand;
async function serializeAws_restXmlPutObjectRetentionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.BypassGovernanceRetention !== undefined) {
        headers["x-amz-bypass-governance-retention"] = input.BypassGovernanceRetention.toString();
    }
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        retention: ""
    };
    if (input.VersionId !== undefined) {
        query["versionId"] = input.VersionId;
    }
    let body;
    let contents;
    if (input.Retention !== undefined) {
        contents = serializeAws_restXmlObjectLockRetention(input.Retention, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutObjectRetentionCommand = serializeAws_restXmlPutObjectRetentionCommand;
async function serializeAws_restXmlPutObjectTaggingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        tagging: ""
    };
    if (input.VersionId !== undefined) {
        query["versionId"] = input.VersionId;
    }
    let body;
    let contents;
    if (input.Tagging !== undefined) {
        contents = serializeAws_restXmlTagging(input.Tagging, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutObjectTaggingCommand = serializeAws_restXmlPutObjectTaggingCommand;
async function serializeAws_restXmlPutPublicAccessBlockCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    let resolvedPath = "/{Bucket}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    const query = {
        publicAccessBlock: ""
    };
    let body;
    let contents;
    if (input.PublicAccessBlockConfiguration !== undefined) {
        contents = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlPutPublicAccessBlockCommand = serializeAws_restXmlPutPublicAccessBlockCommand;
async function serializeAws_restXmlRestoreObjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        restore: ""
    };
    if (input.VersionId !== undefined) {
        query["versionId"] = input.VersionId;
    }
    let body;
    let contents;
    if (input.RestoreRequest !== undefined) {
        contents = serializeAws_restXmlRestoreRequest(input.RestoreRequest, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlRestoreObjectCommand = serializeAws_restXmlRestoreObjectCommand;
async function serializeAws_restXmlSelectObjectContentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    if (input.SSECustomerAlgorithm !== undefined) {
        headers["x-amz-server-side-encryption-customer-algorithm"] =
            input.SSECustomerAlgorithm;
    }
    if (input.SSECustomerKey !== undefined) {
        headers["x-amz-server-side-encryption-customer-key"] = input.SSECustomerKey;
    }
    if (input.SSECustomerKeyMD5 !== undefined) {
        headers["x-amz-server-side-encryption-customer-key-MD5"] =
            input.SSECustomerKeyMD5;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        select: "",
        "select-type": "2"
    };
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("SelectObjectContentRequest");
    bodyNode.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    if (input.Expression !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Expression")
            .addChildNode(new xml_builder_1.XmlText(input.Expression))
            .withName("Expression"));
    }
    if (input.ExpressionType !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ExpressionType")
            .addChildNode(new xml_builder_1.XmlText(input.ExpressionType))
            .withName("ExpressionType"));
    }
    if (input.InputSerialization !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlInputSerialization(input.InputSerialization, context).withName("InputSerialization"));
    }
    if (input.OutputSerialization !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlOutputSerialization(input.OutputSerialization, context).withName("OutputSerialization"));
    }
    if (input.RequestProgress !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlRequestProgress(input.RequestProgress, context).withName("RequestProgress"));
    }
    if (input.ScanRange !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlScanRange(input.ScanRange, context).withName("ScanRange"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlSelectObjectContentCommand = serializeAws_restXmlSelectObjectContentCommand;
async function serializeAws_restXmlUploadPartCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/octet-stream";
    if (input.ContentLength !== undefined) {
        headers["Content-Length"] = input.ContentLength.toString();
    }
    if (input.ContentMD5 !== undefined) {
        headers["Content-MD5"] = input.ContentMD5;
    }
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    if (input.SSECustomerAlgorithm !== undefined) {
        headers["x-amz-server-side-encryption-customer-algorithm"] =
            input.SSECustomerAlgorithm;
    }
    if (input.SSECustomerKey !== undefined) {
        headers["x-amz-server-side-encryption-customer-key"] = input.SSECustomerKey;
    }
    if (input.SSECustomerKeyMD5 !== undefined) {
        headers["x-amz-server-side-encryption-customer-key-MD5"] =
            input.SSECustomerKeyMD5;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        "x-id": "UploadPart"
    };
    if (input.PartNumber !== undefined) {
        query["partNumber"] = input.PartNumber.toString();
    }
    if (input.UploadId !== undefined) {
        query["uploadId"] = input.UploadId;
    }
    let body;
    let contents;
    if (input.Body !== undefined) {
        contents = input.Body;
        body = contents;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query, body: body }));
}
exports.serializeAws_restXmlUploadPartCommand = serializeAws_restXmlUploadPartCommand;
async function serializeAws_restXmlUploadPartCopyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    if (input.CopySource !== undefined) {
        headers["x-amz-copy-source"] = input.CopySource;
    }
    if (input.CopySourceIfMatch !== undefined) {
        headers["x-amz-copy-source-if-match"] = input.CopySourceIfMatch;
    }
    if (input.CopySourceIfModifiedSince !== undefined) {
        headers["x-amz-copy-source-if-modified-since"] = smithy_client_1.dateToUtcString(input.CopySourceIfModifiedSince).toString();
    }
    if (input.CopySourceIfNoneMatch !== undefined) {
        headers["x-amz-copy-source-if-none-match"] = input.CopySourceIfNoneMatch;
    }
    if (input.CopySourceIfUnmodifiedSince !== undefined) {
        headers["x-amz-copy-source-if-unmodified-since"] = smithy_client_1.dateToUtcString(input.CopySourceIfUnmodifiedSince).toString();
    }
    if (input.CopySourceRange !== undefined) {
        headers["x-amz-copy-source-range"] = input.CopySourceRange;
    }
    if (input.CopySourceSSECustomerAlgorithm !== undefined) {
        headers["x-amz-copy-source-server-side-encryption-customer-algorithm"] =
            input.CopySourceSSECustomerAlgorithm;
    }
    if (input.CopySourceSSECustomerKey !== undefined) {
        headers["x-amz-copy-source-server-side-encryption-customer-key"] =
            input.CopySourceSSECustomerKey;
    }
    if (input.CopySourceSSECustomerKeyMD5 !== undefined) {
        headers["x-amz-copy-source-server-side-encryption-customer-key-MD5"] =
            input.CopySourceSSECustomerKeyMD5;
    }
    if (input.RequestPayer !== undefined) {
        headers["x-amz-request-payer"] = input.RequestPayer;
    }
    if (input.SSECustomerAlgorithm !== undefined) {
        headers["x-amz-server-side-encryption-customer-algorithm"] =
            input.SSECustomerAlgorithm;
    }
    if (input.SSECustomerKey !== undefined) {
        headers["x-amz-server-side-encryption-customer-key"] = input.SSECustomerKey;
    }
    if (input.SSECustomerKeyMD5 !== undefined) {
        headers["x-amz-server-side-encryption-customer-key-MD5"] =
            input.SSECustomerKeyMD5;
    }
    let resolvedPath = "/{Bucket}/{Key+}";
    if (input.Bucket !== undefined) {
        const labelValue = input.Bucket;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Bucket.");
        }
        resolvedPath = resolvedPath.replace("{Bucket}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Bucket.");
    }
    if (input.Key !== undefined) {
        const labelValue = input.Key;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Key.");
        }
        resolvedPath = resolvedPath.replace("{Key+}", labelValue
            .split("/")
            .map(segment => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: Key.");
    }
    const query = {
        "x-id": "UploadPartCopy"
    };
    if (input.PartNumber !== undefined) {
        query["partNumber"] = input.PartNumber.toString();
    }
    if (input.UploadId !== undefined) {
        query["uploadId"] = input.UploadId;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlUploadPartCopyCommand = serializeAws_restXmlUploadPartCopyCommand;
async function deserializeAws_restXmlAbortMultipartUploadCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlAbortMultipartUploadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "AbortMultipartUploadOutput",
        RequestCharged: undefined
    };
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlAbortMultipartUploadCommand = deserializeAws_restXmlAbortMultipartUploadCommand;
async function deserializeAws_restXmlAbortMultipartUploadCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchUpload":
        case "com.amazonaws.s3#NoSuchUpload":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchUploadResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCompleteMultipartUploadCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlCompleteMultipartUploadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CompleteMultipartUploadOutput",
        Bucket: undefined,
        ETag: undefined,
        Expiration: undefined,
        Key: undefined,
        Location: undefined,
        RequestCharged: undefined,
        SSEKMSKeyId: undefined,
        ServerSideEncryption: undefined,
        VersionId: undefined
    };
    if (output.headers["x-amz-expiration"] !== undefined) {
        contents.Expiration = output.headers["x-amz-expiration"];
    }
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
        contents.SSEKMSKeyId =
            output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
    }
    if (output.headers["x-amz-server-side-encryption"] !== undefined) {
        contents.ServerSideEncryption =
            output.headers["x-amz-server-side-encryption"];
    }
    if (output.headers["x-amz-version-id"] !== undefined) {
        contents.VersionId = output.headers["x-amz-version-id"];
    }
    const data = await parseBody(output.body, context);
    if (data["Bucket"] !== undefined) {
        contents.Bucket = data["Bucket"];
    }
    if (data["ETag"] !== undefined) {
        contents.ETag = data["ETag"];
    }
    if (data["Key"] !== undefined) {
        contents.Key = data["Key"];
    }
    if (data["Location"] !== undefined) {
        contents.Location = data["Location"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCompleteMultipartUploadCommand = deserializeAws_restXmlCompleteMultipartUploadCommand;
async function deserializeAws_restXmlCompleteMultipartUploadCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlCopyObjectCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlCopyObjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CopyObjectOutput",
        CopyObjectResult: undefined,
        CopySourceVersionId: undefined,
        Expiration: undefined,
        RequestCharged: undefined,
        SSECustomerAlgorithm: undefined,
        SSECustomerKeyMD5: undefined,
        SSEKMSEncryptionContext: undefined,
        SSEKMSKeyId: undefined,
        ServerSideEncryption: undefined,
        VersionId: undefined
    };
    if (output.headers["x-amz-copy-source-version-id"] !== undefined) {
        contents.CopySourceVersionId =
            output.headers["x-amz-copy-source-version-id"];
    }
    if (output.headers["x-amz-expiration"] !== undefined) {
        contents.Expiration = output.headers["x-amz-expiration"];
    }
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !==
        undefined) {
        contents.SSECustomerAlgorithm =
            output.headers["x-amz-server-side-encryption-customer-algorithm"];
    }
    if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !==
        undefined) {
        contents.SSECustomerKeyMD5 =
            output.headers["x-amz-server-side-encryption-customer-key-md5"];
    }
    if (output.headers["x-amz-server-side-encryption-context"] !== undefined) {
        contents.SSEKMSEncryptionContext =
            output.headers["x-amz-server-side-encryption-context"];
    }
    if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
        contents.SSEKMSKeyId =
            output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
    }
    if (output.headers["x-amz-server-side-encryption"] !== undefined) {
        contents.ServerSideEncryption =
            output.headers["x-amz-server-side-encryption"];
    }
    if (output.headers["x-amz-version-id"] !== undefined) {
        contents.VersionId = output.headers["x-amz-version-id"];
    }
    const data = await parseBody(output.body, context);
    contents.CopyObjectResult = deserializeAws_restXmlCopyObjectResult(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCopyObjectCommand = deserializeAws_restXmlCopyObjectCommand;
async function deserializeAws_restXmlCopyObjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ObjectNotInActiveTierError":
        case "com.amazonaws.s3#ObjectNotInActiveTierError":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlObjectNotInActiveTierErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateBucketCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateBucketCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateBucketOutput",
        Location: undefined
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateBucketCommand = deserializeAws_restXmlCreateBucketCommand;
async function deserializeAws_restXmlCreateBucketCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BucketAlreadyExists":
        case "com.amazonaws.s3#BucketAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlBucketAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BucketAlreadyOwnedByYou":
        case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlBucketAlreadyOwnedByYouResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateMultipartUploadCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateMultipartUploadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateMultipartUploadOutput",
        AbortDate: undefined,
        AbortRuleId: undefined,
        Bucket: undefined,
        Key: undefined,
        RequestCharged: undefined,
        SSECustomerAlgorithm: undefined,
        SSECustomerKeyMD5: undefined,
        SSEKMSEncryptionContext: undefined,
        SSEKMSKeyId: undefined,
        ServerSideEncryption: undefined,
        UploadId: undefined
    };
    if (output.headers["x-amz-abort-date"] !== undefined) {
        contents.AbortDate = new Date(output.headers["x-amz-abort-date"]);
    }
    if (output.headers["x-amz-abort-rule-id"] !== undefined) {
        contents.AbortRuleId = output.headers["x-amz-abort-rule-id"];
    }
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !==
        undefined) {
        contents.SSECustomerAlgorithm =
            output.headers["x-amz-server-side-encryption-customer-algorithm"];
    }
    if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !==
        undefined) {
        contents.SSECustomerKeyMD5 =
            output.headers["x-amz-server-side-encryption-customer-key-md5"];
    }
    if (output.headers["x-amz-server-side-encryption-context"] !== undefined) {
        contents.SSEKMSEncryptionContext =
            output.headers["x-amz-server-side-encryption-context"];
    }
    if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
        contents.SSEKMSKeyId =
            output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
    }
    if (output.headers["x-amz-server-side-encryption"] !== undefined) {
        contents.ServerSideEncryption =
            output.headers["x-amz-server-side-encryption"];
    }
    const data = await parseBody(output.body, context);
    if (data["Bucket"] !== undefined) {
        contents.Bucket = data["Bucket"];
    }
    if (data["Key"] !== undefined) {
        contents.Key = data["Key"];
    }
    if (data["UploadId"] !== undefined) {
        contents.UploadId = data["UploadId"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateMultipartUploadCommand = deserializeAws_restXmlCreateMultipartUploadCommand;
async function deserializeAws_restXmlCreateMultipartUploadCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeleteBucketCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteBucketCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteBucketCommand = deserializeAws_restXmlDeleteBucketCommand;
async function deserializeAws_restXmlDeleteBucketCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand = deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand;
async function deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeleteBucketCorsCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteBucketCorsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteBucketCorsCommand = deserializeAws_restXmlDeleteBucketCorsCommand;
async function deserializeAws_restXmlDeleteBucketCorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeleteBucketEncryptionCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteBucketEncryptionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteBucketEncryptionCommand = deserializeAws_restXmlDeleteBucketEncryptionCommand;
async function deserializeAws_restXmlDeleteBucketEncryptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeleteBucketInventoryConfigurationCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteBucketInventoryConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteBucketInventoryConfigurationCommand = deserializeAws_restXmlDeleteBucketInventoryConfigurationCommand;
async function deserializeAws_restXmlDeleteBucketInventoryConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeleteBucketLifecycleCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteBucketLifecycleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteBucketLifecycleCommand = deserializeAws_restXmlDeleteBucketLifecycleCommand;
async function deserializeAws_restXmlDeleteBucketLifecycleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteBucketMetricsConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand = deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand;
async function deserializeAws_restXmlDeleteBucketMetricsConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeleteBucketPolicyCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteBucketPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteBucketPolicyCommand = deserializeAws_restXmlDeleteBucketPolicyCommand;
async function deserializeAws_restXmlDeleteBucketPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeleteBucketReplicationCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteBucketReplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteBucketReplicationCommand = deserializeAws_restXmlDeleteBucketReplicationCommand;
async function deserializeAws_restXmlDeleteBucketReplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeleteBucketTaggingCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteBucketTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteBucketTaggingCommand = deserializeAws_restXmlDeleteBucketTaggingCommand;
async function deserializeAws_restXmlDeleteBucketTaggingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeleteBucketWebsiteCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteBucketWebsiteCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteBucketWebsiteCommand = deserializeAws_restXmlDeleteBucketWebsiteCommand;
async function deserializeAws_restXmlDeleteBucketWebsiteCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeleteObjectCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteObjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteObjectOutput",
        DeleteMarker: undefined,
        RequestCharged: undefined,
        VersionId: undefined
    };
    if (output.headers["x-amz-delete-marker"] !== undefined) {
        contents.DeleteMarker = output.headers["x-amz-delete-marker"] === "true";
    }
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    if (output.headers["x-amz-version-id"] !== undefined) {
        contents.VersionId = output.headers["x-amz-version-id"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteObjectCommand = deserializeAws_restXmlDeleteObjectCommand;
async function deserializeAws_restXmlDeleteObjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeleteObjectTaggingCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteObjectTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteObjectTaggingOutput",
        VersionId: undefined
    };
    if (output.headers["x-amz-version-id"] !== undefined) {
        contents.VersionId = output.headers["x-amz-version-id"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteObjectTaggingCommand = deserializeAws_restXmlDeleteObjectTaggingCommand;
async function deserializeAws_restXmlDeleteObjectTaggingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeleteObjectsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteObjectsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteObjectsOutput",
        Deleted: undefined,
        Errors: undefined,
        RequestCharged: undefined
    };
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    const data = await parseBody(output.body, context);
    if (data.Deleted === "") {
        contents.Deleted = [];
    }
    if (data["Deleted"] !== undefined) {
        const wrappedItem = data["Deleted"] instanceof Array ? data["Deleted"] : [data["Deleted"]];
        contents.Deleted = deserializeAws_restXmlDeletedObjects(wrappedItem, context);
    }
    if (data.Error === "") {
        contents.Errors = [];
    }
    if (data["Error"] !== undefined) {
        const wrappedItem = data["Error"] instanceof Array ? data["Error"] : [data["Error"]];
        contents.Errors = deserializeAws_restXmlErrors(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteObjectsCommand = deserializeAws_restXmlDeleteObjectsCommand;
async function deserializeAws_restXmlDeleteObjectsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlDeletePublicAccessBlockCommand(output, context) {
    if (output.statusCode !== 204 && output.statusCode >= 400) {
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
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlGetBucketAccelerateConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketAccelerateConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketAccelerateConfigurationOutput",
        Status: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["Status"] !== undefined) {
        contents.Status = data["Status"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketAccelerateConfigurationCommand = deserializeAws_restXmlGetBucketAccelerateConfigurationCommand;
async function deserializeAws_restXmlGetBucketAccelerateConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketAclCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketAclCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketAclOutput",
        Grants: undefined,
        Owner: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.AccessControlList === "") {
        contents.Grants = [];
    }
    if (data["AccessControlList"] !== undefined &&
        data["AccessControlList"]["Grant"] !== undefined) {
        const wrappedItem = data["AccessControlList"]["Grant"] instanceof Array
            ? data["AccessControlList"]["Grant"]
            : [data["AccessControlList"]["Grant"]];
        contents.Grants = deserializeAws_restXmlGrants(wrappedItem, context);
    }
    if (data["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketAclCommand = deserializeAws_restXmlGetBucketAclCommand;
async function deserializeAws_restXmlGetBucketAclCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketAnalyticsConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketAnalyticsConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketAnalyticsConfigurationOutput",
        AnalyticsConfiguration: undefined
    };
    const data = await parseBody(output.body, context);
    contents.AnalyticsConfiguration = deserializeAws_restXmlAnalyticsConfiguration(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketAnalyticsConfigurationCommand = deserializeAws_restXmlGetBucketAnalyticsConfigurationCommand;
async function deserializeAws_restXmlGetBucketAnalyticsConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketCorsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketCorsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketCorsOutput",
        CORSRules: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.CORSRule === "") {
        contents.CORSRules = [];
    }
    if (data["CORSRule"] !== undefined) {
        const wrappedItem = data["CORSRule"] instanceof Array ? data["CORSRule"] : [data["CORSRule"]];
        contents.CORSRules = deserializeAws_restXmlCORSRules(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketCorsCommand = deserializeAws_restXmlGetBucketCorsCommand;
async function deserializeAws_restXmlGetBucketCorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketEncryptionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketEncryptionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketEncryptionOutput",
        ServerSideEncryptionConfiguration: undefined
    };
    const data = await parseBody(output.body, context);
    contents.ServerSideEncryptionConfiguration = deserializeAws_restXmlServerSideEncryptionConfiguration(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketEncryptionCommand = deserializeAws_restXmlGetBucketEncryptionCommand;
async function deserializeAws_restXmlGetBucketEncryptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketInventoryConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketInventoryConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketInventoryConfigurationOutput",
        InventoryConfiguration: undefined
    };
    const data = await parseBody(output.body, context);
    contents.InventoryConfiguration = deserializeAws_restXmlInventoryConfiguration(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketInventoryConfigurationCommand = deserializeAws_restXmlGetBucketInventoryConfigurationCommand;
async function deserializeAws_restXmlGetBucketInventoryConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketLifecycleConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketLifecycleConfigurationOutput",
        Rules: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Rule === "") {
        contents.Rules = [];
    }
    if (data["Rule"] !== undefined) {
        const wrappedItem = data["Rule"] instanceof Array ? data["Rule"] : [data["Rule"]];
        contents.Rules = deserializeAws_restXmlLifecycleRules(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketLifecycleConfigurationCommand = deserializeAws_restXmlGetBucketLifecycleConfigurationCommand;
async function deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketLocationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketLocationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketLocationOutput",
        LocationConstraint: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["LocationConstraint"] !== undefined) {
        contents.LocationConstraint = data["LocationConstraint"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketLocationCommand = deserializeAws_restXmlGetBucketLocationCommand;
async function deserializeAws_restXmlGetBucketLocationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketLoggingCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketLoggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketLoggingOutput",
        LoggingEnabled: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["LoggingEnabled"] !== undefined) {
        contents.LoggingEnabled = deserializeAws_restXmlLoggingEnabled(data["LoggingEnabled"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketLoggingCommand = deserializeAws_restXmlGetBucketLoggingCommand;
async function deserializeAws_restXmlGetBucketLoggingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketMetricsConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketMetricsConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketMetricsConfigurationOutput",
        MetricsConfiguration: undefined
    };
    const data = await parseBody(output.body, context);
    contents.MetricsConfiguration = deserializeAws_restXmlMetricsConfiguration(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketMetricsConfigurationCommand = deserializeAws_restXmlGetBucketMetricsConfigurationCommand;
async function deserializeAws_restXmlGetBucketMetricsConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketNotificationConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketNotificationConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "NotificationConfiguration",
        LambdaFunctionConfigurations: undefined,
        QueueConfigurations: undefined,
        TopicConfigurations: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.CloudFunctionConfiguration === "") {
        contents.LambdaFunctionConfigurations = [];
    }
    if (data["CloudFunctionConfiguration"] !== undefined) {
        const wrappedItem = data["CloudFunctionConfiguration"] instanceof Array
            ? data["CloudFunctionConfiguration"]
            : [data["CloudFunctionConfiguration"]];
        contents.LambdaFunctionConfigurations = deserializeAws_restXmlLambdaFunctionConfigurationList(wrappedItem, context);
    }
    if (data.QueueConfiguration === "") {
        contents.QueueConfigurations = [];
    }
    if (data["QueueConfiguration"] !== undefined) {
        const wrappedItem = data["QueueConfiguration"] instanceof Array
            ? data["QueueConfiguration"]
            : [data["QueueConfiguration"]];
        contents.QueueConfigurations = deserializeAws_restXmlQueueConfigurationList(wrappedItem, context);
    }
    if (data.TopicConfiguration === "") {
        contents.TopicConfigurations = [];
    }
    if (data["TopicConfiguration"] !== undefined) {
        const wrappedItem = data["TopicConfiguration"] instanceof Array
            ? data["TopicConfiguration"]
            : [data["TopicConfiguration"]];
        contents.TopicConfigurations = deserializeAws_restXmlTopicConfigurationList(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketNotificationConfigurationCommand = deserializeAws_restXmlGetBucketNotificationConfigurationCommand;
async function deserializeAws_restXmlGetBucketNotificationConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketPolicyCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketPolicyOutput",
        Policy: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["Policy"] !== undefined) {
        contents.Policy = data["Policy"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketPolicyCommand = deserializeAws_restXmlGetBucketPolicyCommand;
async function deserializeAws_restXmlGetBucketPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketPolicyStatusCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketPolicyStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketPolicyStatusOutput",
        PolicyStatus: undefined
    };
    const data = await parseBody(output.body, context);
    contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketPolicyStatusCommand = deserializeAws_restXmlGetBucketPolicyStatusCommand;
async function deserializeAws_restXmlGetBucketPolicyStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketReplicationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketReplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketReplicationOutput",
        ReplicationConfiguration: undefined
    };
    const data = await parseBody(output.body, context);
    contents.ReplicationConfiguration = deserializeAws_restXmlReplicationConfiguration(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketReplicationCommand = deserializeAws_restXmlGetBucketReplicationCommand;
async function deserializeAws_restXmlGetBucketReplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketRequestPaymentCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketRequestPaymentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketRequestPaymentOutput",
        Payer: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["Payer"] !== undefined) {
        contents.Payer = data["Payer"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketRequestPaymentCommand = deserializeAws_restXmlGetBucketRequestPaymentCommand;
async function deserializeAws_restXmlGetBucketRequestPaymentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketTaggingCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketTaggingOutput",
        TagSet: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.TagSet === "") {
        contents.TagSet = [];
    }
    if (data["TagSet"] !== undefined && data["TagSet"]["Tag"] !== undefined) {
        const wrappedItem = data["TagSet"]["Tag"] instanceof Array
            ? data["TagSet"]["Tag"]
            : [data["TagSet"]["Tag"]];
        contents.TagSet = deserializeAws_restXmlTagSet(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketTaggingCommand = deserializeAws_restXmlGetBucketTaggingCommand;
async function deserializeAws_restXmlGetBucketTaggingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketVersioningCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketVersioningCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketVersioningOutput",
        MFADelete: undefined,
        Status: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["MfaDelete"] !== undefined) {
        contents.MFADelete = data["MfaDelete"];
    }
    if (data["Status"] !== undefined) {
        contents.Status = data["Status"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketVersioningCommand = deserializeAws_restXmlGetBucketVersioningCommand;
async function deserializeAws_restXmlGetBucketVersioningCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetBucketWebsiteCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetBucketWebsiteCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetBucketWebsiteOutput",
        ErrorDocument: undefined,
        IndexDocument: undefined,
        RedirectAllRequestsTo: undefined,
        RoutingRules: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["ErrorDocument"] !== undefined) {
        contents.ErrorDocument = deserializeAws_restXmlErrorDocument(data["ErrorDocument"], context);
    }
    if (data["IndexDocument"] !== undefined) {
        contents.IndexDocument = deserializeAws_restXmlIndexDocument(data["IndexDocument"], context);
    }
    if (data["RedirectAllRequestsTo"] !== undefined) {
        contents.RedirectAllRequestsTo = deserializeAws_restXmlRedirectAllRequestsTo(data["RedirectAllRequestsTo"], context);
    }
    if (data.RoutingRules === "") {
        contents.RoutingRules = [];
    }
    if (data["RoutingRules"] !== undefined &&
        data["RoutingRules"]["RoutingRule"] !== undefined) {
        const wrappedItem = data["RoutingRules"]["RoutingRule"] instanceof Array
            ? data["RoutingRules"]["RoutingRule"]
            : [data["RoutingRules"]["RoutingRule"]];
        contents.RoutingRules = deserializeAws_restXmlRoutingRules(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetBucketWebsiteCommand = deserializeAws_restXmlGetBucketWebsiteCommand;
async function deserializeAws_restXmlGetBucketWebsiteCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetObjectCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetObjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetObjectOutput",
        AcceptRanges: undefined,
        Body: undefined,
        CacheControl: undefined,
        ContentDisposition: undefined,
        ContentEncoding: undefined,
        ContentLanguage: undefined,
        ContentLength: undefined,
        ContentRange: undefined,
        ContentType: undefined,
        DeleteMarker: undefined,
        ETag: undefined,
        Expiration: undefined,
        Expires: undefined,
        LastModified: undefined,
        Metadata: undefined,
        MissingMeta: undefined,
        ObjectLockLegalHoldStatus: undefined,
        ObjectLockMode: undefined,
        ObjectLockRetainUntilDate: undefined,
        PartsCount: undefined,
        ReplicationStatus: undefined,
        RequestCharged: undefined,
        Restore: undefined,
        SSECustomerAlgorithm: undefined,
        SSECustomerKeyMD5: undefined,
        SSEKMSKeyId: undefined,
        ServerSideEncryption: undefined,
        StorageClass: undefined,
        TagCount: undefined,
        VersionId: undefined,
        WebsiteRedirectLocation: undefined
    };
    if (output.headers["accept-ranges"] !== undefined) {
        contents.AcceptRanges = output.headers["accept-ranges"];
    }
    if (output.headers["cache-control"] !== undefined) {
        contents.CacheControl = output.headers["cache-control"];
    }
    if (output.headers["content-disposition"] !== undefined) {
        contents.ContentDisposition = output.headers["content-disposition"];
    }
    if (output.headers["content-encoding"] !== undefined) {
        contents.ContentEncoding = output.headers["content-encoding"];
    }
    if (output.headers["content-language"] !== undefined) {
        contents.ContentLanguage = output.headers["content-language"];
    }
    if (output.headers["content-length"] !== undefined) {
        contents.ContentLength = parseInt(output.headers["content-length"], 10);
    }
    if (output.headers["content-range"] !== undefined) {
        contents.ContentRange = output.headers["content-range"];
    }
    if (output.headers["content-type"] !== undefined) {
        contents.ContentType = output.headers["content-type"];
    }
    if (output.headers["x-amz-delete-marker"] !== undefined) {
        contents.DeleteMarker = output.headers["x-amz-delete-marker"] === "true";
    }
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["x-amz-expiration"] !== undefined) {
        contents.Expiration = output.headers["x-amz-expiration"];
    }
    if (output.headers["expires"] !== undefined) {
        contents.Expires = new Date(output.headers["expires"]);
    }
    if (output.headers["last-modified"] !== undefined) {
        contents.LastModified = new Date(output.headers["last-modified"]);
    }
    if (output.headers["x-amz-missing-meta"] !== undefined) {
        contents.MissingMeta = parseInt(output.headers["x-amz-missing-meta"], 10);
    }
    if (output.headers["x-amz-object-lock-legal-hold"] !== undefined) {
        contents.ObjectLockLegalHoldStatus =
            output.headers["x-amz-object-lock-legal-hold"];
    }
    if (output.headers["x-amz-object-lock-mode"] !== undefined) {
        contents.ObjectLockMode = output.headers["x-amz-object-lock-mode"];
    }
    if (output.headers["x-amz-object-lock-retain-until-date"] !== undefined) {
        contents.ObjectLockRetainUntilDate = new Date(output.headers["x-amz-object-lock-retain-until-date"]);
    }
    if (output.headers["x-amz-mp-parts-count"] !== undefined) {
        contents.PartsCount = parseInt(output.headers["x-amz-mp-parts-count"], 10);
    }
    if (output.headers["x-amz-replication-status"] !== undefined) {
        contents.ReplicationStatus = output.headers["x-amz-replication-status"];
    }
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    if (output.headers["x-amz-restore"] !== undefined) {
        contents.Restore = output.headers["x-amz-restore"];
    }
    if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !==
        undefined) {
        contents.SSECustomerAlgorithm =
            output.headers["x-amz-server-side-encryption-customer-algorithm"];
    }
    if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !==
        undefined) {
        contents.SSECustomerKeyMD5 =
            output.headers["x-amz-server-side-encryption-customer-key-md5"];
    }
    if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
        contents.SSEKMSKeyId =
            output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
    }
    if (output.headers["x-amz-server-side-encryption"] !== undefined) {
        contents.ServerSideEncryption =
            output.headers["x-amz-server-side-encryption"];
    }
    if (output.headers["x-amz-storage-class"] !== undefined) {
        contents.StorageClass = output.headers["x-amz-storage-class"];
    }
    if (output.headers["x-amz-tagging-count"] !== undefined) {
        contents.TagCount = parseInt(output.headers["x-amz-tagging-count"], 10);
    }
    if (output.headers["x-amz-version-id"] !== undefined) {
        contents.VersionId = output.headers["x-amz-version-id"];
    }
    if (output.headers["x-amz-website-redirect-location"] !== undefined) {
        contents.WebsiteRedirectLocation =
            output.headers["x-amz-website-redirect-location"];
    }
    Object.keys(output.headers).forEach(header => {
        if (contents.Metadata === undefined) {
            contents.Metadata = {};
        }
        if (header.startsWith("x-amz-meta-")) {
            contents.Metadata[header.substring(11)] = output.headers[header];
        }
    });
    const data = output.body;
    contents.Body = data;
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetObjectCommand = deserializeAws_restXmlGetObjectCommand;
async function deserializeAws_restXmlGetObjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchKey":
        case "com.amazonaws.s3#NoSuchKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetObjectAclCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetObjectAclCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetObjectAclOutput",
        Grants: undefined,
        Owner: undefined,
        RequestCharged: undefined
    };
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    const data = await parseBody(output.body, context);
    if (data.AccessControlList === "") {
        contents.Grants = [];
    }
    if (data["AccessControlList"] !== undefined &&
        data["AccessControlList"]["Grant"] !== undefined) {
        const wrappedItem = data["AccessControlList"]["Grant"] instanceof Array
            ? data["AccessControlList"]["Grant"]
            : [data["AccessControlList"]["Grant"]];
        contents.Grants = deserializeAws_restXmlGrants(wrappedItem, context);
    }
    if (data["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetObjectAclCommand = deserializeAws_restXmlGetObjectAclCommand;
async function deserializeAws_restXmlGetObjectAclCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchKey":
        case "com.amazonaws.s3#NoSuchKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetObjectLegalHoldCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetObjectLegalHoldCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetObjectLegalHoldOutput",
        LegalHold: undefined
    };
    const data = await parseBody(output.body, context);
    contents.LegalHold = deserializeAws_restXmlObjectLockLegalHold(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetObjectLegalHoldCommand = deserializeAws_restXmlGetObjectLegalHoldCommand;
async function deserializeAws_restXmlGetObjectLegalHoldCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetObjectLockConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetObjectLockConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetObjectLockConfigurationOutput",
        ObjectLockConfiguration: undefined
    };
    const data = await parseBody(output.body, context);
    contents.ObjectLockConfiguration = deserializeAws_restXmlObjectLockConfiguration(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetObjectLockConfigurationCommand = deserializeAws_restXmlGetObjectLockConfigurationCommand;
async function deserializeAws_restXmlGetObjectLockConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetObjectRetentionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetObjectRetentionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetObjectRetentionOutput",
        Retention: undefined
    };
    const data = await parseBody(output.body, context);
    contents.Retention = deserializeAws_restXmlObjectLockRetention(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetObjectRetentionCommand = deserializeAws_restXmlGetObjectRetentionCommand;
async function deserializeAws_restXmlGetObjectRetentionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetObjectTaggingCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetObjectTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetObjectTaggingOutput",
        TagSet: undefined,
        VersionId: undefined
    };
    if (output.headers["x-amz-version-id"] !== undefined) {
        contents.VersionId = output.headers["x-amz-version-id"];
    }
    const data = await parseBody(output.body, context);
    if (data.TagSet === "") {
        contents.TagSet = [];
    }
    if (data["TagSet"] !== undefined && data["TagSet"]["Tag"] !== undefined) {
        const wrappedItem = data["TagSet"]["Tag"] instanceof Array
            ? data["TagSet"]["Tag"]
            : [data["TagSet"]["Tag"]];
        contents.TagSet = deserializeAws_restXmlTagSet(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetObjectTaggingCommand = deserializeAws_restXmlGetObjectTaggingCommand;
async function deserializeAws_restXmlGetObjectTaggingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlGetObjectTorrentCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetObjectTorrentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetObjectTorrentOutput",
        Body: undefined,
        RequestCharged: undefined
    };
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    const data = output.body;
    contents.Body = data;
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetObjectTorrentCommand = deserializeAws_restXmlGetObjectTorrentCommand;
async function deserializeAws_restXmlGetObjectTorrentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlHeadBucketCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlHeadBucketCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlHeadBucketCommand = deserializeAws_restXmlHeadBucketCommand;
async function deserializeAws_restXmlHeadBucketCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchBucket":
        case "com.amazonaws.s3#NoSuchBucket":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlHeadObjectCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlHeadObjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "HeadObjectOutput",
        AcceptRanges: undefined,
        CacheControl: undefined,
        ContentDisposition: undefined,
        ContentEncoding: undefined,
        ContentLanguage: undefined,
        ContentLength: undefined,
        ContentType: undefined,
        DeleteMarker: undefined,
        ETag: undefined,
        Expiration: undefined,
        Expires: undefined,
        LastModified: undefined,
        Metadata: undefined,
        MissingMeta: undefined,
        ObjectLockLegalHoldStatus: undefined,
        ObjectLockMode: undefined,
        ObjectLockRetainUntilDate: undefined,
        PartsCount: undefined,
        ReplicationStatus: undefined,
        RequestCharged: undefined,
        Restore: undefined,
        SSECustomerAlgorithm: undefined,
        SSECustomerKeyMD5: undefined,
        SSEKMSKeyId: undefined,
        ServerSideEncryption: undefined,
        StorageClass: undefined,
        VersionId: undefined,
        WebsiteRedirectLocation: undefined
    };
    if (output.headers["accept-ranges"] !== undefined) {
        contents.AcceptRanges = output.headers["accept-ranges"];
    }
    if (output.headers["cache-control"] !== undefined) {
        contents.CacheControl = output.headers["cache-control"];
    }
    if (output.headers["content-disposition"] !== undefined) {
        contents.ContentDisposition = output.headers["content-disposition"];
    }
    if (output.headers["content-encoding"] !== undefined) {
        contents.ContentEncoding = output.headers["content-encoding"];
    }
    if (output.headers["content-language"] !== undefined) {
        contents.ContentLanguage = output.headers["content-language"];
    }
    if (output.headers["content-length"] !== undefined) {
        contents.ContentLength = parseInt(output.headers["content-length"], 10);
    }
    if (output.headers["content-type"] !== undefined) {
        contents.ContentType = output.headers["content-type"];
    }
    if (output.headers["x-amz-delete-marker"] !== undefined) {
        contents.DeleteMarker = output.headers["x-amz-delete-marker"] === "true";
    }
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["x-amz-expiration"] !== undefined) {
        contents.Expiration = output.headers["x-amz-expiration"];
    }
    if (output.headers["expires"] !== undefined) {
        contents.Expires = new Date(output.headers["expires"]);
    }
    if (output.headers["last-modified"] !== undefined) {
        contents.LastModified = new Date(output.headers["last-modified"]);
    }
    if (output.headers["x-amz-missing-meta"] !== undefined) {
        contents.MissingMeta = parseInt(output.headers["x-amz-missing-meta"], 10);
    }
    if (output.headers["x-amz-object-lock-legal-hold"] !== undefined) {
        contents.ObjectLockLegalHoldStatus =
            output.headers["x-amz-object-lock-legal-hold"];
    }
    if (output.headers["x-amz-object-lock-mode"] !== undefined) {
        contents.ObjectLockMode = output.headers["x-amz-object-lock-mode"];
    }
    if (output.headers["x-amz-object-lock-retain-until-date"] !== undefined) {
        contents.ObjectLockRetainUntilDate = new Date(output.headers["x-amz-object-lock-retain-until-date"]);
    }
    if (output.headers["x-amz-mp-parts-count"] !== undefined) {
        contents.PartsCount = parseInt(output.headers["x-amz-mp-parts-count"], 10);
    }
    if (output.headers["x-amz-replication-status"] !== undefined) {
        contents.ReplicationStatus = output.headers["x-amz-replication-status"];
    }
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    if (output.headers["x-amz-restore"] !== undefined) {
        contents.Restore = output.headers["x-amz-restore"];
    }
    if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !==
        undefined) {
        contents.SSECustomerAlgorithm =
            output.headers["x-amz-server-side-encryption-customer-algorithm"];
    }
    if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !==
        undefined) {
        contents.SSECustomerKeyMD5 =
            output.headers["x-amz-server-side-encryption-customer-key-md5"];
    }
    if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
        contents.SSEKMSKeyId =
            output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
    }
    if (output.headers["x-amz-server-side-encryption"] !== undefined) {
        contents.ServerSideEncryption =
            output.headers["x-amz-server-side-encryption"];
    }
    if (output.headers["x-amz-storage-class"] !== undefined) {
        contents.StorageClass = output.headers["x-amz-storage-class"];
    }
    if (output.headers["x-amz-version-id"] !== undefined) {
        contents.VersionId = output.headers["x-amz-version-id"];
    }
    if (output.headers["x-amz-website-redirect-location"] !== undefined) {
        contents.WebsiteRedirectLocation =
            output.headers["x-amz-website-redirect-location"];
    }
    Object.keys(output.headers).forEach(header => {
        if (contents.Metadata === undefined) {
            contents.Metadata = {};
        }
        if (header.startsWith("x-amz-meta-")) {
            contents.Metadata[header.substring(11)] = output.headers[header];
        }
    });
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlHeadObjectCommand = deserializeAws_restXmlHeadObjectCommand;
async function deserializeAws_restXmlHeadObjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchKey":
        case "com.amazonaws.s3#NoSuchKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListBucketAnalyticsConfigurationsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListBucketAnalyticsConfigurationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListBucketAnalyticsConfigurationsOutput",
        AnalyticsConfigurationList: undefined,
        ContinuationToken: undefined,
        IsTruncated: undefined,
        NextContinuationToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.AnalyticsConfiguration === "") {
        contents.AnalyticsConfigurationList = [];
    }
    if (data["AnalyticsConfiguration"] !== undefined) {
        const wrappedItem = data["AnalyticsConfiguration"] instanceof Array
            ? data["AnalyticsConfiguration"]
            : [data["AnalyticsConfiguration"]];
        contents.AnalyticsConfigurationList = deserializeAws_restXmlAnalyticsConfigurationList(wrappedItem, context);
    }
    if (data["ContinuationToken"] !== undefined) {
        contents.ContinuationToken = data["ContinuationToken"];
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["NextContinuationToken"] !== undefined) {
        contents.NextContinuationToken = data["NextContinuationToken"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListBucketAnalyticsConfigurationsCommand = deserializeAws_restXmlListBucketAnalyticsConfigurationsCommand;
async function deserializeAws_restXmlListBucketAnalyticsConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlListBucketInventoryConfigurationsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListBucketInventoryConfigurationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListBucketInventoryConfigurationsOutput",
        ContinuationToken: undefined,
        InventoryConfigurationList: undefined,
        IsTruncated: undefined,
        NextContinuationToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["ContinuationToken"] !== undefined) {
        contents.ContinuationToken = data["ContinuationToken"];
    }
    if (data.InventoryConfiguration === "") {
        contents.InventoryConfigurationList = [];
    }
    if (data["InventoryConfiguration"] !== undefined) {
        const wrappedItem = data["InventoryConfiguration"] instanceof Array
            ? data["InventoryConfiguration"]
            : [data["InventoryConfiguration"]];
        contents.InventoryConfigurationList = deserializeAws_restXmlInventoryConfigurationList(wrappedItem, context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["NextContinuationToken"] !== undefined) {
        contents.NextContinuationToken = data["NextContinuationToken"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListBucketInventoryConfigurationsCommand = deserializeAws_restXmlListBucketInventoryConfigurationsCommand;
async function deserializeAws_restXmlListBucketInventoryConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlListBucketMetricsConfigurationsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListBucketMetricsConfigurationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListBucketMetricsConfigurationsOutput",
        ContinuationToken: undefined,
        IsTruncated: undefined,
        MetricsConfigurationList: undefined,
        NextContinuationToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["ContinuationToken"] !== undefined) {
        contents.ContinuationToken = data["ContinuationToken"];
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data.MetricsConfiguration === "") {
        contents.MetricsConfigurationList = [];
    }
    if (data["MetricsConfiguration"] !== undefined) {
        const wrappedItem = data["MetricsConfiguration"] instanceof Array
            ? data["MetricsConfiguration"]
            : [data["MetricsConfiguration"]];
        contents.MetricsConfigurationList = deserializeAws_restXmlMetricsConfigurationList(wrappedItem, context);
    }
    if (data["NextContinuationToken"] !== undefined) {
        contents.NextContinuationToken = data["NextContinuationToken"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListBucketMetricsConfigurationsCommand = deserializeAws_restXmlListBucketMetricsConfigurationsCommand;
async function deserializeAws_restXmlListBucketMetricsConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlListBucketsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListBucketsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListBucketsOutput",
        Buckets: undefined,
        Owner: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Buckets === "") {
        contents.Buckets = [];
    }
    if (data["Buckets"] !== undefined &&
        data["Buckets"]["Bucket"] !== undefined) {
        const wrappedItem = data["Buckets"]["Bucket"] instanceof Array
            ? data["Buckets"]["Bucket"]
            : [data["Buckets"]["Bucket"]];
        contents.Buckets = deserializeAws_restXmlBuckets(wrappedItem, context);
    }
    if (data["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListBucketsCommand = deserializeAws_restXmlListBucketsCommand;
async function deserializeAws_restXmlListBucketsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlListMultipartUploadsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListMultipartUploadsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListMultipartUploadsOutput",
        Bucket: undefined,
        CommonPrefixes: undefined,
        Delimiter: undefined,
        EncodingType: undefined,
        IsTruncated: undefined,
        KeyMarker: undefined,
        MaxUploads: undefined,
        NextKeyMarker: undefined,
        NextUploadIdMarker: undefined,
        Prefix: undefined,
        UploadIdMarker: undefined,
        Uploads: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["Bucket"] !== undefined) {
        contents.Bucket = data["Bucket"];
    }
    if (data.CommonPrefixes === "") {
        contents.CommonPrefixes = [];
    }
    if (data["CommonPrefixes"] !== undefined) {
        const wrappedItem = data["CommonPrefixes"] instanceof Array
            ? data["CommonPrefixes"]
            : [data["CommonPrefixes"]];
        contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(wrappedItem, context);
    }
    if (data["Delimiter"] !== undefined) {
        contents.Delimiter = data["Delimiter"];
    }
    if (data["EncodingType"] !== undefined) {
        contents.EncodingType = data["EncodingType"];
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["KeyMarker"] !== undefined) {
        contents.KeyMarker = data["KeyMarker"];
    }
    if (data["MaxUploads"] !== undefined) {
        contents.MaxUploads = parseInt(data["MaxUploads"]);
    }
    if (data["NextKeyMarker"] !== undefined) {
        contents.NextKeyMarker = data["NextKeyMarker"];
    }
    if (data["NextUploadIdMarker"] !== undefined) {
        contents.NextUploadIdMarker = data["NextUploadIdMarker"];
    }
    if (data["Prefix"] !== undefined) {
        contents.Prefix = data["Prefix"];
    }
    if (data["UploadIdMarker"] !== undefined) {
        contents.UploadIdMarker = data["UploadIdMarker"];
    }
    if (data.Upload === "") {
        contents.Uploads = [];
    }
    if (data["Upload"] !== undefined) {
        const wrappedItem = data["Upload"] instanceof Array ? data["Upload"] : [data["Upload"]];
        contents.Uploads = deserializeAws_restXmlMultipartUploadList(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListMultipartUploadsCommand = deserializeAws_restXmlListMultipartUploadsCommand;
async function deserializeAws_restXmlListMultipartUploadsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlListObjectVersionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListObjectVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListObjectVersionsOutput",
        CommonPrefixes: undefined,
        DeleteMarkers: undefined,
        Delimiter: undefined,
        EncodingType: undefined,
        IsTruncated: undefined,
        KeyMarker: undefined,
        MaxKeys: undefined,
        Name: undefined,
        NextKeyMarker: undefined,
        NextVersionIdMarker: undefined,
        Prefix: undefined,
        VersionIdMarker: undefined,
        Versions: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.CommonPrefixes === "") {
        contents.CommonPrefixes = [];
    }
    if (data["CommonPrefixes"] !== undefined) {
        const wrappedItem = data["CommonPrefixes"] instanceof Array
            ? data["CommonPrefixes"]
            : [data["CommonPrefixes"]];
        contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(wrappedItem, context);
    }
    if (data.DeleteMarker === "") {
        contents.DeleteMarkers = [];
    }
    if (data["DeleteMarker"] !== undefined) {
        const wrappedItem = data["DeleteMarker"] instanceof Array
            ? data["DeleteMarker"]
            : [data["DeleteMarker"]];
        contents.DeleteMarkers = deserializeAws_restXmlDeleteMarkers(wrappedItem, context);
    }
    if (data["Delimiter"] !== undefined) {
        contents.Delimiter = data["Delimiter"];
    }
    if (data["EncodingType"] !== undefined) {
        contents.EncodingType = data["EncodingType"];
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["KeyMarker"] !== undefined) {
        contents.KeyMarker = data["KeyMarker"];
    }
    if (data["MaxKeys"] !== undefined) {
        contents.MaxKeys = parseInt(data["MaxKeys"]);
    }
    if (data["Name"] !== undefined) {
        contents.Name = data["Name"];
    }
    if (data["NextKeyMarker"] !== undefined) {
        contents.NextKeyMarker = data["NextKeyMarker"];
    }
    if (data["NextVersionIdMarker"] !== undefined) {
        contents.NextVersionIdMarker = data["NextVersionIdMarker"];
    }
    if (data["Prefix"] !== undefined) {
        contents.Prefix = data["Prefix"];
    }
    if (data["VersionIdMarker"] !== undefined) {
        contents.VersionIdMarker = data["VersionIdMarker"];
    }
    if (data.Version === "") {
        contents.Versions = [];
    }
    if (data["Version"] !== undefined) {
        const wrappedItem = data["Version"] instanceof Array ? data["Version"] : [data["Version"]];
        contents.Versions = deserializeAws_restXmlObjectVersionList(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListObjectVersionsCommand = deserializeAws_restXmlListObjectVersionsCommand;
async function deserializeAws_restXmlListObjectVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlListObjectsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListObjectsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListObjectsOutput",
        CommonPrefixes: undefined,
        Contents: undefined,
        Delimiter: undefined,
        EncodingType: undefined,
        IsTruncated: undefined,
        Marker: undefined,
        MaxKeys: undefined,
        Name: undefined,
        NextMarker: undefined,
        Prefix: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.CommonPrefixes === "") {
        contents.CommonPrefixes = [];
    }
    if (data["CommonPrefixes"] !== undefined) {
        const wrappedItem = data["CommonPrefixes"] instanceof Array
            ? data["CommonPrefixes"]
            : [data["CommonPrefixes"]];
        contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(wrappedItem, context);
    }
    if (data.Contents === "") {
        contents.Contents = [];
    }
    if (data["Contents"] !== undefined) {
        const wrappedItem = data["Contents"] instanceof Array ? data["Contents"] : [data["Contents"]];
        contents.Contents = deserializeAws_restXmlObjectList(wrappedItem, context);
    }
    if (data["Delimiter"] !== undefined) {
        contents.Delimiter = data["Delimiter"];
    }
    if (data["EncodingType"] !== undefined) {
        contents.EncodingType = data["EncodingType"];
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["Marker"] !== undefined) {
        contents.Marker = data["Marker"];
    }
    if (data["MaxKeys"] !== undefined) {
        contents.MaxKeys = parseInt(data["MaxKeys"]);
    }
    if (data["Name"] !== undefined) {
        contents.Name = data["Name"];
    }
    if (data["NextMarker"] !== undefined) {
        contents.NextMarker = data["NextMarker"];
    }
    if (data["Prefix"] !== undefined) {
        contents.Prefix = data["Prefix"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListObjectsCommand = deserializeAws_restXmlListObjectsCommand;
async function deserializeAws_restXmlListObjectsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchBucket":
        case "com.amazonaws.s3#NoSuchBucket":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListObjectsV2Command(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListObjectsV2CommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListObjectsV2Output",
        CommonPrefixes: undefined,
        Contents: undefined,
        ContinuationToken: undefined,
        Delimiter: undefined,
        EncodingType: undefined,
        IsTruncated: undefined,
        KeyCount: undefined,
        MaxKeys: undefined,
        Name: undefined,
        NextContinuationToken: undefined,
        Prefix: undefined,
        StartAfter: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.CommonPrefixes === "") {
        contents.CommonPrefixes = [];
    }
    if (data["CommonPrefixes"] !== undefined) {
        const wrappedItem = data["CommonPrefixes"] instanceof Array
            ? data["CommonPrefixes"]
            : [data["CommonPrefixes"]];
        contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(wrappedItem, context);
    }
    if (data.Contents === "") {
        contents.Contents = [];
    }
    if (data["Contents"] !== undefined) {
        const wrappedItem = data["Contents"] instanceof Array ? data["Contents"] : [data["Contents"]];
        contents.Contents = deserializeAws_restXmlObjectList(wrappedItem, context);
    }
    if (data["ContinuationToken"] !== undefined) {
        contents.ContinuationToken = data["ContinuationToken"];
    }
    if (data["Delimiter"] !== undefined) {
        contents.Delimiter = data["Delimiter"];
    }
    if (data["EncodingType"] !== undefined) {
        contents.EncodingType = data["EncodingType"];
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["KeyCount"] !== undefined) {
        contents.KeyCount = parseInt(data["KeyCount"]);
    }
    if (data["MaxKeys"] !== undefined) {
        contents.MaxKeys = parseInt(data["MaxKeys"]);
    }
    if (data["Name"] !== undefined) {
        contents.Name = data["Name"];
    }
    if (data["NextContinuationToken"] !== undefined) {
        contents.NextContinuationToken = data["NextContinuationToken"];
    }
    if (data["Prefix"] !== undefined) {
        contents.Prefix = data["Prefix"];
    }
    if (data["StartAfter"] !== undefined) {
        contents.StartAfter = data["StartAfter"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListObjectsV2Command = deserializeAws_restXmlListObjectsV2Command;
async function deserializeAws_restXmlListObjectsV2CommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchBucket":
        case "com.amazonaws.s3#NoSuchBucket":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListPartsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListPartsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListPartsOutput",
        AbortDate: undefined,
        AbortRuleId: undefined,
        Bucket: undefined,
        Initiator: undefined,
        IsTruncated: undefined,
        Key: undefined,
        MaxParts: undefined,
        NextPartNumberMarker: undefined,
        Owner: undefined,
        PartNumberMarker: undefined,
        Parts: undefined,
        RequestCharged: undefined,
        StorageClass: undefined,
        UploadId: undefined
    };
    if (output.headers["x-amz-abort-date"] !== undefined) {
        contents.AbortDate = new Date(output.headers["x-amz-abort-date"]);
    }
    if (output.headers["x-amz-abort-rule-id"] !== undefined) {
        contents.AbortRuleId = output.headers["x-amz-abort-rule-id"];
    }
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    const data = await parseBody(output.body, context);
    if (data["Bucket"] !== undefined) {
        contents.Bucket = data["Bucket"];
    }
    if (data["Initiator"] !== undefined) {
        contents.Initiator = deserializeAws_restXmlInitiator(data["Initiator"], context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["Key"] !== undefined) {
        contents.Key = data["Key"];
    }
    if (data["MaxParts"] !== undefined) {
        contents.MaxParts = parseInt(data["MaxParts"]);
    }
    if (data["NextPartNumberMarker"] !== undefined) {
        contents.NextPartNumberMarker = parseInt(data["NextPartNumberMarker"]);
    }
    if (data["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
    }
    if (data["PartNumberMarker"] !== undefined) {
        contents.PartNumberMarker = parseInt(data["PartNumberMarker"]);
    }
    if (data.Part === "") {
        contents.Parts = [];
    }
    if (data["Part"] !== undefined) {
        const wrappedItem = data["Part"] instanceof Array ? data["Part"] : [data["Part"]];
        contents.Parts = deserializeAws_restXmlParts(wrappedItem, context);
    }
    if (data["StorageClass"] !== undefined) {
        contents.StorageClass = data["StorageClass"];
    }
    if (data["UploadId"] !== undefined) {
        contents.UploadId = data["UploadId"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListPartsCommand = deserializeAws_restXmlListPartsCommand;
async function deserializeAws_restXmlListPartsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketAccelerateConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketAccelerateConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketAccelerateConfigurationCommand = deserializeAws_restXmlPutBucketAccelerateConfigurationCommand;
async function deserializeAws_restXmlPutBucketAccelerateConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketAclCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketAclCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketAclCommand = deserializeAws_restXmlPutBucketAclCommand;
async function deserializeAws_restXmlPutBucketAclCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketAnalyticsConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketAnalyticsConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketAnalyticsConfigurationCommand = deserializeAws_restXmlPutBucketAnalyticsConfigurationCommand;
async function deserializeAws_restXmlPutBucketAnalyticsConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketCorsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketCorsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketCorsCommand = deserializeAws_restXmlPutBucketCorsCommand;
async function deserializeAws_restXmlPutBucketCorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketEncryptionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketEncryptionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketEncryptionCommand = deserializeAws_restXmlPutBucketEncryptionCommand;
async function deserializeAws_restXmlPutBucketEncryptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketInventoryConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketInventoryConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketInventoryConfigurationCommand = deserializeAws_restXmlPutBucketInventoryConfigurationCommand;
async function deserializeAws_restXmlPutBucketInventoryConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketLifecycleConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketLifecycleConfigurationCommand = deserializeAws_restXmlPutBucketLifecycleConfigurationCommand;
async function deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketLoggingCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketLoggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketLoggingCommand = deserializeAws_restXmlPutBucketLoggingCommand;
async function deserializeAws_restXmlPutBucketLoggingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketMetricsConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketMetricsConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketMetricsConfigurationCommand = deserializeAws_restXmlPutBucketMetricsConfigurationCommand;
async function deserializeAws_restXmlPutBucketMetricsConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketNotificationConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketNotificationConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketNotificationConfigurationCommand = deserializeAws_restXmlPutBucketNotificationConfigurationCommand;
async function deserializeAws_restXmlPutBucketNotificationConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketPolicyCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketPolicyCommand = deserializeAws_restXmlPutBucketPolicyCommand;
async function deserializeAws_restXmlPutBucketPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketReplicationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketReplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketReplicationCommand = deserializeAws_restXmlPutBucketReplicationCommand;
async function deserializeAws_restXmlPutBucketReplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketRequestPaymentCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketRequestPaymentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketRequestPaymentCommand = deserializeAws_restXmlPutBucketRequestPaymentCommand;
async function deserializeAws_restXmlPutBucketRequestPaymentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketTaggingCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketTaggingCommand = deserializeAws_restXmlPutBucketTaggingCommand;
async function deserializeAws_restXmlPutBucketTaggingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketVersioningCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketVersioningCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketVersioningCommand = deserializeAws_restXmlPutBucketVersioningCommand;
async function deserializeAws_restXmlPutBucketVersioningCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutBucketWebsiteCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutBucketWebsiteCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutBucketWebsiteCommand = deserializeAws_restXmlPutBucketWebsiteCommand;
async function deserializeAws_restXmlPutBucketWebsiteCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutObjectCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutObjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "PutObjectOutput",
        ETag: undefined,
        Expiration: undefined,
        RequestCharged: undefined,
        SSECustomerAlgorithm: undefined,
        SSECustomerKeyMD5: undefined,
        SSEKMSEncryptionContext: undefined,
        SSEKMSKeyId: undefined,
        ServerSideEncryption: undefined,
        VersionId: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["x-amz-expiration"] !== undefined) {
        contents.Expiration = output.headers["x-amz-expiration"];
    }
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !==
        undefined) {
        contents.SSECustomerAlgorithm =
            output.headers["x-amz-server-side-encryption-customer-algorithm"];
    }
    if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !==
        undefined) {
        contents.SSECustomerKeyMD5 =
            output.headers["x-amz-server-side-encryption-customer-key-md5"];
    }
    if (output.headers["x-amz-server-side-encryption-context"] !== undefined) {
        contents.SSEKMSEncryptionContext =
            output.headers["x-amz-server-side-encryption-context"];
    }
    if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
        contents.SSEKMSKeyId =
            output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
    }
    if (output.headers["x-amz-server-side-encryption"] !== undefined) {
        contents.ServerSideEncryption =
            output.headers["x-amz-server-side-encryption"];
    }
    if (output.headers["x-amz-version-id"] !== undefined) {
        contents.VersionId = output.headers["x-amz-version-id"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutObjectCommand = deserializeAws_restXmlPutObjectCommand;
async function deserializeAws_restXmlPutObjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutObjectAclCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutObjectAclCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "PutObjectAclOutput",
        RequestCharged: undefined
    };
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutObjectAclCommand = deserializeAws_restXmlPutObjectAclCommand;
async function deserializeAws_restXmlPutObjectAclCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchKey":
        case "com.amazonaws.s3#NoSuchKey":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlPutObjectLegalHoldCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutObjectLegalHoldCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "PutObjectLegalHoldOutput",
        RequestCharged: undefined
    };
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutObjectLegalHoldCommand = deserializeAws_restXmlPutObjectLegalHoldCommand;
async function deserializeAws_restXmlPutObjectLegalHoldCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutObjectLockConfigurationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutObjectLockConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "PutObjectLockConfigurationOutput",
        RequestCharged: undefined
    };
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutObjectLockConfigurationCommand = deserializeAws_restXmlPutObjectLockConfigurationCommand;
async function deserializeAws_restXmlPutObjectLockConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutObjectRetentionCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutObjectRetentionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "PutObjectRetentionOutput",
        RequestCharged: undefined
    };
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutObjectRetentionCommand = deserializeAws_restXmlPutObjectRetentionCommand;
async function deserializeAws_restXmlPutObjectRetentionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlPutObjectTaggingCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlPutObjectTaggingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "PutObjectTaggingOutput",
        VersionId: undefined
    };
    if (output.headers["x-amz-version-id"] !== undefined) {
        contents.VersionId = output.headers["x-amz-version-id"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlPutObjectTaggingCommand = deserializeAws_restXmlPutObjectTaggingCommand;
async function deserializeAws_restXmlPutObjectTaggingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restXmlRestoreObjectCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlRestoreObjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "RestoreObjectOutput",
        RequestCharged: undefined,
        RestoreOutputPath: undefined
    };
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    if (output.headers["x-amz-restore-output-path"] !== undefined) {
        contents.RestoreOutputPath = output.headers["x-amz-restore-output-path"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlRestoreObjectCommand = deserializeAws_restXmlRestoreObjectCommand;
async function deserializeAws_restXmlRestoreObjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ObjectAlreadyInActiveTierError":
        case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlObjectAlreadyInActiveTierErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlSelectObjectContentCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlSelectObjectContentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "SelectObjectContentOutput",
        Payload: undefined
    };
    const data = context.eventStreamMarshaller.deserialize(output.body, async (event) => {
        const eventName = Object.keys(event)[0];
        const eventHeaders = Object.entries(event[eventName].headers).reduce((accummulator, curr) => {
            accummulator[curr[0]] = curr[1].value;
            return accummulator;
        }, {});
        const eventMessage = {
            headers: eventHeaders,
            body: event[eventName].body
        };
        const parsedEvent = {
            [eventName]: eventMessage
        };
        return await deserializeAws_restXmlSelectObjectContentEventStream_event(parsedEvent, context);
    });
    contents.Payload = data;
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlSelectObjectContentCommand = deserializeAws_restXmlSelectObjectContentCommand;
async function deserializeAws_restXmlSelectObjectContentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlUploadPartCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlUploadPartCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UploadPartOutput",
        ETag: undefined,
        RequestCharged: undefined,
        SSECustomerAlgorithm: undefined,
        SSECustomerKeyMD5: undefined,
        SSEKMSKeyId: undefined,
        ServerSideEncryption: undefined
    };
    if (output.headers["etag"] !== undefined) {
        contents.ETag = output.headers["etag"];
    }
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !==
        undefined) {
        contents.SSECustomerAlgorithm =
            output.headers["x-amz-server-side-encryption-customer-algorithm"];
    }
    if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !==
        undefined) {
        contents.SSECustomerKeyMD5 =
            output.headers["x-amz-server-side-encryption-customer-key-md5"];
    }
    if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
        contents.SSEKMSKeyId =
            output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
    }
    if (output.headers["x-amz-server-side-encryption"] !== undefined) {
        contents.ServerSideEncryption =
            output.headers["x-amz-server-side-encryption"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUploadPartCommand = deserializeAws_restXmlUploadPartCommand;
async function deserializeAws_restXmlUploadPartCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
async function deserializeAws_restXmlUploadPartCopyCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlUploadPartCopyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UploadPartCopyOutput",
        CopyPartResult: undefined,
        CopySourceVersionId: undefined,
        RequestCharged: undefined,
        SSECustomerAlgorithm: undefined,
        SSECustomerKeyMD5: undefined,
        SSEKMSKeyId: undefined,
        ServerSideEncryption: undefined
    };
    if (output.headers["x-amz-copy-source-version-id"] !== undefined) {
        contents.CopySourceVersionId =
            output.headers["x-amz-copy-source-version-id"];
    }
    if (output.headers["x-amz-request-charged"] !== undefined) {
        contents.RequestCharged = output.headers["x-amz-request-charged"];
    }
    if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !==
        undefined) {
        contents.SSECustomerAlgorithm =
            output.headers["x-amz-server-side-encryption-customer-algorithm"];
    }
    if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !==
        undefined) {
        contents.SSECustomerKeyMD5 =
            output.headers["x-amz-server-side-encryption-customer-key-md5"];
    }
    if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
        contents.SSEKMSKeyId =
            output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
    }
    if (output.headers["x-amz-server-side-encryption"] !== undefined) {
        contents.ServerSideEncryption =
            output.headers["x-amz-server-side-encryption"];
    }
    const data = await parseBody(output.body, context);
    contents.CopyPartResult = deserializeAws_restXmlCopyPartResult(data, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUploadPartCopyCommand = deserializeAws_restXmlUploadPartCopyCommand;
async function deserializeAws_restXmlUploadPartCopyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
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
const deserializeAws_restXmlSelectObjectContentEventStream_event = async (output, context) => {
    if (output["Cont"] !== undefined) {
        return {
            Cont: await deserializeAws_restXmlContinuationEvent_event(output["Cont"], context)
        };
    }
    if (output["End"] !== undefined) {
        return {
            End: await deserializeAws_restXmlEndEvent_event(output["End"], context)
        };
    }
    if (output["Progress"] !== undefined) {
        return {
            Progress: await deserializeAws_restXmlProgressEvent_event(output["Progress"], context)
        };
    }
    if (output["Records"] !== undefined) {
        return {
            Records: await deserializeAws_restXmlRecordsEvent_event(output["Records"], context)
        };
    }
    if (output["Stats"] !== undefined) {
        return {
            Stats: await deserializeAws_restXmlStatsEvent_event(output["Stats"], context)
        };
    }
    return { $unknown: output };
};
const deserializeAws_restXmlContinuationEvent_event = async (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_restXmlEndEvent_event = async (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_restXmlProgressEvent_event = async (output, context) => {
    let contents = {
        __type: "ProgressEvent"
    };
    contents.Details = await parseBody(output.body, context);
    return contents;
};
const deserializeAws_restXmlRecordsEvent_event = async (output, context) => {
    let contents = {
        __type: "RecordsEvent"
    };
    contents.Payload = output.body;
    return contents;
};
const deserializeAws_restXmlStatsEvent_event = async (output, context) => {
    let contents = {
        __type: "StatsEvent"
    };
    contents.Details = await parseBody(output.body, context);
    return contents;
};
const deserializeAws_restXmlBucketAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BucketAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput)
    };
    const data = parsedOutput.body;
    return contents;
};
const deserializeAws_restXmlBucketAlreadyOwnedByYouResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BucketAlreadyOwnedByYou",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput)
    };
    const data = parsedOutput.body;
    return contents;
};
const deserializeAws_restXmlNoSuchBucketResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchBucket",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput)
    };
    const data = parsedOutput.body;
    return contents;
};
const deserializeAws_restXmlNoSuchKeyResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchKey",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput)
    };
    const data = parsedOutput.body;
    return contents;
};
const deserializeAws_restXmlNoSuchUploadResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchUpload",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput)
    };
    const data = parsedOutput.body;
    return contents;
};
const deserializeAws_restXmlObjectAlreadyInActiveTierErrorResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ObjectAlreadyInActiveTierError",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput)
    };
    const data = parsedOutput.body;
    return contents;
};
const deserializeAws_restXmlObjectNotInActiveTierErrorResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ObjectNotInActiveTierError",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput)
    };
    const data = parsedOutput.body;
    return contents;
};
const serializeAws_restXmlAbortIncompleteMultipartUpload = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AbortIncompleteMultipartUpload");
    if (input.DaysAfterInitiation !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("DaysAfterInitiation")
            .addChildNode(new xml_builder_1.XmlText(String(input.DaysAfterInitiation)))
            .withName("DaysAfterInitiation"));
    }
    return bodyNode;
};
const serializeAws_restXmlAccelerateConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AccelerateConfiguration");
    if (input.Status !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("BucketAccelerateStatus")
            .addChildNode(new xml_builder_1.XmlText(input.Status))
            .withName("Status"));
    }
    return bodyNode;
};
const serializeAws_restXmlAccessControlPolicy = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AccessControlPolicy");
    if (input.Grants !== undefined) {
        const nodes = serializeAws_restXmlGrants(input.Grants, context);
        const containerNode = new xml_builder_1.XmlNode("AccessControlList");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Owner !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlOwner(input.Owner, context).withName("Owner"));
    }
    return bodyNode;
};
const serializeAws_restXmlAccessControlTranslation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AccessControlTranslation");
    if (input.Owner !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("OwnerOverride")
            .addChildNode(new xml_builder_1.XmlText(input.Owner))
            .withName("Owner"));
    }
    return bodyNode;
};
const serializeAws_restXmlAllowedHeaders = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("AllowedHeader").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlAllowedMethods = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("AllowedMethod").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlAllowedOrigins = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("AllowedOrigin").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlAnalyticsAndOperator = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AnalyticsAndOperator");
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Prefix")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    if (input.Tags !== undefined) {
        const nodes = serializeAws_restXmlTagSet(input.Tags, context);
        nodes.map((node) => {
            node = node.withName("Tag");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlAnalyticsConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AnalyticsConfiguration");
    if (input.Filter !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlAnalyticsFilter(input.Filter, context).withName("Filter"));
    }
    if (input.Id !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("AnalyticsId")
            .addChildNode(new xml_builder_1.XmlText(input.Id))
            .withName("Id"));
    }
    if (input.StorageClassAnalysis !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlStorageClassAnalysis(input.StorageClassAnalysis, context).withName("StorageClassAnalysis"));
    }
    return bodyNode;
};
const serializeAws_restXmlAnalyticsExportDestination = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AnalyticsExportDestination");
    if (input.S3BucketDestination !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlAnalyticsS3BucketDestination(input.S3BucketDestination, context).withName("S3BucketDestination"));
    }
    return bodyNode;
};
const serializeAws_restXmlAnalyticsFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AnalyticsFilter");
    if (input.And !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlAnalyticsAndOperator(input.And, context).withName("And"));
    }
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Prefix")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    if (input.Tag !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlTag(input.Tag, context).withName("Tag"));
    }
    return bodyNode;
};
const serializeAws_restXmlAnalyticsS3BucketDestination = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AnalyticsS3BucketDestination");
    if (input.Bucket !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("BucketName")
            .addChildNode(new xml_builder_1.XmlText(input.Bucket))
            .withName("Bucket"));
    }
    if (input.BucketAccountId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("AccountId")
            .addChildNode(new xml_builder_1.XmlText(input.BucketAccountId))
            .withName("BucketAccountId"));
    }
    if (input.Format !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("AnalyticsS3ExportFileFormat")
            .addChildNode(new xml_builder_1.XmlText(input.Format))
            .withName("Format"));
    }
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Prefix")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    return bodyNode;
};
const serializeAws_restXmlBucketLifecycleConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("BucketLifecycleConfiguration");
    if (input.Rules !== undefined) {
        const nodes = serializeAws_restXmlLifecycleRules(input.Rules, context);
        nodes.map((node) => {
            node = node.withName("Rule");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlBucketLoggingStatus = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("BucketLoggingStatus");
    if (input.LoggingEnabled !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlLoggingEnabled(input.LoggingEnabled, context).withName("LoggingEnabled"));
    }
    return bodyNode;
};
const serializeAws_restXmlCORSConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CORSConfiguration");
    if (input.CORSRules !== undefined) {
        const nodes = serializeAws_restXmlCORSRules(input.CORSRules, context);
        nodes.map((node) => {
            node = node.withName("CORSRule");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlCORSRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CORSRule");
    if (input.AllowedHeaders !== undefined) {
        const nodes = serializeAws_restXmlAllowedHeaders(input.AllowedHeaders, context);
        nodes.map((node) => {
            node = node.withName("AllowedHeader");
            bodyNode.addChildNode(node);
        });
    }
    if (input.AllowedMethods !== undefined) {
        const nodes = serializeAws_restXmlAllowedMethods(input.AllowedMethods, context);
        nodes.map((node) => {
            node = node.withName("AllowedMethod");
            bodyNode.addChildNode(node);
        });
    }
    if (input.AllowedOrigins !== undefined) {
        const nodes = serializeAws_restXmlAllowedOrigins(input.AllowedOrigins, context);
        nodes.map((node) => {
            node = node.withName("AllowedOrigin");
            bodyNode.addChildNode(node);
        });
    }
    if (input.ExposeHeaders !== undefined) {
        const nodes = serializeAws_restXmlExposeHeaders(input.ExposeHeaders, context);
        nodes.map((node) => {
            node = node.withName("ExposeHeader");
            bodyNode.addChildNode(node);
        });
    }
    if (input.MaxAgeSeconds !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("MaxAgeSeconds")
            .addChildNode(new xml_builder_1.XmlText(String(input.MaxAgeSeconds)))
            .withName("MaxAgeSeconds"));
    }
    return bodyNode;
};
const serializeAws_restXmlCORSRules = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlCORSRule(entry, context);
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlCSVInput = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CSVInput");
    if (input.AllowQuotedRecordDelimiter !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("AllowQuotedRecordDelimiter")
            .addChildNode(new xml_builder_1.XmlText(String(input.AllowQuotedRecordDelimiter)))
            .withName("AllowQuotedRecordDelimiter"));
    }
    if (input.Comments !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Comments")
            .addChildNode(new xml_builder_1.XmlText(input.Comments))
            .withName("Comments"));
    }
    if (input.FieldDelimiter !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("FieldDelimiter")
            .addChildNode(new xml_builder_1.XmlText(input.FieldDelimiter))
            .withName("FieldDelimiter"));
    }
    if (input.FileHeaderInfo !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("FileHeaderInfo")
            .addChildNode(new xml_builder_1.XmlText(input.FileHeaderInfo))
            .withName("FileHeaderInfo"));
    }
    if (input.QuoteCharacter !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("QuoteCharacter")
            .addChildNode(new xml_builder_1.XmlText(input.QuoteCharacter))
            .withName("QuoteCharacter"));
    }
    if (input.QuoteEscapeCharacter !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("QuoteEscapeCharacter")
            .addChildNode(new xml_builder_1.XmlText(input.QuoteEscapeCharacter))
            .withName("QuoteEscapeCharacter"));
    }
    if (input.RecordDelimiter !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("RecordDelimiter")
            .addChildNode(new xml_builder_1.XmlText(input.RecordDelimiter))
            .withName("RecordDelimiter"));
    }
    return bodyNode;
};
const serializeAws_restXmlCSVOutput = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CSVOutput");
    if (input.FieldDelimiter !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("FieldDelimiter")
            .addChildNode(new xml_builder_1.XmlText(input.FieldDelimiter))
            .withName("FieldDelimiter"));
    }
    if (input.QuoteCharacter !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("QuoteCharacter")
            .addChildNode(new xml_builder_1.XmlText(input.QuoteCharacter))
            .withName("QuoteCharacter"));
    }
    if (input.QuoteEscapeCharacter !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("QuoteEscapeCharacter")
            .addChildNode(new xml_builder_1.XmlText(input.QuoteEscapeCharacter))
            .withName("QuoteEscapeCharacter"));
    }
    if (input.QuoteFields !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("QuoteFields")
            .addChildNode(new xml_builder_1.XmlText(input.QuoteFields))
            .withName("QuoteFields"));
    }
    if (input.RecordDelimiter !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("RecordDelimiter")
            .addChildNode(new xml_builder_1.XmlText(input.RecordDelimiter))
            .withName("RecordDelimiter"));
    }
    return bodyNode;
};
const serializeAws_restXmlCompletedMultipartUpload = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CompletedMultipartUpload");
    if (input.Parts !== undefined) {
        const nodes = serializeAws_restXmlCompletedPartList(input.Parts, context);
        nodes.map((node) => {
            node = node.withName("Part");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlCompletedPart = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CompletedPart");
    if (input.ETag !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ETag")
            .addChildNode(new xml_builder_1.XmlText(input.ETag))
            .withName("ETag"));
    }
    if (input.PartNumber !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("PartNumber")
            .addChildNode(new xml_builder_1.XmlText(String(input.PartNumber)))
            .withName("PartNumber"));
    }
    return bodyNode;
};
const serializeAws_restXmlCompletedPartList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlCompletedPart(entry, context);
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlCondition = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Condition");
    if (input.HttpErrorCodeReturnedEquals !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("HttpErrorCodeReturnedEquals")
            .addChildNode(new xml_builder_1.XmlText(input.HttpErrorCodeReturnedEquals))
            .withName("HttpErrorCodeReturnedEquals"));
    }
    if (input.KeyPrefixEquals !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("KeyPrefixEquals")
            .addChildNode(new xml_builder_1.XmlText(input.KeyPrefixEquals))
            .withName("KeyPrefixEquals"));
    }
    return bodyNode;
};
const serializeAws_restXmlCreateBucketConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CreateBucketConfiguration");
    if (input.LocationConstraint !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("BucketLocationConstraint")
            .addChildNode(new xml_builder_1.XmlText(input.LocationConstraint))
            .withName("LocationConstraint"));
    }
    return bodyNode;
};
const serializeAws_restXmlDefaultRetention = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("DefaultRetention");
    if (input.Days !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Days")
            .addChildNode(new xml_builder_1.XmlText(String(input.Days)))
            .withName("Days"));
    }
    if (input.Mode !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ObjectLockRetentionMode")
            .addChildNode(new xml_builder_1.XmlText(input.Mode))
            .withName("Mode"));
    }
    if (input.Years !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Years")
            .addChildNode(new xml_builder_1.XmlText(String(input.Years)))
            .withName("Years"));
    }
    return bodyNode;
};
const serializeAws_restXmlDelete = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Delete");
    if (input.Objects !== undefined) {
        const nodes = serializeAws_restXmlObjectIdentifierList(input.Objects, context);
        nodes.map((node) => {
            node = node.withName("Object");
            bodyNode.addChildNode(node);
        });
    }
    if (input.Quiet !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Quiet")
            .addChildNode(new xml_builder_1.XmlText(String(input.Quiet)))
            .withName("Quiet"));
    }
    return bodyNode;
};
const serializeAws_restXmlDeleteMarkerReplication = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("DeleteMarkerReplication");
    if (input.Status !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("DeleteMarkerReplicationStatus")
            .addChildNode(new xml_builder_1.XmlText(input.Status))
            .withName("Status"));
    }
    return bodyNode;
};
const serializeAws_restXmlDestination = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Destination");
    if (input.AccessControlTranslation !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlAccessControlTranslation(input.AccessControlTranslation, context).withName("AccessControlTranslation"));
    }
    if (input.Account !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("AccountId")
            .addChildNode(new xml_builder_1.XmlText(input.Account))
            .withName("Account"));
    }
    if (input.Bucket !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("BucketName")
            .addChildNode(new xml_builder_1.XmlText(input.Bucket))
            .withName("Bucket"));
    }
    if (input.EncryptionConfiguration !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlEncryptionConfiguration(input.EncryptionConfiguration, context).withName("EncryptionConfiguration"));
    }
    if (input.Metrics !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlMetrics(input.Metrics, context).withName("Metrics"));
    }
    if (input.ReplicationTime !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlReplicationTime(input.ReplicationTime, context).withName("ReplicationTime"));
    }
    if (input.StorageClass !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("StorageClass")
            .addChildNode(new xml_builder_1.XmlText(input.StorageClass))
            .withName("StorageClass"));
    }
    return bodyNode;
};
const serializeAws_restXmlEncryption = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Encryption");
    if (input.EncryptionType !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ServerSideEncryption")
            .addChildNode(new xml_builder_1.XmlText(input.EncryptionType))
            .withName("EncryptionType"));
    }
    if (input.KMSContext !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("KMSContext")
            .addChildNode(new xml_builder_1.XmlText(input.KMSContext))
            .withName("KMSContext"));
    }
    if (input.KMSKeyId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("SSEKMSKeyId")
            .addChildNode(new xml_builder_1.XmlText(input.KMSKeyId))
            .withName("KMSKeyId"));
    }
    return bodyNode;
};
const serializeAws_restXmlEncryptionConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("EncryptionConfiguration");
    if (input.ReplicaKmsKeyID !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ReplicaKmsKeyID")
            .addChildNode(new xml_builder_1.XmlText(input.ReplicaKmsKeyID))
            .withName("ReplicaKmsKeyID"));
    }
    return bodyNode;
};
const serializeAws_restXmlErrorDocument = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ErrorDocument");
    if (input.Key !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ObjectKey")
            .addChildNode(new xml_builder_1.XmlText(input.Key))
            .withName("Key"));
    }
    return bodyNode;
};
const serializeAws_restXmlEventList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("Event").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlExistingObjectReplication = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ExistingObjectReplication");
    if (input.Status !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ExistingObjectReplicationStatus")
            .addChildNode(new xml_builder_1.XmlText(input.Status))
            .withName("Status"));
    }
    return bodyNode;
};
const serializeAws_restXmlExposeHeaders = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("ExposeHeader").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlFilterRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("FilterRule");
    if (input.Name !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("FilterRuleName")
            .addChildNode(new xml_builder_1.XmlText(input.Name))
            .withName("Name"));
    }
    if (input.Value !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("FilterRuleValue")
            .addChildNode(new xml_builder_1.XmlText(input.Value))
            .withName("Value"));
    }
    return bodyNode;
};
const serializeAws_restXmlFilterRuleList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlFilterRule(entry, context);
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlGlacierJobParameters = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("GlacierJobParameters");
    if (input.Tier !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Tier")
            .addChildNode(new xml_builder_1.XmlText(input.Tier))
            .withName("Tier"));
    }
    return bodyNode;
};
const serializeAws_restXmlGrant = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Grant");
    if (input.Grantee !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlGrantee(input.Grantee, context).withName("Grantee"));
    }
    if (input.Permission !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Permission")
            .addChildNode(new xml_builder_1.XmlText(input.Permission))
            .withName("Permission"));
    }
    return bodyNode;
};
const serializeAws_restXmlGrantee = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Grantee");
    bodyNode.addAttribute("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
    if (input.DisplayName !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("DisplayName")
            .addChildNode(new xml_builder_1.XmlText(input.DisplayName))
            .withName("DisplayName"));
    }
    if (input.EmailAddress !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("EmailAddress")
            .addChildNode(new xml_builder_1.XmlText(input.EmailAddress))
            .withName("EmailAddress"));
    }
    if (input.ID !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ID").addChildNode(new xml_builder_1.XmlText(input.ID)).withName("ID"));
    }
    if (input.Type !== undefined) {
        bodyNode.addAttribute("xsi:type", input.Type);
    }
    if (input.URI !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("URI")
            .addChildNode(new xml_builder_1.XmlText(input.URI))
            .withName("URI"));
    }
    return bodyNode;
};
const serializeAws_restXmlGrants = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlGrant(entry, context);
        collectedNodes.push(node.withName("Grant"));
    }
    return collectedNodes;
};
const serializeAws_restXmlIndexDocument = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("IndexDocument");
    if (input.Suffix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Suffix")
            .addChildNode(new xml_builder_1.XmlText(input.Suffix))
            .withName("Suffix"));
    }
    return bodyNode;
};
const serializeAws_restXmlInputSerialization = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InputSerialization");
    if (input.CSV !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlCSVInput(input.CSV, context).withName("CSV"));
    }
    if (input.CompressionType !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("CompressionType")
            .addChildNode(new xml_builder_1.XmlText(input.CompressionType))
            .withName("CompressionType"));
    }
    if (input.JSON !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlJSONInput(input.JSON, context).withName("JSON"));
    }
    if (input.Parquet !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlParquetInput(input.Parquet, context).withName("Parquet"));
    }
    return bodyNode;
};
const serializeAws_restXmlInventoryConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InventoryConfiguration");
    if (input.Destination !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlInventoryDestination(input.Destination, context).withName("Destination"));
    }
    if (input.Filter !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlInventoryFilter(input.Filter, context).withName("Filter"));
    }
    if (input.Id !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("InventoryId")
            .addChildNode(new xml_builder_1.XmlText(input.Id))
            .withName("Id"));
    }
    if (input.IncludedObjectVersions !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("InventoryIncludedObjectVersions")
            .addChildNode(new xml_builder_1.XmlText(input.IncludedObjectVersions))
            .withName("IncludedObjectVersions"));
    }
    if (input.IsEnabled !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("IsEnabled")
            .addChildNode(new xml_builder_1.XmlText(String(input.IsEnabled)))
            .withName("IsEnabled"));
    }
    if (input.OptionalFields !== undefined) {
        const nodes = serializeAws_restXmlInventoryOptionalFields(input.OptionalFields, context);
        const containerNode = new xml_builder_1.XmlNode("OptionalFields");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Schedule !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlInventorySchedule(input.Schedule, context).withName("Schedule"));
    }
    return bodyNode;
};
const serializeAws_restXmlInventoryDestination = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InventoryDestination");
    if (input.S3BucketDestination !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlInventoryS3BucketDestination(input.S3BucketDestination, context).withName("S3BucketDestination"));
    }
    return bodyNode;
};
const serializeAws_restXmlInventoryEncryption = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InventoryEncryption");
    if (input.SSEKMS !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlSSEKMS(input.SSEKMS, context).withName("SSE-KMS"));
    }
    if (input.SSES3 !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlSSES3(input.SSES3, context).withName("SSE-S3"));
    }
    return bodyNode;
};
const serializeAws_restXmlInventoryFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InventoryFilter");
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Prefix")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    return bodyNode;
};
const serializeAws_restXmlInventoryOptionalFields = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("InventoryOptionalField").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("Field"));
    }
    return collectedNodes;
};
const serializeAws_restXmlInventoryS3BucketDestination = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InventoryS3BucketDestination");
    if (input.AccountId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("AccountId")
            .addChildNode(new xml_builder_1.XmlText(input.AccountId))
            .withName("AccountId"));
    }
    if (input.Bucket !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("BucketName")
            .addChildNode(new xml_builder_1.XmlText(input.Bucket))
            .withName("Bucket"));
    }
    if (input.Encryption !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlInventoryEncryption(input.Encryption, context).withName("Encryption"));
    }
    if (input.Format !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("InventoryFormat")
            .addChildNode(new xml_builder_1.XmlText(input.Format))
            .withName("Format"));
    }
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Prefix")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    return bodyNode;
};
const serializeAws_restXmlInventorySchedule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InventorySchedule");
    if (input.Frequency !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("InventoryFrequency")
            .addChildNode(new xml_builder_1.XmlText(input.Frequency))
            .withName("Frequency"));
    }
    return bodyNode;
};
const serializeAws_restXmlJSONInput = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("JSONInput");
    if (input.Type !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("JSONType")
            .addChildNode(new xml_builder_1.XmlText(input.Type))
            .withName("Type"));
    }
    return bodyNode;
};
const serializeAws_restXmlJSONOutput = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("JSONOutput");
    if (input.RecordDelimiter !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("RecordDelimiter")
            .addChildNode(new xml_builder_1.XmlText(input.RecordDelimiter))
            .withName("RecordDelimiter"));
    }
    return bodyNode;
};
const serializeAws_restXmlLambdaFunctionConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LambdaFunctionConfiguration");
    if (input.Events !== undefined) {
        const nodes = serializeAws_restXmlEventList(input.Events, context);
        nodes.map((node) => {
            node = node.withName("Event");
            bodyNode.addChildNode(node);
        });
    }
    if (input.Filter !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter"));
    }
    if (input.Id !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NotificationId")
            .addChildNode(new xml_builder_1.XmlText(input.Id))
            .withName("Id"));
    }
    if (input.LambdaFunctionArn !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("LambdaFunctionArn")
            .addChildNode(new xml_builder_1.XmlText(input.LambdaFunctionArn))
            .withName("CloudFunction"));
    }
    return bodyNode;
};
const serializeAws_restXmlLambdaFunctionConfigurationList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlLambdaFunctionConfiguration(entry, context);
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlLifecycleExpiration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LifecycleExpiration");
    if (input.Date !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Date")
            .addChildNode(new xml_builder_1.XmlText(input.Date.toISOString().split(".")[0] + "Z"))
            .withName("Date"));
    }
    if (input.Days !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Days")
            .addChildNode(new xml_builder_1.XmlText(String(input.Days)))
            .withName("Days"));
    }
    if (input.ExpiredObjectDeleteMarker !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ExpiredObjectDeleteMarker")
            .addChildNode(new xml_builder_1.XmlText(String(input.ExpiredObjectDeleteMarker)))
            .withName("ExpiredObjectDeleteMarker"));
    }
    return bodyNode;
};
const serializeAws_restXmlLifecycleRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LifecycleRule");
    if (input.AbortIncompleteMultipartUpload !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlAbortIncompleteMultipartUpload(input.AbortIncompleteMultipartUpload, context).withName("AbortIncompleteMultipartUpload"));
    }
    if (input.Expiration !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlLifecycleExpiration(input.Expiration, context).withName("Expiration"));
    }
    if (input.Filter !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlLifecycleRuleFilter(input.Filter, context).withName("Filter"));
    }
    if (input.ID !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ID").addChildNode(new xml_builder_1.XmlText(input.ID)).withName("ID"));
    }
    if (input.NoncurrentVersionExpiration !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlNoncurrentVersionExpiration(input.NoncurrentVersionExpiration, context).withName("NoncurrentVersionExpiration"));
    }
    if (input.NoncurrentVersionTransitions !== undefined) {
        const nodes = serializeAws_restXmlNoncurrentVersionTransitionList(input.NoncurrentVersionTransitions, context);
        nodes.map((node) => {
            node = node.withName("NoncurrentVersionTransition");
            bodyNode.addChildNode(node);
        });
    }
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Prefix")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    if (input.Status !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ExpirationStatus")
            .addChildNode(new xml_builder_1.XmlText(input.Status))
            .withName("Status"));
    }
    if (input.Transitions !== undefined) {
        const nodes = serializeAws_restXmlTransitionList(input.Transitions, context);
        nodes.map((node) => {
            node = node.withName("Transition");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlLifecycleRuleAndOperator = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LifecycleRuleAndOperator");
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Prefix")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    if (input.Tags !== undefined) {
        const nodes = serializeAws_restXmlTagSet(input.Tags, context);
        nodes.map((node) => {
            node = node.withName("Tag");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlLifecycleRuleFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LifecycleRuleFilter");
    if (input.And !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlLifecycleRuleAndOperator(input.And, context).withName("And"));
    }
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Prefix")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    if (input.Tag !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlTag(input.Tag, context).withName("Tag"));
    }
    return bodyNode;
};
const serializeAws_restXmlLifecycleRules = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlLifecycleRule(entry, context);
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlLoggingEnabled = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LoggingEnabled");
    if (input.TargetBucket !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TargetBucket")
            .addChildNode(new xml_builder_1.XmlText(input.TargetBucket))
            .withName("TargetBucket"));
    }
    if (input.TargetGrants !== undefined) {
        const nodes = serializeAws_restXmlTargetGrants(input.TargetGrants, context);
        const containerNode = new xml_builder_1.XmlNode("TargetGrants");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.TargetPrefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TargetPrefix")
            .addChildNode(new xml_builder_1.XmlText(input.TargetPrefix))
            .withName("TargetPrefix"));
    }
    return bodyNode;
};
const serializeAws_restXmlMetadataEntry = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("MetadataEntry");
    if (input.Name !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("MetadataKey")
            .addChildNode(new xml_builder_1.XmlText(input.Name))
            .withName("Name"));
    }
    if (input.Value !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("MetadataValue")
            .addChildNode(new xml_builder_1.XmlText(input.Value))
            .withName("Value"));
    }
    return bodyNode;
};
const serializeAws_restXmlMetrics = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Metrics");
    if (input.EventThreshold !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlReplicationTimeValue(input.EventThreshold, context).withName("EventThreshold"));
    }
    if (input.Status !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("MetricsStatus")
            .addChildNode(new xml_builder_1.XmlText(input.Status))
            .withName("Status"));
    }
    return bodyNode;
};
const serializeAws_restXmlMetricsAndOperator = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("MetricsAndOperator");
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Prefix")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    if (input.Tags !== undefined) {
        const nodes = serializeAws_restXmlTagSet(input.Tags, context);
        nodes.map((node) => {
            node = node.withName("Tag");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlMetricsConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("MetricsConfiguration");
    if (input.Filter !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlMetricsFilter(input.Filter, context).withName("Filter"));
    }
    if (input.Id !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("MetricsId")
            .addChildNode(new xml_builder_1.XmlText(input.Id))
            .withName("Id"));
    }
    return bodyNode;
};
const serializeAws_restXmlMetricsFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("MetricsFilter");
    if (input.And !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlMetricsAndOperator(input.And, context).withName("And"));
    }
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Prefix")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    if (input.Tag !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlTag(input.Tag, context).withName("Tag"));
    }
    return bodyNode;
};
const serializeAws_restXmlNoncurrentVersionExpiration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("NoncurrentVersionExpiration");
    if (input.NoncurrentDays !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Days")
            .addChildNode(new xml_builder_1.XmlText(String(input.NoncurrentDays)))
            .withName("NoncurrentDays"));
    }
    return bodyNode;
};
const serializeAws_restXmlNoncurrentVersionTransition = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("NoncurrentVersionTransition");
    if (input.NoncurrentDays !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Days")
            .addChildNode(new xml_builder_1.XmlText(String(input.NoncurrentDays)))
            .withName("NoncurrentDays"));
    }
    if (input.StorageClass !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TransitionStorageClass")
            .addChildNode(new xml_builder_1.XmlText(input.StorageClass))
            .withName("StorageClass"));
    }
    return bodyNode;
};
const serializeAws_restXmlNoncurrentVersionTransitionList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlNoncurrentVersionTransition(entry, context);
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlNotificationConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("NotificationConfiguration");
    if (input.LambdaFunctionConfigurations !== undefined) {
        const nodes = serializeAws_restXmlLambdaFunctionConfigurationList(input.LambdaFunctionConfigurations, context);
        nodes.map((node) => {
            node = node.withName("CloudFunctionConfiguration");
            bodyNode.addChildNode(node);
        });
    }
    if (input.QueueConfigurations !== undefined) {
        const nodes = serializeAws_restXmlQueueConfigurationList(input.QueueConfigurations, context);
        nodes.map((node) => {
            node = node.withName("QueueConfiguration");
            bodyNode.addChildNode(node);
        });
    }
    if (input.TopicConfigurations !== undefined) {
        const nodes = serializeAws_restXmlTopicConfigurationList(input.TopicConfigurations, context);
        nodes.map((node) => {
            node = node.withName("TopicConfiguration");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlNotificationConfigurationFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("NotificationConfigurationFilter");
    if (input.Key !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlS3KeyFilter(input.Key, context).withName("S3Key"));
    }
    return bodyNode;
};
const serializeAws_restXmlObjectIdentifier = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ObjectIdentifier");
    if (input.Key !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ObjectKey")
            .addChildNode(new xml_builder_1.XmlText(input.Key))
            .withName("Key"));
    }
    if (input.VersionId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ObjectVersionId")
            .addChildNode(new xml_builder_1.XmlText(input.VersionId))
            .withName("VersionId"));
    }
    return bodyNode;
};
const serializeAws_restXmlObjectIdentifierList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlObjectIdentifier(entry, context);
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlObjectLockConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ObjectLockConfiguration");
    if (input.ObjectLockEnabled !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ObjectLockEnabled")
            .addChildNode(new xml_builder_1.XmlText(input.ObjectLockEnabled))
            .withName("ObjectLockEnabled"));
    }
    if (input.Rule !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlObjectLockRule(input.Rule, context).withName("Rule"));
    }
    return bodyNode;
};
const serializeAws_restXmlObjectLockLegalHold = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ObjectLockLegalHold");
    if (input.Status !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ObjectLockLegalHoldStatus")
            .addChildNode(new xml_builder_1.XmlText(input.Status))
            .withName("Status"));
    }
    return bodyNode;
};
const serializeAws_restXmlObjectLockRetention = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ObjectLockRetention");
    if (input.Mode !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ObjectLockRetentionMode")
            .addChildNode(new xml_builder_1.XmlText(input.Mode))
            .withName("Mode"));
    }
    if (input.RetainUntilDate !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Date")
            .addChildNode(new xml_builder_1.XmlText(input.RetainUntilDate.toISOString().split(".")[0] + "Z"))
            .withName("RetainUntilDate"));
    }
    return bodyNode;
};
const serializeAws_restXmlObjectLockRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ObjectLockRule");
    if (input.DefaultRetention !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlDefaultRetention(input.DefaultRetention, context).withName("DefaultRetention"));
    }
    return bodyNode;
};
const serializeAws_restXmlOutputLocation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OutputLocation");
    if (input.S3 !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlS3Location(input.S3, context).withName("S3"));
    }
    return bodyNode;
};
const serializeAws_restXmlOutputSerialization = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OutputSerialization");
    if (input.CSV !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlCSVOutput(input.CSV, context).withName("CSV"));
    }
    if (input.JSON !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlJSONOutput(input.JSON, context).withName("JSON"));
    }
    return bodyNode;
};
const serializeAws_restXmlOwner = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Owner");
    if (input.DisplayName !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("DisplayName")
            .addChildNode(new xml_builder_1.XmlText(input.DisplayName))
            .withName("DisplayName"));
    }
    if (input.ID !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ID").addChildNode(new xml_builder_1.XmlText(input.ID)).withName("ID"));
    }
    return bodyNode;
};
const serializeAws_restXmlParquetInput = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ParquetInput");
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
const serializeAws_restXmlQueueConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("QueueConfiguration");
    if (input.Events !== undefined) {
        const nodes = serializeAws_restXmlEventList(input.Events, context);
        nodes.map((node) => {
            node = node.withName("Event");
            bodyNode.addChildNode(node);
        });
    }
    if (input.Filter !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter"));
    }
    if (input.Id !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NotificationId")
            .addChildNode(new xml_builder_1.XmlText(input.Id))
            .withName("Id"));
    }
    if (input.QueueArn !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("QueueArn")
            .addChildNode(new xml_builder_1.XmlText(input.QueueArn))
            .withName("Queue"));
    }
    return bodyNode;
};
const serializeAws_restXmlQueueConfigurationList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlQueueConfiguration(entry, context);
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlRedirect = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Redirect");
    if (input.HostName !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("HostName")
            .addChildNode(new xml_builder_1.XmlText(input.HostName))
            .withName("HostName"));
    }
    if (input.HttpRedirectCode !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("HttpRedirectCode")
            .addChildNode(new xml_builder_1.XmlText(input.HttpRedirectCode))
            .withName("HttpRedirectCode"));
    }
    if (input.Protocol !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Protocol")
            .addChildNode(new xml_builder_1.XmlText(input.Protocol))
            .withName("Protocol"));
    }
    if (input.ReplaceKeyPrefixWith !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ReplaceKeyPrefixWith")
            .addChildNode(new xml_builder_1.XmlText(input.ReplaceKeyPrefixWith))
            .withName("ReplaceKeyPrefixWith"));
    }
    if (input.ReplaceKeyWith !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ReplaceKeyWith")
            .addChildNode(new xml_builder_1.XmlText(input.ReplaceKeyWith))
            .withName("ReplaceKeyWith"));
    }
    return bodyNode;
};
const serializeAws_restXmlRedirectAllRequestsTo = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("RedirectAllRequestsTo");
    if (input.HostName !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("HostName")
            .addChildNode(new xml_builder_1.XmlText(input.HostName))
            .withName("HostName"));
    }
    if (input.Protocol !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Protocol")
            .addChildNode(new xml_builder_1.XmlText(input.Protocol))
            .withName("Protocol"));
    }
    return bodyNode;
};
const serializeAws_restXmlReplicationConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ReplicationConfiguration");
    if (input.Role !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Role")
            .addChildNode(new xml_builder_1.XmlText(input.Role))
            .withName("Role"));
    }
    if (input.Rules !== undefined) {
        const nodes = serializeAws_restXmlReplicationRules(input.Rules, context);
        nodes.map((node) => {
            node = node.withName("Rule");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlReplicationRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ReplicationRule");
    if (input.DeleteMarkerReplication !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlDeleteMarkerReplication(input.DeleteMarkerReplication, context).withName("DeleteMarkerReplication"));
    }
    if (input.Destination !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlDestination(input.Destination, context).withName("Destination"));
    }
    if (input.ExistingObjectReplication !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlExistingObjectReplication(input.ExistingObjectReplication, context).withName("ExistingObjectReplication"));
    }
    if (input.Filter !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlReplicationRuleFilter(input.Filter, context).withName("Filter"));
    }
    if (input.ID !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ID").addChildNode(new xml_builder_1.XmlText(input.ID)).withName("ID"));
    }
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Prefix")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    if (input.Priority !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Priority")
            .addChildNode(new xml_builder_1.XmlText(String(input.Priority)))
            .withName("Priority"));
    }
    if (input.SourceSelectionCriteria !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlSourceSelectionCriteria(input.SourceSelectionCriteria, context).withName("SourceSelectionCriteria"));
    }
    if (input.Status !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ReplicationRuleStatus")
            .addChildNode(new xml_builder_1.XmlText(input.Status))
            .withName("Status"));
    }
    return bodyNode;
};
const serializeAws_restXmlReplicationRuleAndOperator = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ReplicationRuleAndOperator");
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Prefix")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    if (input.Tags !== undefined) {
        const nodes = serializeAws_restXmlTagSet(input.Tags, context);
        nodes.map((node) => {
            node = node.withName("Tag");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlReplicationRuleFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ReplicationRuleFilter");
    if (input.And !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlReplicationRuleAndOperator(input.And, context).withName("And"));
    }
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Prefix")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    if (input.Tag !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlTag(input.Tag, context).withName("Tag"));
    }
    return bodyNode;
};
const serializeAws_restXmlReplicationRules = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlReplicationRule(entry, context);
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlReplicationTime = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ReplicationTime");
    if (input.Status !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ReplicationTimeStatus")
            .addChildNode(new xml_builder_1.XmlText(input.Status))
            .withName("Status"));
    }
    if (input.Time !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlReplicationTimeValue(input.Time, context).withName("Time"));
    }
    return bodyNode;
};
const serializeAws_restXmlReplicationTimeValue = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ReplicationTimeValue");
    if (input.Minutes !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Minutes")
            .addChildNode(new xml_builder_1.XmlText(String(input.Minutes)))
            .withName("Minutes"));
    }
    return bodyNode;
};
const serializeAws_restXmlRequestPaymentConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("RequestPaymentConfiguration");
    if (input.Payer !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Payer")
            .addChildNode(new xml_builder_1.XmlText(input.Payer))
            .withName("Payer"));
    }
    return bodyNode;
};
const serializeAws_restXmlRequestProgress = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("RequestProgress");
    if (input.Enabled !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("EnableRequestProgress")
            .addChildNode(new xml_builder_1.XmlText(String(input.Enabled)))
            .withName("Enabled"));
    }
    return bodyNode;
};
const serializeAws_restXmlRestoreRequest = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("RestoreRequest");
    if (input.Days !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Days")
            .addChildNode(new xml_builder_1.XmlText(String(input.Days)))
            .withName("Days"));
    }
    if (input.Description !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Description")
            .addChildNode(new xml_builder_1.XmlText(input.Description))
            .withName("Description"));
    }
    if (input.GlacierJobParameters !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlGlacierJobParameters(input.GlacierJobParameters, context).withName("GlacierJobParameters"));
    }
    if (input.OutputLocation !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlOutputLocation(input.OutputLocation, context).withName("OutputLocation"));
    }
    if (input.SelectParameters !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlSelectParameters(input.SelectParameters, context).withName("SelectParameters"));
    }
    if (input.Tier !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Tier")
            .addChildNode(new xml_builder_1.XmlText(input.Tier))
            .withName("Tier"));
    }
    if (input.Type !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("RestoreRequestType")
            .addChildNode(new xml_builder_1.XmlText(input.Type))
            .withName("Type"));
    }
    return bodyNode;
};
const serializeAws_restXmlRoutingRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("RoutingRule");
    if (input.Condition !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlCondition(input.Condition, context).withName("Condition"));
    }
    if (input.Redirect !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlRedirect(input.Redirect, context).withName("Redirect"));
    }
    return bodyNode;
};
const serializeAws_restXmlRoutingRules = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlRoutingRule(entry, context);
        collectedNodes.push(node.withName("RoutingRule"));
    }
    return collectedNodes;
};
const serializeAws_restXmlS3KeyFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3KeyFilter");
    if (input.FilterRules !== undefined) {
        const nodes = serializeAws_restXmlFilterRuleList(input.FilterRules, context);
        nodes.map((node) => {
            node = node.withName("FilterRule");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlS3Location = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3Location");
    if (input.AccessControlList !== undefined) {
        const nodes = serializeAws_restXmlGrants(input.AccessControlList, context);
        const containerNode = new xml_builder_1.XmlNode("AccessControlList");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.BucketName !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("BucketName")
            .addChildNode(new xml_builder_1.XmlText(input.BucketName))
            .withName("BucketName"));
    }
    if (input.CannedACL !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ObjectCannedACL")
            .addChildNode(new xml_builder_1.XmlText(input.CannedACL))
            .withName("CannedACL"));
    }
    if (input.Encryption !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlEncryption(input.Encryption, context).withName("Encryption"));
    }
    if (input.Prefix !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("LocationPrefix")
            .addChildNode(new xml_builder_1.XmlText(input.Prefix))
            .withName("Prefix"));
    }
    if (input.StorageClass !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("StorageClass")
            .addChildNode(new xml_builder_1.XmlText(input.StorageClass))
            .withName("StorageClass"));
    }
    if (input.Tagging !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlTagging(input.Tagging, context).withName("Tagging"));
    }
    if (input.UserMetadata !== undefined) {
        const nodes = serializeAws_restXmlUserMetadata(input.UserMetadata, context);
        const containerNode = new xml_builder_1.XmlNode("UserMetadata");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlSSEKMS = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("SSE-KMS");
    if (input.KeyId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("SSEKMSKeyId")
            .addChildNode(new xml_builder_1.XmlText(input.KeyId))
            .withName("KeyId"));
    }
    return bodyNode;
};
const serializeAws_restXmlSSES3 = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("SSE-S3");
    return bodyNode;
};
const serializeAws_restXmlScanRange = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ScanRange");
    if (input.End !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("End")
            .addChildNode(new xml_builder_1.XmlText(String(input.End)))
            .withName("End"));
    }
    if (input.Start !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Start")
            .addChildNode(new xml_builder_1.XmlText(String(input.Start)))
            .withName("Start"));
    }
    return bodyNode;
};
const serializeAws_restXmlSelectParameters = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("SelectParameters");
    if (input.Expression !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Expression")
            .addChildNode(new xml_builder_1.XmlText(input.Expression))
            .withName("Expression"));
    }
    if (input.ExpressionType !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ExpressionType")
            .addChildNode(new xml_builder_1.XmlText(input.ExpressionType))
            .withName("ExpressionType"));
    }
    if (input.InputSerialization !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlInputSerialization(input.InputSerialization, context).withName("InputSerialization"));
    }
    if (input.OutputSerialization !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlOutputSerialization(input.OutputSerialization, context).withName("OutputSerialization"));
    }
    return bodyNode;
};
const serializeAws_restXmlServerSideEncryptionByDefault = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ServerSideEncryptionByDefault");
    if (input.KMSMasterKeyID !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("SSEKMSKeyId")
            .addChildNode(new xml_builder_1.XmlText(input.KMSMasterKeyID))
            .withName("KMSMasterKeyID"));
    }
    if (input.SSEAlgorithm !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ServerSideEncryption")
            .addChildNode(new xml_builder_1.XmlText(input.SSEAlgorithm))
            .withName("SSEAlgorithm"));
    }
    return bodyNode;
};
const serializeAws_restXmlServerSideEncryptionConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ServerSideEncryptionConfiguration");
    if (input.Rules !== undefined) {
        const nodes = serializeAws_restXmlServerSideEncryptionRules(input.Rules, context);
        nodes.map((node) => {
            node = node.withName("Rule");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlServerSideEncryptionRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ServerSideEncryptionRule");
    if (input.ApplyServerSideEncryptionByDefault !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlServerSideEncryptionByDefault(input.ApplyServerSideEncryptionByDefault, context).withName("ApplyServerSideEncryptionByDefault"));
    }
    return bodyNode;
};
const serializeAws_restXmlServerSideEncryptionRules = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlServerSideEncryptionRule(entry, context);
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlSourceSelectionCriteria = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("SourceSelectionCriteria");
    if (input.SseKmsEncryptedObjects !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlSseKmsEncryptedObjects(input.SseKmsEncryptedObjects, context).withName("SseKmsEncryptedObjects"));
    }
    return bodyNode;
};
const serializeAws_restXmlSseKmsEncryptedObjects = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("SseKmsEncryptedObjects");
    if (input.Status !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("SseKmsEncryptedObjectsStatus")
            .addChildNode(new xml_builder_1.XmlText(input.Status))
            .withName("Status"));
    }
    return bodyNode;
};
const serializeAws_restXmlStorageClassAnalysis = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StorageClassAnalysis");
    if (input.DataExport !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlStorageClassAnalysisDataExport(input.DataExport, context).withName("DataExport"));
    }
    return bodyNode;
};
const serializeAws_restXmlStorageClassAnalysisDataExport = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StorageClassAnalysisDataExport");
    if (input.Destination !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlAnalyticsExportDestination(input.Destination, context).withName("Destination"));
    }
    if (input.OutputSchemaVersion !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("StorageClassAnalysisSchemaVersion")
            .addChildNode(new xml_builder_1.XmlText(input.OutputSchemaVersion))
            .withName("OutputSchemaVersion"));
    }
    return bodyNode;
};
const serializeAws_restXmlTag = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Tag");
    if (input.Key !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ObjectKey")
            .addChildNode(new xml_builder_1.XmlText(input.Key))
            .withName("Key"));
    }
    if (input.Value !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Value")
            .addChildNode(new xml_builder_1.XmlText(input.Value))
            .withName("Value"));
    }
    return bodyNode;
};
const serializeAws_restXmlTagSet = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlTag(entry, context);
        collectedNodes.push(node.withName("Tag"));
    }
    return collectedNodes;
};
const serializeAws_restXmlTagging = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Tagging");
    if (input.TagSet !== undefined) {
        const nodes = serializeAws_restXmlTagSet(input.TagSet, context);
        const containerNode = new xml_builder_1.XmlNode("TagSet");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlTargetGrant = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("TargetGrant");
    if (input.Grantee !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlGrantee(input.Grantee, context).withName("Grantee"));
    }
    if (input.Permission !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("BucketLogsPermission")
            .addChildNode(new xml_builder_1.XmlText(input.Permission))
            .withName("Permission"));
    }
    return bodyNode;
};
const serializeAws_restXmlTargetGrants = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlTargetGrant(entry, context);
        collectedNodes.push(node.withName("Grant"));
    }
    return collectedNodes;
};
const serializeAws_restXmlTopicConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("TopicConfiguration");
    if (input.Events !== undefined) {
        const nodes = serializeAws_restXmlEventList(input.Events, context);
        nodes.map((node) => {
            node = node.withName("Event");
            bodyNode.addChildNode(node);
        });
    }
    if (input.Filter !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter"));
    }
    if (input.Id !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("NotificationId")
            .addChildNode(new xml_builder_1.XmlText(input.Id))
            .withName("Id"));
    }
    if (input.TopicArn !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TopicArn")
            .addChildNode(new xml_builder_1.XmlText(input.TopicArn))
            .withName("Topic"));
    }
    return bodyNode;
};
const serializeAws_restXmlTopicConfigurationList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlTopicConfiguration(entry, context);
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlTransition = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Transition");
    if (input.Date !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Date")
            .addChildNode(new xml_builder_1.XmlText(input.Date.toISOString().split(".")[0] + "Z"))
            .withName("Date"));
    }
    if (input.Days !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Days")
            .addChildNode(new xml_builder_1.XmlText(String(input.Days)))
            .withName("Days"));
    }
    if (input.StorageClass !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TransitionStorageClass")
            .addChildNode(new xml_builder_1.XmlText(input.StorageClass))
            .withName("StorageClass"));
    }
    return bodyNode;
};
const serializeAws_restXmlTransitionList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlTransition(entry, context);
        collectedNodes.push(node.withName("member"));
    }
    return collectedNodes;
};
const serializeAws_restXmlUserMetadata = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlMetadataEntry(entry, context);
        collectedNodes.push(node.withName("MetadataEntry"));
    }
    return collectedNodes;
};
const serializeAws_restXmlVersioningConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("VersioningConfiguration");
    if (input.MFADelete !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("MFADelete")
            .addChildNode(new xml_builder_1.XmlText(input.MFADelete))
            .withName("MfaDelete"));
    }
    if (input.Status !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("BucketVersioningStatus")
            .addChildNode(new xml_builder_1.XmlText(input.Status))
            .withName("Status"));
    }
    return bodyNode;
};
const serializeAws_restXmlWebsiteConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("WebsiteConfiguration");
    if (input.ErrorDocument !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlErrorDocument(input.ErrorDocument, context).withName("ErrorDocument"));
    }
    if (input.IndexDocument !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlIndexDocument(input.IndexDocument, context).withName("IndexDocument"));
    }
    if (input.RedirectAllRequestsTo !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlRedirectAllRequestsTo(input.RedirectAllRequestsTo, context).withName("RedirectAllRequestsTo"));
    }
    if (input.RoutingRules !== undefined) {
        const nodes = serializeAws_restXmlRoutingRules(input.RoutingRules, context);
        const containerNode = new xml_builder_1.XmlNode("RoutingRules");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const deserializeAws_restXmlAbortIncompleteMultipartUpload = (output, context) => {
    let contents = {
        __type: "AbortIncompleteMultipartUpload",
        DaysAfterInitiation: undefined
    };
    if (output["DaysAfterInitiation"] !== undefined) {
        contents.DaysAfterInitiation = parseInt(output["DaysAfterInitiation"]);
    }
    return contents;
};
const deserializeAws_restXmlAccessControlTranslation = (output, context) => {
    let contents = {
        __type: "AccessControlTranslation",
        Owner: undefined
    };
    if (output["Owner"] !== undefined) {
        contents.Owner = output["Owner"];
    }
    return contents;
};
const deserializeAws_restXmlAllowedHeaders = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlAllowedMethods = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlAllowedOrigins = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlAnalyticsAndOperator = (output, context) => {
    let contents = {
        __type: "AnalyticsAndOperator",
        Prefix: undefined,
        Tags: undefined
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output.Tag === "") {
        contents.Tags = [];
    }
    if (output["Tag"] !== undefined) {
        const wrappedItem = output["Tag"] instanceof Array ? output["Tag"] : [output["Tag"]];
        contents.Tags = deserializeAws_restXmlTagSet(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_restXmlAnalyticsConfiguration = (output, context) => {
    let contents = {
        __type: "AnalyticsConfiguration",
        Filter: undefined,
        Id: undefined,
        StorageClassAnalysis: undefined
    };
    if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlAnalyticsFilter(output["Filter"], context);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["StorageClassAnalysis"] !== undefined) {
        contents.StorageClassAnalysis = deserializeAws_restXmlStorageClassAnalysis(output["StorageClassAnalysis"], context);
    }
    return contents;
};
const deserializeAws_restXmlAnalyticsConfigurationList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlAnalyticsConfiguration(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlAnalyticsExportDestination = (output, context) => {
    let contents = {
        __type: "AnalyticsExportDestination",
        S3BucketDestination: undefined
    };
    if (output["S3BucketDestination"] !== undefined) {
        contents.S3BucketDestination = deserializeAws_restXmlAnalyticsS3BucketDestination(output["S3BucketDestination"], context);
    }
    return contents;
};
const deserializeAws_restXmlAnalyticsFilter = (output, context) => {
    let contents = {
        __type: "AnalyticsFilter",
        And: undefined,
        Prefix: undefined,
        Tag: undefined
    };
    if (output["And"] !== undefined) {
        contents.And = deserializeAws_restXmlAnalyticsAndOperator(output["And"], context);
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output["Tag"] !== undefined) {
        contents.Tag = deserializeAws_restXmlTag(output["Tag"], context);
    }
    return contents;
};
const deserializeAws_restXmlAnalyticsS3BucketDestination = (output, context) => {
    let contents = {
        __type: "AnalyticsS3BucketDestination",
        Bucket: undefined,
        BucketAccountId: undefined,
        Format: undefined,
        Prefix: undefined
    };
    if (output["Bucket"] !== undefined) {
        contents.Bucket = output["Bucket"];
    }
    if (output["BucketAccountId"] !== undefined) {
        contents.BucketAccountId = output["BucketAccountId"];
    }
    if (output["Format"] !== undefined) {
        contents.Format = output["Format"];
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    return contents;
};
const deserializeAws_restXmlBucket = (output, context) => {
    let contents = {
        __type: "Bucket",
        CreationDate: undefined,
        Name: undefined
    };
    if (output["CreationDate"] !== undefined) {
        contents.CreationDate = new Date(output["CreationDate"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_restXmlBuckets = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlBucket(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlCORSRule = (output, context) => {
    let contents = {
        __type: "CORSRule",
        AllowedHeaders: undefined,
        AllowedMethods: undefined,
        AllowedOrigins: undefined,
        ExposeHeaders: undefined,
        MaxAgeSeconds: undefined
    };
    if (output.AllowedHeader === "") {
        contents.AllowedHeaders = [];
    }
    if (output["AllowedHeader"] !== undefined) {
        const wrappedItem = output["AllowedHeader"] instanceof Array
            ? output["AllowedHeader"]
            : [output["AllowedHeader"]];
        contents.AllowedHeaders = deserializeAws_restXmlAllowedHeaders(wrappedItem, context);
    }
    if (output.AllowedMethod === "") {
        contents.AllowedMethods = [];
    }
    if (output["AllowedMethod"] !== undefined) {
        const wrappedItem = output["AllowedMethod"] instanceof Array
            ? output["AllowedMethod"]
            : [output["AllowedMethod"]];
        contents.AllowedMethods = deserializeAws_restXmlAllowedMethods(wrappedItem, context);
    }
    if (output.AllowedOrigin === "") {
        contents.AllowedOrigins = [];
    }
    if (output["AllowedOrigin"] !== undefined) {
        const wrappedItem = output["AllowedOrigin"] instanceof Array
            ? output["AllowedOrigin"]
            : [output["AllowedOrigin"]];
        contents.AllowedOrigins = deserializeAws_restXmlAllowedOrigins(wrappedItem, context);
    }
    if (output.ExposeHeader === "") {
        contents.ExposeHeaders = [];
    }
    if (output["ExposeHeader"] !== undefined) {
        const wrappedItem = output["ExposeHeader"] instanceof Array
            ? output["ExposeHeader"]
            : [output["ExposeHeader"]];
        contents.ExposeHeaders = deserializeAws_restXmlExposeHeaders(wrappedItem, context);
    }
    if (output["MaxAgeSeconds"] !== undefined) {
        contents.MaxAgeSeconds = parseInt(output["MaxAgeSeconds"]);
    }
    return contents;
};
const deserializeAws_restXmlCORSRules = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlCORSRule(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlCommonPrefix = (output, context) => {
    let contents = {
        __type: "CommonPrefix",
        Prefix: undefined
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    return contents;
};
const deserializeAws_restXmlCommonPrefixList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlCommonPrefix(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlCondition = (output, context) => {
    let contents = {
        __type: "Condition",
        HttpErrorCodeReturnedEquals: undefined,
        KeyPrefixEquals: undefined
    };
    if (output["HttpErrorCodeReturnedEquals"] !== undefined) {
        contents.HttpErrorCodeReturnedEquals =
            output["HttpErrorCodeReturnedEquals"];
    }
    if (output["KeyPrefixEquals"] !== undefined) {
        contents.KeyPrefixEquals = output["KeyPrefixEquals"];
    }
    return contents;
};
const deserializeAws_restXmlCopyObjectResult = (output, context) => {
    let contents = {
        __type: "CopyObjectResult",
        ETag: undefined,
        LastModified: undefined
    };
    if (output["ETag"] !== undefined) {
        contents.ETag = output["ETag"];
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = new Date(output["LastModified"]);
    }
    return contents;
};
const deserializeAws_restXmlCopyPartResult = (output, context) => {
    let contents = {
        __type: "CopyPartResult",
        ETag: undefined,
        LastModified: undefined
    };
    if (output["ETag"] !== undefined) {
        contents.ETag = output["ETag"];
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = new Date(output["LastModified"]);
    }
    return contents;
};
const deserializeAws_restXmlDefaultRetention = (output, context) => {
    let contents = {
        __type: "DefaultRetention",
        Days: undefined,
        Mode: undefined,
        Years: undefined
    };
    if (output["Days"] !== undefined) {
        contents.Days = parseInt(output["Days"]);
    }
    if (output["Mode"] !== undefined) {
        contents.Mode = output["Mode"];
    }
    if (output["Years"] !== undefined) {
        contents.Years = parseInt(output["Years"]);
    }
    return contents;
};
const deserializeAws_restXmlDeleteMarkerEntry = (output, context) => {
    let contents = {
        __type: "DeleteMarkerEntry",
        IsLatest: undefined,
        Key: undefined,
        LastModified: undefined,
        Owner: undefined,
        VersionId: undefined
    };
    if (output["IsLatest"] !== undefined) {
        contents.IsLatest = output["IsLatest"] == "true";
    }
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = new Date(output["LastModified"]);
    }
    if (output["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
    }
    if (output["VersionId"] !== undefined) {
        contents.VersionId = output["VersionId"];
    }
    return contents;
};
const deserializeAws_restXmlDeleteMarkerReplication = (output, context) => {
    let contents = {
        __type: "DeleteMarkerReplication",
        Status: undefined
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_restXmlDeleteMarkers = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlDeleteMarkerEntry(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlDeletedObject = (output, context) => {
    let contents = {
        __type: "DeletedObject",
        DeleteMarker: undefined,
        DeleteMarkerVersionId: undefined,
        Key: undefined,
        VersionId: undefined
    };
    if (output["DeleteMarker"] !== undefined) {
        contents.DeleteMarker = output["DeleteMarker"] == "true";
    }
    if (output["DeleteMarkerVersionId"] !== undefined) {
        contents.DeleteMarkerVersionId = output["DeleteMarkerVersionId"];
    }
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["VersionId"] !== undefined) {
        contents.VersionId = output["VersionId"];
    }
    return contents;
};
const deserializeAws_restXmlDeletedObjects = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlDeletedObject(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlDestination = (output, context) => {
    let contents = {
        __type: "Destination",
        AccessControlTranslation: undefined,
        Account: undefined,
        Bucket: undefined,
        EncryptionConfiguration: undefined,
        Metrics: undefined,
        ReplicationTime: undefined,
        StorageClass: undefined
    };
    if (output["AccessControlTranslation"] !== undefined) {
        contents.AccessControlTranslation = deserializeAws_restXmlAccessControlTranslation(output["AccessControlTranslation"], context);
    }
    if (output["Account"] !== undefined) {
        contents.Account = output["Account"];
    }
    if (output["Bucket"] !== undefined) {
        contents.Bucket = output["Bucket"];
    }
    if (output["EncryptionConfiguration"] !== undefined) {
        contents.EncryptionConfiguration = deserializeAws_restXmlEncryptionConfiguration(output["EncryptionConfiguration"], context);
    }
    if (output["Metrics"] !== undefined) {
        contents.Metrics = deserializeAws_restXmlMetrics(output["Metrics"], context);
    }
    if (output["ReplicationTime"] !== undefined) {
        contents.ReplicationTime = deserializeAws_restXmlReplicationTime(output["ReplicationTime"], context);
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = output["StorageClass"];
    }
    return contents;
};
const deserializeAws_restXmlEncryptionConfiguration = (output, context) => {
    let contents = {
        __type: "EncryptionConfiguration",
        ReplicaKmsKeyID: undefined
    };
    if (output["ReplicaKmsKeyID"] !== undefined) {
        contents.ReplicaKmsKeyID = output["ReplicaKmsKeyID"];
    }
    return contents;
};
const deserializeAws_restXml_Error = (output, context) => {
    let contents = {
        __type: "Error",
        Code: undefined,
        Key: undefined,
        Message: undefined,
        VersionId: undefined
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["VersionId"] !== undefined) {
        contents.VersionId = output["VersionId"];
    }
    return contents;
};
const deserializeAws_restXmlErrorDocument = (output, context) => {
    let contents = {
        __type: "ErrorDocument",
        Key: undefined
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    return contents;
};
const deserializeAws_restXmlErrors = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXml_Error(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlEventList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlExistingObjectReplication = (output, context) => {
    let contents = {
        __type: "ExistingObjectReplication",
        Status: undefined
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_restXmlExposeHeaders = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlFilterRule = (output, context) => {
    let contents = {
        __type: "FilterRule",
        Name: undefined,
        Value: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_restXmlFilterRuleList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlFilterRule(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlGrant = (output, context) => {
    let contents = {
        __type: "Grant",
        Grantee: undefined,
        Permission: undefined
    };
    if (output["Grantee"] !== undefined) {
        contents.Grantee = deserializeAws_restXmlGrantee(output["Grantee"], context);
    }
    if (output["Permission"] !== undefined) {
        contents.Permission = output["Permission"];
    }
    return contents;
};
const deserializeAws_restXmlGrantee = (output, context) => {
    let contents = {
        __type: "Grantee",
        DisplayName: undefined,
        EmailAddress: undefined,
        ID: undefined,
        Type: undefined,
        URI: undefined
    };
    if (output["DisplayName"] !== undefined) {
        contents.DisplayName = output["DisplayName"];
    }
    if (output["EmailAddress"] !== undefined) {
        contents.EmailAddress = output["EmailAddress"];
    }
    if (output["ID"] !== undefined) {
        contents.ID = output["ID"];
    }
    if (output["xsi:type"] !== undefined) {
        contents.Type = output["xsi:type"];
    }
    if (output["URI"] !== undefined) {
        contents.URI = output["URI"];
    }
    return contents;
};
const deserializeAws_restXmlGrants = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlGrant(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlIndexDocument = (output, context) => {
    let contents = {
        __type: "IndexDocument",
        Suffix: undefined
    };
    if (output["Suffix"] !== undefined) {
        contents.Suffix = output["Suffix"];
    }
    return contents;
};
const deserializeAws_restXmlInitiator = (output, context) => {
    let contents = {
        __type: "Initiator",
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
const deserializeAws_restXmlInventoryConfiguration = (output, context) => {
    let contents = {
        __type: "InventoryConfiguration",
        Destination: undefined,
        Filter: undefined,
        Id: undefined,
        IncludedObjectVersions: undefined,
        IsEnabled: undefined,
        OptionalFields: undefined,
        Schedule: undefined
    };
    if (output["Destination"] !== undefined) {
        contents.Destination = deserializeAws_restXmlInventoryDestination(output["Destination"], context);
    }
    if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlInventoryFilter(output["Filter"], context);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["IncludedObjectVersions"] !== undefined) {
        contents.IncludedObjectVersions = output["IncludedObjectVersions"];
    }
    if (output["IsEnabled"] !== undefined) {
        contents.IsEnabled = output["IsEnabled"] == "true";
    }
    if (output.OptionalFields === "") {
        contents.OptionalFields = [];
    }
    if (output["OptionalFields"] !== undefined &&
        output["OptionalFields"]["Field"] !== undefined) {
        const wrappedItem = output["OptionalFields"]["Field"] instanceof Array
            ? output["OptionalFields"]["Field"]
            : [output["OptionalFields"]["Field"]];
        contents.OptionalFields = deserializeAws_restXmlInventoryOptionalFields(wrappedItem, context);
    }
    if (output["Schedule"] !== undefined) {
        contents.Schedule = deserializeAws_restXmlInventorySchedule(output["Schedule"], context);
    }
    return contents;
};
const deserializeAws_restXmlInventoryConfigurationList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlInventoryConfiguration(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlInventoryDestination = (output, context) => {
    let contents = {
        __type: "InventoryDestination",
        S3BucketDestination: undefined
    };
    if (output["S3BucketDestination"] !== undefined) {
        contents.S3BucketDestination = deserializeAws_restXmlInventoryS3BucketDestination(output["S3BucketDestination"], context);
    }
    return contents;
};
const deserializeAws_restXmlInventoryEncryption = (output, context) => {
    let contents = {
        __type: "InventoryEncryption",
        SSEKMS: undefined,
        SSES3: undefined
    };
    if (output["SSE-KMS"] !== undefined) {
        contents.SSEKMS = deserializeAws_restXmlSSEKMS(output["SSE-KMS"], context);
    }
    if (output["SSE-S3"] !== undefined) {
        contents.SSES3 = deserializeAws_restXmlSSES3(output["SSE-S3"], context);
    }
    return contents;
};
const deserializeAws_restXmlInventoryFilter = (output, context) => {
    let contents = {
        __type: "InventoryFilter",
        Prefix: undefined
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    return contents;
};
const deserializeAws_restXmlInventoryOptionalFields = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlInventoryS3BucketDestination = (output, context) => {
    let contents = {
        __type: "InventoryS3BucketDestination",
        AccountId: undefined,
        Bucket: undefined,
        Encryption: undefined,
        Format: undefined,
        Prefix: undefined
    };
    if (output["AccountId"] !== undefined) {
        contents.AccountId = output["AccountId"];
    }
    if (output["Bucket"] !== undefined) {
        contents.Bucket = output["Bucket"];
    }
    if (output["Encryption"] !== undefined) {
        contents.Encryption = deserializeAws_restXmlInventoryEncryption(output["Encryption"], context);
    }
    if (output["Format"] !== undefined) {
        contents.Format = output["Format"];
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    return contents;
};
const deserializeAws_restXmlInventorySchedule = (output, context) => {
    let contents = {
        __type: "InventorySchedule",
        Frequency: undefined
    };
    if (output["Frequency"] !== undefined) {
        contents.Frequency = output["Frequency"];
    }
    return contents;
};
const deserializeAws_restXmlLambdaFunctionConfiguration = (output, context) => {
    let contents = {
        __type: "LambdaFunctionConfiguration",
        Events: undefined,
        Filter: undefined,
        Id: undefined,
        LambdaFunctionArn: undefined
    };
    if (output.Event === "") {
        contents.Events = [];
    }
    if (output["Event"] !== undefined) {
        const wrappedItem = output["Event"] instanceof Array ? output["Event"] : [output["Event"]];
        contents.Events = deserializeAws_restXmlEventList(wrappedItem, context);
    }
    if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["CloudFunction"] !== undefined) {
        contents.LambdaFunctionArn = output["CloudFunction"];
    }
    return contents;
};
const deserializeAws_restXmlLambdaFunctionConfigurationList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlLambdaFunctionConfiguration(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlLifecycleExpiration = (output, context) => {
    let contents = {
        __type: "LifecycleExpiration",
        Date: undefined,
        Days: undefined,
        ExpiredObjectDeleteMarker: undefined
    };
    if (output["Date"] !== undefined) {
        contents.Date = new Date(output["Date"]);
    }
    if (output["Days"] !== undefined) {
        contents.Days = parseInt(output["Days"]);
    }
    if (output["ExpiredObjectDeleteMarker"] !== undefined) {
        contents.ExpiredObjectDeleteMarker =
            output["ExpiredObjectDeleteMarker"] == "true";
    }
    return contents;
};
const deserializeAws_restXmlLifecycleRule = (output, context) => {
    let contents = {
        __type: "LifecycleRule",
        AbortIncompleteMultipartUpload: undefined,
        Expiration: undefined,
        Filter: undefined,
        ID: undefined,
        NoncurrentVersionExpiration: undefined,
        NoncurrentVersionTransitions: undefined,
        Prefix: undefined,
        Status: undefined,
        Transitions: undefined
    };
    if (output["AbortIncompleteMultipartUpload"] !== undefined) {
        contents.AbortIncompleteMultipartUpload = deserializeAws_restXmlAbortIncompleteMultipartUpload(output["AbortIncompleteMultipartUpload"], context);
    }
    if (output["Expiration"] !== undefined) {
        contents.Expiration = deserializeAws_restXmlLifecycleExpiration(output["Expiration"], context);
    }
    if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlLifecycleRuleFilter(output["Filter"], context);
    }
    if (output["ID"] !== undefined) {
        contents.ID = output["ID"];
    }
    if (output["NoncurrentVersionExpiration"] !== undefined) {
        contents.NoncurrentVersionExpiration = deserializeAws_restXmlNoncurrentVersionExpiration(output["NoncurrentVersionExpiration"], context);
    }
    if (output.NoncurrentVersionTransition === "") {
        contents.NoncurrentVersionTransitions = [];
    }
    if (output["NoncurrentVersionTransition"] !== undefined) {
        const wrappedItem = output["NoncurrentVersionTransition"] instanceof Array
            ? output["NoncurrentVersionTransition"]
            : [output["NoncurrentVersionTransition"]];
        contents.NoncurrentVersionTransitions = deserializeAws_restXmlNoncurrentVersionTransitionList(wrappedItem, context);
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output.Transition === "") {
        contents.Transitions = [];
    }
    if (output["Transition"] !== undefined) {
        const wrappedItem = output["Transition"] instanceof Array
            ? output["Transition"]
            : [output["Transition"]];
        contents.Transitions = deserializeAws_restXmlTransitionList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_restXmlLifecycleRuleAndOperator = (output, context) => {
    let contents = {
        __type: "LifecycleRuleAndOperator",
        Prefix: undefined,
        Tags: undefined
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output.Tag === "") {
        contents.Tags = [];
    }
    if (output["Tag"] !== undefined) {
        const wrappedItem = output["Tag"] instanceof Array ? output["Tag"] : [output["Tag"]];
        contents.Tags = deserializeAws_restXmlTagSet(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_restXmlLifecycleRuleFilter = (output, context) => {
    let contents = {
        __type: "LifecycleRuleFilter",
        And: undefined,
        Prefix: undefined,
        Tag: undefined
    };
    if (output["And"] !== undefined) {
        contents.And = deserializeAws_restXmlLifecycleRuleAndOperator(output["And"], context);
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output["Tag"] !== undefined) {
        contents.Tag = deserializeAws_restXmlTag(output["Tag"], context);
    }
    return contents;
};
const deserializeAws_restXmlLifecycleRules = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlLifecycleRule(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlLoggingEnabled = (output, context) => {
    let contents = {
        __type: "LoggingEnabled",
        TargetBucket: undefined,
        TargetGrants: undefined,
        TargetPrefix: undefined
    };
    if (output["TargetBucket"] !== undefined) {
        contents.TargetBucket = output["TargetBucket"];
    }
    if (output.TargetGrants === "") {
        contents.TargetGrants = [];
    }
    if (output["TargetGrants"] !== undefined &&
        output["TargetGrants"]["Grant"] !== undefined) {
        const wrappedItem = output["TargetGrants"]["Grant"] instanceof Array
            ? output["TargetGrants"]["Grant"]
            : [output["TargetGrants"]["Grant"]];
        contents.TargetGrants = deserializeAws_restXmlTargetGrants(wrappedItem, context);
    }
    if (output["TargetPrefix"] !== undefined) {
        contents.TargetPrefix = output["TargetPrefix"];
    }
    return contents;
};
const deserializeAws_restXmlMetrics = (output, context) => {
    let contents = {
        __type: "Metrics",
        EventThreshold: undefined,
        Status: undefined
    };
    if (output["EventThreshold"] !== undefined) {
        contents.EventThreshold = deserializeAws_restXmlReplicationTimeValue(output["EventThreshold"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_restXmlMetricsAndOperator = (output, context) => {
    let contents = {
        __type: "MetricsAndOperator",
        Prefix: undefined,
        Tags: undefined
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output.Tag === "") {
        contents.Tags = [];
    }
    if (output["Tag"] !== undefined) {
        const wrappedItem = output["Tag"] instanceof Array ? output["Tag"] : [output["Tag"]];
        contents.Tags = deserializeAws_restXmlTagSet(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_restXmlMetricsConfiguration = (output, context) => {
    let contents = {
        __type: "MetricsConfiguration",
        Filter: undefined,
        Id: undefined
    };
    if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlMetricsFilter(output["Filter"], context);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    return contents;
};
const deserializeAws_restXmlMetricsConfigurationList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlMetricsConfiguration(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlMetricsFilter = (output, context) => {
    let contents = {
        __type: "MetricsFilter",
        And: undefined,
        Prefix: undefined,
        Tag: undefined
    };
    if (output["And"] !== undefined) {
        contents.And = deserializeAws_restXmlMetricsAndOperator(output["And"], context);
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output["Tag"] !== undefined) {
        contents.Tag = deserializeAws_restXmlTag(output["Tag"], context);
    }
    return contents;
};
const deserializeAws_restXmlMultipartUpload = (output, context) => {
    let contents = {
        __type: "MultipartUpload",
        Initiated: undefined,
        Initiator: undefined,
        Key: undefined,
        Owner: undefined,
        StorageClass: undefined,
        UploadId: undefined
    };
    if (output["Initiated"] !== undefined) {
        contents.Initiated = new Date(output["Initiated"]);
    }
    if (output["Initiator"] !== undefined) {
        contents.Initiator = deserializeAws_restXmlInitiator(output["Initiator"], context);
    }
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = output["StorageClass"];
    }
    if (output["UploadId"] !== undefined) {
        contents.UploadId = output["UploadId"];
    }
    return contents;
};
const deserializeAws_restXmlMultipartUploadList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlMultipartUpload(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlNoncurrentVersionExpiration = (output, context) => {
    let contents = {
        __type: "NoncurrentVersionExpiration",
        NoncurrentDays: undefined
    };
    if (output["NoncurrentDays"] !== undefined) {
        contents.NoncurrentDays = parseInt(output["NoncurrentDays"]);
    }
    return contents;
};
const deserializeAws_restXmlNoncurrentVersionTransition = (output, context) => {
    let contents = {
        __type: "NoncurrentVersionTransition",
        NoncurrentDays: undefined,
        StorageClass: undefined
    };
    if (output["NoncurrentDays"] !== undefined) {
        contents.NoncurrentDays = parseInt(output["NoncurrentDays"]);
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = output["StorageClass"];
    }
    return contents;
};
const deserializeAws_restXmlNoncurrentVersionTransitionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlNoncurrentVersionTransition(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlNotificationConfigurationFilter = (output, context) => {
    let contents = {
        __type: "NotificationConfigurationFilter",
        Key: undefined
    };
    if (output["S3Key"] !== undefined) {
        contents.Key = deserializeAws_restXmlS3KeyFilter(output["S3Key"], context);
    }
    return contents;
};
const deserializeAws_restXml_Object = (output, context) => {
    let contents = {
        __type: "Object",
        ETag: undefined,
        Key: undefined,
        LastModified: undefined,
        Owner: undefined,
        Size: undefined,
        StorageClass: undefined
    };
    if (output["ETag"] !== undefined) {
        contents.ETag = output["ETag"];
    }
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = new Date(output["LastModified"]);
    }
    if (output["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
    }
    if (output["Size"] !== undefined) {
        contents.Size = parseInt(output["Size"]);
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = output["StorageClass"];
    }
    return contents;
};
const deserializeAws_restXmlObjectList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXml_Object(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlObjectLockConfiguration = (output, context) => {
    let contents = {
        __type: "ObjectLockConfiguration",
        ObjectLockEnabled: undefined,
        Rule: undefined
    };
    if (output["ObjectLockEnabled"] !== undefined) {
        contents.ObjectLockEnabled = output["ObjectLockEnabled"];
    }
    if (output["Rule"] !== undefined) {
        contents.Rule = deserializeAws_restXmlObjectLockRule(output["Rule"], context);
    }
    return contents;
};
const deserializeAws_restXmlObjectLockLegalHold = (output, context) => {
    let contents = {
        __type: "ObjectLockLegalHold",
        Status: undefined
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_restXmlObjectLockRetention = (output, context) => {
    let contents = {
        __type: "ObjectLockRetention",
        Mode: undefined,
        RetainUntilDate: undefined
    };
    if (output["Mode"] !== undefined) {
        contents.Mode = output["Mode"];
    }
    if (output["RetainUntilDate"] !== undefined) {
        contents.RetainUntilDate = new Date(output["RetainUntilDate"]);
    }
    return contents;
};
const deserializeAws_restXmlObjectLockRule = (output, context) => {
    let contents = {
        __type: "ObjectLockRule",
        DefaultRetention: undefined
    };
    if (output["DefaultRetention"] !== undefined) {
        contents.DefaultRetention = deserializeAws_restXmlDefaultRetention(output["DefaultRetention"], context);
    }
    return contents;
};
const deserializeAws_restXmlObjectVersion = (output, context) => {
    let contents = {
        __type: "ObjectVersion",
        ETag: undefined,
        IsLatest: undefined,
        Key: undefined,
        LastModified: undefined,
        Owner: undefined,
        Size: undefined,
        StorageClass: undefined,
        VersionId: undefined
    };
    if (output["ETag"] !== undefined) {
        contents.ETag = output["ETag"];
    }
    if (output["IsLatest"] !== undefined) {
        contents.IsLatest = output["IsLatest"] == "true";
    }
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = new Date(output["LastModified"]);
    }
    if (output["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
    }
    if (output["Size"] !== undefined) {
        contents.Size = parseInt(output["Size"]);
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = output["StorageClass"];
    }
    if (output["VersionId"] !== undefined) {
        contents.VersionId = output["VersionId"];
    }
    return contents;
};
const deserializeAws_restXmlObjectVersionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlObjectVersion(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlOwner = (output, context) => {
    let contents = {
        __type: "Owner",
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
const deserializeAws_restXmlPart = (output, context) => {
    let contents = {
        __type: "Part",
        ETag: undefined,
        LastModified: undefined,
        PartNumber: undefined,
        Size: undefined
    };
    if (output["ETag"] !== undefined) {
        contents.ETag = output["ETag"];
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = new Date(output["LastModified"]);
    }
    if (output["PartNumber"] !== undefined) {
        contents.PartNumber = parseInt(output["PartNumber"]);
    }
    if (output["Size"] !== undefined) {
        contents.Size = parseInt(output["Size"]);
    }
    return contents;
};
const deserializeAws_restXmlParts = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlPart(entry, context));
    });
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
const deserializeAws_restXmlQueueConfiguration = (output, context) => {
    let contents = {
        __type: "QueueConfiguration",
        Events: undefined,
        Filter: undefined,
        Id: undefined,
        QueueArn: undefined
    };
    if (output.Event === "") {
        contents.Events = [];
    }
    if (output["Event"] !== undefined) {
        const wrappedItem = output["Event"] instanceof Array ? output["Event"] : [output["Event"]];
        contents.Events = deserializeAws_restXmlEventList(wrappedItem, context);
    }
    if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Queue"] !== undefined) {
        contents.QueueArn = output["Queue"];
    }
    return contents;
};
const deserializeAws_restXmlQueueConfigurationList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlQueueConfiguration(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlRedirect = (output, context) => {
    let contents = {
        __type: "Redirect",
        HostName: undefined,
        HttpRedirectCode: undefined,
        Protocol: undefined,
        ReplaceKeyPrefixWith: undefined,
        ReplaceKeyWith: undefined
    };
    if (output["HostName"] !== undefined) {
        contents.HostName = output["HostName"];
    }
    if (output["HttpRedirectCode"] !== undefined) {
        contents.HttpRedirectCode = output["HttpRedirectCode"];
    }
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    if (output["ReplaceKeyPrefixWith"] !== undefined) {
        contents.ReplaceKeyPrefixWith = output["ReplaceKeyPrefixWith"];
    }
    if (output["ReplaceKeyWith"] !== undefined) {
        contents.ReplaceKeyWith = output["ReplaceKeyWith"];
    }
    return contents;
};
const deserializeAws_restXmlRedirectAllRequestsTo = (output, context) => {
    let contents = {
        __type: "RedirectAllRequestsTo",
        HostName: undefined,
        Protocol: undefined
    };
    if (output["HostName"] !== undefined) {
        contents.HostName = output["HostName"];
    }
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    return contents;
};
const deserializeAws_restXmlReplicationConfiguration = (output, context) => {
    let contents = {
        __type: "ReplicationConfiguration",
        Role: undefined,
        Rules: undefined
    };
    if (output["Role"] !== undefined) {
        contents.Role = output["Role"];
    }
    if (output.Rule === "") {
        contents.Rules = [];
    }
    if (output["Rule"] !== undefined) {
        const wrappedItem = output["Rule"] instanceof Array ? output["Rule"] : [output["Rule"]];
        contents.Rules = deserializeAws_restXmlReplicationRules(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_restXmlReplicationRule = (output, context) => {
    let contents = {
        __type: "ReplicationRule",
        DeleteMarkerReplication: undefined,
        Destination: undefined,
        ExistingObjectReplication: undefined,
        Filter: undefined,
        ID: undefined,
        Prefix: undefined,
        Priority: undefined,
        SourceSelectionCriteria: undefined,
        Status: undefined
    };
    if (output["DeleteMarkerReplication"] !== undefined) {
        contents.DeleteMarkerReplication = deserializeAws_restXmlDeleteMarkerReplication(output["DeleteMarkerReplication"], context);
    }
    if (output["Destination"] !== undefined) {
        contents.Destination = deserializeAws_restXmlDestination(output["Destination"], context);
    }
    if (output["ExistingObjectReplication"] !== undefined) {
        contents.ExistingObjectReplication = deserializeAws_restXmlExistingObjectReplication(output["ExistingObjectReplication"], context);
    }
    if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlReplicationRuleFilter(output["Filter"], context);
    }
    if (output["ID"] !== undefined) {
        contents.ID = output["ID"];
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output["Priority"] !== undefined) {
        contents.Priority = parseInt(output["Priority"]);
    }
    if (output["SourceSelectionCriteria"] !== undefined) {
        contents.SourceSelectionCriteria = deserializeAws_restXmlSourceSelectionCriteria(output["SourceSelectionCriteria"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_restXmlReplicationRuleAndOperator = (output, context) => {
    let contents = {
        __type: "ReplicationRuleAndOperator",
        Prefix: undefined,
        Tags: undefined
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output.Tag === "") {
        contents.Tags = [];
    }
    if (output["Tag"] !== undefined) {
        const wrappedItem = output["Tag"] instanceof Array ? output["Tag"] : [output["Tag"]];
        contents.Tags = deserializeAws_restXmlTagSet(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_restXmlReplicationRuleFilter = (output, context) => {
    let contents = {
        __type: "ReplicationRuleFilter",
        And: undefined,
        Prefix: undefined,
        Tag: undefined
    };
    if (output["And"] !== undefined) {
        contents.And = deserializeAws_restXmlReplicationRuleAndOperator(output["And"], context);
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = output["Prefix"];
    }
    if (output["Tag"] !== undefined) {
        contents.Tag = deserializeAws_restXmlTag(output["Tag"], context);
    }
    return contents;
};
const deserializeAws_restXmlReplicationRules = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlReplicationRule(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlReplicationTime = (output, context) => {
    let contents = {
        __type: "ReplicationTime",
        Status: undefined,
        Time: undefined
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Time"] !== undefined) {
        contents.Time = deserializeAws_restXmlReplicationTimeValue(output["Time"], context);
    }
    return contents;
};
const deserializeAws_restXmlReplicationTimeValue = (output, context) => {
    let contents = {
        __type: "ReplicationTimeValue",
        Minutes: undefined
    };
    if (output["Minutes"] !== undefined) {
        contents.Minutes = parseInt(output["Minutes"]);
    }
    return contents;
};
const deserializeAws_restXmlRoutingRule = (output, context) => {
    let contents = {
        __type: "RoutingRule",
        Condition: undefined,
        Redirect: undefined
    };
    if (output["Condition"] !== undefined) {
        contents.Condition = deserializeAws_restXmlCondition(output["Condition"], context);
    }
    if (output["Redirect"] !== undefined) {
        contents.Redirect = deserializeAws_restXmlRedirect(output["Redirect"], context);
    }
    return contents;
};
const deserializeAws_restXmlRoutingRules = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlRoutingRule(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlS3KeyFilter = (output, context) => {
    let contents = {
        __type: "S3KeyFilter",
        FilterRules: undefined
    };
    if (output.FilterRule === "") {
        contents.FilterRules = [];
    }
    if (output["FilterRule"] !== undefined) {
        const wrappedItem = output["FilterRule"] instanceof Array
            ? output["FilterRule"]
            : [output["FilterRule"]];
        contents.FilterRules = deserializeAws_restXmlFilterRuleList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_restXmlSSEKMS = (output, context) => {
    let contents = {
        __type: "SSEKMS",
        KeyId: undefined
    };
    if (output["KeyId"] !== undefined) {
        contents.KeyId = output["KeyId"];
    }
    return contents;
};
const deserializeAws_restXmlSSES3 = (output, context) => {
    let contents = {
        __type: "SSES3"
    };
    return contents;
};
const deserializeAws_restXmlServerSideEncryptionByDefault = (output, context) => {
    let contents = {
        __type: "ServerSideEncryptionByDefault",
        KMSMasterKeyID: undefined,
        SSEAlgorithm: undefined
    };
    if (output["KMSMasterKeyID"] !== undefined) {
        contents.KMSMasterKeyID = output["KMSMasterKeyID"];
    }
    if (output["SSEAlgorithm"] !== undefined) {
        contents.SSEAlgorithm = output["SSEAlgorithm"];
    }
    return contents;
};
const deserializeAws_restXmlServerSideEncryptionConfiguration = (output, context) => {
    let contents = {
        __type: "ServerSideEncryptionConfiguration",
        Rules: undefined
    };
    if (output.Rule === "") {
        contents.Rules = [];
    }
    if (output["Rule"] !== undefined) {
        const wrappedItem = output["Rule"] instanceof Array ? output["Rule"] : [output["Rule"]];
        contents.Rules = deserializeAws_restXmlServerSideEncryptionRules(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_restXmlServerSideEncryptionRule = (output, context) => {
    let contents = {
        __type: "ServerSideEncryptionRule",
        ApplyServerSideEncryptionByDefault: undefined
    };
    if (output["ApplyServerSideEncryptionByDefault"] !== undefined) {
        contents.ApplyServerSideEncryptionByDefault = deserializeAws_restXmlServerSideEncryptionByDefault(output["ApplyServerSideEncryptionByDefault"], context);
    }
    return contents;
};
const deserializeAws_restXmlServerSideEncryptionRules = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlServerSideEncryptionRule(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlSourceSelectionCriteria = (output, context) => {
    let contents = {
        __type: "SourceSelectionCriteria",
        SseKmsEncryptedObjects: undefined
    };
    if (output["SseKmsEncryptedObjects"] !== undefined) {
        contents.SseKmsEncryptedObjects = deserializeAws_restXmlSseKmsEncryptedObjects(output["SseKmsEncryptedObjects"], context);
    }
    return contents;
};
const deserializeAws_restXmlSseKmsEncryptedObjects = (output, context) => {
    let contents = {
        __type: "SseKmsEncryptedObjects",
        Status: undefined
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_restXmlStorageClassAnalysis = (output, context) => {
    let contents = {
        __type: "StorageClassAnalysis",
        DataExport: undefined
    };
    if (output["DataExport"] !== undefined) {
        contents.DataExport = deserializeAws_restXmlStorageClassAnalysisDataExport(output["DataExport"], context);
    }
    return contents;
};
const deserializeAws_restXmlStorageClassAnalysisDataExport = (output, context) => {
    let contents = {
        __type: "StorageClassAnalysisDataExport",
        Destination: undefined,
        OutputSchemaVersion: undefined
    };
    if (output["Destination"] !== undefined) {
        contents.Destination = deserializeAws_restXmlAnalyticsExportDestination(output["Destination"], context);
    }
    if (output["OutputSchemaVersion"] !== undefined) {
        contents.OutputSchemaVersion = output["OutputSchemaVersion"];
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
const deserializeAws_restXmlTagSet = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlTag(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlTargetGrant = (output, context) => {
    let contents = {
        __type: "TargetGrant",
        Grantee: undefined,
        Permission: undefined
    };
    if (output["Grantee"] !== undefined) {
        contents.Grantee = deserializeAws_restXmlGrantee(output["Grantee"], context);
    }
    if (output["Permission"] !== undefined) {
        contents.Permission = output["Permission"];
    }
    return contents;
};
const deserializeAws_restXmlTargetGrants = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlTargetGrant(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlTopicConfiguration = (output, context) => {
    let contents = {
        __type: "TopicConfiguration",
        Events: undefined,
        Filter: undefined,
        Id: undefined,
        TopicArn: undefined
    };
    if (output.Event === "") {
        contents.Events = [];
    }
    if (output["Event"] !== undefined) {
        const wrappedItem = output["Event"] instanceof Array ? output["Event"] : [output["Event"]];
        contents.Events = deserializeAws_restXmlEventList(wrappedItem, context);
    }
    if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Topic"] !== undefined) {
        contents.TopicArn = output["Topic"];
    }
    return contents;
};
const deserializeAws_restXmlTopicConfigurationList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlTopicConfiguration(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlTransition = (output, context) => {
    let contents = {
        __type: "Transition",
        Date: undefined,
        Days: undefined,
        StorageClass: undefined
    };
    if (output["Date"] !== undefined) {
        contents.Date = new Date(output["Date"]);
    }
    if (output["Days"] !== undefined) {
        contents.Days = parseInt(output["Days"]);
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = output["StorageClass"];
    }
    return contents;
};
const deserializeAws_restXmlTransitionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlTransition(entry, context));
    });
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
    if (data.Code !== undefined) {
        return data.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_restXml.js.map