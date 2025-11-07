export const _DP = "DataPoint";
export const _ED = "EndDate";
export const _F = "Forecast";
export const _FA = "ForecastArn";
export const _Fi = "Filters";
export const _IIE = "InvalidInputException";
export const _INTE = "InvalidNextTokenException";
export const _LEE = "LimitExceededException";
export const _M = "Message";
export const _NT = "NextToken";
export const _P = "Predictions";
export const _QF = "QueryForecast";
export const _QFR = "QueryForecastRequest";
export const _QFRu = "QueryForecastResponse";
export const _QWIF = "QueryWhatIfForecast";
export const _QWIFR = "QueryWhatIfForecastRequest";
export const _QWIFRu = "QueryWhatIfForecastResponse";
export const _RIUE = "ResourceInUseException";
export const _RNFE = "ResourceNotFoundException";
export const _SD = "StartDate";
export const _T = "Timestamp";
export const _TS = "TimeSeries";
export const _V = "Value";
export const _WIFA = "WhatIfForecastArn";
export const _c = "client";
export const _e = "error";
export const _hE = "httpError";
export const _s = "smithy.ts.sdk.synthetic.com.amazonaws.forecastquery";
export const n0 = "com.amazonaws.forecastquery";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { ForecastqueryServiceException as __ForecastqueryServiceException } from "../models/ForecastqueryServiceException";
import {
  InvalidInputException as __InvalidInputException,
  InvalidNextTokenException as __InvalidNextTokenException,
  LimitExceededException as __LimitExceededException,
  ResourceInUseException as __ResourceInUseException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";

/* eslint no-var: 0 */

export var DataPoint: StaticStructureSchema = [3, n0, _DP, 0, [_T, _V], [0, 1]];
export var Forecast: StaticStructureSchema = [3, n0, _F, 0, [_P], [() => Predictions]];
export var InvalidInputException: StaticErrorSchema = [
  -3,
  n0,
  _IIE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidInputException, __InvalidInputException);

export var InvalidNextTokenException: StaticErrorSchema = [
  -3,
  n0,
  _INTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidNextTokenException, __InvalidNextTokenException);

export var LimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);

export var QueryForecastRequest: StaticStructureSchema = [
  3,
  n0,
  _QFR,
  0,
  [_FA, _SD, _ED, _Fi, _NT],
  [0, 0, 0, 128 | 0, 0],
];
export var QueryForecastResponse: StaticStructureSchema = [3, n0, _QFRu, 0, [_F], [() => Forecast]];
export var QueryWhatIfForecastRequest: StaticStructureSchema = [
  3,
  n0,
  _QWIFR,
  0,
  [_WIFA, _SD, _ED, _Fi, _NT],
  [0, 0, 0, 128 | 0, 0],
];
export var QueryWhatIfForecastResponse: StaticStructureSchema = [3, n0, _QWIFRu, 0, [_F], [() => Forecast]];
export var ResourceInUseException: StaticErrorSchema = [
  -3,
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceInUseException, __ResourceInUseException);

export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ForecastqueryServiceException: StaticErrorSchema = [-3, _s, "ForecastqueryServiceException", 0, [], []];
TypeRegistry.for(_s).registerError(ForecastqueryServiceException, __ForecastqueryServiceException);

export var TimeSeries: StaticListSchema = [1, n0, _TS, 0, () => DataPoint];
export var Filters = 128 | 0;

export var Predictions: StaticMapSchema = [2, n0, _P, 0, 0, () => TimeSeries];
export var QueryForecast: StaticOperationSchema = [
  9,
  n0,
  _QF,
  0,
  () => QueryForecastRequest,
  () => QueryForecastResponse,
];
export var QueryWhatIfForecast: StaticOperationSchema = [
  9,
  n0,
  _QWIF,
  0,
  () => QueryWhatIfForecastRequest,
  () => QueryWhatIfForecastResponse,
];
