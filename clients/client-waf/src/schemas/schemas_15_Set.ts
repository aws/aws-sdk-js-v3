// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CO,
  _CSCS,
  _CSCSR,
  _CSCSRr,
  _CT,
  _FTM,
  _GSCS,
  _GSCSR,
  _GSCSRe,
  _N,
  _S,
  _SC,
  _SCi,
  _SCS,
  _SCSI,
  _SCSU,
  _SCSUi,
  _TT,
  _U,
  _USCS,
  _USCSR,
  _USCSRp,
  FieldToMatch,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSizeConstraintSetRequest = struct(n0, _CSCSR, 0, [_N, _CT], [0, 0]);
export var CreateSizeConstraintSetResponse = struct(n0, _CSCSRr, 0, [_SCS, _CT], [() => SizeConstraintSet, 0]);
export var GetSizeConstraintSetRequest = struct(n0, _GSCSR, 0, [_SCSI], [0]);
export var GetSizeConstraintSetResponse = struct(n0, _GSCSRe, 0, [_SCS], [() => SizeConstraintSet]);
export var SizeConstraint = struct(n0, _SC, 0, [_FTM, _TT, _CO, _S], [() => FieldToMatch, 0, 0, 1]);
export var SizeConstraintSet = struct(n0, _SCS, 0, [_SCSI, _N, _SCi], [0, 0, () => SizeConstraints]);
export var SizeConstraintSetUpdate = struct(n0, _SCSU, 0, [_A, _SC], [0, () => SizeConstraint]);
export var UpdateSizeConstraintSetRequest = struct(
  n0,
  _USCSR,
  0,
  [_SCSI, _CT, _U],
  [0, 0, () => SizeConstraintSetUpdates]
);
export var UpdateSizeConstraintSetResponse = struct(n0, _USCSRp, 0, [_CT], [0]);
export var SizeConstraints = list(n0, _SCi, 0, () => SizeConstraint);
export var SizeConstraintSetUpdates = list(n0, _SCSUi, 0, () => SizeConstraintSetUpdate);
export var CreateSizeConstraintSet = op(
  n0,
  _CSCS,
  0,
  () => CreateSizeConstraintSetRequest,
  () => CreateSizeConstraintSetResponse
);
export var GetSizeConstraintSet = op(
  n0,
  _GSCS,
  0,
  () => GetSizeConstraintSetRequest,
  () => GetSizeConstraintSetResponse
);
export var UpdateSizeConstraintSet = op(
  n0,
  _USCS,
  0,
  () => UpdateSizeConstraintSetRequest,
  () => UpdateSizeConstraintSetResponse
);
