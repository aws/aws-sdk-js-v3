// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dNA, _dNAAA, _hQ, _ht, _RDNAA, _RDNAAR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var RejectDomainNameAccessAssociationRequest = struct(
  n0,
  _RDNAAR,
  0,
  [_dNAAA, _dNA],
  [
    [
      0,
      {
        [_hQ]: _dNAAA,
      },
    ],
    [
      0,
      {
        [_hQ]: _dNA,
      },
    ],
  ]
);
export var RejectDomainNameAccessAssociation = op(
  n0,
  _RDNAA,
  {
    [_ht]: ["POST", "/rejectdomainnameaccessassociations", 202],
  },
  () => RejectDomainNameAccessAssociationRequest,
  () => Unit
);
