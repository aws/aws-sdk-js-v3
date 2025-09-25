// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRD, _CSN, _h, _PCSTO, _PCSTOR, _PCSTORu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutConfigurationSetTrackingOptionsRequest = struct(n0, _PCSTOR, 0, [_CSN, _CRD], [[0, 1], 0]);
export var PutConfigurationSetTrackingOptionsResponse = struct(n0, _PCSTORu, 0, [], []);
export var PutConfigurationSetTrackingOptions = op(
  n0,
  _PCSTO,
  {
    [_h]: ["PUT", "/v1/email/configuration-sets/{ConfigurationSetName}/tracking-options", 200],
  },
  () => PutConfigurationSetTrackingOptionsRequest,
  () => PutConfigurationSetTrackingOptionsResponse
);
