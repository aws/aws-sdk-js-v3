// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BET,
  _bET,
  _BETr,
  _DBET,
  _DBETR,
  _DBETRe,
  _ET,
  _eT,
  _EV,
  _eV,
  _EVn,
  _hQ,
  _ht,
  _jN,
  _lOBET,
  _lOEV,
  _MR,
  _mR,
  _N,
  _n,
  _NT,
  _nT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BrokerEngineType = struct(
  n0,
  _BET,
  0,
  [_ET, _EV],
  [
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      () => __listOfEngineVersion,
      {
        [_jN]: _eV,
      },
    ],
  ]
);
export var DescribeBrokerEngineTypesRequest = struct(
  n0,
  _DBETR,
  0,
  [_ET, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _eT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var DescribeBrokerEngineTypesResponse = struct(
  n0,
  _DBETRe,
  0,
  [_BETr, _MR, _NT],
  [
    [
      () => __listOfBrokerEngineType,
      {
        [_jN]: _bET,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var EngineVersion = struct(
  n0,
  _EVn,
  0,
  [_N],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var __listOfBrokerEngineType = list(n0, _lOBET, 0, [() => BrokerEngineType, 0]);
export var __listOfEngineVersion = list(n0, _lOEV, 0, [() => EngineVersion, 0]);
export var DescribeBrokerEngineTypes = op(
  n0,
  _DBET,
  {
    [_ht]: ["GET", "/v1/broker-engine-types", 200],
  },
  () => DescribeBrokerEngineTypesRequest,
  () => DescribeBrokerEngineTypesResponse
);
