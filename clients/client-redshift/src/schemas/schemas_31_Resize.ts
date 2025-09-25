// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResizeNotFoundFault as __ResizeNotFoundFault } from "../models/index";
import {
  _aQE,
  _ARRIMBPS,
  _c,
  _CIl,
  _CRa,
  _CRM,
  _DRe,
  _DRM,
  _DTPP,
  _e,
  _ETIS,
  _ETTCIS,
  _hE,
  _ITC,
  _ITIP,
  _ITNS,
  _m,
  _Me,
  _PIMB,
  _RNFF,
  _RPM,
  _RTes,
  _St,
  _TCT,
  _TET,
  _TNON,
  _TNT,
  _TRDIMB,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelResizeMessage = struct(n0, _CRM, 0, [_CIl], [0]);
export var DescribeResizeMessage = struct(n0, _DRM, 0, [_CIl], [0]);
export var ResizeNotFoundFault = error(
  n0,
  _RNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResizeNotFound`, 404],
  },
  [_m],
  [0],

  __ResizeNotFoundFault
);
export var ResizeProgressMessage = struct(
  n0,
  _RPM,
  0,
  [_TNT, _TNON, _TCT, _St, _ITC, _ITIP, _ITNS, _ARRIMBPS, _TRDIMB, _PIMB, _ETIS, _ETTCIS, _RTes, _Me, _TET, _DTPP],
  [0, 1, 0, 0, 64 | 0, 64 | 0, 64 | 0, 1, 1, 1, 1, 1, 0, 0, 0, 1]
);
export var ImportTablesCompleted = 64 | 0;

export var ImportTablesInProgress = 64 | 0;

export var ImportTablesNotStarted = 64 | 0;

export var CancelResize = op(
  n0,
  _CRa,
  0,
  () => CancelResizeMessage,
  () => ResizeProgressMessage
);
export var DescribeResize = op(
  n0,
  _DRe,
  0,
  () => DescribeResizeMessage,
  () => ResizeProgressMessage
);
