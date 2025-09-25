// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DSPT, _PNr, _Pro, _PTr, _PTro, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ProcessesType = struct(n0, _PTr, 0, [_Pro], [() => Processes]);
export var ProcessType = struct(n0, _PTro, 0, [_PNr], [0]);
export var Processes = list(n0, _Pro, 0, () => ProcessType);
export var DescribeScalingProcessTypes = op(
  n0,
  _DSPT,
  0,
  () => Unit,
  () => ProcessesType
);
