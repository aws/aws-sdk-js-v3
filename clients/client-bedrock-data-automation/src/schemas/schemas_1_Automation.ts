// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _a,
  _AEC,
  _aFF,
  _AOC,
  _ASE,
  _ASGF,
  _ASOC,
  _B,
  _b,
  _bA,
  _bB,
  _BF,
  _bF,
  _BI,
  _BIl,
  _Bl,
  _bl,
  _BN,
  _bN,
  _BS,
  _bS,
  _bSF,
  _BSl,
  _bV,
  _c,
  _ca,
  _CB,
  _CBR,
  _CBRr,
  _CBV,
  _CBVR,
  _CBVRr,
  _CDAP,
  _CDAPR,
  _CDAPRr,
  _CE,
  _COC,
  _cOC,
  _cT,
  _cTl,
  _d,
  _DAP,
  _DAPD,
  _DAPF,
  _DAPN,
  _DAPS,
  _DAPSa,
  _DBB,
  _DDAP,
  _DDAPR,
  _DDAPRe,
  _DEG,
  _DOAFF,
  _DOC,
  _DOF,
  _DOTF,
  _DSE,
  _DSGF,
  _DSOC,
  _e,
  _EC,
  _eC,
  _ex,
  _g,
  _GB,
  _GBR,
  _GBRe,
  _GDAP,
  _GDAPR,
  _GDAPRe,
  _gF,
  _h,
  _hE,
  _i,
  _IBB,
  _IEC,
  _IOC,
  _ISE,
  _ISGF,
  _ISOC,
  _j,
  _kEC,
  _kKI,
  _LB,
  _LBR,
  _LBRi,
  _LDAP,
  _LDAPR,
  _LDAPRi,
  _lMT,
  _m,
  _mo,
  _mP,
  _mp,
  _MPC,
  _mR,
  _MRC,
  _mRo,
  _nT,
  _OC,
  _oC,
  _oF,
  _p,
  _pA,
  _pD,
  _pF,
  _pN,
  _pn,
  _pr,
  _pS,
  _pSF,
  _rO,
  _s,
  _SC,
  _sc,
  _SOC,
  _sOC,
  _sp,
  _st,
  _t,
  _ta,
  _tF,
  _ty,
  _UB,
  _UBR,
  _UBRp,
  _UDAP,
  _UDAPR,
  _UDAPRp,
  _v,
  _VBB,
  _VEC,
  _VOC,
  _VSE,
  _VSGF,
  _VSOC,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_2_Resource";

/* eslint no-var: 0 */

