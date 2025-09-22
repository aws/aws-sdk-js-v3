// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AlreadyExistsException as __AlreadyExistsException,
  ComplianceTypeCountLimitExceededException as __ComplianceTypeCountLimitExceededException,
  InvalidResourceId as __InvalidResourceId,
  InvalidResourceType as __InvalidResourceType,
  TooManyTagsError as __TooManyTagsError,
} from "../models/index";
import {
  _ADp,
  _AEE,
  _AP,
  _APCL,
  _APENS,
  _aQE,
  _AR,
  _ASUCS,
  _ATTR,
  _ATTRR,
  _ATTRRd,
  _BI,
  _c,
  _CD,
  _CIE,
  _CIEL,
  _CL,
  _CTCLEE,
  _CTo,
  _D,
  _De,
  _DEPFPB,
  _DEPFPBR,
  _DEPFPBRe,
  _DPBFPG,
  _DPBFPGR,
  _DPBFPGRe,
  _DSep,
  _e,
  _EP,
  _EPf,
  _EPL,
  _ES,
  _GF,
  _GPB,
  _GPBR,
  _GPBRe,
  _I,
  _ICH,
  _IRI,
  _IRT,
  _Ite,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MD,
  _MR,
  _N,
  _NT,
  _OSp,
  _Pat,
  _PCI,
  _PCIR,
  _PCIRu,
  _PG,
  _PGa,
  _PSa,
  _RDPB,
  _RDPBR,
  _RDPBRe,
  _RI,
  _RP,
  _RPA,
  _RPBFPG,
  _RPBFPGR,
  _RPBFPGRe,
  _RT,
  _RTFR,
  _RTFRR,
  _RTFRRe,
  _Se,
  _So,
  _St,
  _T,
  _Ti,
  _TK,
  _TLa,
  _TMTE,
  _UTp,
  n0,
  TagList,
} from "./schemas_0";
import { Patch } from "./schemas_12_Patch";
import { PatchFilterGroup, PatchRuleGroup, PatchSourceList } from "./schemas_19_Patch";
import { ComplianceExecutionSummary } from "./schemas_36_Compliance";

/* eslint no-var: 0 */

