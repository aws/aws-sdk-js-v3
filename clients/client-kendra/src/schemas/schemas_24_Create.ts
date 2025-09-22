// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ACL, _CACC, _CACCR, _CACCRr, _CTli, _De, _HACL, _I, _II, _N, n0 } from "./schemas_0";
import { HierarchicalPrincipalList, PrincipalList } from "./schemas_3_Control";

/* eslint no-var: 0 */

export var CreateAccessControlConfigurationRequest = struct(
  n0,
  _CACCR,
  0,
  [_II, _N, _De, _ACL, _HACL, _CTli],
  [0, 0, 0, () => PrincipalList, () => HierarchicalPrincipalList, [0, 4]]
);
export var CreateAccessControlConfigurationResponse = struct(n0, _CACCRr, 0, [_I], [0]);
export var CreateAccessControlConfiguration = op(
  n0,
  _CACC,
  0,
  () => CreateAccessControlConfigurationRequest,
  () => CreateAccessControlConfigurationResponse
);
