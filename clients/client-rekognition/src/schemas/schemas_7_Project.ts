// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidPolicyRevisionIdException as __InvalidPolicyRevisionIdException,
  MalformedPolicyDocumentException as __MalformedPolicyDocumentException,
} from "../models/index";
import {
  _A,
  _AC,
  _As,
  _AU,
  _C,
  _c,
  _CDR,
  _CDr,
  _CDRr,
  _CFC,
  _CFCMC,
  _CM,
  _CPR,
  _CPr,
  _CPRr,
  _CPV,
  _CPVR,
  _CPVr,
  _CPVRo,
  _CPVRr,
  _CPVRre,
  _CTon,
  _CTr,
  _DA,
  _DP,
  _DPA,
  _DPP,
  _DPPR,
  _DPPRe,
  _DPR,
  _DPRe,
  _DS,
  _DT,
  _e,
  _FC,
  _Fe,
  _GTM,
  _IPRIE,
  _KKI,
  _L,
  _LPP,
  _LPPR,
  _LPPRi,
  _LUT,
  _M,
  _MPDE,
  _MR,
  _NT,
  _OC,
  _PA,
  _PDo,
  _PN,
  _PNo,
  _PPP,
  _PPPR,
  _PPPRu,
  _PPr,
  _PPro,
  _PRI,
  _PVA,
  _SBu,
  _SKP,
  _SO,
  _SPA,
  _SPVA,
  _St,
  _Ta,
  _TD,
  _TDe,
  _VD,
  _VN,
  n0,
  S3Object,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Asset = struct(n0, _A, 0, [_GTM], [() => GroundTruthManifest]);
export var CopyProjectVersionRequest = struct(
  n0,
  _CPVR,
  0,
  [_SPA, _SPVA, _DPA, _VN, _OC, _Ta, _KKI],
  [0, 0, 0, 0, () => OutputConfig, 128 | 0, 0]
);
export var CopyProjectVersionResponse = struct(n0, _CPVRo, 0, [_PVA], [0]);
export var CreateDatasetRequest = struct(n0, _CDR, 0, [_DS, _DT, _PA, _Ta], [() => DatasetSource, 0, 0, 128 | 0]);
export var CreateDatasetResponse = struct(n0, _CDRr, 0, [_DA], [0]);
export var CreateProjectRequest = struct(n0, _CPR, 0, [_PN, _Fe, _AU, _Ta], [0, 0, 0, 128 | 0]);
export var CreateProjectResponse = struct(n0, _CPRr, 0, [_PA], [0]);
export var CreateProjectVersionRequest = struct(
  n0,
  _CPVRr,
  0,
  [_PA, _VN, _OC, _TD, _TDe, _Ta, _KKI, _VD, _FC],
  [0, 0, () => OutputConfig, () => TrainingData, () => TestingData, 128 | 0, 0, 0, () => CustomizationFeatureConfig]
);
export var CreateProjectVersionResponse = struct(n0, _CPVRre, 0, [_PVA], [0]);
export var CustomizationFeatureConfig = struct(n0, _CFC, 0, [_CM], [() => CustomizationFeatureContentModerationConfig]);
export var CustomizationFeatureContentModerationConfig = struct(n0, _CFCMC, 0, [_CTon], [1]);
export var DatasetSource = struct(n0, _DS, 0, [_GTM, _DA], [() => GroundTruthManifest, 0]);
export var DeleteProjectPolicyRequest = struct(n0, _DPPR, 0, [_PA, _PNo, _PRI], [0, 0, 0]);
export var DeleteProjectPolicyResponse = struct(n0, _DPPRe, 0, [], []);
export var DeleteProjectRequest = struct(n0, _DPR, 0, [_PA], [0]);
export var DeleteProjectResponse = struct(n0, _DPRe, 0, [_St], [0]);
export var GroundTruthManifest = struct(n0, _GTM, 0, [_SO], [() => S3Object]);
export var InvalidPolicyRevisionIdException = error(
  n0,
  _IPRIE,
  {
    [_e]: _c,
  },
  [_M, _C, _L],
  [0, 0, 0],

  __InvalidPolicyRevisionIdException
);
export var ListProjectPoliciesRequest = struct(n0, _LPPR, 0, [_PA, _NT, _MR], [0, 0, 1]);
export var ListProjectPoliciesResponse = struct(n0, _LPPRi, 0, [_PPr, _NT], [() => ProjectPolicies, 0]);
export var MalformedPolicyDocumentException = error(
  n0,
  _MPDE,
  {
    [_e]: _c,
  },
  [_M, _C, _L],
  [0, 0, 0],

  __MalformedPolicyDocumentException
);
export var OutputConfig = struct(n0, _OC, 0, [_SBu, _SKP], [0, 0]);
export var ProjectPolicy = struct(n0, _PPro, 0, [_PA, _PNo, _PRI, _PDo, _CTr, _LUT], [0, 0, 0, 0, 4, 4]);
export var PutProjectPolicyRequest = struct(n0, _PPPR, 0, [_PA, _PNo, _PRI, _PDo], [0, 0, 0, 0]);
export var PutProjectPolicyResponse = struct(n0, _PPPRu, 0, [_PRI], [0]);
export var TestingData = struct(n0, _TDe, 0, [_As, _AC], [() => Assets, 2]);
export var TrainingData = struct(n0, _TD, 0, [_As], [() => Assets]);
export var Assets = list(n0, _As, 0, () => Asset);
export var ProjectPolicies = list(n0, _PPr, 0, () => ProjectPolicy);
export var CopyProjectVersion = op(
  n0,
  _CPV,
  0,
  () => CopyProjectVersionRequest,
  () => CopyProjectVersionResponse
);
export var CreateDataset = op(
  n0,
  _CDr,
  0,
  () => CreateDatasetRequest,
  () => CreateDatasetResponse
);
export var CreateProject = op(
  n0,
  _CPr,
  0,
  () => CreateProjectRequest,
  () => CreateProjectResponse
);
export var CreateProjectVersion = op(
  n0,
  _CPVr,
  0,
  () => CreateProjectVersionRequest,
  () => CreateProjectVersionResponse
);
export var DeleteProject = op(
  n0,
  _DP,
  0,
  () => DeleteProjectRequest,
  () => DeleteProjectResponse
);
export var DeleteProjectPolicy = op(
  n0,
  _DPP,
  0,
  () => DeleteProjectPolicyRequest,
  () => DeleteProjectPolicyResponse
);
export var ListProjectPolicies = op(
  n0,
  _LPP,
  0,
  () => ListProjectPoliciesRequest,
  () => ListProjectPoliciesResponse
);
export var PutProjectPolicy = op(
  n0,
  _PPP,
  0,
  () => PutProjectPolicyRequest,
  () => PutProjectPolicyResponse
);
