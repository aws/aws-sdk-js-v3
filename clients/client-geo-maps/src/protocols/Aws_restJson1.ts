// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GetGlyphsCommandInput, GetGlyphsCommandOutput } from "../commands/GetGlyphsCommand";
import { GetSpritesCommandInput, GetSpritesCommandOutput } from "../commands/GetSpritesCommand";
import { GetStaticMapCommandInput, GetStaticMapCommandOutput } from "../commands/GetStaticMapCommand";
import { GetStyleDescriptorCommandInput, GetStyleDescriptorCommandOutput } from "../commands/GetStyleDescriptorCommand";
import { GetTileCommandInput, GetTileCommandOutput } from "../commands/GetTileCommand";
import { GeoMapsServiceException as __BaseException } from "../models/GeoMapsServiceException";
import {
  AccessDeniedException,
  InternalServerException,
  ThrottlingException,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";

/**
 * serializeAws_restJson1GetGlyphsCommand
 */
export const se_GetGlyphsCommand = async (
  input: GetGlyphsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/glyphs/{FontStack}/{FontUnicodeRange}");
  b.p("FontStack", () => input.FontStack!, "{FontStack}", false);
  b.p("FontUnicodeRange", () => input.FontUnicodeRange!, "{FontUnicodeRange}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSpritesCommand
 */
export const se_GetSpritesCommand = async (
  input: GetSpritesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/styles/{Style}/{ColorScheme}/{Variant}/sprites/{FileName}");
  b.p("FileName", () => input.FileName!, "{FileName}", false);
  b.p("Style", () => input.Style!, "{Style}", false);
  b.p("ColorScheme", () => input.ColorScheme!, "{ColorScheme}", false);
  b.p("Variant", () => input.Variant!, "{Variant}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetStaticMapCommand
 */
export const se_GetStaticMapCommand = async (
  input: GetStaticMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/static/{FileName}");
  b.p("FileName", () => input.FileName!, "{FileName}", false);
  const query: any = map({
    [_bb]: [, input[_BB]!],
    [_bp]: [, input[_BP]!],
    [_c]: [, input[_C]!],
    [_co]: [, input[_CO]!],
    [_go]: [, input[_GJO]!],
    [_h]: [__expectNonNull(input.Height, `Height`) != null, () => input[_H]!.toString()],
    [_k]: [, input[_K]!],
    [_p]: [() => input.Padding !== void 0, () => input[_P]!.toString()],
    [_r]: [() => input.Radius !== void 0, () => input[_R]!.toString()],
    [_su]: [, input[_SBU]!],
    [_s]: [, input[_S]!],
    [_w]: [__expectNonNull(input.Width, `Width`) != null, () => input[_W]!.toString()],
    [_z]: [() => input.Zoom !== void 0, () => (input[_Z]! % 1 == 0 ? input[_Z]! + ".0" : input[_Z]!.toString())],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetStyleDescriptorCommand
 */
export const se_GetStyleDescriptorCommand = async (
  input: GetStyleDescriptorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/styles/{Style}/descriptor");
  b.p("Style", () => input.Style!, "{Style}", false);
  const query: any = map({
    [_cs]: [, input[_CS]!],
    [_pv]: [, input[_PV]!],
    [_k]: [, input[_K]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTileCommand
 */
export const se_GetTileCommand = async (
  input: GetTileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tiles/{Tileset}/{Z}/{X}/{Y}");
  b.p("Tileset", () => input.Tileset!, "{Tileset}", false);
  b.p("Z", () => input.Z!, "{Z}", false);
  b.p("X", () => input.X!, "{X}", false);
  b.p("Y", () => input.Y!, "{Y}", false);
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1GetGlyphsCommand
 */
export const de_GetGlyphsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGlyphsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CT]: [, output.headers[_ct]],
    [_CC]: [, output.headers[_cc]],
    [_ET]: [, output.headers[_e]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetSpritesCommand
 */
export const de_GetSpritesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSpritesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CT]: [, output.headers[_ct]],
    [_CC]: [, output.headers[_cc]],
    [_ET]: [, output.headers[_e]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetStaticMapCommand
 */
export const de_GetStaticMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CT]: [, output.headers[_ct]],
    [_CC]: [, output.headers[_cc]],
    [_ET]: [, output.headers[_e]],
    [_PB]: [, output.headers[_xagpb]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetStyleDescriptorCommand
 */
export const de_GetStyleDescriptorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStyleDescriptorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CT]: [, output.headers[_ct]],
    [_CC]: [, output.headers[_cc]],
    [_ET]: [, output.headers[_e]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetTileCommand
 */
export const de_GetTileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CT]: [, output.headers[_ct]],
    [_CC]: [, output.headers[_cc]],
    [_ET]: [, output.headers[_e]],
    [_PB]: [, output.headers[_xagpb]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.geomaps#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.geomaps#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.geomaps#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.geomaps#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    FieldList: [, (_) => de_ValidationExceptionFieldList(_, context), `fieldList`],
    Message: [, __expectString, `message`],
    Reason: [, __expectString, `reason`],
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return take(output, {
    Message: [, __expectString, `message`],
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ValidationExceptionField(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _BB = "BoundingBox";
const _BP = "BoundedPositions";
const _C = "Center";
const _CC = "CacheControl";
const _CO = "CompactOverlay";
const _CS = "ColorScheme";
const _CT = "ContentType";
const _ET = "ETag";
const _GJO = "GeoJsonOverlay";
const _H = "Height";
const _K = "Key";
const _P = "Padding";
const _PB = "PricingBucket";
const _PV = "PoliticalView";
const _R = "Radius";
const _S = "Style";
const _SBU = "ScaleBarUnit";
const _W = "Width";
const _Z = "Zoom";
const _bb = "bounding-box";
const _bp = "bounded-positions";
const _c = "center";
const _cc = "cache-control";
const _co = "compact-overlay";
const _cs = "color-scheme";
const _ct = "content-type";
const _e = "etag";
const _go = "geojson-overlay";
const _h = "height";
const _k = "key";
const _p = "padding";
const _pv = "political-view";
const _r = "radius";
const _s = "style";
const _su = "scale-unit";
const _w = "width";
const _xagpb = "x-amz-geo-pricing-bucket";
const _z = "zoom";
