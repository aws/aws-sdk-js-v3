// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAO, _AAOR, _CT, _cT, _DAO, _DAOR, _h, _hQ, _II, _iT, _O, _o, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateApprovedOriginRequest = struct(n0, _AAOR, 0, [_II, _O, _CT], [[0, 1], 0, [0, 4]]);
export var DisassociateApprovedOriginRequest = struct(
  n0,
  _DAOR,
  0,
  [_II, _O, _CT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _o,
      },
    ],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var AssociateApprovedOrigin = op(
  n0,
  _AAO,
  {
    [_h]: ["PUT", "/instance/{InstanceId}/approved-origin", 200],
  },
  () => AssociateApprovedOriginRequest,
  () => Unit
);
export var DisassociateApprovedOrigin = op(
  n0,
  _DAO,
  {
    [_h]: ["DELETE", "/instance/{InstanceId}/approved-origin", 200],
  },
  () => DisassociateApprovedOriginRequest,
  () => Unit
);
