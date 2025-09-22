// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ALVP,
  _ALVPR,
  _ALVPRd,
  _Arn,
  _CA,
  _CAo,
  _CD,
  _Cont,
  _CR,
  _CRo,
  _CS,
  _CSo,
  _D,
  _DLV,
  _DLVR,
  _GLV,
  _GLVBA,
  _GLVBAR,
  _GLVP,
  _GLVPR,
  _GLVPRe,
  _GLVR,
  _GLVRe,
  _h,
  _hQ,
  _L,
  _LA,
  _LI,
  _LL,
  _LLI,
  _LLi,
  _LLR,
  _LLRi,
  _LLV,
  _LLVR,
  _LLVRi,
  _LMV,
  _LN,
  _Lo,
  _LV,
  _LVA,
  _LVCI,
  _LVCO,
  _LVL,
  _LVLI,
  _Ma,
  _MI,
  _NM,
  _OI,
  _P,
  _PLV,
  _PLVR,
  _PLVRu,
  _Po,
  _RI,
  _RLVP,
  _RLVPR,
  _S,
  _SB,
  _SI,
  _SJA,
  _SK,
  _SOV,
  _SPVAi,
  _Ve,
  _VN,
  _ZF,
  n0,
  Unit,
} from "./schemas_0";
import { _Blob } from "./schemas_3_Function";

/* eslint no-var: 0 */

