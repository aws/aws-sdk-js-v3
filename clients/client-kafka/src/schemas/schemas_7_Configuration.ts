// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _CCr,
  _CCRre,
  _CCRrea,
  _Co,
  _co,
  _Con,
  _CR,
  _CT,
  _cT,
  _D,
  _d,
  _DCesc,
  _DCRescr,
  _DCRescri,
  _h,
  _hQ,
  _jN,
  _KVa,
  _kVa,
  _LCi,
  _LCRis,
  _LCRist,
  _LCRisto,
  _LCRR,
  _LCRRi,
  _lOCi,
  _lOCR,
  _LR,
  _lR,
  _MR,
  _mR,
  _N,
  _n,
  _NT,
  _nT,
  _R,
  _r,
  _Re,
  _re,
  _SP,
  _sP,
  _St,
  _st,
  _UC,
  _UCR,
  _UCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Configuration = struct(
  n0,
  _Co,
  0,
  [_Ar, _CT, _D, _KVa, _LR, _N, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      5,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _kVa,
      },
    ],
    [
      () => ConfigurationRevision,
      {
        [_jN]: _lR,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var ConfigurationRevision = struct(
  n0,
  _CR,
  0,
  [_CT, _D, _R],
  [
    [
      5,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      1,
      {
        [_jN]: _r,
      },
    ],
  ]
);
export var CreateConfigurationRequest = struct(
  n0,
  _CCRre,
  0,
  [_D, _KVa, _N, _SP],
  [
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _kVa,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      21,
      {
        [_jN]: _sP,
      },
    ],
  ]
);
export var CreateConfigurationResponse = struct(
  n0,
  _CCRrea,
  0,
  [_Ar, _CT, _LR, _N, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      5,
      {
        [_jN]: _cT,
      },
    ],
    [
      () => ConfigurationRevision,
      {
        [_jN]: _lR,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var DescribeConfigurationRequest = struct(n0, _DCRescr, 0, [_Ar], [[0, 1]]);
export var DescribeConfigurationResponse = struct(
  n0,
  _DCRescri,
  0,
  [_Ar, _CT, _D, _KVa, _LR, _N, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      5,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _kVa,
      },
    ],
    [
      () => ConfigurationRevision,
      {
        [_jN]: _lR,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var ListConfigurationRevisionsRequest = struct(
  n0,
  _LCRR,
  0,
  [_Ar, _MR, _NT],
  [
    [0, 1],
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
export var ListConfigurationRevisionsResponse = struct(
  n0,
  _LCRRi,
  0,
  [_NT, _Re],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfConfigurationRevision,
      {
        [_jN]: _re,
      },
    ],
  ]
);
export var ListConfigurationsRequest = struct(
  n0,
  _LCRis,
  0,
  [_MR, _NT],
  [
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
export var ListConfigurationsResponse = struct(
  n0,
  _LCRist,
  0,
  [_Con, _NT],
  [
    [
      () => __listOfConfiguration,
      {
        [_jN]: _co,
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
export var UpdateConfigurationRequest = struct(
  n0,
  _UCR,
  0,
  [_Ar, _D, _SP],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      21,
      {
        [_jN]: _sP,
      },
    ],
  ]
);
export var UpdateConfigurationResponse = struct(
  n0,
  _UCRp,
  0,
  [_Ar, _LR],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      () => ConfigurationRevision,
      {
        [_jN]: _lR,
      },
    ],
  ]
);
export var __listOfConfiguration = list(n0, _lOCi, 0, [() => Configuration, 0]);
export var __listOfConfigurationRevision = list(n0, _lOCR, 0, [() => ConfigurationRevision, 0]);
export var CreateConfiguration = op(
  n0,
  _CCr,
  {
    [_h]: ["POST", "/v1/configurations", 200],
  },
  () => CreateConfigurationRequest,
  () => CreateConfigurationResponse
);
export var DescribeConfiguration = op(
  n0,
  _DCesc,
  {
    [_h]: ["GET", "/v1/configurations/{Arn}", 200],
  },
  () => DescribeConfigurationRequest,
  () => DescribeConfigurationResponse
);
export var ListConfigurationRevisions = op(
  n0,
  _LCRisto,
  {
    [_h]: ["GET", "/v1/configurations/{Arn}/revisions", 200],
  },
  () => ListConfigurationRevisionsRequest,
  () => ListConfigurationRevisionsResponse
);
export var ListConfigurations = op(
  n0,
  _LCi,
  {
    [_h]: ["GET", "/v1/configurations", 200],
  },
  () => ListConfigurationsRequest,
  () => ListConfigurationsResponse
);
export var UpdateConfiguration = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/v1/configurations/{Arn}", 200],
  },
  () => UpdateConfigurationRequest,
  () => UpdateConfigurationResponse
);
