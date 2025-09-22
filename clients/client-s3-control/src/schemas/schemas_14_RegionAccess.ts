// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _CTl,
  _De,
  _DMRAP,
  _DMRAPI,
  _DMRAPR,
  _DMRAPRe,
  _EMRAPP,
  _Es,
  _GMRAPP,
  _GMRAPPR,
  _GMRAPPRe,
  _GMRAPPS,
  _GMRAPPSR,
  _GMRAPPSRe,
  _h,
  _hCR,
  _hH,
  _hL,
  _MRAPPD,
  _N,
  _PMRAPP,
  _PMRAPPI,
  _PMRAPPR,
  _PMRAPPRu,
  _PMRAPPu,
  _Po,
  _Pro,
  _RTARN,
  _xaai,
  n0,
} from "./schemas_0";
import { PolicyStatus } from "./schemas_21_Status";

/* eslint no-var: 0 */

export var DeleteMultiRegionAccessPointInput = struct(n0, _DMRAPI, 0, [_N], [0]);
export var DeleteMultiRegionAccessPointRequest = struct(
  n0,
  _DMRAPR,
  0,
  [_AI, _CTl, _De],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 4],
    () => DeleteMultiRegionAccessPointInput,
  ]
);
export var DeleteMultiRegionAccessPointResult = struct(n0, _DMRAPRe, 0, [_RTARN], [0]);
export var EstablishedMultiRegionAccessPointPolicy = struct(n0, _EMRAPP, 0, [_Po], [0]);
export var GetMultiRegionAccessPointPolicyRequest = struct(
  n0,
  _GMRAPPR,
  0,
  [_AI, _N],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetMultiRegionAccessPointPolicyResult = struct(
  n0,
  _GMRAPPRe,
  0,
  [_Po],
  [() => MultiRegionAccessPointPolicyDocument]
);
export var GetMultiRegionAccessPointPolicyStatusRequest = struct(
  n0,
  _GMRAPPSR,
  0,
  [_AI, _N],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetMultiRegionAccessPointPolicyStatusResult = struct(n0, _GMRAPPSRe, 0, [_Es], [[() => PolicyStatus, 0]]);
export var MultiRegionAccessPointPolicyDocument = struct(
  n0,
  _MRAPPD,
  0,
  [_Es, _Pro],
  [() => EstablishedMultiRegionAccessPointPolicy, () => ProposedMultiRegionAccessPointPolicy]
);
export var ProposedMultiRegionAccessPointPolicy = struct(n0, _PMRAPP, 0, [_Po], [0]);
export var PutMultiRegionAccessPointPolicyInput = struct(n0, _PMRAPPI, 0, [_N, _Po], [0, 0]);
export var PutMultiRegionAccessPointPolicyRequest = struct(
  n0,
  _PMRAPPR,
  0,
  [_AI, _CTl, _De],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 4],
    () => PutMultiRegionAccessPointPolicyInput,
  ]
);
export var PutMultiRegionAccessPointPolicyResult = struct(n0, _PMRAPPRu, 0, [_RTARN], [0]);
export var DeleteMultiRegionAccessPoint = op(
  n0,
  _DMRAP,
  {
    [_h]: ["POST", "/v20180820/async-requests/mrap/delete", 200],
    [_hCR]: 1,
  },
  () => DeleteMultiRegionAccessPointRequest,
  () => DeleteMultiRegionAccessPointResult
);
export var GetMultiRegionAccessPointPolicy = op(
  n0,
  _GMRAPP,
  {
    [_h]: ["GET", "/v20180820/mrap/instances/{Name+}/policy", 200],
    [_hCR]: 1,
  },
  () => GetMultiRegionAccessPointPolicyRequest,
  () => GetMultiRegionAccessPointPolicyResult
);
export var GetMultiRegionAccessPointPolicyStatus = op(
  n0,
  _GMRAPPS,
  {
    [_h]: ["GET", "/v20180820/mrap/instances/{Name+}/policystatus", 200],
    [_hCR]: 1,
  },
  () => GetMultiRegionAccessPointPolicyStatusRequest,
  () => GetMultiRegionAccessPointPolicyStatusResult
);
export var PutMultiRegionAccessPointPolicy = op(
  n0,
  _PMRAPPu,
  {
    [_h]: ["POST", "/v20180820/async-requests/mrap/put-policy", 200],
    [_hCR]: 1,
  },
  () => PutMultiRegionAccessPointPolicyRequest,
  () => PutMultiRegionAccessPointPolicyResult
);
