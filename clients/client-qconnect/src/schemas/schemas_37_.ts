// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aI,
  _da,
  _htt,
  _k,
  _na,
  _NESS,
  _RSD,
  _RSDL,
  _RSDV,
  _sAe,
  _sI,
  _sV,
  _USD,
  _USDR,
  _USDRp,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var NonEmptySensitiveString = sim(n0, _NESS, 0, 8);
export var RuntimeSessionData = struct(
  n0,
  _RSD,
  0,
  [_k, _v],
  [
    [() => NonEmptySensitiveString, 0],
    [() => RuntimeSessionDataValue, 0],
  ]
);
export var UpdateSessionDataRequest = struct(
  n0,
  _USDR,
  0,
  [_aI, _sI, _na, _da],
  [[0, 1], [0, 1], 0, [() => RuntimeSessionDataList, 0]]
);
export var UpdateSessionDataResponse = struct(
  n0,
  _USDRp,
  0,
  [_sAe, _sI, _na, _da],
  [0, 0, 0, [() => RuntimeSessionDataList, 0]]
);
export var RuntimeSessionDataList = list(n0, _RSDL, 0, [() => RuntimeSessionData, 0]);
export var RuntimeSessionDataValue = uni(n0, _RSDV, 0, [_sV], [[() => NonEmptySensitiveString, 0]]);
export var UpdateSessionData = op(
  n0,
  _USD,
  {
    [_htt]: ["PATCH", "/assistants/{assistantId}/sessions/{sessionId}/data", 200],
  },
  () => UpdateSessionDataRequest,
  () => UpdateSessionDataResponse
);
