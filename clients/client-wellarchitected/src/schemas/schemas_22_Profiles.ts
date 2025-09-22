// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AP, _API, _DPi, _DPIi, _h, _PA, _WI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateProfilesInput = struct(n0, _API, 0, [_WI, _PA], [[0, 1], 64 | 0]);
export var DisassociateProfilesInput = struct(n0, _DPIi, 0, [_WI, _PA], [[0, 1], 64 | 0]);
export var ProfileArns = 64 | 0;

export var AssociateProfiles = op(
  n0,
  _AP,
  {
    [_h]: ["PATCH", "/workloads/{WorkloadId}/associateProfiles", 200],
  },
  () => AssociateProfilesInput,
  () => Unit
);
export var DisassociateProfiles = op(
  n0,
  _DPi,
  {
    [_h]: ["PATCH", "/workloads/{WorkloadId}/disassociateProfiles", 200],
  },
  () => DisassociateProfilesInput,
  () => Unit
);
