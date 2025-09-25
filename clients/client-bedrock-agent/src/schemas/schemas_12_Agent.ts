// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aGI,
  _aI,
  _aV,
  _DAAG,
  _DAAGR,
  _DAAGRe,
  _DF,
  _DFR,
  _DFRe,
  _DFV,
  _DFVR,
  _DFVRe,
  _fI,
  _fV,
  _h,
  _hQ,
  _id,
  _sRIUC,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAgentActionGroupRequest = struct(
  n0,
  _DAAGR,
  0,
  [_aI, _aV, _aGI, _sRIUC],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _sRIUC,
      },
    ],
  ]
);
export var DeleteAgentActionGroupResponse = struct(n0, _DAAGRe, 0, [], []);
export var DeleteFlowRequest = struct(
  n0,
  _DFR,
  0,
  [_fI, _sRIUC],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _sRIUC,
      },
    ],
  ]
);
export var DeleteFlowResponse = struct(n0, _DFRe, 0, [_id], [0]);
export var DeleteFlowVersionRequest = struct(
  n0,
  _DFVR,
  0,
  [_fI, _fV, _sRIUC],
  [
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _sRIUC,
      },
    ],
  ]
);
export var DeleteFlowVersionResponse = struct(n0, _DFVRe, 0, [_id, _v], [0, 0]);
export var DeleteAgentActionGroup = op(
  n0,
  _DAAG,
  {
    [_h]: ["DELETE", "/agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/", 204],
  },
  () => DeleteAgentActionGroupRequest,
  () => DeleteAgentActionGroupResponse
);
export var DeleteFlow = op(
  n0,
  _DF,
  {
    [_h]: ["DELETE", "/flows/{flowIdentifier}/", 200],
  },
  () => DeleteFlowRequest,
  () => DeleteFlowResponse
);
export var DeleteFlowVersion = op(
  n0,
  _DFV,
  {
    [_h]: ["DELETE", "/flows/{flowIdentifier}/versions/{flowVersion}/", 200],
  },
  () => DeleteFlowVersionRequest,
  () => DeleteFlowVersionResponse
);
