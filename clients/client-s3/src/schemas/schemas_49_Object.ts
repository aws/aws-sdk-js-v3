// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _B,
  _Bo,
  _EBO,
  _GOTe,
  _GOTOe,
  _GOTRe,
  _h,
  _hH,
  _K,
  _RC,
  _RP,
  _s,
  _SB,
  _xaebo,
  _xarc,
  _xarp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var StreamingBlob = sim(n0, _SB, 42, {
  [_s]: 1,
});
export var GetObjectTorrentOutput = struct(
  n0,
  _GOTOe,
  0,
  [_Bo, _RC],
  [
    [() => StreamingBlob, 16],
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var GetObjectTorrentRequest = struct(
  n0,
  _GOTRe,
  0,
  [_B, _K, _RP, _EBO],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var GetObjectTorrent = op(
  n0,
  _GOTe,
  {
    [_h]: ["GET", "/{Key+}?torrent", 200],
  },
  () => GetObjectTorrentRequest,
  () => GetObjectTorrentOutput
);
