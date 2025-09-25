// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _AT,
  _ATc,
  _ATD,
  _ATL,
  _ATT,
  _ATu,
  _Da,
  _DDAT,
  _DDATR,
  _DDATRe,
  _DN,
  _h,
  _MR,
  _NT,
  _SATD,
  _Sev,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutoTune = struct(n0, _AT, 0, [_ATT, _ATD], [0, () => AutoTuneDetails]);
export var AutoTuneDetails = struct(n0, _ATD, 0, [_SATD], [() => ScheduledAutoTuneDetails]);
export var DescribeDomainAutoTunesRequest = struct(n0, _DDATR, 0, [_DN, _MR, _NT], [[0, 1], 1, 0]);
export var DescribeDomainAutoTunesResponse = struct(n0, _DDATRe, 0, [_ATu, _NT], [() => AutoTuneList, 0]);
export var ScheduledAutoTuneDetails = struct(n0, _SATD, 0, [_Da, _ATc, _Ac, _Sev], [4, 0, 0, 0]);
export var AutoTuneList = list(n0, _ATL, 0, () => AutoTune);
export var DescribeDomainAutoTunes = op(
  n0,
  _DDAT,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/domain/{DomainName}/autoTunes", 200],
  },
  () => DescribeDomainAutoTunesRequest,
  () => DescribeDomainAutoTunesResponse
);
