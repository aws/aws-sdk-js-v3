"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AWSSDKSigV4Signer: () => AWSSDKSigV4Signer,
  AwsSdkSigV4Signer: () => AwsSdkSigV4Signer,
  _toBool: () => _toBool,
  _toNum: () => _toNum,
  _toStr: () => _toStr,
  awsExpectUnion: () => awsExpectUnion,
  emitWarningIfUnsupportedVersion: () => emitWarningIfUnsupportedVersion,
  loadRestJsonErrorCode: () => loadRestJsonErrorCode,
  loadRestXmlErrorCode: () => loadRestXmlErrorCode,
  parseJsonBody: () => parseJsonBody,
  parseJsonErrorBody: () => parseJsonErrorBody,
  parseXmlBody: () => parseXmlBody,
  parseXmlErrorBody: () => parseXmlErrorBody,
  resolveAWSSDKSigV4Config: () => resolveAWSSDKSigV4Config,
  resolveAwsSdkSigV4Config: () => resolveAwsSdkSigV4Config,
});
module.exports = __toCommonJS(src_exports);

// src/client/emitWarningIfUnsupportedVersion.ts
var warningEmitted = false;
var emitWarningIfUnsupportedVersion = /* @__PURE__ */ __name((version) => {
  if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
    warningEmitted = true;
  }
}, "emitWarningIfUnsupportedVersion");

// src/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.ts

// src/httpAuthSchemes/utils/getDateHeader.ts
var import_protocol_http = require("@smithy/protocol-http");
var getDateHeader = /* @__PURE__ */ __name((response) => {
  var _a, _b;
  return import_protocol_http.HttpResponse.isInstance(response)
    ? ((_a = response.headers) == null ? void 0 : _a.date) ?? ((_b = response.headers) == null ? void 0 : _b.Date)
    : void 0;
}, "getDateHeader");

// src/httpAuthSchemes/utils/getSkewCorrectedDate.ts
var getSkewCorrectedDate = /* @__PURE__ */ __name(
  (systemClockOffset) => new Date(Date.now() + systemClockOffset),
  "getSkewCorrectedDate"
);

// src/httpAuthSchemes/utils/isClockSkewed.ts
var isClockSkewed = /* @__PURE__ */ __name(
  (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5,
  "isClockSkewed"
);

// src/httpAuthSchemes/utils/getUpdatedSystemClockOffset.ts
var getUpdatedSystemClockOffset = /* @__PURE__ */ __name((clockTime, currentSystemClockOffset) => {
  const clockTimeInMs = Date.parse(clockTime);
  if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
    return clockTimeInMs - Date.now();
  }
  return currentSystemClockOffset;
}, "getUpdatedSystemClockOffset");

// src/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.ts
var throwSigningPropertyError = /* @__PURE__ */ __name((name, property) => {
  if (!property) {
    throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
  }
  return property;
}, "throwSigningPropertyError");
var validateSigningProperties = /* @__PURE__ */ __name(async (signingProperties) => {
  var _a, _b, _c;
  const context = throwSigningPropertyError("context", signingProperties.context);
  const config = throwSigningPropertyError("config", signingProperties.config);
  const authScheme =
    (_c = (_b = (_a = context.endpointV2) == null ? void 0 : _a.properties) == null ? void 0 : _b.authSchemes) == null
      ? void 0
      : _c[0];
  const signerFunction = throwSigningPropertyError("signer", config.signer);
  const signer = await signerFunction(authScheme);
  const signingRegion = signingProperties == null ? void 0 : signingProperties.signingRegion;
  const signingName = signingProperties == null ? void 0 : signingProperties.signingName;
  return {
    config,
    signer,
    signingRegion,
    signingName,
  };
}, "validateSigningProperties");
var _AwsSdkSigV4Signer = class _AwsSdkSigV4Signer {
  async sign(httpRequest, identity, signingProperties) {
    if (!import_protocol_http.HttpRequest.isInstance(httpRequest)) {
      throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
    }
    const { config, signer, signingRegion, signingName } = await validateSigningProperties(signingProperties);
    const signedRequest = await signer.sign(httpRequest, {
      signingDate: getSkewCorrectedDate(config.systemClockOffset),
      signingRegion,
      signingService: signingName,
    });
    return signedRequest;
  }
  errorHandler(signingProperties) {
    return (error) => {
      const serverTime = error.ServerTime ?? getDateHeader(error.$response);
      if (serverTime) {
        const config = throwSigningPropertyError("config", signingProperties.config);
        const initialSystemClockOffset = config.systemClockOffset;
        config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
        const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
        if (clockSkewCorrected && error.$metadata) {
          error.$metadata.clockSkewCorrected = true;
        }
      }
      throw error;
    };
  }
  successHandler(httpResponse, signingProperties) {
    const dateHeader = getDateHeader(httpResponse);
    if (dateHeader) {
      const config = throwSigningPropertyError("config", signingProperties.config);
      config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
    }
  }
};
__name(_AwsSdkSigV4Signer, "AwsSdkSigV4Signer");
var AwsSdkSigV4Signer = _AwsSdkSigV4Signer;
var AWSSDKSigV4Signer = AwsSdkSigV4Signer;

