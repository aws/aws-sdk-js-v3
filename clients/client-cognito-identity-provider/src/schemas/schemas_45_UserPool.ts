// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACA,
  _ACAR,
  _ACARd,
  _ADT,
  _CA,
  _CALT,
  _DOA,
  _MLa,
  _MLi,
  _Mu,
  _MV,
  _MVa,
  _Na,
  _NAC,
  _NACT,
  _R,
  _SAC,
  _SACT,
  _SAT,
  _UPI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddCustomAttributesRequest = struct(n0, _ACAR, 0, [_UPI, _CA], [0, () => CustomAttributesListType]);
export var AddCustomAttributesResponse = struct(n0, _ACARd, 0, [], []);
export var NumberAttributeConstraintsType = struct(n0, _NACT, 0, [_MV, _MVa], [0, 0]);
export var SchemaAttributeType = struct(
  n0,
  _SAT,
  0,
  [_Na, _ADT, _DOA, _Mu, _R, _NAC, _SAC],
  [0, 0, 2, 2, 2, () => NumberAttributeConstraintsType, () => StringAttributeConstraintsType]
);
export var StringAttributeConstraintsType = struct(n0, _SACT, 0, [_MLi, _MLa], [0, 0]);
export var CustomAttributesListType = list(n0, _CALT, 0, () => SchemaAttributeType);
export var AddCustomAttributes = op(
  n0,
  _ACA,
  0,
  () => AddCustomAttributesRequest,
  () => AddCustomAttributesResponse
);
