// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ARI,
  _ART,
  _ARTs,
  _As,
  _ASp,
  _ASR,
  _ASRp,
  _AUS,
  _AUSc,
  _AUSct,
  _B,
  _BD,
  _BI,
  _BIu,
  _BL,
  _BN,
  _BRA,
  _BRAL,
  _BT,
  _C,
  _Ca,
  _CAr,
  _CN,
  _CS,
  _CTo,
  _CTr,
  _CW,
  _CWB,
  _CWBR,
  _CWBRr,
  _CWP,
  _CWPR,
  _CWPRr,
  _CWR,
  _CWRr,
  _D,
  _DBA,
  _DBAR,
  _DBARe,
  _DI,
  _DR,
  _DRS,
  _DTIS,
  _DUS,
  _DW,
  _DWB,
  _DWBe,
  _DWBR,
  _DWBRe,
  _DWBRes,
  _DWBResc,
  _DWP,
  _DWPF,
  _DWPFe,
  _DWPR,
  _DWPRe,
  _DWR,
  _DWRe,
  _E,
  _EC,
  _EM,
  _FCWR,
  _FCWRa,
  _Fi,
  _FR,
  _IAp,
  _IDTIS,
  _II,
  _Li,
  _LUT,
  _MS,
  _MSL,
  _MSo,
  _MUDIS,
  _MW,
  _MWR,
  _MWRi,
  _N,
  _NT,
  _O,
  _Op,
  _PA,
  _PI,
  _PIo,
  _PN,
  _PRe,
  _Re,
  _Reg,
  _RM,
  _RS,
  _RST,
  _RVEE,
  _RWel,
  _RWP,
  _S,
  _SBN,
  _SG,
  _SIu,
  _SR,
  _St,
  _SWI,
  _SWIt,
  _SWP,
  _SWPL,
  _T,
  _TS,
  _TWI,
  _Ty,
  _UN,
  _US,
  _UVEE,
  _UWB,
  _UWBR,
  _UWBRp,
  _UWP,
  _UWPR,
  _UWPRp,
  _V,
  _VEK,
  _W,
  _WB,
  _WI,
  _WIo,
  _WL,
  _WN,
  _Wo,
  _WP,
  _WPE,
  _WPEo,
  _WPo,
  _WPor,
  _WR,
  _WRL,
  n0,
  TagList,
} from "./schemas_0";
import { AssociationStateReason } from "./schemas_13_Describe";
import { WorkspaceProperties } from "./schemas_18_Workspace";

/* eslint no-var: 0 */

