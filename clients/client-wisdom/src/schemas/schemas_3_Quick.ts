// smithy-typescript generated code
import { error, list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import { PreconditionFailedException as __PreconditionFailedException } from "../models/index";
import {
  _C,
  _c,
  _Ch,
  _ch,
  _co,
  _cont,
  _cr,
  _cT,
  _cTr,
  _d,
  _e,
  _GC,
  _gC,
  _GCr,
  _GQR,
  _GQRR,
  _GQRRe,
  _GV,
  _GVr,
  _hE,
  _ht,
  _iA,
  _kBA,
  _kBI,
  _l,
  _lMB,
  _lMT,
  _m,
  _ma,
  _n,
  _PFE,
  _pT,
  _qR,
  _qRA,
  _QRC,
  _QRCP,
  _QRCu,
  _QRD,
  _qRI,
  _s,
  _sK,
  _t,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Channel = sim(n0, _C, 0, 8);
export var GroupingCriteria = sim(n0, _GC, 0, 8);
export var GroupingValue = sim(n0, _GV, 0, 8);
export var QuickResponseContent = sim(n0, _QRC, 0, 8);
export var GetQuickResponseRequest = struct(
  n0,
  _GQRR,
  0,
  [_qRI, _kBI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetQuickResponseResponse = struct(n0, _GQRRe, 0, [_qR], [[() => QuickResponseData, 0]]);
export var GroupingConfiguration = struct(
  n0,
  _GCr,
  0,
  [_cr, _va],
  [
    [() => GroupingCriteria, 0],
    [() => GroupingValues, 0],
  ]
);
export var PreconditionFailedException = error(
  n0,
  _PFE,
  {
    [_e]: _c,
    [_hE]: 412,
  },
  [_m],
  [0],

  __PreconditionFailedException
);
export var QuickResponseContents = struct(
  n0,
  _QRCu,
  0,
  [_pT, _ma],
  [
    [() => QuickResponseContentProvider, 0],
    [() => QuickResponseContentProvider, 0],
  ]
);
export var QuickResponseData = struct(
  n0,
  _QRD,
  0,
  [_qRA, _qRI, _kBA, _kBI, _n, _cT, _s, _cTr, _lMT, _cont, _d, _gC, _sK, _lMB, _iA, _ch, _l, _t],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    7,
    7,
    [() => QuickResponseContents, 0],
    0,
    [() => GroupingConfiguration, 0],
    0,
    0,
    2,
    [() => Channels, 0],
    0,
    128 | 0,
  ]
);
export var Channels = list(n0, _Ch, 0, [() => Channel, 0]);
export var GroupingValues = list(n0, _GVr, 0, [() => GroupingValue, 0]);
export var QuickResponseContentProvider = uni(n0, _QRCP, 0, [_co], [[() => QuickResponseContent, 0]]);
export var GetQuickResponse = op(
  n0,
  _GQR,
  {
    [_ht]: ["GET", "/knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}", 200],
  },
  () => GetQuickResponseRequest,
  () => GetQuickResponseResponse
);
