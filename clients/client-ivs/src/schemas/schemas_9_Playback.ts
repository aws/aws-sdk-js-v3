// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DPKP, _DPKPR, _DPKPRe, _f, _GPKP, _GPKPR, _GPKPRe, _ht, _kP, _n, _PKP, _ta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePlaybackKeyPairRequest = struct(n0, _DPKPR, 0, [_a], [0]);
export var DeletePlaybackKeyPairResponse = struct(n0, _DPKPRe, 0, [], []);
export var GetPlaybackKeyPairRequest = struct(n0, _GPKPR, 0, [_a], [0]);
export var GetPlaybackKeyPairResponse = struct(n0, _GPKPRe, 0, [_kP], [() => PlaybackKeyPair]);
export var PlaybackKeyPair = struct(n0, _PKP, 0, [_a, _n, _f, _ta], [0, 0, 0, 128 | 0]);
export var DeletePlaybackKeyPair = op(
  n0,
  _DPKP,
  {
    [_ht]: ["POST", "/DeletePlaybackKeyPair", 200],
  },
  () => DeletePlaybackKeyPairRequest,
  () => DeletePlaybackKeyPairResponse
);
export var GetPlaybackKeyPair = op(
  n0,
  _GPKP,
  {
    [_ht]: ["POST", "/GetPlaybackKeyPair", 200],
  },
  () => GetPlaybackKeyPairRequest,
  () => GetPlaybackKeyPairResponse
);
