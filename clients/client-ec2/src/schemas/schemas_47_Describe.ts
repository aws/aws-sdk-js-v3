// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Acti,
  _aSct,
  _aStt,
  _AStta,
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _Co,
  _co,
  _De,
  _de,
  _Det,
  _det,
  _DR,
  _dR,
  _DVM,
  _DVMR,
  _DVMRe,
  _DVS,
  _DVSR,
  _DVSRe,
  _EIve,
  _eIve,
  _eQN,
  _eSv,
  _ETTCIS,
  _eTTCIS,
  _ETv,
  _eTv,
  _Ev,
  _Fi,
  _Fil,
  _II,
  _iI,
  _IPo,
  _iPo,
  _ISD,
  _iSD,
  _it,
  _ITni,
  _iTni,
  _MR,
  _N,
  _n,
  _NAo,
  _nAo,
  _NB,
  _nB,
  _NTe,
  _nTe,
  _OA,
  _oA,
  _Pro,
  _pro,
  _Sta,
  _sta,
  _VIo,
  _vIo,
  _VIol,
  _VISL,
  _VM,
  _VML,
  _vMS,
  _VS,
  _VSA,
  _VSAL,
  _VSAS,
  _VSASL,
  _VSD,
  _VSDL,
  _VSE,
  _VSEL,
  _VSI,
  _VSIo,
  _VSLo,
  _VSol,
  _vSol,
  _vSS,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";
import { VolumeModification } from "./schemas_267_Volume";

/* eslint no-var: 0 */

export var DescribeVolumesModificationsRequest = struct(
  n0,
  _DVMR,
  0,
  [_DR, _VIol, _Fi, _NTe, _MR],
  [
    2,
    [
      () => VolumeIdStringList,
      {
        [_xN]: _VIo,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    0,
    1,
  ]
);
export var DescribeVolumesModificationsResult = struct(
  n0,
  _DVMRe,
  0,
  [_NTe, _VM],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => VolumeModificationList,
      {
        [_eQN]: `VolumeModificationSet`,
        [_xN]: _vMS,
      },
    ],
  ]
);
export var DescribeVolumeStatusRequest = struct(
  n0,
  _DVSR,
  0,
  [_MR, _NTe, _VIol, _DR, _Fi],
  [
    1,
    0,
    [
      () => VolumeIdStringList,
      {
        [_xN]: _VIo,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeVolumeStatusResult = struct(
  n0,
  _DVSRe,
  0,
  [_NTe, _VS],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => VolumeStatusList,
      {
        [_eQN]: `VolumeStatusSet`,
        [_xN]: _vSS,
      },
    ],
  ]
);
export var InitializationStatusDetails = struct(
  n0,
  _ISD,
  0,
  [_ITni, _Pro, _ETTCIS],
  [
    [
      0,
      {
        [_eQN]: `InitializationType`,
        [_xN]: _iTni,
      },
    ],
    [
      1,
      {
        [_eQN]: `Progress`,
        [_xN]: _pro,
      },
    ],
    [
      1,
      {
        [_eQN]: `EstimatedTimeToCompleteInSeconds`,
        [_xN]: _eTTCIS,
      },
    ],
  ]
);
export var VolumeStatusAction = struct(
  n0,
  _VSA,
  0,
  [_Co, _De, _EIve, _ETv],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      0,
      {
        [_eQN]: `EventId`,
        [_xN]: _eIve,
      },
    ],
    [
      0,
      {
        [_eQN]: `EventType`,
        [_xN]: _eTv,
      },
    ],
  ]
);
export var VolumeStatusAttachmentStatus = struct(
  n0,
  _VSAS,
  0,
  [_IPo, _II],
  [
    [
      0,
      {
        [_eQN]: `IoPerformance`,
        [_xN]: _iPo,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
  ]
);
export var VolumeStatusDetails = struct(
  n0,
  _VSD,
  0,
  [_N, _Sta],
  [
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var VolumeStatusEvent = struct(
  n0,
  _VSE,
  0,
  [_De, _EIve, _ETv, _NAo, _NB, _II],
  [
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      0,
      {
        [_eQN]: `EventId`,
        [_xN]: _eIve,
      },
    ],
    [
      0,
      {
        [_eQN]: `EventType`,
        [_xN]: _eTv,
      },
    ],
    [
      4,
      {
        [_eQN]: `NotAfter`,
        [_xN]: _nAo,
      },
    ],
    [
      4,
      {
        [_eQN]: `NotBefore`,
        [_xN]: _nB,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
  ]
);
export var VolumeStatusInfo = struct(
  n0,
  _VSI,
  0,
  [_Det, _Sta],
  [
    [
      () => VolumeStatusDetailsList,
      {
        [_eQN]: `Details`,
        [_xN]: _det,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var VolumeStatusItem = struct(
  n0,
  _VSIo,
  0,
  [_Acti, _AZ, _OA, _Ev, _VIo, _VSol, _AStta, _ISD, _AZI],
  [
    [
      () => VolumeStatusActionsList,
      {
        [_eQN]: `ActionsSet`,
        [_xN]: _aSct,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      0,
      {
        [_eQN]: `OutpostArn`,
        [_xN]: _oA,
      },
    ],
    [
      () => VolumeStatusEventsList,
      {
        [_eQN]: `EventsSet`,
        [_xN]: _eSv,
      },
    ],
    [
      0,
      {
        [_eQN]: `VolumeId`,
        [_xN]: _vIo,
      },
    ],
    [
      () => VolumeStatusInfo,
      {
        [_eQN]: `VolumeStatus`,
        [_xN]: _vSol,
      },
    ],
    [
      () => VolumeStatusAttachmentStatusList,
      {
        [_eQN]: `AttachmentStatuses`,
        [_xN]: _aStt,
      },
    ],
    [
      () => InitializationStatusDetails,
      {
        [_eQN]: `InitializationStatusDetails`,
        [_xN]: _iSD,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
  ]
);
export var VolumeIdStringList = list(n0, _VISL, 0, [
  0,
  {
    [_xN]: _VIo,
  },
]);
export var VolumeModificationList = list(n0, _VML, 0, [
  () => VolumeModification,
  {
    [_xN]: _it,
  },
]);
export var VolumeStatusActionsList = list(n0, _VSAL, 0, [
  () => VolumeStatusAction,
  {
    [_xN]: _it,
  },
]);
export var VolumeStatusAttachmentStatusList = list(n0, _VSASL, 0, [
  () => VolumeStatusAttachmentStatus,
  {
    [_xN]: _it,
  },
]);
export var VolumeStatusDetailsList = list(n0, _VSDL, 0, [
  () => VolumeStatusDetails,
  {
    [_xN]: _it,
  },
]);
export var VolumeStatusEventsList = list(n0, _VSEL, 0, [
  () => VolumeStatusEvent,
  {
    [_xN]: _it,
  },
]);
export var VolumeStatusList = list(n0, _VSLo, 0, [
  () => VolumeStatusItem,
  {
    [_xN]: _it,
  },
]);
export var DescribeVolumesModifications = op(
  n0,
  _DVM,
  0,
  () => DescribeVolumesModificationsRequest,
  () => DescribeVolumesModificationsResult
);
export var DescribeVolumeStatus = op(
  n0,
  _DVS,
  0,
  () => DescribeVolumeStatusRequest,
  () => DescribeVolumeStatusResult
);
