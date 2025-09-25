// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _CH,
  _CHR,
  _CHRr,
  _CI,
  _EI,
  _EIn,
  _EIV,
  _HI,
  _Hs,
  _HT,
  _IA,
  _IC,
  _ICR,
  _ICRn,
  _S,
  _SCi,
  _SIu,
  _SM,
  _TA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateHsmRequest = struct(n0, _CHR, 0, [_CI, _AZ, _IA], [0, 0, 0]);
export var CreateHsmResponse = struct(n0, _CHRr, 0, [_Hs], [() => Hsm]);
export var Hsm = struct(
  n0,
  _Hs,
  0,
  [_AZ, _CI, _SIu, _EI, _EIn, _EIV, _HI, _HT, _S, _SM],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var InitializeClusterRequest = struct(n0, _ICR, 0, [_CI, _SCi, _TA], [0, 0, 0]);
export var InitializeClusterResponse = struct(n0, _ICRn, 0, [_S, _SM], [0, 0]);
export var Unit = "unit" as const;

export var CreateHsm = op(
  n0,
  _CH,
  0,
  () => CreateHsmRequest,
  () => CreateHsmResponse
);
export var InitializeCluster = op(
  n0,
  _IC,
  0,
  () => InitializeClusterRequest,
  () => InitializeClusterResponse
);
