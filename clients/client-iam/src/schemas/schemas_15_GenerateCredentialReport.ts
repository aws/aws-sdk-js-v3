// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _D, _GCR, _GCRR, _St, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GenerateCredentialReportResponse = struct(n0, _GCRR, 0, [_St, _D], [0, 0]);
export var GenerateCredentialReport = op(
  n0,
  _GCR,
  0,
  () => Unit,
  () => GenerateCredentialReportResponse
);
