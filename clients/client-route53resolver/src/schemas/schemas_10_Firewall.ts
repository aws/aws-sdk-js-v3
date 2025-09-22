// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _FC,
  _FCi,
  _FCL,
  _FFO,
  _GFC,
  _GFCR,
  _GFCRe,
  _I,
  _LFC,
  _LFCR,
  _LFCRi,
  _MR,
  _NT,
  _OI,
  _RI,
  _UFC,
  _UFCR,
  _UFCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FirewallConfig = struct(n0, _FC, 0, [_I, _RI, _OI, _FFO], [0, 0, 0, 0]);
export var GetFirewallConfigRequest = struct(n0, _GFCR, 0, [_RI], [0]);
export var GetFirewallConfigResponse = struct(n0, _GFCRe, 0, [_FC], [() => FirewallConfig]);
export var ListFirewallConfigsRequest = struct(n0, _LFCR, 0, [_MR, _NT], [1, 0]);
export var ListFirewallConfigsResponse = struct(n0, _LFCRi, 0, [_NT, _FCi], [0, () => FirewallConfigList]);
export var UpdateFirewallConfigRequest = struct(n0, _UFCR, 0, [_RI, _FFO], [0, 0]);
export var UpdateFirewallConfigResponse = struct(n0, _UFCRp, 0, [_FC], [() => FirewallConfig]);
export var FirewallConfigList = list(n0, _FCL, 0, () => FirewallConfig);
export var GetFirewallConfig = op(
  n0,
  _GFC,
  0,
  () => GetFirewallConfigRequest,
  () => GetFirewallConfigResponse
);
export var ListFirewallConfigs = op(
  n0,
  _LFC,
  0,
  () => ListFirewallConfigsRequest,
  () => ListFirewallConfigsResponse
);
export var UpdateFirewallConfig = op(
  n0,
  _UFC,
  0,
  () => UpdateFirewallConfigRequest,
  () => UpdateFirewallConfigResponse
);
