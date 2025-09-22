// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { UnsupportedFeatureRequiredException as __UnsupportedFeatureRequiredException } from "../models/index";
import {
  _AAD,
  _AP,
  _APCL,
  _APENS,
  _aQE,
  _AR,
  _ASUCS,
  _AUD,
  _BD,
  _BI,
  _BIa,
  _BIas,
  _BN,
  _BO,
  _c,
  _CD,
  _CL,
  _Conf,
  _CPB,
  _CPBR,
  _CPBRr,
  _CTl,
  _D,
  _DB,
  _DPBe,
  _DPBRes,
  _DPBResc,
  _DPG,
  _DPGR,
  _DPGRe,
  _DPP,
  _DPPR,
  _DPPRe,
  _e,
  _ENS,
  _Fi,
  _GDPB,
  _GDPBR,
  _GDPBRe,
  _GDPSFI,
  _GDPSFIR,
  _GDPSFIRe,
  _GF,
  _GPBFPG,
  _GPBFPGR,
  _GPBFPGRe,
  _II,
  _K,
  _M,
  _Ma,
  _MD,
  _MR,
  _N,
  _NT,
  _OSp,
  _PBI,
  _PBIL,
  _PFat,
  _PFatc,
  _PFG,
  _PFLa,
  _PG,
  _PGPBM,
  _PGPBML,
  _PPL,
  _PR,
  _PRa,
  _PRG,
  _PRL,
  _Pro,
  _Prod,
  _Produ,
  _Prop,
  _PS,
  _PSat,
  _PSC,
  _PSL,
  _Repl,
  _RP,
  _RPA,
  _SDU,
  _SIn,
  _So,
  _T,
  _UFRE,
  _UPB,
  _UPBR,
  _UPBRp,
  _Va,
  n0,
  TagList,
} from "./schemas_0";
import { PatchOrchestratorFilterList } from "./schemas_10_Describe";

/* eslint no-var: 0 */

export var PatchSourceConfiguration = sim(n0, _PSC, 0, 8);
export var BaselineOverride = struct(
  n0,
  _BO,
  0,
  [_OSp, _GF, _AR, _AP, _APCL, _RP, _RPA, _APENS, _So, _ASUCS],
  [0, () => PatchFilterGroup, () => PatchRuleGroup, 64 | 0, 0, 64 | 0, 0, 2, [() => PatchSourceList, 0], 0]
);
export var CreatePatchBaselineRequest = struct(
  n0,
  _CPBR,
  0,
  [_OSp, _N, _GF, _AR, _AP, _APCL, _APENS, _RP, _RPA, _D, _So, _ASUCS, _CTl, _T],
  [
    0,
    0,
    () => PatchFilterGroup,
    () => PatchRuleGroup,
    64 | 0,
    0,
    2,
    64 | 0,
    0,
    0,
    [() => PatchSourceList, 0],
    0,
    [0, 4],
    () => TagList,
  ]
);
export var CreatePatchBaselineResult = struct(n0, _CPBRr, 0, [_BI], [0]);
export var DescribePatchBaselinesRequest = struct(
  n0,
  _DPBRes,
  0,
  [_Fi, _MR, _NT],
  [() => PatchOrchestratorFilterList, 1, 0]
);
export var DescribePatchBaselinesResult = struct(n0, _DPBResc, 0, [_BIa, _NT], [() => PatchBaselineIdentityList, 0]);
export var DescribePatchGroupsRequest = struct(
  n0,
  _DPGR,
  0,
  [_MR, _Fi, _NT],
  [1, () => PatchOrchestratorFilterList, 0]
);
export var DescribePatchGroupsResult = struct(n0, _DPGRe, 0, [_Ma, _NT], [() => PatchGroupPatchBaselineMappingList, 0]);
export var DescribePatchPropertiesRequest = struct(n0, _DPPR, 0, [_OSp, _Pro, _PS, _MR, _NT], [0, 0, 0, 1, 0]);
export var DescribePatchPropertiesResult = struct(n0, _DPPRe, 0, [_Prop, _NT], [list(n0, _PPL, 0, 128 | 0), 0]);
export var GetDefaultPatchBaselineRequest = struct(n0, _GDPBR, 0, [_OSp], [0]);
export var GetDefaultPatchBaselineResult = struct(n0, _GDPBRe, 0, [_BI, _OSp], [0, 0]);
export var GetDeployablePatchSnapshotForInstanceRequest = struct(
  n0,
  _GDPSFIR,
  0,
  [_II, _SIn, _BO],
  [0, 0, [() => BaselineOverride, 0]]
);
export var GetDeployablePatchSnapshotForInstanceResult = struct(
  n0,
  _GDPSFIRe,
  0,
  [_II, _SIn, _SDU, _Prod],
  [0, 0, 0, 0]
);
export var GetPatchBaselineForPatchGroupRequest = struct(n0, _GPBFPGR, 0, [_PG, _OSp], [0, 0]);
export var GetPatchBaselineForPatchGroupResult = struct(n0, _GPBFPGRe, 0, [_BI, _PG, _OSp], [0, 0, 0]);
export var PatchBaselineIdentity = struct(n0, _PBI, 0, [_BI, _BN, _OSp, _BD, _DB], [0, 0, 0, 0, 2]);
export var PatchFilter = struct(n0, _PFat, 0, [_K, _Va], [0, 64 | 0]);
export var PatchFilterGroup = struct(n0, _PFG, 0, [_PFatc], [() => PatchFilterList]);
export var PatchGroupPatchBaselineMapping = struct(n0, _PGPBM, 0, [_PG, _BIas], [0, () => PatchBaselineIdentity]);
export var PatchRule = struct(n0, _PR, 0, [_PFG, _CL, _AAD, _AUD, _ENS], [() => PatchFilterGroup, 0, 1, 0, 2]);
export var PatchRuleGroup = struct(n0, _PRG, 0, [_PRa], [() => PatchRuleList]);
export var PatchSource = struct(n0, _PSat, 0, [_N, _Produ, _Conf], [0, 64 | 0, [() => PatchSourceConfiguration, 0]]);
export var UnsupportedFeatureRequiredException = error(
  n0,
  _UFRE,
  {
    [_e]: _c,
    [_aQE]: [`UnsupportedFeatureRequiredException`, 400],
  },
  [_M],
  [0],

  __UnsupportedFeatureRequiredException
);
export var UpdatePatchBaselineRequest = struct(
  n0,
  _UPBR,
  0,
  [_BI, _N, _GF, _AR, _AP, _APCL, _APENS, _RP, _RPA, _D, _So, _ASUCS, _Repl],
  [0, 0, () => PatchFilterGroup, () => PatchRuleGroup, 64 | 0, 0, 2, 64 | 0, 0, 0, [() => PatchSourceList, 0], 0, 2]
);
export var UpdatePatchBaselineResult = struct(
  n0,
  _UPBRp,
  0,
  [_BI, _N, _OSp, _GF, _AR, _AP, _APCL, _APENS, _RP, _RPA, _CD, _MD, _D, _So, _ASUCS],
  [
    0,
    0,
    0,
    () => PatchFilterGroup,
    () => PatchRuleGroup,
    64 | 0,
    0,
    2,
    64 | 0,
    0,
    4,
    4,
    0,
    [() => PatchSourceList, 0],
    0,
  ]
);
export var PatchBaselineIdentityList = list(n0, _PBIL, 0, () => PatchBaselineIdentity);
export var PatchFilterList = list(n0, _PFLa, 0, () => PatchFilter);
export var PatchFilterValueList = 64 | 0;

