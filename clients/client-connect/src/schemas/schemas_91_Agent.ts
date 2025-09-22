// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACR,
  _ACRL,
  _ACS,
  _Age,
  _ASBC,
  _ASBCc,
  _ASR,
  _ATC,
  _C,
  _CF,
  _CI,
  _Conta,
  _CS,
  _CTAT,
  _Fil,
  _GCUD,
  _GCUDR,
  _GCUDRe,
  _h,
  _HGSR,
  _HP,
  _HPR,
  _I,
  _II,
  _IM,
  _LF,
  _LFe,
  _LO,
  _LT,
  _LTe,
  _MRa,
  _MSBC,
  _NS,
  _NT,
  _Q,
  _Qu,
  _RP,
  _RPo,
  _SA,
  _SN,
  _SST,
  _SSTt,
  _St,
  _UD,
  _UDF,
  _UDL,
  _UHG,
  _URs,
  _Us,
  n0,
} from "./schemas_0";
import { QueueReference, RoutingProfileReference } from "./schemas_84_Get";

/* eslint no-var: 0 */

export var AgentContactReference = struct(
  n0,
  _ACR,
  0,
  [_CI, _C, _IM, _ACS, _SST, _CTAT, _Q],
  [0, 0, 0, 0, 4, 4, () => QueueReference]
);
export var AgentStatusReference = struct(n0, _ASR, 0, [_SSTt, _SA, _SN], [4, 0, 0]);
export var ContactFilter = struct(n0, _CF, 0, [_CS], [64 | 0]);
export var GetCurrentUserDataRequest = struct(
  n0,
  _GCUDR,
  0,
  [_II, _Fil, _NT, _MRa],
  [[0, 1], () => UserDataFilters, 0, 1]
);
export var GetCurrentUserDataResponse = struct(n0, _GCUDRe, 0, [_NT, _UDL, _ATC], [0, () => UserDataList, 1]);
export var HierarchyGroupSummaryReference = struct(n0, _HGSR, 0, [_I, _A], [0, 0]);
export var HierarchyPathReference = struct(
  n0,
  _HPR,
  0,
  [_LO, _LT, _LTe, _LF, _LFe],
  [
    () => HierarchyGroupSummaryReference,
    () => HierarchyGroupSummaryReference,
    () => HierarchyGroupSummaryReference,
    () => HierarchyGroupSummaryReference,
    () => HierarchyGroupSummaryReference,
  ]
);
export var UserData = struct(
  n0,
  _UD,
  0,
  [_Us, _RP, _HP, _St, _ASBC, _MSBC, _ASBCc, _Conta, _NS],
  [
    () => UserReference,
    () => RoutingProfileReference,
    () => HierarchyPathReference,
    () => AgentStatusReference,
    128 | 1,
    128 | 1,
    128 | 1,
    () => AgentContactReferenceList,
    0,
  ]
);
export var UserDataFilters = struct(
  n0,
  _UDF,
  0,
  [_Qu, _CF, _RPo, _Age, _UHG],
  [64 | 0, () => ContactFilter, 64 | 0, 64 | 0, 64 | 0]
);
export var UserReference = struct(n0, _URs, 0, [_I, _A], [0, 0]);
export var AgentContactReferenceList = list(n0, _ACRL, 0, () => AgentContactReference);
export var AgentsMinOneMaxHundred = 64 | 0;

export var ContactStates = 64 | 0;

export var UserDataHierarchyGroups = 64 | 0;

export var UserDataList = list(n0, _UDL, 0, () => UserData);
export var ChannelToCountMap = 128 | 1;

export var GetCurrentUserData = op(
  n0,
  _GCUD,
  {
    [_h]: ["POST", "/metrics/userdata/{InstanceId}", 200],
  },
  () => GetCurrentUserDataRequest,
  () => GetCurrentUserDataResponse
);
