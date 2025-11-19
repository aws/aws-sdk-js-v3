const _ADE = "AccessDeniedException";
const _AIR = "AutoshiftInResource";
const _AIRu = "AutoshiftsInResource";
const _AS = "AutoshiftSummary";
const _ASu = "AutoshiftSummaries";
const _BA = "BlockingAlarms";
const _CC = "ControlCondition";
const _CE = "ConflictException";
const _CPR = "CancelPracticeRun";
const _CPRC = "CreatePracticeRunConfiguration";
const _CPRCR = "CreatePracticeRunConfigurationRequest";
const _CPRCRr = "CreatePracticeRunConfigurationResponse";
const _CPRR = "CancelPracticeRunRequest";
const _CPRRa = "CancelPracticeRunResponse";
const _CZS = "CancelZonalShift";
const _CZSR = "CancelZonalShiftRequest";
const _DPRC = "DeletePracticeRunConfiguration";
const _DPRCR = "DeletePracticeRunConfigurationRequest";
const _DPRCRe = "DeletePracticeRunConfigurationResponse";
const _GAONS = "GetAutoshiftObserverNotificationStatus";
const _GAONSR = "GetAutoshiftObserverNotificationStatusRequest";
const _GAONSRe = "GetAutoshiftObserverNotificationStatusResponse";
const _GMR = "GetManagedResource";
const _GMRR = "GetManagedResourceRequest";
const _GMRRe = "GetManagedResourceResponse";
const _ISE = "InternalServerException";
const _LA = "ListAutoshifts";
const _LAR = "ListAutoshiftsRequest";
const _LARi = "ListAutoshiftsResponse";
const _LMR = "ListManagedResources";
const _LMRR = "ListManagedResourcesRequest";
const _LMRRi = "ListManagedResourcesResponse";
const _LZS = "ListZonalShifts";
const _LZSR = "ListZonalShiftsRequest";
const _LZSRi = "ListZonalShiftsResponse";
const _MRS = "ManagedResourceSummary";
const _MRSa = "ManagedResourceSummaries";
const _OA = "OutcomeAlarms";
const _PRC = "PracticeRunConfiguration";
const _RNFE = "ResourceNotFoundException";
const _SPR = "StartPracticeRun";
const _SPRR = "StartPracticeRunRequest";
const _SPRRt = "StartPracticeRunResponse";
const _SZS = "StartZonalShift";
const _SZSR = "StartZonalShiftRequest";
const _TE = "ThrottlingException";
const _UAONS = "UpdateAutoshiftObserverNotificationStatus";
const _UAONSR = "UpdateAutoshiftObserverNotificationStatusRequest";
const _UAONSRp = "UpdateAutoshiftObserverNotificationStatusResponse";
const _UPRC = "UpdatePracticeRunConfiguration";
const _UPRCR = "UpdatePracticeRunConfigurationRequest";
const _UPRCRp = "UpdatePracticeRunConfigurationResponse";
const _UZAC = "UpdateZonalAutoshiftConfiguration";
const _UZACR = "UpdateZonalAutoshiftConfigurationRequest";
const _UZACRp = "UpdateZonalAutoshiftConfigurationResponse";
const _UZS = "UpdateZonalShift";
const _UZSR = "UpdateZonalShiftRequest";
const _VE = "ValidationException";
const _ZS = "ZonalShift";
const _ZSIR = "ZonalShiftInResource";
const _ZSIRo = "ZonalShiftsInResource";
const _ZSS = "ZonalShiftSummary";
const _ZSSo = "ZonalShiftSummaries";
const _a = "arn";
const _aF = "awayFrom";
const _aI = "alarmIdentifier";
const _aS = "appliedStatus";
const _aW = "allowedWindows";
const _aWp = "appliedWeights";
const _aZ = "availabilityZones";
const _au = "autoshifts";
const _bA = "blockingAlarms";
const _bD = "blockedDates";
const _bW = "blockedWindows";
const _c = "client";
const _co = "comment";
const _e = "error";
const _eI = "expiresIn";
const _eT = "endTime";
const _eTx = "expiryTime";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _i = "items";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _oA = "outcomeAlarms";
const _pRC = "practiceRunConfiguration";
const _pRO = "practiceRunOutcome";
const _pRS = "practiceRunStatus";
const _r = "reason";
const _rI = "resourceIdentifier";
const _s = "status";
const _sT = "startTime";
const _sTh = "shiftType";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.arczonalshift";
const _t = "type";
const _zAS = "zonalAutoshiftStatus";
const _zS = "zonalShifts";
const _zSI = "zonalShiftId";
const n0 = "com.amazonaws.arczonalshift";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { ARCZonalShiftServiceException as __ARCZonalShiftServiceException } from "../models/ARCZonalShiftServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var AutoshiftInResource: StaticStructureSchema = [3, n0, _AIR, 0, [_aS, _aF, _sT], [0, 0, 4]];
export var AutoshiftSummary: StaticStructureSchema = [3, n0, _AS, 0, [_aF, _eT, _sT, _s], [0, 4, 4, 0]];
export var CancelPracticeRunRequest: StaticStructureSchema = [3, n0, _CPRR, 0, [_zSI], [[0, 1]]];
export var CancelPracticeRunResponse: StaticStructureSchema = [
  3,
  n0,
  _CPRRa,
  0,
  [_zSI, _rI, _aF, _eTx, _sT, _s, _co],
  [0, 0, 0, 4, 4, 0, 0],
];
export var CancelZonalShiftRequest: StaticStructureSchema = [3, n0, _CZSR, 0, [_zSI], [[0, 1]]];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _r, _zSI],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var ControlCondition: StaticStructureSchema = [3, n0, _CC, 0, [_t, _aI], [0, 0]];
export var CreatePracticeRunConfigurationRequest: StaticStructureSchema = [
  3,
  n0,
  _CPRCR,
  0,
  [_rI, _bW, _bD, _bA, _aW, _oA],
  [0, 64 | 0, 64 | 0, () => BlockingAlarms, 64 | 0, () => OutcomeAlarms],
];
export var CreatePracticeRunConfigurationResponse: StaticStructureSchema = [
  3,
  n0,
  _CPRCRr,
  0,
  [_a, _n, _zAS, _pRC],
  [0, 0, 0, () => PracticeRunConfiguration],
];
export var DeletePracticeRunConfigurationRequest: StaticStructureSchema = [3, n0, _DPRCR, 0, [_rI], [[0, 1]]];
export var DeletePracticeRunConfigurationResponse: StaticStructureSchema = [
  3,
  n0,
  _DPRCRe,
  0,
  [_a, _n, _zAS],
  [0, 0, 0],
];
export var GetAutoshiftObserverNotificationStatusRequest: StaticStructureSchema = [3, n0, _GAONSR, 0, [], []];
export var GetAutoshiftObserverNotificationStatusResponse: StaticStructureSchema = [3, n0, _GAONSRe, 0, [_s], [0]];
export var GetManagedResourceRequest: StaticStructureSchema = [3, n0, _GMRR, 0, [_rI], [[0, 1]]];
export var GetManagedResourceResponse: StaticStructureSchema = [
  3,
  n0,
  _GMRRe,
  0,
  [_a, _n, _aWp, _zS, _au, _pRC, _zAS],
  [0, 0, 128 | 1, () => ZonalShiftsInResource, () => AutoshiftsInResource, () => PracticeRunConfiguration, 0],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListAutoshiftsRequest: StaticStructureSchema = [
  3,
  n0,
  _LAR,
  0,
  [_nT, _s, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ],
];
export var ListAutoshiftsResponse: StaticStructureSchema = [3, n0, _LARi, 0, [_i, _nT], [() => AutoshiftSummaries, 0]];
export var ListManagedResourcesRequest: StaticStructureSchema = [
  3,
  n0,
  _LMRR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ],
];
export var ListManagedResourcesResponse: StaticStructureSchema = [
  3,
  n0,
  _LMRRi,
  0,
  [_i, _nT],
  [() => ManagedResourceSummaries, 0],
];
export var ListZonalShiftsRequest: StaticStructureSchema = [
  3,
  n0,
  _LZSR,
  0,
  [_nT, _s, _mR, _rI],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _rI,
      },
    ],
  ],
];
export var ListZonalShiftsResponse: StaticStructureSchema = [
  3,
  n0,
  _LZSRi,
  0,
  [_i, _nT],
  [() => ZonalShiftSummaries, 0],
];
export var ManagedResourceSummary: StaticStructureSchema = [
  3,
  n0,
  _MRS,
  0,
  [_a, _n, _aZ, _aWp, _zS, _au, _zAS, _pRS],
  [0, 0, 64 | 0, 128 | 1, () => ZonalShiftsInResource, () => AutoshiftsInResource, 0, 0],
];
export var PracticeRunConfiguration: StaticStructureSchema = [
  3,
  n0,
  _PRC,
  0,
  [_bA, _oA, _bW, _aW, _bD],
  [() => BlockingAlarms, () => OutcomeAlarms, 64 | 0, 64 | 0, 64 | 0],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var StartPracticeRunRequest: StaticStructureSchema = [3, n0, _SPRR, 0, [_rI, _aF, _co], [0, 0, 0]];
export var StartPracticeRunResponse: StaticStructureSchema = [
  3,
  n0,
  _SPRRt,
  0,
  [_zSI, _rI, _aF, _eTx, _sT, _s, _co],
  [0, 0, 0, 4, 4, 0, 0],
];
export var StartZonalShiftRequest: StaticStructureSchema = [3, n0, _SZSR, 0, [_rI, _aF, _eI, _co], [0, 0, 0, 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UpdateAutoshiftObserverNotificationStatusRequest: StaticStructureSchema = [3, n0, _UAONSR, 0, [_s], [0]];
export var UpdateAutoshiftObserverNotificationStatusResponse: StaticStructureSchema = [3, n0, _UAONSRp, 0, [_s], [0]];
export var UpdatePracticeRunConfigurationRequest: StaticStructureSchema = [
  3,
  n0,
  _UPRCR,
  0,
  [_rI, _bW, _bD, _bA, _aW, _oA],
  [[0, 1], 64 | 0, 64 | 0, () => BlockingAlarms, 64 | 0, () => OutcomeAlarms],
];
export var UpdatePracticeRunConfigurationResponse: StaticStructureSchema = [
  3,
  n0,
  _UPRCRp,
  0,
  [_a, _n, _zAS, _pRC],
  [0, 0, 0, () => PracticeRunConfiguration],
];
export var UpdateZonalAutoshiftConfigurationRequest: StaticStructureSchema = [
  3,
  n0,
  _UZACR,
  0,
  [_rI, _zAS],
  [[0, 1], 0],
];
export var UpdateZonalAutoshiftConfigurationResponse: StaticStructureSchema = [3, n0, _UZACRp, 0, [_rI, _zAS], [0, 0]];
export var UpdateZonalShiftRequest: StaticStructureSchema = [3, n0, _UZSR, 0, [_zSI, _co, _eI], [[0, 1], 0, 0]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _r],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var ZonalShift: StaticStructureSchema = [
  3,
  n0,
  _ZS,
  0,
  [_zSI, _rI, _aF, _eTx, _sT, _s, _co],
  [0, 0, 0, 4, 4, 0, 0],
];
export var ZonalShiftInResource: StaticStructureSchema = [
  3,
  n0,
  _ZSIR,
  0,
  [_aS, _zSI, _rI, _aF, _eTx, _sT, _co, _sTh, _pRO],
  [0, 0, 0, 0, 4, 4, 0, 0, 0],
];
export var ZonalShiftSummary: StaticStructureSchema = [
  3,
  n0,
  _ZSS,
  0,
  [_zSI, _rI, _aF, _eTx, _sT, _s, _co, _sTh, _pRO],
  [0, 0, 0, 4, 4, 0, 0, 0, 0],
];
export var __Unit = "unit" as const;

export var ARCZonalShiftServiceException: StaticErrorSchema = [-3, _sm, "ARCZonalShiftServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(ARCZonalShiftServiceException, __ARCZonalShiftServiceException);

export var AllowedWindows = 64 | 0;

export var AutoshiftsInResource: StaticListSchema = [1, n0, _AIRu, 0, () => AutoshiftInResource];
export var AutoshiftSummaries: StaticListSchema = [1, n0, _ASu, 0, () => AutoshiftSummary];
export var AvailabilityZones = 64 | 0;

export var BlockedDates = 64 | 0;

export var BlockedWindows = 64 | 0;

export var BlockingAlarms: StaticListSchema = [1, n0, _BA, 0, () => ControlCondition];
export var ManagedResourceSummaries: StaticListSchema = [1, n0, _MRSa, 0, () => ManagedResourceSummary];
export var OutcomeAlarms: StaticListSchema = [1, n0, _OA, 0, () => ControlCondition];
export var ZonalShiftsInResource: StaticListSchema = [1, n0, _ZSIRo, 0, () => ZonalShiftInResource];
export var ZonalShiftSummaries: StaticListSchema = [1, n0, _ZSSo, 0, () => ZonalShiftSummary];
export var AppliedWeights = 128 | 1;

export var CancelPracticeRun: StaticOperationSchema = [
  9,
  n0,
  _CPR,
  {
    [_h]: ["DELETE", "/practiceruns/{zonalShiftId}", 200],
  },
  () => CancelPracticeRunRequest,
  () => CancelPracticeRunResponse,
];
export var CancelZonalShift: StaticOperationSchema = [
  9,
  n0,
  _CZS,
  {
    [_h]: ["DELETE", "/zonalshifts/{zonalShiftId}", 200],
  },
  () => CancelZonalShiftRequest,
  () => ZonalShift,
];
export var CreatePracticeRunConfiguration: StaticOperationSchema = [
  9,
  n0,
  _CPRC,
  {
    [_h]: ["POST", "/configuration", 201],
  },
  () => CreatePracticeRunConfigurationRequest,
  () => CreatePracticeRunConfigurationResponse,
];
export var DeletePracticeRunConfiguration: StaticOperationSchema = [
  9,
  n0,
  _DPRC,
  {
    [_h]: ["DELETE", "/configuration/{resourceIdentifier}", 200],
  },
  () => DeletePracticeRunConfigurationRequest,
  () => DeletePracticeRunConfigurationResponse,
];
export var GetAutoshiftObserverNotificationStatus: StaticOperationSchema = [
  9,
  n0,
  _GAONS,
  {
    [_h]: ["GET", "/autoshift-observer-notification", 200],
  },
  () => GetAutoshiftObserverNotificationStatusRequest,
  () => GetAutoshiftObserverNotificationStatusResponse,
];
export var GetManagedResource: StaticOperationSchema = [
  9,
  n0,
  _GMR,
  {
    [_h]: ["GET", "/managedresources/{resourceIdentifier}", 200],
  },
  () => GetManagedResourceRequest,
  () => GetManagedResourceResponse,
];
export var ListAutoshifts: StaticOperationSchema = [
  9,
  n0,
  _LA,
  {
    [_h]: ["GET", "/autoshifts", 200],
  },
  () => ListAutoshiftsRequest,
  () => ListAutoshiftsResponse,
];
export var ListManagedResources: StaticOperationSchema = [
  9,
  n0,
  _LMR,
  {
    [_h]: ["GET", "/managedresources", 200],
  },
  () => ListManagedResourcesRequest,
  () => ListManagedResourcesResponse,
];
export var ListZonalShifts: StaticOperationSchema = [
  9,
  n0,
  _LZS,
  {
    [_h]: ["GET", "/zonalshifts", 200],
  },
  () => ListZonalShiftsRequest,
  () => ListZonalShiftsResponse,
];
export var StartPracticeRun: StaticOperationSchema = [
  9,
  n0,
  _SPR,
  {
    [_h]: ["POST", "/practiceruns", 200],
  },
  () => StartPracticeRunRequest,
  () => StartPracticeRunResponse,
];
export var StartZonalShift: StaticOperationSchema = [
  9,
  n0,
  _SZS,
  {
    [_h]: ["POST", "/zonalshifts", 201],
  },
  () => StartZonalShiftRequest,
  () => ZonalShift,
];
export var UpdateAutoshiftObserverNotificationStatus: StaticOperationSchema = [
  9,
  n0,
  _UAONS,
  {
    [_h]: ["PUT", "/autoshift-observer-notification", 200],
  },
  () => UpdateAutoshiftObserverNotificationStatusRequest,
  () => UpdateAutoshiftObserverNotificationStatusResponse,
];
export var UpdatePracticeRunConfiguration: StaticOperationSchema = [
  9,
  n0,
  _UPRC,
  {
    [_h]: ["PATCH", "/configuration/{resourceIdentifier}", 200],
  },
  () => UpdatePracticeRunConfigurationRequest,
  () => UpdatePracticeRunConfigurationResponse,
];
export var UpdateZonalAutoshiftConfiguration: StaticOperationSchema = [
  9,
  n0,
  _UZAC,
  {
    [_h]: ["PUT", "/managedresources/{resourceIdentifier}", 200],
  },
  () => UpdateZonalAutoshiftConfigurationRequest,
  () => UpdateZonalAutoshiftConfigurationResponse,
];
export var UpdateZonalShift: StaticOperationSchema = [
  9,
  n0,
  _UZS,
  {
    [_h]: ["PATCH", "/zonalshifts/{zonalShiftId}", 200],
  },
  () => UpdateZonalShiftRequest,
  () => ZonalShift,
];
