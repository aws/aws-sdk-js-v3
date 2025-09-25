// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AII,
  _AIr,
  _AN,
  _ANr,
  _ASI,
  _Au,
  _CA,
  _CAI,
  _CAIR,
  _CAIRr,
  _CAR,
  _CARr,
  _CAS,
  _CASR,
  _CASRr,
  _CIP,
  _CIPR,
  _CIPRr,
  _CR,
  _CRR,
  _CRRr,
  _CRS,
  _CRSR,
  _CRSRr,
  _CTl,
  _CTP,
  _CTPR,
  _CTPRr,
  _DA,
  _IPC,
  _IPI,
  _IPN,
  _K,
  _KKA,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _MMSB,
  _NC,
  _PS,
  _R,
  _RAes,
  _RI,
  _RN,
  _RSI,
  _RSN,
  _Ru,
  _SN,
  _SPe,
  _T,
  _Ta,
  _TK,
  _TL,
  _TPI,
  _TPN,
  _TR,
  _TRR,
  _TRRa,
  _Ty,
  _UR,
  _URR,
  _URRn,
  _Va,
  n0,
} from "./schemas_0";
import { RelayAuthentication } from "./schemas_5_Relay";
import { IngressPointConfiguration, NetworkConfiguration, PolicyStatementList } from "./schemas_6_Traffic";
import { Rules } from "./schemas_7_Rule";
import { ArchiveRetention } from "./schemas_10_Archive";

/* eslint no-var: 0 */

export var CreateAddonInstanceRequest = struct(n0, _CAIR, 0, [_CTl, _ASI, _T], [[0, 4], 0, () => TagList]);
export var CreateAddonInstanceResponse = struct(n0, _CAIRr, 0, [_AII], [0]);
export var CreateAddonSubscriptionRequest = struct(n0, _CASR, 0, [_CTl, _AN, _T], [[0, 4], 0, () => TagList]);
export var CreateAddonSubscriptionResponse = struct(n0, _CASRr, 0, [_ASI], [0]);
export var CreateArchiveRequest = struct(
  n0,
  _CAR,
  0,
  [_CTl, _ANr, _R, _KKA, _T],
  [[0, 4], 0, () => ArchiveRetention, 0, () => TagList]
);
export var CreateArchiveResponse = struct(n0, _CARr, 0, [_AIr], [0]);
export var CreateIngressPointRequest = struct(
  n0,
  _CIPR,
  0,
  [_CTl, _IPN, _Ty, _RSI, _TPI, _IPC, _NC, _T],
  [[0, 4], 0, 0, 0, 0, [() => IngressPointConfiguration, 0], () => NetworkConfiguration, () => TagList]
);
export var CreateIngressPointResponse = struct(n0, _CIPRr, 0, [_IPI], [0]);
export var CreateRelayRequest = struct(
  n0,
  _CRR,
  0,
  [_CTl, _RN, _SN, _SPe, _Au, _T],
  [[0, 4], 0, 0, 1, () => RelayAuthentication, () => TagList]
);
export var CreateRelayResponse = struct(n0, _CRRr, 0, [_RI], [0]);
export var CreateRuleSetRequest = struct(
  n0,
  _CRSR,
  0,
  [_CTl, _RSN, _Ru, _T],
  [[0, 4], 0, [() => Rules, 0], () => TagList]
);
export var CreateRuleSetResponse = struct(n0, _CRSRr, 0, [_RSI], [0]);
export var CreateTrafficPolicyRequest = struct(
  n0,
  _CTPR,
  0,
  [_CTl, _TPN, _PS, _DA, _MMSB, _T],
  [[0, 4], 0, () => PolicyStatementList, 0, 1, () => TagList]
);
export var CreateTrafficPolicyResponse = struct(n0, _CTPRr, 0, [_TPI], [0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAes], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => TagList]);
export var Tag = struct(n0, _Ta, 0, [_K, _Va], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RAes, _T], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RAes, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var CreateAddonInstance = op(
  n0,
  _CAI,
  2,
  () => CreateAddonInstanceRequest,
  () => CreateAddonInstanceResponse
);
export var CreateAddonSubscription = op(
  n0,
  _CAS,
  2,
  () => CreateAddonSubscriptionRequest,
  () => CreateAddonSubscriptionResponse
);
export var CreateArchive = op(
  n0,
  _CA,
  2,
  () => CreateArchiveRequest,
  () => CreateArchiveResponse
);
export var CreateIngressPoint = op(
  n0,
  _CIP,
  2,
  () => CreateIngressPointRequest,
  () => CreateIngressPointResponse
);
export var CreateRelay = op(
  n0,
  _CR,
  2,
  () => CreateRelayRequest,
  () => CreateRelayResponse
);
export var CreateRuleSet = op(
  n0,
  _CRS,
  2,
  () => CreateRuleSetRequest,
  () => CreateRuleSetResponse
);
export var CreateTrafficPolicy = op(
  n0,
  _CTP,
  2,
  () => CreateTrafficPolicyRequest,
  () => CreateTrafficPolicyResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  2,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  2,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
