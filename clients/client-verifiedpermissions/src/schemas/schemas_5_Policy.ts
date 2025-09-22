// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _cD,
  _CPT,
  _CPTI,
  _CPTO,
  _cT,
  _des,
  _DPT,
  _DPTI,
  _DPTO,
  _GPT,
  _GPTI,
  _GPTO,
  _LPT,
  _LPTI,
  _LPTO,
  _lUD,
  _mR,
  _nT,
  _pSI,
  _PTD,
  _PTI,
  _pTI,
  _PTL,
  _pTo,
  _s,
  _UPT,
  _UPTI,
  _UPTO,
  n0,
} from "./schemas_0";
import { PolicyStatement } from "./schemas_12_Policy";

/* eslint no-var: 0 */

export var PolicyTemplateDescription = sim(n0, _PTD, 0, 8);
export var CreatePolicyTemplateInput = struct(
  n0,
  _CPTI,
  0,
  [_cT, _pSI, _des, _s],
  [[0, 4], 0, [() => PolicyTemplateDescription, 0], [() => PolicyStatement, 0]]
);
export var CreatePolicyTemplateOutput = struct(n0, _CPTO, 0, [_pSI, _pTI, _cD, _lUD], [0, 0, 5, 5]);
export var DeletePolicyTemplateInput = struct(n0, _DPTI, 0, [_pSI, _pTI], [0, 0]);
export var DeletePolicyTemplateOutput = struct(n0, _DPTO, 0, [], []);
export var GetPolicyTemplateInput = struct(n0, _GPTI, 0, [_pSI, _pTI], [0, 0]);
export var GetPolicyTemplateOutput = struct(
  n0,
  _GPTO,
  0,
  [_pSI, _pTI, _des, _s, _cD, _lUD],
  [0, 0, [() => PolicyTemplateDescription, 0], [() => PolicyStatement, 0], 5, 5]
);
export var ListPolicyTemplatesInput = struct(n0, _LPTI, 0, [_pSI, _nT, _mR], [0, 0, 1]);
export var ListPolicyTemplatesOutput = struct(n0, _LPTO, 0, [_nT, _pTo], [0, [() => PolicyTemplatesList, 0]]);
export var PolicyTemplateItem = struct(
  n0,
  _PTI,
  0,
  [_pSI, _pTI, _des, _cD, _lUD],
  [0, 0, [() => PolicyTemplateDescription, 0], 5, 5]
);
export var UpdatePolicyTemplateInput = struct(
  n0,
  _UPTI,
  0,
  [_pSI, _pTI, _des, _s],
  [0, 0, [() => PolicyTemplateDescription, 0], [() => PolicyStatement, 0]]
);
export var UpdatePolicyTemplateOutput = struct(n0, _UPTO, 0, [_pSI, _pTI, _cD, _lUD], [0, 0, 5, 5]);
export var PolicyTemplatesList = list(n0, _PTL, 0, [() => PolicyTemplateItem, 0]);
export var CreatePolicyTemplate = op(
  n0,
  _CPT,
  2,
  () => CreatePolicyTemplateInput,
  () => CreatePolicyTemplateOutput
);
export var DeletePolicyTemplate = op(
  n0,
  _DPT,
  2,
  () => DeletePolicyTemplateInput,
  () => DeletePolicyTemplateOutput
);
export var GetPolicyTemplate = op(
  n0,
  _GPT,
  0,
  () => GetPolicyTemplateInput,
  () => GetPolicyTemplateOutput
);
export var ListPolicyTemplates = op(
  n0,
  _LPT,
  0,
  () => ListPolicyTemplatesInput,
  () => ListPolicyTemplatesOutput
);
export var UpdatePolicyTemplate = op(
  n0,
  _UPT,
  2,
  () => UpdatePolicyTemplateInput,
  () => UpdatePolicyTemplateOutput
);
