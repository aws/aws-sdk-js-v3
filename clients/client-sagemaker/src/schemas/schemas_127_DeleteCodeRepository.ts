// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRN, _DCRelete, _DCRI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCodeRepositoryInput = struct(n0, _DCRI, 0, [_CRN], [0]);
export var DeleteCodeRepository = op(
  n0,
  _DCRelete,
  0,
  () => DeleteCodeRepositoryInput,
  () => Unit
);
