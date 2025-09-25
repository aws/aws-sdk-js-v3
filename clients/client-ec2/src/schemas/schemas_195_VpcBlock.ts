// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CTrea,
  _cTrea,
  _CVBPAE,
  _CVBPAER,
  _CVBPAERr,
  _DR,
  _DTele,
  _dTele,
  _DVBPAE,
  _DVBPAEe,
  _DVBPAER,
  _DVBPAERe,
  _DVBPAERes,
  _DVBPAEResc,
  _EIx,
  _eIx,
  _EIxc,
  _eQN,
  _Fi,
  _Fil,
  _IGEM,
  _iGEM,
  _it,
  _LUTas,
  _lUTas,
  _MR,
  _MVBPAE,
  _MVBPAER,
  _MVBPAERo,
  _NTe,
  _nTe,
  _rAe,
  _RAes,
  _Rea,
  _rea,
  _SIu,
  _St,
  _st,
  _T,
  _TS,
  _tS,
  _TSa,
  _VBPAE,
  _vBPAE,
  _VBPAEIL,
  _VBPAEL,
  _VBPAEp,
  _vBPAES,
  _VI,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateVpcBlockPublicAccessExclusionRequest = struct(
  n0,
  _CVBPAER,
  0,
  [_DR, _SIu, _VI, _IGEM, _TS],
  [
    2,
    0,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateVpcBlockPublicAccessExclusionResult = struct(
  n0,
  _CVBPAERr,
  0,
  [_VBPAE],
  [
    [
      () => VpcBlockPublicAccessExclusion,
      {
        [_eQN]: `VpcBlockPublicAccessExclusion`,
        [_xN]: _vBPAE,
      },
    ],
  ]
);
export var DeleteVpcBlockPublicAccessExclusionRequest = struct(n0, _DVBPAER, 0, [_DR, _EIx], [2, 0]);
export var DeleteVpcBlockPublicAccessExclusionResult = struct(
  n0,
  _DVBPAERe,
  0,
  [_VBPAE],
  [
    [
      () => VpcBlockPublicAccessExclusion,
      {
        [_eQN]: `VpcBlockPublicAccessExclusion`,
        [_xN]: _vBPAE,
      },
    ],
  ]
);
export var DescribeVpcBlockPublicAccessExclusionsRequest = struct(
  n0,
  _DVBPAERes,
  0,
  [_DR, _Fi, _EIxc, _NTe, _MR],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      () => VpcBlockPublicAccessExclusionIdList,
      {
        [_xN]: _EIx,
      },
    ],
    0,
    1,
  ]
);
export var DescribeVpcBlockPublicAccessExclusionsResult = struct(
  n0,
  _DVBPAEResc,
  0,
  [_VBPAEp, _NTe],
  [
    [
      () => VpcBlockPublicAccessExclusionList,
      {
        [_eQN]: `VpcBlockPublicAccessExclusionSet`,
        [_xN]: _vBPAES,
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
export var ModifyVpcBlockPublicAccessExclusionRequest = struct(n0, _MVBPAER, 0, [_DR, _EIx, _IGEM], [2, 0, 0]);
export var ModifyVpcBlockPublicAccessExclusionResult = struct(
  n0,
  _MVBPAERo,
  0,
  [_VBPAE],
  [
    [
      () => VpcBlockPublicAccessExclusion,
      {
        [_eQN]: `VpcBlockPublicAccessExclusion`,
        [_xN]: _vBPAE,
      },
    ],
  ]
);
export var VpcBlockPublicAccessExclusion = struct(
  n0,
  _VBPAE,
  0,
  [_EIx, _IGEM, _RAes, _St, _Rea, _CTrea, _LUTas, _DTele, _T],
  [
    [
      0,
      {
        [_eQN]: `ExclusionId`,
        [_xN]: _eIx,
      },
    ],
    [
      0,
      {
        [_eQN]: `InternetGatewayExclusionMode`,
        [_xN]: _iGEM,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceArn`,
        [_xN]: _rAe,
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
        [_eQN]: `Reason`,
        [_xN]: _rea,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreationTimestamp`,
        [_xN]: _cTrea,
      },
    ],
    [
      4,
      {
        [_eQN]: `LastUpdateTimestamp`,
        [_xN]: _lUTas,
      },
    ],
    [
      4,
      {
        [_eQN]: `DeletionTimestamp`,
        [_xN]: _dTele,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var VpcBlockPublicAccessExclusionIdList = list(n0, _VBPAEIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var VpcBlockPublicAccessExclusionList = list(n0, _VBPAEL, 0, [
  () => VpcBlockPublicAccessExclusion,
  {
    [_xN]: _it,
  },
]);
export var CreateVpcBlockPublicAccessExclusion = op(
  n0,
  _CVBPAE,
  0,
  () => CreateVpcBlockPublicAccessExclusionRequest,
  () => CreateVpcBlockPublicAccessExclusionResult
);
export var DeleteVpcBlockPublicAccessExclusion = op(
  n0,
  _DVBPAE,
  0,
  () => DeleteVpcBlockPublicAccessExclusionRequest,
  () => DeleteVpcBlockPublicAccessExclusionResult
);
export var DescribeVpcBlockPublicAccessExclusions = op(
  n0,
  _DVBPAEe,
  0,
  () => DescribeVpcBlockPublicAccessExclusionsRequest,
  () => DescribeVpcBlockPublicAccessExclusionsResult
);
export var ModifyVpcBlockPublicAccessExclusion = op(
  n0,
  _MVBPAE,
  0,
  () => ModifyVpcBlockPublicAccessExclusionRequest,
  () => ModifyVpcBlockPublicAccessExclusionResult
);
