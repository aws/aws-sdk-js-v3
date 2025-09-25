// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _AFM,
  _cA,
  _CAF,
  _CAFC,
  _CAFCr,
  _CAFCS,
  _CAFCSr,
  _CAFR,
  _CAFRr,
  _cB,
  _cC,
  _Co,
  _con,
  _CS,
  _cS,
  _cSC,
  _CSo,
  _cSo,
  _cT,
  _d,
  _F,
  _f,
  _fI,
  _FML,
  _fML,
  _fT,
  _GAF,
  _GAFR,
  _GAFRe,
  _h,
  _hQ,
  _i,
  _l,
  _LAF,
  _LAFR,
  _LAFRi,
  _lUA,
  _lUB,
  _mR,
  _n,
  _nT,
  _t,
  _ty,
  _UAF,
  _UAFCS,
  _UAFCSp,
  _UAFR,
  _UAFRp,
  CreatedBy,
  n0,
} from "./schemas_0";
import { Control, LastUpdatedBy } from "./schemas_1_Control";
import { ComplianceType } from "./schemas_28_Assessment";

/* eslint no-var: 0 */

export var AssessmentFrameworkMetadata = struct(
  n0,
  _AFM,
  0,
  [_a, _i, _ty, _n, _d, _l, _cT, _cC, _cSC, _cA, _lUA],
  [0, 0, 0, 0, 0, 0, [() => ComplianceType, 0], 1, 1, 4, 4]
);
export var ControlSet = struct(n0, _CS, 0, [_i, _n, _con], [0, 0, [() => Controls, 0]]);
export var CreateAssessmentFrameworkControl = struct(n0, _CAFC, 0, [_i], [0]);
export var CreateAssessmentFrameworkControlSet = struct(
  n0,
  _CAFCS,
  0,
  [_n, _con],
  [0, () => CreateAssessmentFrameworkControls]
);
export var CreateAssessmentFrameworkRequest = struct(
  n0,
  _CAFR,
  0,
  [_n, _d, _cT, _cS, _t],
  [0, 0, [() => ComplianceType, 0], () => CreateAssessmentFrameworkControlSets, 128 | 0]
);
export var CreateAssessmentFrameworkResponse = struct(n0, _CAFRr, 0, [_f], [[() => Framework, 0]]);
export var Framework = struct(
  n0,
  _F,
  0,
  [_a, _i, _n, _ty, _cT, _d, _l, _cSo, _cS, _cA, _lUA, _cB, _lUB, _t],
  [
    0,
    0,
    0,
    0,
    [() => ComplianceType, 0],
    0,
    0,
    0,
    [() => ControlSets, 0],
    4,
    4,
    [() => CreatedBy, 0],
    [() => LastUpdatedBy, 0],
    128 | 0,
  ]
);
export var GetAssessmentFrameworkRequest = struct(n0, _GAFR, 0, [_fI], [[0, 1]]);
export var GetAssessmentFrameworkResponse = struct(n0, _GAFRe, 0, [_f], [[() => Framework, 0]]);
export var ListAssessmentFrameworksRequest = struct(
  n0,
  _LAFR,
  0,
  [_fT, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _fT,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAssessmentFrameworksResponse = struct(n0, _LAFRi, 0, [_fML, _nT], [[() => FrameworkMetadataList, 0], 0]);
export var UpdateAssessmentFrameworkControlSet = struct(
  n0,
  _UAFCS,
  0,
  [_i, _n, _con],
  [0, 0, () => CreateAssessmentFrameworkControls]
);
export var UpdateAssessmentFrameworkRequest = struct(
  n0,
  _UAFR,
  0,
  [_fI, _n, _d, _cT, _cS],
  [[0, 1], 0, 0, [() => ComplianceType, 0], () => UpdateAssessmentFrameworkControlSets]
);
export var UpdateAssessmentFrameworkResponse = struct(n0, _UAFRp, 0, [_f], [[() => Framework, 0]]);
export var Controls = list(n0, _Co, 0, [() => Control, 0]);
export var ControlSets = list(n0, _CSo, 8, [() => ControlSet, 0]);
export var CreateAssessmentFrameworkControls = list(n0, _CAFCr, 0, () => CreateAssessmentFrameworkControl);
export var CreateAssessmentFrameworkControlSets = list(n0, _CAFCSr, 0, () => CreateAssessmentFrameworkControlSet);
export var FrameworkMetadataList = list(n0, _FML, 0, [() => AssessmentFrameworkMetadata, 0]);
export var UpdateAssessmentFrameworkControlSets = list(n0, _UAFCSp, 0, () => UpdateAssessmentFrameworkControlSet);
export var CreateAssessmentFramework = op(
  n0,
  _CAF,
  {
    [_h]: ["POST", "/assessmentFrameworks", 200],
  },
  () => CreateAssessmentFrameworkRequest,
  () => CreateAssessmentFrameworkResponse
);
export var GetAssessmentFramework = op(
  n0,
  _GAF,
  {
    [_h]: ["GET", "/assessmentFrameworks/{frameworkId}", 200],
  },
  () => GetAssessmentFrameworkRequest,
  () => GetAssessmentFrameworkResponse
);
export var ListAssessmentFrameworks = op(
  n0,
  _LAF,
  {
    [_h]: ["GET", "/assessmentFrameworks", 200],
  },
  () => ListAssessmentFrameworksRequest,
  () => ListAssessmentFrameworksResponse
);
export var UpdateAssessmentFramework = op(
  n0,
  _UAF,
  {
    [_h]: ["PUT", "/assessmentFrameworks/{frameworkId}", 200],
  },
  () => UpdateAssessmentFrameworkRequest,
  () => UpdateAssessmentFrameworkResponse
);
