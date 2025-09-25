// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _DTPesc,
  _DTPRescr,
  _DTPRescri,
  _h,
  _Per,
  _RI,
  _St,
  _TAo,
  _TIo,
  n0,
  ResourcePermissionList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTopicPermissionsRequest = struct(
  n0,
  _DTPRescr,
  0,
  [_AAI, _TIo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeTopicPermissionsResponse = struct(
  n0,
  _DTPRescri,
  0,
  [_TIo, _TAo, _Per, _St, _RI],
  [0, 0, () => ResourcePermissionList, [1, 32], 0]
);
export var DescribeTopicPermissions = op(
  n0,
  _DTPesc,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/topics/{TopicId}/permissions", 200],
  },
  () => DescribeTopicPermissionsRequest,
  () => DescribeTopicPermissionsResponse
);
