// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BOMXF, _I, _MFD, _SIMFD, _SIMFDR, _SIMFDRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SetIdentityMailFromDomainRequest = struct(n0, _SIMFDR, 0, [_I, _MFD, _BOMXF], [0, 0, 0]);
export var SetIdentityMailFromDomainResponse = struct(n0, _SIMFDRe, 0, [], []);
export var SetIdentityMailFromDomain = op(
  n0,
  _SIMFD,
  0,
  () => SetIdentityMailFromDomainRequest,
  () => SetIdentityMailFromDomainResponse
);
