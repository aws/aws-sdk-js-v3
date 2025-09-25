// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidEndPointException as __InvalidEndPointException } from "../models/index";
import {
  _aQE,
  _c,
  _D,
  _DEPI,
  _DEPO,
  _DEPSI,
  _DEPSO,
  _DIFLB,
  _DIH,
  _e,
  _hE,
  _I,
  _IEPE,
  _II,
  _Ins,
  _IS,
  _ISn,
  _LBN,
  _M,
  _RC,
  _REPI,
  _REPO,
  _RIWLB,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterEndPointsInput = struct(n0, _DEPI, 0, [_LBN, _I], [0, () => Instances]);
export var DeregisterEndPointsOutput = struct(n0, _DEPO, 0, [_I], [() => Instances]);
export var DescribeEndPointStateInput = struct(n0, _DEPSI, 0, [_LBN, _I], [0, () => Instances]);
export var DescribeEndPointStateOutput = struct(n0, _DEPSO, 0, [_IS], [() => InstanceStates]);
export var Instance = struct(n0, _Ins, 0, [_II], [0]);
export var InstanceState = struct(n0, _ISn, 0, [_II, _St, _RC, _D], [0, 0, 0, 0]);
export var InvalidEndPointException = error(
  n0,
  _IEPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidInstance`, 400],
  },
  [_M],
  [0],

  __InvalidEndPointException
);
export var RegisterEndPointsInput = struct(n0, _REPI, 0, [_LBN, _I], [0, () => Instances]);
export var RegisterEndPointsOutput = struct(n0, _REPO, 0, [_I], [() => Instances]);
export var Instances = list(n0, _I, 0, () => Instance);
export var InstanceStates = list(n0, _IS, 0, () => InstanceState);
export var DeregisterInstancesFromLoadBalancer = op(
  n0,
  _DIFLB,
  0,
  () => DeregisterEndPointsInput,
  () => DeregisterEndPointsOutput
);
export var DescribeInstanceHealth = op(
  n0,
  _DIH,
  0,
  () => DescribeEndPointStateInput,
  () => DescribeEndPointStateOutput
);
export var RegisterInstancesWithLoadBalancer = op(
  n0,
  _RIWLB,
  0,
  () => RegisterEndPointsInput,
  () => RegisterEndPointsOutput
);
