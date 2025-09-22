// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AI,
  _Al,
  _ALli,
  _CAI,
  _CAO,
  _CAr,
  _CT,
  _D,
  _DAes,
  _DAIe,
  _DAO,
  _FI,
  _LAI,
  _LAi,
  _LAO,
  _Li,
  _LUT,
  _M,
  _N,
  _NTe,
  _RS,
  _RST,
  _T,
  _Ta,
  _UA,
  _UAI,
  _UAO,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Alias = struct(n0, _A, 0, [_AI, _N, _AA, _D, _RS, _CT, _LUT], [0, 0, 0, 0, () => RoutingStrategy, 4, 4]);
export var CreateAliasInput = struct(n0, _CAI, 0, [_N, _D, _RS, _Ta], [0, 0, () => RoutingStrategy, () => TagList]);
export var CreateAliasOutput = struct(n0, _CAO, 0, [_A], [() => Alias]);
export var DescribeAliasInput = struct(n0, _DAIe, 0, [_AI], [0]);
export var DescribeAliasOutput = struct(n0, _DAO, 0, [_A], [() => Alias]);
export var ListAliasesInput = struct(n0, _LAI, 0, [_RST, _N, _Li, _NTe], [0, 0, 1, 0]);
export var ListAliasesOutput = struct(n0, _LAO, 0, [_Al, _NTe], [() => AliasList, 0]);
export var RoutingStrategy = struct(n0, _RS, 0, [_T, _FI, _M], [0, 0, 0]);
export var UpdateAliasInput = struct(n0, _UAI, 0, [_AI, _N, _D, _RS], [0, 0, 0, () => RoutingStrategy]);
export var UpdateAliasOutput = struct(n0, _UAO, 0, [_A], [() => Alias]);
export var AliasList = list(n0, _ALli, 0, () => Alias);
export var CreateAlias = op(
  n0,
  _CAr,
  0,
  () => CreateAliasInput,
  () => CreateAliasOutput
);
export var DescribeAlias = op(
  n0,
  _DAes,
  0,
  () => DescribeAliasInput,
  () => DescribeAliasOutput
);
export var ListAliases = op(
  n0,
  _LAi,
  0,
  () => ListAliasesInput,
  () => ListAliasesOutput
);
export var UpdateAlias = op(
  n0,
  _UA,
  0,
  () => UpdateAliasInput,
  () => UpdateAliasOutput
);
