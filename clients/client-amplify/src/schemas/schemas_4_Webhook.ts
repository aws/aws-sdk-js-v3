// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _bN, _cT, _d, _DW, _DWR, _DWRe, _GW, _GWR, _GWRe, _h, _uT, _W, _w, _wA, _wI, _wU, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWebhookRequest = struct(n0, _DWR, 0, [_wI], [[0, 1]]);
export var DeleteWebhookResult = struct(n0, _DWRe, 0, [_w], [() => Webhook]);
export var GetWebhookRequest = struct(n0, _GWR, 0, [_wI], [[0, 1]]);
export var GetWebhookResult = struct(n0, _GWRe, 0, [_w], [() => Webhook]);
export var Webhook = struct(n0, _W, 0, [_wA, _wI, _wU, _aI, _bN, _d, _cT, _uT], [0, 0, 0, 0, 0, 0, 4, 4]);
export var DeleteWebhook = op(
  n0,
  _DW,
  {
    [_h]: ["DELETE", "/webhooks/{webhookId}", 200],
  },
  () => DeleteWebhookRequest,
  () => DeleteWebhookResult
);
export var GetWebhook = op(
  n0,
  _GW,
  {
    [_h]: ["GET", "/webhooks/{webhookId}", 200],
  },
  () => GetWebhookRequest,
  () => GetWebhookResult
);
