// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConcurrentModificationException as __ConcurrentModificationException,
  InvalidTagsException as __InvalidTagsException,
  InvalidWebhookAuthenticationParametersException as __InvalidWebhookAuthenticationParametersException,
  InvalidWebhookFilterPatternException as __InvalidWebhookFilterPatternException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _ca,
  _cl,
  _CME,
  _DCAT,
  _DCATI,
  _DP,
  _DPI,
  _DW,
  _DWI,
  _DWO,
  _e,
  _ITE,
  _IWAPE,
  _IWFPE,
  _m,
  _na,
  _pro,
  _PW,
  _PWI,
  _PWO,
  _rAe,
  _ta,
  _tK,
  _TMTE,
  _TR,
  _TRI,
  _TRO,
  _UR,
  _URI,
  _URO,
  _v,
  _we,
  n0,
  Unit,
} from "./schemas_0";
import { ListWebhookItem, TagList, WebhookDefinition } from "./schemas_14_Resource";

/* eslint no-var: 0 */

export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __ConcurrentModificationException
);
export var DeleteCustomActionTypeInput = struct(n0, _DCATI, 0, [_ca, _pro, _v], [0, 0, 0]);
export var DeletePipelineInput = struct(n0, _DPI, 0, [_na], [0]);
export var DeleteWebhookInput = struct(n0, _DWI, 0, [_na], [0]);
export var DeleteWebhookOutput = struct(n0, _DWO, 0, [], []);
export var InvalidTagsException = error(
  n0,
  _ITE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidTagsException
);
export var InvalidWebhookAuthenticationParametersException = error(
  n0,
  _IWAPE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidWebhookAuthenticationParametersException
);
export var InvalidWebhookFilterPatternException = error(
  n0,
  _IWFPE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidWebhookFilterPatternException
);
export var PutWebhookInput = struct(n0, _PWI, 0, [_we, _ta], [() => WebhookDefinition, () => TagList]);
export var PutWebhookOutput = struct(n0, _PWO, 0, [_we], [() => ListWebhookItem]);
export var TagResourceInput = struct(n0, _TRI, 0, [_rAe, _ta], [0, () => TagList]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __TooManyTagsException
);
export var UntagResourceInput = struct(n0, _URI, 0, [_rAe, _tK], [0, 64 | 0]);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var TagKeyList = 64 | 0;

export var DeleteCustomActionType = op(
  n0,
  _DCAT,
  0,
  () => DeleteCustomActionTypeInput,
  () => Unit
);
export var DeletePipeline = op(
  n0,
  _DP,
  0,
  () => DeletePipelineInput,
  () => Unit
);
export var DeleteWebhook = op(
  n0,
  _DW,
  0,
  () => DeleteWebhookInput,
  () => DeleteWebhookOutput
);
export var PutWebhook = op(
  n0,
  _PW,
  0,
  () => PutWebhookInput,
  () => PutWebhookOutput
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceInput,
  () => UntagResourceOutput
);
