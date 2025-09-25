// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TrustStoreInUseException as __TrustStoreInUseException } from "../models/index";
import { _aQE, _c, _DTS, _DTSI, _DTSO, _e, _hE, _M, _TSA, _TSIUE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTrustStoreInput = struct(n0, _DTSI, 0, [_TSA], [0]);
export var DeleteTrustStoreOutput = struct(n0, _DTSO, 0, [], []);
export var TrustStoreInUseException = error(
  n0,
  _TSIUE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TrustStoreInUse`, 400],
  },
  [_M],
  [0],

  __TrustStoreInUseException
);
export var DeleteTrustStore = op(
  n0,
  _DTS,
  0,
  () => DeleteTrustStoreInput,
  () => DeleteTrustStoreOutput
);
