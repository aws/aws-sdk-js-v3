// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _CA,
  _cA,
  _CB,
  _cB,
  _DI,
  _dI,
  _dIo,
  _ESv,
  _eSv,
  _ET,
  _eTv,
  _eTven,
  _ev,
  _GLE,
  _GLEI,
  _GLEO,
  _hH,
  _hQ,
  _ht,
  _I,
  _i,
  _id,
  _in,
  _it,
  _j,
  _LES,
  _LESi,
  _LLE,
  _LLEI,
  _LLEO,
  _mRa,
  _n,
  _na,
  _NI,
  _NIa,
  _nT,
  _OLRES,
  _oLRES,
  _ou,
  _PS,
  _pSr,
  _rIu,
  _sO,
  _tA,
  _tB,
  n0,
} from "./schemas_0";
import { LineageEvent } from "./schemas_52_Lineage";

/* eslint no-var: 0 */

export var GetLineageEventInput = struct(
  n0,
  _GLEI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetLineageEventOutput = struct(
  n0,
  _GLEO,
  0,
  [_dIo, _id, _ev, _cB, _pSr, _eTv, _cA],
  [
    [
      0,
      {
        [_hH]: _DI,
      },
    ],
    [
      0,
      {
        [_hH]: _I,
      },
    ],
    [() => LineageEvent, 16],
    [
      0,
      {
        [_hH]: _CB,
      },
    ],
    [
      0,
      {
        [_hH]: _PS,
      },
    ],
    [
      4,
      {
        [_hH]: _ET,
      },
    ],
    [
      4,
      {
        [_hH]: _CA,
      },
    ],
  ]
);
export var LineageEventSummary = struct(
  n0,
  _LES,
  0,
  [_id, _dIo, _pSr, _eTv, _eSv, _cB, _cA],
  [0, 0, 0, 4, () => EventSummary, 0, 4]
);
export var ListLineageEventsInput = struct(
  n0,
  _LLEI,
  0,
  [_dI, _mRa, _tA, _tB, _pSr, _sO, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      4,
      {
        [_hQ]: _tA,
      },
    ],
    [
      4,
      {
        [_hQ]: _tB,
      },
    ],
    [
      0,
      {
        [_hQ]: _pSr,
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
  ]
);
export var ListLineageEventsOutput = struct(n0, _LLEO, 0, [_it, _nT], [() => LineageEventSummaries, 0]);
export var NameIdentifier = struct(n0, _NI, 0, [_n, _na], [0, 0]);
export var OpenLineageRunEventSummary = struct(
  n0,
  _OLRES,
  0,
  [_eTven, _rIu, _j, _in, _ou],
  [0, 0, () => NameIdentifier, () => NameIdentifiers, () => NameIdentifiers]
);
export var LineageEventSummaries = list(n0, _LESi, 0, () => LineageEventSummary);
export var NameIdentifiers = list(n0, _NIa, 0, () => NameIdentifier);
export var EventSummary = uni(n0, _ESv, 0, [_oLRES], [() => OpenLineageRunEventSummary]);
export var GetLineageEvent = op(
  n0,
  _GLE,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/lineage/events/{identifier}", 200],
  },
  () => GetLineageEventInput,
  () => GetLineageEventOutput
);
export var ListLineageEvents = op(
  n0,
  _LLE,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/lineage/events", 200],
  },
  () => ListLineageEventsInput,
  () => ListLineageEventsOutput
);
