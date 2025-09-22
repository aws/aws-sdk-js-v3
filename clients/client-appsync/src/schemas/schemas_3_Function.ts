// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _ASR,
  _CC,
  _cCa,
  _cD,
  _cE,
  _CF,
  _CFR,
  _CFRr,
  _cHo,
  _cK,
  _cod,
  _con,
  _CR,
  _CRR,
  _CRRr,
  _de,
  _dSN,
  _e,
  _ECED,
  _ECR,
  _ECRv,
  _ECv,
  _eR,
  _F,
  _fA,
  _FC,
  _fC,
  _fI,
  _fN,
  _fu,
  _fun,
  _fV,
  _GF,
  _GFR,
  _GFRe,
  _GR,
  _GRR,
  _GRRe,
  _h,
  _hQ,
  _k,
  _lCHA,
  _LCHC,
  _lCHC,
  _LF,
  _LFR,
  _LFRi,
  _lo,
  _LR,
  _LRBF,
  _LRBFR,
  _LRBFRi,
  _LRR,
  _LRRi,
  _m,
  _mBS,
  _mC,
  _mR,
  _n,
  _nT,
  _oE,
  _PC,
  _pC,
  _R,
  _rAe,
  _Re,
  _re,
  _res,
  _rMT,
  _rMTe,
  _ru,
  _rV,
  _SC,
  _sC,
  _st,
  _tN,
  _tt,
  _UF,
  _UFR,
  _UFRp,
  _URp,
  _URRp,
  _URRpd,
  CodeErrors,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AppSyncRuntime = struct(n0, _ASR, 0, [_n, _rV], [0, 0]);
