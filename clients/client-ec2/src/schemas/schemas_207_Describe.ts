// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CSon,
  _cSon,
  _DR,
  _DSLVI,
  _DSLVIR,
  _DSLVIRe,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _LA,
  _lA,
  _MR,
  _NTe,
  _nTe,
  _OA,
  _oA,
  _OI,
  _oI,
  _OIu,
  _oIu,
  _OLI,
  _oLI,
  _PAe,
  _pAe,
  _PBA,
  _pBA,
  _SLVI,
  _SLVIA,
  _sLVIA,
  _SLVIe,
  _SLVII,
  _sLVII,
  _SLVIIe,
  _SLVIIS,
  _SLVIS,
  _sLVIS,
  _T,
  _tS,
  _Vl,
  _vl,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeServiceLinkVirtualInterfacesRequest = struct(
  n0,
  _DSLVIR,
  0,
  [_SLVII, _Fi, _MR, _NTe, _DR],
  [
    [
      () => ServiceLinkVirtualInterfaceIdSet,
      {
        [_xN]: _SLVIIe,
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
export var DescribeServiceLinkVirtualInterfacesResult = struct(
  n0,
  _DSLVIRe,
  0,
  [_SLVI, _NTe],
  [
    [
      () => ServiceLinkVirtualInterfaceSet,
      {
        [_eQN]: `ServiceLinkVirtualInterfaceSet`,
        [_xN]: _sLVIS,
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
export var ServiceLinkVirtualInterface = struct(
  n0,
  _SLVIe,
  0,
  [_SLVIIe, _SLVIA, _OIu, _OA, _OI, _LA, _PAe, _PBA, _Vl, _OLI, _T, _CSon],
  [
    [
      0,
      {
        [_eQN]: `ServiceLinkVirtualInterfaceId`,
        [_xN]: _sLVII,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceLinkVirtualInterfaceArn`,
        [_xN]: _sLVIA,
      },
    ],
    [
      0,
      {
        [_eQN]: `OutpostId`,
        [_xN]: _oIu,
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
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
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
        [_eQN]: `PeerBgpAsn`,
        [_xN]: _pBA,
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
        [_eQN]: `OutpostLagId`,
        [_xN]: _oLI,
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
export var ServiceLinkVirtualInterfaceIdSet = list(n0, _SLVIIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ServiceLinkVirtualInterfaceSet = list(n0, _SLVIS, 0, [
  () => ServiceLinkVirtualInterface,
  {
    [_xN]: _it,
  },
]);
export var DescribeServiceLinkVirtualInterfaces = op(
  n0,
  _DSLVI,
  0,
  () => DescribeServiceLinkVirtualInterfacesRequest,
  () => DescribeServiceLinkVirtualInterfacesResult
);
