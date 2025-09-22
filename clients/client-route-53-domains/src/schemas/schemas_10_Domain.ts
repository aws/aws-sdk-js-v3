// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CEY, _DIY, _DN, _OI, _RDe, _RDRen, _RDRene, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RenewDomainRequest = struct(n0, _RDRen, 0, [_DN, _DIY, _CEY], [0, 1, 1]);
export var RenewDomainResponse = struct(n0, _RDRene, 0, [_OI], [0]);
export var RenewDomain = op(
  n0,
  _RDe,
  0,
  () => RenewDomainRequest,
  () => RenewDomainResponse
);
