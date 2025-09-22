// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRBEI, _DRBEII, _DRBEIO, _eI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcesByExternalIdInput = struct(n0, _DRBEII, 0, [_eI], [0]);
export var DeleteResourcesByExternalIdOutput = struct(n0, _DRBEIO, 0, [], []);
export var DeleteResourcesByExternalId = op(
  n0,
  _DRBEI,
  0,
  () => DeleteResourcesByExternalIdInput,
  () => DeleteResourcesByExternalIdOutput
);
