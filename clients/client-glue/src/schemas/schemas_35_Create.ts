// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { IdempotentParameterMismatchException as __IdempotentParameterMismatchException } from "../models/index";
import {
  _Ar,
  _AZ,
  _c,
  _CCET,
  _CCETR,
  _CCETRr,
  _CDE,
  _CDER,
  _CDERr,
  _CTrea,
  _CW,
  _D,
  _e,
  _EJSP,
  _EN,
  _EPLSP,
  _FR,
  _GV,
  _IPME,
  _M,
  _N,
  _NONu,
  _NOW,
  _PKu,
  _PKub,
  _RA,
  _RSe,
  _Ru,
  _SC,
  _SGI,
  _SIu,
  _St,
  _Tag,
  _UDQR,
  _UDQRR,
  _UDQRRp,
  _VIp,
  _WT,
  _YEA,
  _ZRSIP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateCustomEntityTypeRequest = struct(n0, _CCETR, 0, [_N, _RSe, _CW, _Tag], [0, 0, 64 | 0, 128 | 0]);
export var CreateCustomEntityTypeResponse = struct(n0, _CCETRr, 0, [_N], [0]);
export var CreateDevEndpointRequest = struct(
  n0,
  _CDER,
  0,
  [_EN, _RA, _SGI, _SIu, _PKu, _PKub, _NONu, _WT, _GV, _NOW, _EPLSP, _EJSP, _SC, _Tag, _Ar],
  [0, 0, 64 | 0, 0, 0, 64 | 0, 1, 0, 0, 1, 0, 0, 0, 128 | 0, 128 | 0]
);
export var CreateDevEndpointResponse = struct(
  n0,
  _CDERr,
  0,
  [_EN, _St, _SGI, _SIu, _RA, _YEA, _ZRSIP, _NONu, _WT, _GV, _NOW, _AZ, _VIp, _EPLSP, _EJSP, _FR, _SC, _CTrea, _Ar],
  [0, 0, 64 | 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4, 128 | 0]
);
export var IdempotentParameterMismatchException = error(
  n0,
  _IPME,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __IdempotentParameterMismatchException
);
export var UpdateDataQualityRulesetRequest = struct(n0, _UDQRR, 0, [_N, _D, _Ru], [0, 0, 0]);
export var UpdateDataQualityRulesetResponse = struct(n0, _UDQRRp, 0, [_N, _D, _Ru], [0, 0, 0]);
export var CreateCustomEntityType = op(
  n0,
  _CCET,
  0,
  () => CreateCustomEntityTypeRequest,
  () => CreateCustomEntityTypeResponse
);
export var CreateDevEndpoint = op(
  n0,
  _CDE,
  0,
  () => CreateDevEndpointRequest,
  () => CreateDevEndpointResponse
);
export var UpdateDataQualityRuleset = op(
  n0,
  _UDQR,
  0,
  () => UpdateDataQualityRulesetRequest,
  () => UpdateDataQualityRulesetResponse
);
