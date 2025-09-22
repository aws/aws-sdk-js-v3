// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Attr, _h, _ICI, _II, _UCApd, _UCAR, _UCARp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateContactAttributesRequest = struct(n0, _UCAR, 0, [_ICI, _II, _Attr], [0, 0, 128 | 0]);
export var UpdateContactAttributesResponse = struct(n0, _UCARp, 0, [], []);
export var UpdateContactAttributes = op(
  n0,
  _UCApd,
  {
    [_h]: ["POST", "/contact/attributes", 200],
  },
  () => UpdateContactAttributesRequest,
  () => UpdateContactAttributesResponse
);
