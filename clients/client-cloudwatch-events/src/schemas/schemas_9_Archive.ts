// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AN, _DA, _DAR, _DARe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteArchiveRequest = struct(n0, _DAR, 0, [_AN], [0]);
export var DeleteArchiveResponse = struct(n0, _DARe, 0, [], []);
export var DeleteArchive = op(
  n0,
  _DA,
  0,
  () => DeleteArchiveRequest,
  () => DeleteArchiveResponse
);
