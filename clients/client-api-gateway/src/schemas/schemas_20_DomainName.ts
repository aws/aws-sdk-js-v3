// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aAS,
  _aAST,
  _CDNAA,
  _CDNAAR,
  _dNA,
  _DNAA,
  _dNAAA,
  _DNAAo,
  _GDNAA,
  _GDNAAR,
  _hQ,
  _ht,
  _it,
  _ite,
  _jN,
  _li,
  _LODNAA,
  _p,
  _rO,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDomainNameAccessAssociationRequest = struct(
  n0,
  _CDNAAR,
  0,
  [_dNA, _aAST, _aAS, _t],
  [0, 0, 0, 128 | 0]
);
export var DomainNameAccessAssociation = struct(n0, _DNAA, 0, [_dNAAA, _dNA, _aAST, _aAS, _t], [0, 0, 0, 0, 128 | 0]);
export var DomainNameAccessAssociations = struct(
  n0,
  _DNAAo,
  0,
  [_it, _p],
  [
    [
      () => ListOfDomainNameAccessAssociation,
      {
        [_jN]: _ite,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
  ]
);
export var GetDomainNameAccessAssociationsRequest = struct(
  n0,
  _GDNAAR,
  0,
  [_p, _li, _rO],
  [
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
    [
      0,
      {
        [_hQ]: _rO,
      },
    ],
  ]
);
export var ListOfDomainNameAccessAssociation = list(n0, _LODNAA, 0, () => DomainNameAccessAssociation);
export var CreateDomainNameAccessAssociation = op(
  n0,
  _CDNAA,
  {
    [_ht]: ["POST", "/domainnameaccessassociations", 201],
  },
  () => CreateDomainNameAccessAssociationRequest,
  () => DomainNameAccessAssociation
);
export var GetDomainNameAccessAssociations = op(
  n0,
  _GDNAA,
  {
    [_ht]: ["GET", "/domainnameaccessassociations", 200],
  },
  () => GetDomainNameAccessAssociationsRequest,
  () => DomainNameAccessAssociations
);
