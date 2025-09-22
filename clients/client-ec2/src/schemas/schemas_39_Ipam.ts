// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ci,
  _DR,
  _eQN,
  _ETnd,
  _GIAH,
  _GIAHR,
  _GIAHRe,
  _HRi,
  _hRS,
  _IAHR,
  _IAHRS,
  _ISI,
  _it,
  _MR,
  _NTe,
  _nTe,
  _RCe,
  _rCe,
  _RCS,
  _rCS,
  _rIe,
  _RIes,
  _RNes,
  _rNes,
  _ROI,
  _rOI,
  _ROS,
  _rOSe,
  _RR,
  _rR,
  _RTe,
  _rTe,
  _SET,
  _sET,
  _SST,
  _sST,
  _ST,
  _VI,
  _vI,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetIpamAddressHistoryRequest = struct(
  n0,
  _GIAHR,
  0,
  [_DR, _Ci, _ISI, _VI, _ST, _ETnd, _MR, _NTe],
  [2, 0, 0, 0, 4, 4, 1, 0]
);
export var GetIpamAddressHistoryResult = struct(
  n0,
  _GIAHRe,
  0,
  [_HRi, _NTe],
  [
    [
      () => IpamAddressHistoryRecordSet,
      {
        [_eQN]: `HistoryRecordSet`,
        [_xN]: _hRS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var IpamAddressHistoryRecord = struct(
  n0,
  _IAHR,
  0,
  [_ROI, _RR, _RTe, _RIes, _RCe, _RNes, _RCS, _ROS, _VI, _SST, _SET],
  [
    [
      0,
      {
        [_eQN]: `ResourceOwnerId`,
        [_xN]: _rOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceRegion`,
        [_xN]: _rR,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceId`,
        [_xN]: _rIe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceCidr`,
        [_xN]: _rCe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceName`,
        [_xN]: _rNes,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceComplianceStatus`,
        [_xN]: _rCS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceOverlapStatus`,
        [_xN]: _rOSe,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      4,
      {
        [_eQN]: `SampledStartTime`,
        [_xN]: _sST,
      },
    ],
    [
      4,
      {
        [_eQN]: `SampledEndTime`,
        [_xN]: _sET,
      },
    ],
  ]
);
export var IpamAddressHistoryRecordSet = list(n0, _IAHRS, 0, [
  () => IpamAddressHistoryRecord,
  {
    [_xN]: _it,
  },
]);
export var GetIpamAddressHistory = op(
  n0,
  _GIAH,
  0,
  () => GetIpamAddressHistoryRequest,
  () => GetIpamAddressHistoryResult
);
