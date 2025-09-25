// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import { _DN, _FIAK, _GI, _N, _Na, _Nam, _NL, _OI, _UDN, _UDNR, _UDNRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FIAuthKey = sim(n0, _FIAK, 0, 8);
export var Nameserver = struct(n0, _Nam, 0, [_N, _GI], [0, 64 | 0]);
export var UpdateDomainNameserversRequest = struct(
  n0,
  _UDNR,
  0,
  [_DN, _FIAK, _Na],
  [0, [() => FIAuthKey, 0], () => NameserverList]
);
export var UpdateDomainNameserversResponse = struct(n0, _UDNRp, 0, [_OI], [0]);
export var GlueIpList = 64 | 0;

export var NameserverList = list(n0, _NL, 0, () => Nameserver);
export var UpdateDomainNameservers = op(
  n0,
  _UDN,
  0,
  () => UpdateDomainNameserversRequest,
  () => UpdateDomainNameserversResponse
);
