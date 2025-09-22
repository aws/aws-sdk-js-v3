// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AS,
  _AT,
  _CI,
  _CLFICC,
  _CLFICCR,
  _CLFICCRr,
  _DLFICCe,
  _DLFICCRes,
  _DLFICCResc,
  _DLPL,
  _EF,
  _EFC,
  _h,
  _IA,
  _RSe,
  _SR,
  _St,
  _ULFICC,
  _ULFICCR,
  _ULFICCRp,
  DataLakePrincipal,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateLakeFormationIdentityCenterConfigurationRequest = struct(
  n0,
  _CLFICCR,
  0,
  [_CI, _IA, _EF, _SR],
  [0, 0, () => ExternalFilteringConfiguration, () => DataLakePrincipalList]
);
export var CreateLakeFormationIdentityCenterConfigurationResponse = struct(n0, _CLFICCRr, 0, [_AA], [0]);
export var DescribeLakeFormationIdentityCenterConfigurationRequest = struct(n0, _DLFICCRes, 0, [_CI], [0]);
export var DescribeLakeFormationIdentityCenterConfigurationResponse = struct(
  n0,
  _DLFICCResc,
  0,
  [_CI, _IA, _AA, _EF, _SR, _RSe],
  [0, 0, 0, () => ExternalFilteringConfiguration, () => DataLakePrincipalList, 0]
);
export var ExternalFilteringConfiguration = struct(n0, _EFC, 0, [_St, _AT], [0, 64 | 0]);
export var UpdateLakeFormationIdentityCenterConfigurationRequest = struct(
  n0,
  _ULFICCR,
  0,
  [_CI, _SR, _AS, _EF],
  [0, () => DataLakePrincipalList, 0, () => ExternalFilteringConfiguration]
);
export var UpdateLakeFormationIdentityCenterConfigurationResponse = struct(n0, _ULFICCRp, 0, [], []);
export var DataLakePrincipalList = list(n0, _DLPL, 0, () => DataLakePrincipal);
export var ScopeTargets = 64 | 0;

export var CreateLakeFormationIdentityCenterConfiguration = op(
  n0,
  _CLFICC,
  {
    [_h]: ["POST", "/CreateLakeFormationIdentityCenterConfiguration", 200],
  },
  () => CreateLakeFormationIdentityCenterConfigurationRequest,
  () => CreateLakeFormationIdentityCenterConfigurationResponse
);
export var DescribeLakeFormationIdentityCenterConfiguration = op(
  n0,
  _DLFICCe,
  {
    [_h]: ["POST", "/DescribeLakeFormationIdentityCenterConfiguration", 200],
  },
  () => DescribeLakeFormationIdentityCenterConfigurationRequest,
  () => DescribeLakeFormationIdentityCenterConfigurationResponse
);
export var UpdateLakeFormationIdentityCenterConfiguration = op(
  n0,
  _ULFICC,
  {
    [_h]: ["POST", "/UpdateLakeFormationIdentityCenterConfiguration", 200],
  },
  () => UpdateLakeFormationIdentityCenterConfigurationRequest,
  () => UpdateLakeFormationIdentityCenterConfigurationResponse
);
