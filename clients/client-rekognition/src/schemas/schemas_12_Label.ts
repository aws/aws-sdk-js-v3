// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _Al,
  _BB,
  _Bl,
  _Ca,
  _Con,
  _CSSC,
  _DCo,
  _DCom,
  _Gr,
  _HC,
  _Ins,
  _Inst,
  _LA,
  _LAa,
  _Labe,
  _LC,
  _LCa,
  _N,
  _Pa,
  _Par,
  _PP,
  _R,
  _SCi,
  BoundingBox,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DominantColor = struct(n0, _DCom, 0, [_R, _Bl, _Gr, _HC, _CSSC, _SCi, _PP], [1, 1, 1, 0, 0, 0, 1]);
export var Instance = struct(n0, _Ins, 0, [_BB, _Con, _DCo], [() => BoundingBox, 1, () => DominantColors]);
export var Label = struct(
  n0,
  _Labe,
  0,
  [_N, _Con, _Inst, _Pa, _Al, _Ca],
  [0, 1, () => Instances, () => Parents, () => LabelAliases, () => LabelCategories]
);
export var LabelAlias = struct(n0, _LA, 0, [_N], [0]);
export var LabelCategory = struct(n0, _LC, 0, [_N], [0]);
export var Parent = struct(n0, _Par, 0, [_N], [0]);
export var DominantColors = list(n0, _DCo, 0, () => DominantColor);
export var Instances = list(n0, _Inst, 0, () => Instance);
export var LabelAliases = list(n0, _LAa, 0, () => LabelAlias);
export var LabelCategories = list(n0, _LCa, 0, () => LabelCategory);
export var Parents = list(n0, _Pa, 0, () => Parent);
