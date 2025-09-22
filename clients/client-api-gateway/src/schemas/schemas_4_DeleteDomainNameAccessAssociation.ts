// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDNAA, _DDNAAR, _dNAAA, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainNameAccessAssociationRequest = struct(n0, _DDNAAR, 0, [_dNAAA], [[0, 1]]);
export var DeleteDomainNameAccessAssociation = op(
  n0,
  _DDNAA,
  {
    [_ht]: ["DELETE", "/domainnameaccessassociations/{domainNameAccessAssociationArn}", 202],
  },
  () => DeleteDomainNameAccessAssociationRequest,
  () => Unit
);
