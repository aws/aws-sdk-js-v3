// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AES, _AEu, _CTon, _DOC, _DOCR, _DOCRe, _h, _MALR, _OC, _SM, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeOrganizationConfigurationRequest = struct(n0, _DOCR, 0, [], []);
export var DescribeOrganizationConfigurationResponse = struct(
  n0,
  _DOCRe,
  0,
  [_AEu, _MALR, _AES, _OC],
  [2, 2, 0, () => OrganizationConfiguration]
);
export var OrganizationConfiguration = struct(n0, _OC, 0, [_CTon, _St, _SM], [0, 0, 0]);
export var DescribeOrganizationConfiguration = op(
  n0,
  _DOC,
  {
    [_h]: ["GET", "/organization/configuration", 200],
  },
  () => DescribeOrganizationConfigurationRequest,
  () => DescribeOrganizationConfigurationResponse
);
