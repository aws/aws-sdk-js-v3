// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AC, _aP, _CA, _CAR, _CARo, _co, _fII, _h, _me, _pGN, _pIS, _sP, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AgentConfiguration = struct(n0, _AC, 0, [_sP, _pIS, _aP], [2, 1, 128 | 0]);
export var ConfigureAgentRequest = struct(n0, _CAR, 0, [_pGN, _fII, _me], [[0, 1], 0, 128 | 0]);
export var ConfigureAgentResponse = struct(n0, _CARo, 0, [_co], [[() => AgentConfiguration, 16]]);
export var AgentParameters = 128 | 0;

export var Metadata = 128 | 0;

export var ConfigureAgent = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/profilingGroups/{profilingGroupName}/configureAgent", 200],
  },
  () => ConfigureAgentRequest,
  () => ConfigureAgentResponse
);
