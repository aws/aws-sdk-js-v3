// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { AccessDeniedException as __AccessDeniedException } from "../models/index";
import {
  _a,
  _ADE,
  _BIS,
  _BISL,
  _c,
  _det,
  _e,
  _GBI,
  _GBIR,
  _GBIRe,
  _GM,
  _GMR,
  _GMRe,
  _h,
  _hE,
  _m,
  _MA,
  _MAi,
  _mI,
  _mSi,
  _mSig,
  _mT,
  _n,
  _rURL,
  _si,
  _sL,
  _sl,
  _SM,
  _SMR,
  _SMRt,
  _t,
  _vBI,
  _vBL,
  _vBN,
  _vBNo,
  _vBR,
  _vBV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var BuiltinIntentSlot = struct(n0, _BIS, 0, [_n], [0]);
export var GetBuiltinIntentRequest = struct(n0, _GBIR, 0, [_si], [[0, 1]]);
export var GetBuiltinIntentResponse = struct(n0, _GBIRe, 0, [_si, _sL, _sl], [0, 64 | 0, () => BuiltinIntentSlotList]);
export var GetMigrationRequest = struct(n0, _GMR, 0, [_mI], [[0, 1]]);
export var GetMigrationResponse = struct(
  n0,
  _GMRe,
  0,
  [_mI, _vBN, _vBV, _vBL, _vBI, _vBR, _mSi, _mSig, _mT, _a],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, () => MigrationAlerts]
);
export var MigrationAlert = struct(n0, _MA, 0, [_t, _m, _det, _rURL], [0, 0, 64 | 0, 64 | 0]);
export var StartMigrationRequest = struct(n0, _SMR, 0, [_vBN, _vBV, _vBNo, _vBR, _mSig], [0, 0, 0, 0, 0]);
export var StartMigrationResponse = struct(
  n0,
  _SMRt,
  0,
  [_vBN, _vBV, _vBL, _vBI, _vBR, _mI, _mSig, _mT],
  [0, 0, 0, 0, 0, 0, 0, 4]
);
export var BuiltinIntentSlotList = list(n0, _BISL, 0, () => BuiltinIntentSlot);
export var LocaleList = 64 | 0;

export var MigrationAlertDetails = 64 | 0;

export var MigrationAlertReferenceURLs = 64 | 0;

export var MigrationAlerts = list(n0, _MAi, 0, () => MigrationAlert);
export var GetBuiltinIntent = op(
  n0,
  _GBI,
  {
    [_h]: ["GET", "/builtins/intents/{signature}", 200],
  },
  () => GetBuiltinIntentRequest,
  () => GetBuiltinIntentResponse
);
export var GetMigration = op(
  n0,
  _GM,
  {
    [_h]: ["GET", "/migrations/{migrationId}", 200],
  },
  () => GetMigrationRequest,
  () => GetMigrationResponse
);
export var StartMigration = op(
  n0,
  _SM,
  {
    [_h]: ["POST", "/migrations", 202],
  },
  () => StartMigrationRequest,
  () => StartMigrationResponse
);
