// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  InvalidInputException as __InvalidInputException,
  ResourceInUseException as __ResourceInUseException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _A,
  _a,
  _ac,
  _AI,
  _aI,
  _AIc,
  _aIc,
  _AIct,
  _AIL,
  _AL,
  _c,
  _dA,
  _E,
  _e,
  _eAS,
  _eI,
  _EL,
  _eL,
  _eT,
  _eV,
  _h,
  _hE,
  _I,
  _i,
  _II,
  _iI,
  _IIE,
  _IL,
  _Im,
  _it,
  _m,
  _MA,
  _mA,
  _mT,
  _p,
  _PA,
  _PAI,
  _PAIR,
  _PAR,
  _PE,
  _PER,
  _PI,
  _PIR,
  _PU,
  _PUR,
  _rI,
  _RIUE,
  _RNFE,
  _s,
  _sA,
  _sI,
  _SJAIP,
  _SJAP,
  _SJEPJSON,
  _SJIP,
  _SJUP,
  _t,
  _tI,
  _U,
  _u,
  _UI,
  _uI,
  _UL,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActionId = sim(n0, _AI, 0, 8);
export var ItemId = sim(n0, _II, 0, 8);
export var SynthesizedJsonActionInteractionProperties = sim(n0, _SJAIP, 0, {
  [_mT]: _a,
  [_s]: 1,
});
export var SynthesizedJsonActionProperties = sim(n0, _SJAP, 0, {
  [_mT]: _a,
  [_s]: 1,
});
export var SynthesizedJsonEventPropertiesJSON = sim(n0, _SJEPJSON, 0, {
  [_mT]: _a,
  [_s]: 1,
});
export var SynthesizedJsonItemProperties = sim(n0, _SJIP, 0, {
  [_mT]: _a,
  [_s]: 1,
});
export var SynthesizedJsonUserProperties = sim(n0, _SJUP, 0, {
  [_mT]: _a,
  [_s]: 1,
});
export var UserId = sim(n0, _UI, 0, 8);
export var Action = struct(n0, _A, 0, [_aI, _p], [0, [() => SynthesizedJsonActionProperties, 0]]);
export var ActionInteraction = struct(
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
  ]
);
export var Event = struct(
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
    () => MetricAttribution,
  ]
);
export var InvalidInputException = error(
  n0,
  _IIE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidInputException
);
export var Item = struct(n0, _I, 0, [_iI, _p], [0, [() => SynthesizedJsonItemProperties, 0]]);
export var MetricAttribution = struct(n0, _MA, 0, [_eAS], [0]);
export var PutActionInteractionsRequest = struct(n0, _PAIR, 0, [_tI, _aIc], [0, [() => ActionInteractionsList, 0]]);
export var PutActionsRequest = struct(n0, _PAR, 0, [_dA, _ac], [0, [() => ActionList, 0]]);
export var PutEventsRequest = struct(
  n0,
  _PER,
  0,
  [_tI, _uI, _sI, _eL],
  [0, [() => UserId, 0], 0, [() => EventList, 0]]
);
export var PutItemsRequest = struct(n0, _PIR, 0, [_dA, _it], [0, [() => ItemList, 0]]);
export var PutUsersRequest = struct(n0, _PUR, 0, [_dA, _u], [0, [() => UserList, 0]]);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ResourceInUseException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var User = struct(n0, _U, 0, [_uI, _p], [0, [() => SynthesizedJsonUserProperties, 0]]);
export var ActionImpression = list(n0, _AIct, 0, [() => ActionId, 0]);
export var ActionInteractionsList = list(n0, _AIL, 0, [() => ActionInteraction, 0]);
export var ActionList = list(n0, _AL, 0, [() => Action, 0]);
export var EventList = list(n0, _EL, 0, [() => Event, 0]);
export var Impression = list(n0, _Im, 0, [() => ItemId, 0]);
export var ItemList = list(n0, _IL, 0, [() => Item, 0]);
export var UserList = list(n0, _UL, 0, [() => User, 0]);
export var PutActionInteractions = op(
  n0,
  _PAI,
  {
    [_h]: ["POST", "/action-interactions", 200],
  },
  () => PutActionInteractionsRequest,
  () => Unit
);
export var PutActions = op(
  n0,
  _PA,
  {
    [_h]: ["POST", "/actions", 200],
  },
  () => PutActionsRequest,
  () => Unit
);
export var PutEvents = op(
  n0,
  _PE,
  {
    [_h]: ["POST", "/events", 200],
  },
  () => PutEventsRequest,
  () => Unit
);
export var PutItems = op(
  n0,
  _PI,
  {
    [_h]: ["POST", "/items", 200],
  },
  () => PutItemsRequest,
  () => Unit
);
export var PutUsers = op(
  n0,
  _PU,
  {
    [_h]: ["POST", "/users", 200],
  },
  () => PutUsersRequest,
  () => Unit
);
