// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSN, _DCSED, _DCSEDR, _DCSEDRe, _EDN, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConfigurationSetEventDestinationRequest = struct(
  n0,
  _DCSEDR,
  0,
  [_CSN, _EDN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteConfigurationSetEventDestinationResponse = struct(n0, _DCSEDRe, 0, [], []);
export var DeleteConfigurationSetEventDestination = op(
  n0,
  _DCSED,
  {
    [_h]: [
      "DELETE",
      "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
      200,
    ],
  },
  () => DeleteConfigurationSetEventDestinationRequest,
  () => DeleteConfigurationSetEventDestinationResponse
);
