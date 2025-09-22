// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  IntegrationAlreadyExistsFault as __IntegrationAlreadyExistsFault,
  IntegrationConflictOperationFault as __IntegrationConflictOperationFault,
  IntegrationConflictStateFault as __IntegrationConflictStateFault,
  IntegrationNotFoundFault as __IntegrationNotFoundFault,
  IntegrationQuotaExceededFault as __IntegrationQuotaExceededFault,
  IntegrationSourceNotFoundFault as __IntegrationSourceNotFoundFault,
  IntegrationTargetNotFoundFault as __IntegrationTargetNotFoundFault,
} from "../models/index";
import {
  _AEC,
  _aQE,
  _c,
  _CIM,
  _CIr,
  _CTr,
  _D,
  _DI,
  _DIe,
  _DIF,
  _DIFL,
  _DIFVL,
  _DIM,
  _DIMe,
  _E,
  _e,
  _ECr,
  _EMr,
  _Fi,
  _hE,
  _IA,
  _IAEF,
  _ICOF,
  _ICSF,
  _IE,
  _IEL,
  _IL,
  _IM,
  _IN,
  _In,
  _INFF,
  _Int,
  _IQEF,
  _ISNFF,
  _ITNFF,
  _KMSKI,
  _M,
  _m,
  _MI,
  _MIM,
  _MR,
  _N,
  _SAo,
  _St,
  _T,
  _TA,
  _TL,
  _V,
  _Va,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateIntegrationMessage = struct(
  n0,
  _CIM,
  0,
  [_SAo, _TA, _IN, _KMSKI, _TL, _AEC, _D],
  [0, 0, 0, 0, [() => TagList, 0], 128 | 0, 0]
);
export var DeleteIntegrationMessage = struct(n0, _DIM, 0, [_IA], [0]);
export var DescribeIntegrationsFilter = struct(
  n0,
  _DIF,
  0,
  [_N, _V],
  [0, [() => DescribeIntegrationsFilterValueList, 0]]
);
export var DescribeIntegrationsMessage = struct(
  n0,
  _DIMe,
  0,
  [_IA, _MR, _M, _Fi],
  [0, 1, 0, [() => DescribeIntegrationsFilterList, 0]]
);
export var Integration = struct(
  n0,
  _In,
  0,
  [_IA, _IN, _SAo, _TA, _St, _E, _CTr, _D, _KMSKI, _AEC, _T],
  [0, 0, 0, 0, 0, [() => IntegrationErrorList, 0], 4, 0, 0, 128 | 0, [() => TagList, 0]]
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
export var IntegrationConflictStateFault = error(
  n0,
  _ICSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IntegrationConflictStateFault`, 400],
  },
  [_m],
  [0],

  __IntegrationConflictStateFault
);
export var IntegrationError = struct(n0, _IE, 0, [_ECr, _EMr], [0, 0]);
export var IntegrationNotFoundFault = error(
  n0,
  _INFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`IntegrationNotFoundFault`, 404],
  },
  [_m],
  [0],

  __IntegrationNotFoundFault
);
export var IntegrationQuotaExceededFault = error(
  n0,
  _IQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IntegrationQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __IntegrationQuotaExceededFault
);
export var IntegrationsMessage = struct(n0, _IM, 0, [_M, _Int], [0, [() => IntegrationList, 0]]);
export var IntegrationSourceNotFoundFault = error(
  n0,
  _ISNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`IntegrationSourceNotFoundFault`, 404],
  },
  [_m],
  [0],

  __IntegrationSourceNotFoundFault
);
export var IntegrationTargetNotFoundFault = error(
  n0,
  _ITNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`IntegrationTargetNotFoundFault`, 404],
  },
  [_m],
  [0],

  __IntegrationTargetNotFoundFault
);
export var ModifyIntegrationMessage = struct(n0, _MIM, 0, [_IA, _D, _IN], [0, 0, 0]);
export var DescribeIntegrationsFilterList = list(n0, _DIFL, 0, [
  () => DescribeIntegrationsFilter,
  {
    [_xN]: _DIF,
  },
]);
export var DescribeIntegrationsFilterValueList = list(n0, _DIFVL, 0, [
  0,
  {
    [_xN]: _Va,
  },
]);
export var IntegrationErrorList = list(n0, _IEL, 0, [
  () => IntegrationError,
  {
    [_xN]: _IE,
  },
]);
export var IntegrationList = list(n0, _IL, 0, [
  () => Integration,
  {
    [_xN]: _In,
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
export var DeleteIntegration = op(
  n0,
  _DI,
  0,
  () => DeleteIntegrationMessage,
  () => Integration
);
export var DescribeIntegrations = op(
  n0,
  _DIe,
  0,
  () => DescribeIntegrationsMessage,
  () => IntegrationsMessage
);
export var ModifyIntegration = op(
  n0,
  _MI,
  0,
  () => ModifyIntegrationMessage,
  () => Integration
);
