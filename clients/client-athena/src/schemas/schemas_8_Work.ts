// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _ACdd,
  _ATu,
  _BSCPQ,
  _CCEC,
  _Con,
  _CT,
  _CU,
  _CULP,
  _CWG,
  _CWGI,
  _CWGO,
  _D,
  _EBO,
  _ECn,
  _EEV,
  _EIC,
  _EMEC,
  _En,
  _ER,
  _ESAG,
  _EV,
  _EVL,
  _EVn,
  _EWGC,
  _GWG,
  _GWGI,
  _GWGO,
  _ICAA,
  _ICC,
  _ICIA,
  _KK,
  _LEV,
  _LEVI,
  _LEVO,
  _LS,
  _LSR,
  _LSRi,
  _LWG,
  _LWGI,
  _LWGO,
  _MQRC,
  _MQRCU,
  _MQREC,
  _MR,
  _N,
  _NT,
  _NV,
  _OL,
  _PCWME,
  _QRSAGC,
  _RAC,
  _RBSCPQ,
  _RC,
  _RCCEC,
  _RCU,
  _REBO,
  _REC,
  _ROL,
  _RPE,
  _S,
  _Se,
  _SEV,
  _SF,
  _SI,
  _SL,
  _SSess,
  _St,
  _Ta,
  _UWG,
  _UWGI,
  _UWGO,
  _WG,
  _WGC,
  _WGCU,
  _WGL,
  _WGo,
  _WGS,
  n0,
} from "./schemas_0";
import { SessionStatus } from "./schemas_3_Session";
import { AclConfiguration, EncryptionConfiguration, ResultConfiguration } from "./schemas_5_Get";
import { TagList } from "./schemas_12_Create";

/* eslint no-var: 0 */

