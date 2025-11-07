export const _CD = "ComplianceDetails";
export const _CME = "ConcurrentModificationException";
export const _CS = "ComplianceStatus";
export const _CVE = "ConstraintViolationException";
export const _DRC = "DescribeReportCreation";
export const _DRCI = "DescribeReportCreationInput";
export const _DRCO = "DescribeReportCreationOutput";
export const _EC = "ErrorCode";
export const _ECR = "ExcludeCompliantResources";
export const _EM = "ErrorMessage";
export const _FI = "FailureInfo";
export const _FRM = "FailedResourcesMap";
export const _GB = "GroupBy";
export const _GCS = "GetComplianceSummary";
export const _GCSI = "GetComplianceSummaryInput";
export const _GCSO = "GetComplianceSummaryOutput";
export const _GR = "GetResources";
export const _GRI = "GetResourcesInput";
export const _GRO = "GetResourcesOutput";
export const _GTK = "GetTagKeys";
export const _GTKI = "GetTagKeysInput";
export const _GTKO = "GetTagKeysOutput";
export const _GTV = "GetTagValues";
export const _GTVI = "GetTagValuesInput";
export const _GTVO = "GetTagValuesOutput";
export const _ICD = "IncludeComplianceDetails";
export const _IPE = "InvalidParameterException";
export const _ISE = "InternalServiceException";
export const _K = "Key";
export const _KWNV = "KeysWithNoncompliantValues";
export const _LU = "LastUpdated";
export const _M = "Message";
export const _MR = "MaxResults";
export const _NCR = "NonCompliantResources";
export const _NK = "NoncompliantKeys";
export const _PT = "PaginationToken";
export const _PTEE = "PaginationTokenExpiredException";
export const _R = "Region";
export const _RARN = "ResourceARN";
export const _RARNL = "ResourceARNList";
export const _RF = "RegionFilters";
export const _RPP = "ResourcesPerPage";
export const _RT = "ResourceType";
export const _RTF = "ResourceTypeFilters";
export const _RTM = "ResourceTagMapping";
export const _RTML = "ResourceTagMappingList";
export const _S = "Status";
export const _SB = "S3Bucket";
export const _SC = "StatusCode";
export const _SD = "StartDate";
export const _SL = "S3Location";
export const _SLu = "SummaryList";
export const _SRC = "StartReportCreation";
export const _SRCI = "StartReportCreationInput";
export const _SRCO = "StartReportCreationOutput";
export const _Su = "Summary";
export const _T = "Tags";
export const _TE = "ThrottledException";
export const _TF = "TagFilters";
export const _TFL = "TagFilterList";
export const _TFa = "TagFilter";
export const _TI = "TargetId";
export const _TIF = "TargetIdFilters";
export const _TIT = "TargetIdType";
export const _TK = "TagKeys";
export const _TKF = "TagKeyFilters";
export const _TL = "TagList";
export const _TPP = "TagsPerPage";
export const _TR = "TagResources";
export const _TRI = "TagResourcesInput";
export const _TRO = "TagResourcesOutput";
export const _TV = "TagValues";
export const _Ta = "Tag";
export const _UR = "UntagResources";
export const _URI = "UntagResourcesInput";
export const _URO = "UntagResourcesOutput";
export const _V = "Value";
export const _Va = "Values";
export const _c = "client";
export const _e = "error";
export const _s = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.resourcegroupstaggingapi";
export const n0 = "com.amazonaws.resourcegroupstaggingapi";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  ConcurrentModificationException as __ConcurrentModificationException,
  ConstraintViolationException as __ConstraintViolationException,
  InternalServiceException as __InternalServiceException,
  InvalidParameterException as __InvalidParameterException,
  PaginationTokenExpiredException as __PaginationTokenExpiredException,
  ThrottledException as __ThrottledException,
} from "../models/index";
import { ResourceGroupsTaggingAPIServiceException as __ResourceGroupsTaggingAPIServiceException } from "../models/ResourceGroupsTaggingAPIServiceException";

/* eslint no-var: 0 */

export var ComplianceDetails: StaticStructureSchema = [3, n0, _CD, 0, [_NK, _KWNV, _CS], [64 | 0, 64 | 0, 2]];
export var ConcurrentModificationException: StaticErrorSchema = [
  -3,
  n0,
  _CME,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ConcurrentModificationException, __ConcurrentModificationException);

export var ConstraintViolationException: StaticErrorSchema = [
  -3,
  n0,
  _CVE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ConstraintViolationException, __ConstraintViolationException);

