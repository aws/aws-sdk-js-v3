// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADp,
  _ATt,
  _Ci,
  _COi,
  _CT,
  _CVAE,
  _CVAECO,
  _CVAEEO,
  _CVAELBO,
  _CVAEPR,
  _CVAEPRL,
  _CVAER,
  _CVAERO,
  _CVAERr,
  _CVAESIL,
  _DCA,
  _De,
  _DR,
  _DVAEe,
  _DVAERes,
  _DVAEResc,
  _DVAG,
  _DVAGe,
  _DVAGR,
  _DVAGRe,
  _DVAGRes,
  _DVAGResc,
  _EDP,
  _eQN,
  _ETn,
  _Fi,
  _Fil,
  _FP,
  _GVAGP,
  _GVAGPR,
  _GVAGPRe,
  _it,
  _LBAo,
  _LBO,
  _MR,
  _MVAE,
  _MVAECO,
  _MVAEEO,
  _MVAELBO,
  _MVAEPRL,
  _MVAEPRod,
  _MVAER,
  _MVAERO,
  _MVAERo,
  _MVAESIL,
  _MVAG,
  _MVAGP,
  _MVAGPR,
  _MVAGPRo,
  _MVAGR,
  _MVAGRo,
  _NII,
  _NIO,
  _NTe,
  _nTe,
  _PDo,
  _pDo,
  _PE,
  _pE,
  _Po,
  _Pr,
  _PRo,
  _PRor,
  _RDCA,
  _RDIA,
  _RDPA,
  _RE,
  _ROd,
  _SGI,
  _SGIe,
  _SI,
  _SIu,
  _SS,
  _sSs,
  _TP,
  _TS,
  _TSa,
  _VAE,
  _vAE,
  _VAEe,
  _VAEI,
  _VAEIe,
  _VAEIL,
  _VAEL,
  _vAES,
  _VAG,
  _vAG,
  _VAGe,
  _VAGI,
  _VAGIe,
  _VAGIL,
  _VAGL,
  _vAGS,
  _VAII,
  _xN,
  FilterList,
  n0,
  TagSpecificationList,
  VerifiedAccessSseSpecificationResponse,
} from "./schemas_0";
import { SecurityGroupIdList, VerifiedAccessEndpoint } from "./schemas_44_Verified";
import { VerifiedAccessSseSpecificationRequest } from "./schemas_222_Access";
import { VerifiedAccessGroup } from "./schemas_322_Verified";

/* eslint no-var: 0 */

