// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AR,
  _ARR,
  _ARRs,
  _DG,
  _DGR,
  _DGRe,
  _DR,
  _DRR,
  _DRRi,
  _GI,
  _h,
  _LGRis,
  _LGRR,
  _LGRRi,
  _MR,
  _NT,
  _RA,
  _Re,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateResourceRequest = struct(n0, _ARR, 0, [_GI, _RA], [[0, 1], 0]);
export var AssociateResourceResponse = struct(n0, _ARRs, 0, [], []);
export var DeleteGroupRequest = struct(n0, _DGR, 0, [_GI], [[0, 1]]);
export var DeleteGroupResponse = struct(n0, _DGRe, 0, [], []);
export var DisassociateResourceRequest = struct(n0, _DRR, 0, [_GI, _RA], [[0, 1], 0]);
export var DisassociateResourceResponse = struct(n0, _DRRi, 0, [], []);
export var ListGroupResourcesRequest = struct(n0, _LGRR, 0, [_NT, _MR, _GI], [0, 1, [0, 1]]);
export var ListGroupResourcesResponse = struct(n0, _LGRRi, 0, [_Re, _NT], [64 | 0, 0]);
export var StringList = 64 | 0;

export var AssociateResource = op(
  n0,
  _AR,
  {
    [_h]: ["PATCH", "/group/{GroupIdentifier}/associate", 200],
  },
  () => AssociateResourceRequest,
  () => AssociateResourceResponse
);
export var DeleteGroup = op(
  n0,
  _DG,
  {
    [_h]: ["DELETE", "/group/{GroupIdentifier}", 200],
  },
  () => DeleteGroupRequest,
  () => DeleteGroupResponse
);
export var DisassociateResource = op(
  n0,
  _DR,
  {
    [_h]: ["PATCH", "/group/{GroupIdentifier}/disassociate", 200],
  },
  () => DisassociateResourceRequest,
  () => DisassociateResourceResponse
);
export var ListGroupResources = op(
  n0,
  _LGRis,
  {
    [_h]: ["POST", "/group/{GroupIdentifier}/resources", 200],
  },
  () => ListGroupResourcesRequest,
  () => ListGroupResourcesResponse
);
