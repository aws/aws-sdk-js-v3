// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CLGVI,
  _CLGVIR,
  _CLGVIRr,
  _CSon,
  _cSon,
  _DLGVI,
  _DLGVIe,
  _DLGVIG,
  _DLGVIGe,
  _DLGVIGR,
  _DLGVIGRe,
  _DLGVIGRes,
  _DLGVIGResc,
  _DLGVIR,
  _DLGVIRe,
  _DLGVIRes,
  _DLGVIResc,
  _DOLe,
  _DOLR,
  _DOLRe,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _LA,
  _lA,
  _LBA,
  _LBAE,
  _lBAE,
  _lBAo,
  _LGI,
  _lGI,
  _LGVI,
  _lGVI,
  _LGVIA,
  _lGVIA,
  _LGVIG,
  _lGVIG,
  _LGVIGA,
  _lGVIGA,
  _LGVIGI,
  _lGVIGI,
  _LGVIGIo,
  _LGVIGIS,
  _LGVIGo,
  _LGVIGS,
  _lGVIGS,
  _LGVII,
  _lGVII,
  _LGVIIo,
  _LGVIIS,
  _lGVIIS,
  _LGVIo,
  _LGVIS,
  _lGVIS,
  _MR,
  _NTe,
  _nTe,
  _OA,
  _oA,
  _OI,
  _oI,
  _OL,
  _OLI,
  _oLI,
  _OLIS,
  _OLIu,
  _OLS,
  _oLS,
  _OLu,
  _PAe,
  _pAe,
  _PBA,
  _pBA,
  _PBAE,
  _pBAE,
  _SLVII,
  _sLVIIS,
  _St,
  _st,
  _T,
  _TS,
  _tS,
  _TSa,
  _Vl,
  _vl,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { ServiceLinkVirtualInterfaceIdSet } from "./schemas_207_Describe";

/* eslint no-var: 0 */

