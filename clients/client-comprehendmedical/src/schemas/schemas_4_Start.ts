// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CRT,
  _DARA,
  _IDC,
  _JI,
  _JN,
  _KMSK,
  _LC,
  _ODC,
  _SEDVJ,
  _SEDVJR,
  _SEDVJRt,
  _SICDCMIJ,
  _SICDCMIJR,
  _SICDCMIJRt,
  _SPHIDJ,
  _SPHIDJR,
  _SPHIDJRt,
  _SRNIJ,
  _SRNIJR,
  _SRNIJRt,
  _SSNOMEDCTIJ,
  _SSNOMEDCTIJR,
  _SSNOMEDCTIJRt,
  InputDataConfig,
  n0,
  OutputDataConfig,
} from "./schemas_0";

/* eslint no-var: 0 */

export var StartEntitiesDetectionV2JobRequest = struct(
  n0,
  _SEDVJR,
  0,
  [_IDC, _ODC, _DARA, _JN, _CRT, _KMSK, _LC],
  [() => InputDataConfig, () => OutputDataConfig, 0, 0, [0, 4], 0, 0]
);
export var StartEntitiesDetectionV2JobResponse = struct(n0, _SEDVJRt, 0, [_JI], [0]);
export var StartICD10CMInferenceJobRequest = struct(
  n0,
  _SICDCMIJR,
  0,
  [_IDC, _ODC, _DARA, _JN, _CRT, _KMSK, _LC],
  [() => InputDataConfig, () => OutputDataConfig, 0, 0, [0, 4], 0, 0]
);
export var StartICD10CMInferenceJobResponse = struct(n0, _SICDCMIJRt, 0, [_JI], [0]);
export var StartPHIDetectionJobRequest = struct(
  n0,
  _SPHIDJR,
  0,
  [_IDC, _ODC, _DARA, _JN, _CRT, _KMSK, _LC],
  [() => InputDataConfig, () => OutputDataConfig, 0, 0, [0, 4], 0, 0]
);
export var StartPHIDetectionJobResponse = struct(n0, _SPHIDJRt, 0, [_JI], [0]);
export var StartRxNormInferenceJobRequest = struct(
  n0,
  _SRNIJR,
  0,
  [_IDC, _ODC, _DARA, _JN, _CRT, _KMSK, _LC],
  [() => InputDataConfig, () => OutputDataConfig, 0, 0, [0, 4], 0, 0]
);
export var StartRxNormInferenceJobResponse = struct(n0, _SRNIJRt, 0, [_JI], [0]);
export var StartSNOMEDCTInferenceJobRequest = struct(
  n0,
  _SSNOMEDCTIJR,
  0,
  [_IDC, _ODC, _DARA, _JN, _CRT, _KMSK, _LC],
  [() => InputDataConfig, () => OutputDataConfig, 0, 0, [0, 4], 0, 0]
);
export var StartSNOMEDCTInferenceJobResponse = struct(n0, _SSNOMEDCTIJRt, 0, [_JI], [0]);
export var StartEntitiesDetectionV2Job = op(
  n0,
  _SEDVJ,
  0,
  () => StartEntitiesDetectionV2JobRequest,
  () => StartEntitiesDetectionV2JobResponse
);
export var StartICD10CMInferenceJob = op(
  n0,
  _SICDCMIJ,
  0,
  () => StartICD10CMInferenceJobRequest,
  () => StartICD10CMInferenceJobResponse
);
export var StartPHIDetectionJob = op(
  n0,
  _SPHIDJ,
  0,
  () => StartPHIDetectionJobRequest,
  () => StartPHIDetectionJobResponse
);
export var StartRxNormInferenceJob = op(
  n0,
  _SRNIJ,
  0,
  () => StartRxNormInferenceJobRequest,
  () => StartRxNormInferenceJobResponse
);
export var StartSNOMEDCTInferenceJob = op(
  n0,
  _SSNOMEDCTIJ,
  0,
  () => StartSNOMEDCTInferenceJobRequest,
  () => StartSNOMEDCTInferenceJobResponse
);
