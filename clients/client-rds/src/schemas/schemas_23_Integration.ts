// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  IntegrationAlreadyExistsFault as __IntegrationAlreadyExistsFault,
  IntegrationConflictOperationFault as __IntegrationConflictOperationFault,
  IntegrationQuotaExceededFault as __IntegrationQuotaExceededFault,
} from "../models/index";
import {
  _AEC,
  _aQE,
  _c,
  _CIM,
  _CIr,
  _CT,
  _D,
  _DFa,
  _e,
  _ECr,
  _EMr,
  _Er,
  _hE,
  _IAEF,
  _IAn,
  _ICOF,
  _IE,
  _IEL,
  _IN,
  _Int,
  _IQEFn,
  _KMSKI,
  _m,
  _SA,
  _St,
  _T,
  _TA,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateIntegrationMessage = struct(
  n0,
  _CIM,
  0,
  [_SA, _TA, _IN, _KMSKI, _AEC, _T, _DFa, _D],
  [0, 0, 0, 0, 128 | 0, [() => TagList, 0], 0, 0]
);
export var Integration = struct(
  n0,
  _Int,
  0,
  [_SA, _TA, _IN, _IAn, _KMSKI, _AEC, _St, _T, _CT, _Er, _DFa, _D],
  [0, 0, 0, 0, 0, 128 | 0, 0, [() => TagList, 0], 4, [() => IntegrationErrorList, 0], 0, 0]
);
export var IntegrationAlreadyExistsFault = error(
  n0,
  _IAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IntegrationAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __IntegrationAlreadyExistsFault
);
export var IntegrationConflictOperationFault = error(
  n0,
  _ICOF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IntegrationConflictOperationFault`, 400],
  },
  [_m],
  [0],

  __IntegrationConflictOperationFault
);
export var IntegrationError = struct(n0, _IE, 0, [_ECr, _EMr], [0, 0]);
export var IntegrationQuotaExceededFault = error(
  n0,
  _IQEFn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IntegrationQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __IntegrationQuotaExceededFault
);
export var IntegrationErrorList = list(n0, _IEL, 0, [
  () => IntegrationError,
  {
    [_xN]: _IE,
  },
]);
export var EncryptionContextMap = 128 | 0;

export var CreateIntegration = op(
  n0,
  _CIr,
  0,
  () => CreateIntegrationMessage,
  () => Integration
);
