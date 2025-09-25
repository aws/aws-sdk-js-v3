// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ResourceScanInProgressException as __ResourceScanInProgressException,
  ResourceScanLimitExceededException as __ResourceScanLimitExceededException,
  ResourceScanNotFoundException as __ResourceScanNotFoundException,
} from "../models/index";
import {
  _aQE,
  _c,
  _CRT,
  _e,
  _ET,
  _hE,
  _LRS,
  _LRSI,
  _LRSO,
  _LRSRR,
  _LRSRRI,
  _LRSRRO,
  _M,
  _MBS,
  _MR,
  _NT,
  _PC,
  _R,
  _RI,
  _RRel,
  _RSI,
  _RSIPE,
  _RSLEE,
  _RSNFE,
  _RSS,
  _RSSe,
  _RT,
  _S,
  _SF,
  _SFc,
  _SR,
  _SRc,
  _SRIc,
  _SRIca,
  _SRSI,
  _SRSO,
  _SRStar,
  _ST,
  _STc,
  _STF,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListResourceScanRelatedResourcesInput = struct(
  n0,
  _LRSRRI,
  0,
  [_RSI, _R, _NT, _MR],
  [0, () => ScannedResourceIdentifiers, 0, 1]
);
export var ListResourceScanRelatedResourcesOutput = struct(n0, _LRSRRO, 0, [_RRel, _NT], [() => RelatedResources, 0]);
export var ListResourceScansInput = struct(n0, _LRSI, 0, [_NT, _MR, _STF], [0, 1, 0]);
export var ListResourceScansOutput = struct(n0, _LRSO, 0, [_RSS, _NT], [() => ResourceScanSummaries, 0]);
export var ResourceScanInProgressException = error(
  n0,
  _RSIPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourceScanInProgress`, 400],
  },
  [_M],
  [0],

  __ResourceScanInProgressException
);
export var ResourceScanLimitExceededException = error(
  n0,
  _RSLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourceScanLimitExceeded`, 400],
  },
  [_M],
  [0],

  __ResourceScanLimitExceededException
);
export var ResourceScanNotFoundException = error(
  n0,
  _RSNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourceScanNotFound`, 400],
  },
  [_M],
  [0],

  __ResourceScanNotFoundException
);
export var ResourceScanSummary = struct(n0, _RSSe, 0, [_RSI, _S, _SR, _ST, _ET, _PC, _STc], [0, 0, 0, 4, 4, 1, 0]);
export var ScanFilter = struct(n0, _SFc, 0, [_Ty], [64 | 0]);
export var ScannedResource = struct(n0, _SRc, 0, [_RT, _RI, _MBS], [0, 128 | 0, 2]);
export var ScannedResourceIdentifier = struct(n0, _SRIc, 0, [_RT, _RI], [0, 128 | 0]);
export var StartResourceScanInput = struct(n0, _SRSI, 0, [_CRT, _SF], [0, () => ScanFilters]);
export var StartResourceScanOutput = struct(n0, _SRSO, 0, [_RSI], [0]);
export var RelatedResources = list(n0, _RRel, 0, () => ScannedResource);
export var ResourceScanSummaries = list(n0, _RSS, 0, () => ResourceScanSummary);
export var ResourceTypeFilters = 64 | 0;

export var ScanFilters = list(n0, _SF, 0, () => ScanFilter);
export var ScannedResourceIdentifiers = list(n0, _SRIca, 0, () => ScannedResourceIdentifier);
export var JazzResourceIdentifierProperties = 128 | 0;

export var ListResourceScanRelatedResources = op(
  n0,
  _LRSRR,
  0,
  () => ListResourceScanRelatedResourcesInput,
  () => ListResourceScanRelatedResourcesOutput
);
export var ListResourceScans = op(
  n0,
  _LRS,
  0,
  () => ListResourceScansInput,
  () => ListResourceScansOutput
);
export var StartResourceScan = op(
  n0,
  _SRStar,
  0,
  () => StartResourceScanInput,
  () => StartResourceScanOutput
);