export var ApplicationSettingsRequest = struct(n0, _ASR, 0, [_St, _SG], [0, 0]);
export var ApplicationSettingsResponse = struct(n0, _ASRp, 0, [_St, _SG, _SBN], [0, 0, 0]);
export var BundleResourceAssociation = struct(
  n0,
  _BRA,
  0,
  [_ARI, _ART, _BI, _C, _LUT, _S, _SR],
  [0, 0, 0, 4, 4, 0, () => AssociationStateReason]
);
export var Capacity = struct(n0, _Ca, 0, [_DUS], [1]);
export var CapacityStatus = struct(n0, _CS, 0, [_AUS, _DUS, _AUSc, _AUSct], [1, 1, 1, 1]);
export var ComputeType = struct(n0, _CTo, 0, [_N], [0]);
export var CreateWorkspaceBundleRequest = struct(
  n0,
  _CWBR,
  0,
  [_BN, _BD, _II, _CTo, _US, _RS, _T],
  [0, 0, 0, () => ComputeType, () => UserStorage, () => RootStorage, () => TagList]
);
export var CreateWorkspaceBundleResult = struct(n0, _CWBRr, 0, [_WB], [() => WorkspaceBundle]);
export var CreateWorkspacesPoolRequest = struct(
  n0,
  _CWPR,
  0,
  [_PN, _D, _BI, _DI, _Ca, _T, _ASp, _TS, _RM],
  [0, 0, 0, 0, () => Capacity, () => TagList, () => ApplicationSettingsRequest, () => TimeoutSettings, 0]
);
export var CreateWorkspacesPoolResult = struct(n0, _CWPRr, 0, [_WP], [() => WorkspacesPool]);
export var CreateWorkspacesRequest = struct(n0, _CWR, 0, [_W], [() => WorkspaceRequestList]);
export var CreateWorkspacesResult = struct(
  n0,
  _CWRr,
  0,
  [_FR, _PRe],
  [() => FailedCreateWorkspaceRequests, () => WorkspaceList]
);
export var DataReplicationSettings = struct(n0, _DRS, 0, [_DR, _RST], [0, 4]);
export var DeleteWorkspaceBundleRequest = struct(n0, _DWBR, 0, [_BI], [0]);
export var DeleteWorkspaceBundleResult = struct(n0, _DWBRe, 0, [], []);
export var DescribeBundleAssociationsRequest = struct(n0, _DBAR, 0, [_BI, _ARTs], [0, 64 | 0]);
export var DescribeBundleAssociationsResult = struct(n0, _DBARe, 0, [_As], [() => BundleResourceAssociationList]);
export var DescribeWorkspaceBundlesRequest = struct(n0, _DWBRes, 0, [_BIu, _O, _NT], [64 | 0, 0, 0]);
export var DescribeWorkspaceBundlesResult = struct(n0, _DWBResc, 0, [_B, _NT], [() => BundleList, 0]);
export var DescribeWorkspacesPoolsFilter = struct(n0, _DWPF, 0, [_N, _V, _Op], [0, 64 | 0, 0]);
export var DescribeWorkspacesPoolsRequest = struct(
  n0,
  _DWPR,
  0,
  [_PIo, _Fi, _Li, _NT],
  [64 | 0, () => DescribeWorkspacesPoolsFilters, 1, 0]
);
export var DescribeWorkspacesPoolsResult = struct(n0, _DWPRe, 0, [_WPo, _NT], [() => WorkspacesPools, 0]);
export var DescribeWorkspacesRequest = struct(
  n0,
  _DWR,
  0,
  [_WIo, _DI, _UN, _BI, _Li, _NT, _WN],
  [64 | 0, 0, 0, 0, 1, 0, 0]
);
export var DescribeWorkspacesResult = struct(n0, _DWRe, 0, [_W, _NT], [() => WorkspaceList, 0]);
export var FailedCreateWorkspaceRequest = struct(n0, _FCWR, 0, [_WR, _EC, _EM], [() => WorkspaceRequest, 0, 0]);
export var MigrateWorkspaceRequest = struct(n0, _MWR, 0, [_SWI, _BI], [0, 0]);
export var MigrateWorkspaceResult = struct(n0, _MWRi, 0, [_SWI, _TWI], [0, 0]);
export var ModificationState = struct(n0, _MS, 0, [_Re, _S], [0, 0]);
export var RelatedWorkspaceProperties = struct(n0, _RWP, 0, [_WI, _Reg, _S, _Ty], [0, 0, 0, 0]);
export var RootStorage = struct(n0, _RS, 0, [_Ca], [0]);
export var StandbyWorkspacesProperties = struct(n0, _SWP, 0, [_SWIt, _DR, _RST], [0, 0, 4]);
export var TimeoutSettings = struct(n0, _TS, 0, [_DTIS, _IDTIS, _MUDIS], [1, 1, 1]);
export var UpdateWorkspaceBundleRequest = struct(n0, _UWBR, 0, [_BI, _II], [0, 0]);
export var UpdateWorkspaceBundleResult = struct(n0, _UWBRp, 0, [], []);
export var UpdateWorkspacesPoolRequest = struct(
  n0,
  _UWPR,
  0,
  [_PI, _D, _BI, _DI, _Ca, _ASp, _TS, _RM],
  [0, 0, 0, 0, () => Capacity, () => ApplicationSettingsRequest, () => TimeoutSettings, 0]
);
export var UpdateWorkspacesPoolResult = struct(n0, _UWPRp, 0, [_WP], [() => WorkspacesPool]);
export var UserStorage = struct(n0, _US, 0, [_Ca], [0]);
export var Workspace = struct(
  n0,
  _Wo,
  0,
  [_WI, _DI, _UN, _IAp, _S, _BI, _SIu, _EM, _EC, _CN, _VEK, _UVEE, _RVEE, _WN, _WPor, _MSo, _RWel, _DRS, _SWP],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    2,
    0,
    () => WorkspaceProperties,
    () => ModificationStateList,
    () => RelatedWorkspaces,
    () => DataReplicationSettings,
    () => StandbyWorkspacesPropertiesList,
  ]
);
export var WorkspaceBundle = struct(
  n0,
  _WB,
  0,
  [_BI, _N, _O, _D, _II, _RS, _US, _CTo, _LUT, _CTr, _S, _BT],
  [0, 0, 0, 0, 0, () => RootStorage, () => UserStorage, () => ComputeType, 4, 4, 0, 0]
);
export var WorkspaceRequest = struct(
  n0,
  _WR,
  0,
  [_DI, _UN, _BI, _VEK, _UVEE, _RVEE, _WPor, _T, _WN],
  [0, 0, 0, 0, 2, 2, () => WorkspaceProperties, () => TagList, 0]
);
export var WorkspacesPool = struct(
  n0,
  _WP,
  0,
  [_PI, _PA, _CS, _PN, _D, _S, _CAr, _BI, _DI, _E, _ASp, _TS, _RM],
  [
    0,
    0,
    () => CapacityStatus,
    0,
    0,
    0,
    4,
    0,
    0,
    () => WorkspacesPoolErrors,
    () => ApplicationSettingsResponse,
    () => TimeoutSettings,
    0,
  ]
);
export var WorkspacesPoolError = struct(n0, _WPE, 0, [_EC, _EM], [0, 0]);
export var BundleAssociatedResourceTypeList = 64 | 0;

