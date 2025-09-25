// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { WorkUnitsNotReadyYetException as __WorkUnitsNotReadyYetException } from "../models/index";
import {
  _AD,
  _C,
  _c,
  _CI,
  _CO,
  _Co,
  _D,
  _Da,
  _DCFa,
  _DCFL,
  _DLa,
  _DLFTL,
  _DM,
  _DN,
  _e,
  _EM,
  _en,
  _Ex,
  _FC,
  _FCL,
  _Fi,
  _GEPFP,
  _GEPFPR,
  _GEPFPRe,
  _GWU,
  _GWUR,
  _GWURe,
  _h,
  _hE,
  _IR,
  _LDCF,
  _LDCFR,
  _LDCFRi,
  _LFOII,
  _LFOIIL,
  _LFT,
  _LFTEa,
  _LFTEag,
  _LFTEL,
  _LFTOC,
  _LFTOD,
  _LFTOT,
  _LLFOI,
  _LLFOIR,
  _LLFOIRi,
  _LLFT,
  _LLFTE,
  _LLFTER,
  _LLFTERi,
  _LLFTR,
  _LLFTRi,
  _LM,
  _LP,
  _LPR,
  _LPRi,
  _LR,
  _LRD,
  _LRR,
  _LRRi,
  _LTSO,
  _LTSOR,
  _LTSORi,
  _LU,
  _LUB,
  _M,
  _MR,
  _N,
  _NT,
  _P,
  _Pe,
  _PRP,
  _PRPL,
  _PSa,
  _PWGO,
  _QI,
  _R,
  _RAe,
  _RIL,
  _RSe,
  _RST,
  _RT,
  _SDBLFT,
  _SDBLFTR,
  _SDBLFTRe,
  _SO,
  _SOL,
  _SOT,
  _STBLFT,
  _STBLFTR,
  _STBLFTRe,
  _SVL,
  _T,
  _TDa,
  _TL,
  _TLFTL,
  _TN,
  _TTa,
  _W,
  _WUIM,
  _WUIMo,
  _WUNRYE,
  _WUR,
  _WURL,
  _WURo,
  _WUT,
  DatabaseResource,
  DataLakePrincipal,
  Expression,
  n0,
  TableResource,
} from "./schemas_0";
import { Condition } from "./schemas_10_Permissions";
import { ResourceInfo } from "./schemas_11_Resource";
import { ColumnLFTagsList, LFTagsList } from "./schemas_13_LFTags";
import { Resource } from "./schemas_14_Permissions";
import { DataCellsFilter } from "./schemas_20_DataCellsFilter";

/* eslint no-var: 0 */

