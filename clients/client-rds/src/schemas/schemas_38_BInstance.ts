// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BlueGreenDeploymentAlreadyExistsFault as __BlueGreenDeploymentAlreadyExistsFault,
  InstanceQuotaExceededFault as __InstanceQuotaExceededFault,
  SourceClusterNotSupportedFault as __SourceClusterNotSupportedFault,
  SourceDatabaseNotSupportedFault as __SourceDatabaseNotSupportedFault,
} from "../models/index";
import {
  _aQE,
  _BGD,
  _BGDAEF,
  _BGDN,
  _c,
  _CBGD,
  _CBGDR,
  _CBGDRr,
  _e,
  _hE,
  _IQEF,
  _m,
  _S,
  _SCNSF,
  _SDNSF,
  _T,
  _TAS,
  _TDBCPGN,
  _TDBIC,
  _TDBPGN,
  _TEV,
  _TI,
  _TST,
  _TSTa,
  _UTSC,
  n0,
  TagList,
} from "./schemas_0";
import { BlueGreenDeployment } from "./schemas_14_Blue";

/* eslint no-var: 0 */

export var BlueGreenDeploymentAlreadyExistsFault = error(
  n0,
  _BGDAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`BlueGreenDeploymentAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __BlueGreenDeploymentAlreadyExistsFault
);
export var CreateBlueGreenDeploymentRequest = struct(
  n0,
  _CBGDR,
  0,
  [_BGDN, _S, _TEV, _TDBPGN, _TDBCPGN, _T, _TDBIC, _UTSC, _TI, _TST, _TAS, _TSTa],
  [0, 0, 0, 0, 0, [() => TagList, 0], 0, 2, 1, 0, 1, 1]
);
export var CreateBlueGreenDeploymentResponse = struct(n0, _CBGDRr, 0, [_BGD], [[() => BlueGreenDeployment, 0]]);
export var InstanceQuotaExceededFault = error(
  n0,
  _IQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InstanceQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __InstanceQuotaExceededFault
);
export var SourceClusterNotSupportedFault = error(
  n0,
  _SCNSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SourceClusterNotSupportedFault`, 400],
  },
  [_m],
  [0],

  __SourceClusterNotSupportedFault
);
export var SourceDatabaseNotSupportedFault = error(
  n0,
  _SDNSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SourceDatabaseNotSupportedFault`, 400],
  },
  [_m],
  [0],

  __SourceDatabaseNotSupportedFault
);
export var CreateBlueGreenDeployment = op(
  n0,
  _CBGD,
  0,
  () => CreateBlueGreenDeploymentRequest,
  () => CreateBlueGreenDeploymentResponse
);
