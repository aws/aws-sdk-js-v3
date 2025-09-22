// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EFE, _EI, _h, _PEIFA, _PEIFAR, _PEIFARu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutEmailIdentityFeedbackAttributesRequest = struct(n0, _PEIFAR, 0, [_EI, _EFE], [[0, 1], 2]);
export var PutEmailIdentityFeedbackAttributesResponse = struct(n0, _PEIFARu, 0, [], []);
export var PutEmailIdentityFeedbackAttributes = op(
  n0,
  _PEIFA,
  {
    [_h]: ["PUT", "/v2/email/identities/{EmailIdentity}/feedback", 200],
  },
  () => PutEmailIdentityFeedbackAttributesRequest,
  () => PutEmailIdentityFeedbackAttributesResponse
);
