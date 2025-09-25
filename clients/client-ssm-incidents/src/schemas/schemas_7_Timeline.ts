// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aR,
  _eD,
  _eI,
  _ER,
  _eR,
  _ERL,
  _eTv,
  _eTve,
  _eUT,
  _ev,
  _gI,
  _GTE,
  _GTEI,
  _GTEO,
  _h,
  _hQ,
  _id,
  _ide,
  _II,
  _iRA,
  _IV,
  _mD,
  _PDID,
  _pDID,
  _re,
  _RIe,
  _rII,
  _RIL,
  _sI,
  _TEi,
  _ti,
  _ty,
  _u,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetTimelineEventInput = struct(
  n0,
  _GTEI,
  0,
  [_iRA, _eI],
  [
    [
      0,
      {
        [_hQ]: _iRA,
      },
    ],
    [
      0,
      {
        [_hQ]: _eI,
      },
    ],
  ]
);
export var GetTimelineEventOutput = struct(n0, _GTEO, 0, [_ev], [() => TimelineEvent]);
export var ItemIdentifier = struct(n0, _II, 0, [_v, _ty], [() => ItemValue, 0]);
export var PagerDutyIncidentDetail = struct(n0, _PDID, 0, [_id, _aR, _sI], [0, 2, 0]);
export var RelatedItem = struct(n0, _RIe, 0, [_ide, _ti, _gI], [() => ItemIdentifier, 0, 0]);
export var TimelineEvent = struct(
  n0,
  _TEi,
  0,
  [_iRA, _eI, _eTv, _eUT, _eTve, _eD, _eR],
  [0, 0, 4, 4, 0, 0, () => EventReferenceList]
);
export var EventReferenceList = list(n0, _ERL, 0, () => EventReference);
export var RelatedItemList = list(n0, _RIL, 0, () => RelatedItem);
export var EventReference = uni(n0, _ER, 0, [_re, _rII], [0, 0]);
export var ItemValue = uni(n0, _IV, 0, [_a, _u, _mD, _pDID], [0, 0, 0, () => PagerDutyIncidentDetail]);
export var GetTimelineEvent = op(
  n0,
  _GTE,
  {
    [_h]: ["GET", "/getTimelineEvent", 200],
  },
  () => GetTimelineEventInput,
  () => GetTimelineEventOutput
);
