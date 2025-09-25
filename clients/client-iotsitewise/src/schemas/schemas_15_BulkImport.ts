// smithy-typescript generated code
import { error, list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import { AccessDeniedException as __AccessDeniedException } from "../models/index";
import {
  _ADE,
  _aDE,
  _aId,
  _ar,
  _b,
  _bo,
  _C,
  _c,
  _CBIJ,
  _CBIJR,
  _CBIJRr,
  _Ci,
  _cI,
  _ci,
  _cN,
  _Co,
  _cOE,
  _con,
  _Cs,
  _cs,
  _dAa,
  _dat,
  _DBIJ,
  _DBIJR,
  _DBIJRe,
  _dFAI,
  _DSR,
  _e,
  _end,
  _ERL,
  _eRL,
  _eTna,
  _F,
  _f,
  _FF,
  _fF,
  _Fi,
  _hE,
  _hH,
  _ht,
  _IA,
  _IAR,
  _IARn,
  _iFE,
  _IO,
  _iRE,
  _JC,
  _jC,
  _jCD,
  _jI,
  _jLUD,
  _jN,
  _jRA,
  _jS,
  _k,
  _L,
  _lEE,
  _lo,
  _m,
  _MI,
  _ou,
  _P,
  _par,
  _pre,
  _R,
  _ref,
  _rNFE,
  _RS,
  _S,
  _so,
  _str,
  _T,
  _tE,
  _te,
  _tra,
  _uri,
  _vI,
  _xaiaci,
  ConflictingOperationException,
  InternalFailureException,
  InvalidRequestException,
  LimitExceededException,
  n0,
  ResourceNotFoundException,
  ThrottlingException,
} from "./schemas_0";

/* eslint no-var: 0 */

export var MessageInput = sim(n0, _MI, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var Citation = struct(n0, _C, 0, [_ref, _con], [() => Reference, () => Content]);
export var Content = struct(n0, _Co, 0, [_te], [0]);
export var CreateBulkImportJobRequest = struct(
  n0,
  _CBIJR,
  0,
  [_jN, _jRA, _f, _eRL, _jC, _aId, _dFAI],
  [0, 0, () => Files, () => ErrorReportLocation, () => JobConfiguration, 2, 2]
);
export var CreateBulkImportJobResponse = struct(n0, _CBIJRr, 0, [_jI, _jN, _jS], [0, 0, 0]);
export var Csv = struct(n0, _Cs, 0, [_cN], [64 | 0]);
export var DataSetReference = struct(n0, _DSR, 0, [_dAa, _so], [0, () => Source]);
export var DescribeBulkImportJobRequest = struct(n0, _DBIJR, 0, [_jI], [[0, 1]]);
export var DescribeBulkImportJobResponse = struct(
  n0,
  _DBIJRe,
  0,
  [_jI, _jN, _jS, _jRA, _f, _eRL, _jC, _jCD, _jLUD, _aId, _dFAI],
  [0, 0, 0, 0, () => Files, () => ErrorReportLocation, () => JobConfiguration, 4, 4, 2, 2]
);
export var ErrorReportLocation = struct(n0, _ERL, 0, [_b, _pre], [0, 0]);
export var File = struct(n0, _F, 0, [_b, _k, _vI], [0, 0, 0]);
export var FileFormat = struct(n0, _FF, 0, [_cs, _par], [() => Csv, () => Parquet]);
export var InvocationOutput = struct(n0, _IO, 0, [_m, _ci], [0, () => Citations]);
export var InvokeAssistantRequest = struct(n0, _IAR, 0, [_cI, _m, _eTna], [0, [() => MessageInput, 0], 2]);
export var InvokeAssistantResponse = struct(
  n0,
  _IARn,
  0,
  [_bo, _cI],
  [
    [() => ResponseStream, 16],
    [
      0,
      {
        [_hH]: _xaiaci,
      },
    ],
  ]
);
export var JobConfiguration = struct(n0, _JC, 0, [_fF], [() => FileFormat]);
export var Location = struct(n0, _L, 0, [_uri], [0]);
export var Parquet = struct(n0, _P, 0, [], []);
export var Reference = struct(n0, _R, 0, [_dat], [() => DataSetReference]);
export var Source = struct(n0, _S, 0, [_ar, _lo], [0, () => Location]);
export var Trace = struct(n0, _T, 0, [_te], [0]);
export var Citations = list(n0, _Ci, 0, () => Citation);
export var ColumnNames = 64 | 0;

export var Files = list(n0, _Fi, 0, () => File);
export var ResponseStream = uni(
  n0,
  _RS,
  {
    [_str]: 1,
  },
  [_tra, _ou, _aDE, _cOE, _iFE, _iRE, _lEE, _rNFE, _tE],
  [
    () => Trace,
    () => InvocationOutput,
    [() => AccessDeniedException, 0],
    [() => ConflictingOperationException, 0],
    [() => InternalFailureException, 0],
    [() => InvalidRequestException, 0],
    [() => LimitExceededException, 0],
    [() => ResourceNotFoundException, 0],
    [() => ThrottlingException, 0],
  ]
);
export var CreateBulkImportJob = op(
  n0,
  _CBIJ,
  {
    [_ht]: ["POST", "/jobs", 202],
    [_end]: ["data."],
  },
  () => CreateBulkImportJobRequest,
  () => CreateBulkImportJobResponse
);
export var DescribeBulkImportJob = op(
  n0,
  _DBIJ,
  {
    [_ht]: ["GET", "/jobs/{jobId}", 200],
    [_end]: ["data."],
  },
  () => DescribeBulkImportJobRequest,
  () => DescribeBulkImportJobResponse
);
export var InvokeAssistant = op(
  n0,
  _IA,
  {
    [_ht]: ["POST", "/assistant/invocation", 200],
    [_end]: ["data."],
  },
  () => InvokeAssistantRequest,
  () => InvokeAssistantResponse
);
