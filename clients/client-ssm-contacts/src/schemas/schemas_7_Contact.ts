// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _c,
  _CA,
  _CE,
  _CI,
  _CIo,
  _DC,
  _DCR,
  _DCRe,
  _DE,
  _DEe,
  _DEL,
  _DR,
  _DRI,
  _DRR,
  _DRRe,
  _e,
  _hE,
  _M,
  _PCP,
  _PCPR,
  _PCPRu,
  _Po,
  _R,
  _RI,
  _RIo,
  _RT,
  _RTe,
  _ST,
  _TZI,
  _URp,
  _URRp,
  _URRpd,
  n0,
} from "./schemas_0";
import { RecurrenceSettings } from "./schemas_3_Rotation";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _RI, _RT, _DE],
  [0, 0, 0, () => DependentEntityList],

  __ConflictException
);
export var DeleteContactRequest = struct(n0, _DCR, 0, [_CI], [0]);
export var DeleteContactResult = struct(n0, _DCRe, 0, [], []);
export var DeleteRotationRequest = struct(n0, _DRR, 0, [_RIo], [0]);
export var DeleteRotationResult = struct(n0, _DRRe, 0, [], []);
export var DependentEntity = struct(n0, _DEe, 0, [_RTe, _DRI], [0, 64 | 0]);
export var PutContactPolicyRequest = struct(n0, _PCPR, 0, [_CA, _Po], [0, 0]);
export var PutContactPolicyResult = struct(n0, _PCPRu, 0, [], []);
export var UpdateRotationRequest = struct(
  n0,
  _URRp,
  0,
  [_RIo, _CIo, _ST, _TZI, _R],
  [0, 64 | 0, 4, 0, () => RecurrenceSettings]
);
export var UpdateRotationResult = struct(n0, _URRpd, 0, [], []);
export var DependentEntityList = list(n0, _DEL, 0, () => DependentEntity);
export var DeleteContact = op(
  n0,
  _DC,
  0,
  () => DeleteContactRequest,
  () => DeleteContactResult
);
export var DeleteRotation = op(
  n0,
  _DR,
  0,
  () => DeleteRotationRequest,
  () => DeleteRotationResult
);
export var PutContactPolicy = op(
  n0,
  _PCP,
  0,
  () => PutContactPolicyRequest,
  () => PutContactPolicyResult
);
export var UpdateRotation = op(
  n0,
  _URp,
  0,
  () => UpdateRotationRequest,
  () => UpdateRotationResult
);
