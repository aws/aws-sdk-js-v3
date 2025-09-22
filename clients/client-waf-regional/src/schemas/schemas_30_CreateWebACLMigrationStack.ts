// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { WAFEntityMigrationException as __WAFEntityMigrationException } from "../models/index";
import {
  _c,
  _CWACLMS,
  _CWACLMSR,
  _CWACLMSRr,
  _e,
  _IUT,
  _m,
  _MER,
  _MET,
  _SBN,
  _SOU,
  _WACLI,
  _WAFEME,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateWebACLMigrationStackRequest = struct(n0, _CWACLMSR, 0, [_WACLI, _SBN, _IUT], [0, 0, 2]);
export var CreateWebACLMigrationStackResponse = struct(n0, _CWACLMSRr, 0, [_SOU], [0]);
export var WAFEntityMigrationException = error(
  n0,
  _WAFEME,
  {
    [_e]: _c,
  },
  [_m, _MET, _MER],
  [0, 0, 0],

  __WAFEntityMigrationException
);
export var CreateWebACLMigrationStack = op(
  n0,
  _CWACLMS,
  0,
  () => CreateWebACLMigrationStackRequest,
  () => CreateWebACLMigrationStackResponse
);