export var CachingConfig = struct(n0, _CC, 0, [_tt, _cK], [1, 64 | 0]);
export var CreateFunctionRequest = struct(
  n0,
  _CFR,
  0,
  [_aI, _n, _de, _dSN, _rMT, _rMTe, _fV, _sC, _mBS, _ru, _cod],
  [[0, 1], 0, 0, 0, 0, 0, 0, () => SyncConfig, 1, () => AppSyncRuntime, 0]
);
export var CreateFunctionResponse = struct(n0, _CFRr, 0, [_fC], [() => FunctionConfiguration]);
export var CreateResolverRequest = struct(
  n0,
  _CRR,
  0,
  [_aI, _tN, _fN, _dSN, _rMT, _rMTe, _k, _pC, _sC, _cCa, _mBS, _ru, _cod, _mC],
  [
    [0, 1],
    [0, 1],
    0,
    0,
    0,
    0,
    0,
    () => PipelineConfig,
    () => SyncConfig,
    () => CachingConfig,
    1,
    () => AppSyncRuntime,
    0,
    0,
  ]
);
export var CreateResolverResponse = struct(n0, _CRRr, 0, [_re], [() => Resolver]);
export var EvaluateCodeErrorDetail = struct(n0, _ECED, 0, [_m, _cE], [0, () => CodeErrors]);
export var EvaluateCodeRequest = struct(n0, _ECR, 0, [_ru, _cod, _con, _fu], [() => AppSyncRuntime, 0, 0, 0]);
export var EvaluateCodeResponse = struct(
  n0,
  _ECRv,
  0,
  [_eR, _e, _lo, _st, _oE],
  [0, () => EvaluateCodeErrorDetail, 64 | 0, 0, 0]
);
export var FunctionConfiguration = struct(
  n0,
  _FC,
  0,
  [_fI, _fA, _n, _de, _dSN, _rMT, _rMTe, _fV, _sC, _mBS, _ru, _cod],
  [0, 0, 0, 0, 0, 0, 0, 0, () => SyncConfig, 1, () => AppSyncRuntime, 0]
);
export var GetFunctionRequest = struct(
  n0,
  _GFR,
  0,
  [_aI, _fI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetFunctionResponse = struct(n0, _GFRe, 0, [_fC], [() => FunctionConfiguration]);
export var GetResolverRequest = struct(
  n0,
  _GRR,
  0,
  [_aI, _tN, _fN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetResolverResponse = struct(n0, _GRRe, 0, [_re], [() => Resolver]);
export var LambdaConflictHandlerConfig = struct(n0, _LCHC, 0, [_lCHA], [0]);
export var ListFunctionsRequest = struct(
  n0,
  _LFR,
  0,
  [_aI, _nT, _mR],
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
export var ListFunctionsResponse = struct(n0, _LFRi, 0, [_fun, _nT], [() => Functions, 0]);
export var ListResolversByFunctionRequest = struct(
  n0,
  _LRBFR,
  0,
  [_aI, _fI, _nT, _mR],
  [
    [0, 1],
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
export var ListResolversByFunctionResponse = struct(n0, _LRBFRi, 0, [_res, _nT], [() => Resolvers, 0]);
export var ListResolversRequest = struct(
  n0,
  _LRR,
  0,
  [_aI, _tN, _nT, _mR],
  [
    [0, 1],
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
export var ListResolversResponse = struct(n0, _LRRi, 0, [_res, _nT], [() => Resolvers, 0]);
export var PipelineConfig = struct(n0, _PC, 0, [_fun], [64 | 0]);
export var Resolver = struct(
  n0,
  _R,
  0,
  [_tN, _fN, _dSN, _rAe, _rMT, _rMTe, _k, _pC, _sC, _cCa, _mBS, _ru, _cod, _mC],
  [0, 0, 0, 0, 0, 0, 0, () => PipelineConfig, () => SyncConfig, () => CachingConfig, 1, () => AppSyncRuntime, 0, 0]
);
export var SyncConfig = struct(n0, _SC, 0, [_cHo, _cD, _lCHC], [0, 0, () => LambdaConflictHandlerConfig]);
export var UpdateFunctionRequest = struct(
  n0,
  _UFR,
  0,
  [_aI, _n, _de, _fI, _dSN, _rMT, _rMTe, _fV, _sC, _mBS, _ru, _cod],
  [[0, 1], 0, 0, [0, 1], 0, 0, 0, 0, () => SyncConfig, 1, () => AppSyncRuntime, 0]
);
export var UpdateFunctionResponse = struct(n0, _UFRp, 0, [_fC], [() => FunctionConfiguration]);
export var UpdateResolverRequest = struct(
  n0,
  _URRp,
  0,
  [_aI, _tN, _fN, _dSN, _rMT, _rMTe, _k, _pC, _sC, _cCa, _mBS, _ru, _cod, _mC],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    0,
    0,
    0,
    0,
    () => PipelineConfig,
    () => SyncConfig,
    () => CachingConfig,
    1,
    () => AppSyncRuntime,
    0,
    0,
  ]
);
export var UpdateResolverResponse = struct(n0, _URRpd, 0, [_re], [() => Resolver]);
export var CachingKeys = 64 | 0;

export var Functions = list(n0, _F, 0, () => FunctionConfiguration);
export var FunctionsIds = 64 | 0;

export var Resolvers = list(n0, _Re, 0, () => Resolver);
export var CreateFunction = op(
  n0,
  _CF,
  {
    [_h]: ["POST", "/v1/apis/{apiId}/functions", 200],
  },
  () => CreateFunctionRequest,
  () => CreateFunctionResponse
);
export var CreateResolver = op(
  n0,
  _CR,
  {
    [_h]: ["POST", "/v1/apis/{apiId}/types/{typeName}/resolvers", 200],
  },
  () => CreateResolverRequest,
  () => CreateResolverResponse
);
export var EvaluateCode = op(
  n0,
  _ECv,
  {
    [_h]: ["POST", "/v1/dataplane-evaluatecode", 200],
  },
  () => EvaluateCodeRequest,
  () => EvaluateCodeResponse
);
export var GetFunction = op(
  n0,
  _GF,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/functions/{functionId}", 200],
  },
  () => GetFunctionRequest,
  () => GetFunctionResponse
);
export var GetResolver = op(
  n0,
  _GR,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}", 200],
  },
  () => GetResolverRequest,
  () => GetResolverResponse
);
export var ListFunctions = op(
  n0,
  _LF,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/functions", 200],
  },
  () => ListFunctionsRequest,
  () => ListFunctionsResponse
);
export var ListResolvers = op(
  n0,
  _LR,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/types/{typeName}/resolvers", 200],
  },
  () => ListResolversRequest,
  () => ListResolversResponse
);
export var ListResolversByFunction = op(
  n0,
  _LRBF,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/functions/{functionId}/resolvers", 200],
  },
  () => ListResolversByFunctionRequest,
  () => ListResolversByFunctionResponse
);
export var UpdateFunction = op(
  n0,
  _UF,
  {
    [_h]: ["POST", "/v1/apis/{apiId}/functions/{functionId}", 200],
  },
  () => UpdateFunctionRequest,
  () => UpdateFunctionResponse
);
export var UpdateResolver = op(
  n0,
  _URp,
  {
    [_h]: ["POST", "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}", 200],
  },
  () => UpdateResolverRequest,
  () => UpdateResolverResponse
);
