// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _b,
  _BL,
  _bL,
  _CA,
  _cA,
  _COA,
  _cOA,
  _CV,
  _cV,
  _CWL,
  _cWL,
  _DS,
  _dS,
  _EIB,
  _eIB,
  _EM,
  _eM,
  _En,
  _ena,
  _F,
  _f,
  _h,
  _JE,
  _jE,
  _JEI,
  _jN,
  _LG,
  _lG,
  _LI,
  _lI,
  _NE,
  _nE,
  _NEI,
  _OM,
  _oM,
  _OMI,
  _PI,
  _Pr,
  _pr,
  _Pre,
  _pre,
  _S,
  _s,
  _UM,
  _UMR,
  _UMRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BrokerLogs = struct(
  n0,
  _BL,
  0,
  [_CWL, _F, _S],
  [
    [
      () => CloudWatchLogs,
      {
        [_jN]: _cWL,
      },
    ],
    [
      () => Firehose,
      {
        [_jN]: _f,
      },
    ],
    [
      () => S3,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var CloudWatchLogs = struct(
  n0,
  _CWL,
  0,
  [_En, _LG],
  [
    [
      2,
      {
        [_jN]: _ena,
      },
    ],
    [
      0,
      {
        [_jN]: _lG,
      },
    ],
  ]
);
export var Firehose = struct(
  n0,
  _F,
  0,
  [_DS, _En],
  [
    [
      0,
      {
        [_jN]: _dS,
      },
    ],
    [
      2,
      {
        [_jN]: _ena,
      },
    ],
  ]
);
export var JmxExporterInfo = struct(
  n0,
  _JEI,
  0,
  [_EIB],
  [
    [
      2,
      {
        [_jN]: _eIB,
      },
    ],
  ]
);
export var LoggingInfo = struct(
  n0,
  _LI,
  0,
  [_BL],
  [
    [
      () => BrokerLogs,
      {
        [_jN]: _bL,
      },
    ],
  ]
);
export var NodeExporterInfo = struct(
  n0,
  _NEI,
  0,
  [_EIB],
  [
    [
      2,
      {
        [_jN]: _eIB,
      },
    ],
  ]
);
export var OpenMonitoringInfo = struct(
  n0,
  _OMI,
  0,
  [_Pr],
  [
    [
      () => PrometheusInfo,
      {
        [_jN]: _pr,
      },
    ],
  ]
);
export var PrometheusInfo = struct(
  n0,
  _PI,
  0,
  [_JE, _NE],
  [
    [
      () => JmxExporterInfo,
      {
        [_jN]: _jE,
      },
    ],
    [
      () => NodeExporterInfo,
      {
        [_jN]: _nE,
      },
    ],
  ]
);
export var S3 = struct(
  n0,
  _S,
  0,
  [_B, _En, _Pre],
  [
    [
      0,
      {
        [_jN]: _b,
      },
    ],
    [
      2,
      {
        [_jN]: _ena,
      },
    ],
    [
      0,
      {
        [_jN]: _pre,
      },
    ],
  ]
);
export var UpdateMonitoringRequest = struct(
  n0,
  _UMR,
  0,
  [_CA, _CV, _EM, _OM, _LI],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      () => OpenMonitoringInfo,
      {
        [_jN]: _oM,
      },
    ],
    [
      () => LoggingInfo,
      {
        [_jN]: _lI,
      },
    ],
  ]
);
export var UpdateMonitoringResponse = struct(
  n0,
  _UMRp,
  0,
  [_CA, _COA],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cOA,
      },
    ],
  ]
);
export var UpdateMonitoring = op(
  n0,
  _UM,
  {
    [_h]: ["PUT", "/v1/clusters/{ClusterArn}/monitoring", 200],
  },
  () => UpdateMonitoringRequest,
  () => UpdateMonitoringResponse
);
