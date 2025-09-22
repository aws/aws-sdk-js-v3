// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _AA,
  _aA,
  _aAA,
  _aAI,
  _AAS,
  _aAS,
  _AASL,
  _aASL,
  _aBA,
  _aBI,
  _aK,
  _AKC,
  _aKC,
  _aL,
  _ALDC,
  _ALPC,
  _AR,
  _aR,
  _ar,
  _aT,
  _aU,
  _bN,
  _C,
  _cA,
  _CAA,
  _CAAR,
  _CAAr,
  _CAARo,
  _CAARr,
  _CAARre,
  _CI,
  _cI,
  _CID,
  _CIDR,
  _CIDRr,
  _CIR,
  _CIRr,
  _co,
  _cr,
  _cS,
  _cT,
  _D,
  _d,
  _DC,
  _dC,
  _f,
  _FS,
  _fS,
  _GAA,
  _GAAR,
  _GAARe,
  _GI,
  _GID,
  _GIDR,
  _GIDRe,
  _GIR,
  _GIRe,
  _h,
  _hQ,
  _I,
  _i,
  _iA,
  _ID,
  _iD,
  _iDI,
  _iI,
  _iT,
  _LAA,
  _LAAR,
  _LAARi,
  _mR,
  _nT,
  _OC,
  _oC,
  _p,
  _PC,
  _pC,
  _pr,
  _rU,
  _s,
  _SB,
  _sB,
  _sc,
  _sN,
  _sR,
  _st,
  _t,
  _ta,
  _tDN,
  _Te,
  _tI,
  _tIe,
  _uA,
  _UAA,
  _UAAR,
  _UAARp,
  _UID,
  _UIDR,
  _UIDRp,
  n0,
} from "./schemas_0";
import { SensitiveString2048 } from "./schemas_4_App";
import { TagList } from "./schemas_5_Create";

/* eslint no-var: 0 */