export var BlueprintName = sim(n0, _BN, 0, 8);
export var BlueprintSchema = sim(n0, _BS, 0, 8);
export var DataAutomationProjectDescription = sim(n0, _DAPD, 0, 8);
export var DataAutomationProjectName = sim(n0, _DAPN, 0, 8);
export var AudioExtractionCategory = struct(n0, _AEC, 0, [_s, _t], [0, 64 | 0]);
export var AudioOverrideConfiguration = struct(n0, _AOC, 0, [_mP], [() => ModalityProcessingConfiguration]);
export var AudioStandardExtraction = struct(n0, _ASE, 0, [_ca], [() => AudioExtractionCategory]);
export var AudioStandardGenerativeField = struct(n0, _ASGF, 0, [_s, _t], [0, 64 | 0]);
export var AudioStandardOutputConfiguration = struct(
  n0,
  _ASOC,
  0,
  [_ex, _gF],
  [() => AudioStandardExtraction, () => AudioStandardGenerativeField]
);
export var Blueprint = struct(
  n0,
  _B,
  0,
  [_bA, _sc, _ty, _cT, _lMT, _bN, _bV, _bS, _kKI, _kEC],
  [0, [() => BlueprintSchema, 0], 0, 5, 5, [() => BlueprintName, 0], 0, 0, 0, 128 | 0]
);
export var BlueprintFilter = struct(n0, _BF, 0, [_bA, _bV, _bS], [0, 0, 0]);
export var BlueprintItem = struct(n0, _BI, 0, [_bA, _bV, _bS], [0, 0, 0]);
export var BlueprintSummary = struct(
  n0,
  _BSl,
  0,
  [_bA, _bV, _bS, _bN, _cT, _lMT],
  [0, 0, 0, [() => BlueprintName, 0], 5, 5]
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateBlueprintRequest = struct(
  n0,
  _CBR,
  0,
  [_bN, _ty, _bS, _sc, _cTl, _eC, _ta],
  [[() => BlueprintName, 0], 0, 0, [() => BlueprintSchema, 0], [0, 4], () => EncryptionConfiguration, () => TagList]
);
export var CreateBlueprintResponse = struct(n0, _CBRr, 0, [_b], [[() => Blueprint, 0]]);
export var CreateBlueprintVersionRequest = struct(
  n0,
  _CBVR,
  0,
  [_bA, _cTl],
  [
    [0, 1],
    [0, 4],
  ]
);
export var CreateBlueprintVersionResponse = struct(n0, _CBVRr, 0, [_b], [[() => Blueprint, 0]]);
export var CreateDataAutomationProjectRequest = struct(
  n0,
  _CDAPR,
  0,
  [_pN, _pD, _pS, _sOC, _cOC, _oC, _cTl, _eC, _ta],
  [
    [() => DataAutomationProjectName, 0],
    [() => DataAutomationProjectDescription, 0],
    0,
    () => StandardOutputConfiguration,
    () => CustomOutputConfiguration,
    () => OverrideConfiguration,
    [0, 4],
    () => EncryptionConfiguration,
    () => TagList,
  ]
);
export var CreateDataAutomationProjectResponse = struct(n0, _CDAPRr, 0, [_pA, _pS, _st], [0, 0, 0]);
export var CustomOutputConfiguration = struct(n0, _COC, 0, [_bl], [() => BlueprintItems]);
export var DataAutomationProject = struct(
  n0,
  _DAP,
  0,
  [_pA, _cT, _lMT, _pN, _pS, _pD, _sOC, _cOC, _oC, _st, _kKI, _kEC],
  [
    0,
    5,
    5,
    [() => DataAutomationProjectName, 0],
    0,
    [() => DataAutomationProjectDescription, 0],
    () => StandardOutputConfiguration,
    () => CustomOutputConfiguration,
    () => OverrideConfiguration,
    0,
    0,
    128 | 0,
  ]
);
export var DataAutomationProjectFilter = struct(n0, _DAPF, 0, [_pA, _pS], [0, 0]);
export var DataAutomationProjectSummary = struct(
  n0,
  _DAPS,
  0,
  [_pA, _pS, _pN, _cT],
  [0, 0, [() => DataAutomationProjectName, 0], 5]
);
export var DeleteDataAutomationProjectRequest = struct(n0, _DDAPR, 0, [_pA], [[0, 1]]);
export var DeleteDataAutomationProjectResponse = struct(n0, _DDAPRe, 0, [_pA, _st], [0, 0]);
export var DocumentBoundingBox = struct(n0, _DBB, 0, [_s], [0]);
export var DocumentExtractionGranularity = struct(n0, _DEG, 0, [_t], [64 | 0]);
export var DocumentOutputAdditionalFileFormat = struct(n0, _DOAFF, 0, [_s], [0]);
export var DocumentOutputFormat = struct(
  n0,
  _DOF,
  0,
  [_tF, _aFF],
  [() => DocumentOutputTextFormat, () => DocumentOutputAdditionalFileFormat]
);
export var DocumentOutputTextFormat = struct(n0, _DOTF, 0, [_t], [64 | 0]);
export var DocumentOverrideConfiguration = struct(
  n0,
  _DOC,
  0,
  [_sp, _mP],
  [() => SplitterConfiguration, () => ModalityProcessingConfiguration]
);
export var DocumentStandardExtraction = struct(
  n0,
  _DSE,
  0,
  [_g, _bB],
  [() => DocumentExtractionGranularity, () => DocumentBoundingBox]
);
export var DocumentStandardGenerativeField = struct(n0, _DSGF, 0, [_s], [0]);
export var DocumentStandardOutputConfiguration = struct(
  n0,
  _DSOC,
  0,
  [_ex, _gF, _oF],
  [() => DocumentStandardExtraction, () => DocumentStandardGenerativeField, () => DocumentOutputFormat]
);
export var EncryptionConfiguration = struct(n0, _EC, 0, [_kKI, _kEC], [0, 128 | 0]);
export var GetBlueprintRequest = struct(n0, _GBR, 0, [_bA, _bV, _bS], [[0, 1], 0, 0]);
export var GetBlueprintResponse = struct(n0, _GBRe, 0, [_b], [[() => Blueprint, 0]]);
export var GetDataAutomationProjectRequest = struct(n0, _GDAPR, 0, [_pA, _pS], [[0, 1], 0]);
export var GetDataAutomationProjectResponse = struct(n0, _GDAPRe, 0, [_p], [[() => DataAutomationProject, 0]]);
export var ImageBoundingBox = struct(n0, _IBB, 0, [_s], [0]);
export var ImageExtractionCategory = struct(n0, _IEC, 0, [_s, _t], [0, 64 | 0]);
export var ImageOverrideConfiguration = struct(n0, _IOC, 0, [_mP], [() => ModalityProcessingConfiguration]);
export var ImageStandardExtraction = struct(
  n0,
  _ISE,
  0,
  [_ca, _bB],
  [() => ImageExtractionCategory, () => ImageBoundingBox]
);
export var ImageStandardGenerativeField = struct(n0, _ISGF, 0, [_s, _t], [0, 64 | 0]);
export var ImageStandardOutputConfiguration = struct(
  n0,
  _ISOC,
  0,
  [_ex, _gF],
  [() => ImageStandardExtraction, () => ImageStandardGenerativeField]
);
export var ListBlueprintsRequest = struct(
  n0,
  _LBR,
  0,
  [_bA, _rO, _bSF, _mR, _nT, _pF],
  [0, 0, 0, 1, 0, () => DataAutomationProjectFilter]
);
export var ListBlueprintsResponse = struct(n0, _LBRi, 0, [_bl, _nT], [[() => Blueprints, 0], 0]);
export var ListDataAutomationProjectsRequest = struct(
  n0,
  _LDAPR,
  0,
  [_mR, _nT, _pSF, _bF, _rO],
  [1, 0, 0, () => BlueprintFilter, 0]
);
export var ListDataAutomationProjectsResponse = struct(
  n0,
  _LDAPRi,
  0,
  [_pr, _nT],
  [[() => DataAutomationProjectSummaries, 0], 0]
);
export var ModalityProcessingConfiguration = struct(n0, _MPC, 0, [_s], [0]);
export var ModalityRoutingConfiguration = struct(n0, _MRC, 0, [_j, _pn, _mp, _mo], [0, 0, 0, 0]);
export var OverrideConfiguration = struct(
  n0,
  _OC,
  0,
  [_d, _i, _v, _a, _mRo],
  [
    () => DocumentOverrideConfiguration,
    () => ImageOverrideConfiguration,
    () => VideoOverrideConfiguration,
    () => AudioOverrideConfiguration,
    () => ModalityRoutingConfiguration,
  ]
);
export var SplitterConfiguration = struct(n0, _SC, 0, [_s], [0]);
export var StandardOutputConfiguration = struct(
  n0,
  _SOC,
  0,
  [_d, _i, _v, _a],
  [
    () => DocumentStandardOutputConfiguration,
    () => ImageStandardOutputConfiguration,
    () => VideoStandardOutputConfiguration,
    () => AudioStandardOutputConfiguration,
  ]
);
export var UpdateBlueprintRequest = struct(
  n0,
  _UBR,
  0,
  [_bA, _sc, _bS, _eC],
  [[0, 1], [() => BlueprintSchema, 0], 0, () => EncryptionConfiguration]
);
export var UpdateBlueprintResponse = struct(n0, _UBRp, 0, [_b], [[() => Blueprint, 0]]);
export var UpdateDataAutomationProjectRequest = struct(
  n0,
  _UDAPR,
  0,
  [_pA, _pS, _pD, _sOC, _cOC, _oC, _eC],
  [
    [0, 1],
    0,
    [() => DataAutomationProjectDescription, 0],
    () => StandardOutputConfiguration,
    () => CustomOutputConfiguration,
    () => OverrideConfiguration,
    () => EncryptionConfiguration,
  ]
);
export var UpdateDataAutomationProjectResponse = struct(n0, _UDAPRp, 0, [_pA, _pS, _st], [0, 0, 0]);
export var VideoBoundingBox = struct(n0, _VBB, 0, [_s], [0]);
export var VideoExtractionCategory = struct(n0, _VEC, 0, [_s, _t], [0, 64 | 0]);
export var VideoOverrideConfiguration = struct(n0, _VOC, 0, [_mP], [() => ModalityProcessingConfiguration]);
export var VideoStandardExtraction = struct(
  n0,
  _VSE,
  0,
  [_ca, _bB],
  [() => VideoExtractionCategory, () => VideoBoundingBox]
);
export var VideoStandardGenerativeField = struct(n0, _VSGF, 0, [_s, _t], [0, 64 | 0]);
export var VideoStandardOutputConfiguration = struct(
  n0,
  _VSOC,
  0,
  [_ex, _gF],
  [() => VideoStandardExtraction, () => VideoStandardGenerativeField]
);
export var Unit = "unit" as const;

export var AudioExtractionCategoryTypes = 64 | 0;

export var AudioStandardGenerativeFieldTypes = 64 | 0;

export var BlueprintItems = list(n0, _BIl, 0, () => BlueprintItem);
export var Blueprints = list(n0, _Bl, 0, [() => BlueprintSummary, 0]);
export var DataAutomationProjectSummaries = list(n0, _DAPSa, 0, [() => DataAutomationProjectSummary, 0]);
export var DocumentExtractionGranularityTypes = 64 | 0;

export var DocumentOutputTextFormatTypes = 64 | 0;

export var ImageExtractionCategoryTypes = 64 | 0;

export var ImageStandardGenerativeFieldTypes = 64 | 0;

export var VideoExtractionCategoryTypes = 64 | 0;

export var VideoStandardGenerativeFieldTypes = 64 | 0;

export var KmsEncryptionContext = 128 | 0;

export var CreateBlueprint = op(
  n0,
  _CB,
  {
    [_h]: ["PUT", "/blueprints/", 201],
  },
  () => CreateBlueprintRequest,
  () => CreateBlueprintResponse
);
export var CreateBlueprintVersion = op(
  n0,
  _CBV,
  {
    [_h]: ["POST", "/blueprints/{blueprintArn}/versions/", 201],
  },
  () => CreateBlueprintVersionRequest,
  () => CreateBlueprintVersionResponse
);
export var CreateDataAutomationProject = op(
  n0,
  _CDAP,
  {
    [_h]: ["PUT", "/data-automation-projects/", 201],
  },
  () => CreateDataAutomationProjectRequest,
  () => CreateDataAutomationProjectResponse
);
export var DeleteDataAutomationProject = op(
  n0,
  _DDAP,
  {
    [_h]: ["DELETE", "/data-automation-projects/{projectArn}/", 200],
  },
  () => DeleteDataAutomationProjectRequest,
  () => DeleteDataAutomationProjectResponse
);
export var GetBlueprint = op(
  n0,
  _GB,
  {
    [_h]: ["POST", "/blueprints/{blueprintArn}/", 200],
  },
  () => GetBlueprintRequest,
  () => GetBlueprintResponse
);
export var GetDataAutomationProject = op(
  n0,
  _GDAP,
  {
    [_h]: ["POST", "/data-automation-projects/{projectArn}/", 200],
  },
  () => GetDataAutomationProjectRequest,
  () => GetDataAutomationProjectResponse
);
export var ListBlueprints = op(
  n0,
  _LB,
  {
    [_h]: ["POST", "/blueprints/", 200],
  },
  () => ListBlueprintsRequest,
  () => ListBlueprintsResponse
);
export var ListDataAutomationProjects = op(
  n0,
  _LDAP,
  {
    [_h]: ["POST", "/data-automation-projects/", 200],
  },
  () => ListDataAutomationProjectsRequest,
  () => ListDataAutomationProjectsResponse
);
export var UpdateBlueprint = op(
  n0,
  _UB,
  {
    [_h]: ["PUT", "/blueprints/{blueprintArn}/", 200],
  },
  () => UpdateBlueprintRequest,
  () => UpdateBlueprintResponse
);
export var UpdateDataAutomationProject = op(
  n0,
  _UDAP,
  {
    [_h]: ["PUT", "/data-automation-projects/{projectArn}/", 200],
  },
  () => UpdateDataAutomationProjectRequest,
  () => UpdateDataAutomationProjectResponse
);
