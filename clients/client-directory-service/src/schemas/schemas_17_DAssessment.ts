// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ADAssessmentLimitExceededException as __ADAssessmentLimitExceededException } from "../models/index";
import {
  _ADALEE,
  _AI,
  _c,
  _CDI,
  _DADA,
  _DADAR,
  _DADARe,
  _DI,
  _e,
  _HAAU,
  _HCIS,
  _II,
  _M,
  _RI,
  _SA,
  _SMIS,
  _UHAD,
  _UHADR,
  _UHADRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ADAssessmentLimitExceededException = error(
  n0,
  _ADALEE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __ADAssessmentLimitExceededException
);
export var DeleteADAssessmentRequest = struct(n0, _DADAR, 0, [_AI], [0]);
export var DeleteADAssessmentResult = struct(n0, _DADARe, 0, [_AI], [0]);
export var HybridAdministratorAccountUpdate = struct(n0, _HAAU, 0, [_SA], [0]);
export var HybridCustomerInstancesSettings = struct(n0, _HCIS, 0, [_CDI, _II], [64 | 0, 64 | 0]);
export var UpdateHybridADRequest = struct(
  n0,
  _UHADR,
  0,
  [_DI, _HAAU, _SMIS],
  [0, () => HybridAdministratorAccountUpdate, () => HybridCustomerInstancesSettings]
);
export var UpdateHybridADResult = struct(n0, _UHADRp, 0, [_DI, _AI], [0, 0]);
export var CustomerDnsIps = 64 | 0;

export var DeleteADAssessment = op(
  n0,
  _DADA,
  0,
  () => DeleteADAssessmentRequest,
  () => DeleteADAssessmentResult
);
export var UpdateHybridAD = op(
  n0,
  _UHAD,
  0,
  () => UpdateHybridADRequest,
  () => UpdateHybridADResult
);
