// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRI, _CRR, _CRr, _D, _RAeg, _RN, _Tag, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRegistryInput = struct(n0, _CRI, 0, [_RN, _D, _Tag], [0, 0, 128 | 0]);
export var CreateRegistryResponse = struct(n0, _CRR, 0, [_RAeg, _RN, _D, _Tag], [0, 0, 0, 128 | 0]);
export var CreateRegistry = op(
  n0,
  _CRr,
  0,
  () => CreateRegistryInput,
  () => CreateRegistryResponse
);
