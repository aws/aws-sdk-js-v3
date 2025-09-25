// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CTr, _GPA, _GPAR, _GPARe, _h, _I, _MT, _N, _OI, _PA, _PAI, _PI, _RI, _S, _SM, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetProfileAssociationRequest = struct(n0, _GPAR, 0, [_PAI], [[0, 1]]);
export var GetProfileAssociationResponse = struct(n0, _GPARe, 0, [_PA], [() => ProfileAssociation]);
export var ProfileAssociation = struct(
  n0,
  _PA,
  0,
  [_I, _N, _OI, _PI, _RI, _S, _SM, _CTr, _MT],
  [0, 0, 0, 0, 0, 0, 0, 4, 4]
);
export var GetProfileAssociation = op(
  n0,
  _GPA,
  {
    [_h]: ["GET", "/profileassociation/{ProfileAssociationId}", 200],
  },
  () => GetProfileAssociationRequest,
  () => GetProfileAssociationResponse
);
