const _A = "Action";
const _AI = "ActionId";
const _AIL = "ActionInteractionsList";
const _AIc = "ActionInteraction";
const _AIct = "ActionImpression";
const _AL = "ActionList";
const _E = "Event";
const _EL = "EventList";
const _I = "Item";
const _II = "ItemId";
const _IIE = "InvalidInputException";
const _IL = "ItemList";
const _Im = "Impression";
const _MA = "MetricAttribution";
const _PA = "PutActions";
const _PAI = "PutActionInteractions";
const _PAIR = "PutActionInteractionsRequest";
const _PAR = "PutActionsRequest";
const _PE = "PutEvents";
const _PER = "PutEventsRequest";
const _PI = "PutItems";
const _PIR = "PutItemsRequest";
const _PU = "PutUsers";
const _PUR = "PutUsersRequest";
const _RIUE = "ResourceInUseException";
const _RNFE = "ResourceNotFoundException";
const _SJAIP = "SynthesizedJsonActionInteractionProperties";
const _SJAP = "SynthesizedJsonActionProperties";
const _SJEPJSON = "SynthesizedJsonEventPropertiesJSON";
const _SJIP = "SynthesizedJsonItemProperties";
const _SJUP = "SynthesizedJsonUserProperties";
const _U = "User";
const _UI = "UserId";
const _UL = "UserList";
const _a = "application/json";
const _aI = "actionId";
const _aIc = "actionInteractions";
const _ac = "actions";
const _c = "client";
const _dA = "datasetArn";
const _e = "error";
const _eAS = "eventAttributionSource";
const _eI = "eventId";
const _eL = "eventList";
const _eT = "eventType";
const _eV = "eventValue";
const _h = "http";
const _hE = "httpError";
const _i = "impression";
const _iI = "itemId";
const _it = "items";
const _m = "message";
const _mA = "metricAttribution";
const _mT = "mediaType";
const _p = "properties";
const _rI = "recommendationId";
const _s = "sensitive";
const _sA = "sentAt";
const _sI = "sessionId";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.personalizeevents";
const _t = "timestamp";
const _tI = "trackingId";
const _u = "users";
const _uI = "userId";
const n0 = "com.amazonaws.personalizeevents";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { InvalidInputException, ResourceInUseException, ResourceNotFoundException } from "../models/errors";
import { PersonalizeEventsServiceException } from "../models/PersonalizeEventsServiceException";

