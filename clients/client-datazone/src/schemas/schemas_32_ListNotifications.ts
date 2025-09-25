// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AL,
  _aLc,
  _aTf,
  _bT,
  _cTre,
  _dI,
  _hQ,
  _ht,
  _i,
  _id,
  _LNI,
  _LNi,
  _LNO,
  _lUTa,
  _M,
  _m,
  _met,
  _mRa,
  _n,
  _NL,
  _NO,
  _not,
  _NR,
  _nT,
  _res,
  _ro,
  _s,
  _su,
  _sub,
  _T,
  _tit,
  _To,
  _to,
  _tS,
  _ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActionLink = sim(n0, _AL, 0, 8);
export var Message = sim(n0, _M, 0, 8);
export var Title = sim(n0, _T, 0, 8);
export var ListNotificationsInput = struct(
  n0,
  _LNI,
  0,
  [_dI, _ty, _aTf, _bT, _su, _tS, _mRa, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
    [
      4,
      {
        [_hQ]: _aTf,
      },
    ],
    [
      4,
      {
        [_hQ]: _bT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _su,
      },
    ],
    [
      0,
      {
        [_hQ]: _tS,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
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
export var ListNotificationsOutput = struct(n0, _LNO, 0, [_not, _nT], [[() => NotificationsList, 0], 0]);
export var NotificationOutput = struct(
  n0,
  _NO,
  0,
  [_i, _dI, _ty, _to, _tit, _m, _s, _aLc, _cTre, _lUTa, _met],
  [0, 0, 0, () => Topic, [() => Title, 0], [() => Message, 0], 0, [() => ActionLink, 0], 4, 4, 128 | 0]
);
export var NotificationResource = struct(n0, _NR, 0, [_ty, _id, _n], [0, 0, 0]);
export var Topic = struct(n0, _To, 0, [_sub, _res, _ro], [0, () => NotificationResource, 0]);
export var NotificationsList = list(n0, _NL, 0, [() => NotificationOutput, 0]);
export var NotificationSubjects = 64 | 0;

export var MetadataMap = 128 | 0;

export var ListNotifications = op(
  n0,
  _LNi,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/notifications", 200],
  },
  () => ListNotificationsInput,
  () => ListNotificationsOutput
);
