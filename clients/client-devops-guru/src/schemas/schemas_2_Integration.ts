// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DSI,
  _DSIR,
  _DSIRe,
  _h,
  _KMSKI,
  _KMSSSE,
  _KMSSSEI,
  _LAD,
  _LADI,
  _OC,
  _OCI,
  _OIS,
  _SI,
  _SIC,
  _T,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeServiceIntegrationRequest = struct(n0, _DSIR, 0, [], []);
export var DescribeServiceIntegrationResponse = struct(n0, _DSIRe, 0, [_SI], [() => ServiceIntegrationConfig]);
export var KMSServerSideEncryptionIntegration = struct(n0, _KMSSSEI, 0, [_KMSKI, _OIS, _T], [0, 0, 0]);
export var LogsAnomalyDetectionIntegration = struct(n0, _LADI, 0, [_OIS], [0]);
export var OpsCenterIntegration = struct(n0, _OCI, 0, [_OIS], [0]);
export var ServiceIntegrationConfig = struct(
  n0,
  _SIC,
  0,
  [_OC, _LAD, _KMSSSE],
  [() => OpsCenterIntegration, () => LogsAnomalyDetectionIntegration, () => KMSServerSideEncryptionIntegration]
);
export var DescribeServiceIntegration = op(
  n0,
  _DSI,
  {
    [_h]: ["GET", "/service-integrations", 200],
  },
  () => DescribeServiceIntegrationRequest,
  () => DescribeServiceIntegrationResponse
);
