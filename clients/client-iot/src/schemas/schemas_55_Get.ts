// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { IndexNotReadyException as __IndexNotReadyException } from "../models/index";
import { _CATN, _cl, _conn, _dR, _er, _GTCD, _GTCDR, _GTCDRe, _h, _hE, _INRE, _me, _ti, _tN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectivityApiThingName = sim(n0, _CATN, 0, 8);
export var GetThingConnectivityDataRequest = struct(n0, _GTCDR, 0, [_tN], [[() => ConnectivityApiThingName, 1]]);
export var GetThingConnectivityDataResponse = struct(
  n0,
  _GTCDRe,
  0,
  [_tN, _conn, _ti, _dR],
  [[() => ConnectivityApiThingName, 0], 2, 4, 0]
);
export var IndexNotReadyException = error(
  n0,
  _INRE,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_me],
  [0],

  __IndexNotReadyException
);
export var GetThingConnectivityData = op(
  n0,
  _GTCD,
  {
    [_h]: ["POST", "/things/{thingName}/connectivity-data", 200],
  },
  () => GetThingConnectivityDataRequest,
  () => GetThingConnectivityDataResponse
);
