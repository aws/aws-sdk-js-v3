// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AA,
  _aA,
  _AD,
  _ad,
  _aO,
  _aP,
  _aS,
  _ASA,
  _au,
  _co,
  _DWA,
  _DWAR,
  _DWARe,
  _ed,
  _em,
  _g,
  _h,
  _IM,
  _iM,
  _l,
  _lVD,
  _n,
  _o,
  _p,
  _r,
  _RV,
  _rV,
  _RVL,
  _s,
  _SA,
  _SC,
  _sCa,
  _sCI,
  _st,
  _ur,
  _UWA,
  _UWAR,
  _UWARp,
  _wI,
  _x,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssertionAttributes = struct(n0, _AA, 0, [_n, _l, _em, _g, _r, _o], [0, 0, 0, 0, 0, 0]);
export var AuthenticationDescription = struct(
  n0,
  _AD,
  0,
  [_p, _s, _aS],
  [64 | 0, [() => SamlAuthentication, 0], () => AwsSsoAuthentication]
);
export var AwsSsoAuthentication = struct(n0, _ASA, 0, [_sCI], [0]);
export var DescribeWorkspaceAuthenticationRequest = struct(n0, _DWAR, 0, [_wI], [[0, 1]]);
export var DescribeWorkspaceAuthenticationResponse = struct(
  n0,
  _DWARe,
  0,
  [_au],
  [[() => AuthenticationDescription, 0]]
);
export var RoleValues = struct(
  n0,
  _RV,
  0,
  [_ed, _ad],
  [
    [() => RoleValueList, 0],
    [() => RoleValueList, 0],
  ]
);
export var SamlAuthentication = struct(n0, _SA, 0, [_st, _co], [0, [() => SamlConfiguration, 0]]);
export var SamlConfiguration = struct(
  n0,
  _SC,
  0,
  [_iM, _aA, _rV, _aO, _lVD],
  [() => IdpMetadata, () => AssertionAttributes, [() => RoleValues, 0], 64 | 0, 1]
);
export var UpdateWorkspaceAuthenticationRequest = struct(
  n0,
  _UWAR,
  0,
  [_wI, _aP, _sCa],
  [[0, 1], 64 | 0, [() => SamlConfiguration, 0]]
);
export var UpdateWorkspaceAuthenticationResponse = struct(n0, _UWARp, 0, [_au], [[() => AuthenticationDescription, 0]]);
export var AllowedOrganizations = 64 | 0;

export var AuthenticationProviders = 64 | 0;

export var RoleValueList = list(n0, _RVL, 8, 0);
export var IdpMetadata = uni(n0, _IM, 0, [_ur, _x], [0, 0]);
export var DescribeWorkspaceAuthentication = op(
  n0,
  _DWA,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/authentication", 200],
  },
  () => DescribeWorkspaceAuthenticationRequest,
  () => DescribeWorkspaceAuthenticationResponse
);
export var UpdateWorkspaceAuthentication = op(
  n0,
  _UWA,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/authentication", 200],
  },
  () => UpdateWorkspaceAuthenticationRequest,
  () => UpdateWorkspaceAuthenticationResponse
);
