// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CCo,
  _cLA,
  _cN,
  _co,
  _cTl,
  _dCe,
  _dSe,
  _eI,
  _h,
  _iS,
  _k,
  _KCCDC,
  _KCLA,
  _KCLAx,
  _sB,
  _sK,
  _sOV,
  _UKCCC,
  _UKCCCR,
  _UKCCCRp,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CodeConfiguration = struct(n0, _CCo, 0, [_sB, _sK, _sOV], [0, 0, 0]);
export var KxClusterCodeDeploymentConfiguration = struct(n0, _KCCDC, 0, [_dSe], [0]);
export var KxCommandLineArgument = struct(n0, _KCLA, 0, [_k, _va], [0, 0]);
export var UpdateKxClusterCodeConfigurationRequest = struct(
  n0,
  _UKCCCR,
  0,
  [_eI, _cN, _cTl, _co, _iS, _cLA, _dCe],
  [
    [0, 1],
    [0, 1],
    [0, 4],
    () => CodeConfiguration,
    0,
    () => KxCommandLineArguments,
    () => KxClusterCodeDeploymentConfiguration,
  ]
);
export var UpdateKxClusterCodeConfigurationResponse = struct(n0, _UKCCCRp, 0, [], []);
export var KxCommandLineArguments = list(n0, _KCLAx, 0, () => KxCommandLineArgument);
export var UpdateKxClusterCodeConfiguration = op(
  n0,
  _UKCCC,
  {
    [_h]: ["PUT", "/kx/environments/{environmentId}/clusters/{clusterName}/configuration/code", 200],
  },
  () => UpdateKxClusterCodeConfigurationRequest,
  () => UpdateKxClusterCodeConfigurationResponse
);
