// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _ABFSR,
  _ABNSR,
  _ABSR,
  _BFS,
  _BNS,
  _BSr,
  _FA,
  _fA,
  _FS,
  _fS,
  _FVIA,
  _fVIA,
  _jN,
  _lOABSR,
  _lOBS,
  _MI,
  _mI,
  _MSIu,
  _mSIu,
  _MSS,
  _mSS,
  _N,
  _n,
  _NN,
  _nN,
  _NS,
  _nS,
  _OA,
  _oA,
  _P,
  _p,
  _Pr,
  _pr,
  n0,
} from "./schemas_0";
import { VpcInterfaceAttachment } from "./schemas_7_Flow";

/* eslint no-var: 0 */

export var AddBridgeFlowSourceRequest = struct(
  n0,
  _ABFSR,
  0,
  [_FA, _FVIA, _N],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      () => VpcInterfaceAttachment,
      {
        [_jN]: _fVIA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var AddBridgeNetworkSourceRequest = struct(
  n0,
  _ABNSR,
  0,
  [_MI, _MSS, _N, _NN, _P, _Pr],
  [
    [
      0,
      {
        [_jN]: _mI,
      },
    ],
    [
      () => MulticastSourceSettings,
      {
        [_jN]: _mSS,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _nN,
      },
    ],
    [
      1,
      {
        [_jN]: _p,
      },
    ],
    [
      0,
      {
        [_jN]: _pr,
      },
    ],
  ]
);
export var AddBridgeSourceRequest = struct(
  n0,
  _ABSR,
  0,
  [_FS, _NS],
  [
    [
      () => AddBridgeFlowSourceRequest,
      {
        [_jN]: _fS,
      },
    ],
    [
      () => AddBridgeNetworkSourceRequest,
      {
        [_jN]: _nS,
      },
    ],
  ]
);
export var BridgeFlowSource = struct(
  n0,
  _BFS,
  0,
  [_FA, _FVIA, _N, _OA],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      () => VpcInterfaceAttachment,
      {
        [_jN]: _fVIA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _oA,
      },
    ],
  ]
);
export var BridgeNetworkSource = struct(
  n0,
  _BNS,
  0,
  [_MI, _MSS, _N, _NN, _P, _Pr],
  [
    [
      0,
      {
        [_jN]: _mI,
      },
    ],
    [
      () => MulticastSourceSettings,
      {
        [_jN]: _mSS,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _nN,
      },
    ],
    [
      1,
      {
        [_jN]: _p,
      },
    ],
    [
      0,
      {
        [_jN]: _pr,
      },
    ],
  ]
);
export var BridgeSource = struct(
  n0,
  _BSr,
  0,
  [_FS, _NS],
  [
    [
      () => BridgeFlowSource,
      {
        [_jN]: _fS,
      },
    ],
    [
      () => BridgeNetworkSource,
      {
        [_jN]: _nS,
      },
    ],
  ]
);
export var MulticastSourceSettings = struct(
  n0,
  _MSS,
  0,
  [_MSIu],
  [
    [
      0,
      {
        [_jN]: _mSIu,
      },
    ],
  ]
);
export var __listOfAddBridgeSourceRequest = list(n0, _lOABSR, 0, [() => AddBridgeSourceRequest, 0]);
export var __listOfBridgeSource = list(n0, _lOBS, 0, [() => BridgeSource, 0]);
