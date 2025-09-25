// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Br,
  _CCRI,
  _CCRO,
  _CCRreat,
  _CRA,
  _CRN,
  _CRS,
  _CRSL,
  _CT,
  _CTA,
  _CTB,
  _DCRescrib,
  _DCRIe,
  _DCRO,
  _GC,
  _GCFU,
  _LCRI,
  _LCRisto,
  _LCRO,
  _LMT,
  _LMTA,
  _LMTB,
  _MR,
  _NCa,
  _NT,
  _RU,
  _SAe,
  _SBo,
  _SO,
  _T,
  _UCRI,
  _UCRO,
  _UCRpdat,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CodeRepositorySummary = struct(n0, _CRS, 0, [_CRN, _CRA, _CT, _LMT, _GC], [0, 0, 4, 4, () => GitConfig]);
export var CreateCodeRepositoryInput = struct(n0, _CCRI, 0, [_CRN, _GC, _T], [0, () => GitConfig, () => TagList]);
export var CreateCodeRepositoryOutput = struct(n0, _CCRO, 0, [_CRA], [0]);
export var DescribeCodeRepositoryInput = struct(n0, _DCRIe, 0, [_CRN], [0]);
export var DescribeCodeRepositoryOutput = struct(
  n0,
  _DCRO,
  0,
  [_CRN, _CRA, _CT, _LMT, _GC],
  [0, 0, 4, 4, () => GitConfig]
);
export var GitConfig = struct(n0, _GC, 0, [_RU, _Br, _SAe], [0, 0, 0]);
export var GitConfigForUpdate = struct(n0, _GCFU, 0, [_SAe], [0]);
export var ListCodeRepositoriesInput = struct(
  n0,
  _LCRI,
  0,
  [_CTA, _CTB, _LMTA, _LMTB, _MR, _NCa, _NT, _SBo, _SO],
  [4, 4, 4, 4, 1, 0, 0, 0, 0]
);
export var ListCodeRepositoriesOutput = struct(n0, _LCRO, 0, [_CRSL, _NT], [() => CodeRepositorySummaryList, 0]);
export var UpdateCodeRepositoryInput = struct(n0, _UCRI, 0, [_CRN, _GC], [0, () => GitConfigForUpdate]);
export var UpdateCodeRepositoryOutput = struct(n0, _UCRO, 0, [_CRA], [0]);
export var CodeRepositorySummaryList = list(n0, _CRSL, 0, () => CodeRepositorySummary);
export var CreateCodeRepository = op(
  n0,
  _CCRreat,
  0,
  () => CreateCodeRepositoryInput,
  () => CreateCodeRepositoryOutput
);
export var DescribeCodeRepository = op(
  n0,
  _DCRescrib,
  0,
  () => DescribeCodeRepositoryInput,
  () => DescribeCodeRepositoryOutput
);
export var ListCodeRepositories = op(
  n0,
  _LCRisto,
  0,
  () => ListCodeRepositoriesInput,
  () => ListCodeRepositoriesOutput
);
export var UpdateCodeRepository = op(
  n0,
  _UCRpdat,
  0,
  () => UpdateCodeRepositoryInput,
  () => UpdateCodeRepositoryOutput
);
