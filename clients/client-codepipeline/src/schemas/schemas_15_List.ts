// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidNextTokenException as __InvalidNextTokenException } from "../models/index";
import {
  _cl,
  _e,
  _INTE,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _LW,
  _LWIi,
  _LWO,
  _m,
  _MR,
  _mR,
  _NT,
  _nT,
  _rAe,
  _ta,
  _w,
  _WL,
  n0,
} from "./schemas_0";
import { ListWebhookItem, TagList } from "./schemas_14_Resource";

/* eslint no-var: 0 */

export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidNextTokenException
);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rAe, _nT, _mR], [0, 0, 1]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_ta, _nT], [() => TagList, 0]);
export var ListWebhooksInput = struct(n0, _LWIi, 0, [_NT, _MR], [0, 1]);
export var ListWebhooksOutput = struct(n0, _LWO, 0, [_w, _NT], [() => WebhookList, 0]);
export var WebhookList = list(n0, _WL, 0, () => ListWebhookItem);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var ListWebhooks = op(
  n0,
  _LW,
  0,
  () => ListWebhooksInput,
  () => ListWebhooksOutput
);
