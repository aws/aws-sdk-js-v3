// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aE, _DOC, _DOCR, _DOCRe, _h, _jN, _mALR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeOrganizationConfigurationRequest = struct(n0, _DOCR, 0, [], []);
export var DescribeOrganizationConfigurationResponse = struct(
  n0,
  _DOCRe,
  0,
  [_aE, _mALR],
  [
    [
      2,
      {
        [_jN]: _aE,
      },
    ],
    [
      2,
      {
        [_jN]: _mALR,
      },
    ],
  ]
);
export var DescribeOrganizationConfiguration = op(
  n0,
  _DOC,
  {
    [_h]: ["GET", "/admin/configuration", 200],
  },
  () => DescribeOrganizationConfigurationRequest,
  () => DescribeOrganizationConfigurationResponse
);
