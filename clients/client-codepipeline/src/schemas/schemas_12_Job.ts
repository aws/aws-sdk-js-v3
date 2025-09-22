// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidClientTokenException as __InvalidClientTokenException,
  InvalidJobStateException as __InvalidJobStateException,
  InvalidNonceException as __InvalidNonceException,
  JobNotFoundException as __JobNotFoundException,
} from "../models/index";
import {
  _AJ,
  _AJI,
  _AJO,
  _ATPJ,
  _ATPJI,
  _ATPJO,
  _cl,
  _cT,
  _e,
  _eEI,
  _FD,
  _fD,
  _ICTE,
  _IJSE,
  _INE,
  _jI,
  _JNFE,
  _m,
  _n,
  _PJFR,
  _PJFRI,
  _PTPJFR,
  _PTPJFRI,
  _s,
  _t,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AcknowledgeJobInput = struct(n0, _AJI, 0, [_jI, _n], [0, 0]);
export var AcknowledgeJobOutput = struct(n0, _AJO, 0, [_s], [0]);
export var AcknowledgeThirdPartyJobInput = struct(n0, _ATPJI, 0, [_jI, _n, _cT], [0, 0, 0]);
export var AcknowledgeThirdPartyJobOutput = struct(n0, _ATPJO, 0, [_s], [0]);
export var FailureDetails = struct(n0, _FD, 0, [_t, _m, _eEI], [0, 0, 0]);
export var InvalidClientTokenException = error(
  n0,
  _ICTE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidClientTokenException
);
export var InvalidJobStateException = error(
  n0,
  _IJSE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidJobStateException
);
export var InvalidNonceException = error(
  n0,
  _INE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidNonceException
);
export var JobNotFoundException = error(
  n0,
  _JNFE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __JobNotFoundException
);
export var PutJobFailureResultInput = struct(n0, _PJFRI, 0, [_jI, _fD], [0, () => FailureDetails]);
export var PutThirdPartyJobFailureResultInput = struct(n0, _PTPJFRI, 0, [_jI, _cT, _fD], [0, 0, () => FailureDetails]);
export var AcknowledgeJob = op(
  n0,
  _AJ,
  0,
  () => AcknowledgeJobInput,
  () => AcknowledgeJobOutput
);
export var AcknowledgeThirdPartyJob = op(
  n0,
  _ATPJ,
  0,
  () => AcknowledgeThirdPartyJobInput,
  () => AcknowledgeThirdPartyJobOutput
);
export var PutJobFailureResult = op(
  n0,
  _PJFR,
  0,
  () => PutJobFailureResultInput,
  () => Unit
);
export var PutThirdPartyJobFailureResult = op(
  n0,
  _PTPJFR,
  0,
  () => PutThirdPartyJobFailureResultInput,
  () => Unit
);
