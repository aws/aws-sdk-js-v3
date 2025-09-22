// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _de,
  _EI,
  _EIn,
  _EL,
  _ELn,
  _EP,
  _EPn,
  _im,
  _la,
  _lan,
  _LCEI,
  _LCEII,
  _LCEIO,
  _na,
  _pl,
  _pla,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EnvironmentImage = struct(n0, _EI, 0, [_na, _de, _v], [0, 0, 64 | 0]);
export var EnvironmentLanguage = struct(n0, _EL, 0, [_la, _im], [0, () => EnvironmentImages]);
export var EnvironmentPlatform = struct(n0, _EP, 0, [_pl, _lan], [0, () => EnvironmentLanguages]);
export var ListCuratedEnvironmentImagesInput = struct(n0, _LCEII, 0, [], []);
export var ListCuratedEnvironmentImagesOutput = struct(n0, _LCEIO, 0, [_pla], [() => EnvironmentPlatforms]);
export var EnvironmentImages = list(n0, _EIn, 0, () => EnvironmentImage);
export var EnvironmentLanguages = list(n0, _ELn, 0, () => EnvironmentLanguage);
export var EnvironmentPlatforms = list(n0, _EPn, 0, () => EnvironmentPlatform);
export var ImageVersions = 64 | 0;

export var ListCuratedEnvironmentImages = op(
  n0,
  _LCEI,
  0,
  () => ListCuratedEnvironmentImagesInput,
  () => ListCuratedEnvironmentImagesOutput
);
