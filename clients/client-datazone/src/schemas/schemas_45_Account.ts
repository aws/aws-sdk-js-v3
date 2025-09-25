// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _APN,
  _APS,
  _APSc,
  _cB,
  _dI,
  _dIo,
  _dUI,
  _hQ,
  _ht,
  _id,
  _it,
  _LAP,
  _LAPI,
  _LAPO,
  _mRa,
  _n,
  _nT,
  _rS,
  _sB,
  _sO,
  _uB,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountPoolName = sim(n0, _APN, 0, 8);
export var AccountPoolSummary = struct(
  n0,
  _APS,
  0,
  [_dIo, _id, _n, _rS, _dUI, _cB, _uB],
  [0, 0, [() => AccountPoolName, 0], 0, 0, 0, 0]
);
export var ListAccountPoolsInput = struct(
  n0,
  _LAPI,
  0,
  [_dI, _n, _sB, _sO, _nT, _mRa],
  [
    [0, 1],
    [
      () => AccountPoolName,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _sB,
      },
    ],
    [
      0,
      {
        [_hQ]: _sO,
      },
    ],
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
export var ListAccountPoolsOutput = struct(n0, _LAPO, 0, [_it, _nT], [[() => AccountPoolSummaries, 0], 0]);
export var AccountPoolSummaries = list(n0, _APSc, 0, [() => AccountPoolSummary, 0]);
export var ListAccountPools = op(
  n0,
  _LAP,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/account-pools", 200],
  },
  () => ListAccountPoolsInput,
  () => ListAccountPoolsOutput
);
