// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aSF,
  _BGRSC,
  _BGRSCR,
  _BGRSCRa,
  _f,
  _fC,
  _fR,
  _rAe,
  _rN,
  _rNe,
  _RSCe,
  _RSCF,
  _RSCFL,
  _RSCL,
  _sC,
  _sF,
  _sOP,
  n0,
} from "./schemas_0";
import { ScanningRepositoryFilterList } from "./schemas_2_Scanning";

/* eslint no-var: 0 */

export var BatchGetRepositoryScanningConfigurationRequest = struct(n0, _BGRSCR, 0, [_rNe], [64 | 0]);
export var BatchGetRepositoryScanningConfigurationResponse = struct(
  n0,
  _BGRSCRa,
  0,
  [_sC, _f],
  [() => RepositoryScanningConfigurationList, () => RepositoryScanningConfigurationFailureList]
);
export var RepositoryScanningConfiguration = struct(
  n0,
  _RSCe,
  0,
  [_rAe, _rN, _sOP, _sF, _aSF],
  [0, 0, 2, 0, () => ScanningRepositoryFilterList]
);
export var RepositoryScanningConfigurationFailure = struct(n0, _RSCF, 0, [_rN, _fC, _fR], [0, 0, 0]);
export var RepositoryScanningConfigurationFailureList = list(
  n0,
  _RSCFL,
  0,
  () => RepositoryScanningConfigurationFailure
);
export var RepositoryScanningConfigurationList = list(n0, _RSCL, 0, () => RepositoryScanningConfiguration);
export var ScanningConfigurationRepositoryNameList = 64 | 0;

export var BatchGetRepositoryScanningConfiguration = op(
  n0,
  _BGRSC,
  0,
  () => BatchGetRepositoryScanningConfigurationRequest,
  () => BatchGetRepositoryScanningConfigurationResponse
);
