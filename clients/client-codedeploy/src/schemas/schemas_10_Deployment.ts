// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aN, _ASG, _ASGL, _DDG, _DDGI, _DDGO, _dGNe, _h, _hNCU, _n, _tH, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AutoScalingGroup = struct(n0, _ASG, 0, [_n, _h, _tH], [0, 0, 0]);
export var DeleteDeploymentGroupInput = struct(n0, _DDGI, 0, [_aN, _dGNe], [0, 0]);
export var DeleteDeploymentGroupOutput = struct(n0, _DDGO, 0, [_hNCU], [() => AutoScalingGroupList]);
export var AutoScalingGroupList = list(n0, _ASGL, 0, () => AutoScalingGroup);
export var DeleteDeploymentGroup = op(
  n0,
  _DDG,
  0,
  () => DeleteDeploymentGroupInput,
  () => DeleteDeploymentGroupOutput
);
