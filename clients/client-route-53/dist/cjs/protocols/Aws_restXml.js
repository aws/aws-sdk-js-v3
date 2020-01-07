"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const xml_builder_1 = require("@aws-sdk/xml-builder");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_restXmlAssociateVPCWithHostedZoneCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/associatevpc";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("AssociateVPCWithHostedZoneRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.Comment !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("AssociateVPCComment")
            .addChildNode(new xml_builder_1.XmlText(input.Comment))
            .withName("Comment"));
    }
    if (input.VPC !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlVPC(input.VPC, context).withName("VPC"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlAssociateVPCWithHostedZoneCommand = serializeAws_restXmlAssociateVPCWithHostedZoneCommand;
async function serializeAws_restXmlChangeResourceRecordSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/rrset";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("ChangeResourceRecordSetsRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.ChangeBatch !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlChangeBatch(input.ChangeBatch, context).withName("ChangeBatch"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlChangeResourceRecordSetsCommand = serializeAws_restXmlChangeResourceRecordSetsCommand;
async function serializeAws_restXmlChangeTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/tags/{ResourceType}/{ResourceId}";
    if (input.ResourceId !== undefined) {
        const labelValue = input.ResourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceId.");
    }
    if (input.ResourceType !== undefined) {
        const labelValue = input.ResourceType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceType.");
        }
        resolvedPath = resolvedPath.replace("{ResourceType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceType.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("ChangeTagsForResourceRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.AddTags !== undefined) {
        const nodes = serializeAws_restXmlTagList(input.AddTags, context);
        const containerNode = new xml_builder_1.XmlNode("AddTags");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.RemoveTagKeys !== undefined) {
        const nodes = serializeAws_restXmlTagKeyList(input.RemoveTagKeys, context);
        const containerNode = new xml_builder_1.XmlNode("RemoveTagKeys");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlChangeTagsForResourceCommand = serializeAws_restXmlChangeTagsForResourceCommand;
async function serializeAws_restXmlCreateHealthCheckCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/healthcheck";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateHealthCheckRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.CallerReference !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("HealthCheckNonce")
            .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
            .withName("CallerReference"));
    }
    if (input.HealthCheckConfig !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlHealthCheckConfig(input.HealthCheckConfig, context).withName("HealthCheckConfig"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateHealthCheckCommand = serializeAws_restXmlCreateHealthCheckCommand;
async function serializeAws_restXmlCreateHostedZoneCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/hostedzone";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateHostedZoneRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.CallerReference !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Nonce")
            .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
            .withName("CallerReference"));
    }
    if (input.DelegationSetId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourceId")
            .addChildNode(new xml_builder_1.XmlText(input.DelegationSetId))
            .withName("DelegationSetId"));
    }
    if (input.HostedZoneConfig !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlHostedZoneConfig(input.HostedZoneConfig, context).withName("HostedZoneConfig"));
    }
    if (input.Name !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("DNSName")
            .addChildNode(new xml_builder_1.XmlText(input.Name))
            .withName("Name"));
    }
    if (input.VPC !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlVPC(input.VPC, context).withName("VPC"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateHostedZoneCommand = serializeAws_restXmlCreateHostedZoneCommand;
async function serializeAws_restXmlCreateQueryLoggingConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/queryloggingconfig";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateQueryLoggingConfigRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.CloudWatchLogsLogGroupArn !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("CloudWatchLogsLogGroupArn")
            .addChildNode(new xml_builder_1.XmlText(input.CloudWatchLogsLogGroupArn))
            .withName("CloudWatchLogsLogGroupArn"));
    }
    if (input.HostedZoneId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourceId")
            .addChildNode(new xml_builder_1.XmlText(input.HostedZoneId))
            .withName("HostedZoneId"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateQueryLoggingConfigCommand = serializeAws_restXmlCreateQueryLoggingConfigCommand;
async function serializeAws_restXmlCreateReusableDelegationSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/delegationset";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateReusableDelegationSetRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.CallerReference !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Nonce")
            .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
            .withName("CallerReference"));
    }
    if (input.HostedZoneId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourceId")
            .addChildNode(new xml_builder_1.XmlText(input.HostedZoneId))
            .withName("HostedZoneId"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateReusableDelegationSetCommand = serializeAws_restXmlCreateReusableDelegationSetCommand;
async function serializeAws_restXmlCreateTrafficPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/trafficpolicy";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateTrafficPolicyRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.Comment !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TrafficPolicyComment")
            .addChildNode(new xml_builder_1.XmlText(input.Comment))
            .withName("Comment"));
    }
    if (input.Document !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TrafficPolicyDocument")
            .addChildNode(new xml_builder_1.XmlText(input.Document))
            .withName("Document"));
    }
    if (input.Name !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TrafficPolicyName")
            .addChildNode(new xml_builder_1.XmlText(input.Name))
            .withName("Name"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateTrafficPolicyCommand = serializeAws_restXmlCreateTrafficPolicyCommand;
async function serializeAws_restXmlCreateTrafficPolicyInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/trafficpolicyinstance";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateTrafficPolicyInstanceRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.HostedZoneId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourceId")
            .addChildNode(new xml_builder_1.XmlText(input.HostedZoneId))
            .withName("HostedZoneId"));
    }
    if (input.Name !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("DNSName")
            .addChildNode(new xml_builder_1.XmlText(input.Name))
            .withName("Name"));
    }
    if (input.TTL !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TTL")
            .addChildNode(new xml_builder_1.XmlText(String(input.TTL)))
            .withName("TTL"));
    }
    if (input.TrafficPolicyId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TrafficPolicyId")
            .addChildNode(new xml_builder_1.XmlText(input.TrafficPolicyId))
            .withName("TrafficPolicyId"));
    }
    if (input.TrafficPolicyVersion !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TrafficPolicyVersion")
            .addChildNode(new xml_builder_1.XmlText(String(input.TrafficPolicyVersion)))
            .withName("TrafficPolicyVersion"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateTrafficPolicyInstanceCommand = serializeAws_restXmlCreateTrafficPolicyInstanceCommand;
async function serializeAws_restXmlCreateTrafficPolicyVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/trafficpolicy/{Id}";
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
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateTrafficPolicyVersionRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.Comment !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TrafficPolicyComment")
            .addChildNode(new xml_builder_1.XmlText(input.Comment))
            .withName("Comment"));
    }
    if (input.Document !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TrafficPolicyDocument")
            .addChildNode(new xml_builder_1.XmlText(input.Document))
            .withName("Document"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateTrafficPolicyVersionCommand = serializeAws_restXmlCreateTrafficPolicyVersionCommand;
async function serializeAws_restXmlCreateVPCAssociationAuthorizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateVPCAssociationAuthorizationRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.VPC !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlVPC(input.VPC, context).withName("VPC"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlCreateVPCAssociationAuthorizationCommand = serializeAws_restXmlCreateVPCAssociationAuthorizationCommand;
async function serializeAws_restXmlDeleteHealthCheckCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}";
    if (input.HealthCheckId !== undefined) {
        const labelValue = input.HealthCheckId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
        }
        resolvedPath = resolvedPath.replace("{HealthCheckId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HealthCheckId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlDeleteHealthCheckCommand = serializeAws_restXmlDeleteHealthCheckCommand;
async function serializeAws_restXmlDeleteHostedZoneCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/hostedzone/{Id}";
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
exports.serializeAws_restXmlDeleteHostedZoneCommand = serializeAws_restXmlDeleteHostedZoneCommand;
async function serializeAws_restXmlDeleteQueryLoggingConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/queryloggingconfig/{Id}";
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
exports.serializeAws_restXmlDeleteQueryLoggingConfigCommand = serializeAws_restXmlDeleteQueryLoggingConfigCommand;
async function serializeAws_restXmlDeleteReusableDelegationSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/delegationset/{Id}";
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
exports.serializeAws_restXmlDeleteReusableDelegationSetCommand = serializeAws_restXmlDeleteReusableDelegationSetCommand;
async function serializeAws_restXmlDeleteTrafficPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/trafficpolicy/{Id}/{Version}";
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
    if (input.Version !== undefined) {
        const labelValue = input.Version.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Version.");
        }
        resolvedPath = resolvedPath.replace("{Version}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Version.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlDeleteTrafficPolicyCommand = serializeAws_restXmlDeleteTrafficPolicyCommand;
async function serializeAws_restXmlDeleteTrafficPolicyInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/trafficpolicyinstance/{Id}";
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
exports.serializeAws_restXmlDeleteTrafficPolicyInstanceCommand = serializeAws_restXmlDeleteTrafficPolicyInstanceCommand;
async function serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/deauthorizevpcassociation";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("DeleteVPCAssociationAuthorizationRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.VPC !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlVPC(input.VPC, context).withName("VPC"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand = serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand;
async function serializeAws_restXmlDisassociateVPCFromHostedZoneCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/disassociatevpc";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("DisassociateVPCFromHostedZoneRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.Comment !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("DisassociateVPCComment")
            .addChildNode(new xml_builder_1.XmlText(input.Comment))
            .withName("Comment"));
    }
    if (input.VPC !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlVPC(input.VPC, context).withName("VPC"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlDisassociateVPCFromHostedZoneCommand = serializeAws_restXmlDisassociateVPCFromHostedZoneCommand;
async function serializeAws_restXmlGetAccountLimitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/accountlimit/{Type}";
    if (input.Type !== undefined) {
        const labelValue = input.Type;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Type.");
        }
        resolvedPath = resolvedPath.replace("{Type}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Type.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetAccountLimitCommand = serializeAws_restXmlGetAccountLimitCommand;
async function serializeAws_restXmlGetChangeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/change/{Id}";
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
exports.serializeAws_restXmlGetChangeCommand = serializeAws_restXmlGetChangeCommand;
async function serializeAws_restXmlGetCheckerIpRangesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/checkeripranges";
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetCheckerIpRangesCommand = serializeAws_restXmlGetCheckerIpRangesCommand;
async function serializeAws_restXmlGetGeoLocationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/geolocation";
    const query = {};
    if (input.ContinentCode !== undefined) {
        query["continentcode"] = input.ContinentCode;
    }
    if (input.CountryCode !== undefined) {
        query["countrycode"] = input.CountryCode;
    }
    if (input.SubdivisionCode !== undefined) {
        query["subdivisioncode"] = input.SubdivisionCode;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlGetGeoLocationCommand = serializeAws_restXmlGetGeoLocationCommand;
async function serializeAws_restXmlGetHealthCheckCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}";
    if (input.HealthCheckId !== undefined) {
        const labelValue = input.HealthCheckId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
        }
        resolvedPath = resolvedPath.replace("{HealthCheckId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HealthCheckId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetHealthCheckCommand = serializeAws_restXmlGetHealthCheckCommand;
async function serializeAws_restXmlGetHealthCheckCountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/healthcheckcount";
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetHealthCheckCountCommand = serializeAws_restXmlGetHealthCheckCountCommand;
async function serializeAws_restXmlGetHealthCheckLastFailureReasonCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason";
    if (input.HealthCheckId !== undefined) {
        const labelValue = input.HealthCheckId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
        }
        resolvedPath = resolvedPath.replace("{HealthCheckId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HealthCheckId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetHealthCheckLastFailureReasonCommand = serializeAws_restXmlGetHealthCheckLastFailureReasonCommand;
async function serializeAws_restXmlGetHealthCheckStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}/status";
    if (input.HealthCheckId !== undefined) {
        const labelValue = input.HealthCheckId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
        }
        resolvedPath = resolvedPath.replace("{HealthCheckId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HealthCheckId.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetHealthCheckStatusCommand = serializeAws_restXmlGetHealthCheckStatusCommand;
async function serializeAws_restXmlGetHostedZoneCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/hostedzone/{Id}";
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
exports.serializeAws_restXmlGetHostedZoneCommand = serializeAws_restXmlGetHostedZoneCommand;
async function serializeAws_restXmlGetHostedZoneCountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/hostedzonecount";
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetHostedZoneCountCommand = serializeAws_restXmlGetHostedZoneCountCommand;
async function serializeAws_restXmlGetHostedZoneLimitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/hostedzonelimit/{HostedZoneId}/{Type}";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    if (input.Type !== undefined) {
        const labelValue = input.Type;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Type.");
        }
        resolvedPath = resolvedPath.replace("{Type}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Type.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetHostedZoneLimitCommand = serializeAws_restXmlGetHostedZoneLimitCommand;
async function serializeAws_restXmlGetQueryLoggingConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/queryloggingconfig/{Id}";
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
exports.serializeAws_restXmlGetQueryLoggingConfigCommand = serializeAws_restXmlGetQueryLoggingConfigCommand;
async function serializeAws_restXmlGetReusableDelegationSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/delegationset/{Id}";
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
exports.serializeAws_restXmlGetReusableDelegationSetCommand = serializeAws_restXmlGetReusableDelegationSetCommand;
async function serializeAws_restXmlGetReusableDelegationSetLimitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/reusabledelegationsetlimit/{DelegationSetId}/{Type}";
    if (input.DelegationSetId !== undefined) {
        const labelValue = input.DelegationSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DelegationSetId.");
        }
        resolvedPath = resolvedPath.replace("{DelegationSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DelegationSetId.");
    }
    if (input.Type !== undefined) {
        const labelValue = input.Type;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Type.");
        }
        resolvedPath = resolvedPath.replace("{Type}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Type.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetReusableDelegationSetLimitCommand = serializeAws_restXmlGetReusableDelegationSetLimitCommand;
async function serializeAws_restXmlGetTrafficPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/trafficpolicy/{Id}/{Version}";
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
    if (input.Version !== undefined) {
        const labelValue = input.Version.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Version.");
        }
        resolvedPath = resolvedPath.replace("{Version}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Version.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetTrafficPolicyCommand = serializeAws_restXmlGetTrafficPolicyCommand;
async function serializeAws_restXmlGetTrafficPolicyInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/trafficpolicyinstance/{Id}";
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
exports.serializeAws_restXmlGetTrafficPolicyInstanceCommand = serializeAws_restXmlGetTrafficPolicyInstanceCommand;
async function serializeAws_restXmlGetTrafficPolicyInstanceCountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/trafficpolicyinstancecount";
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlGetTrafficPolicyInstanceCountCommand = serializeAws_restXmlGetTrafficPolicyInstanceCountCommand;
async function serializeAws_restXmlListGeoLocationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/geolocations";
    const query = {};
    if (input.MaxItems !== undefined) {
        query["maxitems"] = input.MaxItems;
    }
    if (input.StartContinentCode !== undefined) {
        query["startcontinentcode"] = input.StartContinentCode;
    }
    if (input.StartCountryCode !== undefined) {
        query["startcountrycode"] = input.StartCountryCode;
    }
    if (input.StartSubdivisionCode !== undefined) {
        query["startsubdivisioncode"] = input.StartSubdivisionCode;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListGeoLocationsCommand = serializeAws_restXmlListGeoLocationsCommand;
async function serializeAws_restXmlListHealthChecksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/healthcheck";
    const query = {};
    if (input.Marker !== undefined) {
        query["marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        query["maxitems"] = input.MaxItems;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListHealthChecksCommand = serializeAws_restXmlListHealthChecksCommand;
async function serializeAws_restXmlListHostedZonesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/hostedzone";
    const query = {};
    if (input.DelegationSetId !== undefined) {
        query["delegationsetid"] = input.DelegationSetId;
    }
    if (input.Marker !== undefined) {
        query["marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        query["maxitems"] = input.MaxItems;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListHostedZonesCommand = serializeAws_restXmlListHostedZonesCommand;
async function serializeAws_restXmlListHostedZonesByNameCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/hostedzonesbyname";
    const query = {};
    if (input.DNSName !== undefined) {
        query["dnsname"] = input.DNSName;
    }
    if (input.HostedZoneId !== undefined) {
        query["hostedzoneid"] = input.HostedZoneId;
    }
    if (input.MaxItems !== undefined) {
        query["maxitems"] = input.MaxItems;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListHostedZonesByNameCommand = serializeAws_restXmlListHostedZonesByNameCommand;
async function serializeAws_restXmlListQueryLoggingConfigsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/queryloggingconfig";
    const query = {};
    if (input.HostedZoneId !== undefined) {
        query["hostedzoneid"] = input.HostedZoneId;
    }
    if (input.MaxResults !== undefined) {
        query["maxresults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["nexttoken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListQueryLoggingConfigsCommand = serializeAws_restXmlListQueryLoggingConfigsCommand;
async function serializeAws_restXmlListResourceRecordSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/rrset";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    const query = {};
    if (input.MaxItems !== undefined) {
        query["maxitems"] = input.MaxItems;
    }
    if (input.StartRecordIdentifier !== undefined) {
        query["identifier"] = input.StartRecordIdentifier;
    }
    if (input.StartRecordName !== undefined) {
        query["name"] = input.StartRecordName;
    }
    if (input.StartRecordType !== undefined) {
        query["type"] = input.StartRecordType;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListResourceRecordSetsCommand = serializeAws_restXmlListResourceRecordSetsCommand;
async function serializeAws_restXmlListReusableDelegationSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/delegationset";
    const query = {};
    if (input.Marker !== undefined) {
        query["marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        query["maxitems"] = input.MaxItems;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListReusableDelegationSetsCommand = serializeAws_restXmlListReusableDelegationSetsCommand;
async function serializeAws_restXmlListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/tags/{ResourceType}/{ResourceId}";
    if (input.ResourceId !== undefined) {
        const labelValue = input.ResourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceId.");
    }
    if (input.ResourceType !== undefined) {
        const labelValue = input.ResourceType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceType.");
        }
        resolvedPath = resolvedPath.replace("{ResourceType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceType.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restXmlListTagsForResourceCommand = serializeAws_restXmlListTagsForResourceCommand;
async function serializeAws_restXmlListTagsForResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/tags/{ResourceType}";
    if (input.ResourceType !== undefined) {
        const labelValue = input.ResourceType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceType.");
        }
        resolvedPath = resolvedPath.replace("{ResourceType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceType.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("ListTagsForResourcesRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.ResourceIds !== undefined) {
        const nodes = serializeAws_restXmlTagResourceIdList(input.ResourceIds, context);
        const containerNode = new xml_builder_1.XmlNode("ResourceIds");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlListTagsForResourcesCommand = serializeAws_restXmlListTagsForResourcesCommand;
async function serializeAws_restXmlListTrafficPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/trafficpolicies";
    const query = {};
    if (input.MaxItems !== undefined) {
        query["maxitems"] = input.MaxItems;
    }
    if (input.TrafficPolicyIdMarker !== undefined) {
        query["trafficpolicyid"] = input.TrafficPolicyIdMarker;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListTrafficPoliciesCommand = serializeAws_restXmlListTrafficPoliciesCommand;
async function serializeAws_restXmlListTrafficPolicyInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/trafficpolicyinstances";
    const query = {};
    if (input.HostedZoneIdMarker !== undefined) {
        query["hostedzoneid"] = input.HostedZoneIdMarker;
    }
    if (input.MaxItems !== undefined) {
        query["maxitems"] = input.MaxItems;
    }
    if (input.TrafficPolicyInstanceNameMarker !== undefined) {
        query["trafficpolicyinstancename"] = input.TrafficPolicyInstanceNameMarker;
    }
    if (input.TrafficPolicyInstanceTypeMarker !== undefined) {
        query["trafficpolicyinstancetype"] = input.TrafficPolicyInstanceTypeMarker;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListTrafficPolicyInstancesCommand = serializeAws_restXmlListTrafficPolicyInstancesCommand;
async function serializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/trafficpolicyinstances/hostedzone";
    const query = {};
    if (input.HostedZoneId !== undefined) {
        query["id"] = input.HostedZoneId;
    }
    if (input.MaxItems !== undefined) {
        query["maxitems"] = input.MaxItems;
    }
    if (input.TrafficPolicyInstanceNameMarker !== undefined) {
        query["trafficpolicyinstancename"] = input.TrafficPolicyInstanceNameMarker;
    }
    if (input.TrafficPolicyInstanceTypeMarker !== undefined) {
        query["trafficpolicyinstancetype"] = input.TrafficPolicyInstanceTypeMarker;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand = serializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand;
async function serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/trafficpolicyinstances/trafficpolicy";
    const query = {};
    if (input.HostedZoneIdMarker !== undefined) {
        query["hostedzoneid"] = input.HostedZoneIdMarker;
    }
    if (input.MaxItems !== undefined) {
        query["maxitems"] = input.MaxItems;
    }
    if (input.TrafficPolicyId !== undefined) {
        query["id"] = input.TrafficPolicyId;
    }
    if (input.TrafficPolicyInstanceNameMarker !== undefined) {
        query["trafficpolicyinstancename"] = input.TrafficPolicyInstanceNameMarker;
    }
    if (input.TrafficPolicyInstanceTypeMarker !== undefined) {
        query["trafficpolicyinstancetype"] = input.TrafficPolicyInstanceTypeMarker;
    }
    if (input.TrafficPolicyVersion !== undefined) {
        query["version"] = input.TrafficPolicyVersion.toString();
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand = serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand;
async function serializeAws_restXmlListTrafficPolicyVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/trafficpolicies/{Id}/versions";
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
    const query = {};
    if (input.MaxItems !== undefined) {
        query["maxitems"] = input.MaxItems;
    }
    if (input.TrafficPolicyVersionMarker !== undefined) {
        query["trafficpolicyversion"] = input.TrafficPolicyVersionMarker;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListTrafficPolicyVersionsCommand = serializeAws_restXmlListTrafficPolicyVersionsCommand;
async function serializeAws_restXmlListVPCAssociationAuthorizationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    const query = {};
    if (input.MaxResults !== undefined) {
        query["maxresults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        query["nexttoken"] = input.NextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlListVPCAssociationAuthorizationsCommand = serializeAws_restXmlListVPCAssociationAuthorizationsCommand;
async function serializeAws_restXmlTestDNSAnswerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/2013-04-01/testdnsanswer";
    const query = {};
    if (input.EDNS0ClientSubnetIP !== undefined) {
        query["edns0clientsubnetip"] = input.EDNS0ClientSubnetIP;
    }
    if (input.EDNS0ClientSubnetMask !== undefined) {
        query["edns0clientsubnetmask"] = input.EDNS0ClientSubnetMask;
    }
    if (input.HostedZoneId !== undefined) {
        query["hostedzoneid"] = input.HostedZoneId;
    }
    if (input.RecordName !== undefined) {
        query["recordname"] = input.RecordName;
    }
    if (input.RecordType !== undefined) {
        query["recordtype"] = input.RecordType;
    }
    if (input.ResolverIP !== undefined) {
        query["resolverip"] = input.ResolverIP;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restXmlTestDNSAnswerCommand = serializeAws_restXmlTestDNSAnswerCommand;
async function serializeAws_restXmlUpdateHealthCheckCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}";
    if (input.HealthCheckId !== undefined) {
        const labelValue = input.HealthCheckId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
        }
        resolvedPath = resolvedPath.replace("{HealthCheckId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HealthCheckId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("UpdateHealthCheckRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.AlarmIdentifier !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlAlarmIdentifier(input.AlarmIdentifier, context).withName("AlarmIdentifier"));
    }
    if (input.ChildHealthChecks !== undefined) {
        const nodes = serializeAws_restXmlChildHealthCheckList(input.ChildHealthChecks, context);
        const containerNode = new xml_builder_1.XmlNode("ChildHealthChecks");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Disabled !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Disabled")
            .addChildNode(new xml_builder_1.XmlText(String(input.Disabled)))
            .withName("Disabled"));
    }
    if (input.EnableSNI !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("EnableSNI")
            .addChildNode(new xml_builder_1.XmlText(String(input.EnableSNI)))
            .withName("EnableSNI"));
    }
    if (input.FailureThreshold !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("FailureThreshold")
            .addChildNode(new xml_builder_1.XmlText(String(input.FailureThreshold)))
            .withName("FailureThreshold"));
    }
    if (input.FullyQualifiedDomainName !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("FullyQualifiedDomainName")
            .addChildNode(new xml_builder_1.XmlText(input.FullyQualifiedDomainName))
            .withName("FullyQualifiedDomainName"));
    }
    if (input.HealthCheckVersion !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("HealthCheckVersion")
            .addChildNode(new xml_builder_1.XmlText(String(input.HealthCheckVersion)))
            .withName("HealthCheckVersion"));
    }
    if (input.HealthThreshold !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("HealthThreshold")
            .addChildNode(new xml_builder_1.XmlText(String(input.HealthThreshold)))
            .withName("HealthThreshold"));
    }
    if (input.IPAddress !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("IPAddress")
            .addChildNode(new xml_builder_1.XmlText(input.IPAddress))
            .withName("IPAddress"));
    }
    if (input.InsufficientDataHealthStatus !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("InsufficientDataHealthStatus")
            .addChildNode(new xml_builder_1.XmlText(input.InsufficientDataHealthStatus))
            .withName("InsufficientDataHealthStatus"));
    }
    if (input.Inverted !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Inverted")
            .addChildNode(new xml_builder_1.XmlText(String(input.Inverted)))
            .withName("Inverted"));
    }
    if (input.Port !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Port")
            .addChildNode(new xml_builder_1.XmlText(String(input.Port)))
            .withName("Port"));
    }
    if (input.Regions !== undefined) {
        const nodes = serializeAws_restXmlHealthCheckRegionList(input.Regions, context);
        const containerNode = new xml_builder_1.XmlNode("Regions");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.ResetElements !== undefined) {
        const nodes = serializeAws_restXmlResettableElementNameList(input.ResetElements, context);
        const containerNode = new xml_builder_1.XmlNode("ResetElements");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.ResourcePath !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourcePath")
            .addChildNode(new xml_builder_1.XmlText(input.ResourcePath))
            .withName("ResourcePath"));
    }
    if (input.SearchString !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("SearchString")
            .addChildNode(new xml_builder_1.XmlText(input.SearchString))
            .withName("SearchString"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlUpdateHealthCheckCommand = serializeAws_restXmlUpdateHealthCheckCommand;
async function serializeAws_restXmlUpdateHostedZoneCommentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/hostedzone/{Id}";
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
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("UpdateHostedZoneCommentRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.Comment !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourceDescription")
            .addChildNode(new xml_builder_1.XmlText(input.Comment))
            .withName("Comment"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlUpdateHostedZoneCommentCommand = serializeAws_restXmlUpdateHostedZoneCommentCommand;
async function serializeAws_restXmlUpdateTrafficPolicyCommentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/trafficpolicy/{Id}/{Version}";
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
    if (input.Version !== undefined) {
        const labelValue = input.Version.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Version.");
        }
        resolvedPath = resolvedPath.replace("{Version}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Version.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("UpdateTrafficPolicyCommentRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.Comment !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TrafficPolicyComment")
            .addChildNode(new xml_builder_1.XmlText(input.Comment))
            .withName("Comment"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlUpdateTrafficPolicyCommentCommand = serializeAws_restXmlUpdateTrafficPolicyCommentCommand;
async function serializeAws_restXmlUpdateTrafficPolicyInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/xml";
    let resolvedPath = "/2013-04-01/trafficpolicyinstance/{Id}";
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
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("UpdateTrafficPolicyInstanceRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.TTL !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TTL")
            .addChildNode(new xml_builder_1.XmlText(String(input.TTL)))
            .withName("TTL"));
    }
    if (input.TrafficPolicyId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TrafficPolicyId")
            .addChildNode(new xml_builder_1.XmlText(input.TrafficPolicyId))
            .withName("TrafficPolicyId"));
    }
    if (input.TrafficPolicyVersion !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TrafficPolicyVersion")
            .addChildNode(new xml_builder_1.XmlText(String(input.TrafficPolicyVersion)))
            .withName("TrafficPolicyVersion"));
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restXmlUpdateTrafficPolicyInstanceCommand = serializeAws_restXmlUpdateTrafficPolicyInstanceCommand;
async function deserializeAws_restXmlAssociateVPCWithHostedZoneCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlAssociateVPCWithHostedZoneCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "AssociateVPCWithHostedZoneResponse",
        ChangeInfo: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlAssociateVPCWithHostedZoneCommand = deserializeAws_restXmlAssociateVPCWithHostedZoneCommand;
async function deserializeAws_restXmlAssociateVPCWithHostedZoneCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingDomainExists":
        case "com.amazon.webservices.dns.v20130401#ConflictingDomainExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlConflictingDomainExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCId":
        case "com.amazon.webservices.dns.v20130401#InvalidVPCId":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitsExceeded":
        case "com.amazon.webservices.dns.v20130401#LimitsExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlLimitsExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazon.webservices.dns.v20130401#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PublicZoneVPCAssociation":
        case "com.amazon.webservices.dns.v20130401#PublicZoneVPCAssociation":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPublicZoneVPCAssociationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlChangeResourceRecordSetsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlChangeResourceRecordSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ChangeResourceRecordSetsResponse",
        ChangeInfo: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlChangeResourceRecordSetsCommand = deserializeAws_restXmlChangeResourceRecordSetsCommand;
async function deserializeAws_restXmlChangeResourceRecordSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidChangeBatch":
        case "com.amazon.webservices.dns.v20130401#InvalidChangeBatch":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidChangeBatchResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHealthCheck":
        case "com.amazon.webservices.dns.v20130401#NoSuchHealthCheck":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PriorRequestNotComplete":
        case "com.amazon.webservices.dns.v20130401#PriorRequestNotComplete":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlChangeTagsForResourceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlChangeTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ChangeTagsForResourceResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlChangeTagsForResourceCommand = deserializeAws_restXmlChangeTagsForResourceCommand;
async function deserializeAws_restXmlChangeTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHealthCheck":
        case "com.amazon.webservices.dns.v20130401#NoSuchHealthCheck":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PriorRequestNotComplete":
        case "com.amazon.webservices.dns.v20130401#PriorRequestNotComplete":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.webservices.dns.v20130401#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateHealthCheckCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateHealthCheckCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateHealthCheckResponse",
        HealthCheck: undefined,
        Location: undefined
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["HealthCheck"] !== undefined) {
        contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateHealthCheckCommand = deserializeAws_restXmlCreateHealthCheckCommand;
async function deserializeAws_restXmlCreateHealthCheckCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HealthCheckAlreadyExists":
        case "com.amazon.webservices.dns.v20130401#HealthCheckAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlHealthCheckAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyHealthChecks":
        case "com.amazon.webservices.dns.v20130401#TooManyHealthChecks":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyHealthChecksResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateHostedZoneCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateHostedZoneCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateHostedZoneResponse",
        ChangeInfo: undefined,
        DelegationSet: undefined,
        HostedZone: undefined,
        Location: undefined,
        VPC: undefined
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    if (data["DelegationSet"] !== undefined) {
        contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
    }
    if (data["HostedZone"] !== undefined) {
        contents.HostedZone = deserializeAws_restXmlHostedZone(data["HostedZone"], context);
    }
    if (data["VPC"] !== undefined) {
        contents.VPC = deserializeAws_restXmlVPC(data["VPC"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateHostedZoneCommand = deserializeAws_restXmlCreateHostedZoneCommand;
async function deserializeAws_restXmlCreateHostedZoneCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingDomainExists":
        case "com.amazon.webservices.dns.v20130401#ConflictingDomainExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlConflictingDomainExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DelegationSetNotAvailable":
        case "com.amazon.webservices.dns.v20130401#DelegationSetNotAvailable":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlDelegationSetNotAvailableResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DelegationSetNotReusable":
        case "com.amazon.webservices.dns.v20130401#DelegationSetNotReusable":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HostedZoneAlreadyExists":
        case "com.amazon.webservices.dns.v20130401#HostedZoneAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlHostedZoneAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDomainName":
        case "com.amazon.webservices.dns.v20130401#InvalidDomainName":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCId":
        case "com.amazon.webservices.dns.v20130401#InvalidVPCId":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchDelegationSet":
        case "com.amazon.webservices.dns.v20130401#NoSuchDelegationSet":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyHostedZones":
        case "com.amazon.webservices.dns.v20130401#TooManyHostedZones":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyHostedZonesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateQueryLoggingConfigCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateQueryLoggingConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateQueryLoggingConfigResponse",
        Location: undefined,
        QueryLoggingConfig: undefined
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["QueryLoggingConfig"] !== undefined) {
        contents.QueryLoggingConfig = deserializeAws_restXmlQueryLoggingConfig(data["QueryLoggingConfig"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateQueryLoggingConfigCommand = deserializeAws_restXmlCreateQueryLoggingConfigCommand;
async function deserializeAws_restXmlCreateQueryLoggingConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazon.webservices.dns.v20130401#ConcurrentModification":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientCloudWatchLogsResourcePolicy":
        case "com.amazon.webservices.dns.v20130401#InsufficientCloudWatchLogsResourcePolicy":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInsufficientCloudWatchLogsResourcePolicyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchCloudWatchLogsLogGroup":
        case "com.amazon.webservices.dns.v20130401#NoSuchCloudWatchLogsLogGroup":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchCloudWatchLogsLogGroupResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "QueryLoggingConfigAlreadyExists":
        case "com.amazon.webservices.dns.v20130401#QueryLoggingConfigAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlQueryLoggingConfigAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateReusableDelegationSetCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateReusableDelegationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateReusableDelegationSetResponse",
        DelegationSet: undefined,
        Location: undefined
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["DelegationSet"] !== undefined) {
        contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateReusableDelegationSetCommand = deserializeAws_restXmlCreateReusableDelegationSetCommand;
async function deserializeAws_restXmlCreateReusableDelegationSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DelegationSetAlreadyCreated":
        case "com.amazon.webservices.dns.v20130401#DelegationSetAlreadyCreated":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlDelegationSetAlreadyCreatedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DelegationSetAlreadyReusable":
        case "com.amazon.webservices.dns.v20130401#DelegationSetAlreadyReusable":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlDelegationSetAlreadyReusableResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DelegationSetNotAvailable":
        case "com.amazon.webservices.dns.v20130401#DelegationSetNotAvailable":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlDelegationSetNotAvailableResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HostedZoneNotFound":
        case "com.amazon.webservices.dns.v20130401#HostedZoneNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlHostedZoneNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgument":
        case "com.amazon.webservices.dns.v20130401#InvalidArgument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitsExceeded":
        case "com.amazon.webservices.dns.v20130401#LimitsExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlLimitsExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateTrafficPolicyCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateTrafficPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateTrafficPolicyResponse",
        Location: undefined,
        TrafficPolicy: undefined
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicy"] !== undefined) {
        contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateTrafficPolicyCommand = deserializeAws_restXmlCreateTrafficPolicyCommand;
async function deserializeAws_restXmlCreateTrafficPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrafficPolicyDocument":
        case "com.amazon.webservices.dns.v20130401#InvalidTrafficPolicyDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTrafficPolicies":
        case "com.amazon.webservices.dns.v20130401#TooManyTrafficPolicies":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyTrafficPoliciesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrafficPolicyAlreadyExists":
        case "com.amazon.webservices.dns.v20130401#TrafficPolicyAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTrafficPolicyAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateTrafficPolicyInstanceCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateTrafficPolicyInstanceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateTrafficPolicyInstanceResponse",
        Location: undefined,
        TrafficPolicyInstance: undefined
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicyInstance"] !== undefined) {
        contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(data["TrafficPolicyInstance"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateTrafficPolicyInstanceCommand = deserializeAws_restXmlCreateTrafficPolicyInstanceCommand;
async function deserializeAws_restXmlCreateTrafficPolicyInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazon.webservices.dns.v20130401#NoSuchTrafficPolicy":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTrafficPolicyInstances":
        case "com.amazon.webservices.dns.v20130401#TooManyTrafficPolicyInstances":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyTrafficPolicyInstancesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrafficPolicyInstanceAlreadyExists":
        case "com.amazon.webservices.dns.v20130401#TrafficPolicyInstanceAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTrafficPolicyInstanceAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateTrafficPolicyVersionCommand(output, context) {
    if (output.statusCode !== 201 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateTrafficPolicyVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateTrafficPolicyVersionResponse",
        Location: undefined,
        TrafficPolicy: undefined
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicy"] !== undefined) {
        contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateTrafficPolicyVersionCommand = deserializeAws_restXmlCreateTrafficPolicyVersionCommand;
async function deserializeAws_restXmlCreateTrafficPolicyVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazon.webservices.dns.v20130401#ConcurrentModification":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrafficPolicyDocument":
        case "com.amazon.webservices.dns.v20130401#InvalidTrafficPolicyDocument":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazon.webservices.dns.v20130401#NoSuchTrafficPolicy":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTrafficPolicyVersionsForCurrentPolicy":
        case "com.amazon.webservices.dns.v20130401#TooManyTrafficPolicyVersionsForCurrentPolicy":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyTrafficPolicyVersionsForCurrentPolicyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlCreateVPCAssociationAuthorizationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateVPCAssociationAuthorizationResponse",
        HostedZoneId: undefined,
        VPC: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = data["HostedZoneId"];
    }
    if (data["VPC"] !== undefined) {
        contents.VPC = deserializeAws_restXmlVPC(data["VPC"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand = deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand;
async function deserializeAws_restXmlCreateVPCAssociationAuthorizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazon.webservices.dns.v20130401#ConcurrentModification":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCId":
        case "com.amazon.webservices.dns.v20130401#InvalidVPCId":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyVPCAssociationAuthorizations":
        case "com.amazon.webservices.dns.v20130401#TooManyVPCAssociationAuthorizations":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTooManyVPCAssociationAuthorizationsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlDeleteHealthCheckCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteHealthCheckCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteHealthCheckResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteHealthCheckCommand = deserializeAws_restXmlDeleteHealthCheckCommand;
async function deserializeAws_restXmlDeleteHealthCheckCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HealthCheckInUse":
        case "com.amazon.webservices.dns.v20130401#HealthCheckInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlHealthCheckInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHealthCheck":
        case "com.amazon.webservices.dns.v20130401#NoSuchHealthCheck":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlDeleteHostedZoneCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteHostedZoneCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteHostedZoneResponse",
        ChangeInfo: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteHostedZoneCommand = deserializeAws_restXmlDeleteHostedZoneCommand;
async function deserializeAws_restXmlDeleteHostedZoneCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HostedZoneNotEmpty":
        case "com.amazon.webservices.dns.v20130401#HostedZoneNotEmpty":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlHostedZoneNotEmptyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDomainName":
        case "com.amazon.webservices.dns.v20130401#InvalidDomainName":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PriorRequestNotComplete":
        case "com.amazon.webservices.dns.v20130401#PriorRequestNotComplete":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlDeleteQueryLoggingConfigCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteQueryLoggingConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteQueryLoggingConfigResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteQueryLoggingConfigCommand = deserializeAws_restXmlDeleteQueryLoggingConfigCommand;
async function deserializeAws_restXmlDeleteQueryLoggingConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazon.webservices.dns.v20130401#ConcurrentModification":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchQueryLoggingConfig":
        case "com.amazon.webservices.dns.v20130401#NoSuchQueryLoggingConfig":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchQueryLoggingConfigResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlDeleteReusableDelegationSetCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteReusableDelegationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteReusableDelegationSetResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteReusableDelegationSetCommand = deserializeAws_restXmlDeleteReusableDelegationSetCommand;
async function deserializeAws_restXmlDeleteReusableDelegationSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DelegationSetInUse":
        case "com.amazon.webservices.dns.v20130401#DelegationSetInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlDelegationSetInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DelegationSetNotReusable":
        case "com.amazon.webservices.dns.v20130401#DelegationSetNotReusable":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchDelegationSet":
        case "com.amazon.webservices.dns.v20130401#NoSuchDelegationSet":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlDeleteTrafficPolicyCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteTrafficPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteTrafficPolicyResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteTrafficPolicyCommand = deserializeAws_restXmlDeleteTrafficPolicyCommand;
async function deserializeAws_restXmlDeleteTrafficPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazon.webservices.dns.v20130401#ConcurrentModification":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazon.webservices.dns.v20130401#NoSuchTrafficPolicy":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrafficPolicyInUse":
        case "com.amazon.webservices.dns.v20130401#TrafficPolicyInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlTrafficPolicyInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteTrafficPolicyInstanceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteTrafficPolicyInstanceResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand = deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand;
async function deserializeAws_restXmlDeleteTrafficPolicyInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchTrafficPolicyInstance":
        case "com.amazon.webservices.dns.v20130401#NoSuchTrafficPolicyInstance":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PriorRequestNotComplete":
        case "com.amazon.webservices.dns.v20130401#PriorRequestNotComplete":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteVPCAssociationAuthorizationResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand = deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand;
async function deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazon.webservices.dns.v20130401#ConcurrentModification":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCId":
        case "com.amazon.webservices.dns.v20130401#InvalidVPCId":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "VPCAssociationAuthorizationNotFound":
        case "com.amazon.webservices.dns.v20130401#VPCAssociationAuthorizationNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlVPCAssociationAuthorizationNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlDisassociateVPCFromHostedZoneCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DisassociateVPCFromHostedZoneResponse",
        ChangeInfo: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand = deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand;
async function deserializeAws_restXmlDisassociateVPCFromHostedZoneCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidVPCId":
        case "com.amazon.webservices.dns.v20130401#InvalidVPCId":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LastVPCAssociation":
        case "com.amazon.webservices.dns.v20130401#LastVPCAssociation":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlLastVPCAssociationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "VPCAssociationNotFound":
        case "com.amazon.webservices.dns.v20130401#VPCAssociationNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlVPCAssociationNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetAccountLimitCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetAccountLimitCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetAccountLimitResponse",
        Count: undefined,
        Limit: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["Count"] !== undefined) {
        contents.Count = parseInt(data["Count"]);
    }
    if (data["Limit"] !== undefined) {
        contents.Limit = deserializeAws_restXmlAccountLimit(data["Limit"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetAccountLimitCommand = deserializeAws_restXmlGetAccountLimitCommand;
async function deserializeAws_restXmlGetAccountLimitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetChangeCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetChangeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetChangeResponse",
        ChangeInfo: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetChangeCommand = deserializeAws_restXmlGetChangeCommand;
async function deserializeAws_restXmlGetChangeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchChange":
        case "com.amazon.webservices.dns.v20130401#NoSuchChange":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchChangeResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetCheckerIpRangesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetCheckerIpRangesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetCheckerIpRangesResponse",
        CheckerIpRanges: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.CheckerIpRanges === "") {
        contents.CheckerIpRanges = [];
    }
    if (data["CheckerIpRanges"] !== undefined &&
        data["CheckerIpRanges"]["member"] !== undefined) {
        const wrappedItem = data["CheckerIpRanges"]["member"] instanceof Array
            ? data["CheckerIpRanges"]["member"]
            : [data["CheckerIpRanges"]["member"]];
        contents.CheckerIpRanges = deserializeAws_restXmlCheckerIpRanges(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetCheckerIpRangesCommand = deserializeAws_restXmlGetCheckerIpRangesCommand;
async function deserializeAws_restXmlGetCheckerIpRangesCommandError(output, context) {
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
async function deserializeAws_restXmlGetGeoLocationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetGeoLocationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetGeoLocationResponse",
        GeoLocationDetails: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["GeoLocationDetails"] !== undefined) {
        contents.GeoLocationDetails = deserializeAws_restXmlGeoLocationDetails(data["GeoLocationDetails"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetGeoLocationCommand = deserializeAws_restXmlGetGeoLocationCommand;
async function deserializeAws_restXmlGetGeoLocationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchGeoLocation":
        case "com.amazon.webservices.dns.v20130401#NoSuchGeoLocation":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchGeoLocationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetHealthCheckCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetHealthCheckCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetHealthCheckResponse",
        HealthCheck: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["HealthCheck"] !== undefined) {
        contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetHealthCheckCommand = deserializeAws_restXmlGetHealthCheckCommand;
async function deserializeAws_restXmlGetHealthCheckCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IncompatibleVersion":
        case "com.amazon.webservices.dns.v20130401#IncompatibleVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlIncompatibleVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHealthCheck":
        case "com.amazon.webservices.dns.v20130401#NoSuchHealthCheck":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetHealthCheckCountCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetHealthCheckCountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetHealthCheckCountResponse",
        HealthCheckCount: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["HealthCheckCount"] !== undefined) {
        contents.HealthCheckCount = parseInt(data["HealthCheckCount"]);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetHealthCheckCountCommand = deserializeAws_restXmlGetHealthCheckCountCommand;
async function deserializeAws_restXmlGetHealthCheckCountCommandError(output, context) {
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
async function deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetHealthCheckLastFailureReasonCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetHealthCheckLastFailureReasonResponse",
        HealthCheckObservations: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.HealthCheckObservations === "") {
        contents.HealthCheckObservations = [];
    }
    if (data["HealthCheckObservations"] !== undefined &&
        data["HealthCheckObservations"]["HealthCheckObservation"] !== undefined) {
        const wrappedItem = data["HealthCheckObservations"]["HealthCheckObservation"] instanceof Array
            ? data["HealthCheckObservations"]["HealthCheckObservation"]
            : [data["HealthCheckObservations"]["HealthCheckObservation"]];
        contents.HealthCheckObservations = deserializeAws_restXmlHealthCheckObservations(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand = deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand;
async function deserializeAws_restXmlGetHealthCheckLastFailureReasonCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHealthCheck":
        case "com.amazon.webservices.dns.v20130401#NoSuchHealthCheck":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetHealthCheckStatusCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetHealthCheckStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetHealthCheckStatusResponse",
        HealthCheckObservations: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.HealthCheckObservations === "") {
        contents.HealthCheckObservations = [];
    }
    if (data["HealthCheckObservations"] !== undefined &&
        data["HealthCheckObservations"]["HealthCheckObservation"] !== undefined) {
        const wrappedItem = data["HealthCheckObservations"]["HealthCheckObservation"] instanceof Array
            ? data["HealthCheckObservations"]["HealthCheckObservation"]
            : [data["HealthCheckObservations"]["HealthCheckObservation"]];
        contents.HealthCheckObservations = deserializeAws_restXmlHealthCheckObservations(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetHealthCheckStatusCommand = deserializeAws_restXmlGetHealthCheckStatusCommand;
async function deserializeAws_restXmlGetHealthCheckStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHealthCheck":
        case "com.amazon.webservices.dns.v20130401#NoSuchHealthCheck":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetHostedZoneCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetHostedZoneCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetHostedZoneResponse",
        DelegationSet: undefined,
        HostedZone: undefined,
        VPCs: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["DelegationSet"] !== undefined) {
        contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
    }
    if (data["HostedZone"] !== undefined) {
        contents.HostedZone = deserializeAws_restXmlHostedZone(data["HostedZone"], context);
    }
    if (data.VPCs === "") {
        contents.VPCs = [];
    }
    if (data["VPCs"] !== undefined && data["VPCs"]["VPC"] !== undefined) {
        const wrappedItem = data["VPCs"]["VPC"] instanceof Array
            ? data["VPCs"]["VPC"]
            : [data["VPCs"]["VPC"]];
        contents.VPCs = deserializeAws_restXmlVPCs(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetHostedZoneCommand = deserializeAws_restXmlGetHostedZoneCommand;
async function deserializeAws_restXmlGetHostedZoneCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetHostedZoneCountCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetHostedZoneCountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetHostedZoneCountResponse",
        HostedZoneCount: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["HostedZoneCount"] !== undefined) {
        contents.HostedZoneCount = parseInt(data["HostedZoneCount"]);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetHostedZoneCountCommand = deserializeAws_restXmlGetHostedZoneCountCommand;
async function deserializeAws_restXmlGetHostedZoneCountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetHostedZoneLimitCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetHostedZoneLimitCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetHostedZoneLimitResponse",
        Count: undefined,
        Limit: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["Count"] !== undefined) {
        contents.Count = parseInt(data["Count"]);
    }
    if (data["Limit"] !== undefined) {
        contents.Limit = deserializeAws_restXmlHostedZoneLimit(data["Limit"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetHostedZoneLimitCommand = deserializeAws_restXmlGetHostedZoneLimitCommand;
async function deserializeAws_restXmlGetHostedZoneLimitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HostedZoneNotPrivate":
        case "com.amazon.webservices.dns.v20130401#HostedZoneNotPrivate":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlHostedZoneNotPrivateResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetQueryLoggingConfigCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetQueryLoggingConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetQueryLoggingConfigResponse",
        QueryLoggingConfig: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["QueryLoggingConfig"] !== undefined) {
        contents.QueryLoggingConfig = deserializeAws_restXmlQueryLoggingConfig(data["QueryLoggingConfig"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetQueryLoggingConfigCommand = deserializeAws_restXmlGetQueryLoggingConfigCommand;
async function deserializeAws_restXmlGetQueryLoggingConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchQueryLoggingConfig":
        case "com.amazon.webservices.dns.v20130401#NoSuchQueryLoggingConfig":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchQueryLoggingConfigResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetReusableDelegationSetCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetReusableDelegationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetReusableDelegationSetResponse",
        DelegationSet: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["DelegationSet"] !== undefined) {
        contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetReusableDelegationSetCommand = deserializeAws_restXmlGetReusableDelegationSetCommand;
async function deserializeAws_restXmlGetReusableDelegationSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DelegationSetNotReusable":
        case "com.amazon.webservices.dns.v20130401#DelegationSetNotReusable":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchDelegationSet":
        case "com.amazon.webservices.dns.v20130401#NoSuchDelegationSet":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetReusableDelegationSetLimitCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetReusableDelegationSetLimitCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetReusableDelegationSetLimitResponse",
        Count: undefined,
        Limit: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["Count"] !== undefined) {
        contents.Count = parseInt(data["Count"]);
    }
    if (data["Limit"] !== undefined) {
        contents.Limit = deserializeAws_restXmlReusableDelegationSetLimit(data["Limit"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetReusableDelegationSetLimitCommand = deserializeAws_restXmlGetReusableDelegationSetLimitCommand;
async function deserializeAws_restXmlGetReusableDelegationSetLimitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchDelegationSet":
        case "com.amazon.webservices.dns.v20130401#NoSuchDelegationSet":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetTrafficPolicyCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetTrafficPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetTrafficPolicyResponse",
        TrafficPolicy: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicy"] !== undefined) {
        contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetTrafficPolicyCommand = deserializeAws_restXmlGetTrafficPolicyCommand;
async function deserializeAws_restXmlGetTrafficPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazon.webservices.dns.v20130401#NoSuchTrafficPolicy":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetTrafficPolicyInstanceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetTrafficPolicyInstanceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetTrafficPolicyInstanceResponse",
        TrafficPolicyInstance: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicyInstance"] !== undefined) {
        contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(data["TrafficPolicyInstance"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetTrafficPolicyInstanceCommand = deserializeAws_restXmlGetTrafficPolicyInstanceCommand;
async function deserializeAws_restXmlGetTrafficPolicyInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchTrafficPolicyInstance":
        case "com.amazon.webservices.dns.v20130401#NoSuchTrafficPolicyInstance":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlGetTrafficPolicyInstanceCountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetTrafficPolicyInstanceCountResponse",
        TrafficPolicyInstanceCount: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicyInstanceCount"] !== undefined) {
        contents.TrafficPolicyInstanceCount = parseInt(data["TrafficPolicyInstanceCount"]);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand = deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand;
async function deserializeAws_restXmlGetTrafficPolicyInstanceCountCommandError(output, context) {
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
async function deserializeAws_restXmlListGeoLocationsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListGeoLocationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListGeoLocationsResponse",
        GeoLocationDetailsList: undefined,
        IsTruncated: undefined,
        MaxItems: undefined,
        NextContinentCode: undefined,
        NextCountryCode: undefined,
        NextSubdivisionCode: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.GeoLocationDetailsList === "") {
        contents.GeoLocationDetailsList = [];
    }
    if (data["GeoLocationDetailsList"] !== undefined &&
        data["GeoLocationDetailsList"]["GeoLocationDetails"] !== undefined) {
        const wrappedItem = data["GeoLocationDetailsList"]["GeoLocationDetails"] instanceof Array
            ? data["GeoLocationDetailsList"]["GeoLocationDetails"]
            : [data["GeoLocationDetailsList"]["GeoLocationDetails"]];
        contents.GeoLocationDetailsList = deserializeAws_restXmlGeoLocationDetailsList(wrappedItem, context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = data["MaxItems"];
    }
    if (data["NextContinentCode"] !== undefined) {
        contents.NextContinentCode = data["NextContinentCode"];
    }
    if (data["NextCountryCode"] !== undefined) {
        contents.NextCountryCode = data["NextCountryCode"];
    }
    if (data["NextSubdivisionCode"] !== undefined) {
        contents.NextSubdivisionCode = data["NextSubdivisionCode"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListGeoLocationsCommand = deserializeAws_restXmlListGeoLocationsCommand;
async function deserializeAws_restXmlListGeoLocationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListHealthChecksCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListHealthChecksCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListHealthChecksResponse",
        HealthChecks: undefined,
        IsTruncated: undefined,
        Marker: undefined,
        MaxItems: undefined,
        NextMarker: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.HealthChecks === "") {
        contents.HealthChecks = [];
    }
    if (data["HealthChecks"] !== undefined &&
        data["HealthChecks"]["HealthCheck"] !== undefined) {
        const wrappedItem = data["HealthChecks"]["HealthCheck"] instanceof Array
            ? data["HealthChecks"]["HealthCheck"]
            : [data["HealthChecks"]["HealthCheck"]];
        contents.HealthChecks = deserializeAws_restXmlHealthChecks(wrappedItem, context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["Marker"] !== undefined) {
        contents.Marker = data["Marker"];
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = data["MaxItems"];
    }
    if (data["NextMarker"] !== undefined) {
        contents.NextMarker = data["NextMarker"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListHealthChecksCommand = deserializeAws_restXmlListHealthChecksCommand;
async function deserializeAws_restXmlListHealthChecksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IncompatibleVersion":
        case "com.amazon.webservices.dns.v20130401#IncompatibleVersion":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlIncompatibleVersionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListHostedZonesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListHostedZonesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListHostedZonesResponse",
        HostedZones: undefined,
        IsTruncated: undefined,
        Marker: undefined,
        MaxItems: undefined,
        NextMarker: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.HostedZones === "") {
        contents.HostedZones = [];
    }
    if (data["HostedZones"] !== undefined &&
        data["HostedZones"]["HostedZone"] !== undefined) {
        const wrappedItem = data["HostedZones"]["HostedZone"] instanceof Array
            ? data["HostedZones"]["HostedZone"]
            : [data["HostedZones"]["HostedZone"]];
        contents.HostedZones = deserializeAws_restXmlHostedZones(wrappedItem, context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["Marker"] !== undefined) {
        contents.Marker = data["Marker"];
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = data["MaxItems"];
    }
    if (data["NextMarker"] !== undefined) {
        contents.NextMarker = data["NextMarker"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListHostedZonesCommand = deserializeAws_restXmlListHostedZonesCommand;
async function deserializeAws_restXmlListHostedZonesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DelegationSetNotReusable":
        case "com.amazon.webservices.dns.v20130401#DelegationSetNotReusable":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchDelegationSet":
        case "com.amazon.webservices.dns.v20130401#NoSuchDelegationSet":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListHostedZonesByNameCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListHostedZonesByNameCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListHostedZonesByNameResponse",
        DNSName: undefined,
        HostedZoneId: undefined,
        HostedZones: undefined,
        IsTruncated: undefined,
        MaxItems: undefined,
        NextDNSName: undefined,
        NextHostedZoneId: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["DNSName"] !== undefined) {
        contents.DNSName = data["DNSName"];
    }
    if (data["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = data["HostedZoneId"];
    }
    if (data.HostedZones === "") {
        contents.HostedZones = [];
    }
    if (data["HostedZones"] !== undefined &&
        data["HostedZones"]["HostedZone"] !== undefined) {
        const wrappedItem = data["HostedZones"]["HostedZone"] instanceof Array
            ? data["HostedZones"]["HostedZone"]
            : [data["HostedZones"]["HostedZone"]];
        contents.HostedZones = deserializeAws_restXmlHostedZones(wrappedItem, context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = data["MaxItems"];
    }
    if (data["NextDNSName"] !== undefined) {
        contents.NextDNSName = data["NextDNSName"];
    }
    if (data["NextHostedZoneId"] !== undefined) {
        contents.NextHostedZoneId = data["NextHostedZoneId"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListHostedZonesByNameCommand = deserializeAws_restXmlListHostedZonesByNameCommand;
async function deserializeAws_restXmlListHostedZonesByNameCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidDomainName":
        case "com.amazon.webservices.dns.v20130401#InvalidDomainName":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListQueryLoggingConfigsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListQueryLoggingConfigsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListQueryLoggingConfigsResponse",
        NextToken: undefined,
        QueryLoggingConfigs: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["NextToken"] !== undefined) {
        contents.NextToken = data["NextToken"];
    }
    if (data.QueryLoggingConfigs === "") {
        contents.QueryLoggingConfigs = [];
    }
    if (data["QueryLoggingConfigs"] !== undefined &&
        data["QueryLoggingConfigs"]["QueryLoggingConfig"] !== undefined) {
        const wrappedItem = data["QueryLoggingConfigs"]["QueryLoggingConfig"] instanceof Array
            ? data["QueryLoggingConfigs"]["QueryLoggingConfig"]
            : [data["QueryLoggingConfigs"]["QueryLoggingConfig"]];
        contents.QueryLoggingConfigs = deserializeAws_restXmlQueryLoggingConfigs(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListQueryLoggingConfigsCommand = deserializeAws_restXmlListQueryLoggingConfigsCommand;
async function deserializeAws_restXmlListQueryLoggingConfigsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationToken":
        case "com.amazon.webservices.dns.v20130401#InvalidPaginationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidPaginationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListResourceRecordSetsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListResourceRecordSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListResourceRecordSetsResponse",
        IsTruncated: undefined,
        MaxItems: undefined,
        NextRecordIdentifier: undefined,
        NextRecordName: undefined,
        NextRecordType: undefined,
        ResourceRecordSets: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = data["MaxItems"];
    }
    if (data["NextRecordIdentifier"] !== undefined) {
        contents.NextRecordIdentifier = data["NextRecordIdentifier"];
    }
    if (data["NextRecordName"] !== undefined) {
        contents.NextRecordName = data["NextRecordName"];
    }
    if (data["NextRecordType"] !== undefined) {
        contents.NextRecordType = data["NextRecordType"];
    }
    if (data.ResourceRecordSets === "") {
        contents.ResourceRecordSets = [];
    }
    if (data["ResourceRecordSets"] !== undefined &&
        data["ResourceRecordSets"]["ResourceRecordSet"] !== undefined) {
        const wrappedItem = data["ResourceRecordSets"]["ResourceRecordSet"] instanceof Array
            ? data["ResourceRecordSets"]["ResourceRecordSet"]
            : [data["ResourceRecordSets"]["ResourceRecordSet"]];
        contents.ResourceRecordSets = deserializeAws_restXmlResourceRecordSets(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListResourceRecordSetsCommand = deserializeAws_restXmlListResourceRecordSetsCommand;
async function deserializeAws_restXmlListResourceRecordSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListReusableDelegationSetsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListReusableDelegationSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListReusableDelegationSetsResponse",
        DelegationSets: undefined,
        IsTruncated: undefined,
        Marker: undefined,
        MaxItems: undefined,
        NextMarker: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.DelegationSets === "") {
        contents.DelegationSets = [];
    }
    if (data["DelegationSets"] !== undefined &&
        data["DelegationSets"]["DelegationSet"] !== undefined) {
        const wrappedItem = data["DelegationSets"]["DelegationSet"] instanceof Array
            ? data["DelegationSets"]["DelegationSet"]
            : [data["DelegationSets"]["DelegationSet"]];
        contents.DelegationSets = deserializeAws_restXmlDelegationSets(wrappedItem, context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["Marker"] !== undefined) {
        contents.Marker = data["Marker"];
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = data["MaxItems"];
    }
    if (data["NextMarker"] !== undefined) {
        contents.NextMarker = data["NextMarker"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListReusableDelegationSetsCommand = deserializeAws_restXmlListReusableDelegationSetsCommand;
async function deserializeAws_restXmlListReusableDelegationSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        __type: "ListTagsForResourceResponse",
        ResourceTagSet: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["ResourceTagSet"] !== undefined) {
        contents.ResourceTagSet = deserializeAws_restXmlResourceTagSet(data["ResourceTagSet"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListTagsForResourceCommand = deserializeAws_restXmlListTagsForResourceCommand;
async function deserializeAws_restXmlListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHealthCheck":
        case "com.amazon.webservices.dns.v20130401#NoSuchHealthCheck":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PriorRequestNotComplete":
        case "com.amazon.webservices.dns.v20130401#PriorRequestNotComplete":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.webservices.dns.v20130401#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListTagsForResourcesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListTagsForResourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListTagsForResourcesResponse",
        ResourceTagSets: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.ResourceTagSets === "") {
        contents.ResourceTagSets = [];
    }
    if (data["ResourceTagSets"] !== undefined &&
        data["ResourceTagSets"]["ResourceTagSet"] !== undefined) {
        const wrappedItem = data["ResourceTagSets"]["ResourceTagSet"] instanceof Array
            ? data["ResourceTagSets"]["ResourceTagSet"]
            : [data["ResourceTagSets"]["ResourceTagSet"]];
        contents.ResourceTagSets = deserializeAws_restXmlResourceTagSetList(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListTagsForResourcesCommand = deserializeAws_restXmlListTagsForResourcesCommand;
async function deserializeAws_restXmlListTagsForResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHealthCheck":
        case "com.amazon.webservices.dns.v20130401#NoSuchHealthCheck":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PriorRequestNotComplete":
        case "com.amazon.webservices.dns.v20130401#PriorRequestNotComplete":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.webservices.dns.v20130401#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListTrafficPoliciesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListTrafficPoliciesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListTrafficPoliciesResponse",
        IsTruncated: undefined,
        MaxItems: undefined,
        TrafficPolicyIdMarker: undefined,
        TrafficPolicySummaries: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = data["MaxItems"];
    }
    if (data["TrafficPolicyIdMarker"] !== undefined) {
        contents.TrafficPolicyIdMarker = data["TrafficPolicyIdMarker"];
    }
    if (data.TrafficPolicySummaries === "") {
        contents.TrafficPolicySummaries = [];
    }
    if (data["TrafficPolicySummaries"] !== undefined &&
        data["TrafficPolicySummaries"]["TrafficPolicySummary"] !== undefined) {
        const wrappedItem = data["TrafficPolicySummaries"]["TrafficPolicySummary"] instanceof Array
            ? data["TrafficPolicySummaries"]["TrafficPolicySummary"]
            : [data["TrafficPolicySummaries"]["TrafficPolicySummary"]];
        contents.TrafficPolicySummaries = deserializeAws_restXmlTrafficPolicySummaries(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListTrafficPoliciesCommand = deserializeAws_restXmlListTrafficPoliciesCommand;
async function deserializeAws_restXmlListTrafficPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListTrafficPolicyInstancesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListTrafficPolicyInstancesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListTrafficPolicyInstancesResponse",
        HostedZoneIdMarker: undefined,
        IsTruncated: undefined,
        MaxItems: undefined,
        TrafficPolicyInstanceNameMarker: undefined,
        TrafficPolicyInstanceTypeMarker: undefined,
        TrafficPolicyInstances: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["HostedZoneIdMarker"] !== undefined) {
        contents.HostedZoneIdMarker = data["HostedZoneIdMarker"];
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = data["MaxItems"];
    }
    if (data["TrafficPolicyInstanceNameMarker"] !== undefined) {
        contents.TrafficPolicyInstanceNameMarker =
            data["TrafficPolicyInstanceNameMarker"];
    }
    if (data["TrafficPolicyInstanceTypeMarker"] !== undefined) {
        contents.TrafficPolicyInstanceTypeMarker =
            data["TrafficPolicyInstanceTypeMarker"];
    }
    if (data.TrafficPolicyInstances === "") {
        contents.TrafficPolicyInstances = [];
    }
    if (data["TrafficPolicyInstances"] !== undefined &&
        data["TrafficPolicyInstances"]["TrafficPolicyInstance"] !== undefined) {
        const wrappedItem = data["TrafficPolicyInstances"]["TrafficPolicyInstance"] instanceof Array
            ? data["TrafficPolicyInstances"]["TrafficPolicyInstance"]
            : [data["TrafficPolicyInstances"]["TrafficPolicyInstance"]];
        contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListTrafficPolicyInstancesCommand = deserializeAws_restXmlListTrafficPolicyInstancesCommand;
async function deserializeAws_restXmlListTrafficPolicyInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchTrafficPolicyInstance":
        case "com.amazon.webservices.dns.v20130401#NoSuchTrafficPolicyInstance":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListTrafficPolicyInstancesByHostedZoneResponse",
        IsTruncated: undefined,
        MaxItems: undefined,
        TrafficPolicyInstanceNameMarker: undefined,
        TrafficPolicyInstanceTypeMarker: undefined,
        TrafficPolicyInstances: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = data["MaxItems"];
    }
    if (data["TrafficPolicyInstanceNameMarker"] !== undefined) {
        contents.TrafficPolicyInstanceNameMarker =
            data["TrafficPolicyInstanceNameMarker"];
    }
    if (data["TrafficPolicyInstanceTypeMarker"] !== undefined) {
        contents.TrafficPolicyInstanceTypeMarker =
            data["TrafficPolicyInstanceTypeMarker"];
    }
    if (data.TrafficPolicyInstances === "") {
        contents.TrafficPolicyInstances = [];
    }
    if (data["TrafficPolicyInstances"] !== undefined &&
        data["TrafficPolicyInstances"]["TrafficPolicyInstance"] !== undefined) {
        const wrappedItem = data["TrafficPolicyInstances"]["TrafficPolicyInstance"] instanceof Array
            ? data["TrafficPolicyInstances"]["TrafficPolicyInstance"]
            : [data["TrafficPolicyInstances"]["TrafficPolicyInstance"]];
        contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand = deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand;
async function deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchTrafficPolicyInstance":
        case "com.amazon.webservices.dns.v20130401#NoSuchTrafficPolicyInstance":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListTrafficPolicyInstancesByPolicyResponse",
        HostedZoneIdMarker: undefined,
        IsTruncated: undefined,
        MaxItems: undefined,
        TrafficPolicyInstanceNameMarker: undefined,
        TrafficPolicyInstanceTypeMarker: undefined,
        TrafficPolicyInstances: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["HostedZoneIdMarker"] !== undefined) {
        contents.HostedZoneIdMarker = data["HostedZoneIdMarker"];
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = data["MaxItems"];
    }
    if (data["TrafficPolicyInstanceNameMarker"] !== undefined) {
        contents.TrafficPolicyInstanceNameMarker =
            data["TrafficPolicyInstanceNameMarker"];
    }
    if (data["TrafficPolicyInstanceTypeMarker"] !== undefined) {
        contents.TrafficPolicyInstanceTypeMarker =
            data["TrafficPolicyInstanceTypeMarker"];
    }
    if (data.TrafficPolicyInstances === "") {
        contents.TrafficPolicyInstances = [];
    }
    if (data["TrafficPolicyInstances"] !== undefined &&
        data["TrafficPolicyInstances"]["TrafficPolicyInstance"] !== undefined) {
        const wrappedItem = data["TrafficPolicyInstances"]["TrafficPolicyInstance"] instanceof Array
            ? data["TrafficPolicyInstances"]["TrafficPolicyInstance"]
            : [data["TrafficPolicyInstances"]["TrafficPolicyInstance"]];
        contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand = deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand;
async function deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazon.webservices.dns.v20130401#NoSuchTrafficPolicy":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchTrafficPolicyInstance":
        case "com.amazon.webservices.dns.v20130401#NoSuchTrafficPolicyInstance":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListTrafficPolicyVersionsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListTrafficPolicyVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListTrafficPolicyVersionsResponse",
        IsTruncated: undefined,
        MaxItems: undefined,
        TrafficPolicies: undefined,
        TrafficPolicyVersionMarker: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = data["MaxItems"];
    }
    if (data.TrafficPolicies === "") {
        contents.TrafficPolicies = [];
    }
    if (data["TrafficPolicies"] !== undefined &&
        data["TrafficPolicies"]["TrafficPolicy"] !== undefined) {
        const wrappedItem = data["TrafficPolicies"]["TrafficPolicy"] instanceof Array
            ? data["TrafficPolicies"]["TrafficPolicy"]
            : [data["TrafficPolicies"]["TrafficPolicy"]];
        contents.TrafficPolicies = deserializeAws_restXmlTrafficPolicies(wrappedItem, context);
    }
    if (data["TrafficPolicyVersionMarker"] !== undefined) {
        contents.TrafficPolicyVersionMarker = data["TrafficPolicyVersionMarker"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListTrafficPolicyVersionsCommand = deserializeAws_restXmlListTrafficPolicyVersionsCommand;
async function deserializeAws_restXmlListTrafficPolicyVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazon.webservices.dns.v20130401#NoSuchTrafficPolicy":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlListVPCAssociationAuthorizationsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlListVPCAssociationAuthorizationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListVPCAssociationAuthorizationsResponse",
        HostedZoneId: undefined,
        NextToken: undefined,
        VPCs: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = data["HostedZoneId"];
    }
    if (data["NextToken"] !== undefined) {
        contents.NextToken = data["NextToken"];
    }
    if (data.VPCs === "") {
        contents.VPCs = [];
    }
    if (data["VPCs"] !== undefined && data["VPCs"]["VPC"] !== undefined) {
        const wrappedItem = data["VPCs"]["VPC"] instanceof Array
            ? data["VPCs"]["VPC"]
            : [data["VPCs"]["VPC"]];
        contents.VPCs = deserializeAws_restXmlVPCs(wrappedItem, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlListVPCAssociationAuthorizationsCommand = deserializeAws_restXmlListVPCAssociationAuthorizationsCommand;
async function deserializeAws_restXmlListVPCAssociationAuthorizationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationToken":
        case "com.amazon.webservices.dns.v20130401#InvalidPaginationToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidPaginationTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlTestDNSAnswerCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlTestDNSAnswerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "TestDNSAnswerResponse",
        Nameserver: undefined,
        Protocol: undefined,
        RecordData: undefined,
        RecordName: undefined,
        RecordType: undefined,
        ResponseCode: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["Nameserver"] !== undefined) {
        contents.Nameserver = data["Nameserver"];
    }
    if (data["Protocol"] !== undefined) {
        contents.Protocol = data["Protocol"];
    }
    if (data.RecordData === "") {
        contents.RecordData = [];
    }
    if (data["RecordData"] !== undefined &&
        data["RecordData"]["RecordDataEntry"] !== undefined) {
        const wrappedItem = data["RecordData"]["RecordDataEntry"] instanceof Array
            ? data["RecordData"]["RecordDataEntry"]
            : [data["RecordData"]["RecordDataEntry"]];
        contents.RecordData = deserializeAws_restXmlRecordData(wrappedItem, context);
    }
    if (data["RecordName"] !== undefined) {
        contents.RecordName = data["RecordName"];
    }
    if (data["RecordType"] !== undefined) {
        contents.RecordType = data["RecordType"];
    }
    if (data["ResponseCode"] !== undefined) {
        contents.ResponseCode = data["ResponseCode"];
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlTestDNSAnswerCommand = deserializeAws_restXmlTestDNSAnswerCommand;
async function deserializeAws_restXmlTestDNSAnswerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlUpdateHealthCheckCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlUpdateHealthCheckCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateHealthCheckResponse",
        HealthCheck: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["HealthCheck"] !== undefined) {
        contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUpdateHealthCheckCommand = deserializeAws_restXmlUpdateHealthCheckCommand;
async function deserializeAws_restXmlUpdateHealthCheckCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HealthCheckVersionMismatch":
        case "com.amazon.webservices.dns.v20130401#HealthCheckVersionMismatch":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlHealthCheckVersionMismatchResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHealthCheck":
        case "com.amazon.webservices.dns.v20130401#NoSuchHealthCheck":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlUpdateHostedZoneCommentCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlUpdateHostedZoneCommentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateHostedZoneCommentResponse",
        HostedZone: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["HostedZone"] !== undefined) {
        contents.HostedZone = deserializeAws_restXmlHostedZone(data["HostedZone"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUpdateHostedZoneCommentCommand = deserializeAws_restXmlUpdateHostedZoneCommentCommand;
async function deserializeAws_restXmlUpdateHostedZoneCommentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchHostedZone":
        case "com.amazon.webservices.dns.v20130401#NoSuchHostedZone":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlUpdateTrafficPolicyCommentCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlUpdateTrafficPolicyCommentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateTrafficPolicyCommentResponse",
        TrafficPolicy: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicy"] !== undefined) {
        contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUpdateTrafficPolicyCommentCommand = deserializeAws_restXmlUpdateTrafficPolicyCommentCommand;
async function deserializeAws_restXmlUpdateTrafficPolicyCommentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazon.webservices.dns.v20130401#ConcurrentModification":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazon.webservices.dns.v20130401#NoSuchTrafficPolicy":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restXmlUpdateTrafficPolicyInstanceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UpdateTrafficPolicyInstanceResponse",
        TrafficPolicyInstance: undefined
    };
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicyInstance"] !== undefined) {
        contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(data["TrafficPolicyInstance"], context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand = deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand;
async function deserializeAws_restXmlUpdateTrafficPolicyInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingTypes":
        case "com.amazon.webservices.dns.v20130401#ConflictingTypes":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlConflictingTypesResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInput":
        case "com.amazon.webservices.dns.v20130401#InvalidInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazon.webservices.dns.v20130401#NoSuchTrafficPolicy":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchTrafficPolicyInstance":
        case "com.amazon.webservices.dns.v20130401#NoSuchTrafficPolicyInstance":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PriorRequestNotComplete":
        case "com.amazon.webservices.dns.v20130401#PriorRequestNotComplete":
            response = Object.assign(Object.assign({}, (await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_restXmlConcurrentModificationResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConcurrentModification",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlConflictingDomainExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictingDomainExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlConflictingTypesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictingTypes",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlDelegationSetAlreadyCreatedResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DelegationSetAlreadyCreated",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlDelegationSetAlreadyReusableResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DelegationSetAlreadyReusable",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlDelegationSetInUseResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DelegationSetInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlDelegationSetNotAvailableResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DelegationSetNotAvailable",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlDelegationSetNotReusableResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DelegationSetNotReusable",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHealthCheckAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HealthCheckAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHealthCheckInUseResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HealthCheckInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHealthCheckVersionMismatchResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HealthCheckVersionMismatch",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHostedZoneAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HostedZoneAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHostedZoneNotEmptyResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HostedZoneNotEmpty",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHostedZoneNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HostedZoneNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHostedZoneNotPrivateResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HostedZoneNotPrivate",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlIncompatibleVersionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IncompatibleVersion",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInsufficientCloudWatchLogsResourcePolicyResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InsufficientCloudWatchLogsResourcePolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidArgumentResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidArgument",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidChangeBatchResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidChangeBatch",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        messages: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    if (data.messages === "") {
        contents.messages = [];
    }
    if (data["messages"] !== undefined &&
        data["messages"]["Message"] !== undefined) {
        const wrappedItem = data["messages"]["Message"] instanceof Array
            ? data["messages"]["Message"]
            : [data["messages"]["Message"]];
        contents.messages = deserializeAws_restXmlErrorMessages(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_restXmlInvalidDomainNameResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidDomainName",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidInputResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidInput",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidPaginationTokenResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidPaginationToken",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidTrafficPolicyDocument",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidVPCIdResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidVPCId",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlLastVPCAssociationResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LastVPCAssociation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlLimitsExceededResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitsExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchChangeResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchChange",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchCloudWatchLogsLogGroupResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchCloudWatchLogsLogGroup",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchDelegationSetResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchDelegationSet",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchGeoLocationResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchGeoLocation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchHealthCheckResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchHealthCheck",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchHostedZoneResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchHostedZone",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchQueryLoggingConfigResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchQueryLoggingConfig",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchTrafficPolicyResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchTrafficPolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchTrafficPolicyInstance",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNotAuthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotAuthorizedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlPriorRequestNotCompleteResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PriorRequestNotComplete",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlPublicZoneVPCAssociationResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PublicZoneVPCAssociation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlQueryLoggingConfigAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "QueryLoggingConfigAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTooManyHealthChecksResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyHealthChecks",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTooManyHostedZonesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyHostedZones",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTooManyTrafficPoliciesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyTrafficPolicies",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTooManyTrafficPolicyInstancesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyTrafficPolicyInstances",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTooManyTrafficPolicyVersionsForCurrentPolicyResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyTrafficPolicyVersionsForCurrentPolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTooManyVPCAssociationAuthorizationsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyVPCAssociationAuthorizations",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTrafficPolicyAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TrafficPolicyAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTrafficPolicyInUseResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TrafficPolicyInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTrafficPolicyInstanceAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TrafficPolicyInstanceAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlVPCAssociationAuthorizationNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "VPCAssociationAuthorizationNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlVPCAssociationNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "VPCAssociationNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const serializeAws_restXmlAlarmIdentifier = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AlarmIdentifier");
    if (input.Name !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("AlarmName")
            .addChildNode(new xml_builder_1.XmlText(input.Name))
            .withName("Name"));
    }
    if (input.Region !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("CloudWatchRegion")
            .addChildNode(new xml_builder_1.XmlText(input.Region))
            .withName("Region"));
    }
    return bodyNode;
};
const serializeAws_restXmlAliasTarget = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AliasTarget");
    if (input.DNSName !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("DNSName")
            .addChildNode(new xml_builder_1.XmlText(input.DNSName))
            .withName("DNSName"));
    }
    if (input.EvaluateTargetHealth !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("AliasHealthEnabled")
            .addChildNode(new xml_builder_1.XmlText(String(input.EvaluateTargetHealth)))
            .withName("EvaluateTargetHealth"));
    }
    if (input.HostedZoneId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourceId")
            .addChildNode(new xml_builder_1.XmlText(input.HostedZoneId))
            .withName("HostedZoneId"));
    }
    return bodyNode;
};
const serializeAws_restXmlChange = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Change");
    if (input.Action !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ChangeAction")
            .addChildNode(new xml_builder_1.XmlText(input.Action))
            .withName("Action"));
    }
    if (input.ResourceRecordSet !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlResourceRecordSet(input.ResourceRecordSet, context).withName("ResourceRecordSet"));
    }
    return bodyNode;
};
const serializeAws_restXmlChangeBatch = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ChangeBatch");
    if (input.Changes !== undefined) {
        const nodes = serializeAws_restXmlChanges(input.Changes, context);
        const containerNode = new xml_builder_1.XmlNode("Changes");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Comment !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourceDescription")
            .addChildNode(new xml_builder_1.XmlText(input.Comment))
            .withName("Comment"));
    }
    return bodyNode;
};
const serializeAws_restXmlChanges = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlChange(entry, context);
        collectedNodes.push(node.withName("Change"));
    }
    return collectedNodes;
};
const serializeAws_restXmlChildHealthCheckList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("HealthCheckId").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("ChildHealthCheck"));
    }
    return collectedNodes;
};
const serializeAws_restXmlGeoLocation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("GeoLocation");
    if (input.ContinentCode !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("GeoLocationContinentCode")
            .addChildNode(new xml_builder_1.XmlText(input.ContinentCode))
            .withName("ContinentCode"));
    }
    if (input.CountryCode !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("GeoLocationCountryCode")
            .addChildNode(new xml_builder_1.XmlText(input.CountryCode))
            .withName("CountryCode"));
    }
    if (input.SubdivisionCode !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("GeoLocationSubdivisionCode")
            .addChildNode(new xml_builder_1.XmlText(input.SubdivisionCode))
            .withName("SubdivisionCode"));
    }
    return bodyNode;
};
const serializeAws_restXmlHealthCheckConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("HealthCheckConfig");
    if (input.AlarmIdentifier !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlAlarmIdentifier(input.AlarmIdentifier, context).withName("AlarmIdentifier"));
    }
    if (input.ChildHealthChecks !== undefined) {
        const nodes = serializeAws_restXmlChildHealthCheckList(input.ChildHealthChecks, context);
        const containerNode = new xml_builder_1.XmlNode("ChildHealthChecks");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Disabled !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Disabled")
            .addChildNode(new xml_builder_1.XmlText(String(input.Disabled)))
            .withName("Disabled"));
    }
    if (input.EnableSNI !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("EnableSNI")
            .addChildNode(new xml_builder_1.XmlText(String(input.EnableSNI)))
            .withName("EnableSNI"));
    }
    if (input.FailureThreshold !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("FailureThreshold")
            .addChildNode(new xml_builder_1.XmlText(String(input.FailureThreshold)))
            .withName("FailureThreshold"));
    }
    if (input.FullyQualifiedDomainName !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("FullyQualifiedDomainName")
            .addChildNode(new xml_builder_1.XmlText(input.FullyQualifiedDomainName))
            .withName("FullyQualifiedDomainName"));
    }
    if (input.HealthThreshold !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("HealthThreshold")
            .addChildNode(new xml_builder_1.XmlText(String(input.HealthThreshold)))
            .withName("HealthThreshold"));
    }
    if (input.IPAddress !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("IPAddress")
            .addChildNode(new xml_builder_1.XmlText(input.IPAddress))
            .withName("IPAddress"));
    }
    if (input.InsufficientDataHealthStatus !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("InsufficientDataHealthStatus")
            .addChildNode(new xml_builder_1.XmlText(input.InsufficientDataHealthStatus))
            .withName("InsufficientDataHealthStatus"));
    }
    if (input.Inverted !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Inverted")
            .addChildNode(new xml_builder_1.XmlText(String(input.Inverted)))
            .withName("Inverted"));
    }
    if (input.MeasureLatency !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("MeasureLatency")
            .addChildNode(new xml_builder_1.XmlText(String(input.MeasureLatency)))
            .withName("MeasureLatency"));
    }
    if (input.Port !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("Port")
            .addChildNode(new xml_builder_1.XmlText(String(input.Port)))
            .withName("Port"));
    }
    if (input.Regions !== undefined) {
        const nodes = serializeAws_restXmlHealthCheckRegionList(input.Regions, context);
        const containerNode = new xml_builder_1.XmlNode("Regions");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.RequestInterval !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("RequestInterval")
            .addChildNode(new xml_builder_1.XmlText(String(input.RequestInterval)))
            .withName("RequestInterval"));
    }
    if (input.ResourcePath !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourcePath")
            .addChildNode(new xml_builder_1.XmlText(input.ResourcePath))
            .withName("ResourcePath"));
    }
    if (input.SearchString !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("SearchString")
            .addChildNode(new xml_builder_1.XmlText(input.SearchString))
            .withName("SearchString"));
    }
    if (input.Type !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("HealthCheckType")
            .addChildNode(new xml_builder_1.XmlText(input.Type))
            .withName("Type"));
    }
    return bodyNode;
};
const serializeAws_restXmlHealthCheckRegionList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("HealthCheckRegion").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("Region"));
    }
    return collectedNodes;
};
const serializeAws_restXmlHostedZoneConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("HostedZoneConfig");
    if (input.Comment !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourceDescription")
            .addChildNode(new xml_builder_1.XmlText(input.Comment))
            .withName("Comment"));
    }
    if (input.PrivateZone !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("IsPrivateZone")
            .addChildNode(new xml_builder_1.XmlText(String(input.PrivateZone)))
            .withName("PrivateZone"));
    }
    return bodyNode;
};
const serializeAws_restXmlResettableElementNameList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("ResettableElementName").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("ResettableElementName"));
    }
    return collectedNodes;
};
const serializeAws_restXmlResourceRecord = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResourceRecord");
    if (input.Value !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("RData")
            .addChildNode(new xml_builder_1.XmlText(input.Value))
            .withName("Value"));
    }
    return bodyNode;
};
const serializeAws_restXmlResourceRecordSet = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResourceRecordSet");
    if (input.AliasTarget !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlAliasTarget(input.AliasTarget, context).withName("AliasTarget"));
    }
    if (input.Failover !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourceRecordSetFailover")
            .addChildNode(new xml_builder_1.XmlText(input.Failover))
            .withName("Failover"));
    }
    if (input.GeoLocation !== undefined) {
        bodyNode.addChildNode(serializeAws_restXmlGeoLocation(input.GeoLocation, context).withName("GeoLocation"));
    }
    if (input.HealthCheckId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("HealthCheckId")
            .addChildNode(new xml_builder_1.XmlText(input.HealthCheckId))
            .withName("HealthCheckId"));
    }
    if (input.MultiValueAnswer !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourceRecordSetMultiValueAnswer")
            .addChildNode(new xml_builder_1.XmlText(String(input.MultiValueAnswer)))
            .withName("MultiValueAnswer"));
    }
    if (input.Name !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("DNSName")
            .addChildNode(new xml_builder_1.XmlText(input.Name))
            .withName("Name"));
    }
    if (input.Region !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourceRecordSetRegion")
            .addChildNode(new xml_builder_1.XmlText(input.Region))
            .withName("Region"));
    }
    if (input.ResourceRecords !== undefined) {
        const nodes = serializeAws_restXmlResourceRecords(input.ResourceRecords, context);
        const containerNode = new xml_builder_1.XmlNode("ResourceRecords");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.SetIdentifier !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourceRecordSetIdentifier")
            .addChildNode(new xml_builder_1.XmlText(input.SetIdentifier))
            .withName("SetIdentifier"));
    }
    if (input.TTL !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TTL")
            .addChildNode(new xml_builder_1.XmlText(String(input.TTL)))
            .withName("TTL"));
    }
    if (input.TrafficPolicyInstanceId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("TrafficPolicyInstanceId")
            .addChildNode(new xml_builder_1.XmlText(input.TrafficPolicyInstanceId))
            .withName("TrafficPolicyInstanceId"));
    }
    if (input.Type !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("RRType")
            .addChildNode(new xml_builder_1.XmlText(input.Type))
            .withName("Type"));
    }
    if (input.Weight !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("ResourceRecordSetWeight")
            .addChildNode(new xml_builder_1.XmlText(String(input.Weight)))
            .withName("Weight"));
    }
    return bodyNode;
};
const serializeAws_restXmlResourceRecords = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlResourceRecord(entry, context);
        collectedNodes.push(node.withName("ResourceRecord"));
    }
    return collectedNodes;
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
const serializeAws_restXmlTagList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = serializeAws_restXmlTag(entry, context);
        collectedNodes.push(node.withName("Tag"));
    }
    return collectedNodes;
};
const serializeAws_restXmlTagResourceIdList = (input, context) => {
    const collectedNodes = [];
    for (let entry of input) {
        const node = new xml_builder_1.XmlNode("TagResourceId").addChildNode(new xml_builder_1.XmlText(entry));
        collectedNodes.push(node.withName("ResourceId"));
    }
    return collectedNodes;
};
const serializeAws_restXmlVPC = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("VPC");
    if (input.VPCId !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("VPCId")
            .addChildNode(new xml_builder_1.XmlText(input.VPCId))
            .withName("VPCId"));
    }
    if (input.VPCRegion !== undefined) {
        bodyNode.addChildNode(new xml_builder_1.XmlNode("VPCRegion")
            .addChildNode(new xml_builder_1.XmlText(input.VPCRegion))
            .withName("VPCRegion"));
    }
    return bodyNode;
};
const deserializeAws_restXmlAccountLimit = (output, context) => {
    let contents = {
        __type: "AccountLimit",
        Type: undefined,
        Value: undefined
    };
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = parseInt(output["Value"]);
    }
    return contents;
};
const deserializeAws_restXmlAlarmIdentifier = (output, context) => {
    let contents = {
        __type: "AlarmIdentifier",
        Name: undefined,
        Region: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    return contents;
};
const deserializeAws_restXmlAliasTarget = (output, context) => {
    let contents = {
        __type: "AliasTarget",
        DNSName: undefined,
        EvaluateTargetHealth: undefined,
        HostedZoneId: undefined
    };
    if (output["DNSName"] !== undefined) {
        contents.DNSName = output["DNSName"];
    }
    if (output["EvaluateTargetHealth"] !== undefined) {
        contents.EvaluateTargetHealth = output["EvaluateTargetHealth"] == "true";
    }
    if (output["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = output["HostedZoneId"];
    }
    return contents;
};
const deserializeAws_restXmlChangeInfo = (output, context) => {
    let contents = {
        __type: "ChangeInfo",
        Comment: undefined,
        Id: undefined,
        Status: undefined,
        SubmittedAt: undefined
    };
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["SubmittedAt"] !== undefined) {
        contents.SubmittedAt = new Date(output["SubmittedAt"]);
    }
    return contents;
};
const deserializeAws_restXmlCheckerIpRanges = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlChildHealthCheckList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlCloudWatchAlarmConfiguration = (output, context) => {
    let contents = {
        __type: "CloudWatchAlarmConfiguration",
        ComparisonOperator: undefined,
        Dimensions: undefined,
        EvaluationPeriods: undefined,
        MetricName: undefined,
        Namespace: undefined,
        Period: undefined,
        Statistic: undefined,
        Threshold: undefined
    };
    if (output["ComparisonOperator"] !== undefined) {
        contents.ComparisonOperator = output["ComparisonOperator"];
    }
    if (output.Dimensions === "") {
        contents.Dimensions = [];
    }
    if (output["Dimensions"] !== undefined &&
        output["Dimensions"]["Dimension"] !== undefined) {
        const wrappedItem = output["Dimensions"]["Dimension"] instanceof Array
            ? output["Dimensions"]["Dimension"]
            : [output["Dimensions"]["Dimension"]];
        contents.Dimensions = deserializeAws_restXmlDimensionList(wrappedItem, context);
    }
    if (output["EvaluationPeriods"] !== undefined) {
        contents.EvaluationPeriods = parseInt(output["EvaluationPeriods"]);
    }
    if (output["MetricName"] !== undefined) {
        contents.MetricName = output["MetricName"];
    }
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["Period"] !== undefined) {
        contents.Period = parseInt(output["Period"]);
    }
    if (output["Statistic"] !== undefined) {
        contents.Statistic = output["Statistic"];
    }
    if (output["Threshold"] !== undefined) {
        contents.Threshold = parseFloat(output["Threshold"]);
    }
    return contents;
};
const deserializeAws_restXmlDelegationSet = (output, context) => {
    let contents = {
        __type: "DelegationSet",
        CallerReference: undefined,
        Id: undefined,
        NameServers: undefined
    };
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = output["CallerReference"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output.NameServers === "") {
        contents.NameServers = [];
    }
    if (output["NameServers"] !== undefined &&
        output["NameServers"]["NameServer"] !== undefined) {
        const wrappedItem = output["NameServers"]["NameServer"] instanceof Array
            ? output["NameServers"]["NameServer"]
            : [output["NameServers"]["NameServer"]];
        contents.NameServers = deserializeAws_restXmlDelegationSetNameServers(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_restXmlDelegationSetNameServers = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlDelegationSets = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlDelegationSet(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlDimension = (output, context) => {
    let contents = {
        __type: "Dimension",
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
const deserializeAws_restXmlDimensionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlDimension(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlErrorMessages = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlGeoLocation = (output, context) => {
    let contents = {
        __type: "GeoLocation",
        ContinentCode: undefined,
        CountryCode: undefined,
        SubdivisionCode: undefined
    };
    if (output["ContinentCode"] !== undefined) {
        contents.ContinentCode = output["ContinentCode"];
    }
    if (output["CountryCode"] !== undefined) {
        contents.CountryCode = output["CountryCode"];
    }
    if (output["SubdivisionCode"] !== undefined) {
        contents.SubdivisionCode = output["SubdivisionCode"];
    }
    return contents;
};
const deserializeAws_restXmlGeoLocationDetails = (output, context) => {
    let contents = {
        __type: "GeoLocationDetails",
        ContinentCode: undefined,
        ContinentName: undefined,
        CountryCode: undefined,
        CountryName: undefined,
        SubdivisionCode: undefined,
        SubdivisionName: undefined
    };
    if (output["ContinentCode"] !== undefined) {
        contents.ContinentCode = output["ContinentCode"];
    }
    if (output["ContinentName"] !== undefined) {
        contents.ContinentName = output["ContinentName"];
    }
    if (output["CountryCode"] !== undefined) {
        contents.CountryCode = output["CountryCode"];
    }
    if (output["CountryName"] !== undefined) {
        contents.CountryName = output["CountryName"];
    }
    if (output["SubdivisionCode"] !== undefined) {
        contents.SubdivisionCode = output["SubdivisionCode"];
    }
    if (output["SubdivisionName"] !== undefined) {
        contents.SubdivisionName = output["SubdivisionName"];
    }
    return contents;
};
const deserializeAws_restXmlGeoLocationDetailsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlGeoLocationDetails(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlHealthCheck = (output, context) => {
    let contents = {
        __type: "HealthCheck",
        CallerReference: undefined,
        CloudWatchAlarmConfiguration: undefined,
        HealthCheckConfig: undefined,
        HealthCheckVersion: undefined,
        Id: undefined,
        LinkedService: undefined
    };
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = output["CallerReference"];
    }
    if (output["CloudWatchAlarmConfiguration"] !== undefined) {
        contents.CloudWatchAlarmConfiguration = deserializeAws_restXmlCloudWatchAlarmConfiguration(output["CloudWatchAlarmConfiguration"], context);
    }
    if (output["HealthCheckConfig"] !== undefined) {
        contents.HealthCheckConfig = deserializeAws_restXmlHealthCheckConfig(output["HealthCheckConfig"], context);
    }
    if (output["HealthCheckVersion"] !== undefined) {
        contents.HealthCheckVersion = parseInt(output["HealthCheckVersion"]);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["LinkedService"] !== undefined) {
        contents.LinkedService = deserializeAws_restXmlLinkedService(output["LinkedService"], context);
    }
    return contents;
};
const deserializeAws_restXmlHealthCheckConfig = (output, context) => {
    let contents = {
        __type: "HealthCheckConfig",
        AlarmIdentifier: undefined,
        ChildHealthChecks: undefined,
        Disabled: undefined,
        EnableSNI: undefined,
        FailureThreshold: undefined,
        FullyQualifiedDomainName: undefined,
        HealthThreshold: undefined,
        IPAddress: undefined,
        InsufficientDataHealthStatus: undefined,
        Inverted: undefined,
        MeasureLatency: undefined,
        Port: undefined,
        Regions: undefined,
        RequestInterval: undefined,
        ResourcePath: undefined,
        SearchString: undefined,
        Type: undefined
    };
    if (output["AlarmIdentifier"] !== undefined) {
        contents.AlarmIdentifier = deserializeAws_restXmlAlarmIdentifier(output["AlarmIdentifier"], context);
    }
    if (output.ChildHealthChecks === "") {
        contents.ChildHealthChecks = [];
    }
    if (output["ChildHealthChecks"] !== undefined &&
        output["ChildHealthChecks"]["ChildHealthCheck"] !== undefined) {
        const wrappedItem = output["ChildHealthChecks"]["ChildHealthCheck"] instanceof Array
            ? output["ChildHealthChecks"]["ChildHealthCheck"]
            : [output["ChildHealthChecks"]["ChildHealthCheck"]];
        contents.ChildHealthChecks = deserializeAws_restXmlChildHealthCheckList(wrappedItem, context);
    }
    if (output["Disabled"] !== undefined) {
        contents.Disabled = output["Disabled"] == "true";
    }
    if (output["EnableSNI"] !== undefined) {
        contents.EnableSNI = output["EnableSNI"] == "true";
    }
    if (output["FailureThreshold"] !== undefined) {
        contents.FailureThreshold = parseInt(output["FailureThreshold"]);
    }
    if (output["FullyQualifiedDomainName"] !== undefined) {
        contents.FullyQualifiedDomainName = output["FullyQualifiedDomainName"];
    }
    if (output["HealthThreshold"] !== undefined) {
        contents.HealthThreshold = parseInt(output["HealthThreshold"]);
    }
    if (output["IPAddress"] !== undefined) {
        contents.IPAddress = output["IPAddress"];
    }
    if (output["InsufficientDataHealthStatus"] !== undefined) {
        contents.InsufficientDataHealthStatus =
            output["InsufficientDataHealthStatus"];
    }
    if (output["Inverted"] !== undefined) {
        contents.Inverted = output["Inverted"] == "true";
    }
    if (output["MeasureLatency"] !== undefined) {
        contents.MeasureLatency = output["MeasureLatency"] == "true";
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output.Regions === "") {
        contents.Regions = [];
    }
    if (output["Regions"] !== undefined &&
        output["Regions"]["Region"] !== undefined) {
        const wrappedItem = output["Regions"]["Region"] instanceof Array
            ? output["Regions"]["Region"]
            : [output["Regions"]["Region"]];
        contents.Regions = deserializeAws_restXmlHealthCheckRegionList(wrappedItem, context);
    }
    if (output["RequestInterval"] !== undefined) {
        contents.RequestInterval = parseInt(output["RequestInterval"]);
    }
    if (output["ResourcePath"] !== undefined) {
        contents.ResourcePath = output["ResourcePath"];
    }
    if (output["SearchString"] !== undefined) {
        contents.SearchString = output["SearchString"];
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    return contents;
};
const deserializeAws_restXmlHealthCheckObservation = (output, context) => {
    let contents = {
        __type: "HealthCheckObservation",
        IPAddress: undefined,
        Region: undefined,
        StatusReport: undefined
    };
    if (output["IPAddress"] !== undefined) {
        contents.IPAddress = output["IPAddress"];
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output["StatusReport"] !== undefined) {
        contents.StatusReport = deserializeAws_restXmlStatusReport(output["StatusReport"], context);
    }
    return contents;
};
const deserializeAws_restXmlHealthCheckObservations = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlHealthCheckObservation(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlHealthCheckRegionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlHealthChecks = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlHealthCheck(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlHostedZone = (output, context) => {
    let contents = {
        __type: "HostedZone",
        CallerReference: undefined,
        Config: undefined,
        Id: undefined,
        LinkedService: undefined,
        Name: undefined,
        ResourceRecordSetCount: undefined
    };
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = output["CallerReference"];
    }
    if (output["Config"] !== undefined) {
        contents.Config = deserializeAws_restXmlHostedZoneConfig(output["Config"], context);
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["LinkedService"] !== undefined) {
        contents.LinkedService = deserializeAws_restXmlLinkedService(output["LinkedService"], context);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["ResourceRecordSetCount"] !== undefined) {
        contents.ResourceRecordSetCount = parseInt(output["ResourceRecordSetCount"]);
    }
    return contents;
};
const deserializeAws_restXmlHostedZoneConfig = (output, context) => {
    let contents = {
        __type: "HostedZoneConfig",
        Comment: undefined,
        PrivateZone: undefined
    };
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["PrivateZone"] !== undefined) {
        contents.PrivateZone = output["PrivateZone"] == "true";
    }
    return contents;
};
const deserializeAws_restXmlHostedZoneLimit = (output, context) => {
    let contents = {
        __type: "HostedZoneLimit",
        Type: undefined,
        Value: undefined
    };
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = parseInt(output["Value"]);
    }
    return contents;
};
const deserializeAws_restXmlHostedZones = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlHostedZone(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlLinkedService = (output, context) => {
    let contents = {
        __type: "LinkedService",
        Description: undefined,
        ServicePrincipal: undefined
    };
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["ServicePrincipal"] !== undefined) {
        contents.ServicePrincipal = output["ServicePrincipal"];
    }
    return contents;
};
const deserializeAws_restXmlQueryLoggingConfig = (output, context) => {
    let contents = {
        __type: "QueryLoggingConfig",
        CloudWatchLogsLogGroupArn: undefined,
        HostedZoneId: undefined,
        Id: undefined
    };
    if (output["CloudWatchLogsLogGroupArn"] !== undefined) {
        contents.CloudWatchLogsLogGroupArn = output["CloudWatchLogsLogGroupArn"];
    }
    if (output["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = output["HostedZoneId"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    return contents;
};
const deserializeAws_restXmlQueryLoggingConfigs = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlQueryLoggingConfig(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlRecordData = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_restXmlResourceRecord = (output, context) => {
    let contents = {
        __type: "ResourceRecord",
        Value: undefined
    };
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_restXmlResourceRecordSet = (output, context) => {
    let contents = {
        __type: "ResourceRecordSet",
        AliasTarget: undefined,
        Failover: undefined,
        GeoLocation: undefined,
        HealthCheckId: undefined,
        MultiValueAnswer: undefined,
        Name: undefined,
        Region: undefined,
        ResourceRecords: undefined,
        SetIdentifier: undefined,
        TTL: undefined,
        TrafficPolicyInstanceId: undefined,
        Type: undefined,
        Weight: undefined
    };
    if (output["AliasTarget"] !== undefined) {
        contents.AliasTarget = deserializeAws_restXmlAliasTarget(output["AliasTarget"], context);
    }
    if (output["Failover"] !== undefined) {
        contents.Failover = output["Failover"];
    }
    if (output["GeoLocation"] !== undefined) {
        contents.GeoLocation = deserializeAws_restXmlGeoLocation(output["GeoLocation"], context);
    }
    if (output["HealthCheckId"] !== undefined) {
        contents.HealthCheckId = output["HealthCheckId"];
    }
    if (output["MultiValueAnswer"] !== undefined) {
        contents.MultiValueAnswer = output["MultiValueAnswer"] == "true";
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output.ResourceRecords === "") {
        contents.ResourceRecords = [];
    }
    if (output["ResourceRecords"] !== undefined &&
        output["ResourceRecords"]["ResourceRecord"] !== undefined) {
        const wrappedItem = output["ResourceRecords"]["ResourceRecord"] instanceof Array
            ? output["ResourceRecords"]["ResourceRecord"]
            : [output["ResourceRecords"]["ResourceRecord"]];
        contents.ResourceRecords = deserializeAws_restXmlResourceRecords(wrappedItem, context);
    }
    if (output["SetIdentifier"] !== undefined) {
        contents.SetIdentifier = output["SetIdentifier"];
    }
    if (output["TTL"] !== undefined) {
        contents.TTL = parseInt(output["TTL"]);
    }
    if (output["TrafficPolicyInstanceId"] !== undefined) {
        contents.TrafficPolicyInstanceId = output["TrafficPolicyInstanceId"];
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["Weight"] !== undefined) {
        contents.Weight = parseInt(output["Weight"]);
    }
    return contents;
};
const deserializeAws_restXmlResourceRecordSets = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlResourceRecordSet(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlResourceRecords = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlResourceRecord(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlResourceTagSet = (output, context) => {
    let contents = {
        __type: "ResourceTagSet",
        ResourceId: undefined,
        ResourceType: undefined,
        Tags: undefined
    };
    if (output["ResourceId"] !== undefined) {
        contents.ResourceId = output["ResourceId"];
    }
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        const wrappedItem = output["Tags"]["Tag"] instanceof Array
            ? output["Tags"]["Tag"]
            : [output["Tags"]["Tag"]];
        contents.Tags = deserializeAws_restXmlTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_restXmlResourceTagSetList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlResourceTagSet(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlReusableDelegationSetLimit = (output, context) => {
    let contents = {
        __type: "ReusableDelegationSetLimit",
        Type: undefined,
        Value: undefined
    };
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = parseInt(output["Value"]);
    }
    return contents;
};
const deserializeAws_restXmlStatusReport = (output, context) => {
    let contents = {
        __type: "StatusReport",
        CheckedTime: undefined,
        Status: undefined
    };
    if (output["CheckedTime"] !== undefined) {
        contents.CheckedTime = new Date(output["CheckedTime"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
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
const deserializeAws_restXmlTrafficPolicies = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlTrafficPolicy(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlTrafficPolicy = (output, context) => {
    let contents = {
        __type: "TrafficPolicy",
        Comment: undefined,
        Document: undefined,
        Id: undefined,
        Name: undefined,
        Type: undefined,
        Version: undefined
    };
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["Document"] !== undefined) {
        contents.Document = output["Document"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["Version"] !== undefined) {
        contents.Version = parseInt(output["Version"]);
    }
    return contents;
};
const deserializeAws_restXmlTrafficPolicyInstance = (output, context) => {
    let contents = {
        __type: "TrafficPolicyInstance",
        HostedZoneId: undefined,
        Id: undefined,
        Message: undefined,
        Name: undefined,
        State: undefined,
        TTL: undefined,
        TrafficPolicyId: undefined,
        TrafficPolicyType: undefined,
        TrafficPolicyVersion: undefined
    };
    if (output["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = output["HostedZoneId"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["TTL"] !== undefined) {
        contents.TTL = parseInt(output["TTL"]);
    }
    if (output["TrafficPolicyId"] !== undefined) {
        contents.TrafficPolicyId = output["TrafficPolicyId"];
    }
    if (output["TrafficPolicyType"] !== undefined) {
        contents.TrafficPolicyType = output["TrafficPolicyType"];
    }
    if (output["TrafficPolicyVersion"] !== undefined) {
        contents.TrafficPolicyVersion = parseInt(output["TrafficPolicyVersion"]);
    }
    return contents;
};
const deserializeAws_restXmlTrafficPolicyInstances = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlTrafficPolicyInstance(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlTrafficPolicySummaries = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlTrafficPolicySummary(entry, context));
    });
    return contents;
};
const deserializeAws_restXmlTrafficPolicySummary = (output, context) => {
    let contents = {
        __type: "TrafficPolicySummary",
        Id: undefined,
        LatestVersion: undefined,
        Name: undefined,
        TrafficPolicyCount: undefined,
        Type: undefined
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["LatestVersion"] !== undefined) {
        contents.LatestVersion = parseInt(output["LatestVersion"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["TrafficPolicyCount"] !== undefined) {
        contents.TrafficPolicyCount = parseInt(output["TrafficPolicyCount"]);
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    return contents;
};
const deserializeAws_restXmlVPC = (output, context) => {
    let contents = {
        __type: "VPC",
        VPCId: undefined,
        VPCRegion: undefined
    };
    if (output["VPCId"] !== undefined) {
        contents.VPCId = output["VPCId"];
    }
    if (output["VPCRegion"] !== undefined) {
        contents.VPCRegion = output["VPCRegion"];
    }
    return contents;
};
const deserializeAws_restXmlVPCs = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_restXmlVPC(entry, context));
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
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_restXml.js.map