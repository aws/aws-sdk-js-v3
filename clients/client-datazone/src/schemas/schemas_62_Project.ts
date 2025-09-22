// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import { _dI, _DPM, _DPMI, _DPMO, _gIr, _ht, _Me, _me, _pIr, _uI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProjectMembershipInput = struct(n0, _DPMI, 0, [_dI, _pIr, _me], [[0, 1], [0, 1], () => Member]);
export var DeleteProjectMembershipOutput = struct(n0, _DPMO, 0, [], []);
export var Member = uni(n0, _Me, 0, [_uI, _gIr], [0, 0]);
export var DeleteProjectMembership = op(
  n0,
  _DPM,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/deleteMembership", 204],
  },
  () => DeleteProjectMembershipInput,
  () => DeleteProjectMembershipOutput
);
