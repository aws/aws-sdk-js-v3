// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _a,
  _c,
  _cDT,
  _CE,
  _CMTJ,
  _CMTJR,
  _CMTJr,
  _CMTJRa,
  _CMTJRr,
  _CMTJRre,
  _d,
  _de,
  _e,
  _end,
  _h,
  _hE,
  _m,
  _mTJI,
  _p,
  _s,
  _so,
  _uDT,
  n0,
} from "./schemas_0";
import {
  DestinationConfiguration,
  MetadataTransferJobProgress,
  MetadataTransferJobStatus,
  SourceConfigurations,
} from "./schemas_6_MetadataTransfer";

/* eslint no-var: 0 */

export var CancelMetadataTransferJobRequest = struct(n0, _CMTJR, 0, [_mTJI], [[0, 1]]);
export var CancelMetadataTransferJobResponse = struct(
  n0,
  _CMTJRa,
  0,
  [_mTJI, _a, _uDT, _s, _p],
  [0, 0, 4, () => MetadataTransferJobStatus, () => MetadataTransferJobProgress]
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateMetadataTransferJobRequest = struct(
  n0,
  _CMTJRr,
  0,
  [_mTJI, _d, _so, _de],
  [0, 0, () => SourceConfigurations, () => DestinationConfiguration]
);
export var CreateMetadataTransferJobResponse = struct(
  n0,
  _CMTJRre,
  0,
  [_mTJI, _a, _cDT, _s],
  [0, 0, 4, () => MetadataTransferJobStatus]
);
export var CancelMetadataTransferJob = op(
  n0,
  _CMTJ,
  {
    [_h]: ["PUT", "/metadata-transfer-jobs/{metadataTransferJobId}/cancel", 200],
    [_end]: ["api."],
  },
  () => CancelMetadataTransferJobRequest,
  () => CancelMetadataTransferJobResponse
);
export var CreateMetadataTransferJob = op(
  n0,
  _CMTJr,
  {
    [_h]: ["POST", "/metadata-transfer-jobs", 200],
    [_end]: ["api."],
  },
  () => CreateMetadataTransferJobRequest,
  () => CreateMetadataTransferJobResponse
);
