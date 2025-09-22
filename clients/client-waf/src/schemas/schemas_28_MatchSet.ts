// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _BMS,
  _BMSI,
  _BMSU,
  _BMSUy,
  _BMT,
  _BMTy,
  _CBMS,
  _CBMSR,
  _CBMSRr,
  _CT,
  _FTM,
  _GBMS,
  _GBMSR,
  _GBMSRe,
  _N,
  _PC,
  _TS,
  _TT,
  _U,
  _UBMS,
  _UBMSR,
  _UBMSRp,
  FieldToMatch,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ByteMatchSet = struct(n0, _BMS, 0, [_BMSI, _N, _BMT], [0, 0, () => ByteMatchTuples]);
export var ByteMatchSetUpdate = struct(n0, _BMSU, 0, [_A, _BMTy], [0, () => ByteMatchTuple]);
export var ByteMatchTuple = struct(n0, _BMTy, 0, [_FTM, _TS, _TT, _PC], [() => FieldToMatch, 21, 0, 0]);
export var CreateByteMatchSetRequest = struct(n0, _CBMSR, 0, [_N, _CT], [0, 0]);
export var CreateByteMatchSetResponse = struct(n0, _CBMSRr, 0, [_BMS, _CT], [() => ByteMatchSet, 0]);
export var GetByteMatchSetRequest = struct(n0, _GBMSR, 0, [_BMSI], [0]);
export var GetByteMatchSetResponse = struct(n0, _GBMSRe, 0, [_BMS], [() => ByteMatchSet]);
export var UpdateByteMatchSetRequest = struct(n0, _UBMSR, 0, [_BMSI, _CT, _U], [0, 0, () => ByteMatchSetUpdates]);
export var UpdateByteMatchSetResponse = struct(n0, _UBMSRp, 0, [_CT], [0]);
export var ByteMatchSetUpdates = list(n0, _BMSUy, 0, () => ByteMatchSetUpdate);
export var ByteMatchTuples = list(n0, _BMT, 0, () => ByteMatchTuple);
export var CreateByteMatchSet = op(
  n0,
  _CBMS,
  0,
  () => CreateByteMatchSetRequest,
  () => CreateByteMatchSetResponse
);
export var GetByteMatchSet = op(
  n0,
  _GBMS,
  0,
  () => GetByteMatchSetRequest,
  () => GetByteMatchSetResponse
);
export var UpdateByteMatchSet = op(
  n0,
  _UBMS,
  0,
  () => UpdateByteMatchSetRequest,
  () => UpdateByteMatchSetResponse
);
