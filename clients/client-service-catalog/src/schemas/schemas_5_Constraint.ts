// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _CD,
  _CDo,
  _CI,
  _CS,
  _CSo,
  _D,
  _Id,
  _LCFP,
  _LCFPI,
  _LCFPO,
  _LLP,
  _LLPI,
  _LLPO,
  _LPS,
  _LPSa,
  _N,
  _NPT,
  _O,
  _PI,
  _PIr,
  _PS,
  _PTa,
  _T,
  _Ta,
  n0,
} from "./schemas_0";
import { Tags } from "./schemas_25_Product";

/* eslint no-var: 0 */

export var ConstraintDetail = struct(n0, _CD, 0, [_CI, _T, _D, _O, _PIr, _PI], [0, 0, 0, 0, 0, 0]);
export var ConstraintSummary = struct(n0, _CS, 0, [_T, _D], [0, 0]);
export var LaunchPathSummary = struct(n0, _LPS, 0, [_Id, _CSo, _Ta, _N], [0, () => ConstraintSummaries, () => Tags, 0]);
export var ListConstraintsForPortfolioInput = struct(n0, _LCFPI, 0, [_AL, _PI, _PIr, _PS, _PTa], [0, 0, 0, 1, 0]);
export var ListConstraintsForPortfolioOutput = struct(n0, _LCFPO, 0, [_CDo, _NPT], [() => ConstraintDetails, 0]);
export var ListLaunchPathsInput = struct(n0, _LLPI, 0, [_AL, _PIr, _PS, _PTa], [0, 0, 1, 0]);
export var ListLaunchPathsOutput = struct(n0, _LLPO, 0, [_LPSa, _NPT], [() => LaunchPathSummaries, 0]);
export var ConstraintDetails = list(n0, _CDo, 0, () => ConstraintDetail);
export var ConstraintSummaries = list(n0, _CSo, 0, () => ConstraintSummary);
export var LaunchPathSummaries = list(n0, _LPSa, 0, () => LaunchPathSummary);
export var ListConstraintsForPortfolio = op(
  n0,
  _LCFP,
  0,
  () => ListConstraintsForPortfolioInput,
  () => ListConstraintsForPortfolioOutput
);
export var ListLaunchPaths = op(
  n0,
  _LLP,
  0,
  () => ListLaunchPathsInput,
  () => ListLaunchPathsOutput
);
