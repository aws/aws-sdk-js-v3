// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DnssecLimitExceeded as __DnssecLimitExceeded } from "../models/index";
import { _ADSTD, _ADSTDR, _ADSTDRs, _Al, _c, _DLE, _DN, _DSA, _e, _Fl, _hE, _m, _OI, _PK, _SA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateDelegationSignerToDomainRequest = struct(
  n0,
  _ADSTDR,
  0,
  [_DN, _SA],
  [0, () => DnssecSigningAttributes]
);
export var AssociateDelegationSignerToDomainResponse = struct(n0, _ADSTDRs, 0, [_OI], [0]);
export var DnssecLimitExceeded = error(
  n0,
  _DLE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __DnssecLimitExceeded
);
export var DnssecSigningAttributes = struct(n0, _DSA, 0, [_Al, _Fl, _PK], [1, 1, 0]);
export var AssociateDelegationSignerToDomain = op(
  n0,
  _ADSTD,
  0,
  () => AssociateDelegationSignerToDomainRequest,
  () => AssociateDelegationSignerToDomainResponse
);
