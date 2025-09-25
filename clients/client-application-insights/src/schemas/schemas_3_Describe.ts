// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIc,
  _AR,
  _CDA,
  _CDDG,
  _CDDI,
  _CDIGI,
  _CDS,
  _CWEDT,
  _CWEI,
  _CWES,
  _DO,
  _DOR,
  _DORe,
  _DP,
  _DPO,
  _DPOR,
  _DPORe,
  _DPR,
  _DPRe,
  _EC,
  _EE,
  _ER,
  _ERI,
  _ESc,
  _ETn,
  _F,
  _HEA,
  _HED,
  _HETC,
  _HETCe,
  _HS,
  _I,
  _In,
  _LF,
  _LG,
  _LRT,
  _LT,
  _LTo,
  _MN,
  _MNe,
  _O,
  _OI,
  _OL,
  _PI,
  _Pr,
  _RC,
  _REC,
  _REM,
  _RGN,
  _RM,
  _RO,
  _S,
  _SA,
  _SARN,
  _SEA,
  _SEN,
  _SI,
  _SL,
  _SN,
  _SNSNA,
  _SS,
  _ST,
  _STo,
  _Ti,
  _U,
  _V,
  _Va,
  _XREP,
  _XRFP,
  _XRNN,
  _XRNT,
  _XRRAL,
  _XRRC,
  _XRTP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeObservationRequest = struct(n0, _DOR, 0, [_OI, _AIc], [0, 0]);
export var DescribeObservationResponse = struct(n0, _DORe, 0, [_O], [() => Observation]);
export var DescribeProblemObservationsRequest = struct(n0, _DPOR, 0, [_PI, _AIc], [0, 0]);
export var DescribeProblemObservationsResponse = struct(n0, _DPORe, 0, [_RO], [() => RelatedObservations]);
export var DescribeProblemRequest = struct(n0, _DPR, 0, [_PI, _AIc], [0, 0]);
export var DescribeProblemResponse = struct(n0, _DPRe, 0, [_Pr, _SNSNA], [() => Problem, 0]);
export var Observation = struct(
  n0,
  _O,
  0,
  [
    _I,
    _ST,
    _ETn,
    _STo,
    _SARN,
    _LG,
    _LT,
    _LTo,
    _LF,
    _MN,
    _MNe,
    _U,
    _Va,
    _CWEI,
    _CWES,
    _CWEDT,
    _HEA,
    _HS,
    _HETC,
    _HETCe,
    _HED,
    _CDDI,
    _CDDG,
    _CDS,
    _CDA,
    _CDIGI,
    _ESc,
    _REC,
    _REM,
    _SEN,
    _SEA,
    _SA,
    _SS,
    _SI,
    _EE,
    _ER,
    _EC,
    _ERI,
    _XRFP,
    _XRTP,
    _XREP,
    _XRRC,
    _XRRAL,
    _XRNN,
    _XRNT,
  ],
  [
    0, 4, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 0, 0,
  ]
);
export var Problem = struct(
  n0,
  _Pr,
  0,
  [_I, _Ti, _SN, _In, _S, _AR, _ST, _ETn, _SL, _AIc, _RGN, _F, _RC, _LRT, _V, _RM],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 128 | 0, 1, 4, 0, 0]
);
export var RelatedObservations = struct(n0, _RO, 0, [_OL], [() => ObservationList]);
export var ObservationList = list(n0, _OL, 0, () => Observation);
export var Feedback = 128 | 0;

export var DescribeObservation = op(
  n0,
  _DO,
  0,
  () => DescribeObservationRequest,
  () => DescribeObservationResponse
);
export var DescribeProblem = op(
  n0,
  _DP,
  0,
  () => DescribeProblemRequest,
  () => DescribeProblemResponse
);
export var DescribeProblemObservations = op(
  n0,
  _DPO,
  0,
  () => DescribeProblemObservationsRequest,
  () => DescribeProblemObservationsResponse
);
