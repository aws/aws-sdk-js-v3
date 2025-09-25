// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cIC,
  _cII,
  _cIOJS,
  _EC,
  _eC,
  _en,
  _eT,
  _GCIC,
  _GCICR,
  _GCICRe,
  _h,
  _IC,
  _kA,
  _SIOJ,
  _SIOJR,
  _SIOJRt,
  _sLRA,
  n0,
} from "./schemas_0";
import { InstanceOnboardingJobStatus } from "./schemas_5_InstanceOnboarding";

/* eslint no-var: 0 */

export var EncryptionConfig = struct(n0, _EC, 0, [_en, _eT, _kA], [2, 0, 0]);
export var GetConnectInstanceConfigRequest = struct(n0, _GCICR, 0, [_cII], [[0, 1]]);
export var GetConnectInstanceConfigResponse = struct(n0, _GCICRe, 0, [_cIC], [() => InstanceConfig]);
export var InstanceConfig = struct(n0, _IC, 0, [_cII, _sLRA, _eC], [0, 0, () => EncryptionConfig]);
export var StartInstanceOnboardingJobRequest = struct(n0, _SIOJR, 0, [_cII, _eC], [[0, 1], () => EncryptionConfig]);
export var StartInstanceOnboardingJobResponse = struct(n0, _SIOJRt, 0, [_cIOJS], [() => InstanceOnboardingJobStatus]);
export var GetConnectInstanceConfig = op(
  n0,
  _GCIC,
  {
    [_h]: ["GET", "/v2/connect-instance/{connectInstanceId}/config", 200],
  },
  () => GetConnectInstanceConfigRequest,
  () => GetConnectInstanceConfigResponse
);
export var StartInstanceOnboardingJob = op(
  n0,
  _SIOJ,
  {
    [_h]: ["PUT", "/v2/connect-instance/{connectInstanceId}/onboarding", 200],
  },
  () => StartInstanceOnboardingJobRequest,
  () => StartInstanceOnboardingJobResponse
);