export var PatchGroupPatchBaselineMappingList = list(n0, _PGPBML, 0, () => PatchGroupPatchBaselineMapping);
export var PatchIdList = 64 | 0;

export var PatchPropertiesList = list(n0, _PPL, 0, 128 | 0);
export var PatchRuleList = list(n0, _PRL, 0, () => PatchRule);
export var PatchSourceList = list(n0, _PSL, 0, [() => PatchSource, 0]);
export var PatchSourceProductList = 64 | 0;

export var PatchPropertyEntry = 128 | 0;

export var CreatePatchBaseline = op(
  n0,
  _CPB,
  0,
  () => CreatePatchBaselineRequest,
  () => CreatePatchBaselineResult
);
export var DescribePatchBaselines = op(
  n0,
  _DPBe,
  0,
  () => DescribePatchBaselinesRequest,
  () => DescribePatchBaselinesResult
);
export var DescribePatchGroups = op(
  n0,
  _DPG,
  0,
  () => DescribePatchGroupsRequest,
  () => DescribePatchGroupsResult
);
export var DescribePatchProperties = op(
  n0,
  _DPP,
  0,
  () => DescribePatchPropertiesRequest,
  () => DescribePatchPropertiesResult
);
export var GetDefaultPatchBaseline = op(
  n0,
  _GDPB,
  0,
  () => GetDefaultPatchBaselineRequest,
  () => GetDefaultPatchBaselineResult
);
export var GetDeployablePatchSnapshotForInstance = op(
  n0,
  _GDPSFI,
  0,
  () => GetDeployablePatchSnapshotForInstanceRequest,
  () => GetDeployablePatchSnapshotForInstanceResult
);
export var GetPatchBaselineForPatchGroup = op(
  n0,
  _GPBFPG,
  0,
  () => GetPatchBaselineForPatchGroupRequest,
  () => GetPatchBaselineForPatchGroupResult
);
export var UpdatePatchBaseline = op(
  n0,
  _UPB,
  0,
  () => UpdatePatchBaselineRequest,
  () => UpdatePatchBaselineResult
);
