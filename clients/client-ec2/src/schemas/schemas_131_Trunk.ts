// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIs,
  _aIs,
  _AIsso,
  _ATIR,
  _ATIRs,
  _ATIs,
  _BII,
  _bII,
  _CT,
  _cT,
  _DR,
  _DTI,
  _DTIA,
  _DTIAR,
  _DTIARe,
  _DTIR,
  _DTIRi,
  _eQN,
  _Fi,
  _Fil,
  _GK,
  _gK,
  _IAn,
  _iAn,
  _IAnt,
  _iAS,
  _IPnte,
  _iPnte,
  _it,
  _MR,
  _NTe,
  _nTe,
  _R,
  _r,
  _T,
  _TIA,
  _TIAIL,
  _TIAL,
  _TII,
  _tII,
  _tS,
  _VIl,
  _vIl,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateTrunkInterfaceRequest = struct(
  n0,
  _ATIR,
  0,
  [_BII, _TII, _VIl, _GK, _CT, _DR],
  [0, 0, 1, 1, [0, 4], 2]
);
export var AssociateTrunkInterfaceResult = struct(
  n0,
  _ATIRs,
  0,
  [_IAn, _CT],
  [
    [
      () => TrunkInterfaceAssociation,
      {
        [_eQN]: `InterfaceAssociation`,
        [_xN]: _iAn,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
  ]
);
export var DescribeTrunkInterfaceAssociationsRequest = struct(
  n0,
  _DTIAR,
  0,
  [_AIsso, _DR, _Fi, _NTe, _MR],
  [
    [
      () => TrunkInterfaceAssociationIdList,
      {
        [_xN]: _AIs,
      },
    ],
    2,
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
export var DescribeTrunkInterfaceAssociationsResult = struct(
  n0,
  _DTIARe,
  0,
  [_IAnt, _NTe],
  [
    [
      () => TrunkInterfaceAssociationList,
      {
        [_eQN]: `InterfaceAssociationSet`,
        [_xN]: _iAS,
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
export var DisassociateTrunkInterfaceRequest = struct(n0, _DTIR, 0, [_AIs, _CT, _DR], [0, [0, 4], 2]);
export var DisassociateTrunkInterfaceResult = struct(
  n0,
  _DTIRi,
  0,
  [_R, _CT],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
  ]
);
export var TrunkInterfaceAssociation = struct(
  n0,
  _TIA,
  0,
  [_AIs, _BII, _TII, _IPnte, _VIl, _GK, _T],
  [
    [
      0,
      {
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
    [
      0,
      {
        [_eQN]: `BranchInterfaceId`,
        [_xN]: _bII,
      },
    ],
    [
      0,
      {
        [_eQN]: `TrunkInterfaceId`,
        [_xN]: _tII,
      },
    ],
    [
      0,
      {
        [_eQN]: `InterfaceProtocol`,
        [_xN]: _iPnte,
      },
    ],
    [
      1,
      {
        [_eQN]: `VlanId`,
        [_xN]: _vIl,
      },
    ],
    [
      1,
      {
        [_eQN]: `GreKey`,
        [_xN]: _gK,
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
export var TrunkInterfaceAssociationIdList = list(n0, _TIAIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var TrunkInterfaceAssociationList = list(n0, _TIAL, 0, [
  () => TrunkInterfaceAssociation,
  {
    [_xN]: _it,
  },
]);
export var AssociateTrunkInterface = op(
  n0,
  _ATIs,
  0,
  () => AssociateTrunkInterfaceRequest,
  () => AssociateTrunkInterfaceResult
);
export var DescribeTrunkInterfaceAssociations = op(
  n0,
  _DTIA,
  0,
  () => DescribeTrunkInterfaceAssociationsRequest,
  () => DescribeTrunkInterfaceAssociationsResult
);
export var DisassociateTrunkInterface = op(
  n0,
  _DTI,
  0,
  () => DisassociateTrunkInterfaceRequest,
  () => DisassociateTrunkInterfaceResult
);
