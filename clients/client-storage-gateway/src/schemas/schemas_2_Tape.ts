// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ATCPI,
  _ATCPIu,
  _ATCR,
  _ATCRu,
  _ATP,
  _ATPI,
  _ATPO,
  _BGR,
  _CT,
  _CTI,
  _CTO,
  _CTo,
  _CTr,
  _CTWB,
  _CTWBI,
  _CTWBO,
  _DTAe,
  _DTAIe,
  _DTAOe,
  _DTes,
  _DTIe,
  _DTOe,
  _GARN,
  _KMSE,
  _KMSK,
  _L,
  _LATCP,
  _LATCPI,
  _LATCPO,
  _LT,
  _LTI,
  _LTO,
  _M,
  _MNT,
  _NTTC,
  _PEDo,
  _PI,
  _Pr,
  _RSD,
  _RT,
  _T,
  _TA,
  _Ta,
  _TAa,
  _Tap,
  _TARN,
  _TARNap,
  _TB,
  _TBP,
  _TCD,
  _TI,
  _TIa,
  _TS,
  _TSIB,
  _TUIB,
  _UATCP,
  _UATCPI,
  _UATCPO,
  _VTLDe,
  _W,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssignTapePoolInput = struct(n0, _ATPI, 0, [_TARN, _PI, _BGR], [0, 0, 2]);
export var AssignTapePoolOutput = struct(n0, _ATPO, 0, [_TARN], [0]);
export var AutomaticTapeCreationPolicyInfo = struct(
  n0,
  _ATCPI,
  0,
  [_ATCR, _GARN],
  [() => AutomaticTapeCreationRules, 0]
);
export var AutomaticTapeCreationRule = struct(n0, _ATCRu, 0, [_TBP, _PI, _TSIB, _MNT, _W], [0, 0, 1, 1, 2]);
export var CreateTapesInput = struct(
  n0,
  _CTI,
  0,
  [_GARN, _TSIB, _CT, _NTTC, _TBP, _KMSE, _KMSK, _PI, _W, _T],
  [0, 1, 0, 1, 0, 2, 0, 0, 2, () => Tags]
);
export var CreateTapesOutput = struct(n0, _CTO, 0, [_TARNap], [64 | 0]);
export var CreateTapeWithBarcodeInput = struct(
  n0,
  _CTWBI,
  0,
  [_GARN, _TSIB, _TB, _KMSE, _KMSK, _PI, _W, _T],
  [0, 1, 0, 2, 0, 0, 2, () => Tags]
);
export var CreateTapeWithBarcodeOutput = struct(n0, _CTWBO, 0, [_TARN], [0]);
export var DescribeTapeArchivesInput = struct(n0, _DTAIe, 0, [_TARNap, _M, _L], [64 | 0, 0, 1]);
export var DescribeTapeArchivesOutput = struct(n0, _DTAOe, 0, [_TA, _M], [() => TapeArchives, 0]);
export var DescribeTapesInput = struct(n0, _DTIe, 0, [_GARN, _TARNap, _M, _L], [0, 64 | 0, 0, 1]);
export var DescribeTapesOutput = struct(n0, _DTOe, 0, [_Ta, _M], [() => Tapes, 0]);
export var ListAutomaticTapeCreationPoliciesInput = struct(n0, _LATCPI, 0, [_GARN], [0]);
export var ListAutomaticTapeCreationPoliciesOutput = struct(
  n0,
  _LATCPO,
  0,
  [_ATCPIu],
  [() => AutomaticTapeCreationPolicyInfos]
);
export var ListTapesInput = struct(n0, _LTI, 0, [_TARNap, _M, _L], [64 | 0, 0, 1]);
export var ListTapesOutput = struct(n0, _LTO, 0, [_TI, _M], [() => TapeInfos, 0]);
export var Tape = struct(
  n0,
  _Tap,
  0,
  [_TARN, _TB, _TCD, _TSIB, _TS, _VTLDe, _Pr, _TUIB, _KMSK, _PI, _W, _RSD, _PEDo],
  [0, 0, 4, 1, 0, 0, 1, 1, 0, 0, 2, 4, 4]
);
export var TapeArchive = struct(
  n0,
  _TAa,
  0,
  [_TARN, _TB, _TCD, _TSIB, _CTo, _RT, _TS, _TUIB, _KMSK, _PI, _W, _RSD, _PEDo],
  [0, 0, 4, 1, 4, 0, 0, 1, 0, 0, 2, 4, 4]
);
export var TapeInfo = struct(n0, _TIa, 0, [_TARN, _TB, _TSIB, _TS, _GARN, _PI, _RSD, _PEDo], [0, 0, 1, 0, 0, 0, 4, 4]);
export var UpdateAutomaticTapeCreationPolicyInput = struct(
  n0,
  _UATCPI,
  0,
  [_ATCR, _GARN],
  [() => AutomaticTapeCreationRules, 0]
);
export var UpdateAutomaticTapeCreationPolicyOutput = struct(n0, _UATCPO, 0, [_GARN], [0]);
export var AutomaticTapeCreationPolicyInfos = list(n0, _ATCPIu, 0, () => AutomaticTapeCreationPolicyInfo);
export var AutomaticTapeCreationRules = list(n0, _ATCR, 0, () => AutomaticTapeCreationRule);
export var TapeArchives = list(n0, _TA, 0, () => TapeArchive);
export var TapeARNs = 64 | 0;

export var TapeInfos = list(n0, _TI, 0, () => TapeInfo);
export var Tapes = list(n0, _Ta, 0, () => Tape);
export var AssignTapePool = op(
  n0,
  _ATP,
  0,
  () => AssignTapePoolInput,
  () => AssignTapePoolOutput
);
export var CreateTapes = op(
  n0,
  _CTr,
  0,
  () => CreateTapesInput,
  () => CreateTapesOutput
);
export var CreateTapeWithBarcode = op(
  n0,
  _CTWB,
  0,
  () => CreateTapeWithBarcodeInput,
  () => CreateTapeWithBarcodeOutput
);
export var DescribeTapeArchives = op(
  n0,
  _DTAe,
  0,
  () => DescribeTapeArchivesInput,
  () => DescribeTapeArchivesOutput
);
export var DescribeTapes = op(
  n0,
  _DTes,
  0,
  () => DescribeTapesInput,
  () => DescribeTapesOutput
);
export var ListAutomaticTapeCreationPolicies = op(
  n0,
  _LATCP,
  0,
  () => ListAutomaticTapeCreationPoliciesInput,
  () => ListAutomaticTapeCreationPoliciesOutput
);
export var ListTapes = op(
  n0,
  _LT,
  0,
  () => ListTapesInput,
  () => ListTapesOutput
);
export var UpdateAutomaticTapeCreationPolicy = op(
  n0,
  _UATCP,
  0,
  () => UpdateAutomaticTapeCreationPolicyInput,
  () => UpdateAutomaticTapeCreationPolicyOutput
);
