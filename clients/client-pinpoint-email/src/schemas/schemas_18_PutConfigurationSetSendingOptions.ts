// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSN, _h, _PCSSO, _PCSSOR, _PCSSORu, _SEe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutConfigurationSetSendingOptionsRequest = struct(n0, _PCSSOR, 0, [_CSN, _SEe], [[0, 1], 2]);
export var PutConfigurationSetSendingOptionsResponse = struct(n0, _PCSSORu, 0, [], []);
export var PutConfigurationSetSendingOptions = op(
  n0,
  _PCSSO,
  {
    [_h]: ["PUT", "/v1/email/configuration-sets/{ConfigurationSetName}/sending", 200],
  },
  () => PutConfigurationSetSendingOptionsRequest,
  () => PutConfigurationSetSendingOptionsResponse
);
