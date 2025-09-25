// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _CA,
  _CBMTC,
  _CBMTCR,
  _CM,
  _CMD,
  _EBO,
  _ECr,
  _ED,
  _EM,
  _Err,
  _GBMTC,
  _GBMTCO,
  _GBMTCR,
  _GBMTCRe,
  _h,
  _hH,
  _hP,
  _MTC,
  _MTCR,
  _S,
  _STD,
  _STDR,
  _TA,
  _TBA,
  _TN,
  _TNa,
  _xaebo,
  _xasca,
  _xN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateBucketMetadataTableConfigurationRequest = struct(
  n0,
  _CBMTCR,
  0,
  [_B, _CMD, _CA, _MTC, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _CM,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
    [
      () => MetadataTableConfiguration,
      {
        [_xN]: _MTC,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var ErrorDetails = struct(n0, _ED, 0, [_ECr, _EM], [0, 0]);
export var GetBucketMetadataTableConfigurationOutput = struct(
  n0,
  _GBMTCO,
  0,
  [_GBMTCR],
  [[() => GetBucketMetadataTableConfigurationResult, 16]]
);
export var GetBucketMetadataTableConfigurationRequest = struct(
  n0,
  _GBMTCRe,
  0,
  [_B, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var GetBucketMetadataTableConfigurationResult = struct(
  n0,
  _GBMTCR,
  0,
  [_MTCR, _S, _Err],
  [() => MetadataTableConfigurationResult, 0, () => ErrorDetails]
);
export var MetadataTableConfiguration = struct(n0, _MTC, 0, [_STD], [() => S3TablesDestination]);
export var MetadataTableConfigurationResult = struct(n0, _MTCR, 0, [_STDR], [() => S3TablesDestinationResult]);
export var S3TablesDestination = struct(n0, _STD, 0, [_TBA, _TNa], [0, 0]);
export var S3TablesDestinationResult = struct(n0, _STDR, 0, [_TBA, _TNa, _TA, _TN], [0, 0, 0, 0]);
export var CreateBucketMetadataTableConfiguration = op(
  n0,
  _CBMTC,
  {
    [_h]: ["POST", "/?metadataTable", 200],
  },
  () => CreateBucketMetadataTableConfigurationRequest,
  () => Unit
);
export var GetBucketMetadataTableConfiguration = op(
  n0,
  _GBMTC,
  {
    [_h]: ["GET", "/?metadataTable", 200],
  },
  () => GetBucketMetadataTableConfigurationRequest,
  () => GetBucketMetadataTableConfigurationOutput
);
