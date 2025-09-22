// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _h, _hQ, _II, _Ta, _TCag, _TCR, _TCRa, _TKa, _UCn, _UCR, _UCRn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TagContactRequest = struct(n0, _TCR, 0, [_CI, _II, _Ta], [0, 0, 128 | 0]);
export var TagContactResponse = struct(n0, _TCRa, 0, [], []);
export var UntagContactRequest = struct(
  n0,
  _UCR,
  0,
  [_CI, _II, _TKa],
  [
    [0, 1],
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _TKa,
      },
    ],
  ]
);
export var UntagContactResponse = struct(n0, _UCRn, 0, [], []);
export var ContactTagKeys = 64 | 0;

export var ContactTagMap = 128 | 0;

export var TagContact = op(
  n0,
  _TCag,
  {
    [_h]: ["POST", "/contact/tags", 200],
  },
  () => TagContactRequest,
  () => TagContactResponse
);
export var UntagContact = op(
  n0,
  _UCn,
  {
    [_h]: ["DELETE", "/contact/tags/{InstanceId}/{ContactId}", 200],
  },
  () => UntagContactRequest,
  () => UntagContactResponse
);
