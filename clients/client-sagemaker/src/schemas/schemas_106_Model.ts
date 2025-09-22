// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMP, _DMPI, _MPN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteModelPackageInput = struct(n0, _DMPI, 0, [_MPN], [0]);
export var DeleteModelPackage = op(
  n0,
  _DMP,
  0,
  () => DeleteModelPackageInput,
  () => Unit
);
