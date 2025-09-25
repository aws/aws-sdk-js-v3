// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CI,
  _CL,
  _GMSP,
  _GMSPI,
  _GMSPO,
  _MCCU,
  _MCU,
  _MCUa,
  _MODCU,
  _MSP,
  _PMSP,
  _PMSPI,
  _PMSPO,
  _SSc,
  _UPI,
  _UT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ComputeLimits = struct(n0, _CL, 0, [_UT, _MCU, _MCUa, _MODCU, _MCCU], [0, 1, 1, 1, 1]);
export var GetManagedScalingPolicyInput = struct(n0, _GMSPI, 0, [_CI], [0]);
export var GetManagedScalingPolicyOutput = struct(n0, _GMSPO, 0, [_MSP], [() => ManagedScalingPolicy]);
export var ManagedScalingPolicy = struct(n0, _MSP, 0, [_CL, _UPI, _SSc], [() => ComputeLimits, 1, 0]);
export var PutManagedScalingPolicyInput = struct(n0, _PMSPI, 0, [_CI, _MSP], [0, () => ManagedScalingPolicy]);
export var PutManagedScalingPolicyOutput = struct(n0, _PMSPO, 0, [], []);
export var GetManagedScalingPolicy = op(
  n0,
  _GMSP,
  0,
  () => GetManagedScalingPolicyInput,
  () => GetManagedScalingPolicyOutput
);
export var PutManagedScalingPolicy = op(
  n0,
  _PMSP,
  0,
  () => PutManagedScalingPolicyInput,
  () => PutManagedScalingPolicyOutput
);
