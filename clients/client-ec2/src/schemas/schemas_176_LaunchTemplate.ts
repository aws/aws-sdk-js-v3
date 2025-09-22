// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CRI,
  _CRP,
  _CRRGA,
  _CRSa,
  _CRT,
  _DR,
  _eQN,
  _II,
  _MICRA,
  _MICRAR,
  _MICRARo,
  _R,
  _r,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CapacityReservationSpecification = struct(n0, _CRSa, 0, [_CRP, _CRT], [0, () => CapacityReservationTarget]);
export var CapacityReservationTarget = struct(n0, _CRT, 0, [_CRI, _CRRGA], [0, 0]);
export var ModifyInstanceCapacityReservationAttributesRequest = struct(
  n0,
  _MICRAR,
  0,
  [_II, _CRSa, _DR],
  [0, () => CapacityReservationSpecification, 2]
);
export var ModifyInstanceCapacityReservationAttributesResult = struct(
  n0,
  _MICRARo,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var ModifyInstanceCapacityReservationAttributes = op(
  n0,
  _MICRA,
  0,
  () => ModifyInstanceCapacityReservationAttributesRequest,
  () => ModifyInstanceCapacityReservationAttributesResult
);
