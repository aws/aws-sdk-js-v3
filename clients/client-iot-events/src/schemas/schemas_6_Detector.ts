// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { UnsupportedOperationException as __UnsupportedOperationException } from "../models/index";
import {
  _cTr,
  _DDM,
  _DDMR,
  _DDMRe,
  _DDO,
  _dDO,
  _DDOe,
  _DLO,
  _DLOR,
  _DLORe,
  _dMA,
  _dMDe,
  _dMN,
  _DMS,
  _dMS,
  _DMSe,
  _dMV,
  _DMVS,
  _dMVS,
  _DMVSe,
  _e,
  _eM,
  _er,
  _h,
  _hE,
  _hQ,
  _kV,
  _LDM,
  _LDMR,
  _LDMRi,
  _LDMV,
  _LDMVR,
  _LDMVRi,
  _le,
  _LO,
  _lO,
  _lUT,
  _m,
  _mR,
  _nT,
  _PLO,
  _PLOR,
  _rA,
  _ser,
  _st,
  _UOE,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDetectorModelRequest = struct(n0, _DDMR, 0, [_dMN], [[0, 1]]);
export var DeleteDetectorModelResponse = struct(n0, _DDMRe, 0, [], []);
export var DescribeLoggingOptionsRequest = struct(n0, _DLOR, 0, [], []);
export var DescribeLoggingOptionsResponse = struct(n0, _DLORe, 0, [_lO], [() => LoggingOptions]);
export var DetectorDebugOption = struct(n0, _DDO, 0, [_dMN, _kV], [0, 0]);
export var DetectorModelSummary = struct(n0, _DMS, 0, [_dMN, _dMDe, _cTr], [0, 0, 4]);
export var DetectorModelVersionSummary = struct(
  n0,
  _DMVS,
  0,
  [_dMN, _dMV, _dMA, _rA, _cTr, _lUT, _st, _eM],
  [0, 0, 0, 0, 4, 4, 0, 0]
);
export var ListDetectorModelsRequest = struct(
  n0,
  _LDMR,
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
  ]
);
export var ListDetectorModelsResponse = struct(n0, _LDMRi, 0, [_dMS, _nT], [() => DetectorModelSummaries, 0]);
export var ListDetectorModelVersionsRequest = struct(
  n0,
  _LDMVR,
  0,
  [_dMN, _nT, _mR],
  [
    [0, 1],
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
  ]
);
export var ListDetectorModelVersionsResponse = struct(
  n0,
  _LDMVRi,
  0,
  [_dMVS, _nT],
  [() => DetectorModelVersionSummaries, 0]
);
export var LoggingOptions = struct(n0, _LO, 0, [_rA, _le, _e, _dDO], [0, 0, 2, () => DetectorDebugOptions]);
export var PutLoggingOptionsRequest = struct(n0, _PLOR, 0, [_lO], [() => LoggingOptions]);
export var UnsupportedOperationException = error(
  n0,
  _UOE,
  {
    [_er]: _ser,
    [_hE]: 501,
  },
  [_m],
  [0],

  __UnsupportedOperationException
);
export var DetectorDebugOptions = list(n0, _DDOe, 0, () => DetectorDebugOption);
export var DetectorModelSummaries = list(n0, _DMSe, 0, () => DetectorModelSummary);
export var DetectorModelVersionSummaries = list(n0, _DMVSe, 0, () => DetectorModelVersionSummary);
export var DeleteDetectorModel = op(
  n0,
  _DDM,
  {
    [_h]: ["DELETE", "/detector-models/{detectorModelName}", 204],
  },
  () => DeleteDetectorModelRequest,
  () => DeleteDetectorModelResponse
);
export var DescribeLoggingOptions = op(
  n0,
  _DLO,
  {
    [_h]: ["GET", "/logging", 200],
  },
  () => DescribeLoggingOptionsRequest,
  () => DescribeLoggingOptionsResponse
);
export var ListDetectorModels = op(
  n0,
  _LDM,
  {
    [_h]: ["GET", "/detector-models", 200],
  },
  () => ListDetectorModelsRequest,
  () => ListDetectorModelsResponse
);
export var ListDetectorModelVersions = op(
  n0,
  _LDMV,
  {
    [_h]: ["GET", "/detector-models/{detectorModelName}/versions", 200],
  },
  () => ListDetectorModelVersionsRequest,
  () => ListDetectorModelVersionsResponse
);
export var PutLoggingOptions = op(
  n0,
  _PLO,
  {
    [_h]: ["PUT", "/logging", 200],
  },
  () => PutLoggingOptionsRequest,
  () => Unit
);
