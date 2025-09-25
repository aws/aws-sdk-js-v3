// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  NoAvailableOrganizationException as __NoAvailableOrganizationException,
  OrganizationAllFeaturesNotEnabledException as __OrganizationAllFeaturesNotEnabledException,
} from "../models/index";
import { _cl, _e, _m, _NAOE, _OAFNEE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var NoAvailableOrganizationException = error(
  n0,
  _NAOE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __NoAvailableOrganizationException
);
export var OrganizationAllFeaturesNotEnabledException = error(
  n0,
  _OAFNEE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __OrganizationAllFeaturesNotEnabledException
);
