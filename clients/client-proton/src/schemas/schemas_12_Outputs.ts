// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _dI, _k, _NRDSC, _NRDSCI, _NRDSCO, _O, _o, _OL, _rAes, _sM, _st, _vS, n0, StatusMessage } from "./schemas_0";

/* eslint no-var: 0 */

export var NotifyResourceDeploymentStatusChangeInput = struct(
  n0,
  _NRDSCI,
  0,
  [_rAes, _st, _o, _dI, _sM],
  [0, 0, [() => OutputsList, 0], 0, [() => StatusMessage, 0]]
);
export var NotifyResourceDeploymentStatusChangeOutput = struct(n0, _NRDSCO, 0, [], []);
export var Output = struct(n0, _O, 8, [_k, _vS], [0, 0]);
export var OutputsList = list(n0, _OL, 0, [() => Output, 0]);
export var NotifyResourceDeploymentStatusChange = op(
  n0,
  _NRDSC,
  0,
  () => NotifyResourceDeploymentStatusChangeInput,
  () => NotifyResourceDeploymentStatusChangeOutput
);