export var DescribeReportCreationInput: StaticStructureSchema = [3, n0, _DRCI, 0, [], []];
export var DescribeReportCreationOutput: StaticStructureSchema = [3, n0, _DRCO, 0, [_S, _SL, _SD, _EM], [0, 0, 0, 0]];
export var FailureInfo: StaticStructureSchema = [3, n0, _FI, 0, [_SC, _EC, _EM], [1, 0, 0]];
export var GetComplianceSummaryInput: StaticStructureSchema = [
  3,
  n0,
  _GCSI,
  0,
  [_TIF, _RF, _RTF, _TKF, _GB, _MR, _PT],
  [64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 1, 0],
];
export var GetComplianceSummaryOutput: StaticStructureSchema = [3, n0, _GCSO, 0, [_SLu, _PT], [() => SummaryList, 0]];
export var GetResourcesInput: StaticStructureSchema = [
  3,
  n0,
  _GRI,
  0,
  [_PT, _TF, _RPP, _TPP, _RTF, _ICD, _ECR, _RARNL],
  [0, () => TagFilterList, 1, 1, 64 | 0, 2, 2, 64 | 0],
];
export var GetResourcesOutput: StaticStructureSchema = [
  3,
  n0,
  _GRO,
  0,
  [_PT, _RTML],
  [0, () => ResourceTagMappingList],
];
export var GetTagKeysInput: StaticStructureSchema = [3, n0, _GTKI, 0, [_PT], [0]];
export var GetTagKeysOutput: StaticStructureSchema = [3, n0, _GTKO, 0, [_PT, _TK], [0, 64 | 0]];
export var GetTagValuesInput: StaticStructureSchema = [3, n0, _GTVI, 0, [_PT, _K], [0, 0]];
export var GetTagValuesOutput: StaticStructureSchema = [3, n0, _GTVO, 0, [_PT, _TV], [0, 64 | 0]];
export var InternalServiceException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServiceException, __InternalServiceException);

export var InvalidParameterException: StaticErrorSchema = [
  -3,
  n0,
  _IPE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidParameterException, __InvalidParameterException);

export var PaginationTokenExpiredException: StaticErrorSchema = [
  -3,
  n0,
  _PTEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(PaginationTokenExpiredException, __PaginationTokenExpiredException);

export var ResourceTagMapping: StaticStructureSchema = [
  3,
  n0,
  _RTM,
  0,
  [_RARN, _T, _CD],
  [0, () => TagList, () => ComplianceDetails],
];
export var StartReportCreationInput: StaticStructureSchema = [3, n0, _SRCI, 0, [_SB], [0]];
export var StartReportCreationOutput: StaticStructureSchema = [3, n0, _SRCO, 0, [], []];
export var Summary: StaticStructureSchema = [3, n0, _Su, 0, [_LU, _TI, _TIT, _R, _RT, _NCR], [0, 0, 0, 0, 0, 1]];
export var Tag: StaticStructureSchema = [3, n0, _Ta, 0, [_K, _V], [0, 0]];
export var TagFilter: StaticStructureSchema = [3, n0, _TFa, 0, [_K, _Va], [0, 64 | 0]];
export var TagResourcesInput: StaticStructureSchema = [3, n0, _TRI, 0, [_RARNL, _T], [64 | 0, 128 | 0]];
export var TagResourcesOutput: StaticStructureSchema = [3, n0, _TRO, 0, [_FRM], [() => FailedResourcesMap]];
export var ThrottledException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottledException, __ThrottledException);

export var UntagResourcesInput: StaticStructureSchema = [3, n0, _URI, 0, [_RARNL, _TK], [64 | 0, 64 | 0]];
export var UntagResourcesOutput: StaticStructureSchema = [3, n0, _URO, 0, [_FRM], [() => FailedResourcesMap]];
export var __Unit = "unit" as const;

export var ResourceGroupsTaggingAPIServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "ResourceGroupsTaggingAPIServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(
  ResourceGroupsTaggingAPIServiceException,
  __ResourceGroupsTaggingAPIServiceException
);

export var GroupBy = 64 | 0;

export var RegionFilterList = 64 | 0;

export var ResourceARNListForGet = 64 | 0;

export var ResourceARNListForTagUntag = 64 | 0;

export var ResourceTagMappingList: StaticListSchema = [1, n0, _RTML, 0, () => ResourceTagMapping];
export var ResourceTypeFilterList = 64 | 0;

export var SummaryList: StaticListSchema = [1, n0, _SLu, 0, () => Summary];
export var TagFilterList: StaticListSchema = [1, n0, _TFL, 0, () => TagFilter];
export var TagKeyFilterList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagKeyListForUntag = 64 | 0;

export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var TagValueList = 64 | 0;

export var TagValuesOutputList = 64 | 0;

export var TargetIdFilterList = 64 | 0;

export var FailedResourcesMap: StaticMapSchema = [2, n0, _FRM, 0, 0, () => FailureInfo];
export var TagMap = 128 | 0;

export var DescribeReportCreation: StaticOperationSchema = [
  9,
  n0,
  _DRC,
  0,
  () => DescribeReportCreationInput,
  () => DescribeReportCreationOutput,
];
export var GetComplianceSummary: StaticOperationSchema = [
  9,
  n0,
  _GCS,
  0,
  () => GetComplianceSummaryInput,
  () => GetComplianceSummaryOutput,
];
export var GetResources: StaticOperationSchema = [9, n0, _GR, 0, () => GetResourcesInput, () => GetResourcesOutput];
export var GetTagKeys: StaticOperationSchema = [9, n0, _GTK, 0, () => GetTagKeysInput, () => GetTagKeysOutput];
export var GetTagValues: StaticOperationSchema = [9, n0, _GTV, 0, () => GetTagValuesInput, () => GetTagValuesOutput];
export var StartReportCreation: StaticOperationSchema = [
  9,
  n0,
  _SRC,
  0,
  () => StartReportCreationInput,
  () => StartReportCreationOutput,
];
export var TagResources: StaticOperationSchema = [9, n0, _TR, 0, () => TagResourcesInput, () => TagResourcesOutput];
export var UntagResources: StaticOperationSchema = [
  9,
  n0,
  _UR,
  0,
  () => UntagResourcesInput,
  () => UntagResourcesOutput,
];
