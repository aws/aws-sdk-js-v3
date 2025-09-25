// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSSP, _DSSPI, _DSSPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableSagemakerServicecatalogPortfolioInput = struct(n0, _DSSPI, 0, [], []);
export var DisableSagemakerServicecatalogPortfolioOutput = struct(n0, _DSSPO, 0, [], []);
export var DisableSagemakerServicecatalogPortfolio = op(
  n0,
  _DSSP,
  0,
  () => DisableSagemakerServicecatalogPortfolioInput,
  () => DisableSagemakerServicecatalogPortfolioOutput
);
