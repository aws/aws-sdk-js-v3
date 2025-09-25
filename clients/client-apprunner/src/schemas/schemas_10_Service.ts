// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CAr, _LS, _LSR, _LSRi, _MR, _NT, _S, _SA, _SI, _SN, _SS, _SSL, _SU, _UA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListServicesRequest = struct(n0, _LSR, 0, [_NT, _MR], [0, 1]);
export var ListServicesResponse = struct(n0, _LSRi, 0, [_SSL, _NT], [() => ServiceSummaryList, 0]);
export var ServiceSummary = struct(n0, _SS, 0, [_SN, _SI, _SA, _SU, _CAr, _UA, _S], [0, 0, 0, 0, 4, 4, 0]);
export var ServiceSummaryList = list(n0, _SSL, 0, () => ServiceSummary);
export var ListServices = op(
  n0,
  _LS,
  0,
  () => ListServicesRequest,
  () => ListServicesResponse
);
