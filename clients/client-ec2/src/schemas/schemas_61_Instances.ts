// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AES,
  _aES,
  _AId,
  _aId,
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _CDr,
  _cDr,
  _Co,
  _co,
  _CSu,
  _cSu,
  _Det,
  _det,
  _DIIM,
  _DIIMR,
  _DIIMRe,
  _DISes,
  _DISRes,
  _DISResc,
  _DR,
  _dR,
  _DTe,
  _dTe,
  _eQN,
  _ESD,
  _ESDL,
  _ESSb,
  _eSv,
  _Ev,
  _F,
  _Fi,
  _Fil,
  _fo,
  _Hi,
  _IAI,
  _iAI,
  _IAm,
  _iAm,
  _II,
  _iI,
  _IIM,
  _IIm,
  _iIma,
  _IIML,
  _iIMS,
  _IIn,
  _iM,
  _IMm,
  _IOA,
  _iOA,
  _iOI,
  _iOIn,
  _IPs,
  _iPs,
  _ISC,
  _ISCL,
  _ISDL,
  _ISDn,
  _ISEL,
  _ISLn,
  _ISm,
  _iSma,
  _iSmp,
  _iSn,
  _ISns,
  _ISnst,
  _iSnst,
  _ISnsta,
  _iSnsta,
  _ISS,
  _iSS,
  _IT,
  _iT,
  _it,
  _LTau,
  _lTau,
  _MR,
  _N,
  _n,
  _NTe,
  _nTe,
  _OA,
  _oA,
  _OI,
  _Op,
  _ope,
  _PSr,
  _pSr,
  _SIRt,
  _SIRta,
  _SIRto,
  _SIRtop,
  _SIt,
  _SIta,
  _SIto,
  _SItop,
  _SOS,
  _SSy,
  _sSy,
  _St,
  _Sta,
  _sta,
  _T,
  _TI,
  _TIer,
  _TIR,
  _TIRe,
  _tS,
  _xN,
  _ZI,
  _zI,
  FilterList,
  n0,
  OperatorResponse,
  TagList,
} from "./schemas_0";
import { InstanceStatusEvent } from "./schemas_224_Instance";
import { InstanceIdStringList } from "./schemas_330_Instances";

/* eslint no-var: 0 */

