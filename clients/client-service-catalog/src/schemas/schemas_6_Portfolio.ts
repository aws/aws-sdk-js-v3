// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AL, _APS, _APSI, _APSO, _PI, _PST, _RPS, _RPSI, _RPSO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptPortfolioShareInput = struct(n0, _APSI, 0, [_AL, _PI, _PST], [0, 0, 0]);
export var AcceptPortfolioShareOutput = struct(n0, _APSO, 0, [], []);
export var RejectPortfolioShareInput = struct(n0, _RPSI, 0, [_AL, _PI, _PST], [0, 0, 0]);
export var RejectPortfolioShareOutput = struct(n0, _RPSO, 0, [], []);
export var AcceptPortfolioShare = op(
  n0,
  _APS,
  0,
  () => AcceptPortfolioShareInput,
  () => AcceptPortfolioShareOutput
);
export var RejectPortfolioShare = op(
  n0,
  _RPS,
  0,
  () => RejectPortfolioShareInput,
  () => RejectPortfolioShareOutput
);
