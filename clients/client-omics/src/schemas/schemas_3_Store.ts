// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cT,
  _end,
  _F,
  _filt,
  _GS,
  _GSR,
  _GSRe,
  _hQ,
  _ht,
  _LS,
  _LSR,
  _LSRi,
  _mRa,
  _nT,
  _oI,
  _pSr,
  _rAes,
  _rAeso,
  _rIes,
  _rO,
  _SD,
  _SDL,
  _sh,
  _sha,
  _sI,
  _sM,
  _sN,
  _st,
  _ty,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Filter = struct(n0, _F, 0, [_rAeso, _st, _ty], [64 | 0, 64 | 0, 64 | 0]);
export var GetShareRequest = struct(n0, _GSR, 0, [_sI], [[0, 1]]);
export var GetShareResponse = struct(n0, _GSRe, 0, [_sh], [() => ShareDetails]);
export var ListSharesRequest = struct(
  n0,
  _LSR,
  0,
  [_rO, _filt, _nT, _mRa],
  [
    0,
    () => Filter,
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListSharesResponse = struct(n0, _LSRi, 0, [_sha, _nT], [() => ShareDetailsList, 0]);
export var ShareDetails = struct(
  n0,
  _SD,
  0,
  [_sI, _rAes, _rIes, _pSr, _oI, _st, _sM, _sN, _cT, _uT],
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 5]
);
export var ArnList = 64 | 0;

export var ShareDetailsList = list(n0, _SDL, 0, () => ShareDetails);
export var StatusList = 64 | 0;

export var TypeList = 64 | 0;

export var GetShare = op(
  n0,
  _GS,
  {
    [_ht]: ["GET", "/share/{shareId}", 200],
    [_end]: ["analytics-"],
  },
  () => GetShareRequest,
  () => GetShareResponse
);
export var ListShares = op(
  n0,
  _LS,
  {
    [_ht]: ["POST", "/shares", 200],
    [_end]: ["analytics-"],
  },
  () => ListSharesRequest,
  () => ListSharesResponse
);
