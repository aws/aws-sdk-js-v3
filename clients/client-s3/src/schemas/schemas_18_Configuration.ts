// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _CA,
  _CBMC,
  _CBMCR,
  _CM,
  _CMD,
  _CSo,
  _DRes,
  _EBO,
  _EC,
  _Err,
  _GBMC,
  _GBMCO,
  _GBMCR,
  _GBMCRe,
  _h,
  _hH,
  _hP,
  _ITCn,
  _ITCR,
  _ITCU,
  _JTC,
  _JTCR,
  _KKA,
  _MC,
  _MCR,
  _MTEC,
  _REe,
  _SAs,
  _TA,
  _TBA,
  _TBT,
  _TN,
  _TNa,
  _TSa,
  _UBMITC,
  _UBMITCR,
  _xaebo,
  _xasca,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { ErrorDetails } from "./schemas_7_Configuration";
import { RecordExpiration } from "./schemas_37_Configuration";

/* eslint no-var: 0 */

export var CreateBucketMetadataConfigurationRequest = struct(
  n0,
  _CBMCR,
  0,
  [_B, _CMD, _CA, _MC, _EBO],
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
      () => MetadataConfiguration,
      {
        [_xN]: _MC,
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
export var DestinationResult = struct(n0, _DRes, 0, [_TBT, _TBA, _TN], [0, 0, 0]);
export var GetBucketMetadataConfigurationOutput = struct(
  n0,
  _GBMCO,
  0,
  [_GBMCR],
  [[() => GetBucketMetadataConfigurationResult, 16]]
);
export var GetBucketMetadataConfigurationRequest = struct(
  n0,
  _GBMCRe,
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
export var GetBucketMetadataConfigurationResult = struct(n0, _GBMCR, 0, [_MCR], [() => MetadataConfigurationResult]);
export var InventoryTableConfiguration = struct(
  n0,
  _ITCn,
  0,
  [_CSo, _EC],
  [0, () => MetadataTableEncryptionConfiguration]
);
export var InventoryTableConfigurationResult = struct(
  n0,
  _ITCR,
  0,
  [_CSo, _TSa, _Err, _TNa, _TA],
  [0, 0, () => ErrorDetails, 0, 0]
);
export var InventoryTableConfigurationUpdates = struct(
  n0,
  _ITCU,
  0,
  [_CSo, _EC],
  [0, () => MetadataTableEncryptionConfiguration]
);
export var JournalTableConfiguration = struct(
  n0,
  _JTC,
  0,
  [_REe, _EC],
  [() => RecordExpiration, () => MetadataTableEncryptionConfiguration]
);
export var JournalTableConfigurationResult = struct(
  n0,
  _JTCR,
  0,
  [_TSa, _Err, _TNa, _TA, _REe],
  [0, () => ErrorDetails, 0, 0, () => RecordExpiration]
);
export var MetadataConfiguration = struct(
  n0,
  _MC,
  0,
  [_JTC, _ITCn],
  [() => JournalTableConfiguration, () => InventoryTableConfiguration]
);
export var MetadataConfigurationResult = struct(
  n0,
  _MCR,
  0,
  [_DRes, _JTCR, _ITCR],
  [() => DestinationResult, () => JournalTableConfigurationResult, () => InventoryTableConfigurationResult]
);
export var MetadataTableEncryptionConfiguration = struct(n0, _MTEC, 0, [_SAs, _KKA], [0, 0]);
export var UpdateBucketMetadataInventoryTableConfigurationRequest = struct(
  n0,
  _UBMITCR,
  0,
  [_B, _CMD, _CA, _ITCn, _EBO],
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
      () => InventoryTableConfigurationUpdates,
      {
        [_xN]: _ITCn,
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
export var CreateBucketMetadataConfiguration = op(
  n0,
  _CBMC,
  {
    [_h]: ["POST", "/?metadataConfiguration", 200],
  },
  () => CreateBucketMetadataConfigurationRequest,
  () => Unit
);
export var GetBucketMetadataConfiguration = op(
  n0,
  _GBMC,
  {
    [_h]: ["GET", "/?metadataConfiguration", 200],
  },
  () => GetBucketMetadataConfigurationRequest,
  () => GetBucketMetadataConfigurationOutput
);
export var UpdateBucketMetadataInventoryTableConfiguration = op(
  n0,
  _UBMITC,
  {
    [_h]: ["PUT", "/?metadataInventoryTable", 200],
  },
  () => UpdateBucketMetadataInventoryTableConfigurationRequest,
  () => Unit
);