export var DetailsMap = struct(n0, _DM, 0, [_RSe], [64 | 0]);
export var FilterCondition = struct(n0, _FC, 0, [_Fi, _CO, _SVL], [0, 0, 64 | 0]);
export var GetEffectivePermissionsForPathRequest = struct(n0, _GEPFPR, 0, [_CI, _RAe, _NT, _MR], [0, 0, 0, 1]);
export var GetEffectivePermissionsForPathResponse = struct(
  n0,
  _GEPFPRe,
  0,
  [_Pe, _NT],
  [() => PrincipalResourcePermissionsList, 0]
);
export var GetWorkUnitsRequest = struct(n0, _GWUR, 0, [_NT, _PSa, _QI], [0, 1, 0]);
export var GetWorkUnitsResponse = struct(n0, _GWURe, 0, [_NT, _QI, _WUR], [0, 0, () => WorkUnitRangeList]);
export var LakeFormationOptInsInfo = struct(
  n0,
  _LFOII,
  0,
  [_R, _P, _C, _LM, _LUB],
  [() => Resource, () => DataLakePrincipal, () => Condition, 4, 0]
);
export var LFTagExpression = struct(n0, _LFTEa, 0, [_N, _D, _CI, _Ex], [0, 0, 0, () => Expression]);
export var ListDataCellsFilterRequest = struct(n0, _LDCFR, 0, [_T, _NT, _MR], [() => TableResource, 0, 1]);
export var ListDataCellsFilterResponse = struct(n0, _LDCFRi, 0, [_DCFa, _NT], [() => DataCellsFilterList, 0]);
export var ListLakeFormationOptInsRequest = struct(
  n0,
  _LLFOIR,
  0,
  [_P, _R, _MR, _NT],
  [() => DataLakePrincipal, () => Resource, 1, 0]
);
export var ListLakeFormationOptInsResponse = struct(
  n0,
  _LLFOIRi,
  0,
  [_LFOIIL, _NT],
  [() => LakeFormationOptInsInfoList, 0]
);
export var ListLFTagExpressionsRequest = struct(n0, _LLFTER, 0, [_CI, _MR, _NT], [0, 1, 0]);
export var ListLFTagExpressionsResponse = struct(n0, _LLFTERi, 0, [_LFTEag, _NT], [() => LFTagExpressionsList, 0]);
export var ListLFTagsRequest = struct(n0, _LLFTR, 0, [_CI, _RST, _MR, _NT], [0, 0, 1, 0]);
export var ListLFTagsResponse = struct(n0, _LLFTRi, 0, [_LFT, _NT], [() => LFTagsList, 0]);
export var ListPermissionsRequest = struct(
  n0,
  _LPR,
  0,
  [_CI, _P, _RT, _R, _NT, _MR, _IR],
  [0, () => DataLakePrincipal, 0, () => Resource, 0, 1, 0]
);
export var ListPermissionsResponse = struct(n0, _LPRi, 0, [_PRP, _NT], [() => PrincipalResourcePermissionsList, 0]);
export var ListResourcesRequest = struct(n0, _LRR, 0, [_FCL, _MR, _NT], [() => FilterConditionList, 1, 0]);
export var ListResourcesResponse = struct(n0, _LRRi, 0, [_RIL, _NT], [() => ResourceInfoList, 0]);
export var ListTableStorageOptimizersRequest = struct(
  n0,
  _LTSOR,
  0,
  [_CI, _DN, _TN, _SOT, _MR, _NT],
  [0, 0, 0, 0, 1, 0]
);
export var ListTableStorageOptimizersResponse = struct(n0, _LTSORi, 0, [_SOL, _NT], [() => StorageOptimizerList, 0]);
export var PrincipalResourcePermissions = struct(
  n0,
  _PRP,
  0,
  [_P, _R, _C, _Pe, _PWGO, _AD, _LU, _LUB],
  [() => DataLakePrincipal, () => Resource, () => Condition, 64 | 0, 64 | 0, () => DetailsMap, 4, 0]
);
export var SearchDatabasesByLFTagsRequest = struct(n0, _SDBLFTR, 0, [_NT, _MR, _CI, _Ex], [0, 1, 0, () => Expression]);
export var SearchDatabasesByLFTagsResponse = struct(n0, _SDBLFTRe, 0, [_NT, _DLa], [0, () => DatabaseLFTagsList]);
export var SearchTablesByLFTagsRequest = struct(n0, _STBLFTR, 0, [_NT, _MR, _CI, _Ex], [0, 1, 0, () => Expression]);
export var SearchTablesByLFTagsResponse = struct(n0, _STBLFTRe, 0, [_NT, _TL], [0, () => TableLFTagsList]);
export var StorageOptimizer = struct(n0, _SO, 0, [_SOT, _Co, _EM, _W, _LRD], [0, 128 | 0, 0, 0, 0]);
export var TaggedDatabase = struct(n0, _TDa, 0, [_Da, _LFT], [() => DatabaseResource, () => LFTagsList]);
export var TaggedTable = struct(
  n0,
  _TTa,
  0,
  [_T, _LFTOD, _LFTOT, _LFTOC],
  [() => TableResource, () => LFTagsList, () => LFTagsList, () => ColumnLFTagsList]
);
export var WorkUnitRange = struct(n0, _WURo, 0, [_WUIM, _WUIMo, _WUT], [1, 1, 0]);
export var WorkUnitsNotReadyYetException = error(
  n0,
  _WUNRYE,
  {
    [_e]: _c,
    [_hE]: 420,
  },
  [_M],
  [0],

  __WorkUnitsNotReadyYetException
);
export var DatabaseLFTagsList = list(n0, _DLFTL, 0, () => TaggedDatabase);
export var DataCellsFilterList = list(n0, _DCFL, 0, () => DataCellsFilter);
export var FilterConditionList = list(n0, _FCL, 0, () => FilterCondition);
export var LakeFormationOptInsInfoList = list(n0, _LFOIIL, 0, () => LakeFormationOptInsInfo);
export var LFTagExpressionsList = list(n0, _LFTEL, 0, () => LFTagExpression);
export var PrincipalResourcePermissionsList = list(n0, _PRPL, 0, () => PrincipalResourcePermissions);
export var ResourceInfoList = list(n0, _RIL, 0, () => ResourceInfo);
export var ResourceShareList = 64 | 0;

