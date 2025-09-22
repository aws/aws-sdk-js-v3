// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aI, _h, _hQ, _LW, _LWR, _LWRi, _mR, _nT, _We, _we, n0 } from "./schemas_0";
import { Webhook } from "./schemas_4_Webhook";

/* eslint no-var: 0 */

export var ListWebhooksRequest = struct(
  n0,
  _LWR,
  0,
  [_aI, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListWebhooksResult = struct(n0, _LWRi, 0, [_we, _nT], [() => Webhooks, 0]);
export var Webhooks = list(n0, _We, 0, () => Webhook);
export var ListWebhooks = op(
  n0,
  _LW,
  {
    [_h]: ["GET", "/apps/{appId}/webhooks", 200],
  },
  () => ListWebhooksRequest,
  () => ListWebhooksResult
);
