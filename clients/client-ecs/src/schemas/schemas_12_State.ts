// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _aA, _ac, _ASC, _ASCt, _cl, _s, _SASC, _SASCR, _SASCRu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AttachmentStateChange = struct(n0, _ASC, 0, [_aA, _s], [0, 0]);
export var SubmitAttachmentStateChangesRequest = struct(n0, _SASCR, 0, [_cl, _a], [0, () => AttachmentStateChanges]);
export var SubmitAttachmentStateChangesResponse = struct(n0, _SASCRu, 0, [_ac], [0]);
export var AttachmentStateChanges = list(n0, _ASCt, 0, () => AttachmentStateChange);
export var SubmitAttachmentStateChanges = op(
  n0,
  _SASC,
  0,
  () => SubmitAttachmentStateChangesRequest,
  () => SubmitAttachmentStateChangesResponse
);
