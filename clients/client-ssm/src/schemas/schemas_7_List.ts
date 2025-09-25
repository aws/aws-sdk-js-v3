// smithy-typescript generated code
import { error, list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  InvalidAggregatorException as __InvalidAggregatorException,
  InvalidFilter as __InvalidFilter,
  InvalidInventoryGroupException as __InvalidInventoryGroupException,
  InvalidResultAttributeException as __InvalidResultAttributeException,
  UnsupportedOperationException as __UnsupportedOperationException,
} from "../models/index";
import {
  _A,
  _Ag,
  _Agg,
  _AI,
  _AIc,
  _AL,
  _ANt,
  _aQE,
  _ATg,
  _ATgg,
  _AVg,
  _c,
  _CCo,
  _CCr,
  _CD,
  _CFo,
  _CH,
  _CILo,
  _CIom,
  _CIomp,
  _Cl,
  _CNo,
  _Con,
  _CSF,
  _CSFL,
  _CSFVL,
  _CSI,
  _CSIL,
  _CSIo,
  _CSo,
  _CTa,
  _CTo,
  _CVEI,
  _D,
  _DAes,
  _DAF,
  _DAFL,
  _DARes,
  _DAResc,
  _Dat,
  _De,
  _DIN,
  _DIP,
  _DIPR,
  _DIPRe,
  _DIPSFPG,
  _DIPSFPGR,
  _DIPSFPGRe,
  _E,
  _e,
  _ED,
  _En,
  _Enti,
  _Entit,
  _ES,
  _Ex,
  _Fi,
  _FK,
  _FV,
  _FVi,
  _G,
  _GI,
  _GIR,
  _GIRe,
  _GOS,
  _GOSR,
  _GOSRe,
  _HC,
  _I,
  _IAE,
  _IALn,
  _IAnve,
  _IAp,
  _ICn,
  _IF,
  _IFL,
  _IFn,
  _IFVL,
  _IG,
  _IGL,
  _II,
  _IIEL,
  _IIGE,
  _IIns,
  _Ins,
  _IPS,
  _IPSF,
  _IPSFL,
  _IPSLn,
  _IR,
  _IRAE,
  _IRE,
  _IREL,
  _IRIM,
  _IRIn,
  _IS,
  _Item,
  _ITns,
  _K,
  _KBI,
  _LC,
  _LCIi,
  _LCIRis,
  _LCIRist,
  _LCS,
  _LCSR,
  _LCSRi,
  _LIE,
  _LIER,
  _LIERi,
  _LN,
  _LNR,
  _LNRi,
  _LNS,
  _LNSR,
  _LNSRi,
  _LRCS,
  _LRCSR,
  _LRCSRi,
  _M,
  _MCe,
  _MR,
  _MS,
  _N,
  _NA,
  _NAL,
  _NCC,
  _NCS,
  _NF,
  _NFL,
  _NFVL,
  _NL,
  _Nod,
  _Node,
  _NOI,
  _NSL,
  _NT,
  _NTo,
  _OA,
  _OAL,
  _OE,
  _OEI,
  _OEIEL,
  _OEIM,
  _OEL,
  _OF,
  _OFL,
  _OFVL,
  _ORA,
  _ORAL,
  _OSv,
  _OUI,
  _OUP,
  _Ow,
  _Pa,
  _PCD,
  _PCDL,
  _PG,
  _PNl,
  _PTla,
  _PV,
  _RAe,
  _RAes,
  _RAL,
  _RC,
  _RCSI,
  _RCSIe,
  _RCSIL,
  _Reg,
  _RI,
  _RIes,
  _RL,
  _RT,
  _RTes,
  _S,
  _Se,
  _SN,
  _SS,
  _St,
  _Sum,
  _SV,
  _T,
  _Ti,
  _TN,
  _Ty,
  _UC,
  _UOE,
  _Va,
  _xN,
  n0,
  TagList,
} from "./schemas_0";
import { PatchOrchestratorFilterList } from "./schemas_10_Describe";
import { InstancePatchState } from "./schemas_14_Patch";
import { ComplianceExecutionSummary } from "./schemas_36_Compliance";
import { IPAddress } from "./schemas_57_Document";

