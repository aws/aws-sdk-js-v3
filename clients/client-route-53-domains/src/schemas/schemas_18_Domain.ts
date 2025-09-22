// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDSFD, _DDSFDR, _DDSFDRi, _DN, _I, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateDelegationSignerFromDomainRequest = struct(n0, _DDSFDR, 0, [_DN, _I], [0, 0]);
export var DisassociateDelegationSignerFromDomainResponse = struct(n0, _DDSFDRi, 0, [_OI], [0]);
export var DisassociateDelegationSignerFromDomain = op(
  n0,
  _DDSFD,
  0,
  () => DisassociateDelegationSignerFromDomainRequest,
  () => DisassociateDelegationSignerFromDomainResponse
);
