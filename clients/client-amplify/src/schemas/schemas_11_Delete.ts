// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DependentServiceFailureException as __DependentServiceFailureException } from "../models/index";
import {
  _aI,
  _bE,
  _bN,
  _CW,
  _CWR,
  _CWRr,
  _d,
  _DBE,
  _DBER,
  _DBERe,
  _DSFE,
  _e,
  _eN,
  _h,
  _hE,
  _m,
  _se,
  _UW,
  _UWR,
  _UWRp,
  _w,
  _wI,
  n0,
} from "./schemas_0";
import { BackendEnvironment } from "./schemas_3_Branch";
import { Webhook } from "./schemas_4_Webhook";

/* eslint no-var: 0 */

export var CreateWebhookRequest = struct(n0, _CWR, 0, [_aI, _bN, _d], [[0, 1], 0, 0]);
export var CreateWebhookResult = struct(n0, _CWRr, 0, [_w], [() => Webhook]);
export var DeleteBackendEnvironmentRequest = struct(
  n0,
  _DBER,
  0,
  [_aI, _eN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteBackendEnvironmentResult = struct(n0, _DBERe, 0, [_bE], [() => BackendEnvironment]);
export var DependentServiceFailureException = error(
  n0,
  _DSFE,
  {
    [_e]: _se,
    [_hE]: 503,
  },
  [_m],
  [0],

  __DependentServiceFailureException
);
export var UpdateWebhookRequest = struct(n0, _UWR, 0, [_wI, _bN, _d], [[0, 1], 0, 0]);
export var UpdateWebhookResult = struct(n0, _UWRp, 0, [_w], [() => Webhook]);
export var CreateWebhook = op(
  n0,
  _CW,
  {
    [_h]: ["POST", "/apps/{appId}/webhooks", 200],
  },
  () => CreateWebhookRequest,
  () => CreateWebhookResult
);
export var DeleteBackendEnvironment = op(
  n0,
  _DBE,
  {
    [_h]: ["DELETE", "/apps/{appId}/backendenvironments/{environmentName}", 200],
  },
  () => DeleteBackendEnvironmentRequest,
  () => DeleteBackendEnvironmentResult
);
export var UpdateWebhook = op(
  n0,
  _UW,
  {
    [_h]: ["POST", "/webhooks/{webhookId}", 200],
  },
  () => UpdateWebhookRequest,
  () => UpdateWebhookResult
);
