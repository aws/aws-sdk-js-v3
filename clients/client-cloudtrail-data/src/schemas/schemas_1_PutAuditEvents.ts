// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ChannelInsufficientPermission as __ChannelInsufficientPermission,
  ChannelNotFound as __ChannelNotFound,
  ChannelUnsupportedSchema as __ChannelUnsupportedSchema,
  DuplicatedAuditEventId as __DuplicatedAuditEventId,
  InvalidChannelARN as __InvalidChannelARN,
  UnsupportedOperationException as __UnsupportedOperationException,
} from "../models/index";
import {
  _AE,
  _aE,
  _AERE,
  _AEREu,
  _AEu,
  _c,
  _cA,
  _CIP,
  _CNF,
  _CUS,
  _DAEI,
  _e,
  _eC,
  _eD,
  _eDC,
  _eI,
  _eID,
  _eM,
  _f,
  _h,
  _hQ,
  _i,
  _ICARN,
  _m,
  _PAE,
  _PAER,
  _PAERu,
  _REE,
  _REEe,
  _s,
  _UOE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuditEvent = struct(n0, _AE, 0, [_i, _eD, _eDC], [0, 0, 0]);
export var AuditEventResultEntry = struct(n0, _AERE, 0, [_i, _eID], [0, 0]);
export var ChannelInsufficientPermission = error(
  n0,
  _CIP,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ChannelInsufficientPermission
);
export var ChannelNotFound = error(
  n0,
  _CNF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ChannelNotFound
);
export var ChannelUnsupportedSchema = error(
  n0,
  _CUS,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ChannelUnsupportedSchema
);
export var DuplicatedAuditEventId = error(
  n0,
  _DAEI,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __DuplicatedAuditEventId
);
export var InvalidChannelARN = error(
  n0,
  _ICARN,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidChannelARN
);
export var PutAuditEventsRequest = struct(
  n0,
  _PAER,
  0,
  [_aE, _cA, _eI],
  [
    () => AuditEvents,
    [
      0,
      {
        [_hQ]: _cA,
      },
    ],
    [
      0,
      {
        [_hQ]: _eI,
      },
    ],
  ]
);
export var PutAuditEventsResponse = struct(
  n0,
  _PAERu,
  0,
  [_s, _f],
  [() => AuditEventResultEntries, () => ResultErrorEntries]
);
export var ResultErrorEntry = struct(n0, _REE, 0, [_i, _eC, _eM], [0, 0, 0]);
export var UnsupportedOperationException = error(
  n0,
  _UOE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __UnsupportedOperationException
);
export var AuditEventResultEntries = list(n0, _AEREu, 0, () => AuditEventResultEntry);
export var AuditEvents = list(n0, _AEu, 0, () => AuditEvent);
export var ResultErrorEntries = list(n0, _REEe, 0, () => ResultErrorEntry);
export var PutAuditEvents = op(
  n0,
  _PAE,
  {
    [_h]: ["POST", "/PutAuditEvents", 200],
  },
  () => PutAuditEventsRequest,
  () => PutAuditEventsResponse
);
