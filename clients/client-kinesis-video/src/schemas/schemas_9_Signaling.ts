// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CARN, _CN, _DMSC, _DMSCI, _DMSCO, _h, _MSC, n0 } from "./schemas_0";
import { MediaStorageConfiguration } from "./schemas_12_MediaStorage";

/* eslint no-var: 0 */

export var DescribeMediaStorageConfigurationInput = struct(n0, _DMSCI, 0, [_CN, _CARN], [0, 0]);
export var DescribeMediaStorageConfigurationOutput = struct(n0, _DMSCO, 0, [_MSC], [() => MediaStorageConfiguration]);
export var DescribeMediaStorageConfiguration = op(
  n0,
  _DMSC,
  {
    [_h]: ["POST", "/describeMediaStorageConfiguration", 200],
  },
  () => DescribeMediaStorageConfigurationInput,
  () => DescribeMediaStorageConfigurationOutput
);
