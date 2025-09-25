// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aBI, _ar, _h, _hQ, _IDL, _iDn, _IDS, _iI, _LID, _LIDR, _LIDRi, _mR, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var IngestionDestinationSummary = struct(n0, _IDS, 0, [_ar], [0]);
export var ListIngestionDestinationsRequest = struct(
  n0,
  _LIDR,
  0,
  [_aBI, _iI, _mR, _nT],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListIngestionDestinationsResponse = struct(n0, _LIDRi, 0, [_iDn, _nT], [() => IngestionDestinationList, 0]);
export var IngestionDestinationList = list(n0, _IDL, 0, () => IngestionDestinationSummary);
export var ListIngestionDestinations = op(
  n0,
  _LID,
  {
    [_h]: ["GET", "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations", 200],
  },
  () => ListIngestionDestinationsRequest,
  () => ListIngestionDestinationsResponse
);
