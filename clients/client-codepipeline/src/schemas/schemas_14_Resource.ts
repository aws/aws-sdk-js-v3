// smithy-typescript generated code
import { error, list, struct } from "@smithy/core/schema";

import {
  InvalidArnException as __InvalidArnException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _a,
  _aCu,
  _AIPR,
  _au,
  _cl,
  _de,
  _e,
  _eC,
  _eM,
  _fi,
  _IAE,
  _jP,
  _k,
  _lT,
  _LWI,
  _m,
  _mE,
  _na,
  _RNFE,
  _STe,
  _T,
  _tA,
  _ta,
  _TL,
  _tP,
  _ur,
  _va,
  _WAC,
  _WD,
  _WF,
  _WFR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidArnException = error(
  n0,
  _IAE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidArnException
);
export var ListWebhookItem = struct(
  n0,
  _LWI,
  0,
  [_de, _ur, _eM, _eC, _lT, _a, _ta],
  [() => WebhookDefinition, 0, 0, 0, 4, 0, () => TagList]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var Tag = struct(n0, _T, 0, [_k, _va], [0, 0]);
export var WebhookAuthConfiguration = struct(n0, _WAC, 0, [_AIPR, _STe], [0, 0]);
export var WebhookDefinition = struct(
  n0,
  _WD,
  0,
  [_na, _tP, _tA, _fi, _au, _aCu],
  [0, 0, 0, () => WebhookFilters, 0, () => WebhookAuthConfiguration]
);
export var WebhookFilterRule = struct(n0, _WFR, 0, [_jP, _mE], [0, 0]);
export var TagList = list(n0, _TL, 0, () => Tag);
export var WebhookFilters = list(n0, _WF, 0, () => WebhookFilterRule);
