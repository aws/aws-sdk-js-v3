// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DFLI,
  _DFLi,
  _DFLIR,
  _DFLIRe,
  _DFLISI,
  _DFLISS,
  _DFLRi,
  _DFLRis,
  _DR,
  _EFL,
  _EFLR,
  _EFLRn,
  _eQN,
  _F,
  _Fi,
  _Fil,
  _FLIa,
  _FLIIL,
  _fLISa,
  _FLLTSR,
  _FLLTSRa,
  _FLSCR,
  _FLSCRa,
  _IIm,
  _IIma,
  _iIma,
  _it,
  _LT,
  _lT,
  _LTI,
  _lTI,
  _LTN,
  _lTN,
  _MPL,
  _mPL,
  _MR,
  _NTe,
  _nTe,
  _OI,
  _oI,
  _RTe,
  _rTe,
  _SCn,
  _sCn,
  _St,
  _st,
  _STR,
  _sTR,
  _STT,
  _sTT,
  _TRC,
  _tRC,
  _ve,
  _Ver,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeFastLaunchImagesRequest = struct(
  n0,
  _DFLIR,
  0,
  [_IIma, _Fi, _MR, _NTe, _DR],
  [
    [
      () => FastLaunchImageIdList,
      {
        [_xN]: _IIm,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    2,
  ]
);
export var DescribeFastLaunchImagesResult = struct(
  n0,
  _DFLIRe,
  0,
  [_FLIa, _NTe],
  [
    [
      () => DescribeFastLaunchImagesSuccessSet,
      {
        [_eQN]: `FastLaunchImageSet`,
        [_xN]: _fLISa,
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
export var DescribeFastLaunchImagesSuccessItem = struct(
  n0,
  _DFLISI,
  0,
  [_IIm, _RTe, _SCn, _LT, _MPL, _OI, _St, _STR, _STT],
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
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
    [
      () => FastLaunchSnapshotConfigurationResponse,
      {
        [_eQN]: `SnapshotConfiguration`,
        [_xN]: _sCn,
      },
    ],
    [
      () => FastLaunchLaunchTemplateSpecificationResponse,
      {
        [_eQN]: `LaunchTemplate`,
        [_xN]: _lT,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxParallelLaunches`,
        [_xN]: _mPL,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `StateTransitionReason`,
        [_xN]: _sTR,
      },
    ],
    [
      4,
      {
        [_eQN]: `StateTransitionTime`,
        [_xN]: _sTT,
      },
    ],
  ]
);
export var DisableFastLaunchRequest = struct(n0, _DFLRi, 0, [_IIm, _F, _DR], [0, 2, 2]);
export var DisableFastLaunchResult = struct(
  n0,
  _DFLRis,
  0,
  [_IIm, _RTe, _SCn, _LT, _MPL, _OI, _St, _STR, _STT],
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
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
    [
      () => FastLaunchSnapshotConfigurationResponse,
      {
        [_eQN]: `SnapshotConfiguration`,
        [_xN]: _sCn,
      },
    ],
    [
      () => FastLaunchLaunchTemplateSpecificationResponse,
      {
        [_eQN]: `LaunchTemplate`,
        [_xN]: _lT,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxParallelLaunches`,
        [_xN]: _mPL,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `StateTransitionReason`,
        [_xN]: _sTR,
      },
    ],
    [
      4,
      {
        [_eQN]: `StateTransitionTime`,
        [_xN]: _sTT,
      },
    ],
  ]
);
export var EnableFastLaunchRequest = struct(
  n0,
  _EFLR,
  0,
  [_IIm, _RTe, _SCn, _LT, _MPL, _DR],
  [0, 0, () => FastLaunchSnapshotConfigurationRequest, () => FastLaunchLaunchTemplateSpecificationRequest, 1, 2]
);
export var EnableFastLaunchResult = struct(
  n0,
  _EFLRn,
  0,
  [_IIm, _RTe, _SCn, _LT, _MPL, _OI, _St, _STR, _STT],
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
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
    [
      () => FastLaunchSnapshotConfigurationResponse,
      {
        [_eQN]: `SnapshotConfiguration`,
        [_xN]: _sCn,
      },
    ],
    [
      () => FastLaunchLaunchTemplateSpecificationResponse,
      {
        [_eQN]: `LaunchTemplate`,
        [_xN]: _lT,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxParallelLaunches`,
        [_xN]: _mPL,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `StateTransitionReason`,
        [_xN]: _sTR,
      },
    ],
    [
      4,
      {
        [_eQN]: `StateTransitionTime`,
        [_xN]: _sTT,
      },
    ],
  ]
);
export var FastLaunchLaunchTemplateSpecificationRequest = struct(n0, _FLLTSR, 0, [_LTI, _LTN, _Ver], [0, 0, 0]);
export var FastLaunchLaunchTemplateSpecificationResponse = struct(
  n0,
  _FLLTSRa,
  0,
  [_LTI, _LTN, _Ver],
  [
    [
      0,
      {
        [_eQN]: `LaunchTemplateId`,
        [_xN]: _lTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `LaunchTemplateName`,
        [_xN]: _lTN,
      },
    ],
    [
      0,
      {
        [_eQN]: `Version`,
        [_xN]: _ve,
      },
    ],
  ]
);
export var FastLaunchSnapshotConfigurationRequest = struct(n0, _FLSCR, 0, [_TRC], [1]);
export var FastLaunchSnapshotConfigurationResponse = struct(
  n0,
  _FLSCRa,
  0,
  [_TRC],
  [
    [
      1,
      {
        [_eQN]: `TargetResourceCount`,
        [_xN]: _tRC,
      },
    ],
  ]
);
export var DescribeFastLaunchImagesSuccessSet = list(n0, _DFLISS, 0, [
  () => DescribeFastLaunchImagesSuccessItem,
  {
    [_xN]: _it,
  },
]);
export var FastLaunchImageIdList = list(n0, _FLIIL, 0, [
  0,
  {
    [_xN]: _IIm,
  },
]);
export var DescribeFastLaunchImages = op(
  n0,
  _DFLI,
  0,
  () => DescribeFastLaunchImagesRequest,
  () => DescribeFastLaunchImagesResult
);
export var DisableFastLaunch = op(
  n0,
  _DFLi,
  0,
  () => DisableFastLaunchRequest,
  () => DisableFastLaunchResult
);
export var EnableFastLaunch = op(
  n0,
  _EFL,
  0,
  () => EnableFastLaunchRequest,
  () => EnableFastLaunchResult
);
