const _AC = "ActivationCode";
const _ADE = "AccessDeniedException";
const _CE = "ConflictException";
const _CER = "CreateEnvironmentRequest";
const _CERr = "CreateEnvironmentResponse";
const _CEr = "CreateEnvironment";
const _D = "Device";
const _DCTM = "DeviceCreationTagsMap";
const _DD = "DeleteDevice";
const _DDR = "DeleteDeviceRequest";
const _DDRe = "DeleteDeviceResponse";
const _DDRer = "DeregisterDeviceRequest";
const _DDRere = "DeregisterDeviceResponse";
const _DDe = "DeregisterDevice";
const _DE = "DesktopEndpoint";
const _DER = "DeleteEnvironmentRequest";
const _DERe = "DeleteEnvironmentResponse";
const _DEe = "DeleteEnvironment";
const _DL = "DeviceList";
const _DN = "DeviceName";
const _DS = "DeviceSummary";
const _E = "Environment";
const _EL = "EnvironmentList";
const _EN = "EnvironmentName";
const _ES = "EnvironmentSummary";
const _GD = "GetDevice";
const _GDR = "GetDeviceRequest";
const _GDRe = "GetDeviceResponse";
const _GE = "GetEnvironment";
const _GER = "GetEnvironmentRequest";
const _GERe = "GetEnvironmentResponse";
const _GSS = "GetSoftwareSet";
const _GSSR = "GetSoftwareSetRequest";
const _GSSRe = "GetSoftwareSetResponse";
const _ISE = "InternalServerException";
const _LD = "ListDevices";
const _LDR = "ListDevicesRequest";
const _LDRi = "ListDevicesResponse";
const _LE = "ListEnvironments";
const _LER = "ListEnvironmentsRequest";
const _LERi = "ListEnvironmentsResponse";
const _LSS = "ListSoftwareSets";
const _LSSR = "ListSoftwareSetsRequest";
const _LSSRi = "ListSoftwareSetsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _MW = "MaintenanceWindow";
const _RA = "Retry-After";
const _RNFE = "ResourceNotFoundException";
const _S = "Software";
const _SL = "SoftwareList";
const _SQEE = "ServiceQuotaExceededException";
const _SS = "SoftwareSet";
const _SSL = "SoftwareSetList";
const _SSS = "SoftwareSetSummary";
const _TE = "ThrottlingException";
const _TK = "TagKeys";
const _TM = "TagsMap";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UD = "UpdateDevice";
const _UDR = "UpdateDeviceRequest";
const _UDRp = "UpdateDeviceResponse";
const _UE = "UpdateEnvironment";
const _UER = "UpdateEnvironmentRequest";
const _UERp = "UpdateEnvironmentResponse";
const _UI = "UserId";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _USS = "UpdateSoftwareSet";
const _USSR = "UpdateSoftwareSetRequest";
const _USSRp = "UpdateSoftwareSetResponse";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _a = "arn";
const _aC = "activationCode";
const _aTO = "applyTimeOf";
const _c = "client";
const _cA = "createdAt";
const _cSSI = "currentSoftwareSetId";
const _cSSV = "currentSoftwareSetVersion";
const _cT = "clientToken";
const _d = "device";
const _dA = "desktopArn";
const _dCT = "deviceCreationTags";
const _dE = "desktopEndpoint";
const _dOTW = "daysOfTheWeek";
const _dSSI = "desiredSoftwareSetId";
const _dT = "desktopType";
const _de = "devices";
const _e = "error";
const _eI = "environmentId";
const _eTH = "endTimeHour";
const _eTM = "endTimeMinute";
const _en = "environment";
const _end = "endpoint";
const _env = "environments";
const _fL = "fieldList";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _i = "id";
const _iT = "idempotencyToken";
const _kKA = "kmsKeyArn";
const _lCA = "lastConnectedAt";
const _lPA = "lastPostureAt";
const _lUI = "lastUserId";
const _m = "message";
const _mR = "maxResults";
const _mW = "maintenanceWindow";
const _mo = "model";
const _n = "name";
const _nT = "nextToken";
const _pSSI = "pendingSoftwareSetId";
const _pSSV = "pendingSoftwareSetVersion";
const _qC = "quotaCode";
const _r = "reason";
const _rA = "resourceArn";
const _rAS = "retryAfterSeconds";
const _rAe = "releasedAt";
const _rDC = "registeredDevicesCount";
const _rI = "resourceId";
const _rT = "resourceType";
const _s = "status";
const _sC = "serviceCode";
const _sN = "serialNumber";
const _sS = "softwareSet";
const _sSCS = "softwareSetComplianceStatus";
const _sSUM = "softwareSetUpdateMode";
const _sSUS = "softwareSetUpdateSchedule";
const _sSUSo = "softwareSetUpdateStatus";
const _sSo = "softwareSets";
const _sTH = "startTimeHour";
const _sTM = "startTimeMinute";
const _sU = "supportedUntil";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.workspacesthinclient";
const _so = "software";
const _t = "tags";
const _tDS = "targetDeviceStatus";
const _tK = "tagKeys";
const _ty = "type";
const _uA = "updatedAt";
const _v = "version";
const _vS = "validationStatus";
const n0 = "com.amazonaws.workspacesthinclient";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { WorkSpacesThinClientServiceException } from "../models/WorkSpacesThinClientServiceException";

