// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _CDM,
  _CSop,
  _CSR,
  _CSRo,
  _CSRPSU,
  _DAZ,
  _De,
  _DOA,
  _DR,
  _dR,
  _DRe,
  _dRe,
  _Enc,
  _enc,
  _eQN,
  _KKI,
  _kKI,
  _PU,
  _pU,
  _SIn,
  _sIn,
  _SRo,
  _SSI,
  _T,
  _TS,
  _tS,
  _TSa,
  _xN,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CopySnapshotRequestPSU = sim(n0, _CSRPSU, 0, 8);
export var CopySnapshotRequest = struct(
  n0,
  _CSR,
  0,
  [_De, _DOA, _DRe, _Enc, _KKI, _PU, _SRo, _SSI, _TS, _CDM, _DAZ, _DR],
  [
    0,
    0,
    [
      0,
      {
        [_eQN]: `DestinationRegion`,
        [_xN]: _dRe,
      },
    ],
    [
      2,
      {
        [_eQN]: `Encrypted`,
        [_xN]: _enc,
      },
    ],
    [
      0,
      {
        [_eQN]: `KmsKeyId`,
        [_xN]: _kKI,
      },
    ],
    [
      () => CopySnapshotRequestPSU,
      {
        [_eQN]: `PresignedUrl`,
        [_xN]: _pU,
      },
    ],
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    1,
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var CopySnapshotResult = struct(
  n0,
  _CSRo,
  0,
  [_T, _SIn],
  [
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      0,
      {
        [_eQN]: `SnapshotId`,
        [_xN]: _sIn,
      },
    ],
  ]
);
export var CopySnapshot = op(
  n0,
  _CSop,
  0,
  () => CopySnapshotRequest,
  () => CopySnapshotResult
);