// src/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.ts
var import_core = require("@smithy/core");
var import_signature_v4 = require("@smithy/signature-v4");
var resolveAwsSdkSigV4Config = /* @__PURE__ */ __name((config) => {
  let normalizedCreds;
  if (config.credentials) {
    normalizedCreds = (0, import_core.memoizeIdentityProvider)(
      config.credentials,
      import_core.isIdentityExpired,
      import_core.doesIdentityRequireRefresh
    );
  }
  if (!normalizedCreds) {
    if (config.credentialDefaultProvider) {
      normalizedCreds = (0, import_core.normalizeProvider)(
        config.credentialDefaultProvider(
          Object.assign({}, config, {
            parentClientConfig: config,
          })
        )
      );
    } else {
      normalizedCreds = /* @__PURE__ */ __name(async () => {
        throw new Error("`credentials` is missing");
      }, "normalizedCreds");
    }
  }
  const {
    // Default for signingEscapePath
    signingEscapePath = true,
    // Default for systemClockOffset
    systemClockOffset = config.systemClockOffset || 0,
    // No default for sha256 since it is platform dependent
    sha256,
  } = config;
  let signer;
  if (config.signer) {
    signer = (0, import_core.normalizeProvider)(config.signer);
  } else if (config.regionInfoProvider) {
    signer = /* @__PURE__ */ __name(
      () =>
        (0, import_core.normalizeProvider)(config.region)()
          .then(async (region) => [
            (await config.regionInfoProvider(region, {
              useFipsEndpoint: await config.useFipsEndpoint(),
              useDualstackEndpoint: await config.useDualstackEndpoint(),
            })) || {},
            region,
          ])
          .then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            config.signingRegion = config.signingRegion || signingRegion || region;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
              ...config,
              credentials: normalizedCreds,
              region: config.signingRegion,
              service: config.signingName,
              sha256,
              uriEscapePath: signingEscapePath,
            };
            const SignerCtor = config.signerConstructor || import_signature_v4.SignatureV4;
            return new SignerCtor(params);
          }),
      "signer"
    );
  } else {
    signer = /* @__PURE__ */ __name(async (authScheme) => {
      authScheme = Object.assign(
        {},
        {
          name: "sigv4",
          signingName: config.signingName || config.defaultSigningName,
          signingRegion: await (0, import_core.normalizeProvider)(config.region)(),
          properties: {},
        },
        authScheme
      );
      const signingRegion = authScheme.signingRegion;
      const signingService = authScheme.signingName;
      config.signingRegion = config.signingRegion || signingRegion;
      config.signingName = config.signingName || signingService || config.serviceId;
      const params = {
        ...config,
        credentials: normalizedCreds,
        region: config.signingRegion,
        service: config.signingName,
        sha256,
        uriEscapePath: signingEscapePath,
      };
      const SignerCtor = config.signerConstructor || import_signature_v4.SignatureV4;
      return new SignerCtor(params);
    }, "signer");
  }
  return {
    ...config,
    systemClockOffset,
    signingEscapePath,
    credentials: normalizedCreds,
    signer,
  };
}, "resolveAwsSdkSigV4Config");
var resolveAWSSDKSigV4Config = resolveAwsSdkSigV4Config;

