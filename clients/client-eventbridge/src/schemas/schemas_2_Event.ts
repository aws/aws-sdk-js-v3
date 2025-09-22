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
  _CEB,
  _CEBR,
  _CEBRr,
  _CPES,
  _CPESR,
  _CPESRr,
  _CT,
  _D,
  _DES,
  _DESe,
  _DESR,
  _DESRe,
  _DESRes,
  _Det,
  _DLC,
  _DPES,
  _DPESe,
  _DPESR,
  _DPESRe,
  _DPESRes,
  _DT,
  _e,
  _EBA,
  _ECr,
  _EIv,
  _EM,
  _Ent,
  _ESA,
  _ESN,
  _ET,
  _FEC,
  _ISEn,
  _KKI,
  _L,
  _LC,
  _LPESA,
  _LPESAR,
  _LPESARi,
  _m,
  _N,
  _NT,
  _PESA,
  _PESAa,
  _PESAL,
  _PPE,
  _PPER,
  _PPERE,
  _PPEREL,
  _PPERELu,
  _PPEREu,
  _PPERu,
  _Re,
  _So,
  _St,
  _Ta,
  _Ti,
  n0,
  Unit,
} from "./schemas_0";
import { LogConfig } from "./schemas_4_Describe";
import { TagList } from "./schemas_12_Resource";
import { DeadLetterConfig } from "./schemas_13_Bus";

/* eslint no-var: 0 */

export var ActivateEventSourceRequest = struct(n0, _AESR, 0, [_N], [0]);
export var CreateEventBusRequest = struct(
  n0,
  _CEBR,
  0,
  [_N, _ESN, _D, _KKI, _DLC, _LC, _Ta],
  [0, 0, 0, 0, () => DeadLetterConfig, () => LogConfig, () => TagList]
);
export var CreateEventBusResponse = struct(
  n0,
  _CEBRr,
  0,
  [_EBA, _D, _KKI, _DLC, _LC],
  [0, 0, 0, () => DeadLetterConfig, () => LogConfig]
);
export var CreatePartnerEventSourceRequest = struct(n0, _CPESR, 0, [_N, _Ac], [0, 0]);
export var CreatePartnerEventSourceResponse = struct(n0, _CPESRr, 0, [_ESA], [0]);
export var DeactivateEventSourceRequest = struct(n0, _DESR, 0, [_N], [0]);
export var DeletePartnerEventSourceRequest = struct(n0, _DPESR, 0, [_N, _Ac], [0, 0]);
export var DescribeEventSourceRequest = struct(n0, _DESRe, 0, [_N], [0]);
export var DescribeEventSourceResponse = struct(n0, _DESRes, 0, [_Ar, _CB, _CT, _ET, _N, _St], [0, 0, 4, 4, 0, 0]);
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
export var ListPartnerEventSourceAccountsRequest = struct(n0, _LPESAR, 0, [_ESN, _NT, _L], [0, 0, 1]);
export var ListPartnerEventSourceAccountsResponse = struct(
  n0,
  _LPESARi,
  0,
  [_PESA, _NT],
  [() => PartnerEventSourceAccountList, 0]
);
export var PartnerEventSourceAccount = struct(n0, _PESAa, 0, [_Ac, _CT, _ET, _St], [0, 4, 4, 0]);
export var PutPartnerEventsRequest = struct(n0, _PPER, 0, [_Ent], [() => PutPartnerEventsRequestEntryList]);
export var PutPartnerEventsRequestEntry = struct(n0, _PPERE, 0, [_Ti, _So, _Re, _DT, _Det], [4, 0, 64 | 0, 0, 0]);
export var PutPartnerEventsResponse = struct(n0, _PPERu, 0, [_FEC, _Ent], [1, () => PutPartnerEventsResultEntryList]);
export var PutPartnerEventsResultEntry = struct(n0, _PPEREu, 0, [_EIv, _ECr, _EM], [0, 0, 0]);
export var PartnerEventSourceAccountList = list(n0, _PESAL, 0, () => PartnerEventSourceAccount);
export var PutPartnerEventsRequestEntryList = list(n0, _PPEREL, 0, () => PutPartnerEventsRequestEntry);
export var PutPartnerEventsResultEntryList = list(n0, _PPERELu, 0, () => PutPartnerEventsResultEntry);
export var ActivateEventSource = op(
  n0,
  _AES,
  0,
  () => ActivateEventSourceRequest,
  () => Unit
);
export var CreateEventBus = op(
  n0,
  _CEB,
  0,
  () => CreateEventBusRequest,
  () => CreateEventBusResponse
);
export var CreatePartnerEventSource = op(
  n0,
  _CPES,
  0,
  () => CreatePartnerEventSourceRequest,
  () => CreatePartnerEventSourceResponse
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
export var ListPartnerEventSourceAccounts = op(
  n0,
  _LPESA,
  0,
  () => ListPartnerEventSourceAccountsRequest,
  () => ListPartnerEventSourceAccountsResponse
);
export var PutPartnerEvents = op(
  n0,
  _PPE,
  0,
  () => PutPartnerEventsRequest,
  () => PutPartnerEventsResponse
);
