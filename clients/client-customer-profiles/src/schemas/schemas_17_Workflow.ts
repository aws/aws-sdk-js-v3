// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CA,
  _DN,
  _h,
  _hQ,
  _It,
  _LUA,
  _LW,
  _LWI,
  _LWR,
  _LWRi,
  _MR,
  _mr,
  _NT,
  _nt,
  _QED,
  _QSD,
  _SDt,
  _Sta,
  _WI,
  _WL,
  _WT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListWorkflowsItem = struct(n0, _LWI, 0, [_WT, _WI, _Sta, _SDt, _CA, _LUA], [0, 0, 0, 0, 4, 4]);
export var ListWorkflowsRequest = struct(
  n0,
  _LWR,
  0,
  [_DN, _WT, _Sta, _QSD, _QED, _NT, _MR],
  [
    [0, 1],
    0,
    0,
    4,
    4,
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListWorkflowsResponse = struct(n0, _LWRi, 0, [_It, _NT], [() => WorkflowList, 0]);
export var WorkflowList = list(n0, _WL, 0, () => ListWorkflowsItem);
export var ListWorkflows = op(
  n0,
  _LW,
  {
    [_h]: ["POST", "/domains/{DomainName}/workflows", 200],
  },
  () => ListWorkflowsRequest,
  () => ListWorkflowsResponse
);
