// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DeleteChimeWebhookConfigurationException as __DeleteChimeWebhookConfigurationException } from "../models/index";
import { _CCA, _DCWC, _DCWCE, _DCWCR, _DCWCRe, _e, _h, _hE, _M, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteChimeWebhookConfigurationException = error(
  n0,
  _DCWCE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __DeleteChimeWebhookConfigurationException
);
export var DeleteChimeWebhookConfigurationRequest = struct(n0, _DCWCR, 0, [_CCA], [0]);
export var DeleteChimeWebhookConfigurationResult = struct(n0, _DCWCRe, 0, [], []);
export var DeleteChimeWebhookConfiguration = op(
  n0,
  _DCWC,
  {
    [_h]: ["POST", "/delete-chime-webhook-configuration", 204],
  },
  () => DeleteChimeWebhookConfigurationRequest,
  () => DeleteChimeWebhookConfigurationResult
);
