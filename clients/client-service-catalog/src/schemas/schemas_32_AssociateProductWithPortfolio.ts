// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AL, _APWPIs, _APWPOs, _APWPs, _PI, _PIr, _SPI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateProductWithPortfolioInput = struct(n0, _APWPIs, 0, [_AL, _PIr, _PI, _SPI], [0, 0, 0, 0]);
export var AssociateProductWithPortfolioOutput = struct(n0, _APWPOs, 0, [], []);
export var AssociateProductWithPortfolio = op(
  n0,
  _APWPs,
  0,
  () => AssociateProductWithPortfolioInput,
  () => AssociateProductWithPortfolioOutput
);