export var ApiKeyCredential = struct(n0, _AKC, 0, [_aK], [[() => SensitiveString2048, 0]]);
export var AppAuthorization = struct(
  n0,
  _AA,
  0,
  [_aAA, _aBA, _a, _t, _aT, _s, _cA, _uA, _p, _aU],
  [0, 0, 0, () => Tenant, 0, 0, 5, 5, 0, 0]
);
export var AppAuthorizationSummary = struct(n0, _AAS, 0, [_aAA, _aBA, _a, _t, _s, _uA], [0, 0, 0, () => Tenant, 0, 5]);
export var AuditLogDestinationConfiguration = struct(n0, _ALDC, 0, [_d], [() => Destination]);
export var AuditLogProcessingConfiguration = struct(n0, _ALPC, 0, [_sc, _f], [0, 0]);
export var AuthRequest = struct(n0, _AR, 0, [_rU, _co], [0, [() => SensitiveString2048, 0]]);
export var ConnectAppAuthorizationRequest = struct(
  n0,
  _CAAR,
  0,
  [_aBI, _aAI, _aR],
  [
    [0, 1],
    [0, 1],
    [() => AuthRequest, 0],
  ]
);
export var ConnectAppAuthorizationResponse = struct(n0, _CAARo, 0, [_aAS], [() => AppAuthorizationSummary]);
export var CreateAppAuthorizationRequest = struct(
  n0,
  _CAARr,
  0,
  [_aBI, _a, _cr, _t, _aT, _cT, _ta],
  [[0, 1], 0, [() => Credential, 0], () => Tenant, 0, [0, 4], () => TagList]
);
export var CreateAppAuthorizationResponse = struct(n0, _CAARre, 0, [_aA], [() => AppAuthorization]);
export var CreateIngestionDestinationRequest = struct(
  n0,
  _CIDR,
  0,
  [_aBI, _iI, _pC, _dC, _cT, _ta],
  [[0, 1], [0, 1], () => ProcessingConfiguration, () => DestinationConfiguration, [0, 4], () => TagList]
);
export var CreateIngestionDestinationResponse = struct(n0, _CIDRr, 0, [_iD], [() => IngestionDestination]);
export var CreateIngestionRequest = struct(
  n0,
  _CIR,
  0,
  [_aBI, _a, _tI, _iT, _cT, _ta],
  [[0, 1], 0, 0, 0, [0, 4], () => TagList]
);
export var CreateIngestionResponse = struct(n0, _CIRr, 0, [_i], [() => Ingestion]);
export var FirehoseStream = struct(n0, _FS, 0, [_sN], [0]);
export var GetAppAuthorizationRequest = struct(
  n0,
  _GAAR,
  0,
  [_aBI, _aAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAppAuthorizationResponse = struct(n0, _GAARe, 0, [_aA], [() => AppAuthorization]);
export var GetIngestionDestinationRequest = struct(
  n0,
  _GIDR,
  0,
  [_aBI, _iI, _iDI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetIngestionDestinationResponse = struct(n0, _GIDRe, 0, [_iD], [() => IngestionDestination]);
export var GetIngestionRequest = struct(
  n0,
  _GIR,
  0,
  [_aBI, _iI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetIngestionResponse = struct(n0, _GIRe, 0, [_i], [() => Ingestion]);
export var Ingestion = struct(n0, _I, 0, [_ar, _aBA, _a, _tI, _cA, _uA, _st, _iT], [0, 0, 0, 0, 5, 5, 0, 0]);
export var IngestionDestination = struct(
  n0,
  _ID,
  0,
  [_ar, _iA, _pC, _dC, _s, _sR, _cA, _uA],
  [0, 0, () => ProcessingConfiguration, () => DestinationConfiguration, 0, 0, 5, 5]
);
export var ListAppAuthorizationsRequest = struct(
  n0,
  _LAAR,
  0,
  [_aBI, _mR, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListAppAuthorizationsResponse = struct(n0, _LAARi, 0, [_aASL, _nT], [() => AppAuthorizationSummaryList, 0]);
export var Oauth2Credential = struct(n0, _OC, 0, [_cI, _cS], [0, [() => SensitiveString2048, 0]]);
export var S3Bucket = struct(n0, _SB, 0, [_bN, _pr], [0, 0]);
export var Tenant = struct(n0, _Te, 0, [_tIe, _tDN], [0, 0]);
export var UpdateAppAuthorizationRequest = struct(
  n0,
  _UAAR,
  0,
  [_aBI, _aAI, _cr, _t],
  [[0, 1], [0, 1], [() => Credential, 0], () => Tenant]
);
export var UpdateAppAuthorizationResponse = struct(n0, _UAARp, 0, [_aA], [() => AppAuthorization]);
export var UpdateIngestionDestinationRequest = struct(
  n0,
  _UIDR,
  0,
  [_aBI, _iI, _iDI, _dC],
  [[0, 1], [0, 1], [0, 1], () => DestinationConfiguration]
);
export var UpdateIngestionDestinationResponse = struct(n0, _UIDRp, 0, [_iD], [() => IngestionDestination]);
export var AppAuthorizationSummaryList = list(n0, _AASL, 0, () => AppAuthorizationSummary);
export var Credential = uni(
  n0,
  _C,
  0,
  [_oC, _aKC],
  [
    [() => Oauth2Credential, 0],
    [() => ApiKeyCredential, 0],
  ]
);
export var Destination = uni(n0, _D, 0, [_sB, _fS], [() => S3Bucket, () => FirehoseStream]);
export var DestinationConfiguration = uni(n0, _DC, 0, [_aL], [() => AuditLogDestinationConfiguration]);
export var ProcessingConfiguration = uni(n0, _PC, 0, [_aL], [() => AuditLogProcessingConfiguration]);
export var ConnectAppAuthorization = op(
  n0,
  _CAA,
  {
    [_h]: ["POST", "/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}/connect", 200],
  },
  () => ConnectAppAuthorizationRequest,
  () => ConnectAppAuthorizationResponse
);
export var CreateAppAuthorization = op(
  n0,
  _CAAr,
  {
    [_h]: ["POST", "/appbundles/{appBundleIdentifier}/appauthorizations", 201],
  },
  () => CreateAppAuthorizationRequest,
  () => CreateAppAuthorizationResponse
);
export var CreateIngestion = op(
  n0,
  _CI,
  {
    [_h]: ["POST", "/appbundles/{appBundleIdentifier}/ingestions", 201],
  },
  () => CreateIngestionRequest,
  () => CreateIngestionResponse
);
export var CreateIngestionDestination = op(
  n0,
  _CID,
  {
    [_h]: ["POST", "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations", 201],
  },
  () => CreateIngestionDestinationRequest,
  () => CreateIngestionDestinationResponse
);
export var GetAppAuthorization = op(
  n0,
  _GAA,
  {
    [_h]: ["GET", "/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}", 200],
  },
  () => GetAppAuthorizationRequest,
  () => GetAppAuthorizationResponse
);
export var GetIngestion = op(
  n0,
  _GI,
  {
    [_h]: ["GET", "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}", 200],
  },
  () => GetIngestionRequest,
  () => GetIngestionResponse
);
export var GetIngestionDestination = op(
  n0,
  _GID,
  {
    [_h]: [
      "GET",
      "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}",
      200,
    ],
  },
  () => GetIngestionDestinationRequest,
  () => GetIngestionDestinationResponse
);
export var ListAppAuthorizations = op(
  n0,
  _LAA,
  {
    [_h]: ["GET", "/appbundles/{appBundleIdentifier}/appauthorizations", 200],
  },
  () => ListAppAuthorizationsRequest,
  () => ListAppAuthorizationsResponse
);
export var UpdateAppAuthorization = op(
  n0,
  _UAA,
  {
    [_h]: ["PATCH", "/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}", 200],
  },
  () => UpdateAppAuthorizationRequest,
  () => UpdateAppAuthorizationResponse
);
export var UpdateIngestionDestination = op(
  n0,
  _UID,
  {
    [_h]: [
      "PATCH",
      "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}",
      200,
    ],
  },
  () => UpdateIngestionDestinationRequest,
  () => UpdateIngestionDestinationResponse
);
