// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DuplicateTagKeysException as __DuplicateTagKeysException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _AHC,
  _AHCR,
  _b,
  _cB,
  _CCr,
  _CCRr,
  _cCT,
  _CI,
  _cI,
  _CIR,
  _cl,
  _CLR,
  _CLr,
  _cN,
  _DTKE,
  _e,
  _iN,
  _l,
  _lI,
  _lN,
  _m,
  _nOC,
  _oA,
  _pNr,
  _rAe,
  _rMACS,
  _t,
  _TMTE,
  _TR,
  _TRR,
  _TRRa,
  _v,
  Connection,
  n0,
  TagList,
} from "./schemas_0";
import { Interconnect } from "./schemas_4_Interconnect";
import { Lag } from "./schemas_9_Describe";

/* eslint no-var: 0 */

export var AllocateHostedConnectionRequest = struct(
  n0,
  _AHCR,
  0,
  [_cI, _oA, _b, _cN, _v, _t],
  [0, 0, 0, 0, 1, () => TagList]
);
export var CreateConnectionRequest = struct(
  n0,
  _CCRr,
  0,
  [_l, _b, _cN, _lI, _t, _pNr, _rMACS],
  [0, 0, 0, 0, () => TagList, 0, 2]
);
export var CreateInterconnectRequest = struct(
  n0,
  _CIR,
  0,
  [_iN, _b, _l, _lI, _t, _pNr, _rMACS],
  [0, 0, 0, 0, () => TagList, 0, 2]
);
export var CreateLagRequest = struct(
  n0,
  _CLR,
  0,
  [_nOC, _l, _cB, _lN, _cI, _t, _cCT, _pNr, _rMACS],
  [1, 0, 0, 0, 0, () => TagList, () => TagList, 0, 2]
);
export var DuplicateTagKeysException = error(
  n0,
  _DTKE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __DuplicateTagKeysException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rAe, _t], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __TooManyTagsException
);
export var AllocateHostedConnection = op(
  n0,
  _AHC,
  0,
  () => AllocateHostedConnectionRequest,
  () => Connection
);
export var CreateConnection = op(
  n0,
  _CCr,
  0,
  () => CreateConnectionRequest,
  () => Connection
);
export var CreateInterconnect = op(
  n0,
  _CI,
  0,
  () => CreateInterconnectRequest,
  () => Interconnect
);
export var CreateLag = op(
  n0,
  _CLr,
  0,
  () => CreateLagRequest,
  () => Lag
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
