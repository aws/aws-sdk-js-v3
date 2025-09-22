// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidEventCategoryException as __InvalidEventCategoryException,
  InvalidLookupAttributesException as __InvalidLookupAttributesException,
  InvalidMaxResultsException as __InvalidMaxResultsException,
  InvalidNextTokenException as __InvalidNextTokenException,
} from "../models/index";
import {
  _AK,
  _AKI,
  _aQE,
  _AV,
  _c,
  _CTE,
  _e,
  _ECv,
  _EI,
  _EL,
  _EN,
  _ES,
  _ET,
  _ETn,
  _Ev,
  _Eve,
  _hE,
  _IECE,
  _ILAE,
  _IMRE,
  _INTE,
  _LA,
  _LAL,
  _LAo,
  _LE,
  _LER,
  _LERo,
  _M,
  _MR,
  _NT,
  _R,
  _Re,
  _RL,
  _RN,
  _RO,
  _RT,
  _ST,
  _U,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Event = struct(
  n0,
  _Ev,
  0,
  [_EI, _EN, _RO, _AKI, _ET, _ES, _U, _R, _CTE],
  [0, 0, 0, 0, 4, 0, 0, () => ResourceList, 0]
);
export var InvalidEventCategoryException = error(
  n0,
  _IECE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidEventCategory`, 400],
  },
  [_M],
  [0],

  __InvalidEventCategoryException
);
export var InvalidLookupAttributesException = error(
  n0,
  _ILAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidLookupAttributes`, 400],
  },
  [_M],
  [0],

  __InvalidLookupAttributesException
);
export var InvalidMaxResultsException = error(
  n0,
  _IMRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidMaxResults`, 400],
  },
  [_M],
  [0],

  __InvalidMaxResultsException
);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidNextToken`, 400],
  },
  [_M],
  [0],

  __InvalidNextTokenException
);
export var LookupAttribute = struct(n0, _LA, 0, [_AK, _AV], [0, 0]);
export var LookupEventsRequest = struct(
  n0,
  _LER,
  0,
  [_LAo, _ST, _ETn, _ECv, _MR, _NT],
  [() => LookupAttributesList, 4, 4, 0, 1, 0]
);
export var LookupEventsResponse = struct(n0, _LERo, 0, [_Eve, _NT], [() => EventsList, 0]);
export var Resource = struct(n0, _Re, 0, [_RT, _RN], [0, 0]);
export var EventsList = list(n0, _EL, 0, () => Event);
export var LookupAttributesList = list(n0, _LAL, 0, () => LookupAttribute);
export var ResourceList = list(n0, _RL, 0, () => Resource);
export var LookupEvents = op(
  n0,
  _LE,
  2,
  () => LookupEventsRequest,
  () => LookupEventsResponse
);
