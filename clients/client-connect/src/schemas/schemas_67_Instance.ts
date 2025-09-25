// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _ATt,
  _Att,
  _Attr,
  _CT,
  _DIAe,
  _DIARe,
  _DIARes,
  _h,
  _hQ,
  _II,
  _LIA,
  _LIAR,
  _LIARi,
  _mR,
  _MRa,
  _NT,
  _nT,
  _UIA,
  _UIAR,
  _V,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Attribute = struct(n0, _Att, 0, [_ATt, _V], [0, 0]);
export var DescribeInstanceAttributeRequest = struct(
  n0,
  _DIARe,
  0,
  [_II, _ATt],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeInstanceAttributeResponse = struct(n0, _DIARes, 0, [_Att], [() => Attribute]);
export var ListInstanceAttributesRequest = struct(
  n0,
  _LIAR,
  0,
  [_II, _NT, _MRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListInstanceAttributesResponse = struct(n0, _LIARi, 0, [_Attr, _NT], [() => AttributesList, 0]);
export var UpdateInstanceAttributeRequest = struct(n0, _UIAR, 0, [_II, _ATt, _V, _CT], [[0, 1], [0, 1], 0, [0, 4]]);
export var AttributesList = list(n0, _AL, 0, () => Attribute);
export var DescribeInstanceAttribute = op(
  n0,
  _DIAe,
  {
    [_h]: ["GET", "/instance/{InstanceId}/attribute/{AttributeType}", 200],
  },
  () => DescribeInstanceAttributeRequest,
  () => DescribeInstanceAttributeResponse
);
export var ListInstanceAttributes = op(
  n0,
  _LIA,
  {
    [_h]: ["GET", "/instance/{InstanceId}/attributes", 200],
  },
  () => ListInstanceAttributesRequest,
  () => ListInstanceAttributesResponse
);
export var UpdateInstanceAttribute = op(
  n0,
  _UIA,
  {
    [_h]: ["POST", "/instance/{InstanceId}/attribute/{AttributeType}", 200],
  },
  () => UpdateInstanceAttributeRequest,
  () => Unit
);
