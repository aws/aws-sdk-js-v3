// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { WebhookNotFoundException as __WebhookNotFoundException } from "../models/index";
import { _cl, _DWWTP, _DWWTPI, _DWWTPO, _e, _RWWTP, _RWWTPI, _RWWTPO, _wN, _WNFE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterWebhookWithThirdPartyInput = struct(n0, _DWWTPI, 0, [_wN], [0]);
export var DeregisterWebhookWithThirdPartyOutput = struct(n0, _DWWTPO, 0, [], []);
export var RegisterWebhookWithThirdPartyInput = struct(n0, _RWWTPI, 0, [_wN], [0]);
export var RegisterWebhookWithThirdPartyOutput = struct(n0, _RWWTPO, 0, [], []);
export var WebhookNotFoundException = error(
  n0,
  _WNFE,
  {
    [_e]: _cl,
  },
  [],
  [],

  __WebhookNotFoundException
);
export var DeregisterWebhookWithThirdParty = op(
  n0,
  _DWWTP,
  0,
  () => DeregisterWebhookWithThirdPartyInput,
  () => DeregisterWebhookWithThirdPartyOutput
);
export var RegisterWebhookWithThirdParty = op(
  n0,
  _RWWTP,
  0,
  () => RegisterWebhookWithThirdPartyInput,
  () => RegisterWebhookWithThirdPartyOutput
);
