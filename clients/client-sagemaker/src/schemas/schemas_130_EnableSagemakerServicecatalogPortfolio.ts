// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ESSP, _ESSPI, _ESSPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableSagemakerServicecatalogPortfolioInput = struct(n0, _ESSPI, 0, [], []);
export var EnableSagemakerServicecatalogPortfolioOutput = struct(n0, _ESSPO, 0, [], []);
export var EnableSagemakerServicecatalogPortfolio = op(
  n0,
  _ESSP,
  0,
  () => EnableSagemakerServicecatalogPortfolioInput,
  () => EnableSagemakerServicecatalogPortfolioOutput
);
