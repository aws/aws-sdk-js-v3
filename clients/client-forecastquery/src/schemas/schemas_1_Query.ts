// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  InvalidInputException as __InvalidInputException,
  InvalidNextTokenException as __InvalidNextTokenException,
  LimitExceededException as __LimitExceededException,
  ResourceInUseException as __ResourceInUseException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _c,
  _DP,
  _e,
  _ED,
  _F,
  _FA,
  _Fi,
  _hE,
  _IIE,
  _INTE,
  _LEE,
  _M,
  _NT,
  _P,
  _QF,
  _QFR,
  _QFRu,
  _QWIF,
  _QWIFR,
  _QWIFRu,
  _RIUE,
  _RNFE,
  _SD,
  _T,
  _TS,
  _V,
  _WIFA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataPoint = struct(n0, _DP, 0, [_T, _V], [0, 1]);
export var Forecast = struct(n0, _F, 0, [_P], [() => Predictions]);
export var InvalidInputException = error(
  n0,
  _IIE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidInputException
);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidNextTokenException
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __LimitExceededException
);
export var QueryForecastRequest = struct(n0, _QFR, 0, [_FA, _SD, _ED, _Fi, _NT], [0, 0, 0, 128 | 0, 0]);
export var QueryForecastResponse = struct(n0, _QFRu, 0, [_F], [() => Forecast]);
export var QueryWhatIfForecastRequest = struct(n0, _QWIFR, 0, [_WIFA, _SD, _ED, _Fi, _NT], [0, 0, 0, 128 | 0, 0]);
export var QueryWhatIfForecastResponse = struct(n0, _QWIFRu, 0, [_F], [() => Forecast]);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ResourceInUseException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var TimeSeries = list(n0, _TS, 0, () => DataPoint);
export var Filters = 128 | 0;

export var Predictions = map(n0, _P, 0, 0, () => TimeSeries);
export var QueryForecast = op(
  n0,
  _QF,
  0,
  () => QueryForecastRequest,
  () => QueryForecastResponse
);
export var QueryWhatIfForecast = op(
  n0,
  _QWIF,
  0,
  () => QueryWhatIfForecastRequest,
  () => QueryWhatIfForecastResponse
);
