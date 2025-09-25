// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _Al,
  _AN,
  _CA,
  _CAI,
  _CAO,
  _DA,
  _DAI,
  _DAO,
  _GA,
  _GAI,
  _GAO,
  _KA,
  _LA,
  _LAI,
  _LAO,
  _MR,
  _NT,
  _UA,
  _UAI,
  _UAO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Alias = struct(n0, _A, 0, [_AN, _KA], [0, 0]);
export var CreateAliasInput = struct(n0, _CAI, 0, [_AN, _KA], [0, 0]);
export var CreateAliasOutput = struct(n0, _CAO, 0, [_A], [() => Alias]);
export var DeleteAliasInput = struct(n0, _DAI, 0, [_AN], [0]);
export var DeleteAliasOutput = struct(n0, _DAO, 0, [], []);
export var GetAliasInput = struct(n0, _GAI, 0, [_AN], [0]);
export var GetAliasOutput = struct(n0, _GAO, 0, [_A], [() => Alias]);
export var ListAliasesInput = struct(n0, _LAI, 0, [_KA, _NT, _MR], [0, 0, 1]);
export var ListAliasesOutput = struct(n0, _LAO, 0, [_Al, _NT], [() => Aliases, 0]);
export var UpdateAliasInput = struct(n0, _UAI, 0, [_AN, _KA], [0, 0]);
export var UpdateAliasOutput = struct(n0, _UAO, 0, [_A], [() => Alias]);
export var Aliases = list(n0, _Al, 0, () => Alias);
export var CreateAlias = op(
  n0,
  _CA,
  2,
  () => CreateAliasInput,
  () => CreateAliasOutput
);
export var DeleteAlias = op(
  n0,
  _DA,
  2,
  () => DeleteAliasInput,
  () => DeleteAliasOutput
);
export var GetAlias = op(
  n0,
  _GA,
  0,
  () => GetAliasInput,
  () => GetAliasOutput
);
export var ListAliases = op(
  n0,
  _LA,
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
