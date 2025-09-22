// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DeleteSlackChannelConfigurationException as __DeleteSlackChannelConfigurationException } from "../models/index";
import { _CCA, _DSCC, _DSCCE, _DSCCR, _DSCCRe, _e, _h, _hE, _M, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSlackChannelConfigurationException = error(
  n0,
  _DSCCE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __DeleteSlackChannelConfigurationException
);
export var DeleteSlackChannelConfigurationRequest = struct(n0, _DSCCR, 0, [_CCA], [0]);
export var DeleteSlackChannelConfigurationResult = struct(n0, _DSCCRe, 0, [], []);
export var DeleteSlackChannelConfiguration = op(
  n0,
  _DSCC,
  {
    [_h]: ["POST", "/delete-slack-channel-configuration", 204],
  },
  () => DeleteSlackChannelConfigurationRequest,
  () => DeleteSlackChannelConfigurationResult
);
