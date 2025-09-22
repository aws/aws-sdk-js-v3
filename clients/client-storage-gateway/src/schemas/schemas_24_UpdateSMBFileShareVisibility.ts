// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FSV, _GARN, _USMBFSV, _USMBFSVI, _USMBFSVO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateSMBFileShareVisibilityInput = struct(n0, _USMBFSVI, 0, [_GARN, _FSV], [0, 2]);
export var UpdateSMBFileShareVisibilityOutput = struct(n0, _USMBFSVO, 0, [_GARN], [0]);
export var UpdateSMBFileShareVisibility = op(
  n0,
  _USMBFSV,
  0,
  () => UpdateSMBFileShareVisibilityInput,
  () => UpdateSMBFileShareVisibilityOutput
);
