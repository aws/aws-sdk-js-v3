// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CFI,
  _h,
  _II,
  _PCh,
  _PN,
  _PNQCC,
  _QCC,
  _QCIu,
  _QCTu,
  _QCue,
  _QI,
  _QQCC,
  _UC,
  _UI,
  _UQCC,
  _UQCCp,
  _UQCCR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PhoneNumberQuickConnectConfig = struct(n0, _PNQCC, 0, [_PN], [0]);
export var QueueQuickConnectConfig = struct(n0, _QQCC, 0, [_QI, _CFI], [0, 0]);
export var QuickConnectConfig = struct(
  n0,
  _QCC,
  0,
  [_QCTu, _UC, _QCue, _PCh],
  [0, () => UserQuickConnectConfig, () => QueueQuickConnectConfig, () => PhoneNumberQuickConnectConfig]
);
export var UpdateQuickConnectConfigRequest = struct(
  n0,
  _UQCCR,
  0,
  [_II, _QCIu, _QCC],
  [[0, 1], [0, 1], () => QuickConnectConfig]
);
export var UserQuickConnectConfig = struct(n0, _UQCC, 0, [_UI, _CFI], [0, 0]);
export var UpdateQuickConnectConfig = op(
  n0,
  _UQCCp,
  {
    [_h]: ["POST", "/quick-connects/{InstanceId}/{QuickConnectId}/config", 200],
  },
  () => UpdateQuickConnectConfigRequest,
  () => Unit
);