export var CreateVerifiedAccessEndpointCidrOptions = struct(
  n0,
  _CVAECO,
  0,
  [_Pr, _SI, _Ci, _PRor],
  [
    0,
    [
      () => CreateVerifiedAccessEndpointSubnetIdList,
      {
        [_xN]: _SIu,
      },
    ],
    0,
    [
      () => CreateVerifiedAccessEndpointPortRangeList,
      {
        [_xN]: _PRo,
      },
    ],
  ]
);
export var CreateVerifiedAccessEndpointEniOptions = struct(
  n0,
  _CVAEEO,
  0,
  [_NII, _Pr, _Po, _PRor],
  [
    0,
    0,
    1,
    [
      () => CreateVerifiedAccessEndpointPortRangeList,
      {
        [_xN]: _PRo,
      },
    ],
  ]
);
export var CreateVerifiedAccessEndpointLoadBalancerOptions = struct(
  n0,
  _CVAELBO,
  0,
  [_Pr, _Po, _LBAo, _SI, _PRor],
  [
    0,
    1,
    0,
    [
      () => CreateVerifiedAccessEndpointSubnetIdList,
      {
        [_xN]: _SIu,
      },
    ],
    [
      () => CreateVerifiedAccessEndpointPortRangeList,
      {
        [_xN]: _PRo,
      },
    ],
  ]
);
export var CreateVerifiedAccessEndpointPortRange = struct(n0, _CVAEPR, 0, [_FP, _TP], [1, 1]);
export var CreateVerifiedAccessEndpointRdsOptions = struct(
  n0,
  _CVAERO,
  0,
  [_Pr, _Po, _RDIA, _RDCA, _RDPA, _RE, _SI],
  [
    0,
    1,
    0,
    0,
    0,
    0,
    [
      () => CreateVerifiedAccessEndpointSubnetIdList,
      {
        [_xN]: _SIu,
      },
    ],
  ]
);
export var CreateVerifiedAccessEndpointRequest = struct(
  n0,
  _CVAER,
  0,
  [_VAGI, _ETn, _ATt, _DCA, _ADp, _EDP, _SGIe, _LBO, _NIO, _De, _PDo, _TS, _CT, _DR, _SS, _ROd, _COi],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    [
      () => SecurityGroupIdList,
      {
        [_xN]: _SGI,
      },
    ],
    [() => CreateVerifiedAccessEndpointLoadBalancerOptions, 0],
    [() => CreateVerifiedAccessEndpointEniOptions, 0],
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [0, 4],
    2,
    () => VerifiedAccessSseSpecificationRequest,
    [() => CreateVerifiedAccessEndpointRdsOptions, 0],
    [() => CreateVerifiedAccessEndpointCidrOptions, 0],
  ]
);
export var CreateVerifiedAccessEndpointResult = struct(
  n0,
  _CVAERr,
  0,
  [_VAE],
  [
    [
      () => VerifiedAccessEndpoint,
      {
        [_eQN]: `VerifiedAccessEndpoint`,
        [_xN]: _vAE,
      },
    ],
  ]
);
export var DeleteVerifiedAccessGroupRequest = struct(n0, _DVAGR, 0, [_VAGI, _CT, _DR], [0, [0, 4], 2]);
export var DeleteVerifiedAccessGroupResult = struct(
  n0,
  _DVAGRe,
  0,
  [_VAG],
  [
    [
      () => VerifiedAccessGroup,
      {
        [_eQN]: `VerifiedAccessGroup`,
        [_xN]: _vAG,
      },
    ],
  ]
);
export var DescribeVerifiedAccessEndpointsRequest = struct(
  n0,
  _DVAERes,
  0,
  [_VAEIe, _VAII, _VAGI, _MR, _NTe, _Fi, _DR],
  [
    [
      () => VerifiedAccessEndpointIdList,
      {
        [_xN]: _VAEI,
      },
    ],
    0,
    0,
    1,
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    2,
  ]
);
export var DescribeVerifiedAccessEndpointsResult = struct(
  n0,
  _DVAEResc,
  0,
  [_VAEe, _NTe],
  [
    [
      () => VerifiedAccessEndpointList,
      {
        [_eQN]: `VerifiedAccessEndpointSet`,
        [_xN]: _vAES,
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
export var DescribeVerifiedAccessGroupsRequest = struct(
  n0,
  _DVAGRes,
  0,
  [_VAGIe, _VAII, _MR, _NTe, _Fi, _DR],
  [
    [
      () => VerifiedAccessGroupIdList,
      {
        [_xN]: _VAGI,
      },
    ],
    0,
    1,
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    2,
  ]
);
export var DescribeVerifiedAccessGroupsResult = struct(
  n0,
  _DVAGResc,
  0,
  [_VAGe, _NTe],
  [
    [
      () => VerifiedAccessGroupList,
      {
        [_eQN]: `VerifiedAccessGroupSet`,
        [_xN]: _vAGS,
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
export var GetVerifiedAccessGroupPolicyRequest = struct(n0, _GVAGPR, 0, [_VAGI, _DR], [0, 2]);
export var GetVerifiedAccessGroupPolicyResult = struct(
  n0,
  _GVAGPRe,
  0,
  [_PE, _PDo],
  [
    [
      2,
      {
        [_eQN]: `PolicyEnabled`,
        [_xN]: _pE,
      },
    ],
    [
      0,
      {
        [_eQN]: `PolicyDocument`,
        [_xN]: _pDo,
      },
    ],
  ]
);
export var ModifyVerifiedAccessEndpointCidrOptions = struct(
  n0,
  _MVAECO,
  0,
  [_PRor],
  [
    [
      () => ModifyVerifiedAccessEndpointPortRangeList,
      {
        [_xN]: _PRo,
      },
    ],
  ]
);
export var ModifyVerifiedAccessEndpointEniOptions = struct(
  n0,
  _MVAEEO,
  0,
  [_Pr, _Po, _PRor],
  [
    0,
    1,
    [
      () => ModifyVerifiedAccessEndpointPortRangeList,
      {
        [_xN]: _PRo,
      },
    ],
  ]
);
export var ModifyVerifiedAccessEndpointLoadBalancerOptions = struct(
  n0,
  _MVAELBO,
  0,
  [_SI, _Pr, _Po, _PRor],
  [
    [
      () => ModifyVerifiedAccessEndpointSubnetIdList,
      {
        [_xN]: _SIu,
      },
    ],
    0,
    1,
    [
      () => ModifyVerifiedAccessEndpointPortRangeList,
      {
        [_xN]: _PRo,
      },
    ],
  ]
);
export var ModifyVerifiedAccessEndpointPortRange = struct(n0, _MVAEPRod, 0, [_FP, _TP], [1, 1]);
export var ModifyVerifiedAccessEndpointRdsOptions = struct(
  n0,
  _MVAERO,
  0,
  [_SI, _Po, _RE],
  [
    [
      () => ModifyVerifiedAccessEndpointSubnetIdList,
      {
        [_xN]: _SIu,
      },
    ],
    1,
    0,
  ]
);
export var ModifyVerifiedAccessEndpointRequest = struct(
  n0,
  _MVAER,
  0,
  [_VAEI, _VAGI, _LBO, _NIO, _De, _CT, _DR, _ROd, _COi],
  [
    0,
    0,
    [() => ModifyVerifiedAccessEndpointLoadBalancerOptions, 0],
    [() => ModifyVerifiedAccessEndpointEniOptions, 0],
    0,
    [0, 4],
    2,
    [() => ModifyVerifiedAccessEndpointRdsOptions, 0],
    [() => ModifyVerifiedAccessEndpointCidrOptions, 0],
  ]
);
export var ModifyVerifiedAccessEndpointResult = struct(
  n0,
  _MVAERo,
  0,
  [_VAE],
  [
    [
      () => VerifiedAccessEndpoint,
      {
        [_eQN]: `VerifiedAccessEndpoint`,
        [_xN]: _vAE,
      },
    ],
  ]
);
export var ModifyVerifiedAccessGroupPolicyRequest = struct(
  n0,
  _MVAGPR,
  0,
  [_VAGI, _PE, _PDo, _CT, _DR, _SS],
  [0, 2, 0, [0, 4], 2, () => VerifiedAccessSseSpecificationRequest]
);
export var ModifyVerifiedAccessGroupPolicyResult = struct(
  n0,
  _MVAGPRo,
  0,
  [_PE, _PDo, _SS],
  [
    [
      2,
      {
        [_eQN]: `PolicyEnabled`,
        [_xN]: _pE,
      },
    ],
    [
      0,
      {
        [_eQN]: `PolicyDocument`,
        [_xN]: _pDo,
      },
    ],
    [
      () => VerifiedAccessSseSpecificationResponse,
      {
        [_eQN]: `SseSpecification`,
        [_xN]: _sSs,
      },
    ],
  ]
);
export var ModifyVerifiedAccessGroupRequest = struct(
  n0,
  _MVAGR,
  0,
  [_VAGI, _VAII, _De, _CT, _DR],
  [0, 0, 0, [0, 4], 2]
);
export var ModifyVerifiedAccessGroupResult = struct(
  n0,
  _MVAGRo,
  0,
  [_VAG],
  [
    [
      () => VerifiedAccessGroup,
      {
        [_eQN]: `VerifiedAccessGroup`,
        [_xN]: _vAG,
      },
    ],
  ]
);
export var CreateVerifiedAccessEndpointPortRangeList = list(n0, _CVAEPRL, 0, [
  () => CreateVerifiedAccessEndpointPortRange,
  {
    [_xN]: _it,
  },
]);
export var CreateVerifiedAccessEndpointSubnetIdList = list(n0, _CVAESIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ModifyVerifiedAccessEndpointPortRangeList = list(n0, _MVAEPRL, 0, [
  () => ModifyVerifiedAccessEndpointPortRange,
  {
    [_xN]: _it,
  },
]);
export var ModifyVerifiedAccessEndpointSubnetIdList = list(n0, _MVAESIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var VerifiedAccessEndpointIdList = list(n0, _VAEIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var VerifiedAccessEndpointList = list(n0, _VAEL, 0, [
  () => VerifiedAccessEndpoint,
  {
    [_xN]: _it,
  },
]);
export var VerifiedAccessGroupIdList = list(n0, _VAGIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var VerifiedAccessGroupList = list(n0, _VAGL, 0, [
  () => VerifiedAccessGroup,
  {
    [_xN]: _it,
  },
]);
export var CreateVerifiedAccessEndpoint = op(
  n0,
  _CVAE,
  0,
  () => CreateVerifiedAccessEndpointRequest,
  () => CreateVerifiedAccessEndpointResult
);
export var DeleteVerifiedAccessGroup = op(
  n0,
  _DVAG,
  0,
  () => DeleteVerifiedAccessGroupRequest,
  () => DeleteVerifiedAccessGroupResult
);
export var DescribeVerifiedAccessEndpoints = op(
  n0,
  _DVAEe,
  0,
  () => DescribeVerifiedAccessEndpointsRequest,
  () => DescribeVerifiedAccessEndpointsResult
);
export var DescribeVerifiedAccessGroups = op(
  n0,
  _DVAGe,
  0,
  () => DescribeVerifiedAccessGroupsRequest,
  () => DescribeVerifiedAccessGroupsResult
);
export var GetVerifiedAccessGroupPolicy = op(
  n0,
  _GVAGP,
  0,
  () => GetVerifiedAccessGroupPolicyRequest,
  () => GetVerifiedAccessGroupPolicyResult
);
export var ModifyVerifiedAccessEndpoint = op(
  n0,
  _MVAE,
  0,
  () => ModifyVerifiedAccessEndpointRequest,
  () => ModifyVerifiedAccessEndpointResult
);
export var ModifyVerifiedAccessGroup = op(
  n0,
  _MVAG,
  0,
  () => ModifyVerifiedAccessGroupRequest,
  () => ModifyVerifiedAccessGroupResult
);
export var ModifyVerifiedAccessGroupPolicy = op(
  n0,
  _MVAGP,
  0,
  () => ModifyVerifiedAccessGroupPolicyRequest,
  () => ModifyVerifiedAccessGroupPolicyResult
);
