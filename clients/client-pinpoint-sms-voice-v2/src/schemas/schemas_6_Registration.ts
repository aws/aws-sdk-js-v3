// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AS,
  _AUER,
  _CTr,
  _DRA,
  _DRAe,
  _DRAR,
  _DRARe,
  _DRARes,
  _DRAResc,
  _F,
  _MR,
  _N,
  _NT,
  _RAA,
  _RAeg,
  _RAFe,
  _RAFLe,
  _RAI,
  _RAIe,
  _RAIeg,
  _RAIL,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRegistrationAttachmentRequest = struct(n0, _DRAR, 0, [_RAI], [0]);
export var DeleteRegistrationAttachmentResult = struct(n0, _DRARe, 0, [_RAA, _RAI, _AS, _AUER, _CTr], [0, 0, 0, 0, 4]);
export var DescribeRegistrationAttachmentsRequest = struct(
  n0,
  _DRARes,
  0,
  [_RAIe, _F, _NT, _MR],
  [64 | 0, () => RegistrationAttachmentFilterList, 0, 1]
);
export var DescribeRegistrationAttachmentsResult = struct(
  n0,
  _DRAResc,
  0,
  [_RAeg, _NT],
  [() => RegistrationAttachmentsInformationList, 0]
);
export var RegistrationAttachmentFilter = struct(n0, _RAFe, 0, [_N, _Va], [0, 64 | 0]);
export var RegistrationAttachmentsInformation = struct(n0, _RAIeg, 0, [_RAA, _RAI, _AS, _AUER, _CTr], [0, 0, 0, 0, 4]);
export var RegistrationAttachmentFilterList = list(n0, _RAFLe, 0, () => RegistrationAttachmentFilter);
export var RegistrationAttachmentIdList = 64 | 0;

export var RegistrationAttachmentsInformationList = list(n0, _RAIL, 0, () => RegistrationAttachmentsInformation);
export var DeleteRegistrationAttachment = op(
  n0,
  _DRA,
  0,
  () => DeleteRegistrationAttachmentRequest,
  () => DeleteRegistrationAttachmentResult
);
export var DescribeRegistrationAttachments = op(
  n0,
  _DRAe,
  0,
  () => DescribeRegistrationAttachmentsRequest,
  () => DescribeRegistrationAttachmentsResult
);
