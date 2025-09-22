// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _GRDC,
  _GRDCR,
  _GRDCRe,
  _I,
  _OI,
  _RDCe,
  _RDNSSECC,
  _RI,
  _URDC,
  _URDCR,
  _URDCRp,
  _Val,
  _VS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetResolverDnssecConfigRequest = struct(n0, _GRDCR, 0, [_RI], [0]);
export var GetResolverDnssecConfigResponse = struct(n0, _GRDCRe, 0, [_RDNSSECC], [() => ResolverDnssecConfig]);
export var ResolverDnssecConfig = struct(n0, _RDCe, 0, [_I, _OI, _RI, _VS], [0, 0, 0, 0]);
export var UpdateResolverDnssecConfigRequest = struct(n0, _URDCR, 0, [_RI, _Val], [0, 0]);
export var UpdateResolverDnssecConfigResponse = struct(n0, _URDCRp, 0, [_RDNSSECC], [() => ResolverDnssecConfig]);
export var GetResolverDnssecConfig = op(
  n0,
  _GRDC,
  0,
  () => GetResolverDnssecConfigRequest,
  () => GetResolverDnssecConfigResponse
);
export var UpdateResolverDnssecConfig = op(
  n0,
  _URDC,
  0,
  () => UpdateResolverDnssecConfigRequest,
  () => UpdateResolverDnssecConfigResponse
);
