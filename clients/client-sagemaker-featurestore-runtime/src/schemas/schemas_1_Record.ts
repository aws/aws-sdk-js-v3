// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessForbidden as __AccessForbidden,
  InternalFailure as __InternalFailure,
  ResourceNotFound as __ResourceNotFound,
  ServiceUnavailable as __ServiceUnavailable,
  ValidationError as __ValidationError,
} from "../models/index";
import {
  _AF,
  _BGR,
  _BGRE,
  _BGREa,
  _BGRI,
  _BGRIa,
  _BGRR,
  _BGRRa,
  _BGRRD,
  _BGRRDa,
  _c,
  _DM,
  _DR,
  _DRR,
  _E,
  _e,
  _EA,
  _EC,
  _EM,
  _ET,
  _ETR,
  _FGN,
  _FN,
  _FNe,
  _FV,
  _GR,
  _GRR,
  _GRRe,
  _h,
  _hE,
  _hQ,
  _I,
  _IF,
  _M,
  _PR,
  _PRR,
  _R,
  _Re,
  _RIVAS,
  _RIVASe,
  _RNF,
  _s,
  _SU,
  _TD,
  _TS,
  _U,
  _UI,
  _V,
  _VAS,
  _VASL,
  _VE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessForbidden = error(
  n0,
  _AF,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __AccessForbidden
);
export var BatchGetRecordError = struct(n0, _BGRE, 0, [_FGN, _RIVAS, _EC, _EM], [0, 0, 0, 0]);
export var BatchGetRecordIdentifier = struct(n0, _BGRI, 0, [_FGN, _RIVASe, _FN], [0, 64 | 0, 64 | 0]);
export var BatchGetRecordRequest = struct(n0, _BGRR, 0, [_I, _ETR], [() => BatchGetRecordIdentifiers, 0]);
export var BatchGetRecordResponse = struct(
  n0,
  _BGRRa,
  0,
  [_R, _E, _UI],
  [() => BatchGetRecordResultDetails, () => BatchGetRecordErrors, () => UnprocessedIdentifiers]
);
export var BatchGetRecordResultDetail = struct(n0, _BGRRD, 0, [_FGN, _RIVAS, _Re, _EA], [0, 0, () => _Record, 0]);
export var DeleteRecordRequest = struct(
  n0,
  _DRR,
  0,
  [_FGN, _RIVAS, _ET, _TS, _DM],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _RIVAS,
      },
    ],
    [
      0,
      {
        [_hQ]: _ET,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _TS,
      },
    ],
    [
      0,
      {
        [_hQ]: _DM,
      },
    ],
  ]
);
export var FeatureValue = struct(n0, _FV, 0, [_FNe, _VAS, _VASL], [0, 0, 64 | 0]);
export var GetRecordRequest = struct(
  n0,
  _GRR,
  0,
  [_FGN, _RIVAS, _FN, _ETR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _RIVAS,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _FNe,
      },
    ],
    [
      0,
      {
        [_hQ]: _ETR,
      },
    ],
  ]
);
export var GetRecordResponse = struct(n0, _GRRe, 0, [_Re, _EA], [() => _Record, 0]);
export var InternalFailure = error(
  n0,
  _IF,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalFailure
);
export var PutRecordRequest = struct(
  n0,
  _PRR,
  0,
  [_FGN, _Re, _TS, _TD],
  [[0, 1], () => _Record, 64 | 0, () => TtlDuration]
);
export var ResourceNotFound = error(
  n0,
  _RNF,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFound
);
export var ServiceUnavailable = error(
  n0,
  _SU,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_M],
  [0],

  __ServiceUnavailable
);
export var TtlDuration = struct(n0, _TD, 0, [_U, _V], [0, 1]);
export var ValidationError = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ValidationError
);
export var Unit = "unit" as const;

export var BatchGetRecordErrors = list(n0, _BGREa, 0, () => BatchGetRecordError);
export var BatchGetRecordIdentifiers = list(n0, _BGRIa, 0, () => BatchGetRecordIdentifier);
export var BatchGetRecordResultDetails = list(n0, _BGRRDa, 0, () => BatchGetRecordResultDetail);
export var FeatureNames = 64 | 0;

export var _Record = list(n0, _Re, 0, () => FeatureValue);
export var RecordIdentifiers = 64 | 0;

export var TargetStores = 64 | 0;

export var UnprocessedIdentifiers = list(n0, _UI, 0, () => BatchGetRecordIdentifier);
export var ValueAsStringList = 64 | 0;

export var BatchGetRecord = op(
  n0,
  _BGR,
  {
    [_h]: ["POST", "/BatchGetRecord", 200],
  },
  () => BatchGetRecordRequest,
  () => BatchGetRecordResponse
);
export var DeleteRecord = op(
  n0,
  _DR,
  {
    [_h]: ["DELETE", "/FeatureGroup/{FeatureGroupName}", 200],
  },
  () => DeleteRecordRequest,
  () => Unit
);
export var GetRecord = op(
  n0,
  _GR,
  {
    [_h]: ["GET", "/FeatureGroup/{FeatureGroupName}", 200],
  },
  () => GetRecordRequest,
  () => GetRecordResponse
);
export var PutRecord = op(
  n0,
  _PR,
  {
    [_h]: ["PUT", "/FeatureGroup/{FeatureGroupName}", 200],
  },
  () => PutRecordRequest,
  () => Unit
);
