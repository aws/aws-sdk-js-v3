// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BMN,
  _CLM,
  _CLMR,
  _CLMRr,
  _CR,
  _CTr,
  _DARA,
  _DIS,
  _DLM,
  _DLMe,
  _DLMR,
  _DLMRe,
  _DLMRes,
  _FR,
  _h,
  _IDC,
  _LC,
  _LCI,
  _LCL,
  _LM,
  _LMN,
  _LMT,
  _MN,
  _MS,
  _MSo,
  _PET,
  _RO,
  _RT,
  _SU,
  _Ta,
  _TC,
  _TD,
  _TDS,
  _TDSU,
  _UA,
  n0,
  TagList,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ContentRedaction = struct(n0, _CR, 0, [_RT, _RO, _PET], [0, 0, 64 | 0]);
export var CreateLanguageModelRequest = struct(
  n0,
  _CLMR,
  0,
  [_LC, _BMN, _MN, _IDC, _Ta],
  [0, 0, [0, 1], () => InputDataConfig, () => TagList]
);
export var CreateLanguageModelResponse = struct(
  n0,
  _CLMRr,
  0,
  [_LC, _BMN, _MN, _IDC, _MS],
  [0, 0, 0, () => InputDataConfig, 0]
);
export var DeleteLanguageModelRequest = struct(n0, _DLMR, 0, [_MN], [[0, 1]]);
export var DescribeLanguageModelRequest = struct(n0, _DLMRe, 0, [_MN], [[0, 1]]);
export var DescribeLanguageModelResponse = struct(n0, _DLMRes, 0, [_LM], [() => LanguageModel]);
export var InputDataConfig = struct(n0, _IDC, 0, [_SU, _TDSU, _DARA], [0, 0, 0]);
export var LanguageCodeItem = struct(n0, _LCI, 0, [_LC, _DIS], [0, 1]);
export var LanguageModel = struct(
  n0,
  _LM,
  0,
  [_MN, _CTr, _LMT, _LC, _BMN, _MS, _UA, _FR, _IDC],
  [0, 4, 4, 0, 0, 0, 2, 0, () => InputDataConfig]
);
export var ModelSettings = struct(n0, _MSo, 0, [_LMN], [0]);
export var ToxicityDetectionSettings = struct(n0, _TDS, 0, [_TC], [64 | 0]);
export var LanguageCodeList = list(n0, _LCL, 0, () => LanguageCodeItem);
export var PiiEntityTypes = 64 | 0;

export var ToxicityCategories = 64 | 0;

export var ToxicityDetection = list(n0, _TD, 0, () => ToxicityDetectionSettings);
export var CreateLanguageModel = op(
  n0,
  _CLM,
  {
    [_h]: ["PUT", "/languagemodels/{ModelName}", 200],
  },
  () => CreateLanguageModelRequest,
  () => CreateLanguageModelResponse
);
export var DeleteLanguageModel = op(
  n0,
  _DLM,
  {
    [_h]: ["DELETE", "/languagemodels/{ModelName}", 204],
  },
  () => DeleteLanguageModelRequest,
  () => Unit
);
export var DescribeLanguageModel = op(
  n0,
  _DLMe,
  {
    [_h]: ["GET", "/languagemodels/{ModelName}", 200],
  },
  () => DescribeLanguageModelRequest,
  () => DescribeLanguageModelResponse
);
