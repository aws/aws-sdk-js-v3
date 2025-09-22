// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AlreadyExistsException as __AlreadyExistsException,
  LimitExceededException as __LimitExceededException,
} from "../models/index";
import {
  _AEE,
  _aQE,
  _AR,
  _c,
  _CGT,
  _CGTI,
  _CGTO,
  _e,
  _GTI,
  _GTN,
  _hE,
  _LEE,
  _LRI,
  _M,
  _NGTN,
  _R,
  _RAR,
  _RD,
  _RDes,
  _RI,
  _RRem,
  _RT,
  _SN,
  _TCe,
  _UGT,
  _UGTI,
  _UGTO,
  n0,
} from "./schemas_0";
import { TemplateConfiguration } from "./schemas_26_Generated";

/* eslint no-var: 0 */

export var AlreadyExistsException = error(
  n0,
  _AEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AlreadyExistsException`, 400],
  },
  [_M],
  [0],

  __AlreadyExistsException
);
export var CreateGeneratedTemplateInput = struct(
  n0,
  _CGTI,
  0,
  [_R, _GTN, _SN, _TCe],
  [() => ResourceDefinitions, 0, 0, () => TemplateConfiguration]
);
export var CreateGeneratedTemplateOutput = struct(n0, _CGTO, 0, [_GTI], [0]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`LimitExceededException`, 400],
  },
  [_M],
  [0],

  __LimitExceededException
);
export var ResourceDefinition = struct(n0, _RD, 0, [_RT, _LRI, _RI], [0, 0, 128 | 0]);
export var UpdateGeneratedTemplateInput = struct(
  n0,
  _UGTI,
  0,
  [_GTN, _NGTN, _AR, _RRem, _RAR, _TCe],
  [0, 0, () => ResourceDefinitions, 64 | 0, 2, () => TemplateConfiguration]
);
export var UpdateGeneratedTemplateOutput = struct(n0, _UGTO, 0, [_GTI], [0]);
export var JazzLogicalResourceIds = 64 | 0;

export var ResourceDefinitions = list(n0, _RDes, 0, () => ResourceDefinition);
export var CreateGeneratedTemplate = op(
  n0,
  _CGT,
  0,
  () => CreateGeneratedTemplateInput,
  () => CreateGeneratedTemplateOutput
);
export var UpdateGeneratedTemplate = op(
  n0,
  _UGT,
  0,
  () => UpdateGeneratedTemplateInput,
  () => UpdateGeneratedTemplateOutput
);
