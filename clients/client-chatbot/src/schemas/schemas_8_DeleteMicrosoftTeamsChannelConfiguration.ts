// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DeleteTeamsChannelConfigurationException as __DeleteTeamsChannelConfigurationException } from "../models/index";
import { _CCA, _DMTCC, _DTCCE, _DTCCR, _DTCCRe, _e, _h, _hE, _M, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTeamsChannelConfigurationException = error(
  n0,
  _DTCCE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __DeleteTeamsChannelConfigurationException
);
export var DeleteTeamsChannelConfigurationRequest = struct(n0, _DTCCR, 0, [_CCA], [0]);
export var DeleteTeamsChannelConfigurationResult = struct(n0, _DTCCRe, 0, [], []);
export var DeleteMicrosoftTeamsChannelConfiguration = op(
  n0,
  _DMTCC,
  {
    [_h]: ["POST", "/delete-ms-teams-channel-configuration", 204],
  },
  () => DeleteTeamsChannelConfigurationRequest,
  () => DeleteTeamsChannelConfigurationResult
);
