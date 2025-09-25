// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GSSPS, _GSSPSI, _GSSPSO, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSagemakerServicecatalogPortfolioStatusInput = struct(n0, _GSSPSI, 0, [], []);
export var GetSagemakerServicecatalogPortfolioStatusOutput = struct(n0, _GSSPSO, 0, [_St], [0]);
export var GetSagemakerServicecatalogPortfolioStatus = op(
  n0,
  _GSSPS,
  0,
  () => GetSagemakerServicecatalogPortfolioStatusInput,
  () => GetSagemakerServicecatalogPortfolioStatusOutput
);
