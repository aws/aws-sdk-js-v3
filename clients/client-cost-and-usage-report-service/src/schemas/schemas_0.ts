const _AA = "AdditionalArtifacts";
const _ASE = "AdditionalSchemaElements";
const _BVA = "BillingViewArn";
const _C = "Compression";
const _DRD = "DeleteReportDefinition";
const _DRDR = "DeleteReportDefinitionRequest";
const _DRDRe = "DeleteReportDefinitionResponse";
const _DRDRes = "DescribeReportDefinitionsRequest";
const _DRDResc = "DescribeReportDefinitionsResponse";
const _DRDe = "DescribeReportDefinitions";
const _DRNE = "DuplicateReportNameException";
const _F = "Format";
const _IEE = "InternalErrorException";
const _K = "Key";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _M = "Message";
const _MR = "MaxResults";
const _MRD = "ModifyReportDefinition";
const _MRDR = "ModifyReportDefinitionRequest";
const _MRDRo = "ModifyReportDefinitionResponse";
const _NT = "NextToken";
const _PRD = "PutReportDefinition";
const _PRDR = "PutReportDefinitionRequest";
const _PRDRu = "PutReportDefinitionResponse";
const _RCR = "RefreshClosedReports";
const _RD = "ReportDefinitions";
const _RDL = "ReportDefinitionList";
const _RDe = "ReportDefinition";
const _RLRE = "ReportLimitReachedException";
const _RM = "ResponseMessage";
const _RN = "ReportName";
const _RNFE = "ResourceNotFoundException";
const _RS = "ReportStatus";
const _RV = "ReportVersioning";
const _SB = "S3Bucket";
const _SP = "S3Prefix";
const _SR = "S3Region";
const _T = "Tags";
const _TK = "TagKeys";
const _TL = "TagList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _TU = "TimeUnit";
const _Ta = "Tag";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _V = "Value";
const _VE = "ValidationException";
const _c = "client";
const _e = "error";
const _lD = "lastDelivery";
const _lS = "lastStatus";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.costandusagereportservice";
const n0 = "com.amazonaws.costandusagereportservice";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { CostAndUsageReportServiceServiceException } from "../models/CostAndUsageReportServiceServiceException";
import {
  DuplicateReportNameException,
  InternalErrorException,
  ReportLimitReachedException,
  ResourceNotFoundException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
export var DeleteReportDefinitionRequest$: StaticStructureSchema = [3, n0, _DRDR,
  0,
  [_RN],
  [0]
];
export var DeleteReportDefinitionResponse$: StaticStructureSchema = [3, n0, _DRDRe,
  0,
  [_RM],
  [0]
];
export var DescribeReportDefinitionsRequest$: StaticStructureSchema = [3, n0, _DRDRes,
  0,
  [_MR, _NT],
  [1, 0]
];
export var DescribeReportDefinitionsResponse$: StaticStructureSchema = [3, n0, _DRDResc,
  0,
  [_RD, _NT],
  [() => ReportDefinitionList, 0]
];
export var DuplicateReportNameException$: StaticErrorSchema = [-3, n0, _DRNE,
  { [_e]: _c },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(DuplicateReportNameException$, DuplicateReportNameException);
export var InternalErrorException$: StaticErrorSchema = [-3, n0, _IEE,
  { [_e]: _s },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(InternalErrorException$, InternalErrorException);
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR,
  0,
  [_RN],
  [0]
];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi,
  0,
  [_T],
  [() => TagList]
];
export var ModifyReportDefinitionRequest$: StaticStructureSchema = [3, n0, _MRDR,
  0,
  [_RN, _RDe],
  [0, () => ReportDefinition$]
];
export var ModifyReportDefinitionResponse$: StaticStructureSchema = [3, n0, _MRDRo,
  0,
  [],
  []
];
export var PutReportDefinitionRequest$: StaticStructureSchema = [3, n0, _PRDR,
  0,
  [_RDe, _T],
  [() => ReportDefinition$, () => TagList]
];
export var PutReportDefinitionResponse$: StaticStructureSchema = [3, n0, _PRDRu,
  0,
  [],
  []
];
export var ReportDefinition$: StaticStructureSchema = [3, n0, _RDe,
  0,
  [_RN, _TU, _F, _C, _ASE, _SB, _SP, _SR, _AA, _RCR, _RV, _BVA, _RS],
  [0, 0, 0, 0, 64 | 0, 0, 0, 0, 64 | 0, 2, 0, 0, () => ReportStatus$]
];
export var ReportLimitReachedException$: StaticErrorSchema = [-3, n0, _RLRE,
  { [_e]: _c },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ReportLimitReachedException$, ReportLimitReachedException);
export var ReportStatus$: StaticStructureSchema = [3, n0, _RS,
  0,
  [_lD, _lS],
  [0, 0]
];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var Tag$: StaticStructureSchema = [3, n0, _Ta,
  0,
  [_K, _V],
  [0, 0]
];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR,
  0,
  [_RN, _T],
  [0, () => TagList]
];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa,
  0,
  [],
  []
];
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR,
  0,
  [_RN, _TK],
  [0, 64 | 0]
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn,
  0,
  [],
  []
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var CostAndUsageReportServiceServiceException$: StaticErrorSchema = [-3, _sm, "CostAndUsageReportServiceServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(CostAndUsageReportServiceServiceException$, CostAndUsageReportServiceServiceException);
var AdditionalArtifactList = 64 | 0;
var ReportDefinitionList: StaticListSchema = [1, n0, _RDL,
  0, () => ReportDefinition$
];
var SchemaElementList = 64 | 0;
var TagKeyList = 64 | 0;
var TagList: StaticListSchema = [1, n0, _TL,
  0, () => Tag$
];
export var DeleteReportDefinition$: StaticOperationSchema = [9, n0, _DRD,
  0, () => DeleteReportDefinitionRequest$, () => DeleteReportDefinitionResponse$
];
export var DescribeReportDefinitions$: StaticOperationSchema = [9, n0, _DRDe,
  0, () => DescribeReportDefinitionsRequest$, () => DescribeReportDefinitionsResponse$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  0, () => ListTagsForResourceRequest$, () => ListTagsForResourceResponse$
];
export var ModifyReportDefinition$: StaticOperationSchema = [9, n0, _MRD,
  0, () => ModifyReportDefinitionRequest$, () => ModifyReportDefinitionResponse$
];
export var PutReportDefinition$: StaticOperationSchema = [9, n0, _PRD,
  0, () => PutReportDefinitionRequest$, () => PutReportDefinitionResponse$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  0, () => TagResourceRequest$, () => TagResourceResponse$
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  0, () => UntagResourceRequest$, () => UntagResourceResponse$
];