/* eslint no-var: 0 */

export var Activation = struct(
  n0,
  _A,
  0,
  [_AIc, _D, _DIN, _IR, _RL, _RC, _ED, _E, _CD, _T],
  [0, 0, 0, 0, 1, 1, 4, 2, 4, () => TagList]
);
export var ComplianceItem = struct(
  n0,
  _CIom,
  0,
  [_CTo, _RT, _RI, _I, _Ti, _St, _Se, _ES, _De],
  [0, 0, 0, 0, 0, 0, 0, () => ComplianceExecutionSummary, 128 | 0]
);
export var ComplianceStringFilter = struct(
  n0,
  _CSF,
  0,
  [_K, _Va, _Ty],
  [0, [() => ComplianceStringFilterValueList, 0], 0]
);
export var ComplianceSummaryItem = struct(
  n0,
  _CSI,
  0,
  [_CTo, _CSo, _NCS],
  [0, () => CompliantSummary, () => NonCompliantSummary]
);
export var CompliantSummary = struct(n0, _CSo, 0, [_CCo, _SS], [1, () => SeveritySummary]);
export var DescribeActivationsFilter = struct(n0, _DAF, 0, [_FK, _FV], [0, 64 | 0]);
export var DescribeActivationsRequest = struct(
  n0,
  _DARes,
  0,
  [_Fi, _MR, _NT],
  [() => DescribeActivationsFilterList, 1, 0]
);
export var DescribeActivationsResult = struct(n0, _DAResc, 0, [_AL, _NT], [() => ActivationList, 0]);
export var DescribeInstancePatchesRequest = struct(
  n0,
  _DIPR,
  0,
  [_II, _Fi, _NT, _MR],
  [0, () => PatchOrchestratorFilterList, 0, 1]
);
export var DescribeInstancePatchesResult = struct(n0, _DIPRe, 0, [_Pa, _NT], [() => PatchComplianceDataList, 0]);
export var DescribeInstancePatchStatesForPatchGroupRequest = struct(
  n0,
  _DIPSFPGR,
  0,
  [_PG, _Fi, _NT, _MR],
  [0, () => InstancePatchStateFilterList, 0, 1]
);
export var DescribeInstancePatchStatesForPatchGroupResult = struct(
  n0,
  _DIPSFPGRe,
  0,
  [_IPS, _NT],
  [[() => InstancePatchStatesList, 0], 0]
);
export var GetInventoryRequest = struct(
  n0,
  _GIR,
  0,
  [_Fi, _Ag, _RAe, _NT, _MR],
  [[() => InventoryFilterList, 0], [() => InventoryAggregatorList, 0], [() => ResultAttributeList, 0], 0, 1]
);
export var GetInventoryResult = struct(n0, _GIRe, 0, [_Enti, _NT], [[() => InventoryResultEntityList, 0], 0]);
export var GetOpsSummaryRequest = struct(
  n0,
  _GOSR,
  0,
  [_SN, _Fi, _Ag, _RAe, _NT, _MR],
  [0, [() => OpsFilterList, 0], [() => OpsAggregatorList, 0], [() => OpsResultAttributeList, 0], 0, 1]
);
export var GetOpsSummaryResult = struct(n0, _GOSRe, 0, [_Enti, _NT], [[() => OpsEntityList, 0], 0]);
export var InstanceInfo = struct(
  n0,
  _IIns,
  0,
  [_ATg, _AVg, _CNo, _IS, _IAp, _MS, _PTla, _PNl, _PV, _RT],
  [0, 0, 0, 0, [() => IPAddress, 0], 0, 0, 0, 0, 0]
);
export var InstancePatchStateFilter = struct(n0, _IPSF, 0, [_K, _Va, _Ty], [0, 64 | 0, 0]);
export var InvalidAggregatorException = error(
  n0,
  _IAE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidAggregator`, 400],
  },
  [_M],
  [0],

  __InvalidAggregatorException
);
export var InvalidFilter = error(
  n0,
  _IF,
  {
    [_e]: _c,
    [_aQE]: [`InvalidFilter`, 441],
  },
  [_M],
  [0],

  __InvalidFilter
);
export var InvalidInventoryGroupException = error(
  n0,
  _IIGE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidInventoryGroup`, 400],
  },
  [_M],
  [0],

  __InvalidInventoryGroupException
);
export var InvalidResultAttributeException = error(
  n0,
  _IRAE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidResultAttribute`, 400],
  },
  [_M],
  [0],

  __InvalidResultAttributeException
);
export var InventoryAggregator = struct(
  n0,
  _IAnve,
  0,
  [_Ex, _Ag, _G],
  [0, [() => InventoryAggregatorList, 0], [() => InventoryGroupList, 0]]
);
export var InventoryFilter = struct(n0, _IFn, 0, [_K, _Va, _Ty], [0, [() => InventoryFilterValueList, 0], 0]);
export var InventoryGroup = struct(n0, _IG, 0, [_N, _Fi], [0, [() => InventoryFilterList, 0]]);
export var InventoryResultEntity = struct(n0, _IRE, 0, [_I, _Dat], [0, () => InventoryResultItemMap]);
export var InventoryResultItem = struct(
  n0,
  _IRIn,
  0,
  [_TN, _SV, _CTa, _CH, _Con],
  [0, 0, 0, 0, list(n0, _IIEL, 0, 128 | 0)]
);
export var ListComplianceItemsRequest = struct(
  n0,
  _LCIRis,
  0,
  [_Fi, _RIes, _RTes, _NT, _MR],
  [[() => ComplianceStringFilterList, 0], 64 | 0, 64 | 0, 0, 1]
);
export var ListComplianceItemsResult = struct(n0, _LCIRist, 0, [_CIomp, _NT], [[() => ComplianceItemList, 0], 0]);
export var ListComplianceSummariesRequest = struct(
  n0,
  _LCSR,
  0,
  [_Fi, _NT, _MR],
  [[() => ComplianceStringFilterList, 0], 0, 1]
);
export var ListComplianceSummariesResult = struct(
  n0,
  _LCSRi,
  0,
  [_CSIo, _NT],
  [[() => ComplianceSummaryItemList, 0], 0]
);
export var ListInventoryEntriesRequest = struct(
  n0,
  _LIER,
  0,
  [_II, _TN, _Fi, _NT, _MR],
  [0, 0, [() => InventoryFilterList, 0], 0, 1]
);
export var ListInventoryEntriesResult = struct(
  n0,
  _LIERi,
  0,
  [_TN, _II, _SV, _CTa, _En, _NT],
  [0, 0, 0, 0, list(n0, _IIEL, 0, 128 | 0), 0]
);
export var ListNodesRequest = struct(n0, _LNR, 0, [_SN, _Fi, _NT, _MR], [0, [() => NodeFilterList, 0], 0, 1]);
export var ListNodesResult = struct(n0, _LNRi, 0, [_Nod, _NT], [[() => NodeList, 0], 0]);
export var ListNodesSummaryRequest = struct(
  n0,
  _LNSR,
  0,
  [_SN, _Fi, _Ag, _NT, _MR],
  [0, [() => NodeFilterList, 0], [() => NodeAggregatorList, 0], 0, 1]
);
export var ListNodesSummaryResult = struct(n0, _LNSRi, 0, [_Sum, _NT], [list(n0, _NSL, 0, 128 | 0), 0]);
export var ListResourceComplianceSummariesRequest = struct(
  n0,
  _LRCSR,
  0,
  [_Fi, _NT, _MR],
  [[() => ComplianceStringFilterList, 0], 0, 1]
);
export var ListResourceComplianceSummariesResult = struct(
  n0,
  _LRCSRi,
  0,
  [_RCSI, _NT],
  [[() => ResourceComplianceSummaryItemList, 0], 0]
);
export var Node = struct(
  n0,
  _Node,
  0,
  [_CTa, _I, _Ow, _Reg, _NTo],
  [4, 0, () => NodeOwnerInfo, 0, [() => NodeType, 0]]
);
export var NodeAggregator = struct(n0, _NA, 0, [_ATgg, _TN, _ANt, _Ag], [0, 0, 0, [() => NodeAggregatorList, 0]]);
export var NodeFilter = struct(n0, _NF, 0, [_K, _Va, _Ty], [0, [() => NodeFilterValueList, 0], 0]);
export var NodeOwnerInfo = struct(n0, _NOI, 0, [_AI, _OUI, _OUP], [0, 0, 0]);
export var NonCompliantSummary = struct(n0, _NCS, 0, [_NCC, _SS], [1, () => SeveritySummary]);
export var OpsAggregator = struct(
  n0,
  _OA,
  0,
  [_ATgg, _TN, _ANt, _Va, _Fi, _Ag],
  [0, 0, 0, 128 | 0, [() => OpsFilterList, 0], [() => OpsAggregatorList, 0]]
);
export var OpsEntity = struct(n0, _OE, 0, [_I, _Dat], [0, () => OpsEntityItemMap]);
export var OpsEntityItem = struct(n0, _OEI, 0, [_CTa, _Con], [0, list(n0, _OEIEL, 0, 128 | 0)]);
export var OpsFilter = struct(n0, _OF, 0, [_K, _Va, _Ty], [0, [() => OpsFilterValueList, 0], 0]);
export var OpsResultAttribute = struct(n0, _ORA, 0, [_TN], [0]);
export var PatchComplianceData = struct(n0, _PCD, 0, [_Ti, _KBI, _Cl, _Se, _S, _ITns, _CVEI], [0, 0, 0, 0, 0, 4, 0]);
export var ResourceComplianceSummaryItem = struct(
  n0,
  _RCSIe,
  0,
  [_CTo, _RT, _RI, _St, _OSv, _ES, _CSo, _NCS],
  [0, 0, 0, 0, 0, () => ComplianceExecutionSummary, () => CompliantSummary, () => NonCompliantSummary]
);
export var ResultAttribute = struct(n0, _RAes, 0, [_TN], [0]);
export var SeveritySummary = struct(n0, _SS, 0, [_CCr, _HC, _MCe, _LC, _ICn, _UC], [1, 1, 1, 1, 1, 1]);
export var UnsupportedOperationException = error(
  n0,
  _UOE,
  {
    [_e]: _c,
    [_aQE]: [`UnsupportedOperation`, 400],
  },
  [_M],
  [0],

  __UnsupportedOperationException
);
export var ActivationList = list(n0, _AL, 0, () => Activation);
export var ComplianceItemList = list(n0, _CILo, 0, [
  () => ComplianceItem,
  {
    [_xN]: _Item,
  },
]);
export var ComplianceResourceIdList = 64 | 0;

export var ComplianceResourceTypeList = 64 | 0;

export var ComplianceStringFilterList = list(n0, _CSFL, 0, [
  () => ComplianceStringFilter,
  {
    [_xN]: _CFo,
  },
]);
export var ComplianceStringFilterValueList = list(n0, _CSFVL, 0, [
  0,
  {
    [_xN]: _FVi,
  },
]);
export var ComplianceSummaryItemList = list(n0, _CSIL, 0, [
  () => ComplianceSummaryItem,
  {
    [_xN]: _Item,
  },
]);
export var DescribeActivationsFilterList = list(n0, _DAFL, 0, () => DescribeActivationsFilter);
export var InstancePatchStateFilterList = list(n0, _IPSFL, 0, () => InstancePatchStateFilter);
export var InstancePatchStateFilterValues = 64 | 0;

export var InstancePatchStatesList = list(n0, _IPSLn, 0, [() => InstancePatchState, 0]);
export var InventoryAggregatorList = list(n0, _IALn, 0, [
  () => InventoryAggregator,
  {
    [_xN]: _Agg,
  },
]);
export var InventoryFilterList = list(n0, _IFL, 0, [
  () => InventoryFilter,
  {
    [_xN]: _IFn,
  },
]);
export var InventoryFilterValueList = list(n0, _IFVL, 0, [
  0,
  {
    [_xN]: _FVi,
  },
]);
export var InventoryGroupList = list(n0, _IGL, 0, [
  () => InventoryGroup,
  {
    [_xN]: _IG,
  },
]);
export var InventoryResultEntityList = list(n0, _IREL, 0, [
  () => InventoryResultEntity,
  {
    [_xN]: _Entit,
  },
]);
export var NodeAggregatorList = list(n0, _NAL, 0, [
  () => NodeAggregator,
  {
    [_xN]: _NA,
  },
]);
export var NodeFilterList = list(n0, _NFL, 0, [
  () => NodeFilter,
  {
    [_xN]: _NF,
  },
]);
export var NodeFilterValueList = list(n0, _NFVL, 0, [
  0,
  {
    [_xN]: _FVi,
  },
]);
export var NodeList = list(n0, _NL, 0, [() => Node, 0]);
export var NodeSummaryList = list(n0, _NSL, 0, 128 | 0);
export var OpsAggregatorList = list(n0, _OAL, 0, [
  () => OpsAggregator,
  {
    [_xN]: _Agg,
  },
]);
export var OpsEntityItemEntryList = list(n0, _OEIEL, 0, 128 | 0);
export var OpsEntityList = list(n0, _OEL, 0, [
  () => OpsEntity,
  {
    [_xN]: _Entit,
  },
]);
export var OpsFilterList = list(n0, _OFL, 0, [
  () => OpsFilter,
  {
    [_xN]: _OF,
  },
]);
export var OpsFilterValueList = list(n0, _OFVL, 0, [
  0,
  {
    [_xN]: _FVi,
  },
]);
export var OpsResultAttributeList = list(n0, _ORAL, 0, [
  () => OpsResultAttribute,
  {
    [_xN]: _ORA,
  },
]);
export var PatchComplianceDataList = list(n0, _PCDL, 0, () => PatchComplianceData);
export var ResourceComplianceSummaryItemList = list(n0, _RCSIL, 0, [
  () => ResourceComplianceSummaryItem,
  {
    [_xN]: _Item,
  },
]);
export var ResultAttributeList = list(n0, _RAL, 0, [
  () => ResultAttribute,
  {
    [_xN]: _RAes,
  },
]);
export var StringList = 64 | 0;

export var InventoryResultItemMap = map(n0, _IRIM, 0, 0, () => InventoryResultItem);
export var NodeSummary = 128 | 0;

export var OpsAggregatorValueMap = 128 | 0;

export var OpsEntityItemEntry = 128 | 0;

export var OpsEntityItemMap = map(n0, _OEIM, 0, 0, () => OpsEntityItem);
export var NodeType = uni(n0, _NTo, 0, [_Ins], [[() => InstanceInfo, 0]]);
export var DescribeActivations = op(
  n0,
  _DAes,
  0,
  () => DescribeActivationsRequest,
  () => DescribeActivationsResult
);
export var DescribeInstancePatches = op(
  n0,
  _DIP,
  0,
  () => DescribeInstancePatchesRequest,
  () => DescribeInstancePatchesResult
);
export var DescribeInstancePatchStatesForPatchGroup = op(
  n0,
  _DIPSFPG,
  0,
  () => DescribeInstancePatchStatesForPatchGroupRequest,
  () => DescribeInstancePatchStatesForPatchGroupResult
);
export var GetInventory = op(
  n0,
  _GI,
  0,
  () => GetInventoryRequest,
  () => GetInventoryResult
);
export var GetOpsSummary = op(
  n0,
  _GOS,
  0,
  () => GetOpsSummaryRequest,
  () => GetOpsSummaryResult
);
export var ListComplianceItems = op(
  n0,
  _LCIi,
  0,
  () => ListComplianceItemsRequest,
  () => ListComplianceItemsResult
);
export var ListComplianceSummaries = op(
  n0,
  _LCS,
  0,
  () => ListComplianceSummariesRequest,
  () => ListComplianceSummariesResult
);
export var ListInventoryEntries = op(
  n0,
  _LIE,
  0,
  () => ListInventoryEntriesRequest,
  () => ListInventoryEntriesResult
);
export var ListNodes = op(
  n0,
  _LN,
  0,
  () => ListNodesRequest,
  () => ListNodesResult
);
export var ListNodesSummary = op(
  n0,
  _LNS,
  0,
  () => ListNodesSummaryRequest,
  () => ListNodesSummaryResult
);
export var ListResourceComplianceSummaries = op(
  n0,
  _LRCS,
  0,
  () => ListResourceComplianceSummariesRequest,
  () => ListResourceComplianceSummariesResult
);
