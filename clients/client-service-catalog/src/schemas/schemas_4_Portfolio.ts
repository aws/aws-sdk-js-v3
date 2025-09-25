// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _APWP,
  _APWPI,
  _APWPO,
  _DPFP,
  _DPFPI,
  _DPFPO,
  _LPFPi,
  _LPFPIi,
  _LPFPOi,
  _NPT,
  _PARN,
  _PI,
  _Pr,
  _Pri,
  _PS,
  _PT,
  _PTa,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociatePrincipalWithPortfolioInput = struct(n0, _APWPI, 0, [_AL, _PI, _PARN, _PT], [0, 0, 0, 0]);
export var AssociatePrincipalWithPortfolioOutput = struct(n0, _APWPO, 0, [], []);
export var DisassociatePrincipalFromPortfolioInput = struct(n0, _DPFPI, 0, [_AL, _PI, _PARN, _PT], [0, 0, 0, 0]);
export var DisassociatePrincipalFromPortfolioOutput = struct(n0, _DPFPO, 0, [], []);
export var ListPrincipalsForPortfolioInput = struct(n0, _LPFPIi, 0, [_AL, _PI, _PS, _PTa], [0, 0, 1, 0]);
export var ListPrincipalsForPortfolioOutput = struct(n0, _LPFPOi, 0, [_Pr, _NPT], [() => Principals, 0]);
export var Principal = struct(n0, _Pri, 0, [_PARN, _PT], [0, 0]);
export var Principals = list(n0, _Pr, 0, () => Principal);
export var AssociatePrincipalWithPortfolio = op(
  n0,
  _APWP,
  0,
  () => AssociatePrincipalWithPortfolioInput,
  () => AssociatePrincipalWithPortfolioOutput
);
export var DisassociatePrincipalFromPortfolio = op(
  n0,
  _DPFP,
  0,
  () => DisassociatePrincipalFromPortfolioInput,
  () => DisassociatePrincipalFromPortfolioOutput
);
export var ListPrincipalsForPortfolio = op(
  n0,
  _LPFPi,
  0,
  () => ListPrincipalsForPortfolioInput,
  () => ListPrincipalsForPortfolioOutput
);
