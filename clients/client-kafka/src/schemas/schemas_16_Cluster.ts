// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CA,
  _cA,
  _COIL,
  _cOIL,
  _COVSl,
  _CTl,
  _cTl,
  _ET,
  _eT,
  _h,
  _hQ,
  _jN,
  _LCOV,
  _LCOVR,
  _LCOVRi,
  _lOCOVS,
  _MR,
  _mR,
  _NT,
  _nT,
  _OA,
  _oA,
  _OS,
  _oS,
  _OT,
  _oT,
  _ST,
  _sT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterOperationV2Summary = struct(
  n0,
  _COVSl,
  0,
  [_CA, _CTl, _ST, _ET, _OA, _OS, _OT],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cTl,
      },
    ],
    [
      5,
      {
        [_jN]: _sT,
      },
    ],
    [
      5,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _oA,
      },
    ],
    [
      0,
      {
        [_jN]: _oS,
      },
    ],
    [
      0,
      {
        [_jN]: _oT,
      },
    ],
  ]
);
export var ListClusterOperationsV2Request = struct(
  n0,
  _LCOVR,
  0,
  [_CA, _MR, _NT],
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
export var ListClusterOperationsV2Response = struct(
  n0,
  _LCOVRi,
  0,
  [_COIL, _NT],
  [
    [
      () => __listOfClusterOperationV2Summary,
      {
        [_jN]: _cOIL,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var __listOfClusterOperationV2Summary = list(n0, _lOCOVS, 0, [() => ClusterOperationV2Summary, 0]);
export var ListClusterOperationsV2 = op(
  n0,
  _LCOV,
  {
    [_h]: ["GET", "/api/v2/clusters/{ClusterArn}/operations", 200],
  },
  () => ListClusterOperationsV2Request,
  () => ListClusterOperationsV2Response
);
