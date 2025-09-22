// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAA, _CCAA, _CCAAR, _CCAARr, _IT, _N, _P, _R, _Ta, n0 } from "./schemas_0";
import { Tags } from "./schemas_12_Create";
import { Attachment, Resources } from "./schemas_14_Account";

/* eslint no-var: 0 */

export var CreateCrossAccountAttachmentRequest = struct(
  n0,
  _CCAAR,
  0,
  [_N, _P, _R, _IT, _Ta],
  [0, 64 | 0, () => Resources, [0, 4], () => Tags]
);
export var CreateCrossAccountAttachmentResponse = struct(n0, _CCAARr, 0, [_CAA], [() => Attachment]);
export var CreateCrossAccountAttachment = op(
  n0,
  _CCAA,
  0,
  () => CreateCrossAccountAttachmentRequest,
  () => CreateCrossAccountAttachmentResponse
);
