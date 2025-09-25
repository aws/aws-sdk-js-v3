// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACSL,
  _ACSs,
  _C,
  _CA,
  _CI,
  _cI,
  _CSL,
  _DT,
  _h,
  _hQ,
  _ICI,
  _II,
  _IM,
  _IT,
  _LAC,
  _LACR,
  _LACRi,
  _mR,
  _MRa,
  _NT,
  _nT,
  _PCI,
  _RCI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociatedContactSummary = struct(
  n0,
  _ACSs,
  0,
  [_CI, _CA, _IT, _DT, _ICI, _PCI, _RCI, _IM, _C],
  [0, 0, 4, 4, 0, 0, 0, 0, 0]
);
export var ListAssociatedContactsRequest = struct(
  n0,
  _LACR,
  0,
  [_II, _CI, _MRa, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cI,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListAssociatedContactsResponse = struct(n0, _LACRi, 0, [_CSL, _NT], [() => AssociatedContactSummaryList, 0]);
export var AssociatedContactSummaryList = list(n0, _ACSL, 0, () => AssociatedContactSummary);
export var ListAssociatedContacts = op(
  n0,
  _LAC,
  {
    [_h]: ["GET", "/contact/associated/{InstanceId}", 200],
  },
  () => ListAssociatedContactsRequest,
  () => ListAssociatedContactsResponse
);
