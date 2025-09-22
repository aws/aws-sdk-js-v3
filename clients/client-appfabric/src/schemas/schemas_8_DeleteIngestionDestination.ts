// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aBI, _DID, _DIDR, _DIDRe, _h, _iDI, _iI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIngestionDestinationRequest = struct(
  n0,
  _DIDR,
  0,
  [_aBI, _iI, _iDI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteIngestionDestinationResponse = struct(n0, _DIDRe, 0, [], []);
export var DeleteIngestionDestination = op(
  n0,
  _DID,
  {
    [_h]: [
      "DELETE",
      "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}",
      204,
    ],
  },
  () => DeleteIngestionDestinationRequest,
  () => DeleteIngestionDestinationResponse
);
