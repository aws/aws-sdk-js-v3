// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _ITns, _MVT, _MVTR, _MVTRo, _r, _RV, _VI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyVpcTenancyRequest = struct(n0, _MVTR, 0, [_VI, _ITns, _DR], [0, 0, 2]);
export var ModifyVpcTenancyResult = struct(
  n0,
  _MVTRo,
  0,
  [_RV],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var ModifyVpcTenancy = op(
  n0,
  _MVT,
  0,
  () => ModifyVpcTenancyRequest,
  () => ModifyVpcTenancyResult
);
