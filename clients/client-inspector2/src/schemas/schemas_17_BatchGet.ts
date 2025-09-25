// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BGCS,
  _BGCSR,
  _BGCSRa,
  _CL,
  _CLL,
  _cod,
  _con,
  _CSE,
  _CSEL,
  _cSo,
  _CSR,
  _cSR,
  _CSRL,
  _de,
  _eC,
  _eL,
  _eM,
  _er,
  _fAi,
  _fAin,
  _ht,
  _lN,
  _SFu,
  _sFu,
  _SFug,
  _sLt,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetCodeSnippetRequest = struct(n0, _BGCSR, 0, [_fAi], [64 | 0]);
export var BatchGetCodeSnippetResponse = struct(
  n0,
  _BGCSRa,
  0,
  [_cSR, _er],
  [() => CodeSnippetResultList, () => CodeSnippetErrorList]
);
export var CodeLine = struct(n0, _CL, 0, [_con, _lN], [0, 1]);
export var CodeSnippetError = struct(n0, _CSE, 0, [_fAin, _eC, _eM], [0, 0, 0]);
export var CodeSnippetResult = struct(
  n0,
  _CSR,
  0,
  [_fAin, _sLt, _eL, _cSo, _sFu],
  [0, 1, 1, () => CodeLineList, () => SuggestedFixes]
);
export var SuggestedFix = struct(n0, _SFu, 0, [_de, _cod], [0, 0]);
export var CodeLineList = list(n0, _CLL, 0, () => CodeLine);
export var CodeSnippetErrorList = list(n0, _CSEL, 0, () => CodeSnippetError);
export var CodeSnippetResultList = list(n0, _CSRL, 0, () => CodeSnippetResult);
export var FindingArns = 64 | 0;

export var SuggestedFixes = list(n0, _SFug, 0, () => SuggestedFix);
export var BatchGetCodeSnippet = op(
  n0,
  _BGCS,
  {
    [_ht]: ["POST", "/codesnippet/batchget", 200],
  },
  () => BatchGetCodeSnippetRequest,
  () => BatchGetCodeSnippetResponse
);