// src/protocols/coercing-serializers.ts
var _toStr = /* @__PURE__ */ __name((val) => {
  if (val == null) {
    return val;
  }
  if (typeof val === "number" || typeof val === "bigint") {
    const warning = new Error(`Received number ${val} where a string was expected.`);
    warning.name = "Warning";
    console.warn(warning);
    return String(val);
  }
  if (typeof val === "boolean") {
    const warning = new Error(`Received boolean ${val} where a string was expected.`);
    warning.name = "Warning";
    console.warn(warning);
    return String(val);
  }
  return val;
}, "_toStr");
var _toBool = /* @__PURE__ */ __name((val) => {
  if (val == null) {
    return val;
  }
  if (typeof val === "number") {
  }
  if (typeof val === "string") {
    const lowercase = val.toLowerCase();
    if (val !== "" && lowercase !== "false" && lowercase !== "true") {
      const warning = new Error(`Received string "${val}" where a boolean was expected.`);
      warning.name = "Warning";
      console.warn(warning);
    }
    return val !== "" && lowercase !== "false";
  }
  return val;
}, "_toBool");
var _toNum = /* @__PURE__ */ __name((val) => {
  if (val == null) {
    return val;
  }
  if (typeof val === "boolean") {
  }
  if (typeof val === "string") {
    const num = Number(val);
    if (num.toString() !== val) {
      const warning = new Error(`Received string "${val}" where a number was expected.`);
      warning.name = "Warning";
      console.warn(warning);
      return val;
    }
    return num;
  }
  return val;
}, "_toNum");

// src/protocols/json/awsExpectUnion.ts
var import_smithy_client = require("@smithy/smithy-client");
var awsExpectUnion = /* @__PURE__ */ __name((value) => {
  if (value == null) {
    return void 0;
  }
  if (typeof value === "object" && "__type" in value) {
    delete value.__type;
  }
  return (0, import_smithy_client.expectUnion)(value);
}, "awsExpectUnion");

// src/protocols/common.ts

var collectBodyString = /* @__PURE__ */ __name(
  (streamBody, context) =>
    (0, import_smithy_client.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body)),
  "collectBodyString"
);

// src/protocols/json/parseJsonBody.ts
var parseJsonBody = /* @__PURE__ */ __name(
  (streamBody, context) =>
    collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        try {
          return JSON.parse(encoded);
        } catch (e) {
          if ((e == null ? void 0 : e.name) === "SyntaxError") {
            Object.defineProperty(e, "$responseBodyText", {
              value: encoded,
            });
          }
          throw e;
        }
      }
      return {};
    }),
  "parseJsonBody"
);
var parseJsonErrorBody = /* @__PURE__ */ __name(async (errorBody, context) => {
  const value = await parseJsonBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
}, "parseJsonErrorBody");
var loadRestJsonErrorCode = /* @__PURE__ */ __name((output, data) => {
  const findKey = /* @__PURE__ */ __name(
    (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase()),
    "findKey"
  );
  const sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  }, "sanitizeErrorCode");
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== void 0) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data.code !== void 0) {
    return sanitizeErrorCode(data.code);
  }
  if (data["__type"] !== void 0) {
    return sanitizeErrorCode(data["__type"]);
  }
}, "loadRestJsonErrorCode");

// src/protocols/xml/parseXmlBody.ts

var import_fast_xml_parser = require("fast-xml-parser");
var parseXmlBody = /* @__PURE__ */ __name(
  (streamBody, context) =>
    collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        const parser = new import_fast_xml_parser.XMLParser({
          attributeNamePrefix: "",
          htmlEntities: true,
          ignoreAttributes: false,
          ignoreDeclaration: true,
          parseTagValue: false,
          trimValues: false,
          tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : void 0),
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        let parsedObj;
        try {
          parsedObj = parser.parse(encoded, true);
        } catch (e) {
          if (e && typeof e === "object") {
            Object.defineProperty(e, "$responseBodyText", {
              value: encoded,
            });
          }
          throw e;
        }
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
          parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
          delete parsedObjToReturn[textNodeName];
        }
        return (0, import_smithy_client.getValueFromTextNode)(parsedObjToReturn);
      }
      return {};
    }),
  "parseXmlBody"
);
var parseXmlErrorBody = /* @__PURE__ */ __name(async (errorBody, context) => {
  const value = await parseXmlBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
}, "parseXmlErrorBody");
var loadRestXmlErrorCode = /* @__PURE__ */ __name((output, data) => {
  var _a;
  if (((_a = data == null ? void 0 : data.Error) == null ? void 0 : _a.Code) !== void 0) {
    return data.Error.Code;
  }
  if ((data == null ? void 0 : data.Code) !== void 0) {
    return data.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
}, "loadRestXmlErrorCode");
// Annotate the CommonJS export names for ESM import in node:

0 &&
  (module.exports = {
    emitWarningIfUnsupportedVersion,
    AwsSdkSigV4Signer,
    AWSSDKSigV4Signer,
    resolveAwsSdkSigV4Config,
    resolveAWSSDKSigV4Config,
    _toStr,
    _toBool,
    _toNum,
    awsExpectUnion,
    parseJsonBody,
    parseJsonErrorBody,
    loadRestJsonErrorCode,
    parseXmlBody,
    parseXmlErrorBody,
    loadRestXmlErrorCode,
  });
