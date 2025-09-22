// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _CB, _h, _hH, _UCRM, _UCRMR, _UCRMRp, _xacb, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateChannelReadMarkerRequest = struct(
  n0,
  _UCRMR,
  0,
  [_CA, _CB],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var UpdateChannelReadMarkerResponse = struct(n0, _UCRMRp, 0, [_CA], [0]);
export var UpdateChannelReadMarker = op(
  n0,
  _UCRM,
  {
    [_h]: ["PUT", "/channels/{ChannelArn}/readMarker", 200],
  },
  () => UpdateChannelReadMarkerRequest,
  () => UpdateChannelReadMarkerResponse
);
