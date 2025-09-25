// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _AIc,
  _AL,
  _DPSe,
  _DPSIe,
  _DPSOe,
  _LPA,
  _LPAI,
  _LPAO,
  _NPT,
  _OPI,
  _PI,
  _PIri,
  _PS,
  _PSD,
  _PSDo,
  _PTa,
  _SP,
  _STO,
  _T,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribePortfolioSharesInput = struct(n0, _DPSIe, 0, [_PI, _T, _PTa, _PS], [0, 0, 0, 1]);
export var DescribePortfolioSharesOutput = struct(n0, _DPSOe, 0, [_NPT, _PSD], [0, () => PortfolioShareDetails]);
export var ListPortfolioAccessInput = struct(n0, _LPAI, 0, [_AL, _PI, _OPI, _PTa, _PS], [0, 0, 0, 0, 1]);
export var ListPortfolioAccessOutput = struct(n0, _LPAO, 0, [_AIc, _NPT], [64 | 0, 0]);
export var PortfolioShareDetail = struct(n0, _PSDo, 0, [_PIri, _T, _Ac, _STO, _SP], [0, 0, 2, 2, 2]);
export var AccountIds = 64 | 0;

export var PortfolioShareDetails = list(n0, _PSD, 0, () => PortfolioShareDetail);
export var DescribePortfolioShares = op(
  n0,
  _DPSe,
  0,
  () => DescribePortfolioSharesInput,
  () => DescribePortfolioSharesOutput
);
export var ListPortfolioAccess = op(
  n0,
  _LPA,
  0,
  () => ListPortfolioAccessInput,
  () => ListPortfolioAccessOutput
);
