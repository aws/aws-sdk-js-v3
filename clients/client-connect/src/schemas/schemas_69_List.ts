// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _h,
  _hQ,
  _II,
  _LAO,
  _LAOR,
  _LAORi,
  _LFa,
  _LLF,
  _LLFR,
  _LLFRi,
  _mR,
  _MRa,
  _NT,
  _nT,
  _Or,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListApprovedOriginsRequest = struct(
  n0,
  _LAOR,
  0,
  [_II, _NT, _MRa],
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
export var ListApprovedOriginsResponse = struct(n0, _LAORi, 0, [_Or, _NT], [64 | 0, 0]);
export var ListLambdaFunctionsRequest = struct(
  n0,
  _LLFR,
  0,
  [_II, _NT, _MRa],
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
export var ListLambdaFunctionsResponse = struct(n0, _LLFRi, 0, [_LFa, _NT], [64 | 0, 0]);
export var FunctionArnsList = 64 | 0;

export var OriginsList = 64 | 0;

export var ListApprovedOrigins = op(
  n0,
  _LAO,
  {
    [_h]: ["GET", "/instance/{InstanceId}/approved-origins", 200],
  },
  () => ListApprovedOriginsRequest,
  () => ListApprovedOriginsResponse
);
export var ListLambdaFunctions = op(
  n0,
  _LLF,
  {
    [_h]: ["GET", "/instance/{InstanceId}/lambda-functions", 200],
  },
  () => ListLambdaFunctionsRequest,
  () => ListLambdaFunctionsResponse
);
