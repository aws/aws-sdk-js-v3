// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BB,
  _CHFU,
  _CHSFU,
  _Con,
  _DFe,
  _DSPFU,
  _DTe,
  _G,
  _I,
  _Lab,
  _MBBH,
  _MBBW,
  _MCi,
  _N,
  _OI,
  _PIa,
  _Po,
  _Poi,
  _PTD,
  _ROI,
  _ROIe,
  _ROIFU,
  _SFU,
  _SPDSP,
  _SPSFU,
  _TDext,
  _Ty,
  _USP,
  _USPR,
  _USPRp,
  _X,
  _Y_,
  BoundingBox,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectedHomeSettingsForUpdate = struct(n0, _CHSFU, 0, [_Lab, _MCi], [64 | 0, 1]);
export var DetectionFilter = struct(n0, _DFe, 0, [_MCi, _MBBH, _MBBW], [1, 1, 1]);
export var Geometry = struct(n0, _G, 0, [_BB, _Po], [() => BoundingBox, () => Polygon]);
export var Point = struct(n0, _Poi, 0, [_X, _Y_], [1, 1]);
export var RegionOfInterest = struct(n0, _ROIe, 0, [_BB, _Po], [() => BoundingBox, () => Polygon]);
export var StreamProcessorDataSharingPreference = struct(n0, _SPDSP, 0, [_OI], [2]);
export var StreamProcessorSettingsForUpdate = struct(n0, _SPSFU, 0, [_CHFU], [() => ConnectedHomeSettingsForUpdate]);
export var TextDetection = struct(n0, _TDext, 0, [_DTe, _Ty, _I, _PIa, _Con, _G], [0, 0, 1, 1, 1, () => Geometry]);
export var UpdateStreamProcessorRequest = struct(
  n0,
  _USPR,
  0,
  [_N, _SFU, _ROIFU, _DSPFU, _PTD],
  [
    0,
    () => StreamProcessorSettingsForUpdate,
    () => RegionsOfInterest,
    () => StreamProcessorDataSharingPreference,
    64 | 0,
  ]
);
export var UpdateStreamProcessorResponse = struct(n0, _USPRp, 0, [], []);
export var ConnectedHomeLabels = 64 | 0;

export var Polygon = list(n0, _Po, 0, () => Point);
export var RegionsOfInterest = list(n0, _ROI, 0, () => RegionOfInterest);
export var StreamProcessorParametersToDelete = 64 | 0;

export var UpdateStreamProcessor = op(
  n0,
  _USP,
  0,
  () => UpdateStreamProcessorRequest,
  () => UpdateStreamProcessorResponse
);
