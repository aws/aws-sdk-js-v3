// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AC,
  _Ar,
  _CRI,
  _CTr,
  _DA,
  _DRQLC,
  _DRQLCR,
  _DRQLCRe,
  _GRQLC,
  _GRQLCR,
  _GRQLCRe,
  _I,
  _N,
  _OI,
  _RQLC,
  _RQLCI,
  _S,
  _SS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResolverQueryLogConfigRequest = struct(n0, _DRQLCR, 0, [_RQLCI], [0]);
export var DeleteResolverQueryLogConfigResponse = struct(n0, _DRQLCRe, 0, [_RQLC], [() => ResolverQueryLogConfig]);
export var GetResolverQueryLogConfigRequest = struct(n0, _GRQLCR, 0, [_RQLCI], [0]);
export var GetResolverQueryLogConfigResponse = struct(n0, _GRQLCRe, 0, [_RQLC], [() => ResolverQueryLogConfig]);
export var ResolverQueryLogConfig = struct(
  n0,
  _RQLC,
  0,
  [_I, _OI, _S, _SS, _AC, _Ar, _N, _DA, _CRI, _CTr],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
);
export var DeleteResolverQueryLogConfig = op(
  n0,
  _DRQLC,
  0,
  () => DeleteResolverQueryLogConfigRequest,
  () => DeleteResolverQueryLogConfigResponse
);
export var GetResolverQueryLogConfig = op(
  n0,
  _GRQLC,
  0,
  () => GetResolverQueryLogConfigRequest,
  () => GetResolverQueryLogConfigResponse
);
