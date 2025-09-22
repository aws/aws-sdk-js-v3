// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAZC,
  _ADNC,
  _ALE,
  _ASE,
  _AZC,
  _AZI,
  _AZIL,
  _AZIv,
  _AZN,
  _AZv,
  _CDNC,
  _CEo,
  _CH,
  _DDH,
  _DDHR,
  _DDHRe,
  _DM,
  _DN,
  _dN,
  _DNC,
  _DSom,
  _EE,
  _EI,
  _EIL,
  _EIn,
  _EV,
  _h,
  _hQ,
  _IR,
  _IT,
  _iT,
  _ITD,
  _ITDL,
  _LITD,
  _LITDR,
  _LITDRi,
  _MENC,
  _MN,
  _MR,
  _mR,
  _NT,
  _nT,
  _RAZ,
  _rAZ,
  _SBAZC,
  _TS,
  _TUAS,
  _WE,
  _WNC,
  _ZS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AvailabilityZoneInfo = struct(n0, _AZI, 0, [_AZN, _ZS, _CDNC, _ADNC, _TS, _TUAS], [0, 0, 0, 0, 0, 0]);
export var DescribeDomainHealthRequest = struct(n0, _DDHR, 0, [_DN], [[0, 1]]);
export var DescribeDomainHealthResponse = struct(
  n0,
  _DDHRe,
  0,
  [_DSom, _AZC, _AAZC, _SBAZC, _DNC, _DM, _MENC, _WNC, _MN, _CH, _TS, _TUAS, _EI],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, () => EnvironmentInfoList]
);
export var EnvironmentInfo = struct(n0, _EIn, 0, [_AZIv], [() => AvailabilityZoneInfoList]);
export var InstanceTypeDetails = struct(
  n0,
  _ITD,
  0,
  [_IT, _EE, _CEo, _ALE, _ASE, _WE, _IR, _AZv],
  [0, 2, 2, 2, 2, 2, 64 | 0, 64 | 0]
);
export var ListInstanceTypeDetailsRequest = struct(
  n0,
  _LITDR,
  0,
  [_EV, _DN, _MR, _NT, _RAZ, _IT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dN,
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
    [
      2,
      {
        [_hQ]: _rAZ,
      },
    ],
    [
      0,
      {
        [_hQ]: _iT,
      },
    ],
  ]
);
export var ListInstanceTypeDetailsResponse = struct(n0, _LITDRi, 0, [_ITD, _NT], [() => InstanceTypeDetailsList, 0]);
export var AvailabilityZoneInfoList = list(n0, _AZIL, 0, () => AvailabilityZoneInfo);
export var AvailabilityZoneList = 64 | 0;

export var EnvironmentInfoList = list(n0, _EIL, 0, () => EnvironmentInfo);
export var InstanceRoleList = 64 | 0;

export var InstanceTypeDetailsList = list(n0, _ITDL, 0, () => InstanceTypeDetails);
export var DescribeDomainHealth = op(
  n0,
  _DDH,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/domain/{DomainName}/health", 200],
  },
  () => DescribeDomainHealthRequest,
  () => DescribeDomainHealthResponse
);
export var ListInstanceTypeDetails = op(
  n0,
  _LITD,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/instanceTypeDetails/{EngineVersion}", 200],
  },
  () => ListInstanceTypeDetailsRequest,
  () => ListInstanceTypeDetailsResponse
);
