// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AN,
  _AV,
  _AVA,
  _AVD,
  _AVDM,
  _BA,
  _D,
  _DC,
  _DU,
  _S,
  _SB,
  _SBI,
  _SBu,
  _SK,
  _SL,
  _SLo,
  _SRo,
  _STo,
  _UAV,
  _UAVM,
  _VL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationVersionDescription = struct(
  n0,
  _AVD,
  0,
  [_AVA, _AN, _D, _VL, _SBI, _BA, _SB, _DC, _DU, _S],
  [0, 0, 0, 0, () => SourceBuildInformation, 0, () => S3Location, 4, 4, 0]
);
export var ApplicationVersionDescriptionMessage = struct(n0, _AVDM, 0, [_AV], [() => ApplicationVersionDescription]);
export var S3Location = struct(n0, _SL, 0, [_SBu, _SK], [0, 0]);
export var SourceBuildInformation = struct(n0, _SBI, 0, [_STo, _SRo, _SLo], [0, 0, 0]);
export var UpdateApplicationVersionMessage = struct(n0, _UAVM, 0, [_AN, _VL, _D], [0, 0, 0]);
export var UpdateApplicationVersion = op(
  n0,
  _UAV,
  0,
  () => UpdateApplicationVersionMessage,
  () => ApplicationVersionDescriptionMessage
);
