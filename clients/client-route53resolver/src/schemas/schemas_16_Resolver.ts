// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceUnavailableException as __ResourceUnavailableException } from "../models/index";
import { _ARF, _c, _e, _M, _RCe, _RI, _RTe, _RUE, _URC, _URCR, _URCRp, n0 } from "./schemas_0";
import { ResolverConfig } from "./schemas_14_Resolver";

/* eslint no-var: 0 */

export var ResourceUnavailableException = error(
  n0,
  _RUE,
  {
    [_e]: _c,
  },
  [_M, _RTe],
  [0, 0],

  __ResourceUnavailableException
);
export var UpdateResolverConfigRequest = struct(n0, _URCR, 0, [_RI, _ARF], [0, 0]);
export var UpdateResolverConfigResponse = struct(n0, _URCRp, 0, [_RCe], [() => ResolverConfig]);
export var UpdateResolverConfig = op(
  n0,
  _URC,
  0,
  () => UpdateResolverConfigRequest,
  () => UpdateResolverConfigResponse
);
