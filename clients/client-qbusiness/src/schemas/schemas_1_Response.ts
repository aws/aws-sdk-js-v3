// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _aIp,
  _cA,
  _cIu,
  _CRC,
  _cRC,
  _cRCA,
  _CRCD,
  _CRCh,
  _cRCI,
  _cT,
  _DCRC,
  _DCRCR,
  _DCRCRe,
  _dN,
  _e,
  _ex,
  _GCRC,
  _GCRCR,
  _GCRCRe,
  _hQ,
  _ht,
  _IC,
  _iCns,
  _id,
  _iUC,
  _LCRC,
  _LCRCR,
  _LCRCRi,
  _lUC,
  _mRa,
  _nT,
  _oSu,
  _pe,
  _rC,
  _RCe,
  _RCes,
  _rCS,
  _rL,
  _s,
  _tA,
  _to,
  _uA,
  _UCRC,
  _UCRCR,
  _UCRCRp,
  ErrorDetail,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChatResponseConfiguration = struct(
  n0,
  _CRC,
  0,
  [_cRCI, _cRCA, _dN, _rCS, _s, _cA, _uA],
  [0, 0, 0, 0, 0, 4, 4]
);
export var ChatResponseConfigurationDetail = struct(
  n0,
  _CRCD,
  0,
  [_rC, _rCS, _s, _e, _uA],
  [() => ResponseConfigurations, 0, 0, () => ErrorDetail, 4]
);
export var DeleteChatResponseConfigurationRequest = struct(
  n0,
  _DCRCR,
  0,
  [_aIp, _cRCI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteChatResponseConfigurationResponse = struct(n0, _DCRCRe, 0, [], []);
export var GetChatResponseConfigurationRequest = struct(
  n0,
  _GCRCR,
  0,
  [_aIp, _cRCI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetChatResponseConfigurationResponse = struct(
  n0,
  _GCRCRe,
  0,
  [_cRCI, _cRCA, _dN, _cA, _iUC, _lUC],
  [0, 0, 0, 4, () => ChatResponseConfigurationDetail, () => ChatResponseConfigurationDetail]
);
export var InstructionCollection = struct(
  n0,
  _IC,
  0,
  [_rL, _tA, _pe, _oSu, _id, _to, _cIu, _ex],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var ListChatResponseConfigurationsRequest = struct(
  n0,
  _LCRCR,
  0,
  [_aIp, _mRa, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListChatResponseConfigurationsResponse = struct(
  n0,
  _LCRCRi,
  0,
  [_cRC, _nT],
  [() => ChatResponseConfigurations, 0]
);
export var ResponseConfiguration = struct(n0, _RCe, 0, [_iCns], [() => InstructionCollection]);
export var UpdateChatResponseConfigurationRequest = struct(
  n0,
  _UCRCR,
  0,
  [_aIp, _cRCI, _dN, _rC, _cT],
  [[0, 1], [0, 1], 0, () => ResponseConfigurations, [0, 4]]
);
export var UpdateChatResponseConfigurationResponse = struct(n0, _UCRCRp, 0, [], []);
export var ChatResponseConfigurations = list(n0, _CRCh, 0, () => ChatResponseConfiguration);
export var ResponseConfigurations = map(n0, _RCes, 0, 0, () => ResponseConfiguration);
export var DeleteChatResponseConfiguration = op(
  n0,
  _DCRC,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}", 200],
  },
  () => DeleteChatResponseConfigurationRequest,
  () => DeleteChatResponseConfigurationResponse
);
export var GetChatResponseConfiguration = op(
  n0,
  _GCRC,
  {
    [_ht]: ["GET", "/applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}", 200],
  },
  () => GetChatResponseConfigurationRequest,
  () => GetChatResponseConfigurationResponse
);
export var ListChatResponseConfigurations = op(
  n0,
  _LCRC,
  {
    [_ht]: ["GET", "/applications/{applicationId}/chatresponseconfigurations", 200],
  },
  () => ListChatResponseConfigurationsRequest,
  () => ListChatResponseConfigurationsResponse
);
export var UpdateChatResponseConfiguration = op(
  n0,
  _UCRC,
  {
    [_ht]: ["PUT", "/applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}", 200],
  },
  () => UpdateChatResponseConfigurationRequest,
  () => UpdateChatResponseConfigurationResponse
);
