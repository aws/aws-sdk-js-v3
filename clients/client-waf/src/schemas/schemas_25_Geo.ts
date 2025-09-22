// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CGMS,
  _CGMSR,
  _CGMSRr,
  _CT,
  _GGMS,
  _GGMSR,
  _GGMSRe,
  _GMC,
  _GMCe,
  _GMS,
  _GMSI,
  _GMSU,
  _GMSUe,
  _N,
  _T,
  _U,
  _UGMS,
  _UGMSR,
  _UGMSRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateGeoMatchSetRequest = struct(n0, _CGMSR, 0, [_N, _CT], [0, 0]);
export var CreateGeoMatchSetResponse = struct(n0, _CGMSRr, 0, [_GMS, _CT], [() => GeoMatchSet, 0]);
export var GeoMatchConstraint = struct(n0, _GMC, 0, [_T, _V], [0, 0]);
export var GeoMatchSet = struct(n0, _GMS, 0, [_GMSI, _N, _GMCe], [0, 0, () => GeoMatchConstraints]);
export var GeoMatchSetUpdate = struct(n0, _GMSU, 0, [_A, _GMC], [0, () => GeoMatchConstraint]);
export var GetGeoMatchSetRequest = struct(n0, _GGMSR, 0, [_GMSI], [0]);
export var GetGeoMatchSetResponse = struct(n0, _GGMSRe, 0, [_GMS], [() => GeoMatchSet]);
export var UpdateGeoMatchSetRequest = struct(n0, _UGMSR, 0, [_GMSI, _CT, _U], [0, 0, () => GeoMatchSetUpdates]);
export var UpdateGeoMatchSetResponse = struct(n0, _UGMSRp, 0, [_CT], [0]);
export var GeoMatchConstraints = list(n0, _GMCe, 0, () => GeoMatchConstraint);
export var GeoMatchSetUpdates = list(n0, _GMSUe, 0, () => GeoMatchSetUpdate);
export var CreateGeoMatchSet = op(
  n0,
  _CGMS,
  0,
  () => CreateGeoMatchSetRequest,
  () => CreateGeoMatchSetResponse
);
export var GetGeoMatchSet = op(
  n0,
  _GGMS,
  0,
  () => GetGeoMatchSetRequest,
  () => GetGeoMatchSetResponse
);
export var UpdateGeoMatchSet = op(
  n0,
  _UGMS,
  0,
  () => UpdateGeoMatchSetRequest,
  () => UpdateGeoMatchSetResponse
);
