// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ATP, _CI, _GATP, _GATPI, _GATPO, _IT, _PATP, _PATPI, _PATPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AutoTerminationPolicy = struct(n0, _ATP, 0, [_IT], [1]);
export var GetAutoTerminationPolicyInput = struct(n0, _GATPI, 0, [_CI], [0]);
export var GetAutoTerminationPolicyOutput = struct(n0, _GATPO, 0, [_ATP], [() => AutoTerminationPolicy]);
export var PutAutoTerminationPolicyInput = struct(n0, _PATPI, 0, [_CI, _ATP], [0, () => AutoTerminationPolicy]);
export var PutAutoTerminationPolicyOutput = struct(n0, _PATPO, 0, [], []);
export var GetAutoTerminationPolicy = op(
  n0,
  _GATP,
  0,
  () => GetAutoTerminationPolicyInput,
  () => GetAutoTerminationPolicyOutput
);
export var PutAutoTerminationPolicy = op(
  n0,
  _PATP,
  0,
  () => PutAutoTerminationPolicyInput,
  () => PutAutoTerminationPolicyOutput
);
