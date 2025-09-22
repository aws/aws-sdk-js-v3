// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CLDS,
  _cLDS,
  _CLDSL,
  _CLDSl,
  _CLE,
  _cLE,
  _DR,
  _dR,
  _DVCL,
  _DVCLDS,
  _DVCLDSR,
  _DVCLDSRe,
  _DVCLR,
  _DVCLRe,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _MR,
  _mR,
  _NTe,
  _nTe,
  _T,
  _tS,
  _VCL,
  _VCLIL,
  _VCLL,
  _VI,
  _vI,
  _VIp,
  _Vpc,
  _vpc,
  _vSp,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClassicLinkDnsSupport = struct(
  n0,
  _CLDS,
  0,
  [_CLDSl, _VI],
  [
    [
      2,
      {
        [_eQN]: `ClassicLinkDnsSupported`,
        [_xN]: _cLDS,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
  ]
);
export var DescribeVpcClassicLinkDnsSupportRequest = struct(
  n0,
  _DVCLDSR,
  0,
  [_VIp, _MR, _NTe],
  [
    [
      () => VpcClassicLinkIdList,
      {
        [_xN]: _VIp,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxResults`,
        [_xN]: _mR,
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
export var DescribeVpcClassicLinkDnsSupportResult = struct(
  n0,
  _DVCLDSRe,
  0,
  [_NTe, _Vpc],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => ClassicLinkDnsSupportList,
      {
        [_eQN]: `Vpcs`,
        [_xN]: _vpc,
      },
    ],
  ]
);
export var DescribeVpcClassicLinkRequest = struct(
  n0,
  _DVCLR,
  0,
  [_DR, _VIp, _Fi],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => VpcClassicLinkIdList,
      {
        [_xN]: _VI,
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
export var DescribeVpcClassicLinkResult = struct(
  n0,
  _DVCLRe,
  0,
  [_Vpc],
  [
    [
      () => VpcClassicLinkList,
      {
        [_eQN]: `VpcSet`,
        [_xN]: _vSp,
      },
    ],
  ]
);
export var VpcClassicLink = struct(
  n0,
  _VCL,
  0,
  [_CLE, _T, _VI],
  [
    [
      2,
      {
        [_eQN]: `ClassicLinkEnabled`,
        [_xN]: _cLE,
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
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
  ]
);
export var ClassicLinkDnsSupportList = list(n0, _CLDSL, 0, [
  () => ClassicLinkDnsSupport,
  {
    [_xN]: _it,
  },
]);
export var VpcClassicLinkIdList = list(n0, _VCLIL, 0, [
  0,
  {
    [_xN]: _VI,
  },
]);
export var VpcClassicLinkList = list(n0, _VCLL, 0, [
  () => VpcClassicLink,
  {
    [_xN]: _it,
  },
]);
export var DescribeVpcClassicLink = op(
  n0,
  _DVCL,
  0,
  () => DescribeVpcClassicLinkRequest,
  () => DescribeVpcClassicLinkResult
);
export var DescribeVpcClassicLinkDnsSupport = op(
  n0,
  _DVCLDS,
  0,
  () => DescribeVpcClassicLinkDnsSupportRequest,
  () => DescribeVpcClassicLinkDnsSupportResult
);
