// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { LimitExceededException as __LimitExceededException } from "../models/index";
import {
  _a,
  _c,
  _cA,
  _CFT,
  _CFTR,
  _CFTRr,
  _cME,
  _cNV,
  _CSI,
  _CSIR,
  _CSIRr,
  _CST,
  _CSTR,
  _CSTRr,
  _d,
  _DD,
  _de,
  _dEE,
  _des,
  _do,
  _DR,
  _DRe,
  _e,
  _ED,
  _EDn,
  _EF,
  _EFn,
  _eTn,
  _f,
  _fARA,
  _FTD,
  _GE,
  _GER,
  _GERe,
  _GFT,
  _GFTR,
  _GFTRe,
  _gGN,
  _GSI,
  _GSIR,
  _GSIRe,
  _GST,
  _GSTR,
  _GSTRe,
  _hE,
  _i,
  _id,
  _l,
  _LEE,
  _m,
  _MC,
  _mC,
  _mR,
  _mRRA,
  _n,
  _nT,
  _nV,
  _rN,
  _s,
  _sBN,
  _SE,
  _SER,
  _SERe,
  _SID,
  _STD,
  _sWPN,
  _t,
  _ta,
  _te,
  _ty,
  _UED,
  _UEDR,
  _UEDRp,
  _UFT,
  _UFTR,
  _UFTRp,
  _uI,
  _UST,
  _USTR,
  _USTRp,
  _v,
  _vDR,
  _vNV,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_2_Create";
import { SystemInstanceSummary } from "./schemas_9_System";
import { FlowTemplateSummary } from "./schemas_12_Flow";
import { SystemTemplateSummary } from "./schemas_13_System";

/* eslint no-var: 0 */

export var CreateFlowTemplateRequest = struct(n0, _CFTR, 0, [_d, _cNV], [() => DefinitionDocument, 1]);
export var CreateFlowTemplateResponse = struct(n0, _CFTRr, 0, [_s], [() => FlowTemplateSummary]);
export var CreateSystemInstanceRequest = struct(
  n0,
  _CSIR,
  0,
  [_t, _d, _ta, _gGN, _sBN, _mC, _fARA],
  [() => TagList, () => DefinitionDocument, 0, 0, 0, () => MetricsConfiguration, 0]
);
export var CreateSystemInstanceResponse = struct(n0, _CSIRr, 0, [_s], [() => SystemInstanceSummary]);
export var CreateSystemTemplateRequest = struct(n0, _CSTR, 0, [_d, _cNV], [() => DefinitionDocument, 1]);
export var CreateSystemTemplateResponse = struct(n0, _CSTRr, 0, [_s], [() => SystemTemplateSummary]);
export var DefinitionDocument = struct(n0, _DD, 0, [_l, _te], [0, 0]);
export var DependencyRevision = struct(n0, _DR, 0, [_i, _rN], [0, 1]);
export var EntityDescription = struct(n0, _ED, 0, [_i, _a, _ty, _cA, _d], [0, 0, 0, 4, () => DefinitionDocument]);
export var EntityFilter = struct(n0, _EF, 0, [_n, _v], [0, 64 | 0]);
export var FlowTemplateDescription = struct(
  n0,
  _FTD,
  0,
  [_s, _d, _vNV],
  [() => FlowTemplateSummary, () => DefinitionDocument, 1]
);
export var GetEntitiesRequest = struct(n0, _GER, 0, [_id, _nV], [64 | 0, 1]);
export var GetEntitiesResponse = struct(n0, _GERe, 0, [_de], [() => EntityDescriptions]);
export var GetFlowTemplateRequest = struct(n0, _GFTR, 0, [_i, _rN], [0, 1]);
export var GetFlowTemplateResponse = struct(n0, _GFTRe, 0, [_des], [() => FlowTemplateDescription]);
export var GetSystemInstanceRequest = struct(n0, _GSIR, 0, [_i], [0]);
export var GetSystemInstanceResponse = struct(n0, _GSIRe, 0, [_des], [() => SystemInstanceDescription]);
export var GetSystemTemplateRequest = struct(n0, _GSTR, 0, [_i, _rN], [0, 1]);
export var GetSystemTemplateResponse = struct(n0, _GSTRe, 0, [_des], [() => SystemTemplateDescription]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 410,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var MetricsConfiguration = struct(n0, _MC, 0, [_cME, _mRRA], [2, 0]);
export var SearchEntitiesRequest = struct(
  n0,
  _SER,
  0,
  [_eTn, _f, _nT, _mR, _nV],
  [64 | 0, () => EntityFilters, 0, 1, 1]
);
export var SearchEntitiesResponse = struct(n0, _SERe, 0, [_de, _nT], [() => EntityDescriptions, 0]);
export var SystemInstanceDescription = struct(
  n0,
  _SID,
  0,
  [_s, _d, _sBN, _mC, _vNV, _vDR, _fARA],
  [
    () => SystemInstanceSummary,
    () => DefinitionDocument,
    0,
    () => MetricsConfiguration,
    1,
    () => DependencyRevisions,
    0,
  ]
);
export var SystemTemplateDescription = struct(
  n0,
  _STD,
  0,
  [_s, _d, _vNV],
  [() => SystemTemplateSummary, () => DefinitionDocument, 1]
);
export var UpdateFlowTemplateRequest = struct(n0, _UFTR, 0, [_i, _d, _cNV], [0, () => DefinitionDocument, 1]);
export var UpdateFlowTemplateResponse = struct(n0, _UFTRp, 0, [_s], [() => FlowTemplateSummary]);
export var UpdateSystemTemplateRequest = struct(n0, _USTR, 0, [_i, _d, _cNV], [0, () => DefinitionDocument, 1]);
export var UpdateSystemTemplateResponse = struct(n0, _USTRp, 0, [_s], [() => SystemTemplateSummary]);
export var UploadEntityDefinitionsRequest = struct(n0, _UEDR, 0, [_do, _sWPN, _dEE], [() => DefinitionDocument, 2, 2]);
export var UploadEntityDefinitionsResponse = struct(n0, _UEDRp, 0, [_uI], [0]);
export var DependencyRevisions = list(n0, _DRe, 0, () => DependencyRevision);
export var EntityDescriptions = list(n0, _EDn, 0, () => EntityDescription);
export var EntityFilters = list(n0, _EFn, 0, () => EntityFilter);
export var EntityFilterValues = 64 | 0;

export var EntityTypes = 64 | 0;

export var Urns = 64 | 0;

export var CreateFlowTemplate = op(
  n0,
  _CFT,
  0,
  () => CreateFlowTemplateRequest,
  () => CreateFlowTemplateResponse
);
export var CreateSystemInstance = op(
  n0,
  _CSI,
  0,
  () => CreateSystemInstanceRequest,
  () => CreateSystemInstanceResponse
);
export var CreateSystemTemplate = op(
  n0,
  _CST,
  0,
  () => CreateSystemTemplateRequest,
  () => CreateSystemTemplateResponse
);
export var GetEntities = op(
  n0,
  _GE,
  0,
  () => GetEntitiesRequest,
  () => GetEntitiesResponse
);
export var GetFlowTemplate = op(
  n0,
  _GFT,
  0,
  () => GetFlowTemplateRequest,
  () => GetFlowTemplateResponse
);
export var GetSystemInstance = op(
  n0,
  _GSI,
  0,
  () => GetSystemInstanceRequest,
  () => GetSystemInstanceResponse
);
export var GetSystemTemplate = op(
  n0,
  _GST,
  0,
  () => GetSystemTemplateRequest,
  () => GetSystemTemplateResponse
);
export var SearchEntities = op(
  n0,
  _SE,
  0,
  () => SearchEntitiesRequest,
  () => SearchEntitiesResponse
);
export var UpdateFlowTemplate = op(
  n0,
  _UFT,
  0,
  () => UpdateFlowTemplateRequest,
  () => UpdateFlowTemplateResponse
);
export var UpdateSystemTemplate = op(
  n0,
  _UST,
  0,
  () => UpdateSystemTemplateRequest,
  () => UpdateSystemTemplateResponse
);
export var UploadEntityDefinitions = op(
  n0,
  _UED,
  0,
  () => UploadEntityDefinitionsRequest,
  () => UploadEntityDefinitionsResponse
);