export var CreateLocalGatewayVirtualInterfaceRequest = struct(
  n0,
  _CLGVIR,
  0,
  [_LGVIGI, _OLI, _Vl, _LA, _PAe, _PBA, _TS, _DR, _PBAE],
  [
    0,
    0,
    1,
    0,
    0,
    1,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
    1,
  ]
);
export var CreateLocalGatewayVirtualInterfaceResult = struct(
  n0,
  _CLGVIRr,
  0,
  [_LGVI],
  [
    [
      () => LocalGatewayVirtualInterface,
      {
        [_eQN]: `LocalGatewayVirtualInterface`,
        [_xN]: _lGVI,
      },
    ],
  ]
);
export var DeleteLocalGatewayVirtualInterfaceGroupRequest = struct(n0, _DLGVIGR, 0, [_LGVIGI, _DR], [0, 2]);
export var DeleteLocalGatewayVirtualInterfaceGroupResult = struct(
  n0,
  _DLGVIGRe,
  0,
  [_LGVIG],
  [
    [
      () => LocalGatewayVirtualInterfaceGroup,
      {
        [_eQN]: `LocalGatewayVirtualInterfaceGroup`,
        [_xN]: _lGVIG,
      },
    ],
  ]
);
export var DeleteLocalGatewayVirtualInterfaceRequest = struct(n0, _DLGVIR, 0, [_LGVII, _DR], [0, 2]);
export var DeleteLocalGatewayVirtualInterfaceResult = struct(
  n0,
  _DLGVIRe,
  0,
  [_LGVI],
  [
    [
      () => LocalGatewayVirtualInterface,
      {
        [_eQN]: `LocalGatewayVirtualInterface`,
        [_xN]: _lGVI,
      },
    ],
  ]
);
export var DescribeLocalGatewayVirtualInterfaceGroupsRequest = struct(
  n0,
  _DLGVIGRes,
  0,
  [_LGVIGIo, _Fi, _MR, _NTe, _DR],
  [
    [
      () => LocalGatewayVirtualInterfaceGroupIdSet,
      {
        [_xN]: _LGVIGI,
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
export var DescribeLocalGatewayVirtualInterfaceGroupsResult = struct(
  n0,
  _DLGVIGResc,
  0,
  [_LGVIGo, _NTe],
  [
    [
      () => LocalGatewayVirtualInterfaceGroupSet,
      {
        [_eQN]: `LocalGatewayVirtualInterfaceGroupSet`,
        [_xN]: _lGVIGS,
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
export var DescribeLocalGatewayVirtualInterfacesRequest = struct(
  n0,
  _DLGVIRes,
  0,
  [_LGVIIo, _Fi, _MR, _NTe, _DR],
  [
    [
      () => LocalGatewayVirtualInterfaceIdSet,
      {
        [_xN]: _LGVII,
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
export var DescribeLocalGatewayVirtualInterfacesResult = struct(
  n0,
  _DLGVIResc,
  0,
  [_LGVIo, _NTe],
  [
    [
      () => LocalGatewayVirtualInterfaceSet,
      {
        [_eQN]: `LocalGatewayVirtualInterfaceSet`,
        [_xN]: _lGVIS,
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
export var DescribeOutpostLagsRequest = struct(
  n0,
  _DOLR,
  0,
  [_OLIu, _Fi, _MR, _NTe, _DR],
  [
    [
      () => OutpostLagIdSet,
      {
        [_xN]: _OLI,
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
export var DescribeOutpostLagsResult = struct(
  n0,
  _DOLRe,
  0,
  [_OL, _NTe],
  [
    [
      () => OutpostLagSet,
      {
        [_eQN]: `OutpostLagSet`,
        [_xN]: _oLS,
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
export var LocalGatewayVirtualInterface = struct(
  n0,
  _LGVI,
  0,
  [_LGVII, _LGI, _LGVIGI, _LGVIA, _OLI, _Vl, _LA, _PAe, _LBA, _PBA, _PBAE, _OI, _T, _CSon],
  [
    [
      0,
      {
        [_eQN]: `LocalGatewayVirtualInterfaceId`,
        [_xN]: _lGVII,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalGatewayId`,
        [_xN]: _lGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalGatewayVirtualInterfaceGroupId`,
        [_xN]: _lGVIGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalGatewayVirtualInterfaceArn`,
        [_xN]: _lGVIA,
      },
    ],
    [
      0,
      {
        [_eQN]: `OutpostLagId`,
        [_xN]: _oLI,
      },
    ],
    [
      1,
      {
        [_eQN]: `Vlan`,
        [_xN]: _vl,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalAddress`,
        [_xN]: _lA,
      },
    ],
    [
      0,
      {
        [_eQN]: `PeerAddress`,
        [_xN]: _pAe,
      },
    ],
    [
      1,
      {
        [_eQN]: `LocalBgpAsn`,
        [_xN]: _lBAo,
      },
    ],
    [
      1,
      {
        [_eQN]: `PeerBgpAsn`,
        [_xN]: _pBA,
      },
    ],
    [
      1,
      {
        [_eQN]: `PeerBgpAsnExtended`,
        [_xN]: _pBAE,
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
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ConfigurationState`,
        [_xN]: _cSon,
      },
    ],
  ]
);
export var LocalGatewayVirtualInterfaceGroup = struct(
  n0,
  _LGVIG,
  0,
  [_LGVIGI, _LGVIIo, _LGI, _OI, _LBA, _LBAE, _LGVIGA, _T, _CSon],
  [
    [
      0,
      {
        [_eQN]: `LocalGatewayVirtualInterfaceGroupId`,
        [_xN]: _lGVIGI,
      },
    ],
    [
      () => LocalGatewayVirtualInterfaceIdSet,
      {
        [_eQN]: `LocalGatewayVirtualInterfaceIdSet`,
        [_xN]: _lGVIIS,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalGatewayId`,
        [_xN]: _lGI,
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
      1,
      {
        [_eQN]: `LocalBgpAsn`,
        [_xN]: _lBAo,
      },
    ],
    [
      1,
      {
        [_eQN]: `LocalBgpAsnExtended`,
        [_xN]: _lBAE,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalGatewayVirtualInterfaceGroupArn`,
        [_xN]: _lGVIGA,
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
        [_eQN]: `ConfigurationState`,
        [_xN]: _cSon,
      },
    ],
  ]
);
export var OutpostLag = struct(
  n0,
  _OLu,
  0,
  [_OA, _OI, _St, _OLI, _LGVIIo, _SLVII, _T],
  [
    [
      0,
      {
        [_eQN]: `OutpostArn`,
        [_xN]: _oA,
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
        [_eQN]: `OutpostLagId`,
        [_xN]: _oLI,
      },
    ],
    [
      () => LocalGatewayVirtualInterfaceIdSet,
      {
        [_eQN]: `LocalGatewayVirtualInterfaceIdSet`,
        [_xN]: _lGVIIS,
      },
    ],
    [
      () => ServiceLinkVirtualInterfaceIdSet,
      {
        [_eQN]: `ServiceLinkVirtualInterfaceIdSet`,
        [_xN]: _sLVIIS,
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
export var LocalGatewayVirtualInterfaceGroupIdSet = list(n0, _LGVIGIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var LocalGatewayVirtualInterfaceGroupSet = list(n0, _LGVIGS, 0, [
  () => LocalGatewayVirtualInterfaceGroup,
  {
    [_xN]: _it,
  },
]);
export var LocalGatewayVirtualInterfaceIdSet = list(n0, _LGVIIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var LocalGatewayVirtualInterfaceSet = list(n0, _LGVIS, 0, [
  () => LocalGatewayVirtualInterface,
  {
    [_xN]: _it,
  },
]);
export var OutpostLagIdSet = list(n0, _OLIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var OutpostLagSet = list(n0, _OLS, 0, [
  () => OutpostLag,
  {
    [_xN]: _it,
  },
]);
export var CreateLocalGatewayVirtualInterface = op(
  n0,
  _CLGVI,
  0,
  () => CreateLocalGatewayVirtualInterfaceRequest,
  () => CreateLocalGatewayVirtualInterfaceResult
);
export var DeleteLocalGatewayVirtualInterface = op(
  n0,
  _DLGVI,
  0,
  () => DeleteLocalGatewayVirtualInterfaceRequest,
  () => DeleteLocalGatewayVirtualInterfaceResult
);
export var DeleteLocalGatewayVirtualInterfaceGroup = op(
  n0,
  _DLGVIG,
  0,
  () => DeleteLocalGatewayVirtualInterfaceGroupRequest,
  () => DeleteLocalGatewayVirtualInterfaceGroupResult
);
export var DescribeLocalGatewayVirtualInterfaceGroups = op(
  n0,
  _DLGVIGe,
  0,
  () => DescribeLocalGatewayVirtualInterfaceGroupsRequest,
  () => DescribeLocalGatewayVirtualInterfaceGroupsResult
);
export var DescribeLocalGatewayVirtualInterfaces = op(
  n0,
  _DLGVIe,
  0,
  () => DescribeLocalGatewayVirtualInterfacesRequest,
  () => DescribeLocalGatewayVirtualInterfacesResult
);
export var DescribeOutpostLags = op(
  n0,
  _DOLe,
  0,
  () => DescribeOutpostLagsRequest,
  () => DescribeOutpostLagsResult
);
