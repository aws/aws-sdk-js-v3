// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GMPGP, _GMPGPI, _GMPGPO, _MPGN, _RPes, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetModelPackageGroupPolicyInput = struct(n0, _GMPGPI, 0, [_MPGN], [0]);
export var GetModelPackageGroupPolicyOutput = struct(n0, _GMPGPO, 0, [_RPes], [0]);
export var GetModelPackageGroupPolicy = op(
  n0,
  _GMPGP,
  0,
  () => GetModelPackageGroupPolicyInput,
  () => GetModelPackageGroupPolicyOutput
);
