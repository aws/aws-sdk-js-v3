// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _D,
  _DMEJ,
  _DMEJR,
  _DMEJRe,
  _EI,
  _EIr,
  _EPs,
  _ET,
  _J,
  _JI,
  _KKA,
  _LMEJ,
  _LMEJR,
  _LMEJRi,
  _MEJ,
  _MRa,
  _NT,
  _OI,
  _RA,
  _S,
  _SBN,
  _SP,
  _SPa,
  _ST,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeMailboxExportJobRequest = struct(n0, _DMEJR, 0, [_JI, _OI], [0, 0]);
export var DescribeMailboxExportJobResponse = struct(
  n0,
  _DMEJRe,
  0,
  [_EI, _D, _RA, _KKA, _SBN, _SP, _SPa, _EPs, _S, _EIr, _ST, _ET],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 4, 4]
);
export var ListMailboxExportJobsRequest = struct(n0, _LMEJR, 0, [_OI, _NT, _MRa], [0, 0, 1]);
export var ListMailboxExportJobsResponse = struct(n0, _LMEJRi, 0, [_J, _NT], [() => Jobs, 0]);
export var MailboxExportJob = struct(
  n0,
  _MEJ,
  0,
  [_JI, _EI, _D, _SBN, _SPa, _EPs, _S, _ST, _ET],
  [0, 0, 0, 0, 0, 1, 0, 4, 4]
);
export var Jobs = list(n0, _J, 0, () => MailboxExportJob);
export var DescribeMailboxExportJob = op(
  n0,
  _DMEJ,
  2,
  () => DescribeMailboxExportJobRequest,
  () => DescribeMailboxExportJobResponse
);
export var ListMailboxExportJobs = op(
  n0,
  _LMEJ,
  2,
  () => ListMailboxExportJobsRequest,
  () => ListMailboxExportJobsResponse
);
