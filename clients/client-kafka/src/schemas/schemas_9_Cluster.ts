// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AENII,
  _aENII,
  _ATCT,
  _aTCT,
  _BI,
  _bI,
  _BNI,
  _bNI,
  _BSI,
  _CA,
  _CAo,
  _cAo,
  _CBSI,
  _cBSI,
  _CNI,
  _cNI,
  _CR,
  _cR,
  _CSl,
  _cSl,
  _CVIA,
  _cVIA,
  _E,
  _en,
  _h,
  _hQ,
  _IT,
  _iT,
  _jN,
  _KV,
  _kV,
  _LN,
  _LNR,
  _LNRi,
  _lONI,
  _MR,
  _mR,
  _NARN,
  _nARN,
  _NI,
  _NIL,
  _nIL,
  _NT,
  _nT,
  _NTo,
  _nTo,
  _ZIo,
  _zIo,
  _ZNI,
  _zNI,
  _ZV,
  _zV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BrokerNodeInfo = struct(
  n0,
  _BNI,
  0,
  [_AENII, _BI, _CSl, _CVIA, _CBSI, _E],
  [
    [
      0,
      {
        [_jN]: _aENII,
      },
    ],
    [
      1,
      {
        [_jN]: _bI,
      },
    ],
    [
      0,
      {
        [_jN]: _cSl,
      },
    ],
    [
      0,
      {
        [_jN]: _cVIA,
      },
    ],
    [
      () => BrokerSoftwareInfo,
      {
        [_jN]: _cBSI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _en,
      },
    ],
  ]
);
export var BrokerSoftwareInfo = struct(
  n0,
  _BSI,
  0,
  [_CAo, _CR, _KV],
  [
    [
      0,
      {
        [_jN]: _cAo,
      },
    ],
    [
      1,
      {
        [_jN]: _cR,
      },
    ],
    [
      0,
      {
        [_jN]: _kV,
      },
    ],
  ]
);
export var ControllerNodeInfo = struct(
  n0,
  _CNI,
  0,
  [_E],
  [
    [
      64 | 0,
      {
        [_jN]: _en,
      },
    ],
  ]
);
export var ListNodesRequest = struct(
  n0,
  _LNR,
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
export var ListNodesResponse = struct(
  n0,
  _LNRi,
  0,
  [_NT, _NIL],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfNodeInfo,
      {
        [_jN]: _nIL,
      },
    ],
  ]
);
export var NodeInfo = struct(
  n0,
  _NI,
  0,
  [_ATCT, _BNI, _CNI, _IT, _NARN, _NTo, _ZNI],
  [
    [
      0,
      {
        [_jN]: _aTCT,
      },
    ],
    [
      () => BrokerNodeInfo,
      {
        [_jN]: _bNI,
      },
    ],
    [
      () => ControllerNodeInfo,
      {
        [_jN]: _cNI,
      },
    ],
    [
      0,
      {
        [_jN]: _iT,
      },
    ],
    [
      0,
      {
        [_jN]: _nARN,
      },
    ],
    [
      0,
      {
        [_jN]: _nTo,
      },
    ],
    [
      () => ZookeeperNodeInfo,
      {
        [_jN]: _zNI,
      },
    ],
  ]
);
export var ZookeeperNodeInfo = struct(
  n0,
  _ZNI,
  0,
  [_AENII, _CVIA, _E, _ZIo, _ZV],
  [
    [
      0,
      {
        [_jN]: _aENII,
      },
    ],
    [
      0,
      {
        [_jN]: _cVIA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _en,
      },
    ],
    [
      1,
      {
        [_jN]: _zIo,
      },
    ],
    [
      0,
      {
        [_jN]: _zV,
      },
    ],
  ]
);
export var __listOfNodeInfo = list(n0, _lONI, 0, [() => NodeInfo, 0]);
export var ListNodes = op(
  n0,
  _LN,
  {
    [_h]: ["GET", "/v1/clusters/{ClusterArn}/nodes", 200],
  },
  () => ListNodesRequest,
  () => ListNodesResponse
);
