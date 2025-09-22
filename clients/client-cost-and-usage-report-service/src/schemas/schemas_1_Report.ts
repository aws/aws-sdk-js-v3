// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DuplicateReportNameException as __DuplicateReportNameException,
  InternalErrorException as __InternalErrorException,
  ReportLimitReachedException as __ReportLimitReachedException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _AA,
  _ASE,
  _BVA,
  _C,
  _c,
  _DRD,
  _DRDe,
  _DRDR,
  _DRDRe,
  _DRDRes,
  _DRDResc,
  _DRNE,
  _e,
  _F,
  _IEE,
  _K,
  _lD,
  _lS,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MR,
  _MRD,
  _MRDR,
  _MRDRo,
  _NT,
  _PRD,
  _PRDR,
  _PRDRu,
  _RCR,
  _RD,
  _RDe,
  _RDL,
  _RLRE,
  _RM,
  _RN,
  _RNFE,
  _RS,
  _RV,
  _s,
  _SB,
  _SP,
  _SR,
  _T,
  _Ta,
  _TK,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _TU,
  _UR,
  _URR,
  _URRn,
  _V,
  _VE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteReportDefinitionRequest = struct(n0, _DRDR, 0, [_RN], [0]);
export var DeleteReportDefinitionResponse = struct(n0, _DRDRe, 0, [_RM], [0]);
export var DescribeReportDefinitionsRequest = struct(n0, _DRDRes, 0, [_MR, _NT], [1, 0]);
export var DescribeReportDefinitionsResponse = struct(n0, _DRDResc, 0, [_RD, _NT], [() => ReportDefinitionList, 0]);
export var DuplicateReportNameException = error(
  n0,
  _DRNE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __DuplicateReportNameException
);
export var InternalErrorException = error(
  n0,
  _IEE,
  {
    [_e]: _s,
  },
  [_M],
  [0],

  __InternalErrorException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => TagList]);
export var ModifyReportDefinitionRequest = struct(n0, _MRDR, 0, [_RN, _RDe], [0, () => ReportDefinition]);
export var ModifyReportDefinitionResponse = struct(n0, _MRDRo, 0, [], []);
export var PutReportDefinitionRequest = struct(n0, _PRDR, 0, [_RDe, _T], [() => ReportDefinition, () => TagList]);
export var PutReportDefinitionResponse = struct(n0, _PRDRu, 0, [], []);
export var ReportDefinition = struct(
  n0,
  _RDe,
  0,
  [_RN, _TU, _F, _C, _ASE, _SB, _SP, _SR, _AA, _RCR, _RV, _BVA, _RS],
  [0, 0, 0, 0, 64 | 0, 0, 0, 0, 64 | 0, 2, 0, 0, () => ReportStatus]
);
export var ReportLimitReachedException = error(
  n0,
  _RLRE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ReportLimitReachedException
);
export var ReportStatus = struct(n0, _RS, 0, [_lD, _lS], [0, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RN, _T], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ValidationException
);
export var Unit = "unit" as const;

export var AdditionalArtifactList = 64 | 0;

export var ReportDefinitionList = list(n0, _RDL, 0, () => ReportDefinition);
export var SchemaElementList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var DeleteReportDefinition = op(
  n0,
  _DRD,
  0,
  () => DeleteReportDefinitionRequest,
  () => DeleteReportDefinitionResponse
);
export var DescribeReportDefinitions = op(
  n0,
  _DRDe,
  0,
  () => DescribeReportDefinitionsRequest,
  () => DescribeReportDefinitionsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var ModifyReportDefinition = op(
  n0,
  _MRD,
  0,
  () => ModifyReportDefinitionRequest,
  () => ModifyReportDefinitionResponse
);
export var PutReportDefinition = op(
  n0,
  _PRD,
  0,
  () => PutReportDefinitionRequest,
  () => PutReportDefinitionResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
