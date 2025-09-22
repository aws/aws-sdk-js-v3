// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DHSSFO, _DHSSFOR, _hSASFO, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Describe";

/* eslint no-var: 0 */

export var DescribeHealthServiceStatusForOrganizationResponse = struct(n0, _DHSSFOR, 0, [_hSASFO], [0]);
export var DescribeHealthServiceStatusForOrganization = op(
  n0,
  _DHSSFO,
  2,
  () => Unit,
  () => DescribeHealthServiceStatusForOrganizationResponse
);
