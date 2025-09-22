// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AAGO,
  _ACT,
  _ARN,
  _ASLTD,
  _CRD,
  _CRDR,
  _CRDRr,
  _CRDV,
  _CRDVR,
  _CRDVRr,
  _CT,
  _Def,
  _DP,
  _GO,
  _GOS,
  _GP,
  _GRDV,
  _GRDVR,
  _GRDVRe,
  _h,
  _hH,
  _I,
  _IV,
  _LDRD,
  _lOR,
  _LUT,
  _LV,
  _LVA,
  _LVRD,
  _N,
  _OS,
  _R,
  _RDC,
  _RDI,
  _RDOS,
  _RDV,
  _RDVI,
  _Re,
  _SMJA,
  _SMLMRD,
  _SMMLMRD,
  _SMSRD,
  _SP,
  _SU,
  _t,
  _V,
  _XACT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateResourceDefinitionRequest = struct(
  n0,
  _CRDR,
  0,
  [_ACT, _IV, _N, _t],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    () => ResourceDefinitionVersion,
    0,
    128 | 0,
  ]
);
export var CreateResourceDefinitionResponse = struct(
  n0,
  _CRDRr,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N],
  [0, 0, 0, 0, 0, 0, 0]
);
export var CreateResourceDefinitionVersionRequest = struct(
  n0,
  _CRDVR,
  0,
  [_ACT, _RDI, _R],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    [0, 1],
    () => __listOfResource,
  ]
);
export var CreateResourceDefinitionVersionResponse = struct(n0, _CRDVRr, 0, [_A, _CT, _I, _V], [0, 0, 0, 0]);
export var GetResourceDefinitionVersionRequest = struct(
  n0,
  _GRDVR,
  0,
  [_RDI, _RDVI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetResourceDefinitionVersionResponse = struct(
  n0,
  _GRDVRe,
  0,
  [_A, _CT, _Def, _I, _V],
  [0, 0, () => ResourceDefinitionVersion, 0, 0]
);
export var GroupOwnerSetting = struct(n0, _GOS, 0, [_AAGO, _GO], [2, 0]);
export var LocalDeviceResourceData = struct(n0, _LDRD, 0, [_GOS, _SP], [() => GroupOwnerSetting, 0]);
export var LocalVolumeResourceData = struct(n0, _LVRD, 0, [_DP, _GOS, _SP], [0, () => GroupOwnerSetting, 0]);
export var Resource = struct(n0, _Re, 0, [_I, _N, _RDC], [0, 0, () => ResourceDataContainer]);
export var ResourceDataContainer = struct(
  n0,
  _RDC,
  0,
  [_LDRD, _LVRD, _SMLMRD, _SMMLMRD, _SMSRD],
  [
    () => LocalDeviceResourceData,
    () => LocalVolumeResourceData,
    () => S3MachineLearningModelResourceData,
    () => SageMakerMachineLearningModelResourceData,
    () => SecretsManagerSecretResourceData,
  ]
);
export var ResourceDefinitionVersion = struct(n0, _RDV, 0, [_R], [() => __listOfResource]);
export var ResourceDownloadOwnerSetting = struct(n0, _RDOS, 0, [_GO, _GP], [0, 0]);
export var S3MachineLearningModelResourceData = struct(
  n0,
  _SMLMRD,
  0,
  [_DP, _OS, _SU],
  [0, () => ResourceDownloadOwnerSetting, 0]
);
export var SageMakerMachineLearningModelResourceData = struct(
  n0,
  _SMMLMRD,
  0,
  [_DP, _OS, _SMJA],
  [0, () => ResourceDownloadOwnerSetting, 0]
);
export var SecretsManagerSecretResourceData = struct(n0, _SMSRD, 0, [_ARN, _ASLTD], [0, 64 | 0]);
export var __listOfResource = list(n0, _lOR, 0, () => Resource);
export var CreateResourceDefinition = op(
  n0,
  _CRD,
  {
    [_h]: ["POST", "/greengrass/definition/resources", 200],
  },
  () => CreateResourceDefinitionRequest,
  () => CreateResourceDefinitionResponse
);
export var CreateResourceDefinitionVersion = op(
  n0,
  _CRDV,
  {
    [_h]: ["POST", "/greengrass/definition/resources/{ResourceDefinitionId}/versions", 200],
  },
  () => CreateResourceDefinitionVersionRequest,
  () => CreateResourceDefinitionVersionResponse
);
export var GetResourceDefinitionVersion = op(
  n0,
  _GRDV,
  {
    [_h]: [
      "GET",
      "/greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}",
      200,
    ],
  },
  () => GetResourceDefinitionVersionRequest,
  () => GetResourceDefinitionVersionResponse
);
