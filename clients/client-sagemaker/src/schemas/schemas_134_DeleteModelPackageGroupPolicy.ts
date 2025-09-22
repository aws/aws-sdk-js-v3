// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMPGP, _DMPGPI, _MPGN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteModelPackageGroupPolicyInput = struct(n0, _DMPGPI, 0, [_MPGN], [0]);
export var DeleteModelPackageGroupPolicy = op(
  n0,
  _DMPGP,
  0,
  () => DeleteModelPackageGroupPolicyInput,
  () => Unit
);
