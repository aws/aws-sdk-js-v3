const _AE = "AuditEvent";
const _AERE = "AuditEventResultEntry";
const _AEREu = "AuditEventResultEntries";
const _AEu = "AuditEvents";
const _CIP = "ChannelInsufficientPermission";
const _CNF = "ChannelNotFound";
const _CUS = "ChannelUnsupportedSchema";
const _DAEI = "DuplicatedAuditEventId";
const _ICARN = "InvalidChannelARN";
const _PAE = "PutAuditEvents";
const _PAER = "PutAuditEventsRequest";
const _PAERu = "PutAuditEventsResponse";
const _REE = "ResultErrorEntry";
const _REEe = "ResultErrorEntries";
const _UOE = "UnsupportedOperationException";
const _aE = "auditEvents";
const _c = "client";
const _cA = "channelArn";
const _e = "error";
const _eC = "errorCode";
const _eD = "eventData";
const _eDC = "eventDataChecksum";
const _eI = "externalId";
const _eID = "eventID";
const _eM = "errorMessage";
const _f = "failed";
const _h = "http";
const _hQ = "httpQuery";
const _i = "id";
const _m = "message";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.cloudtraildata";
const _su = "successful";
const n0 = "com.amazonaws.cloudtraildata";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { CloudTrailDataServiceException } from "../models/CloudTrailDataServiceException";
import {
  ChannelInsufficientPermission,
  ChannelNotFound,
  ChannelUnsupportedSchema,
  DuplicatedAuditEventId,
  InvalidChannelARN,
  UnsupportedOperationException,
} from "../models/errors";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var CloudTrailDataServiceException$: StaticErrorSchema = [-3, _s, "CloudTrailDataServiceException", 0, [], []];
_s_registry.registerError(CloudTrailDataServiceException$, CloudTrailDataServiceException);
const n0_registry = TypeRegistry.for(n0);
export var ChannelInsufficientPermission$: StaticErrorSchema = [-3, n0, _CIP,
  { [_e]: _c },
  [_m],
  [0]
];
n0_registry.registerError(ChannelInsufficientPermission$, ChannelInsufficientPermission);
export var ChannelNotFound$: StaticErrorSchema = [-3, n0, _CNF,
  { [_e]: _c },
  [_m],
  [0]
];
n0_registry.registerError(ChannelNotFound$, ChannelNotFound);
export var ChannelUnsupportedSchema$: StaticErrorSchema = [-3, n0, _CUS,
  { [_e]: _c },
  [_m],
  [0]
];
n0_registry.registerError(ChannelUnsupportedSchema$, ChannelUnsupportedSchema);
export var DuplicatedAuditEventId$: StaticErrorSchema = [-3, n0, _DAEI,
  { [_e]: _c },
  [_m],
  [0]
];
n0_registry.registerError(DuplicatedAuditEventId$, DuplicatedAuditEventId);
export var InvalidChannelARN$: StaticErrorSchema = [-3, n0, _ICARN,
  { [_e]: _c },
  [_m],
  [0]
];
n0_registry.registerError(InvalidChannelARN$, InvalidChannelARN);
export var UnsupportedOperationException$: StaticErrorSchema = [-3, n0, _UOE,
  { [_e]: _c },
  [_m],
  [0]
];
n0_registry.registerError(UnsupportedOperationException$, UnsupportedOperationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var AuditEvent$: StaticStructureSchema = [3, n0, _AE,
  0,
  [_i, _eD, _eDC],
  [0, 0, 0], 2
];
export var AuditEventResultEntry$: StaticStructureSchema = [3, n0, _AERE,
  0,
  [_i, _eID],
  [0, 0], 2
];
export var PutAuditEventsRequest$: StaticStructureSchema = [3, n0, _PAER,
  0,
  [_aE, _cA, _eI],
  [() => AuditEvents, [0, { [_hQ]: _cA }], [0, { [_hQ]: _eI }]], 2
];
export var PutAuditEventsResponse$: StaticStructureSchema = [3, n0, _PAERu,
  0,
  [_su, _f],
  [() => AuditEventResultEntries, () => ResultErrorEntries], 2
];
export var ResultErrorEntry$: StaticStructureSchema = [3, n0, _REE,
  0,
  [_i, _eC, _eM],
  [0, 0, 0], 3
];
var AuditEventResultEntries: StaticListSchema = [1, n0, _AEREu,
  0, () => AuditEventResultEntry$
];
var AuditEvents: StaticListSchema = [1, n0, _AEu,
  0, () => AuditEvent$
];
var ResultErrorEntries: StaticListSchema = [1, n0, _REEe,
  0, () => ResultErrorEntry$
];
export var PutAuditEvents$: StaticOperationSchema = [9, n0, _PAE,
  { [_h]: ["POST", "/PutAuditEvents", 200] }, () => PutAuditEventsRequest$, () => PutAuditEventsResponse$
];
