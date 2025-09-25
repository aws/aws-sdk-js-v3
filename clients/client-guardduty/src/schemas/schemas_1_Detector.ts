// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _aC,
  _AL,
  _aL,
  _DAC,
  _DACe,
  _DFC,
  _DFCe,
  _DI,
  _dI,
  _DS,
  _dS,
  _DSC,
  _En,
  _en,
  _EVb,
  _eVb,
  _EVR,
  _F,
  _f,
  _FPF,
  _fPF,
  _hL,
  _ht,
  _jN,
  _K,
  _k,
  _KALC,
  _KC,
  _MP,
  _mP,
  _MPC,
  _MPCR,
  _N,
  _n,
  _Re,
  _re,
  _SEIWF,
  _sEIWF,
  _SEIWFR,
  _SL,
  _sL,
  _SLC,
  _SR,
  _sR,
  _St,
  _st,
  _UD,
  _UDR,
  _UDRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataSourceConfigurations = struct(
  n0,
  _DSC,
  0,
  [_SL, _K, _MP],
  [
    [
      () => S3LogsConfiguration,
      {
        [_jN]: _sL,
      },
    ],
    [
      () => KubernetesConfiguration,
      {
        [_jN]: _k,
      },
    ],
    [
      () => MalwareProtectionConfiguration,
      {
        [_jN]: _mP,
      },
    ],
  ]
);
export var DetectorAdditionalConfiguration = struct(
  n0,
  _DAC,
  0,
  [_N, _St],
  [
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
export var DetectorFeatureConfiguration = struct(
  n0,
  _DFC,
  0,
  [_N, _St, _AC],
  [
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
    [
      () => DetectorAdditionalConfigurations,
      {
        [_jN]: _aC,
      },
    ],
  ]
);
export var EbsVolumesResult = struct(
  n0,
  _EVR,
  0,
  [_St, _Re],
  [
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      0,
      {
        [_jN]: _re,
      },
    ],
  ]
);
export var KubernetesAuditLogsConfiguration = struct(
  n0,
  _KALC,
  0,
  [_En],
  [
    [
      2,
      {
        [_jN]: _en,
      },
    ],
  ]
);
export var KubernetesConfiguration = struct(
  n0,
  _KC,
  0,
  [_AL],
  [
    [
      () => KubernetesAuditLogsConfiguration,
      {
        [_jN]: _aL,
      },
    ],
  ]
);
export var MalwareProtectionConfiguration = struct(
  n0,
  _MPC,
  0,
  [_SEIWF],
  [
    [
      () => ScanEc2InstanceWithFindings,
      {
        [_jN]: _sEIWF,
      },
    ],
  ]
);
export var MalwareProtectionConfigurationResult = struct(
  n0,
  _MPCR,
  0,
  [_SEIWF, _SR],
  [
    [
      () => ScanEc2InstanceWithFindingsResult,
      {
        [_jN]: _sEIWF,
      },
    ],
    [
      0,
      {
        [_jN]: _sR,
      },
    ],
  ]
);
export var S3LogsConfiguration = struct(
  n0,
  _SLC,
  0,
  [_En],
  [
    [
      2,
      {
        [_jN]: _en,
      },
    ],
  ]
);
export var ScanEc2InstanceWithFindings = struct(
  n0,
  _SEIWF,
  0,
  [_EVb],
  [
    [
      2,
      {
        [_jN]: _eVb,
      },
    ],
  ]
);
export var ScanEc2InstanceWithFindingsResult = struct(
  n0,
  _SEIWFR,
  0,
  [_EVb],
  [
    [
      () => EbsVolumesResult,
      {
        [_jN]: _eVb,
      },
    ],
  ]
);
export var UpdateDetectorRequest = struct(
  n0,
  _UDR,
  0,
  [_DI, _En, _FPF, _DS, _F],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      2,
      {
        [_jN]: _en,
      },
    ],
    [
      0,
      {
        [_jN]: _fPF,
      },
    ],
    [
      () => DataSourceConfigurations,
      {
        [_jN]: _dS,
      },
    ],
    [
      () => DetectorFeatureConfigurations,
      {
        [_jN]: _f,
      },
    ],
  ]
);
export var UpdateDetectorResponse = struct(n0, _UDRp, 0, [], []);
export var DetectorAdditionalConfigurations = list(n0, _DACe, 0, [() => DetectorAdditionalConfiguration, 0]);
export var DetectorFeatureConfigurations = list(n0, _DFCe, 0, [() => DetectorFeatureConfiguration, 0]);
export var UpdateDetector = op(
  n0,
  _UD,
  {
    [_ht]: ["POST", "/detector/{DetectorId}", 200],
  },
  () => UpdateDetectorRequest,
  () => UpdateDetectorResponse
);
