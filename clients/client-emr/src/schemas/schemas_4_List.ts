// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _AOF,
  _Ar,
  _CDT,
  _CI,
  _Co,
  _Confi,
  _DSe,
  _DSIe,
  _DSO,
  _EDT,
  _ERA,
  _FD,
  _Fi,
  _HSC,
  _I,
  _J,
  _LF,
  _LRL,
  _LRLI,
  _LRLO,
  _M,
  _MC,
  _MR,
  _N,
  _NT,
  _P,
  _Pre,
  _Re,
  _RI,
  _RLe,
  _RLF,
  _RTe,
  _RTI,
  _RTO,
  _SCR,
  _SDT,
  _SIt,
  _SSCR,
  _SSte,
  _St,
  _Sta,
  _Ste,
  _STt,
  _Ti,
  _TK,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeStepInput = struct(n0, _DSIe, 0, [_CI, _SIt], [0, 0]);
export var DescribeStepOutput = struct(n0, _DSO, 0, [_Ste], [() => Step]);
export var FailureDetails = struct(n0, _FD, 0, [_Re, _M, _LF], [0, 0, 0]);
export var HadoopStepConfig = struct(n0, _HSC, 0, [_J, _P, _MC, _Ar], [0, 128 | 0, 0, 64 | 0]);
export var ListReleaseLabelsInput = struct(n0, _LRLI, 0, [_Fi, _NT, _MR], [() => ReleaseLabelFilter, 0, 1]);
export var ListReleaseLabelsOutput = struct(n0, _LRLO, 0, [_RLe, _NT], [64 | 0, 0]);
export var ReleaseLabelFilter = struct(n0, _RLF, 0, [_Pre, _A], [0, 0]);
export var RemoveTagsInput = struct(n0, _RTI, 0, [_RI, _TK], [0, 64 | 0]);
export var RemoveTagsOutput = struct(n0, _RTO, 0, [], []);
export var Step = struct(
  n0,
  _Ste,
  0,
  [_I, _N, _Confi, _AOF, _St, _ERA],
  [0, 0, () => HadoopStepConfig, 0, () => StepStatus, 0]
);
export var StepStateChangeReason = struct(n0, _SSCR, 0, [_Co, _M], [0, 0]);
export var StepStatus = struct(
  n0,
  _SSte,
  0,
  [_Sta, _SCR, _FD, _Ti],
  [0, () => StepStateChangeReason, () => FailureDetails, () => StepTimeline]
);
export var StepTimeline = struct(n0, _STt, 0, [_CDT, _SDT, _EDT], [4, 4, 4]);
export var StringList = 64 | 0;

export var DescribeStep = op(
  n0,
  _DSe,
  0,
  () => DescribeStepInput,
  () => DescribeStepOutput
);
export var ListReleaseLabels = op(
  n0,
  _LRL,
  0,
  () => ListReleaseLabelsInput,
  () => ListReleaseLabelsOutput
);
export var RemoveTags = op(
  n0,
  _RTe,
  0,
  () => RemoveTagsInput,
  () => RemoveTagsOutput
);
