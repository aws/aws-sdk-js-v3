// smithy-typescript generated code
import { op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aAMP,
  _AC,
  _ag,
  _AMDC,
  _aMDC,
  _bA,
  _cap,
  _cCFI,
  _cQI,
  _CSC,
  _cSC,
  _cSEA,
  _cSPN,
  _cSPNA,
  _dOC,
  _EA,
  _eAMD,
  _ECSC,
  _EDN,
  _em,
  _EOC,
  _EOM,
  _h,
  _i,
  _oM,
  _p,
  _PC,
  _PCr,
  _pr,
  _SCSC,
  _sEADN,
  _sm,
  _SOC,
  _SOM,
  _TCSC,
  _te,
  _TOC,
  _TOM,
  _UCCSC,
  _UCCSCR,
  _wTA,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EmailAddress = sim(n0, _EA, 0, 8);
export var EmailDisplayName = sim(n0, _EDN, 0, 8);
export var AgentlessConfig = struct(n0, _AC, 0, [], []);
export var AnswerMachineDetectionConfig = struct(n0, _AMDC, 0, [_eAMD, _aAMP], [2, 2]);
export var ChannelSubtypeConfig = struct(
  n0,
  _CSC,
  0,
  [_te, _sm, _em],
  [() => TelephonyChannelSubtypeConfig, () => SmsChannelSubtypeConfig, [() => EmailChannelSubtypeConfig, 0]]
);
export var EmailChannelSubtypeConfig = struct(
  n0,
  _ECSC,
  0,
  [_cap, _oM, _dOC],
  [1, () => EmailOutboundMode, [() => EmailOutboundConfig, 0]]
);
export var EmailOutboundConfig = struct(
  n0,
  _EOC,
  0,
  [_cSEA, _sEADN, _wTA],
  [[() => EmailAddress, 0], [() => EmailDisplayName, 0], 0]
);
export var PredictiveConfig = struct(n0, _PC, 0, [_bA], [1]);
export var ProgressiveConfig = struct(n0, _PCr, 0, [_bA], [1]);
export var SmsChannelSubtypeConfig = struct(
  n0,
  _SCSC,
  0,
  [_cap, _oM, _dOC],
  [1, () => SmsOutboundMode, () => SmsOutboundConfig]
);
export var SmsOutboundConfig = struct(n0, _SOC, 0, [_cSPNA, _wTA], [0, 0]);
export var TelephonyChannelSubtypeConfig = struct(
  n0,
  _TCSC,
  0,
  [_cap, _cQI, _oM, _dOC],
  [1, 0, () => TelephonyOutboundMode, () => TelephonyOutboundConfig]
);
export var TelephonyOutboundConfig = struct(
  n0,
  _TOC,
  0,
  [_cCFI, _cSPN, _aMDC],
  [0, 0, () => AnswerMachineDetectionConfig]
);
export var UpdateCampaignChannelSubtypeConfigRequest = struct(
  n0,
  _UCCSCR,
  0,
  [_i, _cSC],
  [
    [0, 1],
    [() => ChannelSubtypeConfig, 0],
  ]
);
export var EmailOutboundMode = uni(n0, _EOM, 0, [_ag], [() => AgentlessConfig]);
export var SmsOutboundMode = uni(n0, _SOM, 0, [_ag], [() => AgentlessConfig]);
export var TelephonyOutboundMode = uni(
  n0,
  _TOM,
  0,
  [_p, _pr, _ag],
  [() => ProgressiveConfig, () => PredictiveConfig, () => AgentlessConfig]
);
export var UpdateCampaignChannelSubtypeConfig = op(
  n0,
  _UCCSC,
  {
    [_h]: ["POST", "/v2/campaigns/{id}/channel-subtype-config", 200],
  },
  () => UpdateCampaignChannelSubtypeConfigRequest,
  () => Unit
);