export var StorageOptimizerList = list(n0, _SOL, 0, () => StorageOptimizer);
export var StringValueList = 64 | 0;

export var TableLFTagsList = list(n0, _TLFTL, 0, () => TaggedTable);
export var WorkUnitRangeList = list(n0, _WURL, 0, () => WorkUnitRange);
export var GetEffectivePermissionsForPath = op(
  n0,
  _GEPFP,
  {
    [_h]: ["POST", "/GetEffectivePermissionsForPath", 200],
  },
  () => GetEffectivePermissionsForPathRequest,
  () => GetEffectivePermissionsForPathResponse
);
export var GetWorkUnits = op(
  n0,
  _GWU,
  {
    [_h]: ["POST", "/GetWorkUnits", 200],
    [_en]: ["query-"],
  },
  () => GetWorkUnitsRequest,
  () => GetWorkUnitsResponse
);
export var ListDataCellsFilter = op(
  n0,
  _LDCF,
  {
    [_h]: ["POST", "/ListDataCellsFilter", 200],
  },
  () => ListDataCellsFilterRequest,
  () => ListDataCellsFilterResponse
);
export var ListLakeFormationOptIns = op(
  n0,
  _LLFOI,
  {
    [_h]: ["POST", "/ListLakeFormationOptIns", 200],
  },
  () => ListLakeFormationOptInsRequest,
  () => ListLakeFormationOptInsResponse
);
export var ListLFTagExpressions = op(
  n0,
  _LLFTE,
  {
    [_h]: ["POST", "/ListLFTagExpressions", 200],
  },
  () => ListLFTagExpressionsRequest,
  () => ListLFTagExpressionsResponse
);
export var ListLFTags = op(
  n0,
  _LLFT,
  {
    [_h]: ["POST", "/ListLFTags", 200],
  },
  () => ListLFTagsRequest,
  () => ListLFTagsResponse
);
export var ListPermissions = op(
  n0,
  _LP,
  {
    [_h]: ["POST", "/ListPermissions", 200],
  },
  () => ListPermissionsRequest,
  () => ListPermissionsResponse
);
export var ListResources = op(
  n0,
  _LR,
  {
    [_h]: ["POST", "/ListResources", 200],
  },
  () => ListResourcesRequest,
  () => ListResourcesResponse
);
export var ListTableStorageOptimizers = op(
  n0,
  _LTSO,
  {
    [_h]: ["POST", "/ListTableStorageOptimizers", 200],
  },
  () => ListTableStorageOptimizersRequest,
  () => ListTableStorageOptimizersResponse
);
export var SearchDatabasesByLFTags = op(
  n0,
  _SDBLFT,
  {
    [_h]: ["POST", "/SearchDatabasesByLFTags", 200],
  },
  () => SearchDatabasesByLFTagsRequest,
  () => SearchDatabasesByLFTagsResponse
);
export var SearchTablesByLFTags = op(
  n0,
  _STBLFT,
  {
    [_h]: ["POST", "/SearchTablesByLFTags", 200],
  },
  () => SearchTablesByLFTagsRequest,
  () => SearchTablesByLFTagsResponse
);
