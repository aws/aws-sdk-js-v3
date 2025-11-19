const _DP = "DataPoint";
const _ED = "EndDate";
const _F = "Forecast";
const _FA = "ForecastArn";
const _Fi = "Filters";
const _IIE = "InvalidInputException";
const _INTE = "InvalidNextTokenException";
const _LEE = "LimitExceededException";
const _M = "Message";
const _NT = "NextToken";
const _P = "Predictions";
const _QF = "QueryForecast";
const _QFR = "QueryForecastRequest";
const _QFRu = "QueryForecastResponse";
const _QWIF = "QueryWhatIfForecast";
const _QWIFR = "QueryWhatIfForecastRequest";
const _QWIFRu = "QueryWhatIfForecastResponse";
const _RIUE = "ResourceInUseException";
const _RNFE = "ResourceNotFoundException";
const _SD = "StartDate";
const _T = "Timestamp";
const _TS = "TimeSeries";
const _V = "Value";
const _WIFA = "WhatIfForecastArn";
const _c = "client";
const _e = "error";
const _hE = "httpError";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.forecastquery";
const n0 = "com.amazonaws.forecastquery";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  InvalidInputException as __InvalidInputException,
  InvalidNextTokenException as __InvalidNextTokenException,
  LimitExceededException as __LimitExceededException,
  ResourceInUseException as __ResourceInUseException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/errors";
import { ForecastqueryServiceException as __ForecastqueryServiceException } from "../models/ForecastqueryServiceException";

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
