// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DET,
  _DETM,
  _DETR,
  _EDN,
  _EN,
  _ET,
  _F,
  _Ma,
  _MR,
  _RIEMV,
  _SCDC,
  _SET,
  _SETL,
  _SETu,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEndpointTypesMessage = struct(n0, _DETM, 0, [_F, _MR, _Ma], [[() => FilterList, 0], 1, 0]);
export var DescribeEndpointTypesResponse = struct(n0, _DETR, 0, [_Ma, _SET], [0, [() => SupportedEndpointTypeList, 0]]);
export var SupportedEndpointType = struct(n0, _SETu, 0, [_EN, _SCDC, _ET, _RIEMV, _EDN], [0, 2, 0, 0, 0]);
export var SupportedEndpointTypeList = list(n0, _SETL, 0, [
  () => SupportedEndpointType,
  {
    [_xN]: _SETu,
  },
]);
export var DescribeEndpointTypes = op(
  n0,
  _DET,
  0,
  () => DescribeEndpointTypesMessage,
  () => DescribeEndpointTypesResponse
);
