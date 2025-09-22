// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AIIP,
  _AIIPR,
  _AIIPRs,
  _AIs,
  _Ar,
  _ar,
  _eQN,
  _II,
  _IIP,
  _IIPA,
  _iIPA,
  _IIPS,
  _N,
  _n,
  _RIIPA,
  _RIIPAR,
  _RIIPARe,
  _xN,
  n0,
} from "./schemas_0";
import { IamInstanceProfileAssociation } from "./schemas_196_Instance";

/* eslint no-var: 0 */

export var AssociateIamInstanceProfileRequest = struct(
  n0,
  _AIIPR,
  0,
  [_IIP, _II],
  [[() => IamInstanceProfileSpecification, 0], 0]
);
export var AssociateIamInstanceProfileResult = struct(
  n0,
  _AIIPRs,
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
export var IamInstanceProfileSpecification = struct(
  n0,
  _IIPS,
  0,
  [_Ar, _N],
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
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
  ]
);
export var ReplaceIamInstanceProfileAssociationRequest = struct(
  n0,
  _RIIPAR,
  0,
  [_IIP, _AIs],
  [[() => IamInstanceProfileSpecification, 0], 0]
);
export var ReplaceIamInstanceProfileAssociationResult = struct(
  n0,
  _RIIPARe,
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
export var AssociateIamInstanceProfile = op(
  n0,
  _AIIP,
  0,
  () => AssociateIamInstanceProfileRequest,
  () => AssociateIamInstanceProfileResult
);
export var ReplaceIamInstanceProfileAssociation = op(
  n0,
  _RIIPA,
  0,
  () => ReplaceIamInstanceProfileAssociationRequest,
  () => ReplaceIamInstanceProfileAssociationResult
);