export var CreateWorkGroupInput = struct(
  n0,
  _CWGI,
  0,
  [_N, _Con, _D, _Ta],
  [0, () => WorkGroupConfiguration, 0, () => TagList]
);
export var CreateWorkGroupOutput = struct(n0, _CWGO, 0, [], []);
export var CustomerContentEncryptionConfiguration = struct(n0, _CCEC, 0, [_KK], [0]);
export var EngineVersion = struct(n0, _EV, 0, [_SEV, _EEV], [0, 0]);
export var GetWorkGroupInput = struct(n0, _GWGI, 0, [_WG], [0]);
export var GetWorkGroupOutput = struct(n0, _GWGO, 0, [_WG], [() => WorkGroup]);
export var IdentityCenterConfiguration = struct(n0, _ICC, 0, [_EIC, _ICIA], [2, 0]);
export var ListEngineVersionsInput = struct(n0, _LEVI, 0, [_NT, _MR], [0, 1]);
export var ListEngineVersionsOutput = struct(n0, _LEVO, 0, [_EVn, _NT], [() => EngineVersionsList, 0]);
export var ListSessionsRequest = struct(n0, _LSR, 0, [_WG, _SF, _MR, _NT], [0, 0, 1, 0]);
export var ListSessionsResponse = struct(n0, _LSRi, 0, [_NT, _Se], [0, () => SessionsList]);
export var ListWorkGroupsInput = struct(n0, _LWGI, 0, [_NT, _MR], [0, 1]);
export var ListWorkGroupsOutput = struct(n0, _LWGO, 0, [_WGo, _NT], [() => WorkGroupsList, 0]);
export var ManagedQueryResultsConfiguration = struct(
  n0,
  _MQRC,
  0,
  [_En, _ECn],
  [2, () => ManagedQueryResultsEncryptionConfiguration]
);
export var ManagedQueryResultsConfigurationUpdates = struct(
  n0,
  _MQRCU,
  0,
  [_En, _ECn, _REC],
  [2, () => ManagedQueryResultsEncryptionConfiguration, 2]
);
export var ManagedQueryResultsEncryptionConfiguration = struct(n0, _MQREC, 0, [_KK], [0]);
export var QueryResultsS3AccessGrantsConfiguration = struct(n0, _QRSAGC, 0, [_ESAG, _CULP, _ATu], [2, 2, 0]);
export var ResultConfigurationUpdates = struct(
  n0,
  _RCU,
  0,
  [_OL, _ROL, _ECn, _REC, _EBO, _REBO, _AC, _RAC],
  [0, 2, () => EncryptionConfiguration, 2, 0, 2, () => AclConfiguration, 2]
);
export var SessionSummary = struct(
  n0,
  _SSess,
  0,
  [_SI, _D, _EV, _NV, _St],
  [0, 0, () => EngineVersion, 0, () => SessionStatus]
);
export var UpdateWorkGroupInput = struct(
  n0,
  _UWGI,
  0,
  [_WG, _D, _CU, _S],
  [0, 0, () => WorkGroupConfigurationUpdates, 0]
);
export var UpdateWorkGroupOutput = struct(n0, _UWGO, 0, [], []);
export var WorkGroup = struct(
  n0,
  _WG,
  0,
  [_N, _S, _Con, _D, _CT, _ICAA],
  [0, 0, () => WorkGroupConfiguration, 0, 4, 0]
);
export var WorkGroupConfiguration = struct(
  n0,
  _WGC,
  0,
  [_RC, _MQRC, _EWGC, _PCWME, _BSCPQ, _RPE, _EV, _ACdd, _ER, _CCEC, _EMEC, _ICC, _QRSAGC],
  [
    () => ResultConfiguration,
    () => ManagedQueryResultsConfiguration,
    2,
    2,
    1,
    2,
    () => EngineVersion,
    0,
    0,
    () => CustomerContentEncryptionConfiguration,
    2,
    () => IdentityCenterConfiguration,
    () => QueryResultsS3AccessGrantsConfiguration,
  ]
);
export var WorkGroupConfigurationUpdates = struct(
  n0,
  _WGCU,
  0,
  [_EWGC, _RCU, _MQRCU, _PCWME, _BSCPQ, _RBSCPQ, _RPE, _EV, _RCCEC, _ACdd, _ER, _CCEC, _EMEC, _QRSAGC],
  [
    2,
    () => ResultConfigurationUpdates,
    () => ManagedQueryResultsConfigurationUpdates,
    2,
    1,
    2,
    2,
    () => EngineVersion,
    2,
    0,
    0,
    () => CustomerContentEncryptionConfiguration,
    2,
    () => QueryResultsS3AccessGrantsConfiguration,
  ]
);
export var WorkGroupSummary = struct(n0, _WGS, 0, [_N, _S, _D, _CT, _EV, _ICAA], [0, 0, 0, 4, () => EngineVersion, 0]);
export var EngineVersionsList = list(n0, _EVL, 0, () => EngineVersion);
export var SessionsList = list(n0, _SL, 0, () => SessionSummary);
export var WorkGroupsList = list(n0, _WGL, 0, () => WorkGroupSummary);
export var CreateWorkGroup = op(
  n0,
  _CWG,
  0,
  () => CreateWorkGroupInput,
  () => CreateWorkGroupOutput
);
export var GetWorkGroup = op(
  n0,
  _GWG,
  0,
  () => GetWorkGroupInput,
  () => GetWorkGroupOutput
);
export var ListEngineVersions = op(
  n0,
  _LEV,
  0,
  () => ListEngineVersionsInput,
  () => ListEngineVersionsOutput
);
export var ListSessions = op(
  n0,
  _LS,
  0,
  () => ListSessionsRequest,
  () => ListSessionsResponse
);
export var ListWorkGroups = op(
  n0,
  _LWG,
  0,
  () => ListWorkGroupsInput,
  () => ListWorkGroupsOutput
);
export var UpdateWorkGroup = op(
  n0,
  _UWG,
  0,
  () => UpdateWorkGroupInput,
  () => UpdateWorkGroupOutput
);
