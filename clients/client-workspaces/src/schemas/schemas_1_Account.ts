// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AM,
  _AMc,
  _AML,
  _DA,
  _DAM,
  _DAMR,
  _DAMRe,
  _DAR,
  _DARe,
  _DTAT,
  _DTMCR,
  _DTS,
  _EC,
  _EM,
  _LAMCR,
  _LAMCRR,
  _LAMCRRi,
  _M,
  _MCR,
  _MCRC,
  _MR,
  _MS,
  _NT,
  _ST,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountModification = struct(n0, _AM, 0, [_MS, _DTS, _DTMCR, _ST, _EC, _EM], [0, 0, 0, 4, 0, 0]);
export var DescribeAccountModificationsRequest = struct(n0, _DAMR, 0, [_NT], [0]);
export var DescribeAccountModificationsResult = struct(n0, _DAMRe, 0, [_AMc, _NT], [() => AccountModificationList, 0]);
export var DescribeAccountRequest = struct(n0, _DAR, 0, [], []);
export var DescribeAccountResult = struct(n0, _DARe, 0, [_DTS, _DTMCR, _DTAT, _M], [0, 0, 0, 0]);
export var ListAvailableManagementCidrRangesRequest = struct(n0, _LAMCRR, 0, [_MCRC, _MR, _NT], [0, 1, 0]);
export var ListAvailableManagementCidrRangesResult = struct(n0, _LAMCRRi, 0, [_MCR, _NT], [64 | 0, 0]);
export var AccountModificationList = list(n0, _AML, 0, () => AccountModification);
export var DedicatedTenancyCidrRangeList = 64 | 0;

export var DescribeAccount = op(
  n0,
  _DA,
  0,
  () => DescribeAccountRequest,
  () => DescribeAccountResult
);
export var DescribeAccountModifications = op(
  n0,
  _DAM,
  0,
  () => DescribeAccountModificationsRequest,
  () => DescribeAccountModificationsResult
);
export var ListAvailableManagementCidrRanges = op(
  n0,
  _LAMCR,
  0,
  () => ListAvailableManagementCidrRangesRequest,
  () => ListAvailableManagementCidrRangesResult
);
