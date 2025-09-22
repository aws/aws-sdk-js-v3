// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidStateException as __InvalidStateException } from "../models/index";
import {
  _Ac,
  _AES,
  _AESR,
  _Ar,
  _c,
  _CB,
  _CT,
  _DES,
  _DESe,
  _DESR,
  _DESRe,
  _DESRes,
  _Det,
  _DPES,
  _DPESe,
  _DPESR,
  _DPESRe,
  _DPESRes,
  _DT,
  _E,
  _e,
  _ECr,
  _EI,
  _EM,
  _ET,
  _FEC,
  _ISEn,
  _m,
  _N,
  _PPE,
  _PPER,
  _PPERE,
  _PPEREL,
  _PPERELu,
  _PPEREu,
  _PPERu,
  _Re,
  _S,
  _So,
  _Ti,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActivateEventSourceRequest = struct(n0, _AESR, 0, [_N], [0]);
export var DeactivateEventSourceRequest = struct(n0, _DESR, 0, [_N], [0]);
export var DeletePartnerEventSourceRequest = struct(n0, _DPESR, 0, [_N, _Ac], [0, 0]);
export var DescribeEventSourceRequest = struct(n0, _DESRe, 0, [_N], [0]);
export var DescribeEventSourceResponse = struct(n0, _DESRes, 0, [_Ar, _CB, _CT, _ET, _N, _S], [0, 0, 4, 4, 0, 0]);
export var DescribePartnerEventSourceRequest = struct(n0, _DPESRe, 0, [_N], [0]);
export var DescribePartnerEventSourceResponse = struct(n0, _DPESRes, 0, [_Ar, _N], [0, 0]);
export var InvalidStateException = error(
  n0,
  _ISEn,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidStateException
);
export var PutPartnerEventsRequest = struct(n0, _PPER, 0, [_E], [() => PutPartnerEventsRequestEntryList]);
export var PutPartnerEventsRequestEntry = struct(n0, _PPERE, 0, [_Ti, _So, _Re, _DT, _Det], [4, 0, 64 | 0, 0, 0]);
export var PutPartnerEventsResponse = struct(n0, _PPERu, 0, [_FEC, _E], [1, () => PutPartnerEventsResultEntryList]);
export var PutPartnerEventsResultEntry = struct(n0, _PPEREu, 0, [_EI, _ECr, _EM], [0, 0, 0]);
export var PutPartnerEventsRequestEntryList = list(n0, _PPEREL, 0, () => PutPartnerEventsRequestEntry);
export var PutPartnerEventsResultEntryList = list(n0, _PPERELu, 0, () => PutPartnerEventsResultEntry);
export var ActivateEventSource = op(
  n0,
  _AES,
  0,
  () => ActivateEventSourceRequest,
  () => Unit
);
export var DeactivateEventSource = op(
  n0,
  _DES,
  0,
  () => DeactivateEventSourceRequest,
  () => Unit
);
export var DeletePartnerEventSource = op(
  n0,
  _DPES,
  0,
  () => DeletePartnerEventSourceRequest,
  () => Unit
);
export var DescribeEventSource = op(
  n0,
  _DESe,
  0,
  () => DescribeEventSourceRequest,
  () => DescribeEventSourceResponse
);
export var DescribePartnerEventSource = op(
  n0,
  _DPESe,
  0,
  () => DescribePartnerEventSourceRequest,
  () => DescribePartnerEventSourceResponse
);
export var PutPartnerEvents = op(
  n0,
  _PPE,
  0,
  () => PutPartnerEventsRequest,
  () => PutPartnerEventsResponse
);
