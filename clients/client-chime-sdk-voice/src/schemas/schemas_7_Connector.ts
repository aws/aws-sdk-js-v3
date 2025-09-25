// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CVCG,
  _CVCGR,
  _CVCGRr,
  _GVCG,
  _GVCGR,
  _GVCGRe,
  _h,
  _N,
  _Pri,
  _UT,
  _UVCG,
  _UVCGR,
  _UVCGRp,
  _VCG,
  _VCGA,
  _VCGI,
  _VCI,
  _VCIL,
  _VCIo,
  _VCIoi,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateVoiceConnectorGroupRequest = struct(n0, _CVCGR, 0, [_N, _VCIo], [0, () => VoiceConnectorItemList]);
export var CreateVoiceConnectorGroupResponse = struct(n0, _CVCGRr, 0, [_VCG], [() => VoiceConnectorGroup]);
export var GetVoiceConnectorGroupRequest = struct(n0, _GVCGR, 0, [_VCGI], [[0, 1]]);
export var GetVoiceConnectorGroupResponse = struct(n0, _GVCGRe, 0, [_VCG], [() => VoiceConnectorGroup]);
export var UpdateVoiceConnectorGroupRequest = struct(
  n0,
  _UVCGR,
  0,
  [_VCGI, _N, _VCIo],
  [[0, 1], 0, () => VoiceConnectorItemList]
);
export var UpdateVoiceConnectorGroupResponse = struct(n0, _UVCGRp, 0, [_VCG], [() => VoiceConnectorGroup]);
export var VoiceConnectorGroup = struct(
  n0,
  _VCG,
  0,
  [_VCGI, _N, _VCIo, _CT, _UT, _VCGA],
  [0, 0, () => VoiceConnectorItemList, 5, 5, 0]
);
export var VoiceConnectorItem = struct(n0, _VCIoi, 0, [_VCI, _Pri], [0, 1]);
export var VoiceConnectorItemList = list(n0, _VCIL, 0, () => VoiceConnectorItem);
export var CreateVoiceConnectorGroup = op(
  n0,
  _CVCG,
  {
    [_h]: ["POST", "/voice-connector-groups", 201],
  },
  () => CreateVoiceConnectorGroupRequest,
  () => CreateVoiceConnectorGroupResponse
);
export var GetVoiceConnectorGroup = op(
  n0,
  _GVCG,
  {
    [_h]: ["GET", "/voice-connector-groups/{VoiceConnectorGroupId}", 200],
  },
  () => GetVoiceConnectorGroupRequest,
  () => GetVoiceConnectorGroupResponse
);
export var UpdateVoiceConnectorGroup = op(
  n0,
  _UVCG,
  {
    [_h]: ["PUT", "/voice-connector-groups/{VoiceConnectorGroupId}", 202],
  },
  () => UpdateVoiceConnectorGroupRequest,
  () => UpdateVoiceConnectorGroupResponse
);
