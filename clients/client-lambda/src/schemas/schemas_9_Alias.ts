// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AC,
  _ARC,
  _AVW,
  _CAR,
  _CAr,
  _D,
  _DA,
  _DAR,
  _FN,
  _FV,
  _GA,
  _GAR,
  _h,
  _N,
  _RC,
  _RI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AliasConfiguration = struct(
  n0,
  _AC,
  0,
  [_AA, _N, _FV, _D, _RC, _RI],
  [0, 0, 0, 0, () => AliasRoutingConfiguration, 0]
);
export var AliasRoutingConfiguration = struct(n0, _ARC, 0, [_AVW], [128 | 1]);
export var CreateAliasRequest = struct(
  n0,
  _CAR,
  0,
  [_FN, _N, _FV, _D, _RC],
  [[0, 1], 0, 0, 0, () => AliasRoutingConfiguration]
);
export var DeleteAliasRequest = struct(
  n0,
  _DAR,
  0,
  [_FN, _N],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAliasRequest = struct(
  n0,
  _GAR,
  0,
  [_FN, _N],
  [
    [0, 1],
    [0, 1],
  ]
);
export var AdditionalVersionWeights = 128 | 1;

export var CreateAlias = op(
  n0,
  _CAr,
  {
    [_h]: ["POST", "/2015-03-31/functions/{FunctionName}/aliases", 201],
  },
  () => CreateAliasRequest,
  () => AliasConfiguration
);
export var DeleteAlias = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/2015-03-31/functions/{FunctionName}/aliases/{Name}", 204],
  },
  () => DeleteAliasRequest,
  () => Unit
);
export var GetAlias = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/2015-03-31/functions/{FunctionName}/aliases/{Name}", 200],
  },
  () => GetAliasRequest,
  () => AliasConfiguration
);
