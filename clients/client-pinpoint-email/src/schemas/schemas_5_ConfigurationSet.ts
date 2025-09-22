// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSN, _h, _PCSDO, _PCSDOR, _PCSDORu, _SPN, _TP, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutConfigurationSetDeliveryOptionsRequest = struct(n0, _PCSDOR, 0, [_CSN, _TP, _SPN], [[0, 1], 0, 0]);
export var PutConfigurationSetDeliveryOptionsResponse = struct(n0, _PCSDORu, 0, [], []);
export var PutConfigurationSetDeliveryOptions = op(
  n0,
  _PCSDO,
  {
    [_h]: ["PUT", "/v1/email/configuration-sets/{ConfigurationSetName}/delivery-options", 200],
  },
  () => PutConfigurationSetDeliveryOptionsRequest,
  () => PutConfigurationSetDeliveryOptionsResponse
);
