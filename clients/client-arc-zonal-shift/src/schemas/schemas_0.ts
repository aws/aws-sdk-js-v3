export const _ADE = "AccessDeniedException";
export const _AIR = "AutoshiftInResource";
export const _AIRu = "AutoshiftsInResource";
export const _AS = "AutoshiftSummary";
export const _ASu = "AutoshiftSummaries";
export const _BA = "BlockingAlarms";
export const _CC = "ControlCondition";
export const _CE = "ConflictException";
export const _CPR = "CancelPracticeRun";
export const _CPRC = "CreatePracticeRunConfiguration";
export const _CPRCR = "CreatePracticeRunConfigurationRequest";
export const _CPRCRr = "CreatePracticeRunConfigurationResponse";
export const _CPRR = "CancelPracticeRunRequest";
export const _CPRRa = "CancelPracticeRunResponse";
export const _CZS = "CancelZonalShift";
export const _CZSR = "CancelZonalShiftRequest";
export const _DPRC = "DeletePracticeRunConfiguration";
export const _DPRCR = "DeletePracticeRunConfigurationRequest";
export const _DPRCRe = "DeletePracticeRunConfigurationResponse";
export const _GAONS = "GetAutoshiftObserverNotificationStatus";
export const _GAONSR = "GetAutoshiftObserverNotificationStatusRequest";
export const _GAONSRe = "GetAutoshiftObserverNotificationStatusResponse";
export const _GMR = "GetManagedResource";
export const _GMRR = "GetManagedResourceRequest";
export const _GMRRe = "GetManagedResourceResponse";
export const _ISE = "InternalServerException";
export const _LA = "ListAutoshifts";
export const _LAR = "ListAutoshiftsRequest";
export const _LARi = "ListAutoshiftsResponse";
export const _LMR = "ListManagedResources";
export const _LMRR = "ListManagedResourcesRequest";
export const _LMRRi = "ListManagedResourcesResponse";
export const _LZS = "ListZonalShifts";
export const _LZSR = "ListZonalShiftsRequest";
export const _LZSRi = "ListZonalShiftsResponse";
export const _MRS = "ManagedResourceSummary";
export const _MRSa = "ManagedResourceSummaries";
export const _OA = "OutcomeAlarms";
export const _PRC = "PracticeRunConfiguration";
export const _RNFE = "ResourceNotFoundException";
export const _SPR = "StartPracticeRun";
export const _SPRR = "StartPracticeRunRequest";
export const _SPRRt = "StartPracticeRunResponse";
export const _SZS = "StartZonalShift";
export const _SZSR = "StartZonalShiftRequest";
export const _TE = "ThrottlingException";
export const _UAONS = "UpdateAutoshiftObserverNotificationStatus";
export const _UAONSR = "UpdateAutoshiftObserverNotificationStatusRequest";
export const _UAONSRp = "UpdateAutoshiftObserverNotificationStatusResponse";
export const _UPRC = "UpdatePracticeRunConfiguration";
export const _UPRCR = "UpdatePracticeRunConfigurationRequest";
export const _UPRCRp = "UpdatePracticeRunConfigurationResponse";
export const _UZAC = "UpdateZonalAutoshiftConfiguration";
export const _UZACR = "UpdateZonalAutoshiftConfigurationRequest";
export const _UZACRp = "UpdateZonalAutoshiftConfigurationResponse";
export const _UZS = "UpdateZonalShift";
export const _UZSR = "UpdateZonalShiftRequest";
export const _VE = "ValidationException";
export const _ZS = "ZonalShift";
export const _ZSIR = "ZonalShiftInResource";
export const _ZSIRo = "ZonalShiftsInResource";
export const _ZSS = "ZonalShiftSummary";
export const _ZSSo = "ZonalShiftSummaries";
export const _a = "arn";
export const _aF = "awayFrom";
export const _aI = "alarmIdentifier";
export const _aS = "appliedStatus";
export const _aW = "allowedWindows";
export const _aWp = "appliedWeights";
export const _aZ = "availabilityZones";
export const _au = "autoshifts";
export const _bA = "blockingAlarms";
export const _bD = "blockedDates";
export const _bW = "blockedWindows";
export const _c = "client";
export const _co = "comment";
export const _e = "error";
export const _eI = "expiresIn";
export const _eT = "endTime";
export const _eTx = "expiryTime";
export const _h = "http";
export const _hE = "httpError";
export const _hQ = "httpQuery";
export const _i = "items";
export const _m = "message";
export const _mR = "maxResults";
export const _n = "name";
export const _nT = "nextToken";
export const _oA = "outcomeAlarms";
export const _pRC = "practiceRunConfiguration";
export const _pRO = "practiceRunOutcome";
export const _pRS = "practiceRunStatus";
export const _r = "reason";
export const _rI = "resourceIdentifier";
export const _s = "status";
export const _sT = "startTime";
export const _sTh = "shiftType";
export const _se = "server";
export const _t = "type";
export const _zAS = "zonalAutoshiftStatus";
export const _zS = "zonalShifts";
export const _zSI = "zonalShiftId";
export const n0 = "com.amazonaws.arczonalshift";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { ARCZonalShiftServiceException as __ARCZonalShiftServiceException } from "../models/ARCZonalShiftServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";

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
  [_m],
  [0],

  __InternalServerException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _r],
  [0, 0],

  __ValidationException
);
export var Unit = "unit" as const;

export var ARCZonalShiftServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.arczonalshift",
  "ARCZonalShiftServiceException",
  0,
  [],
  [],
  __ARCZonalShiftServiceException
);
