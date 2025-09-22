// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidRenderingParameterException as __InvalidRenderingParameterException,
  MissingRenderingAttributeException as __MissingRenderingAttributeException,
  TemplateDoesNotExistException as __TemplateDoesNotExistException,
} from "../models/index";
import {
  _aQE,
  _c,
  _e,
  _GT,
  _GTR,
  _GTRe,
  _hE,
  _IRPE,
  _m,
  _MRAE,
  _RTe,
  _TD,
  _TDNEE,
  _Te,
  _TN,
  _TRT,
  _TRTR,
  _TRTRe,
  _UT,
  _UTR,
  _UTRp,
  n0,
} from "./schemas_0";
import { Template } from "./schemas_27_Template";

/* eslint no-var: 0 */

export var GetTemplateRequest = struct(n0, _GTR, 0, [_TN], [0]);
export var GetTemplateResponse = struct(n0, _GTRe, 0, [_Te], [() => Template]);
export var InvalidRenderingParameterException = error(
  n0,
  _IRPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidRenderingParameter`, 400],
  },
  [_TN, _m],
  [0, 0],

  __InvalidRenderingParameterException
);
export var MissingRenderingAttributeException = error(
  n0,
  _MRAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`MissingRenderingAttribute`, 400],
  },
  [_TN, _m],
  [0, 0],

  __MissingRenderingAttributeException
);
export var TemplateDoesNotExistException = error(
  n0,
  _TDNEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TemplateDoesNotExist`, 400],
  },
  [_TN, _m],
  [0, 0],

  __TemplateDoesNotExistException
);
export var TestRenderTemplateRequest = struct(n0, _TRTR, 0, [_TN, _TD], [0, 0]);
export var TestRenderTemplateResponse = struct(n0, _TRTRe, 0, [_RTe], [0]);
export var UpdateTemplateRequest = struct(n0, _UTR, 0, [_Te], [() => Template]);
export var UpdateTemplateResponse = struct(n0, _UTRp, 0, [], []);
export var GetTemplate = op(
  n0,
  _GT,
  0,
  () => GetTemplateRequest,
  () => GetTemplateResponse
);
export var TestRenderTemplate = op(
  n0,
  _TRT,
  0,
  () => TestRenderTemplateRequest,
  () => TestRenderTemplateResponse
);
export var UpdateTemplate = op(
  n0,
  _UT,
  0,
  () => UpdateTemplateRequest,
  () => UpdateTemplateResponse
);
