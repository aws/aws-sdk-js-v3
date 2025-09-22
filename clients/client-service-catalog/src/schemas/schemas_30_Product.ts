// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Acco,
  _AL,
  _LSIFPP,
  _LSIFPPI,
  _LSIFPPO,
  _NPT,
  _PPIr,
  _PS,
  _PTa,
  _Reg,
  _SI,
  _SIS,
  _SIt,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListStackInstancesForProvisionedProductInput = struct(
  n0,
  _LSIFPPI,
  0,
  [_AL, _PPIr, _PTa, _PS],
  [0, 0, 0, 1]
);
export var ListStackInstancesForProvisionedProductOutput = struct(
  n0,
  _LSIFPPO,
  0,
  [_SI, _NPT],
  [() => StackInstances, 0]
);
export var StackInstance = struct(n0, _SIt, 0, [_Acco, _Reg, _SIS], [0, 0, 0]);
export var StackInstances = list(n0, _SI, 0, () => StackInstance);
export var ListStackInstancesForProvisionedProduct = op(
  n0,
  _LSIFPP,
  0,
  () => ListStackInstancesForProvisionedProductInput,
  () => ListStackInstancesForProvisionedProductOutput
);
