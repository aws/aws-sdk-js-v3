// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BRl,
  _Ca,
  _CFG,
  _CFGR,
  _CFGRr,
  _CT,
  _CTA,
  _CTB,
  _D,
  _Da,
  _DCCa,
  _DFG,
  _DFGe,
  _DFGR,
  _DFGRe,
  _DFGRes,
  _DFM,
  _DFMR,
  _DFMRe,
  _DGTC,
  _EOS,
  _ETFN,
  _FD,
  _FGA,
  _FGN,
  _FGS,
  _FGSE,
  _FGSe,
  _FGSea,
  _FN,
  _FPe,
  _FR,
  _FTe,
  _KKI,
  _LFG,
  _LFGR,
  _LFGRi,
  _LMT,
  _LUS,
  _MR,
  _NCa,
  _NT,
  _OSC,
  _OSCf,
  _OSS,
  _OSSC,
  _OSSE,
  _OSTSB,
  _P,
  _PRCU,
  _PWCU,
  _RAo,
  _RIFN,
  _ROSU,
  _SBo,
  _SC,
  _SO,
  _SSC,
  _St,
  _STto,
  _SUr,
  _T,
  _TCD,
  _TCh,
  _TDt,
  _TF,
  _TM,
  _TNa,
  n0,
  TagList,
  Unit,
} from "./schemas_0";
import { FeatureDefinition, FeatureParameter, TtlDuration } from "./schemas_25_Feature";

/* eslint no-var: 0 */

export var CreateFeatureGroupRequest = struct(
  n0,
  _CFGR,
  0,
  [_FGN, _RIFN, _ETFN, _FD, _OSC, _OSCf, _TCh, _RAo, _D, _T],
  [
    0,
    0,
    0,
    () => FeatureDefinitions,
    () => OnlineStoreConfig,
    () => OfflineStoreConfig,
    () => ThroughputConfig,
    0,
    0,
    () => TagList,
  ]
);
export var CreateFeatureGroupResponse = struct(n0, _CFGRr, 0, [_FGA], [0]);
export var DataCatalogConfig = struct(n0, _DCCa, 0, [_TNa, _Ca, _Da], [0, 0, 0]);
export var DeleteFeatureGroupRequest = struct(n0, _DFGR, 0, [_FGN], [0]);
export var DescribeFeatureGroupRequest = struct(n0, _DFGRe, 0, [_FGN, _NT], [0, 0]);
export var DescribeFeatureGroupResponse = struct(
  n0,
  _DFGRes,
  0,
  [_FGA, _FGN, _RIFN, _ETFN, _FD, _CT, _LMT, _OSC, _OSCf, _TCh, _RAo, _FGS, _OSS, _LUS, _FR, _D, _NT, _OSTSB],
  [
    0,
    0,
    0,
    0,
    () => FeatureDefinitions,
    4,
    4,
    () => OnlineStoreConfig,
    () => OfflineStoreConfig,
    () => ThroughputConfigDescription,
    0,
    0,
    () => OfflineStoreStatus,
    () => LastUpdateStatus,
    0,
    0,
    0,
    1,
  ]
);
export var DescribeFeatureMetadataRequest = struct(n0, _DFMR, 0, [_FGN, _FN], [0, 0]);
export var DescribeFeatureMetadataResponse = struct(
  n0,
  _DFMRe,
  0,
  [_FGA, _FGN, _FN, _FTe, _CT, _LMT, _D, _P],
  [0, 0, 0, 0, 4, 4, 0, () => FeatureParameters]
);
export var FeatureGroupSummary = struct(
  n0,
  _FGSe,
  0,
  [_FGN, _FGA, _CT, _FGS, _OSS],
  [0, 0, 4, 0, () => OfflineStoreStatus]
);
export var LastUpdateStatus = struct(n0, _LUS, 0, [_St, _FR], [0, 0]);
export var ListFeatureGroupsRequest = struct(
  n0,
  _LFGR,
  0,
  [_NCa, _FGSE, _OSSE, _CTA, _CTB, _SO, _SBo, _MR, _NT],
  [0, 0, 0, 4, 4, 0, 0, 1, 0]
);
export var ListFeatureGroupsResponse = struct(n0, _LFGRi, 0, [_FGSea, _NT], [() => FeatureGroupSummaries, 0]);
export var OfflineStoreConfig = struct(
  n0,
  _OSCf,
  0,
  [_SSC, _DGTC, _DCCa, _TF],
  [() => S3StorageConfig, 2, () => DataCatalogConfig, 0]
);
export var OfflineStoreStatus = struct(n0, _OSS, 0, [_St, _BRl], [0, 0]);
export var OnlineStoreConfig = struct(
  n0,
  _OSC,
  0,
  [_SC, _EOS, _TDt, _STto],
  [() => OnlineStoreSecurityConfig, 2, () => TtlDuration, 0]
);
export var OnlineStoreSecurityConfig = struct(n0, _OSSC, 0, [_KKI], [0]);
export var S3StorageConfig = struct(n0, _SSC, 0, [_SUr, _KKI, _ROSU], [0, 0, 0]);
export var ThroughputConfig = struct(n0, _TCh, 0, [_TM, _PRCU, _PWCU], [0, 1, 1]);
export var ThroughputConfigDescription = struct(n0, _TCD, 0, [_TM, _PRCU, _PWCU], [0, 1, 1]);
export var FeatureDefinitions = list(n0, _FD, 0, () => FeatureDefinition);
export var FeatureGroupSummaries = list(n0, _FGSea, 0, () => FeatureGroupSummary);
export var FeatureParameters = list(n0, _FPe, 0, () => FeatureParameter);
export var CreateFeatureGroup = op(
  n0,
  _CFG,
  0,
  () => CreateFeatureGroupRequest,
  () => CreateFeatureGroupResponse
);
export var DeleteFeatureGroup = op(
  n0,
  _DFG,
  0,
  () => DeleteFeatureGroupRequest,
  () => Unit
);
export var DescribeFeatureGroup = op(
  n0,
  _DFGe,
  0,
  () => DescribeFeatureGroupRequest,
  () => DescribeFeatureGroupResponse
);
export var DescribeFeatureMetadata = op(
  n0,
  _DFM,
  0,
  () => DescribeFeatureMetadataRequest,
  () => DescribeFeatureMetadataResponse
);
export var ListFeatureGroups = op(
  n0,
  _LFG,
  0,
  () => ListFeatureGroupsRequest,
  () => ListFeatureGroupsResponse
);
