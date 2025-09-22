// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _ac,
  _aIDct,
  _aIDcti,
  _aN,
  _ca,
  _d,
  _dI,
  _DLCT,
  _DLCTR,
  _DLCTRe,
  _dV,
  _eP,
  _f,
  _ht,
  _i,
  _lCTID,
  _LTA,
  _LTAR,
  _LTARi,
  _mR,
  _mSFC,
  _nT,
  _o,
  _oS,
  _p,
  _PTA,
  _PTAR,
  _RTA,
  _RTAR,
  _RTARe,
  _SDP,
  _TAD,
  _TADe,
  _TARF,
  _tS,
  n0,
  SsmDocumentExternalParameters,
  SsmDocumentParameters,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLaunchConfigurationTemplateRequest = struct(n0, _DLCTR, 0, [_lCTID], [0]);
export var DeleteLaunchConfigurationTemplateResponse = struct(n0, _DLCTRe, 0, [], []);
export var ListTemplateActionsRequest = struct(
  n0,
  _LTAR,
  0,
  [_lCTID, _f, _mR, _nT],
  [0, () => TemplateActionsRequestFilters, 1, 0]
);
export var ListTemplateActionsResponse = struct(n0, _LTARi, 0, [_i, _nT], [() => TemplateActionDocuments, 0]);
export var PutTemplateActionRequest = struct(
  n0,
  _PTAR,
  0,
  [_lCTID, _aN, _dI, _o, _aIDct, _dV, _ac, _tS, _mSFC, _p, _oS, _eP, _d, _ca],
  [0, 0, 0, 1, 0, 0, 2, 1, 2, () => SsmDocumentParameters, 0, () => SsmDocumentExternalParameters, 0, 0]
);
export var RemoveTemplateActionRequest = struct(n0, _RTAR, 0, [_lCTID, _aIDct], [0, 0]);
export var RemoveTemplateActionResponse = struct(n0, _RTARe, 0, [], []);
export var TemplateActionDocument = struct(
  n0,
  _TAD,
  0,
  [_aIDct, _aN, _dI, _o, _dV, _ac, _tS, _mSFC, _p, _oS, _eP, _d, _ca],
  [0, 0, 0, 1, 0, 2, 1, 2, () => SsmDocumentParameters, 0, () => SsmDocumentExternalParameters, 0, 0]
);
export var TemplateActionsRequestFilters = struct(n0, _TARF, 0, [_aIDcti], [64 | 0]);
export var TemplateActionDocuments = list(n0, _TADe, 0, () => TemplateActionDocument);
export var DeleteLaunchConfigurationTemplate = op(
  n0,
  _DLCT,
  {
    [_ht]: ["POST", "/DeleteLaunchConfigurationTemplate", 204],
  },
  () => DeleteLaunchConfigurationTemplateRequest,
  () => DeleteLaunchConfigurationTemplateResponse
);
export var ListTemplateActions = op(
  n0,
  _LTA,
  {
    [_ht]: ["POST", "/ListTemplateActions", 200],
  },
  () => ListTemplateActionsRequest,
  () => ListTemplateActionsResponse
);
export var PutTemplateAction = op(
  n0,
  _PTA,
  {
    [_ht]: ["POST", "/PutTemplateAction", 200],
  },
  () => PutTemplateActionRequest,
  () => TemplateActionDocument
);
export var RemoveTemplateAction = op(
  n0,
  _RTA,
  {
    [_ht]: ["POST", "/RemoveTemplateAction", 204],
  },
  () => RemoveTemplateActionRequest,
  () => RemoveTemplateActionResponse
);
