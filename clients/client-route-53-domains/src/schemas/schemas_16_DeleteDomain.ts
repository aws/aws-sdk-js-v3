// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DD, _DDR, _DDRe, _DN, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainRequest = struct(n0, _DDR, 0, [_DN], [0]);
export var DeleteDomainResponse = struct(n0, _DDRe, 0, [_OI], [0]);
export var DeleteDomain = op(
  n0,
  _DD,
  0,
  () => DeleteDomainRequest,
  () => DeleteDomainResponse
);
