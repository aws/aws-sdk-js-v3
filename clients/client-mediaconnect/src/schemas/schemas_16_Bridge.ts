// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _ABNOR,
  _ABOR,
  _BFO,
  _BNO,
  _BO,
  _FA,
  _fA,
  _FO,
  _fO,
  _FSA,
  _fSA,
  _IA,
  _iA,
  _jN,
  _lOABOR,
  _lOBO,
  _N,
  _n,
  _NN,
  _nN,
  _NO,
  _nO,
  _P,
  _p,
  _Pr,
  _pr,
  _T,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddBridgeNetworkOutputRequest = struct(
  n0,
  _ABNOR,
  0,
  [_IA, _N, _NN, _P, _Pr, _T],
  [
    [
      0,
      {
        [_jN]: _iA,
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
    [
      1,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var AddBridgeOutputRequest = struct(
  n0,
  _ABOR,
  0,
  [_NO],
  [
    [
      () => AddBridgeNetworkOutputRequest,
      {
        [_jN]: _nO,
      },
    ],
  ]
);
export var BridgeFlowOutput = struct(
  n0,
  _BFO,
  0,
  [_FA, _FSA, _N],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      0,
      {
        [_jN]: _fSA,
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
export var BridgeNetworkOutput = struct(
  n0,
  _BNO,
  0,
  [_IA, _N, _NN, _P, _Pr, _T],
  [
    [
      0,
      {
        [_jN]: _iA,
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
    [
      1,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var BridgeOutput = struct(
  n0,
  _BO,
  0,
  [_FO, _NO],
  [
    [
      () => BridgeFlowOutput,
      {
        [_jN]: _fO,
      },
    ],
    [
      () => BridgeNetworkOutput,
      {
        [_jN]: _nO,
      },
    ],
  ]
);
export var __listOfAddBridgeOutputRequest = list(n0, _lOABOR, 0, [() => AddBridgeOutputRequest, 0]);
export var __listOfBridgeOutput = list(n0, _lOBO, 0, [() => BridgeOutput, 0]);