export var BundleIdList = 64 | 0;

export var BundleList = list(n0, _BL, 0, () => WorkspaceBundle);
export var BundleResourceAssociationList = list(n0, _BRAL, 0, () => BundleResourceAssociation);
export var DescribeWorkspacesPoolsFilters = list(n0, _DWPFe, 0, () => DescribeWorkspacesPoolsFilter);
export var DescribeWorkspacesPoolsFilterValues = 64 | 0;

export var FailedCreateWorkspaceRequests = list(n0, _FCWRa, 0, () => FailedCreateWorkspaceRequest);
export var ModificationStateList = list(n0, _MSL, 0, () => ModificationState);
export var RelatedWorkspaces = list(n0, _RWel, 0, () => RelatedWorkspaceProperties);
export var StandbyWorkspacesPropertiesList = list(n0, _SWPL, 0, () => StandbyWorkspacesProperties);
export var WorkspaceList = list(n0, _WL, 0, () => Workspace);
export var WorkspaceRequestList = list(n0, _WRL, 0, () => WorkspaceRequest);
export var WorkspacesPoolErrors = list(n0, _WPEo, 0, () => WorkspacesPoolError);
export var WorkspacesPoolIds = 64 | 0;

export var WorkspacesPools = list(n0, _WPo, 0, () => WorkspacesPool);
export var CreateWorkspaceBundle = op(
  n0,
  _CWB,
  0,
  () => CreateWorkspaceBundleRequest,
  () => CreateWorkspaceBundleResult
);
export var CreateWorkspaces = op(
  n0,
  _CW,
  0,
  () => CreateWorkspacesRequest,
  () => CreateWorkspacesResult
);
export var CreateWorkspacesPool = op(
  n0,
  _CWP,
  0,
  () => CreateWorkspacesPoolRequest,
  () => CreateWorkspacesPoolResult
);
export var DeleteWorkspaceBundle = op(
  n0,
  _DWB,
  0,
  () => DeleteWorkspaceBundleRequest,
  () => DeleteWorkspaceBundleResult
);
export var DescribeBundleAssociations = op(
  n0,
  _DBA,
  0,
  () => DescribeBundleAssociationsRequest,
  () => DescribeBundleAssociationsResult
);
export var DescribeWorkspaceBundles = op(
  n0,
  _DWBe,
  0,
  () => DescribeWorkspaceBundlesRequest,
  () => DescribeWorkspaceBundlesResult
);
export var DescribeWorkspaces = op(
  n0,
  _DW,
  0,
  () => DescribeWorkspacesRequest,
  () => DescribeWorkspacesResult
);
export var DescribeWorkspacesPools = op(
  n0,
  _DWP,
  0,
  () => DescribeWorkspacesPoolsRequest,
  () => DescribeWorkspacesPoolsResult
);
export var MigrateWorkspace = op(
  n0,
  _MW,
  0,
  () => MigrateWorkspaceRequest,
  () => MigrateWorkspaceResult
);
export var UpdateWorkspaceBundle = op(
  n0,
  _UWB,
  0,
  () => UpdateWorkspaceBundleRequest,
  () => UpdateWorkspaceBundleResult
);
export var UpdateWorkspacesPool = op(
  n0,
  _UWP,
  0,
  () => UpdateWorkspacesPoolRequest,
  () => UpdateWorkspacesPoolResult
);
