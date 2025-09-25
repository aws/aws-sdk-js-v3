// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DLMRG, _DLMRGR, _DLMRGRe, _LMRGA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLicenseManagerReportGeneratorRequest = struct(n0, _DLMRGR, 0, [_LMRGA], [0]);
export var DeleteLicenseManagerReportGeneratorResponse = struct(n0, _DLMRGRe, 0, [], []);
export var DeleteLicenseManagerReportGenerator = op(
  n0,
  _DLMRG,
  0,
  () => DeleteLicenseManagerReportGeneratorRequest,
  () => DeleteLicenseManagerReportGeneratorResponse
);