/* eslint no-var: 0 */
var ActionId: StaticSimpleSchema = [0, n0, _AI, 8, 0];
var ItemId: StaticSimpleSchema = [0, n0, _II, 8, 0];
var SynthesizedJsonActionInteractionProperties: StaticSimpleSchema = [0, n0, _SJAIP, { [_mT]: _a, [_s]: 1 }, 0];
var SynthesizedJsonActionProperties: StaticSimpleSchema = [0, n0, _SJAP, { [_mT]: _a, [_s]: 1 }, 0];
var SynthesizedJsonEventPropertiesJSON: StaticSimpleSchema = [0, n0, _SJEPJSON, { [_mT]: _a, [_s]: 1 }, 0];
var SynthesizedJsonItemProperties: StaticSimpleSchema = [0, n0, _SJIP, { [_mT]: _a, [_s]: 1 }, 0];
var SynthesizedJsonUserProperties: StaticSimpleSchema = [0, n0, _SJUP, { [_mT]: _a, [_s]: 1 }, 0];
var UserId: StaticSimpleSchema = [0, n0, _UI, 8, 0];
export var Action$: StaticStructureSchema = [3, n0, _A, 0, [_aI, _p], [0, [() => SynthesizedJsonActionProperties, 0]]];
export var ActionInteraction$: StaticStructureSchema = [
  3,
  n0,
  _AIc,
  0,
  [_aI, _uI, _sI, _t, _eT, _eI, _rI, _i, _p],
  [
    [() => ActionId, 0],
    [() => UserId, 0],
    0,
    4,
    0,
    0,
    0,
    [() => ActionImpression, 0],
    [() => SynthesizedJsonActionInteractionProperties, 0],
  ],
];
export var Event$: StaticStructureSchema = [
  3,
  n0,
  _E,
  8,
  [_eI, _eT, _eV, _iI, _p, _sA, _rI, _i, _mA],
  [
    0,
    0,
    1,
    [() => ItemId, 0],
    [() => SynthesizedJsonEventPropertiesJSON, 0],
    4,
    0,
    [() => Impression, 0],
    () => MetricAttribution$,
  ],
];
export var InvalidInputException$: StaticErrorSchema = [-3, n0, _IIE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
TypeRegistry.for(n0).registerError(InvalidInputException$, InvalidInputException);
export var Item$: StaticStructureSchema = [3, n0, _I, 0, [_iI, _p], [0, [() => SynthesizedJsonItemProperties, 0]]];
export var MetricAttribution$: StaticStructureSchema = [3, n0, _MA, 0, [_eAS], [0]];
export var PutActionInteractionsRequest$: StaticStructureSchema = [
  3,
  n0,
  _PAIR,
  0,
  [_tI, _aIc],
  [0, [() => ActionInteractionsList, 0]],
];
export var PutActionsRequest$: StaticStructureSchema = [3, n0, _PAR, 0, [_dA, _ac], [0, [() => ActionList, 0]]];
export var PutEventsRequest$: StaticStructureSchema = [
  3,
  n0,
  _PER,
  0,
  [_tI, _uI, _sI, _eL],
  [0, [() => UserId, 0], 0, [() => EventList, 0]],
];
export var PutItemsRequest$: StaticStructureSchema = [3, n0, _PIR, 0, [_dA, _it], [0, [() => ItemList, 0]]];
export var PutUsersRequest$: StaticStructureSchema = [3, n0, _PUR, 0, [_dA, _u], [0, [() => UserList, 0]]];
export var ResourceInUseException$: StaticErrorSchema = [-3, n0, _RIUE, { [_e]: _c, [_hE]: 409 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ResourceInUseException$, ResourceInUseException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var User$: StaticStructureSchema = [3, n0, _U, 0, [_uI, _p], [0, [() => SynthesizedJsonUserProperties, 0]]];
var __Unit = "unit" as const;
export var PersonalizeEventsServiceException$: StaticErrorSchema = [
  -3,
  _sm,
  "PersonalizeEventsServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(PersonalizeEventsServiceException$, PersonalizeEventsServiceException);
var ActionImpression: StaticListSchema = [1, n0, _AIct, 0, [() => ActionId, 0]];
var ActionInteractionsList: StaticListSchema = [1, n0, _AIL, 0, [() => ActionInteraction$, 0]];
var ActionList: StaticListSchema = [1, n0, _AL, 0, [() => Action$, 0]];
var EventList: StaticListSchema = [1, n0, _EL, 0, [() => Event$, 0]];
var Impression: StaticListSchema = [1, n0, _Im, 0, [() => ItemId, 0]];
var ItemList: StaticListSchema = [1, n0, _IL, 0, [() => Item$, 0]];
var UserList: StaticListSchema = [1, n0, _UL, 0, [() => User$, 0]];
export var PutActionInteractions$: StaticOperationSchema = [
  9,
  n0,
  _PAI,
  { [_h]: ["POST", "/action-interactions", 200] },
  () => PutActionInteractionsRequest$,
  () => __Unit,
];
export var PutActions$: StaticOperationSchema = [
  9,
  n0,
  _PA,
  { [_h]: ["POST", "/actions", 200] },
  () => PutActionsRequest$,
  () => __Unit,
];
export var PutEvents$: StaticOperationSchema = [
  9,
  n0,
  _PE,
  { [_h]: ["POST", "/events", 200] },
  () => PutEventsRequest$,
  () => __Unit,
];
export var PutItems$: StaticOperationSchema = [
  9,
  n0,
  _PI,
  { [_h]: ["POST", "/items", 200] },
  () => PutItemsRequest$,
  () => __Unit,
];
export var PutUsers$: StaticOperationSchema = [
  9,
  n0,
  _PU,
  { [_h]: ["POST", "/users", 200] },
  () => PutUsersRequest$,
  () => __Unit,
];
