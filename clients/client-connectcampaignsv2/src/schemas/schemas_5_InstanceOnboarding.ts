// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cII, _cIOJS, _fC, _GIOJS, _GIOJSR, _GIOJSRe, _h, _IOJS, _sta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetInstanceOnboardingJobStatusRequest = struct(n0, _GIOJSR, 0, [_cII], [[0, 1]]);
export var GetInstanceOnboardingJobStatusResponse = struct(
  n0,
  _GIOJSRe,
  0,
  [_cIOJS],
  [() => InstanceOnboardingJobStatus]
);
export var InstanceOnboardingJobStatus = struct(n0, _IOJS, 0, [_cII, _sta, _fC], [0, 0, 0]);
export var GetInstanceOnboardingJobStatus = op(
  n0,
  _GIOJS,
  {
    [_h]: ["GET", "/v2/connect-instance/{connectInstanceId}/onboarding", 200],
  },
  () => GetInstanceOnboardingJobStatusRequest,
  () => GetInstanceOnboardingJobStatusResponse
);
