// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidResourceException as __InvalidResourceException } from "../models/index";
import {
  _AHC,
  _AHCR,
  _AHCRs,
  _c,
  _CP,
  _CPR,
  _CPRr,
  _DHC,
  _DHCR,
  _DHCRi,
  _e,
  _HCA,
  _IRE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _N,
  _PI,
  _RAe,
  _RARN,
  _Ta,
  _TK,
  _TRa,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_19_Resource";

/* eslint no-var: 0 */

export var AssociateHealthCheckRequest = struct(n0, _AHCR, 0, [_PI, _HCA], [0, 0]);
export var AssociateHealthCheckResponse = struct(n0, _AHCRs, 0, [], []);
export var CreateProtectionRequest = struct(n0, _CPR, 0, [_N, _RAe, _Ta], [0, 0, () => TagList]);
export var CreateProtectionResponse = struct(n0, _CPRr, 0, [_PI], [0]);
export var DisassociateHealthCheckRequest = struct(n0, _DHCR, 0, [_PI, _HCA], [0, 0]);
export var DisassociateHealthCheckResponse = struct(n0, _DHCRi, 0, [], []);
export var InvalidResourceException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidResourceException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [() => TagList]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var AssociateHealthCheck = op(
  n0,
  _AHC,
  0,
  () => AssociateHealthCheckRequest,
  () => AssociateHealthCheckResponse
);
export var CreateProtection = op(
  n0,
  _CP,
  0,
  () => CreateProtectionRequest,
  () => CreateProtectionResponse
);
export var DisassociateHealthCheck = op(
  n0,
  _DHC,
  0,
  () => DisassociateHealthCheckRequest,
  () => DisassociateHealthCheckResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TRa,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
