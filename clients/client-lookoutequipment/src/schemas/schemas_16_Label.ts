// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CA,
  _DLe,
  _DLGe,
  _DLGRe,
  _DLGRes,
  _DLRe,
  _DLRes,
  _E,
  _ET,
  _FC,
  _FCa,
  _LGA,
  _LGN,
  _LI,
  _N,
  _R,
  _ST,
  _UA,
  _ULG,
  _ULGR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeLabelGroupRequest = struct(n0, _DLGRe, 0, [_LGN], [0]);
export var DescribeLabelGroupResponse = struct(n0, _DLGRes, 0, [_LGN, _LGA, _FC, _CA, _UA], [0, 0, 64 | 0, 4, 4]);
export var DescribeLabelRequest = struct(n0, _DLRe, 0, [_LGN, _LI], [0, 0]);
export var DescribeLabelResponse = struct(
  n0,
  _DLRes,
  0,
  [_LGN, _LGA, _LI, _ST, _ET, _R, _FCa, _N, _E, _CA],
  [0, 0, 0, 4, 4, 0, 0, 0, 0, 4]
);
export var UpdateLabelGroupRequest = struct(n0, _ULGR, 0, [_LGN, _FC], [0, 64 | 0]);
export var FaultCodes = 64 | 0;

export var DescribeLabel = op(
  n0,
  _DLe,
  0,
  () => DescribeLabelRequest,
  () => DescribeLabelResponse
);
export var DescribeLabelGroup = op(
  n0,
  _DLGe,
  0,
  () => DescribeLabelGroupRequest,
  () => DescribeLabelGroupResponse
);
export var UpdateLabelGroup = op(
  n0,
  _ULG,
  0,
  () => UpdateLabelGroupRequest,
  () => Unit
);
