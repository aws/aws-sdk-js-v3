// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSN, _h, _PCSRO, _PCSROR, _PCSRORu, _RME, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutConfigurationSetReputationOptionsRequest = struct(n0, _PCSROR, 0, [_CSN, _RME], [[0, 1], 2]);
export var PutConfigurationSetReputationOptionsResponse = struct(n0, _PCSRORu, 0, [], []);
export var PutConfigurationSetReputationOptions = op(
  n0,
  _PCSRO,
  {
    [_h]: ["PUT", "/v1/email/configuration-sets/{ConfigurationSetName}/reputation-options", 200],
  },
  () => PutConfigurationSetReputationOptionsRequest,
  () => PutConfigurationSetReputationOptionsResponse
);
