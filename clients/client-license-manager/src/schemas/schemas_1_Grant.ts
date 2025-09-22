// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AG,
  _AGR,
  _AGRc,
  _AO,
  _AOB,
  _CG,
  _CGR,
  _CGRr,
  _CGV,
  _CGVR,
  _CGVRr,
  _CT,
  _DG,
  _DGR,
  _DGRe,
  _G,
  _GA,
  _GG,
  _GGR,
  _GGRe,
  _GN,
  _GO,
  _GPA,
  _GS,
  _HR,
  _LA,
  _O,
  _P,
  _PA,
  _RGej,
  _RGR,
  _RGRe,
  _S,
  _SR,
  _SV,
  _T,
  _V,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_License";

/* eslint no-var: 0 */

export var AcceptGrantRequest = struct(n0, _AGR, 0, [_GA], [0]);
export var AcceptGrantResponse = struct(n0, _AGRc, 0, [_GA, _S, _V], [0, 0, 0]);
export var CreateGrantRequest = struct(
  n0,
  _CGR,
  0,
  [_CT, _GN, _LA, _P, _HR, _AO, _T],
  [0, 0, 0, 64 | 0, 0, 64 | 0, () => TagList]
);
export var CreateGrantResponse = struct(n0, _CGRr, 0, [_GA, _S, _V], [0, 0, 0]);
export var CreateGrantVersionRequest = struct(
  n0,
  _CGVR,
  0,
  [_CT, _GA, _GN, _AO, _S, _SR, _SV, _O],
  [0, 0, 0, 64 | 0, 0, 0, 0, () => Options]
);
export var CreateGrantVersionResponse = struct(n0, _CGVRr, 0, [_GA, _S, _V], [0, 0, 0]);
export var DeleteGrantRequest = struct(n0, _DGR, 0, [_GA, _SR, _V], [0, 0, 0]);
export var DeleteGrantResponse = struct(n0, _DGRe, 0, [_GA, _S, _V], [0, 0, 0]);
export var GetGrantRequest = struct(n0, _GGR, 0, [_GA, _V], [0, 0]);
export var GetGrantResponse = struct(n0, _GGRe, 0, [_G], [() => Grant]);
export var Grant = struct(
  n0,
  _G,
  0,
  [_GA, _GN, _PA, _LA, _GPA, _HR, _GS, _SR, _V, _GO, _O],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, () => Options]
);
export var Options = struct(n0, _O, 0, [_AOB], [0]);
export var RejectGrantRequest = struct(n0, _RGR, 0, [_GA], [0]);
export var RejectGrantResponse = struct(n0, _RGRe, 0, [_GA, _S, _V], [0, 0, 0]);
export var PrincipalArnList = 64 | 0;

export var AcceptGrant = op(
  n0,
  _AG,
  0,
  () => AcceptGrantRequest,
  () => AcceptGrantResponse
);
export var CreateGrant = op(
  n0,
  _CG,
  0,
  () => CreateGrantRequest,
  () => CreateGrantResponse
);
export var CreateGrantVersion = op(
  n0,
  _CGV,
  0,
  () => CreateGrantVersionRequest,
  () => CreateGrantVersionResponse
);
export var DeleteGrant = op(
  n0,
  _DG,
  0,
  () => DeleteGrantRequest,
  () => DeleteGrantResponse
);
export var GetGrant = op(
  n0,
  _GG,
  0,
  () => GetGrantRequest,
  () => GetGrantResponse
);
export var RejectGrant = op(
  n0,
  _RGej,
  0,
  () => RejectGrantRequest,
  () => RejectGrantResponse
);
