// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _AR,
  _BB,
  _Be,
  _Br,
  _Con,
  _E,
  _EDy,
  _Em,
  _EO,
  _EOy,
  _Ey,
  _FDa,
  _FO,
  _Ge,
  _H,
  _IQ,
  _La,
  _Lan,
  _Lo,
  _MO,
  _Mu,
  _P,
  _Pi,
  _Q,
  _Ro,
  _S,
  _Sh,
  _Sun,
  _Ty,
  _V,
  _X,
  _Y,
  _Y_,
  BoundingBox,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AgeRange = struct(n0, _AR, 0, [_Lo, _H], [1, 1]);
export var Beard = struct(n0, _Be, 0, [_V, _Con], [2, 1]);
export var Emotion = struct(n0, _Em, 0, [_Ty, _Con], [0, 1]);
export var EyeDirection = struct(n0, _EDy, 0, [_Y, _Pi, _Con], [1, 1, 1]);
export var Eyeglasses = struct(n0, _Ey, 0, [_V, _Con], [2, 1]);
export var EyeOpen = struct(n0, _EO, 0, [_V, _Con], [2, 1]);
export var FaceDetail = struct(
  n0,
  _FDa,
  0,
  [_BB, _AR, _S, _Ey, _Sun, _Ge, _Be, _Mu, _EOy, _MO, _E, _La, _P, _Q, _Con, _FO, _EDy],
  [
    () => BoundingBox,
    () => AgeRange,
    () => Smile,
    () => Eyeglasses,
    () => Sunglasses,
    () => Gender,
    () => Beard,
    () => Mustache,
    () => EyeOpen,
    () => MouthOpen,
    () => Emotions,
    () => Landmarks,
    () => Pose,
    () => ImageQuality,
    1,
    () => FaceOccluded,
    () => EyeDirection,
  ]
);
export var FaceOccluded = struct(n0, _FO, 0, [_V, _Con], [2, 1]);
export var Gender = struct(n0, _Ge, 0, [_V, _Con], [0, 1]);
export var ImageQuality = struct(n0, _IQ, 0, [_Br, _Sh], [1, 1]);
export var Landmark = struct(n0, _Lan, 0, [_Ty, _X, _Y_], [0, 1, 1]);
export var MouthOpen = struct(n0, _MO, 0, [_V, _Con], [2, 1]);
export var Mustache = struct(n0, _Mu, 0, [_V, _Con], [2, 1]);
export var Pose = struct(n0, _P, 0, [_Ro, _Y, _Pi], [1, 1, 1]);
export var Smile = struct(n0, _S, 0, [_V, _Con], [2, 1]);
export var Sunglasses = struct(n0, _Sun, 0, [_V, _Con], [2, 1]);
export var Emotions = list(n0, _E, 0, () => Emotion);
export var Landmarks = list(n0, _La, 0, () => Landmark);
