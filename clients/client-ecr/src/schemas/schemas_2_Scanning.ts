// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _fi,
  _fT,
  _GRSC,
  _GRSCR,
  _GRSCRe,
  _PRSC,
  _PRSCR,
  _PRSCRu,
  _rF,
  _rI,
  _RSC,
  _rSC,
  _RSR,
  _RSRL,
  _ru,
  _sCc,
  _sF,
  _SRF,
  _SRFL,
  _sT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRegistryScanningConfigurationRequest = struct(n0, _GRSCR, 0, [], []);
export var GetRegistryScanningConfigurationResponse = struct(
  n0,
  _GRSCRe,
  0,
  [_rI, _sCc],
  [0, () => RegistryScanningConfiguration]
);
export var PutRegistryScanningConfigurationRequest = struct(
  n0,
  _PRSCR,
  0,
  [_sT, _ru],
  [0, () => RegistryScanningRuleList]
);
export var PutRegistryScanningConfigurationResponse = struct(
  n0,
  _PRSCRu,
  0,
  [_rSC],
  [() => RegistryScanningConfiguration]
);
export var RegistryScanningConfiguration = struct(n0, _RSC, 0, [_sT, _ru], [0, () => RegistryScanningRuleList]);
export var RegistryScanningRule = struct(n0, _RSR, 0, [_sF, _rF], [0, () => ScanningRepositoryFilterList]);
export var ScanningRepositoryFilter = struct(n0, _SRF, 0, [_fi, _fT], [0, 0]);
export var RegistryScanningRuleList = list(n0, _RSRL, 0, () => RegistryScanningRule);
export var ScanningRepositoryFilterList = list(n0, _SRFL, 0, () => ScanningRepositoryFilter);
export var GetRegistryScanningConfiguration = op(
  n0,
  _GRSC,
  0,
  () => GetRegistryScanningConfigurationRequest,
  () => GetRegistryScanningConfigurationResponse
);
export var PutRegistryScanningConfiguration = op(
  n0,
  _PRSC,
  0,
  () => PutRegistryScanningConfigurationRequest,
  () => PutRegistryScanningConfigurationResponse
);
