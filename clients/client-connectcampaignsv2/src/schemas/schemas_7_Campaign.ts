// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _CTC,
  _cTC,
  _DH,
  _dH,
  _dTZ,
  _eD,
  _em,
  _eTn,
  _h,
  _i,
  _LTZC,
  _lTZC,
  _lTZD,
  _n,
  _OH,
  _oH,
  _RP,
  _rP,
  _RPe,
  _RPL,
  _rPL,
  _sD,
  _sm,
  _sT,
  _te,
  _TR,
  _TRL,
  _TW,
  _UCCT,
  _UCCTR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CommunicationTimeConfig = struct(
  n0,
  _CTC,
  0,
  [_lTZC, _te, _sm, _em],
  [() => LocalTimeZoneConfig, () => TimeWindow, () => TimeWindow, () => TimeWindow]
);
export var LocalTimeZoneConfig = struct(n0, _LTZC, 0, [_dTZ, _lTZD], [0, 64 | 0]);
export var RestrictedPeriod = struct(n0, _RP, 0, [_n, _sD, _eD], [0, 0, 0]);
export var TimeRange = struct(n0, _TR, 0, [_sT, _eTn], [0, 0]);
export var TimeWindow = struct(n0, _TW, 0, [_oH, _rP], [() => OpenHours, () => RestrictedPeriods]);
export var UpdateCampaignCommunicationTimeRequest = struct(
  n0,
  _UCCTR,
  0,
  [_i, _cTC],
  [[0, 1], () => CommunicationTimeConfig]
);
export var LocalTimeZoneDetection = 64 | 0;

export var RestrictedPeriodList = list(n0, _RPL, 0, () => RestrictedPeriod);
export var TimeRangeList = list(n0, _TRL, 0, () => TimeRange);
export var DailyHours = map(n0, _DH, 0, 0, () => TimeRangeList);
export var OpenHours = uni(n0, _OH, 0, [_dH], [() => DailyHours]);
export var RestrictedPeriods = uni(n0, _RPe, 0, [_rPL], [() => RestrictedPeriodList]);
export var UpdateCampaignCommunicationTime = op(
  n0,
  _UCCT,
  {
    [_h]: ["POST", "/v2/campaigns/{id}/communication-time", 200],
  },
  () => UpdateCampaignCommunicationTimeRequest,
  () => Unit
);
