// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AD,
  _CA,
  _CAa,
  _CAap,
  _CAC,
  _CAL,
  _CCR,
  _CCRI,
  _CCRIr,
  _CCRO,
  _CCROr,
  _CCRr,
  _CRa,
  _CRap,
  _CRL,
  _CRN,
  _CT,
  _DCR,
  _DCRI,
  _DCRO,
  _GCAC,
  _GCACI,
  _GCACO,
  _GCR,
  _GCRI,
  _GCRO,
  _LA,
  _LCR,
  _LCRI,
  _LCRO,
  _LSAT,
  _MR,
  _N,
  _NT,
  _PCAC,
  _PCACI,
  _PCACO,
  _RCT,
  _RTe,
  _SM,
  _St,
  _Ta,
  _TD,
  _UCR,
  _UCRI,
  _UCRO,
  _WGN,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_12_Create";

/* eslint no-var: 0 */

export var CancelCapacityReservationInput = struct(n0, _CCRI, 0, [_N], [0]);
export var CancelCapacityReservationOutput = struct(n0, _CCRO, 0, [], []);
export var CapacityAllocation = struct(n0, _CA, 0, [_St, _SM, _RTe, _RCT], [0, 0, 4, 4]);
export var CapacityAssignment = struct(n0, _CAa, 0, [_WGN], [64 | 0]);
export var CapacityAssignmentConfiguration = struct(n0, _CAC, 0, [_CRN, _CAap], [0, () => CapacityAssignmentsList]);
export var CapacityReservation = struct(
  n0,
  _CRa,
  0,
  [_N, _St, _TD, _AD, _LA, _LSAT, _CT],
  [0, 0, 1, 1, () => CapacityAllocation, 4, 4]
);
export var CreateCapacityReservationInput = struct(n0, _CCRIr, 0, [_TD, _N, _Ta], [1, 0, () => TagList]);
export var CreateCapacityReservationOutput = struct(n0, _CCROr, 0, [], []);
export var DeleteCapacityReservationInput = struct(n0, _DCRI, 0, [_N], [0]);
export var DeleteCapacityReservationOutput = struct(n0, _DCRO, 0, [], []);
export var GetCapacityAssignmentConfigurationInput = struct(n0, _GCACI, 0, [_CRN], [0]);
export var GetCapacityAssignmentConfigurationOutput = struct(
  n0,
  _GCACO,
  0,
  [_CAC],
  [() => CapacityAssignmentConfiguration]
);
export var GetCapacityReservationInput = struct(n0, _GCRI, 0, [_N], [0]);
export var GetCapacityReservationOutput = struct(n0, _GCRO, 0, [_CRa], [() => CapacityReservation]);
export var ListCapacityReservationsInput = struct(n0, _LCRI, 0, [_NT, _MR], [0, 1]);
export var ListCapacityReservationsOutput = struct(n0, _LCRO, 0, [_NT, _CRap], [0, () => CapacityReservationsList]);
export var PutCapacityAssignmentConfigurationInput = struct(
  n0,
  _PCACI,
  0,
  [_CRN, _CAap],
  [0, () => CapacityAssignmentsList]
);
export var PutCapacityAssignmentConfigurationOutput = struct(n0, _PCACO, 0, [], []);
export var UpdateCapacityReservationInput = struct(n0, _UCRI, 0, [_TD, _N], [1, 0]);
export var UpdateCapacityReservationOutput = struct(n0, _UCRO, 0, [], []);
export var CapacityAssignmentsList = list(n0, _CAL, 0, () => CapacityAssignment);
export var CapacityReservationsList = list(n0, _CRL, 0, () => CapacityReservation);
export var WorkGroupNamesList = 64 | 0;

export var CancelCapacityReservation = op(
  n0,
  _CCR,
  2,
  () => CancelCapacityReservationInput,
  () => CancelCapacityReservationOutput
);
export var CreateCapacityReservation = op(
  n0,
  _CCRr,
  2,
  () => CreateCapacityReservationInput,
  () => CreateCapacityReservationOutput
);
export var DeleteCapacityReservation = op(
  n0,
  _DCR,
  2,
  () => DeleteCapacityReservationInput,
  () => DeleteCapacityReservationOutput
);
export var GetCapacityAssignmentConfiguration = op(
  n0,
  _GCAC,
  0,
  () => GetCapacityAssignmentConfigurationInput,
  () => GetCapacityAssignmentConfigurationOutput
);
export var GetCapacityReservation = op(
  n0,
  _GCR,
  0,
  () => GetCapacityReservationInput,
  () => GetCapacityReservationOutput
);
export var ListCapacityReservations = op(
  n0,
  _LCR,
  0,
  () => ListCapacityReservationsInput,
  () => ListCapacityReservationsOutput
);
export var PutCapacityAssignmentConfiguration = op(
  n0,
  _PCAC,
  2,
  () => PutCapacityAssignmentConfigurationInput,
  () => PutCapacityAssignmentConfigurationOutput
);
export var UpdateCapacityReservation = op(
  n0,
  _UCR,
  0,
  () => UpdateCapacityReservationInput,
  () => UpdateCapacityReservationOutput
);
