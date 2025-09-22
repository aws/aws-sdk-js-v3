// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Do, _FDLI, _LFD, _LFDR, _LFDRi, _MR, _NT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListFirewallDomainsRequest = struct(n0, _LFDR, 0, [_FDLI, _MR, _NT], [0, 1, 0]);
export var ListFirewallDomainsResponse = struct(n0, _LFDRi, 0, [_NT, _Do], [0, 64 | 0]);
export var FirewallDomains = 64 | 0;

export var ListFirewallDomains = op(
  n0,
  _LFD,
  0,
  () => ListFirewallDomainsRequest,
  () => ListFirewallDomainsResponse
);