export var AddTagsToResourceRequest = struct(n0, _ATTRR, 0, [_RT, _RI, _T], [0, 0, () => TagList]);
export var AddTagsToResourceResult = struct(n0, _ATTRRd, 0, [], []);
export var AlreadyExistsException = error(
  n0,
  _AEE,
  {
    [_e]: _c,
    [_aQE]: [`AlreadyExistsException`, 400],
  },
  [_M],
  [0],

  __AlreadyExistsException
);
export var ComplianceItemEntry = struct(n0, _CIE, 0, [_I, _Ti, _Se, _St, _De], [0, 0, 0, 0, 128 | 0]);
export var ComplianceTypeCountLimitExceededException = error(
  n0,
  _CTCLEE,
  {
    [_e]: _c,
    [_aQE]: [`ComplianceTypeCountLimitExceeded`, 400],
  },
  [_M],
  [0],

  __ComplianceTypeCountLimitExceededException
);
export var DeregisterPatchBaselineForPatchGroupRequest = struct(n0, _DPBFPGR, 0, [_BI, _PG], [0, 0]);
export var DeregisterPatchBaselineForPatchGroupResult = struct(n0, _DPBFPGRe, 0, [_BI, _PG], [0, 0]);
export var DescribeEffectivePatchesForPatchBaselineRequest = struct(n0, _DEPFPBR, 0, [_BI, _MR, _NT], [0, 1, 0]);
export var DescribeEffectivePatchesForPatchBaselineResult = struct(
  n0,
  _DEPFPBRe,
  0,
  [_EP, _NT],
  [() => EffectivePatchList, 0]
);
export var EffectivePatch = struct(n0, _EPf, 0, [_Pat, _PSa], [() => Patch, () => PatchStatus]);
export var GetPatchBaselineRequest = struct(n0, _GPBR, 0, [_BI], [0]);
export var GetPatchBaselineResult = struct(
  n0,
  _GPBRe,
  0,
  [_BI, _N, _OSp, _GF, _AR, _AP, _APCL, _APENS, _RP, _RPA, _PGa, _CD, _MD, _D, _So, _ASUCS],
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
    64 | 0,
    4,
    4,
    0,
    [() => PatchSourceList, 0],
    0,
  ]
);
export var InvalidResourceId = error(
  n0,
  _IRI,
  {
    [_e]: _c,
    [_aQE]: [`InvalidResourceId`, 400],
  },
  [],
  [],

  __InvalidResourceId
);
export var InvalidResourceType = error(
  n0,
  _IRT,
  {
    [_e]: _c,
    [_aQE]: [`InvalidResourceType`, 400],
  },
  [],
  [],

  __InvalidResourceType
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RT, _RI], [0, 0]);
export var ListTagsForResourceResult = struct(n0, _LTFRRi, 0, [_TLa], [() => TagList]);
export var PatchStatus = struct(n0, _PSa, 0, [_DSep, _CL, _ADp], [0, 0, 4]);
export var PutComplianceItemsRequest = struct(
  n0,
  _PCIR,
  0,
  [_RI, _RT, _CTo, _ES, _Ite, _ICH, _UTp],
  [0, 0, 0, () => ComplianceExecutionSummary, () => ComplianceItemEntryList, 0, 0]
);
export var PutComplianceItemsResult = struct(n0, _PCIRu, 0, [], []);
export var RegisterDefaultPatchBaselineRequest = struct(n0, _RDPBR, 0, [_BI], [0]);
export var RegisterDefaultPatchBaselineResult = struct(n0, _RDPBRe, 0, [_BI], [0]);
export var RegisterPatchBaselineForPatchGroupRequest = struct(n0, _RPBFPGR, 0, [_BI, _PG], [0, 0]);
export var RegisterPatchBaselineForPatchGroupResult = struct(n0, _RPBFPGRe, 0, [_BI, _PG], [0, 0]);
export var RemoveTagsFromResourceRequest = struct(n0, _RTFRR, 0, [_RT, _RI, _TK], [0, 0, 64 | 0]);
export var RemoveTagsFromResourceResult = struct(n0, _RTFRRe, 0, [], []);
export var TooManyTagsError = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_aQE]: [`TooManyTagsError`, 400],
  },
  [],
  [],

  __TooManyTagsError
);
export var ComplianceItemEntryList = list(n0, _CIEL, 0, () => ComplianceItemEntry);
export var EffectivePatchList = list(n0, _EPL, 0, () => EffectivePatch);
export var KeyList = 64 | 0;

export var PatchGroupList = 64 | 0;

export var ComplianceItemDetails = 128 | 0;

export var AddTagsToResource = op(
  n0,
  _ATTR,
  0,
  () => AddTagsToResourceRequest,
  () => AddTagsToResourceResult
);
export var DeregisterPatchBaselineForPatchGroup = op(
  n0,
  _DPBFPG,
  0,
  () => DeregisterPatchBaselineForPatchGroupRequest,
  () => DeregisterPatchBaselineForPatchGroupResult
);
export var DescribeEffectivePatchesForPatchBaseline = op(
  n0,
  _DEPFPB,
  0,
  () => DescribeEffectivePatchesForPatchBaselineRequest,
  () => DescribeEffectivePatchesForPatchBaselineResult
);
export var GetPatchBaseline = op(
  n0,
  _GPB,
  0,
  () => GetPatchBaselineRequest,
  () => GetPatchBaselineResult
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResult
);
export var PutComplianceItems = op(
  n0,
  _PCI,
  0,
  () => PutComplianceItemsRequest,
  () => PutComplianceItemsResult
);
export var RegisterDefaultPatchBaseline = op(
  n0,
  _RDPB,
  0,
  () => RegisterDefaultPatchBaselineRequest,
  () => RegisterDefaultPatchBaselineResult
);
export var RegisterPatchBaselineForPatchGroup = op(
  n0,
  _RPBFPG,
  0,
  () => RegisterPatchBaselineForPatchGroupRequest,
  () => RegisterPatchBaselineForPatchGroupResult
);
export var RemoveTagsFromResource = op(
  n0,
  _RTFR,
  0,
  () => RemoveTagsFromResourceRequest,
  () => RemoveTagsFromResourceResult
);
