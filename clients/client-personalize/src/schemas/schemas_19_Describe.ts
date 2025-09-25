// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _aA,
  _AI,
  _aI,
  _cDT,
  _cHPR,
  _cHPRa,
  _DA,
  _DAR,
  _DARe,
  _DCHPR,
  _DCHPRe,
  _DCHPRef,
  _DCHPRefa,
  _dHP,
  _DHPR,
  _dHPR,
  _DIHPR,
  _DIHPRe,
  _dRC,
  _dURI,
  _iHPR,
  _iT,
  _lUDT,
  _mV,
  _mVa,
  _n,
  _rA,
  _tIM,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Algorithm = struct(
  n0,
  _A,
  0,
  [_n, _aA, _aI, _dHP, _dHPR, _dRC, _tIM, _rA, _cDT, _lUDT],
  [0, 0, () => AlgorithmImage, 128 | 0, () => DefaultHyperParameterRanges, 128 | 0, 0, 0, 4, 4]
);
export var AlgorithmImage = struct(n0, _AI, 0, [_n, _dURI], [0, 0]);
export var DefaultCategoricalHyperParameterRange = struct(n0, _DCHPR, 0, [_n, _v, _iT], [0, 64 | 0, 2]);
export var DefaultContinuousHyperParameterRange = struct(n0, _DCHPRe, 0, [_n, _mV, _mVa, _iT], [0, 1, 1, 2]);
export var DefaultHyperParameterRanges = struct(
  n0,
  _DHPR,
  0,
  [_iHPR, _cHPR, _cHPRa],
  [
    () => DefaultIntegerHyperParameterRanges,
    () => DefaultContinuousHyperParameterRanges,
    () => DefaultCategoricalHyperParameterRanges,
  ]
);
export var DefaultIntegerHyperParameterRange = struct(n0, _DIHPR, 0, [_n, _mV, _mVa, _iT], [0, 1, 1, 2]);
export var DescribeAlgorithmRequest = struct(n0, _DAR, 0, [_aA], [0]);
export var DescribeAlgorithmResponse = struct(n0, _DARe, 0, [_a], [() => Algorithm]);
export var CategoricalValues = 64 | 0;

export var DefaultCategoricalHyperParameterRanges = list(n0, _DCHPRef, 0, () => DefaultCategoricalHyperParameterRange);
export var DefaultContinuousHyperParameterRanges = list(n0, _DCHPRefa, 0, () => DefaultContinuousHyperParameterRange);
export var DefaultIntegerHyperParameterRanges = list(n0, _DIHPRe, 0, () => DefaultIntegerHyperParameterRange);
export var ResourceConfig = 128 | 0;

export var DescribeAlgorithm = op(
  n0,
  _DA,
  2,
  () => DescribeAlgorithmRequest,
  () => DescribeAlgorithmResponse
);
