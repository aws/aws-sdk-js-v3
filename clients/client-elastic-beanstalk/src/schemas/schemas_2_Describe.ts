// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AN,
  _At,
  _AVDL,
  _AVDMp,
  _AVp,
  _BN,
  _BO,
  _DAVe,
  _DAVMe,
  _DEe,
  _DEMe,
  _EDLv,
  _EDMv,
  _EDv,
  _EDve,
  _EI,
  _EN,
  _ET,
  _Ev,
  _F,
  _LPB,
  _LPBR,
  _LPBRi,
  _LS,
  _Me,
  _MR,
  _NT,
  _Op,
  _PA,
  _PBS,
  _PBSL,
  _PN,
  _RI,
  _Se,
  _SF,
  _SFe,
  _ST,
  _STL,
  _TN,
  _Val,
  _VL,
  _VLe,
  n0,
} from "./schemas_0";
import { ApplicationVersionDescription } from "./schemas_9_Version";

/* eslint no-var: 0 */

export var ApplicationVersionDescriptionsMessage = struct(
  n0,
  _AVDMp,
  0,
  [_AVp, _NT],
  [() => ApplicationVersionDescriptionList, 0]
);
export var DescribeApplicationVersionsMessage = struct(n0, _DAVMe, 0, [_AN, _VLe, _MR, _NT], [0, 64 | 0, 1, 0]);
export var DescribeEventsMessage = struct(
  n0,
  _DEMe,
  0,
  [_AN, _VL, _TN, _EI, _EN, _PA, _RI, _Se, _ST, _ET, _MR, _NT],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0]
);
export var EventDescription = struct(
  n0,
  _EDv,
  0,
  [_EDve, _Me, _AN, _VL, _TN, _EN, _PA, _RI, _Se],
  [4, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var EventDescriptionsMessage = struct(n0, _EDMv, 0, [_Ev, _NT], [() => EventDescriptionList, 0]);
export var ListPlatformBranchesRequest = struct(n0, _LPBR, 0, [_F, _MR, _NT], [() => SearchFilters, 1, 0]);
export var ListPlatformBranchesResult = struct(n0, _LPBRi, 0, [_PBSL, _NT], [() => PlatformBranchSummaryList, 0]);
export var PlatformBranchSummary = struct(n0, _PBS, 0, [_PN, _BN, _LS, _BO, _STL], [0, 0, 0, 1, 64 | 0]);
export var SearchFilter = struct(n0, _SF, 0, [_At, _Op, _Val], [0, 0, 64 | 0]);
export var ApplicationVersionDescriptionList = list(n0, _AVDL, 0, () => ApplicationVersionDescription);
export var EventDescriptionList = list(n0, _EDLv, 0, () => EventDescription);
export var PlatformBranchSummaryList = list(n0, _PBSL, 0, () => PlatformBranchSummary);
export var SearchFilters = list(n0, _SFe, 0, () => SearchFilter);
export var SearchFilterValues = 64 | 0;

export var DescribeApplicationVersions = op(
  n0,
  _DAVe,
  0,
  () => DescribeApplicationVersionsMessage,
  () => ApplicationVersionDescriptionsMessage
);
export var DescribeEvents = op(
  n0,
  _DEe,
  0,
  () => DescribeEventsMessage,
  () => EventDescriptionsMessage
);
export var ListPlatformBranches = op(
  n0,
  _LPB,
  0,
  () => ListPlatformBranchesRequest,
  () => ListPlatformBranchesResult
);
