// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aI,
  _CDLES,
  _CDLESR,
  _CDLESRr,
  _eTTL,
  _GDLES,
  _GDLESR,
  _GDLESRe,
  _h,
  _nE,
  _RDLDA,
  _RDLDAR,
  _RDLDARe,
  _sP,
  _UDLES,
  _UDLESR,
  _UDLESRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDataLakeExceptionSubscriptionRequest = struct(n0, _CDLESR, 0, [_sP, _nE, _eTTL], [0, 0, 1]);
export var CreateDataLakeExceptionSubscriptionResponse = struct(n0, _CDLESRr, 0, [], []);
export var GetDataLakeExceptionSubscriptionRequest = struct(n0, _GDLESR, 0, [], []);
export var GetDataLakeExceptionSubscriptionResponse = struct(n0, _GDLESRe, 0, [_sP, _nE, _eTTL], [0, 0, 1]);
export var RegisterDataLakeDelegatedAdministratorRequest = struct(n0, _RDLDAR, 0, [_aI], [0]);
export var RegisterDataLakeDelegatedAdministratorResponse = struct(n0, _RDLDARe, 0, [], []);
export var UpdateDataLakeExceptionSubscriptionRequest = struct(n0, _UDLESR, 0, [_sP, _nE, _eTTL], [0, 0, 1]);
export var UpdateDataLakeExceptionSubscriptionResponse = struct(n0, _UDLESRp, 0, [], []);
export var CreateDataLakeExceptionSubscription = op(
  n0,
  _CDLES,
  {
    [_h]: ["POST", "/v1/datalake/exceptions/subscription", 200],
  },
  () => CreateDataLakeExceptionSubscriptionRequest,
  () => CreateDataLakeExceptionSubscriptionResponse
);
export var GetDataLakeExceptionSubscription = op(
  n0,
  _GDLES,
  {
    [_h]: ["GET", "/v1/datalake/exceptions/subscription", 200],
  },
  () => GetDataLakeExceptionSubscriptionRequest,
  () => GetDataLakeExceptionSubscriptionResponse
);
export var RegisterDataLakeDelegatedAdministrator = op(
  n0,
  _RDLDA,
  {
    [_h]: ["POST", "/v1/datalake/delegate", 200],
  },
  () => RegisterDataLakeDelegatedAdministratorRequest,
  () => RegisterDataLakeDelegatedAdministratorResponse
);
export var UpdateDataLakeExceptionSubscription = op(
  n0,
  _UDLES,
  {
    [_h]: ["PUT", "/v1/datalake/exceptions/subscription", 200],
  },
  () => UpdateDataLakeExceptionSubscriptionRequest,
  () => UpdateDataLakeExceptionSubscriptionResponse
);