export var AddLayerVersionPermissionRequest = struct(
  n0,
  _ALVPR,
  0,
  [_LN, _VN, _SI, _A, _P, _OI, _RI],
  [
    [0, 1],
    [1, 1],
    0,
    0,
    0,
    0,
    [
      0,
      {
        [_hQ]: _RI,
      },
    ],
  ]
);
export var AddLayerVersionPermissionResponse = struct(n0, _ALVPRd, 0, [_S, _RI], [0, 0]);
export var DeleteLayerVersionRequest = struct(
  n0,
  _DLVR,
  0,
  [_LN, _VN],
  [
    [0, 1],
    [1, 1],
  ]
);
export var GetLayerVersionByArnRequest = struct(
  n0,
  _GLVBAR,
  0,
  [_Arn],
  [
    [
      0,
      {
        [_hQ]: _Arn,
      },
    ],
  ]
);
export var GetLayerVersionPolicyRequest = struct(
  n0,
  _GLVPR,
  0,
  [_LN, _VN],
  [
    [0, 1],
    [1, 1],
  ]
);
export var GetLayerVersionPolicyResponse = struct(n0, _GLVPRe, 0, [_Po, _RI], [0, 0]);
export var GetLayerVersionRequest = struct(
  n0,
  _GLVR,
  0,
  [_LN, _VN],
  [
    [0, 1],
    [1, 1],
  ]
);
export var GetLayerVersionResponse = struct(
  n0,
  _GLVRe,
  0,
  [_Cont, _LA, _LVA, _D, _CD, _Ve, _CR, _LI, _CA],
  [() => LayerVersionContentOutput, 0, 0, 0, 0, 1, 64 | 0, 0, 64 | 0]
);
export var LayersListItem = struct(n0, _LLI, 0, [_LN, _LA, _LMV], [0, 0, () => LayerVersionsListItem]);
export var LayerVersionContentInput = struct(n0, _LVCI, 0, [_SB, _SK, _SOV, _ZF], [0, 0, 0, [() => _Blob, 0]]);
export var LayerVersionContentOutput = struct(n0, _LVCO, 0, [_Lo, _CSo, _CS, _SPVAi, _SJA], [0, 0, 1, 0, 0]);
export var LayerVersionsListItem = struct(
  n0,
  _LVLI,
  0,
  [_LVA, _Ve, _D, _CD, _CR, _LI, _CA],
  [0, 1, 0, 0, 64 | 0, 0, 64 | 0]
);
export var ListLayersRequest = struct(
  n0,
  _LLR,
  0,
  [_CRo, _Ma, _MI, _CAo],
  [
    [
      0,
      {
        [_hQ]: _CRo,
      },
    ],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
    [
      0,
      {
        [_hQ]: _CAo,
      },
    ],
  ]
);
export var ListLayersResponse = struct(n0, _LLRi, 0, [_NM, _L], [0, () => LayersList]);
export var ListLayerVersionsRequest = struct(
  n0,
  _LLVR,
  0,
  [_CRo, _LN, _Ma, _MI, _CAo],
  [
    [
      0,
      {
        [_hQ]: _CRo,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
    [
      0,
      {
        [_hQ]: _CAo,
      },
    ],
  ]
);
export var ListLayerVersionsResponse = struct(n0, _LLVRi, 0, [_NM, _LV], [0, () => LayerVersionsList]);
export var PublishLayerVersionRequest = struct(
  n0,
  _PLVR,
  0,
  [_LN, _D, _Cont, _CR, _LI, _CA],
  [[0, 1], 0, [() => LayerVersionContentInput, 0], 64 | 0, 0, 64 | 0]
);
export var PublishLayerVersionResponse = struct(
  n0,
  _PLVRu,
  0,
  [_Cont, _LA, _LVA, _D, _CD, _Ve, _CR, _LI, _CA],
  [() => LayerVersionContentOutput, 0, 0, 0, 0, 1, 64 | 0, 0, 64 | 0]
);
export var RemoveLayerVersionPermissionRequest = struct(
  n0,
  _RLVPR,
  0,
  [_LN, _VN, _SI, _RI],
  [
    [0, 1],
    [1, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _RI,
      },
    ],
  ]
);
export var CompatibleArchitectures = 64 | 0;

export var CompatibleRuntimes = 64 | 0;

export var LayersList = list(n0, _LL, 0, () => LayersListItem);
export var LayerVersionsList = list(n0, _LVL, 0, () => LayerVersionsListItem);
export var AddLayerVersionPermission = op(
  n0,
  _ALVP,
  {
    [_h]: ["POST", "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy", 201],
  },
  () => AddLayerVersionPermissionRequest,
  () => AddLayerVersionPermissionResponse
);
export var DeleteLayerVersion = op(
  n0,
  _DLV,
  {
    [_h]: ["DELETE", "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}", 204],
  },
  () => DeleteLayerVersionRequest,
  () => Unit
);
export var GetLayerVersion = op(
  n0,
  _GLV,
  {
    [_h]: ["GET", "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}", 200],
  },
  () => GetLayerVersionRequest,
  () => GetLayerVersionResponse
);
export var GetLayerVersionByArn = op(
  n0,
  _GLVBA,
  {
    [_h]: ["GET", "/2018-10-31/layers?find=LayerVersion", 200],
  },
  () => GetLayerVersionByArnRequest,
  () => GetLayerVersionResponse
);
export var GetLayerVersionPolicy = op(
  n0,
  _GLVP,
  {
    [_h]: ["GET", "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy", 200],
  },
  () => GetLayerVersionPolicyRequest,
  () => GetLayerVersionPolicyResponse
);
export var ListLayers = op(
  n0,
  _LLi,
  {
    [_h]: ["GET", "/2018-10-31/layers", 200],
  },
  () => ListLayersRequest,
  () => ListLayersResponse
);
export var ListLayerVersions = op(
  n0,
  _LLV,
  {
    [_h]: ["GET", "/2018-10-31/layers/{LayerName}/versions", 200],
  },
  () => ListLayerVersionsRequest,
  () => ListLayerVersionsResponse
);
export var PublishLayerVersion = op(
  n0,
  _PLV,
  {
    [_h]: ["POST", "/2018-10-31/layers/{LayerName}/versions", 201],
  },
  () => PublishLayerVersionRequest,
  () => PublishLayerVersionResponse
);
export var RemoveLayerVersionPermission = op(
  n0,
  _RLVP,
  {
    [_h]: ["DELETE", "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}", 204],
  },
  () => RemoveLayerVersionPermissionRequest,
  () => Unit
);
