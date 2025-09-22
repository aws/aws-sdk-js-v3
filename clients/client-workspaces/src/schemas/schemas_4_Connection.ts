// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _ACA,
  _ACAR,
  _ACARs,
  _AIl,
  _AIli,
  _AS,
  _As,
  _CA,
  _CAAL,
  _CAAo,
  _CAL,
  _CAo,
  _CCA,
  _CCAR,
  _CCARr,
  _CI,
  _CSo,
  _DCA,
  _DCAe,
  _DCAi,
  _DCAR,
  _DCARe,
  _DCARes,
  _DCAResc,
  _DCARi,
  _DCARis,
  _Li,
  _NT,
  _OAI,
  _RI,
  _S,
  _T,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateConnectionAliasRequest = struct(n0, _ACAR, 0, [_AIl, _RI], [0, 0]);
export var AssociateConnectionAliasResult = struct(n0, _ACARs, 0, [_CI], [0]);
export var ConnectionAlias = struct(
  n0,
  _CA,
  0,
  [_CSo, _AIl, _S, _OAI, _As],
  [0, 0, 0, 0, () => ConnectionAliasAssociationList]
);
export var ConnectionAliasAssociation = struct(n0, _CAAo, 0, [_AS, _AAI, _RI, _CI], [0, 0, 0, 0]);
export var CreateConnectionAliasRequest = struct(n0, _CCAR, 0, [_CSo, _T], [0, () => TagList]);
export var CreateConnectionAliasResult = struct(n0, _CCARr, 0, [_AIl], [0]);
export var DeleteConnectionAliasRequest = struct(n0, _DCAR, 0, [_AIl], [0]);
export var DeleteConnectionAliasResult = struct(n0, _DCARe, 0, [], []);
export var DescribeConnectionAliasesRequest = struct(n0, _DCARes, 0, [_AIli, _RI, _Li, _NT], [64 | 0, 0, 1, 0]);
export var DescribeConnectionAliasesResult = struct(n0, _DCAResc, 0, [_CAo, _NT], [() => ConnectionAliasList, 0]);
export var DisassociateConnectionAliasRequest = struct(n0, _DCARi, 0, [_AIl], [0]);
export var DisassociateConnectionAliasResult = struct(n0, _DCARis, 0, [], []);
export var ConnectionAliasAssociationList = list(n0, _CAAL, 0, () => ConnectionAliasAssociation);
export var ConnectionAliasIdList = 64 | 0;

export var ConnectionAliasList = list(n0, _CAL, 0, () => ConnectionAlias);
export var AssociateConnectionAlias = op(
  n0,
  _ACA,
  0,
  () => AssociateConnectionAliasRequest,
  () => AssociateConnectionAliasResult
);
export var CreateConnectionAlias = op(
  n0,
  _CCA,
  0,
  () => CreateConnectionAliasRequest,
  () => CreateConnectionAliasResult
);
export var DeleteConnectionAlias = op(
  n0,
  _DCA,
  0,
  () => DeleteConnectionAliasRequest,
  () => DeleteConnectionAliasResult
);
export var DescribeConnectionAliases = op(
  n0,
  _DCAe,
  0,
  () => DescribeConnectionAliasesRequest,
  () => DescribeConnectionAliasesResult
);
export var DisassociateConnectionAlias = op(
  n0,
  _DCAi,
  0,
  () => DisassociateConnectionAliasRequest,
  () => DisassociateConnectionAliasResult
);
