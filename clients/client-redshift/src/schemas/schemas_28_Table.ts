// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { TableRestoreNotFoundFault as __TableRestoreNotFoundFault } from "../models/index";
import {
  _aQE,
  _c,
  _CIl,
  _DTRS,
  _DTRSM,
  _e,
  _hE,
  _M,
  _m,
  _Me,
  _MR,
  _NTN,
  _PIMB,
  _RTeq,
  _SDN,
  _SI,
  _SSN,
  _St,
  _STN,
  _TDIMB,
  _TDN,
  _TRNFF,
  _TRRI,
  _TRS,
  _TRSD,
  _TRSL,
  _TRSM,
  _TSN,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTableRestoreStatusMessage = struct(n0, _DTRSM, 0, [_CIl, _TRRI, _MR, _M], [0, 0, 1, 0]);
export var TableRestoreNotFoundFault = error(
  n0,
  _TRNFF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TableRestoreNotFoundFault`, 400],
  },
  [_m],
  [0],

  __TableRestoreNotFoundFault
);
export var TableRestoreStatus = struct(
  n0,
  _TRS,
  0,
  [_TRRI, _St, _Me, _RTeq, _PIMB, _TDIMB, _CIl, _SI, _SDN, _SSN, _STN, _TDN, _TSN, _NTN],
  [0, 0, 0, 4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var TableRestoreStatusMessage = struct(n0, _TRSM, 0, [_TRSD, _M], [[() => TableRestoreStatusList, 0], 0]);
export var TableRestoreStatusList = list(n0, _TRSL, 0, [
  () => TableRestoreStatus,
  {
    [_xN]: _TRS,
  },
]);
export var DescribeTableRestoreStatus = op(
  n0,
  _DTRS,
  0,
  () => DescribeTableRestoreStatusMessage,
  () => TableRestoreStatusMessage
);