/* eslint no-var: 0 */
var ActivationCode: StaticSimpleSchema = [0, n0, _AC, 8, 0];
var DesktopEndpoint: StaticSimpleSchema = [0, n0, _DE, 8, 0];
var DeviceName: StaticSimpleSchema = [0, n0, _DN, 8, 0];
var EnvironmentName: StaticSimpleSchema = [0, n0, _EN, 8, 0];
var UserId: StaticSimpleSchema = [0, n0, _UI, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_m, _rI, _rT], [0, 0, 0]];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateEnvironmentRequest$: StaticStructureSchema = [
  3,
  n0,
  _CER,
  0,
  [_n, _dA, _dE, _sSUS, _mW, _sSUM, _dSSI, _kKA, _cT, _t, _dCT],
  [
    [() => EnvironmentName, 0],
    0,
    [() => DesktopEndpoint, 0],
    0,
    () => MaintenanceWindow$,
    0,
    0,
    0,
    [0, 4],
    [() => TagsMap, 0],
    [() => DeviceCreationTagsMap, 0],
  ],
];
export var CreateEnvironmentResponse$: StaticStructureSchema = [
  3,
  n0,
  _CERr,
  0,
  [_en],
  [[() => EnvironmentSummary$, 0]],
];
export var DeleteDeviceRequest$: StaticStructureSchema = [
  3,
  n0,
  _DDR,
  0,
  [_i, _cT],
  [
    [0, 1],
    [0, { [_hQ]: _cT, [_iT]: 1 }],
  ],
];
export var DeleteDeviceResponse$: StaticStructureSchema = [3, n0, _DDRe, 0, [], []];
export var DeleteEnvironmentRequest$: StaticStructureSchema = [
  3,
  n0,
  _DER,
  0,
  [_i, _cT],
  [
    [0, 1],
    [0, { [_hQ]: _cT, [_iT]: 1 }],
  ],
];
export var DeleteEnvironmentResponse$: StaticStructureSchema = [3, n0, _DERe, 0, [], []];
export var DeregisterDeviceRequest$: StaticStructureSchema = [3, n0, _DDRer, 0, [_i, _tDS, _cT], [[0, 1], 0, [0, 4]]];
export var DeregisterDeviceResponse$: StaticStructureSchema = [3, n0, _DDRere, 0, [], []];
export var Device$: StaticStructureSchema = [
  3,
  n0,
  _D,
  0,
  [
    _i,
    _sN,
    _n,
    _mo,
    _eI,
    _s,
    _cSSI,
    _cSSV,
    _dSSI,
    _pSSI,
    _pSSV,
    _sSUS,
    _sSCS,
    _sSUSo,
    _lCA,
    _lPA,
    _cA,
    _uA,
    _a,
    _kKA,
    _lUI,
  ],
  [0, 0, [() => DeviceName, 0], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, [() => UserId, 0]],
];
export var DeviceSummary$: StaticStructureSchema = [
  3,
  n0,
  _DS,
  0,
  [_i, _sN, _n, _mo, _eI, _s, _cSSI, _dSSI, _pSSI, _sSUS, _lCA, _lPA, _cA, _uA, _a, _lUI],
  [0, 0, [() => DeviceName, 0], 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, [() => UserId, 0]],
];
export var Environment$: StaticStructureSchema = [
  3,
  n0,
  _E,
  0,
  [_i, _n, _dA, _dE, _dT, _aC, _rDC, _sSUS, _mW, _sSUM, _dSSI, _pSSI, _pSSV, _sSCS, _cA, _uA, _a, _kKA, _dCT],
  [
    0,
    [() => EnvironmentName, 0],
    0,
    [() => DesktopEndpoint, 0],
    0,
    [() => ActivationCode, 0],
    1,
    0,
    () => MaintenanceWindow$,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    [() => DeviceCreationTagsMap, 0],
  ],
];
export var EnvironmentSummary$: StaticStructureSchema = [
  3,
  n0,
  _ES,
  0,
  [_i, _n, _dA, _dE, _dT, _aC, _sSUS, _mW, _sSUM, _dSSI, _pSSI, _cA, _uA, _a],
  [
    0,
    [() => EnvironmentName, 0],
    0,
    [() => DesktopEndpoint, 0],
    0,
    [() => ActivationCode, 0],
    0,
    () => MaintenanceWindow$,
    0,
    0,
    0,
    4,
    4,
    0,
  ],
];
export var GetDeviceRequest$: StaticStructureSchema = [3, n0, _GDR, 0, [_i], [[0, 1]]];
export var GetDeviceResponse$: StaticStructureSchema = [3, n0, _GDRe, 0, [_d], [[() => Device$, 0]]];
export var GetEnvironmentRequest$: StaticStructureSchema = [3, n0, _GER, 0, [_i], [[0, 1]]];
export var GetEnvironmentResponse$: StaticStructureSchema = [3, n0, _GERe, 0, [_en], [[() => Environment$, 0]]];
export var GetSoftwareSetRequest$: StaticStructureSchema = [3, n0, _GSSR, 0, [_i], [[0, 1]]];
export var GetSoftwareSetResponse$: StaticStructureSchema = [3, n0, _GSSRe, 0, [_sS], [() => SoftwareSet$]];
export var InternalServerException$: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m, _rAS],
  [0, [1, { [_hH]: _RA }]],
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ListDevicesRequest$: StaticStructureSchema = [
  3,
  n0,
  _LDR,
  0,
  [_nT, _mR],
  [
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListDevicesResponse$: StaticStructureSchema = [3, n0, _LDRi, 0, [_de, _nT], [[() => DeviceList, 0], 0]];
export var ListEnvironmentsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LER,
  0,
  [_nT, _mR],
  [
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListEnvironmentsResponse$: StaticStructureSchema = [
  3,
  n0,
  _LERi,
  0,
  [_env, _nT],
  [[() => EnvironmentList, 0], 0],
];
export var ListSoftwareSetsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LSSR,
  0,
  [_nT, _mR],
  [
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListSoftwareSetsResponse$: StaticStructureSchema = [
  3,
  n0,
  _LSSRi,
  0,
  [_sSo, _nT],
  [() => SoftwareSetList, 0],
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rA], [[0, 1]]];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_t], [[() => TagsMap, 0]]];
export var MaintenanceWindow$: StaticStructureSchema = [
  3,
  n0,
  _MW,
  0,
  [_ty, _sTH, _sTM, _eTH, _eTM, _dOTW, _aTO],
  [0, 1, 1, 1, 1, 64 | 0, 0],
];
export var ResourceNotFoundException$: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var Software$: StaticStructureSchema = [3, n0, _S, 0, [_n, _v], [0, 0]];
export var SoftwareSet$: StaticStructureSchema = [
  3,
  n0,
  _SS,
  0,
  [_i, _v, _rAe, _sU, _vS, _so, _a],
  [0, 0, 4, 4, 0, () => SoftwareList, 0],
];
export var SoftwareSetSummary$: StaticStructureSchema = [
  3,
  n0,
  _SSS,
  0,
  [_i, _v, _rAe, _sU, _vS, _a],
  [0, 0, 4, 4, 0, 0],
];
export var TagResourceRequest$: StaticStructureSchema = [
  3,
  n0,
  _TRR,
  0,
  [_rA, _t],
  [
    [0, 1],
    [() => TagsMap, 0],
  ],
];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException$: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _sC, _qC, _rAS],
  [0, 0, 0, [1, { [_hH]: _RA }]],
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UntagResourceRequest$: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [() => TagKeys, { [_hQ]: _tK }],
  ],
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateDeviceRequest$: StaticStructureSchema = [
  3,
  n0,
  _UDR,
  0,
  [_i, _n, _dSSI, _sSUS],
  [[0, 1], [() => DeviceName, 0], 0, 0],
];
export var UpdateDeviceResponse$: StaticStructureSchema = [3, n0, _UDRp, 0, [_d], [[() => DeviceSummary$, 0]]];
export var UpdateEnvironmentRequest$: StaticStructureSchema = [
  3,
  n0,
  _UER,
  0,
  [_i, _n, _dA, _dE, _sSUS, _mW, _sSUM, _dSSI, _dCT],
  [
    [0, 1],
    [() => EnvironmentName, 0],
    0,
    [() => DesktopEndpoint, 0],
    0,
    () => MaintenanceWindow$,
    0,
    0,
    [() => DeviceCreationTagsMap, 0],
  ],
];
export var UpdateEnvironmentResponse$: StaticStructureSchema = [
  3,
  n0,
  _UERp,
  0,
  [_en],
  [[() => EnvironmentSummary$, 0]],
];
export var UpdateSoftwareSetRequest$: StaticStructureSchema = [3, n0, _USSR, 0, [_i, _vS], [[0, 1], 0]];
export var UpdateSoftwareSetResponse$: StaticStructureSchema = [3, n0, _USSRp, 0, [], []];
export var ValidationException$: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var WorkSpacesThinClientServiceException$: StaticErrorSchema = [
  -3,
  _sm,
  "WorkSpacesThinClientServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(WorkSpacesThinClientServiceException$, WorkSpacesThinClientServiceException);
var DayOfWeekList = 64 | 0;
var DeviceList: StaticListSchema = [1, n0, _DL, 0, [() => DeviceSummary$, 0]];
var EnvironmentList: StaticListSchema = [1, n0, _EL, 0, [() => EnvironmentSummary$, 0]];
var SoftwareList: StaticListSchema = [1, n0, _SL, 0, () => Software$];
var SoftwareSetList: StaticListSchema = [1, n0, _SSL, 0, () => SoftwareSetSummary$];
var TagKeys: StaticListSchema = [1, n0, _TK, 8, 0];
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField$];
var DeviceCreationTagsMap: StaticMapSchema = [2, n0, _DCTM, 8, 0, 0];
var TagsMap: StaticMapSchema = [2, n0, _TM, 8, 0, 0];
export var CreateEnvironment$: StaticOperationSchema = [
  9,
  n0,
  _CEr,
  { [_end]: ["api."], [_h]: ["POST", "/environments", 201] },
  () => CreateEnvironmentRequest$,
  () => CreateEnvironmentResponse$,
];
export var DeleteDevice$: StaticOperationSchema = [
  9,
  n0,
  _DD,
  { [_end]: ["api."], [_h]: ["DELETE", "/devices/{id}", 204] },
  () => DeleteDeviceRequest$,
  () => DeleteDeviceResponse$,
];
export var DeleteEnvironment$: StaticOperationSchema = [
  9,
  n0,
  _DEe,
  { [_end]: ["api."], [_h]: ["DELETE", "/environments/{id}", 204] },
  () => DeleteEnvironmentRequest$,
  () => DeleteEnvironmentResponse$,
];
export var DeregisterDevice$: StaticOperationSchema = [
  9,
  n0,
  _DDe,
  { [_end]: ["api."], [_h]: ["POST", "/deregister-device/{id}", 202] },
  () => DeregisterDeviceRequest$,
  () => DeregisterDeviceResponse$,
];
export var GetDevice$: StaticOperationSchema = [
  9,
  n0,
  _GD,
  { [_end]: ["api."], [_h]: ["GET", "/devices/{id}", 200] },
  () => GetDeviceRequest$,
  () => GetDeviceResponse$,
];
export var GetEnvironment$: StaticOperationSchema = [
  9,
  n0,
  _GE,
  { [_end]: ["api."], [_h]: ["GET", "/environments/{id}", 200] },
  () => GetEnvironmentRequest$,
  () => GetEnvironmentResponse$,
];
export var GetSoftwareSet$: StaticOperationSchema = [
  9,
  n0,
  _GSS,
  { [_end]: ["api."], [_h]: ["GET", "/softwaresets/{id}", 200] },
  () => GetSoftwareSetRequest$,
  () => GetSoftwareSetResponse$,
];
export var ListDevices$: StaticOperationSchema = [
  9,
  n0,
  _LD,
  { [_end]: ["api."], [_h]: ["GET", "/devices", 200] },
  () => ListDevicesRequest$,
  () => ListDevicesResponse$,
];
export var ListEnvironments$: StaticOperationSchema = [
  9,
  n0,
  _LE,
  { [_end]: ["api."], [_h]: ["GET", "/environments", 200] },
  () => ListEnvironmentsRequest$,
  () => ListEnvironmentsResponse$,
];
export var ListSoftwareSets$: StaticOperationSchema = [
  9,
  n0,
  _LSS,
  { [_end]: ["api."], [_h]: ["GET", "/softwaresets", 200] },
  () => ListSoftwareSetsRequest$,
  () => ListSoftwareSetsResponse$,
];
export var ListTagsForResource$: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_end]: ["api."], [_h]: ["GET", "/tags/{resourceArn}", 200] },
  () => ListTagsForResourceRequest$,
  () => ListTagsForResourceResponse$,
];
export var TagResource$: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_end]: ["api."], [_h]: ["POST", "/tags/{resourceArn}", 200] },
  () => TagResourceRequest$,
  () => TagResourceResponse$,
];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_end]: ["api."], [_h]: ["DELETE", "/tags/{resourceArn}", 200] },
  () => UntagResourceRequest$,
  () => UntagResourceResponse$,
];
export var UpdateDevice$: StaticOperationSchema = [
  9,
  n0,
  _UD,
  { [_end]: ["api."], [_h]: ["PATCH", "/devices/{id}", 200] },
  () => UpdateDeviceRequest$,
  () => UpdateDeviceResponse$,
];
export var UpdateEnvironment$: StaticOperationSchema = [
  9,
  n0,
  _UE,
  { [_end]: ["api."], [_h]: ["PATCH", "/environments/{id}", 200] },
  () => UpdateEnvironmentRequest$,
  () => UpdateEnvironmentResponse$,
];
export var UpdateSoftwareSet$: StaticOperationSchema = [
  9,
  n0,
  _USS,
  { [_end]: ["api."], [_h]: ["PATCH", "/softwaresets/{id}", 204] },
  () => UpdateSoftwareSetRequest$,
  () => UpdateSoftwareSetResponse$,
];
