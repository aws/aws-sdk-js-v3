// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _AF,
  _AFR,
  _AFRs,
  _c,
  _CTl,
  _CW,
  _CWR,
  _CWRr,
  _D,
  _DI,
  _e,
  _F,
  _FI,
  _hE,
  _M,
  _N,
  _OOS,
  _OOSR,
  _OOSRp,
  _SI,
  _Sp,
  _SQEE,
  _W,
  _WI,
  n0,
} from "./schemas_0";
import { FraudsterId } from "./schemas_5_Fraudster";
import { Fraudster } from "./schemas_7_Fraudster";
import { Watchlist, WatchlistDescription, WatchlistName } from "./schemas_9_Watchlist";
import { Speaker } from "./schemas_10_Speaker";
import { SpeakerId } from "./schemas_11_Speaker";

/* eslint no-var: 0 */

export var AssociateFraudsterRequest = struct(n0, _AFR, 0, [_DI, _WI, _FI], [0, 0, [() => FraudsterId, 0]]);
export var AssociateFraudsterResponse = struct(n0, _AFRs, 0, [_F], [() => Fraudster]);
export var CreateWatchlistRequest = struct(
  n0,
  _CWR,
  0,
  [_DI, _N, _D, _CTl],
  [0, [() => WatchlistName, 0], [() => WatchlistDescription, 0], [0, 4]]
);
export var CreateWatchlistResponse = struct(n0, _CWRr, 0, [_W], [[() => Watchlist, 0]]);
export var OptOutSpeakerRequest = struct(n0, _OOSR, 0, [_DI, _SI], [0, [() => SpeakerId, 0]]);
export var OptOutSpeakerResponse = struct(n0, _OOSRp, 0, [_Sp], [[() => Speaker, 0]]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var AssociateFraudster = op(
  n0,
  _AF,
  0,
  () => AssociateFraudsterRequest,
  () => AssociateFraudsterResponse
);
export var CreateWatchlist = op(
  n0,
  _CW,
  2,
  () => CreateWatchlistRequest,
  () => CreateWatchlistResponse
);
export var OptOutSpeaker = op(
  n0,
  _OOS,
  0,
  () => OptOutSpeakerRequest,
  () => OptOutSpeakerResponse
);
