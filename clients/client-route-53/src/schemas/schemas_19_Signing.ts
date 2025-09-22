// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CD,
  _DAM,
  _DAT,
  _DNSKEYR,
  _DNSSECS,
  _DSR,
  _DV,
  _F,
  _GDNSSEC,
  _GDNSSECR,
  _GDNSSECRe,
  _ht,
  _HZI,
  _KA,
  _KSK,
  _KSKe,
  _KT,
  _LMD,
  _N,
  _PK,
  _S,
  _SAM,
  _SAT,
  _SM,
  _SS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DNSSECStatus = struct(n0, _DNSSECS, 0, [_SS, _SM], [0, 0]);
export var GetDNSSECRequest = struct(n0, _GDNSSECR, 0, [_HZI], [[0, 1]]);
export var GetDNSSECResponse = struct(n0, _GDNSSECRe, 0, [_S, _KSKe], [() => DNSSECStatus, () => KeySigningKeys]);
export var KeySigningKey = struct(
  n0,
  _KSK,
  0,
  [_N, _KA, _F, _SAM, _SAT, _DAM, _DAT, _KT, _DV, _PK, _DSR, _DNSKEYR, _S, _SM, _CD, _LMD],
  [0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 4, 4]
);
export var KeySigningKeys = list(n0, _KSKe, 0, () => KeySigningKey);
export var GetDNSSEC = op(
  n0,
  _GDNSSEC,
  {
    [_ht]: ["GET", "/2013-04-01/hostedzone/{HostedZoneId}/dnssec", 200],
  },
  () => GetDNSSECRequest,
  () => GetDNSSECResponse
);
