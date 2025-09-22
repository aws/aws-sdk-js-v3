// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _RA, _RR, _RRR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ResumeResourceRequest = struct(n0, _RRR, 0, [_RA], [0]);
export var ResumeResource = op(
  n0,
  _RR,
  2,
  () => ResumeResourceRequest,
  () => Unit
);
