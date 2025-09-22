// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CPr,
  _CPRre,
  _CPRrea,
  _D,
  _DP,
  _DPe,
  _DPR,
  _DPRe,
  _DPRes,
  _GPF,
  _GPFR,
  _GPFRe,
  _h,
  _hQ,
  _I,
  _II,
  _LMR,
  _LMT,
  _LP,
  _LPR,
  _LPRi,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _PARN,
  _PIr,
  _PPU,
  _Pr,
  _PSL,
  _PSr,
  _SU,
  _Ta,
  _UPp,
  _UPR,
  _UPRp,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreatePromptRequest = struct(n0, _CPRre, 0, [_II, _N, _D, _SU, _Ta], [[0, 1], 0, 0, 0, 128 | 0]);
export var CreatePromptResponse = struct(n0, _CPRrea, 0, [_PARN, _PIr], [0, 0]);
export var DeletePromptRequest = struct(
  n0,
  _DPR,
  0,
  [_II, _PIr],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribePromptRequest = struct(
  n0,
  _DPRe,
  0,
  [_II, _PIr],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribePromptResponse = struct(n0, _DPRes, 0, [_Pr], [() => Prompt]);
export var GetPromptFileRequest = struct(
  n0,
  _GPFR,
  0,
  [_II, _PIr],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetPromptFileResponse = struct(n0, _GPFRe, 0, [_PPU, _LMT, _LMR], [0, 4, 0]);
export var ListPromptsRequest = struct(
  n0,
  _LPR,
  0,
  [_II, _NT, _MRa],
  [
    [0, 1],
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
export var ListPromptsResponse = struct(n0, _LPRi, 0, [_PSL, _NT], [() => PromptSummaryList, 0]);
export var Prompt = struct(n0, _Pr, 0, [_PARN, _PIr, _N, _D, _Ta, _LMT, _LMR], [0, 0, 0, 0, 128 | 0, 4, 0]);
export var PromptSummary = struct(n0, _PSr, 0, [_I, _A, _N, _LMT, _LMR], [0, 0, 0, 4, 0]);
export var UpdatePromptRequest = struct(n0, _UPR, 0, [_II, _PIr, _N, _D, _SU], [[0, 1], [0, 1], 0, 0, 0]);
export var UpdatePromptResponse = struct(n0, _UPRp, 0, [_PARN, _PIr], [0, 0]);
export var PromptSummaryList = list(n0, _PSL, 0, () => PromptSummary);
export var CreatePrompt = op(
  n0,
  _CPr,
  {
    [_h]: ["PUT", "/prompts/{InstanceId}", 200],
  },
  () => CreatePromptRequest,
  () => CreatePromptResponse
);
export var DeletePrompt = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/prompts/{InstanceId}/{PromptId}", 200],
  },
  () => DeletePromptRequest,
  () => Unit
);
export var DescribePrompt = op(
  n0,
  _DPe,
  {
    [_h]: ["GET", "/prompts/{InstanceId}/{PromptId}", 200],
  },
  () => DescribePromptRequest,
  () => DescribePromptResponse
);
export var GetPromptFile = op(
  n0,
  _GPF,
  {
    [_h]: ["GET", "/prompts/{InstanceId}/{PromptId}/file", 200],
  },
  () => GetPromptFileRequest,
  () => GetPromptFileResponse
);
export var ListPrompts = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/prompts-summary/{InstanceId}", 200],
  },
  () => ListPromptsRequest,
  () => ListPromptsResponse
);
export var UpdatePrompt = op(
  n0,
  _UPp,
  {
    [_h]: ["POST", "/prompts/{InstanceId}/{PromptId}", 200],
  },
  () => UpdatePromptRequest,
  () => UpdatePromptResponse
);
