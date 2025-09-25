// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AOI, _AOIR, _AOIRs, _CT, _DOI, _DOIR, _DOIRi, _ICC, _OI, _OIA, _PA, _PI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateOriginationIdentityRequest = struct(n0, _AOIR, 0, [_PI, _OI, _ICC, _CT], [0, 0, 0, [0, 4]]);
export var AssociateOriginationIdentityResult = struct(n0, _AOIRs, 0, [_PA, _PI, _OIA, _OI, _ICC], [0, 0, 0, 0, 0]);
export var DisassociateOriginationIdentityRequest = struct(n0, _DOIR, 0, [_PI, _OI, _ICC, _CT], [0, 0, 0, [0, 4]]);
export var DisassociateOriginationIdentityResult = struct(n0, _DOIRi, 0, [_PA, _PI, _OIA, _OI, _ICC], [0, 0, 0, 0, 0]);
export var AssociateOriginationIdentity = op(
  n0,
  _AOI,
  0,
  () => AssociateOriginationIdentityRequest,
  () => AssociateOriginationIdentityResult
);
export var DisassociateOriginationIdentity = op(
  n0,
  _DOI,
  0,
  () => DisassociateOriginationIdentityRequest,
  () => DisassociateOriginationIdentityResult
);
