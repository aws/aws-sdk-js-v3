// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BPM,
  _BPMEE,
  _BPMEEa,
  _BPMR,
  _BPMRa,
  _eC,
  _eM,
  _h,
  _iN,
  _M,
  _m,
  _Me,
  _mI,
  _p,
  _ti,
  _tIM,
  _TV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchPutMessageErrorEntry = struct(n0, _BPMEE, 0, [_mI, _eC, _eM], [0, 0, 0]);
export var BatchPutMessageRequest = struct(n0, _BPMR, 0, [_m], [() => Messages]);
export var BatchPutMessageResponse = struct(n0, _BPMRa, 0, [_BPMEEa], [() => BatchPutMessageErrorEntries]);
export var Message = struct(n0, _M, 0, [_mI, _iN, _p, _ti], [0, 0, 21, () => TimestampValue]);
export var TimestampValue = struct(n0, _TV, 0, [_tIM], [1]);
export var Unit = "unit" as const;

export var BatchPutMessageErrorEntries = list(n0, _BPMEEa, 0, () => BatchPutMessageErrorEntry);
export var Messages = list(n0, _Me, 0, () => Message);
export var BatchPutMessage = op(
  n0,
  _BPM,
  {
    [_h]: ["POST", "/inputs/messages", 200],
  },
  () => BatchPutMessageRequest,
  () => BatchPutMessageResponse
);
