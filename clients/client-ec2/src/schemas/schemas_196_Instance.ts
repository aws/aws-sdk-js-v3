// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AILs,
  _AIs,
  _aIs,
  _AIsso,
  _Ar,
  _ar,
  _DIIP,
  _DIIPA,
  _DIIPAR,
  _DIIPARe,
  _DIIPR,
  _DIIPRi,
  _eQN,
  _Fi,
  _Fil,
  _I,
  _i,
  _II,
  _iI,
  _IIP,
  _iIP,
  _IIPA,
  _iIPA,
  _IIPAa,
  _IIPAS,
  _iIPAS,
  _it,
  _MR,
  _NTe,
  _nTe,
  _St,
  _st,
  _Ti,
  _ti,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeIamInstanceProfileAssociationsRequest = struct(
  n0,
  _DIIPAR,
  0,
  [_AIsso, _Fi, _MR, _NTe],
  [
    [
      () => AssociationIdList,
      {
        [_xN]: _AIs,
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
  ]
);
export var DescribeIamInstanceProfileAssociationsResult = struct(
  n0,
  _DIIPARe,
  0,
  [_IIPAa, _NTe],
  [
    [
      () => IamInstanceProfileAssociationSet,
      {
        [_eQN]: `IamInstanceProfileAssociationSet`,
        [_xN]: _iIPAS,
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
export var DisassociateIamInstanceProfileRequest = struct(n0, _DIIPR, 0, [_AIs], [0]);
export var DisassociateIamInstanceProfileResult = struct(
  n0,
  _DIIPRi,
  0,
  [_IIPA],
  [
    [
      () => IamInstanceProfileAssociation,
      {
        [_eQN]: `IamInstanceProfileAssociation`,
        [_xN]: _iIPA,
      },
    ],
  ]
);
export var IamInstanceProfile = struct(
  n0,
  _IIP,
  0,
  [_Ar, _I],
  [
    [
      0,
      {
        [_eQN]: `Arn`,
        [_xN]: _ar,
      },
    ],
    [
      0,
      {
        [_eQN]: `Id`,
        [_xN]: _i,
      },
    ],
  ]
);
export var IamInstanceProfileAssociation = struct(
  n0,
  _IIPA,
  0,
  [_AIs, _II, _IIP, _St, _Ti],
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
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      () => IamInstanceProfile,
      {
        [_eQN]: `IamInstanceProfile`,
        [_xN]: _iIP,
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
      4,
      {
        [_eQN]: `Timestamp`,
        [_xN]: _ti,
      },
    ],
  ]
);
export var AssociationIdList = list(n0, _AILs, 0, [
  0,
  {
    [_xN]: _AIs,
  },
]);
export var IamInstanceProfileAssociationSet = list(n0, _IIPAS, 0, [
  () => IamInstanceProfileAssociation,
  {
    [_xN]: _it,
  },
]);
export var DescribeIamInstanceProfileAssociations = op(
  n0,
  _DIIPA,
  0,
  () => DescribeIamInstanceProfileAssociationsRequest,
  () => DescribeIamInstanceProfileAssociationsResult
);
export var DisassociateIamInstanceProfile = op(
  n0,
  _DIIP,
  0,
  () => DisassociateIamInstanceProfileRequest,
  () => DisassociateIamInstanceProfileResult
);
