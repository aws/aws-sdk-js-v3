// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InsightNotEnabledException as __InsightNotEnabledException,
  InvalidHomeRegionException as __InvalidHomeRegionException,
  TrailNotFoundException as __TrailNotFoundException,
} from "../models/index";
import {
  _AESd,
  _aQE,
  _c,
  _CWLLGA,
  _CWLRA,
  _DR,
  _DRa,
  _DTe,
  _DTR,
  _DTRe,
  _e,
  _EDS,
  _EDSA,
  _ELFV,
  _EMES,
  _ESv,
  _ESve,
  _GES,
  _GESR,
  _GESRe,
  _GIS,
  _GISR,
  _GISRe,
  _GT,
  _GTR,
  _GTRe,
  _GTS,
  _GTSR,
  _GTSRe,
  _hE,
  _ID,
  _IGSE,
  _IHRE,
  _IL,
  _IME,
  _IMRT,
  _INEE,
  _IOT,
  _ISn,
  _ISns,
  _IT,
  _KKI,
  _LCWLDE,
  _LCWLDT,
  _LDAS,
  _LDAT,
  _LDDE,
  _LDDT,
  _LDE,
  _LDT,
  _LFVE,
  _LNAS,
  _LNAT,
  _LNE,
  _LNT,
  _M,
  _N,
  _PES,
  _PESR,
  _PESRu,
  _PIS,
  _PISR,
  _PISRu,
  _RWT,
  _SBN,
  _SKP,
  _SL,
  _SLR,
  _SLRt,
  _SLRto,
  _SLRtop,
  _SLT,
  _SLt,
  _SLTt,
  _STARN,
  _STN,
  _T,
  _TARN,
  _TLS,
  _TLSi,
  _TN,
  _TNFE,
  _Tr,
  _UTp,
  _UTR,
  _UTRp,
  _V,
  n0,
} from "./schemas_0";
import { Trail } from "./schemas_11_Trail";
import { AdvancedEventSelectors } from "./schemas_13_Event";

/* eslint no-var: 0 */

