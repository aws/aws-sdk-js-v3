// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ATI,
  _aTI,
  _ca,
  _cIl,
  _j,
  _jI,
  _mBS,
  _ow,
  _PFTPJ,
  _PFTPJI,
  _PFTPJO,
  _pro,
  _TPJ,
  _TPJL,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActionTypeId = struct(n0, _ATI, 0, [_ca, _ow, _pro, _v], [0, 0, 0, 0]);
export var PollForThirdPartyJobsInput = struct(n0, _PFTPJI, 0, [_aTI, _mBS], [() => ActionTypeId, 1]);
export var PollForThirdPartyJobsOutput = struct(n0, _PFTPJO, 0, [_j], [() => ThirdPartyJobList]);
export var ThirdPartyJob = struct(n0, _TPJ, 0, [_cIl, _jI], [0, 0]);
export var ThirdPartyJobList = list(n0, _TPJL, 0, () => ThirdPartyJob);
export var PollForThirdPartyJobs = op(
  n0,
  _PFTPJ,
  0,
  () => PollForThirdPartyJobsInput,
  () => PollForThirdPartyJobsOutput
);
