// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GTSCCB, _GTSCCBI, _GTSCCBO, _Lo, _TSA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetTrustStoreCaCertificatesBundleInput = struct(n0, _GTSCCBI, 0, [_TSA], [0]);
export var GetTrustStoreCaCertificatesBundleOutput = struct(n0, _GTSCCBO, 0, [_Lo], [0]);
export var GetTrustStoreCaCertificatesBundle = op(
  n0,
  _GTSCCB,
  0,
  () => GetTrustStoreCaCertificatesBundleInput,
  () => GetTrustStoreCaCertificatesBundleOutput
);