export var DataResource = struct(n0, _DR, 0, [_T, _V], [0, 64 | 0]);
export var DeleteTrailRequest = struct(n0, _DTR, 0, [_N], [0]);
export var DeleteTrailResponse = struct(n0, _DTRe, 0, [], []);
export var EventSelector = struct(n0, _ESv, 0, [_RWT, _IME, _DRa, _EMES], [0, 2, () => DataResources, 64 | 0]);
export var GetEventSelectorsRequest = struct(n0, _GESR, 0, [_TN], [0]);
export var GetEventSelectorsResponse = struct(
  n0,
  _GESRe,
  0,
  [_TARN, _ESve, _AESd],
  [0, () => EventSelectors, () => AdvancedEventSelectors]
);
export var GetInsightSelectorsRequest = struct(n0, _GISR, 0, [_TN, _EDS], [0, 0]);
export var GetInsightSelectorsResponse = struct(
  n0,
  _GISRe,
  0,
  [_TARN, _ISn, _EDSA, _ID],
  [0, () => InsightSelectors, 0, 0]
);
export var GetTrailRequest = struct(n0, _GTR, 0, [_N], [0]);
export var GetTrailResponse = struct(n0, _GTRe, 0, [_Tr], [() => Trail]);
export var GetTrailStatusRequest = struct(n0, _GTSR, 0, [_N], [0]);
export var GetTrailStatusResponse = struct(
  n0,
  _GTSRe,
  0,
  [_IL, _LDE, _LNE, _LDT, _LNT, _SLT, _SLTt, _LCWLDE, _LCWLDT, _LDDT, _LDDE, _LDAT, _LNAT, _LNAS, _LDAS, _TLS, _TLSi],
  [2, 0, 0, 4, 4, 4, 4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0]
);
export var InsightNotEnabledException = error(
  n0,
  _INEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InsightNotEnabled`, 400],
  },
  [_M],
  [0],

  __InsightNotEnabledException
);
export var InsightSelector = struct(n0, _ISns, 0, [_IT], [0]);
export var InvalidHomeRegionException = error(
  n0,
  _IHRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidHomeRegion`, 400],
  },
  [_M],
  [0],

  __InvalidHomeRegionException
);
export var PutEventSelectorsRequest = struct(
  n0,
  _PESR,
  0,
  [_TN, _ESve, _AESd],
  [0, () => EventSelectors, () => AdvancedEventSelectors]
);
export var PutEventSelectorsResponse = struct(
  n0,
  _PESRu,
  0,
  [_TARN, _ESve, _AESd],
  [0, () => EventSelectors, () => AdvancedEventSelectors]
);
export var PutInsightSelectorsRequest = struct(n0, _PISR, 0, [_TN, _ISn, _EDS, _ID], [0, () => InsightSelectors, 0, 0]);
export var PutInsightSelectorsResponse = struct(
  n0,
  _PISRu,
  0,
  [_TARN, _ISn, _EDSA, _ID],
  [0, () => InsightSelectors, 0, 0]
);
export var StartLoggingRequest = struct(n0, _SLR, 0, [_N], [0]);
export var StartLoggingResponse = struct(n0, _SLRt, 0, [], []);
export var StopLoggingRequest = struct(n0, _SLRto, 0, [_N], [0]);
export var StopLoggingResponse = struct(n0, _SLRtop, 0, [], []);
export var TrailNotFoundException = error(
  n0,
  _TNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`TrailNotFound`, 404],
  },
  [_M],
  [0],

  __TrailNotFoundException
);
export var UpdateTrailRequest = struct(
  n0,
  _UTR,
  0,
  [_N, _SBN, _SKP, _STN, _IGSE, _IMRT, _ELFV, _CWLLGA, _CWLRA, _KKI, _IOT],
  [0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2]
);
export var UpdateTrailResponse = struct(
  n0,
  _UTRp,
  0,
  [_N, _SBN, _SKP, _STN, _STARN, _IGSE, _IMRT, _TARN, _LFVE, _CWLLGA, _CWLRA, _KKI, _IOT],
  [0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 2]
);
export var DataResources = list(n0, _DRa, 0, () => DataResource);
export var DataResourceValues = 64 | 0;

export var EventSelectors = list(n0, _ESve, 0, () => EventSelector);
export var ExcludeManagementEventSources = 64 | 0;

export var InsightSelectors = list(n0, _ISn, 0, () => InsightSelector);
export var DeleteTrail = op(
  n0,
  _DTe,
  2,
  () => DeleteTrailRequest,
  () => DeleteTrailResponse
);
export var GetEventSelectors = op(
  n0,
  _GES,
  2,
  () => GetEventSelectorsRequest,
  () => GetEventSelectorsResponse
);
export var GetInsightSelectors = op(
  n0,
  _GIS,
  2,
  () => GetInsightSelectorsRequest,
  () => GetInsightSelectorsResponse
);
export var GetTrail = op(
  n0,
  _GT,
  2,
  () => GetTrailRequest,
  () => GetTrailResponse
);
export var GetTrailStatus = op(
  n0,
  _GTS,
  2,
  () => GetTrailStatusRequest,
  () => GetTrailStatusResponse
);
export var PutEventSelectors = op(
  n0,
  _PES,
  2,
  () => PutEventSelectorsRequest,
  () => PutEventSelectorsResponse
);
export var PutInsightSelectors = op(
  n0,
  _PIS,
  2,
  () => PutInsightSelectorsRequest,
  () => PutInsightSelectorsResponse
);
export var StartLogging = op(
  n0,
  _SL,
  2,
  () => StartLoggingRequest,
  () => StartLoggingResponse
);
export var StopLogging = op(
  n0,
  _SLt,
  2,
  () => StopLoggingRequest,
  () => StopLoggingResponse
);
export var UpdateTrail = op(
  n0,
  _UTp,
  2,
  () => UpdateTrailRequest,
  () => UpdateTrailResponse
);
