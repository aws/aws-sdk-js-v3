// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cB,
  _cTre,
  _dP,
  _GRS,
  _GRSI,
  _GRSO,
  _h,
  _hQ,
  _lMB,
  _lMT,
  _RI,
  _RIM,
  _rM,
  _RS,
  _rS,
  _sKKI,
  _sM,
  _st,
  _sUDT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetReplicationSetInput = struct(
  n0,
  _GRSI,
  0,
  [_a],
  [
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var GetReplicationSetOutput = struct(n0, _GRSO, 0, [_rS], [() => ReplicationSet]);
export var RegionInfo = struct(n0, _RI, 0, [_sKKI, _st, _sM, _sUDT], [0, 0, 0, 4]);
export var ReplicationSet = struct(
  n0,
  _RS,
  0,
  [_a, _rM, _st, _dP, _cTre, _cB, _lMT, _lMB],
  [0, () => RegionInfoMap, 0, 2, 4, 0, 4, 0]
);
export var RegionInfoMap = map(n0, _RIM, 0, 0, () => RegionInfo);
export var GetReplicationSet = op(
  n0,
  _GRS,
  {
    [_h]: ["GET", "/getReplicationSet", 200],
  },
  () => GetReplicationSetInput,
  () => GetReplicationSetOutput
);
