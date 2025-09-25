// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  ConcurrentModificationException as __ConcurrentModificationException,
  ConstraintViolationException as __ConstraintViolationException,
  InternalServiceException as __InternalServiceException,
  InvalidParameterException as __InvalidParameterException,
  PaginationTokenExpiredException as __PaginationTokenExpiredException,
  ThrottledException as __ThrottledException,
} from "../models/index";
import {
  _c,
  _CD,
  _CME,
  _CS,
  _CVE,
  _DRC,
  _DRCI,
  _DRCO,
  _e,
  _EC,
  _ECR,
  _EM,
  _FI,
  _FRM,
  _GB,
  _GCS,
  _GCSI,
  _GCSO,
  _GR,
  _GRI,
  _GRO,
  _GTK,
  _GTKI,
  _GTKO,
  _GTV,
  _GTVI,
  _GTVO,
  _ICD,
  _IPE,
  _ISE,
  _K,
  _KWNV,
  _LU,
  _M,
  _MR,
  _NCR,
  _NK,
  _PT,
  _PTEE,
  _R,
  _RARN,
  _RARNL,
  _RF,
  _RPP,
  _RT,
  _RTF,
  _RTM,
  _RTML,
  _S,
  _s,
  _SB,
  _SC,
  _SD,
  _SL,
  _SLu,
  _SRC,
  _SRCI,
  _SRCO,
  _Su,
  _T,
  _Ta,
  _TE,
  _TF,
  _TFa,
  _TFL,
  _TI,
  _TIF,
  _TIT,
  _TK,
  _TKF,
  _TL,
  _TPP,
  _TR,
  _TRI,
  _TRO,
  _TV,
  _UR,
  _URI,
  _URO,
  _V,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ComplianceDetails = struct(n0, _CD, 0, [_NK, _KWNV, _CS], [64 | 0, 64 | 0, 2]);
export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ConcurrentModificationException
);
export var ConstraintViolationException = error(
  n0,
  _CVE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ConstraintViolationException
);
export var DescribeReportCreationInput = struct(n0, _DRCI, 0, [], []);
export var DescribeReportCreationOutput = struct(n0, _DRCO, 0, [_S, _SL, _SD, _EM], [0, 0, 0, 0]);
export var FailureInfo = struct(n0, _FI, 0, [_SC, _EC, _EM], [1, 0, 0]);
export var GetComplianceSummaryInput = struct(
  n0,
  _GCSI,
  0,
  [_TIF, _RF, _RTF, _TKF, _GB, _MR, _PT],
  [64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 1, 0]
);
export var GetComplianceSummaryOutput = struct(n0, _GCSO, 0, [_SLu, _PT], [() => SummaryList, 0]);
export var GetResourcesInput = struct(
  n0,
  _GRI,
  0,
  [_PT, _TF, _RPP, _TPP, _RTF, _ICD, _ECR, _RARNL],
  [0, () => TagFilterList, 1, 1, 64 | 0, 2, 2, 64 | 0]
);
export var GetResourcesOutput = struct(n0, _GRO, 0, [_PT, _RTML], [0, () => ResourceTagMappingList]);
export var GetTagKeysInput = struct(n0, _GTKI, 0, [_PT], [0]);
export var GetTagKeysOutput = struct(n0, _GTKO, 0, [_PT, _TK], [0, 64 | 0]);
export var GetTagValuesInput = struct(n0, _GTVI, 0, [_PT, _K], [0, 0]);
export var GetTagValuesOutput = struct(n0, _GTVO, 0, [_PT, _TV], [0, 64 | 0]);
export var InternalServiceException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
  },
  [_M],
  [0],

  __InternalServiceException
);
export var InvalidParameterException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidParameterException
);
export var PaginationTokenExpiredException = error(
  n0,
  _PTEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __PaginationTokenExpiredException
);
export var ResourceTagMapping = struct(n0, _RTM, 0, [_RARN, _T, _CD], [0, () => TagList, () => ComplianceDetails]);
export var StartReportCreationInput = struct(n0, _SRCI, 0, [_SB], [0]);
export var StartReportCreationOutput = struct(n0, _SRCO, 0, [], []);
export var Summary = struct(n0, _Su, 0, [_LU, _TI, _TIT, _R, _RT, _NCR], [0, 0, 0, 0, 0, 1]);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var TagFilter = struct(n0, _TFa, 0, [_K, _Va], [0, 64 | 0]);
export var TagResourcesInput = struct(n0, _TRI, 0, [_RARNL, _T], [64 | 0, 128 | 0]);
export var TagResourcesOutput = struct(n0, _TRO, 0, [_FRM], [() => FailedResourcesMap]);
export var ThrottledException = error(
  n0,
  _TE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ThrottledException
);
export var UntagResourcesInput = struct(n0, _URI, 0, [_RARNL, _TK], [64 | 0, 64 | 0]);
export var UntagResourcesOutput = struct(n0, _URO, 0, [_FRM], [() => FailedResourcesMap]);
export var Unit = "unit" as const;

export var GroupBy = 64 | 0;

export var RegionFilterList = 64 | 0;

export var ResourceARNListForGet = 64 | 0;

export var ResourceARNListForTagUntag = 64 | 0;

export var ResourceTagMappingList = list(n0, _RTML, 0, () => ResourceTagMapping);
export var ResourceTypeFilterList = 64 | 0;

export var SummaryList = list(n0, _SLu, 0, () => Summary);
export var TagFilterList = list(n0, _TFL, 0, () => TagFilter);
export var TagKeyFilterList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagKeyListForUntag = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var TagValueList = 64 | 0;

export var TagValuesOutputList = 64 | 0;

export var TargetIdFilterList = 64 | 0;

export var FailedResourcesMap = map(n0, _FRM, 0, 0, () => FailureInfo);
export var TagMap = 128 | 0;

export var DescribeReportCreation = op(
  n0,
  _DRC,
  0,
  () => DescribeReportCreationInput,
  () => DescribeReportCreationOutput
);
export var GetComplianceSummary = op(
  n0,
  _GCS,
  0,
  () => GetComplianceSummaryInput,
  () => GetComplianceSummaryOutput
);
export var GetResources = op(
  n0,
  _GR,
  0,
  () => GetResourcesInput,
  () => GetResourcesOutput
);
export var GetTagKeys = op(
  n0,
  _GTK,
  0,
  () => GetTagKeysInput,
  () => GetTagKeysOutput
);
export var GetTagValues = op(
  n0,
  _GTV,
  0,
  () => GetTagValuesInput,
  () => GetTagValuesOutput
);
export var StartReportCreation = op(
  n0,
  _SRC,
  0,
  () => StartReportCreationInput,
  () => StartReportCreationOutput
);
export var TagResources = op(
  n0,
  _TR,
  0,
  () => TagResourcesInput,
  () => TagResourcesOutput
);
export var UntagResources = op(
  n0,
  _UR,
  0,
  () => UntagResourcesInput,
  () => UntagResourcesOutput
);
