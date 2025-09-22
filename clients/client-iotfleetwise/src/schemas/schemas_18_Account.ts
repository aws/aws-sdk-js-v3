// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aS,
  _cAI,
  _cT,
  _eM,
  _GRAS,
  _GRASR,
  _GRASRe,
  _ht,
  _IRR,
  _iRR,
  _lMT,
  _rA,
  _rS,
  _tDA,
  _tDN,
  _tRR,
  _TRRi,
  _tTA,
  _tTN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRegisterAccountStatusRequest = struct(n0, _GRASR, 0, [], []);
export var GetRegisterAccountStatusResponse = struct(
  n0,
  _GRASRe,
  0,
  [_cAI, _aS, _tRR, _iRR, _cT, _lMT],
  [0, 0, () => TimestreamRegistrationResponse, () => IamRegistrationResponse, 4, 4]
);
export var IamRegistrationResponse = struct(n0, _IRR, 0, [_rA, _rS, _eM], [0, 0, 0]);
export var TimestreamRegistrationResponse = struct(
  n0,
  _TRRi,
  0,
  [_tDN, _tTN, _tDA, _tTA, _rS, _eM],
  [0, 0, 0, 0, 0, 0]
);
export var GetRegisterAccountStatus = op(
  n0,
  _GRAS,
  {
    [_ht]: ["GET", "/account/registration_status", 200],
  },
  () => GetRegisterAccountStatusRequest,
  () => GetRegisterAccountStatusResponse
);
