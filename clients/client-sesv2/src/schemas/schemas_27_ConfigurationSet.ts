// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSN, _h, _MDS, _PCSDO, _PCSDOR, _PCSDORu, _SPN, _TPl, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutConfigurationSetDeliveryOptionsRequest = struct(
  n0,
  _PCSDOR,
  0,
  [_CSN, _TPl, _SPN, _MDS],
  [[0, 1], 0, 0, 1]
);
export var PutConfigurationSetDeliveryOptionsResponse = struct(n0, _PCSDORu, 0, [], []);
export var PutConfigurationSetDeliveryOptions = op(
  n0,
  _PCSDO,
  {
    [_h]: ["PUT", "/v2/email/configuration-sets/{ConfigurationSetName}/delivery-options", 200],
  },
  () => PutConfigurationSetDeliveryOptionsRequest,
  () => PutConfigurationSetDeliveryOptionsResponse
);
