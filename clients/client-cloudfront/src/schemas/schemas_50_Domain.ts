// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIc,
  _DCLo,
  _DCo,
  _DCom,
  _DCVR,
  _DI,
  _Dom,
  _DRI,
  _DTI,
  _ET,
  _h,
  _hH,
  _IM,
  _IM_,
  _LDC,
  _LDCR,
  _LDCRi,
  _Ma,
  _MI,
  _NM,
  _RI,
  _RT,
  _TRa,
  _UDA,
  _UDAR,
  _UDARp,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DistributionResourceId = struct(n0, _DRI, 0, [_DI, _DTI], [0, 0]);
export var DomainConflict = struct(n0, _DCo, 0, [_Dom, _RT, _RI, _AIc], [0, 0, 0, 0]);
export var ListDomainConflictsRequest = struct(
  n0,
  _LDCR,
  0,
  [_Dom, _DCVR, _MI, _Ma],
  [0, () => DistributionResourceId, 1, 0]
);
export var ListDomainConflictsResult = struct(n0, _LDCRi, 0, [_DCom, _NM], [[() => DomainConflictsList, 0], 0]);
export var UpdateDomainAssociationRequest = struct(
  n0,
  _UDAR,
  0,
  [_Dom, _TRa, _IM],
  [
    0,
    () => DistributionResourceId,
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var UpdateDomainAssociationResult = struct(
  n0,
  _UDARp,
  0,
  [_Dom, _RI, _ET],
  [
    0,
    0,
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var DomainConflictsList = list(n0, _DCLo, 0, [
  () => DomainConflict,
  {
    [_xN]: _DCom,
  },
]);
export var ListDomainConflicts = op(
  n0,
  _LDC,
  {
    [_h]: ["POST", "/2020-05-31/domain-conflicts", 200],
  },
  () => ListDomainConflictsRequest,
  () => ListDomainConflictsResult
);
export var UpdateDomainAssociation = op(
  n0,
  _UDA,
  {
    [_h]: ["POST", "/2020-05-31/domain-association", 200],
  },
  () => UpdateDomainAssociationRequest,
  () => UpdateDomainAssociationResult
);
