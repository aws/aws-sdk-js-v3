export const _AC = "ActivationCode";
export const _ADE = "AccessDeniedException";
export const _CE = "ConflictException";
export const _CER = "CreateEnvironmentRequest";
export const _CERr = "CreateEnvironmentResponse";
export const _CEr = "CreateEnvironment";
export const _D = "Device";
export const _DCTM = "DeviceCreationTagsMap";
export const _DD = "DeleteDevice";
export const _DDR = "DeleteDeviceRequest";
export const _DDRe = "DeleteDeviceResponse";
export const _DDRer = "DeregisterDeviceRequest";
export const _DDRere = "DeregisterDeviceResponse";
export const _DDe = "DeregisterDevice";
export const _DE = "DesktopEndpoint";
export const _DER = "DeleteEnvironmentRequest";
export const _DERe = "DeleteEnvironmentResponse";
export const _DEe = "DeleteEnvironment";
export const _DL = "DeviceList";
export const _DN = "DeviceName";
export const _DS = "DeviceSummary";
export const _E = "Environment";
export const _EL = "EnvironmentList";
export const _EN = "EnvironmentName";
export const _ES = "EnvironmentSummary";
export const _GD = "GetDevice";
export const _GDR = "GetDeviceRequest";
export const _GDRe = "GetDeviceResponse";
export const _GE = "GetEnvironment";
export const _GER = "GetEnvironmentRequest";
export const _GERe = "GetEnvironmentResponse";
export const _GSS = "GetSoftwareSet";
export const _GSSR = "GetSoftwareSetRequest";
export const _GSSRe = "GetSoftwareSetResponse";
export const _ISE = "InternalServerException";
export const _LD = "ListDevices";
export const _LDR = "ListDevicesRequest";
export const _LDRi = "ListDevicesResponse";
export const _LE = "ListEnvironments";
export const _LER = "ListEnvironmentsRequest";
export const _LERi = "ListEnvironmentsResponse";
export const _LSS = "ListSoftwareSets";
export const _LSSR = "ListSoftwareSetsRequest";
export const _LSSRi = "ListSoftwareSetsResponse";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _MW = "MaintenanceWindow";
export const _RA = "Retry-After";
export const _RNFE = "ResourceNotFoundException";
export const _S = "Software";
export const _SL = "SoftwareList";
export const _SQEE = "ServiceQuotaExceededException";
export const _SS = "SoftwareSet";
export const _SSL = "SoftwareSetList";
export const _SSS = "SoftwareSetSummary";
export const _TE = "ThrottlingException";
export const _TK = "TagKeys";
export const _TM = "TagsMap";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _UD = "UpdateDevice";
export const _UDR = "UpdateDeviceRequest";
export const _UDRp = "UpdateDeviceResponse";
export const _UE = "UpdateEnvironment";
export const _UER = "UpdateEnvironmentRequest";
export const _UERp = "UpdateEnvironmentResponse";
export const _UI = "UserId";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _USS = "UpdateSoftwareSet";
export const _USSR = "UpdateSoftwareSetRequest";
export const _USSRp = "UpdateSoftwareSetResponse";
export const _VE = "ValidationException";
export const _VEF = "ValidationExceptionField";
export const _VEFL = "ValidationExceptionFieldList";
export const _a = "arn";
export const _aC = "activationCode";
export const _aTO = "applyTimeOf";
export const _c = "client";
export const _cA = "createdAt";
export const _cSSI = "currentSoftwareSetId";
export const _cSSV = "currentSoftwareSetVersion";
export const _cT = "clientToken";
export const _d = "device";
export const _dA = "desktopArn";
export const _dCT = "deviceCreationTags";
export const _dE = "desktopEndpoint";
export const _dOTW = "daysOfTheWeek";
export const _dSSI = "desiredSoftwareSetId";
export const _dT = "desktopType";
export const _de = "devices";
export const _e = "error";
export const _eI = "environmentId";
export const _eTH = "endTimeHour";
export const _eTM = "endTimeMinute";
export const _en = "environment";
export const _end = "endpoint";
export const _env = "environments";
export const _fL = "fieldList";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _hQ = "httpQuery";
export const _i = "id";
export const _iT = "idempotencyToken";
export const _kKA = "kmsKeyArn";
export const _lCA = "lastConnectedAt";
export const _lPA = "lastPostureAt";
export const _lUI = "lastUserId";
export const _m = "message";
export const _mR = "maxResults";
export const _mW = "maintenanceWindow";
export const _mo = "model";
export const _n = "name";
export const _nT = "nextToken";
export const _pSSI = "pendingSoftwareSetId";
export const _pSSV = "pendingSoftwareSetVersion";
export const _qC = "quotaCode";
export const _r = "reason";
export const _rA = "resourceArn";
export const _rAS = "retryAfterSeconds";
export const _rAe = "releasedAt";
export const _rDC = "registeredDevicesCount";
export const _rI = "resourceId";
export const _rT = "resourceType";
export const _s = "status";
export const _sC = "serviceCode";
export const _sN = "serialNumber";
export const _sS = "softwareSet";
export const _sSCS = "softwareSetComplianceStatus";
export const _sSUM = "softwareSetUpdateMode";
export const _sSUS = "softwareSetUpdateSchedule";
export const _sSUSo = "softwareSetUpdateStatus";
export const _sSo = "softwareSets";
export const _sTH = "startTimeHour";
export const _sTM = "startTimeMinute";
export const _sU = "supportedUntil";
export const _se = "server";
export const _so = "software";
export const _t = "tags";
export const _tDS = "targetDeviceStatus";
export const _tK = "tagKeys";
export const _ty = "type";
export const _uA = "updatedAt";
export const _v = "version";
export const _vS = "validationStatus";
export const n0 = "com.amazonaws.workspacesthinclient";

// smithy-typescript generated code
import { error, list, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import { WorkSpacesThinClientServiceException as __WorkSpacesThinClientServiceException } from "../models/WorkSpacesThinClientServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m, _rAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __InternalServerException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _sC, _qC, _rAS],
  [
    0,
    0,
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, 0]);
export var Unit = "unit" as const;

export var WorkSpacesThinClientServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.workspacesthinclient",
  "WorkSpacesThinClientServiceException",
  0,
  [],
  [],
  __WorkSpacesThinClientServiceException
);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