export var DescribeInstanceImageMetadataRequest = struct(
  n0,
  _DIIMR,
  0,
  [_Fi, _IIn, _MR, _NTe, _DR],
  [
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      () => InstanceIdStringList,
      {
        [_xN]: _II,
      },
    ],
    1,
    0,
    2,
  ]
);
export var DescribeInstanceImageMetadataResult = struct(
  n0,
  _DIIMRe,
  0,
  [_IIM, _NTe],
  [
    [
      () => InstanceImageMetadataList,
      {
        [_eQN]: `InstanceImageMetadataSet`,
        [_xN]: _iIMS,
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
export var DescribeInstanceStatusRequest = struct(
  n0,
  _DISRes,
  0,
  [_IIn, _MR, _NTe, _DR, _Fi, _IAI],
  [
    [
      () => InstanceIdStringList,
      {
        [_xN]: _II,
      },
    ],
    1,
    0,
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
    [
      2,
      {
        [_eQN]: `IncludeAllInstances`,
        [_xN]: _iAI,
      },
    ],
  ]
);
export var DescribeInstanceStatusResult = struct(
  n0,
  _DISResc,
  0,
  [_ISns, _NTe],
  [
    [
      () => InstanceStatusList,
      {
        [_eQN]: `InstanceStatusSet`,
        [_xN]: _iSS,
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
export var EbsStatusDetails = struct(
  n0,
  _ESD,
  0,
  [_ISm, _N, _Sta],
  [
    [
      4,
      {
        [_eQN]: `ImpairedSince`,
        [_xN]: _iSmp,
      },
    ],
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
export var EbsStatusSummary = struct(
  n0,
  _ESSb,
  0,
  [_Det, _Sta],
  [
    [
      () => EbsStatusDetailsList,
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
export var ImageMetadata = struct(
  n0,
  _IMm,
  0,
  [_IIm, _N, _OI, _St, _IOA, _CDr, _DTe, _IAm, _IPs],
  [
    [
      0,
      {
        [_eQN]: `ImageId`,
        [_xN]: _iIma,
      },
    ],
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
        [_eQN]: `ImageOwnerId`,
        [_xN]: _iOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ImageState`,
        [_xN]: _iSma,
      },
    ],
    [
      0,
      {
        [_eQN]: `ImageOwnerAlias`,
        [_xN]: _iOA,
      },
    ],
    [
      0,
      {
        [_eQN]: `CreationDate`,
        [_xN]: _cDr,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeprecationTime`,
        [_xN]: _dTe,
      },
    ],
    [
      2,
      {
        [_eQN]: `ImageAllowed`,
        [_xN]: _iAm,
      },
    ],
    [
      2,
      {
        [_eQN]: `IsPublic`,
        [_xN]: _iPs,
      },
    ],
  ]
);
export var InstanceImageMetadata = struct(
  n0,
  _IIM,
  0,
  [_II, _IT, _LTau, _AZ, _ZI, _St, _OI, _T, _IMm, _Op],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      4,
      {
        [_eQN]: `LaunchTime`,
        [_xN]: _lTau,
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
        [_eQN]: `ZoneId`,
        [_xN]: _zI,
      },
    ],
    [
      () => InstanceState,
      {
        [_eQN]: `InstanceState`,
        [_xN]: _iSnst,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceOwnerId`,
        [_xN]: _iOIn,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      () => ImageMetadata,
      {
        [_eQN]: `ImageMetadata`,
        [_xN]: _iM,
      },
    ],
    [
      () => OperatorResponse,
      {
        [_eQN]: `Operator`,
        [_xN]: _ope,
      },
    ],
  ]
);
export var InstanceState = struct(
  n0,
  _ISnst,
  0,
  [_Co, _N],
  [
    [
      1,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
  ]
);
export var InstanceStateChange = struct(
  n0,
  _ISC,
  0,
  [_II, _CSu, _PSr],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      () => InstanceState,
      {
        [_eQN]: `CurrentState`,
        [_xN]: _cSu,
      },
    ],
    [
      () => InstanceState,
      {
        [_eQN]: `PreviousState`,
        [_xN]: _pSr,
      },
    ],
  ]
);
export var InstanceStatus = struct(
  n0,
  _ISnsta,
  0,
  [_AZ, _AZI, _OA, _Op, _Ev, _II, _ISnst, _ISnsta, _SSy, _AES],
  [
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
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
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
      () => OperatorResponse,
      {
        [_eQN]: `Operator`,
        [_xN]: _ope,
      },
    ],
    [
      () => InstanceStatusEventList,
      {
        [_eQN]: `EventsSet`,
        [_xN]: _eSv,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      () => InstanceState,
      {
        [_eQN]: `InstanceState`,
        [_xN]: _iSnst,
      },
    ],
    [
      () => InstanceStatusSummary,
      {
        [_eQN]: `InstanceStatus`,
        [_xN]: _iSnsta,
      },
    ],
    [
      () => InstanceStatusSummary,
      {
        [_eQN]: `SystemStatus`,
        [_xN]: _sSy,
      },
    ],
    [
      () => EbsStatusSummary,
      {
        [_eQN]: `AttachedEbsStatus`,
        [_xN]: _aES,
      },
    ],
  ]
);
export var InstanceStatusDetails = struct(
  n0,
  _ISDn,
  0,
  [_ISm, _N, _Sta],
  [
    [
      4,
      {
        [_eQN]: `ImpairedSince`,
        [_xN]: _iSmp,
      },
    ],
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
export var InstanceStatusSummary = struct(
  n0,
  _ISS,
  0,
  [_Det, _Sta],
  [
    [
      () => InstanceStatusDetailsList,
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
export var StartInstancesRequest = struct(
  n0,
  _SIRt,
  0,
  [_IIn, _AId, _DR],
  [
    [
      () => InstanceIdStringList,
      {
        [_xN]: _II,
      },
    ],
    [
      0,
      {
        [_eQN]: `AdditionalInfo`,
        [_xN]: _aId,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var StartInstancesResult = struct(
  n0,
  _SIRta,
  0,
  [_SIt],
  [
    [
      () => InstanceStateChangeList,
      {
        [_eQN]: `InstancesSet`,
        [_xN]: _iSn,
      },
    ],
  ]
);
export var StopInstancesRequest = struct(
  n0,
  _SIRto,
  0,
  [_IIn, _Hi, _SOS, _DR, _F],
  [
    [
      () => InstanceIdStringList,
      {
        [_xN]: _II,
      },
    ],
    2,
    2,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      2,
      {
        [_eQN]: `Force`,
        [_xN]: _fo,
      },
    ],
  ]
);
export var StopInstancesResult = struct(
  n0,
  _SIRtop,
  0,
  [_SIto],
  [
    [
      () => InstanceStateChangeList,
      {
        [_eQN]: `InstancesSet`,
        [_xN]: _iSn,
      },
    ],
  ]
);
export var TerminateInstancesRequest = struct(
  n0,
  _TIR,
  0,
  [_IIn, _F, _SOS, _DR],
  [
    [
      () => InstanceIdStringList,
      {
        [_xN]: _II,
      },
    ],
    2,
    2,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var TerminateInstancesResult = struct(
  n0,
  _TIRe,
  0,
  [_TIer],
  [
    [
      () => InstanceStateChangeList,
      {
        [_eQN]: `InstancesSet`,
        [_xN]: _iSn,
      },
    ],
  ]
);
export var EbsStatusDetailsList = list(n0, _ESDL, 0, [
  () => EbsStatusDetails,
  {
    [_xN]: _it,
  },
]);
export var InstanceImageMetadataList = list(n0, _IIML, 0, [
  () => InstanceImageMetadata,
  {
    [_xN]: _it,
  },
]);
export var InstanceStateChangeList = list(n0, _ISCL, 0, [
  () => InstanceStateChange,
  {
    [_xN]: _it,
  },
]);
export var InstanceStatusDetailsList = list(n0, _ISDL, 0, [
  () => InstanceStatusDetails,
  {
    [_xN]: _it,
  },
]);
export var InstanceStatusEventList = list(n0, _ISEL, 0, [
  () => InstanceStatusEvent,
  {
    [_xN]: _it,
  },
]);
export var InstanceStatusList = list(n0, _ISLn, 0, [
  () => InstanceStatus,
  {
    [_xN]: _it,
  },
]);
export var DescribeInstanceImageMetadata = op(
  n0,
  _DIIM,
  0,
  () => DescribeInstanceImageMetadataRequest,
  () => DescribeInstanceImageMetadataResult
);
export var DescribeInstanceStatus = op(
  n0,
  _DISes,
  0,
  () => DescribeInstanceStatusRequest,
  () => DescribeInstanceStatusResult
);
export var StartInstances = op(
  n0,
  _SIta,
  0,
  () => StartInstancesRequest,
  () => StartInstancesResult
);
export var StopInstances = op(
  n0,
  _SItop,
  0,
  () => StopInstancesRequest,
  () => StopInstancesResult
);
export var TerminateInstances = op(
  n0,
  _TI,
  0,
  () => TerminateInstancesRequest,
  () => TerminateInstancesResult
);
